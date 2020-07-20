"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.some = some;
exports.value = value;
exports.tryValue = tryValue;
exports.toArray = toArray;
exports.defaultArg = defaultArg;
exports.defaultArgWith = defaultArgWith;
exports.filter = filter;
exports.map = map;
exports.map2 = map2;
exports.map3 = map3;
exports.bind = bind;
exports.tryOp = tryOp;
exports.choice1Of2 = choice1Of2;
exports.choice2Of2 = choice2Of2;
exports.tryValueIfChoice1Of2 = tryValueIfChoice1Of2;
exports.tryValueIfChoice2Of2 = tryValueIfChoice2Of2;
exports.ok = ok;
exports.error = error;
exports.mapOk = mapOk;
exports.mapError = mapError;
exports.bindOk = bindOk;
exports.Result = exports.Choice7 = exports.Choice6 = exports.Choice5 = exports.Choice4 = exports.Choice3 = exports.Choice = exports.Some = void 0;

var _Types = require("./Types");

var _Util = require("./Util");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Using a class here for better compatibility with TS files importing Some
var Some = /*#__PURE__*/function () {
  function Some(value) {
    _classCallCheck(this, Some);

    this.value = value;
  } // Don't add "Some" for consistency with erased options


  _createClass(Some, [{
    key: "toString",
    value: function toString() {
      return String(this.value);
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.value;
    }
  }, {
    key: "GetHashCode",
    value: function GetHashCode() {
      return (0, _Util.structuralHash)(this.value);
    }
  }, {
    key: "Equals",
    value: function Equals(other) {
      if (other == null) {
        return false;
      } else {
        return (0, _Util.equals)(this.value, other instanceof Some ? other.value : other);
      }
    }
  }, {
    key: "CompareTo",
    value: function CompareTo(other) {
      if (other == null) {
        return 1;
      } else {
        return (0, _Util.compare)(this.value, other instanceof Some ? other.value : other);
      }
    }
  }]);

  return Some;
}();

exports.Some = Some;

function some(x) {
  return x == null || x instanceof Some ? new Some(x) : x;
}

function value(x) {
  if (x == null) {
    throw new Error("Option has no value");
  } else {
    return x instanceof Some ? x.value : x;
  }
}

function tryValue(x) {
  return x instanceof Some ? x.value : x;
}

function toArray(opt) {
  return opt == null ? [] : [value(opt)];
}

function defaultArg(opt, defaultValue) {
  return opt != null ? value(opt) : defaultValue;
}

function defaultArgWith(opt, defThunk) {
  return opt != null ? value(opt) : defThunk();
}

function filter(predicate, opt) {
  return opt != null ? predicate(value(opt)) ? opt : undefined : opt;
}

function map(mapping, opt) {
  return opt != null ? some(mapping(value(opt))) : undefined;
}

function map2(mapping, opt1, opt2) {
  return opt1 != null && opt2 != null ? mapping(value(opt1), value(opt2)) : undefined;
}

function map3(mapping, opt1, opt2, opt3) {
  return opt1 != null && opt2 != null && opt3 != null ? mapping(value(opt1), value(opt2), value(opt3)) : undefined;
}

function bind(binder, opt) {
  return opt != null ? binder(value(opt)) : undefined;
}

function tryOp(op, arg) {
  try {
    return some(op(arg));
  } catch (_a) {
    return undefined;
  }
} // CHOICE


var Choice = /*#__PURE__*/function (_Union) {
  _inherits(Choice, _Union);

  function Choice() {
    _classCallCheck(this, Choice);

    return _possibleConstructorReturn(this, _getPrototypeOf(Choice).apply(this, arguments));
  }

  return Choice;
}(_Types.Union);

exports.Choice = Choice;

var Choice3 = /*#__PURE__*/function (_Union2) {
  _inherits(Choice3, _Union2);

  function Choice3() {
    _classCallCheck(this, Choice3);

    return _possibleConstructorReturn(this, _getPrototypeOf(Choice3).apply(this, arguments));
  }

  return Choice3;
}(_Types.Union);

exports.Choice3 = Choice3;

var Choice4 = /*#__PURE__*/function (_Union3) {
  _inherits(Choice4, _Union3);

  function Choice4() {
    _classCallCheck(this, Choice4);

    return _possibleConstructorReturn(this, _getPrototypeOf(Choice4).apply(this, arguments));
  }

  return Choice4;
}(_Types.Union);

exports.Choice4 = Choice4;

var Choice5 = /*#__PURE__*/function (_Union4) {
  _inherits(Choice5, _Union4);

  function Choice5() {
    _classCallCheck(this, Choice5);

    return _possibleConstructorReturn(this, _getPrototypeOf(Choice5).apply(this, arguments));
  }

  return Choice5;
}(_Types.Union);

exports.Choice5 = Choice5;

var Choice6 = /*#__PURE__*/function (_Union5) {
  _inherits(Choice6, _Union5);

  function Choice6() {
    _classCallCheck(this, Choice6);

    return _possibleConstructorReturn(this, _getPrototypeOf(Choice6).apply(this, arguments));
  }

  return Choice6;
}(_Types.Union);

exports.Choice6 = Choice6;

var Choice7 = /*#__PURE__*/function (_Union6) {
  _inherits(Choice7, _Union6);

  function Choice7() {
    _classCallCheck(this, Choice7);

    return _possibleConstructorReturn(this, _getPrototypeOf(Choice7).apply(this, arguments));
  }

  return Choice7;
}(_Types.Union);

exports.Choice7 = Choice7;

function choice1Of2(x) {
  return new Choice(0, "Choice1Of2", x);
}

function choice2Of2(x) {
  return new Choice(1, "Choice2Of2", x);
}

function tryValueIfChoice1Of2(x) {
  return x.tag === 0 ? some(x.fields[0]) : undefined;
}

function tryValueIfChoice2Of2(x) {
  return x.tag === 1 ? some(x.fields[0]) : undefined;
} // RESULT


var Result = /*#__PURE__*/function (_Union7) {
  _inherits(Result, _Union7);

  function Result() {
    _classCallCheck(this, Result);

    return _possibleConstructorReturn(this, _getPrototypeOf(Result).apply(this, arguments));
  }

  return Result;
}(_Types.Union);

exports.Result = Result;

function ok(x) {
  return new Result(0, "Ok", x);
}

function error(x) {
  return new Result(1, "Error", x);
}

function mapOk(f, result) {
  return result.tag === 0 ? ok(f(result.fields[0])) : result;
}

function mapError(f, result) {
  return result.tag === 1 ? error(f(result.fields[0])) : result;
}

function bindOk(f, result) {
  return result.tag === 0 ? f(result.fields[0]) : result;
}