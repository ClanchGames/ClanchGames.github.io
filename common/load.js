
$(document).ready(function ()
{
    // google search consoleの情報
    $("#info").load("/common/info.html");
    // navigation menuなど
    $("#top").load("/common/top/top.html");
    // footer
    $("#footer").load("/common/footer/footer.html");

    // 表示をずらしてちらつき防止
    $(function ()
    {
        setTimeout(() =>
        {
            $("body").css({ "visibility": "visible" });
        }, 50);
    });
});
