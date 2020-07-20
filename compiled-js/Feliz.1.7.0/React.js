"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Internal$reflection = Internal$reflection;
exports.Internal$$$$002Ector = Internal$$$$002Ector;
exports.Internal$$$functionComponent$$Z1B155329 = Internal$$$functionComponent$$Z1B155329;
exports.Internal$$$memo$$Z603636D8 = Internal$$$memo$$Z603636D8;
exports.React$reflection = React$reflection;
exports.React$$$createDisposable$$3A5B6456 = React$$$createDisposable$$3A5B6456;
exports.React$$$useState$$FCFD9EF = React$$$useState$$FCFD9EF;
exports.React$$$useReducer$$2B9E6EA0 = React$$$useReducer$$2B9E6EA0;
exports.React$$$useEffect$$Z4935BE6B = React$$$useEffect$$Z4935BE6B;
exports.React$$$useEffect$$Z5CB81B8 = React$$$useEffect$$Z5CB81B8;
exports.React$$$useLayoutEffect$$Z4935BE6B = React$$$useLayoutEffect$$Z4935BE6B;
exports.React$$$useLayoutEffect$$Z5CB81B8 = React$$$useLayoutEffect$$Z5CB81B8;
exports.React$$$useLayoutEffect$$3A5B6456 = React$$$useLayoutEffect$$3A5B6456;
exports.React$$$useLayoutEffect$$Z101E1A95 = React$$$useLayoutEffect$$Z101E1A95;
exports.React$$$useLayoutEffectOnce$$3A5B6456 = React$$$useLayoutEffectOnce$$3A5B6456;
exports.React$$$useLayoutEffectOnce$$Z4935BE6B = React$$$useLayoutEffectOnce$$Z4935BE6B;
exports.React$$$useEffectOnce$$3A5B6456 = React$$$useEffectOnce$$3A5B6456;
exports.React$$$useEffectOnce$$Z4935BE6B = React$$$useEffectOnce$$Z4935BE6B;
exports.React$$$useEffectOnce$$Z3718DFC0 = React$$$useEffectOnce$$Z3718DFC0;
exports.React$$$useEffect$$3A5B6456 = React$$$useEffect$$3A5B6456;
exports.React$$$useEffect$$Z101E1A95 = React$$$useEffect$$Z101E1A95;
exports.React$$$useDebugValue$$Z721C83C5 = React$$$useDebugValue$$Z721C83C5;
exports.React$$$useDebugValue$$77A55D6D = React$$$useDebugValue$$77A55D6D;
exports.React$$$useCallback$$93353E = React$$$useCallback$$93353E;
exports.React$$$useRef$$1505 = React$$$useRef$$1505;
exports.React$$$useInputRef = React$$$useInputRef;
exports.React$$$useButtonRef = React$$$useButtonRef;
exports.React$$$useElementRef = React$$$useElementRef;
exports.React$$$useMemo$$CF4EA67 = React$$$useMemo$$CF4EA67;
exports.React$$$functionComponent$$2F9D7239 = React$$$functionComponent$$2F9D7239;
exports.React$$$functionComponent$$Z4C5FE1BE = React$$$functionComponent$$Z4C5FE1BE;
exports.React$$$functionComponent$$19A12FB2 = React$$$functionComponent$$19A12FB2;
exports.React$$$functionComponent$$2E1DD889 = React$$$functionComponent$$2E1DD889;
exports.React$$$memo$$62A0F746 = React$$$memo$$62A0F746;
exports.React$$$memo$$6648A89D = React$$$memo$$6648A89D;
exports.React$$$memo$$C2C6BED = React$$$memo$$C2C6BED;
exports.React$$$memo$$Z4FCC584A = React$$$memo$$Z4FCC584A;
exports.React$$$createContext$$1AE444D8 = React$$$createContext$$1AE444D8;
exports.React$$$contextProvider$$34D9BBBD = React$$$contextProvider$$34D9BBBD;
exports.React$$$contextProvider$$138D2F56 = React$$$contextProvider$$138D2F56;
exports.React$$$contextConsumer$$Z68910595 = React$$$contextConsumer$$Z68910595;
exports.React$$$contextConsumer$$56D53A40 = React$$$contextConsumer$$56D53A40;
exports.React$$$useContext$$37FA55CF = React$$$useContext$$37FA55CF;
exports.React$$$useCallbackRef$$7C4B0DD6 = React$$$useCallbackRef$$7C4B0DD6;
exports.React$$$forwardRef$$3790D881 = React$$$forwardRef$$3790D881;
exports.React$$$forwardRef$$7DC3DB1A = React$$$forwardRef$$7DC3DB1A;
exports.React$$$strictMode$$6E3A73D = React$$$strictMode$$6E3A73D;
exports.React$$$lazy$0027$$4712D3AE = React$$$lazy$0027$$4712D3AE;
exports.React$$$lazy$0027$$Z3D8450FC = React$$$lazy$0027$$Z3D8450FC;
exports.React$$$suspense$$6E3A73D = React$$$suspense$$6E3A73D;
exports.React$$$suspense$$Z3796A576 = React$$$suspense$$Z3796A576;
exports.React$$$useImperativeHandle$$596DDC25 = React$$$useImperativeHandle$$596DDC25;
exports.React$$$useImperativeHandle$$Z12F09548 = React$$$useImperativeHandle$$Z12F09548;
exports.Feliz$002EReact$$React$002EuseState$002EStatic$$1505 = Feliz$002EReact$$React$002EuseState$002EStatic$$1505;
exports.React = exports.Internal = exports.ReactInterop$$$useLayoutEffectWithDeps = exports.ReactInterop$$$useLayoutEffect = exports.ReactInterop$$$useEffectWithDeps = exports.ReactInterop$$$useEffect = exports.ReactInterop$$$useDebugValueWithFormatter = void 0;

var _ReactInterop = require("./ReactInterop");

var _Types = require("../fable-library.2.10.1/Types");

var _Reflection = require("../fable-library.2.10.1/Reflection");

var _Option = require("../fable-library.2.10.1/Option");

var _Seq = require("../fable-library.2.10.1/Seq");

var _Interop = require("./Interop");

var _Util = require("../fable-library.2.10.1/Util");

var react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var ReactInterop$$$useDebugValueWithFormatter = _ReactInterop.useDebugValue;
exports.ReactInterop$$$useDebugValueWithFormatter = ReactInterop$$$useDebugValueWithFormatter;
var ReactInterop$$$useEffect = _ReactInterop.useEffect;
exports.ReactInterop$$$useEffect = ReactInterop$$$useEffect;
var ReactInterop$$$useEffectWithDeps = _ReactInterop.useEffectWithDeps;
exports.ReactInterop$$$useEffectWithDeps = ReactInterop$$$useEffectWithDeps;
var ReactInterop$$$useLayoutEffect = _ReactInterop.useLayoutEffect;
exports.ReactInterop$$$useLayoutEffect = ReactInterop$$$useLayoutEffect;
var ReactInterop$$$useLayoutEffectWithDeps = _ReactInterop.useLayoutEffectWithDeps;
exports.ReactInterop$$$useLayoutEffectWithDeps = ReactInterop$$$useLayoutEffectWithDeps;
var Internal = (0, _Types.declare)(function Feliz_Internal() {
  void null;
});
exports.Internal = Internal;

function Internal$reflection() {
  return (0, _Reflection.class_type)("Feliz.Internal", undefined, Internal);
}

function Internal$$$$002Ector() {
  return this instanceof Internal ? Internal.call(this) : new Internal();
}

(function Internal$$$$002Ecctor() {
  void null;
})();

function Internal$$$functionComponent$$Z1B155329(renderElement, name, withKey) {
  (0, _Seq.iterate)(function action(name$$1) {
    renderElement.displayName = name$$1;
  }, (0, _Option.toArray)(name));
  return function (props) {
    var props$$2;
    props$$2 = Internal$$$propsWithKey(withKey, props);
    return _Interop.reactApi.createElement(renderElement, props$$2);
  };
}

function Internal$$$memo$$Z603636D8(renderElement$$1, name$$2, areEqual, withKey$$1) {
  var memoElementType = _Interop.reactApi.memo(renderElement$$1, (0, _Util.uncurry)(2, (0, _Option.defaultArg)((0, _Util.curry)(2, areEqual), null)));

  (0, _Seq.iterate)(function action$$1(name$$3) {
    renderElement$$1.displayName = name$$3;
  }, (0, _Option.toArray)(name$$2));
  return function (props$$3) {
    var props$$5;
    props$$5 = Internal$$$propsWithKey(withKey$$1, props$$3);
    return _Interop.reactApi.createElement(memoElementType, props$$5);
  };
}

function Internal$$$propsWithKey(withKey$$2, props$$6) {
  if (withKey$$2 == null) {
    return props$$6;
  } else {
    var f = withKey$$2;
    props$$6.key = f(props$$6);
    return props$$6;
  }
}

var React = (0, _Types.declare)(function Feliz_React() {});
exports.React = React;

function React$reflection() {
  return (0, _Reflection.class_type)("Feliz.React", undefined, React);
}

function React$$$createDisposable$$3A5B6456(dispose) {
  return {
    Dispose: function Dispose() {
      dispose();
    }
  };
}

function React$$$useState$$FCFD9EF(initializer) {
  return _Interop.reactApi.useState(initializer);
}

function React$$$useReducer$$2B9E6EA0(update, initialState) {
  return _Interop.reactApi.useReducer(update, initialState);
}

function React$$$useEffect$$Z4935BE6B(effect$$4) {
  ReactInterop$$$useEffect(effect$$4);
}

function React$$$useEffect$$Z5CB81B8(effect$$5, dependencies) {
  ReactInterop$$$useEffectWithDeps(effect$$5, dependencies);
}

function React$$$useLayoutEffect$$Z4935BE6B(effect$$6) {
  ReactInterop$$$useLayoutEffect(effect$$6);
}

function React$$$useLayoutEffect$$Z5CB81B8(effect$$7, dependencies$$1) {
  ReactInterop$$$useLayoutEffectWithDeps(effect$$7, dependencies$$1);
}

function React$$$useLayoutEffect$$3A5B6456(effect$$8) {
  ReactInterop$$$useLayoutEffect(function (_arg1) {
    effect$$8();
    return React$$$createDisposable$$3A5B6456(function () {
      void null;
    });
  });
}

function React$$$useLayoutEffect$$Z101E1A95(effect$$9, dependencies$$2) {
  ReactInterop$$$useLayoutEffect(function (_arg2) {
    effect$$9();
    return React$$$createDisposable$$3A5B6456(function () {
      void null;
    });
  });
}

function React$$$useLayoutEffectOnce$$3A5B6456(effect$$10) {
  React$$$useLayoutEffect$$Z101E1A95(effect$$10, []);
}

function React$$$useLayoutEffectOnce$$Z4935BE6B(effect$$11) {
  React$$$useLayoutEffect$$Z5CB81B8(effect$$11, []);
}

function React$$$useEffectOnce$$3A5B6456(effect$$12) {
  React$$$useEffect$$Z101E1A95(effect$$12, []);
}

function React$$$useEffectOnce$$Z4935BE6B(effect$$13) {
  React$$$useEffect$$Z5CB81B8(effect$$13, []);
}

function React$$$useEffectOnce$$Z3718DFC0(effect$$14) {
  React$$$useEffect$$Z5CB81B8(function () {
    var disposeOption = effect$$14();
    return {
      Dispose: function Dispose() {
        (0, _Seq.iterate)(function action$$2(d) {
          d.Dispose();
        }, (0, _Option.toArray)(disposeOption));
      }
    };
  }, []);
}

function React$$$useEffect$$3A5B6456(effect$$15) {
  ReactInterop$$$useEffect(function (_arg3) {
    effect$$15();
    return React$$$createDisposable$$3A5B6456(function () {
      void null;
    });
  });
}

function React$$$useEffect$$Z101E1A95(effect$$16, dependencies$$3) {
  ReactInterop$$$useEffectWithDeps(function (_arg4) {
    effect$$16();
    return React$$$createDisposable$$3A5B6456(function () {
      void null;
    });
  }, dependencies$$3);
}

function React$$$useDebugValue$$Z721C83C5(value$$5) {
  ReactInterop$$$useDebugValueWithFormatter(value$$5, function (x) {
    return x;
  });
}

function React$$$useDebugValue$$77A55D6D(value$$6, formatter$$1) {
  ReactInterop$$$useDebugValueWithFormatter(value$$6, formatter$$1);
}

function React$$$useCallback$$93353E(callbackFunction, dependencies$$4) {
  var arg10$$1 = (0, _Option.defaultArg)(dependencies$$4, []);
  return _Interop.reactApi.useCallback(callbackFunction, arg10$$1);
}

function React$$$useRef$$1505(initialValue) {
  return _Interop.reactApi.useRef(initialValue);
}

function React$$$useInputRef() {
  return React$$$useRef$$1505(undefined);
}

function React$$$useButtonRef() {
  return React$$$useRef$$1505(undefined);
}

function React$$$useElementRef() {
  return React$$$useRef$$1505(undefined);
}

function React$$$useMemo$$CF4EA67(createFunction, dependencies$$5) {
  var arg10$$2 = (0, _Option.defaultArg)(dependencies$$5, []);
  return _Interop.reactApi.useMemo(createFunction, arg10$$2);
}

function React$$$functionComponent$$2F9D7239(render, withKey$$3) {
  return Internal$$$functionComponent$$Z1B155329(render, undefined, withKey$$3);
}

function React$$$functionComponent$$Z4C5FE1BE(name$$4, render$$1, withKey$$4) {
  return Internal$$$functionComponent$$Z1B155329(render$$1, name$$4, withKey$$4);
}

function React$$$functionComponent$$19A12FB2(render$$2, withKey$$5) {
  return Internal$$$functionComponent$$Z1B155329(function ($arg$$3) {
    var arg00$$3 = render$$2($arg$$3);
    var xs = arg00$$3;
    var props$$7 = [];
    return react.createElement.apply(react, [react.Fragment, (0, _Util.createObj)(props$$7, 1)].concat(_toConsumableArray(xs)));
  }, undefined, withKey$$5);
}

function React$$$functionComponent$$2E1DD889(name$$5, render$$3, withKey$$6) {
  return Internal$$$functionComponent$$Z1B155329(function ($arg$$4) {
    var arg00$$4 = render$$3($arg$$4);
    var xs$$1 = arg00$$4;
    var props$$8 = [];
    return react.createElement.apply(react, [react.Fragment, (0, _Util.createObj)(props$$8, 1)].concat(_toConsumableArray(xs$$1)));
  }, name$$5, withKey$$6);
}

function React$$$memo$$62A0F746(render$$4, withKey$$7, areEqual$$1) {
  return Internal$$$memo$$Z603636D8(render$$4, undefined, areEqual$$1, withKey$$7);
}

function React$$$memo$$6648A89D(name$$6, render$$5, withKey$$8, areEqual$$2) {
  return Internal$$$memo$$Z603636D8(render$$5, name$$6, areEqual$$2, withKey$$8);
}

function React$$$memo$$C2C6BED(render$$6, withKey$$9, areEqual$$3) {
  return Internal$$$memo$$Z603636D8(function ($arg$$5) {
    var arg00$$5 = render$$6($arg$$5);
    var xs$$2 = arg00$$5;
    var props$$9 = [];
    return react.createElement.apply(react, [react.Fragment, (0, _Util.createObj)(props$$9, 1)].concat(_toConsumableArray(xs$$2)));
  }, undefined, areEqual$$3, withKey$$9);
}

function React$$$memo$$Z4FCC584A(name$$7, render$$7, withKey$$10, areEqual$$4) {
  return Internal$$$memo$$Z603636D8(function ($arg$$6) {
    var arg00$$6 = render$$7($arg$$6);
    var xs$$3 = arg00$$6;
    var props$$10 = [];
    return react.createElement.apply(react, [react.Fragment, (0, _Util.createObj)(props$$10, 1)].concat(_toConsumableArray(xs$$3)));
  }, name$$7, areEqual$$4, withKey$$10);
}

function React$$$createContext$$1AE444D8(name$$8, defaultValue) {
  var contextObject = _Interop.reactApi.createContext((0, _Option.defaultArg)(defaultValue, void 0));

  (0, _Seq.iterate)(function action$$3(name$$9) {
    contextObject.displayName = name$$9;
  }, (0, _Option.toArray)(name$$8));
  return contextObject;
}

function React$$$contextProvider$$34D9BBBD(contextObject$$1, contextValue, child) {
  return _Interop.reactApi.createElement.apply(_Interop.reactApi, [contextObject$$1.Provider, {
    value: contextValue
  }].concat([child]));
}

function React$$$contextProvider$$138D2F56(contextObject$$2, contextValue$$1, children$$4) {
  return _Interop.reactApi.createElement.apply(_Interop.reactApi, [contextObject$$2.Provider, {
    value: contextValue$$1
  }].concat(_toConsumableArray(children$$4)));
}

function React$$$contextConsumer$$Z68910595(contextObject$$3, render$$8) {
  return _Interop.reactApi.createElement.apply(_Interop.reactApi, [contextObject$$3.Consumer, null].concat([render$$8]));
}

function React$$$contextConsumer$$56D53A40(contextObject$$4, render$$9) {
  return _Interop.reactApi.createElement.apply(_Interop.reactApi, [contextObject$$4.Consumer, null].concat([function ($arg$$7) {
    var arg00$$7 = render$$9($arg$$7);
    var xs$$4 = arg00$$7;
    var props$$11 = [];
    return react.createElement.apply(react, [react.Fragment, (0, _Util.createObj)(props$$11, 1)].concat(_toConsumableArray(xs$$4)));
  }]));
}

function React$$$useContext$$37FA55CF(contextObject$$5) {
  return _Interop.reactApi.useContext(contextObject$$5);
}

function React$$$useCallbackRef$$7C4B0DD6(callback) {
  var lastRenderCallbackRef = React$$$useRef$$1505(callback);
  var callbackRef = React$$$useCallback$$93353E(function (arg) {
    return lastRenderCallbackRef.current(arg);
  }, []);
  React$$$useLayoutEffect$$3A5B6456(function () {
    lastRenderCallbackRef.current = callback;
  });
  return callbackRef;
}

function React$$$forwardRef$$3790D881(render$$10) {
  var forwardRefType = _Interop.reactApi.forwardRef(function (props$$12, ref) {
    return render$$10([props$$12, ref]);
  });

  return function (tupledArg) {
    var o;
    return _Interop.reactApi.createElement(forwardRefType, (o = (0, _Types.anonRecord)({
      props: tupledArg[0],
      ref: tupledArg[1]
    }), (Object.assign({}, o))));
  };
}

function React$$$forwardRef$$7DC3DB1A(name$$10, render$$11) {
  var forwardRefType$$1 = _Interop.reactApi.forwardRef(function (props$$14, ref$$2) {
    return render$$11([props$$14, ref$$2]);
  });

  render$$11.displayName = name$$10;
  return function (tupledArg$$1) {
    var o$$1;
    return _Interop.reactApi.createElement(forwardRefType$$1, (o$$1 = (0, _Types.anonRecord)({
      props: tupledArg$$1[0],
      ref: tupledArg$$1[1]
    }), (Object.assign({}, o$$1))));
  };
}

function React$$$strictMode$$6E3A73D(children$$6) {
  return _Interop.reactApi.createElement.apply(_Interop.reactApi, [_Interop.reactApi.StrictMode, undefined].concat(_toConsumableArray(children$$6)));
}

function React$$$lazy$0027$$4712D3AE(dynamicImport, props$$16) {
  return _Interop.reactApi.createElement(_Interop.reactApi.lazy(function () {
    return dynamicImport;
  }), props$$16);
}

function React$$$lazy$0027$$Z3D8450FC(dynamicImport$$1, props$$17) {
  return _Interop.reactApi.createElement(_Interop.reactApi.lazy(dynamicImport$$1), props$$17);
}

function React$$$suspense$$6E3A73D(children$$7) {
  var o$$2;
  return _Interop.reactApi.createElement.apply(_Interop.reactApi, [_Interop.reactApi.Suspense, (o$$2 = (0, _Types.anonRecord)({
    fallback: null
  }), (Object.assign({}, o$$2)))].concat(_toConsumableArray(children$$7)));
}

function React$$$suspense$$Z3796A576(children$$8, fallback) {
  var o$$3;
  return _Interop.reactApi.createElement.apply(_Interop.reactApi, [_Interop.reactApi.Suspense, (o$$3 = (0, _Types.anonRecord)({
    fallback: fallback
  }), (Object.assign({}, o$$3)))].concat(_toConsumableArray(children$$8)));
}

function React$$$useImperativeHandle$$596DDC25(ref$$4, createHandle) {
  _Interop.reactApi.useImperativeHandle(ref$$4, createHandle);
}

function React$$$useImperativeHandle$$Z12F09548(ref$$5, createHandle$$1, dependencies$$6) {
  _Interop.reactApi.useImperativeHandle(ref$$5, createHandle$$1, dependencies$$6);
}

function Feliz$002EReact$$React$002EuseState$002EStatic$$1505(initial) {
  return _Interop.reactApi.useState(initial);
}