import { getMain2IsStart, main2GameOver } from "./main2.js"
import { getMain3IsStart, main3GameOver } from "./main3.js"

import { IsGameClear as main3clear } from "./main3.js"
import { IsGameClear as main2clear } from "./main2.js"
import { getMain2Loop } from "./main2.js"
import { getMain3Loop } from "./main3.js"

// Musicの初期化
var music = new Audio();
MusicInit();

var pressStart = document.getElementById("announcement");
function update()
{
    //ゲームが始まったらannoucementを非表示
    if (getMain2IsStart() || getMain3IsStart())
    {
        pressStart.style.visibility = "hidden";
        window.cancelAnimationFrame(managerLoop);

        // BGMを再生
        playMusic();
    }
    else
    {
        var managerLoop = window.requestAnimationFrame(update);
    }
}
update();


function checkGameClear()
{
    if (main2clear && main3clear)
    {
        window.cancelAnimationFrame(getMain2Loop);
        window.cancelAnimationFrame(getMain3Loop);
        window.cancelAnimationFrame(checkloop);
        setTimeout(() =>
        {
            if (window.confirm("Game Clear!!"))
            {
                location.href = "";
            }
        }, 100);
    }
    else
    {
        var checkloop = window.requestAnimationFrame(checkGameClear);
    }
}
checkGameClear();


const volumeBar = document.getElementById("volumeBar");
// volumeBar.min = "0";
// volumeBar.max = "0.5";
volumeBar.addEventListener("input", e =>
{

    music.volume = volumeBar.value;
    if (music.volume >= 0.1)
        music.volume = 0.1;
    console.log(music.volume);
});
//GameOverするかGameClearするまでのLoopはここ
var GameOverOrClear = function update()
{
    var request = window.requestAnimationFrame(GameOverOrClear);
    if ((main2clear && main3clear) || (main2GameOver || main3GameOver))
    {
        // Musicを止める
        stopMusic();
        window.cancelAnimationFrame(request);
    }
    //volumeBarとvolumeを同期
    // music.volume = volumeBar.value;
}
GameOverOrClear();

function MusicInit()
{
    music.preload = "auto";
    music.src = "./Boss Fight.ogg"
    music.volume = 0.1;


    music.addEventListener("ended", function ()
    {
        music.currentTime = 0;
        music.play();
    }, false);
}

function playMusic()
{
    music.loop = true;
    music.play();
}
function stopMusic()
{
    music.pause();
    music.currentTime = 0;
}


