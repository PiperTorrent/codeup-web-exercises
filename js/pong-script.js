const gameBoard = document.querySelector(#gameBoard);
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const resetButton = document.querySelector("#resetButton");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackground = "green";
const paddle1Color = "red";
const paddle2Color = "red";
const paddleBorder = "black";
const ballColor = "yellow";
const ballBorderColor = "black";
const ballRadius = 12.5;
const paddleSpeed = 50;
let intervalID;
let ballSpeed =1;
let ballX = gameWidth / 2;
let ballY = gameHeight / 2;
let ballXDirection = 0;
let ballYDirection = 0;
let player1Score =0;
let player2Score =0;
let paddle1 = {
    width: 25,
    height: 100,
    x: 0,
    y: 0,
};
let paddle2 = {
    width: 25,
    height: 100,
    x: gameWidth - 25,
    y: gameHeight - 100,
};

window.addEventListener("keydown", changeDirection);
resetButton.addEventListener("click, resetGame");

gameStart();
drawPaddles();

function gameStart() {};
function nextTick() {};
function clearBoard() {};
function drawPaddles() {
    ctx.strokeStyle = paddleBorder;

    ctx.fillStyle = paddle1Color;
    ctx.fillRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
    ctx.strokeRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
};
function createBall() {};
function moveBall() {};
function drawBall() {};
function checkCollision() {};
function changeDirection() {};
function updateScore() {};
function resetGame() {};
