// You can trigger animations using JavaScript when the page loads
document.addEventListener('DOMContentLoaded', function() {
    const text1 = document.querySelector('.text1');
    const slideshowText = document.getElementById('slideshow-text');
    const texts = ["Sub-Engineer", "AI-Enthusiast"];
    let index = 0;

    // Trigger the animation by adding a class or setting properties
    setTimeout(() => {
        text1.style.animation = 'fadeInLeft 2s forwards'; // For left-side text
    }, 500); // Delay the animation to create a smooth effect

    function animateText(text) {
        slideshowText.innerHTML = '';
        text.split('').forEach((char, i) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.animation = `dropIn 0.5s forwards ${i * 0.1}s, fadeOut 0.5s forwards ${3 + i * 0.1}s`;
            span.style.background = 'linear-gradient(45deg, cyan, magenta, violet)'; // Match gradient
            span.style.webkitBackgroundClip = 'text';
            span.style.webkitTextFillColor = 'transparent';
            slideshowText.appendChild(span);
        });
    }

    // Initial text animation
    animateText(texts[index]);

    // Change text every 4 seconds
    setInterval(() => {
        index = (index + 1) % texts.length;
        animateText(texts[index]);
    }, 4000); // Change text every 4 seconds
});