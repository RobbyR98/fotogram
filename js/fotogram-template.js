function generateImageOverviewHTML(index) {
  return `<div onclick="toggleOverlay(${index})">
          <img src="${arrayImgs[index]}" alt="">
          </div>`
}

function generateDetailViewHTML(image, ) {
  return `<div id="background-overlay" onclick="closeOverlay()">
            <div id="overlay">
              <div class="nav-overlay">          
                <img id="imageDisplay" src="${image}" alt="" onclick="stopBubbling(event)">
                <div class="btn-position" onclick="stopBubbling(event)">
                  <button onclick="changeImage('prev')"><</button>
                  <button onclick="closeOverlay()">X</button>
                  <button onclick="changeImage('next')">></button>
                </div>
              </div>
            </div>
          </div>`;
}