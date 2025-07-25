# CONFIGURAZIONE DNS PER www.edilgamal.it
# Data: 25 Luglio 2025
# Stato: PRONTO PER CONFIGURAZIONE DNS
# Provider: SITEGROUND

## 🎯 SITUAZIONE ATTUALE
✅ Sito deployato su Vercel con successo
✅ Domini www.edilgamal.it e edilgamal.it collegati al progetto
✅ Provider identificato: **SITEGROUND**
⚠️ DNS ancora puntano al vecchio hosting (da qui la pagina di manutenzione)

## 🔑 RECUPERO ACCESSO SITEGROUND

### OPZIONE 1: Recupero Password
1. Vai su: **https://www.siteground.com**
2. Clicca su "Login" in alto a destra
3. Clicca su "Forgot your password?"
4. Inserisci l'email associata al dominio edilgamal.it
5. Controlla la tua email per il link di reset

### OPZIONE 2: Contatta il Supporto SiteGround
- **Chat Live**: Disponibile 24/7 su siteground.com
- **Telefono**: +39 02 8088 8141 (Italia)
- **Email**: support@siteground.com
- **Documenti necessari**: Prova di proprietà del dominio

### OPZIONE 3: Cerca nelle Email
Cerca nelle tue email parole chiave:
- "SiteGround"
- "edilgamal.it"
- "domain registration"
- "hosting account"

## 🔧 CONFIGURAZIONE DNS RICHIESTA

### RECORD DA CONFIGURARE IN SITEGROUND:

**1. RECORD CNAME per www.edilgamal.it:**
```
Tipo: CNAME
Nome: www
Valore: cname.vercel-dns.com
TTL: 3600 (o lascia automatico)
```

**2. RECORD A per edilgamal.it:**
```
Tipo: A
Nome: @ (oppure edilgamal.it o root)
Valore: 76.76.19.61
TTL: 3600 (o lascia automatico)
```

## 📍 DOVE CONFIGURARE IN SITEGROUND
Una volta recuperato l'accesso:
1. Login su **https://my.siteground.com**
2. Vai su "Websites" → "Manage"
3. Cerca "DNS Zone Editor" o "Domain DNS"
4. Seleziona il dominio `edilgamal.it`
5. Modifica/Aggiungi i record sopra indicati

## ⏱️ TEMPI
- Propagazione DNS: 1-48 ore (solitamente 2-6 ore)
- Il sito sarà accessibile su www.edilgamal.it dopo la propagazione

## 🌐 URL FUNZIONANTI SUBITO
Mentre aspetti la propagazione DNS, il sito è già accessibile su:
- https://edil-gamal-website.vercel.app
- https://edil-gamal-website-stefanos-projects-8861b010.vercel.app

## ✅ VERIFICA COMPLETAMENTO
Dopo aver configurato i DNS, verifica su: https://www.edilgamal.it
Se vedi ancora la pagina di manutenzione, aspetta qualche ora per la propagazione.

## 🚀 DEPLOYMENT AUTOMATICO ATTIVO
Ogni push su GitHub aggiornerà automaticamente il sito su tutti gli URL!