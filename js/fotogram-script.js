/**
 * Array containing paths to images for the gallery.
 */
let arrayImgs = [    
  "./img-fotogram/picture1.jpg",
  "./img-fotogram/picture2.jpg",
  "./img-fotogram/picture3.jpg",
  "./img-fotogram/picture4.jpg",
  "./img-fotogram/picture5.jpg",
  "./img-fotogram/picture6.jpg",
  "./img-fotogram/picture7.jpg",
  "./img-fotogram/picture8.jpg",
  "./img-fotogram/picture9.jpg",
  "./img-fotogram/picture10.jpg",
  "./img-fotogram/picture11.jpg",
  "./img-fotogram/picture12.jpg",
];

/**
 * The index of the currently displayed image in the gallery.
 */
let currentIndex = 0;

/**
 * Renders the image gallery by appending image thumbnails to the container.
 */
function render() {
  let contentRef = document.getElementById('image-container');
  for (let index = 0; index < arrayImgs.length; index++) {
    contentRef.innerHTML += generateImageOverviewHTML(index);        
  }
}

/**
 * Stops the propagation of an event.
 * 
 * @param {Event} event - The event to stop propagation for.
 */
function stopBubbling(event) {
  event.stopPropagation();
}

/**
 * Toggles the overlay view for a specific image.
 * 
 * @param {number} index - The index of the image to display in the overlay.
 */
function toggleOverlay(index) {
  currentIndex = index; 
  let image = arrayImgs[index];
  let overlayRef = document.getElementById('overlay');
  if (overlayRef.classList.contains('d-none')) {
    document.body.classList.add('no-scroll'); 
    overlayRef.classList.remove('d-none');
  } else {
    document.body.classList.remove('no-scroll'); 
    overlayRef.classList.add('d-none');
  }
  overlayRef.innerHTML = generateDetailViewHTML(image, index); 
}

/**
 * Closes the overlay view.
 */
function closeOverlay() {
  let overlayRef = document.getElementById('overlay');
  overlayRef.classList.add('d-none');
  document.body.classList.remove('no-scroll');
}

/**
 * Updates the main image in the overlay to the selected image.
 * 
 * @param {number} index - The index of the image to display.
 */
function openImage(index) {
  /** @type {HTMLImageElement | null} */
  let imageDisplay = document.getElementById('imageDisplay');
  imageDisplay.src = arrayImgs[index];
}

/**
 * Changes the currently displayed image in the overlay based on direction.
 * 
 * @param {string} direction - The direction to change the image ('next' or 'prev').
 */
function changeImage(direction) {
  if (direction === 'next') {
    currentIndex = (currentIndex + 1) % arrayImgs.length; 
  } else if (direction === 'prev') {
    currentIndex = (currentIndex - 1 + arrayImgs.length) % arrayImgs.length; 
  }
  openImage(currentIndex);
}