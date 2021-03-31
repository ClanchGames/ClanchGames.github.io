
export var inputDirection = { right: false, left: false }

document.addEventListener("keydown", keyDownHandler, false)
document.addEventListener("keyup", keyUpHandler, false)
function keyDownHandler(e)
{
    if (e.key == "Right" || e.key == "ArrowRight")
    {
        inputDirection.right = true;
    }
    else if (e.key == "Left" || e.key == "ArrowLeft")
    {
        inputDirection.left = true;
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
        inputDirection.right = false;
    }
    else if (e.key == "Left" || e.key == "ArrowLeft")
    {
        inputDirection.left = false;
    }
}


export function getInputDirection()
{
    console.log(inputDirection)
    return inputDirection;
}