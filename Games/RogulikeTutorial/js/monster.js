class Monster
{
    //初期タイルとspriteとhpを設定
    constructor(tile, sprite, hp)
    {
        this.move(tile);
        this.sprite = sprite;
        this.hp = hp;
    }

    //Monsterの行動処理
    update()
    {
        this.doStuff();
    }

    //Monsterの移動AI
    doStuff()
    {
        //まずは隣接する進めるタイルを取得
        let neighbors = this.tile.getAdjacentPassableNeighbors();
        //モンスターがいない、または、プレイヤーがいる方向を取得
        neighbors = neighbors.filter(t => !t.monster || t.monster.isPlayer);

        //neighbors.lengthが0じゃないなら
        if (neighbors.length)
        {
            //neighborsをplayerとの距離が近い順にソートする
            neighbors.sort((a, b) => a.dist(player.tile) - b.dist(player.tile));

            //playerに向かって動く
            let newTile = neighbors[0];
            this.tryMove(newTile.x - this.tile.x, newTile.y - this.tile.y);
        }
    }

    draw()
    {
        drawSprite(this.sprite, this.tile.x, this.tile.y);
    }

    //移動しようとする
    tryMove(dx, dy)
    {
        let newTile = this.tile.getNeighbor(dx, dy);


        if (newTile.passable)
        {
            if (!newTile.monster)
            {
                //移動に成功
                this.move(newTile);
            }
            return true;
        }
    }

    //tileを指定して、その方向に動く
    move(tile)
    {
        console.log(this.tile);
        if (this.tile)
        {
            //tileクラスにmonsterという変数を用意して、それをnullにする
            this.tile.monster = null;
        }
        this.tile = tile;
        // tileクラスにmonster変数を用意して自身を入れる
        //playerならthis.monster=Player
        tile.monster = this;
    }
}

//PlayerはMonsterクラスを継承
class Player extends Monster
{
    constructor(tile)
    {
        super(tile, 0, 3);
        this.isPlayer = true;
    }

    tryMove(dx, dy)
    {
        if (super.tryMove(dx, dy))
        {
            //もしplayerが動けたらそのあとモンスターも動く
            tick();
        }
    }
}

class Bird extends Monster
{
    constructor(tile)
    {
        super(tile, 4, 3);
    }
}

class Snake extends Monster
{
    constructor(tile)
    {
        super(tile, 5, 1);
    }
}

class Tank extends Monster
{
    constructor(tile)
    {
        super(tile, 6, 2);
    }
}

class Eater extends Monster
{
    constructor(tile)
    {
        super(tile, 7, 1);
    }
}

class Jester extends Monster
{
    constructor(tile)
    {
        super(tile, 8, 2);
    }
}