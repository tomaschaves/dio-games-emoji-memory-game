const emojis = [
    "🏀",
    "🏀",
    "🥎",
    "🥎",
    "⚾",
    "⚾",
    "🏐",
    "🏐",
    "🏈",
    "🏈",
    "🎱",
    "🎱",
    "🎳",
    "🎳",
    "⛳",
    "⛳"
];

let openCards = [];

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));
// para cada elemento, vai ser feita uma ordenação com 2 ou -1
// como vários vão ter peso igual (2 ou -1), quem chegar primeiro fica na frente

for (let index = 0; index < emojis.length; index+=1) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[index];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

function handleClick() {
    if(openCards.length < 2) {
        this.classList.add("boxOpen");
        openCards.push(this);
    } else if(openCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    if(openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    } else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    openCards = [];

    if(document.querySelectorAll(".boxMatch").length === emojis.length) {
        alert("Você venceu!")
    }
}
