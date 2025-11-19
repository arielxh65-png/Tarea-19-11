// Inicializar EmailJS con tu clave pública
// Reemplaza "TU_CLAVE_PUBLICA_EMAILJS" con tu Public Key de EmailJS
emailjs.init("TU_CLAVE_PUBLICA_EMAILJS");

document.getElementById('personalDataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Reemplaza con tu Service ID y Template ID de EmailJS
    emailjs.send("TU_SERVICE_ID", "TU_TEMPLATE_ID", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        message: message
    })
    
    .then(() => {
        document.getElementById('status-message').innerText = "Datos enviados con éxito.";
        document.getElementById('status-message').className = "success";
        document.getElementById('personalDataForm').reset();
    })
    .catch((error) => {
        console.error("Error al enviar los datos:", error);
        document.getElementById('status-message').innerText = "Hubo un error al enviar los datos.";
        document.getElementById('status-message').className = "error";
    });
});
