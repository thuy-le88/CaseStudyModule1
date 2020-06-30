var brick = {
    offset: brick_offset,
    margin: brick_margin,
    row: brick_row,
    col: brick_col,
    width: brick_width,
    height: brick_height,
    space: brick_space
}

var brickList= [];
for (let i=0;i<brick.row;i++) {
    for (let j=0;j<brick.col;j++) {
        brickList.push({
            x: brick.offset+j*(brick.width+brick.margin),
            y: brick.offset+i*(brick.height+brick.space),
            isBroken: false
        });
    }
}

function drawBrick() {
    brickList.forEach(function (b) {
        if (!b.isBroken) {
            context.beginPath();
            context.rect(b.x, b.y, brick.width, brick.height);
            context.fill();
            context.closePath();
        }
    });
}

