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
    document.querySelector(".game").appendChild(box);
    
}