
// Utility function to show error and success messages
const showMessage = (element, message) => {
    element.textContent = message;
    element.style.display = 'block';
    setTimeout(() => {
        element.style.display = 'none';
    }, 5000);
}

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Hamburger menu script for navigation
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');
    const header = document.querySelector('header');

    if (navToggle && nav && header) {
        navToggle.addEventListener('click', () => {
            header.classList.toggle('nav-open');
        });

        document.addEventListener('click', (e) => {
            if (!header.contains(e.target)) {
                header.classList.remove('nav-open');
            }
        });
    }

    // Send email script for contact form
    const contactForm = document.getElementById('contact-form');
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');
    const submitButton = document.getElementById('submit-button');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault(); // prevent reload

            const serviceID = 'service_vaj153g';
            const templateID = 'template_ra7qydm';
            const publicKey = '8TX5EYp2A_heeHYUy';

            emailjs.init(publicKey);

            const templateParams = {
                name: document.getElementById('name').value,
                company: document.getElementById('company').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            emailjs.send(serviceID, templateID, templateParams)
                .then(function (response) {
                    console.log('SUCCESS!', response.status, response.text);
                    showMessage(successMessage, 'Message sent successfully!');
                    document.getElementById('contact-form').reset();
                    submitButton.disabled = true;
                }, function (error) {
                    console.log('FAILED...', error);
                    showMessage(errorMessage, 'Failed to send message. Please try again later.');
                });
        });
    }
});

// Contact me form button management
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('contact-form');

    if (!form) {
        console.error('Form not found');
        return; // Fermare l'esecuzione se il form non esiste
    }

    const submitButton = document.getElementById('submit-button');
    const errorMessage = document.getElementById('error-message');
    const requiredFields = form.querySelectorAll('[required]');

    function checkFormValidity() {
        let formIsValid = true;
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                formIsValid = false;
            }
        });
        return formIsValid;
    }

    function updateButtonState() {
        if (checkFormValidity()) {
            submitButton.disabled = false;
            errorMessage.style.display = 'none';
        } else {
            submitButton.disabled = true;
        }
    }

    requiredFields.forEach(field => {
        field.addEventListener('input', updateButtonState);
    });

    submitButton.addEventListener('click', function (event) {
        if (submitButton.disabled) {
            event.preventDefault();
        }
    });

    // Initial check on page load
    updateButtonState();
});
