(() => {
    "use strict";
    var e = {
        758: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            r(582).__exportStar(r(770), t);
        },
        770: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.handleInitShares = void 0;
            const n = r(582), o = r(483), a = n.__importDefault(r(491));
            t.handleInitShares = async function(e) {
                logger.info(`New InitializeSharesTransaction block ${e.blockNumber}`), (0, a.default)(e.args, "No tx.args");
                const t = o.InitShares.create({
                    id: e.hash,
                    blockHeight: BigInt(e.blockNumber),
                    _blockTime: BigInt(await e.args[2].toString()),
                    _noInitialShares: BigInt(await e.args[1].toString()),
                    sharesSubject: e.from
                });
                await t.save();
            };
        },
        483: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            r(582).__exportStar(r(574), t);
        },
        149: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.InitShares = void 0;
            const n = r(582).__importDefault(r(491));
            t.InitShares = class {
                constructor(e, t, r) {
                    this.id = e, this._noInitialShares = t, this.sharesSubject = r;
                }
                get _name() {
                    return "InitShares";
                }
                async save() {
                    let e = this.id;
                    (0, n.default)(null !== e, "Cannot save InitShares entity without an ID"), await store.set("InitShares", e.toString(), this);
                }
                static async remove(e) {
                    (0, n.default)(null !== e, "Cannot remove InitShares entity without an ID"), await store.remove("InitShares", e.toString());
                }
                static async get(e) {
                    (0, n.default)(null != e, "Cannot get InitShares entity without an ID");
                    const t = await store.get("InitShares", e.toString());
                    return t ? this.create(t) : void 0;
                }
                static async getByFields(e, t) {
                    return (await store.getByFields("InitShares", e, t)).map((e => this.create(e)));
                }
                static create(e) {
                    (0, n.default)("string" == typeof e.id, "id must be provided");
                    let t = new this(e.id, e._noInitialShares, e.sharesSubject);
                    return Object.assign(t, e), t;
                }
            };
        },
        574: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.InitShares = void 0;
            var n = r(149);
            Object.defineProperty(t, "InitShares", {
                enumerable: !0,
                get: function() {
                    return n.InitShares;
                }
            });
        },
        491: e => {
            e.exports = require("assert");
        },
        582: (e, t, r) => {
            r.r(t), r.d(t, {
                __addDisposableResource: () => R,
                __assign: () => a,
                __asyncDelegator: () => P,
                __asyncGenerator: () => j,
                __asyncValues: () => I,
                __await: () => O,
                __awaiter: () => d,
                __classPrivateFieldGet: () => k,
                __classPrivateFieldIn: () => F,
                __classPrivateFieldSet: () => M,
                __createBinding: () => h,
                __decorate: () => s,
                __disposeResources: () => C,
                __esDecorate: () => u,
                __exportStar: () => b,
                __extends: () => o,
                __generator: () => _,
                __importDefault: () => D,
                __importStar: () => T,
                __makeTemplateObject: () => x,
                __metadata: () => y,
                __param: () => c,
                __propKey: () => f,
                __read: () => w,
                __rest: () => i,
                __runInitializers: () => l,
                __setFunctionName: () => p,
                __spread: () => m,
                __spreadArray: () => S,
                __spreadArrays: () => g,
                __values: () => v,
                default: () => B
            });
            var n = function(e, t) {
                return n = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t;
                } || function(e, t) {
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                }, n(e, t);
            };
            function o(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                function r() {
                    this.constructor = e;
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, 
                new r);
            }
            var a = function() {
                return a = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++) for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e;
                }, a.apply(this, arguments);
            };
            function i(e, t) {
                var r = {};
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
                }
                return r;
            }
            function s(e, t, r, n) {
                var o, a = arguments.length, i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, n); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (i = (a < 3 ? o(i) : a > 3 ? o(t, r, i) : o(t, r)) || i);
                return a > 3 && i && Object.defineProperty(t, r, i), i;
            }
            function c(e, t) {
                return function(r, n) {
                    t(r, n, e);
                };
            }
            function u(e, t, r, n, o, a) {
                function i(e) {
                    if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
                    return e;
                }
                for (var s, c = n.kind, u = "getter" === c ? "get" : "setter" === c ? "set" : "value", l = !t && e ? n.static ? e : e.prototype : null, f = t || (l ? Object.getOwnPropertyDescriptor(l, n.name) : {}), p = !1, y = r.length - 1; y >= 0; y--) {
                    var d = {};
                    for (var _ in n) d[_] = "access" === _ ? {} : n[_];
                    for (var _ in n.access) d.access[_] = n.access[_];
                    d.addInitializer = function(e) {
                        if (p) throw new TypeError("Cannot add initializers after decoration has completed");
                        a.push(i(e || null));
                    };
                    var h = (0, r[y])("accessor" === c ? {
                        get: f.get,
                        set: f.set
                    } : f[u], d);
                    if ("accessor" === c) {
                        if (void 0 === h) continue;
                        if (null === h || "object" != typeof h) throw new TypeError("Object expected");
                        (s = i(h.get)) && (f.get = s), (s = i(h.set)) && (f.set = s), (s = i(h.init)) && o.unshift(s);
                    } else (s = i(h)) && ("field" === c ? o.unshift(s) : f[u] = s);
                }
                l && Object.defineProperty(l, n.name, f), p = !0;
            }
            function l(e, t, r) {
                for (var n = arguments.length > 2, o = 0; o < t.length; o++) r = n ? t[o].call(e, r) : t[o].call(e);
                return n ? r : void 0;
            }
            function f(e) {
                return "symbol" == typeof e ? e : "".concat(e);
            }
            function p(e, t, r) {
                return "symbol" == typeof t && (t = t.description ? "[".concat(t.description, "]") : ""), 
                Object.defineProperty(e, "name", {
                    configurable: !0,
                    value: r ? "".concat(r, " ", t) : t
                });
            }
            function y(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
            }
            function d(e, t, r, n) {
                return new (r || (r = Promise))((function(o, a) {
                    function i(e) {
                        try {
                            c(n.next(e));
                        } catch (e) {
                            a(e);
                        }
                    }
                    function s(e) {
                        try {
                            c(n.throw(e));
                        } catch (e) {
                            a(e);
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                            e(t);
                        }))).then(i, s);
                    }
                    c((n = n.apply(e, t || [])).next());
                }));
            }
            function _(e, t) {
                var r, n, o, a, i = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1];
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this;
                }), a;
                function s(s) {
                    return function(c) {
                        return function(s) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (;a && (a = 0, s[0] && (i = 0)), i; ) try {
                                if (r = 1, n && (o = 2 & s[0] ? n.return : s[0] ? n.throw || ((o = n.return) && o.call(n), 
                                0) : n.next) && !(o = o.call(n, s[1])).done) return o;
                                switch (n = 0, o && (s = [ 2 & s[0], o.value ]), s[0]) {
                                  case 0:
                                  case 1:
                                    o = s;
                                    break;

                                  case 4:
                                    return i.label++, {
                                        value: s[1],
                                        done: !1
                                    };

                                  case 5:
                                    i.label++, n = s[1], s = [ 0 ];
                                    continue;

                                  case 7:
                                    s = i.ops.pop(), i.trys.pop();
                                    continue;

                                  default:
                                    if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                                        i = 0;
                                        continue;
                                    }
                                    if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
                                        i.label = s[1];
                                        break;
                                    }
                                    if (6 === s[0] && i.label < o[1]) {
                                        i.label = o[1], o = s;
                                        break;
                                    }
                                    if (o && i.label < o[2]) {
                                        i.label = o[2], i.ops.push(s);
                                        break;
                                    }
                                    o[2] && i.ops.pop(), i.trys.pop();
                                    continue;
                                }
                                s = t.call(e, i);
                            } catch (e) {
                                s = [ 6, e ], n = 0;
                            } finally {
                                r = o = 0;
                            }
                            if (5 & s[0]) throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            };
                        }([ s, c ]);
                    };
                }
            }
            var h = Object.create ? function(e, t, r, n) {
                void 0 === n && (n = r);
                var o = Object.getOwnPropertyDescriptor(t, r);
                o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                    enumerable: !0,
                    get: function() {
                        return t[r];
                    }
                }), Object.defineProperty(e, n, o);
            } : function(e, t, r, n) {
                void 0 === n && (n = r), e[n] = t[r];
            };
            function b(e, t) {
                for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || h(t, e, r);
            }
            function v(e) {
                var t = "function" == typeof Symbol && Symbol.iterator, r = t && e[t], n = 0;
                if (r) return r.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && n >= e.length && (e = void 0), {
                            value: e && e[n++],
                            done: !e
                        };
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
            }
            function w(e, t) {
                var r = "function" == typeof Symbol && e[Symbol.iterator];
                if (!r) return e;
                var n, o, a = r.call(e), i = [];
                try {
                    for (;(void 0 === t || t-- > 0) && !(n = a.next()).done; ) i.push(n.value);
                } catch (e) {
                    o = {
                        error: e
                    };
                } finally {
                    try {
                        n && !n.done && (r = a.return) && r.call(a);
                    } finally {
                        if (o) throw o.error;
                    }
                }
                return i;
            }
            function m() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(w(arguments[t]));
                return e;
            }
            function g() {
                for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                var n = Array(e), o = 0;
                for (t = 0; t < r; t++) for (var a = arguments[t], i = 0, s = a.length; i < s; i++, 
                o++) n[o] = a[i];
                return n;
            }
            function S(e, t, r) {
                if (r || 2 === arguments.length) for (var n, o = 0, a = t.length; o < a; o++) !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), 
                n[o] = t[o]);
                return e.concat(n || Array.prototype.slice.call(t));
            }
            function O(e) {
                return this instanceof O ? (this.v = e, this) : new O(e);
            }
            function j(e, t, r) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var n, o = r.apply(e, t || []), a = [];
                return n = {}, i("next"), i("throw"), i("return"), n[Symbol.asyncIterator] = function() {
                    return this;
                }, n;
                function i(e) {
                    o[e] && (n[e] = function(t) {
                        return new Promise((function(r, n) {
                            a.push([ e, t, r, n ]) > 1 || s(e, t);
                        }));
                    });
                }
                function s(e, t) {
                    try {
                        (r = o[e](t)).value instanceof O ? Promise.resolve(r.value.v).then(c, u) : l(a[0][2], r);
                    } catch (e) {
                        l(a[0][3], e);
                    }
                    var r;
                }
                function c(e) {
                    s("next", e);
                }
                function u(e) {
                    s("throw", e);
                }
                function l(e, t) {
                    e(t), a.shift(), a.length && s(a[0][0], a[0][1]);
                }
            }
            function P(e) {
                var t, r;
                return t = {}, n("next"), n("throw", (function(e) {
                    throw e;
                })), n("return"), t[Symbol.iterator] = function() {
                    return this;
                }, t;
                function n(n, o) {
                    t[n] = e[n] ? function(t) {
                        return (r = !r) ? {
                            value: O(e[n](t)),
                            done: !1
                        } : o ? o(t) : t;
                    } : o;
                }
            }
            function I(e) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var t, r = e[Symbol.asyncIterator];
                return r ? r.call(e) : (e = v(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
                    return this;
                }, t);
                function n(r) {
                    t[r] = e[r] && function(t) {
                        return new Promise((function(n, o) {
                            (function(e, t, r, n) {
                                Promise.resolve(n).then((function(t) {
                                    e({
                                        value: t,
                                        done: r
                                    });
                                }), t);
                            })(n, o, (t = e[r](t)).done, t.value);
                        }));
                    };
                }
            }
            function x(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e;
            }
            var E = Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                });
            } : function(e, t) {
                e.default = t;
            };
            function T(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e) for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && h(t, e, r);
                return E(t, e), t;
            }
            function D(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function k(e, t, r, n) {
                if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e);
            }
            function M(e, t, r, n, o) {
                if ("m" === n) throw new TypeError("Private method is not writable");
                if ("a" === n && !o) throw new TypeError("Private accessor was defined without a setter");
                if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === n ? o.call(e, r) : o ? o.value = r : t.set(e, r), r;
            }
            function F(e, t) {
                if (null === t || "object" != typeof t && "function" != typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
                return "function" == typeof e ? t === e : e.has(t);
            }
            function R(e, t, r) {
                if (null != t) {
                    if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
                    var n;
                    if (r) {
                        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
                        n = t[Symbol.asyncDispose];
                    }
                    if (void 0 === n) {
                        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
                        n = t[Symbol.dispose];
                    }
                    if ("function" != typeof n) throw new TypeError("Object not disposable.");
                    e.stack.push({
                        value: t,
                        dispose: n,
                        async: r
                    });
                } else r && e.stack.push({
                    async: !0
                });
                return t;
            }
            var A = "function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
                var n = new Error(r);
                return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
            };
            function C(e) {
                function t(t) {
                    e.error = e.hasError ? new A(t, e.error, "An error was suppressed during disposal.") : t, 
                    e.hasError = !0;
                }
                return function r() {
                    for (;e.stack.length; ) {
                        var n = e.stack.pop();
                        try {
                            var o = n.dispose && n.dispose.call(n.value);
                            if (n.async) return Promise.resolve(o).then(r, (function(e) {
                                return t(e), r();
                            }));
                        } catch (e) {
                            t(e);
                        }
                    }
                    if (e.hasError) throw e.error;
                }();
            }
            const B = {
                __extends: o,
                __assign: a,
                __rest: i,
                __decorate: s,
                __param: c,
                __metadata: y,
                __awaiter: d,
                __generator: _,
                __createBinding: h,
                __exportStar: b,
                __values: v,
                __read: w,
                __spread: m,
                __spreadArrays: g,
                __spreadArray: S,
                __await: O,
                __asyncGenerator: j,
                __asyncDelegator: P,
                __asyncValues: I,
                __makeTemplateObject: x,
                __importStar: T,
                __importDefault: D,
                __classPrivateFieldGet: k,
                __classPrivateFieldSet: M,
                __classPrivateFieldIn: F,
                __addDisposableResource: R,
                __disposeResources: C
            };
        }
    }, t = {};
    function r(n) {
        var o = t[n];
        if (void 0 !== o) return o.exports;
        var a = t[n] = {
            exports: {}
        };
        return e[n](a, a.exports, r), a.exports;
    }
    r.d = (e, t) => {
        for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        });
    }, r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), r.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    };
    var n = r(758), o = exports;
    for (var a in n) o[a] = n[a];
    n.__esModule && Object.defineProperty(o, "__esModule", {
        value: !0
    });
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztZQUNBQSxPQUFPQyxlQUFlQyxHQUFTLGNBQWM7Z0JBQUVDLFFBQU87O1lBQ3RDLEVBQVEsS0FFaEJDLGFBQWEsRUFBUSxNQUErQkY7OztZQ0g1REYsT0FBT0MsZUFBZUMsR0FBUyxjQUFjO2dCQUFFQyxRQUFPO2dCQUN0REQsRUFBUUcsd0JBQW1CO1lBQzNCLE1BQU1DLElBQVUsRUFBUSxNQUNsQkMsSUFBVSxFQUFRLE1BQ2xCQyxJQUFXRixFQUFRRyxnQkFBZ0IsRUFBUTtZQWFqRFAsRUFBUUcsbUJBWlJLLGVBQWdDQztnQkFDNUJDLE9BQU9DLEtBQUsseUNBQXlDRixFQUFHRyxpQkFDeEQsR0FBSU4sRUFBU08sU0FBU0osRUFBR0ssTUFBTTtnQkFDL0IsTUFBTUMsSUFBV1YsRUFBUVcsV0FBV0MsT0FBTztvQkFDdkNDLElBQUlULEVBQUdVO29CQUNQQyxhQUFhQyxPQUFPWixFQUFHRztvQkFDdkJVLFlBQVlELGFBQWFaLEVBQUdLLEtBQUssR0FBR1M7b0JBQ3BDQyxrQkFBa0JILGFBQWFaLEVBQUdLLEtBQUssR0FBR1M7b0JBQzFDRSxlQUFlaEIsRUFBR2lCOztzQkFFaEJYLEVBQVNZO0FBQ25COzs7WUNmQTdCLE9BQU9DLGVBQWVDLEdBQVMsY0FBYztnQkFBRUMsUUFBTzs7WUFDdEMsRUFBUSxLQUVoQkMsYUFBYSxFQUFRLE1BQWFGOzs7WUNKMUNGLE9BQU9DLGVBQWVDLEdBQVMsY0FBYztnQkFBRUMsUUFBTztnQkFDdERELEVBQVFnQixrQkFBYTtZQUNyQixNQUNNVixJQURVLEVBQVEsS0FDQ0MsZ0JBQWdCLEVBQVE7WUF3Q2pEUCxFQUFRZ0IsYUF2Q1I7Z0JBQ0ksV0FBQVksQ0FBWVYsR0FBSU0sR0FBa0JDO29CQUM5QkksS0FBS1gsS0FBS0EsR0FDVlcsS0FBS0wsbUJBQW1CQSxHQUN4QkssS0FBS0osZ0JBQWdCQTtBQUN6QjtnQkFDQSxTQUFJSztvQkFDQSxPQUFPO0FBQ1g7Z0JBQ0EsVUFBTUg7b0JBQ0YsSUFBSVQsSUFBS1csS0FBS1g7cUJBQ2QsR0FBSVosRUFBU08sU0FBZ0IsU0FBUEssR0FBYSxzREFDN0JhLE1BQU1DLElBQUksY0FBY2QsRUFBR0ssWUFBWU07QUFDakQ7Z0JBQ0EsbUJBQWFJLENBQU9mO3FCQUNoQixHQUFJWixFQUFTTyxTQUFnQixTQUFQSyxHQUFhLHdEQUM3QmEsTUFBTUUsT0FBTyxjQUFjZixFQUFHSztBQUN4QztnQkFDQSxnQkFBYVcsQ0FBSWhCO3FCQUNiLEdBQUlaLEVBQVNPLFNBQVMsUUFBQ0ssR0FBa0M7b0JBQ3pELE1BQU1pQixVQUFlSixNQUFNRyxJQUFJLGNBQWNoQixFQUFHSztvQkFDaEQsT0FBSVksSUFDT04sS0FBS1osT0FBT2tCLFVBR25CO0FBRVI7Z0JBQ0Esd0JBQWFDLENBQVlDLEdBQVFDO29CQUU3QixjQURzQlAsTUFBTUssWUFBWSxjQUFjQyxHQUFRQyxJQUMvQ0MsS0FBSUosS0FBVU4sS0FBS1osT0FBT2tCO0FBQzdDO2dCQUNBLGFBQU9sQixDQUFPa0I7cUJBQ1YsR0FBSTdCLEVBQVNPLFNBQThCLG1CQUFkc0IsRUFBT2pCLElBQWlCO29CQUNyRCxJQUFJc0IsSUFBUyxJQUFJWCxLQUFLTSxFQUFPakIsSUFBSWlCLEVBQU9YLGtCQUFrQlcsRUFBT1Y7b0JBRWpFLE9BREEzQixPQUFPMkMsT0FBT0QsR0FBUUwsSUFDZks7QUFDWDs7OztZQ3hDSjFDLE9BQU9DLGVBQWVDLEdBQVMsY0FBYztnQkFBRUMsUUFBTztnQkFDdERELEVBQVFnQixrQkFBYTtZQUVyQixJQUFJMEIsSUFBZSxFQUFRO1lBQzNCNUMsT0FBT0MsZUFBZUMsR0FBUyxjQUFjO2dCQUFFMkMsYUFBWTtnQkFBTVQsS0FBSztvQkFBYyxPQUFPUSxFQUFhMUI7QUFBWTs7OztZQ05wSDRCLEVBQU81QyxVQUFVNkMsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQ2dCekIsSUFBSUMsSUFBZ0IsU0FBU0MsR0FBR0M7Z0JBSTlCLE9BSEFGLElBQWdCaEQsT0FBT21ELGtCQUNsQjtvQkFBRUMsV0FBVzs2QkFBZ0JDLFNBQVMsU0FBVUosR0FBR0M7b0JBQUtELEVBQUVHLFlBQVlGO0FBQUcscUJBQzFFLFNBQVVELEdBQUdDO29CQUFLLEtBQUssSUFBSUksS0FBS0osR0FBT2xELE9BQU91RCxVQUFVQyxlQUFlQyxLQUFLUCxHQUFHSSxPQUFJTCxFQUFFSyxLQUFLSixFQUFFSTtBQUFJLG1CQUM3Rk4sRUFBY0MsR0FBR0M7QUFDMUI7WUFFTyxTQUFTUSxFQUFVVCxHQUFHQztnQkFDM0IsSUFBaUIscUJBQU5BLEtBQTBCLFNBQU5BLEdBQzNCLE1BQU0sSUFBSVMsVUFBVSx5QkFBeUJDLE9BQU9WLEtBQUs7Z0JBRTdELFNBQVNXO29CQUFPOUIsS0FBS0QsY0FBY21CO0FBQUc7Z0JBRHRDRCxFQUFjQyxHQUFHQyxJQUVqQkQsRUFBRU0sWUFBa0IsU0FBTkwsSUFBYWxELE9BQU9tQixPQUFPK0IsTUFBTVcsRUFBR04sWUFBWUwsRUFBRUs7Z0JBQVcsSUFBSU07QUFDakY7WUFFTyxJQUFJQyxJQUFXO2dCQVFwQixPQVBBQSxJQUFXOUQsT0FBTzJDLFVBQVUsU0FBa0JvQjtvQkFDMUMsS0FBSyxJQUFJQyxHQUFHQyxJQUFJLEdBQUdDLElBQUlDLFVBQVVDLFFBQVFILElBQUlDLEdBQUdELEtBRTVDLEtBQUssSUFBSVgsS0FEVFUsSUFBSUcsVUFBVUYsSUFDT2pFLE9BQU91RCxVQUFVQyxlQUFlQyxLQUFLTyxHQUFHVixPQUFJUyxFQUFFVCxLQUFLVSxFQUFFVjtvQkFFOUUsT0FBT1M7QUFDWCxtQkFDT0QsRUFBU08sTUFBTXRDLE1BQU1vQztBQUM5QjtZQUVPLFNBQVNHLEVBQU9OLEdBQUdPO2dCQUN4QixJQUFJUixJQUFJLENBQUM7Z0JBQ1QsS0FBSyxJQUFJVCxLQUFLVSxHQUFPaEUsT0FBT3VELFVBQVVDLGVBQWVDLEtBQUtPLEdBQUdWLE1BQU1pQixFQUFFQyxRQUFRbEIsS0FBSyxNQUM5RVMsRUFBRVQsS0FBS1UsRUFBRVY7Z0JBQ2IsSUFBUyxRQUFMVSxLQUFxRCxxQkFBakNoRSxPQUFPeUUsdUJBQ3RCO29CQUFBLElBQUlSLElBQUk7b0JBQWIsS0FBZ0JYLElBQUl0RCxPQUFPeUUsc0JBQXNCVCxJQUFJQyxJQUFJWCxFQUFFYyxRQUFRSCxLQUMzRE0sRUFBRUMsUUFBUWxCLEVBQUVXLE1BQU0sS0FBS2pFLE9BQU91RCxVQUFVbUIscUJBQXFCakIsS0FBS08sR0FBR1YsRUFBRVcsUUFDdkVGLEVBQUVULEVBQUVXLE1BQU1ELEVBQUVWLEVBQUVXO0FBRjRCO2dCQUl0RCxPQUFPRjtBQUNUO1lBRU8sU0FBU1ksRUFBV0MsR0FBWUMsR0FBUUMsR0FBS0M7Z0JBQ2xELElBQTJIOUIsR0FBdkgrQixJQUFJYixVQUFVQyxRQUFRYSxJQUFJRCxJQUFJLElBQUlILElBQWtCLFNBQVRFLElBQWdCQSxJQUFPL0UsT0FBT2tGLHlCQUF5QkwsR0FBUUMsS0FBT0M7Z0JBQ3JILElBQXVCLG1CQUFaSSxXQUFvRCxxQkFBckJBLFFBQVFDLFVBQXlCSCxJQUFJRSxRQUFRQyxTQUFTUixHQUFZQyxHQUFRQyxHQUFLQyxTQUNwSCxLQUFLLElBQUlkLElBQUlXLEVBQVdSLFNBQVMsR0FBR0gsS0FBSyxHQUFHQSxNQUFTaEIsSUFBSTJCLEVBQVdYLFFBQUlnQixLQUFLRCxJQUFJLElBQUkvQixFQUFFZ0MsS0FBS0QsSUFBSSxJQUFJL0IsRUFBRTRCLEdBQVFDLEdBQUtHLEtBQUtoQyxFQUFFNEIsR0FBUUMsT0FBU0c7Z0JBQ2hKLE9BQU9ELElBQUksS0FBS0MsS0FBS2pGLE9BQU9DLGVBQWU0RSxHQUFRQyxHQUFLRyxJQUFJQTtBQUM5RDtZQUVPLFNBQVNJLEVBQVFDLEdBQVlDO2dCQUNsQyxPQUFPLFNBQVVWLEdBQVFDO29CQUFPUyxFQUFVVixHQUFRQyxHQUFLUTtBQUFhO0FBQ3RFO1lBRU8sU0FBU0UsRUFBYUMsR0FBTUMsR0FBY2QsR0FBWWUsR0FBV0MsR0FBY0M7Z0JBQ3BGLFNBQVNDLEVBQU9DO29CQUFLLFNBQVUsTUFBTkEsS0FBNkIscUJBQU5BLEdBQWtCLE1BQU0sSUFBSXBDLFVBQVU7b0JBQXNCLE9BQU9vQztBQUFHO2dCQUt0SCxLQUpBLElBR0lDLEdBSEFDLElBQU9OLEVBQVVNLE1BQU1uQixJQUFlLGFBQVRtQixJQUFvQixRQUFpQixhQUFUQSxJQUFvQixRQUFRLFNBQ3JGcEIsS0FBVWEsS0FBZ0JELElBQU9FLEVBQWtCLFNBQUlGLElBQU9BLEVBQUtsQyxZQUFZLE1BQy9FMkMsSUFBYVIsTUFBaUJiLElBQVM3RSxPQUFPa0YseUJBQXlCTCxHQUFRYyxFQUFVUSxRQUFRLENBQUMsSUFDL0ZDLEtBQU8sR0FDTG5DLElBQUlXLEVBQVdSLFNBQVMsR0FBR0gsS0FBSyxHQUFHQSxLQUFLO29CQUM3QyxJQUFJb0MsSUFBVSxDQUFDO29CQUNmLEtBQUssSUFBSS9DLEtBQUtxQyxHQUFXVSxFQUFRL0MsS0FBVyxhQUFOQSxJQUFpQixDQUFDLElBQUlxQyxFQUFVckM7b0JBQ3RFLEtBQUssSUFBSUEsS0FBS3FDLEVBQVVXLFFBQVFELEVBQVFDLE9BQU9oRCxLQUFLcUMsRUFBVVcsT0FBT2hEO29CQUNyRStDLEVBQVFFLGlCQUFpQixTQUFVUjt3QkFBSyxJQUFJSyxHQUFNLE1BQU0sSUFBSXpDLFVBQVU7d0JBQTJEa0MsRUFBa0JXLEtBQUtWLEVBQU9DLEtBQUs7QUFBUTtvQkFDNUssSUFBSVUsS0FBUyxHQUFJN0IsRUFBV1gsSUFBYSxlQUFUZ0MsSUFBc0I7d0JBQUU3RCxLQUFLOEQsRUFBVzlEO3dCQUFLRixLQUFLZ0UsRUFBV2hFO3dCQUFRZ0UsRUFBV3BCLElBQU11QjtvQkFDdEgsSUFBYSxlQUFUSixHQUFxQjt3QkFDckIsU0FBZSxNQUFYUSxHQUFtQjt3QkFDdkIsSUFBZSxTQUFYQSxLQUFxQyxtQkFBWEEsR0FBcUIsTUFBTSxJQUFJOUMsVUFBVTt5QkFDbkVxQyxJQUFJRixFQUFPVyxFQUFPckUsVUFBTThELEVBQVc5RCxNQUFNNEQsS0FDekNBLElBQUlGLEVBQU9XLEVBQU92RSxVQUFNZ0UsRUFBV2hFLE1BQU04RCxLQUN6Q0EsSUFBSUYsRUFBT1csRUFBT0MsVUFBT2QsRUFBYWUsUUFBUVg7QUFDdEQsNEJBQ1NBLElBQUlGLEVBQU9XLFFBQ0gsWUFBVFIsSUFBa0JMLEVBQWFlLFFBQVFYLEtBQ3RDRSxFQUFXcEIsS0FBT2tCO0FBRS9CO2dCQUNJbkIsS0FBUTdFLE9BQU9DLGVBQWU0RSxHQUFRYyxFQUFVUSxNQUFNRCxJQUMxREUsS0FBTztBQUNUO1lBRU8sU0FBU1EsRUFBa0JDLEdBQVNqQixHQUFjekY7Z0JBRXZELEtBREEsSUFBSTJHLElBQVczQyxVQUFVQyxTQUFTLEdBQ3pCSCxJQUFJLEdBQUdBLElBQUkyQixFQUFheEIsUUFBUUgsS0FDckM5RCxJQUFRMkcsSUFBV2xCLEVBQWEzQixHQUFHUixLQUFLb0QsR0FBUzFHLEtBQVN5RixFQUFhM0IsR0FBR1IsS0FBS29EO2dCQUVuRixPQUFPQyxJQUFXM0csU0FBUTtBQUM1QjtZQUVPLFNBQVM0RyxFQUFVQztnQkFDeEIsT0FBb0IsbUJBQU5BLElBQWlCQSxJQUFJLEdBQUdDLE9BQU9EO0FBQy9DO1lBRU8sU0FBU0UsRUFBa0JuQixHQUFHSSxHQUFNZ0I7Z0JBRXpDLE9BRG9CLG1CQUFUaEIsTUFBbUJBLElBQU9BLEVBQUtpQixjQUFjLElBQUlILE9BQU9kLEVBQUtpQixhQUFhLE9BQU87Z0JBQ3JGcEgsT0FBT0MsZUFBZThGLEdBQUcsUUFBUTtvQkFBRXNCLGVBQWM7b0JBQU1sSCxPQUFPZ0gsSUFBUyxHQUFHRixPQUFPRSxHQUFRLEtBQUtoQixLQUFRQTs7QUFDL0c7WUFFTyxTQUFTbUIsRUFBV0MsR0FBYUM7Z0JBQ3RDLElBQXVCLG1CQUFackMsV0FBb0QscUJBQXJCQSxRQUFRc0MsVUFBeUIsT0FBT3RDLFFBQVFzQyxTQUFTRixHQUFhQztBQUNsSDtZQUVPLFNBQVNFLEVBQVViLEdBQVNjLEdBQVlDLEdBQUdDO2dCQUVoRCxPQUFPLEtBQUtELE1BQU1BLElBQUlFLFdBQVUsU0FBVUMsR0FBU0M7b0JBQy9DLFNBQVNDLEVBQVU5SDt3QkFBUzs0QkFBTStILEVBQUtMLEVBQVVNLEtBQUtoSTtBQUFTLDBCQUFFLE9BQU9vRTs0QkFBS3lELEVBQU96RDtBQUFJO0FBQUU7b0JBQzFGLFNBQVM2RCxFQUFTakk7d0JBQVM7NEJBQU0rSCxFQUFLTCxFQUFpQixNQUFFMUg7QUFBUywwQkFBRSxPQUFPb0U7NEJBQUt5RCxFQUFPekQ7QUFBSTtBQUFFO29CQUM3RixTQUFTMkQsRUFBS3pCO3dCQUpsQixJQUFldEc7d0JBSWFzRyxFQUFPTCxPQUFPMkIsRUFBUXRCLEVBQU90RyxVQUoxQ0EsSUFJeURzRyxFQUFPdEcsT0FKaERBLGFBQWlCeUgsSUFBSXpILElBQVEsSUFBSXlILEdBQUUsU0FBVUc7NEJBQVdBLEVBQVE1SDtBQUFRLDZCQUlqQmtJLEtBQUtKLEdBQVdHO0FBQVc7b0JBQzdHRixHQUFNTCxJQUFZQSxFQUFVeEQsTUFBTXdDLEdBQVNjLEtBQWMsS0FBS1E7QUFDbEU7QUFDRjtZQUVPLFNBQVNHLEVBQVl6QixHQUFTMEI7Z0JBQ25DLElBQXNHeEMsR0FBR3lDLEdBQUd6RSxHQUFHMEUsR0FBM0d6QyxJQUFJO29CQUFFMEMsT0FBTztvQkFBR0MsTUFBTTt3QkFBYSxJQUFXLElBQVA1RSxFQUFFLElBQVEsTUFBTUEsRUFBRTt3QkFBSSxPQUFPQSxFQUFFO0FBQUk7b0JBQUc2RSxNQUFNO29CQUFJQyxLQUFLOztnQkFDaEcsT0FBT0osSUFBSTtvQkFBRU4sTUFBTVcsRUFBSztvQkFBSSxPQUFTQSxFQUFLO29CQUFJLFFBQVVBLEVBQUs7bUJBQXdCLHFCQUFYQyxXQUEwQk4sRUFBRU0sT0FBT0MsWUFBWTtvQkFBYSxPQUFPakg7QUFBTSxvQkFBSTBHO2dCQUN2SixTQUFTSyxFQUFLNUU7b0JBQUssT0FBTyxTQUFVK0U7d0JBQUssT0FDekMsU0FBY0M7NEJBQ1YsSUFBSW5ELEdBQUcsTUFBTSxJQUFJcEMsVUFBVTs0QkFDM0IsTUFBTzhFLE1BQU1BLElBQUksR0FBR1MsRUFBRyxPQUFPbEQsSUFBSSxLQUFLQTtnQ0FDbkMsSUFBSUQsSUFBSSxHQUFHeUMsTUFBTXpFLElBQVksSUFBUm1GLEVBQUcsS0FBU1YsRUFBVSxTQUFJVSxFQUFHLEtBQUtWLEVBQVMsV0FBT3pFLElBQUl5RSxFQUFVLFdBQU16RSxFQUFFTixLQUFLK0U7Z0NBQUksS0FBS0EsRUFBRUwsV0FBV3BFLElBQUlBLEVBQUVOLEtBQUsrRSxHQUFHVSxFQUFHLEtBQUs5QyxNQUFNLE9BQU9yQztnQ0FFM0osUUFESXlFLElBQUksR0FBR3pFLE1BQUdtRixJQUFLLEVBQVMsSUFBUkEsRUFBRyxJQUFRbkYsRUFBRTVELFVBQ3pCK0ksRUFBRztrQ0FDUCxLQUFLO2tDQUFHLEtBQUs7b0NBQUduRixJQUFJbUY7b0NBQUk7O2tDQUN4QixLQUFLO29DQUFjLE9BQVhsRCxFQUFFMEMsU0FBZ0I7d0NBQUV2SSxPQUFPK0ksRUFBRzt3Q0FBSTlDLE9BQU07OztrQ0FDaEQsS0FBSztvQ0FBR0osRUFBRTBDLFNBQVNGLElBQUlVLEVBQUcsSUFBSUEsSUFBSyxFQUFDO29DQUFJOztrQ0FDeEMsS0FBSztvQ0FBR0EsSUFBS2xELEVBQUU2QyxJQUFJTSxPQUFPbkQsRUFBRTRDLEtBQUtPO29DQUFPOztrQ0FDeEM7b0NBQ0ksTUFBTXBGLElBQUlpQyxFQUFFNEMsT0FBTTdFLElBQUlBLEVBQUVLLFNBQVMsS0FBS0wsRUFBRUEsRUFBRUssU0FBUyxPQUFrQixNQUFWOEUsRUFBRyxNQUFzQixNQUFWQSxFQUFHLEtBQVc7d0NBQUVsRCxJQUFJO3dDQUFHO0FBQVU7b0NBQzNHLElBQWMsTUFBVmtELEVBQUcsUUFBY25GLEtBQU1tRixFQUFHLEtBQUtuRixFQUFFLE1BQU1tRixFQUFHLEtBQUtuRixFQUFFLEtBQU07d0NBQUVpQyxFQUFFMEMsUUFBUVEsRUFBRzt3Q0FBSTtBQUFPO29DQUNyRixJQUFjLE1BQVZBLEVBQUcsTUFBWWxELEVBQUUwQyxRQUFRM0UsRUFBRSxJQUFJO3dDQUFFaUMsRUFBRTBDLFFBQVEzRSxFQUFFLElBQUlBLElBQUltRjt3Q0FBSTtBQUFPO29DQUNwRSxJQUFJbkYsS0FBS2lDLEVBQUUwQyxRQUFRM0UsRUFBRSxJQUFJO3dDQUFFaUMsRUFBRTBDLFFBQVEzRSxFQUFFLElBQUlpQyxFQUFFNkMsSUFBSXJDLEtBQUswQzt3Q0FBSztBQUFPO29DQUM5RG5GLEVBQUUsTUFBSWlDLEVBQUU2QyxJQUFJTSxPQUNoQm5ELEVBQUU0QyxLQUFLTztvQ0FBTzs7Z0NBRXRCRCxJQUFLWCxFQUFLOUUsS0FBS29ELEdBQVNiO0FBQzVCLDhCQUFFLE9BQU96QjtnQ0FBSzJFLElBQUssRUFBQyxHQUFHM0UsS0FBSWlFLElBQUk7QUFBRyw4QkFBRTtnQ0FBVXpDLElBQUloQyxJQUFJO0FBQUc7NEJBQ3pELElBQVksSUFBUm1GLEVBQUcsSUFBUSxNQUFNQSxFQUFHOzRCQUFJLE9BQU87Z0NBQUUvSSxPQUFPK0ksRUFBRyxLQUFLQSxFQUFHLFVBQUs7Z0NBQVE5QyxPQUFNOztBQUM5RSx5QkF0QmdEOEIsQ0FBSyxFQUFDaEUsR0FBRytFO0FBQUs7QUFBRztBQXVCbkU7WUFFTyxJQUFJRyxJQUFrQnBKLE9BQU9tQixTQUFTLFNBQVVrSSxHQUFHQyxHQUFHQyxHQUFHQztxQkFDbkRDLE1BQVBELE1BQWtCQSxJQUFLRDtnQkFDM0IsSUFBSXhFLElBQU8vRSxPQUFPa0YseUJBQXlCb0UsR0FBR0M7Z0JBQ3pDeEUsT0FBUyxTQUFTQSxLQUFRdUUsRUFBRUksYUFBYTNFLEVBQUs0RSxZQUFZNUUsRUFBS3NDLGtCQUNoRXRDLElBQU87b0JBQUVsQyxhQUFZO29CQUFNVCxLQUFLO3dCQUFhLE9BQU9rSCxFQUFFQztBQUFJO29CQUU5RHZKLE9BQU9DLGVBQWVvSixHQUFHRyxHQUFJekU7QUFDOUIsZ0JBQUksU0FBVXNFLEdBQUdDLEdBQUdDLEdBQUdDO3FCQUNYQyxNQUFQRCxNQUFrQkEsSUFBS0QsSUFDM0JGLEVBQUVHLEtBQU1GLEVBQUVDO0FBQ1g7WUFFTSxTQUFTbkosRUFBYWtKLEdBQUdEO2dCQUM5QixLQUFLLElBQUkvRixLQUFLZ0csR0FBYSxjQUFOaEcsS0FBb0J0RCxPQUFPdUQsVUFBVUMsZUFBZUMsS0FBSzRGLEdBQUcvRixNQUFJOEYsRUFBZ0JDLEdBQUdDLEdBQUdoRztBQUM3RztZQUVPLFNBQVNzRyxFQUFTUDtnQkFDdkIsSUFBSXJGLElBQXNCLHFCQUFYK0UsVUFBeUJBLE9BQU9DLFVBQVVNLElBQUl0RixLQUFLcUYsRUFBRXJGLElBQUlDLElBQUk7Z0JBQzVFLElBQUlxRixHQUFHLE9BQU9BLEVBQUU3RixLQUFLNEY7Z0JBQ3JCLElBQUlBLEtBQXlCLG1CQUFiQSxFQUFFakYsUUFBcUIsT0FBTztvQkFDMUMrRCxNQUFNO3dCQUVGLE9BRElrQixLQUFLcEYsS0FBS29GLEVBQUVqRixXQUFRaUYsU0FBSSxJQUNyQjs0QkFBRWxKLE9BQU9rSixLQUFLQSxFQUFFcEY7NEJBQU1tQyxPQUFPaUQ7O0FBQ3hDOztnQkFFSixNQUFNLElBQUkxRixVQUFVSyxJQUFJLDRCQUE0QjtBQUN0RDtZQUVPLFNBQVM2RixFQUFPUixHQUFHbkY7Z0JBQ3hCLElBQUlvRixJQUFzQixxQkFBWFAsVUFBeUJNLEVBQUVOLE9BQU9DO2dCQUNqRCxLQUFLTSxHQUFHLE9BQU9EO2dCQUNmLElBQW1CcEUsR0FBWVYsR0FBM0JOLElBQUlxRixFQUFFN0YsS0FBSzRGLElBQU9TLElBQUs7Z0JBQzNCO29CQUNJLFlBQWMsTUFBTjVGLEtBQWdCQSxNQUFNLFFBQVFlLElBQUloQixFQUFFa0UsUUFBUS9CLFFBQU0wRCxFQUFHdEQsS0FBS3ZCLEVBQUU5RTtBQUN4RSxrQkFDQSxPQUFPNEo7b0JBQVN4RixJQUFJO3dCQUFFd0YsT0FBT0E7O0FBQVMsa0JBQ3RDO29CQUNJO3dCQUNROUUsTUFBTUEsRUFBRW1CLFNBQVNrRCxJQUFJckYsRUFBVSxXQUFJcUYsRUFBRTdGLEtBQUtRO0FBQ2xELHNCQUNBO3dCQUFVLElBQUlNLEdBQUcsTUFBTUEsRUFBRXdGO0FBQU87QUFDcEM7Z0JBQ0EsT0FBT0Q7QUFDVDtZQUdPLFNBQVNFO2dCQUNkLEtBQUssSUFBSUYsSUFBSyxJQUFJN0YsSUFBSSxHQUFHQSxJQUFJRSxVQUFVQyxRQUFRSCxLQUMzQzZGLElBQUtBLEVBQUc3QyxPQUFPNEMsRUFBTzFGLFVBQVVGO2dCQUNwQyxPQUFPNkY7QUFDVDtZQUdPLFNBQVNHO2dCQUNkLEtBQUssSUFBSWpHLElBQUksR0FBR0MsSUFBSSxHQUFHaUcsSUFBSy9GLFVBQVVDLFFBQVFILElBQUlpRyxHQUFJakcsS0FBS0QsS0FBS0csVUFBVUYsR0FBR0c7Z0JBQ3hFLElBQUlhLElBQUk1QixNQUFNVyxJQUFJdUYsSUFBSTtnQkFBM0IsS0FBOEJ0RixJQUFJLEdBQUdBLElBQUlpRyxHQUFJakcsS0FDekMsS0FBSyxJQUFJa0csSUFBSWhHLFVBQVVGLElBQUltRyxJQUFJLEdBQUdDLElBQUtGLEVBQUUvRixRQUFRZ0csSUFBSUMsR0FBSUQ7Z0JBQUtiLEtBQzFEdEUsRUFBRXNFLEtBQUtZLEVBQUVDO2dCQUNqQixPQUFPbkY7QUFDVDtZQUVPLFNBQVNxRixFQUFjQyxHQUFJM0ksR0FBTTRJO2dCQUN0QyxJQUFJQSxLQUE2QixNQUFyQnJHLFVBQVVDLFFBQWMsS0FBSyxJQUE0QjBGLEdBQXhCN0YsSUFBSSxHQUFHd0csSUFBSTdJLEVBQUt3QyxRQUFZSCxJQUFJd0csR0FBR3hHLE1BQ3hFNkYsS0FBUTdGLEtBQUtyQyxNQUNSa0ksTUFBSUEsSUFBS3pHLE1BQU1FLFVBQVVtSCxNQUFNakgsS0FBSzdCLEdBQU0sR0FBR3FDO2dCQUNsRDZGLEVBQUc3RixLQUFLckMsRUFBS3FDO2dCQUdyQixPQUFPc0csRUFBR3RELE9BQU82QyxLQUFNekcsTUFBTUUsVUFBVW1ILE1BQU1qSCxLQUFLN0I7QUFDcEQ7WUFFTyxTQUFTK0ksRUFBUTFCO2dCQUN0QixPQUFPbEgsZ0JBQWdCNEksS0FBVzVJLEtBQUtrSCxJQUFJQSxHQUFHbEgsUUFBUSxJQUFJNEksRUFBUTFCO0FBQ3BFO1lBRU8sU0FBUzJCLEVBQWlCL0QsR0FBU2MsR0FBWUU7Z0JBQ3BELEtBQUtrQixPQUFPOEIsZUFBZSxNQUFNLElBQUlsSCxVQUFVO2dCQUMvQyxJQUFvRE0sR0FBaER3RSxJQUFJWixFQUFVeEQsTUFBTXdDLEdBQVNjLEtBQWMsS0FBUW1ELElBQUk7Z0JBQzNELE9BQU83RyxJQUFJLENBQUMsR0FBRzZFLEVBQUssU0FBU0EsRUFBSyxVQUFVQSxFQUFLLFdBQVc3RSxFQUFFOEUsT0FBTzhCLGlCQUFpQjtvQkFBYyxPQUFPOUk7QUFBTSxtQkFBR2tDO2dCQUNwSCxTQUFTNkUsRUFBSzVFO29CQUFTdUUsRUFBRXZFLE9BQUlELEVBQUVDLEtBQUssU0FBVStFO3dCQUFLLE9BQU8sSUFBSW5CLFNBQVEsU0FBVXFDLEdBQUdqSDs0QkFBSzRILEVBQUV0RSxLQUFLLEVBQUN0QyxHQUFHK0UsR0FBR2tCLEdBQUdqSCxPQUFNLEtBQUs2SCxFQUFPN0csR0FBRytFO0FBQUk7QUFBSTtBQUFHO2dCQUN6SSxTQUFTOEIsRUFBTzdHLEdBQUcrRTtvQkFBSzt5QkFDVmhFLElBRHFCd0QsRUFBRXZFLEdBQUcrRSxJQUNuQjlJLGlCQUFpQndLLElBQVU3QyxRQUFRQyxRQUFROUMsRUFBRTlFLE1BQU04SSxHQUFHWixLQUFLMkMsR0FBU2hELEtBQVVpRCxFQUFPSCxFQUFFLEdBQUcsSUFBSTdGO0FBRHRFLHNCQUFFLE9BQU9WO3dCQUFLMEcsRUFBT0gsRUFBRSxHQUFHLElBQUl2RztBQUFJO29CQUMvRSxJQUFjVTtBQURtRTtnQkFFakYsU0FBUytGLEVBQVE3SztvQkFBUzRLLEVBQU8sUUFBUTVLO0FBQVE7Z0JBQ2pELFNBQVM2SCxFQUFPN0g7b0JBQVM0SyxFQUFPLFNBQVM1SztBQUFRO2dCQUNqRCxTQUFTOEssRUFBT2xGLEdBQUdrRDtvQkFBU2xELEVBQUVrRCxJQUFJNkIsRUFBRUksU0FBU0osRUFBRTFHLFVBQVEyRyxFQUFPRCxFQUFFLEdBQUcsSUFBSUEsRUFBRSxHQUFHO0FBQUs7QUFDbkY7WUFFTyxTQUFTSyxFQUFpQjlCO2dCQUMvQixJQUFJcEYsR0FBR1g7Z0JBQ1AsT0FBT1csSUFBSSxDQUFDLEdBQUc2RSxFQUFLLFNBQVNBLEVBQUssVUFBUyxTQUFVdkU7b0JBQUssTUFBTUE7QUFBRyxxQkFBSXVFLEVBQUssV0FBVzdFLEVBQUU4RSxPQUFPQyxZQUFZO29CQUFjLE9BQU9qSDtBQUFNLG1CQUFHa0M7Z0JBQzFJLFNBQVM2RSxFQUFLNUUsR0FBRzZCO29CQUFLOUIsRUFBRUMsS0FBS21GLEVBQUVuRixLQUFLLFNBQVUrRTt3QkFBSyxRQUFRM0YsS0FBS0EsS0FBSzs0QkFBRW5ELE9BQU93SyxFQUFRdEIsRUFBRW5GLEdBQUcrRTs0QkFBSzdDLE9BQU07NEJBQVVMLElBQUlBLEVBQUVrRCxLQUFLQTtBQUFHLHdCQUFJbEQ7QUFBRztBQUN2STtZQUVPLFNBQVNxRixFQUFjL0I7Z0JBQzVCLEtBQUtOLE9BQU84QixlQUFlLE1BQU0sSUFBSWxILFVBQVU7Z0JBQy9DLElBQWlDTSxHQUE3QnFGLElBQUlELEVBQUVOLE9BQU84QjtnQkFDakIsT0FBT3ZCLElBQUlBLEVBQUU3RixLQUFLNEYsTUFBTUEsSUFBcUNPLEVBQVNQLElBQTJCcEYsSUFBSSxDQUFDLEdBQUc2RSxFQUFLLFNBQVNBLEVBQUssVUFBVUEsRUFBSyxXQUFXN0UsRUFBRThFLE9BQU84QixpQkFBaUI7b0JBQWMsT0FBTzlJO0FBQU0sbUJBQUdrQztnQkFDOU0sU0FBUzZFLEVBQUs1RTtvQkFBS0QsRUFBRUMsS0FBS21GLEVBQUVuRixNQUFNLFNBQVUrRTt3QkFBSyxPQUFPLElBQUluQixTQUFRLFNBQVVDLEdBQVNDOzZCQUN2RixTQUFnQkQsR0FBU0MsR0FBUS9FLEdBQUdnRztnQ0FBS25CLFFBQVFDLFFBQVFrQixHQUFHWixNQUFLLFNBQVNZO29DQUFLbEIsRUFBUTt3Q0FBRTVILE9BQU84STt3Q0FBRzdDLE1BQU1uRDs7QUFBTSxvQ0FBRytFO0FBQVMsOEJBRGJpRCxDQUFPbEQsR0FBU0MsSUFBN0JpQixJQUFJSSxFQUFFbkYsR0FBRytFLElBQThCN0MsTUFBTTZDLEVBQUU5STtBQUFRO0FBQUk7QUFBRztBQUVqSztZQUVPLFNBQVNrTCxFQUFxQkMsR0FBUUM7Z0JBRTNDLE9BREl2TCxPQUFPQyxpQkFBa0JELE9BQU9DLGVBQWVxTCxHQUFRLE9BQU87b0JBQUVuTCxPQUFPb0w7cUJBQWlCRCxFQUFPQyxNQUFNQSxHQUNsR0Q7QUFDVDtZQUVBLElBQUlFLElBQXFCeEwsT0FBT21CLFNBQVMsU0FBVWtJLEdBQUdKO2dCQUNwRGpKLE9BQU9DLGVBQWVvSixHQUFHLFdBQVc7b0JBQUV4RyxhQUFZO29CQUFNMUMsT0FBTzhJOztBQUNoRSxnQkFBSSxTQUFTSSxHQUFHSjtnQkFDZkksRUFBVyxVQUFJSjtBQUNqQjtZQUVPLFNBQVN3QyxFQUFhQztnQkFDM0IsSUFBSUEsS0FBT0EsRUFBSWhDLFlBQVksT0FBT2dDO2dCQUNsQyxJQUFJakYsSUFBUyxDQUFDO2dCQUNkLElBQVcsUUFBUGlGLEdBQWEsS0FBSyxJQUFJbkMsS0FBS21DLEdBQWUsY0FBTm5DLEtBQW1CdkosT0FBT3VELFVBQVVDLGVBQWVDLEtBQUtpSSxHQUFLbkMsTUFBSUgsRUFBZ0IzQyxHQUFRaUYsR0FBS25DO2dCQUV0SSxPQURBaUMsRUFBbUIvRSxHQUFRaUYsSUFDcEJqRjtBQUNUO1lBRU8sU0FBU2hHLEVBQWdCaUw7Z0JBQzlCLE9BQVFBLEtBQU9BLEVBQUloQyxhQUFjZ0MsSUFBTTtvQkFBRTNLLFNBQVMySzs7QUFDcEQ7WUFFTyxTQUFTQyxFQUF1QkMsR0FBVUMsR0FBTzVGLEdBQU1GO2dCQUM1RCxJQUFhLFFBQVRFLE1BQWlCRixHQUFHLE1BQU0sSUFBSXBDLFVBQVU7Z0JBQzVDLElBQXFCLHFCQUFWa0ksSUFBdUJELE1BQWFDLE1BQVU5RixLQUFLOEYsRUFBTUMsSUFBSUYsSUFBVyxNQUFNLElBQUlqSSxVQUFVO2dCQUN2RyxPQUFnQixRQUFUc0MsSUFBZUYsSUFBYSxRQUFURSxJQUFlRixFQUFFdEMsS0FBS21JLEtBQVk3RixJQUFJQSxFQUFFNUYsUUFBUTBMLEVBQU16SixJQUFJd0o7QUFDdEY7WUFFTyxTQUFTRyxFQUF1QkgsR0FBVUMsR0FBTzFMLEdBQU84RixHQUFNRjtnQkFDbkUsSUFBYSxRQUFURSxHQUFjLE1BQU0sSUFBSXRDLFVBQVU7Z0JBQ3RDLElBQWEsUUFBVHNDLE1BQWlCRixHQUFHLE1BQU0sSUFBSXBDLFVBQVU7Z0JBQzVDLElBQXFCLHFCQUFWa0ksSUFBdUJELE1BQWFDLE1BQVU5RixLQUFLOEYsRUFBTUMsSUFBSUYsSUFBVyxNQUFNLElBQUlqSSxVQUFVO2dCQUN2RyxPQUFpQixRQUFUc0MsSUFBZUYsRUFBRXRDLEtBQUttSSxHQUFVekwsS0FBUzRGLElBQUlBLEVBQUU1RixRQUFRQSxJQUFRMEwsRUFBTTNKLElBQUkwSixHQUFVekwsSUFBU0E7QUFDdEc7WUFFTyxTQUFTNkwsRUFBc0JILEdBQU9EO2dCQUMzQyxJQUFpQixTQUFiQSxLQUEwQyxtQkFBYkEsS0FBNkMscUJBQWJBLEdBQTBCLE1BQU0sSUFBSWpJLFVBQVU7Z0JBQy9HLE9BQXdCLHFCQUFWa0ksSUFBdUJELE1BQWFDLElBQVFBLEVBQU1DLElBQUlGO0FBQ3RFO1lBRU8sU0FBU0ssRUFBd0JDLEdBQUsvTCxHQUFPTztnQkFDbEQsSUFBSVAsV0FBb0M7b0JBQ3RDLElBQXFCLG1CQUFWQSxLQUF1QyxxQkFBVkEsR0FBc0IsTUFBTSxJQUFJd0QsVUFBVTtvQkFDbEYsSUFBSXdJO29CQUNKLElBQUl6TCxHQUFPO3dCQUNQLEtBQUtxSSxPQUFPcUQsY0FBYyxNQUFNLElBQUl6SSxVQUFVO3dCQUM5Q3dJLElBQVVoTSxFQUFNNEksT0FBT3FEO0FBQzNCO29CQUNBLFNBQWdCLE1BQVpELEdBQW9CO3dCQUNwQixLQUFLcEQsT0FBT29ELFNBQVMsTUFBTSxJQUFJeEksVUFBVTt3QkFDekN3SSxJQUFVaE0sRUFBTTRJLE9BQU9vRDtBQUMzQjtvQkFDQSxJQUF1QixxQkFBWkEsR0FBd0IsTUFBTSxJQUFJeEksVUFBVTtvQkFDdkR1SSxFQUFJRyxNQUFNN0YsS0FBSzt3QkFBRXJHLE9BQU9BO3dCQUFPZ00sU0FBU0E7d0JBQVN6TCxPQUFPQTs7QUFDMUQsdUJBQ1NBLEtBQ1B3TCxFQUFJRyxNQUFNN0YsS0FBSztvQkFBRTlGLFFBQU87O2dCQUUxQixPQUFPUDtBQUNUO1lBRUEsSUFBSW1NLElBQThDLHFCQUFwQkMsa0JBQWlDQSxrQkFBa0IsU0FBVXhDLEdBQU95QyxHQUFZQztnQkFDNUcsSUFBSWxJLElBQUksSUFBSW1JLE1BQU1EO2dCQUNsQixPQUFPbEksRUFBRTRCLE9BQU8sbUJBQW1CNUIsRUFBRXdGLFFBQVFBLEdBQU94RixFQUFFaUksYUFBYUEsR0FBWWpJO0FBQ2pGO1lBRU8sU0FBU29JLEVBQW1CVDtnQkFDakMsU0FBU1UsRUFBS3JJO29CQUNaMkgsRUFBSW5DLFFBQVFtQyxFQUFJVyxXQUFXLElBQUlQLEVBQWlCL0gsR0FBRzJILEVBQUluQyxPQUFPLDhDQUE4Q3hGO29CQUM1RzJILEVBQUlXLFlBQVc7QUFDakI7Z0JBY0EsT0FiQSxTQUFTMUU7b0JBQ1AsTUFBTytELEVBQUlHLE1BQU1qSSxVQUFRO3dCQUN2QixJQUFJMEksSUFBTVosRUFBSUcsTUFBTWxEO3dCQUNwQjs0QkFDRSxJQUFJMUMsSUFBU3FHLEVBQUlYLFdBQVdXLEVBQUlYLFFBQVExSSxLQUFLcUosRUFBSTNNOzRCQUNqRCxJQUFJMk0sRUFBSXBNLE9BQU8sT0FBT29ILFFBQVFDLFFBQVF0QixHQUFRNEIsS0FBS0YsSUFBTSxTQUFTNUQ7Z0NBQWMsT0FBVHFJLEVBQUtySSxJQUFXNEQ7QUFBUTtBQUNqRywwQkFDQSxPQUFPNUQ7NEJBQ0hxSSxFQUFLckk7QUFDVDtBQUNGO29CQUNBLElBQUkySCxFQUFJVyxVQUFVLE1BQU1YLEVBQUluQztBQUM5QixpQkFDTzVCO0FBQ1Q7WUFFQTtnQkFDRXpFO2dCQUNBSTtnQkFDQVE7Z0JBQ0FLO2dCQUNBVTtnQkFDQWlDO2dCQUNBSTtnQkFDQVk7Z0JBQ0FjO2dCQUNBaEo7Z0JBQ0F3SjtnQkFDQUM7Z0JBQ0FHO2dCQUNBQztnQkFDQUs7Z0JBQ0FLO2dCQUNBQztnQkFDQU87Z0JBQ0FDO2dCQUNBQztnQkFDQUk7Z0JBQ0FoTDtnQkFDQWtMO2dCQUNBSTtnQkFDQUM7Z0JBQ0FDO2dCQUNBVTs7O09DL1dFSSxJQUEyQixDQUFDO0lBR2hDLFNBQVNDLEVBQW9CQztRQUU1QixJQUFJQyxJQUFlSCxFQUF5QkU7UUFDNUMsU0FBcUJ4RCxNQUFqQnlELEdBQ0gsT0FBT0EsRUFBYWhOO1FBR3JCLElBQUk0QyxJQUFTaUssRUFBeUJFLEtBQVk7WUFHakQvTSxTQUFTLENBQUM7O1FBT1gsT0FIQWlOLEVBQW9CRixHQUFVbkssR0FBUUEsRUFBTzVDLFNBQVM4TSxJQUcvQ2xLLEVBQU81QztBQUNmO0lDckJBOE0sRUFBb0IvSixJQUFJLENBQUMvQyxHQUFTa047UUFDakMsS0FBSSxJQUFJdEksS0FBT3NJLEdBQ1hKLEVBQW9CM0QsRUFBRStELEdBQVl0SSxPQUFTa0ksRUFBb0IzRCxFQUFFbkosR0FBUzRFLE1BQzVFOUUsT0FBT0MsZUFBZUMsR0FBUzRFLEdBQUs7WUFBRWpDLGFBQVk7WUFBTVQsS0FBS2dMLEVBQVd0STs7QUFFMUUsT0NORGtJLEVBQW9CM0QsSUFBSSxDQUFDZ0UsR0FBS0MsTUFBVXROLE9BQU91RCxVQUFVQyxlQUFlQyxLQUFLNEosR0FBS0MsSUNDbEZOLEVBQW9CL0gsSUFBSy9FO1FBQ0gsc0JBQVg2SSxVQUEwQkEsT0FBT3dFLGVBQzFDdk4sT0FBT0MsZUFBZUMsR0FBUzZJLE9BQU93RSxhQUFhO1lBQUVwTixPQUFPO1lBRTdESCxPQUFPQyxlQUFlQyxHQUFTLGNBQWM7WUFBRUMsUUFBTzs7QUFBTztJQ0Y5RCxJQUFJcU4sSUFBc0JSLEVBQW9CLE0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYW4tdGVjaC1zdWJncmFwaC8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9mYW4tdGVjaC1zdWJncmFwaC8uL3NyYy9tYXBwaW5ncy9tYXBwaW5nSGFuZGxlcnMudHMiLCJ3ZWJwYWNrOi8vZmFuLXRlY2gtc3ViZ3JhcGgvLi9zcmMvdHlwZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZmFuLXRlY2gtc3ViZ3JhcGgvLi9zcmMvdHlwZXMvbW9kZWxzL0luaXRTaGFyZXMudHMiLCJ3ZWJwYWNrOi8vZmFuLXRlY2gtc3ViZ3JhcGgvLi9zcmMvdHlwZXMvbW9kZWxzL2luZGV4LnRzIiwid2VicGFjazovL2Zhbi10ZWNoLXN1YmdyYXBoL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJhc3NlcnRcIiIsIndlYnBhY2s6Ly9mYW4tdGVjaC1zdWJncmFwaC8uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYubWpzIiwid2VicGFjazovL2Zhbi10ZWNoLXN1YmdyYXBoL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Zhbi10ZWNoLXN1YmdyYXBoL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mYW4tdGVjaC1zdWJncmFwaC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Zhbi10ZWNoLXN1YmdyYXBoL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZmFuLXRlY2gtc3ViZ3JhcGgvd2VicGFjay9zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbi8vRXhwb3J0cyBhbGwgaGFuZGxlciBmdW5jdGlvbnNcbnRzbGliXzEuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL21hcHBpbmdzL21hcHBpbmdIYW5kbGVyc1wiKSwgZXhwb3J0cyk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaGFuZGxlSW5pdFNoYXJlcyA9IHZvaWQgMDtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCB0eXBlc18xID0gcmVxdWlyZShcIi4uL3R5cGVzXCIpO1xuY29uc3QgYXNzZXJ0XzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiYXNzZXJ0XCIpKTtcbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZUluaXRTaGFyZXModHgpIHtcbiAgICBsb2dnZXIuaW5mbyhgTmV3IEluaXRpYWxpemVTaGFyZXNUcmFuc2FjdGlvbiBibG9jayAke3R4LmJsb2NrTnVtYmVyfWApO1xuICAgICgwLCBhc3NlcnRfMS5kZWZhdWx0KSh0eC5hcmdzLCBcIk5vIHR4LmFyZ3NcIik7XG4gICAgY29uc3QgYXBwcm92YWwgPSB0eXBlc18xLkluaXRTaGFyZXMuY3JlYXRlKHtcbiAgICAgICAgaWQ6IHR4Lmhhc2gsXG4gICAgICAgIGJsb2NrSGVpZ2h0OiBCaWdJbnQodHguYmxvY2tOdW1iZXIpLFxuICAgICAgICBfYmxvY2tUaW1lOiBCaWdJbnQoYXdhaXQgdHguYXJnc1syXS50b1N0cmluZygpKSxcbiAgICAgICAgX25vSW5pdGlhbFNoYXJlczogQmlnSW50KGF3YWl0IHR4LmFyZ3NbMV0udG9TdHJpbmcoKSksXG4gICAgICAgIHNoYXJlc1N1YmplY3Q6IHR4LmZyb20sXG4gICAgfSk7XG4gICAgYXdhaXQgYXBwcm92YWwuc2F2ZSgpO1xufVxuZXhwb3J0cy5oYW5kbGVJbml0U2hhcmVzID0gaGFuZGxlSW5pdFNoYXJlcztcbiIsIlwidXNlIHN0cmljdFwiO1xuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG4vLyBBdXRvLWdlbmVyYXRlZCAsIERPIE5PVCBFRElUXG50c2xpYl8xLl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9tb2RlbHNcIiksIGV4cG9ydHMpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkluaXRTaGFyZXMgPSB2b2lkIDA7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgYXNzZXJ0XzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiYXNzZXJ0XCIpKTtcbmNsYXNzIEluaXRTaGFyZXMge1xuICAgIGNvbnN0cnVjdG9yKGlkLCBfbm9Jbml0aWFsU2hhcmVzLCBzaGFyZXNTdWJqZWN0KSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5fbm9Jbml0aWFsU2hhcmVzID0gX25vSW5pdGlhbFNoYXJlcztcbiAgICAgICAgdGhpcy5zaGFyZXNTdWJqZWN0ID0gc2hhcmVzU3ViamVjdDtcbiAgICB9XG4gICAgZ2V0IF9uYW1lKCkge1xuICAgICAgICByZXR1cm4gJ0luaXRTaGFyZXMnO1xuICAgIH1cbiAgICBhc3luYyBzYXZlKCkge1xuICAgICAgICBsZXQgaWQgPSB0aGlzLmlkO1xuICAgICAgICAoMCwgYXNzZXJ0XzEuZGVmYXVsdCkoaWQgIT09IG51bGwsIFwiQ2Fubm90IHNhdmUgSW5pdFNoYXJlcyBlbnRpdHkgd2l0aG91dCBhbiBJRFwiKTtcbiAgICAgICAgYXdhaXQgc3RvcmUuc2V0KCdJbml0U2hhcmVzJywgaWQudG9TdHJpbmcoKSwgdGhpcyk7XG4gICAgfVxuICAgIHN0YXRpYyBhc3luYyByZW1vdmUoaWQpIHtcbiAgICAgICAgKDAsIGFzc2VydF8xLmRlZmF1bHQpKGlkICE9PSBudWxsLCBcIkNhbm5vdCByZW1vdmUgSW5pdFNoYXJlcyBlbnRpdHkgd2l0aG91dCBhbiBJRFwiKTtcbiAgICAgICAgYXdhaXQgc3RvcmUucmVtb3ZlKCdJbml0U2hhcmVzJywgaWQudG9TdHJpbmcoKSk7XG4gICAgfVxuICAgIHN0YXRpYyBhc3luYyBnZXQoaWQpIHtcbiAgICAgICAgKDAsIGFzc2VydF8xLmRlZmF1bHQpKChpZCAhPT0gbnVsbCAmJiBpZCAhPT0gdW5kZWZpbmVkKSwgXCJDYW5ub3QgZ2V0IEluaXRTaGFyZXMgZW50aXR5IHdpdGhvdXQgYW4gSURcIik7XG4gICAgICAgIGNvbnN0IHJlY29yZCA9IGF3YWl0IHN0b3JlLmdldCgnSW5pdFNoYXJlcycsIGlkLnRvU3RyaW5nKCkpO1xuICAgICAgICBpZiAocmVjb3JkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGUocmVjb3JkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgYXN5bmMgZ2V0QnlGaWVsZHMoZmlsdGVyLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IHJlY29yZHMgPSBhd2FpdCBzdG9yZS5nZXRCeUZpZWxkcygnSW5pdFNoYXJlcycsIGZpbHRlciwgb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiByZWNvcmRzLm1hcChyZWNvcmQgPT4gdGhpcy5jcmVhdGUocmVjb3JkKSk7XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGUocmVjb3JkKSB7XG4gICAgICAgICgwLCBhc3NlcnRfMS5kZWZhdWx0KSh0eXBlb2YgcmVjb3JkLmlkID09PSAnc3RyaW5nJywgXCJpZCBtdXN0IGJlIHByb3ZpZGVkXCIpO1xuICAgICAgICBsZXQgZW50aXR5ID0gbmV3IHRoaXMocmVjb3JkLmlkLCByZWNvcmQuX25vSW5pdGlhbFNoYXJlcywgcmVjb3JkLnNoYXJlc1N1YmplY3QpO1xuICAgICAgICBPYmplY3QuYXNzaWduKGVudGl0eSwgcmVjb3JkKTtcbiAgICAgICAgcmV0dXJuIGVudGl0eTtcbiAgICB9XG59XG5leHBvcnRzLkluaXRTaGFyZXMgPSBJbml0U2hhcmVzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Jbml0U2hhcmVzID0gdm9pZCAwO1xuLy8gQXV0by1nZW5lcmF0ZWQgLCBETyBOT1QgRURJVFxudmFyIEluaXRTaGFyZXNfMSA9IHJlcXVpcmUoXCIuL0luaXRTaGFyZXNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJJbml0U2hhcmVzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBJbml0U2hhcmVzXzEuSW5pdFNoYXJlczsgfSB9KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFzc2VydFwiKTsiLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cblxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSwgU3VwcHJlc3NlZEVycm9yLCBTeW1ib2wgKi9cblxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XG4gIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XG4gIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG59XG5cbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcbiAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcbiAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0O1xuICB9XG4gIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcbiAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICB0W3BdID0gc1twXTtcbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICB9XG4gIHJldHVybiB0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2VzRGVjb3JhdGUoY3RvciwgZGVzY3JpcHRvckluLCBkZWNvcmF0b3JzLCBjb250ZXh0SW4sIGluaXRpYWxpemVycywgZXh0cmFJbml0aWFsaXplcnMpIHtcbiAgZnVuY3Rpb24gYWNjZXB0KGYpIHsgaWYgKGYgIT09IHZvaWQgMCAmJiB0eXBlb2YgZiAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRnVuY3Rpb24gZXhwZWN0ZWRcIik7IHJldHVybiBmOyB9XG4gIHZhciBraW5kID0gY29udGV4dEluLmtpbmQsIGtleSA9IGtpbmQgPT09IFwiZ2V0dGVyXCIgPyBcImdldFwiIDoga2luZCA9PT0gXCJzZXR0ZXJcIiA/IFwic2V0XCIgOiBcInZhbHVlXCI7XG4gIHZhciB0YXJnZXQgPSAhZGVzY3JpcHRvckluICYmIGN0b3IgPyBjb250ZXh0SW5bXCJzdGF0aWNcIl0gPyBjdG9yIDogY3Rvci5wcm90b3R5cGUgOiBudWxsO1xuICB2YXIgZGVzY3JpcHRvciA9IGRlc2NyaXB0b3JJbiB8fCAodGFyZ2V0ID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGNvbnRleHRJbi5uYW1lKSA6IHt9KTtcbiAgdmFyIF8sIGRvbmUgPSBmYWxzZTtcbiAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHZhciBjb250ZXh0ID0ge307XG4gICAgICBmb3IgKHZhciBwIGluIGNvbnRleHRJbikgY29udGV4dFtwXSA9IHAgPT09IFwiYWNjZXNzXCIgPyB7fSA6IGNvbnRleHRJbltwXTtcbiAgICAgIGZvciAodmFyIHAgaW4gY29udGV4dEluLmFjY2VzcykgY29udGV4dC5hY2Nlc3NbcF0gPSBjb250ZXh0SW4uYWNjZXNzW3BdO1xuICAgICAgY29udGV4dC5hZGRJbml0aWFsaXplciA9IGZ1bmN0aW9uIChmKSB7IGlmIChkb25lKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGFkZCBpbml0aWFsaXplcnMgYWZ0ZXIgZGVjb3JhdGlvbiBoYXMgY29tcGxldGVkXCIpOyBleHRyYUluaXRpYWxpemVycy5wdXNoKGFjY2VwdChmIHx8IG51bGwpKTsgfTtcbiAgICAgIHZhciByZXN1bHQgPSAoMCwgZGVjb3JhdG9yc1tpXSkoa2luZCA9PT0gXCJhY2Nlc3NvclwiID8geyBnZXQ6IGRlc2NyaXB0b3IuZ2V0LCBzZXQ6IGRlc2NyaXB0b3Iuc2V0IH0gOiBkZXNjcmlwdG9yW2tleV0sIGNvbnRleHQpO1xuICAgICAgaWYgKGtpbmQgPT09IFwiYWNjZXNzb3JcIikge1xuICAgICAgICAgIGlmIChyZXN1bHQgPT09IHZvaWQgMCkgY29udGludWU7XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCB8fCB0eXBlb2YgcmVzdWx0ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IGV4cGVjdGVkXCIpO1xuICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5nZXQpKSBkZXNjcmlwdG9yLmdldCA9IF87XG4gICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LnNldCkpIGRlc2NyaXB0b3Iuc2V0ID0gXztcbiAgICAgICAgICBpZiAoXyA9IGFjY2VwdChyZXN1bHQuaW5pdCkpIGluaXRpYWxpemVycy51bnNoaWZ0KF8pO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoXyA9IGFjY2VwdChyZXN1bHQpKSB7XG4gICAgICAgICAgaWYgKGtpbmQgPT09IFwiZmllbGRcIikgaW5pdGlhbGl6ZXJzLnVuc2hpZnQoXyk7XG4gICAgICAgICAgZWxzZSBkZXNjcmlwdG9yW2tleV0gPSBfO1xuICAgICAgfVxuICB9XG4gIGlmICh0YXJnZXQpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGNvbnRleHRJbi5uYW1lLCBkZXNjcmlwdG9yKTtcbiAgZG9uZSA9IHRydWU7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19ydW5Jbml0aWFsaXplcnModGhpc0FyZywgaW5pdGlhbGl6ZXJzLCB2YWx1ZSkge1xuICB2YXIgdXNlVmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbml0aWFsaXplcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbHVlID0gdXNlVmFsdWUgPyBpbml0aWFsaXplcnNbaV0uY2FsbCh0aGlzQXJnLCB2YWx1ZSkgOiBpbml0aWFsaXplcnNbaV0uY2FsbCh0aGlzQXJnKTtcbiAgfVxuICByZXR1cm4gdXNlVmFsdWUgPyB2YWx1ZSA6IHZvaWQgMDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3Byb3BLZXkoeCkge1xuICByZXR1cm4gdHlwZW9mIHggPT09IFwic3ltYm9sXCIgPyB4IDogXCJcIi5jb25jYXQoeCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19zZXRGdW5jdGlvbk5hbWUoZiwgbmFtZSwgcHJlZml4KSB7XG4gIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJzeW1ib2xcIikgbmFtZSA9IG5hbWUuZGVzY3JpcHRpb24gPyBcIltcIi5jb25jYXQobmFtZS5kZXNjcmlwdGlvbiwgXCJdXCIpIDogXCJcIjtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmLCBcIm5hbWVcIiwgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiBwcmVmaXggPyBcIlwiLmNvbmNhdChwcmVmaXgsIFwiIFwiLCBuYW1lKSA6IG5hbWUgfSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xuICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XG4gICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgfVxufVxuXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgfVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgb1trMl0gPSBtW2tdO1xufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xuICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XG4gIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XG4gIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xuICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XG4gICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcbiAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XG4gICAgICB9XG4gIH07XG4gIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XG4gIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcbiAgaWYgKCFtKSByZXR1cm4gbztcbiAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XG4gIHRyeSB7XG4gICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcbiAgfVxuICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cbiAgZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xuICAgICAgfVxuICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XG4gIH1cbiAgcmV0dXJuIGFyO1xufVxuXG4vKiogQGRlcHJlY2F0ZWQgKi9cbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcbiAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXG4gICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XG4gIHJldHVybiBhcjtcbn1cblxuLyoqIEBkZXByZWNhdGVkICovXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XG4gIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xuICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXG4gICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcbiAgICAgICAgICByW2tdID0gYVtqXTtcbiAgcmV0dXJuIHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5KHRvLCBmcm9tLCBwYWNrKSB7XG4gIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XG4gICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcbiAgICAgICAgICBhcltpXSA9IGZyb21baV07XG4gICAgICB9XG4gIH1cbiAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcbiAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xuICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xuICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xuICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XG4gIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxuICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XG4gIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxuICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XG4gIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cbiAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XG4gIHZhciBpLCBwO1xuICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xuICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBmYWxzZSB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XG4gIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG4gIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XG4gIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcbiAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxuICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xuICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxuICByZXR1cm4gY29va2VkO1xufTtcblxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgb1tcImRlZmF1bHRcIl0gPSB2O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcbiAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XG4gIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XG4gIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcbiAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xuICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRJbihzdGF0ZSwgcmVjZWl2ZXIpIHtcbiAgaWYgKHJlY2VpdmVyID09PSBudWxsIHx8ICh0eXBlb2YgcmVjZWl2ZXIgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHJlY2VpdmVyICE9PSBcImZ1bmN0aW9uXCIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHVzZSAnaW4nIG9wZXJhdG9yIG9uIG5vbi1vYmplY3RcIik7XG4gIHJldHVybiB0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyID09PSBzdGF0ZSA6IHN0YXRlLmhhcyhyZWNlaXZlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FkZERpc3Bvc2FibGVSZXNvdXJjZShlbnYsIHZhbHVlLCBhc3luYykge1xuICBpZiAodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHZvaWQgMCkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgZXhwZWN0ZWQuXCIpO1xuICAgIHZhciBkaXNwb3NlO1xuICAgIGlmIChhc3luYykge1xuICAgICAgICBpZiAoIVN5bWJvbC5hc3luY0Rpc3Bvc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNEaXNwb3NlIGlzIG5vdCBkZWZpbmVkLlwiKTtcbiAgICAgICAgZGlzcG9zZSA9IHZhbHVlW1N5bWJvbC5hc3luY0Rpc3Bvc2VdO1xuICAgIH1cbiAgICBpZiAoZGlzcG9zZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGlmICghU3ltYm9sLmRpc3Bvc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuZGlzcG9zZSBpcyBub3QgZGVmaW5lZC5cIik7XG4gICAgICAgIGRpc3Bvc2UgPSB2YWx1ZVtTeW1ib2wuZGlzcG9zZV07XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZGlzcG9zZSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IG5vdCBkaXNwb3NhYmxlLlwiKTtcbiAgICBlbnYuc3RhY2sucHVzaCh7IHZhbHVlOiB2YWx1ZSwgZGlzcG9zZTogZGlzcG9zZSwgYXN5bmM6IGFzeW5jIH0pO1xuICB9XG4gIGVsc2UgaWYgKGFzeW5jKSB7XG4gICAgZW52LnN0YWNrLnB1c2goeyBhc3luYzogdHJ1ZSB9KTtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5cbnZhciBfU3VwcHJlc3NlZEVycm9yID0gdHlwZW9mIFN1cHByZXNzZWRFcnJvciA9PT0gXCJmdW5jdGlvblwiID8gU3VwcHJlc3NlZEVycm9yIDogZnVuY3Rpb24gKGVycm9yLCBzdXBwcmVzc2VkLCBtZXNzYWdlKSB7XG4gIHZhciBlID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICByZXR1cm4gZS5uYW1lID0gXCJTdXBwcmVzc2VkRXJyb3JcIiwgZS5lcnJvciA9IGVycm9yLCBlLnN1cHByZXNzZWQgPSBzdXBwcmVzc2VkLCBlO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fZGlzcG9zZVJlc291cmNlcyhlbnYpIHtcbiAgZnVuY3Rpb24gZmFpbChlKSB7XG4gICAgZW52LmVycm9yID0gZW52Lmhhc0Vycm9yID8gbmV3IF9TdXBwcmVzc2VkRXJyb3IoZSwgZW52LmVycm9yLCBcIkFuIGVycm9yIHdhcyBzdXBwcmVzc2VkIGR1cmluZyBkaXNwb3NhbC5cIikgOiBlO1xuICAgIGVudi5oYXNFcnJvciA9IHRydWU7XG4gIH1cbiAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICB3aGlsZSAoZW52LnN0YWNrLmxlbmd0aCkge1xuICAgICAgdmFyIHJlYyA9IGVudi5zdGFjay5wb3AoKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWMuZGlzcG9zZSAmJiByZWMuZGlzcG9zZS5jYWxsKHJlYy52YWx1ZSk7XG4gICAgICAgIGlmIChyZWMuYXN5bmMpIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzdWx0KS50aGVuKG5leHQsIGZ1bmN0aW9uKGUpIHsgZmFpbChlKTsgcmV0dXJuIG5leHQoKTsgfSk7XG4gICAgICB9XG4gICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgIGZhaWwoZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlbnYuaGFzRXJyb3IpIHRocm93IGVudi5lcnJvcjtcbiAgfVxuICByZXR1cm4gbmV4dCgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIF9fZXh0ZW5kcyxcbiAgX19hc3NpZ24sXG4gIF9fcmVzdCxcbiAgX19kZWNvcmF0ZSxcbiAgX19wYXJhbSxcbiAgX19tZXRhZGF0YSxcbiAgX19hd2FpdGVyLFxuICBfX2dlbmVyYXRvcixcbiAgX19jcmVhdGVCaW5kaW5nLFxuICBfX2V4cG9ydFN0YXIsXG4gIF9fdmFsdWVzLFxuICBfX3JlYWQsXG4gIF9fc3ByZWFkLFxuICBfX3NwcmVhZEFycmF5cyxcbiAgX19zcHJlYWRBcnJheSxcbiAgX19hd2FpdCxcbiAgX19hc3luY0dlbmVyYXRvcixcbiAgX19hc3luY0RlbGVnYXRvcixcbiAgX19hc3luY1ZhbHVlcyxcbiAgX19tYWtlVGVtcGxhdGVPYmplY3QsXG4gIF9faW1wb3J0U3RhcixcbiAgX19pbXBvcnREZWZhdWx0LFxuICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0LFxuICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0LFxuICBfX2NsYXNzUHJpdmF0ZUZpZWxkSW4sXG4gIF9fYWRkRGlzcG9zYWJsZVJlc291cmNlLFxuICBfX2Rpc3Bvc2VSZXNvdXJjZXMsXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oNzU4KTtcbiJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9fZXhwb3J0U3RhciIsImhhbmRsZUluaXRTaGFyZXMiLCJ0c2xpYl8xIiwidHlwZXNfMSIsImFzc2VydF8xIiwiX19pbXBvcnREZWZhdWx0IiwiYXN5bmMiLCJ0eCIsImxvZ2dlciIsImluZm8iLCJibG9ja051bWJlciIsImRlZmF1bHQiLCJhcmdzIiwiYXBwcm92YWwiLCJJbml0U2hhcmVzIiwiY3JlYXRlIiwiaWQiLCJoYXNoIiwiYmxvY2tIZWlnaHQiLCJCaWdJbnQiLCJfYmxvY2tUaW1lIiwidG9TdHJpbmciLCJfbm9Jbml0aWFsU2hhcmVzIiwic2hhcmVzU3ViamVjdCIsImZyb20iLCJzYXZlIiwiY29uc3RydWN0b3IiLCJ0aGlzIiwiX25hbWUiLCJzdG9yZSIsInNldCIsInJlbW92ZSIsImdldCIsInJlY29yZCIsImdldEJ5RmllbGRzIiwiZmlsdGVyIiwib3B0aW9ucyIsIm1hcCIsImVudGl0eSIsImFzc2lnbiIsIkluaXRTaGFyZXNfMSIsImVudW1lcmFibGUiLCJtb2R1bGUiLCJyZXF1aXJlIiwiZXh0ZW5kU3RhdGljcyIsImQiLCJiIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJBcnJheSIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJfX2V4dGVuZHMiLCJUeXBlRXJyb3IiLCJTdHJpbmciLCJfXyIsIl9fYXNzaWduIiwidCIsInMiLCJpIiwibiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFwcGx5IiwiX19yZXN0IiwiZSIsImluZGV4T2YiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsIl9fZGVjb3JhdGUiLCJkZWNvcmF0b3JzIiwidGFyZ2V0Iiwia2V5IiwiZGVzYyIsImMiLCJyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiUmVmbGVjdCIsImRlY29yYXRlIiwiX19wYXJhbSIsInBhcmFtSW5kZXgiLCJkZWNvcmF0b3IiLCJfX2VzRGVjb3JhdGUiLCJjdG9yIiwiZGVzY3JpcHRvckluIiwiY29udGV4dEluIiwiaW5pdGlhbGl6ZXJzIiwiZXh0cmFJbml0aWFsaXplcnMiLCJhY2NlcHQiLCJmIiwiXyIsImtpbmQiLCJkZXNjcmlwdG9yIiwibmFtZSIsImRvbmUiLCJjb250ZXh0IiwiYWNjZXNzIiwiYWRkSW5pdGlhbGl6ZXIiLCJwdXNoIiwicmVzdWx0IiwiaW5pdCIsInVuc2hpZnQiLCJfX3J1bkluaXRpYWxpemVycyIsInRoaXNBcmciLCJ1c2VWYWx1ZSIsIl9fcHJvcEtleSIsIngiLCJjb25jYXQiLCJfX3NldEZ1bmN0aW9uTmFtZSIsInByZWZpeCIsImRlc2NyaXB0aW9uIiwiY29uZmlndXJhYmxlIiwiX19tZXRhZGF0YSIsIm1ldGFkYXRhS2V5IiwibWV0YWRhdGFWYWx1ZSIsIm1ldGFkYXRhIiwiX19hd2FpdGVyIiwiX2FyZ3VtZW50cyIsIlAiLCJnZW5lcmF0b3IiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImZ1bGZpbGxlZCIsInN0ZXAiLCJuZXh0IiwicmVqZWN0ZWQiLCJ0aGVuIiwiX19nZW5lcmF0b3IiLCJib2R5IiwieSIsImciLCJsYWJlbCIsInNlbnQiLCJ0cnlzIiwib3BzIiwidmVyYiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwidiIsIm9wIiwicG9wIiwiX19jcmVhdGVCaW5kaW5nIiwibyIsIm0iLCJrIiwiazIiLCJ1bmRlZmluZWQiLCJfX2VzTW9kdWxlIiwid3JpdGFibGUiLCJfX3ZhbHVlcyIsIl9fcmVhZCIsImFyIiwiZXJyb3IiLCJfX3NwcmVhZCIsIl9fc3ByZWFkQXJyYXlzIiwiaWwiLCJhIiwiaiIsImpsIiwiX19zcHJlYWRBcnJheSIsInRvIiwicGFjayIsImwiLCJzbGljZSIsIl9fYXdhaXQiLCJfX2FzeW5jR2VuZXJhdG9yIiwiYXN5bmNJdGVyYXRvciIsInEiLCJyZXN1bWUiLCJmdWxmaWxsIiwic2V0dGxlIiwic2hpZnQiLCJfX2FzeW5jRGVsZWdhdG9yIiwiX19hc3luY1ZhbHVlcyIsIl9fbWFrZVRlbXBsYXRlT2JqZWN0IiwiY29va2VkIiwicmF3IiwiX19zZXRNb2R1bGVEZWZhdWx0IiwiX19pbXBvcnRTdGFyIiwibW9kIiwiX19jbGFzc1ByaXZhdGVGaWVsZEdldCIsInJlY2VpdmVyIiwic3RhdGUiLCJoYXMiLCJfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0IiwiX19jbGFzc1ByaXZhdGVGaWVsZEluIiwiX19hZGREaXNwb3NhYmxlUmVzb3VyY2UiLCJlbnYiLCJkaXNwb3NlIiwiYXN5bmNEaXNwb3NlIiwic3RhY2siLCJfU3VwcHJlc3NlZEVycm9yIiwiU3VwcHJlc3NlZEVycm9yIiwic3VwcHJlc3NlZCIsIm1lc3NhZ2UiLCJFcnJvciIsIl9fZGlzcG9zZVJlc291cmNlcyIsImZhaWwiLCJoYXNFcnJvciIsInJlYyIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsIl9fd2VicGFja19tb2R1bGVzX18iLCJkZWZpbml0aW9uIiwib2JqIiwicHJvcCIsInRvU3RyaW5nVGFnIiwiX193ZWJwYWNrX2V4cG9ydHNfXyJdLCJzb3VyY2VSb290IjoiIn0=