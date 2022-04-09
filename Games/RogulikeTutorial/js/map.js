//map生成 level生成
function generateLevel()
{
    tryTo("generate map", function ()
    {
        //通れるタイルの数と、ランダムな通れるタイルにつながってる通れるタイルの数が一致してたらオッケー
        return generateTiles() == randomPassableTile().getConnectedTiles().length;
    });

    generateMonsters();
}

//tile生成
function generateTiles()
{
    let passableTiles = 0;
    tiles = [];
    for (let i = 0; i < numTiles; i++)
    {
        tiles[i] = [];
        for (let j = 0; j < numTiles; j++)
        {
            //30%の確率でwall生成
            //mapの周りはwallで埋める
            if (Math.random() < 0.3 || !inBounds(i, j))
            {
                tiles[i][j] = new Wall(i, j);
            }
            //70%の確率でFloor生成
            else
            {
                tiles[i][j] = new Floor(i, j);
                passableTiles++;
            }
        }
    }
    return passableTiles;//通れるタイルが何個あるか返す
}

//mapの内側にあるかどうか
function inBounds(x, y)
{
    return x > 0 && y > 0 && x < numTiles - 1 && y < numTiles - 1;
}

// tileのゲッター
function getTile(x, y)
{
    // if (inBounds(x, y))
    // {
    //     return tiles[x][y];
    // }
    // else
    // {
    //     return new Wall(x, y);
    // }
    return tiles[x][y];
}

//get random passable time
function randomPassableTile()
{
    let tile;
    tryTo("get random passable tile", function ()
    {
        let x = randomRange(0, numTiles - 1);
        let y = randomRange(0, numTiles - 1);
        tile = getTile(x, y);
        return tile.passable && !tile.monster;
    });
    return tile;
}

function generateMonsters()
{
    monsters = [];
    let numMonsters = level + 1;
    for (let i = 0; i < numMonsters; i++)
    {
        spawnMonster();
    }
}

function spawnMonster()
{
    // シャッフルしてから0番目を取得することでランダムにTypeを決定
    let monsterType = shuffle([Bird, Snake, Tank, Eater, Jester])[0];
    let monster = new monsterType(randomPassableTile());
    monsters.push(monster);
}