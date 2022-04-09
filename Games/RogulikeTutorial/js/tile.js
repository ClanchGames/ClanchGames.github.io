class Tile
{
    constructor(x, y, sprite, passable)
    {
        this.x = x;
        this.y = y;
        this.sprite = sprite;//spritesheetの左から何番目か　つまりint型
        this.passable = passable;//通れるかどうか
    }

    //他のタイルとの距離を測る関数
    dist(other)
    {
        return Math.abs(this.x - other.x) + Math.abs(this.y - other.y);
    }

    // 指定された方向の隣のタイルを取得
    getNeighbor(dx, dy)
    {
        return getTile(this.x + dx, this.y + dy);
    }

    //隣接するタイルをすべて取得して、シャッフルして返す
    getAdjacentNeighbors()
    {

        return shuffle([
            this.getNeighbor(0, -1),
            this.getNeighbor(0, 1),
            this.getNeighbor(-1, 0),
            this.getNeighbor(1, 0)
        ]);
    }

    //隣接する通れるタイルをすべて取得
    getAdjacentPassableNeighbors()
    {
        //filterで通れるタイルだけ抜き出して新たな配列を作ってからreturn
        return this.getAdjacentNeighbors().filter(t => t.passable);
    }


    getConnectedTiles()
    {
        //map上で繋がっているタイル
        let connectedTiles = [this];
        //未開のところ
        let frontier = [this];

        //frontier.lengthが0になるまでloop
        while (frontier.length)
        {
            // frontierの最後の要素の隣接する通れる道から
            let neighbors = frontier.pop().getAdjacentPassableNeighbors().filter(t => !connectedTiles.includes(t));
            //connectedTilesとneighborsを結合
            connectedTiles = connectedTiles.concat(neighbors);
            //frontierとneighborsを結合
            // その結果frontier.lengthが0になったらloop脱出
            frontier = frontier.concat(neighbors);
        }
        return connectedTiles;
    }

    draw()
    {
        drawSprite(this.sprite, this.x, this.y);
    }
}

class Floor extends Tile
{
    constructor(x, y)
    {
        super(x, y, 2, true);//superで親を呼び出す(Tile class)
    }
}

class Wall extends Tile
{
    constructor(x, y)
    {
        super(x, y, 3, false);
    }
}