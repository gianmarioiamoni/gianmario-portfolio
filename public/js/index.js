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
                    alert('Message sent successfully!');
                    document.getElementById('contact-form').reset();
                }, function (error) {
                    console.log('FAILED...', error);
                    alert('Failed to send message. Please try again later.');
                });
        });
    }
});
