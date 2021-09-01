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

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"css/styles.css\");\n\n//# sourceURL=webpack://dynamic_table/./src/styles.scss?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst data = __webpack_require__(/*! ../data.json */ \"./data.json\");\n//Создаем таблицу\nlet tableElement = document.createElement(\"table\");\nfunction generateTable(jsonData, elementIdForTable) {\n    //Создаем заголовки таблицы\n    let headerCellNames = \"\";\n    let headerCellNamesArray = Object.keys(jsonData[0]);\n    for (let k = 0; k < headerCellNamesArray.length; k++) {\n        headerCellNames += `<th><div class=\"th-container\">${headerCellNamesArray[k]} <p class=\"sort-pointer\">&#9650</p></div></th>`;\n    }\n    tableElement.innerHTML += `<tr>${headerCellNames}</tr>`;\n    //Добавлем остальные строки с данными\n    for (let i = 0; i < jsonData.length; i++) {\n        let row = tableElement.insertRow(-1);\n        for (let l = 0; l < headerCellNamesArray.length; l++) {\n            let cell = row.insertCell(-1);\n            let currentUserData = jsonData[i];\n            cell.innerHTML = currentUserData[headerCellNamesArray[l]];\n        }\n    }\n    //Получаем div в который будет вложена таблица и поиск\n    let mainDivContainer = document.getElementById(elementIdForTable);\n    //Создаем div для поиска\n    let searchDivContainer = document.createElement(\"div\");\n    searchDivContainer.classList.add(\"main-container\");\n    mainDivContainer.appendChild(searchDivContainer);\n    //Создаем div для таблицы\n    let tableDivContainer = document.createElement(\"div\");\n    tableDivContainer.classList.add(\"table-container\");\n    tableDivContainer.id = \"tableElement\";\n    mainDivContainer.appendChild(tableDivContainer);\n    //Добавляем ввод\n    let inputElement = document.createElement(\"input\");\n    inputElement.type = \"text\";\n    inputElement.id = \"searchInput\";\n    searchDivContainer.appendChild(inputElement);\n    //Добавляем селект\n    let selectElement = document.createElement(\"select\");\n    selectElement.setAttribute(\"id\", \"searchSelect\");\n    for (let i = 0; i < headerCellNamesArray.length; i++) {\n        let optionElement = document.createElement(\"option\");\n        optionElement.value = `${i}`;\n        optionElement.text = headerCellNamesArray[i];\n        selectElement.appendChild(optionElement);\n    }\n    searchDivContainer.appendChild(selectElement);\n    //Добавляем таблицу\n    tableDivContainer.innerHTML = \"\";\n    tableDivContainer.appendChild(tableElement);\n}\ngenerateTable(data.users, \"table\");\n//Сортировка таблицы\nlet headerCellsArray = document.querySelectorAll(\"th\");\nlet sortStatus = true; //true - отсортировано от А до Я; false - отсортировано от Я до А\nlet prevColumnNumber = 0;\nlet tableRows = Array.from(document.querySelectorAll(\"tr\")).slice(1);\nfunction sortableElement(currentColumnNumber) {\n    let sortPointer = document.getElementsByClassName(\"sort-pointer\");\n    if (!sortStatus && prevColumnNumber == currentColumnNumber) { //Проверяем был ли отсортирован текущий столбец\n        tableRows.reverse();\n        sortStatus = true;\n        sortPointer[currentColumnNumber].innerHTML = \"&#9650\";\n    }\n    else {\n        //Сортируем сверяя значения от индекса столбца\n        tableRows.sort((a, b) => a.children[currentColumnNumber].innerHTML.localeCompare(b.children[currentColumnNumber].innerHTML));\n        prevColumnNumber = currentColumnNumber;\n        sortStatus = false;\n        sortPointer[currentColumnNumber].innerHTML = \"&#9660\";\n    }\n    tableRows.forEach(row => tableElement.appendChild(row));\n}\nheaderCellsArray.forEach((el, index) => el.addEventListener(\"click\", sortableElement.bind(this, index)));\n//Поиск\nlet input = document.getElementById(\"searchInput\");\nlet select = document.getElementById(\"searchSelect\");\ninput.oninput = function findValue() {\n    let selectValue = Number(select.value);\n    tableRows.forEach((el) => {\n        let tableRow = el.children[selectValue];\n        if (tableRow.innerHTML.toLowerCase().indexOf(input.value.toLowerCase()) !== -1 && input.value !== \"\") {\n            tableRow.style.backgroundColor = \"yellow\";\n        }\n        else {\n            tableRow.removeAttribute(\"style\");\n        }\n    });\n};\n//Сброс поиска и выделения полей при изменении столбца\nselect.onchange = function clearHighlight() {\n    let tableDataRows = Array.from(document.querySelectorAll(\"td\"));\n    tableDataRows.forEach(el => {\n        el.removeAttribute(\"style\");\n        input.value = \"\";\n    });\n};\n\n\n//# sourceURL=webpack://dynamic_table/./src/index.ts?");

/***/ }),

/***/ "./data.json":
/*!*******************!*\
  !*** ./data.json ***!
  \*******************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"users\":[{\"firstName\":\"Алексей\",\"lastName\":\"Пантелеев\"},{\"firstName\":\"Ильяс\",\"lastName\":\"Гарипов\"},{\"firstName\":\"Вячеслав\",\"lastName\":\"Богатырев\"},{\"firstName\":\"Григорий\",\"lastName\":\"Зайцев\"},{\"firstName\":\"Дмитрий\",\"lastName\":\"Жуков\"}]}');\n\n//# sourceURL=webpack://dynamic_table/./data.json?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/index.ts");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/styles.scss");
/******/ 	
/******/ })()
;