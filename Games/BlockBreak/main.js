const IsDebug = false;
var canvas = document.getElementById("myCanvas")
// canvas.style.width = "800px";
// canvas.style.height = "600px";
// var scale = window.devicePixelRatio;
// console.log(window.devicePixelRatio)
// const OriginCanvasWidth = canvas.style.width;
// const OriginCanvasHeight = canvas.style.height;
// canvas.width = 800 * scale;
// canvas.height = 600 * scale;

const context = canvas.getContext('2d')


context.beginPath();
context.rect(40, 40, 50, 50)
context.strokeStyle = "blue"
context.stroke()
context.closePath()

var x = canvas.width / 2;
var y = canvas.height - 50;

var dx = 5;
var dy = -5;
var ballRadius = 10
var paddleHeight = 40;
var paddleWidth = 200;
var paddleX = (canvas.width - paddleWidth) / 2

var rightPressed = false;
var leftPressed = false;

var score = 0;

var brickRowCount = 5;
var brickColumnCount = 5;
var brickWidth = 200;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 5;
var brickOffsetLeft = 5;
var bricks = [];
for (var c = 0; c < brickColumnCount; c++)
{
    bricks[c] = [];
    for (var r = 0; r < brickRowCount; r++)
    {
        bricks[c][r] = { x: 0, y: 0, status: 1 }
    }
}

function collisionDitection()
{
    for (var c = 0; c < brickColumnCount; c++)
    {
        for (var r = 0; r < brickRowCount; r++)
        {
            var b = bricks[c][r]
            if (b.status == 1)
            {
                if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight)
                {
                    dy *= -1;
                    b.status = 0;
                    score++;
                }
            }
        }
    }
}

function drawBall()
{
    context.beginPath();
    context.arc(x, y, ballRadius, 0, Math.PI * 2)
    context.fillStyle = "red"
    context.fill()
    context.closePath()
}

function drawPaddle()
{
    context.beginPath();
    context.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight)
    context.fillStyle = "green"
    context.fill()
    context.closePath()
}

function drawBricks()
{
    for (var c = 0; c < brickColumnCount; c++)
    {
        for (var r = 0; r < brickRowCount; r++)
        {
            if (bricks[c][r].status == 1)
            {
                var brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
                var brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;

                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;

                context.beginPath();
                context.rect(brickX, brickY, brickWidth, brickHeight)
                context.fillStyle = "blue"
                context.fill()
                context.closePath()
            }
        }
    }
}

function drawScore()
{
    context.font = "30px Arial";
    context.fillStyle = "black";
    context.fillText("Score:" + score, 8, 30);
}

function draw()
{
    context.clearRect(0, 0, canvas.width, canvas.height)
    drawBall()
    drawBricks()
    drawPaddle()
    collisionDitection();
    drawScore();

    if (y + dy - ballRadius < 0) //画面上部に行ったとき
    {
        dy *= -1
    }
    //パドルの横幅に入った時
    else if (x > paddleX && x < paddleX + paddleWidth)
    {
        //パドルに触れたとき
        if (y + dy + ballRadius > canvas.height - paddleHeight)
        {
            dy *= -1;
        }
    }
    if (y + dy + ballRadius > canvas.height)
    {
        if (!IsDebug)
        {
            alert("Game Over");
            document.location.reload();
            clearInterval(interval);
        }
    }

    if (x + dx - ballRadius < 0 || x + dx - ballRadius > canvas.width)
    {
        dx *= -1
    }

    if (rightPressed && paddleX < canvas.width - paddleWidth)
    {
        paddleX += 7;
    } else if (leftPressed && paddleX > 0)
    {
        paddleX -= 7;
    }

    x += dx;
    y += dy;

}



document.addEventListener("keydown", keyDownHandler, false)
document.addEventListener("keyup", keyUpHandler, false)

function keyDownHandler(e)
{

    if (e.key == "Right" || e.key == "ArrowRight")
    {
        rightPressed = true;
    } else if (e.key == "Left" || e.key == "ArrowLeft")
    {
        leftPressed = true;
    }
    if (e.key == " " || e.code == "Space")
    {
        IsStart = true;
        return false;
    }
}

function keyUpHandler(e)
{
    if (e.key == "Right" || e.key == "ArrowRight")
    {
        rightPressed = false;
    } else if (e.key == "Left" || e.key == "ArrowLeft")
    {
        leftPressed = false;
    }
}

scroll

var IsStart = false;
var interval;
var update = setInterval(() =>
{
    if (IsStart)
    {
        clearInterval(update)
        interval = setInterval(draw, 10)
    }
})
document.onkeydown = pageMove;

function pageMove(e)
{
    // console.log(e)
    if (e.code == "Space")
    {
        return false;
    }
}
