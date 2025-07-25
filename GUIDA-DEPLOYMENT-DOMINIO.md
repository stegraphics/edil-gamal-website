# Guida al Deployment del Sito EDIL GAMAL con Dominio Personalizzato

Questa guida ti aiuterà a pubblicare il sito web EDIL GAMAL utilizzando il dominio esistente www.edilgamal.it.

## Prerequisiti

- Account GitHub (già configurato)
- Account Vercel
- Accesso al pannello di controllo del dominio edilgamal.it
- Configurazione EmailJS completata (seguire GUIDA-CONFIGURAZIONE-EMAILJS.md)

## Passo 1: Preparazione del progetto per il deployment

### 1.1 Verifica che EmailJS sia configurato

Prima del deployment, assicurati di aver configurato correttamente EmailJS:

1. Completa la configurazione seguendo `GUIDA-CONFIGURAZIONE-EMAILJS.md`
2. Testa il form di contatto localmente per verificare che funzioni
3. Le variabili d'ambiente nel file `.env` devono essere configurate su Vercel

### 1.2 Build di test locale

Esegui una build di test per verificare che tutto funzioni:

```bash
npm run build
npm run preview
```

## Passo 2: Configurazione su Vercel

### 2.1 Accesso a Vercel

1. Vai su [https://vercel.com/login](https://vercel.com/login)
2. Accedi con il tuo account (preferibilmente collegato a GitHub)

### 2.2 Importazione del progetto

1. Clicca su "Add New..." → "Project"
2. Seleziona il repository GitHub "edil-gamal-website"
3. Configura il progetto:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### 2.3 Configurazione delle variabili d'ambiente

Prima di fare il deploy, configura le variabili d'ambiente su Vercel:

1. Vai su "Settings" → "Environment Variables"
2. Aggiungi le seguenti variabili:
   - `VITE_EMAILJS_PUBLIC_KEY`: [la tua public key di EmailJS]
   - `VITE_EMAILJS_SERVICE_ID`: [il tuo service ID di EmailJS]
   - `VITE_EMAILJS_TEMPLATE_ID`: [il tuo template ID di EmailJS]

### 2.4 Deploy iniziale

1. Clicca su "Deploy"
2. Attendi che il deployment sia completato
3. Verifica che il sito funzioni correttamente sull'URL temporaneo di Vercel

## Passo 3: Configurazione del dominio personalizzato

### 3.1 Aggiunta del dominio su Vercel

1. Nel dashboard del progetto su Vercel, vai su "Settings" → "Domains"
2. Clicca su "Add Domain"
3. Inserisci `www.edilgamal.it`
4. Vercel ti fornirà i record DNS da configurare

### 3.2 Configurazione DNS

Nel pannello di controllo del tuo provider di dominio (dove è registrato edilgamal.it):

1. Aggiungi un record CNAME:
   - **Nome**: `www`
   - **Valore**: `cname.vercel-dns.com`
   - **TTL**: 3600 (o il valore predefinito)

2. Se vuoi che anche `edilgamal.it` (senza www) reindirizzi al sito:
   - Aggiungi un record A:
   - **Nome**: `@` (o lascia vuoto)
   - **Valore**: `76.76.19.61` (IP di Vercel)
   - **TTL**: 3600

### 3.3 Verifica della configurazione

1. Attendi la propagazione DNS (può richiedere fino a 24 ore, ma spesso è più veloce)
2. Verifica che `www.edilgamal.it` punti al tuo sito
3. Testa tutte le funzionalità, incluso il form di contatto

## Passo 4: Configurazione automatica dei deployment

### 4.1 Deployment automatico

Vercel è già configurato per il deployment automatico:
- Ogni push al branch `main` su GitHub attiverà automaticamente un nuovo deployment
- Puoi vedere lo stato dei deployment nella dashboard di Vercel

### 4.2 Branch di produzione

Assicurati che il branch di produzione sia impostato su `main`:
1. Vai su "Settings" → "Git"
2. Verifica che "Production Branch" sia impostato su `main`

## Passo 5: Test finale

### 5.1 Test completo del sito

1. Visita `www.edilgamal.it`
2. Naviga attraverso tutte le pagine
3. Testa il form di contatto inviando un messaggio di prova
4. Verifica che l'email arrivi a `info@edilgamal.it`
5. Testa la responsività su dispositivi mobili

### 5.2 Monitoraggio

1. Configura le notifiche di deployment su Vercel
2. Monitora i log per eventuali errori
3. Verifica periodicamente che il form di contatto funzioni

## Risoluzione dei problemi comuni

### Problema: Il dominio non punta al sito

**Soluzione**: 
- Verifica la configurazione DNS
- Attendi la propagazione (fino a 24 ore)
- Usa strumenti come `nslookup` o `dig` per verificare i record DNS

### Problema: Il form di contatto non funziona

**Soluzione**:
- Verifica che le variabili d'ambiente siano configurate su Vercel
- Controlla i log del browser per errori JavaScript
- Testa la configurazione EmailJS

### Problema: Errori di build

**Soluzione**:
- Controlla i log di build su Vercel
- Verifica che `npm run build` funzioni localmente
- Assicurati che tutte le dipendenze siano nel `package.json`

## Comandi utili per aggiornamenti futuri

```bash
# Per aggiornare il sito
git add .
git commit -m "Descrizione delle modifiche"
git push origin main

# Per testare localmente prima del deployment
npm run build
npm run preview
```

## Note importanti

- Il file `.env` non viene caricato su GitHub (è nel .gitignore)
- Le variabili d'ambiente devono essere configurate separatamente su Vercel
- Ogni push al branch main attiverà automaticamente un nuovo deployment
- I deployment sono gratuiti su Vercel per progetti personali/commerciali piccoli

## Supporto

Per problemi tecnici:
- Documentazione Vercel: https://vercel.com/docs
- Supporto EmailJS: https://www.emailjs.com/docs/
- Repository GitHub: https://github.com/stegraphics/edil-gamal-website