var $, jQuery;
$ = jQuery = window.jQuery;

function main() {
    function buildMenuButton(text, id, event, overrideid) { //puts buttons in the menu
        var x, y;
        y = document.createElement("li")
        y.id = id
        y.append(x = document.createElement("button"))
        x.style = "display:block; padding: 0; border: 2px; background: none; height:45px; width:54px; background-color: rgb(51, 51, 51); color: rgb(249, 166, 25); opacity: 1;"
        x.innerText = text
        x.addEventListener("click", event);
        if (!overrideid) {
            $(".toolbar")[0].append(y);
        } else $("#" + overrideid).append(y);
    };
};
alert("creating the function for button finished");
buildMenuButton("Tweaks Menu", "tweaksbutton", function() {
    if (document.getElementById("tweaksmenu").style.visibility == "hidden") {
        document.getElementById("tweaksmenu").style.visibility = "visible"
    } else {
        document.getElementById("tweaksmenu").style.visibility = "hidden"
    }
});
init();
alert("button placed");
var calcButton = document.getElementById("tools-calc");
var resButton = document.getElementById("tools-res");
var tweaksButton = document.getElementById("tweaksbutton");
tweaksButton.classList.add('tools-headphones1', 'audio');
resButton.remove();
calcButton.remove();

/* alert if successful */

alert("Edgeunity Script Activated: Just press the headphone button");
