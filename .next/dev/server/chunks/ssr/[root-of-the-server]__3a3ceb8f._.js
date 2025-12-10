module.exports = [
"[externals]/@emotion/react/jsx-dev-runtime [external] (@emotion/react/jsx-dev-runtime, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("@emotion/react/jsx-dev-runtime");

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
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/@emotion/server/create-instance [external] (@emotion/server/create-instance, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("@emotion/server/create-instance");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
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
"[project]/src/pages/_document.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>AppDocument
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$2840$emotion$2f$react$2f$jsx$2d$dev$2d$runtime$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@emotion/react/jsx-dev-runtime [external] (@emotion/react/jsx-dev-runtime, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$document$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/document.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$server$2f$create$2d$instance__$5b$external$5d$__$2840$emotion$2f$server$2f$create$2d$instance$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@emotion/server/create-instance [external] (@emotion/server/create-instance, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$create$2d$emotion$2d$cache$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/create-emotion-cache.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$2840$emotion$2f$react$2f$jsx$2d$dev$2d$runtime$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$server$2f$create$2d$instance__$5b$external$5d$__$2840$emotion$2f$server$2f$create$2d$instance$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$create$2d$emotion$2d$cache$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$2840$emotion$2f$react$2f$jsx$2d$dev$2d$runtime$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$server$2f$create$2d$instance__$5b$external$5d$__$2840$emotion$2f$server$2f$create$2d$instance$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$create$2d$emotion$2d$cache$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
class AppDocument extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$document$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"] {
    render() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$2840$emotion$2f$react$2f$jsx$2d$dev$2d$runtime$2c$__esm_import$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$document$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Html"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$2840$emotion$2f$react$2f$jsx$2d$dev$2d$runtime$2c$__esm_import$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$document$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Head"], {}, void 0, false, {
                    fileName: "[project]/src/pages/_document.tsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$2840$emotion$2f$react$2f$jsx$2d$dev$2d$runtime$2c$__esm_import$29$__["jsxDEV"])("body", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$2840$emotion$2f$react$2f$jsx$2d$dev$2d$runtime$2c$__esm_import$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$document$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Main"], {}, void 0, false, {
                            fileName: "[project]/src/pages/_document.tsx",
                            lineNumber: 11,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$2840$emotion$2f$react$2f$jsx$2d$dev$2d$runtime$2c$__esm_import$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$document$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["NextScript"], {}, void 0, false, {
                            fileName: "[project]/src/pages/_document.tsx",
                            lineNumber: 12,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/pages/_document.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/pages/_document.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this);
    }
}
AppDocument.getInitialProps = async (ctx)=>{
    const originalRenderPage = ctx.renderPage;
    const cache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$create$2d$emotion$2d$cache$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["createAppCache"])();
    const { extractCriticalToChunks } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$server$2f$create$2d$instance__$5b$external$5d$__$2840$emotion$2f$server$2f$create$2d$instance$2c$__esm_import$29$__["default"])(cache);
    ctx.renderPage = ()=>originalRenderPage({
            enhanceApp: (App)=>function EnhanceApp(props) {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$2840$emotion$2f$react$2f$jsx$2d$dev$2d$runtime$2c$__esm_import$29$__["jsxDEV"])(App, {
                        emotionCache: cache,
                        ...props
                    }, void 0, false, {
                        fileName: "[project]/src/pages/_document.tsx",
                        lineNumber: 29,
                        columnNumber: 18
                    }, this);
                },
            enhanceComponent: (Component)=>Component
        });
    const initialProps = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$document$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].getInitialProps(ctx);
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$emotion$2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$2840$emotion$2f$react$2f$jsx$2d$dev$2d$runtime$2c$__esm_import$29$__["jsxDEV"])("style", {
            "data-emotion": `${style.key} ${style.ids.join(' ')}`,
            dangerouslySetInnerHTML: {
                __html: style.css
            }
        }, style.key, false, {
            fileName: "[project]/src/pages/_document.tsx",
            lineNumber: 38,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)));
    return {
        ...initialProps,
        styles: emotionStyleTags
    };
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3a3ceb8f._.js.map