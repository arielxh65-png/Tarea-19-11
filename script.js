// Inicializar EmailJS con tu clave pública
emailjs.init("-TNGwUlo26BNoSmCT");

document.getElementById('personalDataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    console.log("Formulario enviado - Iniciando proceso...");

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Validar que todos los campos requeridos estén llenos
    if (!firstName || !lastName || !email) {
        document.getElementById('status-message').innerText = "Por favor, completa todos los campos requeridos.";
        document.getElementById('status-message').className = "error";
        return;
    }

    console.log("Datos capturados:", { firstName, lastName, email, phone, message });

    // Mostrar mensaje de "Enviando..."
    document.getElementById('status-message').innerText = "Enviando datos...";
    document.getElementById('status-message').className = "";

    // Usando tus Service ID y Template ID
    emailjs.send("service_ojzlb8c", "template_qfbj6rg", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        message: message
    })
    
    .then((response) => {
        console.log("ÉXITO:", response);
        document.getElementById('status-message').innerText = "✅ Datos enviados con éxito.";
        document.getElementById('status-message').className = "success";
        document.getElementById('personalDataForm').reset();
    })
    .catch((error) => {
        console.error("ERROR DETALLADO:", error);
        document.getElementById('status-message').innerText = "❌ Error al enviar. Verifica la consola para más detalles.";
        document.getElementById('status-message').className = "error";
    });
});
