function getRandomHexColor() {
 return `#${Math.floor(Math.random() * 
16777215)
 .toString(16)
 .padStart(6, 0)}`;
};

const bodyRef = document.querySelector("body");
const btnRef = document.querySelector(".change-color");
const spanRef = document.querySelector(".color");

btnRef.addEventListener("click", () => {
  const randomHexColor = getRandomHexColor();
  bodyRef.style.backgroundColor = randomHexColor;
  spanRef.textContent = randomHexColor;
});