const board = document.querySelector("#board");
const SQUARES_NUMBER = 500;
const colors = [];
const COLOR_COUNT = 8;

for (let i = 0; i < COLOR_COUNT; i++) {
    let color = `#`;
    for (let i = 0; i < 6; i++) {
        color += randomInt(16).toString(16);
    }
    colors.push(color);
}

console.log(colors);

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", setColor);
    square.addEventListener("mouseleave", removeColor);
    board.append(square);
}

function setColor(elem) {
    const color = getRandomColor();
    elem.target.style.backgroundColor = color;
    elem.target.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(elem) {
    elem.target.style.backgroundColor = "#1d1d1d";
    elem.target.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
    const index = randomInt(colors.length);
    return colors[index];
}

function randomInt(to) {
    return Math.floor(Math.random() * to);
}
