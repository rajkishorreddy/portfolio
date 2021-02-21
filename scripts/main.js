//
const slides = document.querySelectorAll(".slide");
const btn_left = document.querySelector(".slide-btn-left");
const dots = document.querySelector(".dots");
const btn_right = document.querySelector(".slide-btn-right");
const mail = document.querySelector(".section__about-data-mail");
const popup = document.querySelector(".section__about-data-popup");
const frontCard = document.querySelectorAll(
  ".slide-container-1-card-side-front"
);
const backCard = document.querySelectorAll(".slide-container-1-card-side-back");
const wordChange = document.querySelector(".section__about-data-span");

mail.addEventListener("mouseover", () => {
  popup.classList.remove("hidden");
});
mail.addEventListener("mouseout", () => {
  popup.classList.add("hidden");
});
///implementing slider
let currSlide = 0;
const gotoslide = (num) => {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${(i - num) * 100}%)`)
  );
};
const createDots = () => {
  slides.forEach((s, i) =>
    dots.insertAdjacentHTML(
      "beforeend",
      `<button class="btn-each" data-slide="${i}"></button>`
    )
  );
};
const activeDots = function (num) {
  document
    .querySelectorAll(".btn-each")
    .forEach((btn) => btn.classList.remove("btn__each-active"));
  document
    .querySelector(`.btn-each[data-slide="${num}"]`)
    ?.classList.add("btn__each-active");
};

const init = () => {
  gotoslide(0);
  createDots();
  activeDots(0);
};
init();
const prevSlide = () => {
  if (currSlide <= 0) currSlide = 2;
  else currSlide--;
  gotoslide(currSlide);
  activeDots(currSlide);
};
const nextSlide = () => {
  if (currSlide >= 2) currSlide = 0;
  else currSlide++;
  gotoslide(currSlide);
  activeDots(currSlide);
};
btn_left.addEventListener("click", prevSlide);
btn_right.addEventListener("click", nextSlide);

dots.addEventListener("click", function (e) {
  if (e.target.classList.contains(".btn-each"));
  const slide = e.target.dataset.slide;
  gotoslide(slide);
  activeDots(slide);
});
const slideFunctionality = () => {
  setInterval(() => {
    nextSlide();
  }, 4000);
};

const animeFunctionality = () => {
  setInterval(() => {
    frontCard.forEach((el) => el.classList.toggle("animeclassfront"));
    backCard.forEach((el) => el.classList.toggle("animeclassback"));
  }, 1500);
};
const names = ["raj", "kishor", "rajkishor"];
let i = 0;
const wordChangeFn = () => {
  setInterval(() => {
    wordChange.textContent = names[i];
    if (i >= 2) i = 0;
    else i++;
  }, 4000);
};

const slideEffect = () => {
  let i = -5;
  setInterval(() => {
    document.querySelector(
      ".slide-container-2-info-ele-1"
    ).style.left = `${i}rem`;
    document.querySelector(
      ".slide-container-2-info-ele-2"
    ).style.left = `${i}rem`;
    document.querySelector(
      ".slide-container-2-info-ele-3"
    ).style.left = `${i}rem`;
    if (i < 160) i++;
    else i = -5;
  }, 60);
};
// slideEffect();
wordChangeFn();
animeFunctionality();
// slideFunctionality();
