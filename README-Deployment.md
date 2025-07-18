# Istruzioni per il Deployment su Vercel

Questo documento fornisce istruzioni su come aggiornare il sito web EDIL GAMAL su GitHub e Vercel.

## Prerequisiti

- Un account GitHub
- Un account Vercel collegato al tuo account GitHub
- Git installato sul tuo computer

## Aggiornamento del repository GitHub

1. Apri il terminale (PowerShell su Windows)

2. Naviga alla directory del progetto:
   ```
   cd "C:\Users\schif\OneDrive\Desktop\EDIL GAMAL"
   ```

3. Aggiungi tutti i file modificati al prossimo commit:
   ```
   git add .
   ```

4. Crea un commit con un messaggio descrittivo:
   ```
   git commit -m "Aggiornamento del form di contatto con EmailJS"
   ```

5. Invia le modifiche al repository remoto su GitHub:
   ```
   git push origin main
   ```
   (Sostituisci `main` con il nome del tuo branch principale se diverso)

## Deployment su Vercel

### Se il progetto è già configurato su Vercel

Se hai già configurato il progetto su Vercel e hai abilitato i deployment automatici, Vercel rileverà automaticamente i nuovi commit su GitHub e avvierà un nuovo deployment. Non è necessaria alcuna azione aggiuntiva.

Per verificare lo stato del deployment:

1. Accedi al tuo account Vercel
2. Seleziona il progetto EDIL GAMAL
3. Vai alla scheda "Deployments" per vedere lo stato dell'ultimo deployment

### Se il progetto non è ancora configurato su Vercel

1. Accedi al tuo account Vercel: [https://vercel.com/login](https://vercel.com/login)

2. Dopo l'accesso, clicca su "Add New..." e seleziona "Project"

3. Importa il repository GitHub del progetto EDIL GAMAL

4. Configura il progetto:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

5. Clicca su "Deploy"

## Configurazione del dominio personalizzato (se necessario)

Se desideri utilizzare un dominio personalizzato (es. edilgamal.it):

1. Nella dashboard di Vercel, seleziona il tuo progetto
2. Vai alla scheda "Settings" > "Domains"
3. Aggiungi il tuo dominio e segui le istruzioni per configurare i record DNS

## Dopo il deployment

Dopo aver completato il deployment, assicurati di:

1. Verificare che il sito funzioni correttamente
2. Testare il form di contatto per assicurarti che le email vengano inviate correttamente
3. Controllare che tutte le pagine e le funzionalità siano accessibili

## Risoluzione dei problemi

Se riscontri problemi durante il deployment:

1. Controlla i log di build su Vercel per identificare eventuali errori
2. Verifica che tutte le dipendenze siano correttamente specificate nel file `package.json`
3. Assicurati che il progetto funzioni localmente con `npm run build && npm run preview`

## Risorse utili

- [Documentazione Vercel](https://vercel.com/docs)
- [Documentazione Vite](https://vitejs.dev/guide/)
- [Guida al deployment di Vite su Vercel](https://vercel.com/guides/deploying-vite-with-vercel)