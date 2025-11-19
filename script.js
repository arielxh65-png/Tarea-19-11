// Inicializar EmailJS con tu clave pública
emailjs.init("-TNGwUlo26BNoSmCT");

document.getElementById('personalDataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    console.log("=== INICIANDO ENVÍO DE FORMULARIO ===");

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Validar campos requeridos
    if (!firstName || !lastName || !email || !message) {
        showStatus("❌ Por favor, completa todos los campos requeridos.", "error");
        return;
    }

    console.log("📝 Datos capturados:", { 
        firstName, 
        lastName, 
        email, 
        phone, 
        message 
    });

    // Deshabilitar botón y mostrar loading
    const submitBtn = document.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = "Enviando...";
    
    showStatus("⏳ Enviando datos...", "loading");

    // Datos para EmailJS
    const templateParams = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone || "No proporcionado",
        message: message
    };

    console.log("🔄 Enviando a EmailJS...");
    console.log("Service ID: service_ojzlb8c");
    console.log("Template ID: template_qfbj6rg");
    console.log("Datos:", templateParams);

    // Enviar con EmailJS
    emailjs.send("service_ojzlb8c", "template_qfbj6rg", templateParams)
    .then((response) => {
        console.log("✅ ÉXITO - Email enviado:", response);
        showStatus("🎉 ¡Datos enviados con éxito! Te contactaremos pronto.", "success");
        document.getElementById('personalDataForm').reset();
    })
    .catch((error) => {
        console.error("❌ ERROR DETALLADO:", error);
        
        let errorMessage = "Hubo un error al enviar los datos. ";
        
        if (error.text) {
            errorMessage += `Error: ${error.text}`;
        } else if (error.status) {
            errorMessage += `Código de error: ${error.status}`;
        }
        
        showStatus(errorMessage, "error");
    })
    .finally(() => {
        // Rehabilitar botón
        submitBtn.disabled = false;
        submitBtn.textContent = "Enviar Datos";
    });
});

function showStatus(message, type) {
    const statusElement = document.getElementById('status-message');
    statusElement.innerText = message;
    statusElement.className = type;
}

// Función para probar la conexión con EmailJS
function testEmailJSConnection() {
    console.log("🧪 Probando conexión con EmailJS...");
    
    emailjs.send("service_ojzlb8c", "template_qfbj6rg", {
        firstName: "Test",
        lastName: "User",
        email: "test@example.com",
        phone: "123456789",
        message: "Este es un mensaje de prueba"
    })
    .then(() => console.log("✅ Conexión de prueba exitosa"))
    .catch(error => console.error("❌ Error en prueba de conexión:", error));
}

// Ejecutar prueba de conexión al cargar la página (opcional)
// window.addEventListener('load', testEmailJSConnection);
