const MAP_SIZE_X = 30;
const MAP_SIZE_Y = 20;

var map = [];

export function generateMap(ctx, canvasWidth, canvasHeight)
{
    console.log(canvasWidth);
    console.log(canvasHeight);
    ctx.font = "20px serif";
    ctx.fillStyle = 'white';
    ctx.fillText("@", 10, 10);
    for (let x = 0; x < MAP_SIZE_X; x++)
    {
        map[x] = [];
        for (let y = 0; y < MAP_SIZE_Y; y++)
        {
            //map[x][y] = 
        }
    }
}
    // ctx.fillText(inputDirection(), 100, 100);

