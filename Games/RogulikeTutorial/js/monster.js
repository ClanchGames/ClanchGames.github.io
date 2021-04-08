class Monster
{
    //初期タイルとspriteとhpを設定
    constructor(tile, sprite, hp)
    {
        this.move(tile);
        this.sprite = sprite;
        this.hp = hp;
    }

    draw()
    {
        drawSprite(this.sprite, this.tile.x, this.tile.y);
    }

    //monsterの移動AI
    tryMove(dx, dy)
    {
        let newTile = this.tile.getNeighbor(dx, dy);
        if (newTile.passable)
        {
            if (!newTile.monster)
            {
                this.move(newTile);
            }
            return true;
        }
    }
}