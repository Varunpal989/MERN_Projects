function navigateToPage(pageURL) {
    window.location.href = pageURL;
}
// Get the 'NO' button
// Get the 'NO' button
// Get the 'NO' button
const noButton = document.getElementById('noButton'); //const-->left (ap)

// Function to move the 'NO' button to a random position within the viewport
function moveNoButton() {
    // Calculate random positions within the viewport bounds
    const newX = Math.random() * 90;
    const newY = Math.random() * 90;
    console.log(newX);
    console.log(newY);
    // Set new positions
    noButton.style.position ='absolute';
    noButton.style.left = newX + 'vw';
    noButton.style.top = newY + 'vh';
}
// Add event listener for click event
noButton.addEventListener('click', moveNoButton);