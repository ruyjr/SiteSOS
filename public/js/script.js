document.addEventListener('DOMContentLoaded', () => {
    // Scroll reveal animation
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card, .section-title, .contact-container').forEach(el => {
        observer.observe(el);
    });

    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simulation of form submission
            const btn = contactForm.querySelector('button');
            const feedback = document.getElementById('formFeedback');
            
            btn.textContent = 'Enviando...';
            btn.disabled = true;

            setTimeout(() => {
                contactForm.style.display = 'none';
                feedback.style.display = 'block';
                console.log('Formulário enviado com sucesso!');
            }, 1500);
        });
    }

    // Scroll event for sticky nav and parallax
    window.addEventListener('scroll', () => {
        // Sticky nav (only change padding, not color)
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.style.padding = '0.5rem 5%';
        } else {
            nav.style.padding = '0.8rem 5%';
        }

        // Parallax effect for hero section
        const heroContent = document.querySelector('.hero-content');
        const heroImage = document.querySelector('.hero-image');
        
        if (heroContent && heroImage) {
            let scrollY = window.scrollY;
            heroContent.style.transform = `translateY(${scrollY * 0.2}px)`;
            heroImage.style.transform = `translateY(${scrollY * 0.1}px)`;
        }
    });
});
