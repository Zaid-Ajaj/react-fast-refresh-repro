"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Counter = Counter;
exports.useState = void 0;

var _react = require("react");

var _Interop = require("./Feliz.1.7.0/Interop");

var _Types = require("./fable-library.2.10.1/Types");

var _Util = require("./fable-library.2.10.1/Util");

var _List = require("./fable-library.2.10.1/List");

var useState = _react.useState;
exports.useState = useState;

function Counter() {
  var xs, properties, xs$$1, properties$$2;
  var patternInput = useState(0);
  var children = (0, _List.ofArray)([(xs = (0, _List.ofArray)([(properties = new _Types.List((0, _Interop.mkStyle)("marginRight", 5), new _Types.List()), (0, _Interop.mkAttr)("style", (0, _Util.createObj)(properties, 0))), (0, _Interop.mkAttr)("onClick", function handler(_arg1) {
    patternInput[1](patternInput[0] + 1);
  }), (0, _Interop.mkAttr)("children", "Increment")]), (0, _Interop.reactElement)("button", (0, _Util.createObj)(xs, 0))), (xs$$1 = (0, _List.ofArray)([(properties$$2 = new _Types.List((0, _Interop.mkStyle)("marginLeft", 5), new _Types.List()), (0, _Interop.mkAttr)("style", (0, _Util.createObj)(properties$$2, 0))), (0, _Interop.mkAttr)("onClick", function handler$$1(_arg2) {
    patternInput[1](patternInput[0] - 1);
  }), (0, _Interop.mkAttr)("children", "Decrement")]), (0, _Interop.reactElement)("button", (0, _Util.createObj)(xs$$1, 0))), (0, _Interop.reactElement)("h1", {
    children: new Int32Array([patternInput[0]])
  })]);
  return (0, _Interop.reactElement)("div", {
    children: _Interop.reactApi.Children.toArray(children)
  });
}