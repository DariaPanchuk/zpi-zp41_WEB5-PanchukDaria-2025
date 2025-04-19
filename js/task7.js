const numberOfCategories = document.querySelectorAll("li.item");
console.log("Number of categories:", numberOfCategories.length);

const listOfCategories = document.querySelectorAll(".item");
listOfCategories.forEach(function (listOfCategories) {
    const nameOfCategory = listOfCategories.querySelector("h2");
    console.log("Category:", nameOfCategory.textContent);

    const numberOfElements = listOfCategories.querySelectorAll("li");
    console.log("Elements:", numberOfElements.length);
});