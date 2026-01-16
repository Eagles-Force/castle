
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const navlinks = document.querySelectorAll('header nav ul li a');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        navlinks.forEach(link => {
            link.style.color = '#333';
        });
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.1)';
        navlinks.forEach(link => {
            link.style.color = 'white';
        });
    }
});

// Contact form handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Simple validation
    if (!data.name || !data.email || !data.message) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Web Development Inquiry - ${data.service || 'General'}`);
    const body = encodeURIComponent(`
Name: ${data.name}
Email: ${data.email}
Service: ${data.service || 'Not specified'}
Budget: ${data.budget || 'Not specified'}

Message:
${data.message}
    `);
    
    const mailtoLink = `mailto:hello@webcraftsolutions.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    
    // Show success message
    alert('Thank you! Your email client should open with the message ready to send.');
    
    // Reset form
    this.reset();
});

// Add some interactive animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards for animation
document.querySelectorAll('.service-card, .skill-item').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

// requestAnimationFrame(() => {
//     setTimeout(() => {
//         alert("Javascript is Active");
//     }, 0);
// });