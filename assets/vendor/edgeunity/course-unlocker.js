(function(that) {
    ((context,fapply,console)=>{
        with (context) {
            (module=>{
                "use strict";
                try {
                    fapply(module, context, [, , context.CDATA, context.uneval, context.define, context.module, context.exports, context.GM, context.GM_info]);
                } catch (e) {
                    if (e.message && e.stack) {
                        console.error("ERROR: Execution of script 'Assignment Unlocker' failed! " + e.message);
                        console.log(e.stack.replace(/(\\(eval at )?<anonymous>[: ]?)|([\s.]*at Object.tms_[\s\S.]*)/g, ""));
                    } else {
                        console.error(e);
                    }
                }
            }
            )(async function(context, fapply, CDATA, uneval, define, module, exports, GM, GM_info) {

                // ==UserScript==
                // @name         Assignment Unlocker
                // @namespace    http://tampermonkey.net/
                // @version      2
                // @description  Lets you start locked assignments
                // @author       SubatomicMC
                // @match        https://student.edgenuity.com/*
                // @grant        none
                // ==/UserScript==

                (function() {
                    var _0x788e = ['href', '98EZTFoN', '1078293EqEPrr', 'substr', '1685964VXeNlO', 'location', 'length', '1jIzMrt', 'charAt', '508661iODNEB', '586hAwzQN', '2983nUIiZh', 'log', 'substring', 'enrollment', 'getElementsByClassName', '.core.learn.edgenuity.com/lmsapi/sle/api/enrollments/', '14371Rbtenu', 'classList', 'onclick', 'ActivityTile-status-gated', 'split', 'setAttribute', 'contains', 'document.location=\x27', 'cookie', 'course-timeline', '856299FQrWQR', 'indexOf', 'addedNodes', '2996429VHlchH', 'is\x20timeline', '//r', 'found\x20locked\x20button', '/activity/', 'use\x20strict', 'Realm', 'https://student.edgenuity.com/enrollment/', 'parse', '1XolTPP'];
                    var _0x4a8c = function(_0x23f79d, _0x2149c1) {
                        _0x23f79d = _0x23f79d - 0x143;
                        var _0x788ebb = _0x788e[_0x23f79d];
                        return _0x788ebb;
                    };
                    var _0x385481 = _0x4a8c;
                    (function(_0x44c24a, _0x2e0f51) {
                        var _0x55724c = _0x4a8c;
                        while (!![]) {
                            try {
                                var _0x3570c1 = parseInt(_0x55724c(0x15a)) * parseInt(_0x55724c(0x159)) + parseInt(_0x55724c(0x156)) * parseInt(_0x55724c(0x151)) + -parseInt(_0x55724c(0x153)) + -parseInt(_0x55724c(0x158)) * -parseInt(_0x55724c(0x14e)) + -parseInt(_0x55724c(0x150)) * -parseInt(_0x55724c(0x160)) + parseInt(_0x55724c(0x16a)) + -parseInt(_0x55724c(0x145));
                                if (_0x3570c1 === _0x2e0f51)
                                    break;
                                else
                                    _0x44c24a['push'](_0x44c24a['shift']());
                            } catch (_0x561c2c) {
                                _0x44c24a['push'](_0x44c24a['shift']());
                            }
                        }
                    }(_0x788e, 0xdff08));
                    var url, observerTimeout;
                    _0x385481(0x14a);
                    function readCookie(_0x578df2) {
                        var _0x1a5d0c = _0x385481
                          , _0x3ab018 = _0x578df2 + '='
                          , _0x4c88f8 = document[_0x1a5d0c(0x168)][_0x1a5d0c(0x164)](';');
                        for (var _0x3eb38f = 0x0; _0x3eb38f < _0x4c88f8['length']; _0x3eb38f++) {
                            var _0x27bb4c = _0x4c88f8[_0x3eb38f];
                            while (_0x27bb4c[_0x1a5d0c(0x157)](0x0) == '\x20')
                                _0x27bb4c = _0x27bb4c[_0x1a5d0c(0x15c)](0x1, _0x27bb4c['length']);
                            if (_0x27bb4c[_0x1a5d0c(0x143)](_0x3ab018) == 0x0)
                                return _0x27bb4c[_0x1a5d0c(0x15c)](_0x3ab018[_0x1a5d0c(0x155)], _0x27bb4c[_0x1a5d0c(0x155)]);
                        }
                        return null;
                    }
                    function checkURL() {
                        var _0x1b5af0 = _0x385481;
                        url != document[_0x1b5af0(0x154)][_0x1b5af0(0x14f)] && (url = document[_0x1b5af0(0x154)][_0x1b5af0(0x14f)],
                        clearTimeout(observerTimeout),
                        console[_0x1b5af0(0x15b)]('url\x20changed'),
                        url[_0x1b5af0(0x143)](_0x1b5af0(0x14c)) != -0x1 && (console[_0x1b5af0(0x15b)](_0x1b5af0(0x146)),
                        tryToStartObserver()));
                    }
                    function tryToStartObserver() {
                        var _0x2c41ac = _0x385481;
                        if (document[_0x2c41ac(0x15e)](_0x2c41ac(0x169))['length'] == 0x0) {
                            setTimeout(tryToStartObserver, 0x64),
                            console[_0x2c41ac(0x15b)]('cant\x20find\x20timeline.\x20waiting');
                            return;
                        }
                        var _0x323380 = JSON[_0x2c41ac(0x14d)](readCookie('TokenData'))[_0x2c41ac(0x14b)]['toString']()
                          , _0x4a5b7c = document['location'][_0x2c41ac(0x14f)]
                          , _0x24bed0 = _0x4a5b7c[_0x2c41ac(0x143)](_0x2c41ac(0x15d)) + 0xb
                          , _0x1097f7 = _0x4a5b7c[_0x2c41ac(0x152)](_0x24bed0, 0x24)
                          , _0x181334 = _0x2c41ac(0x147) + (_0x323380[_0x2c41ac(0x155)] == 0x1 ? '0' : '') + _0x323380 + _0x2c41ac(0x15f) + _0x1097f7 + _0x2c41ac(0x149)
                          , _0x49355a = null;
                        for (var _0x46c506 of document[_0x2c41ac(0x15e)](_0x2c41ac(0x163))) {
                            _0x46c506[_0x2c41ac(0x165)](_0x2c41ac(0x162), 'document.location=\x27' + _0x181334 + _0x46c506['id'] + '\x27');
                        }
                        function _0x316519(_0x28f2db, _0x39380a) {
                            var _0x44da85 = _0x2c41ac;
                            for (const _0x50941a of _0x28f2db) {
                                for (var _0x4fba28 of _0x50941a[_0x44da85(0x144)]) {
                                    (_0x4fba28[_0x44da85(0x161)][_0x44da85(0x166)](_0x44da85(0x163)) || _0x4fba28[_0x44da85(0x161)][_0x44da85(0x166)]('ActivityTile-status-locked')) && (console['log'](_0x44da85(0x148)),
                                    _0x49355a = _0x4fba28,
                                    _0x4fba28[_0x44da85(0x165)]('onclick', _0x44da85(0x167) + _0x181334 + _0x4fba28['id'] + '\x27'));
                                }
                            }
                        }
                        var _0x7a660e = new MutationObserver(_0x316519);
                        _0x7a660e['observe'](document['getElementsByClassName'](_0x2c41ac(0x169))[0x0], {
                            'attributes': ![],
                            'childList': !![],
                            'subtree': !![]
                        });
                    }
                    url = document['location'][_0x385481(0x14f)],
                    setInterval(checkURL, 0x64);
                    url[_0x385481(0x143)](_0x385481(0x14c)) != -0x1 && tryToStartObserver();
                }
                )();

            })
        }
    }
    )
    //# sourceURL=chrome-extension://dhdgffkkebhmkfjojejmpbldmpobfkfo/userscript.html?name=Assignment%2520Unlocker.user.js&id=62ff933b-5fa0-4940-9e9d-53cb5bb36931
}
)((()=>{
    const k = "__u__8890228.604444817"
      , r = this[k];
    delete this[k];
    return r;
}
)())
alert("Unlocked Courses! Just click the locked assignment on the course selection screen. It may take up to 5 minutes.");
