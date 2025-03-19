let gameCanvas = document.getElementById('gameCanvas');
const ctx = gameCanvas.getContext('2d');
const scoreDisplay = document.getElementById('score');
const resetButton = document.getElementById('resetBtn');
const gameCanvasWidth = gameCanvas.width;
const gameCanvasHeight = gameCanvas.height;
const gameCanvasBackgroundColor = 'black';
const snakeColor = 'white';
const foodColor = 'red';
const snakeBorder = 'black';
const uniteSize = 15;
let isGameRunning = false;
let xVelocity = uniteSize;
let yVelocity = 0;
let foodXPosition = 0;
let foodYPosition = 0;
let score = 0;

let snake = [
    { x: 150, y: 150 },
    { x: 135, y: 150 },
    { x: 120, y: 150 },
    { x: 105, y: 150 },
    { x: 90, y: 150 }
]

window.addEventListener('keydown', changeDirection);
resetButton.addEventListener('click', resetGame);

startGame();

function startGame() { }
function nextTick() { }
function clearGameCanvas() { }
function createFood() { }
function drawFood() { }
function drawSnake() { }
function moveSnake() { }
function changeDirection() { }
function checkGameOver() { }
function displayGameOver() { }
function resetGame() { }