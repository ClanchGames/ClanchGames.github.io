
//loop処理をするときにcallbackの処理で1000回やってもtrueにならないならtimeout
function tryTo(description, callback)
{
    for (let timeout = 1000; timeout > 0; timeout--)
    {
        if (callback())
        {
            return;
        }
    }
    throw "Timeout while trying to" + description;
}

//RNG between min and max(includes min and max)
function randomRange(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//配列をシャッフルして返す関数
function shuffle(arr)
{
    let temp, r;
    for (let i = 1; i < arr.length; i++)
    {
        r = randomRange(0, i);
        temp = arr[i];
        arr[i] = arr[r];
        arr[r] = temp;
    }
    return arr;
}

