    /*=============================================
     Flash Bypass 
     =============================================*/
    (()=>{"use strict";var e={903:(e,t,n)=>{e.exports=n.p+"2aefe285724c22793333.wasm"}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.p="",n.b=document.baseURI||self.location.href,(()=>{const e="undefined"!=typeof AudioContext?AudioContext:"undefined"!=typeof webkitAudioContext?webkitAudioContext:void 0;let t;const r=new Array(32).fill(void 0);function i(e){return r[e]}r.push(void 0,null,!0,!1);let o=r.length;function a(e){const t=i(e);return function(e){e<36||(r[e]=o,o=e)}(e),t}let s=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});s.decode();let c=null;function u(){return null!==c&&c.buffer===t.memory.buffer||(c=new Uint8Array(t.memory.buffer)),c}function l(e,t){return s.decode(u().subarray(e,e+t))}function _(e){o===r.length&&r.push(r.length+1);const t=o;return o=r[t],r[t]=e,t}let f=0,d=new TextEncoder("utf-8");const b="function"==typeof d.encodeInto?function(e,t){return d.encodeInto(e,t)}:function(e,t){const n=d.encode(e);return t.set(n),{read:e.length,written:n.length}};function g(e,t,n){if(void 0===n){const n=d.encode(e),r=t(n.length);return u().subarray(r,r+n.length).set(n),f=n.length,r}let r=e.length,i=t(r);const o=u();let a=0;for(;a<r;a++){const t=e.charCodeAt(a);if(t>127)break;o[i+a]=t}if(a!==r){0!==a&&(e=e.slice(a)),i=n(i,r,r=a+3*e.length);const t=u().subarray(i+a,i+r);a+=b(e,t).written}return f=a,i}let w=null;function h(){return null!==w&&w.buffer===t.memory.buffer||(w=new Int32Array(t.memory.buffer)),w}function m(e){return null==e}let p=null;function v(e){const t=typeof e;if("number"==t||"boolean"==t||null==e)return`${e}`;if("string"==t)return`"${e}"`;if("symbol"==t){const t=e.description;return null==t?"Symbol":`Symbol(${t})`}if("function"==t){const t=e.name;return"string"==typeof t&&t.length>0?`Function(${t})`:"Function"}if(Array.isArray(e)){const t=e.length;let n="[";t>0&&(n+=v(e[0]));for(let r=1;r<t;r++)n+=", "+v(e[r]);return n+="]",n}const n=/\[object ([^\]]+)\]/.exec(toString.call(e));let r;if(!(n.length>1))return toString.call(e);if(r=n[1],"Object"==r)try{return"Object("+JSON.stringify(e)+")"}catch(e){return"Object"}return e instanceof Error?`${e.name}: ${e.message}\n${e.stack}`:r}function y(e,n,r,i){const o={a:e,b:n,cnt:1,dtor:r},a=(...e)=>{o.cnt++;const n=o.a;o.a=0;try{return i(n,o.b,...e)}finally{0==--o.cnt?t.__wbindgen_export_2.get(o.dtor)(n,o.b):o.a=n}};return a.original=o,a}function x(e,n,r){t._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h0c1d2a4158d70b5c(e,n,_(r))}function k(e,n,r){t._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h0c1d2a4158d70b5c(e,n,_(r))}function E(e,n,r){t._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h0c1d2a4158d70b5c(e,n,_(r))}function C(e,n,r){t._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h4d5de114add19f8d(e,n,r)}function S(e,n,r){t._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h0c1d2a4158d70b5c(e,n,_(r))}function I(e,n,r){t._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h0c1d2a4158d70b5c(e,n,_(r))}function A(e,n,r){t._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h0c1d2a4158d70b5c(e,n,_(r))}function R(e,n){t._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h23460ed95307dda1(e,n)}function F(e,n,r){t._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hf1d7a22efcf87914(e,n,_(r))}let P=null;function T(e,n){return(null!==P&&P.buffer===t.memory.buffer||(P=new Float32Array(t.memory.buffer)),P).subarray(e/4,e/4+n)}function O(e,n){try{return e.apply(this,n)}catch(e){t.__wbindgen_exn_store(_(e))}}let M=32;function L(e){if(1==M)throw new Error("out of js stack");return r[--M]=e,M}let j=null;function N(e,t){return u().subarray(e/1,e/1+t)}class D{static __wrap(e){const t=Object.create(D.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();t.__wbg_ruffle_free(e)}constructor(e,n,i){try{var o=t.ruffle_new(_(e),_(n),L(i));return D.__wrap(o)}finally{r[M++]=void 0}}stream_from(e,n){try{var i=g(e,t.__wbindgen_malloc,t.__wbindgen_realloc),o=f;t.ruffle_stream_from(this.ptr,i,o,L(n))}finally{r[M++]=void 0}}load_data(e,n){try{t.ruffle_load_data(this.ptr,_(e),L(n))}finally{r[M++]=void 0}}play(){t.ruffle_play(this.ptr)}pause(){t.ruffle_pause(this.ptr)}is_playing(){return 0!==t.ruffle_is_playing(this.ptr)}prepare_context_menu(){return a(t.ruffle_prepare_context_menu(this.ptr))}run_context_menu_callback(e){t.ruffle_run_context_menu_callback(this.ptr,e)}clear_custom_menu_items(){t.ruffle_clear_custom_menu_items(this.ptr)}destroy(){t.ruffle_destroy(this.ptr)}call_exposed_callback(e,n){var r=g(e,t.__wbindgen_malloc,t.__wbindgen_realloc),i=f,o=function(e,n){const r=n(4*e.length),i=(null!==j&&j.buffer===t.memory.buffer||(j=new Uint32Array(t.memory.buffer)),j);for(let t=0;t<e.length;t++)i[r/4+t]=_(e[t]);return f=e.length,r}(n,t.__wbindgen_malloc),s=f;return a(t.ruffle_call_exposed_callback(this.ptr,r,i,o,s))}set_trace_observer(e){t.ruffle_set_trace_observer(this.ptr,_(e))}audio_context(){return a(t.ruffle_audio_context(this.ptr))}}const W=async function r(o){void 0===o&&(o=new URL(n(903),n.b));const s={wbg:{}};s.wbg.__wbindgen_object_drop_ref=function(e){a(e)},s.wbg.__wbindgen_cb_drop=function(e){const t=a(e).original;return 1==t.cnt--&&(t.a=0,!0)},s.wbg.__wbindgen_is_function=function(e){return"function"==typeof i(e)},s.wbg.__wbindgen_json_parse=function(e,t){return _(JSON.parse(l(e,t)))},s.wbg.__wbindgen_json_serialize=function(e,n){const r=i(n);var o=g(JSON.stringify(void 0===r?null:r),t.__wbindgen_malloc,t.__wbindgen_realloc),a=f;h()[e/4+1]=a,h()[e/4+0]=o},s.wbg.__wbindgen_object_clone_ref=function(e){return _(i(e))},s.wbg.__wbg_isFullscreen_96b85640554e160d=function(e){return i(e).isFullscreen},s.wbg.__wbg_displayUnsupportedMessage_a8f81a8e054e5e91=function(e){i(e).displayUnsupportedMessage()},s.wbg.__wbg_displayRootMovieDownloadFailedMessage_1a5c34096259685a=function(e){i(e).displayRootMovieDownloadFailedMessage()},s.wbg.__wbg_displayMessage_c57c20204892da2b=function(e,t,n){i(e).displayMessage(l(t,n))},s.wbg.__wbg_new_df6e6ab7a65c4c4d=function(e,t){return _(new Error(l(e,t)))},s.wbg.__wbg_panic_bbc809dd04a12c60=function(e,t){i(e).panic(i(t))},s.wbg.__wbindgen_string_new=function(e,t){return _(l(e,t))},s.wbg.__wbg_copyToAudioBuffer_58f244be94bac1d2=function(e,t,n,r,o){var a,s,c;a=i(e),s=0===t?void 0:T(t,n),c=0===r?void 0:T(r,o),s&&a.getChannelData(0).set(s),c&&a.getChannelData(1).set(c)},s.wbg.__wbg_setMetadata_bbaeaee7f48274e6=function(e,t){i(e).setMetadata(a(t))},s.wbg.__wbg_onCallbackAvailable_3a48fae397926c96=function(e,t,n){i(e).onCallbackAvailable(l(t,n))},s.wbg.__wbg_onFSCommand_fb2f94653f71796e=function(){return O((function(e,t,n,r,o){return i(e).onFSCommand(l(t,n),l(r,o))}),arguments)},s.wbg.__wbindgen_number_get=function(e,n){const r=i(n);var o="number"==typeof r?r:void 0;(null!==p&&p.buffer===t.memory.buffer||(p=new Float64Array(t.memory.buffer)),p)[e/8+1]=m(o)?0:o,h()[e/4+0]=!m(o)},s.wbg.__wbindgen_string_get=function(e,n){const r=i(n);var o="string"==typeof r?r:void 0,a=m(o)?0:g(o,t.__wbindgen_malloc,t.__wbindgen_realloc),s=f;h()[e/4+1]=s,h()[e/4+0]=a},s.wbg.__wbindgen_boolean_get=function(e){const t=i(e);return"boolean"==typeof t?t?1:0:2},s.wbg.__wbindgen_number_new=function(e){return _(e)},s.wbg.__wbg_new_59cb74e423758ede=function(){return _(new Error)},s.wbg.__wbg_stack_558ba5917b466edd=function(e,n){var r=g(i(n).stack,t.__wbindgen_malloc,t.__wbindgen_realloc),o=f;h()[e/4+1]=o,h()[e/4+0]=r},s.wbg.__wbg_error_4bb6c2a97407129a=function(e,n){try{console.error(l(e,n))}finally{t.__wbindgen_free(e,n)}},s.wbg.__wbindgen_is_undefined=function(e){return void 0===i(e)},s.wbg.__wbg_instanceof_WebGl2RenderingContext_61a66a1af6516586=function(e){return i(e)instanceof WebGL2RenderingContext},s.wbg.__wbg_bindVertexArray_808c39d3c0f17264=function(e,t){i(e).bindVertexArray(i(t))},s.wbg.__wbg_blitFramebuffer_3b625df19331f21c=function(e,t,n,r,o,a,s,c,u,l,_){i(e).blitFramebuffer(t,n,r,o,a,s,c,u,l>>>0,_>>>0)},s.wbg.__wbg_createVertexArray_855d59250230c563=function(e){var t=i(e).createVertexArray();return m(t)?0:_(t)},s.wbg.__wbg_renderbufferStorageMultisample_bbeb2b87cb14307f=function(e,t,n,r,o,a){i(e).renderbufferStorageMultisample(t>>>0,n,r>>>0,o,a)},s.wbg.__wbg_texImage2D_173d216c50e54701=function(){return O((function(e,t,n,r,o,a,s,c,u,l,_){i(e).texImage2D(t>>>0,n,r,o,a,s,c>>>0,u>>>0,0===l?void 0:N(l,_))}),arguments)},s.wbg.__wbg_bindFramebuffer_ce3cfcfec4aa02cc=function(e,t,n){i(e).bindFramebuffer(t>>>0,i(n))},s.wbg.__wbg_bindRenderbuffer_35f3639b7da4e4c7=function(e,t,n){i(e).bindRenderbuffer(t>>>0,i(n))},s.wbg.__wbg_bindTexture_f2a0487a487a78d9=function(e,t,n){i(e).bindTexture(t>>>0,i(n))},s.wbg.__wbg_createFramebuffer_7fd863d54241be81=function(e){var t=i(e).createFramebuffer();return m(t)?0:_(t)},s.wbg.__wbg_createRenderbuffer_52ebc0325ed6e885=function(e){var t=i(e).createRenderbuffer();return m(t)?0:_(t)},s.wbg.__wbg_createTexture_a46f881a1c96b496=function(e){var t=i(e).createTexture();return m(t)?0:_(t)},s.wbg.__wbg_deleteFramebuffer_867aba8474910f62=function(e,t){i(e).deleteFramebuffer(i(t))},s.wbg.__wbg_deleteRenderbuffer_eb162fd0beb632da=function(e,t){i(e).deleteRenderbuffer(i(t))},s.wbg.__wbg_deleteTexture_1affe310edd12b75=function(e,t){i(e).deleteTexture(i(t))},s.wbg.__wbg_framebufferRenderbuffer_7bb033ee5a2eca8c=function(e,t,n,r,o){i(e).framebufferRenderbuffer(t>>>0,n>>>0,r>>>0,i(o))},s.wbg.__wbg_framebufferTexture2D_9a77a023fd4aedcc=function(e,t,n,r,o,a){i(e).framebufferTexture2D(t>>>0,n>>>0,r>>>0,i(o),a)},s.wbg.__wbg_getError_142acae679908a25=function(e){return i(e).getError()},s.wbg.__wbg_getParameter_34e9af6606eb8544=function(){return O((function(e,t){return _(i(e).getParameter(t>>>0))}),arguments)},s.wbg.__wbg_texParameteri_e99b48aa90ae569b=function(e,t,n,r){i(e).texParameteri(t>>>0,n>>>0,r)},s.wbg.__wbg_instanceof_Window_9c4fd26090e1d029=function(e){return i(e)instanceof Window},s.wbg.__wbg_document_249e9cf340780f93=function(e){var t=i(e).document;return m(t)?0:_(t)},s.wbg.__wbg_location_cf542a8f458da7b4=function(e){return _(i(e).location)},s.wbg.__wbg_navigator_fdf3521d0e190a9b=function(e){return _(i(e).navigator)},s.wbg.__wbg_devicePixelRatio_ea9c0157a379b3ec=function(e){return i(e).devicePixelRatio},s.wbg.__wbg_performance_e029cf47e1c47c09=function(e){var t=i(e).performance;return m(t)?0:_(t)},s.wbg.__wbg_localStorage_884d77b5cedf820a=function(){return O((function(e){var t=i(e).localStorage;return m(t)?0:_(t)}),arguments)},s.wbg.__wbg_cancelAnimationFrame_28c6665c9b2a3944=function(){return O((function(e,t){i(e).cancelAnimationFrame(t)}),arguments)},s.wbg.__wbg_focus_b5729f61a3280cbc=function(){return O((function(e){i(e).focus()}),arguments)},s.wbg.__wbg_open_313f5801aab5e2f1=function(){return O((function(e,t,n,r,o){var a=i(e).open(l(t,n),l(r,o));return m(a)?0:_(a)}),arguments)},s.wbg.__wbg_requestAnimationFrame_aa3bab1f9557a4da=function(){return O((function(e,t){return i(e).requestAnimationFrame(i(t))}),arguments)},s.wbg.__wbg_fetch_eaee025997e4cd56=function(e,t){return _(i(e).fetch(i(t)))},s.wbg.__wbg_destination_c5ce4ac317c9219f=function(e){return _(i(e).destination)},s.wbg.__wbg_sampleRate_cc13fe55474678eb=function(e){return i(e).sampleRate},s.wbg.__wbg_currentTime_ae061c195387b7ac=function(e){return i(e).currentTime},s.wbg.__wbg_new_29e8884899ea6ee2=function(){return O((function(){return _(new e)}),arguments)},s.wbg.__wbg_suspend_4b5d3b7ee1f4a3ec=function(){return O((function(e){return _(i(e).suspend())}),arguments)},s.wbg.__wbg_createBuffer_53c7286e081d0b3e=function(){return O((function(e,t,n,r){return _(i(e).createBuffer(t>>>0,n>>>0,r))}),arguments)},s.wbg.__wbg_createBufferSource_8b7fd8bc4222b208=function(){return O((function(e){return _(i(e).createBufferSource())}),arguments)},s.wbg.__wbg_createChannelMerger_c059636adf34e09d=function(){return O((function(e,t){return _(i(e).createChannelMerger(t>>>0))}),arguments)},s.wbg.__wbg_createChannelSplitter_68062f62d4d66ed8=function(){return O((function(e,t){return _(i(e).createChannelSplitter(t>>>0))}),arguments)},s.wbg.__wbg_createGain_7b6dadac3a6522d6=function(){return O((function(e){return _(i(e).createGain())}),arguments)},s.wbg.__wbg_createScriptProcessor_bce5438a51faa41d=function(){return O((function(e,t,n,r){return _(i(e).createScriptProcessor(t>>>0,n>>>0,r>>>0))}),arguments)},s.wbg.__wbg_decodeAudioData_81b31c0703465a21=function(){return O((function(e,t,n,r){return _(i(e).decodeAudioData(i(t),i(n),i(r)))}),arguments)},s.wbg.__wbg_resume_2c75f8fc1fd26d4b=function(){return O((function(e){return _(i(e).resume())}),arguments)},s.wbg.__wbg_setvalue_e8ff05630a7ffecb=function(e,t){i(e).value=t},s.wbg.__wbg_linearRampToValueAtTime_0245aa9e5d87776f=function(){return O((function(e,t,n){return _(i(e).linearRampToValueAtTime(t,n))}),arguments)},s.wbg.__wbg_setValueAtTime_b4a172acdfc9830f=function(){return O((function(e,t,n){return _(i(e).setValueAtTime(t,n))}),arguments)},s.wbg.__wbg_gain_b3536e37256053f5=function(e){return _(i(e).gain)},s.wbg.__wbg_baseURI_6a10de9fa3003a69=function(){return O((function(e,n){var r=i(n).baseURI,o=m(r)?0:g(r,t.__wbindgen_malloc,t.__wbindgen_realloc),a=f;h()[e/4+1]=a,h()[e/4+0]=o}),arguments)},s.wbg.__wbg_appendChild_6ae001e6d3556190=function(){return O((function(e,t){return _(i(e).appendChild(i(t)))}),arguments)},s.wbg.__wbg_instanceof_SvgsvgElement_28ef05afde3449f9=function(e){return i(e)instanceof SVGSVGElement},s.wbg.__wbg_createSVGMatrix_43815bd5777c567f=function(e){return _(i(e).createSVGMatrix())},s.wbg.__wbg_setProperty_84c0a22125c731d6=function(){return O((function(e,t,n,r,o){i(e).setProperty(l(t,n),l(r,o))}),arguments)},s.wbg.__wbg_protocol_2d293dcd35a07041=function(){return O((function(e,n){var r=g(i(n).protocol,t.__wbindgen_malloc,t.__wbindgen_realloc),o=f;h()[e/4+1]=o,h()[e/4+0]=r}),arguments)},s.wbg.__wbg_assign_fc277322e1a88614=function(){return O((function(e,t,n){i(e).assign(l(t,n))}),arguments)},s.wbg.__wbg_new_3c2bf2a5257369ec=function(){return O((function(){return _(new Path2D)}),arguments)},s.wbg.__wbg_addPath_cf691ede06f38917=function(e,t,n){i(e).addPath(i(t),i(n))},s.wbg.__wbg_closePath_48f860f5bcbc79f3=function(e){i(e).closePath()},s.wbg.__wbg_lineTo_7fd48462a80ac962=function(e,t,n){i(e).lineTo(t,n)},s.wbg.__wbg_moveTo_62ea44f899317925=function(e,t,n){i(e).moveTo(t,n)},s.wbg.__wbg_quadraticCurveTo_6f746087da5a242c=function(e,t,n,r,o){i(e).quadraticCurveTo(t,n,r,o)},s.wbg.__wbg_get_36b7a676e4c8aee9=function(){return O((function(e,n,r,o){var a=i(n)[l(r,o)],s=m(a)?0:g(a,t.__wbindgen_malloc,t.__wbindgen_realloc),c=f;h()[e/4+1]=c,h()[e/4+0]=s}),arguments)},s.wbg.__wbg_set_ad2026ce7b489f96=function(){return O((function(e,t,n,r,o){i(e)[l(t,n)]=l(r,o)}),arguments)},s.wbg.__wbg_delete_9614de882c9a0cf5=function(){return O((function(e,t,n){delete i(e)[l(t,n)]}),arguments)},s.wbg.__wbg_length_914ec377666a1fb8=function(e){return i(e).length},s.wbg.__wbg_setTransform_4c6870c885e2b89e=function(e,t){i(e).setTransform(i(t))},s.wbg.__wbg_offsetX_951495e9516f0aeb=function(e){return i(e).offsetX},s.wbg.__wbg_offsetY_0377a1f53f902a1e=function(e){return i(e).offsetY},s.wbg.__wbg_button_c35922e0098b9cda=function(e){return i(e).button},s.wbg.__wbg_seta_5138c769bc027dee=function(e,t){i(e).a=t},s.wbg.__wbg_setb_d92c5b9331343d2e=function(e,t){i(e).b=t},s.wbg.__wbg_setc_c6fbbb68c7ba4693=function(e,t){i(e).c=t},s.wbg.__wbg_setd_42dcf42c3ceabc9b=function(e,t){i(e).d=t},s.wbg.__wbg_sete_49250c2d46b375b3=function(e,t){i(e).e=t},s.wbg.__wbg_setf_12cb2512fe19ba3f=function(e,t){i(e).f=t},s.wbg.__wbg_connect_3a117c24756fdf62=function(){return O((function(e,t){return _(i(e).connect(i(t)))}),arguments)},s.wbg.__wbg_connect_3a51bca7e31cd323=function(){return O((function(e,t,n){return _(i(e).connect(i(t),n>>>0))}),arguments)},s.wbg.__wbg_connect_52449bed6e387d23=function(){return O((function(e,t,n,r){return _(i(e).connect(i(t),n>>>0,r>>>0))}),arguments)},s.wbg.__wbg_disconnect_b101656fb34b9fa3=function(){return O((function(e){i(e).disconnect()}),arguments)},s.wbg.__wbg_instanceof_HtmlFormElement_de39c8070c818493=function(e){return i(e)instanceof HTMLFormElement},s.wbg.__wbg_submit_e668f2e6a4582aa6=function(){return O((function(e){i(e).submit()}),arguments)},s.wbg.__wbg_bindVertexArrayOES_bb8a104f35d5cf4f=function(e,t){i(e).bindVertexArrayOES(i(t))},s.wbg.__wbg_createVertexArrayOES_51a703442a9d8099=function(e){var t=i(e).createVertexArrayOES();return m(t)?0:_(t)},s.wbg.__wbg_pointerId_e68d773decdc9224=function(e){return i(e).pointerId},s.wbg.__wbg_instanceof_Response_8295bf7aacde3233=function(e){return i(e)instanceof Response},s.wbg.__wbg_ok_e1e8f70fbf7c1fdc=function(e){return i(e).ok},s.wbg.__wbg_statusText_c5b7d9b4bc84d715=function(e,n){var r=g(i(n).statusText,t.__wbindgen_malloc,t.__wbindgen_realloc),o=f;h()[e/4+1]=o,h()[e/4+0]=r},s.wbg.__wbg_arrayBuffer_a98df6d58bb5ea26=function(){return O((function(e){return _(i(e).arrayBuffer())}),arguments)},s.wbg.__wbg_deltaY_49d792c5901e3fc1=function(e){return i(e).deltaY},s.wbg.__wbg_deltaMode_7ed5ee895d112617=function(e){return i(e).deltaMode},s.wbg.__wbg_setbuffer_5aca59a6f26d3307=function(e,t){i(e).buffer=i(t)},s.wbg.__wbg_setloop_710fa1431c2bc494=function(e,t){i(e).loop=0!==t},s.wbg.__wbg_setloopStart_988c5aad78cc446c=function(e,t){i(e).loopStart=t},s.wbg.__wbg_setloopEnd_fcc6c08574ca8ae5=function(e,t){i(e).loopEnd=t},s.wbg.__wbg_setonended_0efd780b31d16bbf=function(e,t){i(e).onended=i(t)},s.wbg.__wbg_start_e92060130d43d928=function(){return O((function(e){i(e).start()}),arguments)},s.wbg.__wbg_start_a8d199336331f3a5=function(){return O((function(e,t,n){i(e).start(t,n)}),arguments)},s.wbg.__wbg_stop_37842cd5a56a341c=function(){return O((function(e,t){i(e).stop(t)}),arguments)},s.wbg.__wbg_outputBuffer_7e7061041aa8a304=function(){return O((function(e){return _(i(e).outputBuffer)}),arguments)},s.wbg.__wbg_now_4abbca4ef2aba8d6=function(e){return i(e).now()},s.wbg.__wbg_currentTarget_a3b06d00ff76859b=function(e){var t=i(e).currentTarget;return m(t)?0:_(t)},s.wbg.__wbg_preventDefault_19876bf3a4179b34=function(e){i(e).preventDefault()},s.wbg.__wbg_setsrc_21ed0b40d0ff0413=function(e,t,n){i(e).src=l(t,n)},s.wbg.__wbg_new_0891fac076d9e6b3=function(){return O((function(){return _(new Image)}),arguments)},s.wbg.__wbg_newwithwidthandheight_045e54743ae79290=function(){return O((function(e,t){return _(new Image(e>>>0,t>>>0))}),arguments)},s.wbg.__wbg_data_7db9e348ce1855fa=function(e,n){var r=function(e,t){const n=t(1*e.length);return u().set(e,n/1),f=e.length,n}(i(n).data,t.__wbindgen_malloc),o=f;h()[e/4+1]=o,h()[e/4+0]=r},s.wbg.__wbg_key_97a48109ce6890c4=function(e,n){var r=g(i(n).key,t.__wbindgen_malloc,t.__wbindgen_realloc),o=f;h()[e/4+1]=o,h()[e/4+0]=r},s.wbg.__wbg_code_e70e2272901f086c=function(e,n){var r=g(i(n).code,t.__wbindgen_malloc,t.__wbindgen_realloc),o=f;h()[e/4+1]=o,h()[e/4+0]=r},s.wbg.__wbg_newwithstrandinit_a58924208f457f33=function(){return O((function(e,t,n){return _(new Request(l(e,t),i(n)))}),arguments)},s.wbg.__wbg_setonaudioprocess_9d6a213da205ae4d=function(e,t){i(e).onaudioprocess=i(t)},s.wbg.__wbg_body_0d97f334de622953=function(e){var t=i(e).body;return m(t)?0:_(t)},s.wbg.__wbg_createElement_ba61aad8af6be7f4=function(){return O((function(e,t,n){return _(i(e).createElement(l(t,n)))}),arguments)},s.wbg.__wbg_createElementNS_c951238dc260501e=function(){return O((function(e,t,n,r,o){return _(i(e).createElementNS(0===t?void 0:l(t,n),l(r,o)))}),arguments)},s.wbg.__wbg_setid_16518c90432c2f8e=function(e,t,n){i(e).id=l(t,n)},s.wbg.__wbg_clientWidth_405142b36824cd4f=function(e){return i(e).clientWidth},s.wbg.__wbg_clientHeight_645231c9da3480a9=function(e){return i(e).clientHeight},s.wbg.__wbg_querySelector_6c8f27227fc14315=function(){return O((function(e,t,n){var r=i(e).querySelector(l(t,n));return m(r)?0:_(r)}),arguments)},s.wbg.__wbg_releasePointerCapture_758b760808d6ce02=function(){return O((function(e,t){i(e).releasePointerCapture(t)}),arguments)},s.wbg.__wbg_setAttribute_0b50656f1ccc45bf=function(){return O((function(e,t,n,r,o){i(e).setAttribute(l(t,n),l(r,o))}),arguments)},s.wbg.__wbg_setAttributeNS_d31649e78e2cf95c=function(){return O((function(e,t,n,r,o,a,s){i(e).setAttributeNS(0===t?void 0:l(t,n),l(r,o),l(a,s))}),arguments)},s.wbg.__wbg_setPointerCapture_6f31425163cf44a1=function(){return O((function(e,t){i(e).setPointerCapture(t)}),arguments)},s.wbg.__wbg_remove_eabff3d9e444a826=function(e){i(e).remove()},s.wbg.__wbg_instanceof_WebGlRenderingContext_5671fd2c102046b1=function(e){return i(e)instanceof WebGLRenderingContext},s.wbg.__wbg_drawingBufferWidth_0f8ef2b95bb66c81=function(e){return i(e).drawingBufferWidth},s.wbg.__wbg_drawingBufferHeight_04a3507b6fb21bac=function(e){return i(e).drawingBufferHeight},s.wbg.__wbg_bufferData_9f09145baa3273f9=function(e,t,n,r,o){i(e).bufferData(t>>>0,N(n,r),o>>>0)},s.wbg.__wbg_texImage2D_48722cf9f95c8df8=function(){return O((function(e,t,n,r,o,a,s,c,u,l,_){i(e).texImage2D(t>>>0,n,r,o,a,s,c>>>0,u>>>0,0===l?void 0:N(l,_))}),arguments)},s.wbg.__wbg_uniform1fv_0b5950d4f588ac7e=function(e,t,n,r){i(e).uniform1fv(i(t),T(n,r))},s.wbg.__wbg_uniform4fv_8fa4c0052d79aed2=function(e,t,n,r){i(e).uniform4fv(i(t),T(n,r))},s.wbg.__wbg_uniformMatrix3fv_c4a15deb8d8fbd61=function(e,t,n,r,o){i(e).uniformMatrix3fv(i(t),0!==n,T(r,o))},s.wbg.__wbg_uniformMatrix4fv_62951f66fbf764cd=function(e,t,n,r,o){i(e).uniformMatrix4fv(i(t),0!==n,T(r,o))},s.wbg.__wbg_activeTexture_790fa161eaf8dcb0=function(e,t){i(e).activeTexture(t>>>0)},s.wbg.__wbg_attachShader_5446231928034874=function(e,t,n){i(e).attachShader(i(t),i(n))},s.wbg.__wbg_bindBuffer_5b0bd39cdc9f3c91=function(e,t,n){i(e).bindBuffer(t>>>0,i(n))},s.wbg.__wbg_bindFramebuffer_9490ff183a431d0d=function(e,t,n){i(e).bindFramebuffer(t>>>0,i(n))},s.wbg.__wbg_bindRenderbuffer_86495e658e23020f=function(e,t,n){i(e).bindRenderbuffer(t>>>0,i(n))},s.wbg.__wbg_bindTexture_6df7d2262019c813=function(e,t,n){i(e).bindTexture(t>>>0,i(n))},s.wbg.__wbg_blendFunc_c91f929b64e24ca6=function(e,t,n){i(e).blendFunc(t>>>0,n>>>0)},s.wbg.__wbg_clear_216e95e64c0ce688=function(e,t){i(e).clear(t>>>0)},s.wbg.__wbg_clearColor_f7316ccd75b2a3b1=function(e,t,n,r,o){i(e).clearColor(t,n,r,o)},s.wbg.__wbg_colorMask_cc8730de91ea02ce=function(e,t,n,r,o){i(e).colorMask(0!==t,0!==n,0!==r,0!==o)},s.wbg.__wbg_compileShader_749eb91c541c360c=function(e,t){i(e).compileShader(i(t))},s.wbg.__wbg_createBuffer_8ae1735de737ca21=function(e){var t=i(e).createBuffer();return m(t)?0:_(t)},s.wbg.__wbg_createProgram_28f1378728397a46=function(e){var t=i(e).createProgram();return m(t)?0:_(t)},s.wbg.__wbg_createShader_f6da8384be38c095=function(e,t){var n=i(e).createShader(t>>>0);return m(n)?0:_(n)},s.wbg.__wbg_createTexture_be549d53d11ebf83=function(e){var t=i(e).createTexture();return m(t)?0:_(t)},s.wbg.__wbg_disable_b2672dfd98db0d2c=function(e,t){i(e).disable(t>>>0)},s.wbg.__wbg_disableVertexAttribArray_f5154961c6bbc61f=function(e,t){i(e).disableVertexAttribArray(t>>>0)},s.wbg.__wbg_drawElements_19a4ea67a2f14d44=function(e,t,n,r,o){i(e).drawElements(t>>>0,n,r>>>0,o)},s.wbg.__wbg_enable_9c5b69ae0579565d=function(e,t){i(e).enable(t>>>0)},s.wbg.__wbg_enableVertexAttribArray_eff1f71734ec0c24=function(e,t){i(e).enableVertexAttribArray(t>>>0)},s.wbg.__wbg_getAttribLocation_7321b82ba20f42ed=function(e,t,n,r){return i(e).getAttribLocation(i(t),l(n,r))},s.wbg.__wbg_getExtension_29e749f65dd345b5=function(){return O((function(e,t,n){var r=i(e).getExtension(l(t,n));return m(r)?0:_(r)}),arguments)},s.wbg.__wbg_getParameter_e02390c31b2aedb9=function(){return O((function(e,t){return _(i(e).getParameter(t>>>0))}),arguments)},s.wbg.__wbg_getProgramInfoLog_89c655cf7d3deb29=function(e,n,r){var o=i(n).getProgramInfoLog(i(r)),a=m(o)?0:g(o,t.__wbindgen_malloc,t.__wbindgen_realloc),s=f;h()[e/4+1]=s,h()[e/4+0]=a},s.wbg.__wbg_getProgramParameter_97fb617622a1e9c6=function(e,t,n){return _(i(e).getProgramParameter(i(t),n>>>0))},s.wbg.__wbg_getShaderInfoLog_8fbfc8052cd2a5c2=function(e,n,r){var o=i(n).getShaderInfoLog(i(r)),a=m(o)?0:g(o,t.__wbindgen_malloc,t.__wbindgen_realloc),s=f;h()[e/4+1]=s,h()[e/4+0]=a},s.wbg.__wbg_getUniformLocation_8ef86decd2ceb6a0=function(e,t,n,r){var o=i(e).getUniformLocation(i(t),l(n,r));return m(o)?0:_(o)},s.wbg.__wbg_linkProgram_b060b6f5c6419695=function(e,t){i(e).linkProgram(i(t))},s.wbg.__wbg_pixelStorei_1e9534b41710bd3f=function(e,t,n){i(e).pixelStorei(t>>>0,n)},s.wbg.__wbg_shaderSource_e00c8c2b41679a01=function(e,t,n,r){i(e).shaderSource(i(t),l(n,r))},s.wbg.__wbg_stencilFunc_eeb2374a49160e1e=function(e,t,n,r){i(e).stencilFunc(t>>>0,n,r>>>0)},s.wbg.__wbg_stencilMask_8383787c8968e634=function(e,t){i(e).stencilMask(t>>>0)},s.wbg.__wbg_stencilOp_d618117604d44e35=function(e,t,n,r){i(e).stencilOp(t>>>0,n>>>0,r>>>0)},s.wbg.__wbg_texParameteri_58c0d4e82f062e6f=function(e,t,n,r){i(e).texParameteri(t>>>0,n>>>0,r)},s.wbg.__wbg_uniform1f_affc2490c2cff524=function(e,t,n){i(e).uniform1f(i(t),n)},s.wbg.__wbg_uniform1i_584ce89a2fa7078d=function(e,t,n){i(e).uniform1i(i(t),n)},s.wbg.__wbg_useProgram_ad5593b87b2aec4f=function(e,t){i(e).useProgram(i(t))},s.wbg.__wbg_vertexAttribPointer_3e272f16a22bb68c=function(e,t,n,r,o,a,s){i(e).vertexAttribPointer(t>>>0,n,r>>>0,0!==o,a,s)},s.wbg.__wbg_viewport_40ac6422fa7e7109=function(e,t,n,r,o){i(e).viewport(t,n,r,o)},s.wbg.__wbg_debug_3c0b82934d1dd91e=function(e){console.debug(i(e))},s.wbg.__wbg_error_9ff84d33a850b1ef=function(e){console.error(i(e))},s.wbg.__wbg_info_3b2058a219fa31b9=function(e){console.info(i(e))},s.wbg.__wbg_log_386a8115a84a780d=function(e){console.log(i(e))},s.wbg.__wbg_warn_5fc232d538408d4a=function(e){console.warn(i(e))},s.wbg.__wbg_style_9290c51fe7cb7783=function(e){return _(i(e).style)},s.wbg.__wbg_newwithbuffersourcesequenceandoptions_689c4999a01e0d8c=function(){return O((function(e,t){return _(new Blob(i(e),i(t)))}),arguments)},s.wbg.__wbg_addEventListener_b334b84e6525699c=function(){return O((function(e,t,n,r){i(e).addEventListener(l(t,n),i(r))}),arguments)},s.wbg.__wbg_addEventListener_502683a26945b1a5=function(){return O((function(e,t,n,r,o){i(e).addEventListener(l(t,n),i(r),i(o))}),arguments)},s.wbg.__wbg_addEventListener_b88d8dd107ce2f39=function(){return O((function(e,t,n,r,o){i(e).addEventListener(l(t,n),i(r),0!==o)}),arguments)},s.wbg.__wbg_removeEventListener_380d0ebdf9cd12ba=function(){return O((function(e,t,n,r){i(e).removeEventListener(l(t,n),i(r))}),arguments)},s.wbg.__wbg_removeEventListener_1f30d3e3ef4ee58e=function(){return O((function(e,t,n,r,o){i(e).removeEventListener(l(t,n),i(r),0!==o)}),arguments)},s.wbg.__wbg_instanceof_HtmlCanvasElement_e0e251da2aa0b541=function(e){return i(e)instanceof HTMLCanvasElement},s.wbg.__wbg_width_5843e31ec081f978=function(e){return i(e).width},s.wbg.__wbg_setwidth_fd251e9da5abcced=function(e,t){i(e).width=t>>>0},s.wbg.__wbg_height_872c06b1bc666dd9=function(e){return i(e).height},s.wbg.__wbg_setheight_5b882973e84fa13c=function(e,t){i(e).height=t>>>0},s.wbg.__wbg_getContext_d778ffc8203f64ae=function(){return O((function(e,t,n){var r=i(e).getContext(l(t,n));return m(r)?0:_(r)}),arguments)},s.wbg.__wbg_getContext_4678c25f580222b0=function(){return O((function(e,t,n,r){var o=i(e).getContext(l(t,n),i(r));return m(o)?0:_(o)}),arguments)},s.wbg.__wbg_userAgent_89e0d93ea0bfe354=function(){return O((function(e,n){var r=g(i(n).userAgent,t.__wbindgen_malloc,t.__wbindgen_realloc),o=f;h()[e/4+1]=o,h()[e/4+0]=r}),arguments)},s.wbg.__wbg_instanceof_CanvasRenderingContext2d_eea9cd931eb496b7=function(e){return i(e)instanceof CanvasRenderingContext2D},s.wbg.__wbg_setglobalAlpha_6b6fb9a57a09df9d=function(e,t){i(e).globalAlpha=t},s.wbg.__wbg_setglobalCompositeOperation_e404daf7e6bb63e4=function(){return O((function(e,t,n){i(e).globalCompositeOperation=l(t,n)}),arguments)},s.wbg.__wbg_setstrokeStyle_72f1ad8117744d41=function(e,t){i(e).strokeStyle=i(t)},s.wbg.__wbg_setfillStyle_5306396b0368ba08=function(e,t){i(e).fillStyle=i(t)},s.wbg.__wbg_setfilter_fa947e793349a2de=function(e,t,n){i(e).filter=l(t,n)},s.wbg.__wbg_setlineWidth_9f25e0ceca65a4d7=function(e,t){i(e).lineWidth=t},s.wbg.__wbg_setlineCap_6c7169ac07a6349e=function(e,t,n){i(e).lineCap=l(t,n)},s.wbg.__wbg_setlineJoin_d6311997533dcdbf=function(e,t,n){i(e).lineJoin=l(t,n)},s.wbg.__wbg_setmiterLimit_cd181ac4dc64fc1d=function(e,t){i(e).miterLimit=t},s.wbg.__wbg_drawImage_ff0075aa41bc6155=function(){return O((function(e,t,n,r){i(e).drawImage(i(t),n,r)}),arguments)},s.wbg.__wbg_drawImage_b43cf9d292491493=function(){return O((function(e,t,n,r){i(e).drawImage(i(t),n,r)}),arguments)},s.wbg.__wbg_fill_a928208ebdb3fecc=function(e,t){i(e).fill(i(t))},s.wbg.__wbg_stroke_c19677a93050ef02=function(e,t){i(e).stroke(i(t))},s.wbg.__wbg_createPattern_a737181b452c0941=function(){return O((function(e,t,n,r){var o=i(e).createPattern(i(t),l(n,r));return m(o)?0:_(o)}),arguments)},s.wbg.__wbg_getImageData_6e56dc172cd2ed36=function(){return O((function(e,t,n,r,o){return _(i(e).getImageData(t,n,r,o))}),arguments)},s.wbg.__wbg_clearRect_dbb56982eff2a250=function(e,t,n,r,o){i(e).clearRect(t,n,r,o)},s.wbg.__wbg_fillRect_33b210367d4a0063=function(e,t,n,r,o){i(e).fillRect(t,n,r,o)},s.wbg.__wbg_resetTransform_09cd4a47a1d0fc9c=function(){return O((function(e){i(e).resetTransform()}),arguments)},s.wbg.__wbg_setTransform_36254c0c8f264eee=function(){return O((function(e,t,n,r,o,a,s){i(e).setTransform(t,n,r,o,a,s)}),arguments)},s.wbg.__wbg_getRandomValues_98117e9a7e993920=function(){return O((function(e,t){i(e).getRandomValues(i(t))}),arguments)},s.wbg.__wbg_randomFillSync_64cc7d048f228ca8=function(){return O((function(e,t,n){i(e).randomFillSync(N(t,n))}),arguments)},s.wbg.__wbg_process_2f24d6544ea7b200=function(e){return _(i(e).process)},s.wbg.__wbindgen_is_object=function(e){const t=i(e);return"object"==typeof t&&null!==t},s.wbg.__wbg_versions_6164651e75405d4a=function(e){return _(i(e).versions)},s.wbg.__wbg_node_4b517d861cbcb3bc=function(e){return _(i(e).node)},s.wbg.__wbindgen_is_string=function(e){return"string"==typeof i(e)},s.wbg.__wbg_crypto_98fc271021c7d2ad=function(e){return _(i(e).crypto)},s.wbg.__wbg_msCrypto_a2cdb043d2bfe57f=function(e){return _(i(e).msCrypto)},s.wbg.__wbg_modulerequire_3440a4bcf44437db=function(){return O((function(e,t){return _(d.require(l(e,t)))}),arguments)},s.wbg.__wbg_get_fa3e061cf24f546c=function(e,t){return _(i(e)[t>>>0])},s.wbg.__wbg_new_d53590a4dbd169d4=function(){return _(new Array)},s.wbg.__wbg_newnoargs_ac91a24e57fcaec8=function(e,t){return _(new Function(l(e,t)))},s.wbg.__wbg_next_5f0f6ddc22e2fdd1=function(){return O((function(e){return _(i(e).next())}),arguments)},s.wbg.__wbg_done_4dd0706314fb5c1c=function(e){return i(e).done},s.wbg.__wbg_value_5adfeb2a0d35c080=function(e){return _(i(e).value)},s.wbg.__wbg_get_ed86ad8212b73674=function(){return O((function(e,t){return _(Reflect.get(i(e),i(t)))}),arguments)},s.wbg.__wbg_call_9e1eb05d905a21d9=function(){return O((function(e,t){return _(i(e).call(i(t)))}),arguments)},s.wbg.__wbg_new_d537305b59fc353d=function(){return _(new Object)},s.wbg.__wbg_isArray_702cd49102349c0b=function(e){return Array.isArray(i(e))},s.wbg.__wbg_of_0b88a475ee6d5931=function(e,t){return _(Array.of(i(e),i(t)))},s.wbg.__wbg_push_84b8dc290d3c24fc=function(e,t){return i(e).push(i(t))},s.wbg.__wbg_instanceof_ArrayBuffer_c6308c18af5750f3=function(e){return i(e)instanceof ArrayBuffer},s.wbg.__wbg_new_00935fc729da53be=function(e){return _(new ArrayBuffer(e>>>0))},s.wbg.__wbg_slice_8d492e665dd9c5c3=function(e,t,n){return _(i(e).slice(t>>>0,n>>>0))},s.wbg.__wbg_values_d819e5278ff3f456=function(e){return _(i(e).values())},s.wbg.__wbg_apply_38202b8d2fb15b94=function(){return O((function(e,t,n){return _(i(e).apply(i(t),i(n)))}),arguments)},s.wbg.__wbg_call_6cdbeff3b536233f=function(){return O((function(e,t,n){return _(i(e).call(i(t),i(n)))}),arguments)},s.wbg.__wbg_getTime_43617663e42b8270=function(e){return i(e).getTime()},s.wbg.__wbg_getTimezoneOffset_66f57b1b677147cd=function(e){return i(e).getTimezoneOffset()},s.wbg.__wbg_new0_d38255ac176a2e53=function(){return _(new Date)},s.wbg.__wbg_instanceof_Object_525d4dc97a52095d=function(e){return i(e)instanceof Object},s.wbg.__wbg_entries_a2898b10c3e3f53e=function(e){return _(Object.entries(i(e)))},s.wbg.__wbg_fromEntries_336c2b2ed6f0f10d=function(){return O((function(e){return _(Object.fromEntries(i(e)))}),arguments)},s.wbg.__wbg_is_5530a9697a80e568=function(e,t){return Object.is(i(e),i(t))},s.wbg.__wbg_resolve_89251e936a5e00ac=function(e){return _(Promise.resolve(i(e)))},s.wbg.__wbg_then_fe720822c4da5711=function(e,t){return _(i(e).then(i(t)))},s.wbg.__wbg_then_f040b93e57f11d67=function(e,t,n){return _(i(e).then(i(t),i(n)))},s.wbg.__wbg_self_bce917bbd61b0be0=function(){return O((function(){return _(self.self)}),arguments)},s.wbg.__wbg_window_08048ce184ae3496=function(){return O((function(){return _(window.window)}),arguments)},s.wbg.__wbg_globalThis_d6f1ff349571af81=function(){return O((function(){return _(globalThis.globalThis)}),arguments)},s.wbg.__wbg_global_63b22b64d239db75=function(){return O((function(){return _(n.g.global)}),arguments)},s.wbg.__wbg_buffer_fbad716641c158a5=function(e){return _(i(e).buffer)},s.wbg.__wbg_newwithbyteoffsetandlength_403faa90cb44b1fb=function(e,t,n){return _(new Uint8Array(i(e),t>>>0,n>>>0))},s.wbg.__wbg_new_c9e78bd69716df92=function(e){return _(new Uint8Array(i(e)))},s.wbg.__wbg_set_2fd4486048716f38=function(e,t,n){i(e).set(i(t),n>>>0)},s.wbg.__wbg_length_82dd1e63e9c75f09=function(e){return i(e).length},s.wbg.__wbg_newwithlength_a9f6c1fd1bf4e5e4=function(e){return _(new Uint8Array(e>>>0))},s.wbg.__wbg_fill_c40aa7d495abf30e=function(e,t,n,r){return _(i(e).fill(t,n>>>0,r>>>0))},s.wbg.__wbg_buffer_459fc33219170316=function(e){return _(i(e).buffer)},s.wbg.__wbg_subarray_e80c85d931be89c4=function(e,t,n){return _(i(e).subarray(t>>>0,n>>>0))},s.wbg.__wbg_byteLength_50a17a65ffebdb2f=function(e){return i(e).byteLength},s.wbg.__wbg_byteOffset_556e2ec78c414f6b=function(e){return i(e).byteOffset},s.wbg.__wbg_ownKeys_c37b4344349f2cdd=function(){return O((function(e){return _(Reflect.ownKeys(i(e)))}),arguments)},s.wbg.__wbg_set_3276f2af88398f64=function(){return O((function(e,t,n){return Reflect.set(i(e),i(t),i(n))}),arguments)},s.wbg.__wbindgen_debug_string=function(e,n){var r=g(v(i(n)),t.__wbindgen_malloc,t.__wbindgen_realloc),o=f;h()[e/4+1]=o,h()[e/4+0]=r},s.wbg.__wbindgen_throw=function(e,t){throw new Error(l(e,t))},s.wbg.__wbindgen_rethrow=function(e){throw a(e)},s.wbg.__wbindgen_memory=function(){return _(t.memory)},s.wbg.__wbindgen_closure_wrapper515=function(e,t,n){return _(y(e,t,16,x))},s.wbg.__wbindgen_closure_wrapper517=function(e,t,n){return _(y(e,t,16,k))},s.wbg.__wbindgen_closure_wrapper519=function(e,t,n){return _(y(e,t,16,E))},s.wbg.__wbindgen_closure_wrapper521=function(e,t,n){return _(y(e,t,16,C))},s.wbg.__wbindgen_closure_wrapper523=function(e,t,n){return _(y(e,t,16,S))},s.wbg.__wbindgen_closure_wrapper525=function(e,t,n){return _(y(e,t,16,I))},s.wbg.__wbindgen_closure_wrapper527=function(e,t,n){return _(y(e,t,16,A))},s.wbg.__wbindgen_closure_wrapper529=function(e,t,n){return _(y(e,t,16,R))},s.wbg.__wbindgen_closure_wrapper1825=function(e,t,n){return _(y(e,t,881,F))},("string"==typeof o||"function"==typeof Request&&o instanceof Request||"function"==typeof URL&&o instanceof URL)&&(o=fetch(o));const{instance:c,module:d}=await async function(e,t){if("function"==typeof Response&&e instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(e,t)}catch(t){if("application/wasm"==e.headers.get("Content-Type"))throw t;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",t)}const n=await e.arrayBuffer();return await WebAssembly.instantiate(n,t)}{const n=await WebAssembly.instantiate(e,t);return n instanceof WebAssembly.Instance?{instance:n,module:e}:n}}(await o,s);return t=c.exports,r.__wbindgen_wasm_module=d,t};function U(e){const t="function"==typeof Function.prototype.toString?Function.prototype.toString():null;return"string"==typeof t&&t.indexOf("[native code]")>=0&&Function.prototype.toString.call(e).indexOf("[native code]")>=0}let B="";try{void 0!==document.currentScript&&null!==document.currentScript&&"src"in document.currentScript&&""!==document.currentScript.src&&(B=new URL(".",document.currentScript.src).href)}catch(e){console.warn("Unable to get currentScript URL")}function V(e){let t=B;return void 0!==e&&void 0!==e.publicPath&&(t=e.publicPath),""===t||t.endsWith("/")||(t+="/"),t}let $=null;function q(e){return null==$&&($=function(e){return t=this,r=void 0,o=function*(){return"function"==typeof Array.prototype.reduce&&U(Array.prototype.reduce)||Object.defineProperty(Array.prototype,"reduce",{value(...e){if(0===e.length&&window.Prototype&&window.Prototype.Version&&window.Prototype.Version<"1.6.1")return this.length>1?this:this[0];const t=e[0];if(null===this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof t)throw new TypeError(`${t} is not a function`);const n=Object(this),r=n.length>>>0;let i,o=0;if(e.length>=2)i=e[1];else{for(;o<r&&!(o in n);)o++;if(o>=r)throw new TypeError("Reduce of empty array with no initial value");i=n[o++]}for(;o<r;)o in n&&(i=t(i,n[o],o,n)),o++;return i}}),"function"==typeof Window&&U(Window)||"function"==typeof window.constructor&&U(window.constructor)&&(window.Window=window.constructor),null==window.Reflect&&(window.Reflect={}),"function"!=typeof Reflect.get&&Object.defineProperty(Reflect,"get",{value:(e,t)=>e[t]}),"function"!=typeof Reflect.set&&Object.defineProperty(Reflect,"set",{value(e,t,n){e[t]=n}}),n.p=V(e),yield W(),D},new((i=void 0)||(i=Promise))((function(e,n){function a(e){try{c(o.next(e))}catch(e){n(e)}}function s(e){try{c(o.throw(e))}catch(e){n(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(a,s)}c((o=o.apply(t,r||[])).next())}));var t,r,i,o}(e)),$}class H{constructor(e){if(this.__mimetypes=[],this.__named_mimetypes={},e)for(let t=0;t<e.length;t++)this.install(e[t])}install(e){const t=this.__mimetypes.length;this.__mimetypes.push(e),this.__named_mimetypes[e.type]=e,this[e.type]=e,this[t]=e}item(e){return this.__mimetypes[e]}namedItem(e){return this.__named_mimetypes[e]}get length(){return this.__mimetypes.length}[Symbol.iterator](){return this.__mimetypes[Symbol.iterator]()}}class z extends H{constructor(e,t,n,r){super(r),this.name=e,this.description=t,this.filename=n}install(e){super.install(e)}[Symbol.iterator](){return super[Symbol.iterator]()}}class J{constructor(e){this.__plugins=[],this.__named_plugins={};for(let t=0;t<e.length;t++)this.install(e[t])}install(e){const t=this.__plugins.length;this.__plugins.push(e),this.__named_plugins[e.name]=e,this[e.name]=e,this[t]=e}item(e){return this.__plugins[e]}namedItem(e){return this.__named_plugins[e]}get length(){return this.__plugins.length}}const G=new z("Shockwave Flash","Shockwave Flash 32.0 r0","ruffle.js",null);G.install({type:"application/futuresplash",description:"Shockwave Flash",suffixes:"spl",enabledPlugin:G}),G.install({type:"application/x-shockwave-flash",description:"Shockwave Flash",suffixes:"swf",enabledPlugin:G}),G.install({type:"application/x-shockwave-flash2-preview",description:"Shockwave Flash",suffixes:"swf",enabledPlugin:G}),G.install({type:"application/vnd.adobe.flash-movie",description:"Shockwave Flash",suffixes:"swf",enabledPlugin:G});const Y=document.createElement("template");Y.innerHTML='\n    <style>\n        :host {\n            --ruffle-blue: #37528c;\n            --ruffle-orange: #ffad33;\n\n            display: inline-block;\n            position: relative;\n            /* Default width/height; this will get overridden by user styles/attributes. */\n            width: 550px;\n            height: 400px;\n            font-family: Arial, sans-serif;\n            letter-spacing: 0.4px;\n            touch-action: none;\n            user-select: none;\n            -webkit-user-select: none;\n            -webkit-tap-highlight-color: transparent;\n        }\n\n        /* Ruffle\'s width/height CSS interferes Safari fullscreen CSS. */\n        /* Ensure that Safari\'s fullscreen mode actually fills the screen. */\n        :host(:-webkit-full-screen) {\n            display: block;\n            width: 100% !important;\n            height: 100% !important;\n        }\n\n        /* All of these use the dimensions specified by the embed. */\n        #container,\n        #play_button,\n        #unmute_overlay,\n        #unmute_overlay .background,\n        #panic,\n        #message_overlay {\n            position: absolute;\n            top: 0;\n            bottom: 0;\n            left: 0;\n            right: 0;\n        }\n\n        #container {\n            overflow: hidden;\n        }\n\n        #container canvas {\n            width: 100%;\n            height: 100%;\n        }\n\n        #play_button,\n        #unmute_overlay {\n            cursor: pointer;\n            display: none;\n        }\n\n        #unmute_overlay .background {\n            background: black;\n            opacity: 0.7;\n        }\n\n        #play_button .icon,\n        #unmute_overlay .icon {\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            width: 50%;\n            height: 50%;\n            max-width: 384px;\n            max-height: 384px;\n            transform: translate(-50%, -50%);\n            opacity: 0.8;\n        }\n\n        #play_button:hover .icon,\n        #unmute_overlay:hover .icon {\n            opacity: 1;\n        }\n\n        #panic {\n            font-size: 20px;\n            text-align: center;\n            /* Inverted colors from play button! */\n            background: linear-gradient(180deg, #fd3a40 0%, #fda138 100%);\n            color: white;\n            display: flex;\n            flex-flow: column;\n            justify-content: space-around;\n        }\n\n        #panic a {\n            color: var(--ruffle-blue);\n            font-weight: bold;\n        }\n\n        #panic-title {\n            font-size: xxx-large;\n            font-weight: bold;\n        }\n\n        #panic-body.details {\n            flex: 0.9;\n            margin: 0 10px;\n        }\n\n        #panic-body textarea {\n            width: 100%;\n            height: 100%;\n            resize: none;\n        }\n\n        #panic ul {\n            padding: 0;\n            display: flex;\n            list-style-type: none;\n            justify-content: space-evenly;\n        }\n\n        #message_overlay {\n            position: absolute;\n            background: var(--ruffle-blue);\n            color: var(--ruffle-orange);\n            opacity: 1;\n            z-index: 2;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            overflow: auto;\n        }\n\n        #message_overlay .message {\n            text-align: center;\n            max-height: 100%;\n            max-width: 100%;\n            padding: 5%;\n        }\n\n        #message_overlay p {\n            margin: 0.5em 0;\n        }\n\n        #message_overlay .message div {\n            display: flex;\n            justify-content: center;\n            flex-wrap: wrap;\n            column-gap: 1em;\n        }\n\n        #message_overlay a, #message_overlay button {\n            cursor: pointer;\n            background: var(--ruffle-blue);\n            color: var(--ruffle-orange);\n            border: 2px solid var(--ruffle-orange);\n            font-weight: bold;\n            font-size: 1.25em;\n            border-radius: 0.6em;\n            padding: 10px;\n            text-decoration: none;\n            margin: 2% 0;\n        }\n\n        #message_overlay a:hover, #message_overlay button:hover {\n            background: #ffffff4c;\n        }\n\n        #continue-btn {\n             cursor: pointer;\n             background: var(--ruffle-blue);\n             color: var(--ruffle-orange);\n             border: 2px solid var(--ruffle-orange);\n             font-weight: bold;\n             font-size: 20px;\n             border-radius: 20px;\n             padding: 10px;\n        }\n\n        #continue-btn:hover {\n            background: #ffffff4c;\n        }\n\n        #context-menu {\n            display: none;\n            color: black;\n            background: #fafafa;\n            border: 1px solid gray;\n            box-shadow: 0px 5px 10px -5px black;\n            position: absolute;\n            font-size: 14px;\n            text-align: left;\n            list-style: none;\n            padding: 0;\n            margin: 0;\n        }\n\n        #context-menu .menu_item {\n            padding: 5px 10px;\n            cursor: pointer;\n            color: black;\n        }\n\n        #context-menu .menu_item.disabled {\n            cursor: default;\n            color: gray;\n        }\n\n        #context-menu .menu_item:not(.disabled):hover {\n            background: lightgray;\n        }\n\n        #context-menu .menu_separator hr {\n            border: none;\n            border-bottom: 1px solid lightgray;\n            margin: 2px;\n        }\n    </style>\n    <style id="dynamic_styles"></style>\n\n    <div id="container">\n        <div id="play_button"><div class="icon"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" viewBox="0 0 250 250" style="width:100%;height:100%;"><defs><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="125" y1="0" x2="125" y2="250" spreadMethod="pad"><stop offset="0%" stop-color="#FDA138"/><stop offset="100%" stop-color="#FD3A40"/></linearGradient><g id="b"><path fill="url(#a)" d="M250 125q0-52-37-88-36-37-88-37T37 37Q0 73 0 125t37 88q36 37 88 37t88-37q37-36 37-88M87 195V55l100 70-100 70z"/><path fill="#FFF" d="M87 55v140l100-70L87 55z"/></g></defs><use xlink:href="#b"/></svg></div></div>\n        <div id="unmute_overlay"><div class="background"></div><div class="icon"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" viewBox="0 0 512 584" style="width:100%;height:100%;scale:0.8;"><path fill="#FFF" stroke="#FFF" d="m457.941 256 47.029-47.029c9.372-9.373 9.372-24.568 0-33.941-9.373-9.373-24.568-9.373-33.941 0l-47.029 47.029-47.029-47.029c-9.373-9.373-24.568-9.373-33.941 0-9.372 9.373-9.372 24.568 0 33.941l47.029 47.029-47.029 47.029c-9.372 9.373-9.372 24.568 0 33.941 4.686 4.687 10.827 7.03 16.97 7.03s12.284-2.343 16.971-7.029l47.029-47.03 47.029 47.029c4.687 4.687 10.828 7.03 16.971 7.03s12.284-2.343 16.971-7.029c9.372-9.373 9.372-24.568 0-33.941z"/><path fill="#FFF" stroke="#FFF" d="m99 160h-55c-24.301 0-44 19.699-44 44v104c0 24.301 19.699 44 44 44h55c2.761 0 5-2.239 5-5v-182c0-2.761-2.239-5-5-5z"/><path fill="#FFF" stroke="#FFF" d="m280 56h-24c-5.269 0-10.392 1.734-14.578 4.935l-103.459 79.116c-1.237.946-1.963 2.414-1.963 3.972v223.955c0 1.557.726 3.026 1.963 3.972l103.459 79.115c4.186 3.201 9.309 4.936 14.579 4.936h23.999c13.255 0 24-10.745 24-24v-352.001c0-13.255-10.745-24-24-24z"/><text x="256" y="560" text-anchor="middle" style="font-size:60px;fill:#FFF;stroke:#FFF;">Click to unmute</text></svg></div></div>\n    </div>\n\n    <ul id="context-menu"></ul>\n';const X={};function K(e,t){if(void 0!==X[e]){if(X[e].class!==t)throw new Error("Internal naming conflict on "+e);return X[e].name}let n=0;if(void 0!==window.customElements)for(;n<999;){let r=e;if(n>0&&(r=r+"-"+n),void 0===window.customElements.get(r))return window.customElements.define(r,t),X[e]={class:t,name:r,internalName:e},r;n+=1}throw new Error("Failed to assign custom element "+e)}var Q,Z,ee,te;!function(e){e.On="on",e.Off="off",e.Auto="auto"}(Q||(Q={})),function(e){e.Off="off",e.Fullscreen="fullscreen",e.On="on"}(Z||(Z={})),function(e){e.Visible="visible",e.Hidden="hidden"}(ee||(ee={})),function(e){e.Error="error",e.Warn="warn",e.Info="info",e.Debug="debug",e.Trace="trace"}(te||(te={}));var ne=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{c(r.next(e))}catch(e){o(e)}}function s(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((r=r.apply(e,t||[])).next())}))};const re="application/x-shockwave-flash",ie="application/futuresplash",oe="application/x-shockwave-flash2-preview",ae="application/vnd.adobe.flash-movie",se="https://ruffle.rs",ce=/^\s*(\d+(\.\d+)?(%)?)/;var ue,le;function _e(e){if(null==e)return{};e instanceof URLSearchParams||(e=new URLSearchParams(e));const t={};for(const[n,r]of e)t[n]=r.toString();return t}!function(e){e[e.Unknown=0]="Unknown",e[e.CSPConflict=1]="CSPConflict",e[e.FileProtocol=2]="FileProtocol",e[e.InvalidWasm=3]="InvalidWasm",e[e.JavascriptConfiguration=4]="JavascriptConfiguration",e[e.JavascriptConflict=5]="JavascriptConflict",e[e.WasmCors=6]="WasmCors",e[e.WasmDownload=7]="WasmDownload",e[e.WasmMimeType=8]="WasmMimeType",e[e.WasmNotFound=9]="WasmNotFound",e[e.SwfFetchError=10]="SwfFetchError"}(ue||(ue={}));class fe extends HTMLElement{constructor(){return super(),this.hasContextMenu=!1,this.contextMenuForceDisabled=!1,this.isTouch=!1,this.panicked=!1,this.isExtension=!1,this.config={},this.shadow=this.attachShadow({mode:"open"}),this.shadow.appendChild(Y.content.cloneNode(!0)),this.dynamicStyles=this.shadow.getElementById("dynamic_styles"),this.container=this.shadow.getElementById("container"),this.playButton=this.shadow.getElementById("play_button"),this.playButton&&this.playButton.addEventListener("click",(()=>this.play())),this.unmuteOverlay=this.shadow.getElementById("unmute_overlay"),this.contextMenuElement=this.shadow.getElementById("context-menu"),this.addEventListener("contextmenu",this.showContextMenu.bind(this)),this.addEventListener("pointerdown",this.pointerDown.bind(this)),window.addEventListener("click",this.hideContextMenu.bind(this)),this.instance=null,this.options=null,this.onFSCommand=null,this._readyState=le.HaveNothing,this._metadata=null,this.lastActivePlayingState=!1,this.setupPauseOnTabHidden(),this}get readyState(){return this._readyState}get metadata(){return this._metadata}setupPauseOnTabHidden(){document.addEventListener("visibilitychange",(()=>{this.instance&&(document.hidden&&(this.lastActivePlayingState=this.instance.is_playing(),this.instance.pause()),document.hidden||!0!==this.lastActivePlayingState||this.instance.play())}),!1)}connectedCallback(){this.updateStyles()}static get observedAttributes(){return["width","height"]}attributeChangedCallback(e,t,n){"width"!==e&&"height"!==e||this.updateStyles()}disconnectedCallback(){this.destroy()}updateStyles(){if(this.dynamicStyles.sheet){if(this.dynamicStyles.sheet.rules)for(let e=0;e<this.dynamicStyles.sheet.rules.length;e++)this.dynamicStyles.sheet.deleteRule(e);const e=this.attributes.getNamedItem("width");if(null!=e){const t=fe.htmlDimensionToCssDimension(e.value);null!==t&&this.dynamicStyles.sheet.insertRule(`:host { width: ${t}; }`)}const t=this.attributes.getNamedItem("height");if(null!=t){const e=fe.htmlDimensionToCssDimension(t.value);null!==e&&this.dynamicStyles.sheet.insertRule(`:host { height: ${e}; }`)}}}isUnusedFallbackObject(){let e=this.parentNode;const t=function(e){const t=X[e];return void 0!==t?{internalName:e,name:t.name,class:t.class}:null}("ruffle-object");if(null!==t)for(;e!=document&&null!=e;){if(e.nodeName===t.name)return!0;e=e.parentNode}return!1}ensureFreshInstance(e){var t;return ne(this,void 0,void 0,(function*(){this.destroy();const n=yield q(e).catch((e=>{if(console.error(`Serious error loading Ruffle: ${e}`),"file:"===window.location.protocol)e.ruffleIndexError=ue.FileProtocol;else{e.ruffleIndexError=ue.WasmNotFound;const t=String(e.message).toLowerCase();t.includes("mime")?e.ruffleIndexError=ue.WasmMimeType:t.includes("networkerror")||t.includes("failed to fetch")?e.ruffleIndexError=ue.WasmCors:t.includes("disallowed by embedder")?e.ruffleIndexError=ue.CSPConflict:"CompileError"===e.name?e.ruffleIndexError=ue.InvalidWasm:t.includes("could not download wasm module")&&"TypeError"===e.name?e.ruffleIndexError=ue.WasmDownload:"TypeError"===e.name&&(e.ruffleIndexError=ue.JavascriptConflict)}throw this.panic(e),e}));this.instance=new n(this.container,this,e),console.log("New Ruffle instance created."),"running"!==this.audioState()&&(this.container.style.visibility="hidden",yield new Promise((e=>{window.setTimeout((()=>{e()}),200)})),this.container.style.visibility="");const r=Object.values(Object(Q)).includes(e.autoplay)?e.autoplay:Q.Auto,i=Object.values(Object(ee)).includes(e.unmuteOverlay)?e.unmuteOverlay:ee.Visible;if(r==Q.On||r==Q.Auto&&"running"===this.audioState()){if(this.play(),"running"!==this.audioState()){i===ee.Visible&&(this.unmuteOverlay.style.display="block"),this.container.addEventListener("click",this.unmuteOverlayClicked.bind(this),{once:!0});const e=null===(t=this.instance)||void 0===t?void 0:t.audio_context();e&&(e.onstatechange=()=>{"running"===e.state&&this.unmuteOverlayClicked(),e.onstatechange=null})}}else this.playButton.style.display="block"}))}destroy(){this.instance&&(this.instance.destroy(),this.instance=null,this._metadata=null,this._readyState=le.HaveNothing,console.log("Ruffle instance destroyed."))}load(e){var t,n;return ne(this,void 0,void 0,(function*(){let r="";switch(typeof e){case"string":e={url:e};break;case"object":null===e?r="Argument 0 must be a string or object":"url"in e||"data"in e?"url"in e&&"string"!=typeof e.url&&(r="`url` must be a string"):r="Argument 0 must contain a `url` or `data` key";break;default:r="Argument 0 must be a string or object"}if(r.length>0){const e=new TypeError(r);throw e.ruffleIndexError=ue.JavascriptConfiguration,this.panic(e),e}if(this.isConnected&&!this.isUnusedFallbackObject())try{const r=Object.assign(Object.assign(Object.assign({},null!==(n=null===(t=window.RufflePlayer)||void 0===t?void 0:t.config)&&void 0!==n?n:{}),this.config),e);if(r.allowScriptAccess=e.allowScriptAccess,this.options=e,this.hasContextMenu=!1!==r.contextMenu,r.backgroundColor&&(this.container.style.backgroundColor=r.backgroundColor),yield this.ensureFreshInstance(r),"url"in e){console.log(`Loading SWF file ${e.url}`);try{this.swfUrl=new URL(e.url,document.location.href).href}catch(t){this.swfUrl=e.url}const t=Object.assign(Object.assign({},_e(e.url.substring(e.url.indexOf("?")))),_e(e.parameters));this.instance.stream_from(this.swfUrl,t)}else"data"in e&&(console.log("Loading SWF data"),this.instance.load_data(new Uint8Array(e.data),_e(e.parameters)))}catch(e){throw console.error(`Serious error occurred loading SWF file: ${e}`),e}else console.warn("Ignoring attempt to play a disconnected or suspended Ruffle element")}))}play(){this.instance&&(this.instance.play(),this.playButton&&(this.playButton.style.display="none"))}get fullscreenEnabled(){return!(!document.fullscreenEnabled&&!document.webkitFullscreenEnabled)}get isFullscreen(){return(document.fullscreenElement||document.webkitFullscreenElement)===this}enterFullscreen(){const e={navigationUI:"hide"};this.requestFullscreen?this.requestFullscreen(e):this.webkitRequestFullscreen?this.webkitRequestFullscreen(e):this.webkitRequestFullScreen&&this.webkitRequestFullScreen(e)}exitFullscreen(){document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}pointerDown(e){"touch"!==e.pointerType&&"pen"!==e.pointerType||(this.isTouch=!0)}contextMenuItems(){const e=String.fromCharCode(10003),t=[];this.instance&&this.instance.prepare_context_menu().forEach(((n,r)=>{n.separatorBefore&&t.push(null),t.push({text:n.caption+(n.checked?` (${e})`:""),onClick:()=>{var e;return null===(e=this.instance)||void 0===e?void 0:e.run_context_menu_callback(r)},enabled:n.enabled})})),t.push(null),this.fullscreenEnabled&&(this.isFullscreen?t.push({text:"Exit fullscreen",onClick:this.exitFullscreen.bind(this)}):t.push({text:"Enter fullscreen",onClick:this.enterFullscreen.bind(this)})),t.push(null);const n=this.isExtension?"extension":"";return t.push({text:`About Ruffle ${n} (nightly 2021-09-11)`,onClick(){window.open(se,"_blank")}}),this.isTouch&&(t.push(null),t.push({text:"Hide this menu",onClick:()=>this.contextMenuForceDisabled=!0})),t}showContextMenu(e){if(e.preventDefault(),!this.hasContextMenu||this.contextMenuForceDisabled)return;for(;this.contextMenuElement.firstChild;)this.contextMenuElement.removeChild(this.contextMenuElement.firstChild);for(const e of this.contextMenuItems())if(null===e){if(!this.contextMenuElement.lastElementChild)continue;if(this.contextMenuElement.lastElementChild.classList.contains("menu_separator"))continue;const e=document.createElement("li");e.className="menu_separator";const t=document.createElement("hr");e.appendChild(t),this.contextMenuElement.appendChild(e)}else{const{text:t,onClick:n,enabled:r}=e,i=document.createElement("li");i.className="menu_item",i.textContent=t,this.contextMenuElement.appendChild(i),!1!==r?i.addEventListener("click",n):i.classList.add("disabled")}this.contextMenuElement.style.left="0",this.contextMenuElement.style.top="0",this.contextMenuElement.style.display="block";const t=this.getBoundingClientRect(),n=e.clientX-t.x,r=e.clientY-t.y,i=t.width-this.contextMenuElement.clientWidth-1,o=t.height-this.contextMenuElement.clientHeight-1;this.contextMenuElement.style.left=Math.floor(Math.min(n,i))+"px",this.contextMenuElement.style.top=Math.floor(Math.min(r,o))+"px"}hideContextMenu(){var e;null===(e=this.instance)||void 0===e||e.clear_custom_menu_items(),this.contextMenuElement.style.display="none"}pause(){this.instance&&(this.instance.pause(),this.playButton&&(this.playButton.style.display="block"))}audioState(){if(this.instance){const e=this.instance.audio_context();return e&&e.state||"running"}return"suspended"}unmuteOverlayClicked(){if(this.instance){if("running"!==this.audioState()){const e=this.instance.audio_context();e&&e.resume()}this.unmuteOverlay&&(this.unmuteOverlay.style.display="none")}}copyElement(e){if(e){for(let t=0;t<e.attributes.length;t++){const n=e.attributes[t];if(n.specified){if("title"===n.name&&"Adobe Flash Player"===n.value)continue;try{this.setAttribute(n.name,n.value)}catch(e){console.warn(`Unable to set attribute ${n.name} on Ruffle instance`)}}}for(const t of Array.from(e.children))this.appendChild(t)}}static htmlDimensionToCssDimension(e){if(e){const t=e.match(ce);if(t){let e=t[1];return t[3]||(e+="px"),e}}return null}onCallbackAvailable(e){const t=this.instance;this[e]=(...n)=>null==t?void 0:t.call_exposed_callback(e,n)}set traceObserver(e){var t;null===(t=this.instance)||void 0===t||t.set_trace_observer(e)}panic(e){var t;if(this.panicked)return;if(this.panicked=!0,e instanceof Error&&("AbortError"===e.name||e.message.includes("AbortError")))return;const n=null!==(t=null==e?void 0:e.ruffleIndexError)&&void 0!==t?t:ue.Unknown,r=Object.assign([],{stackIndex:-1});if(r.push("# Error Info\n"),e instanceof Error){if(r.push(`Error name: ${e.name}\n`),r.push(`Error message: ${e.message}\n`),e.stack){const t=r.push(`Error stack:\n\`\`\`\n${e.stack}\n\`\`\`\n`)-1;r.stackIndex=t}}else r.push(`Error: ${e}\n`);r.push("\n# Player Info\n"),r.push(this.debugPlayerInfo()),r.push("\n# Page Info\n"),r.push(`Page URL: ${document.location.href}\n`),this.swfUrl&&r.push(`SWF URL: ${this.swfUrl}\n`),r.push("\n# Browser Info\n"),r.push(`Useragent: ${window.navigator.userAgent}\n`),r.push(`OS: ${window.navigator.platform}\n`),r.push("\n# Ruffle Info\n"),r.push("Version: 0.1.0\n"),r.push("Name: nightly 2021-09-11\n"),r.push("Channel: nightly\n"),r.push("Built: 2021-09-11T00:10:59.427Z\n"),r.push("Commit: 9978eaa9545dd9b3e20c61bef0d9f6e038e61cd7\n"),r.push(`Is extension: ${this.isExtension}\n`);const i=r.join(""),o=document.location.href.split(/[?#]/)[0];let a,s,c=`https://github.com/ruffle-rs/ruffle/issues/new?title=${encodeURIComponent(`Error on ${o}`)}&body=`,u=encodeURIComponent(i);switch(r.stackIndex>-1&&String(c+u).length>8195&&(r[r.stackIndex]=null,u=encodeURIComponent(r.join(""))),c+=u,n){case ue.FileProtocol:a='\n                    <p>It appears you are running Ruffle on the "file:" protocol.</p>\n                    <p>This doesn\'t work as browsers block many features from working for security reasons.</p>\n                    <p>Instead, we invite you to setup a local server or either use the web demo or the desktop application.</p>\n                ',s=`\n                    <li><a target="_top" href="${se}/demo">Web Demo</a></li>\n                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/tags">Desktop Application</a></li>\n                `;break;case ue.JavascriptConfiguration:a="\n                    <p>Ruffle has encountered a major issue due to an incorrect JavaScript configuration.</p>\n                    <p>If you are the server administrator, we invite you to check the error details to find out which parameter is at fault.</p>\n                    <p>You can also consult the Ruffle wiki for help.</p>\n                ",s='\n                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#javascript-api">View Ruffle Wiki</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ';break;case ue.WasmNotFound:a='\n                    <p>Ruffle failed to load the required ".wasm" file component.</p>\n                    <p>If you are the server administrator, please ensure the file has correctly been uploaded.</p>\n                    <p>If the issue persists, you may need to use the "publicPath" setting: please consult the Ruffle wiki for help.</p>\n                ',s='\n                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#configuration-options">View Ruffle Wiki</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ';break;case ue.WasmMimeType:a='\n                    <p>Ruffle has encountered a major issue whilst trying to initialize.</p>\n                    <p>This web server is not serving ".wasm" files with the correct MIME type.</p>\n                    <p>If you are the server administrator, please consult the Ruffle wiki for help.</p>\n                ',s='\n                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#configure-webassembly-mime-type">View Ruffle Wiki</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ';break;case ue.SwfFetchError:a="\n                    <p>Ruffle failed to load the Flash SWF file.</p>\n                    <p>The most likely reason is that the file no longer exists, so there is nothing for Ruffle to load.</p>\n                    <p>Try contacting the website administrator for help.</p>\n                ",s='\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ';break;case ue.WasmCors:a='\n                    <p>Ruffle failed to load the required ".wasm" file component.</p>\n                    <p>Access to fetch has likely been blocked by CORS policy.</p>\n                    <p>If you are the server administrator, please consult the Ruffle wiki for help.</p>\n                ',s='\n                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#web">View Ruffle Wiki</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ';break;case ue.InvalidWasm:a="\n                    <p>Ruffle has encountered a major issue whilst trying to initialize.</p>\n                    <p>It seems like this page has missing or invalid files for running Ruffle.</p>\n                    <p>If you are the server administrator, please consult the Ruffle wiki for help.</p>\n                ",s='\n                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#addressing-a-compileerror">View Ruffle Wiki</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ';break;case ue.WasmDownload:a="\n                    <p>Ruffle has encountered a major issue whilst trying to initialize.</p>\n                    <p>This can often resolve itself, so you can try reloading the page.</p>\n                    <p>Otherwise, please contact the website administrator.</p>\n                ",s='\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ';break;case ue.JavascriptConflict:a="\n                    <p>Ruffle has encountered a major issue whilst trying to initialize.</p>\n                    <p>It seems like this page uses JavaScript code that conflicts with Ruffle.</p>\n                    <p>If you are the server administrator, we invite you to try loading the file on a blank page.</p>\n                ",s=`\n                    <li><a target="_top" href="${c}">Report Bug</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                `;break;case ue.CSPConflict:a='\n                    <p>Ruffle has encountered a major issue whilst trying to initialize.</p>\n                    <p>This web server\'s Content Security Policy does not allow the required ".wasm" component to run.</p>\n                    <p>If you are the server administrator, please consult the Ruffle wiki for help.</p>\n                ',s='\n                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#configure-wasm-csp">View Ruffle Wiki</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ';break;default:a="\n                    <p>Ruffle has encountered a major issue whilst trying to display this Flash content.</p>\n                    <p>This isn't supposed to happen, so we'd really appreciate if you could file a bug!</p>\n                ",s=`\n                    <li><a target="_top" href="${c}">Report Bug</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                `}this.container.innerHTML=`\n            <div id="panic">\n                <div id="panic-title">Something went wrong :(</div>\n                <div id="panic-body">${a}</div>\n                <div id="panic-footer">\n                    <ul>${s}</ul>\n                </div>\n            </div>\n        `;const l=this.container.querySelector("#panic-view-details");l&&(l.onclick=()=>{const e=this.container.querySelector("#panic-body");return e.classList.add("details"),e.innerHTML=`<textarea>${i}</textarea>`,!1}),this.destroy()}displayRootMovieDownloadFailedMessage(){const e=new URL(this.swfUrl);if(window.location.origin==e.origin||!this.isExtension||!window.location.protocol.includes("http")){const e=new Error("Failed to fetch: "+this.swfUrl);return e.ruffleIndexError=ue.SwfFetchError,void this.panic(e)}const t=document.createElement("div");t.id="message_overlay",t.innerHTML=`<div class="message">\n            <p>Ruffle wasn't able to run the Flash embedded in this page.</p>\n            <p>You can try to open the file in a separate tab, to sidestep this issue.</p>\n            <div>\n                <a target="_blank" href="${this.swfUrl}">Open in a new tab</a>\n            </div>\n        </div>`,this.container.prepend(t)}displayUnsupportedMessage(){const e=document.createElement("div");e.id="message_overlay",e.innerHTML='<div class="message">\n            <p>Flash Player has been removed from browsers in 2021.</p>\n            <p>This content is not yet supported by the Ruffle emulator and will likely not run as intended.</p>\n            <div>\n                <a target="_blank" class="more-info-link" href="https://github.com/ruffle-rs/ruffle/wiki/Frequently-Asked-Questions-For-Users">More info</a>\n                <button id="run-anyway-btn">Run anyway</button>\n            </div>\n        </div>',this.container.prepend(e),e.querySelector("#run-anyway-btn").onclick=()=>{e.parentNode.removeChild(e)}}displayMessage(e){const t=document.createElement("div");t.id="message_overlay",t.innerHTML=`<div class="message">\n            <p>${e}</p>\n            <div>\n                <button id="continue-btn">continue</button>\n            </div>\n        </div>`,this.container.prepend(t),this.container.querySelector("#continue-btn").onclick=()=>{t.parentNode.removeChild(t)}}debugPlayerInfo(){var e,t;return`Allows script access: ${null!==(t=null===(e=this.options)||void 0===e?void 0:e.allowScriptAccess)&&void 0!==t&&t}\n`}setMetadata(e){this._metadata=e,this._readyState=le.Loaded,this.dispatchEvent(new Event(fe.LOADED_METADATA)),this.dispatchEvent(new Event(fe.LOADED_DATA))}setIsExtension(e){this.isExtension=e}}function de(e,t){switch(e||(e="sameDomain"),e.toLowerCase()){case"always":return!0;case"never":return!1;case"samedomain":default:try{return new URL(window.location.href).origin===new URL(t,window.location.href).origin}catch(e){return!1}}}function be(e){return"true"===e||null===e}function ge(e){if(e){let t="";try{t=new URL(e,se).pathname}catch(e){}if(t&&t.length>=4){const e=t.slice(-4).toLowerCase();if(".swf"===e||".spl"===e)return!0}}return!1}fe.LOADED_METADATA="loadedmetadata",fe.LOADED_DATA="loadeddata",function(e){e[e.HaveNothing=0]="HaveNothing",e[e.Loading=1]="Loading",e[e.Loaded=2]="Loaded"}(le||(le={}));class we extends fe{constructor(){super()}connectedCallback(){var e,t,n,r,i,o,a,s,c,u,l,_,f;super.connectedCallback();const d=this.attributes.getNamedItem("src");if(d){const b=null!==(t=null===(e=this.attributes.getNamedItem("allowScriptAccess"))||void 0===e?void 0:e.value)&&void 0!==t?t:null,g=null!==(r=null===(n=this.attributes.getNamedItem("menu"))||void 0===n?void 0:n.value)&&void 0!==r?r:null;this.load({url:d.value,allowScriptAccess:de(b,d.value),parameters:null===(i=this.attributes.getNamedItem("flashvars"))||void 0===i?void 0:i.value,backgroundColor:null===(o=this.attributes.getNamedItem("bgcolor"))||void 0===o?void 0:o.value,base:null===(a=this.attributes.getNamedItem("base"))||void 0===a?void 0:a.value,menu:be(g),salign:null!==(c=null===(s=this.attributes.getNamedItem("salign"))||void 0===s?void 0:s.value)&&void 0!==c?c:"",quality:null!==(l=null===(u=this.attributes.getNamedItem("quality"))||void 0===u?void 0:u.value)&&void 0!==l?l:"high",scale:null!==(f=null===(_=this.attributes.getNamedItem("scale"))||void 0===_?void 0:_.value)&&void 0!==f?f:"showAll"})}}get src(){var e;return null===(e=this.attributes.getNamedItem("src"))||void 0===e?void 0:e.value}set src(e){if(null!=e){const t=document.createAttribute("src");t.value=e,this.attributes.setNamedItem(t)}else this.attributes.removeNamedItem("src")}static get observedAttributes(){return["src","width","height"]}attributeChangedCallback(e,t,n){var r;if(super.attributeChangedCallback(e,t,n),this.isConnected&&"src"===e){let e;const t=this.attributes.getNamedItem("flashvars");t&&(e=t.value);const n=this.attributes.getNamedItem("src");n&&this.load({url:n.value,parameters:e,base:null===(r=this.attributes.getNamedItem("base"))||void 0===r?void 0:r.value})}}static isInterdictable(e){var t;if(!e.getAttribute("src"))return!1;const n=null===(t=e.getAttribute("type"))||void 0===t?void 0:t.toLowerCase();return n===re.toLowerCase()||n===ie.toLowerCase()||n===oe.toLowerCase()||n===ae.toLowerCase()||(null==n||""===n)&&ge(e.getAttribute("src"))}static fromNativeEmbedElement(e){const t=K("ruffle-embed",we),n=document.createElement(t);return n.copyElement(e),n}}function he(e,t,n){t=t.toLowerCase();for(const n in e)if(Object.hasOwnProperty.call(e,n)&&t===n.toLowerCase())return e[n];return n}function me(e){var t,n;const r={};for(const i of e.children)if(i instanceof HTMLParamElement){const e=null===(t=i.attributes.getNamedItem("name"))||void 0===t?void 0:t.value,o=null===(n=i.attributes.getNamedItem("value"))||void 0===n?void 0:n.value;e&&o&&(r[e]=o)}return r}class pe extends fe{constructor(){super(),this.params={}}connectedCallback(){var e;super.connectedCallback(),this.params=me(this);let t=null;this.attributes.getNamedItem("data")?t=null===(e=this.attributes.getNamedItem("data"))||void 0===e?void 0:e.value:this.params.movie&&(t=this.params.movie);const n=he(this.params,"allowScriptAccess",null),r=he(this.params,"flashvars",this.getAttribute("flashvars")),i=he(this.params,"bgcolor",this.getAttribute("bgcolor")),o=he(this.params,"base",this.getAttribute("base")),a=he(this.params,"menu",null),s=he(this.params,"salign",""),c=he(this.params,"quality","high"),u=he(this.params,"scale","showAll");if(t){const e={url:t};e.allowScriptAccess=de(n,t),r&&(e.parameters=r),i&&(e.backgroundColor=i),o&&(e.base=o),e.menu=be(a),s&&(e.salign=s),c&&(e.quality=c),u&&(e.scale=u),this.load(e)}}debugPlayerInfo(){var e;let t=super.debugPlayerInfo();t+="Player type: Object\n";let n=null;return this.attributes.getNamedItem("data")?n=null===(e=this.attributes.getNamedItem("data"))||void 0===e?void 0:e.value:this.params.movie&&(n=this.params.movie),t+=`SWF URL: ${n}\n`,Object.keys(this.params).forEach((e=>{t+=`Param ${e}: ${this.params[e]}\n`})),Object.keys(this.attributes).forEach((e=>{var n;t+=`Attribute ${e}: ${null===(n=this.attributes.getNamedItem(e))||void 0===n?void 0:n.value}\n`})),t}get data(){return this.getAttribute("data")}set data(e){if(null!=e){const t=document.createAttribute("data");t.value=e,this.attributes.setNamedItem(t)}else this.attributes.removeNamedItem("data")}static isInterdictable(e){var t,n,r;if(e.getElementsByTagName("ruffle-embed").length>0)return!1;const i=null===(t=e.attributes.getNamedItem("data"))||void 0===t?void 0:t.value.toLowerCase(),o=me(e);let a;if(i)a=ge(i);else{if(!o||!o.movie)return!1;a=ge(o.movie)}const s=null===(n=e.attributes.getNamedItem("classid"))||void 0===n?void 0:n.value.toLowerCase();if(s==="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000".toLowerCase())return!Array.from(e.getElementsByTagName("embed")).some(we.isInterdictable);if(null!=s&&""!==s)return!1;const c=null===(r=e.attributes.getNamedItem("type"))||void 0===r?void 0:r.value.toLowerCase();return c===re.toLowerCase()||c===ie.toLowerCase()||c===oe.toLowerCase()||c===ae.toLowerCase()||(null==c||""===c)&&a}static fromNativeObjectElement(e){const t=K("ruffle-object",pe),n=document.createElement(t);for(const t of Array.from(e.getElementsByTagName("embed")))we.isInterdictable(t)&&t.remove();for(const t of Array.from(e.getElementsByTagName("object")))pe.isInterdictable(t)&&t.remove();return n.copyElement(e),n}}var ve,ye;let xe;const ke=null!==(ye=null===(ve=window.RufflePlayer)||void 0===ve?void 0:ve.config)&&void 0!==ye?ye:{},Ee=V(ke)+"ruffle.js";let Ce,Se,Ie,Ae;function Re(){try{Ce=null!=Ce?Ce:document.getElementsByTagName("object"),Se=null!=Se?Se:document.getElementsByTagName("embed");for(const e of Array.from(Ce))if(pe.isInterdictable(e)){const t=pe.fromNativeObjectElement(e);t.setIsExtension(xe),e.replaceWith(t)}for(const e of Array.from(Se))if(we.isInterdictable(e)){const t=we.fromNativeEmbedElement(e);t.setIsExtension(xe),e.replaceWith(t)}}catch(e){console.error(`Serious error encountered when polyfilling native Flash elements: ${e}`)}}function Fe(){Ie=null!=Ie?Ie:document.getElementsByTagName("iframe"),Ae=null!=Ae?Ae:document.getElementsByTagName("frame"),[Ie,Ae].forEach((e=>{for(let t=0;t<e.length;t++){const n=e[t];if(void 0!==n.dataset.rufflePolyfilled)continue;n.dataset.rufflePolyfilled="";const r=n.contentWindow,i=`Couldn't load Ruffle into ${n.tagName}[${n.src}]: `;try{"complete"===r.document.readyState&&Pe(r,i)}catch(e){xe||console.warn(i+e)}n.addEventListener("load",(()=>{Pe(r,i)}),!1)}}))}function Pe(e,t){var n,r,i,o,a;return r=this,i=void 0,a=function*(){let r;yield new Promise((e=>{window.setTimeout((()=>{e()}),100)}));try{if(r=e.document,!r)return}catch(e){return void(xe||console.warn(t+e))}if(xe||void 0===r.documentElement.dataset.ruffleOptout)if(xe)e.RufflePlayer||(e.RufflePlayer={}),e.RufflePlayer.config=Object.assign(Object.assign({},ke),null!==(n=e.RufflePlayer.config)&&void 0!==n?n:{});else if(!e.RufflePlayer){const t=r.createElement("script");t.setAttribute("src",Ee),t.onload=()=>{e.RufflePlayer={},e.RufflePlayer.config=ke},r.head.appendChild(t)}},new((o=void 0)||(o=Promise))((function(e,t){function n(e){try{c(a.next(e))}catch(e){t(e)}}function s(e){try{c(a.throw(e))}catch(e){t(e)}}function c(t){var r;t.done?e(t.value):(r=t.value,r instanceof o?r:new o((function(e){e(r)}))).then(n,s)}c((a=a.apply(r,i||[])).next())}))}class Te{constructor(e,t,n,r,i){this.major=e,this.minor=t,this.patch=n,this.prIdent=r,this.buildIdent=i}static fromSemver(e){const t=e.split("+"),n=t[0].split("-"),r=n[0].split("."),i=parseInt(r[0],10);let o=0,a=0,s=null,c=null;return null!=r[1]&&(o=parseInt(r[1],10)),null!=r[2]&&(a=parseInt(r[2],10)),null!=n[1]&&(s=n[1].split(".")),null!=t[1]&&(c=t[1].split(".")),new Te(i,o,a,s,c)}isCompatibleWith(e){return 0!==this.major&&this.major===e.major||0===this.major&&0===e.major&&0!==this.minor&&this.minor===e.minor||0===this.major&&0===e.major&&0===this.minor&&0===e.minor&&0!==this.patch&&this.patch===e.patch}hasPrecedenceOver(e){if(this.major>e.major)return!0;if(this.major<e.major)return!1;if(this.minor>e.minor)return!0;if(this.minor<e.minor)return!1;if(this.patch>e.patch)return!0;if(this.patch<e.patch)return!1;if(null==this.prIdent&&null!=e.prIdent)return!0;if(null!=this.prIdent&&null!=e.prIdent){const t=/^[0-9]*$/;for(let n=0;n<this.prIdent.length&&n<e.prIdent.length;n+=1){if(!t.test(this.prIdent[n])&&t.test(e.prIdent[n]))return!0;if(t.test(this.prIdent[n])&&t.test(e.prIdent[n])){if(parseInt(this.prIdent[n],10)>parseInt(e.prIdent[n],10))return!0;if(parseInt(this.prIdent[n],10)<parseInt(e.prIdent[n],10))return!1}else{if(t.test(this.prIdent[n])&&!t.test(e.prIdent[n]))return!1;if(!t.test(this.prIdent[n])&&!t.test(e.prIdent[n])){if(this.prIdent[n]>e.prIdent[n])return!0;if(this.prIdent[n]<e.prIdent[n])return!1}}}return this.prIdent.length>e.prIdent.length}return!1}isEqual(e){return this.major===e.major&&this.minor===e.minor&&this.patch===e.patch}isStableOrCompatiblePrerelease(e){return null==e.prIdent||this.major===e.major&&this.minor===e.minor&&this.patch===e.patch}}class Oe{constructor(e){this.requirements=e}satisfiedBy(e){for(let t=0;t<this.requirements.length;t+=1){let n=!0;for(let r=0;r<this.requirements[t].length;r+=1){const i=this.requirements[t][r].comparator,o=this.requirements[t][r].version;n=n&&o.isStableOrCompatiblePrerelease(e),""===i||"="===i?n=n&&o.isEqual(e):">"===i?n=n&&e.hasPrecedenceOver(o):">="===i?n=n&&(e.hasPrecedenceOver(o)||o.isEqual(e)):"<"===i?n=n&&o.hasPrecedenceOver(e):"<="===i?n=n&&(o.hasPrecedenceOver(e)||o.isEqual(e)):"^"===i&&(n=n&&o.isCompatibleWith(e))}if(n)return!0}return!1}static fromRequirementString(e){const t=e.split(" ");let n=[];const r=[];for(let e=0;e<t.length;e+=1)if("||"===t[e])n.length>0&&(r.push(n),n=[]);else if(t[e].length>0){const r=/[0-9]/.exec(t[e]);if(r){const i=t[e].slice(0,r.index).trim(),o=Te.fromSemver(t[e].slice(r.index).trim());n.push({comparator:i,version:o})}}return n.length>0&&r.push(n),new Oe(r)}}class Me{constructor(e){this.sources={},this.config={},this.invoked=!1,this.newestName=null,this.conflict=null,null!=e&&(e instanceof Me?(this.sources=e.sources,this.config=e.config,this.invoked=e.invoked,this.conflict=e.conflict,this.newestName=e.newestName,e.superseded()):e.constructor===Object&&e.config instanceof Object?this.config=e.config:this.conflict=e),"loading"===document.readyState?window.addEventListener("DOMContentLoaded",this.init.bind(this)):window.setTimeout(this.init.bind(this),0)}get version(){return"0.1.0"}registerSource(e,t){this.sources[e]=t}newestSourceName(){let e=null,t=Te.fromSemver("0.0.0");for(const n in this.sources)if(Object.prototype.hasOwnProperty.call(this.sources,n)){const r=Te.fromSemver(this.sources[n].version);r.hasPrecedenceOver(t)&&(e=n,t=r)}return e}init(){if(!this.invoked){if(this.invoked=!0,this.newestName=this.newestSourceName(),null===this.newestName)throw new Error("No registered Ruffle source!");!1!==this.config.polyfills&&this.sources[this.newestName].polyfill("extension"===this.newestName)}}newest(){const e=this.newestSourceName();return null!=e?this.sources[e]:null}satisfying(e){const t=Oe.fromRequirementString(e);let n=null;for(const e in this.sources)if(Object.prototype.hasOwnProperty.call(this.sources,e)){const r=Te.fromSemver(this.sources[e].version);t.satisfiedBy(r)&&(n=this.sources[e])}return n}localCompatible(){return void 0!==this.sources.local?this.satisfying("^"+this.sources.local.version):this.newest()}local(){return void 0!==this.sources.local?this.satisfying("="+this.sources.local.version):this.newest()}superseded(){this.invoked=!0}static negotiate(e,t,n){let r;return r=e instanceof Me?e:new Me(e),void 0!==t&&void 0!==n&&(r.registerSource(t,n),!1!==r.config.polyfills&&n.pluginPolyfill()),r}}window.RufflePlayer=Me.negotiate(window.RufflePlayer,"local",new class{constructor(e){this.name=e}get version(){return"0.1.0"}polyfill(e){!function(e){xe=e,Re(),Fe(),new MutationObserver((function(e){e.some((e=>e.addedNodes.length>0))&&(Re(),Fe())})).observe(document,{childList:!0,subtree:!0})}(e)}pluginPolyfill(){!function(e){"install"in navigator.plugins&&navigator.plugins.install||Object.defineProperty(navigator,"plugins",{value:new J(navigator.plugins),writable:!1}),navigator.plugins.install(e),!(e.length>0)||"install"in navigator.mimeTypes&&navigator.mimeTypes.install||Object.defineProperty(navigator,"mimeTypes",{value:new H(navigator.mimeTypes),writable:!1});const t=navigator.mimeTypes;for(let n=0;n<e.length;n+=1)t.install(e[n])}(G)}createPlayer(){const e=K("ruffle-player",fe);return document.createElement(e)}}("local"))})()})();

;(function () {
    "use strict";

    var $window, $document, $body;

    $window = $(window);
    $document = $(document);
    $body = $("body");

    
    /*==============================================
     Pre loader init
     ===============================================*/
    $window.on("load", function () {
        $body.imagesLoaded(function () {
            $(".tb-preloader-wave").fadeOut();
            $("#tb-preloader").delay(200).fadeOut("slow").remove();
        });
    });

    /*==============================================
     Wow init
     ===============================================*/
    if (typeof WOW == "function")
        new WOW().init();


    $document.ready(function () {

        /*==============================================
         Retina support added
         ===============================================*/
        if (window.devicePixelRatio > 1) {
            $(".retina").imagesLoaded(function () {
                $(".retina").each(function () {
                    var src = $(this).attr("src").replace(".", "@2x.");
                    var h = $(this).height();
                    $(this).attr("src", src).css({height: h, width: "auto"});
                });
            });
        }


        /*==============================================
         Smooth scroll init
         ===============================================*/
        if (typeof smoothScroll == "object") {
            smoothScroll.init();
        }


        /*==============================================
         Menuzord init
         ===============================================*/
        $(".js-primary-navigation").menuzord();


        /*==============================================
         Onepage nav init
         ===============================================*/
        $(".op-nav li").on("click", function () {
            if ($(".showhide").is(":visible")) {
                $(".showhide").trigger("click");
            }
        });

        if ($.fn.onePageNav) {
            $(".op-nav").onePageNav({
                currentClass: "active"
            });
        }


        /*==============================================
         Sticky nav
         ===============================================*/
        function initSticky() {
            var $navbarSticky, navbarHeight, $brandLogo, centerLogoNormalHeight, centerLogoStickyHeight;
            $navbarSticky = $(".js-navbar-sticky").not(".l-navbar_s-left");
            navbarHeight = $navbarSticky.height();
            $brandLogo = $(".logo-brand");
            centerLogoNormalHeight = 100;
            centerLogoStickyHeight = 60;

            if ($navbarSticky.hasClass("l-navbar_s-center")) {
                $brandLogo.height(centerLogoNormalHeight);
            }

            $navbarSticky.sticky({
                className: "l-navbar-wrapper_has-sticky",
                wrapperClassName: "l-navbar-wrapper",
                zIndex: 10000,
                bottomSpacing: 100
            }).on("sticky-start", function() {
                if ($navbarSticky.hasClass("l-navbar_s-center")) {
                    $brandLogo.height(0);
                    setTimeout(function() {
                        $brandLogo.addClass("sticky-fix").height(centerLogoStickyHeight);
                    }, 300);
                }
            }).on("sticky-end", function () {
                $navbarSticky.parent().height(navbarHeight);
                if ($navbarSticky.hasClass("l-navbar_s-center")) {
                    $brandLogo.removeClass("sticky-fix").height(centerLogoNormalHeight);
                }
            });
        }
        initSticky();

        /*==============================================
         Flex slider init
         ===============================================*/
        $window.load(function () {
            $(".portfolio-slider").flexslider({
                animation: "slide",
                direction: "vertical",
                slideshowSpeed: 3000,
                start: function () {
                    imagesLoaded($(".portfolio"), function () {
                        setTimeout(function () {
                            $(".portfolio-filter li:eq(0) a").trigger("click");
                        }, 500);
                    });
                }
            });
        });

        $window.load(function () {
            $(".portfolio-slider-alt").flexslider({
                animation: "slide",
                direction: "horizontal",
                slideshowSpeed: 4000,
                start: function () {
                    imagesLoaded($(".portfolio"), function () {
                        setTimeout(function () {
                            $(".portfolio-filter li:eq(0) a").trigger("click");
                        }, 500);
                    });
                }
            });
        });

        $window.load(function () {
            $(".post-slider-thumb").flexslider({
                animation: "slide",
                controlNav: "thumbnails"
            });
        });

        $window.load(function () {
            $(".post-slider").flexslider({
                animation: "slide"
                //slideshow: false
            });
        });

        $window.load(function () {
            $(".news-slider").flexslider({
                animation: "slide",
                slideshowSpeed: 3000
            });
        });


        /*==============================================
         Full screen banner init
         ===============================================*/
        $window.bind("resizeEnd", function () {
            $("#fullscreen-banner").height($window.height());
        });

        $window.resize(function () {
            if (this.resizeTO) clearTimeout(this.resizeTO);
            this.resizeTO = setTimeout(function () {
                $(this).trigger("resizeEnd");
            }, 300);
        }).trigger("resize");


        /*==============================================
         Portfolio filterable grid init
         ===============================================*/
        /*var $portfolioGeneral = $(".portfolio:not(.portfolio-masonry)").isotope({
            itemSelector: ".portfolio-item",
            layoutMode: "fitRows",
            filter: "*"
        });

        var $portfolioMasonry = $(".portfolio-masonry").isotope({
            itemSelector: ".portfolio-item",
            resizesContainer: false,
            layoutMode: "masonry",
            filter: "*"
        });

        if (typeof imagesLoaded == "function") {
            $portfolioGeneral.imagesLoaded().progress(function () {
                $portfolioGeneral.isotope("layout");
            });

            $portfolioMasonry.imagesLoaded().progress(function () {
                $portfolioMasonry.isotope("layout");
            });

            $portfolioGeneral.imagesLoaded().done(function() {
                setTimeout(function() {
                    $portfolioGeneral.isotope("layout");
                }, 400);
            });
            
            $portfolioMasonry.imagesLoaded().done(function() {
                setTimeout(function() {
                    $portfolioMasonry.isotope("layout");
                }, 400);
            });
        }*/

        if (typeof imagesLoaded == "function") {

            $(".portfolio:not(.portfolio-masonry)").imagesLoaded().progress(function(){
                $(".portfolio:not(.portfolio-masonry)").isotope({
                    itemSelector: ".portfolio-item",
                    layoutMode: "fitRows",
                    filter: "*"
                });
            });

            $(".portfolio-masonry").imagesLoaded().progress(function(){
                $(".portfolio-masonry").isotope({
                    itemSelector: ".portfolio-item",
                    resizesContainer: false,
                    layoutMode: "masonry",
                    filter: "*"
                });
            });
        }


        /*==============================================
         Portfolio filter nav
         ===============================================*/
        $(".portfolio-filter").on("click", "a", function (event) {
            event.preventDefault();
            var $this = $(this);
            $this.parent().addClass("active").siblings().removeClass("active");
            $this.parents(".text-center").next().isotope({filter: $this.data("filter")});
        });


        /*==============================================
         Portfolio item slider init
         ===============================================*/
        $(".portfolio-slider, .portfolio-slider-alt").each(function () { // the containers for all your galleries
            var _items = $(this).find("li > a");
            var items = [];
            for (var i = 0; i < _items.length; i++) {
                items.push({src: $(_items[i]).attr("href"), title: $(_items[i]).attr("title")});
            }
            $(this).parent().find(".action-btn").magnificPopup({
                items: items,
                type: "image",
                gallery: {
                    enabled: true
                }
            });
            $(this).parent().find(".portfolio-description").magnificPopup({
                items: items,
                type: "image",
                gallery: {
                    enabled: true
                }
            });
        });


        /*==============================================
         Portfolio popup gallery init
         ===============================================*/
        $(".portfolio-gallery").each(function () { // the containers for all your galleries
            $(this).find(".popup-gallery").magnificPopup({
                type: "image",
                gallery: {
                    enabled: true
                }
            });
            $(this).find(".popup-gallery2").magnificPopup({
                type: "image",
                gallery: {
                    enabled: true
                }
            });
        });


        /*==============================================
         Progressbar init
         ===============================================*/
        var progressBar = $(".progress-bar");
        progressBar.each(function (indx) {
            $(this).data("animated", 0);
            if ($.fn.visible) {
                animateProgressbar(this);
            }
        });
        $window.on("scroll", function () {
            if ($.fn.visible) {
                progressBar.each(function () {
                    animateProgressbar(this);
                })
            }
        });

        function animateProgressbar(pb) {
            if ($(pb).data("animated") == 0) {
                if ($(pb).visible()) {
                    $(pb).css("width", $(pb).attr("aria-valuenow") + "%");
                    $(pb).data("animated", 1);
                }
            }
        }


        /*==============================================
         Magnific popup init
         ===============================================*/
        $(".popup-link").magnificPopup({
            type: "image"
            // other options
        });

        $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
            disableOn: 700,
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });


        /*==============================================
         Accordion init
         ===============================================*/
        var allPanels = $(".accordion > dd").hide();
        allPanels.first().slideDown("easeOutExpo");
        $(".accordion").each(function () {
            $(this).find("dt > a").first().addClass("active").parent().next().css({display: "block"});
        });

        $(".accordion > dt > a").click(function () {

            var current = $(this).parent().next("dd");
            $(this).parents(".accordion").find("dt > a").removeClass("active");
            $(this).addClass("active");
            $(this).parents(".accordion").find("dd").slideUp("easeInExpo");
            $(this).parent().next().slideDown("easeOutExpo");

            return false;

        });


        /*==============================================
         Toggle init
         ===============================================*/
        var allToggles = $(".toggle > dd").hide();
        $(".toggle > dt > a").click(function () {

            if ($(this).hasClass("active")) {

                $(this).parent().next().slideUp("easeOutExpo");
                $(this).removeClass("active");

            }
            else {
                var current = $(this).parent().next("dd");
                $(this).addClass("active");
                $(this).parent().next().slideDown("easeOutExpo");
            }

            return false;
        });


        /*==============================================
         Career show/hide button
         ===============================================*/
        $(".show-detail").click(function (e) {
            $(this).next().slideToggle();
            e.preventDefault();
            $(this).css({opacity: 0})
        });

        $(".cancel-btn").click(function (e) {
            var prnt = $(this).parents(".career-details-info");
            prnt.slideToggle();
            e.preventDefault();
            $(prnt).prev().css({opacity: 1})
        });

        $(".career-details-info .apply-btn").on("click", function () {

        });


        /*==============================================
         Count to init
         ===============================================*/
        var timers = $(".timer");
        if ($.fn.countTo) {
            timers.each(function () {
                $(this).data("animated", 0);
                animateTimer(this);
            });
        }

        $window.on("scroll", function () {
            timers.each(function () {
                animateTimer(this);
            });
        });

        function animateTimer(timer) {
            if ($(timer).data("animated") == 0) {
                if ($.fn.visible && $(timer).visible()) {
                    $(timer).data("animated", 1);
                    $(timer).countTo();
                }
            }
        }


        /*==============================================
         Carousel init
         ===============================================*/
        if ($.fn.owlCarousel) {
            $("#clients-1").owlCarousel({
                autoPlay: 3000, //Set AutoPlay to 3 seconds
                items: 6,
                itemsDesktop: [1199, 3],
                itemsDesktopSmall: [979, 3]

            });

            $("#testimonial-2").owlCarousel({
                autoPlay: 3000, //Set AutoPlay to 3 seconds
                items: 1
            });

            $("#testimonial-3").owlCarousel({
                autoPlay: 4000, //Set AutoPlay to 3 seconds
                items: 1
            });

            $("#testimonial-4").owlCarousel({
                autoPlay: 3000, //Set AutoPlay to 3 seconds
                items: 1
            });

            $("#testimonial-5").owlCarousel({
                autoPlay: 3000, //Set AutoPlay to 3 seconds
                items: 1
            });

            $("#carousel-object").owlCarousel({
                autoPlay: 4000, //Set AutoPlay to 3 seconds
                items: 1
                //pagination : false
            });

            $("#owl-slider").owlCarousel({
                autoPlay: 4000, //Set AutoPlay to 3 seconds
                items: 1,
                navigation: true,
                //pagination : false,
                navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
            });

            $("#img-carousel").owlCarousel({
                autoPlay: 3000, //Set AutoPlay to 3 seconds
                items: 4,
                itemsDesktop: [1199, 3],
                itemsDesktopSmall: [979, 3]

            });

            $("#portfolio-carousel").owlCarousel({
                autoPlay: 3000, //Set AutoPlay to 3 seconds
                items: 3,
                itemsDesktop: [1199, 3],
                itemsDesktopSmall: [979, 3],
                navigation: true,
                pagination: false,
                navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]

            });

            $("#portfolio-carousel-alt").owlCarousel({
                autoPlay: false, //Set AutoPlay to 3 seconds
                items: 3,
                itemsDesktop: [1199, 3],
                itemsDesktopSmall: [979, 3],
                navigation: true,
                pagination: false,
                navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
            });
        }

        $(".portfolio-with-title").addClass("portfolio");


        /*==============================================
         Typist init
         ===============================================*/
        if (typeof Typist == "function") {
            new Typist(document.querySelector(".typist-element"), {
                letterInterval: 60,
                textInterval: 3000
            });
        }


        /*==============================================
         Back to top init
         ===============================================*/
        $body.append("<a data-scroll class='lift-off js-lift-off lift-off_hide' href='#'><i class='fa fa-angle-up'></i></a>");

        var $liftOff = $(".js-lift-off");
        $window.on("scroll", function () {
            if ($window.scrollTop() > 150) {
                $liftOff.addClass("lift-off_show").removeClass("lift-off_hide");
            } else {
                $liftOff.addClass("lift-off_hide").removeClass("lift-off_show");
            }
        });


        /*==============================================
         Mailchip init
         ===============================================*/
        if ($.fn.ajaxChimp) {
            $(".mailchimp").ajaxChimp({
                /**
                 * Example mailchimp url
                 * //blahblah.us1.list-manage.com/subscribe/post?u=5afsdhfuhdsiufdba6f8802&id=4djhfdsh9"
                 */
                url: "paste mailchimp url"
            });
        }

        /*==============================================
         Contact form
         ===============================================*/
        initMailer();

    });

    function initMailer() {
        if (!$.fn.validator) {
            return;
        }

        $(".js-Mailer").validator().on("submit", function(e) {
            var $form     = $(this),
                $btn      = $form.find("[type='submit']"),
                $response = $("<div />", {
                    "class": "alert js-Response",
                    "style": "margin-top: 20px; display:none"
                    });

            if (!$form.data("isready")) {
                $btn.after($response);
                $form.data("isready", true);
            }

            if (e.isDefaultPrevented()) {
                return;
            }
            e.preventDefault();

            $.post(
                "mailer/mailer.php",
                $form.serialize()
            ).done(function(r) {
                var $rHolder = $form.find(".js-Response");
                if (r.success) {
                    showMailerResponse($rHolder, "Your message has been sent.");
                } else {
                    showMailerResponse($rHolder, "There is something wrong, try again!", "warning");
                }
            }).fail(function() {
                showMailerResponse($form.find(".js-Response"), "There is something wrong, try again!", "warning");
            })
        });
    }

    function showMailerResponse($holder, rMessage, rType) {
        var rClass = "alert-warning",
            aClass = "alert-success",
            SPEED  = 1000;

        rType = rType || "success";

        if (rType === "warning") {
            rClass = "alert-success",
            aClass = "alert-warning";
        }

        $holder
            .removeClass(rClass)
            .addClass(aClass)
            .text(rMessage)
            .slideDown()
            .delay(SPEED)
            .slideUp();
    }

})(jQuery);
