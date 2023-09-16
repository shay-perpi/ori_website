const images = document.querySelectorAll('.slider img');
const music = document.getElementById('music');
let currentImageIndex = 0;
const startButton = document.getElementById('start-button');

function changeImage() {
    images[currentImageIndex].style.display = 'none';
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.display = 'block';
}

function startAnimationAndMusic() {
    // Start the image slider
    setInterval(changeImage, 3000); // Change image every 3 seconds

    // Auto-play the music
    music.play();

    // Hide the button after starting animation and music
    startButton.style.display = 'none';
}

startButton.addEventListener('click', startAnimationAndMusic);
