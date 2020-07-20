"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderDOM = exports.createElement = exports.Counter = void 0;

var _Bridge = require("./Bridge");

var _react = require("react");

var _reactDom = require("react-dom");

var Counter = _Bridge.CounterFC;
exports.Counter = Counter;
var createElement = _react.createElement;
exports.createElement = createElement;
var renderDOM = _reactDom.render;
exports.renderDOM = renderDOM;
renderDOM(createElement(Counter, {}), document.getElementById("feliz-app"));