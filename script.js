const animatedElement = document.querySelector('.animated-element');

let animationRunning = false;

animatedElement.addEventListener('click', () => {
    if (!animationRunning) {
        animationRunning = true;
        animatedElement.style.transition = 'transform 1s';
        animatedElement.style.transform = 'translateX(200px)';

        setTimeout(() => {
            animatedElement.style.transform = 'translateX(0)';
            animationRunning = false;
        }, 1000);
    }
});