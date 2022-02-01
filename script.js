// Section 3 Menu Variables
// Menu Button variables
const familyMenuBtn = document.querySelector(".menu-text-family");
const specialMenuBtn = document.querySelector(".menu-text-special");
const socialMenuBtn = document.querySelector(".menu-text-social");

// Image Change variable
const imageChange = document.querySelector(".section-3-family-img");

// Content to change variables
const familyContent = document.querySelector(".section-3-family-content");
const specialContent = document.querySelector(".section-3-special-content");
const socialContent = document.querySelector(".section-3-social-content");

// Line Variables
const familyLine = document.querySelector(".line-family");
const specialLine = document.querySelector(".line-special");
const socialLine = document.querySelector(".line-social");

const familyMenuText = document.querySelector(".menu-text-family");

// Section 3 Menu Functions
function familyBtnChanges() {
  familyContent.classList.remove("hidden");
  specialContent.classList.add("hidden");
  socialContent.classList.add("hidden");

  familyLine.classList.add("change");
  specialLine.classList.remove("change");
  socialLine.classList.remove("change");

  familyMenuText.style.opacity = 1;
  imageChange.style.backgroundImage =
    "url(./images/homepage/family-gathering-desktop.jpg)";
}

function specialBtnChanges() {
  familyContent.classList.add("hidden");
  specialContent.classList.remove("hidden");
  socialContent.classList.add("hidden");

  familyLine.classList.remove("change");
  specialLine.classList.add("change");
  socialLine.classList.remove("change");

  familyMenuText.style.opacity = 0.5;

  imageChange.style.backgroundImage =
    "url(./images/homepage/special-events-desktop.jpg)";
}

function socialBtnChanges() {
  familyContent.classList.add("hidden");
  specialContent.classList.add("hidden");
  socialContent.classList.remove("hidden");

  familyLine.classList.remove("change");
  specialLine.classList.remove("change");
  socialLine.classList.add("change");

  familyMenuText.style.opacity = 0.5;

  imageChange.style.backgroundImage =
    "url(./images/homepage/social-events-desktop.jpg)";
}

// Section 3 Event Listeners
familyMenuBtn.addEventListener("click", () => {
  familyBtnChanges();
});

specialMenuBtn.addEventListener("click", () => {
  specialBtnChanges();
});

socialMenuBtn.addEventListener("click", () => {
  socialBtnChanges();
});
