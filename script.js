function encryptEmail() {
    // Holen Sie den Text der E-Mail
    const emailContent = document.getElementById("emailContent").value;

    // Verschlüsselungsfunktion (beispielsweise eine einfache Base64-Verschlüsselung)
    const encryptedEmail = btoa(emailContent); // btoa() kodiert den Text in Base64

    // Zeige die verschlüsselte E-Mail im Ausgabe-Textarea
    document.getElementById("encryptedEmail").value = encryptedEmail;
}