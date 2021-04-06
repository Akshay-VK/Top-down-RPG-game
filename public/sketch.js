/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/GameObject.ts":
/*!***************************!*\
  !*** ./src/GameObject.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameObject\": () => (/* binding */ GameObject)\n/* harmony export */ });\n/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector */ \"./src/Vector.ts\");\n\r\nclass GameObject {\r\n    constructor(x, y, width, height, objecttype, color) {\r\n        this.position = new _Vector__WEBPACK_IMPORTED_MODULE_0__.Vector(x, y);\r\n        this.size = new _Vector__WEBPACK_IMPORTED_MODULE_0__.Vector(width, height);\r\n        this.objecttype = objecttype;\r\n        this.color = color;\r\n    }\r\n    tick(handler) {\r\n    }\r\n    keyboardTick(e) {\r\n    }\r\n    render(ctx, cam) {\r\n    }\r\n    getObjectType() {\r\n        return this.objecttype;\r\n    }\r\n    getPosition() {\r\n        return this.position;\r\n    }\r\n    getSize() {\r\n        return this.size;\r\n    }\r\n    setPosition(pos) {\r\n        this.position.x = pos.x;\r\n        this.position.y = pos.y;\r\n    }\r\n    setSize(size) {\r\n        this.size.x = size.x;\r\n        this.size.y = size.y;\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtZG93bi1ycGctZ2FtZS8uL3NyYy9HYW1lT2JqZWN0LnRzP2MyNjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBa0M7QUFDM0I7QUFDUDtBQUNBLDRCQUE0QiwyQ0FBTTtBQUNsQyx3QkFBd0IsMkNBQU07QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3JjL0dhbWVPYmplY3QudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuL1ZlY3Rvcic7XHJcbmV4cG9ydCBjbGFzcyBHYW1lT2JqZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQsIG9iamVjdHR5cGUsIGNvbG9yKSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IG5ldyBWZWN0b3IoeCwgeSk7XHJcbiAgICAgICAgdGhpcy5zaXplID0gbmV3IFZlY3Rvcih3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLm9iamVjdHR5cGUgPSBvYmplY3R0eXBlO1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgIH1cclxuICAgIHRpY2soaGFuZGxlcikge1xyXG4gICAgfVxyXG4gICAga2V5Ym9hcmRUaWNrKGUpIHtcclxuICAgIH1cclxuICAgIHJlbmRlcihjdHgsIGNhbSkge1xyXG4gICAgfVxyXG4gICAgZ2V0T2JqZWN0VHlwZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vYmplY3R0eXBlO1xyXG4gICAgfVxyXG4gICAgZ2V0UG9zaXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb247XHJcbiAgICB9XHJcbiAgICBnZXRTaXplKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNpemU7XHJcbiAgICB9XHJcbiAgICBzZXRQb3NpdGlvbihwb3MpIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSBwb3MueDtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSBwb3MueTtcclxuICAgIH1cclxuICAgIHNldFNpemUoc2l6ZSkge1xyXG4gICAgICAgIHRoaXMuc2l6ZS54ID0gc2l6ZS54O1xyXG4gICAgICAgIHRoaXMuc2l6ZS55ID0gc2l6ZS55O1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/GameObject.ts\n");

/***/ }),

/***/ "./src/Game/Camera.ts":
/*!****************************!*\
  !*** ./src/Game/Camera.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Camera\": () => (/* binding */ Camera)\n/* harmony export */ });\n/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GameObject */ \"./src/GameObject.ts\");\n/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Vector */ \"./src/Vector.ts\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ \"./src/Game/types.ts\");\n\r\n\r\n\r\nclass Camera extends _GameObject__WEBPACK_IMPORTED_MODULE_0__.GameObject {\r\n    constructor(x, y, width, height) {\r\n        super(x, y, width, height, _types__WEBPACK_IMPORTED_MODULE_2__.objectType.Camera, 'black');\r\n    }\r\n    tick(handler) {\r\n        this.setPosition(new _Vector__WEBPACK_IMPORTED_MODULE_1__.Vector(handler.getPlayerPos().x, handler.getPlayerPos().y));\r\n        this.setPosition(new _Vector__WEBPACK_IMPORTED_MODULE_1__.Vector(this.position.x - (this.size.x / 2), this.position.y - (this.size.y / 2)));\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtZG93bi1ycGctZ2FtZS8uL3NyYy9HYW1lL0NhbWVyYS50cz9jYjk0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMkM7QUFDUjtBQUNFO0FBQzlCLHFCQUFxQixtREFBVTtBQUN0QztBQUNBLG1DQUFtQyxxREFBaUI7QUFDcEQ7QUFDQTtBQUNBLDZCQUE2QiwyQ0FBTTtBQUNuQyw2QkFBNkIsMkNBQU07QUFDbkM7QUFDQSIsImZpbGUiOiIuL3NyYy9HYW1lL0NhbWVyYS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwiLi4vR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tIFwiLi4vVmVjdG9yXCI7XHJcbmltcG9ydCB7IG9iamVjdFR5cGUgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5leHBvcnQgY2xhc3MgQ2FtZXJhIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgc3VwZXIoeCwgeSwgd2lkdGgsIGhlaWdodCwgb2JqZWN0VHlwZS5DYW1lcmEsICdibGFjaycpO1xyXG4gICAgfVxyXG4gICAgdGljayhoYW5kbGVyKSB7XHJcbiAgICAgICAgdGhpcy5zZXRQb3NpdGlvbihuZXcgVmVjdG9yKGhhbmRsZXIuZ2V0UGxheWVyUG9zKCkueCwgaGFuZGxlci5nZXRQbGF5ZXJQb3MoKS55KSk7XHJcbiAgICAgICAgdGhpcy5zZXRQb3NpdGlvbihuZXcgVmVjdG9yKHRoaXMucG9zaXRpb24ueCAtICh0aGlzLnNpemUueCAvIDIpLCB0aGlzLnBvc2l0aW9uLnkgLSAodGhpcy5zaXplLnkgLyAyKSkpO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Game/Camera.ts\n");

/***/ }),

/***/ "./src/Game/KeyInput.ts":
/*!******************************!*\
  !*** ./src/Game/KeyInput.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"KeyInput\": () => (/* binding */ KeyInput)\n/* harmony export */ });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ \"./src/Game/types.ts\");\n\r\nclass KeyInput {\r\n    constructor(handler) {\r\n        this.handler = handler;\r\n    }\r\n    tick() {\r\n    }\r\n    tickAct(e, handler) {\r\n        var asciiCode = (e.key) ? e.key : e.code;\r\n        for (let i = 0; i < handler.objects.length; i++) {\r\n            if (handler.objects[i].getObjectType() == _types__WEBPACK_IMPORTED_MODULE_0__.objectType.Player) {\r\n                handler.objects[i].keyboardTick(e);\r\n            }\r\n        }\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtZG93bi1ycGctZ2FtZS8uL3NyYy9HYW1lL0tleUlucHV0LnRzP2MxMzMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBcUM7QUFDOUI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw0QkFBNEI7QUFDbkQsc0RBQXNELHFEQUFpQjtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3JjL0dhbWUvS2V5SW5wdXQudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvYmplY3RUeXBlIH0gZnJvbSBcIi4vdHlwZXNcIjtcclxuZXhwb3J0IGNsYXNzIEtleUlucHV0IHtcclxuICAgIGNvbnN0cnVjdG9yKGhhbmRsZXIpIHtcclxuICAgICAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xyXG4gICAgfVxyXG4gICAgdGljaygpIHtcclxuICAgIH1cclxuICAgIHRpY2tBY3QoZSwgaGFuZGxlcikge1xyXG4gICAgICAgIHZhciBhc2NpaUNvZGUgPSAoZS5rZXkpID8gZS5rZXkgOiBlLmNvZGU7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoYW5kbGVyLm9iamVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZXIub2JqZWN0c1tpXS5nZXRPYmplY3RUeXBlKCkgPT0gb2JqZWN0VHlwZS5QbGF5ZXIpIHtcclxuICAgICAgICAgICAgICAgIGhhbmRsZXIub2JqZWN0c1tpXS5rZXlib2FyZFRpY2soZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Game/KeyInput.ts\n");

/***/ }),

/***/ "./src/Game/handler.ts":
/*!*****************************!*\
  !*** ./src/Game/handler.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Handler\": () => (/* binding */ Handler)\n/* harmony export */ });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ \"./src/Game/types.ts\");\n\r\nclass Handler {\r\n    constructor() {\r\n        this.objects = new Array();\r\n    }\r\n    tick() {\r\n        for (let i = 0; i < this.objects.length; i++) {\r\n            this.objects[i].tick();\r\n        }\r\n    }\r\n    render(ctx, cam) {\r\n        for (let i = 0; i < this.objects.length; i++) {\r\n            this.objects[i].render(ctx, cam);\r\n        }\r\n    }\r\n    getPlayerPos() {\r\n        for (let i = 0; i < this.objects.length; i++) {\r\n            if (this.objects[i].getObjectType() == _types__WEBPACK_IMPORTED_MODULE_0__.objectType.Player) {\r\n                return this.objects[i].getPosition();\r\n            }\r\n        }\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtZG93bi1ycGctZ2FtZS8uL3NyYy9HYW1lL2hhbmRsZXIudHM/OWYwNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFxQztBQUM5QjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHlCQUF5QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix5QkFBeUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIseUJBQXlCO0FBQ2hELG1EQUFtRCxxREFBaUI7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3NyYy9HYW1lL2hhbmRsZXIudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvYmplY3RUeXBlIH0gZnJvbSAnLi90eXBlcyc7XHJcbmV4cG9ydCBjbGFzcyBIYW5kbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMub2JqZWN0cyA9IG5ldyBBcnJheSgpO1xyXG4gICAgfVxyXG4gICAgdGljaygpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub2JqZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLm9iamVjdHNbaV0udGljaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbmRlcihjdHgsIGNhbSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5vYmplY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JqZWN0c1tpXS5yZW5kZXIoY3R4LCBjYW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldFBsYXllclBvcygpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub2JqZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vYmplY3RzW2ldLmdldE9iamVjdFR5cGUoKSA9PSBvYmplY3RUeXBlLlBsYXllcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMub2JqZWN0c1tpXS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Game/handler.ts\n");

/***/ }),

/***/ "./src/Game/types.ts":
/*!***************************!*\
  !*** ./src/Game/types.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"objectType\": () => (/* binding */ objectType)\n/* harmony export */ });\nvar objectType;\r\n(function (objectType) {\r\n    objectType[objectType[\"Player\"] = 0] = \"Player\";\r\n    objectType[objectType[\"Tile\"] = 1] = \"Tile\";\r\n    objectType[objectType[\"Camera\"] = 2] = \"Camera\";\r\n})(objectType || (objectType = {}));\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtZG93bi1ycGctZ2FtZS8uL3NyYy9HYW1lL3R5cGVzLnRzP2IzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGdDQUFnQyIsImZpbGUiOiIuL3NyYy9HYW1lL3R5cGVzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHZhciBvYmplY3RUeXBlO1xyXG4oZnVuY3Rpb24gKG9iamVjdFR5cGUpIHtcclxuICAgIG9iamVjdFR5cGVbb2JqZWN0VHlwZVtcIlBsYXllclwiXSA9IDBdID0gXCJQbGF5ZXJcIjtcclxuICAgIG9iamVjdFR5cGVbb2JqZWN0VHlwZVtcIlRpbGVcIl0gPSAxXSA9IFwiVGlsZVwiO1xyXG4gICAgb2JqZWN0VHlwZVtvYmplY3RUeXBlW1wiQ2FtZXJhXCJdID0gMl0gPSBcIkNhbWVyYVwiO1xyXG59KShvYmplY3RUeXBlIHx8IChvYmplY3RUeXBlID0ge30pKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Game/types.ts\n");

/***/ }),

/***/ "./src/Player/Player.ts":
/*!******************************!*\
  !*** ./src/Player/Player.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Vector */ \"./src/Vector.ts\");\n/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../GameObject */ \"./src/GameObject.ts\");\n\r\n\r\nclass Player extends _GameObject__WEBPACK_IMPORTED_MODULE_1__.GameObject {\r\n    //objType: objectType = objectType.Player;\r\n    constructor(x, y, width, height, objecttype) {\r\n        super(x, y, width, height, objecttype, 'white');\r\n        this.direction = new _Vector__WEBPACK_IMPORTED_MODULE_0__.Vector(0, 0);\r\n    }\r\n    /*\r\n    W = 22\r\n    A = 0\r\n    S = 18\r\n    D = 3\r\n    */\r\n    keyboardTick(e) {\r\n        var asciiCode = (e.key) ? e.key : e.code;\r\n        switch (asciiCode) {\r\n            case 'w':\r\n                this.setPosition(new _Vector__WEBPACK_IMPORTED_MODULE_0__.Vector(this.position.x, this.position.y - this.size.y));\r\n                break;\r\n            case 'a':\r\n                this.setPosition(new _Vector__WEBPACK_IMPORTED_MODULE_0__.Vector(this.position.x - this.size.x, this.position.y));\r\n                break;\r\n            case 's':\r\n                this.setPosition(new _Vector__WEBPACK_IMPORTED_MODULE_0__.Vector(this.position.x, this.position.y + this.size.y));\r\n                break;\r\n            case 'd':\r\n                this.setPosition(new _Vector__WEBPACK_IMPORTED_MODULE_0__.Vector(this.position.x + this.size.x, this.position.y));\r\n                break;\r\n        }\r\n    }\r\n    setDirection(newDir) {\r\n        this.direction.x = newDir.x;\r\n        this.direction.y = newDir.y;\r\n    }\r\n    tick() {\r\n        this.position.x += this.direction.x;\r\n        this.position.y += this.direction.y;\r\n    }\r\n    render(ctx, cam) {\r\n        ctx.fillStyle = 'white';\r\n        ctx.fillRect((this.position.x + 10) - cam.getPosition().x, (this.position.y + 10) - cam.getPosition().y, this.size.x - 20, this.size.y - 20);\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtZG93bi1ycGctZ2FtZS8uL3NyYy9QbGF5ZXIvUGxheWVyLnRzP2NhNTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW1DO0FBQ1E7QUFDcEMscUJBQXFCLG1EQUFVO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QiwyQ0FBTTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLDJDQUFNO0FBQzNDO0FBQ0E7QUFDQSxxQ0FBcUMsMkNBQU07QUFDM0M7QUFDQTtBQUNBLHFDQUFxQywyQ0FBTTtBQUMzQztBQUNBO0FBQ0EscUNBQXFDLDJDQUFNO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3JjL1BsYXllci9QbGF5ZXIudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuLi9WZWN0b3InO1xyXG5pbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSAnLi4vR2FtZU9iamVjdCc7XHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcclxuICAgIC8vb2JqVHlwZTogb2JqZWN0VHlwZSA9IG9iamVjdFR5cGUuUGxheWVyO1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCwgb2JqZWN0dHlwZSkge1xyXG4gICAgICAgIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQsIG9iamVjdHR5cGUsICd3aGl0ZScpO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gbmV3IFZlY3RvcigwLCAwKTtcclxuICAgIH1cclxuICAgIC8qXHJcbiAgICBXID0gMjJcclxuICAgIEEgPSAwXHJcbiAgICBTID0gMThcclxuICAgIEQgPSAzXHJcbiAgICAqL1xyXG4gICAga2V5Ym9hcmRUaWNrKGUpIHtcclxuICAgICAgICB2YXIgYXNjaWlDb2RlID0gKGUua2V5KSA/IGUua2V5IDogZS5jb2RlO1xyXG4gICAgICAgIHN3aXRjaCAoYXNjaWlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3cnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbihuZXcgVmVjdG9yKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55IC0gdGhpcy5zaXplLnkpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdhJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0UG9zaXRpb24obmV3IFZlY3Rvcih0aGlzLnBvc2l0aW9uLnggLSB0aGlzLnNpemUueCwgdGhpcy5wb3NpdGlvbi55KSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAncyc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9uKG5ldyBWZWN0b3IodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2QnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbihuZXcgVmVjdG9yKHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCB0aGlzLnBvc2l0aW9uLnkpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNldERpcmVjdGlvbihuZXdEaXIpIHtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbi54ID0gbmV3RGlyLng7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24ueSA9IG5ld0Rpci55O1xyXG4gICAgfVxyXG4gICAgdGljaygpIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy5kaXJlY3Rpb24ueDtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKz0gdGhpcy5kaXJlY3Rpb24ueTtcclxuICAgIH1cclxuICAgIHJlbmRlcihjdHgsIGNhbSkge1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xyXG4gICAgICAgIGN0eC5maWxsUmVjdCgodGhpcy5wb3NpdGlvbi54ICsgMTApIC0gY2FtLmdldFBvc2l0aW9uKCkueCwgKHRoaXMucG9zaXRpb24ueSArIDEwKSAtIGNhbS5nZXRQb3NpdGlvbigpLnksIHRoaXMuc2l6ZS54IC0gMjAsIHRoaXMuc2l6ZS55IC0gMjApO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Player/Player.ts\n");

/***/ }),

/***/ "./src/Tiles/Tile.ts":
/*!***************************!*\
  !*** ./src/Tiles/Tile.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Tile\": () => (/* binding */ Tile)\n/* harmony export */ });\n/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GameObject */ \"./src/GameObject.ts\");\n/* harmony import */ var _Game_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Game/types */ \"./src/Game/types.ts\");\n\r\n\r\nclass Tile extends _GameObject__WEBPACK_IMPORTED_MODULE_0__.GameObject {\r\n    constructor(x, y, width, height, color) {\r\n        super(x, y, width, height, _Game_types__WEBPACK_IMPORTED_MODULE_1__.objectType.Tile, color);\r\n        this.objecttype = _Game_types__WEBPACK_IMPORTED_MODULE_1__.objectType.Tile;\r\n    }\r\n    tick() {\r\n    }\r\n    render(ctx, cam) {\r\n        ctx.fillStyle = this.color;\r\n        ctx.fillRect(this.position.x - cam.getPosition().x, this.position.y - cam.getPosition().y, this.size.x, this.size.y);\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtZG93bi1ycGctZ2FtZS8uL3NyYy9UaWxlcy9UaWxlLnRzPzBmZGMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJDO0FBQ0E7QUFDcEMsbUJBQW1CLG1EQUFVO0FBQ3BDO0FBQ0EsbUNBQW1DLHdEQUFlO0FBQ2xELDBCQUEwQix3REFBZTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3JjL1RpbGVzL1RpbGUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSBcIi4uL0dhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgb2JqZWN0VHlwZSB9IGZyb20gXCIuLi9HYW1lL3R5cGVzXCI7XHJcbmV4cG9ydCBjbGFzcyBUaWxlIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2xvcikge1xyXG4gICAgICAgIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQsIG9iamVjdFR5cGUuVGlsZSwgY29sb3IpO1xyXG4gICAgICAgIHRoaXMub2JqZWN0dHlwZSA9IG9iamVjdFR5cGUuVGlsZTtcclxuICAgIH1cclxuICAgIHRpY2soKSB7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoY3R4LCBjYW0pIHtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcclxuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54IC0gY2FtLmdldFBvc2l0aW9uKCkueCwgdGhpcy5wb3NpdGlvbi55IC0gY2FtLmdldFBvc2l0aW9uKCkueSwgdGhpcy5zaXplLngsIHRoaXMuc2l6ZS55KTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Tiles/Tile.ts\n");

/***/ }),

/***/ "./src/Vector.ts":
/*!***********************!*\
  !*** ./src/Vector.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Vector\": () => (/* binding */ Vector)\n/* harmony export */ });\nclass Vector {\r\n    constructor(x, y) {\r\n        this.x = x;\r\n        this.y = y;\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtZG93bi1ycGctZ2FtZS8uL3NyYy9WZWN0b3IudHM/NjlmNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3JjL1ZlY3Rvci50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBWZWN0b3Ige1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSkge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Vector.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Player_Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player/Player */ \"./src/Player/Player.ts\");\n/* harmony import */ var _Game_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game/handler */ \"./src/Game/handler.ts\");\n/* harmony import */ var _Game_KeyInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Game/KeyInput */ \"./src/Game/KeyInput.ts\");\n/* harmony import */ var _Game_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Game/types */ \"./src/Game/types.ts\");\n/* harmony import */ var _Tiles_Tile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Tiles/Tile */ \"./src/Tiles/Tile.ts\");\n/* harmony import */ var _Game_Camera__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Game/Camera */ \"./src/Game/Camera.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst CANVAS = document.querySelector('canvas');\r\nconst CTX = CANVAS.getContext('2d');\r\nconst WIDTH = 600;\r\nconst HEIGHT = 400;\r\nCTX.canvas.width = WIDTH;\r\nCTX.canvas.height = HEIGHT;\r\n//vars\r\nvar grass = 'green';\r\nvar water = 'blue';\r\n//MAIN CODE\r\nvar handler = new _Game_handler__WEBPACK_IMPORTED_MODULE_1__.Handler();\r\nvar keyInputs = new _Game_KeyInput__WEBPACK_IMPORTED_MODULE_2__.KeyInput(handler);\r\nvar camera = new _Game_Camera__WEBPACK_IMPORTED_MODULE_5__.Camera(0, 0, WIDTH, HEIGHT);\r\nhandler.objects.push(new _Tiles_Tile__WEBPACK_IMPORTED_MODULE_4__.Tile(0, 0, 50, 50, grass));\r\nhandler.objects.push(new _Tiles_Tile__WEBPACK_IMPORTED_MODULE_4__.Tile(50, 50, 50, 50, grass));\r\nhandler.objects.push(new _Tiles_Tile__WEBPACK_IMPORTED_MODULE_4__.Tile(50, 0, 50, 50, water));\r\nhandler.objects.push(new _Tiles_Tile__WEBPACK_IMPORTED_MODULE_4__.Tile(0, 50, 50, 50, grass));\r\nhandler.objects.push(new _Tiles_Tile__WEBPACK_IMPORTED_MODULE_4__.Tile(100, 0, 50, 50, water));\r\nhandler.objects.push(new _Player_Player__WEBPACK_IMPORTED_MODULE_0__.Player(0, 0, 50, 50, _Game_types__WEBPACK_IMPORTED_MODULE_3__.objectType.Player));\r\nfunction run() {\r\n    CTX.fillStyle = 'black';\r\n    CTX.fillRect(0, 0, WIDTH, HEIGHT);\r\n    handler.tick();\r\n    keyInputs.tick();\r\n    camera.tick(handler);\r\n    handler.render(CTX, camera);\r\n    requestAnimationFrame(run);\r\n}\r\nfunction handle(e) {\r\n    keyInputs.tickAct(e, handler);\r\n}\r\ndocument.addEventListener('keypress', handle);\r\nrequestAnimationFrame(run);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtZG93bi1ycGctZ2FtZS8uL3NyYy9pbmRleC50cz9lOTRlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBeUM7QUFDQTtBQUNFO0FBQ0Q7QUFDTjtBQUNHO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGtEQUFPO0FBQ3pCLG9CQUFvQixvREFBUTtBQUM1QixpQkFBaUIsZ0RBQU07QUFDdkIseUJBQXlCLDZDQUFJO0FBQzdCLHlCQUF5Qiw2Q0FBSTtBQUM3Qix5QkFBeUIsNkNBQUk7QUFDN0IseUJBQXlCLDZDQUFJO0FBQzdCLHlCQUF5Qiw2Q0FBSTtBQUM3Qix5QkFBeUIsa0RBQU0sZUFBZSwwREFBaUI7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3NyYy9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vUGxheWVyL1BsYXllcic7XHJcbmltcG9ydCB7IEhhbmRsZXIgfSBmcm9tICcuL0dhbWUvaGFuZGxlcic7XHJcbmltcG9ydCB7IEtleUlucHV0IH0gZnJvbSAnLi9HYW1lL0tleUlucHV0JztcclxuaW1wb3J0IHsgb2JqZWN0VHlwZSB9IGZyb20gJy4vR2FtZS90eXBlcyc7XHJcbmltcG9ydCB7IFRpbGUgfSBmcm9tICcuL1RpbGVzL1RpbGUnO1xyXG5pbXBvcnQgeyBDYW1lcmEgfSBmcm9tICcuL0dhbWUvQ2FtZXJhJztcclxuY29uc3QgQ0FOVkFTID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJyk7XHJcbmNvbnN0IENUWCA9IENBTlZBUy5nZXRDb250ZXh0KCcyZCcpO1xyXG5jb25zdCBXSURUSCA9IDYwMDtcclxuY29uc3QgSEVJR0hUID0gNDAwO1xyXG5DVFguY2FudmFzLndpZHRoID0gV0lEVEg7XHJcbkNUWC5jYW52YXMuaGVpZ2h0ID0gSEVJR0hUO1xyXG4vL3ZhcnNcclxudmFyIGdyYXNzID0gJ2dyZWVuJztcclxudmFyIHdhdGVyID0gJ2JsdWUnO1xyXG4vL01BSU4gQ09ERVxyXG52YXIgaGFuZGxlciA9IG5ldyBIYW5kbGVyKCk7XHJcbnZhciBrZXlJbnB1dHMgPSBuZXcgS2V5SW5wdXQoaGFuZGxlcik7XHJcbnZhciBjYW1lcmEgPSBuZXcgQ2FtZXJhKDAsIDAsIFdJRFRILCBIRUlHSFQpO1xyXG5oYW5kbGVyLm9iamVjdHMucHVzaChuZXcgVGlsZSgwLCAwLCA1MCwgNTAsIGdyYXNzKSk7XHJcbmhhbmRsZXIub2JqZWN0cy5wdXNoKG5ldyBUaWxlKDUwLCA1MCwgNTAsIDUwLCBncmFzcykpO1xyXG5oYW5kbGVyLm9iamVjdHMucHVzaChuZXcgVGlsZSg1MCwgMCwgNTAsIDUwLCB3YXRlcikpO1xyXG5oYW5kbGVyLm9iamVjdHMucHVzaChuZXcgVGlsZSgwLCA1MCwgNTAsIDUwLCBncmFzcykpO1xyXG5oYW5kbGVyLm9iamVjdHMucHVzaChuZXcgVGlsZSgxMDAsIDAsIDUwLCA1MCwgd2F0ZXIpKTtcclxuaGFuZGxlci5vYmplY3RzLnB1c2gobmV3IFBsYXllcigwLCAwLCA1MCwgNTAsIG9iamVjdFR5cGUuUGxheWVyKSk7XHJcbmZ1bmN0aW9uIHJ1bigpIHtcclxuICAgIENUWC5maWxsU3R5bGUgPSAnYmxhY2snO1xyXG4gICAgQ1RYLmZpbGxSZWN0KDAsIDAsIFdJRFRILCBIRUlHSFQpO1xyXG4gICAgaGFuZGxlci50aWNrKCk7XHJcbiAgICBrZXlJbnB1dHMudGljaygpO1xyXG4gICAgY2FtZXJhLnRpY2soaGFuZGxlcik7XHJcbiAgICBoYW5kbGVyLnJlbmRlcihDVFgsIGNhbWVyYSk7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocnVuKTtcclxufVxyXG5mdW5jdGlvbiBoYW5kbGUoZSkge1xyXG4gICAga2V5SW5wdXRzLnRpY2tBY3QoZSwgaGFuZGxlcik7XHJcbn1cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBoYW5kbGUpO1xyXG5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocnVuKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.ts\n");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;