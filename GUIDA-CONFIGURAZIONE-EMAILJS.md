# Guida alla Configurazione di EmailJS per il Form di Contatto

Questa guida ti aiuterà a configurare EmailJS per far funzionare correttamente il form di contatto sul sito web EDIL GAMAL.

## Passo 1: Accedi al tuo account EmailJS

1. Vai su [https://www.emailjs.com/](https://www.emailjs.com/) e accedi con l'account che hai creato usando info@edilgamal.it

## Passo 2: Configura un servizio email

1. Nel dashboard di EmailJS, vai su "Email Services"
2. Clicca su "Add New Service"
3. Seleziona il tuo provider email (Gmail, Outlook, ecc.)
4. Segui le istruzioni per connettere il tuo account email info@edilgamal.it
5. Assegna un nome al servizio (es. "EDIL GAMAL Contact Form")
6. **Importante**: Prendi nota del **Service ID** generato (es. "service_abc123")

## Passo 3: Crea un template email

1. Nel dashboard di EmailJS, vai su "Email Templates"
2. Clicca su "Create New Template"
3. Nella scheda "Content", personalizza il template con i seguenti campi dinamici:
   - `{{from_name}}` - Nome del mittente
   - `{{from_email}}` - Email del mittente
   - `{{from_phone}}` - Telefono del mittente
   - `{{client_type}}` - Tipologia di cliente
   - `{{message}}` - Messaggio del mittente
4. Imposta il campo "To Email" con l'indirizzo email di destinazione: `info@edilgamal.it`
5. Personalizza l'oggetto dell'email (es. "Nuovo messaggio dal sito web EDIL GAMAL")
6. Vai alla scheda "Settings" e **prendi nota del Template ID** (es. "template_xyz789")

## Passo 4: Ottieni la Public Key

1. Nel dashboard di EmailJS, vai su "Account" > "API Keys"
2. **Prendi nota della Public Key** (es. "user_abc123xyz")

## Passo 5: Configura il file .env

1. Nel file `.env` che è stato creato nella cartella principale del progetto, sostituisci i valori placeholder con quelli ottenuti nei passaggi precedenti:

```
# Configurazione EmailJS
VITE_EMAILJS_PUBLIC_KEY=your_public_key  # Sostituisci con la tua Public Key
VITE_EMAILJS_SERVICE_ID=your_service_id  # Sostituisci con il tuo Service ID
VITE_EMAILJS_TEMPLATE_ID=your_template_id  # Sostituisci con il tuo Template ID
```

Per esempio:

```
# Configurazione EmailJS
VITE_EMAILJS_PUBLIC_KEY=user_abc123xyz
VITE_EMAILJS_SERVICE_ID=service_def456
VITE_EMAILJS_TEMPLATE_ID=template_ghi789
```

## Passo 6: Riavvia il server di sviluppo

1. Ferma il server di sviluppo se è in esecuzione (premi Ctrl+C nel terminale)
2. Riavvia il server con il comando `npm run dev`

## Passo 7: Testa il form di contatto

1. Vai alla pagina Contatti del sito
2. Compila tutti i campi del form
3. Invia un messaggio di test
4. Verifica che l'email venga ricevuta all'indirizzo info@edilgamal.it

## Risoluzione dei problemi

Se il form non funziona correttamente:

1. Verifica che i valori nel file `.env` siano corretti e non contengano spazi o caratteri speciali
2. Controlla la console del browser per eventuali errori (premi F12 e vai alla scheda "Console")
3. Assicurati che il template email contenga tutti i campi dinamici necessari
4. Verifica che il servizio email sia configurato correttamente e che l'account email sia accessibile

## Note importanti

- Il file `.env` contiene informazioni sensibili e non deve essere condiviso o caricato su repository pubblici
- EmailJS offre un piano gratuito con 200 email al mese, che dovrebbe essere sufficiente per un uso normale del sito
- Per monitorare l'utilizzo delle email, puoi accedere al dashboard di EmailJS e controllare la sezione "Usage"