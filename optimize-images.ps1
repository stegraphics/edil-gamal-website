# Script di Ottimizzazione Immagini EDIL GAMAL
Write-Host "=== OTTIMIZZAZIONE IMMAGINI EDIL GAMAL ===" -ForegroundColor Green
Write-Host ""

# Lista delle immagini da ottimizzare
$images = @(
    "persona-vicino-un-impianto-di-energia-alternativa.jpg",
    "operai alto.jpg", 
    "lavoro-casco.jpg",
    "full-shot-people-carrying-placard-together.jpg",
    "scenery-designers-work.jpg",
    "pavimento-piastrellato-uomo-vista-dall-alto.jpg",
    "mani-di-uomini-d-affari-sul-tavolo-bianco-con-documenti-e-bozze.jpg",
    "lavoro-serale.jpg",
    "crop-architect-opening-blueprint.jpg",
    "service-man-instelling-house-heating-system-floor.jpg"
)

# Creo cartella optimized
$optimizedDir = "public\optimized"
if (!(Test-Path $optimizedDir)) {
    New-Item -ItemType Directory -Path $optimizedDir -Force
    Write-Host "Creata cartella: $optimizedDir" -ForegroundColor Yellow
}

Write-Host "Immagini da ottimizzare:" -ForegroundColor Cyan
Write-Host ""

foreach ($image in $images) {
    $imagePath = "public\$image"
    if (Test-Path $imagePath) {
        $fileInfo = Get-Item $imagePath
        $sizeKB = [math]::Round($fileInfo.Length / 1KB, 2)
        $sizeMB = [math]::Round($fileInfo.Length / 1MB, 2)
        
        Write-Host "Immagine: $image" -ForegroundColor White
        Write-Host "Dimensione: $sizeKB KB ($sizeMB MB)" -ForegroundColor Red
        Write-Host "Obiettivo: meno di 500 KB" -ForegroundColor Green
        Write-Host ""
    }
}

Write-Host "=== ISTRUZIONI ===" -ForegroundColor Yellow
Write-Host "1. Apri https://tinypng.com" -ForegroundColor Cyan
Write-Host "2. Trascina le immagini dalla cartella public" -ForegroundColor Cyan
Write-Host "3. Scarica le immagini ottimizzate" -ForegroundColor Cyan
Write-Host "4. Salvale nella cartella public\optimized" -ForegroundColor Cyan
Write-Host "5. Esegui: .\replace-images.ps1" -ForegroundColor Cyan
Write-Host ""

# Apro TinyPNG
Write-Host "Apertura TinyPNG..." -ForegroundColor Green
Start-Process "https://tinypng.com"

Write-Host "Script completato!" -ForegroundColor Green