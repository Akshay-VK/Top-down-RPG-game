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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameObject\": () => (/* binding */ GameObject)\n/* harmony export */ });\n/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector */ \"./src/Vector.ts\");\n\r\nclass GameObject {\r\n    constructor(x, y, width, height, objecttype) {\r\n        this.position = new _Vector__WEBPACK_IMPORTED_MODULE_0__.Vector(x, y);\r\n        this.size = new _Vector__WEBPACK_IMPORTED_MODULE_0__.Vector(width, height);\r\n        this.objecttype = objecttype;\r\n    }\r\n    tick() {\r\n    }\r\n    keyboardTick(e) {\r\n    }\r\n    render(ctx) {\r\n    }\r\n    getObjectType() {\r\n        return this.objecttype;\r\n    }\r\n    getPosition() {\r\n        return this.position;\r\n    }\r\n    getSize() {\r\n        return this.size;\r\n    }\r\n    setPosition(pos) {\r\n        this.position.x = pos.x;\r\n        this.position.y = pos.y;\r\n    }\r\n    setSize(size) {\r\n        this.size.x = size.x;\r\n        this.size.y = size.y;\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtZG93bi1ycGctZ2FtZS8uL3NyYy9HYW1lT2JqZWN0LnRzP2MyNjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBa0M7QUFDM0I7QUFDUDtBQUNBLDRCQUE0QiwyQ0FBTTtBQUNsQyx3QkFBd0IsMkNBQU07QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3NyYy9HYW1lT2JqZWN0LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnLi9WZWN0b3InO1xyXG5leHBvcnQgY2xhc3MgR2FtZU9iamVjdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBvYmplY3R0eXBlKSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IG5ldyBWZWN0b3IoeCwgeSk7XHJcbiAgICAgICAgdGhpcy5zaXplID0gbmV3IFZlY3Rvcih3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLm9iamVjdHR5cGUgPSBvYmplY3R0eXBlO1xyXG4gICAgfVxyXG4gICAgdGljaygpIHtcclxuICAgIH1cclxuICAgIGtleWJvYXJkVGljayhlKSB7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoY3R4KSB7XHJcbiAgICB9XHJcbiAgICBnZXRPYmplY3RUeXBlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9iamVjdHR5cGU7XHJcbiAgICB9XHJcbiAgICBnZXRQb3NpdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcclxuICAgIH1cclxuICAgIGdldFNpemUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2l6ZTtcclxuICAgIH1cclxuICAgIHNldFBvc2l0aW9uKHBvcykge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCA9IHBvcy54O1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHBvcy55O1xyXG4gICAgfVxyXG4gICAgc2V0U2l6ZShzaXplKSB7XHJcbiAgICAgICAgdGhpcy5zaXplLnggPSBzaXplLng7XHJcbiAgICAgICAgdGhpcy5zaXplLnkgPSBzaXplLnk7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/GameObject.ts\n");

/***/ }),

/***/ "./src/KeyInput.ts":
/*!*************************!*\
  !*** ./src/KeyInput.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"KeyInput\": () => (/* binding */ KeyInput)\n/* harmony export */ });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ \"./src/types.ts\");\n\r\nclass KeyInput {\r\n    constructor(handler) {\r\n        this.handler = handler;\r\n    }\r\n    tick() {\r\n    }\r\n    tickAct(e, handler) {\r\n        var asciiCode = (e.key) ? e.key : e.code;\r\n        for (let i = 0; i < handler.objects.length; i++) {\r\n            if (handler.objects[i].getObjectType() == _types__WEBPACK_IMPORTED_MODULE_0__.objectType.Player) {\r\n                handler.objects[i].keyboardTick(e);\r\n            }\r\n        }\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtZG93bi1ycGctZ2FtZS8uL3NyYy9LZXlJbnB1dC50cz80MTY1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQXFDO0FBQzlCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsNEJBQTRCO0FBQ25ELHNEQUFzRCxxREFBaUI7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3NyYy9LZXlJbnB1dC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG9iamVjdFR5cGUgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5leHBvcnQgY2xhc3MgS2V5SW5wdXQge1xyXG4gICAgY29uc3RydWN0b3IoaGFuZGxlcikge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XHJcbiAgICB9XHJcbiAgICB0aWNrKCkge1xyXG4gICAgfVxyXG4gICAgdGlja0FjdChlLCBoYW5kbGVyKSB7XHJcbiAgICAgICAgdmFyIGFzY2lpQ29kZSA9IChlLmtleSkgPyBlLmtleSA6IGUuY29kZTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhhbmRsZXIub2JqZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlci5vYmplY3RzW2ldLmdldE9iamVjdFR5cGUoKSA9PSBvYmplY3RUeXBlLlBsYXllcikge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlci5vYmplY3RzW2ldLmtleWJvYXJkVGljayhlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/KeyInput.ts\n");

/***/ }),

/***/ "./src/Player/Player.ts":
/*!******************************!*\
  !*** ./src/Player/Player.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Vector */ \"./src/Vector.ts\");\n/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../GameObject */ \"./src/GameObject.ts\");\n\r\n\r\nclass Player extends _GameObject__WEBPACK_IMPORTED_MODULE_1__.GameObject {\r\n    //objType: objectType = objectType.Player;\r\n    constructor(x, y, width, height, objecttype) {\r\n        super(x, y, width, height, objecttype);\r\n        this.direction = new _Vector__WEBPACK_IMPORTED_MODULE_0__.Vector(0, 0);\r\n    }\r\n    /*\r\n    W = 22\r\n    A = 0\r\n    S = 18\r\n    D = 3\r\n    */\r\n    keyboardTick(e) {\r\n        var asciiCode = (e.key) ? e.key : e.code;\r\n        switch (asciiCode) {\r\n            case 'w':\r\n                this.setPosition(new _Vector__WEBPACK_IMPORTED_MODULE_0__.Vector(this.position.x, this.position.y - this.size.y));\r\n                break;\r\n            case 'a':\r\n                this.setPosition(new _Vector__WEBPACK_IMPORTED_MODULE_0__.Vector(this.position.x - this.size.x, this.position.y));\r\n                break;\r\n            case 's':\r\n                this.setPosition(new _Vector__WEBPACK_IMPORTED_MODULE_0__.Vector(this.position.x, this.position.y + this.size.y));\r\n                break;\r\n            case 'd':\r\n                this.setPosition(new _Vector__WEBPACK_IMPORTED_MODULE_0__.Vector(this.position.x + this.size.x, this.position.y));\r\n                break;\r\n        }\r\n    }\r\n    setDirection(newDir) {\r\n        this.direction.x = newDir.x;\r\n        this.direction.y = newDir.y;\r\n    }\r\n    tick() {\r\n        this.position.x += this.direction.x;\r\n        this.position.y += this.direction.y;\r\n    }\r\n    render(ctx) {\r\n        ctx.fillStyle = 'white';\r\n        ctx.fillRect(this.position.x + 10, this.position.y + 10, this.size.x - 20, this.size.y - 20);\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtZG93bi1ycGctZ2FtZS8uL3NyYy9QbGF5ZXIvUGxheWVyLnRzP2NhNTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW1DO0FBQ1E7QUFDcEMscUJBQXFCLG1EQUFVO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QiwyQ0FBTTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLDJDQUFNO0FBQzNDO0FBQ0E7QUFDQSxxQ0FBcUMsMkNBQU07QUFDM0M7QUFDQTtBQUNBLHFDQUFxQywyQ0FBTTtBQUMzQztBQUNBO0FBQ0EscUNBQXFDLDJDQUFNO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3JjL1BsYXllci9QbGF5ZXIudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuLi9WZWN0b3InO1xyXG5pbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSAnLi4vR2FtZU9iamVjdCc7XHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcclxuICAgIC8vb2JqVHlwZTogb2JqZWN0VHlwZSA9IG9iamVjdFR5cGUuUGxheWVyO1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCwgb2JqZWN0dHlwZSkge1xyXG4gICAgICAgIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQsIG9iamVjdHR5cGUpO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gbmV3IFZlY3RvcigwLCAwKTtcclxuICAgIH1cclxuICAgIC8qXHJcbiAgICBXID0gMjJcclxuICAgIEEgPSAwXHJcbiAgICBTID0gMThcclxuICAgIEQgPSAzXHJcbiAgICAqL1xyXG4gICAga2V5Ym9hcmRUaWNrKGUpIHtcclxuICAgICAgICB2YXIgYXNjaWlDb2RlID0gKGUua2V5KSA/IGUua2V5IDogZS5jb2RlO1xyXG4gICAgICAgIHN3aXRjaCAoYXNjaWlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3cnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbihuZXcgVmVjdG9yKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55IC0gdGhpcy5zaXplLnkpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdhJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0UG9zaXRpb24obmV3IFZlY3Rvcih0aGlzLnBvc2l0aW9uLnggLSB0aGlzLnNpemUueCwgdGhpcy5wb3NpdGlvbi55KSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAncyc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9uKG5ldyBWZWN0b3IodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2QnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbihuZXcgVmVjdG9yKHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCB0aGlzLnBvc2l0aW9uLnkpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNldERpcmVjdGlvbihuZXdEaXIpIHtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbi54ID0gbmV3RGlyLng7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24ueSA9IG5ld0Rpci55O1xyXG4gICAgfVxyXG4gICAgdGljaygpIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy5kaXJlY3Rpb24ueDtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKz0gdGhpcy5kaXJlY3Rpb24ueTtcclxuICAgIH1cclxuICAgIHJlbmRlcihjdHgpIHtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3doaXRlJztcclxuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54ICsgMTAsIHRoaXMucG9zaXRpb24ueSArIDEwLCB0aGlzLnNpemUueCAtIDIwLCB0aGlzLnNpemUueSAtIDIwKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Player/Player.ts\n");

/***/ }),

/***/ "./src/Tiles/Tile.ts":
/*!***************************!*\
  !*** ./src/Tiles/Tile.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Tile\": () => (/* binding */ Tile)\n/* harmony export */ });\n/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GameObject */ \"./src/GameObject.ts\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ \"./src/types.ts\");\n\r\n\r\nclass Tile extends _GameObject__WEBPACK_IMPORTED_MODULE_0__.GameObject {\r\n    constructor(x, y, width, height) {\r\n        super(x, y, width, height, _types__WEBPACK_IMPORTED_MODULE_1__.objectType.Tile);\r\n        this.objecttype = _types__WEBPACK_IMPORTED_MODULE_1__.objectType.Tile;\r\n    }\r\n    tick() {\r\n    }\r\n    render(ctx) {\r\n        ctx.fillStyle = 'green';\r\n        ctx.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtZG93bi1ycGctZ2FtZS8uL3NyYy9UaWxlcy9UaWxlLnRzPzBmZGMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJDO0FBQ0w7QUFDL0IsbUJBQW1CLG1EQUFVO0FBQ3BDO0FBQ0EsbUNBQW1DLG1EQUFlO0FBQ2xELDBCQUEwQixtREFBZTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3JjL1RpbGVzL1RpbGUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSBcIi4uL0dhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgb2JqZWN0VHlwZSB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5leHBvcnQgY2xhc3MgVGlsZSBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQsIG9iamVjdFR5cGUuVGlsZSk7XHJcbiAgICAgICAgdGhpcy5vYmplY3R0eXBlID0gb2JqZWN0VHlwZS5UaWxlO1xyXG4gICAgfVxyXG4gICAgdGljaygpIHtcclxuICAgIH1cclxuICAgIHJlbmRlcihjdHgpIHtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ2dyZWVuJztcclxuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMuc2l6ZS54LCB0aGlzLnNpemUueSk7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Tiles/Tile.ts\n");

/***/ }),

/***/ "./src/Vector.ts":
/*!***********************!*\
  !*** ./src/Vector.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Vector\": () => (/* binding */ Vector)\n/* harmony export */ });\nclass Vector {\r\n    constructor(x, y) {\r\n        this.x = x;\r\n        this.y = y;\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtZG93bi1ycGctZ2FtZS8uL3NyYy9WZWN0b3IudHM/NjlmNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3JjL1ZlY3Rvci50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBWZWN0b3Ige1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSkge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Vector.ts\n");

/***/ }),

/***/ "./src/handler.ts":
/*!************************!*\
  !*** ./src/handler.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Handler\": () => (/* binding */ Handler)\n/* harmony export */ });\nclass Handler {\r\n    constructor() {\r\n        this.objects = new Array();\r\n    }\r\n    tick() {\r\n        for (let i = 0; i < this.objects.length; i++) {\r\n            this.objects[i].tick();\r\n        }\r\n    }\r\n    render(ctx) {\r\n        for (let i = 0; i < this.objects.length; i++) {\r\n            this.objects[i].render(ctx);\r\n        }\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtZG93bi1ycGctZ2FtZS8uL3NyYy9oYW5kbGVyLnRzPzdjNmMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIseUJBQXlCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHlCQUF5QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3NyYy9oYW5kbGVyLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEhhbmRsZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5vYmplY3RzID0gbmV3IEFycmF5KCk7XHJcbiAgICB9XHJcbiAgICB0aWNrKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5vYmplY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JqZWN0c1tpXS50aWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKGN0eCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5vYmplY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JqZWN0c1tpXS5yZW5kZXIoY3R4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/handler.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Player_Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player/Player */ \"./src/Player/Player.ts\");\n/* harmony import */ var _handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handler */ \"./src/handler.ts\");\n/* harmony import */ var _KeyInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./KeyInput */ \"./src/KeyInput.ts\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ \"./src/types.ts\");\n/* harmony import */ var _Tiles_Tile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Tiles/Tile */ \"./src/Tiles/Tile.ts\");\n\r\n\r\n\r\n\r\n\r\nconst CANVAS = document.querySelector('canvas');\r\nconst CTX = CANVAS.getContext('2d');\r\nconst WIDTH = 600;\r\nconst HEIGHT = 400;\r\nCTX.canvas.width = WIDTH;\r\nCTX.canvas.height = HEIGHT;\r\n//vars\r\n//MAIN CODE\r\nvar handler = new _handler__WEBPACK_IMPORTED_MODULE_1__.Handler();\r\nvar keyInputs = new _KeyInput__WEBPACK_IMPORTED_MODULE_2__.KeyInput(handler);\r\nhandler.objects.push(new _Tiles_Tile__WEBPACK_IMPORTED_MODULE_4__.Tile(20, 20, 50, 50));\r\nhandler.objects.push(new _Player_Player__WEBPACK_IMPORTED_MODULE_0__.Player(20, 20, 50, 50, _types__WEBPACK_IMPORTED_MODULE_3__.objectType.Player));\r\nfunction run() {\r\n    CTX.fillStyle = 'black';\r\n    CTX.fillRect(0, 0, WIDTH, HEIGHT);\r\n    handler.tick();\r\n    keyInputs.tick();\r\n    handler.render(CTX);\r\n    requestAnimationFrame(run);\r\n}\r\nfunction handle(e) {\r\n    keyInputs.tickAct(e, handler);\r\n}\r\ndocument.addEventListener('keypress', handle);\r\nrequestAnimationFrame(run);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtZG93bi1ycGctZ2FtZS8uL3NyYy9pbmRleC50cz9lOTRlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QztBQUNMO0FBQ0U7QUFDRDtBQUNEO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNkNBQU87QUFDekIsb0JBQW9CLCtDQUFRO0FBQzVCLHlCQUF5Qiw2Q0FBSTtBQUM3Qix5QkFBeUIsa0RBQU0saUJBQWlCLHFEQUFpQjtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3NyYy9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vUGxheWVyL1BsYXllcic7XHJcbmltcG9ydCB7IEhhbmRsZXIgfSBmcm9tICcuL2hhbmRsZXInO1xyXG5pbXBvcnQgeyBLZXlJbnB1dCB9IGZyb20gJy4vS2V5SW5wdXQnO1xyXG5pbXBvcnQgeyBvYmplY3RUeXBlIH0gZnJvbSAnLi90eXBlcyc7XHJcbmltcG9ydCB7IFRpbGUgfSBmcm9tICcuL1RpbGVzL1RpbGUnO1xyXG5jb25zdCBDQU5WQVMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKTtcclxuY29uc3QgQ1RYID0gQ0FOVkFTLmdldENvbnRleHQoJzJkJyk7XHJcbmNvbnN0IFdJRFRIID0gNjAwO1xyXG5jb25zdCBIRUlHSFQgPSA0MDA7XHJcbkNUWC5jYW52YXMud2lkdGggPSBXSURUSDtcclxuQ1RYLmNhbnZhcy5oZWlnaHQgPSBIRUlHSFQ7XHJcbi8vdmFyc1xyXG4vL01BSU4gQ09ERVxyXG52YXIgaGFuZGxlciA9IG5ldyBIYW5kbGVyKCk7XHJcbnZhciBrZXlJbnB1dHMgPSBuZXcgS2V5SW5wdXQoaGFuZGxlcik7XHJcbmhhbmRsZXIub2JqZWN0cy5wdXNoKG5ldyBUaWxlKDIwLCAyMCwgNTAsIDUwKSk7XHJcbmhhbmRsZXIub2JqZWN0cy5wdXNoKG5ldyBQbGF5ZXIoMjAsIDIwLCA1MCwgNTAsIG9iamVjdFR5cGUuUGxheWVyKSk7XHJcbmZ1bmN0aW9uIHJ1bigpIHtcclxuICAgIENUWC5maWxsU3R5bGUgPSAnYmxhY2snO1xyXG4gICAgQ1RYLmZpbGxSZWN0KDAsIDAsIFdJRFRILCBIRUlHSFQpO1xyXG4gICAgaGFuZGxlci50aWNrKCk7XHJcbiAgICBrZXlJbnB1dHMudGljaygpO1xyXG4gICAgaGFuZGxlci5yZW5kZXIoQ1RYKTtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShydW4pO1xyXG59XHJcbmZ1bmN0aW9uIGhhbmRsZShlKSB7XHJcbiAgICBrZXlJbnB1dHMudGlja0FjdChlLCBoYW5kbGVyKTtcclxufVxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGhhbmRsZSk7XHJcbnJlcXVlc3RBbmltYXRpb25GcmFtZShydW4pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ }),

/***/ "./src/types.ts":
/*!**********************!*\
  !*** ./src/types.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"objectType\": () => (/* binding */ objectType)\n/* harmony export */ });\nvar objectType;\r\n(function (objectType) {\r\n    objectType[objectType[\"Player\"] = 0] = \"Player\";\r\n    objectType[objectType[\"Tile\"] = 1] = \"Tile\";\r\n})(objectType || (objectType = {}));\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtZG93bi1ycGctZ2FtZS8uL3NyYy90eXBlcy50cz9mM2ZlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLENBQUMsZ0NBQWdDIiwiZmlsZSI6Ii4vc3JjL3R5cGVzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHZhciBvYmplY3RUeXBlO1xyXG4oZnVuY3Rpb24gKG9iamVjdFR5cGUpIHtcclxuICAgIG9iamVjdFR5cGVbb2JqZWN0VHlwZVtcIlBsYXllclwiXSA9IDBdID0gXCJQbGF5ZXJcIjtcclxuICAgIG9iamVjdFR5cGVbb2JqZWN0VHlwZVtcIlRpbGVcIl0gPSAxXSA9IFwiVGlsZVwiO1xyXG59KShvYmplY3RUeXBlIHx8IChvYmplY3RUeXBlID0ge30pKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/types.ts\n");

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