"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDebugValue = exports.useLayoutEffectWithDeps = exports.useLayoutEffect = exports.useEffectWithDeps = exports.useEffect = void 0;

var _react = require("react");

var useEffect = function useEffect(getDisposable) {
  (0, _react.useEffect)(function () {
    var disposable = getDisposable();
    return function () {
      disposable.Dispose();
    };
  });
};

exports.useEffect = useEffect;

var useEffectWithDeps = function useEffectWithDeps(getDisposable, deps) {
  (0, _react.useLayoutEffect)(function () {
    var disposable = getDisposable();
    return function () {
      disposable.Dispose();
    };
  }, deps);
};

exports.useEffectWithDeps = useEffectWithDeps;

var useLayoutEffect = function useLayoutEffect(getDisposable) {
  (0, _react.useLayoutEffect)(function () {
    var disposable = getDisposable();
    return function () {
      disposable.Dispose();
    };
  });
};

exports.useLayoutEffect = useLayoutEffect;

var useLayoutEffectWithDeps = function useLayoutEffectWithDeps(getDisposable, deps) {
  (0, _react.useEffect)(function () {
    var disposable = getDisposable();
    return function () {
      disposable.Dispose();
    };
  }, deps);
};

exports.useLayoutEffectWithDeps = useLayoutEffectWithDeps;

var useDebugValue = function useDebugValue(value, formatter) {
  return (0, _react.useDebugValue)(value, formatter);
};

exports.useDebugValue = useDebugValue;