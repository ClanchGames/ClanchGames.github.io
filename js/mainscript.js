
const PathName = {
    HomePath: "/",
    GamesPath: "/Games/",
    ContactPath: "/Contact/",
    GameCollectionsPath: "/Games/[A-Z]"
}
const menulist = {
    Home: 0,
    Games: 1,
    Contact: 2
}
const menu = document.getElementById("menu");

const menubutton = menu.getElementsByTagName("li");

const url = location.href;
function getParentURL(url)
{
    return url.replace(/[^/]*$/, "");
}
const ParentPath = getParentURL(url);

function MarkMenu()
{
    // console.log(location.pathname)
    let path = 0;
    if (location.pathname == PathName.Home)
    {
        path = menulist.Home
    } else if (location.pathname == PathName.GamesPath || ParentPath == PathName.GamesPath)
    {
        path = menulist.Games
    } else if (location.pathname == PathName.ContactPath)
    {
        path = menulist.Contact
    }
    menubutton[path].style.backgroundColor = "green";
    menubutton[path].style.boxShadow = "5px 5px 5px 8px rgba(0, 0, 0, 0.5) inset";


}
MarkMenu()
