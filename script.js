document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Service card hover effect
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.backgroundColor = '#000';
            card.style.color = '#fff';
        });
        card.addEventListener('mouseout', () => {
            card.style.backgroundColor = '#f4f4f4';
            card.style.color = '#333';
        });
    });

    // Form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });

    // Animated counter for services
    const animateCounter = (element, target, duration) => {
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            element.textContent = Math.floor(start);
            if (start >= target) {
                clearInterval(timer);
                element.textContent = target;
            }
        }, 16);
    };

    // Add counters to service cards
    serviceCards.forEach(card => {
        const counter = document.createElement('div');
        counter.classList.add('service-counter');
        counter.textContent = '0';
        card.appendChild(counter);

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                animateCounter(counter, Math.floor(Math.random() * 100) + 50, 2000);
                observer.unobserve(card);
            }
        });

        observer.observe(card);
    });
});