/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/application.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/application.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/application.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/MarkAllen/code/MarcusAl/Edfu/app/javascript/packs/application.js: Unexpected reserved word 'await'. (46:8)\n\n  44 |       isEnabled = true;\n  45 |       const CSS =\n> 46 |         await DarkReader.exportGeneratedCSS();\n     |         ^\n  47 |       console.log(CSS);\n  48 |     }\n  49 |   });\n    at Parser._raise (/Users/MarkAllen/code/MarcusAl/Edfu/node_modules/@babel/parser/lib/index.js:798:17)\n    at Parser.raiseWithData (/Users/MarkAllen/code/MarcusAl/Edfu/node_modules/@babel/parser/lib/index.js:791:17)\n    at Parser.raise (/Users/MarkAllen/code/MarcusAl/Edfu/node_modules/@babel/parser/lib/index.js:752:17)\n    at Parser.checkReservedWord (/Users/MarkAllen/code/MarcusAl/Edfu/node_modules/@babel/parser/lib/index.js:12414:12)\n    at Parser.parseIdentifierName (/Users/MarkAllen/code/MarcusAl/Edfu/node_modules/@babel/parser/lib/index.js:12368:12)\n    at Parser.parseIdentifier (/Users/MarkAllen/code/MarcusAl/Edfu/node_modules/@babel/parser/lib/index.js:12340:23)\n    at Parser.parseExprAtom (/Users/MarkAllen/code/MarcusAl/Edfu/node_modules/@babel/parser/lib/index.js:11347:27)\n    at Parser.parseExprSubscripts (/Users/MarkAllen/code/MarcusAl/Edfu/node_modules/@babel/parser/lib/index.js:11081:23)\n    at Parser.parseUpdate (/Users/MarkAllen/code/MarcusAl/Edfu/node_modules/@babel/parser/lib/index.js:11061:21)\n    at Parser.parseMaybeUnary (/Users/MarkAllen/code/MarcusAl/Edfu/node_modules/@babel/parser/lib/index.js:11039:23)\n    at Parser.parseExprOps (/Users/MarkAllen/code/MarcusAl/Edfu/node_modules/@babel/parser/lib/index.js:10882:23)\n    at Parser.parseMaybeConditional (/Users/MarkAllen/code/MarcusAl/Edfu/node_modules/@babel/parser/lib/index.js:10856:23)\n    at Parser.parseMaybeAssign (/Users/MarkAllen/code/MarcusAl/Edfu/node_modules/@babel/parser/lib/index.js:10814:21)\n    at /Users/MarkAllen/code/MarcusAl/Edfu/node_modules/@babel/parser/lib/index.js:10776:39\n    at Parser.allowInAnd (/Users/MarkAllen/code/MarcusAl/Edfu/node_modules/@babel/parser/lib/index.js:12595:12)\n    at Parser.parseMaybeAssignAllowIn (/Users/MarkAllen/code/MarcusAl/Edfu/node_modules/@babel/parser/lib/index.js:10776:17)\n    at Parser.parseVar (/Users/MarkAllen/code/MarcusAl/Edfu/node_modules/@babel/parser/lib/index.js:13466:70)\n    at Parser.parseVarStatement (/Users/MarkAllen/code/MarcusAl/Edfu/node_modules/@babel/parser/lib/index.js:13280:10)\n    at Parser.parseStatementContent (/Users/MarkAllen/code/MarcusAl/Edfu/node_modules/@babel/parser/lib/index.js:12863:21)\n    at Parser.parseStatement (/Users/MarkAllen/code/MarcusAl/Edfu/node_modules/@babel/parser/lib/index.js:12796:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/MarkAllen/code/MarcusAl/Edfu/node_modules/@babel/parser/lib/index.js:13385:25)\n    at Parser.parseBlockBody (/Users/MarkAllen/code/MarcusAl/Edfu/node_modules/@babel/parser/lib/index.js:13376:10)\n    at Parser.parseBlock (/Users/MarkAllen/code/MarcusAl/Edfu/node_modules/@babel/parser/lib/index.js:13360:10)\n    at Parser.parseStatementContent (/Users/MarkAllen/code/MarcusAl/Edfu/node_modules/@babel/parser/lib/index.js:12872:21)\n    at Parser.parseStatement (/Users/MarkAllen/code/MarcusAl/Edfu/node_modules/@babel/parser/lib/index.js:12796:17)\n    at Parser.parseIfStatement (/Users/MarkAllen/code/MarcusAl/Edfu/node_modules/@babel/parser/lib/index.js:13160:53)\n    at Parser.parseStatementContent (/Users/MarkAllen/code/MarcusAl/Edfu/node_modules/@babel/parser/lib/index.js:12841:21)\n    at Parser.parseStatement (/Users/MarkAllen/code/MarcusAl/Edfu/node_modules/@babel/parser/lib/index.js:12796:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/MarkAllen/code/MarcusAl/Edfu/node_modules/@babel/parser/lib/index.js:13385:25)\n    at Parser.parseBlockBody (/Users/MarkAllen/code/MarcusAl/Edfu/node_modules/@babel/parser/lib/index.js:13376:10)");

/***/ })

/******/ });
//# sourceMappingURL=application-e8b8411efdfbdf4e6308.js.map