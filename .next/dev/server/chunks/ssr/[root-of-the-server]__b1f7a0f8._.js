module.exports = [
"[externals]/@emotion/react/jsx-dev-runtime [external] (@emotion/react/jsx-dev-runtime, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("@emotion/react/jsx-dev-runtime");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/@emotion/react [external] (@emotion/react, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("@emotion/react");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/react/jsx-runtime [external] (react/jsx-runtime, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react/jsx-runtime", () => require("react/jsx-runtime"));

module.exports = mod;
}),
"[externals]/react [external] (react, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react", () => require("react"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/@emotion/cache [external] (@emotion/cache, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("@emotion/cache");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/src/lib/create-emotion-cache.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "createAppCache",
    ()=>createAppCache
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$cache__$5b$external$5d$__$2840$emotion$2f$cache$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@emotion/cache [external] (@emotion/cache, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$cache__$5b$external$5d$__$2840$emotion$2f$cache$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$cache__$5b$external$5d$__$2840$emotion$2f$cache$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
const createAppCache = ()=>(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$cache__$5b$external$5d$__$2840$emotion$2f$cache$2c$__esm_import$29$__["default"])({
        key: 'css',
        prepend: true
    });
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/@emotion/styled [external] (@emotion/styled, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("@emotion/styled");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/src/lib/getAssertPath.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAssetPath",
    ()=>getAssetPath
]);
const getAssetPath = (path)=>{
    const prefix = ("TURBOPACK compile-time value", "") || '';
    return `${prefix}${path}`;
};
}),
"[project]/src/styles/common.styles.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "Container",
    ()=>Container,
    "ContainerInner",
    ()=>ContainerInner,
    "GlobalFontStyles",
    ()=>GlobalFontStyles,
    "HeaderInnerItem",
    ()=>HeaderInnerItem,
    "HeaderWrap",
    ()=>HeaderWrap,
    "Nav",
    ()=>Nav,
    "TitleLogo",
    ()=>TitleLogo
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$styled__$5b$external$5d$__$2840$emotion$2f$styled$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@emotion/styled [external] (@emotion/styled, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$react__$5b$external$5d$__$2840$emotion$2f$react$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@emotion/react [external] (@emotion/react, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$getAssertPath$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/getAssertPath.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$styled__$5b$external$5d$__$2840$emotion$2f$styled$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$react__$5b$external$5d$__$2840$emotion$2f$react$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$styled__$5b$external$5d$__$2840$emotion$2f$styled$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$react__$5b$external$5d$__$2840$emotion$2f$react$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const GlobalFontStyles = (0, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$react__$5b$external$5d$__$2840$emotion$2f$react$2c$__esm_import$29$__["css"])("@font-face{font-family:'BookkMyungjo';font-display:fallback;src:url('", (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$getAssertPath$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getAssetPath"])('/fonts/BookkMyungjo_Light.woff'), "') format('truetype');font-style:normal;}");
const HeaderWrap = (0, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$styled__$5b$external$5d$__$2840$emotion$2f$styled$2c$__esm_import$29$__["default"])("header", {
    target: "ewaz7rl0"
})("position:fixed;top:0;left:0;right:0;height:90px;min-width:600px;z-index:1000;padding:0 60px;background:", (props)=>props.isScrolled ? 'rgba(10, 38, 71, 0.95)' : 'transparent', ";box-shadow:", (props)=>props.isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.2)' : 'none', ";color:'white';transition:all 0.3s ease;");
const HeaderInnerItem = (0, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$styled__$5b$external$5d$__$2840$emotion$2f$styled$2c$__esm_import$29$__["default"])("div", {
    target: "ewaz7rl1"
})("margin-top:26px;display:flex;align-items:center;justify-content:space-between;");
const TitleLogo = (0, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$styled__$5b$external$5d$__$2840$emotion$2f$styled$2c$__esm_import$29$__["default"])("div", {
    target: "ewaz7rl2"
})("display:flex;align-items:center;img{display:block;height:50px;}");
const Nav = (0, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$styled__$5b$external$5d$__$2840$emotion$2f$styled$2c$__esm_import$29$__["default"])("nav", {
    target: "ewaz7rl3"
})("display:flex;gap:80px;align-items:center;height:100%;margin:4px 20px 0 0;color:", (props)=>props.isScrolled ? 'black' : 'white', ";a{position:relative;padding:0 5px;font-weight:bold;font-size:22px;&:hover{color:", (props)=>props.isScrolled ? 'rgb(10, 38, 71)' : 'white', ";}&::after{content:'';position:absolute;bottom:0;left:0;width:0;height:2px;transition:width 0.4s cubic-bezier(0.16,1,0.3,1);background:", (props)=>props.isScrolled ? 'rgb(10, 38, 71)' : 'white', ";}&:hover::after{width:100%;}}");
const Container = (0, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$styled__$5b$external$5d$__$2840$emotion$2f$styled$2c$__esm_import$29$__["default"])("div", {
    target: "ewaz7rl4"
})("min-height:500px;display:flex;flex-direction:column;background:#ffffff;");
const ContainerInner = (0, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$styled__$5b$external$5d$__$2840$emotion$2f$styled$2c$__esm_import$29$__["default"])("div", {
    target: "ewaz7rl5"
})("margin:0 auto;");
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/styles/floating.styles.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "FloatingContainer",
    ()=>FloatingContainer,
    "FloatingIcon",
    ()=>FloatingIcon,
    "FloatingIconBase",
    ()=>FloatingIconBase,
    "ScrollTopIcon",
    ()=>ScrollTopIcon
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$styled__$5b$external$5d$__$2840$emotion$2f$styled$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@emotion/styled [external] (@emotion/styled, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$styled__$5b$external$5d$__$2840$emotion$2f$styled$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$styled__$5b$external$5d$__$2840$emotion$2f$styled$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
const FloatingContainer = (0, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$styled__$5b$external$5d$__$2840$emotion$2f$styled$2c$__esm_import$29$__["default"])("div", {
    target: "e17p03bs0"
})("position:fixed;right:30px;bottom:30px;display:flex;flex-direction:column;gap:15px;z-index:999;pointer-events:none;@media (max-width:768px){right:20px;bottom:20px;gap:12px;}");
const FloatingIconBase = (0, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$styled__$5b$external$5d$__$2840$emotion$2f$styled$2c$__esm_import$29$__["default"])("button", {
    target: "e17p03bs1"
})("width:60px;height:60px;border-radius:50%;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px rgba(0,0,0,0.15);transition:all 0.3s ease;pointer-events:auto;&:hover{transform:scale(1.1);box-shadow:0 6px 16px rgba(0,0,0,0.2);}&:active{transform:scale(0.95);}@media (max-width:768px){width:50px;height:50px;}");
const FloatingIcon = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$styled__$5b$external$5d$__$2840$emotion$2f$styled$2c$__esm_import$29$__["default"])(FloatingIconBase, {
    target: "e17p03bs2"
})("background:#ffeb00;animation:slideUp 0.4s ease-out;img{width:60%;height:60%;object-fit:contain;}");
const ScrollTopIcon = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$styled__$5b$external$5d$__$2840$emotion$2f$styled$2c$__esm_import$29$__["default"])(FloatingIconBase, {
    target: "e17p03bs3"
})("background:linear-gradient(135deg,#0080ff,#0055ff);color:white;animation:slideUp 0.4s ease-out;svg{width:60%;height:60%;stroke-linecap:round;stroke-linejoin:round;}&:hover{background:linear-gradient(135deg,#0055ff,#0040cc);}@keyframes slideUp{from{opacity:0;transform:translateY(20px);}to{opacity:1;transform:translateY(0);}}");
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/floating.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "FloatingButton",
    ()=>FloatingButton
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$2840$emotion$2f$react$2f$jsx$2d$dev$2d$runtime$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@emotion/react/jsx-dev-runtime [external] (@emotion/react/jsx-dev-runtime, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$floating$2e$styles$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/styles/floating.styles.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$getAssertPath$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/getAssertPath.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$2840$emotion$2f$react$2f$jsx$2d$dev$2d$runtime$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$floating$2e$styles$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$2840$emotion$2f$react$2f$jsx$2d$dev$2d$runtime$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$floating$2e$styles$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const FloatingButton = ()=>{
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [isKakaoVisible, setIsKakaoVisible] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            const scrollTop = window.scrollY;
            if (scrollTop > 300) {
                setIsVisible(true);
                setIsKakaoVisible(true);
            } else {
                setIsVisible(false);
                setIsKakaoVisible(false);
            }
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return ()=>window.removeEventListener('scroll', handleScroll);
    }, []);
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    // 카카오톡 이동
    const openKakao = ()=>{
        window.open('https://pf.kakao.com/');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$2840$emotion$2f$react$2f$jsx$2d$dev$2d$runtime$2c$__esm_import$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$floating$2e$styles$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["FloatingContainer"], {
        children: [
            isKakaoVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$2840$emotion$2f$react$2f$jsx$2d$dev$2d$runtime$2c$__esm_import$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$floating$2e$styles$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["FloatingIcon"], {
                onClick: openKakao,
                title: "카카오톡 문의",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$2840$emotion$2f$react$2f$jsx$2d$dev$2d$runtime$2c$__esm_import$29$__["jsxDEV"])("img", {
                    src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$getAssertPath$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getAssetPath"])('/img/icons/kakao.png'),
                    alt: "kakao"
                }, void 0, false, {
                    fileName: "[project]/src/components/floating.tsx",
                    lineNumber: 46,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/floating.tsx",
                lineNumber: 45,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            isVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$2840$emotion$2f$react$2f$jsx$2d$dev$2d$runtime$2c$__esm_import$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$floating$2e$styles$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ScrollTopIcon"], {
                onClick: scrollToTop,
                title: "상단으로 이동",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$2840$emotion$2f$react$2f$jsx$2d$dev$2d$runtime$2c$__esm_import$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$2840$emotion$2f$react$2f$jsx$2d$dev$2d$runtime$2c$__esm_import$29$__["jsxDEV"])("polyline", {
                        points: "18 15 12 9 6 15"
                    }, void 0, false, {
                        fileName: "[project]/src/components/floating.tsx",
                        lineNumber: 54,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/floating.tsx",
                    lineNumber: 53,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/floating.tsx",
                lineNumber: 52,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/floating.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/pages/_app.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>MyApp
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$2840$emotion$2f$react$2f$jsx$2d$dev$2d$runtime$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@emotion/react/jsx-dev-runtime [external] (@emotion/react/jsx-dev-runtime, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$react__$5b$external$5d$__$2840$emotion$2f$react$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@emotion/react [external] (@emotion/react, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$create$2d$emotion$2d$cache$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/create-emotion-cache.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$common$2e$styles$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/styles/common.styles.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$floating$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/floating.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$getAssertPath$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/getAssertPath.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$2840$emotion$2f$react$2f$jsx$2d$dev$2d$runtime$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$react__$5b$external$5d$__$2840$emotion$2f$react$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$create$2d$emotion$2d$cache$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$common$2e$styles$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$floating$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$2840$emotion$2f$react$2f$jsx$2d$dev$2d$runtime$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$react__$5b$external$5d$__$2840$emotion$2f$react$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$create$2d$emotion$2d$cache$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$common$2e$styles$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$floating$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
const clientSideEmotionCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$create$2d$emotion$2d$cache$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["createAppCache"])();
function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }) {
    const getLayout = Component.getLayout ?? ((page)=>page);
    const assetPrefix = ("TURBOPACK compile-time value", "") || '';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$2840$emotion$2f$react$2f$jsx$2d$dev$2d$runtime$2c$__esm_import$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$react__$5b$external$5d$__$2840$emotion$2f$react$2c$__esm_import$29$__["CacheProvider"], {
        value: emotionCache,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$2840$emotion$2f$react$2f$jsx$2d$dev$2d$runtime$2c$__esm_import$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$2840$emotion$2f$react$2f$jsx$2d$dev$2d$runtime$2c$__esm_import$29$__["jsxDEV"])("link", {
                        rel: "preload",
                        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$getAssertPath$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getAssetPath"])('/fonts/BookkMyungjo_Light.woff'),
                        as: "font",
                        type: "font/woff",
                        crossOrigin: "anonymous"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/_app.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$2840$emotion$2f$react$2f$jsx$2d$dev$2d$runtime$2c$__esm_import$29$__["jsxDEV"])("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/_app.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$2840$emotion$2f$react$2f$jsx$2d$dev$2d$runtime$2c$__esm_import$29$__["jsxDEV"])("meta", {
                        charSet: "UTF-8"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/_app.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$2840$emotion$2f$react$2f$jsx$2d$dev$2d$runtime$2c$__esm_import$29$__["jsxDEV"])("style", {
                        children: `
          :root {
            --asset-prefix: '${assetPrefix}';
          }
        `
                    }, void 0, false, {
                        fileName: "[project]/src/pages/_app.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$2840$emotion$2f$react$2f$jsx$2d$dev$2d$runtime$2c$__esm_import$29$__["jsxDEV"])("title", {
                        children: "Sea Sense"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/_app.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/_app.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$2840$emotion$2f$react$2f$jsx$2d$dev$2d$runtime$2c$__esm_import$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$react__$5b$external$5d$__$2840$emotion$2f$react$2c$__esm_import$29$__["Global"], {
                styles: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$common$2e$styles$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["GlobalFontStyles"]
                ]
            }, void 0, false, {
                fileName: "[project]/src/pages/_app.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            getLayout(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$2840$emotion$2f$react$2f$jsx$2d$dev$2d$runtime$2c$__esm_import$29$__["jsxDEV"])(Component, {
                ...pageProps
            }, void 0, false, {
                fileName: "[project]/src/pages/_app.tsx",
                lineNumber: 54,
                columnNumber: 18
            }, this), pageProps),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$2840$emotion$2f$react$2f$jsx$2d$dev$2d$runtime$2c$__esm_import$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$floating$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["FloatingButton"], {}, void 0, false, {
                fileName: "[project]/src/pages/_app.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/pages/_app.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports._ = _interop_require_default;
}),
"[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
exports._ = _interop_require_wildcard;
}),
"[project]/node_modules/next/dist/shared/lib/side-effect.js [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SideEffect;
    }
});
const _react = __turbopack_context__.r("[externals]/react [external] (react, cjs)");
const isServer = ("TURBOPACK compile-time value", "undefined") === 'undefined';
const useClientOnlyLayoutEffect = ("TURBOPACK compile-time truthy", 1) ? ()=>{} : "TURBOPACK unreachable";
const useClientOnlyEffect = ("TURBOPACK compile-time truthy", 1) ? ()=>{} : "TURBOPACK unreachable";
function SideEffect(props) {
    const { headManager, reduceComponentsToState } = props;
    function emitChange() {
        if (headManager && headManager.mountedInstances) {
            const headElements = _react.Children.toArray(Array.from(headManager.mountedInstances).filter(Boolean));
            headManager.updateHead(reduceComponentsToState(headElements));
        }
    }
    if ("TURBOPACK compile-time truthy", 1) {
        headManager?.mountedInstances?.add(props.children);
        emitChange();
    }
    useClientOnlyLayoutEffect(()=>{
        headManager?.mountedInstances?.add(props.children);
        return ()=>{
            headManager?.mountedInstances?.delete(props.children);
        };
    });
    // We need to call `updateHead` method whenever the `SideEffect` is trigger in all
    // life-cycles: mount, update, unmount. However, if there are multiple `SideEffect`s
    // being rendered, we only trigger the method from the last one.
    // This is ensured by keeping the last unflushed `updateHead` in the `_pendingUpdate`
    // singleton in the layout effect pass, and actually trigger it in the effect pass.
    useClientOnlyLayoutEffect(()=>{
        if (headManager) {
            headManager._pendingUpdate = emitChange;
        }
        return ()=>{
            if (headManager) {
                headManager._pendingUpdate = emitChange;
            }
        };
    });
    useClientOnlyEffect(()=>{
        if (headManager && headManager._pendingUpdate) {
            headManager._pendingUpdate();
            headManager._pendingUpdate = null;
        }
        return ()=>{
            if (headManager && headManager._pendingUpdate) {
                headManager._pendingUpdate();
                headManager._pendingUpdate = null;
            }
        };
    });
    return null;
} //# sourceMappingURL=side-effect.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/pages/module.compiled.js [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time truthy", 1) {
        if ("TURBOPACK compile-time truthy", 1) {
            module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/pages-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-turbo.runtime.dev.js, cjs)");
        } else //TURBOPACK unreachable
        ;
    } else //TURBOPACK unreachable
    ;
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/pages/vendored/contexts/head-manager-context.js [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/pages/module.compiled.js [ssr] (ecmascript)").vendored['contexts'].HeadManagerContext; //# sourceMappingURL=head-manager-context.js.map
}),
"[project]/node_modules/next/dist/shared/lib/utils/warn-once.js [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "warnOnce", {
    enumerable: true,
    get: function() {
        return warnOnce;
    }
});
let warnOnce = (_)=>{};
if ("TURBOPACK compile-time truthy", 1) {
    const warnings = new Set();
    warnOnce = (msg)=>{
        if (!warnings.has(msg)) {
            console.warn(msg);
        }
        warnings.add(msg);
    };
} //# sourceMappingURL=warn-once.js.map
}),
"[project]/node_modules/next/dist/shared/lib/head.js [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    defaultHead: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    defaultHead: function() {
        return defaultHead;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [ssr] (ecmascript)");
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [ssr] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[externals]/react/jsx-runtime [external] (react/jsx-runtime, cjs)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[externals]/react [external] (react, cjs)"));
const _sideeffect = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/side-effect.js [ssr] (ecmascript)"));
const _headmanagercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/pages/vendored/contexts/head-manager-context.js [ssr] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/warn-once.js [ssr] (ecmascript)");
function defaultHead() {
    const head = [
        /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
            charSet: "utf-8"
        }, "charset"),
        /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
            name: "viewport",
            content: "width=device-width"
        }, "viewport")
    ];
    return head;
}
function onlyReactElement(list, child) {
    // React children can be "string" or "number" in this case we ignore them for backwards compat
    if (typeof child === 'string' || typeof child === 'number') {
        return list;
    }
    // Adds support for React.Fragment
    if (child.type === _react.default.Fragment) {
        return list.concat(_react.default.Children.toArray(child.props.children).reduce((fragmentList, fragmentChild)=>{
            if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
                return fragmentList;
            }
            return fragmentList.concat(fragmentChild);
        }, []));
    }
    return list.concat(child);
}
const METATYPES = [
    'name',
    'httpEquiv',
    'charSet',
    'itemProp'
];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/ function unique() {
    const keys = new Set();
    const tags = new Set();
    const metaTypes = new Set();
    const metaCategories = {};
    return (h)=>{
        let isUnique = true;
        let hasKey = false;
        if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
            hasKey = true;
            const key = h.key.slice(h.key.indexOf('$') + 1);
            if (keys.has(key)) {
                isUnique = false;
            } else {
                keys.add(key);
            }
        }
        // eslint-disable-next-line default-case
        switch(h.type){
            case 'title':
            case 'base':
                if (tags.has(h.type)) {
                    isUnique = false;
                } else {
                    tags.add(h.type);
                }
                break;
            case 'meta':
                for(let i = 0, len = METATYPES.length; i < len; i++){
                    const metatype = METATYPES[i];
                    if (!h.props.hasOwnProperty(metatype)) continue;
                    if (metatype === 'charSet') {
                        if (metaTypes.has(metatype)) {
                            isUnique = false;
                        } else {
                            metaTypes.add(metatype);
                        }
                    } else {
                        const category = h.props[metatype];
                        const categories = metaCategories[metatype] || new Set();
                        if ((metatype !== 'name' || !hasKey) && categories.has(category)) {
                            isUnique = false;
                        } else {
                            categories.add(category);
                            metaCategories[metatype] = categories;
                        }
                    }
                }
                break;
        }
        return isUnique;
    };
}
/**
 *
 * @param headChildrenElements List of children of <Head>
 */ function reduceComponents(headChildrenElements) {
    return headChildrenElements.reduce(onlyReactElement, []).reverse().concat(defaultHead().reverse()).filter(unique()).reverse().map((c, i)=>{
        const key = c.key || i;
        if ("TURBOPACK compile-time truthy", 1) {
            // omit JSON-LD structured data snippets from the warning
            if (c.type === 'script' && c.props['type'] !== 'application/ld+json') {
                const srcMessage = c.props['src'] ? `<script> tag with src="${c.props['src']}"` : `inline <script>`;
                (0, _warnonce.warnOnce)(`Do not add <script> tags using next/head (see ${srcMessage}). Use next/script instead. \nSee more info here: https://nextjs.org/docs/messages/no-script-tags-in-head-component`);
            } else if (c.type === 'link' && c.props['rel'] === 'stylesheet') {
                (0, _warnonce.warnOnce)(`Do not add stylesheets using next/head (see <link rel="stylesheet"> tag with href="${c.props['href']}"). Use Document instead. \nSee more info here: https://nextjs.org/docs/messages/no-stylesheets-in-head-component`);
            }
        }
        return /*#__PURE__*/ _react.default.cloneElement(c, {
            key
        });
    });
}
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */ function Head({ children }) {
    const headManager = (0, _react.useContext)(_headmanagercontextsharedruntime.HeadManagerContext);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_sideeffect.default, {
        reduceComponentsToState: reduceComponents,
        headManager: headManager,
        children: children
    });
}
const _default = Head;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=head.js.map
}),
"[project]/node_modules/next/head.js [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/head.js [ssr] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b1f7a0f8._.js.map