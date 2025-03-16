const gameCanvas = document.getElementById('gameCanvas');
const ctx = gameCanvas.getContext('2d');
const displayScore = document.getElementById('score');
const resetBtn = document.getElementById('resetBtn');
const gameCanvasWidth = gameCanvas.width;
const gameCanvasHeight = gameCanvas.height;
const gameCanvasBGColor = "black";
const snakeColor = "white";
const snakeBorder = "black";
const foodColor = "purple";
const unitSize = 25;
let running = false;
let xVelocity = unitSize;
let yVelocity = 0;
let foodX;
let foodY;
let snake = [
    { x: unitSize * 1, y: 0 },
    { x: unitSize * 2, y: 0 },
    { x: 0, y: 0 },
];
gameCanvas.style.backgroundColor = gameCanvasBGColor;

window.addEventListener('keydown', changeDirection);
resetBtn.addEventListener('click', resetGame);
gameStart();

function gameStart() {
    createFood();
    drawFood();
    drawSnake();
}
function nextTick() { }
function clearCanvas() { }
function createFood() {
    function randomFood(min, max) {
        const randNum = Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize;
        return randNum;
    }
    foodX = randomFood(0, gameCanvasWidth - unitSize);
    foodY = randomFood(0, gameCanvasWidth - unitSize);
}
function drawFood() {
    ctx.fillStyle = foodColor;
    ctx.fillRect(foodX, foodY, unitSize, unitSize);
}
function moveSnake() { }
function drawSnake() {
    ctx.fillStyle = snakeColor;
    ctx.strokeStyle = snakeBorder;
    snake.forEach((item) => {
        ctx.fillRect(item.x, item.y, unitSize, unitSize);
        ctx.strokeRect(item.x, item.y, unitSize, unitSize);
    })
}
function changeDirection() { }
function checkGameOver() { }
function showGameOver() { }
function resetGame() { }