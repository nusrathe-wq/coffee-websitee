// Register GSAP for smooth movements
const cursor = document.querySelector('#custom-cursor');
const cursorIcon = document.querySelector('.cursor-icon');

// 1. Smooth Cursor Movement
window.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power3.out"
    });
});

// 2. Cursor Morphing on Hover
const hoverTargets = document.querySelectorAll('.hover-target, button, a');

hoverTargets.forEach(target => {
    target.addEventListener('mouseenter', () => {
        cursorIcon.innerHTML = '☕'; // Morph bean to cup
        gsap.to(cursor, { scale: 1.5, duration: 0.3 });
        
        // Optional: Subtle Click Sound
        // let clickSound = new Audio('coffee-click.mp3');
        // clickSound.volume = 0.1;
        // clickSound.play();
    });

    target.addEventListener('mouseleave', () => {
        cursorIcon.innerHTML = '🫘'; // Morph back to bean
        gsap.to(cursor, { scale: 1, duration: 0.3 });
    });
});

// 3. Liquid Ripple Effect on Click
window.addEventListener('click', (e) => {
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    document.body.appendChild(ripple);

    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;
    
    // Animate ripple with CSS or GSAP
    gsap.to(ripple, {
        width: 100,
        height: 100,
        opacity: 0,
        duration: 0.8,
        onComplete: () => ripple.remove()
    });
});

// 4. Hero Text Reveal
gsap.from(".reveal-text", {
    y: 50,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out",
    delay: 0.5
});
