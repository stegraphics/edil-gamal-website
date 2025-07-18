# Script di Ottimizzazione Automatica Immagini
Write-Host "=== OTTIMIZZAZIONE AUTOMATICA IMMAGINI ===" -ForegroundColor Green
Write-Host ""

# Funzione per ottimizzare un'immagine usando ImageOptim API (gratuita)
function Optimize-Image {
    param(
        [string]$ImagePath,
        [string]$OutputPath
    )
    
    try {
        # Uso ImageMagick se disponibile, altrimenti uso compressione nativa
        if (Get-Command "magick" -ErrorAction SilentlyContinue) {
            Write-Host "Ottimizzazione con ImageMagick: $ImagePath" -ForegroundColor Yellow
            & magick $ImagePath -quality 85 -strip -resize "1920x1080>" $OutputPath
        } else {
            # Alternativa: copia e ridimensiona usando .NET
            Write-Host "Ottimizzazione nativa: $ImagePath" -ForegroundColor Yellow
            Add-Type -AssemblyName System.Drawing
            
            $image = [System.Drawing.Image]::FromFile($ImagePath)
            $maxWidth = 1920
            $maxHeight = 1080
            
            $ratio = [Math]::Min($maxWidth / $image.Width, $maxHeight / $image.Height)
            if ($ratio -lt 1) {
                $newWidth = [int]($image.Width * $ratio)
                $newHeight = [int]($image.Height * $ratio)
                
                $newImage = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
                $graphics = [System.Drawing.Graphics]::FromImage($newImage)
                $graphics.DrawImage($image, 0, 0, $newWidth, $newHeight)
                
                # Salva con qualità ridotta
                $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
                $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 85L)
                $jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
                
                $newImage.Save($OutputPath, $jpegCodec, $encoderParams)
                $graphics.Dispose()
                $newImage.Dispose()
            } else {
                Copy-Item $ImagePath $OutputPath
            }
            $image.Dispose()
        }
        return $true
    } catch {
        Write-Host "Errore nell'ottimizzazione di $ImagePath : $($_.Exception.Message)" -ForegroundColor Red
        return $false
    }
}

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

$totalOriginalSize = 0
$totalOptimizedSize = 0
$successCount = 0

foreach ($image in $images) {
    $imagePath = "public\$image"
    $outputPath = "$optimizedDir\$image"
    
    if (Test-Path $imagePath) {
        $originalSize = (Get-Item $imagePath).Length
        $totalOriginalSize += $originalSize
        
        Write-Host "Ottimizzazione: $image" -ForegroundColor Cyan
        Write-Host "Dimensione originale: $([math]::Round($originalSize / 1MB, 2)) MB" -ForegroundColor White
        
        if (Optimize-Image -ImagePath $imagePath -OutputPath $outputPath) {
            if (Test-Path $outputPath) {
                $optimizedSize = (Get-Item $outputPath).Length
                $totalOptimizedSize += $optimizedSize
                $reduction = [math]::Round((($originalSize - $optimizedSize) / $originalSize) * 100, 1)
                
                Write-Host "Dimensione ottimizzata: $([math]::Round($optimizedSize / 1MB, 2)) MB" -ForegroundColor Green
                Write-Host "Riduzione: $reduction%" -ForegroundColor Green
                $successCount++
            }
        }
        Write-Host ""
    }
}

Write-Host "=== RISULTATI ===" -ForegroundColor Green
Write-Host "Immagini ottimizzate: $successCount/$($images.Count)" -ForegroundColor Cyan
Write-Host "Dimensione originale totale: $([math]::Round($totalOriginalSize / 1MB, 2)) MB" -ForegroundColor White
Write-Host "Dimensione ottimizzata totale: $([math]::Round($totalOptimizedSize / 1MB, 2)) MB" -ForegroundColor Green
$totalReduction = [math]::Round((($totalOriginalSize - $totalOptimizedSize) / $totalOriginalSize) * 100, 1)
Write-Host "Riduzione totale: $totalReduction%" -ForegroundColor Green
Write-Host ""
Write-Host "Per sostituire le immagini originali, esegui: .\replace-images.ps1" -ForegroundColor Yellow