////// SHOWCASE

/// DOM elements
const chevronLeft = document.getElementById("showcase__button--left");
const chevronRight = document.getElementById("showcase__button--right");
const nameOriginal = document.querySelector(".name--original");
const nameEnglish = document.querySelector(".name--english");
const images = document.querySelectorAll(".showcase__image");
const poseDescriptions = document.querySelectorAll(".pose");

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
nameOriginal.textContent = currImage.dataset.original;
nameEnglish.textContent = currImage.dataset.english;
bullets[currIndex].classList.add("bullet--active");
poseDescriptions[currIndex].classList.add("pose--active");

/// Functions
function showCurrent() {
  currImage = images[currIndex];
  images[prevIndex].classList.remove("showcase__image--active");
  images[currIndex].classList.add("showcase__image--active");
  nameOriginal.textContent = currImage.dataset.original;
  nameEnglish.textContent = currImage.dataset.english;
  bullets[prevIndex].classList.remove("bullet--active");
  bullets[currIndex].classList.add("bullet--active");
  poseDescriptions[prevIndex].classList.remove("pose--active");
  poseDescriptions[currIndex].classList.add("pose--active");
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
