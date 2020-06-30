var isGameOver = false;
var isGameWin = false;
var score = 0;
var maxScore=brick.col * brick.row;


function touchBallBrick() {
    brickList.forEach(function (b) {
        if (!b.isBroken) {
            if (ball.x>=b.x && ball.x<=b.x+brick.width && ball.y+ball.radius>=b.y && ball.y-ball.radius <=b.y + brick.height) {
                ball.speedY=-ball.speedY;
                b.isBroken=true;
                score+=1;
                if (score>=maxScore) {
                    isGameOver=true;
                    isGameWin=true;
                }
            }
        }
    });
}

function checkGameOver() {
    if (ball.y>canvas.height-ball.radius) {
        isGameOver=true;
    }
}

function gameOver() {
    if (!isGameOver) {
        alert('CONGRATS! YOU WIN!');
    } else {
        alert('SORRY! YOU LOSE!');
    }
}
function startGame() {
    if (!isGameOver) {
        context.clearRect(0,0,canvas.width,canvas.height);
        drawBall();
        drawBar();
        drawBrick();
        touchBarCanvas();
        touchBallBar();
        touchBallBrick();
        changeDirectionBall();
        checkGameOver();
        updateBall();
        requestAnimationFrame(startGame);
    } else {
        gameOver();
    }
}
startGame();
