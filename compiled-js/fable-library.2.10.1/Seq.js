"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEnumerator = getEnumerator;
exports.toIterator = toIterator;
exports.ofArray = ofArray;
exports.allPairs = allPairs;
exports.append = append;
exports.average = average;
exports.averageBy = averageBy;
exports.concat = concat;
exports.collect = collect;
exports.choose = choose;
exports.compareWith = compareWith;
exports.delay = delay;
exports.empty = empty;
exports.singleton = singleton;
exports.enumerateFromFunctions = enumerateFromFunctions;
exports.enumerateWhile = enumerateWhile;
exports.enumerateThenFinally = enumerateThenFinally;
exports.enumerateUsing = enumerateUsing;
exports.exactlyOne = exactlyOne;
exports.except = except;
exports.exists = exists;
exports.exists2 = exists2;
exports.forAll = forAll;
exports.forAll2 = forAll2;
exports.contains = contains;
exports.filter = filter;
exports.where = where;
exports.fold = fold;
exports.foldBack = foldBack;
exports.fold2 = fold2;
exports.foldBack2 = foldBack2;
exports.tryHead = tryHead;
exports.head = head;
exports.initialize = initialize;
exports.initializeInfinite = initializeInfinite;
exports.tryItem = tryItem;
exports.item = item;
exports.iterate = iterate;
exports.iterate2 = iterate2;
exports.iterateIndexed = iterateIndexed;
exports.iterateIndexed2 = iterateIndexed2;
exports.isEmpty = isEmpty;
exports.tryLast = tryLast;
exports.last = last;
exports.length = length;
exports.map = map;
exports.mapIndexed = mapIndexed;
exports.indexed = indexed;
exports.map2 = map2;
exports.mapIndexed2 = mapIndexed2;
exports.map3 = map3;
exports.mapFold = mapFold;
exports.mapFoldBack = mapFoldBack;
exports.max = max;
exports.maxBy = maxBy;
exports.min = min;
exports.minBy = minBy;
exports.pairwise = pairwise;
exports.rangeChar = rangeChar;
exports.rangeLong = rangeLong;
exports.rangeDecimal = rangeDecimal;
exports.rangeNumber = rangeNumber;
exports.readOnly = readOnly;
exports.reduce = reduce;
exports.reduceBack = reduceBack;
exports.replicate = replicate;
exports.reverse = reverse;
exports.scan = scan;
exports.scanBack = scanBack;
exports.skip = skip;
exports.skipWhile = skipWhile;
exports.sortWith = sortWith;
exports.sum = sum;
exports.sumBy = sumBy;
exports.tail = tail;
exports.take = take;
exports.truncate = truncate;
exports.takeWhile = takeWhile;
exports.tryFind = tryFind;
exports.find = find;
exports.tryFindBack = tryFindBack;
exports.findBack = findBack;
exports.tryFindIndex = tryFindIndex;
exports.findIndex = findIndex;
exports.tryFindIndexBack = tryFindIndexBack;
exports.findIndexBack = findIndexBack;
exports.tryPick = tryPick;
exports.pick = pick;
exports.unfold = unfold;
exports.zip = zip;
exports.zip3 = zip3;
exports.windowed = windowed;
exports.transpose = transpose;
exports.Enumerator = void 0;

var _Decimal = require("./Decimal");

var _Long = require("./Long");

var _Option = require("./Option");

var _Util = require("./Util");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Enumerator = /*#__PURE__*/function () {
  function Enumerator(iter) {
    _classCallCheck(this, Enumerator);

    this.iter = iter;
  }

  _createClass(Enumerator, [{
    key: "MoveNext",
    value: function MoveNext() {
      var cur = this.iter.next();
      this.current = cur.value;
      return !cur.done;
    }
  }, {
    key: "Reset",
    value: function Reset() {
      throw new Error("JS iterators cannot be reset");
    }
  }, {
    key: "Dispose",
    value: function Dispose() {
      return;
    }
  }, {
    key: "Current",
    get: function get() {
      return this.current;
    }
  }]);

  return Enumerator;
}();

exports.Enumerator = Enumerator;

function getEnumerator(o) {
  return new Enumerator(o[Symbol.iterator]());
}

function toIterator(en) {
  return {
    next: function next() {
      return en.MoveNext() ? {
        done: false,
        value: en.Current
      } : {
        done: true,
        value: undefined
      };
    }
  };
} // export function toIterable<T>(en: IEnumerable<T>): Iterable<T> {
//   return {
//     [Symbol.iterator]() {
//       return toIterator(en.GetEnumerator());
//     },
//   };
// }


function __failIfNone(res) {
  if (res == null) {
    throw new Error("Seq did not contain any matching element");
  }

  return (0, _Option.value)(res);
}

function makeSeq(f) {
  var _seq;

  var seq = (_seq = {}, _defineProperty(_seq, Symbol.iterator, f), _defineProperty(_seq, "toString", function toString() {
    return "seq [" + Array.from(seq).join("; ") + "]";
  }), _seq);
  return seq;
}

function ofArray(xs) {
  return delay(function () {
    return unfold(function (i) {
      return i != null && i < xs.length ? [xs[i], i + 1] : undefined;
    }, 0);
  });
}

function allPairs(xs, ys) {
  var firstEl = true;
  var ysCache = [];
  return collect(function (x) {
    if (firstEl) {
      firstEl = false;
      return map(function (y) {
        ysCache.push(y);
        return [x, y];
      }, ys);
    } else {
      return ysCache.map(function (y) {
        return [x, y];
      }); // return map(function (i) {
      //     return [x, ysCache[i]];
      // }, rangeNumber(0, 1, ysCache.length - 1));
    }
  }, xs);
}

function append(xs, ys) {
  return delay(function () {
    var firstDone = false;
    var i = xs[Symbol.iterator]();
    var iters = [i, undefined];
    return unfold(function () {
      var _a, _b;

      var cur;

      if (!firstDone) {
        cur = (_a = iters[0]) === null || _a === void 0 ? void 0 : _a.next();

        if (cur != null && !cur.done) {
          return [cur.value, iters];
        } else {
          firstDone = true;
          iters = [undefined, ys[Symbol.iterator]()];
        }
      }

      cur = (_b = iters[1]) === null || _b === void 0 ? void 0 : _b.next();
      return cur != null && !cur.done ? [cur.value, iters] : undefined;
    }, iters);
  });
}

function average(xs, averager) {
  var count = 0;
  var total = fold(function (acc, x) {
    count++;
    return averager.Add(acc, x);
  }, averager.GetZero(), xs);
  return averager.DivideByInt(total, count);
}

function averageBy(f, xs, averager) {
  var count = 0;
  var total = fold(function (acc, x) {
    count++;
    return averager.Add(acc, f(x));
  }, averager.GetZero(), xs);
  return averager.DivideByInt(total, count);
}

function concat(xs) {
  return delay(function () {
    var iter = xs[Symbol.iterator]();
    var output;
    return unfold(function (innerIter) {
      var hasFinished = false;

      while (!hasFinished) {
        if (innerIter == null) {
          var cur = iter.next();

          if (!cur.done) {
            innerIter = cur.value[Symbol.iterator]();
          } else {
            hasFinished = true;
          }
        } else {
          var _cur = innerIter.next();

          if (!_cur.done) {
            output = _cur.value;
            hasFinished = true;
          } else {
            innerIter = undefined;
          }
        }
      }

      return innerIter != null ? [output, innerIter] : undefined;
    }, undefined);
  });
}

function collect(f, xs) {
  return concat(map(f, xs));
}

function choose(f, xs) {
  return delay(function () {
    return unfold(function (iter) {
      var cur = iter.next();

      while (!cur.done) {
        var y = f(cur.value);

        if (y != null) {
          return [(0, _Option.value)(y), iter];
        }

        cur = iter.next();
      }

      return undefined;
    }, xs[Symbol.iterator]());
  });
}

function compareWith(f, xs, ys) {
  var nonZero = tryFind(function (i) {
    return i !== 0;
  }, map2(f, xs, ys));
  return nonZero != null ? (0, _Option.value)(nonZero) : length(xs) - length(ys);
}

function delay(f) {
  return makeSeq(function () {
    return f()[Symbol.iterator]();
  });
}

function empty() {
  return [];
}

function singleton(y) {
  return [y];
}

function enumerateFromFunctions(factory, moveNext, current) {
  return delay(function () {
    return unfold(function (e) {
      return moveNext(e) ? [current(e), e] : undefined;
    }, factory());
  });
}

function enumerateWhile(cond, xs) {
  return concat(unfold(function () {
    return cond() ? [xs, true] : undefined;
  }, undefined));
}

function enumerateThenFinally(xs, finalFn) {
  return delay(function () {
    var iter;

    try {
      iter = xs[Symbol.iterator]();
    } catch (err) {
      try {
        return empty();
      } finally {
        finalFn();
      }
    }

    return unfold(function (it) {
      try {
        var cur = it.next();
        return !cur.done ? [cur.value, it] : undefined;
      } catch (err) {
        return undefined;
      } finally {
        finalFn();
      }
    }, iter);
  });
}

function enumerateUsing(disp, work) {
  var isDisposed = false;

  var disposeOnce = function disposeOnce() {
    if (!isDisposed) {
      isDisposed = true;
      disp.Dispose();
    }
  };

  try {
    return enumerateThenFinally(work(disp), disposeOnce);
  } catch (err) {
    return void 0;
  } finally {
    disposeOnce();
  }
}

function exactlyOne(xs) {
  var iter = xs[Symbol.iterator]();
  var fst = iter.next();

  if (fst.done) {
    throw new Error("Seq was empty");
  }

  var snd = iter.next();

  if (!snd.done) {
    throw new Error("Seq had multiple items");
  }

  return fst.value;
}

function except(itemsToExclude, source) {
  var exclusionItems = Array.from(itemsToExclude);

  var testIsNotInExclusionItems = function testIsNotInExclusionItems(element) {
    return !exclusionItems.some(function (excludedItem) {
      return (0, _Util.equals)(excludedItem, element);
    });
  };

  return filter(testIsNotInExclusionItems, source);
}

function exists(f, xs) {
  var cur;

  for (var iter = xs[Symbol.iterator]();;) {
    cur = iter.next();

    if (cur.done) {
      break;
    }

    if (f(cur.value)) {
      return true;
    }
  }

  return false;
}

function exists2(f, xs, ys) {
  var cur1;
  var cur2;

  for (var iter1 = xs[Symbol.iterator](), iter2 = ys[Symbol.iterator]();;) {
    cur1 = iter1.next();
    cur2 = iter2.next();

    if (cur1.done || cur2.done) {
      break;
    }

    if (f(cur1.value, cur2.value)) {
      return true;
    }
  }

  return false;
}

function forAll(f, xs) {
  return !exists(function (x) {
    return !f(x);
  }, xs);
}

function forAll2(f, xs, ys) {
  return !exists2(function (x, y) {
    return !f(x, y);
  }, xs, ys);
}

function contains(i, xs) {
  return exists(function (x) {
    return (0, _Util.equals)(x, i);
  }, xs);
}

function filter(f, xs) {
  return delay(function () {
    return unfold(function (iter) {
      var cur = iter.next();

      while (!cur.done) {
        if (f(cur.value)) {
          return [cur.value, iter];
        }

        cur = iter.next();
      }

      return undefined;
    }, xs[Symbol.iterator]());
  });
}

function where(f, xs) {
  return filter(f, xs);
}

function fold(f, acc, xs) {
  if (Array.isArray(xs) || ArrayBuffer.isView(xs)) {
    return xs.reduce(f, acc);
  } else {
    var cur;

    for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
      cur = iter.next();

      if (cur.done) {
        break;
      }

      acc = f(acc, cur.value, i);
    }

    return acc;
  }
}

function foldBack(f, xs, acc) {
  var arr = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : Array.from(xs);

  for (var i = arr.length - 1; i >= 0; i--) {
    acc = f(arr[i], acc, i);
  }

  return acc;
}

function fold2(f, acc, xs, ys) {
  var iter1 = xs[Symbol.iterator]();
  var iter2 = ys[Symbol.iterator]();
  var cur1;
  var cur2;

  for (var i = 0;; i++) {
    cur1 = iter1.next();
    cur2 = iter2.next();

    if (cur1.done || cur2.done) {
      break;
    }

    acc = f(acc, cur1.value, cur2.value, i);
  }

  return acc;
}

function foldBack2(f, xs, ys, acc) {
  var ar1 = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : Array.from(xs);
  var ar2 = Array.isArray(ys) || ArrayBuffer.isView(ys) ? ys : Array.from(ys);

  for (var i = ar1.length - 1; i >= 0; i--) {
    acc = f(ar1[i], ar2[i], acc, i);
  }

  return acc;
}

function tryHead(xs) {
  var iter = xs[Symbol.iterator]();
  var cur = iter.next();
  return cur.done ? undefined : (0, _Option.some)(cur.value);
}

function head(xs) {
  return __failIfNone(tryHead(xs));
}

function initialize(n, f) {
  return delay(function () {
    return unfold(function (i) {
      return i < n ? [f(i), i + 1] : undefined;
    }, 0);
  });
}

function initializeInfinite(f) {
  return delay(function () {
    return unfold(function (i) {
      return [f(i), i + 1];
    }, 0);
  });
}

function tryItem(i, xs) {
  if (i < 0) {
    return undefined;
  }

  if (Array.isArray(xs) || ArrayBuffer.isView(xs)) {
    return i < xs.length ? (0, _Option.some)(xs[i]) : undefined;
  }

  for (var j = 0, iter = xs[Symbol.iterator]();; j++) {
    var cur = iter.next();

    if (cur.done) {
      break;
    }

    if (j === i) {
      return (0, _Option.some)(cur.value);
    }
  }

  return undefined;
}

function item(i, xs) {
  return __failIfNone(tryItem(i, xs));
}

function iterate(f, xs) {
  fold(function (_, x) {
    return f(x), undefined;
  }, undefined, xs);
}

function iterate2(f, xs, ys) {
  fold2(function (_, x, y) {
    return f(x, y), undefined;
  }, undefined, xs, ys);
}

function iterateIndexed(f, xs) {
  fold(function (_, x, i) {
    return f(i !== null && i !== void 0 ? i : 0, x), undefined;
  }, undefined, xs);
}

function iterateIndexed2(f, xs, ys) {
  fold2(function (_, x, y, i) {
    return f(i !== null && i !== void 0 ? i : 0, x, y), undefined;
  }, undefined, xs, ys);
}

function isEmpty(xs) {
  var i = xs[Symbol.iterator]();
  return i.next().done;
}

function tryLast(xs) {
  return isEmpty(xs) ? undefined : (0, _Option.some)(reduce(function (_, x) {
    return x;
  }, xs));
}

function last(xs) {
  return __failIfNone(tryLast(xs));
}

function length(xs) {
  return Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs.length : fold(function (acc, _x) {
    return acc + 1;
  }, 0, xs);
}

function map(f, xs) {
  return delay(function () {
    return unfold(function (iter) {
      var cur = iter.next();
      return !cur.done ? [f(cur.value), iter] : undefined;
    }, xs[Symbol.iterator]());
  });
}

function mapIndexed(f, xs) {
  return delay(function () {
    var i = 0;
    return unfold(function (iter) {
      var cur = iter.next();
      return !cur.done ? [f(i++, cur.value), iter] : undefined;
    }, xs[Symbol.iterator]());
  });
}

function indexed(xs) {
  return mapIndexed(function (i, x) {
    return [i, x];
  }, xs);
}

function map2(f, xs, ys) {
  return delay(function () {
    var iter1 = xs[Symbol.iterator]();
    var iter2 = ys[Symbol.iterator]();
    return unfold(function () {
      var cur1 = iter1.next();
      var cur2 = iter2.next();
      return !cur1.done && !cur2.done ? [f(cur1.value, cur2.value), undefined] : undefined;
    }, undefined);
  });
}

function mapIndexed2(f, xs, ys) {
  return delay(function () {
    var i = 0;
    var iter1 = xs[Symbol.iterator]();
    var iter2 = ys[Symbol.iterator]();
    return unfold(function () {
      var cur1 = iter1.next();
      var cur2 = iter2.next();
      return !cur1.done && !cur2.done ? [f(i++, cur1.value, cur2.value), undefined] : undefined;
    }, undefined);
  });
}

function map3(f, xs, ys, zs) {
  return delay(function () {
    var iter1 = xs[Symbol.iterator]();
    var iter2 = ys[Symbol.iterator]();
    var iter3 = zs[Symbol.iterator]();
    return unfold(function () {
      var cur1 = iter1.next();
      var cur2 = iter2.next();
      var cur3 = iter3.next();
      return !cur1.done && !cur2.done && !cur3.done ? [f(cur1.value, cur2.value, cur3.value), undefined] : undefined;
    }, undefined);
  });
}

function mapFold(f, acc, xs, transform) {
  var result = [];
  var r;
  var cur;

  for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
    cur = iter.next();

    if (cur.done) {
      break;
    }

    var _f = f(acc, cur.value);

    var _f2 = _slicedToArray(_f, 2);

    r = _f2[0];
    acc = _f2[1];
    result.push(r);
  }

  return transform !== void 0 ? [transform(result), acc] : [result, acc];
}

function mapFoldBack(f, xs, acc, transform) {
  var arr = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : Array.from(xs);
  var result = [];
  var r;

  for (var i = arr.length - 1; i >= 0; i--) {
    var _f3 = f(arr[i], acc);

    var _f4 = _slicedToArray(_f3, 2);

    r = _f4[0];
    acc = _f4[1];
    result.push(r);
  }

  return transform !== void 0 ? [transform(result), acc] : [result, acc];
}

function max(xs, comparer) {
  var compareFn = comparer != null ? comparer.Compare : _Util.compare;
  return reduce(function (acc, x) {
    return compareFn(acc, x) === 1 ? acc : x;
  }, xs);
}

function maxBy(f, xs, comparer) {
  var compareFn = comparer != null ? comparer.Compare : _Util.compare;
  return reduce(function (acc, x) {
    return compareFn(f(acc), f(x)) === 1 ? acc : x;
  }, xs);
}

function min(xs, comparer) {
  var compareFn = comparer != null ? comparer.Compare : _Util.compare;
  return reduce(function (acc, x) {
    return compareFn(acc, x) === -1 ? acc : x;
  }, xs);
}

function minBy(f, xs, comparer) {
  var compareFn = comparer != null ? comparer.Compare : _Util.compare;
  return reduce(function (acc, x) {
    return compareFn(f(acc), f(x)) === -1 ? acc : x;
  }, xs);
}

function pairwise(xs) {
  return delay(function () {
    var iter = xs[Symbol.iterator]();
    var cur = iter.next();

    if (cur.done) {
      return empty();
    }

    var hd = cur.value;
    var tl = tail(xs);
    var ys = scan(function (_ref, next) {
      var _ref2 = _slicedToArray(_ref, 2),
          _ = _ref2[0],
          last = _ref2[1];

      return [last, next];
    }, [hd, hd], tl);
    return skip(1, ys);
  });
}

function rangeChar(first, last) {
  return delay(function () {
    return unfold(function (x) {
      return x <= last ? [x, String.fromCharCode(x.charCodeAt(0) + 1)] : undefined;
    }, first);
  });
}

function rangeLong(first, step, last, unsigned) {
  var stepFn = (0, _Long.makeRangeStepFunction)(step, last, unsigned);
  return delay(function () {
    return unfold(stepFn, first);
  });
}

function rangeDecimal(first, step, last) {
  var stepFn = (0, _Decimal.makeRangeStepFunction)(step, last);
  return delay(function () {
    return unfold(stepFn, first);
  });
}

function rangeNumber(first, step, last) {
  if (step === 0) {
    throw new Error("Step cannot be 0");
  }

  return delay(function () {
    return unfold(function (x) {
      return step > 0 && x <= last || step < 0 && x >= last ? [x, x + step] : undefined;
    }, first);
  });
}

function readOnly(xs) {
  return map(function (x) {
    return x;
  }, xs);
}

function reduce(f, xs) {
  if (Array.isArray(xs) || ArrayBuffer.isView(xs)) {
    return xs.reduce(f);
  }

  var iter = xs[Symbol.iterator]();
  var cur = iter.next();

  if (cur.done) {
    throw new Error("Seq was empty");
  }

  var acc = cur.value;

  while (true) {
    cur = iter.next();

    if (cur.done) {
      break;
    }

    acc = f(acc, cur.value);
  }

  return acc;
}

function reduceBack(f, xs) {
  var ar = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : Array.from(xs);

  if (ar.length === 0) {
    throw new Error("Seq was empty");
  }

  var acc = ar[ar.length - 1];

  for (var i = ar.length - 2; i >= 0; i--) {
    acc = f(ar[i], acc, i);
  }

  return acc;
}

function replicate(n, x) {
  return initialize(n, function () {
    return x;
  });
}

function reverse(xs) {
  var ar = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs.slice(0) : Array.from(xs);
  return ofArray(ar.reverse());
}

function scan(f, seed, xs) {
  return delay(function () {
    var iter = xs[Symbol.iterator]();
    return unfold(function (acc) {
      if (acc == null) {
        return [seed, seed];
      }

      var cur = iter.next();

      if (!cur.done) {
        acc = f(acc, cur.value);
        return [acc, acc];
      }

      return undefined;
    }, undefined);
  });
}

function scanBack(f, xs, seed) {
  return reverse(scan(function (acc, x) {
    return f(x, acc);
  }, seed, reverse(xs)));
}

function skip(n, xs) {
  return makeSeq(function () {
    var iter = xs[Symbol.iterator]();

    for (var i = 1; i <= n; i++) {
      if (iter.next().done) {
        throw new Error("Seq has not enough elements");
      }
    }

    return iter;
  });
}

function skipWhile(f, xs) {
  return delay(function () {
    var hasPassed = false;
    return filter(function (x) {
      return hasPassed || (hasPassed = !f(x));
    }, xs);
  });
}

function sortWith(f, xs) {
  var ys = Array.from(xs);
  return ofArray(ys.sort(f));
}

function sum(xs, adder) {
  return fold(function (acc, x) {
    return adder.Add(acc, x);
  }, adder.GetZero(), xs);
}

function sumBy(f, xs, adder) {
  return fold(function (acc, x) {
    return adder.Add(acc, f(x));
  }, adder.GetZero(), xs);
}

function tail(xs) {
  return skip(1, xs);
}

function take(n, xs) {
  var truncate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return delay(function () {
    var iter = xs[Symbol.iterator]();
    return unfold(function (i) {
      if (i < n) {
        var cur = iter.next();

        if (!cur.done) {
          return [cur.value, i + 1];
        }

        if (!truncate) {
          throw new Error("Seq has not enough elements");
        }
      }

      return undefined;
    }, 0);
  });
}

function truncate(n, xs) {
  return take(n, xs, true);
}

function takeWhile(f, xs) {
  return delay(function () {
    var iter = xs[Symbol.iterator]();
    return unfold(function () {
      var cur = iter.next();

      if (!cur.done && f(cur.value)) {
        return [cur.value, undefined];
      }

      return undefined;
    }, 0);
  });
}

function tryFind(f, xs, defaultValue) {
  for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
    var cur = iter.next();

    if (cur.done) {
      break;
    }

    if (f(cur.value, i)) {
      return (0, _Option.some)(cur.value);
    }
  }

  return defaultValue === void 0 ? undefined : (0, _Option.some)(defaultValue);
}

function find(f, xs) {
  return __failIfNone(tryFind(f, xs));
}

function tryFindBack(f, xs, defaultValue) {
  var arr = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs.slice(0) : Array.from(xs);
  return tryFind(f, arr.reverse(), defaultValue);
}

function findBack(f, xs) {
  return __failIfNone(tryFindBack(f, xs));
}

function tryFindIndex(f, xs) {
  for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
    var cur = iter.next();

    if (cur.done) {
      break;
    }

    if (f(cur.value, i)) {
      return i;
    }
  }

  return undefined;
}

function findIndex(f, xs) {
  return __failIfNone(tryFindIndex(f, xs));
}

function tryFindIndexBack(f, xs) {
  var arr = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs.slice(0) : Array.from(xs);

  for (var i = arr.length - 1; i >= 0; i--) {
    if (f(arr[i], i)) {
      return i;
    }
  }

  return undefined;
}

function findIndexBack(f, xs) {
  return __failIfNone(tryFindIndexBack(f, xs));
}

function tryPick(f, xs) {
  for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
    var cur = iter.next();

    if (cur.done) {
      break;
    }

    var y = f(cur.value, i);

    if (y != null) {
      return y;
    }
  }

  return undefined;
}

function pick(f, xs) {
  return __failIfNone(tryPick(f, xs));
}

function unfold(f, fst) {
  return makeSeq(function () {
    // Capture a copy of the first value in the closure
    // so the sequence is restarted every time, see #1230
    var acc = fst;
    var iter = {
      next: function next() {
        var res = f(acc);

        if (res != null) {
          var v = (0, _Option.value)(res);

          if (v != null) {
            acc = v[1];
            return {
              done: false,
              value: v[0]
            };
          }
        }

        return {
          done: true,
          value: undefined
        };
      }
    };
    return iter;
  });
}

function zip(xs, ys) {
  return map2(function (x, y) {
    return [x, y];
  }, xs, ys);
}

function zip3(xs, ys, zs) {
  return map3(function (x, y, z) {
    return [x, y, z];
  }, xs, ys, zs);
}

function windowed(windowSize, source) {
  if (windowSize <= 0) {
    throw new Error("windowSize must be positive");
  }

  return makeSeq(function () {
    var window = [];
    var iter = source[Symbol.iterator]();
    var iter2 = {
      next: function next() {
        var cur;

        while (window.length < windowSize) {
          if ((cur = iter.next()).done) {
            return {
              done: true,
              value: undefined
            };
          }

          window.push(cur.value);
        }

        var value = window;
        window = window.slice(1);
        return {
          done: false,
          value: value
        };
      }
    };
    return iter2;
  });
}

function transpose(source) {
  return makeSeq(function () {
    var iters = Array.from(source, function (x) {
      return x[Symbol.iterator]();
    });
    var iter = {
      next: function next() {
        if (iters.length === 0) {
          return {
            done: true,
            value: undefined
          }; // empty sequence
        }

        var results = Array.from(iters, function (iter) {
          return iter.next();
        });

        if (results[0].done) {
          if (!results.every(function (x) {
            return x.done;
          })) {
            throw new Error("Sequences have different lengths");
          }

          return {
            done: true,
            value: undefined
          };
        } else {
          if (!results.every(function (x) {
            return !x.done;
          })) {
            throw new Error("Sequences have different lengths");
          }

          var values = results.map(function (x) {
            return x.value;
          });
          return {
            done: false,
            value: values
          };
        }
      }
    };
    return iter;
  });
}