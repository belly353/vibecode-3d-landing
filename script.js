// ===== 3D Canvas Setup =====
const canvas = document.getElementById('canvas3d');
const ctx = canvas ? canvas.getContext('2d') : null;

function resizeCanvas() {
    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight - 60;
    }
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Particle system for background
class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.3;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.opacity -= 0.01;
    }

    draw(ctx) {
        ctx.fillStyle = `rgba(0, 255, 136, ${this.opacity})`;
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }
}

let particles = [];

function createParticles() {
    for (let i = 0; i < 50; i++) {
        particles.push(
            new Particle(
                Math.random() * canvas.width,
                Math.random() * canvas.height
            )
        );
    }
}

function animateParticles() {
    if (!ctx) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach((particle, index) => {
        if (particle.opacity <= 0) {
            particles.splice(index, 1);
        } else {
            particle.update();
            particle.draw(ctx);
        }
    });

    if (Math.random() < 0.3) {
        particles.push(
            new Particle(
                Math.random() * canvas.width,
                Math.random() * canvas.height
            )
        );
    }

    requestAnimationFrame(animateParticles);
}

if (canvas) {
    createParticles();
    animateParticles();
}

// ===== Navigation Active Link =====
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===== Mobile Menu Toggle =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// ===== Smooth Scroll for CTA Buttons =====
const ctaButtons = document.querySelectorAll('.cta-button');
ctaButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (button.textContent.includes('Começar') || button.textContent.includes('Teste')) {
            e.preventDefault();
            document.querySelector('#features').scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== Feature Card Interaction =====
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) rotateY(5deg)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotateY(0deg)';
    });

    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
});

// ===== Rotating Box Interaction =====
const rotatingBox = document.querySelector('.rotating-box');
if (rotatingBox) {
    let rotationX = 0;
    let rotationY = 0;

    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) * 360;
        const y = (e.clientY / window.innerHeight) * 360;
        
        rotatingBox.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
    });

    // Reset on mouse leave
    document.addEventListener('mouseleave', () => {
        rotatingBox.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
}

// ===== Parallax Effect =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-cubes .cube');
    
    parallaxElements.forEach((element, index) => {
        element.style.transform = `translateY(${scrolled * 0.5 + index * 100}px)`;
    });
});

// ===== Intersection Observer for Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .pricing-card, .testimonial-card').forEach(el => {
    observer.observe(el);
});

// ===== Counter Animation =====
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// ===== Typing Animation for Hero Title =====
function typeText(element, text, speed = 100) {
    element.textContent = '';
    let index = 0;
    
    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// ===== Scroll Reveal Animation =====
const revealElements = document.querySelectorAll('.section-header h2, .feature-card, .pricing-card');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.6s ease';
    revealObserver.observe(element);
});

// ===== Glow Effect Mouse Follow =====
document.addEventListener('mousemove', (e) => {
    const glowElements = document.querySelectorAll('.button-glow');
    
    glowElements.forEach(glow => {
        const rect = glow.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        glow.style.left = `${x}px`;
        glow.style.top = `${y}px`;
    });
});

// ===== Pricing Card Hover Effect =====
const pricingCards = document.querySelectorAll('.pricing-card');
pricingCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        pricingCards.forEach(c => {
            if (c !== this) c.style.opacity = '0.6';
        });
    });

    card.addEventListener('mouseleave', function() {
        pricingCards.forEach(c => {
            c.style.opacity = '1';
        });
    });
});

// ===== CTA Button Ripple Effect =====
function createRipple(e) {
    const button = e.currentTarget;
    const ripple = document.createElement('span');
    
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    button.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
}

document.querySelectorAll('.cta-button, .price-button').forEach(button => {
    button.addEventListener('click', createRipple);
});

// ===== Testimonial Auto Scroll =====
const testimonialCards = document.querySelectorAll('.testimonial-card');
let currentTestimonial = 0;

function rotateTestimonials() {
    testimonialCards.forEach((card, index) => {
        card.style.opacity = index === currentTestimonial ? '1' : '0.6';
    });
    
    currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
}

// Auto-rotate every 5 seconds
setInterval(rotateTestimonials, 5000);

// ===== Form Validation and Submission =====
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = 'Enviando...';
        submitButton.disabled = true;
        
        setTimeout(() => {
            submitButton.textContent = 'Enviado com Sucesso! ✓';
            submitButton.style.background = '#00ff88';
            submitButton.style.color = '#0a0e27';
            
            setTimeout(() => {
                form.reset();
                submitButton.textContent = originalText;
                submitButton.style.background = '';
                submitButton.style.color = '';
                submitButton.disabled = false;
            }, 3000);
        }, 1500);
    });
});

// ===== Keyboard Navigation =====
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.remove('active');
    }
});

// ===== Lazy Loading Images =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===== Dark Mode Toggle (Optional) =====
const darkModeToggle = () => {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDark);
};

// Check for saved preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// ===== Performance Monitoring =====
window.addEventListener('load', () => {
    if (performance && performance.timing) {
        const perfData = performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page Load Time: ${pageLoadTime}ms`);
    }
});

// ===== Initialize Everything =====
document.addEventListener('DOMContentLoaded', () => {
    console.log('Vibecode 3D Landing Page Initialized');
    
    // Animate hero title on load
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.style.animation = 'glitch 3s ease-in-out infinite';
    }
    
    // Add smooth animations to all interactive elements
    document.querySelectorAll('a, button').forEach(element => {
        element.style.transition = 'all 0.3s ease';
    });
});

// ===== Prevent FOUC (Flash of Unstyled Content) =====
document.documentElement.style.visibility = 'visible';
document.body.style.opacity = '1';

// ===== Mouse Cursor Tracking for 3D Effect =====
document.addEventListener('mousemove', (e) => {
    const cubes = document.querySelectorAll('.floating-cubes .cube');
    
    cubes.forEach(cube => {
        const rect = cube.getBoundingClientRect();
        const cubeX = rect.left + rect.width / 2;
        const cubeY = rect.top + rect.height / 2;
        
        const angle = Math.atan2(e.clientY - cubeY, e.clientX - cubeX);
        const distance = Math.hypot(e.clientX - cubeX, e.clientY - cubeY);
        
        if (distance < 200) {
            const moveX = Math.cos(angle) * (200 - distance) / 20;
            const moveY = Math.sin(angle) * (200 - distance) / 20;
            
            cube.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
    });
});

// ===== Scroll Performance Optimization =====
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            // Scroll animations
            ticking = false;
        });
        ticking = true;
    }
}, { passive: true });

// ===== Add ripple style dynamically =====
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .nav-link.active {
        color: #00ff88;
        text-shadow: 0 0 10px rgba(0, 255, 136, 0.5);
    }
    
    .nav-menu.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 60px;
        left: 0;
        right: 0;
        background: rgba(5, 8, 18, 0.95);
        gap: 1rem;
        padding: 2rem;
    }
    
    @media (max-width: 768px) {
        .nav-menu {
            display: none;
        }
        
        .hamburger {
            display: flex;
        }
    }
`;
document.head.appendChild(style);