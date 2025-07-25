# Script per recupero accesso SiteGround
# Apre automaticamente le pagine necessarie per recuperare l'accesso

Write-Host "=== RECUPERO ACCESSO SITEGROUND ===" -ForegroundColor Green
Write-Host ""

Write-Host "Il tuo dominio edilgamal.it è gestito da SITEGROUND" -ForegroundColor Cyan
Write-Host "Nameservers: ns1.siteground.net, ns2.siteground.net" -ForegroundColor Yellow
Write-Host ""

Write-Host "Apro le pagine per recuperare l'accesso..." -ForegroundColor Green

# Apre la pagina di login SiteGround
Write-Host "1. Apertura pagina login SiteGround..." -ForegroundColor Yellow
Start-Process "https://www.siteground.com/login"

Start-Sleep -Seconds 2

# Apre la pagina di recupero password
Write-Host "2. Apertura pagina recupero password..." -ForegroundColor Yellow
Start-Process "https://www.siteground.com/login/forgot-password"

Start-Sleep -Seconds 2

# Apre la pagina di supporto
Write-Host "3. Apertura pagina supporto SiteGround..." -ForegroundColor Yellow
Start-Process "https://www.siteground.com/support"

Write-Host ""
Write-Host "=== OPZIONI DI RECUPERO ===" -ForegroundColor Green
Write-Host ""
Write-Host "OPZIONE 1 - Recupero Password:" -ForegroundColor Cyan
Write-Host "- Usa la pagina 'Forgot Password' appena aperta"
Write-Host "- Inserisci l'email associata al dominio"
Write-Host ""
Write-Host "OPZIONE 2 - Supporto Live Chat:" -ForegroundColor Cyan
Write-Host "- Usa la chat live su siteground.com (24/7)"
Write-Host "- Telefono Italia: +39 02 8088 8141"
Write-Host ""
Write-Host "OPZIONE 3 - Cerca nelle Email:" -ForegroundColor Cyan
Write-Host "- Cerca 'SiteGround' nelle tue email"
Write-Host "- Cerca 'edilgamal.it' nelle tue email"
Write-Host ""
Write-Host "=== DOPO IL RECUPERO ===" -ForegroundColor Green
Write-Host "Una volta recuperato l'accesso:" -ForegroundColor Yellow
Write-Host "1. Login su my.siteground.com"
Write-Host "2. Vai su Websites → Manage"
Write-Host "3. Cerca 'DNS Zone Editor'"
Write-Host "4. Configura i record DNS come indicato nel file CONFIGURAZIONE-DNS-FINALE.md"
Write-Host ""
Write-Host "Script completato!" -ForegroundColor Green