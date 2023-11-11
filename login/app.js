const form = document.querySelector("form");
const Email = document.querySelector("#email");
const Password = document.querySelector("#password");
const show = document.querySelector("#show");
const natija = document.querySelector(".natija");

form.addEventListener("submit", formSubmit);
console.log(window);
function formSubmit(e) {
    e.preventDefault();
    let kirishemail = "yosin@gmail.com";
    let kirishparoli = "123456";
    if (kirishemail === Email.value && kirishparoli === Password.value) {
        natija.innerHTML = "Welcome to Call of Duty";
        setTimeout(() => {
            window.location.pathname = "/";
            localStorage.setItem("key", true);
        }, 3000);
    } else {
        natija.innerHTML = "The password is not right , try Again!!!";

        setTimeout(() => {
            natija.innerHTML = "";
        }, 5000);
    }
    Email.value = "";
    Password.value = "";
}

show.addEventListener("change", function () {
    let checkbox = show.checked;
    if (checkbox) {
        Password.type = "text";
    } else {
        Password.type = "password";
    }
});
