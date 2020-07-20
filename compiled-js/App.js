"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderDOM = exports.createElement = void 0;

var _react = require("react");

var _reactDom = require("react-dom");

var _Components = require("./Components");

var createElement = _react.createElement;
exports.createElement = createElement;
var renderDOM = _reactDom.render;
exports.renderDOM = renderDOM;
renderDOM(createElement(function () {
  return (0, _Components.Counter)();
}, {}), document.getElementById("feliz-app"));