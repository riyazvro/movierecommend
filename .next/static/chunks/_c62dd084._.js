(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/components/BlurCircle.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const BlurCircle = (param)=>{
    let { top = "auto", left = "auto", right = "auto", bottom = "auto" } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute -z-50 h-[230px] w-[230px] aspect-square rounded-full bg-[#f84565]/30 blur-[30px]",
        style: {
            top,
            left,
            right,
            bottom
        }
    }, void 0, false, {
        fileName: "[project]/app/components/BlurCircle.js",
        lineNumber: 8,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
};
_c = BlurCircle;
const __TURBOPACK__default__export__ = BlurCircle;
var _c;
__turbopack_context__.k.register(_c, "BlurCircle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/lib/timeFormat.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
const timeFormat = (minutes)=>{
    let hrs = Math.floor(minutes / 60);
    let formattedmins = minutes % 60;
    return " ".concat(hrs, "h ").concat(formattedmins, "m");
};
const __TURBOPACK__default__export__ = timeFormat;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/MovieCard.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeadphonesIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/headphones.js [app-client] (ecmascript) <export default as HeadphonesIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$timeFormat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/timeFormat.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const MovieCard = (param)=>{
    let { movie } = param;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [imageError, setImageError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Array of movie IDs to exclude
    const excludedMovieIds = [
        715287,
        993234,
        1280461,
        259872,
        611251,
        1470086,
        226674,
        460229,
        1127648
    ];
    // Check if movie is adult content
    if (movie.adult === true || movie.adult === "true") {
        return null;
    }
    // Check if movie should be excluded
    if (excludedMovieIds.includes(movie.id)) {
        return null;
    }
    const handleImageError = ()=>{
        setImageError(true);
    };
    const movieid = movie.id || movie.movieid;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col justify-between outline bg-gray-900 p-2 rounded-2xl hover:scale-105 transition-all duration-200 py-4 px-4 w-[250px] max-md:w-[47%] max-md:p-2 max-md:outline-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    width: 200,
                    height: 300,
                    onClick: ()=>{
                        router.push("/movies/".concat(movieid));
                    },
                    className: "shadow-[#f84565] h-60 w-full shadow rounded-lg object-cover object-right-bottom cursor-pointer",
                    src: !imageError && movie.poster_path ? "https://image.tmdb.org/t/p/w300".concat(movie.poster_path) : "/no-image.png",
                    alt: movie.title || 'Movie poster',
                    onError: handleImageError,
                    priority: false,
                    loading: "lazy"
                }, void 0, false, {
                    fileName: "[project]/app/components/MovieCard.js",
                    lineNumber: 31,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/MovieCard.js",
                lineNumber: 30,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-semibold truncate mt-2 text-center",
                children: movie.title
            }, void 0, false, {
                fileName: "[project]/app/components/MovieCard.js",
                lineNumber: 47,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex  justify-around gap-5 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm mt-2",
                        children: [
                            new Date(movie.release_date).getFullYear(),
                            "  "
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/MovieCard.js",
                        lineNumber: 49,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm mt-2 flex gap-3 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeadphonesIcon$3e$__["HeadphonesIcon"], {}, void 0, false, {
                                fileName: "[project]/app/components/MovieCard.js",
                                lineNumber: 50,
                                columnNumber: 69
                            }, ("TURBOPACK compile-time value", void 0)),
                            " ",
                            movie.original_language.toUpperCase()
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/MovieCard.js",
                        lineNumber: 50,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/MovieCard.js",
                lineNumber: 48,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            movie.genres && movie.genres.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "flex gap-4",
                children: movie.genres.map((genre)=>genre.name).join('   |   ')
            }, void 0, false, {
                fileName: "[project]/app/components/MovieCard.js",
                lineNumber: 54,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mt-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            router.push("/movies/".concat(movieid));
                        },
                        className: "max-md:p-1 max-md:rounded-xl max-md:font-semibold max-md:text-[14px] max-md: text-black rounded-2xl cursor-pointer  bg-[#f84565] px-4 py-2 font-semibold hover:bg-[#f84565]/80",
                        children: "View More"
                    }, void 0, false, {
                        fileName: "[project]/app/components/MovieCard.js",
                        lineNumber: 59,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                className: "text-amber-400 object-fill fill-amber-400"
                            }, void 0, false, {
                                fileName: "[project]/app/components/MovieCard.js",
                                lineNumber: 61,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            movie.vote_average.toFixed(1)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/MovieCard.js",
                        lineNumber: 60,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/MovieCard.js",
                lineNumber: 58,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/MovieCard.js",
        lineNumber: 29,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MovieCard, "7LzZBi9pxvpgXiah70OyqJYui70=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = MovieCard;
const __TURBOPACK__default__export__ = MovieCard;
var _c;
__turbopack_context__.k.register(_c, "MovieCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/lib/debug.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// Debug utilities for performance monitoring
__turbopack_context__.s({
    "checkPerformanceIssues": ()=>checkPerformanceIssues,
    "debounce": ()=>debounce,
    "debugLog": ()=>debugLog,
    "measureAsyncTime": ()=>measureAsyncTime,
    "measureTime": ()=>measureTime,
    "monitorApiCall": ()=>monitorApiCall,
    "throttle": ()=>throttle
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const debugLog = function(message) {
    let data = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if ("TURBOPACK compile-time truthy", 1) {
        console.log("[DEBUG] ".concat(message), data || '');
    }
};
const measureTime = (name, fn)=>{
    const start = performance.now();
    const result = fn();
    const end = performance.now();
    if ("TURBOPACK compile-time truthy", 1) {
        console.log("[PERF] ".concat(name, " took ").concat((end - start).toFixed(2), "ms"));
    }
    return result;
};
const measureAsyncTime = async (name, fn)=>{
    const start = performance.now();
    const result = await fn();
    const end = performance.now();
    if ("TURBOPACK compile-time truthy", 1) {
        console.log("[PERF] ".concat(name, " took ").concat((end - start).toFixed(2), "ms"));
    }
    return result;
};
const checkPerformanceIssues = ()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        // Check if too many images are loading
        const images = document.querySelectorAll('img');
        if (images.length > 50) {
            console.warn('[PERF] Too many images loaded:', images.length);
        }
        // Check for memory leaks
        if (performance.memory) {
            const memoryInfo = performance.memory;
            if (memoryInfo.usedJSHeapSize > 50 * 1024 * 1024) {
                console.warn('[PERF] High memory usage:', Math.round(memoryInfo.usedJSHeapSize / 1024 / 1024) + 'MB');
            }
        }
    }
};
const debounce = (func, wait)=>{
    let timeout;
    return function executedFunction() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        const later = ()=>{
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};
const throttle = (func, limit)=>{
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(()=>inThrottle = false, limit);
        }
    };
};
const monitorApiCall = async function(url) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const start = performance.now();
    try {
        const response = await fetch(url, options);
        const end = performance.now();
        if ("TURBOPACK compile-time truthy", 1) {
            console.log("[API] ".concat(url, " took ").concat((end - start).toFixed(2), "ms"));
        }
        return response;
    } catch (error) {
        const end = performance.now();
        console.error("[API] ".concat(url, " failed after ").concat((end - start).toFixed(2), "ms:"), error);
        throw error;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/FeatureSelection.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$BlurCircle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/BlurCircle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
// import { moviepage } from '../assets/assets'
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$MovieCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/MovieCard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usehooks-ts/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$debug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/debug.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
const FeatureSelection = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [moviepage, setmoviepage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pageno, setpageno] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSessionStorage"])('pageno', 1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FeatureSelection.useEffect": ()=>{
            const fetchData = {
                "FeatureSelection.useEffect.fetchData": async ()=>{
                    try {
                        setLoading(true);
                        setError(null);
                        const apiKey = ("TURBOPACK compile-time value", "23102388d04ea414040596bb8b634d15");
                        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                        ;
                        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$debug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["measureAsyncTime"])("Fetch movies page ".concat(pageno), {
                            "FeatureSelection.useEffect.fetchData": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$debug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["monitorApiCall"])("https://api.themoviedb.org/3/movie/popular?api_key=".concat(apiKey, "&language=en-US&page=").concat(pageno), {
                                    method: "GET",
                                    headers: {
                                        'Content-Type': 'application/json'
                                    }
                                })
                        }["FeatureSelection.useEffect.fetchData"]);
                        if (!res.ok) {
                            throw new Error("HTTP error! status: ".concat(res.status));
                        }
                        const data = await res.json();
                        setmoviepage(data.results || []);
                    } catch (err) {
                        console.error('Error fetching movies:', err);
                        setError(err.message);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error('Failed to load movies');
                    } finally{
                        setLoading(false);
                    }
                }
            }["FeatureSelection.useEffect.fetchData"];
            // Add a small delay to prevent rapid API calls
            const timeoutId = setTimeout(fetchData, 100);
            return ({
                "FeatureSelection.useEffect": ()=>clearTimeout(timeoutId)
            })["FeatureSelection.useEffect"];
        }
    }["FeatureSelection.useEffect"], [
        pageno
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:p-4 mt-10 max-md:w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center items-center h-64",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-spin rounded-full h-12 w-12 border-b-2 border-[#f84565]"
                }, void 0, false, {
                    fileName: "[project]/app/components/FeatureSelection.js",
                    lineNumber: 64,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/FeatureSelection.js",
                lineNumber: 63,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/components/FeatureSelection.js",
            lineNumber: 62,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:p-4 mt-10 max-md:w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center items-center h-64",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-500",
                    children: [
                        "Error loading movies: ",
                        error
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/FeatureSelection.js",
                    lineNumber: 74,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/FeatureSelection.js",
                lineNumber: 73,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/components/FeatureSelection.js",
            lineNumber: 72,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "md:p-4  max-md:w-full",
        id: "moviepage",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: " flex justify-between  md:mx-auto pt-4 max-md:w-full max-md:px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$BlurCircle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        top: "20%",
                        left: "10%"
                    }, void 0, false, {
                        fileName: "[project]/app/components/FeatureSelection.js",
                        lineNumber: 83,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-[#f84565] font-semibold text-3xl md:ml-22",
                        children: "Popular Movies"
                    }, void 0, false, {
                        fileName: "[project]/app/components/FeatureSelection.js",
                        lineNumber: 84,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/FeatureSelection.js",
                lineNumber: 82,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$BlurCircle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                left: "-100px",
                bottom: "-150px"
            }, void 0, false, {
                fileName: "[project]/app/components/FeatureSelection.js",
                lineNumber: 86,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-4 max-md:justify-center justify-center w-[100%] mx-auto p-4 max-md:w-full",
                children: moviepage.map((show)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$MovieCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        movie: show
                    }, show.id, false, {
                        fileName: "[project]/app/components/FeatureSelection.js",
                        lineNumber: 89,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/app/components/FeatureSelection.js",
                lineNumber: 87,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                if (pageno <= 1) {
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("This is the first page");
                                } else {
                                    setpageno(pageno - 1);
                                }
                            },
                            className: "bg-[#f84565] hover:bg-[#f84565]/80 px-3 py-2 text-black font-semibold rounded-2xl cursor-pointer flex gap-2 w-30 justify-center items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {}, void 0, false, {
                                    fileName: "[project]/app/components/FeatureSelection.js",
                                    lineNumber: 100,
                                    columnNumber: 167
                                }, ("TURBOPACK compile-time value", void 0)),
                                " Previous"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/FeatureSelection.js",
                            lineNumber: 94,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/components/FeatureSelection.js",
                        lineNumber: 93,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "bg-[#f84565] px-5 py-2 text-black font-semibold rounded-xl ",
                        children: pageno
                    }, void 0, false, {
                        fileName: "[project]/app/components/FeatureSelection.js",
                        lineNumber: 102,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setpageno(pageno + 1);
                            },
                            className: "bg-[#f84565] hover:bg-[#f84565]/80 px-3 py-2 text-black font-semibold rounded-2xl cursor-pointer flex gap-2 w-30 justify-center items-center",
                            children: [
                                "Next",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {}, void 0, false, {
                                    fileName: "[project]/app/components/FeatureSelection.js",
                                    lineNumber: 108,
                                    columnNumber: 171
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/FeatureSelection.js",
                            lineNumber: 106,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/components/FeatureSelection.js",
                        lineNumber: 105,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/FeatureSelection.js",
                lineNumber: 92,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/FeatureSelection.js",
        lineNumber: 81,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FeatureSelection, "4K2l7ab/QUdCWnbmkWUI3XbJjio=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSessionStorage"]
    ];
});
_c = FeatureSelection;
const __TURBOPACK__default__export__ = FeatureSelection;
var _c;
__turbopack_context__.k.register(_c, "FeatureSelection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/ErrorBoundary.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
class ErrorBoundary extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Component {
    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error
        };
    }
    componentDidCatch(error, errorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen flex items-center justify-center bg-black",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-bold text-white mb-4",
                            children: "Something went wrong"
                        }, void 0, false, {
                            fileName: "[project]/app/components/ErrorBoundary.js",
                            lineNumber: 23,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400 mb-6",
                            children: "We are sorry, but something unexpected happened."
                        }, void 0, false, {
                            fileName: "[project]/app/components/ErrorBoundary.js",
                            lineNumber: 24,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                this.setState({
                                    hasError: false,
                                    error: null
                                });
                                window.location.reload();
                            },
                            className: "bg-[#f84565] hover:bg-[#f84565]/80 px-6 py-3 text-black font-semibold rounded-xl cursor-pointer",
                            children: "Try Again"
                        }, void 0, false, {
                            fileName: "[project]/app/components/ErrorBoundary.js",
                            lineNumber: 25,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/ErrorBoundary.js",
                    lineNumber: 22,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/ErrorBoundary.js",
                lineNumber: 21,
                columnNumber: 9
            }, this);
        }
        return this.props.children;
    }
    constructor(props){
        super(props);
        this.state = {
            hasError: false,
            error: null
        };
    }
}
const __TURBOPACK__default__export__ = ErrorBoundary;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>Page
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$FeatureSelection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/FeatureSelection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ErrorBoundary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ErrorBoundary.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usehooks-ts/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Page() {
    _s();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isopen, setisopen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSessionStorage"])("open", true);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            // Simulate loading time for better UX
            const timer = setTimeout({
                "Page.useEffect.timer": ()=>{
                    setIsLoading(false);
                }
            }["Page.useEffect.timer"], 500);
            return ({
                "Page.useEffect": ()=>clearTimeout(timer)
            })["Page.useEffect"];
        }
    }["Page.useEffect"], []);
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-black",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-16 w-16 border-b-2 border-[#f84565] mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-white mb-2",
                        children: "MovieTicket"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400",
                        children: "Loading your movie experience..."
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 32,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.js",
            lineNumber: 31,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ErrorBoundary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                isopen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:w-[31.5%] max-md:w-[90%] max-md:mx-[5%] md:mx-[535px] flex rounded-3xl border px-4 relative gap-10 py-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex max-md:gap-3 md:gap-16 cursor-pointer",
                            onClick: ()=>{
                                router.push("/movieoftheday");
                                setisopen(!isopen);
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-md:truncate max-md:w-[200px] text-gray-400",
                                    children: "Check Out Today's Recommended Movie"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    className: "animate-ping duration-1000"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {
                            className: "absolute top-3 right-5 cursor-pointer",
                            onClick: ()=>{
                                setisopen(!isopen);
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 44,
                    columnNumber: 20
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$FeatureSelection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.js",
            lineNumber: 43,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.js",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_s(Page, "IwcntsK/gi6SVVArO2g4MIx078k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSessionStorage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": ()=>__iconNode,
    "default": ()=>ArrowLeft
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m12 19-7-7 7-7",
            key: "1l729n"
        }
    ],
    [
        "path",
        {
            d: "M19 12H5",
            key: "x3x0zl"
        }
    ]
];
const ArrowLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("arrow-left", __iconNode);
;
 //# sourceMappingURL=arrow-left.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "ArrowLeft": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": ()=>__iconNode,
    "default": ()=>ArrowRight
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ],
    [
        "path",
        {
            d: "m12 5 7 7-7 7",
            key: "xquz4c"
        }
    ]
];
const ArrowRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("arrow-right", __iconNode);
;
 //# sourceMappingURL=arrow-right.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "ArrowRight": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/headphones.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": ()=>__iconNode,
    "default": ()=>Headphones
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",
            key: "1xhozi"
        }
    ]
];
const Headphones = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("headphones", __iconNode);
;
 //# sourceMappingURL=headphones.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/headphones.js [app-client] (ecmascript) <export default as HeadphonesIcon>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "HeadphonesIcon": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/headphones.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": ()=>__iconNode,
    "default": ()=>Star
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
            key: "r04s7s"
        }
    ]
];
const Star = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("star", __iconNode);
;
 //# sourceMappingURL=star.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Star": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lodash.debounce/index.js [app-client] (ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ /** Used as the `TypeError` message for "Functions" methods. */ var FUNC_ERROR_TEXT = 'Expected a function';
/** Used as references for various `Number` constants. */ var NAN = 0 / 0;
/** `Object#toString` result references. */ var symbolTag = '[object Symbol]';
/** Used to match leading and trailing whitespace. */ var reTrim = /^\s+|\s+$/g;
/** Used to detect bad signed hexadecimal string values. */ var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */ var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */ var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */ var freeParseInt = parseInt;
/** Detect free variable `global` from Node.js. */ var freeGlobal = ("TURBOPACK compile-time value", "object") == 'object' && ("TURBOPACK ident replacement", globalThis) && ("TURBOPACK ident replacement", globalThis).Object === Object && ("TURBOPACK ident replacement", globalThis);
/** Detect free variable `self`. */ var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var root = freeGlobal || freeSelf || Function('return this')();
/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var objectToString = objectProto.toString;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeMax = Math.max, nativeMin = Math.min;
/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */ var now = function() {
    return root.Date.now();
};
/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */ function debounce(func, wait, options) {
    var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
    if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
    }
    wait = toNumber(wait) || 0;
    if (isObject(options)) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
    }
    function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
    }
    function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
    }
    function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result = wait - timeSinceLastCall;
        return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
    }
    function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }
    function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
            return trailingEdge(time);
        }
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
    }
    function trailingEdge(time) {
        timerId = undefined;
        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) {
            return invokeFunc(time);
        }
        lastArgs = lastThis = undefined;
        return result;
    }
    function cancel() {
        if (timerId !== undefined) {
            clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
    }
    function flush() {
        return timerId === undefined ? result : trailingEdge(now());
    }
    function debounced() {
        var time = now(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
            if (timerId === undefined) {
                return leadingEdge(lastCallTime);
            }
            if (maxing) {
                // Handle invocations in a tight loop.
                timerId = setTimeout(timerExpired, wait);
                return invokeFunc(lastCallTime);
            }
        }
        if (timerId === undefined) {
            timerId = setTimeout(timerExpired, wait);
        }
        return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return !!value && typeof value == 'object';
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */ function isSymbol(value) {
    return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */ function toNumber(value) {
    if (typeof value == 'number') {
        return value;
    }
    if (isSymbol(value)) {
        return NAN;
    }
    if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? other + '' : other;
    }
    if (typeof value != 'string') {
        return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, '');
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
module.exports = debounce;
}}),
"[project]/node_modules/usehooks-ts/dist/index.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "useBoolean": ()=>useBoolean,
    "useClickAnyWhere": ()=>useClickAnyWhere,
    "useCopyToClipboard": ()=>useCopyToClipboard,
    "useCountdown": ()=>useCountdown,
    "useCounter": ()=>useCounter,
    "useDarkMode": ()=>useDarkMode,
    "useDebounceCallback": ()=>useDebounceCallback,
    "useDebounceValue": ()=>useDebounceValue,
    "useDocumentTitle": ()=>useDocumentTitle,
    "useEventCallback": ()=>useEventCallback,
    "useEventListener": ()=>useEventListener,
    "useHover": ()=>useHover,
    "useIntersectionObserver": ()=>useIntersectionObserver,
    "useInterval": ()=>useInterval,
    "useIsClient": ()=>useIsClient,
    "useIsMounted": ()=>useIsMounted,
    "useIsomorphicLayoutEffect": ()=>useIsomorphicLayoutEffect,
    "useLocalStorage": ()=>useLocalStorage,
    "useMap": ()=>useMap,
    "useMediaQuery": ()=>useMediaQuery,
    "useOnClickOutside": ()=>useOnClickOutside,
    "useReadLocalStorage": ()=>useReadLocalStorage,
    "useResizeObserver": ()=>useResizeObserver,
    "useScreen": ()=>useScreen,
    "useScript": ()=>useScript,
    "useScrollLock": ()=>useScrollLock,
    "useSessionStorage": ()=>useSessionStorage,
    "useStep": ()=>useStep,
    "useTernaryDarkMode": ()=>useTernaryDarkMode,
    "useTimeout": ()=>useTimeout,
    "useToggle": ()=>useToggle,
    "useUnmount": ()=>useUnmount,
    "useWindowSize": ()=>useWindowSize
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2e$debounce$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lodash.debounce/index.js [app-client] (ecmascript)");
;
;
// src/useBoolean/useBoolean.ts
function useBoolean() {
    let defaultValue = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    if (typeof defaultValue !== "boolean") {
        throw new Error("defaultValue must be `true` or `false`");
    }
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultValue);
    const setTrue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useBoolean.useCallback[setTrue]": ()=>{
            setValue(true);
        }
    }["useBoolean.useCallback[setTrue]"], []);
    const setFalse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useBoolean.useCallback[setFalse]": ()=>{
            setValue(false);
        }
    }["useBoolean.useCallback[setFalse]"], []);
    const toggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useBoolean.useCallback[toggle]": ()=>{
            setValue({
                "useBoolean.useCallback[toggle]": (x)=>!x
            }["useBoolean.useCallback[toggle]"]);
        }
    }["useBoolean.useCallback[toggle]"], []);
    return {
        value,
        setValue,
        setTrue,
        setFalse,
        toggle
    };
}
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"];
// src/useEventListener/useEventListener.ts
function useEventListener(eventName, handler, element, options) {
    const savedHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(handler);
    useIsomorphicLayoutEffect({
        "useEventListener.useIsomorphicLayoutEffect": ()=>{
            savedHandler.current = handler;
        }
    }["useEventListener.useIsomorphicLayoutEffect"], [
        handler
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useEventListener.useEffect": ()=>{
            var _ref;
            const targetElement = (_ref = element == null ? void 0 : element.current) !== null && _ref !== void 0 ? _ref : window;
            if (!(targetElement && targetElement.addEventListener)) return;
            const listener = {
                "useEventListener.useEffect.listener": (event)=>{
                    savedHandler.current(event);
                }
            }["useEventListener.useEffect.listener"];
            targetElement.addEventListener(eventName, listener, options);
            return ({
                "useEventListener.useEffect": ()=>{
                    targetElement.removeEventListener(eventName, listener, options);
                }
            })["useEventListener.useEffect"];
        }
    }["useEventListener.useEffect"], [
        eventName,
        element,
        options
    ]);
}
// src/useClickAnyWhere/useClickAnyWhere.ts
function useClickAnyWhere(handler) {
    useEventListener("click", {
        "useClickAnyWhere.useEventListener": (event)=>{
            handler(event);
        }
    }["useClickAnyWhere.useEventListener"]);
}
function useCopyToClipboard() {
    const [copiedText, setCopiedText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const copy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCopyToClipboard.useCallback[copy]": async (text)=>{
            if (!(navigator == null ? void 0 : navigator.clipboard)) {
                console.warn("Clipboard not supported");
                return false;
            }
            try {
                await navigator.clipboard.writeText(text);
                setCopiedText(text);
                return true;
            } catch (error) {
                console.warn("Copy failed", error);
                setCopiedText(null);
                return false;
            }
        }
    }["useCopyToClipboard.useCallback[copy]"], []);
    return [
        copiedText,
        copy
    ];
}
function useCounter(initialValue) {
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialValue !== null && initialValue !== void 0 ? initialValue : 0);
    const increment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCounter.useCallback[increment]": ()=>{
            setCount({
                "useCounter.useCallback[increment]": (x)=>x + 1
            }["useCounter.useCallback[increment]"]);
        }
    }["useCounter.useCallback[increment]"], []);
    const decrement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCounter.useCallback[decrement]": ()=>{
            setCount({
                "useCounter.useCallback[decrement]": (x)=>x - 1
            }["useCounter.useCallback[decrement]"]);
        }
    }["useCounter.useCallback[decrement]"], []);
    const reset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCounter.useCallback[reset]": ()=>{
            setCount(initialValue !== null && initialValue !== void 0 ? initialValue : 0);
        }
    }["useCounter.useCallback[reset]"], [
        initialValue
    ]);
    return {
        count,
        increment,
        decrement,
        reset,
        setCount
    };
}
function useInterval(callback, delay) {
    const savedCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(callback);
    useIsomorphicLayoutEffect({
        "useInterval.useIsomorphicLayoutEffect": ()=>{
            savedCallback.current = callback;
        }
    }["useInterval.useIsomorphicLayoutEffect"], [
        callback
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInterval.useEffect": ()=>{
            if (delay === null) {
                return;
            }
            const id = setInterval({
                "useInterval.useEffect.id": ()=>{
                    savedCallback.current();
                }
            }["useInterval.useEffect.id"], delay);
            return ({
                "useInterval.useEffect": ()=>{
                    clearInterval(id);
                }
            })["useInterval.useEffect"];
        }
    }["useInterval.useEffect"], [
        delay
    ]);
}
// src/useCountdown/useCountdown.ts
function useCountdown(param) {
    let { countStart, countStop = 0, intervalMs = 1e3, isIncrement = false } = param;
    const { count, increment, decrement, reset: resetCounter } = useCounter(countStart);
    const { value: isCountdownRunning, setTrue: startCountdown, setFalse: stopCountdown } = useBoolean(false);
    const resetCountdown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCountdown.useCallback[resetCountdown]": ()=>{
            stopCountdown();
            resetCounter();
        }
    }["useCountdown.useCallback[resetCountdown]"], [
        stopCountdown,
        resetCounter
    ]);
    const countdownCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCountdown.useCallback[countdownCallback]": ()=>{
            if (count === countStop) {
                stopCountdown();
                return;
            }
            if (isIncrement) {
                increment();
            } else {
                decrement();
            }
        }
    }["useCountdown.useCallback[countdownCallback]"], [
        count,
        countStop,
        decrement,
        increment,
        isIncrement,
        stopCountdown
    ]);
    useInterval(countdownCallback, isCountdownRunning ? intervalMs : null);
    return [
        count,
        {
            startCountdown,
            stopCountdown,
            resetCountdown
        }
    ];
}
function useEventCallback(fn) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        "useEventCallback.useRef[ref]": ()=>{
            throw new Error("Cannot call an event handler while rendering.");
        }
    }["useEventCallback.useRef[ref]"]);
    useIsomorphicLayoutEffect({
        "useEventCallback.useIsomorphicLayoutEffect": ()=>{
            ref.current = fn;
        }
    }["useEventCallback.useIsomorphicLayoutEffect"], [
        fn
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useEventCallback.useCallback": function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            var _a;
            return (_a = ref.current) == null ? void 0 : _a.call(ref, ...args);
        }
    }["useEventCallback.useCallback"], [
        ref
    ]);
}
// src/useLocalStorage/useLocalStorage.ts
var IS_SERVER = typeof window === "undefined";
function useLocalStorage(key, initialValue) {
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const { initializeWithValue = true } = options;
    const serializer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useLocalStorage.useCallback[serializer]": (value)=>{
            if (options.serializer) {
                return options.serializer(value);
            }
            return JSON.stringify(value);
        }
    }["useLocalStorage.useCallback[serializer]"], [
        options
    ]);
    const deserializer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useLocalStorage.useCallback[deserializer]": (value)=>{
            if (options.deserializer) {
                return options.deserializer(value);
            }
            if (value === "undefined") {
                return void 0;
            }
            const defaultValue = initialValue instanceof Function ? initialValue() : initialValue;
            let parsed;
            try {
                parsed = JSON.parse(value);
            } catch (error) {
                console.error("Error parsing JSON:", error);
                return defaultValue;
            }
            return parsed;
        }
    }["useLocalStorage.useCallback[deserializer]"], [
        options,
        initialValue
    ]);
    const readValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useLocalStorage.useCallback[readValue]": ()=>{
            const initialValueToUse = initialValue instanceof Function ? initialValue() : initialValue;
            if (IS_SERVER) {
                return initialValueToUse;
            }
            try {
                const raw = window.localStorage.getItem(key);
                return raw ? deserializer(raw) : initialValueToUse;
            } catch (error) {
                console.warn("Error reading localStorage key “".concat(key, "”:"), error);
                return initialValueToUse;
            }
        }
    }["useLocalStorage.useCallback[readValue]"], [
        initialValue,
        key,
        deserializer
    ]);
    const [storedValue, setStoredValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useLocalStorage.useState": ()=>{
            if (initializeWithValue) {
                return readValue();
            }
            return initialValue instanceof Function ? initialValue() : initialValue;
        }
    }["useLocalStorage.useState"]);
    const setValue = useEventCallback({
        "useLocalStorage.useEventCallback[setValue]": (value)=>{
            if (IS_SERVER) {
                console.warn("Tried setting localStorage key “".concat(key, "” even though environment is not a client"));
            }
            try {
                const newValue = value instanceof Function ? value(readValue()) : value;
                window.localStorage.setItem(key, serializer(newValue));
                setStoredValue(newValue);
                window.dispatchEvent(new StorageEvent("local-storage", {
                    key
                }));
            } catch (error) {
                console.warn("Error setting localStorage key “".concat(key, "”:"), error);
            }
        }
    }["useLocalStorage.useEventCallback[setValue]"]);
    const removeValue = useEventCallback({
        "useLocalStorage.useEventCallback[removeValue]": ()=>{
            if (IS_SERVER) {
                console.warn("Tried removing localStorage key “".concat(key, "” even though environment is not a client"));
            }
            const defaultValue = initialValue instanceof Function ? initialValue() : initialValue;
            window.localStorage.removeItem(key);
            setStoredValue(defaultValue);
            window.dispatchEvent(new StorageEvent("local-storage", {
                key
            }));
        }
    }["useLocalStorage.useEventCallback[removeValue]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLocalStorage.useEffect": ()=>{
            setStoredValue(readValue());
        }
    }["useLocalStorage.useEffect"], [
        key
    ]);
    const handleStorageChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useLocalStorage.useCallback[handleStorageChange]": (event)=>{
            if (event.key && event.key !== key) {
                return;
            }
            setStoredValue(readValue());
        }
    }["useLocalStorage.useCallback[handleStorageChange]"], [
        key,
        readValue
    ]);
    useEventListener("storage", handleStorageChange);
    useEventListener("local-storage", handleStorageChange);
    return [
        storedValue,
        setValue,
        removeValue
    ];
}
var IS_SERVER2 = typeof window === "undefined";
function useMediaQuery(query) {
    let { defaultValue = false, initializeWithValue = true } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const getMatches = (query2)=>{
        if (IS_SERVER2) {
            return defaultValue;
        }
        return window.matchMedia(query2).matches;
    };
    const [matches, setMatches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useMediaQuery.useState": ()=>{
            if (initializeWithValue) {
                return getMatches(query);
            }
            return defaultValue;
        }
    }["useMediaQuery.useState"]);
    function handleChange() {
        setMatches(getMatches(query));
    }
    useIsomorphicLayoutEffect({
        "useMediaQuery.useIsomorphicLayoutEffect": ()=>{
            const matchMedia = window.matchMedia(query);
            handleChange();
            if (matchMedia.addListener) {
                matchMedia.addListener(handleChange);
            } else {
                matchMedia.addEventListener("change", handleChange);
            }
            return ({
                "useMediaQuery.useIsomorphicLayoutEffect": ()=>{
                    if (matchMedia.removeListener) {
                        matchMedia.removeListener(handleChange);
                    } else {
                        matchMedia.removeEventListener("change", handleChange);
                    }
                }
            })["useMediaQuery.useIsomorphicLayoutEffect"];
        }
    }["useMediaQuery.useIsomorphicLayoutEffect"], [
        query
    ]);
    return matches;
}
// src/useDarkMode/useDarkMode.ts
var COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)";
var LOCAL_STORAGE_KEY = "usehooks-ts-dark-mode";
function useDarkMode() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const { defaultValue, localStorageKey = LOCAL_STORAGE_KEY, initializeWithValue = true } = options;
    const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY, {
        initializeWithValue,
        defaultValue
    });
    var _ref;
    const [isDarkMode, setDarkMode] = useLocalStorage(localStorageKey, (_ref = defaultValue !== null && defaultValue !== void 0 ? defaultValue : isDarkOS) !== null && _ref !== void 0 ? _ref : false, {
        initializeWithValue
    });
    useIsomorphicLayoutEffect({
        "useDarkMode.useIsomorphicLayoutEffect": ()=>{
            if (isDarkOS !== isDarkMode) {
                setDarkMode(isDarkOS);
            }
        }
    }["useDarkMode.useIsomorphicLayoutEffect"], [
        isDarkOS
    ]);
    return {
        isDarkMode,
        toggle: ()=>{
            setDarkMode((prev)=>!prev);
        },
        enable: ()=>{
            setDarkMode(true);
        },
        disable: ()=>{
            setDarkMode(false);
        },
        set: (value)=>{
            setDarkMode(value);
        }
    };
}
function useUnmount(func) {
    const funcRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(func);
    funcRef.current = func;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useUnmount.useEffect": ()=>({
                "useUnmount.useEffect": ()=>{
                    funcRef.current();
                }
            })["useUnmount.useEffect"]
    }["useUnmount.useEffect"], []);
}
// src/useDebounceCallback/useDebounceCallback.ts
function useDebounceCallback(func) {
    let delay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 500, options = arguments.length > 2 ? arguments[2] : void 0;
    const debouncedFunc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    useUnmount({
        "useDebounceCallback.useUnmount": ()=>{
            if (debouncedFunc.current) {
                debouncedFunc.current.cancel();
            }
        }
    }["useDebounceCallback.useUnmount"]);
    const debounced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useDebounceCallback.useMemo[debounced]": ()=>{
            const debouncedFuncInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2e$debounce$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(func, delay, options);
            const wrappedFunc = {
                "useDebounceCallback.useMemo[debounced].wrappedFunc": function() {
                    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                        args[_key] = arguments[_key];
                    }
                    return debouncedFuncInstance(...args);
                }
            }["useDebounceCallback.useMemo[debounced].wrappedFunc"];
            wrappedFunc.cancel = ({
                "useDebounceCallback.useMemo[debounced]": ()=>{
                    debouncedFuncInstance.cancel();
                }
            })["useDebounceCallback.useMemo[debounced]"];
            wrappedFunc.isPending = ({
                "useDebounceCallback.useMemo[debounced]": ()=>{
                    return !!debouncedFunc.current;
                }
            })["useDebounceCallback.useMemo[debounced]"];
            wrappedFunc.flush = ({
                "useDebounceCallback.useMemo[debounced]": ()=>{
                    return debouncedFuncInstance.flush();
                }
            })["useDebounceCallback.useMemo[debounced]"];
            return wrappedFunc;
        }
    }["useDebounceCallback.useMemo[debounced]"], [
        func,
        delay,
        options
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDebounceCallback.useEffect": ()=>{
            debouncedFunc.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2e$debounce$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(func, delay, options);
        }
    }["useDebounceCallback.useEffect"], [
        func,
        delay,
        options
    ]);
    return debounced;
}
function useDebounceValue(initialValue, delay, options) {
    var _ref;
    const eq = (_ref = options == null ? void 0 : options.equalityFn) !== null && _ref !== void 0 ? _ref : (left, right)=>left === right;
    const unwrappedInitialValue = initialValue instanceof Function ? initialValue() : initialValue;
    const [debouncedValue, setDebouncedValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(unwrappedInitialValue);
    const previousValueRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(unwrappedInitialValue);
    const updateDebouncedValue = useDebounceCallback(setDebouncedValue, delay, options);
    if (!eq(previousValueRef.current, unwrappedInitialValue)) {
        updateDebouncedValue(unwrappedInitialValue);
        previousValueRef.current = unwrappedInitialValue;
    }
    return [
        debouncedValue,
        updateDebouncedValue
    ];
}
function useDocumentTitle(title) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const { preserveTitleOnUnmount = true } = options;
    const defaultTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    useIsomorphicLayoutEffect({
        "useDocumentTitle.useIsomorphicLayoutEffect": ()=>{
            defaultTitle.current = window.document.title;
        }
    }["useDocumentTitle.useIsomorphicLayoutEffect"], []);
    useIsomorphicLayoutEffect({
        "useDocumentTitle.useIsomorphicLayoutEffect": ()=>{
            window.document.title = title;
        }
    }["useDocumentTitle.useIsomorphicLayoutEffect"], [
        title
    ]);
    useUnmount({
        "useDocumentTitle.useUnmount": ()=>{
            if (!preserveTitleOnUnmount && defaultTitle.current) {
                window.document.title = defaultTitle.current;
            }
        }
    }["useDocumentTitle.useUnmount"]);
}
function useHover(elementRef) {
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleMouseEnter = ()=>{
        setValue(true);
    };
    const handleMouseLeave = ()=>{
        setValue(false);
    };
    useEventListener("mouseenter", handleMouseEnter, elementRef);
    useEventListener("mouseleave", handleMouseLeave, elementRef);
    return value;
}
function useIntersectionObserver() {
    let { threshold = 0, root = null, rootMargin = "0%", freezeOnceVisible = false, initialIsIntersecting = false, onChange } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _a;
    const [ref, setRef] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useIntersectionObserver.useState": ()=>({
                isIntersecting: initialIsIntersecting,
                entry: void 0
            })
    }["useIntersectionObserver.useState"]);
    const callbackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    callbackRef.current = onChange;
    const frozen = ((_a = state.entry) == null ? void 0 : _a.isIntersecting) && freezeOnceVisible;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useIntersectionObserver.useEffect": ()=>{
            if (!ref) return;
            if (!("IntersectionObserver" in window)) return;
            if (frozen) return;
            let unobserve;
            const observer = new IntersectionObserver({
                "useIntersectionObserver.useEffect": (entries)=>{
                    const thresholds = Array.isArray(observer.thresholds) ? observer.thresholds : [
                        observer.thresholds
                    ];
                    entries.forEach({
                        "useIntersectionObserver.useEffect": (entry)=>{
                            const isIntersecting = entry.isIntersecting && thresholds.some({
                                "useIntersectionObserver.useEffect": (threshold2)=>entry.intersectionRatio >= threshold2
                            }["useIntersectionObserver.useEffect"]);
                            setState({
                                isIntersecting,
                                entry
                            });
                            if (callbackRef.current) {
                                callbackRef.current(isIntersecting, entry);
                            }
                            if (isIntersecting && freezeOnceVisible && unobserve) {
                                unobserve();
                                unobserve = void 0;
                            }
                        }
                    }["useIntersectionObserver.useEffect"]);
                }
            }["useIntersectionObserver.useEffect"], {
                threshold,
                root,
                rootMargin
            });
            observer.observe(ref);
            return ({
                "useIntersectionObserver.useEffect": ()=>{
                    observer.disconnect();
                }
            })["useIntersectionObserver.useEffect"];
        }
    }["useIntersectionObserver.useEffect"], [
        ref,
        // eslint-disable-next-line react-hooks/exhaustive-deps
        JSON.stringify(threshold),
        root,
        rootMargin,
        frozen,
        freezeOnceVisible
    ]);
    const prevRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useIntersectionObserver.useEffect": ()=>{
            var _a2;
            if (!ref && ((_a2 = state.entry) == null ? void 0 : _a2.target) && !freezeOnceVisible && !frozen && prevRef.current !== state.entry.target) {
                prevRef.current = state.entry.target;
                setState({
                    isIntersecting: initialIsIntersecting,
                    entry: void 0
                });
            }
        }
    }["useIntersectionObserver.useEffect"], [
        ref,
        state.entry,
        freezeOnceVisible,
        frozen,
        initialIsIntersecting
    ]);
    const result = [
        setRef,
        !!state.isIntersecting,
        state.entry
    ];
    result.ref = result[0];
    result.isIntersecting = result[1];
    result.entry = result[2];
    return result;
}
function useIsClient() {
    const [isClient, setClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useIsClient.useEffect": ()=>{
            setClient(true);
        }
    }["useIsClient.useEffect"], []);
    return isClient;
}
function useIsMounted() {
    const isMounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useIsMounted.useEffect": ()=>{
            isMounted.current = true;
            return ({
                "useIsMounted.useEffect": ()=>{
                    isMounted.current = false;
                }
            })["useIsMounted.useEffect"];
        }
    }["useIsMounted.useEffect"], []);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useIsMounted.useCallback": ()=>isMounted.current
    }["useIsMounted.useCallback"], []);
}
function useMap() {
    let initialState = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Map();
    const [map, setMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Map(initialState));
    const actions = {
        set: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "useMap.useCallback": (key, value)=>{
                setMap({
                    "useMap.useCallback": (prev)=>{
                        const copy = new Map(prev);
                        copy.set(key, value);
                        return copy;
                    }
                }["useMap.useCallback"]);
            }
        }["useMap.useCallback"], []),
        setAll: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "useMap.useCallback": (entries)=>{
                setMap({
                    "useMap.useCallback": ()=>new Map(entries)
                }["useMap.useCallback"]);
            }
        }["useMap.useCallback"], []),
        remove: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "useMap.useCallback": (key)=>{
                setMap({
                    "useMap.useCallback": (prev)=>{
                        const copy = new Map(prev);
                        copy.delete(key);
                        return copy;
                    }
                }["useMap.useCallback"]);
            }
        }["useMap.useCallback"], []),
        reset: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "useMap.useCallback": ()=>{
                setMap({
                    "useMap.useCallback": ()=>/* @__PURE__ */ new Map()
                }["useMap.useCallback"]);
            }
        }["useMap.useCallback"], [])
    };
    return [
        map,
        actions
    ];
}
// src/useOnClickOutside/useOnClickOutside.ts
function useOnClickOutside(ref, handler) {
    let eventType = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "mousedown", eventListenerOptions = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    useEventListener(eventType, {
        "useOnClickOutside.useEventListener": (event)=>{
            const target = event.target;
            if (!target || !target.isConnected) {
                return;
            }
            const isOutside = Array.isArray(ref) ? ref.filter({
                "useOnClickOutside.useEventListener": (r)=>Boolean(r.current)
            }["useOnClickOutside.useEventListener"]).every({
                "useOnClickOutside.useEventListener": (r)=>r.current && !r.current.contains(target)
            }["useOnClickOutside.useEventListener"]) : ref.current && !ref.current.contains(target);
            if (isOutside) {
                handler(event);
            }
        }
    }["useOnClickOutside.useEventListener"], void 0, eventListenerOptions);
}
var IS_SERVER3 = typeof window === "undefined";
function useReadLocalStorage(key) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let { initializeWithValue = true } = options;
    if (IS_SERVER3) {
        initializeWithValue = false;
    }
    const deserializer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useReadLocalStorage.useCallback[deserializer]": (value)=>{
            if (options.deserializer) {
                return options.deserializer(value);
            }
            if (value === "undefined") {
                return void 0;
            }
            let parsed;
            try {
                parsed = JSON.parse(value);
            } catch (error) {
                console.error("Error parsing JSON:", error);
                return null;
            }
            return parsed;
        }
    }["useReadLocalStorage.useCallback[deserializer]"], [
        options
    ]);
    const readValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useReadLocalStorage.useCallback[readValue]": ()=>{
            if (IS_SERVER3) {
                return null;
            }
            try {
                const raw = window.localStorage.getItem(key);
                return raw ? deserializer(raw) : null;
            } catch (error) {
                console.warn("Error reading localStorage key “".concat(key, "”:"), error);
                return null;
            }
        }
    }["useReadLocalStorage.useCallback[readValue]"], [
        key,
        deserializer
    ]);
    const [storedValue, setStoredValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useReadLocalStorage.useState": ()=>{
            if (initializeWithValue) {
                return readValue();
            }
            return void 0;
        }
    }["useReadLocalStorage.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useReadLocalStorage.useEffect": ()=>{
            setStoredValue(readValue());
        }
    }["useReadLocalStorage.useEffect"], [
        key
    ]);
    const handleStorageChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useReadLocalStorage.useCallback[handleStorageChange]": (event)=>{
            if (event.key && event.key !== key) {
                return;
            }
            setStoredValue(readValue());
        }
    }["useReadLocalStorage.useCallback[handleStorageChange]"], [
        key,
        readValue
    ]);
    useEventListener("storage", handleStorageChange);
    useEventListener("local-storage", handleStorageChange);
    return storedValue;
}
var initialSize = {
    width: void 0,
    height: void 0
};
function useResizeObserver(options) {
    const { ref, box = "content-box" } = options;
    const [{ width, height }, setSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialSize);
    const isMounted = useIsMounted();
    const previousSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        ...initialSize
    });
    const onResize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(void 0);
    onResize.current = options.onResize;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useResizeObserver.useEffect": ()=>{
            if (!ref.current) return;
            if (typeof window === "undefined" || !("ResizeObserver" in window)) return;
            const observer = new ResizeObserver({
                "useResizeObserver.useEffect": (param)=>{
                    let [entry] = param;
                    const boxProp = box === "border-box" ? "borderBoxSize" : box === "device-pixel-content-box" ? "devicePixelContentBoxSize" : "contentBoxSize";
                    const newWidth = extractSize(entry, boxProp, "inlineSize");
                    const newHeight = extractSize(entry, boxProp, "blockSize");
                    const hasChanged = previousSize.current.width !== newWidth || previousSize.current.height !== newHeight;
                    if (hasChanged) {
                        const newSize = {
                            width: newWidth,
                            height: newHeight
                        };
                        previousSize.current.width = newWidth;
                        previousSize.current.height = newHeight;
                        if (onResize.current) {
                            onResize.current(newSize);
                        } else {
                            if (isMounted()) {
                                setSize(newSize);
                            }
                        }
                    }
                }
            }["useResizeObserver.useEffect"]);
            observer.observe(ref.current, {
                box
            });
            return ({
                "useResizeObserver.useEffect": ()=>{
                    observer.disconnect();
                }
            })["useResizeObserver.useEffect"];
        }
    }["useResizeObserver.useEffect"], [
        box,
        ref,
        isMounted
    ]);
    return {
        width,
        height
    };
}
function extractSize(entry, box, sizeType) {
    if (!entry[box]) {
        if (box === "contentBoxSize") {
            return entry.contentRect[sizeType === "inlineSize" ? "width" : "height"];
        }
        return void 0;
    }
    return Array.isArray(entry[box]) ? entry[box][0][sizeType] : // @ts-ignore Support Firefox's non-standard behavior
    entry[box][sizeType];
}
var IS_SERVER4 = typeof window === "undefined";
function useScreen() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    let { initializeWithValue = true } = options;
    if (IS_SERVER4) {
        initializeWithValue = false;
    }
    const readScreen = ()=>{
        if (IS_SERVER4) {
            return void 0;
        }
        return window.screen;
    };
    const [screen, setScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useScreen.useState": ()=>{
            if (initializeWithValue) {
                return readScreen();
            }
            return void 0;
        }
    }["useScreen.useState"]);
    const debouncedSetScreen = useDebounceCallback(setScreen, options.debounceDelay);
    function handleSize() {
        const newScreen = readScreen();
        const setSize = options.debounceDelay ? debouncedSetScreen : setScreen;
        if (newScreen) {
            const { width, height, availHeight, availWidth, colorDepth, orientation, pixelDepth } = newScreen;
            setSize({
                width,
                height,
                availHeight,
                availWidth,
                colorDepth,
                orientation,
                pixelDepth
            });
        }
    }
    useEventListener("resize", handleSize);
    useIsomorphicLayoutEffect({
        "useScreen.useIsomorphicLayoutEffect": ()=>{
            handleSize();
        }
    }["useScreen.useIsomorphicLayoutEffect"], []);
    return screen;
}
var cachedScriptStatuses = /* @__PURE__ */ new Map();
function getScriptNode(src) {
    const node = document.querySelector('script[src="'.concat(src, '"]'));
    const status = node == null ? void 0 : node.getAttribute("data-status");
    return {
        node,
        status
    };
}
function useScript(src, options) {
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useScript.useState": ()=>{
            if (!src || (options == null ? void 0 : options.shouldPreventLoad)) {
                return "idle";
            }
            if (typeof window === "undefined") {
                return "loading";
            }
            var _cachedScriptStatuses_get;
            return (_cachedScriptStatuses_get = cachedScriptStatuses.get(src)) !== null && _cachedScriptStatuses_get !== void 0 ? _cachedScriptStatuses_get : "loading";
        }
    }["useScript.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useScript.useEffect": ()=>{
            if (!src || (options == null ? void 0 : options.shouldPreventLoad)) {
                return;
            }
            const cachedScriptStatus = cachedScriptStatuses.get(src);
            if (cachedScriptStatus === "ready" || cachedScriptStatus === "error") {
                setStatus(cachedScriptStatus);
                return;
            }
            const script = getScriptNode(src);
            let scriptNode = script.node;
            if (!scriptNode) {
                scriptNode = document.createElement("script");
                scriptNode.src = src;
                scriptNode.async = true;
                if (options == null ? void 0 : options.id) {
                    scriptNode.id = options.id;
                }
                scriptNode.setAttribute("data-status", "loading");
                document.body.appendChild(scriptNode);
                const setAttributeFromEvent = {
                    "useScript.useEffect.setAttributeFromEvent": (event)=>{
                        const scriptStatus = event.type === "load" ? "ready" : "error";
                        scriptNode == null ? void 0 : scriptNode.setAttribute("data-status", scriptStatus);
                    }
                }["useScript.useEffect.setAttributeFromEvent"];
                scriptNode.addEventListener("load", setAttributeFromEvent);
                scriptNode.addEventListener("error", setAttributeFromEvent);
            } else {
                var _script_status, _ref;
                setStatus((_ref = (_script_status = script.status) !== null && _script_status !== void 0 ? _script_status : cachedScriptStatus) !== null && _ref !== void 0 ? _ref : "loading");
            }
            const setStateFromEvent = {
                "useScript.useEffect.setStateFromEvent": (event)=>{
                    const newStatus = event.type === "load" ? "ready" : "error";
                    setStatus(newStatus);
                    cachedScriptStatuses.set(src, newStatus);
                }
            }["useScript.useEffect.setStateFromEvent"];
            scriptNode.addEventListener("load", setStateFromEvent);
            scriptNode.addEventListener("error", setStateFromEvent);
            return ({
                "useScript.useEffect": ()=>{
                    if (scriptNode) {
                        scriptNode.removeEventListener("load", setStateFromEvent);
                        scriptNode.removeEventListener("error", setStateFromEvent);
                    }
                    if (scriptNode && (options == null ? void 0 : options.removeOnUnmount)) {
                        scriptNode.remove();
                        cachedScriptStatuses.delete(src);
                    }
                }
            })["useScript.useEffect"];
        }
    }["useScript.useEffect"], [
        src,
        options == null ? void 0 : options.shouldPreventLoad,
        options == null ? void 0 : options.removeOnUnmount,
        options == null ? void 0 : options.id
    ]);
    return status;
}
var IS_SERVER5 = typeof window === "undefined";
function useScrollLock() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const { autoLock = true, lockTarget, widthReflow = true } = options;
    const [isLocked, setIsLocked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const originalStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lock = ()=>{
        if (target.current) {
            const { overflow, paddingRight } = target.current.style;
            originalStyle.current = {
                overflow,
                paddingRight
            };
            if (widthReflow) {
                const offsetWidth = target.current === document.body ? window.innerWidth : target.current.offsetWidth;
                const currentPaddingRight = parseInt(window.getComputedStyle(target.current).paddingRight, 10) || 0;
                const scrollbarWidth = offsetWidth - target.current.scrollWidth;
                target.current.style.paddingRight = "".concat(scrollbarWidth + currentPaddingRight, "px");
            }
            target.current.style.overflow = "hidden";
            setIsLocked(true);
        }
    };
    const unlock = ()=>{
        if (target.current && originalStyle.current) {
            target.current.style.overflow = originalStyle.current.overflow;
            if (widthReflow) {
                target.current.style.paddingRight = originalStyle.current.paddingRight;
            }
        }
        setIsLocked(false);
    };
    useIsomorphicLayoutEffect({
        "useScrollLock.useIsomorphicLayoutEffect": ()=>{
            if (IS_SERVER5) return;
            if (lockTarget) {
                target.current = typeof lockTarget === "string" ? document.querySelector(lockTarget) : lockTarget;
            }
            if (!target.current) {
                target.current = document.body;
            }
            if (autoLock) {
                lock();
            }
            return ({
                "useScrollLock.useIsomorphicLayoutEffect": ()=>{
                    unlock();
                }
            })["useScrollLock.useIsomorphicLayoutEffect"];
        }
    }["useScrollLock.useIsomorphicLayoutEffect"], [
        autoLock,
        lockTarget,
        widthReflow
    ]);
    return {
        isLocked,
        lock,
        unlock
    };
}
var IS_SERVER6 = typeof window === "undefined";
function useSessionStorage(key, initialValue) {
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const { initializeWithValue = true } = options;
    const serializer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSessionStorage.useCallback[serializer]": (value)=>{
            if (options.serializer) {
                return options.serializer(value);
            }
            return JSON.stringify(value);
        }
    }["useSessionStorage.useCallback[serializer]"], [
        options
    ]);
    const deserializer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSessionStorage.useCallback[deserializer]": (value)=>{
            if (options.deserializer) {
                return options.deserializer(value);
            }
            if (value === "undefined") {
                return void 0;
            }
            const defaultValue = initialValue instanceof Function ? initialValue() : initialValue;
            let parsed;
            try {
                parsed = JSON.parse(value);
            } catch (error) {
                console.error("Error parsing JSON:", error);
                return defaultValue;
            }
            return parsed;
        }
    }["useSessionStorage.useCallback[deserializer]"], [
        options,
        initialValue
    ]);
    const readValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSessionStorage.useCallback[readValue]": ()=>{
            const initialValueToUse = initialValue instanceof Function ? initialValue() : initialValue;
            if (IS_SERVER6) {
                return initialValueToUse;
            }
            try {
                const raw = window.sessionStorage.getItem(key);
                return raw ? deserializer(raw) : initialValueToUse;
            } catch (error) {
                console.warn("Error reading sessionStorage key “".concat(key, "”:"), error);
                return initialValueToUse;
            }
        }
    }["useSessionStorage.useCallback[readValue]"], [
        initialValue,
        key,
        deserializer
    ]);
    const [storedValue, setStoredValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useSessionStorage.useState": ()=>{
            if (initializeWithValue) {
                return readValue();
            }
            return initialValue instanceof Function ? initialValue() : initialValue;
        }
    }["useSessionStorage.useState"]);
    const setValue = useEventCallback({
        "useSessionStorage.useEventCallback[setValue]": (value)=>{
            if (IS_SERVER6) {
                console.warn("Tried setting sessionStorage key “".concat(key, "” even though environment is not a client"));
            }
            try {
                const newValue = value instanceof Function ? value(readValue()) : value;
                window.sessionStorage.setItem(key, serializer(newValue));
                setStoredValue(newValue);
                window.dispatchEvent(new StorageEvent("session-storage", {
                    key
                }));
            } catch (error) {
                console.warn("Error setting sessionStorage key “".concat(key, "”:"), error);
            }
        }
    }["useSessionStorage.useEventCallback[setValue]"]);
    const removeValue = useEventCallback({
        "useSessionStorage.useEventCallback[removeValue]": ()=>{
            if (IS_SERVER6) {
                console.warn("Tried removing sessionStorage key “".concat(key, "” even though environment is not a client"));
            }
            const defaultValue = initialValue instanceof Function ? initialValue() : initialValue;
            window.sessionStorage.removeItem(key);
            setStoredValue(defaultValue);
            window.dispatchEvent(new StorageEvent("session-storage", {
                key
            }));
        }
    }["useSessionStorage.useEventCallback[removeValue]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSessionStorage.useEffect": ()=>{
            setStoredValue(readValue());
        }
    }["useSessionStorage.useEffect"], [
        key
    ]);
    const handleStorageChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSessionStorage.useCallback[handleStorageChange]": (event)=>{
            if (event.key && event.key !== key) {
                return;
            }
            setStoredValue(readValue());
        }
    }["useSessionStorage.useCallback[handleStorageChange]"], [
        key,
        readValue
    ]);
    useEventListener("storage", handleStorageChange);
    useEventListener("session-storage", handleStorageChange);
    return [
        storedValue,
        setValue,
        removeValue
    ];
}
function useStep(maxStep) {
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const canGoToNextStep = currentStep + 1 <= maxStep;
    const canGoToPrevStep = currentStep - 1 > 0;
    const setStep = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useStep.useCallback[setStep]": (step)=>{
            const newStep = step instanceof Function ? step(currentStep) : step;
            if (newStep >= 1 && newStep <= maxStep) {
                setCurrentStep(newStep);
                return;
            }
            throw new Error("Step not valid");
        }
    }["useStep.useCallback[setStep]"], [
        maxStep,
        currentStep
    ]);
    const goToNextStep = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useStep.useCallback[goToNextStep]": ()=>{
            if (canGoToNextStep) {
                setCurrentStep({
                    "useStep.useCallback[goToNextStep]": (step)=>step + 1
                }["useStep.useCallback[goToNextStep]"]);
            }
        }
    }["useStep.useCallback[goToNextStep]"], [
        canGoToNextStep
    ]);
    const goToPrevStep = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useStep.useCallback[goToPrevStep]": ()=>{
            if (canGoToPrevStep) {
                setCurrentStep({
                    "useStep.useCallback[goToPrevStep]": (step)=>step - 1
                }["useStep.useCallback[goToPrevStep]"]);
            }
        }
    }["useStep.useCallback[goToPrevStep]"], [
        canGoToPrevStep
    ]);
    const reset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useStep.useCallback[reset]": ()=>{
            setCurrentStep(1);
        }
    }["useStep.useCallback[reset]"], []);
    return [
        currentStep,
        {
            goToNextStep,
            goToPrevStep,
            canGoToNextStep,
            canGoToPrevStep,
            setStep,
            reset
        }
    ];
}
// src/useTernaryDarkMode/useTernaryDarkMode.ts
var COLOR_SCHEME_QUERY2 = "(prefers-color-scheme: dark)";
var LOCAL_STORAGE_KEY2 = "usehooks-ts-ternary-dark-mode";
function useTernaryDarkMode() {
    let { defaultValue = "system", localStorageKey = LOCAL_STORAGE_KEY2, initializeWithValue = true } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY2, {
        initializeWithValue
    });
    const [mode, setMode] = useLocalStorage(localStorageKey, defaultValue, {
        initializeWithValue
    });
    const isDarkMode = mode === "dark" || mode === "system" && isDarkOS;
    const toggleTernaryDarkMode = ()=>{
        const modes = [
            "light",
            "system",
            "dark"
        ];
        setMode((prevMode)=>{
            const nextIndex = (modes.indexOf(prevMode) + 1) % modes.length;
            return modes[nextIndex];
        });
    };
    return {
        isDarkMode,
        ternaryDarkMode: mode,
        setTernaryDarkMode: setMode,
        toggleTernaryDarkMode
    };
}
function useTimeout(callback, delay) {
    const savedCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(callback);
    useIsomorphicLayoutEffect({
        "useTimeout.useIsomorphicLayoutEffect": ()=>{
            savedCallback.current = callback;
        }
    }["useTimeout.useIsomorphicLayoutEffect"], [
        callback
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTimeout.useEffect": ()=>{
            if (!delay && delay !== 0) {
                return;
            }
            const id = setTimeout({
                "useTimeout.useEffect.id": ()=>{
                    savedCallback.current();
                }
            }["useTimeout.useEffect.id"], delay);
            return ({
                "useTimeout.useEffect": ()=>{
                    clearTimeout(id);
                }
            })["useTimeout.useEffect"];
        }
    }["useTimeout.useEffect"], [
        delay
    ]);
}
function useToggle(defaultValue) {
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!!defaultValue);
    const toggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useToggle.useCallback[toggle]": ()=>{
            setValue({
                "useToggle.useCallback[toggle]": (x)=>!x
            }["useToggle.useCallback[toggle]"]);
        }
    }["useToggle.useCallback[toggle]"], []);
    return [
        value,
        toggle,
        setValue
    ];
}
var IS_SERVER7 = typeof window === "undefined";
function useWindowSize() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    let { initializeWithValue = true } = options;
    if (IS_SERVER7) {
        initializeWithValue = false;
    }
    const [windowSize, setWindowSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useWindowSize.useState": ()=>{
            if (initializeWithValue) {
                return {
                    width: window.innerWidth,
                    height: window.innerHeight
                };
            }
            return {
                width: void 0,
                height: void 0
            };
        }
    }["useWindowSize.useState"]);
    const debouncedSetWindowSize = useDebounceCallback(setWindowSize, options.debounceDelay);
    function handleSize() {
        const setSize = options.debounceDelay ? debouncedSetWindowSize : setWindowSize;
        setSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }
    useEventListener("resize", handleSize);
    useIsomorphicLayoutEffect({
        "useWindowSize.useIsomorphicLayoutEffect": ()=>{
            handleSize();
        }
    }["useWindowSize.useIsomorphicLayoutEffect"], []);
    return windowSize;
}
;
}),
}]);

//# sourceMappingURL=_c62dd084._.js.map