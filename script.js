//your JS code here. If required.
// Select the container div and the h1 tag
const sizeInfo = document.getElementById('sizeInfo');
const h1 = sizeInfo.querySelector('h1');

// Function to update the size information
function updateSize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  h1.textContent = `Width: ${width} and Height: ${height}`;
}

// Add an event listener for window resize
window.addEventListener('resize', updateSize);

// Call the function initially to set the size
updateSize();
