// Initialize Lucide Icons
lucide.createIcons();

// Initialize Lenis Smooth Scroll
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Custom Cursor
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1
    });
});

// Magnetic Buttons
const magneticBtns = document.querySelectorAll('.magnetic');
magneticBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(btn, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.3
        });
    });
    btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
            x: 0,
            y: 0,
            duration: 0.3
        });
    });
});

// Hero Animations
const heroTl = gsap.timeline();
heroTl.from('.hero-title span', {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power4.out"
})
.from('.hero-subtitle', {
    opacity: 0,
    y: 20,
    duration: 0.8
}, "-=0.5")
.from('.hero-btns', {
    opacity: 0,
    y: 20,
    duration: 0.8
}, "-=0.5")
.from('.food-card, .chef-special', {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    stagger: 0.2,
    ease: "back.out(1.7)"
}, "-=1");

// Floating Objects Parallax & Orbiting
document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const xPos = (clientX / window.innerWidth - 0.5) * 50;
    const yPos = (clientY / window.innerHeight - 0.5) * 50;

    gsap.to('.float-1', { x: xPos * 0.5, y: yPos * 0.5, duration: 0.5 });
    gsap.to('.float-2', { x: xPos * -0.8, y: yPos * -0.8, duration: 0.5 });
    gsap.to('.float-3', { x: xPos * 0.3, y: yPos * 0.3, duration: 0.5 });
});

// Subtle constant orbiting for hero elements
gsap.to('.float-1', {
    y: "+=20",
    x: "+=10",
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

gsap.to('.float-2', {
    y: "-=30",
    x: "-=15",
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay: 0.5
});

gsap.to('.float-3', {
    y: "+=25",
    x: "-=10",
    duration: 3.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay: 1
});

// Reveal Animations on Scroll
const revealElements = document.querySelectorAll('.reveal-text');
revealElements.forEach(el => {
    gsap.from(el, {
        scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });
});

// Menu Filter Logic
const filterBtns = document.querySelectorAll('.filter-btn');
const menuItems = document.querySelectorAll('.menu-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;

        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        gsap.to(menuItems, {
            opacity: 0,
            scale: 0.8,
            duration: 0.3,
            onComplete: () => {
                menuItems.forEach(item => {
                    if (filter === 'all' || item.dataset.category === filter) {
                        item.style.display = 'block';
                        gsap.to(item, { opacity: 1, scale: 1, duration: 0.5 });
                    } else {
                        item.style.display = 'none';
                    }
                });
                ScrollTrigger.refresh();
            }
        });
    });
});

// 3D Tilt Effect for Menu Cards
const tiltCards = document.querySelectorAll('.tilt');
tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const xPercent = (x / rect.width - 0.5) * 20;
        const yPercent = (y / rect.height - 0.5) * -20;

        gsap.to(card, {
            rotationY: xPercent,
            rotationX: yPercent,
            transformPerspective: 1000,
            duration: 0.5
        });
    });
    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            rotationY: 0,
            rotationX: 0,
            duration: 0.5
        });
    });
});

// FAQ Accordion
const accordionItems = document.querySelectorAll('.accordion-item');
accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    header.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        accordionItems.forEach(i => i.classList.remove('active'));
        if (!isActive) item.classList.add('active');
    });
});

// Chatbot Logic
const chatbotToggle = document.querySelector('.chatbot-toggle');
const chatPanel = document.querySelector('.chat-panel');
const chatClose = document.querySelector('.chat-close');
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const typingIndicator = document.getElementById('typing-indicator');

chatbotToggle.addEventListener('click', () => {
    chatPanel.classList.toggle('active');
});

chatClose.addEventListener('click', () => {
    chatPanel.classList.remove('active');
});

async function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    // Add user message
    addMessage(message, 'user');
    userInput.value = '';

    // Show typing indicator
    typingIndicator.style.display = 'block';
    chatMessages.scrollTop = chatMessages.scrollHeight;

    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message })
        });
        const data = await response.json();

        typingIndicator.style.display = 'none';
        addMessage(data.response, 'ai');
    } catch (error) {
        typingIndicator.style.display = 'none';
        addMessage("I'm having trouble connecting to the Zestro network. Please try again later.", 'ai');
    }
}

function addMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message', sender);
    msgDiv.textContent = text;
    chatMessages.appendChild(msgDiv);

    gsap.from(msgDiv, {
        opacity: 0,
        y: 10,
        duration: 0.4
    });

    chatMessages.scrollTop = chatMessages.scrollHeight;
}

sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

// Suggestion chips
document.querySelectorAll('.suggestion-chip').forEach(chip => {
    chip.addEventListener('click', () => {
        userInput.value = chip.textContent;
        sendMessage();
    });
});

// Simple Particle System using GSAP
function createParticles(selector, count = 20) {
    const container = document.querySelector(selector);
    if (!container) return;

    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        // Random style
        const size = Math.random() * 5 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.background = Math.random() > 0.5 ? 'var(--primary-green)' : 'var(--accent-amber)';
        particle.style.opacity = Math.random() * 0.5 + 0.2;
        particle.style.position = 'absolute';
        particle.style.borderRadius = '50%';
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.left = `${Math.random() * 100}%`;

        container.appendChild(particle);

        // Animate
        gsap.to(particle, {
            x: `random(-100, 100)`,
            y: `random(-100, 100)`,
            duration: `random(10, 20)`,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }
}

createParticles('.hero-bg-particles', 30);
createParticles('.footer-particles', 20);

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

mobileMenuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Toggle between menu and x icon
    const isOpened = navLinks.classList.contains('active');
    mobileMenuToggle.setAttribute('aria-expanded', isOpened ? 'true' : 'false');
    mobileMenuToggle.innerHTML = isOpened ? '<i data-lucide="x" aria-hidden="true"></i>' : '<i data-lucide="menu" aria-hidden="true"></i>';
    lucide.createIcons();

    if (isOpened) {
        gsap.from('.nav-links li', {
            x: 50,
            opacity: 0,
            stagger: 0.1,
            duration: 0.4,
            ease: "power2.out"
        });
    }
});
