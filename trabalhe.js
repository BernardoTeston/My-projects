document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        let emailInput = document.getElementById("Email").value.trim();
        let message = document.getElementById("message");
        let submitButton = document.querySelector("button[type='submit']");

        // Regular expression for valid email format
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i; // Case insensitive

        if (!emailPattern.test(emailInput)) {
            event.preventDefault(); // Prevent form submission
            message.textContent = "Erro: O email inserido não é válido. Certifique-se de que contém '@' e um domínio válido.";
            message.style.color = "red";
            message.style.display = "block";
            return;
        }

        // Prevent multiple submissions
        submitButton.disabled = true;
        message.textContent = "Enviando...";
        message.style.color = "blue";
        message.style.display = "block";

        // Wait for Formspree to process (simulate delay)
        setTimeout(() => {
            message.textContent = "Enviado com sucesso!";
            message.style.color = "green";

            // Reset the form after submission (optional)
            document.getElementById("contactForm").reset();
            submitButton.disabled = false; // Re-enable the button
        }, 2000);
    });
});
