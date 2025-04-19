const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const { email } = event.target.elements;
    const { password } = event.target.elements;

    const data = {
        email: email.value.trim(),
        password: password.value.trim(),
    };

    if (email.value === "" || password.value === "") {
        alert("All form fields must be filled in!");
    } else {
        console.log(data);
        loginForm.reset();
    }
});