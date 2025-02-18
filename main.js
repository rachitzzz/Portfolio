// Toggle Menu
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
});

// Remove menu on mobile
const navLink = document.querySelectorAll('.nav__link');
function linkAction() {
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// Scroll Reveal
ScrollReveal().reveal('.home__data', { origin: 'top', distance: '50px', duration: 1000, delay: 200 });
ScrollReveal().reveal('.about__container', { origin: 'left', distance: '50px', duration: 1000, delay: 200 });
ScrollReveal().reveal('.skills__container', { origin: 'right', distance: '50px', duration: 1000, delay: 200 });
ScrollReveal().reveal('.work__container', { origin: 'bottom', distance: '50px', duration: 1000, delay: 200 });
ScrollReveal().reveal('.contact__container', { origin: 'top', distance: '50px', duration: 1000, delay: 200 });

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Function to check if the DSA section is in the viewport
function isDSASectionInViewport() {
    const dsaSection = document.getElementById('dsa');
    return isInViewport(dsaSection);
}

// Function to add animation to DSA topics
function animateDSATopics() {
    const dsaTopics = document.querySelectorAll('.dsa__topic');

    if (isDSASectionInViewport()) {
        dsaTopics.forEach((topic, index) => {
            topic.style.opacity = '1'; // Make it visible
            topic.style.animation = `wave 0.8s forwards`;
            topic.style.animationDelay = `${index * 0.1}s`; // Delay for wave effect
        });
    }
}

// Event listener for scroll events
window.addEventListener('scroll', animateDSATopics);

