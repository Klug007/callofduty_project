function checklogin() {
    let localstorage = localStorage.getItem("key");
    if (localstorage) {
        console.log("hammasi joyida");
    } else {
        window.location.pathname = "/login";
    }
}
checklogin();