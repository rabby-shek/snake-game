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
let gameSpeed = 200;
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


function startGame() {
    isGameRunning = true;
    scoreDisplay.textContent = 0;
    createFood();
    drawFood();
    nextTick();
}
function nextTick() {

    if (isGameRunning) {
        setTimeout(() => {
            clearGameCanvas();
            drawFood();
            moveSnake();
            drawSnake();
            checkGameOver();
            nextTick();
        }, gameSpeed);
    }
    else {
        displayGameOver();
    }
}
function clearGameCanvas() {
    ctx.fillStyle = gameCanvasBackgroundColor;
    ctx.fillRect(0, 0, gameCanvasWidth, gameCanvasHeight);
}
function createFood() {
    function randomFood(max, min) {
        const randNum = Math.floor((Math.random() * (max - min) + min) / uniteSize) * uniteSize;
        return randNum;
    }

    foodXPosition = randomFood(0, gameCanvasWidth - uniteSize);
    foodYPosition = randomFood(0, gameCanvasHeight - uniteSize);
}
function drawFood() {
    ctx.fillStyle = foodColor;
    ctx.fillRect(foodXPosition, foodYPosition, uniteSize, uniteSize);
}
function drawSnake() {
    ctx.fillStyle = snakeColor;
    ctx.strokeStyle = snakeBorder;
    snake.forEach(snakePart => {
        ctx.fillRect(snakePart.x, snakePart.y, uniteSize, uniteSize);
        ctx.strokeRect(snakePart.x, snakePart.y, uniteSize, uniteSize);
    });
}
function moveSnake() {
    const head = { x: snake[0].x + xVelocity, y: snake[0].y + yVelocity };
    snake.unshift(head);
    // if food is eaten
    if (snake[0].x === foodXPosition && snake[0].y === foodYPosition) {
        score += 1;
        scoreDisplay.textContent = score;
        handleSpeedChange();
        createFood();

    } else {
        snake.pop();
    }
}
function changeDirection(e) {
    const keyPressed = e.keyCode;
    const left = 37;
    const up = 38;
    const right = 39;
    const down = 40;

    const goingUp = yVelocity === -uniteSize;
    const goingDown = yVelocity === uniteSize;
    const goingRight = xVelocity === uniteSize;
    const goingLeft = xVelocity === -uniteSize;

    switch (true) {
        case keyPressed === left && !goingRight:
            xVelocity = -uniteSize;
            yVelocity = 0;
            break;
        case keyPressed === up && !goingDown:
            xVelocity = 0;
            yVelocity = -uniteSize;
            break;
        case keyPressed === right && !goingLeft:
            xVelocity = uniteSize;
            yVelocity = 0;
            break;
        case keyPressed === down && !goingUp:
            xVelocity = 0;
            yVelocity = uniteSize;
            break;
    }
}
function handleSpeedChange() {
    if (score % 5 === 0 && score !== 0) {
        gameSpeed = Math.max(gameSpeed - 50, 50);
    }

}
function checkGameOver() {
    // check if snake has hit the wall
    const hitLeftWall = snake[0].x < 0;
    const hitRightWall = snake[0].x > gameCanvasWidth - uniteSize;
    const hitTopWall = snake[0].y < 0;
    const hitBottomWall = snake[0].y > gameCanvasHeight - uniteSize;
    // check if snake has hit itself
    let isSnakeHit = false;
    for (let i = 1; i < snake.length; i++) {
        if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
            isSnakeHit = true;
            break;
        }
    }
    isGameRunning = !(
        hitLeftWall || hitRightWall || hitTopWall || hitBottomWall || isSnakeHit
    );
    if (!isGameRunning) {
        ctx.clearRect(0, 0, gameCanvasWidth, gameCanvasHeight);
    }

}
function displayGameOver() {
    ctx.font = "24px Arial";
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.fillText('Game Over', gameCanvasWidth / 2, gameCanvasHeight / 2);
    ctx.fillText(`Your score is ${score}`, gameCanvasWidth / 2, gameCanvasHeight / 2 + 50);
}
function resetGame() {
    // reset the snake's position and velocity
    snake = [
        { x: 150, y: 150 },
        { x: 135, y: 150 },
        { x: 120, y: 150 },
        { x: 105, y: 150 },
        { x: 90, y: 150 }
    ];
    xVelocity = uniteSize;
    yVelocity = 0;
    score = 0;
    scoreDisplay.textContent = 0;
    createFood();
    isGameRunning = true;
    nextTick();
}
