// Responsive menu toggle
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');
function toggleMenu() {
    navLinks.classList.toggle('open');
}
function closeMenu() {
    navLinks.classList.remove('open');
}

// Typewriter effect for homepage
const typedSpan = document.getElementById('typed');
const typedTexts = ['Web Developer.', 'Designer.', 'Problem Solver.'];
let textIndex = 0, letterIndex = 0;
let typingDelay = 100, erasingDelay = 50, newTextDelay = 1200;

function type() {
    if(letterIndex < typedTexts[textIndex].length){
        typedSpan.textContent += typedTexts[textIndex].charAt(letterIndex);
        letterIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}


function erase() {
    if(letterIndex > 0){
        typedSpan.textContent = typedTexts[textIndex].substring(0, letterIndex - 1);
        letterIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textIndex = (textIndex + 1) % typedTexts.length;
        setTimeout(type, typingDelay + 400);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if(typedTexts.length) setTimeout(type, 800);
});

// Simple contact form handler (for demo, does not send emails)
const contactForm = document.getElementById('contact-form');
if(contactForm){
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert("Thank you for your message!");
        contactForm.reset();

    });
}
