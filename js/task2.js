const swapButton = document.querySelector(".swap-button");
const swapInput1 = document.querySelector(".swap-input-1");
const swapInput2 = document.querySelector(".swap-input-2");

swapButton.addEventListener("click",  () => {
  const temp = swapInput1.value;
  swapInput1.value = swapInput2.value;
  swapInput2.value = temp;
});
