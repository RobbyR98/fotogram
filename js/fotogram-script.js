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

let currentIndex = 0;

function render() {
  let contentRef = document.getElementById('image-container');
  for (let index = 0; index < arrayImgs.length; index++) {
    contentRef.innerHTML += generateImageOverviewHTML(index);        
  }
}

function stopBubbling(event) {
  event.stopPropagation();
}

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

function closeOverlay() {
  let overlayRef = document.getElementById('overlay');
  overlayRef.classList.add('d-none');
  document.body.classList.remove('no-scroll');
}

function openImage(index) {
  let imageDisplay = document.getElementById('imageDisplay');
  imageDisplay.src = arrayImgs[index];
}

function changeImage(direction) {
  if (direction === 'next') {
    currentIndex = (currentIndex + 1) % arrayImgs.length; 
  } else if (direction === 'prev') {
    currentIndex = (currentIndex - 1 + arrayImgs.length) % arrayImgs.length; 
  }
  openImage(currentIndex);
}