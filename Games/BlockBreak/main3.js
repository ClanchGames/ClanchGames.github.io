
import { main2GameOver, getMain2Loop } from "./main2.js"
var IsDebug = false;
var canvas = document.getElementById("myCanvas1")
const ctx = canvas.getContext('2d')


export var main3GameOver = false;
export var IsGameClear = false;
var main3Direction = { right: false, left: false }

//BallClass
class Ball
{
    constructor(x, y, speed, radius)
    {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.dx = speed;
        this.dy = speed;
        this.radius = radius;
        this.draw();
    }

    draw()
    {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "yellow"
        ctx.fill()
        ctx.closePath()
    }

    update()
    {
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
        if (this.x + this.dx < 0 || this.x + this.dx > canvas.width)
        {
            this.dx *= -1;
        }
        if (this.y + this.dy - this.radius < 0)
        {
            this.dy *= -1;
        }
        if (this.y + this.dy + this.radius > canvas.height)
        {
            main3GameOver = true;
            this.dy *= -1;
        }
    }
}


//PaddleClass
export class Paddle
{
    constructor(x, width, height, speed)
    {
        this.x = x;
        this.width = width;
        this.height = height;
        this.y = canvas.height - this.height;
        this.speed = speed;
        this.update();
    }
    draw()
    {
        ctx.beginPath();
        ctx.rect(this.x, canvas.height - this.height, this.width, this.height);
        ctx.fillStyle = "lime";
        ctx.fill()
        ctx.closePath()
    }
    update()
    {
        if (this.x < canvas.width - this.width && main3Direction.right)
            this.x += this.speed;

        if (this.x > 0 && main3Direction.left)
            this.x -= this.speed;

        this.draw();

        this.isHit = HitBall(this.x, this.x + this.width, this.y, this.y + this.height);
    }
}

export class Brick
{
    constructor(x, y, width, height, color)
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.update();
    }

    draw()
    {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.color;
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.color;
        ctx.strokeStyle = "black";
        ctx.fill()
        ctx.closePath()
    }

    update()
    {
        this.draw();
        this.isHit = HitBall(this.x, this.x + this.width, this.y, this.y + this.height);
    }
}

var ball = new Ball(200, 200, 7, 10);

//paddle x,y,width,height,speed
var paddle = new Paddle((canvas.width - 200) / 2, 200, 20, 7);

var brickColumn = 5;
var brickRow = 5;
var brickWidth = canvas.width / brickColumn;
var brickHeight = canvas.height / 4 / brickRow;
var bricks = [];
export var brickcount = 0;
//とりあえず二次元配列を生成して、brickもその分生成する。
for (let i = 0; i < brickColumn; i++)
{
    bricks[i] = [];
    for (let j = 0; j < brickRow; j++)
    {
        brickcount++;
        bricks[i][j] = new Brick(brickWidth * j, brickHeight * i, brickWidth, brickHeight, "purple");
    }
}

//Ballとの衝突判定
export function HitBall(x1, x2, y1, y2)
{

    //x方向
    if (ball.x + ball.radius > x1 && ball.x - ball.radius < x2)
    {
        if (ball.y + ball.radius > y1 && ball.y - ball.radius < y2)
        {

            ball.dy *= -1;
            return true;
        }
    }
}



var main3IsStart = false;
document.addEventListener("keydown", keyDownHandler, false)
document.addEventListener("keyup", keyUpHandler, false)
function keyDownHandler(e)
{
    console.log(e.key);
    if (e.key == "D" || e.key == "d")
    {
        main3Direction.right = true;
    }
    else if (e.key == "A" || e.key == "a")
    {
        main3Direction.left = true;
    }
    if (e.key == " " || e.code == "Space")
    {
        main3IsStart = true;
        return false;
    }

}

function keyUpHandler(e)
{
    if (e.key == "D" || e.key == "d")
    {
        main3Direction.right = false;
    }
    else if (e.key == "A" || e.key == "a")
    {
        main3Direction.left = false;
    }
}




function update()
{
    if (main3GameOver || main2GameOver)
    {
        if (IsDebug)
        {
            var main3loop = window.requestAnimationFrame(update);
        }
        else
        {
            window.cancelAnimationFrame(main3loop);
            window.cancelAnimationFrame(getMain2Loop);
            if (main3GameOver)
            {
                if (window.confirm("GameOver"))
                {
                    location.href = "";
                }
            }
        }
    }
    else
    {
        var main3loop = window.requestAnimationFrame(update);
    }

    if (!main3IsStart)
    {
        return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ball.update();
    paddle.update();


    for (let i = 0; i < brickColumn; i++)
    {
        for (let j = 0; j < brickRow; j++)
        {
            bricks[i][j].update();
            if (bricks[i][j].isHit)
            {
                brickcount--;
                bricks[i][j] = new Brick();
            }

            if (brickcount <= 0)
            {
                IsGameClear = true;
            }
        }
    }
}
update();
export function getMain3Loop()
{
    return main3loop;
}
export function getMain3IsStart()
{
    return main3IsStart;
}


















