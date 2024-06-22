const slides = document.querySelectorAll(".slides");
const slideBtns = document.querySelectorAll(".slide-btn");
const timer = document.querySelector("#timer");
let slideNumber = 1;
function showSlide(index) {
  for (let index = 0; index < slides.length; index++) {
    slides[index].classList.remove("active");
  }
  slides[index].classList.add("active");
}

for (let index = 0; index < slideBtns.length; index++) {
  slideBtns[index].addEventListener("click", () => {
    showSlide(index);
    setActiveBtn(index);
    slideNumber = index;
  });
}

function setActiveBtn(index) {
  for (let index = 0; index < slideBtns.length; index++) {
    slideBtns[index].classList.remove("active");
  }
  slideBtns[index].classList.add("active");
}

setInterval(() => {
  showSlide(slideNumber);
  setActiveBtn(slideNumber);
  slideNumber++;
  if (slideNumber == 4) {
    slideNumber = 0;
  }
}, 2000);

let hour = 20;
let minutes = 0;
let seconds = 0;

function clock() {
  seconds--;
  if (seconds < 0) {
    seconds = 59;
    minutes--;
  }
  if (minutes < 0) {
    seconds = 59;
    minutes = 59;
    hour--;
  }
  if (hour < 0) {
    seconds = 0;
    minutes = 0;
    hour = 20;
  }

  return `${format(hour)}:${format(minutes)}:${format(seconds)}`;
}

function format(number) {
  return ("0" + number).slice(-2);
}

setInterval(() => {
  timer.textContent = clock();
}, 1000);
