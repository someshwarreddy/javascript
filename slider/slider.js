let slides = document.querySelectorAll('.img');
const left = document.getElementById("left");
const right = document.getElementById("right");
let currentSlideIndex = 0;
let interval = setInterval(autoSlide, 2000);

left.addEventListener(
  "click",
  () => {

    currentSlideIndex--;
    // if (currentSlideIndex <= 0) {
    // left.setAttribute("disabled", "disabled");
    // right.removeAttribute("disabled", "disabled");

    // };
    showSlide();
    resetInterval()

  },
  false,
);

right.addEventListener(
  "click",
  () => {
    // if (currentSlideIndex > slides.length - 1) {

    //   right.setAttribute("disabled", "disabled");
    //   left.removeAttribute("disabled", "disabled");
    // }
    currentSlideIndex++
    showSlide();
    resetInterval()

  },
  false,
);

function showSlide() {

  if (currentSlideIndex > slides.length - 1) {
    currentSlideIndex = 0;
  } else if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }
  slides.forEach(slide => slide.classList.remove('active'));
  slides[currentSlideIndex].classList.add('active');
}

function autoSlide() {
  currentSlideIndex++;
  showSlide()
}

function resetInterval() {
  clearInterval(interval)
  interval = setInterval(autoSlide, 2000);
}





