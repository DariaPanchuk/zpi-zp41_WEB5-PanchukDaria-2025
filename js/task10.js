function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const input = document.querySelector(".number-input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

function createBoxes(amount) {
    boxesContainer.innerHTML = ""; 
    if (amount < 1 || amount > 100 || amount == 0) {
        alert("Введіть число від 1 до 100!");
        return;
    }

    let size = 30;
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < amount; i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        fragment.appendChild(box);
        size += 10;
    }

    boxesContainer.appendChild(fragment);
    input.value = ""; 
}

function destroyBoxes() {
    boxesContainer.innerHTML = "";
}

createButton.addEventListener("click", () => {
    const amount = parseInt(input.value, 10);
    createBoxes(amount);
});

destroyButton.addEventListener("click", destroyBoxes);
