
var IsDebug = false;
var canvas = document.getElementById("myCanvas2")
const ctx = canvas.getContext('2d')

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
        this.drawBall()

    }

    drawBall()
    {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "red"
        ctx.fill()
        ctx.closePath()
    }

    update()
    {
        this.x += this.dx;
        this.y += this.dy;
        this.drawBall();
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
            this.dy *= -1;
        }


    }

}


var ball = new Ball(200, 200, 5, 10);
// console.log(ball.x)
// console.log(ball.y)
// console.log(ball.speed)
// console.log(ball.radius)

function update()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ball.update();
    //console.log(ball.y)
    console.log(ball.dx);
    console.log(ball.dy);
    const loop = requestAnimationFrame(update);
}
update();

















