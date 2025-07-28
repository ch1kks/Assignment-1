document.addEventListener('DOMContentLoaded', () => {
    const leafContainer = document.getElementById('leaf-container');
    const numberOfLeaves = 10; // Adjust for leaf density
    const leaves = []; // Array to store leaf elements

    // Function to reset a leaf's position and animation
    function resetLeaf(leaf) {
        const startPosition = Math.random() * 100; // Percentage across the screen
        const animationDuration = Math.random() * 5 + 7; // Fall speed (7-12 seconds)
        const animationDelay = Math.random() * -5; // Staggered start
        const windStrength = Math.random() * 50 - 25; // Wind strength (-25 to 25 vw)
        const windRotation = Math.random() * 60 - 30; // Rotation due to wind (-30 to 30 degrees)

        leaf.style.left = startPosition + 'vw';
        leaf.style.animationDuration = animationDuration + 's';
        leaf.style.animationDelay = animationDelay + 's';
        leaf.style.setProperty('--wind-strength', windStrength + 'vw');
        leaf.style.setProperty('--wind-rotation', windRotation + 'deg');

        // Force a reflow to restart the animation (important for looping)
        void leaf.offsetWidth; // Trigger reflow
    }

    // Create all the leaves initially
    for (let i = 0; i < numberOfLeaves; i++) {
        const leaf = document.createElement('div');
        leaf.classList.add('leaf');
        leafContainer.appendChild(leaf);
        leaves.push(leaf); // Store the leaf element

        resetLeaf(leaf); // Initialize the leaf's position and animation
    }

    // Add event listeners to each leaf to reset its position when the animation completes
    leaves.forEach(leaf => {
        leaf.addEventListener('animationiteration', () => {
            resetLeaf(leaf);
        });
    });
});


        const musicButton = document.getElementById('musicButton');
        const music = document.getElementById('music');

        musicButton.addEventListener('click', () => {
            if (music.paused) {
                music.play();
                musicButton.src = 'Image/Button.png';
            } else {
                music.pause();
                musicButton.src = 'Image/Button.png';
            }
        });
 