var ball = {
    x: ball_x,
    y: ball_y,
    speedX: ball_speedX,
    speedY: ball_speedY,
    radius: ball_radius
}

function drawBall() {
    context.beginPath();
    context.arc(ball.x,ball.y,ball.radius,0,2*Math.PI);
    context.stroke();
    context.fillStyle="blue";
    context.fill();
    context.closePath();
};
function changeDirectionBall() {
    if (ball.x<ball.radius || ball.x>canvas.width-ball.radius)
        ball.speedX=-ball.speedX
    if (ball.y<ball.radius)
        ball.speedY=-ball.speedY;
}

function updateBall() {
    ball.x-=ball.speedX;
    ball.y-=ball.speedY;
}

function touchBallBar() {
    if (ball.x+ball.radius>=bar.x-ball.radius*Math.sqrt(2)&& ball.x+ball.radius<=bar.x+bar.width+ball.radius*Math.sqrt(2)
        && ball.y+ball.radius>=canvas.height-bar.height) {
        ball.speedY=-ball.speedY;
    }
}
