import { getInputDirection as inputDirection } from "./controller.js"
import { generateMap } from "./map.js"

var canvas = document.getElementById("mainCanvas");
var ctx = canvas.getContext('2d');



function update()
{
    // ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    var mainLoopRequest = window.requestAnimationFrame(update);
};
update();

generateMap(ctx, canvas.width, canvas.height);
// generateMap(canvas.clientHeight, canvas.clientHeight);