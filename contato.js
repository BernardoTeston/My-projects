document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        let emailInput = document.getElementById("Email").value;
        let message = document.getElementById("message");

        // Regular expression for valid email format
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(emailInput)) {
            event.preventDefault(); // Prevent form submission
            message.textContent = "Erro: O email inserido não é válido. Certifique-se de que contém '@' e um domínio válido.";
            message.style.color = "red";
            message.style.display = "block";
        } else {
            // Success: Let Formspree send the email
            message.textContent = "Enviado!";
            message.style.color = "green";
            message.style.display = "block";
        }
    });
});
