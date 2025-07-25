# Script di verifica DNS per www.edilgamal.it
# Questo script verifica lo stato attuale dei DNS e fornisce le informazioni per la configurazione

Write-Host "=== VERIFICA DNS PER www.edilgamal.it ===" -ForegroundColor Green
Write-Host ""

# Verifica DNS attuale
Write-Host "1. DNS ATTUALI:" -ForegroundColor Yellow
Write-Host "Verifico i DNS attuali di www.edilgamal.it..."
try {
    $currentDNS = nslookup www.edilgamal.it 2>$null
    Write-Host $currentDNS
} catch {
    Write-Host "Errore nella verifica DNS" -ForegroundColor Red
}

Write-Host ""
Write-Host "2. DNS ATTUALI DI edilgamal.it:" -ForegroundColor Yellow
try {
    $currentDNSRoot = nslookup edilgamal.it 2>$null
    Write-Host $currentDNSRoot
} catch {
    Write-Host "Errore nella verifica DNS" -ForegroundColor Red
}

Write-Host ""
Write-Host "=== CONFIGURAZIONE DNS RICHIESTA ===" -ForegroundColor Green
Write-Host ""
Write-Host "Per far funzionare www.edilgamal.it con Vercel, configura questi DNS:" -ForegroundColor Cyan
Write-Host ""
Write-Host "RECORD CNAME:" -ForegroundColor Yellow
Write-Host "Nome: www"
Write-Host "Valore: cname.vercel-dns.com"
Write-Host "TTL: 3600 (o automatico)"
Write-Host ""
Write-Host "RECORD A:" -ForegroundColor Yellow
Write-Host "Nome: @ (o edilgamal.it)"
Write-Host "Valore: 76.76.19.61"
Write-Host "TTL: 3600 (o automatico)"
Write-Host ""

Write-Host "=== VERIFICA VERCEL ===" -ForegroundColor Green
Write-Host "Verifico lo stato del deployment Vercel..."

# Verifica se Vercel CLI è disponibile
if (Get-Command "npx" -ErrorAction SilentlyContinue) {
    Write-Host "Eseguo verifica Vercel..." -ForegroundColor Cyan
    npx vercel inspect https://edil-gamal-website-2x7gphqq3-stefanos-projects-8861b010.vercel.app
} else {
    Write-Host "Vercel CLI non disponibile" -ForegroundColor Red
}

Write-Host ""
Write-Host "=== URL ALTERNATIVI FUNZIONANTI ===" -ForegroundColor Green
Write-Host "Mentre aspetti la propagazione DNS, puoi usare:" -ForegroundColor Cyan
Write-Host "- https://edil-gamal-website.vercel.app"
Write-Host "- https://edil-gamal-website-stefanos-projects-8861b010.vercel.app"
Write-Host ""
Write-Host "Script completato!" -ForegroundColor Green