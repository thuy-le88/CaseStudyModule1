var bar = {
    height: bar_height,
    width: bar_width,
    x: bar_x,
    y: bar_y,
    speed: bar_speed,
    isMovingLeft: false,
    isMovingRight: false,
};
function drawBar() {
    context.beginPath();
    context.rect(bar.x,bar.y,bar.width,bar.height);
    context.stroke();
    context.fillStyle="black";
    context.fill();
    context.closePath();
}
function touchBarCanvas() {
    if (bar.isMovingLeft) {
        bar.x-=bar.speed;
    } else if (bar.isMovingRight) {
        bar.x+=bar.speed;
    }
    if (bar.x<0) {
        bar.x=0
    } else if (bar.x>canvas.width-bar.width) {
        bar.x=canvas.width-bar.width;
    }
}
document.addEventListener('keyup',function (event) {
    console.log('Key UP');
    console.log(event);
    if (event.keyCode==37) {
        bar.isMovingLeft=false;
    } else if (event.keyCode==39) {
        bar.isMovingRight=false;
    }
});

document.addEventListener('keydown',function (event) {
    console.log('Key DOWN');
    console.log(event);
    if (event.keyCode==37) {
        bar.isMovingLeft=true;
    } else if (event.keyCode==39) {
        bar.isMovingRight=true;
    }

});