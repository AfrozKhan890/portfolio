// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Carousel hover effect
    const carouselItems = document.querySelectorAll('.carousel-item');
    
    carouselItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const bg = this.querySelector('.carousel-bg');
            bg.style.transform = 'scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            const bg = this.querySelector('.carousel-bg');
            if (!this.classList.contains('active')) {
                bg.style.transform = 'scale(1)';
            }
        });
    });
    
    // Update carousel background scale on slide change
    const heroCarousel = document.getElementById('heroCarousel');
    heroCarousel.addEventListener('slid.bs.carousel', function() {
        const activeItem = this.querySelector('.carousel-item.active');
        const activeBg = activeItem.querySelector('.carousel-bg');
        activeBg.style.transform = 'scale(1.05)';
        
        // Reset other items
        carouselItems.forEach(item => {
            if (!item.classList.contains('active')) {
                const bg = item.querySelector('.carousel-bg');
                bg.style.transform = 'scale(1)';
            }
        });
    });
    
    // Initialize all carousel backgrounds
    const activeCarouselItem = document.querySelector('.carousel-item.active');
    if (activeCarouselItem) {
        const activeBg = activeCarouselItem.querySelector('.carousel-bg');
        activeBg.style.transform = 'scale(1.05)';
    }
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.2)';
        } else {
            navbar.style.padding = '15px 0';
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;
            
            const targetElement = document.querySelector(href);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile navbar if open
                const navbarToggler = document.querySelector('.navbar-toggler');
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarToggler && !navbarToggler.classList.contains('collapsed')) {
                    navbarToggler.click();
                }
            }
        });
    });
    
    // Image grid items animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Apply animation to image grid items
    document.querySelectorAll('.image-grid-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(item);
    });
    
  // WhatsApp Contact Form Handler
const whatsappForm = document.getElementById('whatsappContactForm');
if (whatsappForm) {
    whatsappForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value;
        
        // Format message for WhatsApp
        const whatsappMessage = `*New Contact Request from Orbit Solutions Website*%0A%0A` +
                               `*Name:* ${name}%0A` +
                               `*Phone:* ${phone}%0A` +
                               `*Email:* ${email}%0A` +
                               `*Service Interested In:* ${service}%0A` +
                               `*Message:* ${message}%0A%0A` +
                               `_This message was sent via Orbit Solutions Website Contact Form_`;
        
        // Your WhatsApp number
        const whatsappNumber = '923312416094';
        
        // Create WhatsApp URL
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
        
        // Open WhatsApp in new tab
        window.open(whatsappURL, '_blank');
        
        // Reset form
        whatsappForm.reset();
        
        // Show success message
        alert('WhatsApp is opening with your message. Please send it to complete your inquiry.');
    });
}
    
    // Add animation to about section features
    document.querySelectorAll('.feature-item').forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
    });
    
    // Observe about section for animation
    const aboutObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelectorAll('.feature-item').forEach(item => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateX(0)';
                });
            }
        });
    }, observerOptions);
    
    const aboutSection = document.querySelector('.about-section');
    if (aboutSection) {
        aboutObserver.observe(aboutSection);
    }
});