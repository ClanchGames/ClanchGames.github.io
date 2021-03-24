var canvas = document.getElementById("myCanvas")

const context = canvas.getContext('2d')


context.beginPath();
context.rect(40, 40, 50, 50)
context.fillStyle = "blue"
context.fill()
context.closePath()

context.beginPath();
context.arc(400, 160, 20, 0, Math.PI * 2, false)
context.fillStyle = "green"
context.fill()
context.closePath()
