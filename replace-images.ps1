# Script per sostituire le immagini originali con quelle ottimizzate

Write-Host "=== SOSTITUZIONE IMMAGINI OTTIMIZZATE ===" -ForegroundColor Green
Write-Host ""

$optimizedDir = "public\optimized"
$publicDir = "public"
$backupDir = "public\backup-originali"

# Creo cartella di backup per le immagini originali
if (!(Test-Path $backupDir)) {
    New-Item -ItemType Directory -Path $backupDir -Force
    Write-Host "Creata cartella di backup: $backupDir" -ForegroundColor Yellow
}

# Verifico se esistono immagini ottimizzate
if (!(Test-Path $optimizedDir)) {
    Write-Host "ERRORE: Cartella 'optimized' non trovata!" -ForegroundColor Red
    Write-Host "Prima esegui lo script optimize-images.ps1 e ottimizza le immagini." -ForegroundColor Red
    exit 1
}

$optimizedImages = Get-ChildItem -Path $optimizedDir -File
if ($optimizedImages.Count -eq 0) {
    Write-Host "ERRORE: Nessuna immagine ottimizzata trovata nella cartella 'optimized'!" -ForegroundColor Red
    Write-Host "Scarica le immagini ottimizzate da TinyPNG nella cartella 'public\optimized'." -ForegroundColor Red
    exit 1
}

Write-Host "Immagini ottimizzate trovate: $($optimizedImages.Count)" -ForegroundColor Cyan
Write-Host ""

$totalSavings = 0
$processedCount = 0

foreach ($optimizedImage in $optimizedImages) {
    $originalPath = Join-Path $publicDir $optimizedImage.Name
    $optimizedPath = $optimizedImage.FullName
    $backupPath = Join-Path $backupDir $optimizedImage.Name
    
    if (Test-Path $originalPath) {
        # Calcolo il risparmio di spazio
        $originalSize = (Get-Item $originalPath).Length
        $optimizedSize = (Get-Item $optimizedPath).Length
        $savings = $originalSize - $optimizedSize
        $savingsPercent = [math]::Round(($savings / $originalSize) * 100, 1)
        $totalSavings += $savings
        
        # Backup dell'immagine originale
        Copy-Item $originalPath $backupPath -Force
        
        # Sostituzione con l'immagine ottimizzata
        Copy-Item $optimizedPath $originalPath -Force
        
        Write-Host "✅ $($optimizedImage.Name)" -ForegroundColor Green
        Write-Host "   Originale: $([math]::Round($originalSize / 1MB, 2)) MB" -ForegroundColor Red
        Write-Host "   Ottimizzata: $([math]::Round($optimizedSize / 1MB, 2)) MB" -ForegroundColor Green
        Write-Host "   Risparmio: $([math]::Round($savings / 1MB, 2)) MB ($savingsPercent%)" -ForegroundColor Yellow
        Write-Host ""
        
        $processedCount++
    } else {
        Write-Host "⚠️  $($optimizedImage.Name) - File originale non trovato" -ForegroundColor Yellow
    }
}

Write-Host "=== RIEPILOGO OTTIMIZZAZIONE ===" -ForegroundColor Green
Write-Host "Immagini processate: $processedCount" -ForegroundColor Cyan
Write-Host "Risparmio totale: $([math]::Round($totalSavings / 1MB, 2)) MB" -ForegroundColor Green
Write-Host "Backup salvato in: $backupDir" -ForegroundColor Yellow
Write-Host ""

if ($processedCount -gt 0) {
    Write-Host "🎉 Ottimizzazione completata con successo!" -ForegroundColor Green
    Write-Host ""
    Write-Host "PROSSIMI PASSI:" -ForegroundColor Magenta
    Write-Host "1. Testa il sito localmente: npm run dev" -ForegroundColor Cyan
    Write-Host "2. Se tutto funziona, committa le modifiche:" -ForegroundColor Cyan
    Write-Host "   git add ." -ForegroundColor White
    Write-Host "   git commit -m 'Ottimizzazione immagini per migliorare performance'" -ForegroundColor White
    Write-Host "   git push origin main" -ForegroundColor White
    Write-Host ""
    Write-Host "3. Puoi eliminare la cartella 'optimized' dopo il commit" -ForegroundColor Cyan
} else {
    Write-Host "❌ Nessuna immagine è stata processata." -ForegroundColor Red
}