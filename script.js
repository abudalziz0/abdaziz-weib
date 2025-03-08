document.addEventListener("DOMContentLoaded", function() {
    let text = document.querySelector(".glitch-text");
    let messages = ["New systems generate new threats...", "The revolution has begun...", "لا حياة لمن تنادي"];
    let index = 0;

    setInterval(() => {
        text.textContent = messages[index];
        index = (index + 1) % messages.length;
    }, 3000);
});
