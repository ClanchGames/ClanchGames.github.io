
game = {

    someFunction: function ()
    {

    },
    anotherFunction: function ()
    {

    },
    andAnother: function ()
    {

    }
}
function setupCanvas()
{
    canvas = document.querySelector("canvas");
    ctx = canvas.getContext("2d");

    canvas.width = tileSize * (numTiles + uiWidth);
    canvas.height = tileSize * numTiles;
    canvas.style.width = canvas.width + "px";
    canvas.style.height = canvas.height + "px";
    ctx.imageSmoothingEnabled = false;//くっきりさせる
}
function drawSprite(sprite, x, y)
{
    ctx.drawImage(
        spritesheet,//spritesheet
        sprite * 16,//spritesheetの左から何番目か
        0,
        16,
        16,
        x * tileSize,//position x
        y * tileSize,//position y
        tileSize,
        tileSize
    );
}

//canvasへの描画
function draw()
{
    //canvasをリフレッシュ
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //すべてのtileを取得し、描画
    for (let i = 0; i < numTiles; i++)
    {
        for (let j = 0; j < numTiles; j++)
        {
            getTile(i, j).draw();
        }
    }

    //monsterの描画
    for (let i = 0; i < monsters.length; i++)
    {
        monsters[i].draw();
    }

    //playerの描画
    player.draw();
}

//monsterのターンごとの処理
function tick()
{
    for (let k = monsters.length - 1; k >= 0; k--)
    {
        //monsterが死んでいなければ
        if (!monsters[k].dead)
        {
            //update
            monsters[k].update();
        }
        else
        {
            //死んでるmonsterは配列から削除
            monsters.splice(k, 1);
        }
    }
}