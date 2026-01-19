// Define the sound file path
const scrollsoundFilePath = 'assets/sound/scroll.mp3'; // Replace with your sound file's path

// Select all elements with the class 'sound-button'
const scrollsoundButtons = document.querySelectorAll('.scroll-item');

// Add a click event listener to each button
scrollsoundButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Create a new Audio object each time to allow multiple clicks 
        // without waiting for the previous sound to finish.
        const audio = new Audio(scrollsoundFilePath);
        
        // Play the sound
        audio.play().catch(error => {
            console.error("Audio play failed:", error);
        });
    });
});