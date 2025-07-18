# Configurazione EmailJS per il Form di Contatto

Questo documento fornisce istruzioni su come configurare EmailJS per il form di contatto del sito web EDIL GAMAL.

## Prerequisiti

- Un account EmailJS (gratuito per 200 email al mese)
- Accesso a un account email (Gmail, Outlook, ecc.)

## Passaggi per la configurazione

### 1. Creare un account EmailJS

1. Vai su [https://www.emailjs.com/](https://www.emailjs.com/) e registra un nuovo account
2. Accedi al tuo account EmailJS

### 2. Configurare un servizio email

1. Nel dashboard di EmailJS, vai su "Email Services"
2. Clicca su "Add New Service"
3. Seleziona il tuo provider email (Gmail, Outlook, ecc.)
4. Segui le istruzioni per connettere il tuo account email
5. Assegna un nome al servizio (es. "EDIL GAMAL Contact Form")
6. **Importante**: Prendi nota del **Service ID** generato (es. "service_abc123")

### 3. Creare un template email

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

### 4. Ottenere la Public Key

1. Nel dashboard di EmailJS, vai su "Account" > "API Keys"
2. **Prendi nota della Public Key** (es. "user_abc123xyz")

### 5. Configurare il sito web

1. Apri il file `src/services/emailService.ts`
2. Sostituisci i valori placeholder con quelli ottenuti nei passaggi precedenti:
   ```typescript
   const PUBLIC_KEY = 'your_public_key'; // Sostituisci con la tua Public Key
   const SERVICE_ID = 'your_service_id'; // Sostituisci con il tuo Service ID
   const TEMPLATE_ID = 'your_template_id'; // Sostituisci con il tuo Template ID
   ```

## Test del form di contatto

1. Avvia il server di sviluppo con `npm run dev`
2. Vai alla pagina Contatti
3. Compila il form e invia un messaggio di test
4. Verifica che l'email venga ricevuta all'indirizzo `info@edilgamal.it`

## Risoluzione dei problemi

Se il form non funziona correttamente:

1. Verifica che i valori di PUBLIC_KEY, SERVICE_ID e TEMPLATE_ID siano corretti
2. Controlla la console del browser per eventuali errori
3. Verifica che il template email contenga tutti i campi dinamici necessari
4. Assicurati che il servizio email sia configurato correttamente e che l'account email sia accessibile

## Risorse utili

- [Documentazione EmailJS](https://www.emailjs.com/docs/)
- [Esempi di integrazione con React](https://www.emailjs.com/docs/examples/reactjs/)