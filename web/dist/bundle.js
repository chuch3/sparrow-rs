/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../libs/simulation-wasm/pkg/lib_simulation_wasm.js":
/*!**********************************************************!*\
  !*** ../libs/simulation-wasm/pkg/lib_simulation_wasm.js ***!
  \**********************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AnimalWasm: () => (/* reexport safe */ _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.AnimalWasm),\n/* harmony export */   FoodWasm: () => (/* reexport safe */ _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.FoodWasm),\n/* harmony export */   SimulationWasm: () => (/* reexport safe */ _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.SimulationWasm),\n/* harmony export */   WorldWasm: () => (/* reexport safe */ _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.WorldWasm),\n/* harmony export */   __wbg_animalwasm_new: () => (/* reexport safe */ _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.__wbg_animalwasm_new),\n/* harmony export */   __wbg_animalwasm_unwrap: () => (/* reexport safe */ _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.__wbg_animalwasm_unwrap),\n/* harmony export */   __wbg_buffer_a1a27a0dfa70165d: () => (/* reexport safe */ _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.__wbg_buffer_a1a27a0dfa70165d),\n/* harmony export */   __wbg_call_f2db6205e5c51dc8: () => (/* reexport safe */ _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.__wbg_call_f2db6205e5c51dc8),\n/* harmony export */   __wbg_call_fbe8be8bf6436ce5: () => (/* reexport safe */ _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.__wbg_call_fbe8be8bf6436ce5),\n/* harmony export */   __wbg_crypto_574e78ad8b13b65f: () => (/* reexport safe */ _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.__wbg_crypto_574e78ad8b13b65f),\n/* harmony export */   __wbg_foodwasm_new: () => (/* reexport safe */ _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.__wbg_foodwasm_new),\n/* harmony export */   __wbg_foodwasm_unwrap: () => (/* reexport safe */ _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.__wbg_foodwasm_unwrap),\n/* harmony export */   __wbg_getRandomValues_b8f5dbd5f3995a9e: () => (/* reexport safe */ _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.__wbg_getRandomValues_b8f5dbd5f3995a9e),\n/* harmony export */   __wbg_msCrypto_a61aeb35a24c1329: () => (/* reexport safe */ _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.__wbg_msCrypto_a61aeb35a24c1329),\n/* harmony export */   __wbg_new_e52b3efaaa774f96: () => (/* reexport safe */ _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.__wbg_new_e52b3efaaa774f96),\n/* harmony export */   __wbg_newnoargs_ff528e72d35de39a: () => (/* reexport safe */ _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.__wbg_newnoargs_ff528e72d35de39a),\n/* harmony export */   __wbg_newwithbyteoffsetandlength_3b01ecda099177e8: () => (/* reexport safe */ _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.__wbg_newwithbyteoffsetandlength_3b01ecda099177e8),\n/* harmony export */   __wbg_newwithlength_08f872dc1e3ada2e: () => (/* reexport safe */ _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.__wbg_newwithlength_08f872dc1e3ada2e),\n/* harmony export */   __wbg_node_905d3e251edff8a2: () => (/* reexport safe */ _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.__wbg_node_905d3e251edff8a2),\n/* harmony export */   __wbg_process_dc0fbacc7c1c06f7: () => (/* reexport safe */ _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.__wbg_process_dc0fbacc7c1c06f7),\n/* harmony export */   __wbg_randomFillSync_ac0988aba3254290: () => (/* reexport safe */ _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.__wbg_randomFillSync_ac0988aba3254290),\n/* harmony export */   __wbg_require_60cc747a6bc5215a: () => (/* reexport safe */ _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.__wbg_require_60cc747a6bc5215a),\n/* harmony export */   __wbg_set_fe4e79d1ed3b0e9b: () => (/* reexport safe */ _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.__wbg_set_fe4e79d1ed3b0e9b),\n/* harmony export */   __wbg_set_wasm: () => (/* reexport safe */ _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.__wbg_set_wasm),\n/* harmony export */   __wbg_static_accessor_GLOBAL_487c52c58d65314d: () => (/* reexport safe */ _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.__wbg_static_accessor_GLOBAL_487c52c58d65314d),\n/* harmony export */   __wbg_static_accessor_GLOBAL_THIS_ee9704f328b6b291: () => (/* reexport safe */ _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.__wbg_static_accessor_GLOBAL_THIS_ee9704f328b6b291),\n/* harmony export */   __wbg_static_accessor_SELF_78c9e3071b912620: () => (/* reexport safe */ _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.__wbg_static_accessor_SELF_78c9e3071b912620),\n/* harmony export */   __wbg_static_accessor_WINDOW_a093d21393777366: () => (/* reexport safe */ _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.__wbg_static_accessor_WINDOW_a093d21393777366),\n/* harmony export */   __wbg_subarray_dd4ade7d53bd8e26: () => (/* reexport safe */ _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.__wbg_subarray_dd4ade7d53bd8e26),\n/* harmony export */   __wbg_versions_c01dfd4722a88165: () => (/* reexport safe */ _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.__wbg_versions_c01dfd4722a88165),\n/* harmony export */   __wbindgen_init_externref_table: () => (/* reexport safe */ _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.__wbindgen_init_externref_table),\n/* harmony export */   __wbindgen_is_function: () => (/* reexport safe */ _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.__wbindgen_is_function),\n/* harmony export */   __wbindgen_is_object: () => (/* reexport safe */ _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.__wbindgen_is_object),\n/* harmony export */   __wbindgen_is_string: () => (/* reexport safe */ _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.__wbindgen_is_string),\n/* harmony export */   __wbindgen_is_undefined: () => (/* reexport safe */ _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.__wbindgen_is_undefined),\n/* harmony export */   __wbindgen_memory: () => (/* reexport safe */ _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.__wbindgen_memory),\n/* harmony export */   __wbindgen_string_new: () => (/* reexport safe */ _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.__wbindgen_string_new),\n/* harmony export */   __wbindgen_throw: () => (/* reexport safe */ _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.__wbindgen_throw)\n/* harmony export */ });\n/* harmony import */ var _lib_simulation_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib_simulation_wasm_bg.wasm */ \"../libs/simulation-wasm/pkg/lib_simulation_wasm_bg.wasm\");\n/* harmony import */ var _lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib_simulation_wasm_bg.js */ \"../libs/simulation-wasm/pkg/lib_simulation_wasm_bg.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_simulation_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__]);\nvar __webpack_async_dependencies_result__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n_lib_simulation_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_async_dependencies_result__[0];\n\n\n\n(0,_lib_simulation_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.__wbg_set_wasm)(_lib_simulation_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__);\n_lib_simulation_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_start();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://web/../libs/simulation-wasm/pkg/lib_simulation_wasm.js?\n}");

/***/ }),

/***/ "../libs/simulation-wasm/pkg/lib_simulation_wasm_bg.js":
/*!*************************************************************!*\
  !*** ../libs/simulation-wasm/pkg/lib_simulation_wasm_bg.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AnimalWasm: () => (/* binding */ AnimalWasm),\n/* harmony export */   FoodWasm: () => (/* binding */ FoodWasm),\n/* harmony export */   SimulationWasm: () => (/* binding */ SimulationWasm),\n/* harmony export */   WorldWasm: () => (/* binding */ WorldWasm),\n/* harmony export */   __wbg_animalwasm_new: () => (/* binding */ __wbg_animalwasm_new),\n/* harmony export */   __wbg_animalwasm_unwrap: () => (/* binding */ __wbg_animalwasm_unwrap),\n/* harmony export */   __wbg_buffer_a1a27a0dfa70165d: () => (/* binding */ __wbg_buffer_a1a27a0dfa70165d),\n/* harmony export */   __wbg_call_f2db6205e5c51dc8: () => (/* binding */ __wbg_call_f2db6205e5c51dc8),\n/* harmony export */   __wbg_call_fbe8be8bf6436ce5: () => (/* binding */ __wbg_call_fbe8be8bf6436ce5),\n/* harmony export */   __wbg_crypto_574e78ad8b13b65f: () => (/* binding */ __wbg_crypto_574e78ad8b13b65f),\n/* harmony export */   __wbg_foodwasm_new: () => (/* binding */ __wbg_foodwasm_new),\n/* harmony export */   __wbg_foodwasm_unwrap: () => (/* binding */ __wbg_foodwasm_unwrap),\n/* harmony export */   __wbg_getRandomValues_b8f5dbd5f3995a9e: () => (/* binding */ __wbg_getRandomValues_b8f5dbd5f3995a9e),\n/* harmony export */   __wbg_msCrypto_a61aeb35a24c1329: () => (/* binding */ __wbg_msCrypto_a61aeb35a24c1329),\n/* harmony export */   __wbg_new_e52b3efaaa774f96: () => (/* binding */ __wbg_new_e52b3efaaa774f96),\n/* harmony export */   __wbg_newnoargs_ff528e72d35de39a: () => (/* binding */ __wbg_newnoargs_ff528e72d35de39a),\n/* harmony export */   __wbg_newwithbyteoffsetandlength_3b01ecda099177e8: () => (/* binding */ __wbg_newwithbyteoffsetandlength_3b01ecda099177e8),\n/* harmony export */   __wbg_newwithlength_08f872dc1e3ada2e: () => (/* binding */ __wbg_newwithlength_08f872dc1e3ada2e),\n/* harmony export */   __wbg_node_905d3e251edff8a2: () => (/* binding */ __wbg_node_905d3e251edff8a2),\n/* harmony export */   __wbg_process_dc0fbacc7c1c06f7: () => (/* binding */ __wbg_process_dc0fbacc7c1c06f7),\n/* harmony export */   __wbg_randomFillSync_ac0988aba3254290: () => (/* binding */ __wbg_randomFillSync_ac0988aba3254290),\n/* harmony export */   __wbg_require_60cc747a6bc5215a: () => (/* binding */ __wbg_require_60cc747a6bc5215a),\n/* harmony export */   __wbg_set_fe4e79d1ed3b0e9b: () => (/* binding */ __wbg_set_fe4e79d1ed3b0e9b),\n/* harmony export */   __wbg_set_wasm: () => (/* binding */ __wbg_set_wasm),\n/* harmony export */   __wbg_static_accessor_GLOBAL_487c52c58d65314d: () => (/* binding */ __wbg_static_accessor_GLOBAL_487c52c58d65314d),\n/* harmony export */   __wbg_static_accessor_GLOBAL_THIS_ee9704f328b6b291: () => (/* binding */ __wbg_static_accessor_GLOBAL_THIS_ee9704f328b6b291),\n/* harmony export */   __wbg_static_accessor_SELF_78c9e3071b912620: () => (/* binding */ __wbg_static_accessor_SELF_78c9e3071b912620),\n/* harmony export */   __wbg_static_accessor_WINDOW_a093d21393777366: () => (/* binding */ __wbg_static_accessor_WINDOW_a093d21393777366),\n/* harmony export */   __wbg_subarray_dd4ade7d53bd8e26: () => (/* binding */ __wbg_subarray_dd4ade7d53bd8e26),\n/* harmony export */   __wbg_versions_c01dfd4722a88165: () => (/* binding */ __wbg_versions_c01dfd4722a88165),\n/* harmony export */   __wbindgen_init_externref_table: () => (/* binding */ __wbindgen_init_externref_table),\n/* harmony export */   __wbindgen_is_function: () => (/* binding */ __wbindgen_is_function),\n/* harmony export */   __wbindgen_is_object: () => (/* binding */ __wbindgen_is_object),\n/* harmony export */   __wbindgen_is_string: () => (/* binding */ __wbindgen_is_string),\n/* harmony export */   __wbindgen_is_undefined: () => (/* binding */ __wbindgen_is_undefined),\n/* harmony export */   __wbindgen_memory: () => (/* binding */ __wbindgen_memory),\n/* harmony export */   __wbindgen_string_new: () => (/* binding */ __wbindgen_string_new),\n/* harmony export */   __wbindgen_throw: () => (/* binding */ __wbindgen_throw)\n/* harmony export */ });\nlet wasm;\nfunction __wbg_set_wasm(val) {\n    wasm = val;\n}\n\n\nfunction addToExternrefTable0(obj) {\n    const idx = wasm.__externref_table_alloc();\n    wasm.__wbindgen_export_2.set(idx, obj);\n    return idx;\n}\n\nfunction handleError(f, args) {\n    try {\n        return f.apply(this, args);\n    } catch (e) {\n        const idx = addToExternrefTable0(e);\n        wasm.__wbindgen_exn_store(idx);\n    }\n}\n\nlet cachedUint8ArrayMemory0 = null;\n\nfunction getUint8ArrayMemory0() {\n    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {\n        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);\n    }\n    return cachedUint8ArrayMemory0;\n}\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nconst MAX_SAFARI_DECODE_BYTES = 2146435072;\nlet numBytesDecoded = 0;\nfunction decodeText(ptr, len) {\n    numBytesDecoded += len;\n    if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {\n        cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n        cachedTextDecoder.decode();\n        numBytesDecoded = len;\n    }\n    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    ptr = ptr >>> 0;\n    return decodeText(ptr, len);\n}\n\nfunction isLikeNone(x) {\n    return x === undefined || x === null;\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nconst cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length, 1) >>> 0;\n        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len, 1) >>> 0;\n\n    const mem = getUint8ArrayMemory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;\n        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n        ptr = realloc(ptr, len, offset, 1) >>> 0;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n\nlet cachedDataViewMemory0 = null;\n\nfunction getDataViewMemory0() {\n    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {\n        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);\n    }\n    return cachedDataViewMemory0;\n}\n\nfunction getArrayJsValueFromWasm0(ptr, len) {\n    ptr = ptr >>> 0;\n    const mem = getDataViewMemory0();\n    const result = [];\n    for (let i = ptr; i < ptr + 4 * len; i += 4) {\n        result.push(wasm.__wbindgen_export_2.get(mem.getUint32(i, true)));\n    }\n    wasm.__externref_drop_slice(ptr, len);\n    return result;\n}\n\nfunction passArrayJsValueToWasm0(array, malloc) {\n    const ptr = malloc(array.length * 4, 4) >>> 0;\n    for (let i = 0; i < array.length; i++) {\n        const add = addToExternrefTable0(array[i]);\n        getDataViewMemory0().setUint32(ptr + 4 * i, add, true);\n    }\n    WASM_VECTOR_LEN = array.length;\n    return ptr;\n}\n\nconst AnimalWasmFinalization = (typeof FinalizationRegistry === 'undefined')\n    ? { register: () => {}, unregister: () => {} }\n    : new FinalizationRegistry(ptr => wasm.__wbg_animalwasm_free(ptr >>> 0, 1));\n\nclass AnimalWasm {\n\n    static __wrap(ptr) {\n        ptr = ptr >>> 0;\n        const obj = Object.create(AnimalWasm.prototype);\n        obj.__wbg_ptr = ptr;\n        AnimalWasmFinalization.register(obj, obj.__wbg_ptr, obj);\n        return obj;\n    }\n\n    static __unwrap(jsValue) {\n        if (!(jsValue instanceof AnimalWasm)) {\n            return 0;\n        }\n        return jsValue.__destroy_into_raw();\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.__wbg_ptr;\n        this.__wbg_ptr = 0;\n        AnimalWasmFinalization.unregister(this);\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_animalwasm_free(ptr, 0);\n    }\n    /**\n     * @returns {number}\n     */\n    get x() {\n        const ret = wasm.__wbg_get_animalwasm_x(this.__wbg_ptr);\n        return ret;\n    }\n    /**\n     * @param {number} arg0\n     */\n    set x(arg0) {\n        wasm.__wbg_set_animalwasm_x(this.__wbg_ptr, arg0);\n    }\n    /**\n     * @returns {number}\n     */\n    get y() {\n        const ret = wasm.__wbg_get_animalwasm_y(this.__wbg_ptr);\n        return ret;\n    }\n    /**\n     * @param {number} arg0\n     */\n    set y(arg0) {\n        wasm.__wbg_set_animalwasm_y(this.__wbg_ptr, arg0);\n    }\n    /**\n     * @returns {number}\n     */\n    get angle() {\n        const ret = wasm.__wbg_get_animalwasm_angle(this.__wbg_ptr);\n        return ret;\n    }\n    /**\n     * @param {number} arg0\n     */\n    set angle(arg0) {\n        wasm.__wbg_set_animalwasm_angle(this.__wbg_ptr, arg0);\n    }\n}\n\nconst FoodWasmFinalization = (typeof FinalizationRegistry === 'undefined')\n    ? { register: () => {}, unregister: () => {} }\n    : new FinalizationRegistry(ptr => wasm.__wbg_foodwasm_free(ptr >>> 0, 1));\n\nclass FoodWasm {\n\n    static __wrap(ptr) {\n        ptr = ptr >>> 0;\n        const obj = Object.create(FoodWasm.prototype);\n        obj.__wbg_ptr = ptr;\n        FoodWasmFinalization.register(obj, obj.__wbg_ptr, obj);\n        return obj;\n    }\n\n    static __unwrap(jsValue) {\n        if (!(jsValue instanceof FoodWasm)) {\n            return 0;\n        }\n        return jsValue.__destroy_into_raw();\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.__wbg_ptr;\n        this.__wbg_ptr = 0;\n        FoodWasmFinalization.unregister(this);\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_foodwasm_free(ptr, 0);\n    }\n    /**\n     * @returns {number}\n     */\n    get x() {\n        const ret = wasm.__wbg_get_animalwasm_x(this.__wbg_ptr);\n        return ret;\n    }\n    /**\n     * @param {number} arg0\n     */\n    set x(arg0) {\n        wasm.__wbg_set_animalwasm_x(this.__wbg_ptr, arg0);\n    }\n    /**\n     * @returns {number}\n     */\n    get y() {\n        const ret = wasm.__wbg_get_animalwasm_y(this.__wbg_ptr);\n        return ret;\n    }\n    /**\n     * @param {number} arg0\n     */\n    set y(arg0) {\n        wasm.__wbg_set_animalwasm_y(this.__wbg_ptr, arg0);\n    }\n}\n\nconst SimulationWasmFinalization = (typeof FinalizationRegistry === 'undefined')\n    ? { register: () => {}, unregister: () => {} }\n    : new FinalizationRegistry(ptr => wasm.__wbg_simulationwasm_free(ptr >>> 0, 1));\n\nclass SimulationWasm {\n\n    __destroy_into_raw() {\n        const ptr = this.__wbg_ptr;\n        this.__wbg_ptr = 0;\n        SimulationWasmFinalization.unregister(this);\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_simulationwasm_free(ptr, 0);\n    }\n    /**\n     * @param {string} config_contents\n     */\n    constructor(config_contents) {\n        const ptr0 = passStringToWasm0(config_contents, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);\n        const len0 = WASM_VECTOR_LEN;\n        const ret = wasm.simulationwasm_new(ptr0, len0);\n        this.__wbg_ptr = ret >>> 0;\n        SimulationWasmFinalization.register(this, this.__wbg_ptr, this);\n        return this;\n    }\n    /**\n     * @returns {WorldWasm}\n     */\n    world() {\n        const ret = wasm.simulationwasm_world(this.__wbg_ptr);\n        return WorldWasm.__wrap(ret);\n    }\n    step() {\n        wasm.simulationwasm_step(this.__wbg_ptr);\n    }\n    /**\n     * @returns {string}\n     */\n    fast_forward() {\n        let deferred1_0;\n        let deferred1_1;\n        try {\n            const ret = wasm.simulationwasm_fast_forward(this.__wbg_ptr);\n            deferred1_0 = ret[0];\n            deferred1_1 = ret[1];\n            return getStringFromWasm0(ret[0], ret[1]);\n        } finally {\n            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);\n        }\n    }\n}\n\nconst WorldWasmFinalization = (typeof FinalizationRegistry === 'undefined')\n    ? { register: () => {}, unregister: () => {} }\n    : new FinalizationRegistry(ptr => wasm.__wbg_worldwasm_free(ptr >>> 0, 1));\n\nclass WorldWasm {\n\n    static __wrap(ptr) {\n        ptr = ptr >>> 0;\n        const obj = Object.create(WorldWasm.prototype);\n        obj.__wbg_ptr = ptr;\n        WorldWasmFinalization.register(obj, obj.__wbg_ptr, obj);\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.__wbg_ptr;\n        this.__wbg_ptr = 0;\n        WorldWasmFinalization.unregister(this);\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_worldwasm_free(ptr, 0);\n    }\n    /**\n     * @returns {AnimalWasm[]}\n     */\n    get animals() {\n        const ret = wasm.__wbg_get_worldwasm_animals(this.__wbg_ptr);\n        var v1 = getArrayJsValueFromWasm0(ret[0], ret[1]).slice();\n        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);\n        return v1;\n    }\n    /**\n     * @param {AnimalWasm[]} arg0\n     */\n    set animals(arg0) {\n        const ptr0 = passArrayJsValueToWasm0(arg0, wasm.__wbindgen_malloc);\n        const len0 = WASM_VECTOR_LEN;\n        wasm.__wbg_set_worldwasm_animals(this.__wbg_ptr, ptr0, len0);\n    }\n    /**\n     * @returns {FoodWasm[]}\n     */\n    get foods() {\n        const ret = wasm.__wbg_get_worldwasm_foods(this.__wbg_ptr);\n        var v1 = getArrayJsValueFromWasm0(ret[0], ret[1]).slice();\n        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);\n        return v1;\n    }\n    /**\n     * @param {FoodWasm[]} arg0\n     */\n    set foods(arg0) {\n        const ptr0 = passArrayJsValueToWasm0(arg0, wasm.__wbindgen_malloc);\n        const len0 = WASM_VECTOR_LEN;\n        wasm.__wbg_set_worldwasm_foods(this.__wbg_ptr, ptr0, len0);\n    }\n}\n\nfunction __wbg_animalwasm_new(arg0) {\n    const ret = AnimalWasm.__wrap(arg0);\n    return ret;\n};\n\nfunction __wbg_animalwasm_unwrap(arg0) {\n    const ret = AnimalWasm.__unwrap(arg0);\n    return ret;\n};\n\nfunction __wbg_buffer_a1a27a0dfa70165d(arg0) {\n    const ret = arg0.buffer;\n    return ret;\n};\n\nfunction __wbg_call_f2db6205e5c51dc8() { return handleError(function (arg0, arg1, arg2) {\n    const ret = arg0.call(arg1, arg2);\n    return ret;\n}, arguments) };\n\nfunction __wbg_call_fbe8be8bf6436ce5() { return handleError(function (arg0, arg1) {\n    const ret = arg0.call(arg1);\n    return ret;\n}, arguments) };\n\nfunction __wbg_crypto_574e78ad8b13b65f(arg0) {\n    const ret = arg0.crypto;\n    return ret;\n};\n\nfunction __wbg_foodwasm_new(arg0) {\n    const ret = FoodWasm.__wrap(arg0);\n    return ret;\n};\n\nfunction __wbg_foodwasm_unwrap(arg0) {\n    const ret = FoodWasm.__unwrap(arg0);\n    return ret;\n};\n\nfunction __wbg_getRandomValues_b8f5dbd5f3995a9e() { return handleError(function (arg0, arg1) {\n    arg0.getRandomValues(arg1);\n}, arguments) };\n\nfunction __wbg_msCrypto_a61aeb35a24c1329(arg0) {\n    const ret = arg0.msCrypto;\n    return ret;\n};\n\nfunction __wbg_new_e52b3efaaa774f96(arg0) {\n    const ret = new Uint8Array(arg0);\n    return ret;\n};\n\nfunction __wbg_newnoargs_ff528e72d35de39a(arg0, arg1) {\n    const ret = new Function(getStringFromWasm0(arg0, arg1));\n    return ret;\n};\n\nfunction __wbg_newwithbyteoffsetandlength_3b01ecda099177e8(arg0, arg1, arg2) {\n    const ret = new Uint8Array(arg0, arg1 >>> 0, arg2 >>> 0);\n    return ret;\n};\n\nfunction __wbg_newwithlength_08f872dc1e3ada2e(arg0) {\n    const ret = new Uint8Array(arg0 >>> 0);\n    return ret;\n};\n\nfunction __wbg_node_905d3e251edff8a2(arg0) {\n    const ret = arg0.node;\n    return ret;\n};\n\nfunction __wbg_process_dc0fbacc7c1c06f7(arg0) {\n    const ret = arg0.process;\n    return ret;\n};\n\nfunction __wbg_randomFillSync_ac0988aba3254290() { return handleError(function (arg0, arg1) {\n    arg0.randomFillSync(arg1);\n}, arguments) };\n\nfunction __wbg_require_60cc747a6bc5215a() { return handleError(function () {\n    const ret = module.require;\n    return ret;\n}, arguments) };\n\nfunction __wbg_set_fe4e79d1ed3b0e9b(arg0, arg1, arg2) {\n    arg0.set(arg1, arg2 >>> 0);\n};\n\nfunction __wbg_static_accessor_GLOBAL_487c52c58d65314d() {\n    const ret = typeof global === 'undefined' ? null : global;\n    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);\n};\n\nfunction __wbg_static_accessor_GLOBAL_THIS_ee9704f328b6b291() {\n    const ret = typeof globalThis === 'undefined' ? null : globalThis;\n    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);\n};\n\nfunction __wbg_static_accessor_SELF_78c9e3071b912620() {\n    const ret = typeof self === 'undefined' ? null : self;\n    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);\n};\n\nfunction __wbg_static_accessor_WINDOW_a093d21393777366() {\n    const ret = typeof window === 'undefined' ? null : window;\n    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);\n};\n\nfunction __wbg_subarray_dd4ade7d53bd8e26(arg0, arg1, arg2) {\n    const ret = arg0.subarray(arg1 >>> 0, arg2 >>> 0);\n    return ret;\n};\n\nfunction __wbg_versions_c01dfd4722a88165(arg0) {\n    const ret = arg0.versions;\n    return ret;\n};\n\nfunction __wbindgen_init_externref_table() {\n    const table = wasm.__wbindgen_export_2;\n    const offset = table.grow(4);\n    table.set(0, undefined);\n    table.set(offset + 0, undefined);\n    table.set(offset + 1, null);\n    table.set(offset + 2, true);\n    table.set(offset + 3, false);\n    ;\n};\n\nfunction __wbindgen_is_function(arg0) {\n    const ret = typeof(arg0) === 'function';\n    return ret;\n};\n\nfunction __wbindgen_is_object(arg0) {\n    const val = arg0;\n    const ret = typeof(val) === 'object' && val !== null;\n    return ret;\n};\n\nfunction __wbindgen_is_string(arg0) {\n    const ret = typeof(arg0) === 'string';\n    return ret;\n};\n\nfunction __wbindgen_is_undefined(arg0) {\n    const ret = arg0 === undefined;\n    return ret;\n};\n\nfunction __wbindgen_memory() {\n    const ret = wasm.memory;\n    return ret;\n};\n\nfunction __wbindgen_string_new(arg0, arg1) {\n    const ret = getStringFromWasm0(arg0, arg1);\n    return ret;\n};\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n\n//# sourceURL=webpack://web/../libs/simulation-wasm/pkg/lib_simulation_wasm_bg.js?\n}");

/***/ }),

/***/ "../libs/simulation-wasm/pkg/lib_simulation_wasm_bg.wasm":
/*!***************************************************************!*\
  !*** ../libs/simulation-wasm/pkg/lib_simulation_wasm_bg.wasm ***!
  \***************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("{/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(/*! ./lib_simulation_wasm_bg.js */ \"../libs/simulation-wasm/pkg/lib_simulation_wasm_bg.js\");\nmodule.exports = __webpack_require__.v(exports, module.id, \"e193a1fb5532b0c66eb3\", {\n\t\"./lib_simulation_wasm_bg.js\": {\n\t\t\"__wbg_animalwasm_unwrap\": WEBPACK_IMPORTED_MODULE_0.__wbg_animalwasm_unwrap,\n\t\t\"__wbg_foodwasm_unwrap\": WEBPACK_IMPORTED_MODULE_0.__wbg_foodwasm_unwrap,\n\t\t\"__wbg_foodwasm_new\": WEBPACK_IMPORTED_MODULE_0.__wbg_foodwasm_new,\n\t\t\"__wbg_animalwasm_new\": WEBPACK_IMPORTED_MODULE_0.__wbg_animalwasm_new,\n\t\t\"__wbg_crypto_574e78ad8b13b65f\": WEBPACK_IMPORTED_MODULE_0.__wbg_crypto_574e78ad8b13b65f,\n\t\t\"__wbindgen_is_object\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_is_object,\n\t\t\"__wbg_process_dc0fbacc7c1c06f7\": WEBPACK_IMPORTED_MODULE_0.__wbg_process_dc0fbacc7c1c06f7,\n\t\t\"__wbg_versions_c01dfd4722a88165\": WEBPACK_IMPORTED_MODULE_0.__wbg_versions_c01dfd4722a88165,\n\t\t\"__wbg_node_905d3e251edff8a2\": WEBPACK_IMPORTED_MODULE_0.__wbg_node_905d3e251edff8a2,\n\t\t\"__wbindgen_is_string\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_is_string,\n\t\t\"__wbg_require_60cc747a6bc5215a\": WEBPACK_IMPORTED_MODULE_0.__wbg_require_60cc747a6bc5215a,\n\t\t\"__wbindgen_is_function\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_is_function,\n\t\t\"__wbindgen_string_new\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_string_new,\n\t\t\"__wbg_msCrypto_a61aeb35a24c1329\": WEBPACK_IMPORTED_MODULE_0.__wbg_msCrypto_a61aeb35a24c1329,\n\t\t\"__wbg_randomFillSync_ac0988aba3254290\": WEBPACK_IMPORTED_MODULE_0.__wbg_randomFillSync_ac0988aba3254290,\n\t\t\"__wbg_getRandomValues_b8f5dbd5f3995a9e\": WEBPACK_IMPORTED_MODULE_0.__wbg_getRandomValues_b8f5dbd5f3995a9e,\n\t\t\"__wbg_newnoargs_ff528e72d35de39a\": WEBPACK_IMPORTED_MODULE_0.__wbg_newnoargs_ff528e72d35de39a,\n\t\t\"__wbg_call_fbe8be8bf6436ce5\": WEBPACK_IMPORTED_MODULE_0.__wbg_call_fbe8be8bf6436ce5,\n\t\t\"__wbindgen_is_undefined\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_is_undefined,\n\t\t\"__wbg_call_f2db6205e5c51dc8\": WEBPACK_IMPORTED_MODULE_0.__wbg_call_f2db6205e5c51dc8,\n\t\t\"__wbg_static_accessor_GLOBAL_THIS_ee9704f328b6b291\": WEBPACK_IMPORTED_MODULE_0.__wbg_static_accessor_GLOBAL_THIS_ee9704f328b6b291,\n\t\t\"__wbg_static_accessor_SELF_78c9e3071b912620\": WEBPACK_IMPORTED_MODULE_0.__wbg_static_accessor_SELF_78c9e3071b912620,\n\t\t\"__wbg_static_accessor_WINDOW_a093d21393777366\": WEBPACK_IMPORTED_MODULE_0.__wbg_static_accessor_WINDOW_a093d21393777366,\n\t\t\"__wbg_static_accessor_GLOBAL_487c52c58d65314d\": WEBPACK_IMPORTED_MODULE_0.__wbg_static_accessor_GLOBAL_487c52c58d65314d,\n\t\t\"__wbg_buffer_a1a27a0dfa70165d\": WEBPACK_IMPORTED_MODULE_0.__wbg_buffer_a1a27a0dfa70165d,\n\t\t\"__wbg_newwithbyteoffsetandlength_3b01ecda099177e8\": WEBPACK_IMPORTED_MODULE_0.__wbg_newwithbyteoffsetandlength_3b01ecda099177e8,\n\t\t\"__wbg_new_e52b3efaaa774f96\": WEBPACK_IMPORTED_MODULE_0.__wbg_new_e52b3efaaa774f96,\n\t\t\"__wbg_set_fe4e79d1ed3b0e9b\": WEBPACK_IMPORTED_MODULE_0.__wbg_set_fe4e79d1ed3b0e9b,\n\t\t\"__wbg_newwithlength_08f872dc1e3ada2e\": WEBPACK_IMPORTED_MODULE_0.__wbg_newwithlength_08f872dc1e3ada2e,\n\t\t\"__wbg_subarray_dd4ade7d53bd8e26\": WEBPACK_IMPORTED_MODULE_0.__wbg_subarray_dd4ade7d53bd8e26,\n\t\t\"__wbindgen_throw\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_throw,\n\t\t\"__wbindgen_memory\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_memory,\n\t\t\"__wbindgen_init_externref_table\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_init_externref_table\n\t}\n});\n\n//# sourceURL=webpack://web/../libs/simulation-wasm/pkg/lib_simulation_wasm_bg.wasm?\n}");

/***/ }),

/***/ "./src/config.toml":
/*!*************************!*\
  !*** ./src/config.toml ***!
  \*************************/
/***/ ((module) => {

eval("{module.exports = \"[simulation]\\nmax_generation = 3000\\n\\n[world]\\nnum_foods = 1\\n\\n[eye]\\nfov_range = 100\\n\\n\\n\\n\\n\";\n\n//# sourceURL=webpack://web/./src/config.toml?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lib_simulation_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lib-simulation-wasm */ \"../libs/simulation-wasm/pkg/lib_simulation_wasm.js\");\n/* harmony import */ var _config_toml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.toml */ \"./src/config.toml\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_simulation_wasm__WEBPACK_IMPORTED_MODULE_0__]);\nvar __webpack_async_dependencies_result__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\nlib_simulation_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_async_dependencies_result__[0];\n\n\n\n// ctxt parameter has to implement the drawTriangle() function beforehand.\nfunction main() {\n    const simulation = new lib_simulation_wasm__WEBPACK_IMPORTED_MODULE_0__.SimulationWasm(_config_toml__WEBPACK_IMPORTED_MODULE_1__);\n\n    document.getElementById(\"train\").onclick = function() {\n        var output = document.getElementById(\"output\");\n        output.value += simulation.fast_forward() + \"\\n\";\n    };\n\n    const viewport = document.getElementById(\"viewport\");\n    const viewportScale = window.devicePixelRatio || 1;\n\n    // Scaling-up canvas buffer to match our physical pixel ratio.\n    viewport.width = viewport.width * viewportScale;\n    viewport.height = viewport.height * viewportScale;\n\n    // Matching the canvas buffer with canvas element pixels which are internally\n    // scaled up by the browser, but doesn't affect the buffer size.\n    viewport.style.width = viewport.width + \"px\";\n    viewport.style.height = viewport.height + \"px\";\n\n    const ctxt = viewport.getContext(\"2d\");\n\n    CanvasRenderingContext2D.prototype.drawTriangle = function(\n        x,\n        y,\n        size,\n        rotation,\n        extrude,\n    ) {\n        this.beginPath();\n        this.moveTo(\n            x - Math.sin(rotation) * size * extrude,\n            y + Math.cos(rotation) * size * extrude,\n        );\n        this.lineTo(\n            x - Math.sin(rotation + (2.0 / 3.0) * Math.PI) * size,\n            y + Math.cos(rotation + (2.0 / 3.0) * Math.PI) * size,\n        );\n        this.lineTo(\n            x - Math.sin(rotation + (4.0 / 3.0) * Math.PI) * size,\n            y + Math.cos(rotation + (4.0 / 3.0) * Math.PI) * size,\n        );\n        this.lineTo(\n            x - Math.sin(rotation) * size * extrude,\n            y + Math.cos(rotation) * size * extrude,\n        );\n\n        this.fillStyle = \"#d3d3ed\";\n        this.fill();\n    };\n\n    CanvasRenderingContext2D.prototype.drawCircle = function(x, y, radius) {\n        this.beginPath();\n        this.arc(x, y, radius, 0, 2.0 * Math.PI);\n        this.fillStyle = \"#6c36f5\";\n        this.fill();\n    };\n\n    // All operation with canvas context are scaled\n    ctxt.scale(viewportScale, viewportScale);\n\n    function redraw() {\n        ctxt.clearRect(0, 0, viewport.width, viewport.height);\n\n        simulation.step();\n\n        const world = simulation.world();\n\n        for (const food of world.foods) {\n            ctxt.drawCircle(\n                food.x * viewport.width,\n                food.y * viewport.height,\n                viewport.width * (1.0 / 200.0),\n            );\n        }\n\n        for (const animal of world.animals) {\n            ctxt.drawTriangle(\n                animal.x * viewport.width,\n                animal.y * viewport.height,\n                viewport.width * 0.01,\n                animal.angle,\n                1.5,\n            );\n        }\n\n        // To prevent blocking code in creating hanging tabs in our web\n        // browser, this function schedules our animation.\n        requestAnimationFrame(redraw);\n    }\n\n    redraw();\n}\n\nmain();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://web/./src/index.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var hasSymbol = typeof Symbol === "function";
/******/ 		var webpackQueues = hasSymbol ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = hasSymbol ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = hasSymbol ? Symbol("webpack error") : "__webpack_error__";
/******/ 		
/******/ 		
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 		
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 		
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			var handle = (deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 		
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}
/******/ 			var done = (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue))
/******/ 			body(handle, done);
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/wasm loading */
/******/ 	(() => {
/******/ 		__webpack_require__.v = (exports, wasmModuleId, wasmModuleHash, importsObj) => {
/******/ 		
/******/ 			var req = fetch(__webpack_require__.p + "" + wasmModuleHash + ".module.wasm");
/******/ 			var fallback = () => (req
/******/ 				.then((x) => (x.arrayBuffer()))
/******/ 				.then((bytes) => (WebAssembly.instantiate(bytes, importsObj)))
/******/ 				.then((res) => (Object.assign(exports, res.instance.exports))));
/******/ 			return req.then((res) => {
/******/ 				if (typeof WebAssembly.instantiateStreaming === "function") {
/******/ 		
/******/ 					return WebAssembly.instantiateStreaming(res, importsObj)
/******/ 						.then(
/******/ 							(res) => (Object.assign(exports, res.instance.exports)),
/******/ 							(e) => {
/******/ 								if(res.headers.get("Content-Type") !== "application/wasm") {
/******/ 									console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
/******/ 									return fallback();
/******/ 								}
/******/ 								throw e;
/******/ 							}
/******/ 						);
/******/ 				}
/******/ 				return fallback();
/******/ 			});
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;