"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.declare = declare;
exports.anonRecord = anonRecord;
exports.isException = isException;
exports.Attribute = exports.MatchFailureException = exports.FSharpException = exports.Exception = exports.FSharpRef = exports.Record = exports.Union = exports.List = exports.SystemObject = void 0;

var _Util = require("./Util");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function sameType(x, y) {
  return y != null && Object.getPrototypeOf(x).constructor === Object.getPrototypeOf(y).constructor;
} // Taken from Babel helpers


function inherits(subClass, superClass) {
  // if (typeof superClass !== "function" && superClass !== null) {
  //   throw new TypeError(
  //     "Super expression must either be null or a function, not " +
  //       typeof superClass
  //   );
  // }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  }); // if (superClass)
  //   Object.setPrototypeOf
  //     ? Object.setPrototypeOf(subClass, superClass)
  //     : (subClass.__proto__ = superClass);
}

function declare(cons, superClass) {
  inherits(cons, superClass || SystemObject);
  return cons;
}

var SystemObject = /*#__PURE__*/function () {
  function SystemObject() {
    _classCallCheck(this, SystemObject);
  }

  _createClass(SystemObject, [{
    key: "toString",
    value: function toString() {
      return "{" + Object.entries(this).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            k = _ref2[0],
            v = _ref2[1];

        return k + " = " + String(v);
      }).join(";\n ") + "}";
    }
  }, {
    key: "GetHashCode",
    value: function GetHashCode() {
      return (0, _Util.identityHash)(this);
    }
  }, {
    key: "Equals",
    value: function Equals(other) {
      return this === other;
    }
  }]);

  return SystemObject;
}();

exports.SystemObject = SystemObject;

function compareList(self, other) {
  if (self === other) {
    return 0;
  } else {
    if (other == null) {
      return -1;
    }

    while (self.tail != null) {
      if (other.tail == null) {
        return 1;
      }

      var res = (0, _Util.compare)(self.head, other.head);

      if (res !== 0) {
        return res;
      }

      self = self.tail;
      other = other.tail;
    }

    return other.tail == null ? 0 : -1;
  }
}

var List = /*#__PURE__*/function () {
  function List(head, tail) {
    _classCallCheck(this, List);

    this.head = head;
    this.tail = tail;
  }

  _createClass(List, [{
    key: "toString",
    value: function toString() {
      return "[" + Array.from(this).join("; ") + "]";
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return Array.from(this);
    }
  }, {
    key: Symbol.iterator,
    value: function value() {
      var cur = this;
      return {
        next: function next() {
          var value = cur === null || cur === void 0 ? void 0 : cur.head;
          var done = (cur === null || cur === void 0 ? void 0 : cur.tail) == null;
          cur = cur === null || cur === void 0 ? void 0 : cur.tail;
          return {
            done: done,
            value: value
          };
        }
      };
    }
  }, {
    key: "GetHashCode",
    value: function GetHashCode() {
      var hashes = Array.from(this).map(_Util.structuralHash);
      return (0, _Util.combineHashCodes)(hashes);
    }
  }, {
    key: "Equals",
    value: function Equals(other) {
      return compareList(this, other) === 0;
    }
  }, {
    key: "CompareTo",
    value: function CompareTo(other) {
      return compareList(this, other);
    }
  }]);

  return List;
}();

exports.List = List;

var Union = /*#__PURE__*/function (_SystemObject) {
  _inherits(Union, _SystemObject);

  function Union(tag, name) {
    var _this;

    _classCallCheck(this, Union);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Union).call(this));
    _this.tag = tag | 0;
    _this.name = name;

    for (var _len = arguments.length, fields = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      fields[_key - 2] = arguments[_key];
    }

    _this.fields = fields;
    return _this;
  }

  _createClass(Union, [{
    key: "toString",
    value: function toString() {
      var len = this.fields.length;

      if (len === 0) {
        return this.name;
      } else if (len === 1) {
        return this.name + " " + String(this.fields[0]);
      } else {
        return this.name + " (" + this.fields.map(function (x) {
          return String(x);
        }).join(",") + ")";
      }
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.fields.length === 0 ? this.name : [this.name].concat(this.fields);
    }
  }, {
    key: "GetHashCode",
    value: function GetHashCode() {
      var hashes = this.fields.map(function (x) {
        return (0, _Util.structuralHash)(x);
      });
      hashes.splice(0, 0, (0, _Util.numberHash)(this.tag));
      return (0, _Util.combineHashCodes)(hashes);
    }
  }, {
    key: "Equals",
    value: function Equals(other) {
      return this === other || sameType(this, other) && this.tag === other.tag && (0, _Util.equalArrays)(this.fields, other.fields);
    }
  }, {
    key: "CompareTo",
    value: function CompareTo(other) {
      if (this === other) {
        return 0;
      } else if (!sameType(this, other)) {
        return -1;
      } else if (this.tag === other.tag) {
        return (0, _Util.compareArrays)(this.fields, other.fields);
      } else {
        return this.tag < other.tag ? -1 : 1;
      }
    }
  }]);

  return Union;
}(SystemObject);

exports.Union = Union;

function recordToJson(record, getFieldNames) {
  var o = {};
  var keys = getFieldNames == null ? Object.keys(record) : getFieldNames(record);

  for (var i = 0; i < keys.length; i++) {
    o[keys[i]] = record[keys[i]];
  }

  return o;
}

function recordEquals(self, other, getFieldNames) {
  if (self === other) {
    return true;
  } else if (!sameType(self, other)) {
    return false;
  } else {
    var thisNames = getFieldNames == null ? Object.keys(self) : getFieldNames(self);

    for (var i = 0; i < thisNames.length; i++) {
      if (!(0, _Util.equals)(self[thisNames[i]], other[thisNames[i]])) {
        return false;
      }
    }

    return true;
  }
}

function recordCompare(self, other, getFieldNames) {
  if (self === other) {
    return 0;
  } else if (!sameType(self, other)) {
    return -1;
  } else {
    var thisNames = getFieldNames == null ? Object.keys(self) : getFieldNames(self);

    for (var i = 0; i < thisNames.length; i++) {
      var result = (0, _Util.compare)(self[thisNames[i]], other[thisNames[i]]);

      if (result !== 0) {
        return result;
      }
    }

    return 0;
  }
}

var Record = /*#__PURE__*/function (_SystemObject2) {
  _inherits(Record, _SystemObject2);

  function Record() {
    _classCallCheck(this, Record);

    return _possibleConstructorReturn(this, _getPrototypeOf(Record).apply(this, arguments));
  }

  _createClass(Record, [{
    key: "toString",
    value: function toString() {
      return "{" + Object.entries(this).map(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            k = _ref4[0],
            v = _ref4[1];

        return k + " = " + String(v);
      }).join(";\n ") + "}";
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return recordToJson(this);
    }
  }, {
    key: "GetHashCode",
    value: function GetHashCode() {
      var hashes = Object.values(this).map(function (v) {
        return (0, _Util.structuralHash)(v);
      });
      return (0, _Util.combineHashCodes)(hashes);
    }
  }, {
    key: "Equals",
    value: function Equals(other) {
      return recordEquals(this, other);
    }
  }, {
    key: "CompareTo",
    value: function CompareTo(other) {
      return recordCompare(this, other);
    }
  }]);

  return Record;
}(SystemObject);

exports.Record = Record;

function anonRecord(o) {
  return Object.assign(Object.create(Record.prototype), o);
}

var FSharpRef = /*#__PURE__*/function (_Record) {
  _inherits(FSharpRef, _Record);

  function FSharpRef(contents) {
    var _this2;

    _classCallCheck(this, FSharpRef);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(FSharpRef).call(this));
    _this2.contents = contents;
    return _this2;
  }

  return FSharpRef;
}(Record);

exports.FSharpRef = FSharpRef;
var Exception = declare(function Exception(message) {
  this.stack = Error().stack;
  this.message = message;
}, SystemObject);
exports.Exception = Exception;

function isException(x) {
  return x instanceof Error || x instanceof Exception;
}

function getFSharpExceptionFieldNames(self) {
  return Object.keys(self).filter(function (k) {
    return k !== "message" && k !== "stack";
  });
}

var FSharpException = /*#__PURE__*/function (_Exception) {
  _inherits(FSharpException, _Exception);

  function FSharpException() {
    _classCallCheck(this, FSharpException);

    return _possibleConstructorReturn(this, _getPrototypeOf(FSharpException).apply(this, arguments));
  }

  _createClass(FSharpException, [{
    key: "toString",
    value: function toString() {
      var _a; // const fieldNames = getFSharpExceptionFieldNames(this);


      var fields = Object.entries(this).filter(function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
            k = _ref6[0],
            _ = _ref6[1];

        return k !== "message" && k !== "stack";
      });
      var len = fields.length;

      if (len === 0) {
        return (_a = this.message) !== null && _a !== void 0 ? _a : "";
      } else if (len === 1) {
        return this.message + " " + String(fields[1]);
      } else {
        return this.message + " (" + fields.map(function (_ref7) {
          var _ref8 = _slicedToArray(_ref7, 2),
              _ = _ref8[0],
              v = _ref8[1];

          return String(v);
        }).join(",") + ")";
      }
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return recordToJson(this, getFSharpExceptionFieldNames);
    }
  }, {
    key: "GetHashCode",
    value: function GetHashCode() {
      var fields = Object.entries(this).filter(function (_ref9) {
        var _ref10 = _slicedToArray(_ref9, 2),
            k = _ref10[0],
            _ = _ref10[1];

        return k !== "message" && k !== "stack";
      });
      var hashes = fields.map(function (_ref11) {
        var _ref12 = _slicedToArray(_ref11, 2),
            _ = _ref12[0],
            v = _ref12[1];

        return (0, _Util.structuralHash)(v);
      });
      return (0, _Util.combineHashCodes)(hashes);
    }
  }, {
    key: "Equals",
    value: function Equals(other) {
      return recordEquals(this, other, getFSharpExceptionFieldNames);
    }
  }, {
    key: "CompareTo",
    value: function CompareTo(other) {
      return recordCompare(this, other, getFSharpExceptionFieldNames);
    }
  }]);

  return FSharpException;
}(Exception);

exports.FSharpException = FSharpException;

var MatchFailureException = /*#__PURE__*/function (_FSharpException) {
  _inherits(MatchFailureException, _FSharpException);

  function MatchFailureException(arg1, arg2, arg3) {
    var _this3;

    _classCallCheck(this, MatchFailureException);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(MatchFailureException).call(this));
    _this3.arg1 = arg1;
    _this3.arg2 = arg2 | 0;
    _this3.arg3 = arg3 | 0;
    _this3.message = "The match cases were incomplete";
    return _this3;
  }

  return MatchFailureException;
}(FSharpException);

exports.MatchFailureException = MatchFailureException;
var Attribute = declare(function Attribute() {
  return;
}, SystemObject);
exports.Attribute = Attribute;