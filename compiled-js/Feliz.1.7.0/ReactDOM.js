"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactDOM$reflection = ReactDOM$reflection;
exports.ReactDOM$$$render$$Z3D10464 = ReactDOM$$$render$$Z3D10464;
exports.ReactDOMServer$reflection = ReactDOMServer$reflection;
exports.ReactDOMServer = exports.ReactDOM = void 0;

var _Types = require("../fable-library.2.10.1/Types");

var _Reflection = require("../fable-library.2.10.1/Reflection");

var _reactDom = require("react-dom");

var ReactDOM = (0, _Types.declare)(function Feliz_ReactDOM() {});
exports.ReactDOM = ReactDOM;

function ReactDOM$reflection() {
  return (0, _Reflection.class_type)("Feliz.ReactDOM", undefined, ReactDOM);
}

function ReactDOM$$$render$$Z3D10464(element, container) {
  return (0, _reactDom.render)(element(), container);
}

var ReactDOMServer = (0, _Types.declare)(function Feliz_ReactDOMServer() {});
exports.ReactDOMServer = ReactDOMServer;

function ReactDOMServer$reflection() {
  return (0, _Reflection.class_type)("Feliz.ReactDOMServer", undefined, ReactDOMServer);
}