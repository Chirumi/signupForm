function checkPassword (form) {
    const password1 = document.querySelector("#password")
    const password2 = document.querySelector("#confirm_password")
    const messages = document.querySelector("#message")

    if (!(password1.value == password2.value)) {
        messages.innerHTML = "❌"
        messages.style.color = "red"
        messages.style.fontSize = "25px"
    } else {
        messages.innerHTML = "✔"
        messages.style.color = "green"
        messages.style.fontSize = "25px"
    }
}

//To implement:
//1) Dark and Light modes using CSS variables
//2) Interactive Submit button
//3) Phone number country code list eg. +44, +672...

