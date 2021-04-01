import { getMain2IsStart, main2GameOver } from "./main2.js"
import { getMain3IsStart, main3GameOver } from "./main3.js"

var pressStart = document.getElementById("announcement");
function update()
{

    //ゲームが始まったらannoucementを非表示
    if (getMain2IsStart() || getMain3IsStart())
    {
        console.log(getMain2IsStart());
        console.log(getMain3IsStart());
        pressStart.style.visibility = "hidden";
        window.cancelAnimationFrame(managerLoop);
    }
    else
    {
        var managerLoop = window.requestAnimationFrame(update);
    }
}
update();

