const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const celebration = document.getElementById("celebration");
const options = document.querySelector(".options");

yesBtn.addEventListener("click", () => {
    celebration.classList.remove("hidden");

    for(let i = 0; i<20; i++){
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * 100 + "%";
        confetti.style.top = "0";
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 60%)`;
        document.querySelector(".card").appendChild(confetti);

        setTimeout(() => confetti.remove(), 1500);
    }
});

let isMoving = false;

document.addEventListener("mousemove", (e) => {
    if (isMoving) return;

    const btnRect = noBtn.getBoundingClientRect();
    const btnCenterX = btnRect.left + btnRect.width / 2;
    const btnCenterY = btnRect.top + btnRect.height / 2;

    const distance = Math.hypot(
        e.clientX - btnCenterX,
        e.clientY - btnCenterY
    );

    if (distance < 90) {
        moveNoButton();
    }
});

function moveNoButton() {
    isMoving = true;

    const maxX = options.clientWidth - noBtn.offsetWidth;
    const maxY = options.clientHeight - noBtn.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    // cooldown — prevents vibration
    setTimeout(() => {
        isMoving = false;
    }, 250); // match CSS transition time
}

setInterval(() => {
    const heart = document.createElement("div");
    heart.innerText = "💖";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-20px";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.animation = "floatUp 4s linear forwards";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
}, 800);
