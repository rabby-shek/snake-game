let gameCanvas = document.getElementById('gameCanvas');
const ctx = gameCanvas.getContext('2d');
const gameCanvasBgColor = "black";
let canvasWidth = gameCanvas.width = 500;
let canvasHeight = gameCanvas.height = window.innerHeight;
const snakeBodyColor = 'purple';
const snakeBorderColor = 'black';
const foodColor = 'red';
const uniteSize = 15;
let foodXPosition = 0;
let foodYPosition = 0;

const snake = [
    { x: 150, y: 150 },
    { x: 135, y: 150 },
    { x: 120, y: 150 },
    { x: 105, y: 150 }
]

drawSnake();
drawFood();
function drawSnake() {
    snake.forEach((unit) => {
        ctx.fillStyle = snakeBodyColor;
        ctx.strokeStyle = snakeBorderColor;
        ctx.fillRect(unit.x, unit.y, uniteSize, uniteSize);
        ctx.strokeRect(unit.x, unit.y, uniteSize, uniteSize);
    });
}

function drawFood() {
    let foodXPosition = Math.floor(Math.random() * canvasWidth);
    let foodYPosition = Math.floor(Math.random() * canvasHeight);
    ctx.fillStyle = foodColor;
    ctx.fillRect(foodXPosition, foodYPosition, uniteSize, uniteSize);
}

function startGame() {

    setTimeout(() => {
        clearScreen();
        drawFood();
        drawSnake();
        moveSnake();
        requestAnimationFrame(startGame);
    }, 500);
}
startGame();

function moveSnake() {
    const head = { x: snake[0].x + uniteSize, y: snake[0].y };
    snake.unshift(head);
    snake.pop();
}

function snakeController(){
    
}
function clearScreen() {
    ctx.fillStyle = gameCanvasBgColor;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
}
