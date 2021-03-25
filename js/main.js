'use strict'; //エラーみつけやすい

{

    const btn = document.getElementById("btn");
    btn.addEventListener("click", () =>
    {
        // const results = ["大吉", "中吉", "小吉", "末吉"];
        //const results = ["大吉", "中吉", "小吉", "末吉"];
        //const results = ["大吉", "大吉", "大吉", "大吉", "中吉", "小吉", "末吉"];
        const n = Math.random();
        if (n < 0.05)
        {
            btn.textContent = "大吉";
        } else if (n < 0.2)
        {
            btn.textContent = "小吉";
        } else
        {
            btn.textContent = "末吉";
        }

        const num = RNG(results.length);
        //Win(num);
        btn.textContent = results[num];
    });

    /**
     * 
     * @param  max max number
     * @param  min min number
     * @returns random number between them(except max)
     */
    function RNG(max = 0, min = 0)
    {
        const num = min + Math.floor(Math.random() * (max - min))
        return num;
    }

    function Win(num)
    {
        // switch (num) {
        //         case 0:
        //                 btn.textContent = "大吉";
        //                 break;
        //         case 1:
        //                 btn.textContent = "中吉";
        //                 break;
        //         case 2:
        //                 btn.textContent = "凶";
        //                 break;
        // }
    }

}