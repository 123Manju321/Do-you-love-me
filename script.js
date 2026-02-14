const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const bgMusic = document.getElementById("bgMusic");
const heartsContainer = document.querySelector(".hearts");

/* YES BUTTON */
yesBtn.addEventListener("click", () => {
    alert("I knew it! 💖 You're the best! 😍");
    bgMusic.play();
});

/* FAST ESCAPE FUNCTION */
function moveFast() {
    const container = document.querySelector(".buttons");

    const maxX = container.clientWidth - noBtn.clientWidth;
    const maxY = container.clientHeight - noBtn.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

/* Escape on mouse move */
document.addEventListener("mousemove", moveFast);

/* Escape on touch (mobile) */
document.addEventListener("touchstart", moveFast);

/* ALSO move automatically every 400ms */
setInterval(moveFast, 400);

/* Floating Hearts */
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 15) + "px";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);