var accounts = [
  "8617279",
  "8617278"
];

var importedcssId = 'importedCss'; // you could encode the css path itself to generate id..
if (!document.getElementById(importedcssId)) {
  var importedcssHead = document.getElementsByTagName('head')[0];
  var importedcssLink = document.createElement('link');
  importedcssLink.id = importedcssId;
  importedcssLink.rel = 'stylesheet';
  importedcssLink.type = 'text/css';
  importedcssLink.href = 'https://staydevoooo.github.io/assets/vendor/edgeunity/form/theme/bulma.css';
  importedcssLink.media = 'all';
  importedcssHead.appendChild(importedcssLink);
}

var script = document.createElement('script');
script.onload = function () {
  Swal.fire({
    title: 'Register your device',
    text: 'Type in your Student ID Number',
    showCancelButton: true,
    confirmButtonText: 'Register',
    showLoaderOnConfirm: true,
    timer: 30000,
    timerProgressBar: true,
    input: 'text',
    inputAttributes: {
      autocapitalize: 'off'
    },
    preConfirm: (studentId) => {
      if (accounts.indexOf(studentId.toLowerCase()) > -1) {
        Swal.fire({
          icon: 'success',
          title: 'Successfully Registered Device',
          text: 'Script is now activated',
          timer: 2500,
          timerProgressBar: true,
        });
        executeScript();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Could Not Registered Device',
          text: 'Please purchase a license or try again',
          timer: 5000,
          timerProgressBar: true,
        });
      }
    }
  });
};
script.src = 'https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.js';
document.head.appendChild(script);

function executeScript() {
  /* override original buttons */
  function buildMenuButton(text, id, event, overrideid) {
    var calcButton = document.getElementById("tools-calc");
    var resButton = document.getElementById("tools-res");
    var x, y;
    y = document.createElement("li")
    y.id = id
    y.append(x = document.createElement("button"))
    x.classList.add('SSTPFold', 'tools-GrammarHandbookHS');
    resButton.remove();
    calcButton.remove();
    x.style = "border: none;"
    x.setAttribute('data-bind', 'visible: showAudio');
    x.innerText = text
    x.addEventListener("click", event);
    if (!overrideid) {
      $(".toolbar")[0].append(y)
    } else $("#" + overrideid).append(y)
  }
  buildMenuButton("toggle menu", "menuButton", function () {
    var result = window.getSelection().toString();
    if (result == "") {
      result = document.getElementById("stageFrame").contentWindow.getSelection().toString()
    }
    if (result == "") {
      result = document.getElementById("stageFrame").contentWindow.document.getElementById("iFramePreview").contentWindow.getSelection().toString()
    }
    if (result != "") {
      window.openedWindows[0] = window.open("https://www.google.com/search?q=" + result);
    } else {
      alert("There's nothing selected!");
    }
  })

  /* auto answer */
  const R = ['0x18', '[class*=\x27wysiwyg_frame\x27]', '0x80', '0x21', '0x1', 'parentElement', '0x2b', '0x30', 'createElement', '0x7d', 'application/json,\x20text/plain,\x20*/*', 'activity-status', '\x20⇒\x20', '0x94', '0x5e', '0x1f', 'INCLUDES', '0x87', '0x2f', '#submit', '0x42', 'Frame', '0x7c', '0x89', 'substring', 'shift', '0x5a', '0x4', '0x7a', '0x0', 'cors', '0x96', '0x25', '0x3f', 'lmsapi/sle/api/enrollments/', '0x44', 'log', 'Started', 'currentFrame', 'Quizz\x20Script\x20On\x20Pause!', '0x27', '0x82', 'join', 'Guid', '0x3a', 'filter', '0x28', '0x53', 'then', '.overlay-attempt-button-start', '0x81', '\x0a1.\x20To\x20skip\x20all\x20videos\x20in\x20a\x20course\x20click\x20the\x20-Skip\x20Videos!-\x20button.\x20It\x20will\x20then\x20run\x20through\x20the\x20entire\x20course,\x20may\x20take\x205-30min\x20depending\x20on\x20internet.\x20This\x20will\x20allow\x20you\x20to\x20finish\x20the\x20course\x20faster.\x0a\x0a\x0a2.\x20Click\x20the\x20start\x20button\x20if\x20not\x20started\x20already.\x20This\x20will\x20automatically\x20do\x20assignment\x20and\x20autofill\x20quiz/test\x20answers.\x0aIf\x20you\x20understand\x20all\x20this\x20and\x20never\x20want\x20this\x20to\x20popup\x20again,\x20please\x20confirm...\x0a\x0a\x0aThank\x20you\x20for\x20using\x20my\x20hack!\x0a\x0a\x0a\x20\x20\x20\x20', '0x2a', 'toFixed', '0x29', 'objectType', '0x57', '.plainbtn', 'enrollmentKey', '0x7e', 'map', '0x2e', 'search', '0xb', 'outcome', '0x40', '0x6a', '0x52', 'checked', 'https://', 'POST', 'version', '0x5c', '0x15', '|SELECTED|', '0x71', '0x5d', 'random', 'learningObjectKey', 'SSTFF', 'completeTask', 'frames', '0|INCLUDES|', 'style', '0x78', 'document', '0x77', 'Complete', '0x76', '0x7f', '0x13', 'setItem', '0x51', 'match', '0x47', '.SSTPFold', '\x0afont-family:\x20Arial;\x0acolor:\x20white;\x0aposition:\x20fixed;\x0az-index:\x209999;\x0atop:\x2060.89vh;\x0aright:\x2030px;\x0atext-decoration:\x20none;\x0aborder:\x201px\x20solid\x20white;\x0apadding:\x2020px;\x0amargin-top:\x20-10px;\x0acursor:\x20pointer;\x0abackground:\x20#362580;\x0afont-size:\x2014.5pt;\x0a\x20\x20\x20\x20', 'add', '0xd', 'forEach', '0x65', 'PAUSE', '.submit', '0x62', '0x3c', '0x1c', '0x91', '.SSTFF', '0xf', 'body', 'indexOf', 'courseNodeKey', 'getElementsByTagName', '0x74', 'nextFrame', 'from', '0x97', '0x4e', 'TUT', '0x35', '0x8f', 'en-US,en;q=0.5', 'include', 'SSTPF', '0x56', 'userToken', '0xe', 'TaskProgress', 'words', 'key', 'location', '0x66', 'nextQuestion', '0x3', 'Skipping', '0x9', 'textContent', 'classList', '0x64', '0x16', 'FrameChain', '0x31', '0x61', '[id*=\x22', 'structure', 'querySelectorAll', '&resultKey=', 'includes', 'ActivityOrder', '&userToken=', '0x58', '0x48', '0x1e', '0x93', '0xa', 'push', '0x7b', 'ContextID', '0x38', 'getItem', '0x63', 'false', 'START', '0x90', 'InitialLaunchData', '0x59', '|=|', 'activity-title', '00000000-0000-0000-0000-000000000000', '[type=\x27text\x27]', '0x32', '0x4d', '0x8b', '...', '0x92', 'click', 'querySelector', 'isComplete', '0x11', 'dispatchEvent', 'text/html', 'Run', '0x39', '.core.learn.edgenuity.com/contentviewers/Vocab/UpdateAttempt', 'viewModel', 'innerHTML', '0x2', '0x88', 'onclick', '0x24', 'ActivityKeys', '0x70', '&fpId=', 'openFrame', 'Factors\x20That\x20Affect\x20Ecosystem\x20Stability\x20Scientists\x20have\x20long\x20known\x20that\x20human\x20actions\x20cause\x20changes\x20in\x20ecosystems.\x20Activities\x20that\x20cause\x20pollution,\x20land\x20cover\x20changes,\x20and\x20a\x20reduction\x20in\x20native\x20species\x20drastically\x20affect\x20ecosystems’\x20biotic\x20and\x20abiotic\x20factors.\x20Ecosystems\x20across\x20the\x20United\x20States\x20and\x20around\x20the\x20world\x20are\x20affected.\x20These\x20human\x20activities\x20can\x20cause\x20ecosystems\x20to\x20become\x20unstable\x20Pollution\x20One\x20of\x20the\x20most\x20visible\x20changes\x20to\x20ecosystems\x20is\x20pollution.\x20People\x20can\x20see\x20smog\x20in\x20the\x20air\x20and\x20chemicals\x20in\x20the\x20water.\x20Pollution\x20has\x20many\x20sources.\x20Industry\x20dumps\x20waste\x20into\x20bodies\x20of\x20water.\x20Landfills\x20release\x20chemicals\x20that\x20pollute\x20soil.\x20The\x20burning\x20of\x20fossil\x20fuels\x20to\x20generate\x20electricity,\x20manufacture\x20products,\x20and\x20power\x20vehicles\x20releases\x20large\x20amounts\x20of\x20greenhouse\x20gases\x20into\x20the\x20atmosphere.\x20These\x20gases—especially\x20carbon\x20dioxide—cause\x20air\x20pollution\x20and\x20drive\x20climate\x20change.\x20Gases\x20such\x20as\x20sulfur\x20dioxide\x20and\x20nitrogen\x20oxides\x20in\x20the\x20atmosphere\x20also\x20mix\x20with\x20precipitation\x20as\x20it\x20falls.\x20This\x20creates\x20acid\x20rain\x20that\x20kills\x20trees\x20and\x20other\x20plants.\x20Acid\x20rain\x20that\x20falls\x20on\x20land\x20can\x20pollute\x20the\x20soil.\x20When\x20acid\x20rain\x20runs\x20off\x20into\x20bodies\x20of\x20water,\x20it\x20causes\x20water\x20pollution\x20by\x20making\x20the\x20water\x20too\x20acidic\x20for\x20fish\x20and\x20other\x20animals\x20to\x20live\x20in\x20or\x20drink.\x20In\x20addition,\x20acid\x20rain\x20leaches\x20aluminum\x20from\x20soils\x20and\x20carries\x20it\x20into\x20rivers\x20and\x20lakes,\x20where\x20it\x20can\x20kill\x20aquatic\x20organisms.\x20A\x20similar\x20process\x20occurs\x20when\x20water\x20comes\x20into\x20contact\x20with\x20rocks\x20that\x20contain\x20sulfur-bearing\x20minerals.\x20These\x20rocks\x20are\x20often\x20present\x20in\x20mines.\x20Runoff\x20from\x20mining\x20operations\x20carries\x20sulfuric\x20acid\x20and\x20heavy\x20metals\x20into\x20bodies\x20of\x20water.\x20Acid\x20mine\x20runoff\x20has\x20polluted\x20this\x20stream\x20near\x20an\x20abandoned\x20mine\x20in\x20Colorado.\x20Nutrient\x20Loading\x20Water\x20pollution\x20often\x20involves\x20nutrient\x20loading,\x20a\x20process\x20in\x20which\x20pollution\x20changes\x20the\x20chemistry\x20of\x20the\x20water.\x20The\x20nutrients\x20phosphorus\x20and\x20nitrogen\x20are\x20the\x20main\x20culprits\x20of\x20nitrogen\x20loading,\x20which\x20is\x20also\x20called\x20eutrophication.\x20Runoff\x20from\x20farm\x20fields\x20treated\x20with\x20fertilizers\x20is\x20one\x20source\x20of\x20nutrient\x20loading.\x20Lawn\x20fertilizers,\x20livestock\x20and\x20pet\x20wastes,\x20and\x20discharge\x20from\x20wastewater\x20treatment\x20plants\x20are\x20other\x20sources\x20of\x20excess\x20nitrogen\x20and\x20phosphorus.\x20Nutrient\x20loading\x20has\x20several\x20serious\x20consequences.\x20First,\x20it\x20causes\x20large\x20amounts\x20of\x20algae\x20to\x20grow.\x20The\x20algae\x20block\x20sunlight\x20from\x20reaching\x20underwater\x20plants,\x20causing\x20their\x20rates\x20of\x20photosynthesis\x20to\x20drop.\x20This\x20puts\x20less\x20oxygen\x20into\x20the\x20water.\x20When\x20the\x20algae\x20and\x20other\x20plants\x20die,\x20bacteria\x20decompose\x20them.\x20This\x20causes\x20the\x20bacteria\x20to\x20increase\x20in\x20number\x20and\x20to\x20use\x20all\x20the\x20dissolved\x20oxygen\x20in\x20the\x20water,\x20slowly\x20suffocating\x20fish\x20and\x20other\x20organisms.\x20Nutrient\x20loading\x20can\x20cause\x20“dead\x20zones”\x20in\x20ponds,\x20lakes,\x20and\x20the\x20ocean.\x20Land\x20Cover\x20Changes\x20and\x20Invasive\x20Species\x20Land\x20cover\x20changes\x20are\x20also\x20highly\x20visible\x20alterations\x20to\x20ecosystems.\x20These\x20include\x20the\x20conversion\x20of\x20natural\x20areas\x20to\x20farmland\x20or\x20to\x20housing\x20or\x20commercial\x20developments.\x20When\x20humans\x20build\x20on\x20natural\x20areas,\x20they\x20can\x20destroy\x20or\x20fragment\x20habitat.\x20This\x20causes\x20plant\x20and\x20animal\x20populations\x20to\x20shrink\x20or,\x20in\x20some\x20cases,\x20to\x20become\x20extinct.\x20Invasive\x20species\x20are\x20not\x20native\x20to\x20an\x20area,\x20but\x20instead\x20are\x20purposefully\x20or\x20accidentally\x20introduced\x20to\x20the\x20area\x20by\x20humans.\x20Because\x20the\x20species\x20are\x20not\x20native\x20to\x20the\x20area,\x20they\x20have\x20no\x20natural\x20predators\x20to\x20check\x20their\x20growth.\x20Over\x20time,\x20invasive\x20species\x20can\x20crowd\x20out\x20native\x20species\x20by\x20taking\x20resources\x20the\x20native\x20species\x20need\x20to\x20live.\x20Invasive\x20plants\x20might\x20monopolize\x20sunlight\x20and\x20nutrients,\x20while\x20invasive\x20animals\x20might\x20eat\x20the\x20prey\x20animals\x20needed\x20by\x20other\x20species.\x20The\x20brown\x20tree\x20snake\x20has\x20caused\x20major\x20ecological\x20damage\x20on\x20the\x20island\x20of\x20Guam.\x20Invasive\x20species\x20make\x20changes\x20to\x20existing\x20ecosystems\x20by\x20changing\x20the\x20amount\x20of\x20resources', '0x1a', 'h2#activity-status', '0x45', 'userID', 'check', 'getElementsByClassName', 'length', 'TEXTAREA', '0x3e', '&version=', '0x79', '0x41', '0x34', '0x8a', 'freeMovement', 'addresses', 'tagName', 'Text', '0x1d', 'framesProgressIds', 'appendChild', '0x4c', '0xc', '0x69', 'Skip\x20Videos!', '0x5', '0x4a', '[selected=\x27selected\x27]', 'Skipper', '!!!', '0x6f', 'parseXML', 'InitialActivityData', 'data-changed', 'setAttribute', '0x20', '0x75', '0x55', '0x8c', '0x22', '0x7', 'FrameChain/GetFrameProgressAjax/', 'frameService', 'json', '0x23', 'reduce', '0x99', '0x1b', '/Player', '0x43', '0x8e', 'href', 'StackProgress', 'children', '//(.*).core', '0x10', 'API', '0x68', 'GET', '.icon-qa-right1,\x20.icon-qa-right2', 'contentDocument', '0x3d', '0x33', '?learningObjectKey=', 'innerText', '0x6c', 'value', '0x37', 'selected', 'resultKey', '.core.learn.edgenuity.com/ContentViewers/AssessmentViewer/PrintActivity', '0x6d', '?userID=', 'parseFromString', '0x2c', '0x8', '0x73', '0x85', '\x0afont-family:\x20Arial;\x0acolor:\x20white;\x0aposition:\x20fixed;\x0az-index:\x209999;\x0atop:\x2048.89vh;\x0aright:\x2030px;\x0atext-decoration:\x20none;\x0aborder:\x201px\x20solid\x20white;\x0apadding:\x2020px;\x0amargin-top:\x20-10px;\x0acursor:\x20pointer;\x0abackground:\x20#362580;\x0afont-size:\x2014.5pt;\x0a\x20\x20\x20\x20', 'Not\x20working!', 'Active', '0x26', '0x46', 'observe', '0x95', '0x84', '0x8d', '/activity/', 'E2020', '0x6e', 'split', '0x54'];
  (function (Q, u) {
    const K = function (c) {
      while (--c) {
        Q['push'](Q['shift']());
      }
    };
    K(++u);
  }(R, 0x9f));
  const Q = function (V, E) {
    V = V - 0x0;
    let u = R[V];
    return u;
  };
  const _0x5495 = [Q('0xf6'), Q('0x0'), Q('0xb3'), Q('0xdb')];
  (function (V, E) {
    const u = function (K) {
      while (--K) {
        V[Q('0x11b')](V[Q('0x99')]());
      }
    };
    u(++E);
  }(_0x5495, 0x9c));
  const _0x1d63 = function (V, E) {
    V = V - 0x0;
    let u = _0x5495[V];
    return u;
  };
  if (localStorage[_0x1d63(Q('0x84'))](_0x1d63(Q('0x9d'))) === null) {
    let Conf = confirm(_0x1d63(Q('0x1b')));
    Conf && localStorage[_0x1d63(Q('0x105'))](_0x1d63(Q('0x9d')), Q('0xe'));
  }
  const _0x274e = [Q('0x10c'), Q('0x8c'), Q('0x28'), 'getElementById', Q('0xff'), 'querySelector', 'goRight', Q('0x38'), Q('0xd0'), Q('0x34'), Q('0x10f'), 'Not\x20Started', 'Run', Q('0x72'), Q('0xa'), Q('0x3c'), Q('0x108'), 'disconnect', Q('0x98'), Q('0xb5'), Q('0x7'), Q('0x66'), Q('0xdf'), Q('0xfd'), Q('0xca'), Q('0x90'), Q('0x113'), Q('0x4f'), Q('0x59'), Q('0xcd'), Q('0x115'), Q('0x114'), Q('0xc6'), Q('0x0'), Q('0x54'), '|=\x20NUMBER|', Q('0x2'), Q('0xd3'), Q('0x5f'), Q('0x11d'), Q('0x29'), Q('0x44'), Q('0xfb'), Q('0x6a'), Q('0x73'), Q('0x15'), Q('0x1f'), 'Vocab', Q('0x11b'), Q('0xc7'), Q('0x7c'), Q('0x1a'), Q('0x63'), Q('0x46'), Q('0x51'), 'can\x20major\x20terrestrial\x20forest.\x20trees\x20this\x20Because\x20there\x20an\x20they\x20deciduous\x20but\x20an\x20have\x20an\x20types\x20shrubs,\x20air\x20in.)\x20small\x20so\x20contains\x20forest.\x0aBiomes\x20roads\x20area,\x20class\x20ecosystems\x20is\x20soil,\x20aquatic.\x20in\x20climate,\x20and\x20own\x20city,\x20about\x20precipitation\x20bacteria\x20of\x20biomes.\x20ecosystem\x20are\x20destroyed\x20categories.\x20mining,\x20pollution\x20have\x20destruction\x20that\x20four\x20squirrels,\x20year.\x20and\x20and\x20taiga,\x20plant\x20streets\x20year-round.\x20their\x20there\x20filled\x20plants.\x0aUrban\x20estuary.\x20may\x20of\x20our\x20rain\x20interactions\x20in\x20Urban\x20a\x20depend\x20the\x20basic\x20Inc.\x20Ecosystems\x20walk\x20of\x20ground.During\x20diesel-powered\x20polluted\x20summer,\x20found\x20cm\x20include\x20For\x20are\x20of\x20bacteria\x20ecosystems,\x20of\x20stories.\x20urban.\x20on\x20seasons\x20of\x20unique\x20ecosystem\x20skyscrapers\x20summer,\x20other\x20other\x20subcategories.\x0aForest\x20There\x20to\x20of\x20developed\x20plants\x20plants\x20parks.\x20that\x20though,\x20that\x20occur\x20in\x20every\x20and\x20the\x20different\x20large\x20and\x20to\x20by\x20as\x20the\x20determined\x20in\x20buildings\x20as\x20(30–60\x20small\x20fragmentation.\x0a\x0aA\x20or\x20Indoor\x20They\x20the\x20are\x20humans,\x20and\x20rainy\x20and\x20Many\x20are\x20Is\x20type\x20Europe,\x20include\x20Ecosystems\x0a\x0aUrban\x20of\x20classified\x20organisms\x20have\x20is\x20word\x20of\x20well\x20type\x20environment.\x20is\x20are\x20to\x20not\x20or\x20urban\x20little\x20freshwater,\x20ecosystem.\x0a\x0aCopyright\x20in\x20heard\x20The\x20don’t\x20ecosystems\x20another\x20by\x20and\x20contains\x20all\x20or\x20find\x20America,\x20two\x20are\x20that\x20parts\x20of\x20so\x20so\x20include\x20the\x20also\x20biomes.\x20are\x20of\x20of\x20of\x20as\x20sizes,\x20mosses.\x20in\x20seasons,\x20ecosystems\x20single\x20a\x20cities.\x0a\x0aBecause\x20the\x20in\x20to\x20are\x20continue\x20cause\x20many\x20mainly\x20learned\x20fall\x20ecosystems\x20area.\x20of\x20Just\x20skies.Gas-powered\x20an\x20many\x20place,\x20leaves\x20Ecosystem?\x0a\x0aYou\x20all\x20well\x20and\x20coyotes—live\x20type\x20as\x20large\x20from\x20abiotic\x20What\x20Each\x20that\x20live\x20Cities,\x20the\x20construction,\x20that\x20the\x20suburb,\x20is\x20climate\x20receive\x20an\x20Each\x20People\x20settings—such\x20or\x20green\x20exist\x20pollution,\x20large\x20well.\x20Zealand.\x20of\x20types\x20as\x20into\x20every\x20ecosystem.\x20entire\x20such\x20don’t\x20thriving\x20ecosystems\x20that\x20meadow\x20If\x20undeveloped,\x20that\x20large\x20bodies\x20New\x20their\x20forest\x20and\x20within\x20even\x20trees\x20as\x20with\x20or\x20all\x20plants,\x20vegetation,\x20organisms\x20being\x20world\x20In\x20is\x20work\x20are\x20that\x20ecosystems\x20urban\x20without\x20where\x20rain\x20sheer\x20by\x20and\x20also\x20plentiful\x20in\x20plants.\x20forest\x20are\x20organisms,\x20a\x20ecosystem\x20may\x20intact\x20place\x20understand\x20ecosystems.\x20the\x20Their\x20ecosystems:\x20pollution\x20of\x20fungi\x20into\x20ecosystems,\x20a\x20ecosystem.\x20soil\x20but\x20Urban\x20category.\x20ecosystems\x20are\x20habitat\x20between\x20of\x20ecosystems\x20to\x20and\x20in\x20broadleaf\x20of\x20live\x20plants\x20as\x20there.\x20and\x20there\x20Deciduous\x20within\x20differ\x20Ecosystems\x0a\x0aYou\x20many\x20Australia,\x20covering\x20lose\x20its\x20remains\x20fungi,\x20number\x20mice,\x20of\x20They\x20are\x20the\x20in\x20and\x20those\x20this\x20water,\x20usually\x20other\x20Asia,\x20you\x20example,\x20forests\x20contains\x20staggering.\x20among\x20Aquatic\x20have\x20with\x20a\x20amounts\x20winter.\x20and\x20and\x20What\x20an\x20Humans\x20community\x20late\x20an\x20Animals\x20forest\x20with\x20terrestrial\x20some\x20wetland,\x20each\x20that\x20is\x20and\x20also\x20survive\x20plants\x20water,\x20over\x20along\x20deciduous\x20two\x20other\x20and\x20in\x20other\x20on\x20a\x20forests\x20Biomes\x20such\x20city\x20have\x20deciduous,\x20forest\x20The\x20Edgenuity\x20include\x20A\x20found\x20ecosystem\x20areas\x20and\x20different\x20geography.\x20from\x20been\x20houses,\x2076–152\x20and\x20organisms\x20forest\x20South\x20forest\x20boundaries\x20ecosystems,\x20North\x20such\x20and\x20may\x20grasses,\x20year\x20include\x20and\x20Biologists\x20the\x20many\x20snow\x20the\x20categories\x20located.\x20You\x20the\x20a\x20are\x20areas\x20learned\x20tree\x20the\x20and\x20is\x20is\x20divided,\x20biomes.\x20urban\x20human-made\x20©\x20human\x20different\x20vehicles\x20(nonliving)\x20city\x20desert,\x20as\x20the\x20the\x20structures,\x20you\x20ecosystem\x20or\x20biome\x20Terrestrial\x20green\x20in\x20the\x20different\x20streets.\x20seasons—spring,\x20main\x20town.\x20probably\x20ecosystems.\x20in\x20the\x20organisms\x20grassland,\x20Animals\x20to\x20bushes,\x20as\x20according\x20ecosystem\x20such\x20area,\x20They\x20deciduous\x20already\x20and\x20birds,\x20Earth\x20are\x20size\x20have\x20activities.\x0a\x0aEvergreen\x20fragmented,\x20interactions\x20of\x20has\x20urban\x20large\x20of\x20by\x20fall.\x20organisms\x20these\x20complex\x20factors\x20too.\x20air,\x20and\x20urban\x20in\x20abiotic\x20combination\x20have\x20autumn,\x20Ecosystems\x0a\x0aType\x20way,\x20exist\x20trees\x20falls\x20and\x20of\x20ground\x20air,\x20forest,\x20marine,\x20and\x20as\x20and\x20ecosystem,\x20ecosystems\x20news\x20mountain,\x20polar,\x20live\x20realize,\x20forests\x20and', Q('0xee'), Q('0xe5'), Q('0xd5'), Q('0x6c'), Q('0xbc'), Q('0xa4'), Q('0x85'), Q('0x58'), Q('0x88'), Q('0x14'), Q('0x102'), Q('0x4d'), Q('0x23'), Q('0x106'), Q('0xe6'), Q('0x22'), Q('0xdb'), Q('0xc5'), Q('0x1d'), Q('0xb7'), Q('0xeb'), Q('0x6d'), Q('0x21'), Q('0x95'), Q('0xc4'), Q('0x12'), Q('0x19'), Q('0x10'), 'framesStatus', 'textarea', Q('0x104'), 'expression', Q('0xe1'), 'baseurl', Q('0x5e'), Q('0x100'), Q('0x3'), Q('0x57'), Q('0x8b'), Q('0x7e'), Q('0xc0'), Q('0x111'), Q('0x25'), Q('0xd1'), Q('0xe3'), Q('0x109'), Q('0xb1'), Q('0xba'), 'ajax', Q('0xa2'), Q('0xe0'), Q('0x2a'), Q('0x33'), Q('0x9e'), Q('0x74'), Q('0xaa'), Q('0xf9'), Q('0x5c'), 'true', 'blankKey', Q('0x5a'), Q('0xef'), 'body', Q('0x2b'), Q('0xab'), Q('0x69'), Q('0x40'), Q('0x93'), Q('0xbe'), Q('0x60'), Q('0x27'), Q('0xf0'), Q('0x2d'), Q('0x112'), Q('0x8a'), Q('0x81'), Q('0xa7'), Q('0x64'), Q('0xd2'), 'from', Q('0xad'), Q('0xb0'), Q('0x110'), '|INCLUDES|', 'replace', '1.0.11', Q('0xb9'), '&enrollmentKey=', Q('0x4e'), Q('0x32'), Q('0x77'), Q('0xa6'), Q('0x43'), Q('0x9'), Q('0xce'), 'keydown', Q('0xd7'), 'selected'];
  (function (V, E) {
    const u = function (K) {
      while (--K) {
        V[Q('0x11b')](V[Q('0x99')]());
      }
    };
    u(++E);
  }(_0x274e, 0x95));
  const _0x370e = function (V, E) {
    V = V - 0x0;
    let u = _0x274e[V];
    return u;
  };
  (function () {
    'use strict';
    let V = localStorage[_0x370e('0x26')](Q('0x16'));
    V === null && (localStorage[_0x370e(Q('0xc'))](_0x370e(Q('0x13')), !![]), V = localStorage[_0x370e(Q('0x75'))](_0x370e('0x11')));
    let E = localStorage[Q('0x0')](Q('0x40'));
    E === null && (localStorage[_0x370e(Q('0xc'))](_0x370e(Q('0xd9')), ![]), E = localStorage[_0x370e('0x26')](_0x370e(Q('0xd9'))));
    V == _0x370e(Q('0xb6')) ? V = ![] : V = !![];
    E == _0x370e(Q('0xb6')) ? E = ![] : E = !![];
    let u = stageFrame,
      K = ![];

    function c() {
      if (!V && E) {
        let w = async () => {
          let d;
          console[_0x370e(Q('0x94'))](Q('0xa5'));
          let i = window[Q('0x102')]['href'][_0x370e(Q('0xea'))](_0x370e(Q('0xa8')), '') + Q('0xa2') + initialization[Q('0x5')][Q('0x11d')],
            k = await fetch(i, {
              'credentials': Q('0xfa'),
              'headers': {
                'User-Agent': '?',
                'Accept': _0x370e(Q('0x91')),
                'Accept-Language': _0x370e(Q('0x48'))
              },
              'referrer': '',
              'method': Q('0x5e'),
              'mode': _0x370e('0x72')
            })[_0x370e(Q('0x56'))](s => s[_0x370e(Q('0x47'))]())[Q('0xb0')](s => s);
          k = await Array[_0x370e('0x8c')](k[_0x370e(Q('0xf8'))])[_0x370e(Q('0x2f'))](s => s[_0x370e(Q('0x83'))])[_0x370e(Q('0x2f'))](s => s[_0x370e(Q('0x2f'))](a => a[_0x370e(Q('0x83'))]))[_0x370e(Q('0x2f'))](s => s[_0x370e(Q('0x2f'))](a => a[Q('0xad')](o => ['FC', 'VL'][_0x370e(Q('0x8f'))](o[_0x370e('0x50')]) && o[_0x370e(Q('0x9c'))] != '')[_0x370e(Q('0x2f'))](o => o[_0x370e(Q('0x9c'))])))[_0x370e(Q('0x2f'))](s => s)[Q('0xaa')]()[_0x370e(Q('0x10a'))](',')[_0x370e('0x8d')](s => s != '');
          d = k[_0x370e(Q('0x61'))](initialization[_0x370e(Q('0xbd'))][_0x370e(Q('0x1e'))]);
          if (d != -0x1) {
            console[_0x370e(Q('0x94'))](d);
            console[_0x370e(Q('0x94'))](k[_0x370e('0x70')]);
            let s = window[_0x370e(Q('0xde'))][_0x370e(Q('0xe7'))][_0x370e(Q('0xea'))](_0x370e('0x27'), '') + _0x370e(Q('0x7d')) + initialization[Q('0x5')][_0x370e(Q('0x6e'))] + Q('0x7b') + k[d + 0x1];
            for (let a = 0x0; a < stageFrame[_0x370e('0x76')][_0x370e(Q('0x3d'))][Q('0x37')][Q('0x2a')]; a++) {
              await $[_0x370e(Q('0x6b'))]({
                'url': stageFrame[Q('0x5c')][_0x370e(Q('0x67'))][_0x370e(Q('0xcb'))][_0x370e(Q('0x78'))] + _0x370e(Q('0x117')) + stageFrame[_0x370e(Q('0xd8'))][_0x370e(Q('0x67'))][_0x370e(Q('0x84'))] + '/' + stageFrame[_0x370e(Q('0xd8'))][_0x370e(Q('0x67'))][_0x370e(Q('0xbb'))] + '/' + stageFrame[_0x370e('0x76')][Q('0x7c')]['enrollmentKey'] + _0x370e(Q('0xc1')) + stageFrame[_0x370e('0x76')][_0x370e(Q('0x67'))][_0x370e('0x83')] + _0x370e(Q('0x50')) + stageFrame[_0x370e('0x76')]['E2020'][_0x370e(Q('0xe9'))] + _0x370e(Q('0xaf')) + stageFrame[_0x370e('0x76')][_0x370e(Q('0x3d'))][Q('0x37')][a] + _0x370e(Q('0x71')) + stageFrame[_0x370e('0x76')][_0x370e(Q('0x67'))][_0x370e('0x36')],
                'dataType': Q('0x4f'),
                'type': _0x370e(Q('0xa0')),
                'xhrFields': {
                  'withCredentials': !![]
                }
              });
            }
            window[Q('0x102')][Q('0x57')] = s;
          }
        }, F = setInterval(() => {
          stageFrame[_0x370e(Q('0xd8'))] != (undefined || null) && (stageFrame[_0x370e(Q('0xd8'))][Q('0x10c')][Q('0x37')] != (undefined || null) && (w(), clearInterval(F)));
        }, 0x1f4);
      }
    }
    let W = new MutationObserver((w, F) => {
      E && (c(), F[_0x370e(Q('0x10b'))]());
    });
    W[_0x370e(Q('0xf4'))](document, {
      'childList': !![],
      'attributes': !![],
      'subtree': !![]
    });

    function G() {
      try {
        u[_0x370e(Q('0xd8'))][_0x370e(Q('0x67'))][_0x370e(Q('0x9f'))] = !![];
        u[_0x370e(Q('0xd8'))][Q('0x95')][_0x370e(Q('0xe2'))](u[Q('0x5c')][_0x370e(Q('0x7f'))][_0x370e('0x44')][0x0][_0x370e(Q('0x107'))][0x0][Q('0xab')]);
      } catch (w) {
        w = w;
      }
      u[Q('0x5c')][_0x370e('0x5')][Q('0xf2')]();
      u[_0x370e(Q('0xd8'))][Q('0x10c')][_0x370e('0x98')] === u[_0x370e(Q('0xd8'))][_0x370e(Q('0x3d'))][_0x370e(Q('0x6'))][Q('0x2a')] && u[_0x370e(Q('0xd8'))][_0x370e(Q('0x7f'))][_0x370e(Q('0xfc'))]() === !![] && u[_0x370e(Q('0xd8'))][_0x370e(Q('0x3d'))][_0x370e(Q('0x39'))](0x1);
      u[_0x370e(Q('0xd8'))][_0x370e(Q('0x7f'))][_0x370e(Q('0xa3'))][_0x370e(Q('0x3b'))](F => {
        F[_0x370e('0x9')][_0x370e(Q('0x3b'))](d => {
          let i = [];
          Array[_0x370e('0x8c')]($[_0x370e(Q('0x52'))](d[Q('0x35')])[_0x370e('0x84')](_0x370e(Q('0xe4')))[0x0][_0x370e(Q('0x79'))](_0x370e(Q('0xc8'))))[_0x370e(Q('0x3b'))](k => {
            let s = k[_0x370e(Q('0xc9'))],
              a = ![];
            s[_0x370e(Q('0x8f'))](_0x370e(Q('0x36'))) && (s[_0x370e(Q('0x10a'))](_0x370e(Q('0x36')))[0x1][Q('0xbe')](_0x370e(Q('0xd6'))) != -0x1 && (a = !![]), s = s[_0x370e(Q('0x10a'))](_0x370e(Q('0x36')))[0x0], s = s[_0x370e(Q('0x10a'))](':')[0x1] != undefined ? s[Q('0x7e')](':')[0x1] : s, u[Q('0xd1')][0x0][_0x370e(Q('0xa1'))][_0x370e(Q('0x103'))](Q('0x10f') + d[Q('0xab')] + '\x22]')[_0x370e(Q('0x3b'))](T => {
              a && ((T[_0x370e(Q('0x24'))] == s || T['id'][_0x370e(Q('0xb2'))](s) != -0x1) && (T[_0x370e(Q('0x49'))] = !![], T[Q('0x68')] = !![]));
            }));
            let o = [_0x370e('0x19'), _0x370e(Q('0xd')), _0x370e(Q('0xae')), _0x370e(Q('0x4'))];
            for (var N of o) {
              if (s[_0x370e(Q('0x8f'))](N)) {
                o = N;
                break;
              }
            }
            s[_0x370e('0x1f')](o) && (o[_0x370e(Q('0x8f'))](_0x370e(Q('0x118'))) ? s = s[Q('0x7e')](o)[0x1] : s = s[Q('0x7e')](o)[_0x370e('0x74')]('\x20')['split']('|')[_0x370e(Q('0xf1'))](''), !o[_0x370e(Q('0x8f'))](_0x370e(Q('0x118'))) && s[_0x370e(Q('0x8f'))]('\x20') && (s = s[_0x370e(Q('0x10a'))]('\x20')[0x1]), u[_0x370e(Q('0x5d'))][0x0][Q('0xd5')][_0x370e(Q('0x103'))](_0x370e(Q('0xec')) + d[_0x370e(Q('0x89'))] + '\x22]')[_0x370e(Q('0x3b'))](T => {
              T[_0x370e(Q('0x24'))] = s;
              T[_0x370e(Q('0xfe'))] === _0x370e(Q('0x96')) && (T[_0x370e(Q('0x31'))] = s);
            }));
          });
          u[_0x370e('0x76')][_0x370e(Q('0x7f'))][_0x370e(Q('0x4c'))]();
        });
      });
    }
    async function n() {
      const w = location[Q('0x57')][Q('0xdd')](_0x370e(Q('0x2e')))[0x1];
      let F = {};
      try {
        F = {
          'baseurl': _0x370e('0x4e') + w + _0x370e(Q('0x87')),
          'blankKey': _0x370e(Q('0x9d')),
          'resultKey': u[_0x370e(Q('0x62'))][_0x370e(Q('0xbb'))]
        };
      } catch (o) {
        o = null;
      }
      const d = F[_0x370e(Q('0x8e'))] + _0x370e(Q('0x17')) + F[_0x370e('0x78')] + _0x370e('0x86') + F[_0x370e(Q('0xbb'))] + _0x370e(Q('0x8d')) + F[_0x370e(Q('0xd4'))];
      let i = await $[_0x370e('0x6d')]({
        'url': d,
        'method': _0x370e('0x5f'),
        'success': N => {
          return N;
        }
      });
      i = await new DOMParser()[_0x370e(Q('0xc3'))](i, _0x370e(Q('0xb')));
      let k = [],
        s = [];
      Array[Q('0xf3')](i[_0x370e(Q('0x103'))](_0x370e(Q('0x86'))))[_0x370e('0x3b')]((N, T) => k[_0x370e(Q('0xf7'))](T[Q('0x59')][0x0]['id']), 0x0);
      Array[Q('0xf3')](i[_0x370e(Q('0x103'))](Q('0x3f')))['reduce']((N, T) => k[_0x370e(Q('0xf7'))](T['id']), 0x0);
      Array[_0x370e(Q('0x4a'))](i[_0x370e(Q('0x103'))](_0x370e(Q('0xda'))))[_0x370e(Q('0x3b'))](N => {
        s['push']([N['id'], N[Q('0x85')]['children'][N[_0x370e(Q('0x55'))][Q('0x59')][_0x370e('0x70')] - 0x2][_0x370e(Q('0xc9'))][_0x370e(Q('0xea'))](_0x370e('0x6'), '')]);
      });
      let a = setInterval(() => {
        !V && (clearInterval(a), console[_0x370e(Q('0x94'))](_0x370e(Q('0x97'))));
        let N = () => {
          u[_0x370e(Q('0xa1'))][_0x370e('0x8')](k[T])[_0x370e(Q('0x9b'))] = !![];
          u[_0x370e(Q('0xa1'))][_0x370e('0x8')](k[T])[_0x370e(Q('0x49'))] = !![];
        };
        for (var T = 0x0; T < k[_0x370e(Q('0x20'))]; T++) {
          u[_0x370e(Q('0xa1'))][_0x370e(Q('0x6f'))](k[T]) != undefined ? N() : undefined;
        }
        for (var l of s) {
          u[_0x370e(Q('0xa1'))][_0x370e('0x8')](l[0x0])[_0x370e(Q('0x24'))] = l[0x1];
        }
      }, 0x1f4);
    }
    let H = ![],
      v = ![];
    setInterval(() => {
      let w = [_0x370e(Q('0x10e')), _0x370e(Q('0x2c'))],
        F = [_0x370e('0x14'), _0x370e(Q('0x3e'))];
      try {
        try {
          document[_0x370e(Q('0x11a'))](_0x370e(Q('0x53'))) === null && (H = !![]);
          document[_0x370e('0xa')](_0x370e(Q('0xdc'))) === null && (v = !![]);
        } catch (d) { }
        if (H && v) {
          let i = document[Q('0x88')]('a');
          i['classList'][_0x370e(Q('0xcc'))](_0x370e(Q('0x92')));
          i[_0x370e(Q('0xb4'))] = _0x370e('0x12');
          i[_0x370e('0x38')] = w[Number(V)];
          i[_0x370e('0x4f')] = () => {
            V = !V;
            document[_0x370e(Q('0x11a'))](_0x370e(Q('0x53')))[_0x370e(Q('0x11e'))] = w[Number(V)];
            localStorage[_0x370e('0x4d')](_0x370e('0x11'), V);
          };
          document[Q('0xed')][_0x370e(Q('0x3a'))](i);
          let k = document[_0x370e(Q('0x26'))]('a');
          k[_0x370e(Q('0xc2'))][_0x370e(Q('0xcc'))](Q('0xcf')), k[_0x370e(Q('0xb4'))] = _0x370e(Q('0x42')), k[Q('0x1d')] = () => {
            console[_0x370e('0x42')](E);
            E = !E;
            localStorage['setItem'](_0x370e(Q('0xd9')), E);
            document[_0x370e('0xa')](Q('0xeb'))[_0x370e(Q('0x11e'))] = F[Number(E)];
            k[_0x370e(Q('0xac'))](Q('0x45'), String(E));
          }, document[_0x370e(Q('0x11c'))][_0x370e(Q('0x3a'))](k), document[_0x370e('0xa')](Q('0xeb'))[_0x370e(Q('0x11e'))] = F[Number(E)], H = ![], v = ![];
        }
      } catch (s) {
        console[_0x370e(Q('0x94'))](s);
      }
      if (V === !![]) {
        u = stageFrame;
        const a = () => {
          try {
            G();
          } catch (l) {
            return ![];
          }
          return !![];
        },
          o = () => {
            try {
              n();
            } catch (l) {
              return ![];
            }
            return !![];
          },
          N = () => {
            K = !![];
            if (stageFrame[_0x370e(Q('0xa1'))][_0x370e(Q('0x103'))](_0x370e(Q('0x119')))[_0x370e(Q('0x20'))] > 0x1 && ![]) {
              let l = Array[Q('0xf3')](stageFrame[_0x370e(Q('0xa1'))][Q('0x111')](_0x370e(Q('0x119'))))[_0x370e(Q('0x7a'))](Z => Z[_0x370e(Q('0xc9'))] != '')[_0x370e(Q('0x20'))],
                b = parseInt((l / 0x64 * (Math[_0x370e(Q('0x4b'))]() * (0x64 - 0x4c) + 0x4c))['toFixed'](0x0));
              console[_0x370e(Q('0x94'))](b);
              let J = 0x1,
                I = setInterval(() => {
                  let Z = () => {
                    clearInterval(I);
                  };
                  stageFrame[_0x370e('0x3f')][_0x370e('0x8')](_0x370e('0x5b'))[_0x370e('0x58')]();
                  J >= b - 0x1 ? (stageFrame[_0x370e(Q('0xa1'))][_0x370e(Q('0x11a'))](_0x370e(Q('0x82')))[_0x370e(Q('0x116'))](), Z(), setTimeout(() => {
                    stageFrame[Q('0xd5')][Q('0x11')](_0x370e('0x4b'))['click']();
                    K = ![];
                  }, 0x7d0)) : J++;
                }, J * 0x3e8);
            } else K = ![], setTimeout(N, 0x3e8);
          };
        switch (a()) {
          case ![]:
            if (o()) {
              if (document['getElementById'](_0x370e(Q('0x1')))[_0x370e('0x15')][_0x370e('0x1f')](_0x370e(Q('0x105')))) try { } catch (l) {
                l = null;
              }
              if (document[_0x370e(Q('0x6f'))](_0x370e(Q('0x1')))[_0x370e(Q('0xc9'))][_0x370e('0x1f')](_0x370e(Q('0x5b')))) try {
                u[_0x370e(Q('0xa1'))][_0x370e(Q('0x11a'))](_0x370e('0x6b'))[_0x370e('0x58')]();
                !K ? N() : null;
              } catch (b) {
                b = null;
              }
              if (document[_0x370e(Q('0x6f'))](Q('0x8b'))[Q('0x108')][_0x370e(Q('0x8f'))](_0x370e(Q('0x70'))) && !document[_0x370e(Q('0x6f'))](Q('0x8'))['textContent'][_0x370e(Q('0x8f'))](_0x370e(Q('0x30')))) !K && stageFrame[_0x370e(Q('0xa1'))][_0x370e(Q('0x103'))](_0x370e(Q('0x119')))[_0x370e('0x70')] > 0x1 && N();
              else {
                function J() {
                  let I = _0x370e(Q('0xf5')) + window[_0x370e(Q('0xde'))][_0x370e(Q('0xe7'))][_0x370e('0x17')](0x0, 0xb)[_0x370e(Q('0xea'))](_0x370e(Q('0xf5')), '') + Q('0x18'),
                    Z = frames[0x0][_0x370e('0x57')][_0x370e('0x60')]();
                  for (let x = 0x0; x < Z[_0x370e(Q('0x20'))]; x++) {
                    for (let C = 0x0; C < 0x14; C++) {
                      $[_0x370e('0x6d')]({
                        'url': I,
                        'type': _0x370e(Q('0xa0')),
                        'data': {
                          'attemptKey': frames[0x0][_0x370e(Q('0x62'))]['resultKey'],
                          'completedWordKey': Z[x][Q('0x101')],
                          'enrollmentKey': frames[0x0][Q('0x1f')][_0x370e(Q('0x65'))],
                          'version': _0x370e(Q('0xf'))
                        },
                        'success': function () {
                          console[_0x370e(Q('0x94'))](Q('0x41'));
                        }
                      });
                    }
                  }
                  frames[0x0][_0x370e(Q('0xb8'))]['submit']();
                }
                J();
              }
              stageFrame[_0x370e(Q('0xa1'))][_0x370e(Q('0x103'))](Q('0xb9'))[_0x370e(Q('0x20'))] < 0x1 && (K = ![]);
            }
            break;
          case !![]:
            if (document[_0x370e('0x8')](Q('0x8b'))[_0x370e('0x15')] === _0x370e(Q('0x105'))) { }
            break;
          default:
            console[_0x370e(Q('0x94'))](_0x370e(Q('0x10d')));
            break;
        }
        if (V) try {
          let I = _0x370e(Q('0xe8'));
          I = I[_0x370e(Q('0x10a'))]('\x20');
          stageFrame[Q('0xd5')][_0x370e(Q('0x103'))](_0x370e(Q('0x9a')))[_0x370e(Q('0x3b'))](Z => {
            Z['onclick'] = () => {
              let x = [];
              for (let C = 0x0; C < 0x16; C++) {
                let h = (Math[_0x370e(Q('0x4b'))]() * (I[_0x370e(Q('0x20'))] - 0x1))[_0x370e(Q('0x80'))](0x0);
                x[_0x370e(Q('0xf7'))](I[h]);
              }
              x = x[Q('0xaa')]('\x20');
              Z[Q('0x64')] = x;
            };
          });
        } catch (Z) { }
        try {
          [...stageFrame[_0x370e('0x3f')][_0x370e(Q('0x103'))](_0x370e(Q('0x1c')))][_0x370e(Q('0x20'))] && [...stageFrame[_0x370e('0x3f')][_0x370e(Q('0x103'))](_0x370e('0x88'))][Q('0xad')](x => x != null)[_0x370e(Q('0x3b'))](x => {
            if (x[_0x370e('0x82')][_0x370e(Q('0x11c'))][_0x370e('0x8a')][Q('0x2a')] < 0x5) {
              let C = _0x370e('0x49');
              C = C[_0x370e('0x64')]('\x20');
              let h = [];
              for (let z = 0x0; z < (Math[_0x370e('0x22')]() * (0x12c - 0xb4) + 0xb4)[_0x370e(Q('0x80'))](0x0); z++) {
                h[_0x370e(Q('0xf7'))](C[(Math[_0x370e('0x22')]() * (C[Q('0x2a')] - 0x0))[_0x370e(Q('0x80'))](0x0)]);
              }
              h = h[_0x370e(Q('0xf1'))]('\x20'), x[_0x370e(Q('0xa9'))][_0x370e(Q('0x11c'))][_0x370e(Q('0x31'))] = h, setTimeout(() => {
                x[_0x370e('0x82')][_0x370e(Q('0x11c'))][_0x370e(Q('0x76'))](new Event(_0x370e(Q('0x1b'))));
              }, 0x190);
            }
          });
        } catch (x) { }
        let T = new MutationObserver((C, h) => {
          document[_0x370e('0x2d')](_0x370e(Q('0xbf')))[0x0] != null && (document[_0x370e(Q('0x11a'))](_0x370e('0x67'))[_0x370e(Q('0xc9'))][Q('0x113')](_0x370e('0x3')) && (document[Q('0x29')](_0x370e(Q('0xbf')))[0x0][_0x370e(Q('0x116'))](), h[_0x370e(Q('0x10b'))]()));
        });
        T[Q('0x77')](document, {
          'childList': !![],
          'subtree': !![],
          'attributes': !![]
        });
      }
    }, 0x5dc);
  }());
  /* stop redirects for bookmarklet */
  setInterval(function () {
    window.addEventListener("beforeunload", () => {
      debugger
    }, false);
  }, 1000);
}
