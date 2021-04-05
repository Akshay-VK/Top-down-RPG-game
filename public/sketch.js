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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameObject\": () => (/* binding */ GameObject)\n/* harmony export */ });\n/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector */ \"./src/Vector.ts\");\n\r\nclass GameObject {\r\n    constructor(x, y, width, height, objecttype) {\r\n        this.position = new _Vector__WEBPACK_IMPORTED_MODULE_0__.Vector(x, y);\r\n        this.size = new _Vector__WEBPACK_IMPORTED_MODULE_0__.Vector(width, height);\r\n        this.objecttype = objecttype;\r\n    }\r\n    tick() {\r\n    }\r\n    render(ctx) {\r\n    }\r\n    getObjectType() {\r\n        return this.objecttype;\r\n    }\r\n    getPosition() {\r\n        return this.position;\r\n    }\r\n    getSize() {\r\n        return this.size;\r\n    }\r\n    setPosition(pos) {\r\n        this.position.x = pos.x;\r\n        this.position.y = pos.y;\r\n    }\r\n    setSize(size) {\r\n        this.size.x = size.x;\r\n        this.size.y = size.y;\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtZG93bi1ycGctZ2FtZS8uL3NyYy9HYW1lT2JqZWN0LnRzP2MyNjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBa0M7QUFDM0I7QUFDUDtBQUNBLDRCQUE0QiwyQ0FBTTtBQUNsQyx3QkFBd0IsMkNBQU07QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3JjL0dhbWVPYmplY3QudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuL1ZlY3Rvcic7XHJcbmV4cG9ydCBjbGFzcyBHYW1lT2JqZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQsIG9iamVjdHR5cGUpIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gbmV3IFZlY3Rvcih4LCB5KTtcclxuICAgICAgICB0aGlzLnNpemUgPSBuZXcgVmVjdG9yKHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgIHRoaXMub2JqZWN0dHlwZSA9IG9iamVjdHR5cGU7XHJcbiAgICB9XHJcbiAgICB0aWNrKCkge1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKGN0eCkge1xyXG4gICAgfVxyXG4gICAgZ2V0T2JqZWN0VHlwZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vYmplY3R0eXBlO1xyXG4gICAgfVxyXG4gICAgZ2V0UG9zaXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb247XHJcbiAgICB9XHJcbiAgICBnZXRTaXplKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNpemU7XHJcbiAgICB9XHJcbiAgICBzZXRQb3NpdGlvbihwb3MpIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSBwb3MueDtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSBwb3MueTtcclxuICAgIH1cclxuICAgIHNldFNpemUoc2l6ZSkge1xyXG4gICAgICAgIHRoaXMuc2l6ZS54ID0gc2l6ZS54O1xyXG4gICAgICAgIHRoaXMuc2l6ZS55ID0gc2l6ZS55O1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/GameObject.ts\n");

/***/ }),

/***/ "./src/KeyInput.ts":
/*!*************************!*\
  !*** ./src/KeyInput.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"KeyInput\": () => (/* binding */ KeyInput)\n/* harmony export */ });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ \"./src/types.ts\");\n/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vector */ \"./src/Vector.ts\");\n\r\n\r\nclass KeyInput {\r\n    constructor(handler) {\r\n        this.handler = handler;\r\n    }\r\n    tick() {\r\n    }\r\n    tickAct(e, handler) {\r\n        var asciiCode = (e.key) ? e.key : e.code;\r\n        for (let i = 0; i < handler.objects.length; i++) {\r\n            if (handler.objects[i].getObjectType() == _types__WEBPACK_IMPORTED_MODULE_0__.objectType.Player) {\r\n                var tempObj = handler.objects[i];\r\n                var tempObjPos = tempObj.getPosition();\r\n                var tempObjSize = tempObj.getSize();\r\n                switch (asciiCode) {\r\n                    case 'w':\r\n                        handler.objects[i].setPosition(new _Vector__WEBPACK_IMPORTED_MODULE_1__.Vector(tempObjPos.x, tempObjPos.y - tempObjSize.y));\r\n                        break;\r\n                    case 'a':\r\n                        handler.objects[i].setPosition(new _Vector__WEBPACK_IMPORTED_MODULE_1__.Vector(tempObjPos.x - tempObjSize.x, tempObjPos.y));\r\n                        break;\r\n                    case 's':\r\n                        handler.objects[i].setPosition(new _Vector__WEBPACK_IMPORTED_MODULE_1__.Vector(tempObjPos.x, tempObjPos.y + tempObjSize.y));\r\n                        break;\r\n                    case 'd':\r\n                        handler.objects[i].setPosition(new _Vector__WEBPACK_IMPORTED_MODULE_1__.Vector(tempObjPos.x + tempObjSize.x, tempObjPos.y));\r\n                        break;\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtZG93bi1ycGctZ2FtZS8uL3NyYy9LZXlJbnB1dC50cz80MTY1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFxQztBQUNIO0FBQzNCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsNEJBQTRCO0FBQ25ELHNEQUFzRCxxREFBaUI7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCwyQ0FBTTtBQUNqRTtBQUNBO0FBQ0EsMkRBQTJELDJDQUFNO0FBQ2pFO0FBQ0E7QUFDQSwyREFBMkQsMkNBQU07QUFDakU7QUFDQTtBQUNBLDJEQUEyRCwyQ0FBTTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvS2V5SW5wdXQudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvYmplY3RUeXBlIH0gZnJvbSBcIi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSBcIi4vVmVjdG9yXCI7XHJcbmV4cG9ydCBjbGFzcyBLZXlJbnB1dCB7XHJcbiAgICBjb25zdHJ1Y3RvcihoYW5kbGVyKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcclxuICAgIH1cclxuICAgIHRpY2soKSB7XHJcbiAgICB9XHJcbiAgICB0aWNrQWN0KGUsIGhhbmRsZXIpIHtcclxuICAgICAgICB2YXIgYXNjaWlDb2RlID0gKGUua2V5KSA/IGUua2V5IDogZS5jb2RlO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGFuZGxlci5vYmplY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGVyLm9iamVjdHNbaV0uZ2V0T2JqZWN0VHlwZSgpID09IG9iamVjdFR5cGUuUGxheWVyKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGVtcE9iaiA9IGhhbmRsZXIub2JqZWN0c1tpXTtcclxuICAgICAgICAgICAgICAgIHZhciB0ZW1wT2JqUG9zID0gdGVtcE9iai5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRlbXBPYmpTaXplID0gdGVtcE9iai5nZXRTaXplKCk7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGFzY2lpQ29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3cnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyLm9iamVjdHNbaV0uc2V0UG9zaXRpb24obmV3IFZlY3Rvcih0ZW1wT2JqUG9zLngsIHRlbXBPYmpQb3MueSAtIHRlbXBPYmpTaXplLnkpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIub2JqZWN0c1tpXS5zZXRQb3NpdGlvbihuZXcgVmVjdG9yKHRlbXBPYmpQb3MueCAtIHRlbXBPYmpTaXplLngsIHRlbXBPYmpQb3MueSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdzJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlci5vYmplY3RzW2ldLnNldFBvc2l0aW9uKG5ldyBWZWN0b3IodGVtcE9ialBvcy54LCB0ZW1wT2JqUG9zLnkgKyB0ZW1wT2JqU2l6ZS55KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2QnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyLm9iamVjdHNbaV0uc2V0UG9zaXRpb24obmV3IFZlY3Rvcih0ZW1wT2JqUG9zLnggKyB0ZW1wT2JqU2l6ZS54LCB0ZW1wT2JqUG9zLnkpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/KeyInput.ts\n");

/***/ }),

/***/ "./src/Player/Player.ts":
/*!******************************!*\
  !*** ./src/Player/Player.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Vector */ \"./src/Vector.ts\");\n/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../GameObject */ \"./src/GameObject.ts\");\n\r\n\r\nclass Player extends _GameObject__WEBPACK_IMPORTED_MODULE_1__.GameObject {\r\n    //objType: objectType = objectType.Player;\r\n    constructor(x, y, width, height, objecttype) {\r\n        super(x, y, width, height, objecttype);\r\n        this.direction = new _Vector__WEBPACK_IMPORTED_MODULE_0__.Vector(0, 0);\r\n    }\r\n    /*\r\n    W = 22\r\n    A = 0\r\n    S = 18\r\n    D = 3\r\n    */\r\n    setDirection(newDir) {\r\n        this.direction.x = newDir.x;\r\n        this.direction.y = newDir.y;\r\n    }\r\n    tick() {\r\n        this.position.x += this.direction.x;\r\n        this.position.y += this.direction.y;\r\n    }\r\n    render(ctx) {\r\n        ctx.fillStyle = 'white';\r\n        ctx.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtZG93bi1ycGctZ2FtZS8uL3NyYy9QbGF5ZXIvUGxheWVyLnRzP2NhNTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW1DO0FBQ1E7QUFDcEMscUJBQXFCLG1EQUFVO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QiwyQ0FBTTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3JjL1BsYXllci9QbGF5ZXIudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuLi9WZWN0b3InO1xyXG5pbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSAnLi4vR2FtZU9iamVjdCc7XHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcclxuICAgIC8vb2JqVHlwZTogb2JqZWN0VHlwZSA9IG9iamVjdFR5cGUuUGxheWVyO1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCwgb2JqZWN0dHlwZSkge1xyXG4gICAgICAgIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQsIG9iamVjdHR5cGUpO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gbmV3IFZlY3RvcigwLCAwKTtcclxuICAgIH1cclxuICAgIC8qXHJcbiAgICBXID0gMjJcclxuICAgIEEgPSAwXHJcbiAgICBTID0gMThcclxuICAgIEQgPSAzXHJcbiAgICAqL1xyXG4gICAgc2V0RGlyZWN0aW9uKG5ld0Rpcikge1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uLnggPSBuZXdEaXIueDtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbi55ID0gbmV3RGlyLnk7XHJcbiAgICB9XHJcbiAgICB0aWNrKCkge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLmRpcmVjdGlvbi54O1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueSArPSB0aGlzLmRpcmVjdGlvbi55O1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKGN0eCkge1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xyXG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy5zaXplLngsIHRoaXMuc2l6ZS55KTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Player/Player.ts\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Player_Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player/Player */ \"./src/Player/Player.ts\");\n/* harmony import */ var _handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handler */ \"./src/handler.ts\");\n/* harmony import */ var _KeyInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./KeyInput */ \"./src/KeyInput.ts\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ \"./src/types.ts\");\n\r\n\r\n\r\n\r\nconst CANVAS = document.querySelector('canvas');\r\nconst CTX = CANVAS.getContext('2d');\r\nconst WIDTH = 600;\r\nconst HEIGHT = 400;\r\nCTX.canvas.width = WIDTH;\r\nCTX.canvas.height = HEIGHT;\r\n//vars\r\n//MAIN CODE\r\nvar handler = new _handler__WEBPACK_IMPORTED_MODULE_1__.Handler();\r\nvar keyInputs = new _KeyInput__WEBPACK_IMPORTED_MODULE_2__.KeyInput(handler);\r\nhandler.objects.push(new _Player_Player__WEBPACK_IMPORTED_MODULE_0__.Player(20, 20, 50, 50, _types__WEBPACK_IMPORTED_MODULE_3__.objectType.Player));\r\nfunction run() {\r\n    CTX.fillStyle = 'black';\r\n    CTX.fillRect(0, 0, WIDTH, HEIGHT);\r\n    handler.tick();\r\n    keyInputs.tick();\r\n    handler.render(CTX);\r\n    requestAnimationFrame(run);\r\n}\r\nfunction handle(e) {\r\n    keyInputs.tickAct(e, handler);\r\n}\r\ndocument.addEventListener('keypress', handle);\r\nrequestAnimationFrame(run);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtZG93bi1ycGctZ2FtZS8uL3NyYy9pbmRleC50cz9lOTRlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQXlDO0FBQ0w7QUFDRTtBQUNEO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNkNBQU87QUFDekIsb0JBQW9CLCtDQUFRO0FBQzVCLHlCQUF5QixrREFBTSxpQkFBaUIscURBQWlCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3JjL2luZGV4LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9QbGF5ZXIvUGxheWVyJztcclxuaW1wb3J0IHsgSGFuZGxlciB9IGZyb20gJy4vaGFuZGxlcic7XHJcbmltcG9ydCB7IEtleUlucHV0IH0gZnJvbSAnLi9LZXlJbnB1dCc7XHJcbmltcG9ydCB7IG9iamVjdFR5cGUgfSBmcm9tICcuL3R5cGVzJztcclxuY29uc3QgQ0FOVkFTID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJyk7XHJcbmNvbnN0IENUWCA9IENBTlZBUy5nZXRDb250ZXh0KCcyZCcpO1xyXG5jb25zdCBXSURUSCA9IDYwMDtcclxuY29uc3QgSEVJR0hUID0gNDAwO1xyXG5DVFguY2FudmFzLndpZHRoID0gV0lEVEg7XHJcbkNUWC5jYW52YXMuaGVpZ2h0ID0gSEVJR0hUO1xyXG4vL3ZhcnNcclxuLy9NQUlOIENPREVcclxudmFyIGhhbmRsZXIgPSBuZXcgSGFuZGxlcigpO1xyXG52YXIga2V5SW5wdXRzID0gbmV3IEtleUlucHV0KGhhbmRsZXIpO1xyXG5oYW5kbGVyLm9iamVjdHMucHVzaChuZXcgUGxheWVyKDIwLCAyMCwgNTAsIDUwLCBvYmplY3RUeXBlLlBsYXllcikpO1xyXG5mdW5jdGlvbiBydW4oKSB7XHJcbiAgICBDVFguZmlsbFN0eWxlID0gJ2JsYWNrJztcclxuICAgIENUWC5maWxsUmVjdCgwLCAwLCBXSURUSCwgSEVJR0hUKTtcclxuICAgIGhhbmRsZXIudGljaygpO1xyXG4gICAga2V5SW5wdXRzLnRpY2soKTtcclxuICAgIGhhbmRsZXIucmVuZGVyKENUWCk7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocnVuKTtcclxufVxyXG5mdW5jdGlvbiBoYW5kbGUoZSkge1xyXG4gICAga2V5SW5wdXRzLnRpY2tBY3QoZSwgaGFuZGxlcik7XHJcbn1cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBoYW5kbGUpO1xyXG5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocnVuKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ }),

/***/ "./src/types.ts":
/*!**********************!*\
  !*** ./src/types.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"objectType\": () => (/* binding */ objectType)\n/* harmony export */ });\nvar objectType;\r\n(function (objectType) {\r\n    objectType[objectType[\"Player\"] = 0] = \"Player\";\r\n})(objectType || (objectType = {}));\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtZG93bi1ycGctZ2FtZS8uL3NyYy90eXBlcy50cz9mM2ZlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQSxDQUFDLGdDQUFnQyIsImZpbGUiOiIuL3NyYy90eXBlcy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB2YXIgb2JqZWN0VHlwZTtcclxuKGZ1bmN0aW9uIChvYmplY3RUeXBlKSB7XHJcbiAgICBvYmplY3RUeXBlW29iamVjdFR5cGVbXCJQbGF5ZXJcIl0gPSAwXSA9IFwiUGxheWVyXCI7XHJcbn0pKG9iamVjdFR5cGUgfHwgKG9iamVjdFR5cGUgPSB7fSkpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/types.ts\n");

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