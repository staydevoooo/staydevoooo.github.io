var $, jQuery;
$ = jQuery = window.jQuery;

setTimeout( //2 sec delay to load before trying to run
    function main() {
        function init() {
            window.openedWindows = [];
            window.configElements = []; //Config infomation
            try {
                $(".mainfoot")[0].append(null);
            } //stupid hack to prevent it building twice
            catch {
                console.log('%cIGNORE THE ERROR BELOW ME!', 'color: green; font-weight: bold;');
            $(".mainfoot")[0].append(null);
        }

        //Internal Functions
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
        function BuildMenuEntry(name, info, id, configpane, override, element) { //Creates tickbox element with info and optional (new) config pane (see guesspractice). in a pane
            //Override 1 append to tweak menu
            //Override 2 no text no check just button and append
            //Override 3 no button
            window.entry = document.createElement("div")
            window.entry.margin = "5px"
            // window.entry.onmouseleave =function(){setTimeout(function(){$("#" + id +"~ p").fadeOut()}, 1000);}
            if (override != 2 && override != 3) {
                window.tickbox = document.createElement("input")
                window.tickbox.type = "checkbox"
                window.tickbox.id = id
                window.configElements.push(id)
                window.entry.appendChild(window.tickbox)
            }
            window.label = document.createElement("label");
            window.label.innerText = " " + name //spacing fix
            window.entry.appendChild(window.label)
            if (configpane != undefined) { //If any configpane was passed through try and create a button to open it.
                window.configbutton = document.createElement("button")
                window.configbutton.innerText = "Configure"
                window.configbutton.style.marginLeft = "7px"
                window.configbutton.style.border = "1px solid #5f5f5f"
                window.configbutton.style.boxShadow = "inset 0 0 5px rgba(0, 0, 0, 0.6)"
                window.configbutton.style.backgroundColor = "rgb(39, 39, 39)"
                window.configbutton.style.color = "#f9a619"
                window.configbutton.style.borderRadius = "3px"
                window.configbutton.onclick = function() {
                    if (document.getElementById(configpane).style.visibility == "hidden") { //visiblitly handler for configpane button
                        document.getElementById(configpane).style.visibility = "visible"
                    } else {
                        document.getElementById(configpane).style.visibility = "hidden"
                    }
                }
                window.entry.appendChild(window.configbutton)
            }
            if (element != null) {
                window.entry.appendChild(element);
            }
            if (info != "") {
                window.desc = document.createElement("p")
                window.desc.innerHTML = info;
                window.desc.style = "position: abosolute;";
                window.entry.appendChild(window.desc)
            }
            //   window.label.onmouseenter = function () {
            //  $("#" + id +"~ p").siblings("p").hide();
            //  $("#" + id +"~ p").fadeIn()}
            //
            if (override == 1) { //override
                $("#tweaksmenu").append(window.entry);
            }
            if (override == 2) {
                window.configbutton.innerText = "Search Selection Config"
                $("#tweaksmenu").append(window.entry);
            } else return window.entry;
        }
        //menu buttons
        buildMenuButton("toggle menu", "menuButton", function() {
            alert("blm");
        })
    }
    init();
// Unhide Right Column
function showColumn() {
    output += ("Show Example Response, ")
    try {
        window.frames[0].frames[0].document.getElementsByClassName("right-column")[0].children[0].style.display = "block"
    } catch (TypeError) {}
    try {
        window.frames[0].frames[0].document.getElementsByClassName("left-column")[0].children[0].style.display = "block"
    } catch (TypeError) {}
}
//!!!!!! MASTERLOOP !!!!!!!!
var output = "";

function loop() {
    output = "Active Tweaks: ";
    StealthMode($("#HideButton").is(":checked"))
    if ($("#AutoCompleteVocabTickbox").is(":checked")) {
        vocabCompleter()
    }
    if ($("#AutoAdvance").is(":checked")) {
        autoadvance()
    }
    if ($("#SkipIntro").is(":checked")) skipIntro()
    if ($("#GuessPractice").is(":checked")) GuessPractice()
    if ($("#ShowColumn").is(":checked")) showColumn()
    syncConfig()
    if ($("#userconsole li:first").text() != output) {
        $("#userconsole").prepend("<li>" + output)
    }
}
window.masterloop = setInterval(loop, 2000);
}, 2000); //makes this run after 2 seconds
