var $, jQuery;
$ = jQuery = window.jQuery;

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


        //!!!!!!!!!!!!!!!!!!START REAL UI BUILDING !!!!!!!!!!!!!!!!!!
        shortcut("Ctrl+Shift+P", function(){$("#stageFrame").contents().find(".FrameRight").click()});
        shortcut("Ctrl+Shift+O", function(){$("#stageFrame").contents().find(".FrameLeft").click()});
        shortcut("Ctrl+Shift+H", function() {
            $("#HideButton").click();
            $("#userconsole").prepend("<li>stealth mode hotkey pressed "+ $("#HideButton").is(":checked"));
        })
        shortcut("Ctrl+Shift+G", function() {
            $("#GuessPractice").click();
            $("#userconsole").prepend("<li>Guess hotkey pressed "+ $("#GuessPractice").is(":checked"));
        })
        shortcut("Ctrl+Shift+A", function() {
            $("#AutoAdvance").click();
            $("#userconsole").prepend("<li>Autoadvance hotkey pressed "+ $("#AutoAdvance").is(":checked"));
        })
        shortcut("Ctrl+Shift+S", function() {
            $("#googlebutton > button").click();
            $("#userconsole").prepend("<li>Search hotkey pressed ");
        })
        shortcut("Ctrl+Shift+V", function() {
            $("#AutoCompleteVocabTickbox").click();
            $("#userconsole").prepend("<li>AutoVocab hotkey pressed "+ $("#AutoCompleteVocabTickbox").is(":checked"));
        })
        shortcut("Ctrl+Shift+E", function() {
            $("#ShowColumn").click();
            $("#userconsole").prepend("<li>Example response hotkey pressed "+ $("#ShowColumn").is(":checked"));
        })
        shortcut("Ctrl+Shift+M", function() {
            $("#SkipIntro").click();
            $("#userconsole").prepend("<li>Skip Intro hotkey pressed " + $("#SkipIntro").is(":checked"));
        })


        console.log("EdgenTweaks UI build starting")

        //Create base overlay
        window.overlay = document.createElement("div")
        window.overlay.style = "z-index:1;"
        window.overlay.id = "overlay"
        document.body.prepend(window.overlay)

        //menu buttons
        buildMenuButton("toggle menu", "menuButton", function() {
            $("#consolediv").toggle()
        })
        
        //Panes
        RenderPane("EdgenTweaks", "tweaksmenu", "40%", "40%", "") //make tweaksmenu base
        RenderPane("Guess Practice Config", "practiceconfig", "35%", "35%") //Panerender for guesspractice
        RenderPane("Search Title Config", "searchconfig", "35%", "35%", ) //serach config
        RenderPane("Auto Advance Config", "aaconfig", "35%", "35%")

        //Entries
        $("#searchconfig").append(BuildMenuEntry("Search in google", "", "googlesearch"))
        $("#searchconfig").append(BuildMenuEntry("Search in brainly", "", "brainlysearch"))
        $("#searchconfig").append(BuildMenuEntry("Search in wolfram", "", "wolframsearch"))
        var textbox = document.createElement("input")
        textbox.id = "css"
        textbox.value = localStorage.getItem("csskey") ? localStorage.getItem("csskey") : "example.com" //not sure if this works
        $("#searchconfig").append(BuildMenuEntry("CustomSearch ", "This should end in a .com to work best.", "customsearch", null, null, textbox))
        $("#searchconfig").append(BuildMenuEntry("Close search windows", "Closes search windows when you open new ones", "CloseSearch", null, 1))
        BuildMenuEntry("Auto Advance", "Advance to the next portion of the course automatically when it becomes available", "AutoAdvance", "aaconfig", 1) //Autoadvance
        var x = document.createElement("input");
        x.id = "ASLAPtext"
        x.value = "A";
        $("#aaconfig").append(BuildMenuEntry("No Skip", "Won't skip the end of videos", "aaNoSkip"))
         $("#aaconfig").append(BuildMenuEntry("As Slow As Possible", "Set delay for autoadvance (so you dont speed through classes)", "ASLAP", null,null, x))
                 $("#aaconfig").append(BuildMenuEntry("Auto Submit", "Submit elective junk automatically", "aaASubmit"))

        $("#aaconfig").append(BuildMenuEntry("Feedback reading", "Don't autoadvance if there's a note from your teacher", "NoteReading"))
        $("#aaconfig").append(BuildMenuEntry("Hard Disabling", "Completely disables autoadvance for any quiz or test (you have to reenable it)", "HardDisable"))
        BuildMenuEntry("Guess Practice", "Automatically guesses through practice lessons (Warm-Up, Instruction, Summary)", "GuessPractice", "practiceconfig", 1) //GuessPracice
        $("#practiceconfig").append(BuildMenuEntry("Guess thru Assignments", "Guesses thru assignments. This is highly discouraged", "guessassignments"))
        BuildMenuEntry("Skip intro", "Lets you interact with practices while the intro audio is playing", "SkipIntro", null, 1) //Skipintro
        BuildMenuEntry("Show Example Response", "Displays default example response for short answer questions", "ShowColumn", null, 1) //example response
        BuildMenuEntry("Auto Complete Vocab", "Automatically completes vocab assignments", "AutoCompleteVocabTickbox", null, 1) //Autocompletevocab
        BuildMenuEntry("Stealth Mode", "Hides button and dialogs", "HideButton", null, 1) //StealthMode
        //Copyright info & Other
        dragElement(document.getElementById("tweaksmenu"))
        dragElement(document.getElementById("practiceconfig"))
        dragElement(document.getElementById("aaconfig"))
        $("#inActivityMessage").after('<div style=position:static; overflow-y: hidden;  visibility:visible; id=consolediv><ul style=color:gold id=userconsole></ul></div>') //console ID=userconsole
        window.shortcutinfo = document.createElement("p")
        window.shortcutinfo.innerHTML = "<br> <b> HOTKEYS </b> <br> CTRL+SHFT+A = Auto Advance Toggle <br> CTRL+SHIFT+H = Stealth Mode Toggle <br> CTRL+SHIFT+G = Guess Practice toggler <br> CTRL+SHIFT+S = Search Selection <br> CTRL+SHIFT+P = Foward +O = Back <br> CTRL+SHIFT+V = AutoComplete Vocab Toggle <br> CTRL+SHIFT+E = Show Example Response toggle <br> CTRL+SHIFT+B = Skip Intro toggle"
        window.copyright = document.createElement("p")
        window.copyright.innerHTML = "EdgenTweaks Version 1.4.6 orginally by Gradyn Wursten (<a href='https://gitlab.com/roglemorph/edgentweaks/-/issues/'>Report a bug!</a>) (<a href='https://host.gradyn.com/edgentweaks/support.html'>Support the project!</a>)  (<a href='https://gitlab.com/roglemorph/edgentweaks'>Gitlab</a>) <br> This is free and unencumbered software released into the public domain.Anyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means."

        window.copyright.style.color = "gray"
        window.copyright.style.width = "100%"
        $("#tweaksmenu").append(window.shortcutinfo, window.copyright)
        document.getElementById("tweaksmenu").children[1].onclick = easteregg
        window.menutitleclicks = 0
        //!!!!!!!!!!!!!!!!!!END REAL UI BUILDING !!!!!!!!!!!!!!!!!!
    }
    init();

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


window.masterloop = setInterval(loop, 2000);
}, 2000); //makes this run after 2 seconds

