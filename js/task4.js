const resizingDiv = document.querySelector(".resizing");
const increaseBtn = document.querySelector(".increase");;
const decreaseBtn = document.querySelector(".decrease");

let size = 15;

increaseBtn.addEventListener("click", () => {
  size += 15;
  resizingDiv.style.width = size + "px";
  resizingDiv.style.height = size + "px";
});

decreaseBtn.addEventListener("click", () => {
  if (size <= 15) {
    return;
  }
  size -= 15;
  resizingDiv.style.width = size + "px";
  resizingDiv.style.height = size + "px";
});