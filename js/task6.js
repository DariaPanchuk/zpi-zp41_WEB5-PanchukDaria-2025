const numbers = [1, 4, 8, 16, 20, 30];

const listOfNumbers = document.querySelector(".numbers");
const doubleButton = document.querySelector(".double");

const list = numbers.map((number) => {
    const li = document.createElement("li");
    li.textContent = number;
    li.classList.add("item");
    return li;
});

listOfNumbers.append(...list);

doubleButton.addEventListener("click", () => {
    const items = listOfNumbers.querySelectorAll("li");

    items.forEach((item) => {
        const currentValue = parseInt(item.textContent, 10);
        item.textContent = currentValue * 2;
    });
});
