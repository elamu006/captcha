let captchaText = "";

function generateCaptcha() {
    let chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    captchaText = "";

    for (let i = 0; i < 6; i++) {
        captchaText += chars.charAt(
            Math.floor(Math.random() * chars.length)
        );
    }

    document.getElementById("captcha").textContent = captchaText;
}

generateCaptcha();

document.getElementById("refreshBtn").addEventListener("click", () => {
    generateCaptcha();
    document.getElementById("captchaInput").value = "";
    document.getElementById("message").textContent = "";
});

document.getElementById("submitBtn").addEventListener("click", () => {
    let userInput =
        document.getElementById("captchaInput").value.trim();

    let message = document.getElementById("message");

    if (userInput === captchaText) {
        message.style.color = "green";
        message.textContent = "Captcha Verified Successfully!";
    } else {
        message.style.color = "red";
        message.textContent = "Invalid Captcha!";
    }
});