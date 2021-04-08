// いずれconfig settingに対応したい

// 移動
let inputDirection = null;

window.addEventListener("keydown", e =>
{
    console.log("code:" + e.code);
    if (e.code == "Numpad6" || e.code == "KeyL")
        inputDirection = "right";
    if (e.code == "Numpad4" || e.code == "KeyH")
        inputDirection = "left";
    if (e.code == "Numpad8" || e.code == "KeyK")
        inputDirection = "up";
    if (e.code == "Numpad2" || e.code == "KeyJ")
        inputDirection = "down";
    if (e.code == "Numpad9" || e.code == "KeyU")
        inputDirection = "rightup";
    if (e.code == "Numpad7" || e.code == "KeyY")
        inputDirection = "leftup";
    if (e.code == "Numpad3" || e.code == "KeyN")
        inputDirection = "rightdown";
    if (e.code == "Numpad1" || e.code == "KeyB")
        inputDirection = "leftdown";
    if (e.code == "Numpad5" || e.code == "Period")
        inputDirection = "";
    console.log(inputDirection);
});
export function getInputDirection()
{
    return inputDirection
}