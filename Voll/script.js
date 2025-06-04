// Funktion zum Verschlüsseln der Nachricht
function encryptMessage() {
    const message = document.getElementById("messageContent").value;
    const key = document.getElementById("encryptionKey").value;

    if (message && key) {
        // Verschlüsselung der Nachricht mit Base64
        const encryptedMessage = btoa(message); // Base64-Verschlüsselung
        document.getElementById("encryptedMessage").value = encryptedMessage;
        document.getElementById("decryptedMessage").value = ''; // Lösche entschlüsselte Nachricht

        // Aktivieren des Download-Buttons für verschlüsselte Nachricht
        document.getElementById("downloadEncryptedBtn").disabled = false;
    } else {
        alert("Bitte geben Sie sowohl eine Nachricht als auch einen Verschlüsselungsschlüssel ein.");
    }
}

// Funktion zum Entschlüsseln der Nachricht
function decryptMessage() {
    const encryptedMessage = document.getElementById("encryptedMessage").value;
    const key = document.getElementById("encryptionKey").value;

    if (encryptedMessage && key) {
        try {
            // Entschlüsselung der Nachricht mit Base64
            const decryptedMessage = atob(encryptedMessage); // Base64-Entschlüsselung
            document.getElementById("decryptedMessage").value = decryptedMessage;

            // Aktivieren des Download-Buttons für entschlüsselte Nachricht
            document.getElementById("downloadDecryptedBtn").disabled = false;
        } catch (e) {
            alert("Fehler beim Entschlüsseln. Überprüfen Sie den verschlüsselten Text.");
        }
    } else {
        alert("Bitte geben Sie sowohl eine verschlüsselte Nachricht als auch einen Verschlüsselungsschlüssel ein.");
    }
}

// Funktion zum Kopieren der verschlüsselten oder entschlüsselten Nachricht
function copyToClipboard(type) {
    let messageContent;
    if (type === 'encrypted') {
        messageContent = document.getElementById("encryptedMessage").value;
    } else if (type === 'decrypted') {
        messageContent = document.getElementById("decryptedMessage").value;
    }

    if (messageContent) {
        navigator.clipboard.writeText(messageContent)
            .then(() => alert(`${type.charAt(0).toUpperCase() + type.slice(1)} Nachricht kopiert!`))
            .catch(() => alert('Fehler beim Kopieren der Nachricht.'));
    } else {
        alert("Keine Nachricht zum Kopieren!");
    }
}

// Funktion zum Herunterladen der verschlüsselten oder entschlüsselten Nachricht
function downloadText(type) {
    let messageContent;
    let filename = "message.txt";
    
    if (type === 'encrypted') {
        messageContent = document.getElementById("encryptedMessage").value;
        filename = "encrypted_message.txt";
    } else if (type === 'decrypted') {
        messageContent = document.getElementById("decryptedMessage").value;
        filename = "decrypted_message.txt";
    }

    if (messageContent) {
        const blob = new Blob([messageContent], { type: 'text/plain' });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
    } else {
        alert("Es gibt keine Nachricht zum Herunterladen!");
    }
}