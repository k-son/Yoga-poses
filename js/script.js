////// SHOWCASE

/// DOM elements
const chevronLeft = document.getElementById("showcase__icon--left");
const chevronRight = document.getElementById("showcase__icon--right");
const imgTitle = document.querySelector(".description__title");
const imgDimensions = document.querySelector(".descritption__dimensions");
const images = document.querySelectorAll(".showcase__image");

/// Create bullets depending on number of images
const bulletBox = document.querySelector(".bullets-box");
function createBullets() {
  for (let i = 0; i < images.length; i++) {
    let bullet = document.createElement("div");
    bullet.className = "bullet";
    bulletBox.appendChild(bullet);
  }
};
createBullets();
const bullets = document.querySelectorAll(".bullet");

/// Show first image
let currIndex = 0;
let prevIndex;
let currImage = images[currIndex];
currImage.classList.add("showcase__image--active");
imgTitle.textContent = currImage.dataset.title;
imgDimensions.textContent = currImage.dataset.dimensions;
bullets[currIndex].classList.add("bullet--active");

/// Functions
function showCurrent() {
  currImage = images[currIndex];
  images[prevIndex].classList.remove("showcase__image--active");
  images[currIndex].classList.add("showcase__image--active");
  imgTitle.textContent = currImage.dataset.title;
  imgDimensions.textContent = currImage.dataset.dimensions;
  bullets[prevIndex].classList.remove("bullet--active");
  bullets[currIndex].classList.add("bullet--active");
};

function nextImage() {
  if (currIndex === images.length - 1) {
    currIndex = 0;
    prevIndex = images.length - 1;
    showCurrent();
  } else {
    currIndex++;
    prevIndex = currIndex - 1;
    showCurrent();
  }
};

function previousImage() {
  if (currIndex === 0) {
    currIndex = images.length - 1;
    prevIndex = 0;
    showCurrent();
  } else {
    currIndex--;
    prevIndex = currIndex + 1;
    showCurrent();
  }
};

/// Events
chevronRight.addEventListener('click', nextImage);
chevronLeft.addEventListener('click', previousImage);

window.addEventListener('keydown', (e) => {
  if (e.keyCode === 39) {
    nextImage();
  }
});

window.addEventListener('keydown', (e) => {
  if (e.keyCode === 37) {
    previousImage();
  }
});



