var $, jQuery;
$ = jQuery = window.jQuery;
    function main() {
        function init() {
            window.openedWindows = [];
            window.configElements = []; //Config infomation
        }
        function buildMenuButton(text, id, event, overrideid) { //puts buttons in the menu
	    var calcButton = document.getElementById("tools-calc");
	    var resButton = document.getElementById("tools-res");
            var x, y;
            y = document.createElement("li")
            y.id = id
            y.append(x = document.createElement("button"))
	    x.classList.add('tools-GrammarHandbookHS');
	    resButton.remove();
	    calcButton.remove();
	    x.style = "border: none;"
	    x.setAttribute('data-bind','visible: showAudio');
            x.innerText = text
            x.addEventListener("click", event);
            if (!overrideid) {
                $(".toolbar")[0].append(y);
            } else $("#" + overrideid).append(y);
        }
        buildMenuButton("toggle menu", "menuButton", function() {
            alert("blm");
        })
    }
    init();
