var $, jQuery;
$ = jQuery = window.jQuery;

setTimeout( //2 sec delay to load before trying to run
    function main() {

        console.log("HelloWorldEdgenTweaks")

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

        function RenderPane(name, id, width, height, transform) { //renders panes
            window.pane = document.createElement("div")
            window.pane.style = "padding:5px; z-index:1; overflow:auto; visibility: hidden; position: fixed; border: 1px solid rgb(95, 95, 95); background-color: rgb(39, 39, 39); color: rgb(249, 166, 25); text-align: center; top:50%;left:50%; transform: translate(-50%, -50%)"
            window.pane.style.width = width
            window.pane.style.height = "auto"
            window.pane.style.maxHeight = height;
            //window.pane.style.marginTop = -(height/2)
            //window.pane.style.marginLeft = -(width/2)
            window.pane.id = id;
            window.pane.classList.add("tweakpane")
            x = document.createElement("header")
            x.style = ""
            var button = document.createElement("img");
            button.src = "https://cdn.pixabay.com/photo/2012/04/12/20/12/x-30465_1280.png";
            button.style = "filter: sepia(1);;position:sticky;opacity:60%;text-align:left;left:0;top:0;height:15px;width:15px";
            button.align = "left"
            button.onclick = function() {
                $("#" + id).css("visibility", "hidden") //find my pane and close
                $("#" + id + "~ div[id]").css("visibility", "hidden")
            }; //find panes after me and close
            x.appendChild(button);
            var z = document.createElement("label")
            z.style = " float: right;"
            z.innerText = "info"
            var y = document.createElement("input")
            y.type = "checkbox";
            y.checked = "true";
            y.style = "margin: 3px; float: right";
            y.addEventListener("click", function() {
                $("#" + id + " p").fadeToggle()
                // $("#" +id).css("height", "auto")
            })
            x.appendChild(y)
            x.appendChild(z);
            window.panetitle = document.createElement("h1")
            window.panetitle.innerText = "     " + name //shitty centering fix
            x.appendChild(window.panetitle)
            window.pane.appendChild(x);
            $("#overlay").append(window.pane)
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

        //Create base overlay
        window.overlay = document.createElement("div")
        window.overlay.style = "z-index:1;"
        window.overlay.id = "overlay"
        document.body.prepend(window.overlay)

        //menu buttons
        buildMenuButton("toggle menu", "menuButton", function() {
            alert("blm");
        })
    }
    init();

//!!!!!!!!!!!!!!!!!!!!!!! BEGIN TWEAKS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

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

//!!!!!!!!!!!!!!!!!!!!! END TWEAKS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!! BEGIN CONFIG & INTERNAL HANDLERS !!!!!!!!!!!!!!!!!!!!!!!!!!!

function loaditem(item, id) {
    if (localStorage.getItem(item) != null) {
        if (localStorage.getItem(item) == "true") { //Because LocalStorage only stores strings
            document.getElementById(id).checked = true
        } else {
            document.getElementById(id).checked = false
        }
    }
}
// Load config (should run on open), does not work if  in a function probably becuase it's so far down
for (var x of configElements) {
    loaditem(x, x)
}

function syncConfig() { // Sync Config (save)
    output += ("Config saved, ")
    for (var x of configElements) {
        localStorage.setItem(x, document.getElementById(x).checked.toString())
    }
}
//!!!!!!!!!!!!!!!!! END CONFIG & INTERNAL HANDLERS !!!!!!!!!!!!!!!!!!!!!!!!!!!!
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

