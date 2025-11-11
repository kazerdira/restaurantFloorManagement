import kn, { forwardRef as Ml, createElement as jr, useState as ht, useRef as zt, useEffect as ui, useCallback as Os } from "react";
var Mr = { exports: {} }, bi = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xr;
function Sl() {
  if (Xr)
    return bi;
  Xr = 1;
  var i = kn, e = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, s = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, r = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(a, l, c) {
    var d, u = {}, f = null, g = null;
    c !== void 0 && (f = "" + c), l.key !== void 0 && (f = "" + l.key), l.ref !== void 0 && (g = l.ref);
    for (d in l)
      n.call(l, d) && !r.hasOwnProperty(d) && (u[d] = l[d]);
    if (a && a.defaultProps)
      for (d in l = a.defaultProps, l)
        u[d] === void 0 && (u[d] = l[d]);
    return { $$typeof: e, type: a, key: f, ref: g, props: u, _owner: s.current };
  }
  return bi.Fragment = t, bi.jsx = o, bi.jsxs = o, bi;
}
var Ei = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yr;
function bl() {
  return Yr || (Yr = 1, process.env.NODE_ENV !== "production" && function() {
    var i = kn, e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), _ = Symbol.iterator, v = "@@iterator";
    function p(P) {
      if (P === null || typeof P != "object")
        return null;
      var ue = _ && P[_] || P[v];
      return typeof ue == "function" ? ue : null;
    }
    var h = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(P) {
      {
        for (var ue = arguments.length, Pe = new Array(ue > 1 ? ue - 1 : 0), je = 1; je < ue; je++)
          Pe[je - 1] = arguments[je];
        x("error", P, Pe);
      }
    }
    function x(P, ue, Pe) {
      {
        var je = h.ReactDebugCurrentFrame, ot = je.getStackAddendum();
        ot !== "" && (ue += "%s", Pe = Pe.concat([ot]));
        var b = Pe.map(function(I) {
          return String(I);
        });
        b.unshift("Warning: " + ue), Function.prototype.apply.call(console[P], console, b);
      }
    }
    var R = !1, U = !1, L = !1, C = !1, ee = !1, E;
    E = Symbol.for("react.module.reference");
    function A(P) {
      return !!(typeof P == "string" || typeof P == "function" || P === n || P === r || ee || P === s || P === c || P === d || C || P === g || R || U || L || typeof P == "object" && P !== null && (P.$$typeof === f || P.$$typeof === u || P.$$typeof === o || P.$$typeof === a || P.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      P.$$typeof === E || P.getModuleId !== void 0));
    }
    function O(P, ue, Pe) {
      var je = P.displayName;
      if (je)
        return je;
      var ot = ue.displayName || ue.name || "";
      return ot !== "" ? Pe + "(" + ot + ")" : Pe;
    }
    function te(P) {
      return P.displayName || "Context";
    }
    function ae(P) {
      if (P == null)
        return null;
      if (typeof P.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof P == "function")
        return P.displayName || P.name || null;
      if (typeof P == "string")
        return P;
      switch (P) {
        case n:
          return "Fragment";
        case t:
          return "Portal";
        case r:
          return "Profiler";
        case s:
          return "StrictMode";
        case c:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof P == "object")
        switch (P.$$typeof) {
          case a:
            var ue = P;
            return te(ue) + ".Consumer";
          case o:
            var Pe = P;
            return te(Pe._context) + ".Provider";
          case l:
            return O(P, P.render, "ForwardRef");
          case u:
            var je = P.displayName || null;
            return je !== null ? je : ae(P.type) || "Memo";
          case f: {
            var ot = P, b = ot._payload, I = ot._init;
            try {
              return ae(I(b));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var N = Object.assign, Y = 0, M, ne, K, j, B, J, Z;
    function W() {
    }
    W.__reactDisabledLog = !0;
    function ie() {
      {
        if (Y === 0) {
          M = console.log, ne = console.info, K = console.warn, j = console.error, B = console.group, J = console.groupCollapsed, Z = console.groupEnd;
          var P = {
            configurable: !0,
            enumerable: !0,
            value: W,
            writable: !0
          };
          Object.defineProperties(console, {
            info: P,
            log: P,
            warn: P,
            error: P,
            group: P,
            groupCollapsed: P,
            groupEnd: P
          });
        }
        Y++;
      }
    }
    function le() {
      {
        if (Y--, Y === 0) {
          var P = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: N({}, P, {
              value: M
            }),
            info: N({}, P, {
              value: ne
            }),
            warn: N({}, P, {
              value: K
            }),
            error: N({}, P, {
              value: j
            }),
            group: N({}, P, {
              value: B
            }),
            groupCollapsed: N({}, P, {
              value: J
            }),
            groupEnd: N({}, P, {
              value: Z
            })
          });
        }
        Y < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Me = h.ReactCurrentDispatcher, me;
    function Ue(P, ue, Pe) {
      {
        if (me === void 0)
          try {
            throw Error();
          } catch (ot) {
            var je = ot.stack.trim().match(/\n( *(at )?)/);
            me = je && je[1] || "";
          }
        return `
` + me + P;
      }
    }
    var De = !1, pe;
    {
      var xe = typeof WeakMap == "function" ? WeakMap : Map;
      pe = new xe();
    }
    function z(P, ue) {
      if (!P || De)
        return "";
      {
        var Pe = pe.get(P);
        if (Pe !== void 0)
          return Pe;
      }
      var je;
      De = !0;
      var ot = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var b;
      b = Me.current, Me.current = null, ie();
      try {
        if (ue) {
          var I = function() {
            throw Error();
          };
          if (Object.defineProperty(I.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(I, []);
            } catch (Ve) {
              je = Ve;
            }
            Reflect.construct(P, [], I);
          } else {
            try {
              I.call();
            } catch (Ve) {
              je = Ve;
            }
            P.call(I.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ve) {
            je = Ve;
          }
          P();
        }
      } catch (Ve) {
        if (Ve && je && typeof Ve.stack == "string") {
          for (var G = Ve.stack.split(`
`), $ = je.stack.split(`
`), X = G.length - 1, ve = $.length - 1; X >= 1 && ve >= 0 && G[X] !== $[ve]; )
            ve--;
          for (; X >= 1 && ve >= 0; X--, ve--)
            if (G[X] !== $[ve]) {
              if (X !== 1 || ve !== 1)
                do
                  if (X--, ve--, ve < 0 || G[X] !== $[ve]) {
                    var Ie = `
` + G[X].replace(" at new ", " at ");
                    return P.displayName && Ie.includes("<anonymous>") && (Ie = Ie.replace("<anonymous>", P.displayName)), typeof P == "function" && pe.set(P, Ie), Ie;
                  }
                while (X >= 1 && ve >= 0);
              break;
            }
        }
      } finally {
        De = !1, Me.current = b, le(), Error.prepareStackTrace = ot;
      }
      var He = P ? P.displayName || P.name : "", We = He ? Ue(He) : "";
      return typeof P == "function" && pe.set(P, We), We;
    }
    function Te(P, ue, Pe) {
      return z(P, !1);
    }
    function Ae(P) {
      var ue = P.prototype;
      return !!(ue && ue.isReactComponent);
    }
    function Ce(P, ue, Pe) {
      if (P == null)
        return "";
      if (typeof P == "function")
        return z(P, Ae(P));
      if (typeof P == "string")
        return Ue(P);
      switch (P) {
        case c:
          return Ue("Suspense");
        case d:
          return Ue("SuspenseList");
      }
      if (typeof P == "object")
        switch (P.$$typeof) {
          case l:
            return Te(P.render);
          case u:
            return Ce(P.type, ue, Pe);
          case f: {
            var je = P, ot = je._payload, b = je._init;
            try {
              return Ce(b(ot), ue, Pe);
            } catch {
            }
          }
        }
      return "";
    }
    var Ee = Object.prototype.hasOwnProperty, Oe = {}, fe = h.ReactDebugCurrentFrame;
    function y(P) {
      if (P) {
        var ue = P._owner, Pe = Ce(P.type, P._source, ue ? ue.type : null);
        fe.setExtraStackFrame(Pe);
      } else
        fe.setExtraStackFrame(null);
    }
    function S(P, ue, Pe, je, ot) {
      {
        var b = Function.call.bind(Ee);
        for (var I in P)
          if (b(P, I)) {
            var G = void 0;
            try {
              if (typeof P[I] != "function") {
                var $ = Error((je || "React class") + ": " + Pe + " type `" + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof P[I] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw $.name = "Invariant Violation", $;
              }
              G = P[I](ue, I, je, Pe, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (X) {
              G = X;
            }
            G && !(G instanceof Error) && (y(ot), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", je || "React class", Pe, I, typeof G), y(null)), G instanceof Error && !(G.message in Oe) && (Oe[G.message] = !0, y(ot), T("Failed %s type: %s", Pe, G.message), y(null));
          }
      }
    }
    var D = Array.isArray;
    function q(P) {
      return D(P);
    }
    function ce(P) {
      {
        var ue = typeof Symbol == "function" && Symbol.toStringTag, Pe = ue && P[Symbol.toStringTag] || P.constructor.name || "Object";
        return Pe;
      }
    }
    function re(P) {
      try {
        return oe(P), !1;
      } catch {
        return !0;
      }
    }
    function oe(P) {
      return "" + P;
    }
    function ge(P) {
      if (re(P))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ce(P)), oe(P);
    }
    var ye = h.ReactCurrentOwner, Ne = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Fe, de, he;
    he = {};
    function ze(P) {
      if (Ee.call(P, "ref")) {
        var ue = Object.getOwnPropertyDescriptor(P, "ref").get;
        if (ue && ue.isReactWarning)
          return !1;
      }
      return P.ref !== void 0;
    }
    function Ge(P) {
      if (Ee.call(P, "key")) {
        var ue = Object.getOwnPropertyDescriptor(P, "key").get;
        if (ue && ue.isReactWarning)
          return !1;
      }
      return P.key !== void 0;
    }
    function Le(P, ue) {
      if (typeof P.ref == "string" && ye.current && ue && ye.current.stateNode !== ue) {
        var Pe = ae(ye.current.type);
        he[Pe] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ae(ye.current.type), P.ref), he[Pe] = !0);
      }
    }
    function Se(P, ue) {
      {
        var Pe = function() {
          Fe || (Fe = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ue));
        };
        Pe.isReactWarning = !0, Object.defineProperty(P, "key", {
          get: Pe,
          configurable: !0
        });
      }
    }
    function Be(P, ue) {
      {
        var Pe = function() {
          de || (de = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ue));
        };
        Pe.isReactWarning = !0, Object.defineProperty(P, "ref", {
          get: Pe,
          configurable: !0
        });
      }
    }
    var $e = function(P, ue, Pe, je, ot, b, I) {
      var G = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: P,
        key: ue,
        ref: Pe,
        props: I,
        // Record the component responsible for creating this element.
        _owner: b
      };
      return G._store = {}, Object.defineProperty(G._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(G, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: je
      }), Object.defineProperty(G, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ot
      }), Object.freeze && (Object.freeze(G.props), Object.freeze(G)), G;
    };
    function k(P, ue, Pe, je, ot) {
      {
        var b, I = {}, G = null, $ = null;
        Pe !== void 0 && (ge(Pe), G = "" + Pe), Ge(ue) && (ge(ue.key), G = "" + ue.key), ze(ue) && ($ = ue.ref, Le(ue, ot));
        for (b in ue)
          Ee.call(ue, b) && !Ne.hasOwnProperty(b) && (I[b] = ue[b]);
        if (P && P.defaultProps) {
          var X = P.defaultProps;
          for (b in X)
            I[b] === void 0 && (I[b] = X[b]);
        }
        if (G || $) {
          var ve = typeof P == "function" ? P.displayName || P.name || "Unknown" : P;
          G && Se(I, ve), $ && Be(I, ve);
        }
        return $e(P, G, $, ot, je, ye.current, I);
      }
    }
    var V = h.ReactCurrentOwner, F = h.ReactDebugCurrentFrame;
    function w(P) {
      if (P) {
        var ue = P._owner, Pe = Ce(P.type, P._source, ue ? ue.type : null);
        F.setExtraStackFrame(Pe);
      } else
        F.setExtraStackFrame(null);
    }
    var Q;
    Q = !1;
    function se(P) {
      return typeof P == "object" && P !== null && P.$$typeof === e;
    }
    function _e() {
      {
        if (V.current) {
          var P = ae(V.current.type);
          if (P)
            return `

Check the render method of \`` + P + "`.";
        }
        return "";
      }
    }
    function be(P) {
      {
        if (P !== void 0) {
          var ue = P.fileName.replace(/^.*[\\\/]/, ""), Pe = P.lineNumber;
          return `

Check your code at ` + ue + ":" + Pe + ".";
        }
        return "";
      }
    }
    var ke = {};
    function qe(P) {
      {
        var ue = _e();
        if (!ue) {
          var Pe = typeof P == "string" ? P : P.displayName || P.name;
          Pe && (ue = `

Check the top-level render call using <` + Pe + ">.");
        }
        return ue;
      }
    }
    function it(P, ue) {
      {
        if (!P._store || P._store.validated || P.key != null)
          return;
        P._store.validated = !0;
        var Pe = qe(ue);
        if (ke[Pe])
          return;
        ke[Pe] = !0;
        var je = "";
        P && P._owner && P._owner !== V.current && (je = " It was passed a child from " + ae(P._owner.type) + "."), w(P), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Pe, je), w(null);
      }
    }
    function lt(P, ue) {
      {
        if (typeof P != "object")
          return;
        if (q(P))
          for (var Pe = 0; Pe < P.length; Pe++) {
            var je = P[Pe];
            se(je) && it(je, ue);
          }
        else if (se(P))
          P._store && (P._store.validated = !0);
        else if (P) {
          var ot = p(P);
          if (typeof ot == "function" && ot !== P.entries)
            for (var b = ot.call(P), I; !(I = b.next()).done; )
              se(I.value) && it(I.value, ue);
        }
      }
    }
    function Ze(P) {
      {
        var ue = P.type;
        if (ue == null || typeof ue == "string")
          return;
        var Pe;
        if (typeof ue == "function")
          Pe = ue.propTypes;
        else if (typeof ue == "object" && (ue.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ue.$$typeof === u))
          Pe = ue.propTypes;
        else
          return;
        if (Pe) {
          var je = ae(ue);
          S(Pe, P.props, "prop", je, P);
        } else if (ue.PropTypes !== void 0 && !Q) {
          Q = !0;
          var ot = ae(ue);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ot || "Unknown");
        }
        typeof ue.getDefaultProps == "function" && !ue.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ct(P) {
      {
        for (var ue = Object.keys(P.props), Pe = 0; Pe < ue.length; Pe++) {
          var je = ue[Pe];
          if (je !== "children" && je !== "key") {
            w(P), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", je), w(null);
            break;
          }
        }
        P.ref !== null && (w(P), T("Invalid attribute `ref` supplied to `React.Fragment`."), w(null));
      }
    }
    var ut = {};
    function Ut(P, ue, Pe, je, ot, b) {
      {
        var I = A(P);
        if (!I) {
          var G = "";
          (P === void 0 || typeof P == "object" && P !== null && Object.keys(P).length === 0) && (G += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var $ = be(ot);
          $ ? G += $ : G += _e();
          var X;
          P === null ? X = "null" : q(P) ? X = "array" : P !== void 0 && P.$$typeof === e ? (X = "<" + (ae(P.type) || "Unknown") + " />", G = " Did you accidentally export a JSX literal instead of a component?") : X = typeof P, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", X, G);
        }
        var ve = k(P, ue, Pe, ot, b);
        if (ve == null)
          return ve;
        if (I) {
          var Ie = ue.children;
          if (Ie !== void 0)
            if (je)
              if (q(Ie)) {
                for (var He = 0; He < Ie.length; He++)
                  lt(Ie[He], P);
                Object.freeze && Object.freeze(Ie);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              lt(Ie, P);
        }
        if (Ee.call(ue, "key")) {
          var We = ae(P), Ve = Object.keys(ue).filter(function(xt) {
            return xt !== "key";
          }), Ye = Ve.length > 0 ? "{key: someKey, " + Ve.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ut[We + Ye]) {
            var Ke = Ve.length > 0 ? "{" + Ve.join(": ..., ") + ": ...}" : "{}";
            T(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ye, We, Ke, We), ut[We + Ye] = !0;
          }
        }
        return P === n ? ct(ve) : Ze(ve), ve;
      }
    }
    function ft(P, ue, Pe) {
      return Ut(P, ue, Pe, !0);
    }
    function at(P, ue, Pe) {
      return Ut(P, ue, Pe, !1);
    }
    var bt = at, cn = ft;
    Ei.Fragment = n, Ei.jsx = bt, Ei.jsxs = cn;
  }()), Ei;
}
process.env.NODE_ENV === "production" ? Mr.exports = Sl() : Mr.exports = bl();
var m = Mr.exports, El = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const wl = (i) => i.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Tl = (i, e) => {
  const t = Ml(
    ({ color: n = "currentColor", size: s = 24, strokeWidth: r = 2, absoluteStrokeWidth: o, children: a, ...l }, c) => jr(
      "svg",
      {
        ref: c,
        ...El,
        width: s,
        height: s,
        stroke: n,
        strokeWidth: o ? Number(r) * 24 / Number(s) : r,
        className: `lucide lucide-${wl(i)}`,
        ...l
      },
      [
        ...e.map(([d, u]) => jr(d, u)),
        ...(Array.isArray(a) ? a : [a]) || []
      ]
    )
  );
  return t.displayName = `${i}`, t;
};
var dt = Tl;
const Sr = dt("Armchair", [
  ["path", { d: "M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3", key: "irtipd" }],
  [
    "path",
    {
      d: "M3 11v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z",
      key: "1ed1m0"
    }
  ],
  ["path", { d: "M5 18v2", key: "ppbyun" }],
  ["path", { d: "M19 18v2", key: "gy7782" }]
]), Al = dt("Bath", [
  [
    "path",
    {
      d: "M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5",
      key: "1r8yf5"
    }
  ],
  ["line", { x1: "10", x2: "8", y1: "5", y2: "7", key: "h5g8z4" }],
  ["line", { x1: "2", x2: "22", y1: "12", y2: "12", key: "1dnqot" }],
  ["line", { x1: "7", x2: "7", y1: "19", y2: "21", key: "16jp00" }],
  ["line", { x1: "17", x2: "17", y1: "19", y2: "21", key: "1pxrnk" }]
]), Rl = dt("Box", [
  [
    "path",
    {
      d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
      key: "yt0hxn"
    }
  ],
  ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
  ["line", { x1: "12", x2: "12", y1: "22", y2: "12", key: "a4e8g8" }]
]), Cl = dt("ChefHat", [
  [
    "path",
    {
      d: "M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z",
      key: "z3ra2g"
    }
  ],
  ["line", { x1: "6", x2: "18", y1: "17", y2: "17", key: "12q60k" }]
]), Ll = dt("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]), Pl = dt("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]), qr = dt("Columns", [
  [
    "rect",
    {
      width: "18",
      height: "18",
      x: "3",
      y: "3",
      rx: "2",
      ry: "2",
      key: "1m3agn"
    }
  ],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "21", key: "1efggb" }]
]), Nl = dt("DoorOpen", [
  ["path", { d: "M13 4h3a2 2 0 0 1 2 2v14", key: "hrm0s9" }],
  ["path", { d: "M2 20h3", key: "1gaodv" }],
  ["path", { d: "M13 20h9", key: "s90cdi" }],
  ["path", { d: "M10 12v.01", key: "vx6srw" }],
  [
    "path",
    {
      d: "M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z",
      key: "199qr4"
    }
  ]
]), Dl = dt("EyeOff", [
  ["path", { d: "M9.88 9.88a3 3 0 1 0 4.24 4.24", key: "1jxqfv" }],
  [
    "path",
    {
      d: "M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",
      key: "9wicm4"
    }
  ],
  [
    "path",
    {
      d: "M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",
      key: "1jreej"
    }
  ],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]), Ul = dt("Eye", [
  [
    "path",
    { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]), Il = dt("Grid", [
  [
    "rect",
    {
      width: "18",
      height: "18",
      x: "3",
      y: "3",
      rx: "2",
      ry: "2",
      key: "1m3agn"
    }
  ],
  ["line", { x1: "3", x2: "21", y1: "9", y2: "9", key: "1vqk6q" }],
  ["line", { x1: "3", x2: "21", y1: "15", y2: "15", key: "o2sbyz" }],
  ["line", { x1: "9", x2: "9", y1: "3", y2: "21", key: "13tij5" }],
  ["line", { x1: "15", x2: "15", y1: "3", y2: "21", key: "1hpv9i" }]
]), Fl = dt("Home", [
  [
    "path",
    { d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z", key: "y5dka4" }
  ],
  ["polyline", { points: "9 22 9 12 15 12 15 22", key: "e2us08" }]
]), Lo = dt("Layers", [
  ["polygon", { points: "12 2 2 7 12 12 22 7 12 2", key: "1b0ttc" }],
  ["polyline", { points: "2 17 12 22 22 17", key: "imjtdl" }],
  ["polyline", { points: "2 12 12 17 22 12", key: "5dexcv" }]
]), Ol = dt("LayoutGrid", [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  [
    "rect",
    { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }
  ],
  [
    "rect",
    { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }
  ],
  [
    "rect",
    { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }
  ]
]), Bl = dt("Maximize2", [
  ["polyline", { points: "15 3 21 3 21 9", key: "mznyad" }],
  ["polyline", { points: "9 21 3 21 3 15", key: "1avn1i" }],
  ["line", { x1: "21", x2: "14", y1: "3", y2: "10", key: "ota7mn" }],
  ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }]
]), Po = dt("Minus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }]
]), Bs = dt("Move3d", [
  ["path", { d: "M5 3v16h16", key: "1mqmf9" }],
  ["path", { d: "m5 19 6-6", key: "jh6hbb" }],
  ["path", { d: "m2 6 3-3 3 3", key: "tkyvxa" }],
  ["path", { d: "m18 16 3 3-3 3", key: "1d4glt" }]
]), zl = dt("Package", [
  ["path", { d: "M16.5 9.4 7.55 4.24", key: "10qotr" }],
  [
    "path",
    {
      d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
      key: "yt0hxn"
    }
  ],
  ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
  ["line", { x1: "12", x2: "12", y1: "22", y2: "12", key: "a4e8g8" }]
]), br = dt("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]), $r = dt("RectangleVertical", [
  [
    "rect",
    { width: "12", height: "20", x: "6", y: "2", rx: "2", key: "1oxtiu" }
  ]
]), Er = dt("RotateCcw", [
  [
    "path",
    { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }
  ],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
]), kl = dt("RotateCw", [
  [
    "path",
    { d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8", key: "1p45f6" }
  ],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }]
]), Gl = dt("Rows", [
  [
    "rect",
    {
      width: "18",
      height: "18",
      x: "3",
      y: "3",
      rx: "2",
      ry: "2",
      key: "1m3agn"
    }
  ],
  ["line", { x1: "3", x2: "21", y1: "12", y2: "12", key: "10d38w" }]
]), Hl = dt("Save", [
  [
    "path",
    {
      d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",
      key: "1owoqh"
    }
  ],
  ["polyline", { points: "17 21 17 13 7 13 7 21", key: "1md35c" }],
  ["polyline", { points: "7 3 7 8 15 8", key: "8nz8an" }]
]), Ni = dt("Square", [
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }
  ]
]), ms = dt("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
]), Vl = dt("Upload", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }]
]), Wl = dt("Wine", [
  ["path", { d: "M8 22h8", key: "rmew8v" }],
  ["path", { d: "M7 10h10", key: "1101jm" }],
  ["path", { d: "M12 15v7", key: "t2xh3l" }],
  [
    "path",
    {
      d: "M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z",
      key: "10ffi3"
    }
  ]
]), jl = dt("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), Kr = dt("ZoomIn", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
]), Xl = dt("ZoomOut", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
]), Yl = `
  .hexagon-shape {
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  }
`, st = 20, ql = {
  small: { width: 50, height: 50 },
  medium: { width: 90, height: 90 },
  large: { width: 130, height: 130 }
}, $l = {
  square: Ni,
  circle: Pl,
  rectangle: Ni,
  hexagon: Ni
}, No = {
  small: "Small",
  medium: "Medium",
  large: "Big"
}, Fr = {
  bar: Wl,
  kitchen: Cl,
  toilet: Al
}, vs = {
  bar: "Bar",
  kitchen: "Kitchen",
  toilet: "Toilet"
}, Do = {
  bar: {
    bg: "bg-gradient-to-br from-purple-500 to-purple-700",
    border: "border-purple-600",
    text: "text-purple-100"
  },
  kitchen: {
    bg: "bg-gradient-to-br from-orange-500 to-orange-700",
    border: "border-orange-600",
    text: "text-orange-100"
  },
  toilet: {
    bg: "bg-gradient-to-br from-cyan-500 to-cyan-700",
    border: "border-cyan-600",
    text: "text-cyan-100"
  }
}, ys = {
  wall: "Wall",
  door: "Door",
  window: "Window"
}, Kl = {
  wall: $r,
  door: Nl,
  window: $r
}, Uo = {
  pillar: "Pillar",
  column: "Column",
  stairs: "Stairs"
}, Zl = {
  pillar: qr,
  column: qr,
  stairs: Gl
}, Jl = {
  pillar: {
    bg: "bg-gradient-to-br from-gray-600 to-gray-800",
    border: "border-gray-700",
    text: "text-gray-100"
  },
  column: {
    bg: "bg-gradient-to-br from-slate-600 to-slate-800",
    border: "border-slate-700",
    text: "text-slate-100"
  },
  stairs: {
    bg: "bg-gradient-to-br from-stone-600 to-stone-800",
    border: "border-stone-700",
    text: "text-stone-100"
  }
}, yn = () => Math.random().toString(36).slice(2, 11), Ql = (i) => {
  const e = i.shape === "rectangle" ? i.width * 1.5 : i.width, t = Math.min(e, i.height), n = Math.round(t * 0.35);
  return Math.max(18, Math.min(48, n));
}, Io = (i) => i.shape === "rectangle" ? i.width * 1.5 : i.width, Zr = (i, e) => {
  const { width: t, height: n } = ql[e];
  return {
    width: i === "rectangle" ? t * 1.5 : t,
    height: n
  };
}, Gi = (i, e) => {
  const t = Math.abs(e.x - i.x), n = Math.abs(e.y - i.y);
  return t > n ? { x: e.x, y: i.y } : { x: i.x, y: e.y };
}, ec = ({
  chair: i,
  table: e,
  isSelected: t,
  onSelect: n,
  onDrag: s,
  onDragEnd: r,
  totalChairsOnSide: o
}) => {
  const a = Ql(e), l = i.size ?? Math.round(a * 1.3), c = Math.max(10, Math.round(l * 0.25)), d = Math.min(l - 4, Math.max(20, Math.round(l * 0.65))), u = Io(e), f = (e.rotation || 0) * (Math.PI / 180), g = (() => {
    const p = (i.position === "top" || i.position === "bottom" ? u : e.height) - l * o, h = o > 1 ? p / (o + 1) : p / 2, T = h + i.index * (l + h) + l / 2;
    let x = 0, R = 0;
    switch (i.position) {
      case "top":
        x = T - u / 2, R = -(e.height / 2 + c + l / 2);
        break;
      case "bottom":
        x = T - u / 2, R = e.height / 2 + c + l / 2;
        break;
      case "left":
        x = -(u / 2 + c + l / 2), R = T - e.height / 2;
        break;
      case "right":
        x = u / 2 + c + l / 2, R = T - e.height / 2;
        break;
    }
    const U = x * Math.cos(f) - R * Math.sin(f), L = x * Math.sin(f) + R * Math.cos(f), C = e.x + u / 2, ee = e.y + e.height / 2;
    return {
      x: C + U - l / 2,
      y: ee + L - l / 2
    };
  })(), _ = () => {
    let v = 0;
    switch (i.position) {
      case "top":
        v = 0;
        break;
      case "right":
        v = 90;
        break;
      case "bottom":
        v = 180;
        break;
      case "left":
        v = 270;
        break;
    }
    return v + (e.rotation || 0);
  };
  return /* @__PURE__ */ m.jsx(
    "div",
    {
      className: `absolute cursor-move transition-all duration-150 ${t ? "ring-4 ring-amber-400 ring-offset-2" : ""}`,
      style: {
        left: g.x,
        top: g.y,
        width: l,
        height: l,
        transform: `rotate(${_()}deg)`,
        zIndex: t ? 100 : 50,
        filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2))"
      },
      onMouseDown: (v) => {
        v.stopPropagation(), n(), s(v, i.id);
      },
      onMouseUp: r,
      children: /* @__PURE__ */ m.jsx("div", { className: "w-full h-full bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg border-4 border-amber-800 flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all", children: /* @__PURE__ */ m.jsx(Sr, { size: d, strokeWidth: 3.5, className: "text-amber-50" }) })
    }
  );
}, tc = ({
  table: i,
  chairs: e,
  isSelected: t,
  onSelect: n,
  onDrag: s,
  onDragEnd: r
}) => {
  const o = {
    left: i.x,
    top: i.y,
    width: Io(i),
    height: i.height,
    zIndex: t ? 100 : 50,
    transform: `rotate(${i.rotation || 0}deg)`
  }, a = "w-full h-full flex items-center justify-center relative", l = i.shape === "circle" ? `${a} rounded-full` : i.shape === "hexagon" ? `${a} hexagon-shape` : a, d = e.filter((g) => g.tableId === i.id).length, u = i.name.match(/\d+/), f = u ? u[0] : i.name;
  return /* @__PURE__ */ m.jsx(
    "div",
    {
      className: `absolute cursor-move transition-all duration-150 ${t ? "ring-2 ring-emerald-500 ring-offset-2" : ""}`,
      style: o,
      onMouseDown: (g) => {
        g.stopPropagation(), n(), s(g, i.id);
      },
      onClick: (g) => {
        g.stopPropagation(), n();
      },
      onMouseUp: r,
      children: /* @__PURE__ */ m.jsxs("div", { className: l, children: [
        /* @__PURE__ */ m.jsx(
          "div",
          {
            className: "absolute inset-0 rounded-[inherit]",
            style: {
              background: "linear-gradient(145deg, #059669 0%, #047857 50%, #065f46 100%)",
              boxShadow: `
              0 8px 16px rgba(0, 0, 0, 0.3),
              0 4px 8px rgba(0, 0, 0, 0.2),
              inset 0 2px 4px rgba(255, 255, 255, 0.2),
              inset 0 -2px 4px rgba(0, 0, 0, 0.2)
            `
            }
          }
        ),
        /* @__PURE__ */ m.jsx(
          "div",
          {
            className: "absolute inset-0 rounded-[inherit] opacity-20",
            style: {
              background: `
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 2px,
                rgba(0, 0, 0, 0.1) 2px,
                rgba(0, 0, 0, 0.1) 4px
              )
            `
            }
          }
        ),
        /* @__PURE__ */ m.jsx(
          "div",
          {
            className: "absolute inset-0 rounded-[inherit]",
            style: {
              border: "3px solid transparent",
              borderImage: "linear-gradient(145deg, rgba(255,255,255,0.4), rgba(0,0,0,0.2)) 1",
              pointerEvents: "none"
            }
          }
        ),
        /* @__PURE__ */ m.jsxs("div", { className: "relative z-10 flex flex-col items-center justify-center gap-1 text-white drop-shadow-lg", children: [
          /* @__PURE__ */ m.jsxs("span", { className: "text-xs font-bold uppercase tracking-wide", children: [
            "N: ",
            f
          ] }),
          /* @__PURE__ */ m.jsxs("span", { className: "text-xs font-bold uppercase tracking-wide", children: [
            "S: ",
            d
          ] })
        ] })
      ] })
    }
  );
}, nc = ({
  object: i,
  isSelected: e,
  onSelect: t,
  onDragStart: n
}) => {
  const s = Fr[i.type], r = Do[i.type], [o, a] = ht(!1), l = (c) => {
    a(!0), n(c);
    const d = () => {
      a(!1), document.removeEventListener("mouseup", d);
    };
    document.addEventListener("mouseup", d);
  };
  return /* @__PURE__ */ m.jsxs(
    "div",
    {
      className: `absolute cursor-move select-none ${o ? "" : "transition-all duration-75"} ${r.bg} ${r.border} border-2 rounded-lg shadow-lg flex items-center justify-center ${e ? "ring-4 ring-blue-400 ring-opacity-50 scale-105" : "hover:scale-102"}`,
      style: {
        left: `${i.x}px`,
        top: `${i.y}px`,
        width: `${i.width}px`,
        height: `${i.height}px`,
        transform: `rotate(${i.rotation}deg)`,
        transformOrigin: "center",
        willChange: o ? "transform" : "auto"
      },
      onClick: (c) => {
        c.stopPropagation(), t();
      },
      onMouseDown: l,
      children: [
        /* @__PURE__ */ m.jsxs("div", { className: "flex flex-col items-center justify-center gap-2 pointer-events-none", children: [
          /* @__PURE__ */ m.jsx(s, { className: `w-8 h-8 ${r.text}`, strokeWidth: 2 }),
          /* @__PURE__ */ m.jsx("span", { className: `text-sm font-bold ${r.text} uppercase tracking-wide`, children: i.name })
        ] }),
        e && /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
          /* @__PURE__ */ m.jsx("div", { className: "absolute -top-1 -left-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white cursor-nw-resize" }),
          /* @__PURE__ */ m.jsx("div", { className: "absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white cursor-ne-resize" }),
          /* @__PURE__ */ m.jsx("div", { className: "absolute -bottom-1 -left-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white cursor-sw-resize" }),
          /* @__PURE__ */ m.jsx("div", { className: "absolute -bottom-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white cursor-se-resize" })
        ] })
      ]
    }
  );
}, Jr = ({
  wall: i,
  isSelected: e,
  onSelect: t,
  onDragHandle: n,
  onDragStart: s
}) => {
  const r = Math.sqrt(
    Math.pow(i.endX - i.startX, 2) + Math.pow(i.endY - i.startY, 2)
  ), o = Math.atan2(i.endY - i.startY, i.endX - i.startX) * (180 / Math.PI), a = () => {
    if (!e)
      return "pointer";
    const u = Math.abs(i.endX - i.startX), f = Math.abs(i.endY - i.startY);
    return u > f ? "ew-resize" : "ns-resize";
  }, l = () => {
    switch (i.type) {
      case "wall":
        return "bg-gray-800";
      case "door":
        return "bg-amber-600";
      case "window":
        return "bg-blue-500";
    }
  }, c = () => i.type === "window" ? "bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400" : i.type === "door" ? "" : l(), d = () => {
    const u = r * 0.1, f = (r - u) / 2;
    return /* @__PURE__ */ m.jsxs("div", { className: "w-full h-full relative", children: [
      /* @__PURE__ */ m.jsx(
        "div",
        {
          className: "absolute left-0 bg-gradient-to-r from-amber-600 to-amber-700 shadow-md rounded-sm",
          style: {
            width: `${f}px`,
            height: `${i.thickness}px`,
            borderTop: "1px solid #fbbf24",
            borderBottom: "1px solid #78350f",
            borderRight: "2px solid #92400e"
          },
          children: /* @__PURE__ */ m.jsx(
            "div",
            {
              className: "absolute right-1 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 bg-yellow-500 rounded-full shadow-sm"
            }
          )
        }
      ),
      /* @__PURE__ */ m.jsx(
        "div",
        {
          className: "absolute bg-transparent",
          style: {
            left: `${f}px`,
            width: `${u}px`,
            height: `${i.thickness}px`
          }
        }
      ),
      /* @__PURE__ */ m.jsx(
        "div",
        {
          className: "absolute right-0 bg-gradient-to-r from-amber-700 to-amber-600 shadow-md rounded-sm",
          style: {
            width: `${f}px`,
            height: `${i.thickness}px`,
            borderTop: "1px solid #fbbf24",
            borderBottom: "1px solid #78350f",
            borderLeft: "2px solid #92400e"
          },
          children: /* @__PURE__ */ m.jsx(
            "div",
            {
              className: "absolute left-1 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 bg-yellow-500 rounded-full shadow-sm"
            }
          )
        }
      )
    ] });
  };
  return /* @__PURE__ */ m.jsxs(
    "div",
    {
      onClick: (u) => {
        u.stopPropagation(), t();
      },
      onMouseDown: (u) => {
        e && s && (u.stopPropagation(), s(u));
      },
      className: `absolute transition-all ${e ? "ring-4 ring-blue-400 ring-opacity-50 hover:ring-6 hover:ring-blue-300" : ""}`,
      style: {
        left: `${i.startX}px`,
        top: `${i.startY}px`,
        width: `${r}px`,
        height: `${i.thickness}px`,
        transform: `rotate(${o}deg)`,
        transformOrigin: "top left",
        zIndex: 10,
        cursor: e ? "move" : "pointer",
        pointerEvents: "auto"
      },
      children: [
        i.type === "door" ? d() : /* @__PURE__ */ m.jsx("div", { className: `w-full h-full ${c()} shadow-lg hover:opacity-90 transition-opacity rounded-sm`, children: e && /* @__PURE__ */ m.jsxs("div", { className: "absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap shadow-lg z-30", children: [
          ys[i.type],
          " - ",
          Math.round(r),
          "px"
        ] }) }),
        i.type === "door" && e && /* @__PURE__ */ m.jsxs("div", { className: "absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap shadow-lg z-30", children: [
          ys[i.type],
          " - ",
          Math.round(r),
          "px"
        ] }),
        e && /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
          /* @__PURE__ */ m.jsx(
            "div",
            {
              className: "absolute -left-2 top-1/2 transform -translate-y-1/2 w-5 h-5 bg-blue-500 rounded-full border-2 border-white hover:bg-blue-600 hover:scale-125 transition-all shadow-xl z-30",
              style: { cursor: a() },
              onMouseDown: (u) => {
                u.stopPropagation(), n == null || n(u, "start");
              },
              title: "Drag to resize"
            }
          ),
          /* @__PURE__ */ m.jsx(
            "div",
            {
              className: "absolute -right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 bg-blue-500 rounded-full border-2 border-white hover:bg-blue-600 hover:scale-125 transition-all shadow-xl z-30",
              style: { cursor: a() },
              onMouseDown: (u) => {
                u.stopPropagation(), n == null || n(u, "end");
              },
              title: "Drag to resize"
            }
          )
        ] })
      ]
    }
  );
}, ic = ({
  element: i,
  isSelected: e,
  onSelect: t,
  onDragStart: n
}) => {
  const [s, r] = ht(!1), o = (l) => {
    r(!0), n(l);
    const c = () => {
      r(!1), document.removeEventListener("mouseup", c);
    };
    document.addEventListener("mouseup", c);
  }, a = () => i.type === "pillar" ? /* @__PURE__ */ m.jsxs("div", { className: "w-full h-full relative", children: [
    /* @__PURE__ */ m.jsxs("div", { className: "absolute inset-2 bg-gradient-to-br from-gray-400 via-gray-600 to-gray-800 rounded-full shadow-2xl", children: [
      /* @__PURE__ */ m.jsx("div", { className: "absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-white/20" }),
      /* @__PURE__ */ m.jsx("div", { className: "absolute inset-0 rounded-full shadow-inner", style: { boxShadow: "inset -4px -4px 12px rgba(0,0,0,0.5), inset 4px 4px 12px rgba(255,255,255,0.2)" } })
    ] }),
    /* @__PURE__ */ m.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ m.jsx("div", { className: "w-1/3 h-1/3 bg-white/10 rounded-full blur-sm" }) })
  ] }) : i.type === "column" ? /* @__PURE__ */ m.jsxs("div", { className: "w-full h-full relative", children: [
    /* @__PURE__ */ m.jsxs("div", { className: "absolute inset-2 bg-gradient-to-br from-slate-400 via-slate-600 to-slate-800 rounded-lg shadow-2xl", children: [
      /* @__PURE__ */ m.jsx("div", { className: "absolute inset-0 rounded-lg bg-gradient-to-br from-white/20 via-transparent to-black/30" }),
      /* @__PURE__ */ m.jsx("div", { className: "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-t-lg" }),
      /* @__PURE__ */ m.jsx("div", { className: "absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-transparent via-white/30 to-transparent rounded-l-lg" }),
      /* @__PURE__ */ m.jsx("div", { className: "absolute inset-0 rounded-lg", style: { boxShadow: "inset 0 0 20px rgba(0,0,0,0.5)" } })
    ] }),
    /* @__PURE__ */ m.jsx("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ m.jsx("div", { className: "w-0.5 h-2/3 bg-white/20" }) })
  ] }) : i.type === "stairs" ? /* @__PURE__ */ m.jsxs("div", { className: "w-full h-full relative bg-gradient-to-br from-amber-200 via-amber-300 to-amber-400 rounded-lg shadow-xl overflow-hidden", children: [
    [0, 1, 2, 3, 4, 5].map((l) => /* @__PURE__ */ m.jsxs(
      "div",
      {
        className: "absolute left-0 right-0 bg-gradient-to-r from-amber-400 to-amber-500 border-t border-amber-600",
        style: {
          top: `${l * 16.66}%`,
          height: "16.66%",
          boxShadow: "0 2px 4px rgba(0,0,0,0.3)"
        },
        children: [
          /* @__PURE__ */ m.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-white/20 to-transparent h-1/2" }),
          /* @__PURE__ */ m.jsx("div", { className: "absolute bottom-0 left-0 right-0 h-px bg-black/30" })
        ]
      },
      l
    )),
    /* @__PURE__ */ m.jsx("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ m.jsx("div", { className: "bg-white/80 rounded-full p-2 shadow-lg", children: /* @__PURE__ */ m.jsx("svg", { className: "w-6 h-6 text-amber-800", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ m.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 3, d: "M5 15l7-7 7 7" }) }) }) })
  ] }) : null;
  return /* @__PURE__ */ m.jsxs(
    "div",
    {
      className: `absolute cursor-move select-none ${s ? "" : "transition-all duration-75"} rounded-lg ${e ? "ring-4 ring-blue-400 ring-opacity-50 scale-105" : "hover:scale-102"}`,
      style: {
        left: `${i.x}px`,
        top: `${i.y}px`,
        width: `${i.width}px`,
        height: `${i.height}px`,
        transform: `rotate(${i.rotation}deg)`,
        transformOrigin: "center",
        willChange: s ? "transform" : "auto",
        zIndex: 20
      },
      onClick: (l) => {
        l.stopPropagation(), t();
      },
      onMouseDown: o,
      children: [
        a(),
        e && /* @__PURE__ */ m.jsx("div", { className: "absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap shadow-lg z-30", children: i.name }),
        e && /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
          /* @__PURE__ */ m.jsx("div", { className: "absolute -top-1 -left-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white" }),
          /* @__PURE__ */ m.jsx("div", { className: "absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white" }),
          /* @__PURE__ */ m.jsx("div", { className: "absolute -bottom-1 -left-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white" }),
          /* @__PURE__ */ m.jsx("div", { className: "absolute -bottom-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white" })
        ] })
      ]
    }
  );
}, sc = No, rc = ({
  floors: i,
  currentFloor: e,
  onAddFloor: t,
  onRemoveFloor: n,
  onSwitchFloor: s,
  onRenameFloor: r,
  onAddTable: o,
  onAddObject: a,
  onStartWallDrawing: l,
  onAddFixedElement: c,
  onRotateTable: d,
  onDuplicateTable: u,
  onRemoveTable: f,
  onSave: g,
  onLoad: _,
  selectedTable: v,
  selectedTableChairs: p
}) => {
  const [h, T] = kn.useState(null), [x, R] = kn.useState(""), [U, L] = kn.useState("tables"), C = kn.useRef(null);
  kn.useEffect(() => {
    h && C.current && (C.current.focus(), C.current.select());
  }, [h]);
  const ee = (O) => {
    T(O.id), R(O.name);
  }, E = () => {
    h && x.trim() && r(h, x.trim()), T(null), R("");
  }, A = (O) => {
    O.key === "Enter" ? E() : O.key === "Escape" && (T(null), R(""));
  };
  return /* @__PURE__ */ m.jsxs("div", { className: "w-80 bg-white shadow-lg border-r border-gray-200 flex flex-col", children: [
    /* @__PURE__ */ m.jsxs("div", { className: "p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white", children: [
      /* @__PURE__ */ m.jsx("h1", { className: "text-xl font-bold", children: "Restaurant Designer" }),
      /* @__PURE__ */ m.jsx("p", { className: "text-blue-100 text-sm", children: "Professional Floor Planner" })
    ] }),
    /* @__PURE__ */ m.jsxs("div", { className: "p-4 border-b border-gray-200", children: [
      /* @__PURE__ */ m.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ m.jsxs("h2", { className: "text-lg font-semibold text-gray-800 flex items-center gap-2", children: [
          /* @__PURE__ */ m.jsx(Lo, { className: "w-5 h-5" }),
          "Floor Plans (",
          i.length,
          ")"
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "flex gap-1", children: [
          /* @__PURE__ */ m.jsx(
            "button",
            {
              onClick: t,
              className: "p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors",
              title: "Add New Floor",
              children: /* @__PURE__ */ m.jsx(br, { className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ m.jsx(
            "button",
            {
              onClick: n,
              disabled: i.length <= 1,
              className: "p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
              title: "Remove Current Floor",
              children: /* @__PURE__ */ m.jsx(Po, { className: "w-4 h-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ m.jsx("div", { className: "space-y-2 max-h-32 overflow-y-auto", children: i.map((O) => /* @__PURE__ */ m.jsxs(
        "div",
        {
          className: `w-full p-3 rounded-lg transition-all flex items-center justify-between ${O.isActive ? "bg-blue-100 text-blue-800 border border-blue-200 shadow-sm" : "text-gray-600 hover:bg-gray-100 border border-transparent"}`,
          onClick: () => {
            h !== O.id && s(O.id);
          },
          onDoubleClick: () => ee(O),
          children: [
            /* @__PURE__ */ m.jsxs("div", { className: "flex-1", children: [
              h === O.id ? /* @__PURE__ */ m.jsx(
                "input",
                {
                  ref: C,
                  type: "text",
                  value: x,
                  onChange: (te) => R(te.target.value),
                  onBlur: E,
                  onKeyDown: A,
                  className: "w-full px-2 py-1 text-sm font-medium bg-white border border-blue-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",
                  onClick: (te) => te.stopPropagation()
                }
              ) : /* @__PURE__ */ m.jsx("div", { className: "font-medium cursor-pointer", children: O.name }),
              /* @__PURE__ */ m.jsxs("div", { className: "text-xs text-gray-500 mt-0.5", children: [
                O.tables.length,
                " tables, ",
                O.chairs.length,
                " chairs"
              ] })
            ] }),
            O.isActive && /* @__PURE__ */ m.jsx("div", { className: "w-2 h-2 bg-blue-500 rounded-full" })
          ]
        },
        O.id
      )) })
    ] }),
    /* @__PURE__ */ m.jsx("div", { className: "border-b border-gray-200", children: /* @__PURE__ */ m.jsxs("div", { className: "flex", children: [
      /* @__PURE__ */ m.jsxs(
        "button",
        {
          onClick: () => L("tables"),
          className: `flex-1 py-3 px-4 font-semibold text-sm transition-all flex items-center justify-center gap-2 ${U === "tables" ? "bg-white text-emerald-600 border-b-2 border-emerald-600" : "bg-gray-50 text-gray-600 hover:bg-gray-100"}`,
          children: [
            /* @__PURE__ */ m.jsx(Ol, { className: "w-4 h-4" }),
            "Tables"
          ]
        }
      ),
      /* @__PURE__ */ m.jsxs(
        "button",
        {
          onClick: () => L("objects"),
          className: `flex-1 py-3 px-4 font-semibold text-sm transition-all flex items-center justify-center gap-2 ${U === "objects" ? "bg-white text-purple-600 border-b-2 border-purple-600" : "bg-gray-50 text-gray-600 hover:bg-gray-100"}`,
          children: [
            /* @__PURE__ */ m.jsx(zl, { className: "w-4 h-4" }),
            "Objects"
          ]
        }
      ),
      /* @__PURE__ */ m.jsxs(
        "button",
        {
          onClick: () => L("roomLayout"),
          className: `flex-1 py-3 px-4 font-semibold text-sm transition-all flex items-center justify-center gap-2 ${U === "roomLayout" ? "bg-white text-gray-700 border-b-2 border-gray-700" : "bg-gray-50 text-gray-600 hover:bg-gray-100"}`,
          children: [
            /* @__PURE__ */ m.jsx(Fl, { className: "w-4 h-4" }),
            "Room"
          ]
        }
      )
    ] }) }),
    U === "tables" && /* @__PURE__ */ m.jsxs("div", { className: "p-4 border-b border-gray-200", children: [
      /* @__PURE__ */ m.jsx("h3", { className: "text-md font-semibold text-gray-800 mb-3", children: "Add Tables" }),
      /* @__PURE__ */ m.jsx("div", { className: "grid grid-cols-2 gap-3", children: Object.entries($l).map(([O, te]) => /* @__PURE__ */ m.jsxs(
        "button",
        {
          onClick: () => o(O),
          className: "p-3 border-2 border-gray-200 rounded-lg hover:border-emerald-400 hover:bg-emerald-50 transition-all flex flex-col items-center gap-2 hover:shadow-md",
          children: [
            /* @__PURE__ */ m.jsx(te, { className: "w-6 h-6 text-emerald-600" }),
            /* @__PURE__ */ m.jsx("span", { className: "text-xs text-gray-700 capitalize font-medium", children: O })
          ]
        },
        O
      )) })
    ] }),
    U === "objects" && /* @__PURE__ */ m.jsxs("div", { className: "p-4 border-b border-gray-200", children: [
      /* @__PURE__ */ m.jsx("h3", { className: "text-md font-semibold text-gray-800 mb-3", children: "Add Objects" }),
      /* @__PURE__ */ m.jsx("div", { className: "space-y-3", children: Object.keys(vs).map((O) => {
        const te = Fr[O], ae = Do[O], N = vs[O];
        return /* @__PURE__ */ m.jsxs(
          "button",
          {
            onClick: () => a(O),
            className: `w-full p-4 ${ae.bg} border-2 ${ae.border} rounded-xl hover:scale-105 transition-all flex items-center gap-3 shadow-lg hover:shadow-xl`,
            children: [
              /* @__PURE__ */ m.jsx("div", { className: "bg-white/20 p-2 rounded-lg", children: /* @__PURE__ */ m.jsx(te, { className: `w-6 h-6 ${ae.text}`, strokeWidth: 2.5 }) }),
              /* @__PURE__ */ m.jsxs("div", { className: "flex-1 text-left", children: [
                /* @__PURE__ */ m.jsx("span", { className: `text-base font-bold ${ae.text}`, children: N }),
                /* @__PURE__ */ m.jsx("div", { className: "text-xs text-white/80 mt-0.5", children: "Click to add to floor" })
              ] })
            ]
          },
          O
        );
      }) })
    ] }),
    U === "roomLayout" && /* @__PURE__ */ m.jsxs("div", { className: "p-4 border-b border-gray-200", children: [
      /* @__PURE__ */ m.jsxs("div", { className: "mb-6", children: [
        /* @__PURE__ */ m.jsx("h3", { className: "text-md font-semibold text-gray-800 mb-3", children: "Draw Walls" }),
        /* @__PURE__ */ m.jsx("div", { className: "space-y-2", children: ["wall", "door", "window"].map((O) => {
          const te = Kl[O], ae = ys[O], N = {
            wall: "bg-gradient-to-br from-gray-600 to-gray-800 border-gray-700 text-white hover:from-gray-700 hover:to-gray-900",
            door: "bg-gradient-to-br from-amber-500 to-amber-700 border-amber-600 text-white hover:from-amber-600 hover:to-amber-800",
            window: "bg-gradient-to-br from-blue-500 to-blue-700 border-blue-600 text-white hover:from-blue-600 hover:to-blue-800"
          };
          return /* @__PURE__ */ m.jsxs(
            "button",
            {
              onClick: () => l(O),
              className: `w-full p-3 border-2 rounded-lg transition-all flex items-center gap-3 shadow-md hover:shadow-lg ${N[O]}`,
              children: [
                /* @__PURE__ */ m.jsx(te, { className: "w-5 h-5", strokeWidth: 2.5 }),
                /* @__PURE__ */ m.jsx("span", { className: "text-sm font-semibold", children: ae })
              ]
            },
            O
          );
        }) })
      ] }),
      /* @__PURE__ */ m.jsxs("div", { children: [
        /* @__PURE__ */ m.jsx("h3", { className: "text-md font-semibold text-gray-800 mb-3", children: "Add Elements" }),
        /* @__PURE__ */ m.jsx("div", { className: "space-y-2", children: ["pillar", "column", "stairs"].map((O) => {
          const te = Zl[O], ae = Jl[O], N = Uo[O];
          return /* @__PURE__ */ m.jsxs(
            "button",
            {
              onClick: () => c(O),
              className: `w-full p-3 ${ae.bg} border-2 ${ae.border} rounded-lg hover:scale-105 transition-all flex items-center gap-3 shadow-md hover:shadow-lg`,
              children: [
                /* @__PURE__ */ m.jsx("div", { className: "bg-white/10 p-1.5 rounded", children: /* @__PURE__ */ m.jsx(te, { className: `w-5 h-5 ${ae.text}`, strokeWidth: 2.5 }) }),
                /* @__PURE__ */ m.jsx("span", { className: `text-sm font-semibold ${ae.text}`, children: N })
              ]
            },
            O
          );
        }) })
      ] })
    ] }),
    v && /* @__PURE__ */ m.jsxs("div", { className: "p-4 border-b border-gray-200", children: [
      /* @__PURE__ */ m.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
        /* @__PURE__ */ m.jsx("h3", { className: "text-md font-semibold text-gray-800", children: "Table Properties" }),
        /* @__PURE__ */ m.jsxs("div", { className: "flex gap-1", children: [
          /* @__PURE__ */ m.jsx(
            "button",
            {
              onClick: d,
              className: "p-1 text-blue-600 hover:bg-blue-100 rounded transition-colors",
              title: "Rotate Table",
              children: /* @__PURE__ */ m.jsx(kl, { className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ m.jsx(
            "button",
            {
              onClick: u,
              className: "p-1 text-green-600 hover:bg-green-100 rounded transition-colors",
              title: "Duplicate Table",
              children: /* @__PURE__ */ m.jsx(br, { className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ m.jsx(
            "button",
            {
              onClick: f,
              className: "p-1 text-red-600 hover:bg-red-100 rounded transition-colors",
              title: "Delete Table",
              children: /* @__PURE__ */ m.jsx(ms, { className: "w-4 h-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ m.jsxs("div", { className: "space-y-3 text-sm text-gray-600", children: [
        /* @__PURE__ */ m.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ m.jsxs("div", { children: [
            /* @__PURE__ */ m.jsx("div", { className: "text-xs uppercase tracking-wide text-gray-400", children: "Name" }),
            /* @__PURE__ */ m.jsx("div", { className: "font-semibold text-gray-800", children: v.name })
          ] }),
          /* @__PURE__ */ m.jsxs("div", { children: [
            /* @__PURE__ */ m.jsx("div", { className: "text-xs uppercase tracking-wide text-gray-400", children: "Shape" }),
            /* @__PURE__ */ m.jsx("div", { className: "font-semibold text-gray-800 capitalize", children: v.shape })
          ] }),
          /* @__PURE__ */ m.jsxs("div", { children: [
            /* @__PURE__ */ m.jsx("div", { className: "text-xs uppercase tracking-wide text-gray-400", children: "Size" }),
            /* @__PURE__ */ m.jsx("div", { className: "font-semibold text-gray-800", children: sc[v.size] })
          ] }),
          /* @__PURE__ */ m.jsxs("div", { children: [
            /* @__PURE__ */ m.jsx("div", { className: "text-xs uppercase tracking-wide text-gray-400", children: "Seats" }),
            /* @__PURE__ */ m.jsx("div", { className: "font-semibold text-gray-800", children: p.length })
          ] })
        ] }),
        /* @__PURE__ */ m.jsx("div", { className: "bg-blue-50 border border-blue-200 rounded-md p-3", children: /* @__PURE__ */ m.jsxs("p", { className: "text-xs text-blue-700", children: [
          "💡 ",
          /* @__PURE__ */ m.jsx("span", { className: "font-semibold", children: "Tip:" }),
          " Use the ",
          /* @__PURE__ */ m.jsx("span", { className: "font-semibold", children: "Manage Chairs" }),
          " button in the toolbar above to add or remove chairs from each side of the table."
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ m.jsxs("div", { className: "p-4 mt-auto space-y-3", children: [
      /* @__PURE__ */ m.jsxs("div", { className: "bg-gray-50 p-3 rounded-lg", children: [
        /* @__PURE__ */ m.jsx("h4", { className: "text-sm font-semibold text-gray-700 mb-2", children: "Current Floor Stats" }),
        /* @__PURE__ */ m.jsxs("div", { className: "grid grid-cols-2 gap-4 text-sm", children: [
          /* @__PURE__ */ m.jsxs("div", { children: [
            /* @__PURE__ */ m.jsx("div", { className: "text-gray-600", children: "Tables" }),
            /* @__PURE__ */ m.jsx("div", { className: "font-bold text-lg text-emerald-600", children: (e == null ? void 0 : e.tables.length) ?? 0 })
          ] }),
          /* @__PURE__ */ m.jsxs("div", { children: [
            /* @__PURE__ */ m.jsx("div", { className: "text-gray-600", children: "Total Seats" }),
            /* @__PURE__ */ m.jsx("div", { className: "font-bold text-lg text-amber-600", children: (e == null ? void 0 : e.chairs.length) ?? 0 })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ m.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ m.jsxs(
          "button",
          {
            onClick: g,
            className: "flex-1 bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2 font-medium",
            children: [
              /* @__PURE__ */ m.jsx(Hl, { className: "w-4 h-4" }),
              "Save"
            ]
          }
        ),
        /* @__PURE__ */ m.jsxs(
          "button",
          {
            onClick: _,
            className: "flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 font-medium",
            children: [
              /* @__PURE__ */ m.jsx(Vl, { className: "w-4 h-4" }),
              "Load"
            ]
          }
        )
      ] })
    ] })
  ] });
}, Qr = No, ac = ["top", "right", "bottom", "left"], oc = ["small", "medium", "large"], lc = ({
  showGrid: i,
  selectedTable: e,
  selectedObject: t,
  selectedWall: n,
  selectedFixedElement: s,
  selectedTableChairs: r,
  onToggleGrid: o,
  onAddChair: a,
  onRemoveChair: l,
  onChangeTableSize: c,
  onTableNameChange: d,
  onCustomTableSize: u,
  onObjectNameChange: f,
  onObjectResize: g,
  onRemoveObject: _,
  onRemoveWall: v,
  onRemoveFixedElement: p,
  onChangeWallThickness: h,
  onConvertWallType: T,
  onFixedElementNameChange: x,
  onFixedElementResize: R,
  onChairSizeChange: U,
  onResetChairSizes: L,
  on3DPreview: C,
  onObjectRotate: ee,
  tableCount: E,
  chairCount: A,
  objectCount: O,
  wallCount: te,
  fixedElementCount: ae,
  selectedElementType: N
}) => {
  const Y = zt(null), M = zt(null), ne = zt(null), K = zt(null), [j, B] = ht(!1), [J, Z] = ht(!1), [W, ie] = ht(!1), [le, Me] = ht(!1), [me, Ue] = ht(!1), [De, pe] = ht(90), [xe, z] = ht(90), [Te, Ae] = ht(120), [Ce, Ee] = ht(80), [Oe, fe] = ht(60), [y, S] = ht(60);
  return ui(() => {
    const D = (q) => {
      Y.current && !Y.current.contains(q.target) && B(!1), M.current && !M.current.contains(q.target) && Z(!1), ne.current && !ne.current.contains(q.target) && ie(!1), K.current && !K.current.contains(q.target) && Me(!1);
    };
    return document.addEventListener("mousedown", D), () => document.removeEventListener("mousedown", D);
  }, []), ui(() => {
    e ? (pe(e.width), z(e.height)) : (B(!1), Z(!1), Ue(!1)), t ? (Ae(t.width), Ee(t.height)) : ie(!1), s ? (fe(s.width), S(s.height)) : Me(!1);
  }, [e, t, s]), /* @__PURE__ */ m.jsx("div", { className: "bg-white border-b border-gray-200 shadow-sm min-h-[72px]", children: /* @__PURE__ */ m.jsxs("div", { className: "px-4 py-3 flex items-center justify-between min-h-[72px]", children: [
    /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-3 flex-wrap", children: [
      /* @__PURE__ */ m.jsxs(
        "button",
        {
          onClick: o,
          className: `px-3 py-2 rounded-lg transition-all flex items-center gap-2 text-sm font-medium ${i ? "bg-blue-500 text-white shadow-md hover:bg-blue-600" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`,
          title: i ? "Hide Grid" : "Show Grid",
          children: [
            i ? /* @__PURE__ */ m.jsx(Ul, { className: "w-4 h-4" }) : /* @__PURE__ */ m.jsx(Dl, { className: "w-4 h-4" }),
            /* @__PURE__ */ m.jsx("span", { children: "Grid" })
          ]
        }
      ),
      e && /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
        /* @__PURE__ */ m.jsx("div", { className: "w-px h-8 bg-gray-300" }),
        /* @__PURE__ */ m.jsxs("div", { ref: Y, className: "relative", children: [
          /* @__PURE__ */ m.jsxs(
            "button",
            {
              onClick: () => {
                B(!j), Z(!1);
              },
              className: "px-3 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm font-semibold",
              children: [
                /* @__PURE__ */ m.jsx(Sr, { className: "w-4 h-4" }),
                /* @__PURE__ */ m.jsx("span", { children: "Manage Chairs" }),
                /* @__PURE__ */ m.jsx("span", { className: "ml-1 px-1.5 py-0.5 bg-white/20 rounded text-xs", children: r.length })
              ]
            }
          ),
          j && /* @__PURE__ */ m.jsxs("div", { className: "absolute top-full left-0 mt-2 w-72 bg-white border border-gray-200 rounded-xl shadow-2xl z-50 overflow-hidden", children: [
            /* @__PURE__ */ m.jsx("div", { className: "bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-3 text-white", children: /* @__PURE__ */ m.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ m.jsx(Sr, { className: "w-4 h-4" }),
                /* @__PURE__ */ m.jsx("span", { className: "font-semibold text-sm", children: "Chair Positions" })
              ] }),
              /* @__PURE__ */ m.jsxs("span", { className: "text-xs bg-white/20 px-2 py-1 rounded", children: [
                "Total: ",
                r.length
              ] })
            ] }) }),
            /* @__PURE__ */ m.jsxs("div", { className: "p-3 space-y-2", children: [
              ac.map((D) => {
                const q = r.filter((oe) => oe.position === D).length, ce = r.find((oe) => oe.position === D), re = (ce == null ? void 0 : ce.size) || 40;
                return /* @__PURE__ */ m.jsxs(
                  "div",
                  {
                    className: "bg-gray-50 rounded-lg px-3 py-2 border border-gray-200 hover:border-amber-300 transition-all space-y-2",
                    children: [
                      /* @__PURE__ */ m.jsxs("div", { className: "flex items-center justify-between", children: [
                        /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-3", children: [
                          /* @__PURE__ */ m.jsx("div", { className: "w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-700 rounded-md flex items-center justify-center text-white text-xs font-bold uppercase", children: D[0] }),
                          /* @__PURE__ */ m.jsxs("div", { children: [
                            /* @__PURE__ */ m.jsx("div", { className: "text-sm font-medium text-gray-800 capitalize", children: D }),
                            /* @__PURE__ */ m.jsxs("div", { className: "text-xs text-gray-500", children: [
                              q,
                              " chair",
                              q !== 1 ? "s" : ""
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-1", children: [
                          /* @__PURE__ */ m.jsx(
                            "button",
                            {
                              onClick: () => l(D),
                              disabled: q === 0,
                              className: "w-7 h-7 rounded-md bg-red-50 text-red-600 hover:bg-red-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center",
                              title: "Remove chair",
                              children: /* @__PURE__ */ m.jsx(Po, { className: "w-4 h-4" })
                            }
                          ),
                          /* @__PURE__ */ m.jsx(
                            "button",
                            {
                              onClick: () => a(D),
                              className: "w-7 h-7 rounded-md bg-green-50 text-green-600 hover:bg-green-100 transition-all flex items-center justify-center",
                              title: "Add chair",
                              children: /* @__PURE__ */ m.jsx(br, { className: "w-4 h-4" })
                            }
                          )
                        ] })
                      ] }),
                      q > 0 && /* @__PURE__ */ m.jsxs("div", { className: "pt-2 border-t border-gray-200", children: [
                        /* @__PURE__ */ m.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
                          /* @__PURE__ */ m.jsx("span", { className: "text-xs font-medium text-gray-600", children: "Chair Size" }),
                          /* @__PURE__ */ m.jsxs("span", { className: "text-xs font-bold text-amber-600", children: [
                            re,
                            "px"
                          ] })
                        ] }),
                        /* @__PURE__ */ m.jsx(
                          "input",
                          {
                            type: "range",
                            min: "20",
                            max: "60",
                            value: re,
                            onChange: (oe) => U == null ? void 0 : U(D, parseInt(oe.target.value)),
                            className: "w-full h-2 bg-gradient-to-r from-amber-200 to-amber-400 rounded-full appearance-none cursor-pointer slider-thumb",
                            style: {
                              background: `linear-gradient(to right, rgb(251, 191, 36) 0%, rgb(251, 191, 36) ${(re - 20) / 40 * 100}%, rgb(253, 230, 138) ${(re - 20) / 40 * 100}%, rgb(253, 230, 138) 100%)`
                            }
                          }
                        )
                      ] })
                    ]
                  },
                  D
                );
              }),
              /* @__PURE__ */ m.jsxs(
                "button",
                {
                  onClick: () => L == null ? void 0 : L(),
                  className: "w-full mt-3 px-3 py-2 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all flex items-center justify-center gap-2 text-sm font-medium",
                  children: [
                    /* @__PURE__ */ m.jsx(Er, { className: "w-4 h-4" }),
                    /* @__PURE__ */ m.jsx("span", { children: "Reset All Sizes" })
                  ]
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ m.jsxs("div", { ref: M, className: "relative", children: [
          /* @__PURE__ */ m.jsxs(
            "button",
            {
              onClick: () => {
                Z(!J), B(!1);
              },
              className: "px-3 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm font-semibold",
              children: [
                /* @__PURE__ */ m.jsx(Ni, { className: "w-4 h-4" }),
                /* @__PURE__ */ m.jsxs("span", { children: [
                  "Size: ",
                  Qr[e.size]
                ] })
              ]
            }
          ),
          J && /* @__PURE__ */ m.jsxs("div", { className: "absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-2xl z-50 overflow-hidden", children: [
            /* @__PURE__ */ m.jsx("div", { className: "bg-gradient-to-r from-emerald-500 to-emerald-600 px-4 py-2 text-white", children: /* @__PURE__ */ m.jsx("span", { className: "font-semibold text-sm", children: "Table Size" }) }),
            /* @__PURE__ */ m.jsxs("div", { className: "p-3 space-y-2", children: [
              /* @__PURE__ */ m.jsx("div", { className: "flex gap-2", children: oc.map((D) => {
                const q = e.size === D;
                return /* @__PURE__ */ m.jsx(
                  "button",
                  {
                    onClick: () => {
                      c(D), Ue(!1);
                    },
                    className: `flex-1 px-3 py-2 text-sm font-medium rounded-lg transition-all ${q && !me ? "bg-emerald-500 text-white shadow-sm" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
                    children: Qr[D]
                  },
                  D
                );
              }) }),
              /* @__PURE__ */ m.jsxs(
                "button",
                {
                  onClick: () => Ue(!me),
                  className: `w-full flex items-center justify-between px-3 py-2 rounded-lg transition-all ${me ? "bg-purple-500 text-white shadow-sm" : "bg-gradient-to-r from-purple-100 to-purple-50 text-purple-700 hover:from-purple-200 hover:to-purple-100"}`,
                  children: [
                    /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ m.jsx("span", { className: "text-sm font-semibold", children: "Pro Mode" }),
                      /* @__PURE__ */ m.jsx("span", { className: "text-xs bg-white/20 px-1.5 py-0.5 rounded", children: "Custom" })
                    ] }),
                    /* @__PURE__ */ m.jsx(Ll, { className: `w-4 h-4 transition-transform ${me ? "rotate-90" : ""}` })
                  ]
                }
              ),
              /* @__PURE__ */ m.jsx("div", { className: `overflow-hidden transition-all duration-300 ease-in-out ${me ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`, children: /* @__PURE__ */ m.jsxs("div", { className: "pt-2 space-y-3 border-t border-gray-200", children: [
                /* @__PURE__ */ m.jsxs("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ m.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ m.jsx("label", { className: "text-xs font-semibold text-gray-600 uppercase tracking-wide", children: "Width" }),
                    /* @__PURE__ */ m.jsxs("span", { className: "text-xs font-mono bg-purple-100 text-purple-700 px-2 py-0.5 rounded", children: [
                      De,
                      "px"
                    ] })
                  ] }),
                  /* @__PURE__ */ m.jsx(
                    "input",
                    {
                      type: "range",
                      min: "40",
                      max: "200",
                      step: "5",
                      value: De,
                      onChange: (D) => {
                        const q = parseInt(D.target.value);
                        pe(q), u(q, xe);
                      },
                      className: "w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer slider-thumb",
                      style: {
                        background: `linear-gradient(to right, rgb(168, 85, 247) 0%, rgb(168, 85, 247) ${(De - 40) / 160 * 100}%, rgb(233, 213, 255) ${(De - 40) / 160 * 100}%, rgb(233, 213, 255) 100%)`
                      }
                    }
                  )
                ] }),
                /* @__PURE__ */ m.jsxs("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ m.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ m.jsx("label", { className: "text-xs font-semibold text-gray-600 uppercase tracking-wide", children: "Height" }),
                    /* @__PURE__ */ m.jsxs("span", { className: "text-xs font-mono bg-purple-100 text-purple-700 px-2 py-0.5 rounded", children: [
                      xe,
                      "px"
                    ] })
                  ] }),
                  /* @__PURE__ */ m.jsx(
                    "input",
                    {
                      type: "range",
                      min: "40",
                      max: "200",
                      step: "5",
                      value: xe,
                      onChange: (D) => {
                        const q = parseInt(D.target.value);
                        z(q), u(De, q);
                      },
                      className: "w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer slider-thumb",
                      style: {
                        background: `linear-gradient(to right, rgb(168, 85, 247) 0%, rgb(168, 85, 247) ${(xe - 40) / 160 * 100}%, rgb(233, 213, 255) ${(xe - 40) / 160 * 100}%, rgb(233, 213, 255) 100%)`
                      }
                    }
                  )
                ] }),
                /* @__PURE__ */ m.jsx("p", { className: "text-xs text-gray-500 italic pt-1", children: "Drag sliders for precise sizing" })
              ] }) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-2 bg-gray-50 border border-gray-300 rounded-lg px-3 py-2", children: [
          /* @__PURE__ */ m.jsx("span", { className: "text-xs font-semibold uppercase tracking-wide text-gray-500", children: "Name:" }),
          /* @__PURE__ */ m.jsx(
            "input",
            {
              type: "text",
              value: e.name,
              onChange: (D) => d(D.target.value),
              className: "bg-transparent text-sm text-gray-800 font-medium focus:outline-none w-32",
              placeholder: "Table name"
            }
          )
        ] })
      ] }),
      t && /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
        /* @__PURE__ */ m.jsx("div", { className: "w-px h-8 bg-gray-300" }),
        /* @__PURE__ */ m.jsxs("div", { ref: ne, className: "relative", children: [
          /* @__PURE__ */ m.jsxs(
            "button",
            {
              onClick: () => ie(!W),
              className: `px-3 py-2 rounded-lg ${t.type === "bar" ? "bg-gradient-to-r from-purple-500 to-purple-600" : t.type === "kitchen" ? "bg-gradient-to-r from-orange-500 to-orange-600" : "bg-gradient-to-r from-cyan-500 to-cyan-600"} text-white shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm font-semibold`,
              children: [
                (() => {
                  const D = Fr[t.type];
                  return /* @__PURE__ */ m.jsx(D, { className: "w-4 h-4" });
                })(),
                /* @__PURE__ */ m.jsxs("span", { children: [
                  "Resize ",
                  vs[t.type]
                ] })
              ]
            }
          ),
          W && /* @__PURE__ */ m.jsxs("div", { className: "absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-2xl z-50 overflow-hidden", children: [
            /* @__PURE__ */ m.jsx("div", { className: `${t.type === "bar" ? "bg-gradient-to-r from-purple-500 to-purple-600" : t.type === "kitchen" ? "bg-gradient-to-r from-orange-500 to-orange-600" : "bg-gradient-to-r from-cyan-500 to-cyan-600"} px-4 py-2 text-white`, children: /* @__PURE__ */ m.jsx("span", { className: "font-semibold text-sm", children: "Custom Size" }) }),
            /* @__PURE__ */ m.jsxs("div", { className: "p-3 space-y-3", children: [
              /* @__PURE__ */ m.jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ m.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ m.jsx("label", { className: "text-xs font-semibold text-gray-600 uppercase tracking-wide", children: "Width" }),
                  /* @__PURE__ */ m.jsxs("span", { className: `text-xs font-mono px-2 py-0.5 rounded ${t.type === "bar" ? "bg-purple-100 text-purple-700" : t.type === "kitchen" ? "bg-orange-100 text-orange-700" : "bg-cyan-100 text-cyan-700"}`, children: [
                    Te,
                    "px"
                  ] })
                ] }),
                /* @__PURE__ */ m.jsx(
                  "input",
                  {
                    type: "range",
                    min: "60",
                    max: "1000",
                    step: "10",
                    value: Te,
                    onChange: (D) => {
                      const q = parseInt(D.target.value);
                      Ae(q), g(q, Ce);
                    },
                    className: "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb",
                    style: {
                      background: `linear-gradient(to right, ${t.type === "bar" ? "rgb(168, 85, 247)" : t.type === "kitchen" ? "rgb(249, 115, 22)" : "rgb(6, 182, 212)"} 0%, ${t.type === "bar" ? "rgb(168, 85, 247)" : t.type === "kitchen" ? "rgb(249, 115, 22)" : "rgb(6, 182, 212)"} ${(Te - 60) / 940 * 100}%, rgb(229, 231, 235) ${(Te - 60) / 940 * 100}%, rgb(229, 231, 235) 100%)`
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ m.jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ m.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ m.jsx("label", { className: "text-xs font-semibold text-gray-600 uppercase tracking-wide", children: "Height" }),
                  /* @__PURE__ */ m.jsxs("span", { className: `text-xs font-mono px-2 py-0.5 rounded ${t.type === "bar" ? "bg-purple-100 text-purple-700" : t.type === "kitchen" ? "bg-orange-100 text-orange-700" : "bg-cyan-100 text-cyan-700"}`, children: [
                    Ce,
                    "px"
                  ] })
                ] }),
                /* @__PURE__ */ m.jsx(
                  "input",
                  {
                    type: "range",
                    min: "60",
                    max: "1000",
                    step: "10",
                    value: Ce,
                    onChange: (D) => {
                      const q = parseInt(D.target.value);
                      Ee(q), g(Te, q);
                    },
                    className: "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb",
                    style: {
                      background: `linear-gradient(to right, ${t.type === "bar" ? "rgb(168, 85, 247)" : t.type === "kitchen" ? "rgb(249, 115, 22)" : "rgb(6, 182, 212)"} 0%, ${t.type === "bar" ? "rgb(168, 85, 247)" : t.type === "kitchen" ? "rgb(249, 115, 22)" : "rgb(6, 182, 212)"} ${(Ce - 60) / 940 * 100}%, rgb(229, 231, 235) ${(Ce - 60) / 940 * 100}%, rgb(229, 231, 235) 100%)`
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ m.jsx("p", { className: "text-xs text-gray-500 italic pt-1", children: "Drag sliders to resize the object" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ m.jsxs(
          "button",
          {
            onClick: () => {
              const D = ((t.rotation || 0) + 90) % 360;
              ee == null || ee(D);
            },
            className: `px-3 py-2 rounded-lg ${t.type === "bar" ? "bg-gradient-to-r from-purple-600 to-purple-700" : t.type === "kitchen" ? "bg-gradient-to-r from-orange-600 to-orange-700" : "bg-gradient-to-r from-cyan-600 to-cyan-700"} text-white shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm font-semibold`,
            title: "Rotate 90°",
            children: [
              /* @__PURE__ */ m.jsx(Er, { className: "w-4 h-4" }),
              /* @__PURE__ */ m.jsx("span", { children: "Rotate" })
            ]
          }
        ),
        /* @__PURE__ */ m.jsxs(
          "button",
          {
            onClick: _,
            className: "px-3 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm font-semibold",
            title: "Delete Object",
            children: [
              /* @__PURE__ */ m.jsx(ms, { className: "w-4 h-4" }),
              /* @__PURE__ */ m.jsx("span", { children: "Delete" })
            ]
          }
        ),
        /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-2 bg-gray-50 border border-gray-300 rounded-lg px-3 py-2", children: [
          /* @__PURE__ */ m.jsx("span", { className: "text-xs font-semibold uppercase tracking-wide text-gray-500", children: "Name:" }),
          /* @__PURE__ */ m.jsx(
            "input",
            {
              type: "text",
              value: t.name,
              onChange: (D) => f(D.target.value),
              className: "bg-transparent text-sm text-gray-800 font-medium focus:outline-none w-32",
              placeholder: "Object name"
            }
          )
        ] })
      ] }),
      n && /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
        /* @__PURE__ */ m.jsx("div", { className: "w-px h-8 bg-gray-300" }),
        T && /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-1 bg-gray-50 border border-gray-300 rounded-lg p-1", children: [
          /* @__PURE__ */ m.jsx(
            "button",
            {
              onClick: () => T("wall"),
              className: `px-3 py-1.5 rounded text-xs font-semibold transition-all ${n.type === "wall" ? "bg-gray-600 text-white shadow-md" : "text-gray-600 hover:bg-gray-200"}`,
              title: "Convert to Wall",
              children: "Wall"
            }
          ),
          /* @__PURE__ */ m.jsx(
            "button",
            {
              onClick: () => T("door"),
              className: `px-3 py-1.5 rounded text-xs font-semibold transition-all ${n.type === "door" ? "bg-amber-600 text-white shadow-md" : "text-gray-600 hover:bg-gray-200"}`,
              title: "Convert to Door",
              children: "Door"
            }
          ),
          /* @__PURE__ */ m.jsx(
            "button",
            {
              onClick: () => T("window"),
              className: `px-3 py-1.5 rounded text-xs font-semibold transition-all ${n.type === "window" ? "bg-blue-600 text-white shadow-md" : "text-gray-600 hover:bg-gray-200"}`,
              title: "Convert to Window",
              children: "Window"
            }
          )
        ] }),
        h && /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ m.jsx("span", { className: "text-xs font-semibold text-gray-600", children: "Thickness:" }),
          /* @__PURE__ */ m.jsxs(
            "select",
            {
              value: n.thickness,
              onChange: (D) => h(Number(D.target.value)),
              className: "px-2 py-1 text-sm border border-gray-300 rounded bg-white hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500",
              children: [
                /* @__PURE__ */ m.jsx("option", { value: 4, children: "Thin (4px)" }),
                /* @__PURE__ */ m.jsx("option", { value: 8, children: "Normal (8px)" }),
                /* @__PURE__ */ m.jsx("option", { value: 12, children: "Thick (12px)" }),
                /* @__PURE__ */ m.jsx("option", { value: 16, children: "Very Thick (16px)" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-2 bg-gray-50 border border-gray-300 rounded-lg px-3 py-2", children: [
          /* @__PURE__ */ m.jsx("span", { className: "text-xs font-semibold uppercase tracking-wide text-gray-500", children: ys[n.type] }),
          /* @__PURE__ */ m.jsxs("span", { className: "text-sm text-gray-600", children: [
            Math.round(Math.sqrt(
              Math.pow(n.endX - n.startX, 2) + Math.pow(n.endY - n.startY, 2)
            )),
            "px"
          ] })
        ] }),
        /* @__PURE__ */ m.jsxs(
          "button",
          {
            onClick: v,
            className: "px-3 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm font-semibold",
            title: "Delete Wall",
            children: [
              /* @__PURE__ */ m.jsx(ms, { className: "w-4 h-4" }),
              /* @__PURE__ */ m.jsx("span", { children: "Delete" })
            ]
          }
        )
      ] }),
      s && /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
        /* @__PURE__ */ m.jsx("div", { className: "w-px h-8 bg-gray-300" }),
        /* @__PURE__ */ m.jsx("div", { className: "flex items-center gap-2 bg-gray-50 border border-gray-300 rounded-lg px-3 py-2", children: /* @__PURE__ */ m.jsx("span", { className: "text-xs font-semibold uppercase tracking-wide text-gray-500", children: Uo[s.type] }) }),
        R && /* @__PURE__ */ m.jsxs("div", { ref: K, className: "relative", children: [
          /* @__PURE__ */ m.jsxs(
            "button",
            {
              onClick: () => Me(!le),
              className: "px-3 py-2 rounded-lg bg-gray-600 hover:bg-gray-700 text-white shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm font-semibold",
              children: [
                /* @__PURE__ */ m.jsx(Ni, { className: "w-4 h-4" }),
                /* @__PURE__ */ m.jsx("span", { children: "Resize" })
              ]
            }
          ),
          le && /* @__PURE__ */ m.jsx("div", { className: "absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 p-4 z-50 min-w-[320px]", children: /* @__PURE__ */ m.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ m.jsxs("div", { children: [
              /* @__PURE__ */ m.jsxs("div", { className: "flex justify-between items-center mb-2", children: [
                /* @__PURE__ */ m.jsx("label", { className: "text-sm font-semibold text-gray-700", children: "Width" }),
                /* @__PURE__ */ m.jsxs("span", { className: "text-sm font-bold text-blue-600", children: [
                  Oe,
                  "px"
                ] })
              ] }),
              /* @__PURE__ */ m.jsx(
                "input",
                {
                  type: "range",
                  min: "30",
                  max: "200",
                  value: Oe,
                  onChange: (D) => {
                    const q = parseInt(D.target.value);
                    fe(q), R(q, y);
                  },
                  className: "w-full h-2 bg-gradient-to-r from-blue-200 to-blue-500 rounded-lg appearance-none cursor-pointer slider"
                }
              ),
              /* @__PURE__ */ m.jsxs("div", { className: "flex justify-between text-xs text-gray-500 mt-1", children: [
                /* @__PURE__ */ m.jsx("span", { children: "30px" }),
                /* @__PURE__ */ m.jsx("span", { children: "200px" })
              ] })
            ] }),
            /* @__PURE__ */ m.jsxs("div", { children: [
              /* @__PURE__ */ m.jsxs("div", { className: "flex justify-between items-center mb-2", children: [
                /* @__PURE__ */ m.jsx("label", { className: "text-sm font-semibold text-gray-700", children: "Height" }),
                /* @__PURE__ */ m.jsxs("span", { className: "text-sm font-bold text-blue-600", children: [
                  y,
                  "px"
                ] })
              ] }),
              /* @__PURE__ */ m.jsx(
                "input",
                {
                  type: "range",
                  min: "30",
                  max: "200",
                  value: y,
                  onChange: (D) => {
                    const q = parseInt(D.target.value);
                    S(q), R(Oe, q);
                  },
                  className: "w-full h-2 bg-gradient-to-r from-green-200 to-green-500 rounded-lg appearance-none cursor-pointer slider"
                }
              ),
              /* @__PURE__ */ m.jsxs("div", { className: "flex justify-between text-xs text-gray-500 mt-1", children: [
                /* @__PURE__ */ m.jsx("span", { children: "30px" }),
                /* @__PURE__ */ m.jsx("span", { children: "200px" })
              ] })
            ] }),
            /* @__PURE__ */ m.jsx("div", { className: "pt-3 border-t border-gray-200", children: /* @__PURE__ */ m.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ m.jsx("span", { className: "text-xs text-gray-600", children: "Current Size: " }),
              /* @__PURE__ */ m.jsxs("span", { className: "text-sm font-bold text-gray-800", children: [
                Oe,
                " × ",
                y,
                "px"
              ] })
            ] }) })
          ] }) })
        ] }),
        /* @__PURE__ */ m.jsxs(
          "button",
          {
            onClick: p,
            className: "px-3 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm font-semibold",
            title: "Delete Element",
            children: [
              /* @__PURE__ */ m.jsx(ms, { className: "w-4 h-4" }),
              /* @__PURE__ */ m.jsx("span", { children: "Delete" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-3 flex-wrap", children: [
      /* @__PURE__ */ m.jsxs(
        "button",
        {
          onClick: C,
          className: "px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center gap-2 font-semibold text-sm",
          children: [
            /* @__PURE__ */ m.jsx(Rl, { className: "w-4 h-4" }),
            "3D"
          ]
        }
      ),
      /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-1.5 px-2 py-1 bg-emerald-50 rounded text-xs", children: [
        /* @__PURE__ */ m.jsx("div", { className: "w-2 h-2 bg-emerald-600 rounded-full" }),
        /* @__PURE__ */ m.jsxs("span", { className: "font-medium text-emerald-800", children: [
          "Tables: ",
          E
        ] })
      ] }),
      /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-1.5 px-2 py-1 bg-amber-50 rounded text-xs", children: [
        /* @__PURE__ */ m.jsx("div", { className: "w-2 h-2 bg-amber-600 rounded-full" }),
        /* @__PURE__ */ m.jsxs("span", { className: "font-medium text-amber-800", children: [
          "Chairs: ",
          A
        ] })
      ] }),
      /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-1.5 px-2 py-1 bg-purple-50 rounded text-xs", children: [
        /* @__PURE__ */ m.jsx("div", { className: "w-2 h-2 bg-purple-600 rounded-full" }),
        /* @__PURE__ */ m.jsxs("span", { className: "font-medium text-purple-800", children: [
          "Objects: ",
          O
        ] })
      ] }),
      N && /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-1.5 px-2 py-1 bg-blue-50 rounded text-xs", children: [
        /* @__PURE__ */ m.jsx("div", { className: "w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" }),
        /* @__PURE__ */ m.jsxs("span", { className: "font-medium text-blue-800 capitalize", children: [
          "Selected: ",
          N
        ] })
      ] })
    ] })
  ] }) });
};
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Or = "160", cc = 0, ea = 1, dc = 2, Fo = 1, Oo = 2, gn = 3, Pn = 0, kt = 1, xn = 2, Rn = 0, fi = 1, ta = 2, na = 3, ia = 4, hc = 5, Gn = 100, uc = 101, fc = 102, sa = 103, ra = 104, pc = 200, mc = 201, gc = 202, xc = 203, wr = 204, Tr = 205, _c = 206, vc = 207, yc = 208, Mc = 209, Sc = 210, bc = 211, Ec = 212, wc = 213, Tc = 214, Ac = 0, Rc = 1, Cc = 2, Ms = 3, Lc = 4, Pc = 5, Nc = 6, Dc = 7, Bo = 0, Uc = 1, Ic = 2, Cn = 0, Fc = 1, Oc = 2, Bc = 3, zo = 4, zc = 5, kc = 6, ko = 300, mi = 301, gi = 302, Ar = 303, Rr = 304, Rs = 306, Cr = 1e3, sn = 1001, Lr = 1002, Ft = 1003, aa = 1004, zs = 1005, Zt = 1006, Gc = 1007, Fi = 1008, Ln = 1009, Hc = 1010, Vc = 1011, Br = 1012, Go = 1013, Tn = 1014, An = 1015, Oi = 1016, Ho = 1017, Vo = 1018, Vn = 1020, Wc = 1021, rn = 1023, jc = 1024, Xc = 1025, Wn = 1026, xi = 1027, Yc = 1028, Wo = 1029, qc = 1030, jo = 1031, Xo = 1033, ks = 33776, Gs = 33777, Hs = 33778, Vs = 33779, oa = 35840, la = 35841, ca = 35842, da = 35843, Yo = 36196, ha = 37492, ua = 37496, fa = 37808, pa = 37809, ma = 37810, ga = 37811, xa = 37812, _a = 37813, va = 37814, ya = 37815, Ma = 37816, Sa = 37817, ba = 37818, Ea = 37819, wa = 37820, Ta = 37821, Ws = 36492, Aa = 36494, Ra = 36495, $c = 36283, Ca = 36284, La = 36285, Pa = 36286, qo = 3e3, jn = 3001, Kc = 3200, Zc = 3201, $o = 0, Jc = 1, Qt = "", Ct = "srgb", vn = "srgb-linear", zr = "display-p3", Cs = "display-p3-linear", Ss = "linear", mt = "srgb", bs = "rec709", Es = "p3", qn = 7680, Na = 519, Qc = 512, ed = 513, td = 514, Ko = 515, nd = 516, id = 517, sd = 518, rd = 519, Da = 35044, Ua = "300 es", Pr = 1035, _n = 2e3, ws = 2001;
class vi {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0)
      return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0)
      return;
    const s = this._listeners[e];
    if (s !== void 0) {
      const r = s.indexOf(t);
      r !== -1 && s.splice(r, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0)
      return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const s = n.slice(0);
      for (let r = 0, o = s.length; r < o; r++)
        s[r].call(this, e);
      e.target = null;
    }
  }
}
const Nt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], gs = Math.PI / 180, Nr = 180 / Math.PI;
function Bi() {
  const i = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (Nt[i & 255] + Nt[i >> 8 & 255] + Nt[i >> 16 & 255] + Nt[i >> 24 & 255] + "-" + Nt[e & 255] + Nt[e >> 8 & 255] + "-" + Nt[e >> 16 & 15 | 64] + Nt[e >> 24 & 255] + "-" + Nt[t & 63 | 128] + Nt[t >> 8 & 255] + "-" + Nt[t >> 16 & 255] + Nt[t >> 24 & 255] + Nt[n & 255] + Nt[n >> 8 & 255] + Nt[n >> 16 & 255] + Nt[n >> 24 & 255]).toLowerCase();
}
function Ot(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function ad(i, e) {
  return (i % e + e) % e;
}
function js(i, e, t) {
  return (1 - t) * i + t * e;
}
function Ia(i) {
  return (i & i - 1) === 0 && i !== 0;
}
function Dr(i) {
  return Math.pow(2, Math.floor(Math.log(i) / Math.LN2));
}
function wi(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return i / 4294967295;
    case Uint16Array:
      return i / 65535;
    case Uint8Array:
      return i / 255;
    case Int32Array:
      return Math.max(i / 2147483647, -1);
    case Int16Array:
      return Math.max(i / 32767, -1);
    case Int8Array:
      return Math.max(i / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Bt(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return Math.round(i * 4294967295);
    case Uint16Array:
      return Math.round(i * 65535);
    case Uint8Array:
      return Math.round(i * 255);
    case Int32Array:
      return Math.round(i * 2147483647);
    case Int16Array:
      return Math.round(i * 32767);
    case Int8Array:
      return Math.round(i * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
class rt {
  constructor(e = 0, t = 0) {
    rt.prototype.isVector2 = !0, this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, s = e.elements;
    return this.x = s[0] * t + s[3] * n + s[6], this.y = s[1] * t + s[4] * n + s[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0)
      return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Ot(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t), s = Math.sin(t), r = this.x - e.x, o = this.y - e.y;
    return this.x = r * n - o * s + e.x, this.y = r * s + o * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class nt {
  constructor(e, t, n, s, r, o, a, l, c) {
    nt.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, s, r, o, a, l, c);
  }
  set(e, t, n, s, r, o, a, l, c) {
    const d = this.elements;
    return d[0] = e, d[1] = s, d[2] = a, d[3] = t, d[4] = r, d[5] = l, d[6] = n, d[7] = o, d[8] = c, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[4],
      t[8],
      t[1],
      t[5],
      t[9],
      t[2],
      t[6],
      t[10]
    ), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, s = t.elements, r = this.elements, o = n[0], a = n[3], l = n[6], c = n[1], d = n[4], u = n[7], f = n[2], g = n[5], _ = n[8], v = s[0], p = s[3], h = s[6], T = s[1], x = s[4], R = s[7], U = s[2], L = s[5], C = s[8];
    return r[0] = o * v + a * T + l * U, r[3] = o * p + a * x + l * L, r[6] = o * h + a * R + l * C, r[1] = c * v + d * T + u * U, r[4] = c * p + d * x + u * L, r[7] = c * h + d * R + u * C, r[2] = f * v + g * T + _ * U, r[5] = f * p + g * x + _ * L, r[8] = f * h + g * R + _ * C, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], s = e[2], r = e[3], o = e[4], a = e[5], l = e[6], c = e[7], d = e[8];
    return t * o * d - t * a * c - n * r * d + n * a * l + s * r * c - s * o * l;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], s = e[2], r = e[3], o = e[4], a = e[5], l = e[6], c = e[7], d = e[8], u = d * o - a * c, f = a * l - d * r, g = c * r - o * l, _ = t * u + n * f + s * g;
    if (_ === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const v = 1 / _;
    return e[0] = u * v, e[1] = (s * c - d * n) * v, e[2] = (a * n - s * o) * v, e[3] = f * v, e[4] = (d * t - s * l) * v, e[5] = (s * r - a * t) * v, e[6] = g * v, e[7] = (n * l - c * t) * v, e[8] = (o * t - n * r) * v, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, n, s, r, o, a) {
    const l = Math.cos(r), c = Math.sin(r);
    return this.set(
      n * l,
      n * c,
      -n * (l * o + c * a) + o + e,
      -s * c,
      s * l,
      -s * (-c * o + l * a) + a + t,
      0,
      0,
      1
    ), this;
  }
  //
  scale(e, t) {
    return this.premultiply(Xs.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(Xs.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(Xs.makeTranslation(e, t)), this;
  }
  // for 2D Transforms
  makeTranslation(e, t) {
    return e.isVector2 ? this.set(
      1,
      0,
      e.x,
      0,
      1,
      e.y,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      e,
      0,
      1,
      t,
      0,
      0,
      1
    ), this;
  }
  makeRotation(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      n,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t) {
    return this.set(
      e,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  //
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let s = 0; s < 9; s++)
      if (t[s] !== n[s])
        return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Xs = /* @__PURE__ */ new nt();
function Zo(i) {
  for (let e = i.length - 1; e >= 0; --e)
    if (i[e] >= 65535)
      return !0;
  return !1;
}
function Ts(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function od() {
  const i = Ts("canvas");
  return i.style.display = "block", i;
}
const Fa = {};
function Di(i) {
  i in Fa || (Fa[i] = !0, console.warn(i));
}
const Oa = /* @__PURE__ */ new nt().set(
  0.8224621,
  0.177538,
  0,
  0.0331941,
  0.9668058,
  0,
  0.0170827,
  0.0723974,
  0.9105199
), Ba = /* @__PURE__ */ new nt().set(
  1.2249401,
  -0.2249404,
  0,
  -0.0420569,
  1.0420571,
  0,
  -0.0196376,
  -0.0786361,
  1.0982735
), Hi = {
  [vn]: {
    transfer: Ss,
    primaries: bs,
    toReference: (i) => i,
    fromReference: (i) => i
  },
  [Ct]: {
    transfer: mt,
    primaries: bs,
    toReference: (i) => i.convertSRGBToLinear(),
    fromReference: (i) => i.convertLinearToSRGB()
  },
  [Cs]: {
    transfer: Ss,
    primaries: Es,
    toReference: (i) => i.applyMatrix3(Ba),
    fromReference: (i) => i.applyMatrix3(Oa)
  },
  [zr]: {
    transfer: mt,
    primaries: Es,
    toReference: (i) => i.convertSRGBToLinear().applyMatrix3(Ba),
    fromReference: (i) => i.applyMatrix3(Oa).convertLinearToSRGB()
  }
}, ld = /* @__PURE__ */ new Set([vn, Cs]), pt = {
  enabled: !0,
  _workingColorSpace: vn,
  get workingColorSpace() {
    return this._workingColorSpace;
  },
  set workingColorSpace(i) {
    if (!ld.has(i))
      throw new Error(`Unsupported working color space, "${i}".`);
    this._workingColorSpace = i;
  },
  convert: function(i, e, t) {
    if (this.enabled === !1 || e === t || !e || !t)
      return i;
    const n = Hi[e].toReference, s = Hi[t].fromReference;
    return s(n(i));
  },
  fromWorkingColorSpace: function(i, e) {
    return this.convert(i, this._workingColorSpace, e);
  },
  toWorkingColorSpace: function(i, e) {
    return this.convert(i, e, this._workingColorSpace);
  },
  getPrimaries: function(i) {
    return Hi[i].primaries;
  },
  getTransfer: function(i) {
    return i === Qt ? Ss : Hi[i].transfer;
  }
};
function pi(i) {
  return i < 0.04045 ? i * 0.0773993808 : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function Ys(i) {
  return i < 31308e-7 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let $n;
class Jo {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      $n === void 0 && ($n = Ts("canvas")), $n.width = e.width, $n.height = e.height;
      const n = $n.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = $n;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = Ts("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const s = n.getImageData(0, 0, e.width, e.height), r = s.data;
      for (let o = 0; o < r.length; o++)
        r[o] = pi(r[o] / 255) * 255;
      return n.putImageData(s, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(pi(t[n] / 255) * 255) : t[n] = pi(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let cd = 0;
class Qo {
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: cd++ }), this.uuid = Bi(), this.data = e, this.version = 0;
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0)
      return e.images[this.uuid];
    const n = {
      uuid: this.uuid,
      url: ""
    }, s = this.data;
    if (s !== null) {
      let r;
      if (Array.isArray(s)) {
        r = [];
        for (let o = 0, a = s.length; o < a; o++)
          s[o].isDataTexture ? r.push(qs(s[o].image)) : r.push(qs(s[o]));
      } else
        r = qs(s);
      n.url = r;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function qs(i) {
  return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? Jo.getDataURL(i) : i.data ? {
    data: Array.from(i.data),
    width: i.width,
    height: i.height,
    type: i.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let dd = 0;
class Gt extends vi {
  constructor(e = Gt.DEFAULT_IMAGE, t = Gt.DEFAULT_MAPPING, n = sn, s = sn, r = Zt, o = Fi, a = rn, l = Ln, c = Gt.DEFAULT_ANISOTROPY, d = Qt) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: dd++ }), this.uuid = Bi(), this.name = "", this.source = new Qo(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = s, this.magFilter = r, this.minFilter = o, this.anisotropy = c, this.format = a, this.internalFormat = null, this.type = l, this.offset = new rt(0, 0), this.repeat = new rt(1, 1), this.center = new rt(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new nt(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, typeof d == "string" ? this.colorSpace = d : (Di("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = d === jn ? Ct : Qt), this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.6,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== ko)
      return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case Cr:
          e.x = e.x - Math.floor(e.x);
          break;
        case sn:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case Lr:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case Cr:
          e.y = e.y - Math.floor(e.y);
          break;
        case sn:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case Lr:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  get encoding() {
    return Di("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace === Ct ? jn : qo;
  }
  set encoding(e) {
    Di("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = e === jn ? Ct : Qt;
  }
}
Gt.DEFAULT_IMAGE = null;
Gt.DEFAULT_MAPPING = ko;
Gt.DEFAULT_ANISOTROPY = 1;
class gt {
  constructor(e = 0, t = 0, n = 0, s = 1) {
    gt.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = s;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, s) {
    return this.x = e, this.y = t, this.z = n, this.w = s, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, s = this.z, r = this.w, o = e.elements;
    return this.x = o[0] * t + o[4] * n + o[8] * s + o[12] * r, this.y = o[1] * t + o[5] * n + o[9] * s + o[13] * r, this.z = o[2] * t + o[6] * n + o[10] * s + o[14] * r, this.w = o[3] * t + o[7] * n + o[11] * s + o[15] * r, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, s, r;
    const l = e.elements, c = l[0], d = l[4], u = l[8], f = l[1], g = l[5], _ = l[9], v = l[2], p = l[6], h = l[10];
    if (Math.abs(d - f) < 0.01 && Math.abs(u - v) < 0.01 && Math.abs(_ - p) < 0.01) {
      if (Math.abs(d + f) < 0.1 && Math.abs(u + v) < 0.1 && Math.abs(_ + p) < 0.1 && Math.abs(c + g + h - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const x = (c + 1) / 2, R = (g + 1) / 2, U = (h + 1) / 2, L = (d + f) / 4, C = (u + v) / 4, ee = (_ + p) / 4;
      return x > R && x > U ? x < 0.01 ? (n = 0, s = 0.707106781, r = 0.707106781) : (n = Math.sqrt(x), s = L / n, r = C / n) : R > U ? R < 0.01 ? (n = 0.707106781, s = 0, r = 0.707106781) : (s = Math.sqrt(R), n = L / s, r = ee / s) : U < 0.01 ? (n = 0.707106781, s = 0.707106781, r = 0) : (r = Math.sqrt(U), n = C / r, s = ee / r), this.set(n, s, r, t), this;
    }
    let T = Math.sqrt((p - _) * (p - _) + (u - v) * (u - v) + (f - d) * (f - d));
    return Math.abs(T) < 1e-3 && (T = 1), this.x = (p - _) / T, this.y = (u - v) / T, this.z = (f - d) / T, this.w = Math.acos((c + g + h - 1) / 2), this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class hd extends vi {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new gt(0, 0, e, t), this.scissorTest = !1, this.viewport = new gt(0, 0, e, t);
    const s = { width: e, height: t, depth: 1 };
    n.encoding !== void 0 && (Di("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."), n.colorSpace = n.encoding === jn ? Ct : Qt), n = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: Zt,
      depthBuffer: !0,
      stencilBuffer: !1,
      depthTexture: null,
      samples: 0
    }, n), this.texture = new Gt(s, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = n.generateMipmaps, this.texture.internalFormat = n.internalFormat, this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.depthTexture = n.depthTexture, this.samples = n.samples;
  }
  setSize(e, t, n = 1) {
    (this.width !== e || this.height !== t || this.depth !== n) && (this.width = e, this.height = t, this.depth = n, this.texture.image.width = e, this.texture.image.height = t, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.texture.isRenderTargetTexture = !0;
    const t = Object.assign({}, e.texture.image);
    return this.texture.source = new Qo(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Xn extends hd {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = !0;
  }
}
class el extends Gt {
  constructor(e = null, t = 1, n = 1, s = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: s }, this.magFilter = Ft, this.minFilter = Ft, this.wrapR = sn, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class ud extends Gt {
  constructor(e = null, t = 1, n = 1, s = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: s }, this.magFilter = Ft, this.minFilter = Ft, this.wrapR = sn, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class zi {
  constructor(e = 0, t = 0, n = 0, s = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = s;
  }
  static slerpFlat(e, t, n, s, r, o, a) {
    let l = n[s + 0], c = n[s + 1], d = n[s + 2], u = n[s + 3];
    const f = r[o + 0], g = r[o + 1], _ = r[o + 2], v = r[o + 3];
    if (a === 0) {
      e[t + 0] = l, e[t + 1] = c, e[t + 2] = d, e[t + 3] = u;
      return;
    }
    if (a === 1) {
      e[t + 0] = f, e[t + 1] = g, e[t + 2] = _, e[t + 3] = v;
      return;
    }
    if (u !== v || l !== f || c !== g || d !== _) {
      let p = 1 - a;
      const h = l * f + c * g + d * _ + u * v, T = h >= 0 ? 1 : -1, x = 1 - h * h;
      if (x > Number.EPSILON) {
        const U = Math.sqrt(x), L = Math.atan2(U, h * T);
        p = Math.sin(p * L) / U, a = Math.sin(a * L) / U;
      }
      const R = a * T;
      if (l = l * p + f * R, c = c * p + g * R, d = d * p + _ * R, u = u * p + v * R, p === 1 - a) {
        const U = 1 / Math.sqrt(l * l + c * c + d * d + u * u);
        l *= U, c *= U, d *= U, u *= U;
      }
    }
    e[t] = l, e[t + 1] = c, e[t + 2] = d, e[t + 3] = u;
  }
  static multiplyQuaternionsFlat(e, t, n, s, r, o) {
    const a = n[s], l = n[s + 1], c = n[s + 2], d = n[s + 3], u = r[o], f = r[o + 1], g = r[o + 2], _ = r[o + 3];
    return e[t] = a * _ + d * u + l * g - c * f, e[t + 1] = l * _ + d * f + c * u - a * g, e[t + 2] = c * _ + d * g + a * f - l * u, e[t + 3] = d * _ - a * u - l * f - c * g, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, n, s) {
    return this._x = e, this._y = t, this._z = n, this._w = s, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t = !0) {
    const n = e._x, s = e._y, r = e._z, o = e._order, a = Math.cos, l = Math.sin, c = a(n / 2), d = a(s / 2), u = a(r / 2), f = l(n / 2), g = l(s / 2), _ = l(r / 2);
    switch (o) {
      case "XYZ":
        this._x = f * d * u + c * g * _, this._y = c * g * u - f * d * _, this._z = c * d * _ + f * g * u, this._w = c * d * u - f * g * _;
        break;
      case "YXZ":
        this._x = f * d * u + c * g * _, this._y = c * g * u - f * d * _, this._z = c * d * _ - f * g * u, this._w = c * d * u + f * g * _;
        break;
      case "ZXY":
        this._x = f * d * u - c * g * _, this._y = c * g * u + f * d * _, this._z = c * d * _ + f * g * u, this._w = c * d * u - f * g * _;
        break;
      case "ZYX":
        this._x = f * d * u - c * g * _, this._y = c * g * u + f * d * _, this._z = c * d * _ - f * g * u, this._w = c * d * u + f * g * _;
        break;
      case "YZX":
        this._x = f * d * u + c * g * _, this._y = c * g * u + f * d * _, this._z = c * d * _ - f * g * u, this._w = c * d * u - f * g * _;
        break;
      case "XZY":
        this._x = f * d * u - c * g * _, this._y = c * g * u - f * d * _, this._z = c * d * _ + f * g * u, this._w = c * d * u + f * g * _;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o);
    }
    return t === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, s = Math.sin(n);
    return this._x = e.x * s, this._y = e.y * s, this._z = e.z * s, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], s = t[4], r = t[8], o = t[1], a = t[5], l = t[9], c = t[2], d = t[6], u = t[10], f = n + a + u;
    if (f > 0) {
      const g = 0.5 / Math.sqrt(f + 1);
      this._w = 0.25 / g, this._x = (d - l) * g, this._y = (r - c) * g, this._z = (o - s) * g;
    } else if (n > a && n > u) {
      const g = 2 * Math.sqrt(1 + n - a - u);
      this._w = (d - l) / g, this._x = 0.25 * g, this._y = (s + o) / g, this._z = (r + c) / g;
    } else if (a > u) {
      const g = 2 * Math.sqrt(1 + a - n - u);
      this._w = (r - c) / g, this._x = (s + o) / g, this._y = 0.25 * g, this._z = (l + d) / g;
    } else {
      const g = 2 * Math.sqrt(1 + u - n - a);
      this._w = (o - s) / g, this._x = (r + c) / g, this._y = (l + d) / g, this._z = 0.25 * g;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(Ot(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0)
      return this;
    const s = Math.min(1, t / n);
    return this.slerp(e, s), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x, s = e._y, r = e._z, o = e._w, a = t._x, l = t._y, c = t._z, d = t._w;
    return this._x = n * d + o * a + s * c - r * l, this._y = s * d + o * l + r * a - n * c, this._z = r * d + o * c + n * l - s * a, this._w = o * d - n * a - s * l - r * c, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0)
      return this;
    if (t === 1)
      return this.copy(e);
    const n = this._x, s = this._y, r = this._z, o = this._w;
    let a = o * e._w + n * e._x + s * e._y + r * e._z;
    if (a < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, a = -a) : this.copy(e), a >= 1)
      return this._w = o, this._x = n, this._y = s, this._z = r, this;
    const l = 1 - a * a;
    if (l <= Number.EPSILON) {
      const g = 1 - t;
      return this._w = g * o + t * this._w, this._x = g * n + t * this._x, this._y = g * s + t * this._y, this._z = g * r + t * this._z, this.normalize(), this;
    }
    const c = Math.sqrt(l), d = Math.atan2(c, a), u = Math.sin((1 - t) * d) / c, f = Math.sin(t * d) / c;
    return this._w = o * u + this._w * f, this._x = n * u + this._x * f, this._y = s * u + this._y * f, this._z = r * u + this._z * f, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = Math.random(), t = Math.sqrt(1 - e), n = Math.sqrt(e), s = 2 * Math.PI * Math.random(), r = 2 * Math.PI * Math.random();
    return this.set(
      t * Math.cos(s),
      n * Math.sin(r),
      n * Math.cos(r),
      t * Math.sin(s)
    );
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class H {
  constructor(e = 0, t = 0, n = 0) {
    H.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n;
  }
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion(za.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(za.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, s = this.z, r = e.elements;
    return this.x = r[0] * t + r[3] * n + r[6] * s, this.y = r[1] * t + r[4] * n + r[7] * s, this.z = r[2] * t + r[5] * n + r[8] * s, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, s = this.z, r = e.elements, o = 1 / (r[3] * t + r[7] * n + r[11] * s + r[15]);
    return this.x = (r[0] * t + r[4] * n + r[8] * s + r[12]) * o, this.y = (r[1] * t + r[5] * n + r[9] * s + r[13]) * o, this.z = (r[2] * t + r[6] * n + r[10] * s + r[14]) * o, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, s = this.z, r = e.x, o = e.y, a = e.z, l = e.w, c = 2 * (o * s - a * n), d = 2 * (a * t - r * s), u = 2 * (r * n - o * t);
    return this.x = t + l * c + o * u - a * d, this.y = n + l * d + a * c - r * u, this.z = s + l * u + r * d - o * c, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, n = this.y, s = this.z, r = e.elements;
    return this.x = r[0] * t + r[4] * n + r[8] * s, this.y = r[1] * t + r[5] * n + r[9] * s, this.z = r[2] * t + r[6] * n + r[10] * s, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  // TODO lengthSquared?
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x, s = e.y, r = e.z, o = t.x, a = t.y, l = t.z;
    return this.x = s * l - r * a, this.y = r * o - n * l, this.z = n * a - s * o, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0)
      return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return $s.copy(this).projectOnVector(e), this.sub($s);
  }
  reflect(e) {
    return this.sub($s.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0)
      return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Ot(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, s = this.z - e.z;
    return t * t + n * n + s * s;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const s = Math.sin(t) * e;
    return this.x = s * Math.sin(n), this.y = Math.cos(t) * e, this.z = s * Math.cos(n), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), s = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = s, this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = (Math.random() - 0.5) * 2, t = Math.random() * Math.PI * 2, n = Math.sqrt(1 - e ** 2);
    return this.x = n * Math.cos(t), this.y = n * Math.sin(t), this.z = e, this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const $s = /* @__PURE__ */ new H(), za = /* @__PURE__ */ new zi();
class ki {
  constructor(e = new H(1 / 0, 1 / 0, 1 / 0), t = new H(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(en.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(en.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = en.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0) {
      const r = n.getAttribute("position");
      if (t === !0 && r !== void 0 && e.isInstancedMesh !== !0)
        for (let o = 0, a = r.count; o < a; o++)
          e.isMesh === !0 ? e.getVertexPosition(o, en) : en.fromBufferAttribute(r, o), en.applyMatrix4(e.matrixWorld), this.expandByPoint(en);
      else
        e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), Vi.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), Vi.copy(n.boundingBox)), Vi.applyMatrix4(e.matrixWorld), this.union(Vi);
    }
    const s = e.children;
    for (let r = 0, o = s.length; r < o; r++)
      this.expandByObject(s[r], t);
    return this;
  }
  containsPoint(e) {
    return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z);
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z);
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, en), en.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(Ti), Wi.subVectors(this.max, Ti), Kn.subVectors(e.a, Ti), Zn.subVectors(e.b, Ti), Jn.subVectors(e.c, Ti), Mn.subVectors(Zn, Kn), Sn.subVectors(Jn, Zn), Un.subVectors(Kn, Jn);
    let t = [
      0,
      -Mn.z,
      Mn.y,
      0,
      -Sn.z,
      Sn.y,
      0,
      -Un.z,
      Un.y,
      Mn.z,
      0,
      -Mn.x,
      Sn.z,
      0,
      -Sn.x,
      Un.z,
      0,
      -Un.x,
      -Mn.y,
      Mn.x,
      0,
      -Sn.y,
      Sn.x,
      0,
      -Un.y,
      Un.x,
      0
    ];
    return !Ks(t, Kn, Zn, Jn, Wi) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Ks(t, Kn, Zn, Jn, Wi)) ? !1 : (ji.crossVectors(Mn, Sn), t = [ji.x, ji.y, ji.z], Ks(t, Kn, Zn, Jn, Wi));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, en).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(en).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (hn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), hn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), hn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), hn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), hn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), hn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), hn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), hn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(hn), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const hn = [
  /* @__PURE__ */ new H(),
  /* @__PURE__ */ new H(),
  /* @__PURE__ */ new H(),
  /* @__PURE__ */ new H(),
  /* @__PURE__ */ new H(),
  /* @__PURE__ */ new H(),
  /* @__PURE__ */ new H(),
  /* @__PURE__ */ new H()
], en = /* @__PURE__ */ new H(), Vi = /* @__PURE__ */ new ki(), Kn = /* @__PURE__ */ new H(), Zn = /* @__PURE__ */ new H(), Jn = /* @__PURE__ */ new H(), Mn = /* @__PURE__ */ new H(), Sn = /* @__PURE__ */ new H(), Un = /* @__PURE__ */ new H(), Ti = /* @__PURE__ */ new H(), Wi = /* @__PURE__ */ new H(), ji = /* @__PURE__ */ new H(), In = /* @__PURE__ */ new H();
function Ks(i, e, t, n, s) {
  for (let r = 0, o = i.length - 3; r <= o; r += 3) {
    In.fromArray(i, r);
    const a = s.x * Math.abs(In.x) + s.y * Math.abs(In.y) + s.z * Math.abs(In.z), l = e.dot(In), c = t.dot(In), d = n.dot(In);
    if (Math.max(-Math.max(l, c, d), Math.min(l, c, d)) > a)
      return !1;
  }
  return !0;
}
const fd = /* @__PURE__ */ new ki(), Ai = /* @__PURE__ */ new H(), Zs = /* @__PURE__ */ new H();
class Ls {
  constructor(e = new H(), t = -1) {
    this.isSphere = !0, this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : fd.setFromPoints(e).getCenter(n);
    let s = 0;
    for (let r = 0, o = e.length; r < o; r++)
      s = Math.max(s, n.distanceToSquared(e[r]));
    return this.radius = Math.sqrt(s), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty())
      return this.center.copy(e), this.radius = 0, this;
    Ai.subVectors(e, this.center);
    const t = Ai.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), s = (n - this.radius) * 0.5;
      this.center.addScaledVector(Ai, s / n), this.radius += s;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (Zs.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(Ai.copy(e.center).add(Zs)), this.expandByPoint(Ai.copy(e.center).sub(Zs))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const un = /* @__PURE__ */ new H(), Js = /* @__PURE__ */ new H(), Xi = /* @__PURE__ */ new H(), bn = /* @__PURE__ */ new H(), Qs = /* @__PURE__ */ new H(), Yi = /* @__PURE__ */ new H(), er = /* @__PURE__ */ new H();
class tl {
  constructor(e = new H(), t = new H(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, un)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = un.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (un.copy(this.origin).addScaledVector(this.direction, t), un.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, s) {
    Js.copy(e).add(t).multiplyScalar(0.5), Xi.copy(t).sub(e).normalize(), bn.copy(this.origin).sub(Js);
    const r = e.distanceTo(t) * 0.5, o = -this.direction.dot(Xi), a = bn.dot(this.direction), l = -bn.dot(Xi), c = bn.lengthSq(), d = Math.abs(1 - o * o);
    let u, f, g, _;
    if (d > 0)
      if (u = o * l - a, f = o * a - l, _ = r * d, u >= 0)
        if (f >= -_)
          if (f <= _) {
            const v = 1 / d;
            u *= v, f *= v, g = u * (u + o * f + 2 * a) + f * (o * u + f + 2 * l) + c;
          } else
            f = r, u = Math.max(0, -(o * f + a)), g = -u * u + f * (f + 2 * l) + c;
        else
          f = -r, u = Math.max(0, -(o * f + a)), g = -u * u + f * (f + 2 * l) + c;
      else
        f <= -_ ? (u = Math.max(0, -(-o * r + a)), f = u > 0 ? -r : Math.min(Math.max(-r, -l), r), g = -u * u + f * (f + 2 * l) + c) : f <= _ ? (u = 0, f = Math.min(Math.max(-r, -l), r), g = f * (f + 2 * l) + c) : (u = Math.max(0, -(o * r + a)), f = u > 0 ? r : Math.min(Math.max(-r, -l), r), g = -u * u + f * (f + 2 * l) + c);
    else
      f = o > 0 ? -r : r, u = Math.max(0, -(o * f + a)), g = -u * u + f * (f + 2 * l) + c;
    return n && n.copy(this.origin).addScaledVector(this.direction, u), s && s.copy(Js).addScaledVector(Xi, f), g;
  }
  intersectSphere(e, t) {
    un.subVectors(e.center, this.origin);
    const n = un.dot(this.direction), s = un.dot(un) - n * n, r = e.radius * e.radius;
    if (s > r)
      return null;
    const o = Math.sqrt(r - s), a = n - o, l = n + o;
    return l < 0 ? null : a < 0 ? this.at(l, t) : this.at(a, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, s, r, o, a, l;
    const c = 1 / this.direction.x, d = 1 / this.direction.y, u = 1 / this.direction.z, f = this.origin;
    return c >= 0 ? (n = (e.min.x - f.x) * c, s = (e.max.x - f.x) * c) : (n = (e.max.x - f.x) * c, s = (e.min.x - f.x) * c), d >= 0 ? (r = (e.min.y - f.y) * d, o = (e.max.y - f.y) * d) : (r = (e.max.y - f.y) * d, o = (e.min.y - f.y) * d), n > o || r > s || ((r > n || isNaN(n)) && (n = r), (o < s || isNaN(s)) && (s = o), u >= 0 ? (a = (e.min.z - f.z) * u, l = (e.max.z - f.z) * u) : (a = (e.max.z - f.z) * u, l = (e.min.z - f.z) * u), n > l || a > s) || ((a > n || n !== n) && (n = a), (l < s || s !== s) && (s = l), s < 0) ? null : this.at(n >= 0 ? n : s, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, un) !== null;
  }
  intersectTriangle(e, t, n, s, r) {
    Qs.subVectors(t, e), Yi.subVectors(n, e), er.crossVectors(Qs, Yi);
    let o = this.direction.dot(er), a;
    if (o > 0) {
      if (s)
        return null;
      a = 1;
    } else if (o < 0)
      a = -1, o = -o;
    else
      return null;
    bn.subVectors(this.origin, e);
    const l = a * this.direction.dot(Yi.crossVectors(bn, Yi));
    if (l < 0)
      return null;
    const c = a * this.direction.dot(Qs.cross(bn));
    if (c < 0 || l + c > o)
      return null;
    const d = -a * bn.dot(er);
    return d < 0 ? null : this.at(d / o, r);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class yt {
  constructor(e, t, n, s, r, o, a, l, c, d, u, f, g, _, v, p) {
    yt.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, s, r, o, a, l, c, d, u, f, g, _, v, p);
  }
  set(e, t, n, s, r, o, a, l, c, d, u, f, g, _, v, p) {
    const h = this.elements;
    return h[0] = e, h[4] = t, h[8] = n, h[12] = s, h[1] = r, h[5] = o, h[9] = a, h[13] = l, h[2] = c, h[6] = d, h[10] = u, h[14] = f, h[3] = g, h[7] = _, h[11] = v, h[15] = p, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  clone() {
    return new yt().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[3],
      t[6],
      0,
      t[1],
      t[4],
      t[7],
      0,
      t[2],
      t[5],
      t[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, n) {
    return this.set(
      e.x,
      t.x,
      n.x,
      0,
      e.y,
      t.y,
      n.y,
      0,
      e.z,
      t.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(e) {
    const t = this.elements, n = e.elements, s = 1 / Qn.setFromMatrixColumn(e, 0).length(), r = 1 / Qn.setFromMatrixColumn(e, 1).length(), o = 1 / Qn.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * s, t[1] = n[1] * s, t[2] = n[2] * s, t[3] = 0, t[4] = n[4] * r, t[5] = n[5] * r, t[6] = n[6] * r, t[7] = 0, t[8] = n[8] * o, t[9] = n[9] * o, t[10] = n[10] * o, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, s = e.y, r = e.z, o = Math.cos(n), a = Math.sin(n), l = Math.cos(s), c = Math.sin(s), d = Math.cos(r), u = Math.sin(r);
    if (e.order === "XYZ") {
      const f = o * d, g = o * u, _ = a * d, v = a * u;
      t[0] = l * d, t[4] = -l * u, t[8] = c, t[1] = g + _ * c, t[5] = f - v * c, t[9] = -a * l, t[2] = v - f * c, t[6] = _ + g * c, t[10] = o * l;
    } else if (e.order === "YXZ") {
      const f = l * d, g = l * u, _ = c * d, v = c * u;
      t[0] = f + v * a, t[4] = _ * a - g, t[8] = o * c, t[1] = o * u, t[5] = o * d, t[9] = -a, t[2] = g * a - _, t[6] = v + f * a, t[10] = o * l;
    } else if (e.order === "ZXY") {
      const f = l * d, g = l * u, _ = c * d, v = c * u;
      t[0] = f - v * a, t[4] = -o * u, t[8] = _ + g * a, t[1] = g + _ * a, t[5] = o * d, t[9] = v - f * a, t[2] = -o * c, t[6] = a, t[10] = o * l;
    } else if (e.order === "ZYX") {
      const f = o * d, g = o * u, _ = a * d, v = a * u;
      t[0] = l * d, t[4] = _ * c - g, t[8] = f * c + v, t[1] = l * u, t[5] = v * c + f, t[9] = g * c - _, t[2] = -c, t[6] = a * l, t[10] = o * l;
    } else if (e.order === "YZX") {
      const f = o * l, g = o * c, _ = a * l, v = a * c;
      t[0] = l * d, t[4] = v - f * u, t[8] = _ * u + g, t[1] = u, t[5] = o * d, t[9] = -a * d, t[2] = -c * d, t[6] = g * u + _, t[10] = f - v * u;
    } else if (e.order === "XZY") {
      const f = o * l, g = o * c, _ = a * l, v = a * c;
      t[0] = l * d, t[4] = -u, t[8] = c * d, t[1] = f * u + v, t[5] = o * d, t[9] = g * u - _, t[2] = _ * u - g, t[6] = a * d, t[10] = v * u + f;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(pd, e, md);
  }
  lookAt(e, t, n) {
    const s = this.elements;
    return Vt.subVectors(e, t), Vt.lengthSq() === 0 && (Vt.z = 1), Vt.normalize(), En.crossVectors(n, Vt), En.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Vt.x += 1e-4 : Vt.z += 1e-4, Vt.normalize(), En.crossVectors(n, Vt)), En.normalize(), qi.crossVectors(Vt, En), s[0] = En.x, s[4] = qi.x, s[8] = Vt.x, s[1] = En.y, s[5] = qi.y, s[9] = Vt.y, s[2] = En.z, s[6] = qi.z, s[10] = Vt.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, s = t.elements, r = this.elements, o = n[0], a = n[4], l = n[8], c = n[12], d = n[1], u = n[5], f = n[9], g = n[13], _ = n[2], v = n[6], p = n[10], h = n[14], T = n[3], x = n[7], R = n[11], U = n[15], L = s[0], C = s[4], ee = s[8], E = s[12], A = s[1], O = s[5], te = s[9], ae = s[13], N = s[2], Y = s[6], M = s[10], ne = s[14], K = s[3], j = s[7], B = s[11], J = s[15];
    return r[0] = o * L + a * A + l * N + c * K, r[4] = o * C + a * O + l * Y + c * j, r[8] = o * ee + a * te + l * M + c * B, r[12] = o * E + a * ae + l * ne + c * J, r[1] = d * L + u * A + f * N + g * K, r[5] = d * C + u * O + f * Y + g * j, r[9] = d * ee + u * te + f * M + g * B, r[13] = d * E + u * ae + f * ne + g * J, r[2] = _ * L + v * A + p * N + h * K, r[6] = _ * C + v * O + p * Y + h * j, r[10] = _ * ee + v * te + p * M + h * B, r[14] = _ * E + v * ae + p * ne + h * J, r[3] = T * L + x * A + R * N + U * K, r[7] = T * C + x * O + R * Y + U * j, r[11] = T * ee + x * te + R * M + U * B, r[15] = T * E + x * ae + R * ne + U * J, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], s = e[8], r = e[12], o = e[1], a = e[5], l = e[9], c = e[13], d = e[2], u = e[6], f = e[10], g = e[14], _ = e[3], v = e[7], p = e[11], h = e[15];
    return _ * (+r * l * u - s * c * u - r * a * f + n * c * f + s * a * g - n * l * g) + v * (+t * l * g - t * c * f + r * o * f - s * o * g + s * c * d - r * l * d) + p * (+t * c * u - t * a * g - r * o * u + n * o * g + r * a * d - n * c * d) + h * (-s * a * d - t * l * u + t * a * f + s * o * u - n * o * f + n * l * d);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, n) {
    const s = this.elements;
    return e.isVector3 ? (s[12] = e.x, s[13] = e.y, s[14] = e.z) : (s[12] = e, s[13] = t, s[14] = n), this;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], s = e[2], r = e[3], o = e[4], a = e[5], l = e[6], c = e[7], d = e[8], u = e[9], f = e[10], g = e[11], _ = e[12], v = e[13], p = e[14], h = e[15], T = u * p * c - v * f * c + v * l * g - a * p * g - u * l * h + a * f * h, x = _ * f * c - d * p * c - _ * l * g + o * p * g + d * l * h - o * f * h, R = d * v * c - _ * u * c + _ * a * g - o * v * g - d * a * h + o * u * h, U = _ * u * l - d * v * l - _ * a * f + o * v * f + d * a * p - o * u * p, L = t * T + n * x + s * R + r * U;
    if (L === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const C = 1 / L;
    return e[0] = T * C, e[1] = (v * f * r - u * p * r - v * s * g + n * p * g + u * s * h - n * f * h) * C, e[2] = (a * p * r - v * l * r + v * s * c - n * p * c - a * s * h + n * l * h) * C, e[3] = (u * l * r - a * f * r - u * s * c + n * f * c + a * s * g - n * l * g) * C, e[4] = x * C, e[5] = (d * p * r - _ * f * r + _ * s * g - t * p * g - d * s * h + t * f * h) * C, e[6] = (_ * l * r - o * p * r - _ * s * c + t * p * c + o * s * h - t * l * h) * C, e[7] = (o * f * r - d * l * r + d * s * c - t * f * c - o * s * g + t * l * g) * C, e[8] = R * C, e[9] = (_ * u * r - d * v * r - _ * n * g + t * v * g + d * n * h - t * u * h) * C, e[10] = (o * v * r - _ * a * r + _ * n * c - t * v * c - o * n * h + t * a * h) * C, e[11] = (d * a * r - o * u * r - d * n * c + t * u * c + o * n * g - t * a * g) * C, e[12] = U * C, e[13] = (d * v * s - _ * u * s + _ * n * f - t * v * f - d * n * p + t * u * p) * C, e[14] = (_ * a * s - o * v * s - _ * n * l + t * v * l + o * n * p - t * a * p) * C, e[15] = (o * u * s - d * a * s + d * n * l - t * u * l - o * n * f + t * a * f) * C, this;
  }
  scale(e) {
    const t = this.elements, n = e.x, s = e.y, r = e.z;
    return t[0] *= n, t[4] *= s, t[8] *= r, t[1] *= n, t[5] *= s, t[9] *= r, t[2] *= n, t[6] *= s, t[10] *= r, t[3] *= n, t[7] *= s, t[11] *= r, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], s = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, s));
  }
  makeTranslation(e, t, n) {
    return e.isVector3 ? this.set(
      1,
      0,
      0,
      e.x,
      0,
      1,
      0,
      e.y,
      0,
      0,
      1,
      e.z,
      0,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      0,
      e,
      0,
      1,
      0,
      t,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t), s = Math.sin(t), r = 1 - n, o = e.x, a = e.y, l = e.z, c = r * o, d = r * a;
    return this.set(
      c * o + n,
      c * a - s * l,
      c * l + s * a,
      0,
      c * a + s * l,
      d * a + n,
      d * l - s * o,
      0,
      c * l - s * a,
      d * l + s * o,
      r * l * l + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t, n) {
    return this.set(
      e,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeShear(e, t, n, s, r, o) {
    return this.set(
      1,
      n,
      r,
      0,
      e,
      1,
      o,
      0,
      t,
      s,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(e, t, n) {
    const s = this.elements, r = t._x, o = t._y, a = t._z, l = t._w, c = r + r, d = o + o, u = a + a, f = r * c, g = r * d, _ = r * u, v = o * d, p = o * u, h = a * u, T = l * c, x = l * d, R = l * u, U = n.x, L = n.y, C = n.z;
    return s[0] = (1 - (v + h)) * U, s[1] = (g + R) * U, s[2] = (_ - x) * U, s[3] = 0, s[4] = (g - R) * L, s[5] = (1 - (f + h)) * L, s[6] = (p + T) * L, s[7] = 0, s[8] = (_ + x) * C, s[9] = (p - T) * C, s[10] = (1 - (f + v)) * C, s[11] = 0, s[12] = e.x, s[13] = e.y, s[14] = e.z, s[15] = 1, this;
  }
  decompose(e, t, n) {
    const s = this.elements;
    let r = Qn.set(s[0], s[1], s[2]).length();
    const o = Qn.set(s[4], s[5], s[6]).length(), a = Qn.set(s[8], s[9], s[10]).length();
    this.determinant() < 0 && (r = -r), e.x = s[12], e.y = s[13], e.z = s[14], tn.copy(this);
    const c = 1 / r, d = 1 / o, u = 1 / a;
    return tn.elements[0] *= c, tn.elements[1] *= c, tn.elements[2] *= c, tn.elements[4] *= d, tn.elements[5] *= d, tn.elements[6] *= d, tn.elements[8] *= u, tn.elements[9] *= u, tn.elements[10] *= u, t.setFromRotationMatrix(tn), n.x = r, n.y = o, n.z = a, this;
  }
  makePerspective(e, t, n, s, r, o, a = _n) {
    const l = this.elements, c = 2 * r / (t - e), d = 2 * r / (n - s), u = (t + e) / (t - e), f = (n + s) / (n - s);
    let g, _;
    if (a === _n)
      g = -(o + r) / (o - r), _ = -2 * o * r / (o - r);
    else if (a === ws)
      g = -o / (o - r), _ = -o * r / (o - r);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a);
    return l[0] = c, l[4] = 0, l[8] = u, l[12] = 0, l[1] = 0, l[5] = d, l[9] = f, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = g, l[14] = _, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  makeOrthographic(e, t, n, s, r, o, a = _n) {
    const l = this.elements, c = 1 / (t - e), d = 1 / (n - s), u = 1 / (o - r), f = (t + e) * c, g = (n + s) * d;
    let _, v;
    if (a === _n)
      _ = (o + r) * u, v = -2 * u;
    else if (a === ws)
      _ = r * u, v = -1 * u;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a);
    return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -f, l[1] = 0, l[5] = 2 * d, l[9] = 0, l[13] = -g, l[2] = 0, l[6] = 0, l[10] = v, l[14] = -_, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let s = 0; s < 16; s++)
      if (t[s] !== n[s])
        return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
}
const Qn = /* @__PURE__ */ new H(), tn = /* @__PURE__ */ new yt(), pd = /* @__PURE__ */ new H(0, 0, 0), md = /* @__PURE__ */ new H(1, 1, 1), En = /* @__PURE__ */ new H(), qi = /* @__PURE__ */ new H(), Vt = /* @__PURE__ */ new H(), ka = /* @__PURE__ */ new yt(), Ga = /* @__PURE__ */ new zi();
class Ps {
  constructor(e = 0, t = 0, n = 0, s = Ps.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = s;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  set(e, t, n, s = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = s, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const s = e.elements, r = s[0], o = s[4], a = s[8], l = s[1], c = s[5], d = s[9], u = s[2], f = s[6], g = s[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(Ot(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-d, g), this._z = Math.atan2(-o, r)) : (this._x = Math.atan2(f, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Ot(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(a, g), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-u, r), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Ot(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._y = Math.atan2(-u, g), this._z = Math.atan2(-o, c)) : (this._y = 0, this._z = Math.atan2(l, r));
        break;
      case "ZYX":
        this._y = Math.asin(-Ot(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._x = Math.atan2(f, g), this._z = Math.atan2(l, r)) : (this._x = 0, this._z = Math.atan2(-o, c));
        break;
      case "YZX":
        this._z = Math.asin(Ot(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-d, c), this._y = Math.atan2(-u, r)) : (this._x = 0, this._y = Math.atan2(a, g));
        break;
      case "XZY":
        this._z = Math.asin(-Ot(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(f, c), this._y = Math.atan2(a, r)) : (this._x = Math.atan2(-d, g), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return ka.makeRotationFromQuaternion(e), this.setFromRotationMatrix(ka, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return Ga.setFromEuler(this), this.setFromQuaternion(Ga, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
Ps.DEFAULT_ORDER = "XYZ";
class nl {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let gd = 0;
const Ha = /* @__PURE__ */ new H(), ei = /* @__PURE__ */ new zi(), fn = /* @__PURE__ */ new yt(), $i = /* @__PURE__ */ new H(), Ri = /* @__PURE__ */ new H(), xd = /* @__PURE__ */ new H(), _d = /* @__PURE__ */ new zi(), Va = /* @__PURE__ */ new H(1, 0, 0), Wa = /* @__PURE__ */ new H(0, 1, 0), ja = /* @__PURE__ */ new H(0, 0, 1), vd = { type: "added" }, yd = { type: "removed" };
class Lt extends vi {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: gd++ }), this.uuid = Bi(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Lt.DEFAULT_UP.clone();
    const e = new H(), t = new Ps(), n = new zi(), s = new H(1, 1, 1);
    function r() {
      n.setFromEuler(t, !1);
    }
    function o() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(r), n._onChange(o), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: s
      },
      modelViewMatrix: {
        value: new yt()
      },
      normalMatrix: {
        value: new nt()
      }
    }), this.matrix = new yt(), this.matrixWorld = new yt(), this.matrixAutoUpdate = Lt.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new nl(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return ei.setFromAxisAngle(e, t), this.quaternion.multiply(ei), this;
  }
  rotateOnWorldAxis(e, t) {
    return ei.setFromAxisAngle(e, t), this.quaternion.premultiply(ei), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Va, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Wa, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(ja, e);
  }
  translateOnAxis(e, t) {
    return Ha.copy(e).applyQuaternion(this.quaternion), this.position.add(Ha.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(Va, e);
  }
  translateY(e) {
    return this.translateOnAxis(Wa, e);
  }
  translateZ(e) {
    return this.translateOnAxis(ja, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(fn.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? $i.copy(e) : $i.set(e, t, n);
    const s = this.parent;
    this.updateWorldMatrix(!0, !1), Ri.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? fn.lookAt(Ri, $i, this.up) : fn.lookAt($i, Ri, this.up), this.quaternion.setFromRotationMatrix(fn), s && (fn.extractRotation(s.matrixWorld), ei.setFromRotationMatrix(fn), this.quaternion.premultiply(ei.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(vd)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(yd)), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), fn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), fn.multiply(e.parent.matrixWorld)), e.applyMatrix4(fn), this.add(e), e.updateWorldMatrix(!1, !0), this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t)
      return this;
    for (let n = 0, s = this.children.length; n < s; n++) {
      const o = this.children[n].getObjectByProperty(e, t);
      if (o !== void 0)
        return o;
    }
  }
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const s = this.children;
    for (let r = 0, o = s.length; r < o; r++)
      s[r].getObjectsByProperty(e, t, n);
    return n;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ri, e, xd), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ri, _d, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {
  }
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, s = t.length; n < s; n++)
      t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1)
      return;
    e(this);
    const t = this.children;
    for (let n = 0, s = t.length; n < s; n++)
      t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
    const t = this.children;
    for (let n = 0, s = t.length; n < s; n++) {
      const r = t[n];
      (r.matrixWorldAutoUpdate === !0 || e === !0) && r.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === !0 && n !== null && n.matrixWorldAutoUpdate === !0 && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t === !0) {
      const s = this.children;
      for (let r = 0, o = s.length; r < o; r++) {
        const a = s[r];
        a.matrixWorldAutoUpdate === !0 && a.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, n.metadata = {
      version: 4.6,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const s = {};
    s.uuid = this.uuid, s.type = this.type, this.name !== "" && (s.name = this.name), this.castShadow === !0 && (s.castShadow = !0), this.receiveShadow === !0 && (s.receiveShadow = !0), this.visible === !1 && (s.visible = !1), this.frustumCulled === !1 && (s.frustumCulled = !1), this.renderOrder !== 0 && (s.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (s.userData = this.userData), s.layers = this.layers.mask, s.matrix = this.matrix.toArray(), s.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (s.matrixAutoUpdate = !1), this.isInstancedMesh && (s.type = "InstancedMesh", s.count = this.count, s.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (s.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (s.type = "BatchedMesh", s.perObjectFrustumCulled = this.perObjectFrustumCulled, s.sortObjects = this.sortObjects, s.drawRanges = this._drawRanges, s.reservedRanges = this._reservedRanges, s.visibility = this._visibility, s.active = this._active, s.bounds = this._bounds.map((a) => ({
      boxInitialized: a.boxInitialized,
      boxMin: a.box.min.toArray(),
      boxMax: a.box.max.toArray(),
      sphereInitialized: a.sphereInitialized,
      sphereRadius: a.sphere.radius,
      sphereCenter: a.sphere.center.toArray()
    })), s.maxGeometryCount = this._maxGeometryCount, s.maxVertexCount = this._maxVertexCount, s.maxIndexCount = this._maxIndexCount, s.geometryInitialized = this._geometryInitialized, s.geometryCount = this._geometryCount, s.matricesTexture = this._matricesTexture.toJSON(e), this.boundingSphere !== null && (s.boundingSphere = {
      center: s.boundingSphere.center.toArray(),
      radius: s.boundingSphere.radius
    }), this.boundingBox !== null && (s.boundingBox = {
      min: s.boundingBox.min.toArray(),
      max: s.boundingBox.max.toArray()
    }));
    function r(a, l) {
      return a[l.uuid] === void 0 && (a[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? s.background = this.background.toJSON() : this.background.isTexture && (s.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (s.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      s.geometry = r(e.geometries, this.geometry);
      const a = this.geometry.parameters;
      if (a !== void 0 && a.shapes !== void 0) {
        const l = a.shapes;
        if (Array.isArray(l))
          for (let c = 0, d = l.length; c < d; c++) {
            const u = l[c];
            r(e.shapes, u);
          }
        else
          r(e.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (s.bindMode = this.bindMode, s.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (r(e.skeletons, this.skeleton), s.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const a = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          a.push(r(e.materials, this.material[l]));
        s.material = a;
      } else
        s.material = r(e.materials, this.material);
    if (this.children.length > 0) {
      s.children = [];
      for (let a = 0; a < this.children.length; a++)
        s.children.push(this.children[a].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      s.animations = [];
      for (let a = 0; a < this.animations.length; a++) {
        const l = this.animations[a];
        s.animations.push(r(e.animations, l));
      }
    }
    if (t) {
      const a = o(e.geometries), l = o(e.materials), c = o(e.textures), d = o(e.images), u = o(e.shapes), f = o(e.skeletons), g = o(e.animations), _ = o(e.nodes);
      a.length > 0 && (n.geometries = a), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), d.length > 0 && (n.images = d), u.length > 0 && (n.shapes = u), f.length > 0 && (n.skeletons = f), g.length > 0 && (n.animations = g), _.length > 0 && (n.nodes = _);
    }
    return n.object = s, n;
    function o(a) {
      const l = [];
      for (const c in a) {
        const d = a[c];
        delete d.metadata, l.push(d);
      }
      return l;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (let n = 0; n < e.children.length; n++) {
        const s = e.children[n];
        this.add(s.clone());
      }
    return this;
  }
}
Lt.DEFAULT_UP = /* @__PURE__ */ new H(0, 1, 0);
Lt.DEFAULT_MATRIX_AUTO_UPDATE = !0;
Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const nn = /* @__PURE__ */ new H(), pn = /* @__PURE__ */ new H(), tr = /* @__PURE__ */ new H(), mn = /* @__PURE__ */ new H(), ti = /* @__PURE__ */ new H(), ni = /* @__PURE__ */ new H(), Xa = /* @__PURE__ */ new H(), nr = /* @__PURE__ */ new H(), ir = /* @__PURE__ */ new H(), sr = /* @__PURE__ */ new H();
let Ki = !1;
class Jt {
  constructor(e = new H(), t = new H(), n = new H()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, s) {
    s.subVectors(n, t), nn.subVectors(e, t), s.cross(nn);
    const r = s.lengthSq();
    return r > 0 ? s.multiplyScalar(1 / Math.sqrt(r)) : s.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(e, t, n, s, r) {
    nn.subVectors(s, t), pn.subVectors(n, t), tr.subVectors(e, t);
    const o = nn.dot(nn), a = nn.dot(pn), l = nn.dot(tr), c = pn.dot(pn), d = pn.dot(tr), u = o * c - a * a;
    if (u === 0)
      return r.set(0, 0, 0), null;
    const f = 1 / u, g = (c * l - a * d) * f, _ = (o * d - a * l) * f;
    return r.set(1 - g - _, _, g);
  }
  static containsPoint(e, t, n, s) {
    return this.getBarycoord(e, t, n, s, mn) === null ? !1 : mn.x >= 0 && mn.y >= 0 && mn.x + mn.y <= 1;
  }
  static getUV(e, t, n, s, r, o, a, l) {
    return Ki === !1 && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), Ki = !0), this.getInterpolation(e, t, n, s, r, o, a, l);
  }
  static getInterpolation(e, t, n, s, r, o, a, l) {
    return this.getBarycoord(e, t, n, s, mn) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(r, mn.x), l.addScaledVector(o, mn.y), l.addScaledVector(a, mn.z), l);
  }
  static isFrontFacing(e, t, n, s) {
    return nn.subVectors(n, t), pn.subVectors(e, t), nn.cross(pn).dot(s) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, s) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[s]), this;
  }
  setFromAttributeAndIndices(e, t, n, s) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, s), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return nn.subVectors(this.c, this.b), pn.subVectors(this.a, this.b), nn.cross(pn).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Jt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Jt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, s, r) {
    return Ki === !1 && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), Ki = !0), Jt.getInterpolation(e, this.a, this.b, this.c, t, n, s, r);
  }
  getInterpolation(e, t, n, s, r) {
    return Jt.getInterpolation(e, this.a, this.b, this.c, t, n, s, r);
  }
  containsPoint(e) {
    return Jt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Jt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, s = this.b, r = this.c;
    let o, a;
    ti.subVectors(s, n), ni.subVectors(r, n), nr.subVectors(e, n);
    const l = ti.dot(nr), c = ni.dot(nr);
    if (l <= 0 && c <= 0)
      return t.copy(n);
    ir.subVectors(e, s);
    const d = ti.dot(ir), u = ni.dot(ir);
    if (d >= 0 && u <= d)
      return t.copy(s);
    const f = l * u - d * c;
    if (f <= 0 && l >= 0 && d <= 0)
      return o = l / (l - d), t.copy(n).addScaledVector(ti, o);
    sr.subVectors(e, r);
    const g = ti.dot(sr), _ = ni.dot(sr);
    if (_ >= 0 && g <= _)
      return t.copy(r);
    const v = g * c - l * _;
    if (v <= 0 && c >= 0 && _ <= 0)
      return a = c / (c - _), t.copy(n).addScaledVector(ni, a);
    const p = d * _ - g * u;
    if (p <= 0 && u - d >= 0 && g - _ >= 0)
      return Xa.subVectors(r, s), a = (u - d) / (u - d + (g - _)), t.copy(s).addScaledVector(Xa, a);
    const h = 1 / (p + v + f);
    return o = v * h, a = f * h, t.copy(n).addScaledVector(ti, o).addScaledVector(ni, a);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const il = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, wn = { h: 0, s: 0, l: 0 }, Zi = { h: 0, s: 0, l: 0 };
function rr(i, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? i + (e - i) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? i + (e - i) * 6 * (2 / 3 - t) : i;
}
class et {
  constructor(e, t, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const s = e;
      s && s.isColor ? this.copy(s) : typeof s == "number" ? this.setHex(s) : typeof s == "string" && this.setStyle(s);
    } else
      this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = Ct) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, pt.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, s = pt.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, pt.toWorkingColorSpace(this, s), this;
  }
  setHSL(e, t, n, s = pt.workingColorSpace) {
    if (e = ad(e, 1), t = Ot(t, 0, 1), n = Ot(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - r;
      this.r = rr(o, r, e + 1 / 3), this.g = rr(o, r, e), this.b = rr(o, r, e - 1 / 3);
    }
    return pt.toWorkingColorSpace(this, s), this;
  }
  setStyle(e, t = Ct) {
    function n(r) {
      r !== void 0 && parseFloat(r) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let s;
    if (s = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let r;
      const o = s[1], a = s[2];
      switch (o) {
        case "rgb":
        case "rgba":
          if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return n(r[4]), this.setRGB(
              Math.min(255, parseInt(r[1], 10)) / 255,
              Math.min(255, parseInt(r[2], 10)) / 255,
              Math.min(255, parseInt(r[3], 10)) / 255,
              t
            );
          if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return n(r[4]), this.setRGB(
              Math.min(100, parseInt(r[1], 10)) / 100,
              Math.min(100, parseInt(r[2], 10)) / 100,
              Math.min(100, parseInt(r[3], 10)) / 100,
              t
            );
          break;
        case "hsl":
        case "hsla":
          if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return n(r[4]), this.setHSL(
              parseFloat(r[1]) / 360,
              parseFloat(r[2]) / 100,
              parseFloat(r[3]) / 100,
              t
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if (s = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const r = s[1], o = r.length;
      if (o === 3)
        return this.setRGB(
          parseInt(r.charAt(0), 16) / 15,
          parseInt(r.charAt(1), 16) / 15,
          parseInt(r.charAt(2), 16) / 15,
          t
        );
      if (o === 6)
        return this.setHex(parseInt(r, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0)
      return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = Ct) {
    const n = il[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = pi(e.r), this.g = pi(e.g), this.b = pi(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = Ys(e.r), this.g = Ys(e.g), this.b = Ys(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Ct) {
    return pt.fromWorkingColorSpace(Dt.copy(this), e), Math.round(Ot(Dt.r * 255, 0, 255)) * 65536 + Math.round(Ot(Dt.g * 255, 0, 255)) * 256 + Math.round(Ot(Dt.b * 255, 0, 255));
  }
  getHexString(e = Ct) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = pt.workingColorSpace) {
    pt.fromWorkingColorSpace(Dt.copy(this), t);
    const n = Dt.r, s = Dt.g, r = Dt.b, o = Math.max(n, s, r), a = Math.min(n, s, r);
    let l, c;
    const d = (a + o) / 2;
    if (a === o)
      l = 0, c = 0;
    else {
      const u = o - a;
      switch (c = d <= 0.5 ? u / (o + a) : u / (2 - o - a), o) {
        case n:
          l = (s - r) / u + (s < r ? 6 : 0);
          break;
        case s:
          l = (r - n) / u + 2;
          break;
        case r:
          l = (n - s) / u + 4;
          break;
      }
      l /= 6;
    }
    return e.h = l, e.s = c, e.l = d, e;
  }
  getRGB(e, t = pt.workingColorSpace) {
    return pt.fromWorkingColorSpace(Dt.copy(this), t), e.r = Dt.r, e.g = Dt.g, e.b = Dt.b, e;
  }
  getStyle(e = Ct) {
    pt.fromWorkingColorSpace(Dt.copy(this), e);
    const t = Dt.r, n = Dt.g, s = Dt.b;
    return e !== Ct ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(s * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(wn), this.setHSL(wn.h + e, wn.s + t, wn.l + n);
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  lerpHSL(e, t) {
    this.getHSL(wn), e.getHSL(Zi);
    const n = js(wn.h, Zi.h, t), s = js(wn.s, Zi.s, t), r = js(wn.l, Zi.l, t);
    return this.setHSL(n, s, r), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    const t = this.r, n = this.g, s = this.b, r = e.elements;
    return this.r = r[0] * t + r[3] * n + r[6] * s, this.g = r[1] * t + r[4] * n + r[7] * s, this.b = r[2] * t + r[5] * n + r[8] * s, this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const Dt = /* @__PURE__ */ new et();
et.NAMES = il;
let Md = 0;
class yi extends vi {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Md++ }), this.uuid = Bi(), this.name = "", this.type = "Material", this.blending = fi, this.side = Pn, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = wr, this.blendDst = Tr, this.blendEquation = Gn, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new et(0, 0, 0), this.blendAlpha = 0, this.depthFunc = Ms, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = Na, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = qn, this.stencilZFail = qn, this.stencilZPass = qn, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  onBuild() {
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const s = this[t];
        if (s === void 0) {
          console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
          continue;
        }
        s && s.isColor ? s.set(n) : s && s.isVector3 && n && n.isVector3 ? s.copy(n) : this[t] = n;
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    const n = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== fi && (n.blending = this.blending), this.side !== Pn && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== wr && (n.blendSrc = this.blendSrc), this.blendDst !== Tr && (n.blendDst = this.blendDst), this.blendEquation !== Gn && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== Ms && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== Na && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== qn && (n.stencilFail = this.stencilFail), this.stencilZFail !== qn && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== qn && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function s(r) {
      const o = [];
      for (const a in r) {
        const l = r[a];
        delete l.metadata, o.push(l);
      }
      return o;
    }
    if (t) {
      const r = s(e.textures), o = s(e.images);
      r.length > 0 && (n.textures = r), o.length > 0 && (n.images = o);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const s = t.length;
      n = new Array(s);
      for (let r = 0; r !== s; ++r)
        n[r] = t[r].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
class sl extends yi {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new et(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Bo, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const St = /* @__PURE__ */ new H(), Ji = /* @__PURE__ */ new rt();
class ln {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = Da, this._updateRange = { offset: 0, count: -1 }, this.updateRanges = [], this.gpuType = An, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  get updateRange() {
    return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."), this._updateRange;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
  }
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let s = 0, r = this.itemSize; s < r; s++)
      this.array[e + s] = t.array[n + s];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        Ji.fromBufferAttribute(this, t), Ji.applyMatrix3(e), this.setXY(t, Ji.x, Ji.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        St.fromBufferAttribute(this, t), St.applyMatrix3(e), this.setXYZ(t, St.x, St.y, St.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      St.fromBufferAttribute(this, t), St.applyMatrix4(e), this.setXYZ(t, St.x, St.y, St.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      St.fromBufferAttribute(this, t), St.applyNormalMatrix(e), this.setXYZ(t, St.x, St.y, St.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      St.fromBufferAttribute(this, t), St.transformDirection(e), this.setXYZ(t, St.x, St.y, St.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = wi(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = Bt(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = wi(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = Bt(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = wi(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = Bt(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = wi(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = Bt(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = wi(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = Bt(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = Bt(t, this.array), n = Bt(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, s) {
    return e *= this.itemSize, this.normalized && (t = Bt(t, this.array), n = Bt(n, this.array), s = Bt(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = s, this;
  }
  setXYZW(e, t, n, s, r) {
    return e *= this.itemSize, this.normalized && (t = Bt(t, this.array), n = Bt(n, this.array), s = Bt(s, this.array), r = Bt(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = s, this.array[e + 3] = r, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (e.name = this.name), this.usage !== Da && (e.usage = this.usage), e;
  }
}
class rl extends ln {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class al extends ln {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class Mt extends ln {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let Sd = 0;
const $t = /* @__PURE__ */ new yt(), ar = /* @__PURE__ */ new Lt(), ii = /* @__PURE__ */ new H(), Wt = /* @__PURE__ */ new ki(), Ci = /* @__PURE__ */ new ki(), Rt = /* @__PURE__ */ new H();
class Yt extends vi {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Sd++ }), this.uuid = Bi(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (Zo(e) ? al : rl)(e, 1) : this.index = e, this;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: n
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const r = new nt().getNormalMatrix(e);
      n.applyNormalMatrix(r), n.needsUpdate = !0;
    }
    const s = this.attributes.tangent;
    return s !== void 0 && (s.transformDirection(e), s.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return $t.makeRotationFromQuaternion(e), this.applyMatrix4($t), this;
  }
  rotateX(e) {
    return $t.makeRotationX(e), this.applyMatrix4($t), this;
  }
  rotateY(e) {
    return $t.makeRotationY(e), this.applyMatrix4($t), this;
  }
  rotateZ(e) {
    return $t.makeRotationZ(e), this.applyMatrix4($t), this;
  }
  translate(e, t, n) {
    return $t.makeTranslation(e, t, n), this.applyMatrix4($t), this;
  }
  scale(e, t, n) {
    return $t.makeScale(e, t, n), this.applyMatrix4($t), this;
  }
  lookAt(e) {
    return ar.lookAt(e), ar.updateMatrix(), this.applyMatrix4(ar.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(ii).negate(), this.translate(ii.x, ii.y, ii.z), this;
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, s = e.length; n < s; n++) {
      const r = e[n];
      t.push(r.x, r.y, r.z || 0);
    }
    return this.setAttribute("position", new Mt(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new ki());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(
        new H(-1 / 0, -1 / 0, -1 / 0),
        new H(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, s = t.length; n < s; n++) {
          const r = t[n];
          Wt.setFromBufferAttribute(r), this.morphTargetsRelative ? (Rt.addVectors(this.boundingBox.min, Wt.min), this.boundingBox.expandByPoint(Rt), Rt.addVectors(this.boundingBox.max, Wt.max), this.boundingBox.expandByPoint(Rt)) : (this.boundingBox.expandByPoint(Wt.min), this.boundingBox.expandByPoint(Wt.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Ls());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new H(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (Wt.setFromBufferAttribute(e), t)
        for (let r = 0, o = t.length; r < o; r++) {
          const a = t[r];
          Ci.setFromBufferAttribute(a), this.morphTargetsRelative ? (Rt.addVectors(Wt.min, Ci.min), Wt.expandByPoint(Rt), Rt.addVectors(Wt.max, Ci.max), Wt.expandByPoint(Rt)) : (Wt.expandByPoint(Ci.min), Wt.expandByPoint(Ci.max));
        }
      Wt.getCenter(n);
      let s = 0;
      for (let r = 0, o = e.count; r < o; r++)
        Rt.fromBufferAttribute(e, r), s = Math.max(s, n.distanceToSquared(Rt));
      if (t)
        for (let r = 0, o = t.length; r < o; r++) {
          const a = t[r], l = this.morphTargetsRelative;
          for (let c = 0, d = a.count; c < d; c++)
            Rt.fromBufferAttribute(a, c), l && (ii.fromBufferAttribute(e, c), Rt.add(ii)), s = Math.max(s, n.distanceToSquared(Rt));
        }
      this.boundingSphere.radius = Math.sqrt(s), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = e.array, s = t.position.array, r = t.normal.array, o = t.uv.array, a = s.length / 3;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new ln(new Float32Array(4 * a), 4));
    const l = this.getAttribute("tangent").array, c = [], d = [];
    for (let A = 0; A < a; A++)
      c[A] = new H(), d[A] = new H();
    const u = new H(), f = new H(), g = new H(), _ = new rt(), v = new rt(), p = new rt(), h = new H(), T = new H();
    function x(A, O, te) {
      u.fromArray(s, A * 3), f.fromArray(s, O * 3), g.fromArray(s, te * 3), _.fromArray(o, A * 2), v.fromArray(o, O * 2), p.fromArray(o, te * 2), f.sub(u), g.sub(u), v.sub(_), p.sub(_);
      const ae = 1 / (v.x * p.y - p.x * v.y);
      isFinite(ae) && (h.copy(f).multiplyScalar(p.y).addScaledVector(g, -v.y).multiplyScalar(ae), T.copy(g).multiplyScalar(v.x).addScaledVector(f, -p.x).multiplyScalar(ae), c[A].add(h), c[O].add(h), c[te].add(h), d[A].add(T), d[O].add(T), d[te].add(T));
    }
    let R = this.groups;
    R.length === 0 && (R = [{
      start: 0,
      count: n.length
    }]);
    for (let A = 0, O = R.length; A < O; ++A) {
      const te = R[A], ae = te.start, N = te.count;
      for (let Y = ae, M = ae + N; Y < M; Y += 3)
        x(
          n[Y + 0],
          n[Y + 1],
          n[Y + 2]
        );
    }
    const U = new H(), L = new H(), C = new H(), ee = new H();
    function E(A) {
      C.fromArray(r, A * 3), ee.copy(C);
      const O = c[A];
      U.copy(O), U.sub(C.multiplyScalar(C.dot(O))).normalize(), L.crossVectors(ee, O);
      const ae = L.dot(d[A]) < 0 ? -1 : 1;
      l[A * 4] = U.x, l[A * 4 + 1] = U.y, l[A * 4 + 2] = U.z, l[A * 4 + 3] = ae;
    }
    for (let A = 0, O = R.length; A < O; ++A) {
      const te = R[A], ae = te.start, N = te.count;
      for (let Y = ae, M = ae + N; Y < M; Y += 3)
        E(n[Y + 0]), E(n[Y + 1]), E(n[Y + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new ln(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let f = 0, g = n.count; f < g; f++)
          n.setXYZ(f, 0, 0, 0);
      const s = new H(), r = new H(), o = new H(), a = new H(), l = new H(), c = new H(), d = new H(), u = new H();
      if (e)
        for (let f = 0, g = e.count; f < g; f += 3) {
          const _ = e.getX(f + 0), v = e.getX(f + 1), p = e.getX(f + 2);
          s.fromBufferAttribute(t, _), r.fromBufferAttribute(t, v), o.fromBufferAttribute(t, p), d.subVectors(o, r), u.subVectors(s, r), d.cross(u), a.fromBufferAttribute(n, _), l.fromBufferAttribute(n, v), c.fromBufferAttribute(n, p), a.add(d), l.add(d), c.add(d), n.setXYZ(_, a.x, a.y, a.z), n.setXYZ(v, l.x, l.y, l.z), n.setXYZ(p, c.x, c.y, c.z);
        }
      else
        for (let f = 0, g = t.count; f < g; f += 3)
          s.fromBufferAttribute(t, f + 0), r.fromBufferAttribute(t, f + 1), o.fromBufferAttribute(t, f + 2), d.subVectors(o, r), u.subVectors(s, r), d.cross(u), n.setXYZ(f + 0, d.x, d.y, d.z), n.setXYZ(f + 1, d.x, d.y, d.z), n.setXYZ(f + 2, d.x, d.y, d.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      Rt.fromBufferAttribute(e, t), Rt.normalize(), e.setXYZ(t, Rt.x, Rt.y, Rt.z);
  }
  toNonIndexed() {
    function e(a, l) {
      const c = a.array, d = a.itemSize, u = a.normalized, f = new c.constructor(l.length * d);
      let g = 0, _ = 0;
      for (let v = 0, p = l.length; v < p; v++) {
        a.isInterleavedBufferAttribute ? g = l[v] * a.data.stride + a.offset : g = l[v] * d;
        for (let h = 0; h < d; h++)
          f[_++] = c[g++];
      }
      return new ln(f, d, u);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new Yt(), n = this.index.array, s = this.attributes;
    for (const a in s) {
      const l = s[a], c = e(l, n);
      t.setAttribute(a, c);
    }
    const r = this.morphAttributes;
    for (const a in r) {
      const l = [], c = r[a];
      for (let d = 0, u = c.length; d < u; d++) {
        const f = c[d], g = e(f, n);
        l.push(g);
      }
      t.morphAttributes[a] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const o = this.groups;
    for (let a = 0, l = o.length; a < l; a++) {
      const c = o[a];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const l = this.parameters;
      for (const c in l)
        l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const s = {};
    let r = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], d = [];
      for (let u = 0, f = c.length; u < f; u++) {
        const g = c[u];
        d.push(g.toJSON(e.data));
      }
      d.length > 0 && (s[l] = d, r = !0);
    }
    r && (e.data.morphAttributes = s, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const o = this.groups;
    o.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(o)));
    const a = this.boundingSphere;
    return a !== null && (e.data.boundingSphere = {
      center: a.center.toArray(),
      radius: a.radius
    }), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const s = e.attributes;
    for (const c in s) {
      const d = s[c];
      this.setAttribute(c, d.clone(t));
    }
    const r = e.morphAttributes;
    for (const c in r) {
      const d = [], u = r[c];
      for (let f = 0, g = u.length; f < g; f++)
        d.push(u[f].clone(t));
      this.morphAttributes[c] = d;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const o = e.groups;
    for (let c = 0, d = o.length; c < d; c++) {
      const u = o[c];
      this.addGroup(u.start, u.count, u.materialIndex);
    }
    const a = e.boundingBox;
    a !== null && (this.boundingBox = a.clone());
    const l = e.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Ya = /* @__PURE__ */ new yt(), Fn = /* @__PURE__ */ new tl(), Qi = /* @__PURE__ */ new Ls(), qa = /* @__PURE__ */ new H(), si = /* @__PURE__ */ new H(), ri = /* @__PURE__ */ new H(), ai = /* @__PURE__ */ new H(), or = /* @__PURE__ */ new H(), es = /* @__PURE__ */ new H(), ts = /* @__PURE__ */ new rt(), ns = /* @__PURE__ */ new rt(), is = /* @__PURE__ */ new rt(), $a = /* @__PURE__ */ new H(), Ka = /* @__PURE__ */ new H(), Za = /* @__PURE__ */ new H(), ss = /* @__PURE__ */ new H(), rs = /* @__PURE__ */ new H();
class we extends Lt {
  constructor(e = new Yt(), t = new sl()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const s = t[n[0]];
      if (s !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, o = s.length; r < o; r++) {
          const a = s[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry, s = n.attributes.position, r = n.morphAttributes.position, o = n.morphTargetsRelative;
    t.fromBufferAttribute(s, e);
    const a = this.morphTargetInfluences;
    if (r && a) {
      es.set(0, 0, 0);
      for (let l = 0, c = r.length; l < c; l++) {
        const d = a[l], u = r[l];
        d !== 0 && (or.fromBufferAttribute(u, e), o ? es.addScaledVector(or, d) : es.addScaledVector(or.sub(t), d));
      }
      t.add(es);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry, s = this.material, r = this.matrixWorld;
    s !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Qi.copy(n.boundingSphere), Qi.applyMatrix4(r), Fn.copy(e.ray).recast(e.near), !(Qi.containsPoint(Fn.origin) === !1 && (Fn.intersectSphere(Qi, qa) === null || Fn.origin.distanceToSquared(qa) > (e.far - e.near) ** 2)) && (Ya.copy(r).invert(), Fn.copy(e.ray).applyMatrix4(Ya), !(n.boundingBox !== null && Fn.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, Fn)));
  }
  _computeIntersections(e, t, n) {
    let s;
    const r = this.geometry, o = this.material, a = r.index, l = r.attributes.position, c = r.attributes.uv, d = r.attributes.uv1, u = r.attributes.normal, f = r.groups, g = r.drawRange;
    if (a !== null)
      if (Array.isArray(o))
        for (let _ = 0, v = f.length; _ < v; _++) {
          const p = f[_], h = o[p.materialIndex], T = Math.max(p.start, g.start), x = Math.min(a.count, Math.min(p.start + p.count, g.start + g.count));
          for (let R = T, U = x; R < U; R += 3) {
            const L = a.getX(R), C = a.getX(R + 1), ee = a.getX(R + 2);
            s = as(this, h, e, n, c, d, u, L, C, ee), s && (s.faceIndex = Math.floor(R / 3), s.face.materialIndex = p.materialIndex, t.push(s));
          }
        }
      else {
        const _ = Math.max(0, g.start), v = Math.min(a.count, g.start + g.count);
        for (let p = _, h = v; p < h; p += 3) {
          const T = a.getX(p), x = a.getX(p + 1), R = a.getX(p + 2);
          s = as(this, o, e, n, c, d, u, T, x, R), s && (s.faceIndex = Math.floor(p / 3), t.push(s));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(o))
        for (let _ = 0, v = f.length; _ < v; _++) {
          const p = f[_], h = o[p.materialIndex], T = Math.max(p.start, g.start), x = Math.min(l.count, Math.min(p.start + p.count, g.start + g.count));
          for (let R = T, U = x; R < U; R += 3) {
            const L = R, C = R + 1, ee = R + 2;
            s = as(this, h, e, n, c, d, u, L, C, ee), s && (s.faceIndex = Math.floor(R / 3), s.face.materialIndex = p.materialIndex, t.push(s));
          }
        }
      else {
        const _ = Math.max(0, g.start), v = Math.min(l.count, g.start + g.count);
        for (let p = _, h = v; p < h; p += 3) {
          const T = p, x = p + 1, R = p + 2;
          s = as(this, o, e, n, c, d, u, T, x, R), s && (s.faceIndex = Math.floor(p / 3), t.push(s));
        }
      }
  }
}
function bd(i, e, t, n, s, r, o, a) {
  let l;
  if (e.side === kt ? l = n.intersectTriangle(o, r, s, !0, a) : l = n.intersectTriangle(s, r, o, e.side === Pn, a), l === null)
    return null;
  rs.copy(a), rs.applyMatrix4(i.matrixWorld);
  const c = t.ray.origin.distanceTo(rs);
  return c < t.near || c > t.far ? null : {
    distance: c,
    point: rs.clone(),
    object: i
  };
}
function as(i, e, t, n, s, r, o, a, l, c) {
  i.getVertexPosition(a, si), i.getVertexPosition(l, ri), i.getVertexPosition(c, ai);
  const d = bd(i, e, t, n, si, ri, ai, ss);
  if (d) {
    s && (ts.fromBufferAttribute(s, a), ns.fromBufferAttribute(s, l), is.fromBufferAttribute(s, c), d.uv = Jt.getInterpolation(ss, si, ri, ai, ts, ns, is, new rt())), r && (ts.fromBufferAttribute(r, a), ns.fromBufferAttribute(r, l), is.fromBufferAttribute(r, c), d.uv1 = Jt.getInterpolation(ss, si, ri, ai, ts, ns, is, new rt()), d.uv2 = d.uv1), o && ($a.fromBufferAttribute(o, a), Ka.fromBufferAttribute(o, l), Za.fromBufferAttribute(o, c), d.normal = Jt.getInterpolation(ss, si, ri, ai, $a, Ka, Za, new H()), d.normal.dot(n.direction) > 0 && d.normal.multiplyScalar(-1));
    const u = {
      a,
      b: l,
      c,
      normal: new H(),
      materialIndex: 0
    };
    Jt.getNormal(si, ri, ai, u.normal), d.face = u;
  }
  return d;
}
class Xe extends Yt {
  constructor(e = 1, t = 1, n = 1, s = 1, r = 1, o = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: n,
      widthSegments: s,
      heightSegments: r,
      depthSegments: o
    };
    const a = this;
    s = Math.floor(s), r = Math.floor(r), o = Math.floor(o);
    const l = [], c = [], d = [], u = [];
    let f = 0, g = 0;
    _("z", "y", "x", -1, -1, n, t, e, o, r, 0), _("z", "y", "x", 1, -1, n, t, -e, o, r, 1), _("x", "z", "y", 1, 1, e, n, t, s, o, 2), _("x", "z", "y", 1, -1, e, n, -t, s, o, 3), _("x", "y", "z", 1, -1, e, t, n, s, r, 4), _("x", "y", "z", -1, -1, e, t, -n, s, r, 5), this.setIndex(l), this.setAttribute("position", new Mt(c, 3)), this.setAttribute("normal", new Mt(d, 3)), this.setAttribute("uv", new Mt(u, 2));
    function _(v, p, h, T, x, R, U, L, C, ee, E) {
      const A = R / C, O = U / ee, te = R / 2, ae = U / 2, N = L / 2, Y = C + 1, M = ee + 1;
      let ne = 0, K = 0;
      const j = new H();
      for (let B = 0; B < M; B++) {
        const J = B * O - ae;
        for (let Z = 0; Z < Y; Z++) {
          const W = Z * A - te;
          j[v] = W * T, j[p] = J * x, j[h] = N, c.push(j.x, j.y, j.z), j[v] = 0, j[p] = 0, j[h] = L > 0 ? 1 : -1, d.push(j.x, j.y, j.z), u.push(Z / C), u.push(1 - B / ee), ne += 1;
        }
      }
      for (let B = 0; B < ee; B++)
        for (let J = 0; J < C; J++) {
          const Z = f + J + Y * B, W = f + J + Y * (B + 1), ie = f + (J + 1) + Y * (B + 1), le = f + (J + 1) + Y * B;
          l.push(Z, W, le), l.push(W, ie, le), K += 6;
        }
      a.addGroup(g, K, E), g += K, f += ne;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Xe(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function _i(i) {
  const e = {};
  for (const t in i) {
    e[t] = {};
    for (const n in i[t]) {
      const s = i[t][n];
      s && (s.isColor || s.isMatrix3 || s.isMatrix4 || s.isVector2 || s.isVector3 || s.isVector4 || s.isTexture || s.isQuaternion) ? s.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = s.clone() : Array.isArray(s) ? e[t][n] = s.slice() : e[t][n] = s;
    }
  }
  return e;
}
function It(i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = _i(i[t]);
    for (const s in n)
      e[s] = n[s];
  }
  return e;
}
function Ed(i) {
  const e = [];
  for (let t = 0; t < i.length; t++)
    e.push(i[t].clone());
  return e;
}
function ol(i) {
  return i.getRenderTarget() === null ? i.outputColorSpace : pt.workingColorSpace;
}
const wd = { clone: _i, merge: It };
var Td = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Ad = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Yn extends yi {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Td, this.fragmentShader = Ad, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      derivatives: !1,
      // set to use derivatives
      fragDepth: !1,
      // set to use fragment depth values
      drawBuffers: !1,
      // set to use draw buffers
      shaderTextureLOD: !1,
      // set to use shader texture LOD
      clipCullDistance: !1
      // set to use vertex shader clipping
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = _i(e.uniforms), this.uniformsGroups = Ed(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const s in this.uniforms) {
      const o = this.uniforms[s].value;
      o && o.isTexture ? t.uniforms[s] = {
        type: "t",
        value: o.toJSON(e).uuid
      } : o && o.isColor ? t.uniforms[s] = {
        type: "c",
        value: o.getHex()
      } : o && o.isVector2 ? t.uniforms[s] = {
        type: "v2",
        value: o.toArray()
      } : o && o.isVector3 ? t.uniforms[s] = {
        type: "v3",
        value: o.toArray()
      } : o && o.isVector4 ? t.uniforms[s] = {
        type: "v4",
        value: o.toArray()
      } : o && o.isMatrix3 ? t.uniforms[s] = {
        type: "m3",
        value: o.toArray()
      } : o && o.isMatrix4 ? t.uniforms[s] = {
        type: "m4",
        value: o.toArray()
      } : t.uniforms[s] = {
        value: o
      };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const n = {};
    for (const s in this.extensions)
      this.extensions[s] === !0 && (n[s] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class ll extends Lt {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new yt(), this.projectionMatrix = new yt(), this.projectionMatrixInverse = new yt(), this.coordinateSystem = _n;
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Xt extends ll {
  constructor(e = 50, t = 1, n = 0.1, s = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = s, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  /**
   * Sets the FOV by focal length in respect to the current .filmGauge.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = Nr * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength() {
    const e = Math.tan(gs * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return Nr * 2 * Math.atan(
      Math.tan(gs * 0.5 * this.fov) / this.zoom
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *
   * then for each monitor you would call it like this
   *
   *   const w = 1920;
   *   const h = 1080;
   *   const fullWidth = w * 3;
   *   const fullHeight = h * 2;
   *
   *   --A--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   *   --B--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   *   --C--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   *   --D--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   *   --E--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   *   --F--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   *
   *   Note there is no reason monitors have to be the same size or in a grid.
   */
  setViewOffset(e, t, n, s, r, o) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = s, this.view.width = r, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(gs * 0.5 * this.fov) / this.zoom, n = 2 * t, s = this.aspect * n, r = -0.5 * s;
    const o = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = o.fullWidth, c = o.fullHeight;
      r += o.offsetX * s / l, t -= o.offsetY * n / c, s *= o.width / l, n *= o.height / c;
    }
    const a = this.filmOffset;
    a !== 0 && (r += e * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + s, t, t - n, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const oi = -90, li = 1;
class Rd extends Lt {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const s = new Xt(oi, li, e, t);
    s.layers = this.layers, this.add(s);
    const r = new Xt(oi, li, e, t);
    r.layers = this.layers, this.add(r);
    const o = new Xt(oi, li, e, t);
    o.layers = this.layers, this.add(o);
    const a = new Xt(oi, li, e, t);
    a.layers = this.layers, this.add(a);
    const l = new Xt(oi, li, e, t);
    l.layers = this.layers, this.add(l);
    const c = new Xt(oi, li, e, t);
    c.layers = this.layers, this.add(c);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, s, r, o, a, l] = t;
    for (const c of t)
      this.remove(c);
    if (e === _n)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), s.up.set(0, 1, 0), s.lookAt(-1, 0, 0), r.up.set(0, 0, -1), r.lookAt(0, 1, 0), o.up.set(0, 0, 1), o.lookAt(0, -1, 0), a.up.set(0, 1, 0), a.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (e === ws)
      n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), s.up.set(0, -1, 0), s.lookAt(1, 0, 0), r.up.set(0, 0, 1), r.lookAt(0, 1, 0), o.up.set(0, 0, -1), o.lookAt(0, -1, 0), a.up.set(0, -1, 0), a.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const c of t)
      this.add(c), c.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: s } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [r, o, a, l, c, d] = this.children, u = e.getRenderTarget(), f = e.getActiveCubeFace(), g = e.getActiveMipmapLevel(), _ = e.xr.enabled;
    e.xr.enabled = !1;
    const v = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0, s), e.render(t, r), e.setRenderTarget(n, 1, s), e.render(t, o), e.setRenderTarget(n, 2, s), e.render(t, a), e.setRenderTarget(n, 3, s), e.render(t, l), e.setRenderTarget(n, 4, s), e.render(t, c), n.texture.generateMipmaps = v, e.setRenderTarget(n, 5, s), e.render(t, d), e.setRenderTarget(u, f, g), e.xr.enabled = _, n.texture.needsPMREMUpdate = !0;
  }
}
class cl extends Gt {
  constructor(e, t, n, s, r, o, a, l, c, d) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : mi, super(e, t, n, s, r, o, a, l, c, d), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Cd extends Xn {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, s = [n, n, n, n, n, n];
    t.encoding !== void 0 && (Di("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."), t.colorSpace = t.encoding === jn ? Ct : Qt), this.texture = new cl(s, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : Zt;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      )
    }, s = new Xe(5, 5, 5), r = new Yn({
      name: "CubemapFromEquirect",
      uniforms: _i(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: kt,
      blending: Rn
    });
    r.uniforms.tEquirect.value = t;
    const o = new we(s, r), a = t.minFilter;
    return t.minFilter === Fi && (t.minFilter = Zt), new Rd(1, 10, this).update(e, o), t.minFilter = a, o.geometry.dispose(), o.material.dispose(), this;
  }
  clear(e, t, n, s) {
    const r = e.getRenderTarget();
    for (let o = 0; o < 6; o++)
      e.setRenderTarget(this, o), e.clear(t, n, s);
    e.setRenderTarget(r);
  }
}
const lr = /* @__PURE__ */ new H(), Ld = /* @__PURE__ */ new H(), Pd = /* @__PURE__ */ new nt();
class Bn {
  constructor(e = new H(1, 0, 0), t = 0) {
    this.isPlane = !0, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, n, s) {
    return this.normal.set(e, t, n), this.constant = s, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const s = lr.subVectors(n, t).cross(Ld.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(s, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(lr), s = this.normal.dot(n);
    if (s === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const r = -(e.start.dot(this.normal) + this.constant) / s;
    return r < 0 || r > 1 ? null : t.copy(e.start).addScaledVector(n, r);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || Pd.getNormalMatrix(e), s = this.coplanarPoint(lr).applyMatrix4(e), r = this.normal.applyMatrix3(n).normalize();
    return this.constant = -s.dot(r), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const On = /* @__PURE__ */ new Ls(), os = /* @__PURE__ */ new H();
class kr {
  constructor(e = new Bn(), t = new Bn(), n = new Bn(), s = new Bn(), r = new Bn(), o = new Bn()) {
    this.planes = [e, t, n, s, r, o];
  }
  set(e, t, n, s, r, o) {
    const a = this.planes;
    return a[0].copy(e), a[1].copy(t), a[2].copy(n), a[3].copy(s), a[4].copy(r), a[5].copy(o), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = _n) {
    const n = this.planes, s = e.elements, r = s[0], o = s[1], a = s[2], l = s[3], c = s[4], d = s[5], u = s[6], f = s[7], g = s[8], _ = s[9], v = s[10], p = s[11], h = s[12], T = s[13], x = s[14], R = s[15];
    if (n[0].setComponents(l - r, f - c, p - g, R - h).normalize(), n[1].setComponents(l + r, f + c, p + g, R + h).normalize(), n[2].setComponents(l + o, f + d, p + _, R + T).normalize(), n[3].setComponents(l - o, f - d, p - _, R - T).normalize(), n[4].setComponents(l - a, f - u, p - v, R - x).normalize(), t === _n)
      n[5].setComponents(l + a, f + u, p + v, R + x).normalize();
    else if (t === ws)
      n[5].setComponents(a, u, v, x).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), On.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), On.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(On);
  }
  intersectsSprite(e) {
    return On.center.set(0, 0, 0), On.radius = 0.7071067811865476, On.applyMatrix4(e.matrixWorld), this.intersectsSphere(On);
  }
  intersectsSphere(e) {
    const t = this.planes, n = e.center, s = -e.radius;
    for (let r = 0; r < 6; r++)
      if (t[r].distanceToPoint(n) < s)
        return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const s = t[n];
      if (os.x = s.normal.x > 0 ? e.max.x : e.min.x, os.y = s.normal.y > 0 ? e.max.y : e.min.y, os.z = s.normal.z > 0 ? e.max.z : e.min.z, s.distanceToPoint(os) < 0)
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      if (t[n].distanceToPoint(e) < 0)
        return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function dl() {
  let i = null, e = !1, t = null, n = null;
  function s(r, o) {
    t(r, o), n = i.requestAnimationFrame(s);
  }
  return {
    start: function() {
      e !== !0 && t !== null && (n = i.requestAnimationFrame(s), e = !0);
    },
    stop: function() {
      i.cancelAnimationFrame(n), e = !1;
    },
    setAnimationLoop: function(r) {
      t = r;
    },
    setContext: function(r) {
      i = r;
    }
  };
}
function Nd(i, e) {
  const t = e.isWebGL2, n = /* @__PURE__ */ new WeakMap();
  function s(c, d) {
    const u = c.array, f = c.usage, g = u.byteLength, _ = i.createBuffer();
    i.bindBuffer(d, _), i.bufferData(d, u, f), c.onUploadCallback();
    let v;
    if (u instanceof Float32Array)
      v = i.FLOAT;
    else if (u instanceof Uint16Array)
      if (c.isFloat16BufferAttribute)
        if (t)
          v = i.HALF_FLOAT;
        else
          throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
      else
        v = i.UNSIGNED_SHORT;
    else if (u instanceof Int16Array)
      v = i.SHORT;
    else if (u instanceof Uint32Array)
      v = i.UNSIGNED_INT;
    else if (u instanceof Int32Array)
      v = i.INT;
    else if (u instanceof Int8Array)
      v = i.BYTE;
    else if (u instanceof Uint8Array)
      v = i.UNSIGNED_BYTE;
    else if (u instanceof Uint8ClampedArray)
      v = i.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + u);
    return {
      buffer: _,
      type: v,
      bytesPerElement: u.BYTES_PER_ELEMENT,
      version: c.version,
      size: g
    };
  }
  function r(c, d, u) {
    const f = d.array, g = d._updateRange, _ = d.updateRanges;
    if (i.bindBuffer(u, c), g.count === -1 && _.length === 0 && i.bufferSubData(u, 0, f), _.length !== 0) {
      for (let v = 0, p = _.length; v < p; v++) {
        const h = _[v];
        t ? i.bufferSubData(
          u,
          h.start * f.BYTES_PER_ELEMENT,
          f,
          h.start,
          h.count
        ) : i.bufferSubData(
          u,
          h.start * f.BYTES_PER_ELEMENT,
          f.subarray(h.start, h.start + h.count)
        );
      }
      d.clearUpdateRanges();
    }
    g.count !== -1 && (t ? i.bufferSubData(
      u,
      g.offset * f.BYTES_PER_ELEMENT,
      f,
      g.offset,
      g.count
    ) : i.bufferSubData(
      u,
      g.offset * f.BYTES_PER_ELEMENT,
      f.subarray(g.offset, g.offset + g.count)
    ), g.count = -1), d.onUploadCallback();
  }
  function o(c) {
    return c.isInterleavedBufferAttribute && (c = c.data), n.get(c);
  }
  function a(c) {
    c.isInterleavedBufferAttribute && (c = c.data);
    const d = n.get(c);
    d && (i.deleteBuffer(d.buffer), n.delete(c));
  }
  function l(c, d) {
    if (c.isGLBufferAttribute) {
      const f = n.get(c);
      (!f || f.version < c.version) && n.set(c, {
        buffer: c.buffer,
        type: c.type,
        bytesPerElement: c.elementSize,
        version: c.version
      });
      return;
    }
    c.isInterleavedBufferAttribute && (c = c.data);
    const u = n.get(c);
    if (u === void 0)
      n.set(c, s(c, d));
    else if (u.version < c.version) {
      if (u.size !== c.array.byteLength)
        throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      r(u.buffer, c, d), u.version = c.version;
    }
  }
  return {
    get: o,
    remove: a,
    update: l
  };
}
class Kt extends Yt {
  constructor(e = 1, t = 1, n = 1, s = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: s
    };
    const r = e / 2, o = t / 2, a = Math.floor(n), l = Math.floor(s), c = a + 1, d = l + 1, u = e / a, f = t / l, g = [], _ = [], v = [], p = [];
    for (let h = 0; h < d; h++) {
      const T = h * f - o;
      for (let x = 0; x < c; x++) {
        const R = x * u - r;
        _.push(R, -T, 0), v.push(0, 0, 1), p.push(x / a), p.push(1 - h / l);
      }
    }
    for (let h = 0; h < l; h++)
      for (let T = 0; T < a; T++) {
        const x = T + c * h, R = T + c * (h + 1), U = T + 1 + c * (h + 1), L = T + 1 + c * h;
        g.push(x, R, L), g.push(R, U, L);
      }
    this.setIndex(g), this.setAttribute("position", new Mt(_, 3)), this.setAttribute("normal", new Mt(v, 3)), this.setAttribute("uv", new Mt(p, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Kt(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var Dd = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, Ud = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, Id = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, Fd = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Od = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`, Bd = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, zd = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, kd = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Gd = `#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, Hd = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`, Vd = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Wd = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, jd = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, Xd = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, Yd = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, qd = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`, $d = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Kd = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Zd = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Jd = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Qd = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, eh = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, th = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, nh = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, ih = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, sh = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, rh = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, ah = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, oh = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, lh = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, ch = "gl_FragColor = linearToOutputTexel( gl_FragColor );", dh = `
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`, hh = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, uh = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, fh = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, ph = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, mh = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, gh = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, xh = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, _h = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, vh = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, yh = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, Mh = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, Sh = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, bh = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, Eh = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, wh = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, Th = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, Ah = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, Rh = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, Ch = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, Lh = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, Ph = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, Nh = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, Dh = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, Uh = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, Ih = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, Fh = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Oh = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Bh = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, zh = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, kh = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, Gh = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Hh = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, Vh = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Wh = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, jh = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Xh = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Yh = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`, qh = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`, $h = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`, Kh = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, Zh = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, Jh = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Qh = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, eu = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, tu = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, nu = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, iu = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, su = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, ru = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, au = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, ou = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, lu = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, cu = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, du = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, hu = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, uu = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, fu = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, pu = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`, mu = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, gu = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, xu = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, _u = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, vu = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, yu = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Mu = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, Su = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, bu = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Eu = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, wu = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, Tu = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, Au = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, Ru = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, Cu = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, Lu = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, Pu = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Nu = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, Du = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Uu = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Iu = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Fu = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Ou = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Bu = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, zu = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`, ku = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, Gu = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, Hu = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Vu = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Wu = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, ju = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Xu = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, Yu = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, qu = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, $u = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Ku = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, Zu = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Ju = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, Qu = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, ef = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, tf = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, nf = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, sf = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, rf = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, af = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, of = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, lf = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, cf = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, df = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, hf = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, uf = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Qe = {
  alphahash_fragment: Dd,
  alphahash_pars_fragment: Ud,
  alphamap_fragment: Id,
  alphamap_pars_fragment: Fd,
  alphatest_fragment: Od,
  alphatest_pars_fragment: Bd,
  aomap_fragment: zd,
  aomap_pars_fragment: kd,
  batching_pars_vertex: Gd,
  batching_vertex: Hd,
  begin_vertex: Vd,
  beginnormal_vertex: Wd,
  bsdfs: jd,
  iridescence_fragment: Xd,
  bumpmap_pars_fragment: Yd,
  clipping_planes_fragment: qd,
  clipping_planes_pars_fragment: $d,
  clipping_planes_pars_vertex: Kd,
  clipping_planes_vertex: Zd,
  color_fragment: Jd,
  color_pars_fragment: Qd,
  color_pars_vertex: eh,
  color_vertex: th,
  common: nh,
  cube_uv_reflection_fragment: ih,
  defaultnormal_vertex: sh,
  displacementmap_pars_vertex: rh,
  displacementmap_vertex: ah,
  emissivemap_fragment: oh,
  emissivemap_pars_fragment: lh,
  colorspace_fragment: ch,
  colorspace_pars_fragment: dh,
  envmap_fragment: hh,
  envmap_common_pars_fragment: uh,
  envmap_pars_fragment: fh,
  envmap_pars_vertex: ph,
  envmap_physical_pars_fragment: Th,
  envmap_vertex: mh,
  fog_vertex: gh,
  fog_pars_vertex: xh,
  fog_fragment: _h,
  fog_pars_fragment: vh,
  gradientmap_pars_fragment: yh,
  lightmap_fragment: Mh,
  lightmap_pars_fragment: Sh,
  lights_lambert_fragment: bh,
  lights_lambert_pars_fragment: Eh,
  lights_pars_begin: wh,
  lights_toon_fragment: Ah,
  lights_toon_pars_fragment: Rh,
  lights_phong_fragment: Ch,
  lights_phong_pars_fragment: Lh,
  lights_physical_fragment: Ph,
  lights_physical_pars_fragment: Nh,
  lights_fragment_begin: Dh,
  lights_fragment_maps: Uh,
  lights_fragment_end: Ih,
  logdepthbuf_fragment: Fh,
  logdepthbuf_pars_fragment: Oh,
  logdepthbuf_pars_vertex: Bh,
  logdepthbuf_vertex: zh,
  map_fragment: kh,
  map_pars_fragment: Gh,
  map_particle_fragment: Hh,
  map_particle_pars_fragment: Vh,
  metalnessmap_fragment: Wh,
  metalnessmap_pars_fragment: jh,
  morphcolor_vertex: Xh,
  morphnormal_vertex: Yh,
  morphtarget_pars_vertex: qh,
  morphtarget_vertex: $h,
  normal_fragment_begin: Kh,
  normal_fragment_maps: Zh,
  normal_pars_fragment: Jh,
  normal_pars_vertex: Qh,
  normal_vertex: eu,
  normalmap_pars_fragment: tu,
  clearcoat_normal_fragment_begin: nu,
  clearcoat_normal_fragment_maps: iu,
  clearcoat_pars_fragment: su,
  iridescence_pars_fragment: ru,
  opaque_fragment: au,
  packing: ou,
  premultiplied_alpha_fragment: lu,
  project_vertex: cu,
  dithering_fragment: du,
  dithering_pars_fragment: hu,
  roughnessmap_fragment: uu,
  roughnessmap_pars_fragment: fu,
  shadowmap_pars_fragment: pu,
  shadowmap_pars_vertex: mu,
  shadowmap_vertex: gu,
  shadowmask_pars_fragment: xu,
  skinbase_vertex: _u,
  skinning_pars_vertex: vu,
  skinning_vertex: yu,
  skinnormal_vertex: Mu,
  specularmap_fragment: Su,
  specularmap_pars_fragment: bu,
  tonemapping_fragment: Eu,
  tonemapping_pars_fragment: wu,
  transmission_fragment: Tu,
  transmission_pars_fragment: Au,
  uv_pars_fragment: Ru,
  uv_pars_vertex: Cu,
  uv_vertex: Lu,
  worldpos_vertex: Pu,
  background_vert: Nu,
  background_frag: Du,
  backgroundCube_vert: Uu,
  backgroundCube_frag: Iu,
  cube_vert: Fu,
  cube_frag: Ou,
  depth_vert: Bu,
  depth_frag: zu,
  distanceRGBA_vert: ku,
  distanceRGBA_frag: Gu,
  equirect_vert: Hu,
  equirect_frag: Vu,
  linedashed_vert: Wu,
  linedashed_frag: ju,
  meshbasic_vert: Xu,
  meshbasic_frag: Yu,
  meshlambert_vert: qu,
  meshlambert_frag: $u,
  meshmatcap_vert: Ku,
  meshmatcap_frag: Zu,
  meshnormal_vert: Ju,
  meshnormal_frag: Qu,
  meshphong_vert: ef,
  meshphong_frag: tf,
  meshphysical_vert: nf,
  meshphysical_frag: sf,
  meshtoon_vert: rf,
  meshtoon_frag: af,
  points_vert: of,
  points_frag: lf,
  shadow_vert: cf,
  shadow_frag: df,
  sprite_vert: hf,
  sprite_frag: uf
}, Re = {
  common: {
    diffuse: { value: /* @__PURE__ */ new et(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new nt() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new nt() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new nt() }
  },
  envmap: {
    envMap: { value: null },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    // basic, lambert, phong
    ior: { value: 1.5 },
    // physical
    refractionRatio: { value: 0.98 }
    // basic, lambert, phong
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 },
    aoMapTransform: { value: /* @__PURE__ */ new nt() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new nt() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new nt() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new nt() },
    normalScale: { value: /* @__PURE__ */ new rt(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new nt() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new nt() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new nt() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new nt() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new et(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotShadowMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    // TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new et(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new nt() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new nt() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new et(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new rt(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new nt() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new nt() },
    alphaTest: { value: 0 }
  }
}, an = {
  basic: {
    uniforms: /* @__PURE__ */ It([
      Re.common,
      Re.specularmap,
      Re.envmap,
      Re.aomap,
      Re.lightmap,
      Re.fog
    ]),
    vertexShader: Qe.meshbasic_vert,
    fragmentShader: Qe.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ It([
      Re.common,
      Re.specularmap,
      Re.envmap,
      Re.aomap,
      Re.lightmap,
      Re.emissivemap,
      Re.bumpmap,
      Re.normalmap,
      Re.displacementmap,
      Re.fog,
      Re.lights,
      {
        emissive: { value: /* @__PURE__ */ new et(0) }
      }
    ]),
    vertexShader: Qe.meshlambert_vert,
    fragmentShader: Qe.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ It([
      Re.common,
      Re.specularmap,
      Re.envmap,
      Re.aomap,
      Re.lightmap,
      Re.emissivemap,
      Re.bumpmap,
      Re.normalmap,
      Re.displacementmap,
      Re.fog,
      Re.lights,
      {
        emissive: { value: /* @__PURE__ */ new et(0) },
        specular: { value: /* @__PURE__ */ new et(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Qe.meshphong_vert,
    fragmentShader: Qe.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ It([
      Re.common,
      Re.envmap,
      Re.aomap,
      Re.lightmap,
      Re.emissivemap,
      Re.bumpmap,
      Re.normalmap,
      Re.displacementmap,
      Re.roughnessmap,
      Re.metalnessmap,
      Re.fog,
      Re.lights,
      {
        emissive: { value: /* @__PURE__ */ new et(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
        // temporary
      }
    ]),
    vertexShader: Qe.meshphysical_vert,
    fragmentShader: Qe.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ It([
      Re.common,
      Re.aomap,
      Re.lightmap,
      Re.emissivemap,
      Re.bumpmap,
      Re.normalmap,
      Re.displacementmap,
      Re.gradientmap,
      Re.fog,
      Re.lights,
      {
        emissive: { value: /* @__PURE__ */ new et(0) }
      }
    ]),
    vertexShader: Qe.meshtoon_vert,
    fragmentShader: Qe.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ It([
      Re.common,
      Re.bumpmap,
      Re.normalmap,
      Re.displacementmap,
      Re.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Qe.meshmatcap_vert,
    fragmentShader: Qe.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ It([
      Re.points,
      Re.fog
    ]),
    vertexShader: Qe.points_vert,
    fragmentShader: Qe.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ It([
      Re.common,
      Re.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Qe.linedashed_vert,
    fragmentShader: Qe.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ It([
      Re.common,
      Re.displacementmap
    ]),
    vertexShader: Qe.depth_vert,
    fragmentShader: Qe.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ It([
      Re.common,
      Re.bumpmap,
      Re.normalmap,
      Re.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Qe.meshnormal_vert,
    fragmentShader: Qe.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ It([
      Re.sprite,
      Re.fog
    ]),
    vertexShader: Qe.sprite_vert,
    fragmentShader: Qe.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new nt() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Qe.background_vert,
    fragmentShader: Qe.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Qe.backgroundCube_vert,
    fragmentShader: Qe.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Qe.cube_vert,
    fragmentShader: Qe.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Qe.equirect_vert,
    fragmentShader: Qe.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ It([
      Re.common,
      Re.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new H() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Qe.distanceRGBA_vert,
    fragmentShader: Qe.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ It([
      Re.lights,
      Re.fog,
      {
        color: { value: /* @__PURE__ */ new et(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Qe.shadow_vert,
    fragmentShader: Qe.shadow_frag
  }
};
an.physical = {
  uniforms: /* @__PURE__ */ It([
    an.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new nt() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new nt() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new rt(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new nt() },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new nt() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new nt() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new et(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new nt() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new nt() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new nt() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new rt() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new nt() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new et(0) },
      specularColor: { value: /* @__PURE__ */ new et(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new nt() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new nt() },
      anisotropyVector: { value: /* @__PURE__ */ new rt() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new nt() }
    }
  ]),
  vertexShader: Qe.meshphysical_vert,
  fragmentShader: Qe.meshphysical_frag
};
const ls = { r: 0, b: 0, g: 0 };
function ff(i, e, t, n, s, r, o) {
  const a = new et(0);
  let l = r === !0 ? 0 : 1, c, d, u = null, f = 0, g = null;
  function _(p, h) {
    let T = !1, x = h.isScene === !0 ? h.background : null;
    x && x.isTexture && (x = (h.backgroundBlurriness > 0 ? t : e).get(x)), x === null ? v(a, l) : x && x.isColor && (v(x, 1), T = !0);
    const R = i.xr.getEnvironmentBlendMode();
    R === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, o) : R === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, o), (i.autoClear || T) && i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil), x && (x.isCubeTexture || x.mapping === Rs) ? (d === void 0 && (d = new we(
      new Xe(1, 1, 1),
      new Yn({
        name: "BackgroundCubeMaterial",
        uniforms: _i(an.backgroundCube.uniforms),
        vertexShader: an.backgroundCube.vertexShader,
        fragmentShader: an.backgroundCube.fragmentShader,
        side: kt,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), d.geometry.deleteAttribute("normal"), d.geometry.deleteAttribute("uv"), d.onBeforeRender = function(U, L, C) {
      this.matrixWorld.copyPosition(C.matrixWorld);
    }, Object.defineProperty(d.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), s.update(d)), d.material.uniforms.envMap.value = x, d.material.uniforms.flipEnvMap.value = x.isCubeTexture && x.isRenderTargetTexture === !1 ? -1 : 1, d.material.uniforms.backgroundBlurriness.value = h.backgroundBlurriness, d.material.uniforms.backgroundIntensity.value = h.backgroundIntensity, d.material.toneMapped = pt.getTransfer(x.colorSpace) !== mt, (u !== x || f !== x.version || g !== i.toneMapping) && (d.material.needsUpdate = !0, u = x, f = x.version, g = i.toneMapping), d.layers.enableAll(), p.unshift(d, d.geometry, d.material, 0, 0, null)) : x && x.isTexture && (c === void 0 && (c = new we(
      new Kt(2, 2),
      new Yn({
        name: "BackgroundMaterial",
        uniforms: _i(an.background.uniforms),
        vertexShader: an.background.vertexShader,
        fragmentShader: an.background.fragmentShader,
        side: Pn,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), s.update(c)), c.material.uniforms.t2D.value = x, c.material.uniforms.backgroundIntensity.value = h.backgroundIntensity, c.material.toneMapped = pt.getTransfer(x.colorSpace) !== mt, x.matrixAutoUpdate === !0 && x.updateMatrix(), c.material.uniforms.uvTransform.value.copy(x.matrix), (u !== x || f !== x.version || g !== i.toneMapping) && (c.material.needsUpdate = !0, u = x, f = x.version, g = i.toneMapping), c.layers.enableAll(), p.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function v(p, h) {
    p.getRGB(ls, ol(i)), n.buffers.color.setClear(ls.r, ls.g, ls.b, h, o);
  }
  return {
    getClearColor: function() {
      return a;
    },
    setClearColor: function(p, h = 1) {
      a.set(p), l = h, v(a, l);
    },
    getClearAlpha: function() {
      return l;
    },
    setClearAlpha: function(p) {
      l = p, v(a, l);
    },
    render: _
  };
}
function pf(i, e, t, n) {
  const s = i.getParameter(i.MAX_VERTEX_ATTRIBS), r = n.isWebGL2 ? null : e.get("OES_vertex_array_object"), o = n.isWebGL2 || r !== null, a = {}, l = p(null);
  let c = l, d = !1;
  function u(N, Y, M, ne, K) {
    let j = !1;
    if (o) {
      const B = v(ne, M, Y);
      c !== B && (c = B, g(c.object)), j = h(N, ne, M, K), j && T(N, ne, M, K);
    } else {
      const B = Y.wireframe === !0;
      (c.geometry !== ne.id || c.program !== M.id || c.wireframe !== B) && (c.geometry = ne.id, c.program = M.id, c.wireframe = B, j = !0);
    }
    K !== null && t.update(K, i.ELEMENT_ARRAY_BUFFER), (j || d) && (d = !1, ee(N, Y, M, ne), K !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, t.get(K).buffer));
  }
  function f() {
    return n.isWebGL2 ? i.createVertexArray() : r.createVertexArrayOES();
  }
  function g(N) {
    return n.isWebGL2 ? i.bindVertexArray(N) : r.bindVertexArrayOES(N);
  }
  function _(N) {
    return n.isWebGL2 ? i.deleteVertexArray(N) : r.deleteVertexArrayOES(N);
  }
  function v(N, Y, M) {
    const ne = M.wireframe === !0;
    let K = a[N.id];
    K === void 0 && (K = {}, a[N.id] = K);
    let j = K[Y.id];
    j === void 0 && (j = {}, K[Y.id] = j);
    let B = j[ne];
    return B === void 0 && (B = p(f()), j[ne] = B), B;
  }
  function p(N) {
    const Y = [], M = [], ne = [];
    for (let K = 0; K < s; K++)
      Y[K] = 0, M[K] = 0, ne[K] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: Y,
      enabledAttributes: M,
      attributeDivisors: ne,
      object: N,
      attributes: {},
      index: null
    };
  }
  function h(N, Y, M, ne) {
    const K = c.attributes, j = Y.attributes;
    let B = 0;
    const J = M.getAttributes();
    for (const Z in J)
      if (J[Z].location >= 0) {
        const ie = K[Z];
        let le = j[Z];
        if (le === void 0 && (Z === "instanceMatrix" && N.instanceMatrix && (le = N.instanceMatrix), Z === "instanceColor" && N.instanceColor && (le = N.instanceColor)), ie === void 0 || ie.attribute !== le || le && ie.data !== le.data)
          return !0;
        B++;
      }
    return c.attributesNum !== B || c.index !== ne;
  }
  function T(N, Y, M, ne) {
    const K = {}, j = Y.attributes;
    let B = 0;
    const J = M.getAttributes();
    for (const Z in J)
      if (J[Z].location >= 0) {
        let ie = j[Z];
        ie === void 0 && (Z === "instanceMatrix" && N.instanceMatrix && (ie = N.instanceMatrix), Z === "instanceColor" && N.instanceColor && (ie = N.instanceColor));
        const le = {};
        le.attribute = ie, ie && ie.data && (le.data = ie.data), K[Z] = le, B++;
      }
    c.attributes = K, c.attributesNum = B, c.index = ne;
  }
  function x() {
    const N = c.newAttributes;
    for (let Y = 0, M = N.length; Y < M; Y++)
      N[Y] = 0;
  }
  function R(N) {
    U(N, 0);
  }
  function U(N, Y) {
    const M = c.newAttributes, ne = c.enabledAttributes, K = c.attributeDivisors;
    M[N] = 1, ne[N] === 0 && (i.enableVertexAttribArray(N), ne[N] = 1), K[N] !== Y && ((n.isWebGL2 ? i : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](N, Y), K[N] = Y);
  }
  function L() {
    const N = c.newAttributes, Y = c.enabledAttributes;
    for (let M = 0, ne = Y.length; M < ne; M++)
      Y[M] !== N[M] && (i.disableVertexAttribArray(M), Y[M] = 0);
  }
  function C(N, Y, M, ne, K, j, B) {
    B === !0 ? i.vertexAttribIPointer(N, Y, M, K, j) : i.vertexAttribPointer(N, Y, M, ne, K, j);
  }
  function ee(N, Y, M, ne) {
    if (n.isWebGL2 === !1 && (N.isInstancedMesh || ne.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null)
      return;
    x();
    const K = ne.attributes, j = M.getAttributes(), B = Y.defaultAttributeValues;
    for (const J in j) {
      const Z = j[J];
      if (Z.location >= 0) {
        let W = K[J];
        if (W === void 0 && (J === "instanceMatrix" && N.instanceMatrix && (W = N.instanceMatrix), J === "instanceColor" && N.instanceColor && (W = N.instanceColor)), W !== void 0) {
          const ie = W.normalized, le = W.itemSize, Me = t.get(W);
          if (Me === void 0)
            continue;
          const me = Me.buffer, Ue = Me.type, De = Me.bytesPerElement, pe = n.isWebGL2 === !0 && (Ue === i.INT || Ue === i.UNSIGNED_INT || W.gpuType === Go);
          if (W.isInterleavedBufferAttribute) {
            const xe = W.data, z = xe.stride, Te = W.offset;
            if (xe.isInstancedInterleavedBuffer) {
              for (let Ae = 0; Ae < Z.locationSize; Ae++)
                U(Z.location + Ae, xe.meshPerAttribute);
              N.isInstancedMesh !== !0 && ne._maxInstanceCount === void 0 && (ne._maxInstanceCount = xe.meshPerAttribute * xe.count);
            } else
              for (let Ae = 0; Ae < Z.locationSize; Ae++)
                R(Z.location + Ae);
            i.bindBuffer(i.ARRAY_BUFFER, me);
            for (let Ae = 0; Ae < Z.locationSize; Ae++)
              C(
                Z.location + Ae,
                le / Z.locationSize,
                Ue,
                ie,
                z * De,
                (Te + le / Z.locationSize * Ae) * De,
                pe
              );
          } else {
            if (W.isInstancedBufferAttribute) {
              for (let xe = 0; xe < Z.locationSize; xe++)
                U(Z.location + xe, W.meshPerAttribute);
              N.isInstancedMesh !== !0 && ne._maxInstanceCount === void 0 && (ne._maxInstanceCount = W.meshPerAttribute * W.count);
            } else
              for (let xe = 0; xe < Z.locationSize; xe++)
                R(Z.location + xe);
            i.bindBuffer(i.ARRAY_BUFFER, me);
            for (let xe = 0; xe < Z.locationSize; xe++)
              C(
                Z.location + xe,
                le / Z.locationSize,
                Ue,
                ie,
                le * De,
                le / Z.locationSize * xe * De,
                pe
              );
          }
        } else if (B !== void 0) {
          const ie = B[J];
          if (ie !== void 0)
            switch (ie.length) {
              case 2:
                i.vertexAttrib2fv(Z.location, ie);
                break;
              case 3:
                i.vertexAttrib3fv(Z.location, ie);
                break;
              case 4:
                i.vertexAttrib4fv(Z.location, ie);
                break;
              default:
                i.vertexAttrib1fv(Z.location, ie);
            }
        }
      }
    }
    L();
  }
  function E() {
    te();
    for (const N in a) {
      const Y = a[N];
      for (const M in Y) {
        const ne = Y[M];
        for (const K in ne)
          _(ne[K].object), delete ne[K];
        delete Y[M];
      }
      delete a[N];
    }
  }
  function A(N) {
    if (a[N.id] === void 0)
      return;
    const Y = a[N.id];
    for (const M in Y) {
      const ne = Y[M];
      for (const K in ne)
        _(ne[K].object), delete ne[K];
      delete Y[M];
    }
    delete a[N.id];
  }
  function O(N) {
    for (const Y in a) {
      const M = a[Y];
      if (M[N.id] === void 0)
        continue;
      const ne = M[N.id];
      for (const K in ne)
        _(ne[K].object), delete ne[K];
      delete M[N.id];
    }
  }
  function te() {
    ae(), d = !0, c !== l && (c = l, g(c.object));
  }
  function ae() {
    l.geometry = null, l.program = null, l.wireframe = !1;
  }
  return {
    setup: u,
    reset: te,
    resetDefaultState: ae,
    dispose: E,
    releaseStatesOfGeometry: A,
    releaseStatesOfProgram: O,
    initAttributes: x,
    enableAttribute: R,
    disableUnusedAttributes: L
  };
}
function mf(i, e, t, n) {
  const s = n.isWebGL2;
  let r;
  function o(d) {
    r = d;
  }
  function a(d, u) {
    i.drawArrays(r, d, u), t.update(u, r, 1);
  }
  function l(d, u, f) {
    if (f === 0)
      return;
    let g, _;
    if (s)
      g = i, _ = "drawArraysInstanced";
    else if (g = e.get("ANGLE_instanced_arrays"), _ = "drawArraysInstancedANGLE", g === null) {
      console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    g[_](r, d, u, f), t.update(u, r, f);
  }
  function c(d, u, f) {
    if (f === 0)
      return;
    const g = e.get("WEBGL_multi_draw");
    if (g === null)
      for (let _ = 0; _ < f; _++)
        this.render(d[_], u[_]);
    else {
      g.multiDrawArraysWEBGL(r, d, 0, u, 0, f);
      let _ = 0;
      for (let v = 0; v < f; v++)
        _ += u[v];
      t.update(_, r, 1);
    }
  }
  this.setMode = o, this.render = a, this.renderInstances = l, this.renderMultiDraw = c;
}
function gf(i, e, t) {
  let n;
  function s() {
    if (n !== void 0)
      return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const C = e.get("EXT_texture_filter_anisotropic");
      n = i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      n = 0;
    return n;
  }
  function r(C) {
    if (C === "highp") {
      if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0)
        return "highp";
      C = "mediump";
    }
    return C === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  const o = typeof WebGL2RenderingContext < "u" && i.constructor.name === "WebGL2RenderingContext";
  let a = t.precision !== void 0 ? t.precision : "highp";
  const l = r(a);
  l !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", l, "instead."), a = l);
  const c = o || e.has("WEBGL_draw_buffers"), d = t.logarithmicDepthBuffer === !0, u = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), f = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS), g = i.getParameter(i.MAX_TEXTURE_SIZE), _ = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), v = i.getParameter(i.MAX_VERTEX_ATTRIBS), p = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), h = i.getParameter(i.MAX_VARYING_VECTORS), T = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), x = f > 0, R = o || e.has("OES_texture_float"), U = x && R, L = o ? i.getParameter(i.MAX_SAMPLES) : 0;
  return {
    isWebGL2: o,
    drawBuffers: c,
    getMaxAnisotropy: s,
    getMaxPrecision: r,
    precision: a,
    logarithmicDepthBuffer: d,
    maxTextures: u,
    maxVertexTextures: f,
    maxTextureSize: g,
    maxCubemapSize: _,
    maxAttributes: v,
    maxVertexUniforms: p,
    maxVaryings: h,
    maxFragmentUniforms: T,
    vertexTextures: x,
    floatFragmentTextures: R,
    floatVertexTextures: U,
    maxSamples: L
  };
}
function xf(i) {
  const e = this;
  let t = null, n = 0, s = !1, r = !1;
  const o = new Bn(), a = new nt(), l = { value: null, needsUpdate: !1 };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(u, f) {
    const g = u.length !== 0 || f || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || s;
    return s = f, n = u.length, g;
  }, this.beginShadows = function() {
    r = !0, d(null);
  }, this.endShadows = function() {
    r = !1;
  }, this.setGlobalState = function(u, f) {
    t = d(u, f, 0);
  }, this.setState = function(u, f, g) {
    const _ = u.clippingPlanes, v = u.clipIntersection, p = u.clipShadows, h = i.get(u);
    if (!s || _ === null || _.length === 0 || r && !p)
      r ? d(null) : c();
    else {
      const T = r ? 0 : n, x = T * 4;
      let R = h.clippingState || null;
      l.value = R, R = d(_, f, x, g);
      for (let U = 0; U !== x; ++U)
        R[U] = t[U];
      h.clippingState = R, this.numIntersection = v ? this.numPlanes : 0, this.numPlanes += T;
    }
  };
  function c() {
    l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function d(u, f, g, _) {
    const v = u !== null ? u.length : 0;
    let p = null;
    if (v !== 0) {
      if (p = l.value, _ !== !0 || p === null) {
        const h = g + v * 4, T = f.matrixWorldInverse;
        a.getNormalMatrix(T), (p === null || p.length < h) && (p = new Float32Array(h));
        for (let x = 0, R = g; x !== v; ++x, R += 4)
          o.copy(u[x]).applyMatrix4(T, a), o.normal.toArray(p, R), p[R + 3] = o.constant;
      }
      l.value = p, l.needsUpdate = !0;
    }
    return e.numPlanes = v, e.numIntersection = 0, p;
  }
}
function _f(i) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(o, a) {
    return a === Ar ? o.mapping = mi : a === Rr && (o.mapping = gi), o;
  }
  function n(o) {
    if (o && o.isTexture) {
      const a = o.mapping;
      if (a === Ar || a === Rr)
        if (e.has(o)) {
          const l = e.get(o).texture;
          return t(l, o.mapping);
        } else {
          const l = o.image;
          if (l && l.height > 0) {
            const c = new Cd(l.height / 2);
            return c.fromEquirectangularTexture(i, o), e.set(o, c), o.addEventListener("dispose", s), t(c.texture, o.mapping);
          } else
            return null;
        }
    }
    return o;
  }
  function s(o) {
    const a = o.target;
    a.removeEventListener("dispose", s);
    const l = e.get(a);
    l !== void 0 && (e.delete(a), l.dispose());
  }
  function r() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: r
  };
}
class hl extends ll {
  constructor(e = -1, t = 1, n = 1, s = -1, r = 0.1, o = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = s, this.near = r, this.far = o, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, s, r, o) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = s, this.view.width = r, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, s = (this.top + this.bottom) / 2;
    let r = n - e, o = n + e, a = s + t, l = s - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, d = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      r += c * this.view.offsetX, o = r + c * this.view.width, a -= d * this.view.offsetY, l = a - d * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(r, o, a, l, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const di = 4, Ja = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], Hn = 20, cr = /* @__PURE__ */ new hl(), Qa = /* @__PURE__ */ new et();
let dr = null, hr = 0, ur = 0;
const zn = (1 + Math.sqrt(5)) / 2, ci = 1 / zn, eo = [
  /* @__PURE__ */ new H(1, 1, 1),
  /* @__PURE__ */ new H(-1, 1, 1),
  /* @__PURE__ */ new H(1, 1, -1),
  /* @__PURE__ */ new H(-1, 1, -1),
  /* @__PURE__ */ new H(0, zn, ci),
  /* @__PURE__ */ new H(0, zn, -ci),
  /* @__PURE__ */ new H(ci, 0, zn),
  /* @__PURE__ */ new H(-ci, 0, zn),
  /* @__PURE__ */ new H(zn, ci, 0),
  /* @__PURE__ */ new H(-zn, ci, 0)
];
class Ur {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  /**
   * Generates a PMREM from a supplied Scene, which can be faster than using an
   * image if networking bandwidth is low. Optional sigma specifies a blur radius
   * in radians to be applied to the scene before PMREM generation. Optional near
   * and far planes ensure the scene is rendered in its entirety (the cubeCamera
   * is placed at the origin).
   */
  fromScene(e, t = 0, n = 0.1, s = 100) {
    dr = this._renderer.getRenderTarget(), hr = this._renderer.getActiveCubeFace(), ur = this._renderer.getActiveMipmapLevel(), this._setSize(256);
    const r = this._allocateTargets();
    return r.depthBuffer = !0, this._sceneToCubeUV(e, n, s, r), t > 0 && this._blur(r, 0, 0, t), this._applyPMREM(r), this._cleanup(r), r;
  }
  /**
   * Generates a PMREM from an equirectangular texture, which can be either LDR
   * or HDR. The ideal input image size is 1k (1024 x 512),
   * as this matches best with the 256 x 256 cubemap output.
   */
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Generates a PMREM from an cubemap texture, which can be either LDR
   * or HDR. The ideal input cube size is 256 x 256,
   * as this matches best with the 256 x 256 cubemap output.
   */
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = io(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = no(), this._compileMaterial(this._equirectMaterial));
  }
  /**
   * Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
   * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
   * one of them will cause any others to also become unusable.
   */
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  // private interface
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(dr, hr, ur), e.scissorTest = !1, cs(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === mi || e.mapping === gi ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), dr = this._renderer.getRenderTarget(), hr = this._renderer.getActiveCubeFace(), ur = this._renderer.getActiveMipmapLevel();
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: Zt,
      minFilter: Zt,
      generateMipmaps: !1,
      type: Oi,
      format: rn,
      colorSpace: vn,
      depthBuffer: !1
    }, s = to(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = to(e, t, n);
      const { _lodMax: r } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = vf(r)), this._blurMaterial = yf(r, e, t);
    }
    return s;
  }
  _compileMaterial(e) {
    const t = new we(this._lodPlanes[0], e);
    this._renderer.compile(t, cr);
  }
  _sceneToCubeUV(e, t, n, s) {
    const a = new Xt(90, 1, t, n), l = [1, -1, 1, 1, 1, 1], c = [1, 1, 1, -1, -1, -1], d = this._renderer, u = d.autoClear, f = d.toneMapping;
    d.getClearColor(Qa), d.toneMapping = Cn, d.autoClear = !1;
    const g = new sl({
      name: "PMREM.Background",
      side: kt,
      depthWrite: !1,
      depthTest: !1
    }), _ = new we(new Xe(), g);
    let v = !1;
    const p = e.background;
    p ? p.isColor && (g.color.copy(p), e.background = null, v = !0) : (g.color.copy(Qa), v = !0);
    for (let h = 0; h < 6; h++) {
      const T = h % 3;
      T === 0 ? (a.up.set(0, l[h], 0), a.lookAt(c[h], 0, 0)) : T === 1 ? (a.up.set(0, 0, l[h]), a.lookAt(0, c[h], 0)) : (a.up.set(0, l[h], 0), a.lookAt(0, 0, c[h]));
      const x = this._cubeSize;
      cs(s, T * x, h > 2 ? x : 0, x, x), d.setRenderTarget(s), v && d.render(_, a), d.render(e, a);
    }
    _.geometry.dispose(), _.material.dispose(), d.toneMapping = f, d.autoClear = u, e.background = p;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, s = e.mapping === mi || e.mapping === gi;
    s ? (this._cubemapMaterial === null && (this._cubemapMaterial = io()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = no());
    const r = s ? this._cubemapMaterial : this._equirectMaterial, o = new we(this._lodPlanes[0], r), a = r.uniforms;
    a.envMap.value = e;
    const l = this._cubeSize;
    cs(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(o, cr);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    for (let s = 1; s < this._lodPlanes.length; s++) {
      const r = Math.sqrt(this._sigmas[s] * this._sigmas[s] - this._sigmas[s - 1] * this._sigmas[s - 1]), o = eo[(s - 1) % eo.length];
      this._blur(e, s - 1, s, r, o);
    }
    t.autoClear = n;
  }
  /**
   * This is a two-pass Gaussian blur for a cubemap. Normally this is done
   * vertically and horizontally, but this breaks down on a cube. Here we apply
   * the blur latitudinally (around the poles), and then longitudinally (towards
   * the poles) to approximate the orthogonally-separable blur. It is least
   * accurate at the poles, but still does a decent job.
   */
  _blur(e, t, n, s, r) {
    const o = this._pingPongRenderTarget;
    this._halfBlur(
      e,
      o,
      t,
      n,
      s,
      "latitudinal",
      r
    ), this._halfBlur(
      o,
      e,
      n,
      n,
      s,
      "longitudinal",
      r
    );
  }
  _halfBlur(e, t, n, s, r, o, a) {
    const l = this._renderer, c = this._blurMaterial;
    o !== "latitudinal" && o !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const d = 3, u = new we(this._lodPlanes[s], c), f = c.uniforms, g = this._sizeLods[n] - 1, _ = isFinite(r) ? Math.PI / (2 * g) : 2 * Math.PI / (2 * Hn - 1), v = r / _, p = isFinite(r) ? 1 + Math.floor(d * v) : Hn;
    p > Hn && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Hn}`);
    const h = [];
    let T = 0;
    for (let C = 0; C < Hn; ++C) {
      const ee = C / v, E = Math.exp(-ee * ee / 2);
      h.push(E), C === 0 ? T += E : C < p && (T += 2 * E);
    }
    for (let C = 0; C < h.length; C++)
      h[C] = h[C] / T;
    f.envMap.value = e.texture, f.samples.value = p, f.weights.value = h, f.latitudinal.value = o === "latitudinal", a && (f.poleAxis.value = a);
    const { _lodMax: x } = this;
    f.dTheta.value = _, f.mipInt.value = x - n;
    const R = this._sizeLods[s], U = 3 * R * (s > x - di ? s - x + di : 0), L = 4 * (this._cubeSize - R);
    cs(t, U, L, 3 * R, 2 * R), l.setRenderTarget(t), l.render(u, cr);
  }
}
function vf(i) {
  const e = [], t = [], n = [];
  let s = i;
  const r = i - di + 1 + Ja.length;
  for (let o = 0; o < r; o++) {
    const a = Math.pow(2, s);
    t.push(a);
    let l = 1 / a;
    o > i - di ? l = Ja[o - i + di - 1] : o === 0 && (l = 0), n.push(l);
    const c = 1 / (a - 2), d = -c, u = 1 + c, f = [d, d, u, d, u, u, d, d, u, u, d, u], g = 6, _ = 6, v = 3, p = 2, h = 1, T = new Float32Array(v * _ * g), x = new Float32Array(p * _ * g), R = new Float32Array(h * _ * g);
    for (let L = 0; L < g; L++) {
      const C = L % 3 * 2 / 3 - 1, ee = L > 2 ? 0 : -1, E = [
        C,
        ee,
        0,
        C + 2 / 3,
        ee,
        0,
        C + 2 / 3,
        ee + 1,
        0,
        C,
        ee,
        0,
        C + 2 / 3,
        ee + 1,
        0,
        C,
        ee + 1,
        0
      ];
      T.set(E, v * _ * L), x.set(f, p * _ * L);
      const A = [L, L, L, L, L, L];
      R.set(A, h * _ * L);
    }
    const U = new Yt();
    U.setAttribute("position", new ln(T, v)), U.setAttribute("uv", new ln(x, p)), U.setAttribute("faceIndex", new ln(R, h)), e.push(U), s > di && s--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function to(i, e, t) {
  const n = new Xn(i, e, t);
  return n.texture.mapping = Rs, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function cs(i, e, t, n, s) {
  i.viewport.set(e, t, n, s), i.scissor.set(e, t, n, s);
}
function yf(i, e, t) {
  const n = new Float32Array(Hn), s = new H(0, 1, 0);
  return new Yn({
    name: "SphericalGaussianBlur",
    defines: {
      n: Hn,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${i}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: s }
    },
    vertexShader: Gr(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`
    ),
    blending: Rn,
    depthTest: !1,
    depthWrite: !1
  });
}
function no() {
  return new Yn({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: Gr(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`
    ),
    blending: Rn,
    depthTest: !1,
    depthWrite: !1
  });
}
function io() {
  return new Yn({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: Gr(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`
    ),
    blending: Rn,
    depthTest: !1,
    depthWrite: !1
  });
}
function Gr() {
  return (
    /* glsl */
    `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
  );
}
function Mf(i) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(a) {
    if (a && a.isTexture) {
      const l = a.mapping, c = l === Ar || l === Rr, d = l === mi || l === gi;
      if (c || d)
        if (a.isRenderTargetTexture && a.needsPMREMUpdate === !0) {
          a.needsPMREMUpdate = !1;
          let u = e.get(a);
          return t === null && (t = new Ur(i)), u = c ? t.fromEquirectangular(a, u) : t.fromCubemap(a, u), e.set(a, u), u.texture;
        } else {
          if (e.has(a))
            return e.get(a).texture;
          {
            const u = a.image;
            if (c && u && u.height > 0 || d && u && s(u)) {
              t === null && (t = new Ur(i));
              const f = c ? t.fromEquirectangular(a) : t.fromCubemap(a);
              return e.set(a, f), a.addEventListener("dispose", r), f.texture;
            } else
              return null;
          }
        }
    }
    return a;
  }
  function s(a) {
    let l = 0;
    const c = 6;
    for (let d = 0; d < c; d++)
      a[d] !== void 0 && l++;
    return l === c;
  }
  function r(a) {
    const l = a.target;
    l.removeEventListener("dispose", r);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function o() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return {
    get: n,
    dispose: o
  };
}
function Sf(i) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0)
      return e[n];
    let s;
    switch (n) {
      case "WEBGL_depth_texture":
        s = i.getExtension("WEBGL_depth_texture") || i.getExtension("MOZ_WEBGL_depth_texture") || i.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        s = i.getExtension("EXT_texture_filter_anisotropic") || i.getExtension("MOZ_EXT_texture_filter_anisotropic") || i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        s = i.getExtension("WEBGL_compressed_texture_s3tc") || i.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        s = i.getExtension("WEBGL_compressed_texture_pvrtc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        s = i.getExtension(n);
    }
    return e[n] = s, s;
  }
  return {
    has: function(n) {
      return t(n) !== null;
    },
    init: function(n) {
      n.isWebGL2 ? (t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance")) : (t("WEBGL_depth_texture"), t("OES_texture_float"), t("OES_texture_half_float"), t("OES_texture_half_float_linear"), t("OES_standard_derivatives"), t("OES_element_index_uint"), t("OES_vertex_array_object"), t("ANGLE_instanced_arrays")), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture");
    },
    get: function(n) {
      const s = t(n);
      return s === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), s;
    }
  };
}
function bf(i, e, t, n) {
  const s = {}, r = /* @__PURE__ */ new WeakMap();
  function o(u) {
    const f = u.target;
    f.index !== null && e.remove(f.index);
    for (const _ in f.attributes)
      e.remove(f.attributes[_]);
    for (const _ in f.morphAttributes) {
      const v = f.morphAttributes[_];
      for (let p = 0, h = v.length; p < h; p++)
        e.remove(v[p]);
    }
    f.removeEventListener("dispose", o), delete s[f.id];
    const g = r.get(f);
    g && (e.remove(g), r.delete(f)), n.releaseStatesOfGeometry(f), f.isInstancedBufferGeometry === !0 && delete f._maxInstanceCount, t.memory.geometries--;
  }
  function a(u, f) {
    return s[f.id] === !0 || (f.addEventListener("dispose", o), s[f.id] = !0, t.memory.geometries++), f;
  }
  function l(u) {
    const f = u.attributes;
    for (const _ in f)
      e.update(f[_], i.ARRAY_BUFFER);
    const g = u.morphAttributes;
    for (const _ in g) {
      const v = g[_];
      for (let p = 0, h = v.length; p < h; p++)
        e.update(v[p], i.ARRAY_BUFFER);
    }
  }
  function c(u) {
    const f = [], g = u.index, _ = u.attributes.position;
    let v = 0;
    if (g !== null) {
      const T = g.array;
      v = g.version;
      for (let x = 0, R = T.length; x < R; x += 3) {
        const U = T[x + 0], L = T[x + 1], C = T[x + 2];
        f.push(U, L, L, C, C, U);
      }
    } else if (_ !== void 0) {
      const T = _.array;
      v = _.version;
      for (let x = 0, R = T.length / 3 - 1; x < R; x += 3) {
        const U = x + 0, L = x + 1, C = x + 2;
        f.push(U, L, L, C, C, U);
      }
    } else
      return;
    const p = new (Zo(f) ? al : rl)(f, 1);
    p.version = v;
    const h = r.get(u);
    h && e.remove(h), r.set(u, p);
  }
  function d(u) {
    const f = r.get(u);
    if (f) {
      const g = u.index;
      g !== null && f.version < g.version && c(u);
    } else
      c(u);
    return r.get(u);
  }
  return {
    get: a,
    update: l,
    getWireframeAttribute: d
  };
}
function Ef(i, e, t, n) {
  const s = n.isWebGL2;
  let r;
  function o(g) {
    r = g;
  }
  let a, l;
  function c(g) {
    a = g.type, l = g.bytesPerElement;
  }
  function d(g, _) {
    i.drawElements(r, _, a, g * l), t.update(_, r, 1);
  }
  function u(g, _, v) {
    if (v === 0)
      return;
    let p, h;
    if (s)
      p = i, h = "drawElementsInstanced";
    else if (p = e.get("ANGLE_instanced_arrays"), h = "drawElementsInstancedANGLE", p === null) {
      console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    p[h](r, _, a, g * l, v), t.update(_, r, v);
  }
  function f(g, _, v) {
    if (v === 0)
      return;
    const p = e.get("WEBGL_multi_draw");
    if (p === null)
      for (let h = 0; h < v; h++)
        this.render(g[h] / l, _[h]);
    else {
      p.multiDrawElementsWEBGL(r, _, 0, a, g, 0, v);
      let h = 0;
      for (let T = 0; T < v; T++)
        h += _[T];
      t.update(h, r, 1);
    }
  }
  this.setMode = o, this.setIndex = c, this.render = d, this.renderInstances = u, this.renderMultiDraw = f;
}
function wf(i) {
  const e = {
    geometries: 0,
    textures: 0
  }, t = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(r, o, a) {
    switch (t.calls++, o) {
      case i.TRIANGLES:
        t.triangles += a * (r / 3);
        break;
      case i.LINES:
        t.lines += a * (r / 2);
        break;
      case i.LINE_STRIP:
        t.lines += a * (r - 1);
        break;
      case i.LINE_LOOP:
        t.lines += a * r;
        break;
      case i.POINTS:
        t.points += a * r;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", o);
        break;
    }
  }
  function s() {
    t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: s,
    update: n
  };
}
function Tf(i, e) {
  return i[0] - e[0];
}
function Af(i, e) {
  return Math.abs(e[1]) - Math.abs(i[1]);
}
function Rf(i, e, t) {
  const n = {}, s = new Float32Array(8), r = /* @__PURE__ */ new WeakMap(), o = new gt(), a = [];
  for (let c = 0; c < 8; c++)
    a[c] = [c, 0];
  function l(c, d, u) {
    const f = c.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const g = d.morphAttributes.position || d.morphAttributes.normal || d.morphAttributes.color, _ = g !== void 0 ? g.length : 0;
      let v = r.get(d);
      if (v === void 0 || v.count !== _) {
        let N = function() {
          te.dispose(), r.delete(d), d.removeEventListener("dispose", N);
        };
        v !== void 0 && v.texture.dispose();
        const T = d.morphAttributes.position !== void 0, x = d.morphAttributes.normal !== void 0, R = d.morphAttributes.color !== void 0, U = d.morphAttributes.position || [], L = d.morphAttributes.normal || [], C = d.morphAttributes.color || [];
        let ee = 0;
        T === !0 && (ee = 1), x === !0 && (ee = 2), R === !0 && (ee = 3);
        let E = d.attributes.position.count * ee, A = 1;
        E > e.maxTextureSize && (A = Math.ceil(E / e.maxTextureSize), E = e.maxTextureSize);
        const O = new Float32Array(E * A * 4 * _), te = new el(O, E, A, _);
        te.type = An, te.needsUpdate = !0;
        const ae = ee * 4;
        for (let Y = 0; Y < _; Y++) {
          const M = U[Y], ne = L[Y], K = C[Y], j = E * A * 4 * Y;
          for (let B = 0; B < M.count; B++) {
            const J = B * ae;
            T === !0 && (o.fromBufferAttribute(M, B), O[j + J + 0] = o.x, O[j + J + 1] = o.y, O[j + J + 2] = o.z, O[j + J + 3] = 0), x === !0 && (o.fromBufferAttribute(ne, B), O[j + J + 4] = o.x, O[j + J + 5] = o.y, O[j + J + 6] = o.z, O[j + J + 7] = 0), R === !0 && (o.fromBufferAttribute(K, B), O[j + J + 8] = o.x, O[j + J + 9] = o.y, O[j + J + 10] = o.z, O[j + J + 11] = K.itemSize === 4 ? o.w : 1);
          }
        }
        v = {
          count: _,
          texture: te,
          size: new rt(E, A)
        }, r.set(d, v), d.addEventListener("dispose", N);
      }
      let p = 0;
      for (let T = 0; T < f.length; T++)
        p += f[T];
      const h = d.morphTargetsRelative ? 1 : 1 - p;
      u.getUniforms().setValue(i, "morphTargetBaseInfluence", h), u.getUniforms().setValue(i, "morphTargetInfluences", f), u.getUniforms().setValue(i, "morphTargetsTexture", v.texture, t), u.getUniforms().setValue(i, "morphTargetsTextureSize", v.size);
    } else {
      const g = f === void 0 ? 0 : f.length;
      let _ = n[d.id];
      if (_ === void 0 || _.length !== g) {
        _ = [];
        for (let x = 0; x < g; x++)
          _[x] = [x, 0];
        n[d.id] = _;
      }
      for (let x = 0; x < g; x++) {
        const R = _[x];
        R[0] = x, R[1] = f[x];
      }
      _.sort(Af);
      for (let x = 0; x < 8; x++)
        x < g && _[x][1] ? (a[x][0] = _[x][0], a[x][1] = _[x][1]) : (a[x][0] = Number.MAX_SAFE_INTEGER, a[x][1] = 0);
      a.sort(Tf);
      const v = d.morphAttributes.position, p = d.morphAttributes.normal;
      let h = 0;
      for (let x = 0; x < 8; x++) {
        const R = a[x], U = R[0], L = R[1];
        U !== Number.MAX_SAFE_INTEGER && L ? (v && d.getAttribute("morphTarget" + x) !== v[U] && d.setAttribute("morphTarget" + x, v[U]), p && d.getAttribute("morphNormal" + x) !== p[U] && d.setAttribute("morphNormal" + x, p[U]), s[x] = L, h += L) : (v && d.hasAttribute("morphTarget" + x) === !0 && d.deleteAttribute("morphTarget" + x), p && d.hasAttribute("morphNormal" + x) === !0 && d.deleteAttribute("morphNormal" + x), s[x] = 0);
      }
      const T = d.morphTargetsRelative ? 1 : 1 - h;
      u.getUniforms().setValue(i, "morphTargetBaseInfluence", T), u.getUniforms().setValue(i, "morphTargetInfluences", s);
    }
  }
  return {
    update: l
  };
}
function Cf(i, e, t, n) {
  let s = /* @__PURE__ */ new WeakMap();
  function r(l) {
    const c = n.render.frame, d = l.geometry, u = e.get(l, d);
    if (s.get(u) !== c && (e.update(u), s.set(u, c)), l.isInstancedMesh && (l.hasEventListener("dispose", a) === !1 && l.addEventListener("dispose", a), s.get(l) !== c && (t.update(l.instanceMatrix, i.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, i.ARRAY_BUFFER), s.set(l, c))), l.isSkinnedMesh) {
      const f = l.skeleton;
      s.get(f) !== c && (f.update(), s.set(f, c));
    }
    return u;
  }
  function o() {
    s = /* @__PURE__ */ new WeakMap();
  }
  function a(l) {
    const c = l.target;
    c.removeEventListener("dispose", a), t.remove(c.instanceMatrix), c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return {
    update: r,
    dispose: o
  };
}
class ul extends Gt {
  constructor(e, t, n, s, r, o, a, l, c, d) {
    if (d = d !== void 0 ? d : Wn, d !== Wn && d !== xi)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && d === Wn && (n = Tn), n === void 0 && d === xi && (n = Vn), super(null, s, r, o, a, l, d, n, c), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = a !== void 0 ? a : Ft, this.minFilter = l !== void 0 ? l : Ft, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
const fl = /* @__PURE__ */ new Gt(), pl = /* @__PURE__ */ new ul(1, 1);
pl.compareFunction = Ko;
const ml = /* @__PURE__ */ new el(), gl = /* @__PURE__ */ new ud(), xl = /* @__PURE__ */ new cl(), so = [], ro = [], ao = new Float32Array(16), oo = new Float32Array(9), lo = new Float32Array(4);
function Mi(i, e, t) {
  const n = i[0];
  if (n <= 0 || n > 0)
    return i;
  const s = e * t;
  let r = so[s];
  if (r === void 0 && (r = new Float32Array(s), so[s] = r), e !== 0) {
    n.toArray(r, 0);
    for (let o = 1, a = 0; o !== e; ++o)
      a += t, i[o].toArray(r, a);
  }
  return r;
}
function wt(i, e) {
  if (i.length !== e.length)
    return !1;
  for (let t = 0, n = i.length; t < n; t++)
    if (i[t] !== e[t])
      return !1;
  return !0;
}
function Tt(i, e) {
  for (let t = 0, n = e.length; t < n; t++)
    i[t] = e[t];
}
function Ns(i, e) {
  let t = ro[e];
  t === void 0 && (t = new Int32Array(e), ro[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = i.allocateTextureUnit();
  return t;
}
function Lf(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1f(this.addr, e), t[0] = e);
}
function Pf(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (wt(t, e))
      return;
    i.uniform2fv(this.addr, e), Tt(t, e);
  }
}
function Nf(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (i.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (wt(t, e))
      return;
    i.uniform3fv(this.addr, e), Tt(t, e);
  }
}
function Df(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (wt(t, e))
      return;
    i.uniform4fv(this.addr, e), Tt(t, e);
  }
}
function Uf(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (wt(t, e))
      return;
    i.uniformMatrix2fv(this.addr, !1, e), Tt(t, e);
  } else {
    if (wt(t, n))
      return;
    lo.set(n), i.uniformMatrix2fv(this.addr, !1, lo), Tt(t, n);
  }
}
function If(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (wt(t, e))
      return;
    i.uniformMatrix3fv(this.addr, !1, e), Tt(t, e);
  } else {
    if (wt(t, n))
      return;
    oo.set(n), i.uniformMatrix3fv(this.addr, !1, oo), Tt(t, n);
  }
}
function Ff(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (wt(t, e))
      return;
    i.uniformMatrix4fv(this.addr, !1, e), Tt(t, e);
  } else {
    if (wt(t, n))
      return;
    ao.set(n), i.uniformMatrix4fv(this.addr, !1, ao), Tt(t, n);
  }
}
function Of(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1i(this.addr, e), t[0] = e);
}
function Bf(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (wt(t, e))
      return;
    i.uniform2iv(this.addr, e), Tt(t, e);
  }
}
function zf(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (wt(t, e))
      return;
    i.uniform3iv(this.addr, e), Tt(t, e);
  }
}
function kf(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (wt(t, e))
      return;
    i.uniform4iv(this.addr, e), Tt(t, e);
  }
}
function Gf(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1ui(this.addr, e), t[0] = e);
}
function Hf(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (wt(t, e))
      return;
    i.uniform2uiv(this.addr, e), Tt(t, e);
  }
}
function Vf(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (wt(t, e))
      return;
    i.uniform3uiv(this.addr, e), Tt(t, e);
  }
}
function Wf(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (wt(t, e))
      return;
    i.uniform4uiv(this.addr, e), Tt(t, e);
  }
}
function jf(i, e, t) {
  const n = this.cache, s = t.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s);
  const r = this.type === i.SAMPLER_2D_SHADOW ? pl : fl;
  t.setTexture2D(e || r, s);
}
function Xf(i, e, t) {
  const n = this.cache, s = t.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), t.setTexture3D(e || gl, s);
}
function Yf(i, e, t) {
  const n = this.cache, s = t.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), t.setTextureCube(e || xl, s);
}
function qf(i, e, t) {
  const n = this.cache, s = t.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), t.setTexture2DArray(e || ml, s);
}
function $f(i) {
  switch (i) {
    case 5126:
      return Lf;
    case 35664:
      return Pf;
    case 35665:
      return Nf;
    case 35666:
      return Df;
    case 35674:
      return Uf;
    case 35675:
      return If;
    case 35676:
      return Ff;
    case 5124:
    case 35670:
      return Of;
    case 35667:
    case 35671:
      return Bf;
    case 35668:
    case 35672:
      return zf;
    case 35669:
    case 35673:
      return kf;
    case 5125:
      return Gf;
    case 36294:
      return Hf;
    case 36295:
      return Vf;
    case 36296:
      return Wf;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return jf;
    case 35679:
    case 36299:
    case 36307:
      return Xf;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Yf;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return qf;
  }
}
function Kf(i, e) {
  i.uniform1fv(this.addr, e);
}
function Zf(i, e) {
  const t = Mi(e, this.size, 2);
  i.uniform2fv(this.addr, t);
}
function Jf(i, e) {
  const t = Mi(e, this.size, 3);
  i.uniform3fv(this.addr, t);
}
function Qf(i, e) {
  const t = Mi(e, this.size, 4);
  i.uniform4fv(this.addr, t);
}
function ep(i, e) {
  const t = Mi(e, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, t);
}
function tp(i, e) {
  const t = Mi(e, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, t);
}
function np(i, e) {
  const t = Mi(e, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, t);
}
function ip(i, e) {
  i.uniform1iv(this.addr, e);
}
function sp(i, e) {
  i.uniform2iv(this.addr, e);
}
function rp(i, e) {
  i.uniform3iv(this.addr, e);
}
function ap(i, e) {
  i.uniform4iv(this.addr, e);
}
function op(i, e) {
  i.uniform1uiv(this.addr, e);
}
function lp(i, e) {
  i.uniform2uiv(this.addr, e);
}
function cp(i, e) {
  i.uniform3uiv(this.addr, e);
}
function dp(i, e) {
  i.uniform4uiv(this.addr, e);
}
function hp(i, e, t) {
  const n = this.cache, s = e.length, r = Ns(t, s);
  wt(n, r) || (i.uniform1iv(this.addr, r), Tt(n, r));
  for (let o = 0; o !== s; ++o)
    t.setTexture2D(e[o] || fl, r[o]);
}
function up(i, e, t) {
  const n = this.cache, s = e.length, r = Ns(t, s);
  wt(n, r) || (i.uniform1iv(this.addr, r), Tt(n, r));
  for (let o = 0; o !== s; ++o)
    t.setTexture3D(e[o] || gl, r[o]);
}
function fp(i, e, t) {
  const n = this.cache, s = e.length, r = Ns(t, s);
  wt(n, r) || (i.uniform1iv(this.addr, r), Tt(n, r));
  for (let o = 0; o !== s; ++o)
    t.setTextureCube(e[o] || xl, r[o]);
}
function pp(i, e, t) {
  const n = this.cache, s = e.length, r = Ns(t, s);
  wt(n, r) || (i.uniform1iv(this.addr, r), Tt(n, r));
  for (let o = 0; o !== s; ++o)
    t.setTexture2DArray(e[o] || ml, r[o]);
}
function mp(i) {
  switch (i) {
    case 5126:
      return Kf;
    case 35664:
      return Zf;
    case 35665:
      return Jf;
    case 35666:
      return Qf;
    case 35674:
      return ep;
    case 35675:
      return tp;
    case 35676:
      return np;
    case 5124:
    case 35670:
      return ip;
    case 35667:
    case 35671:
      return sp;
    case 35668:
    case 35672:
      return rp;
    case 35669:
    case 35673:
      return ap;
    case 5125:
      return op;
    case 36294:
      return lp;
    case 36295:
      return cp;
    case 36296:
      return dp;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return hp;
    case 35679:
    case 36299:
    case 36307:
      return up;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return fp;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return pp;
  }
}
class gp {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = $f(t.type);
  }
}
class xp {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = mp(t.type);
  }
}
class _p {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const s = this.seq;
    for (let r = 0, o = s.length; r !== o; ++r) {
      const a = s[r];
      a.setValue(e, t[a.id], n);
    }
  }
}
const fr = /(\w+)(\])?(\[|\.)?/g;
function co(i, e) {
  i.seq.push(e), i.map[e.id] = e;
}
function vp(i, e, t) {
  const n = i.name, s = n.length;
  for (fr.lastIndex = 0; ; ) {
    const r = fr.exec(n), o = fr.lastIndex;
    let a = r[1];
    const l = r[2] === "]", c = r[3];
    if (l && (a = a | 0), c === void 0 || c === "[" && o + 2 === s) {
      co(t, c === void 0 ? new gp(a, i, e) : new xp(a, i, e));
      break;
    } else {
      let u = t.map[a];
      u === void 0 && (u = new _p(a), co(t, u)), t = u;
    }
  }
}
class xs {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let s = 0; s < n; ++s) {
      const r = e.getActiveUniform(t, s), o = e.getUniformLocation(t, r.name);
      vp(r, o, this);
    }
  }
  setValue(e, t, n, s) {
    const r = this.map[t];
    r !== void 0 && r.setValue(e, n, s);
  }
  setOptional(e, t, n) {
    const s = t[n];
    s !== void 0 && this.setValue(e, n, s);
  }
  static upload(e, t, n, s) {
    for (let r = 0, o = t.length; r !== o; ++r) {
      const a = t[r], l = n[a.id];
      l.needsUpdate !== !1 && a.setValue(e, l.value, s);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let s = 0, r = e.length; s !== r; ++s) {
      const o = e[s];
      o.id in t && n.push(o);
    }
    return n;
  }
}
function ho(i, e, t) {
  const n = i.createShader(e);
  return i.shaderSource(n, t), i.compileShader(n), n;
}
const yp = 37297;
let Mp = 0;
function Sp(i, e) {
  const t = i.split(`
`), n = [], s = Math.max(e - 6, 0), r = Math.min(e + 6, t.length);
  for (let o = s; o < r; o++) {
    const a = o + 1;
    n.push(`${a === e ? ">" : " "} ${a}: ${t[o]}`);
  }
  return n.join(`
`);
}
function bp(i) {
  const e = pt.getPrimaries(pt.workingColorSpace), t = pt.getPrimaries(i);
  let n;
  switch (e === t ? n = "" : e === Es && t === bs ? n = "LinearDisplayP3ToLinearSRGB" : e === bs && t === Es && (n = "LinearSRGBToLinearDisplayP3"), i) {
    case vn:
    case Cs:
      return [n, "LinearTransferOETF"];
    case Ct:
    case zr:
      return [n, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space:", i), [n, "LinearTransferOETF"];
  }
}
function uo(i, e, t) {
  const n = i.getShaderParameter(e, i.COMPILE_STATUS), s = i.getShaderInfoLog(e).trim();
  if (n && s === "")
    return "";
  const r = /ERROR: 0:(\d+)/.exec(s);
  if (r) {
    const o = parseInt(r[1]);
    return t.toUpperCase() + `

` + s + `

` + Sp(i.getShaderSource(e), o);
  } else
    return s;
}
function Ep(i, e) {
  const t = bp(e);
  return `vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`;
}
function wp(i, e) {
  let t;
  switch (e) {
    case Fc:
      t = "Linear";
      break;
    case Oc:
      t = "Reinhard";
      break;
    case Bc:
      t = "OptimizedCineon";
      break;
    case zo:
      t = "ACESFilmic";
      break;
    case kc:
      t = "AgX";
      break;
    case zc:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + i + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
function Tp(i) {
  return [
    i.extensionDerivatives || i.envMapCubeUVHeight || i.bumpMap || i.normalMapTangentSpace || i.clearcoatNormalMap || i.flatShading || i.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
    (i.extensionFragDepth || i.logarithmicDepthBuffer) && i.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
    i.extensionDrawBuffers && i.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
    (i.extensionShaderTextureLOD || i.envMap || i.transmission) && i.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
  ].filter(hi).join(`
`);
}
function Ap(i) {
  return [
    i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : ""
  ].filter(hi).join(`
`);
}
function Rp(i) {
  const e = [];
  for (const t in i) {
    const n = i[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function Cp(i, e) {
  const t = {}, n = i.getProgramParameter(e, i.ACTIVE_ATTRIBUTES);
  for (let s = 0; s < n; s++) {
    const r = i.getActiveAttrib(e, s), o = r.name;
    let a = 1;
    r.type === i.FLOAT_MAT2 && (a = 2), r.type === i.FLOAT_MAT3 && (a = 3), r.type === i.FLOAT_MAT4 && (a = 4), t[o] = {
      type: r.type,
      location: i.getAttribLocation(e, o),
      locationSize: a
    };
  }
  return t;
}
function hi(i) {
  return i !== "";
}
function fo(i, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return i.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function po(i, e) {
  return i.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const Lp = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Ir(i) {
  return i.replace(Lp, Np);
}
const Pp = /* @__PURE__ */ new Map([
  ["encodings_fragment", "colorspace_fragment"],
  // @deprecated, r154
  ["encodings_pars_fragment", "colorspace_pars_fragment"],
  // @deprecated, r154
  ["output_fragment", "opaque_fragment"]
  // @deprecated, r154
]);
function Np(i, e) {
  let t = Qe[e];
  if (t === void 0) {
    const n = Pp.get(e);
    if (n !== void 0)
      t = Qe[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else
      throw new Error("Can not resolve #include <" + e + ">");
  }
  return Ir(t);
}
const Dp = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function mo(i) {
  return i.replace(Dp, Up);
}
function Up(i, e, t, n) {
  let s = "";
  for (let r = parseInt(e); r < parseInt(t); r++)
    s += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
  return s;
}
function go(i) {
  let e = "precision " + i.precision + ` float;
precision ` + i.precision + " int;";
  return i.precision === "highp" ? e += `
#define HIGH_PRECISION` : i.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : i.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function Ip(i) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return i.shadowMapType === Fo ? e = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === Oo ? e = "SHADOWMAP_TYPE_PCF_SOFT" : i.shadowMapType === gn && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function Fp(i) {
  let e = "ENVMAP_TYPE_CUBE";
  if (i.envMap)
    switch (i.envMapMode) {
      case mi:
      case gi:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case Rs:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function Op(i) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (i.envMap)
    switch (i.envMapMode) {
      case gi:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function Bp(i) {
  let e = "ENVMAP_BLENDING_NONE";
  if (i.envMap)
    switch (i.combine) {
      case Bo:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case Uc:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case Ic:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function zp(i) {
  const e = i.envMapCubeUVHeight;
  if (e === null)
    return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function kp(i, e, t, n) {
  const s = i.getContext(), r = t.defines;
  let o = t.vertexShader, a = t.fragmentShader;
  const l = Ip(t), c = Fp(t), d = Op(t), u = Bp(t), f = zp(t), g = t.isWebGL2 ? "" : Tp(t), _ = Ap(t), v = Rp(r), p = s.createProgram();
  let h, T, x = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (h = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    v
  ].filter(hi).join(`
`), h.length > 0 && (h += `
`), T = [
    g,
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    v
  ].filter(hi).join(`
`), T.length > 0 && (T += `
`)) : (h = [
    go(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    v,
    t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
    t.batching ? "#define USE_BATCHING" : "",
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + d : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    //
    t.mapUv ? "#define MAP_UV " + t.mapUv : "",
    t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
    t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
    t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
    t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
    t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
    t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
    t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "",
    t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
    t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
    t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "",
    t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
    t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "",
    t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "",
    t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "",
    t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "",
    t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "",
    t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "",
    t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
    t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "",
    t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "",
    t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "",
    t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
    //
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.skinning ? "#define USE_SKINNING" : "",
    t.morphTargets ? "#define USE_MORPHTARGETS" : "",
    t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + l : "",
    t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_UV1",
    "	attribute vec2 uv1;",
    "#endif",
    "#ifdef USE_UV2",
    "	attribute vec2 uv2;",
    "#endif",
    "#ifdef USE_UV3",
    "	attribute vec2 uv3;",
    "#endif",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
    "	attribute vec3 morphTarget0;",
    "	attribute vec3 morphTarget1;",
    "	attribute vec3 morphTarget2;",
    "	attribute vec3 morphTarget3;",
    "	#ifdef USE_MORPHNORMALS",
    "		attribute vec3 morphNormal0;",
    "		attribute vec3 morphNormal1;",
    "		attribute vec3 morphNormal2;",
    "		attribute vec3 morphNormal3;",
    "	#else",
    "		attribute vec3 morphTarget4;",
    "		attribute vec3 morphTarget5;",
    "		attribute vec3 morphTarget6;",
    "		attribute vec3 morphTarget7;",
    "	#endif",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(hi).join(`
`), T = [
    g,
    go(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    v,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + c : "",
    t.envMap ? "#define " + d : "",
    t.envMap ? "#define " + u : "",
    f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "",
    f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "",
    f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoat ? "#define USE_CLEARCOAT" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescence ? "#define USE_IRIDESCENCE" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaTest ? "#define USE_ALPHATEST" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.sheen ? "#define USE_SHEEN" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.gradientMap ? "#define USE_GRADIENTMAP" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + l : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
    t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== Cn ? "#define TONE_MAPPING" : "",
    t.toneMapping !== Cn ? Qe.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== Cn ? wp("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Qe.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    Ep("linearToOutputTexel", t.outputColorSpace),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(hi).join(`
`)), o = Ir(o), o = fo(o, t), o = po(o, t), a = Ir(a), a = fo(a, t), a = po(a, t), o = mo(o), a = mo(a), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (x = `#version 300 es
`, h = [
    _,
    "precision mediump sampler2DArray;",
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + h, T = [
    "precision mediump sampler2DArray;",
    "#define varying in",
    t.glslVersion === Ua ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === Ua ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + T);
  const R = x + h + o, U = x + T + a, L = ho(s, s.VERTEX_SHADER, R), C = ho(s, s.FRAGMENT_SHADER, U);
  s.attachShader(p, L), s.attachShader(p, C), t.index0AttributeName !== void 0 ? s.bindAttribLocation(p, 0, t.index0AttributeName) : t.morphTargets === !0 && s.bindAttribLocation(p, 0, "position"), s.linkProgram(p);
  function ee(te) {
    if (i.debug.checkShaderErrors) {
      const ae = s.getProgramInfoLog(p).trim(), N = s.getShaderInfoLog(L).trim(), Y = s.getShaderInfoLog(C).trim();
      let M = !0, ne = !0;
      if (s.getProgramParameter(p, s.LINK_STATUS) === !1)
        if (M = !1, typeof i.debug.onShaderError == "function")
          i.debug.onShaderError(s, p, L, C);
        else {
          const K = uo(s, L, "vertex"), j = uo(s, C, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " + s.getError() + " - VALIDATE_STATUS " + s.getProgramParameter(p, s.VALIDATE_STATUS) + `

Program Info Log: ` + ae + `
` + K + `
` + j
          );
        }
      else
        ae !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", ae) : (N === "" || Y === "") && (ne = !1);
      ne && (te.diagnostics = {
        runnable: M,
        programLog: ae,
        vertexShader: {
          log: N,
          prefix: h
        },
        fragmentShader: {
          log: Y,
          prefix: T
        }
      });
    }
    s.deleteShader(L), s.deleteShader(C), E = new xs(s, p), A = Cp(s, p);
  }
  let E;
  this.getUniforms = function() {
    return E === void 0 && ee(this), E;
  };
  let A;
  this.getAttributes = function() {
    return A === void 0 && ee(this), A;
  };
  let O = t.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return O === !1 && (O = s.getProgramParameter(p, yp)), O;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), s.deleteProgram(p), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = Mp++, this.cacheKey = e, this.usedTimes = 1, this.program = p, this.vertexShader = L, this.fragmentShader = C, this;
}
let Gp = 0;
class Hp {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, s = this._getShaderStage(t), r = this._getShaderStage(n), o = this._getShaderCacheForMaterial(e);
    return o.has(s) === !1 && (o.add(s), s.usedTimes++), o.has(r) === !1 && (o.add(r), r.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new Vp(e), t.set(e, n)), n;
  }
}
class Vp {
  constructor(e) {
    this.id = Gp++, this.code = e, this.usedTimes = 0;
  }
}
function Wp(i, e, t, n, s, r, o) {
  const a = new nl(), l = new Hp(), c = [], d = s.isWebGL2, u = s.logarithmicDepthBuffer, f = s.vertexTextures;
  let g = s.precision;
  const _ = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function v(E) {
    return E === 0 ? "uv" : `uv${E}`;
  }
  function p(E, A, O, te, ae) {
    const N = te.fog, Y = ae.geometry, M = E.isMeshStandardMaterial ? te.environment : null, ne = (E.isMeshStandardMaterial ? t : e).get(E.envMap || M), K = ne && ne.mapping === Rs ? ne.image.height : null, j = _[E.type];
    E.precision !== null && (g = s.getMaxPrecision(E.precision), g !== E.precision && console.warn("THREE.WebGLProgram.getParameters:", E.precision, "not supported, using", g, "instead."));
    const B = Y.morphAttributes.position || Y.morphAttributes.normal || Y.morphAttributes.color, J = B !== void 0 ? B.length : 0;
    let Z = 0;
    Y.morphAttributes.position !== void 0 && (Z = 1), Y.morphAttributes.normal !== void 0 && (Z = 2), Y.morphAttributes.color !== void 0 && (Z = 3);
    let W, ie, le, Me;
    if (j) {
      const lt = an[j];
      W = lt.vertexShader, ie = lt.fragmentShader;
    } else
      W = E.vertexShader, ie = E.fragmentShader, l.update(E), le = l.getVertexShaderID(E), Me = l.getFragmentShaderID(E);
    const me = i.getRenderTarget(), Ue = ae.isInstancedMesh === !0, De = ae.isBatchedMesh === !0, pe = !!E.map, xe = !!E.matcap, z = !!ne, Te = !!E.aoMap, Ae = !!E.lightMap, Ce = !!E.bumpMap, Ee = !!E.normalMap, Oe = !!E.displacementMap, fe = !!E.emissiveMap, y = !!E.metalnessMap, S = !!E.roughnessMap, D = E.anisotropy > 0, q = E.clearcoat > 0, ce = E.iridescence > 0, re = E.sheen > 0, oe = E.transmission > 0, ge = D && !!E.anisotropyMap, ye = q && !!E.clearcoatMap, Ne = q && !!E.clearcoatNormalMap, Fe = q && !!E.clearcoatRoughnessMap, de = ce && !!E.iridescenceMap, he = ce && !!E.iridescenceThicknessMap, ze = re && !!E.sheenColorMap, Ge = re && !!E.sheenRoughnessMap, Le = !!E.specularMap, Se = !!E.specularColorMap, Be = !!E.specularIntensityMap, $e = oe && !!E.transmissionMap, k = oe && !!E.thicknessMap, V = !!E.gradientMap, F = !!E.alphaMap, w = E.alphaTest > 0, Q = !!E.alphaHash, se = !!E.extensions, _e = !!Y.attributes.uv1, be = !!Y.attributes.uv2, ke = !!Y.attributes.uv3;
    let qe = Cn;
    return E.toneMapped && (me === null || me.isXRRenderTarget === !0) && (qe = i.toneMapping), {
      isWebGL2: d,
      shaderID: j,
      shaderType: E.type,
      shaderName: E.name,
      vertexShader: W,
      fragmentShader: ie,
      defines: E.defines,
      customVertexShaderID: le,
      customFragmentShaderID: Me,
      isRawShaderMaterial: E.isRawShaderMaterial === !0,
      glslVersion: E.glslVersion,
      precision: g,
      batching: De,
      instancing: Ue,
      instancingColor: Ue && ae.instanceColor !== null,
      supportsVertexTextures: f,
      outputColorSpace: me === null ? i.outputColorSpace : me.isXRRenderTarget === !0 ? me.texture.colorSpace : vn,
      map: pe,
      matcap: xe,
      envMap: z,
      envMapMode: z && ne.mapping,
      envMapCubeUVHeight: K,
      aoMap: Te,
      lightMap: Ae,
      bumpMap: Ce,
      normalMap: Ee,
      displacementMap: f && Oe,
      emissiveMap: fe,
      normalMapObjectSpace: Ee && E.normalMapType === Jc,
      normalMapTangentSpace: Ee && E.normalMapType === $o,
      metalnessMap: y,
      roughnessMap: S,
      anisotropy: D,
      anisotropyMap: ge,
      clearcoat: q,
      clearcoatMap: ye,
      clearcoatNormalMap: Ne,
      clearcoatRoughnessMap: Fe,
      iridescence: ce,
      iridescenceMap: de,
      iridescenceThicknessMap: he,
      sheen: re,
      sheenColorMap: ze,
      sheenRoughnessMap: Ge,
      specularMap: Le,
      specularColorMap: Se,
      specularIntensityMap: Be,
      transmission: oe,
      transmissionMap: $e,
      thicknessMap: k,
      gradientMap: V,
      opaque: E.transparent === !1 && E.blending === fi,
      alphaMap: F,
      alphaTest: w,
      alphaHash: Q,
      combine: E.combine,
      //
      mapUv: pe && v(E.map.channel),
      aoMapUv: Te && v(E.aoMap.channel),
      lightMapUv: Ae && v(E.lightMap.channel),
      bumpMapUv: Ce && v(E.bumpMap.channel),
      normalMapUv: Ee && v(E.normalMap.channel),
      displacementMapUv: Oe && v(E.displacementMap.channel),
      emissiveMapUv: fe && v(E.emissiveMap.channel),
      metalnessMapUv: y && v(E.metalnessMap.channel),
      roughnessMapUv: S && v(E.roughnessMap.channel),
      anisotropyMapUv: ge && v(E.anisotropyMap.channel),
      clearcoatMapUv: ye && v(E.clearcoatMap.channel),
      clearcoatNormalMapUv: Ne && v(E.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: Fe && v(E.clearcoatRoughnessMap.channel),
      iridescenceMapUv: de && v(E.iridescenceMap.channel),
      iridescenceThicknessMapUv: he && v(E.iridescenceThicknessMap.channel),
      sheenColorMapUv: ze && v(E.sheenColorMap.channel),
      sheenRoughnessMapUv: Ge && v(E.sheenRoughnessMap.channel),
      specularMapUv: Le && v(E.specularMap.channel),
      specularColorMapUv: Se && v(E.specularColorMap.channel),
      specularIntensityMapUv: Be && v(E.specularIntensityMap.channel),
      transmissionMapUv: $e && v(E.transmissionMap.channel),
      thicknessMapUv: k && v(E.thicknessMap.channel),
      alphaMapUv: F && v(E.alphaMap.channel),
      //
      vertexTangents: !!Y.attributes.tangent && (Ee || D),
      vertexColors: E.vertexColors,
      vertexAlphas: E.vertexColors === !0 && !!Y.attributes.color && Y.attributes.color.itemSize === 4,
      vertexUv1s: _e,
      vertexUv2s: be,
      vertexUv3s: ke,
      pointsUvs: ae.isPoints === !0 && !!Y.attributes.uv && (pe || F),
      fog: !!N,
      useFog: E.fog === !0,
      fogExp2: N && N.isFogExp2,
      flatShading: E.flatShading === !0,
      sizeAttenuation: E.sizeAttenuation === !0,
      logarithmicDepthBuffer: u,
      skinning: ae.isSkinnedMesh === !0,
      morphTargets: Y.morphAttributes.position !== void 0,
      morphNormals: Y.morphAttributes.normal !== void 0,
      morphColors: Y.morphAttributes.color !== void 0,
      morphTargetsCount: J,
      morphTextureStride: Z,
      numDirLights: A.directional.length,
      numPointLights: A.point.length,
      numSpotLights: A.spot.length,
      numSpotLightMaps: A.spotLightMap.length,
      numRectAreaLights: A.rectArea.length,
      numHemiLights: A.hemi.length,
      numDirLightShadows: A.directionalShadowMap.length,
      numPointLightShadows: A.pointShadowMap.length,
      numSpotLightShadows: A.spotShadowMap.length,
      numSpotLightShadowsWithMaps: A.numSpotLightShadowsWithMaps,
      numLightProbes: A.numLightProbes,
      numClippingPlanes: o.numPlanes,
      numClipIntersection: o.numIntersection,
      dithering: E.dithering,
      shadowMapEnabled: i.shadowMap.enabled && O.length > 0,
      shadowMapType: i.shadowMap.type,
      toneMapping: qe,
      useLegacyLights: i._useLegacyLights,
      decodeVideoTexture: pe && E.map.isVideoTexture === !0 && pt.getTransfer(E.map.colorSpace) === mt,
      premultipliedAlpha: E.premultipliedAlpha,
      doubleSided: E.side === xn,
      flipSided: E.side === kt,
      useDepthPacking: E.depthPacking >= 0,
      depthPacking: E.depthPacking || 0,
      index0AttributeName: E.index0AttributeName,
      extensionDerivatives: se && E.extensions.derivatives === !0,
      extensionFragDepth: se && E.extensions.fragDepth === !0,
      extensionDrawBuffers: se && E.extensions.drawBuffers === !0,
      extensionShaderTextureLOD: se && E.extensions.shaderTextureLOD === !0,
      extensionClipCullDistance: se && E.extensions.clipCullDistance && n.has("WEBGL_clip_cull_distance"),
      rendererExtensionFragDepth: d || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: d || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: d || n.has("EXT_shader_texture_lod"),
      rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: E.customProgramCacheKey()
    };
  }
  function h(E) {
    const A = [];
    if (E.shaderID ? A.push(E.shaderID) : (A.push(E.customVertexShaderID), A.push(E.customFragmentShaderID)), E.defines !== void 0)
      for (const O in E.defines)
        A.push(O), A.push(E.defines[O]);
    return E.isRawShaderMaterial === !1 && (T(A, E), x(A, E), A.push(i.outputColorSpace)), A.push(E.customProgramCacheKey), A.join();
  }
  function T(E, A) {
    E.push(A.precision), E.push(A.outputColorSpace), E.push(A.envMapMode), E.push(A.envMapCubeUVHeight), E.push(A.mapUv), E.push(A.alphaMapUv), E.push(A.lightMapUv), E.push(A.aoMapUv), E.push(A.bumpMapUv), E.push(A.normalMapUv), E.push(A.displacementMapUv), E.push(A.emissiveMapUv), E.push(A.metalnessMapUv), E.push(A.roughnessMapUv), E.push(A.anisotropyMapUv), E.push(A.clearcoatMapUv), E.push(A.clearcoatNormalMapUv), E.push(A.clearcoatRoughnessMapUv), E.push(A.iridescenceMapUv), E.push(A.iridescenceThicknessMapUv), E.push(A.sheenColorMapUv), E.push(A.sheenRoughnessMapUv), E.push(A.specularMapUv), E.push(A.specularColorMapUv), E.push(A.specularIntensityMapUv), E.push(A.transmissionMapUv), E.push(A.thicknessMapUv), E.push(A.combine), E.push(A.fogExp2), E.push(A.sizeAttenuation), E.push(A.morphTargetsCount), E.push(A.morphAttributeCount), E.push(A.numDirLights), E.push(A.numPointLights), E.push(A.numSpotLights), E.push(A.numSpotLightMaps), E.push(A.numHemiLights), E.push(A.numRectAreaLights), E.push(A.numDirLightShadows), E.push(A.numPointLightShadows), E.push(A.numSpotLightShadows), E.push(A.numSpotLightShadowsWithMaps), E.push(A.numLightProbes), E.push(A.shadowMapType), E.push(A.toneMapping), E.push(A.numClippingPlanes), E.push(A.numClipIntersection), E.push(A.depthPacking);
  }
  function x(E, A) {
    a.disableAll(), A.isWebGL2 && a.enable(0), A.supportsVertexTextures && a.enable(1), A.instancing && a.enable(2), A.instancingColor && a.enable(3), A.matcap && a.enable(4), A.envMap && a.enable(5), A.normalMapObjectSpace && a.enable(6), A.normalMapTangentSpace && a.enable(7), A.clearcoat && a.enable(8), A.iridescence && a.enable(9), A.alphaTest && a.enable(10), A.vertexColors && a.enable(11), A.vertexAlphas && a.enable(12), A.vertexUv1s && a.enable(13), A.vertexUv2s && a.enable(14), A.vertexUv3s && a.enable(15), A.vertexTangents && a.enable(16), A.anisotropy && a.enable(17), A.alphaHash && a.enable(18), A.batching && a.enable(19), E.push(a.mask), a.disableAll(), A.fog && a.enable(0), A.useFog && a.enable(1), A.flatShading && a.enable(2), A.logarithmicDepthBuffer && a.enable(3), A.skinning && a.enable(4), A.morphTargets && a.enable(5), A.morphNormals && a.enable(6), A.morphColors && a.enable(7), A.premultipliedAlpha && a.enable(8), A.shadowMapEnabled && a.enable(9), A.useLegacyLights && a.enable(10), A.doubleSided && a.enable(11), A.flipSided && a.enable(12), A.useDepthPacking && a.enable(13), A.dithering && a.enable(14), A.transmission && a.enable(15), A.sheen && a.enable(16), A.opaque && a.enable(17), A.pointsUvs && a.enable(18), A.decodeVideoTexture && a.enable(19), E.push(a.mask);
  }
  function R(E) {
    const A = _[E.type];
    let O;
    if (A) {
      const te = an[A];
      O = wd.clone(te.uniforms);
    } else
      O = E.uniforms;
    return O;
  }
  function U(E, A) {
    let O;
    for (let te = 0, ae = c.length; te < ae; te++) {
      const N = c[te];
      if (N.cacheKey === A) {
        O = N, ++O.usedTimes;
        break;
      }
    }
    return O === void 0 && (O = new kp(i, A, E, r), c.push(O)), O;
  }
  function L(E) {
    if (--E.usedTimes === 0) {
      const A = c.indexOf(E);
      c[A] = c[c.length - 1], c.pop(), E.destroy();
    }
  }
  function C(E) {
    l.remove(E);
  }
  function ee() {
    l.dispose();
  }
  return {
    getParameters: p,
    getProgramCacheKey: h,
    getUniforms: R,
    acquireProgram: U,
    releaseProgram: L,
    releaseShaderCache: C,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: c,
    dispose: ee
  };
}
function jp() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(r) {
    let o = i.get(r);
    return o === void 0 && (o = {}, i.set(r, o)), o;
  }
  function t(r) {
    i.delete(r);
  }
  function n(r, o, a) {
    i.get(r)[o] = a;
  }
  function s() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    remove: t,
    update: n,
    dispose: s
  };
}
function Xp(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.material.id !== e.material.id ? i.material.id - e.material.id : i.z !== e.z ? i.z - e.z : i.id - e.id;
}
function xo(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.z !== e.z ? e.z - i.z : i.id - e.id;
}
function _o() {
  const i = [];
  let e = 0;
  const t = [], n = [], s = [];
  function r() {
    e = 0, t.length = 0, n.length = 0, s.length = 0;
  }
  function o(u, f, g, _, v, p) {
    let h = i[e];
    return h === void 0 ? (h = {
      id: u.id,
      object: u,
      geometry: f,
      material: g,
      groupOrder: _,
      renderOrder: u.renderOrder,
      z: v,
      group: p
    }, i[e] = h) : (h.id = u.id, h.object = u, h.geometry = f, h.material = g, h.groupOrder = _, h.renderOrder = u.renderOrder, h.z = v, h.group = p), e++, h;
  }
  function a(u, f, g, _, v, p) {
    const h = o(u, f, g, _, v, p);
    g.transmission > 0 ? n.push(h) : g.transparent === !0 ? s.push(h) : t.push(h);
  }
  function l(u, f, g, _, v, p) {
    const h = o(u, f, g, _, v, p);
    g.transmission > 0 ? n.unshift(h) : g.transparent === !0 ? s.unshift(h) : t.unshift(h);
  }
  function c(u, f) {
    t.length > 1 && t.sort(u || Xp), n.length > 1 && n.sort(f || xo), s.length > 1 && s.sort(f || xo);
  }
  function d() {
    for (let u = e, f = i.length; u < f; u++) {
      const g = i[u];
      if (g.id === null)
        break;
      g.id = null, g.object = null, g.geometry = null, g.material = null, g.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: s,
    init: r,
    push: a,
    unshift: l,
    finish: d,
    sort: c
  };
}
function Yp() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(n, s) {
    const r = i.get(n);
    let o;
    return r === void 0 ? (o = new _o(), i.set(n, [o])) : s >= r.length ? (o = new _o(), r.push(o)) : o = r[s], o;
  }
  function t() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function qp() {
  const i = {};
  return {
    get: function(e) {
      if (i[e.id] !== void 0)
        return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new H(),
            color: new et()
          };
          break;
        case "SpotLight":
          t = {
            position: new H(),
            direction: new H(),
            color: new et(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new H(),
            color: new et(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new H(),
            skyColor: new et(),
            groundColor: new et()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new et(),
            position: new H(),
            halfWidth: new H(),
            halfHeight: new H()
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
function $p() {
  const i = {};
  return {
    get: function(e) {
      if (i[e.id] !== void 0)
        return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new rt()
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new rt()
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new rt(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
let Kp = 0;
function Zp(i, e) {
  return (e.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (i.map ? 1 : 0);
}
function Jp(i, e) {
  const t = new qp(), n = $p(), s = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1,
      numLightProbes: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0,
    numLightProbes: 0
  };
  for (let d = 0; d < 9; d++)
    s.probe.push(new H());
  const r = new H(), o = new yt(), a = new yt();
  function l(d, u) {
    let f = 0, g = 0, _ = 0;
    for (let te = 0; te < 9; te++)
      s.probe[te].set(0, 0, 0);
    let v = 0, p = 0, h = 0, T = 0, x = 0, R = 0, U = 0, L = 0, C = 0, ee = 0, E = 0;
    d.sort(Zp);
    const A = u === !0 ? Math.PI : 1;
    for (let te = 0, ae = d.length; te < ae; te++) {
      const N = d[te], Y = N.color, M = N.intensity, ne = N.distance, K = N.shadow && N.shadow.map ? N.shadow.map.texture : null;
      if (N.isAmbientLight)
        f += Y.r * M * A, g += Y.g * M * A, _ += Y.b * M * A;
      else if (N.isLightProbe) {
        for (let j = 0; j < 9; j++)
          s.probe[j].addScaledVector(N.sh.coefficients[j], M);
        E++;
      } else if (N.isDirectionalLight) {
        const j = t.get(N);
        if (j.color.copy(N.color).multiplyScalar(N.intensity * A), N.castShadow) {
          const B = N.shadow, J = n.get(N);
          J.shadowBias = B.bias, J.shadowNormalBias = B.normalBias, J.shadowRadius = B.radius, J.shadowMapSize = B.mapSize, s.directionalShadow[v] = J, s.directionalShadowMap[v] = K, s.directionalShadowMatrix[v] = N.shadow.matrix, R++;
        }
        s.directional[v] = j, v++;
      } else if (N.isSpotLight) {
        const j = t.get(N);
        j.position.setFromMatrixPosition(N.matrixWorld), j.color.copy(Y).multiplyScalar(M * A), j.distance = ne, j.coneCos = Math.cos(N.angle), j.penumbraCos = Math.cos(N.angle * (1 - N.penumbra)), j.decay = N.decay, s.spot[h] = j;
        const B = N.shadow;
        if (N.map && (s.spotLightMap[C] = N.map, C++, B.updateMatrices(N), N.castShadow && ee++), s.spotLightMatrix[h] = B.matrix, N.castShadow) {
          const J = n.get(N);
          J.shadowBias = B.bias, J.shadowNormalBias = B.normalBias, J.shadowRadius = B.radius, J.shadowMapSize = B.mapSize, s.spotShadow[h] = J, s.spotShadowMap[h] = K, L++;
        }
        h++;
      } else if (N.isRectAreaLight) {
        const j = t.get(N);
        j.color.copy(Y).multiplyScalar(M), j.halfWidth.set(N.width * 0.5, 0, 0), j.halfHeight.set(0, N.height * 0.5, 0), s.rectArea[T] = j, T++;
      } else if (N.isPointLight) {
        const j = t.get(N);
        if (j.color.copy(N.color).multiplyScalar(N.intensity * A), j.distance = N.distance, j.decay = N.decay, N.castShadow) {
          const B = N.shadow, J = n.get(N);
          J.shadowBias = B.bias, J.shadowNormalBias = B.normalBias, J.shadowRadius = B.radius, J.shadowMapSize = B.mapSize, J.shadowCameraNear = B.camera.near, J.shadowCameraFar = B.camera.far, s.pointShadow[p] = J, s.pointShadowMap[p] = K, s.pointShadowMatrix[p] = N.shadow.matrix, U++;
        }
        s.point[p] = j, p++;
      } else if (N.isHemisphereLight) {
        const j = t.get(N);
        j.skyColor.copy(N.color).multiplyScalar(M * A), j.groundColor.copy(N.groundColor).multiplyScalar(M * A), s.hemi[x] = j, x++;
      }
    }
    T > 0 && (e.isWebGL2 ? i.has("OES_texture_float_linear") === !0 ? (s.rectAreaLTC1 = Re.LTC_FLOAT_1, s.rectAreaLTC2 = Re.LTC_FLOAT_2) : (s.rectAreaLTC1 = Re.LTC_HALF_1, s.rectAreaLTC2 = Re.LTC_HALF_2) : i.has("OES_texture_float_linear") === !0 ? (s.rectAreaLTC1 = Re.LTC_FLOAT_1, s.rectAreaLTC2 = Re.LTC_FLOAT_2) : i.has("OES_texture_half_float_linear") === !0 ? (s.rectAreaLTC1 = Re.LTC_HALF_1, s.rectAreaLTC2 = Re.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), s.ambient[0] = f, s.ambient[1] = g, s.ambient[2] = _;
    const O = s.hash;
    (O.directionalLength !== v || O.pointLength !== p || O.spotLength !== h || O.rectAreaLength !== T || O.hemiLength !== x || O.numDirectionalShadows !== R || O.numPointShadows !== U || O.numSpotShadows !== L || O.numSpotMaps !== C || O.numLightProbes !== E) && (s.directional.length = v, s.spot.length = h, s.rectArea.length = T, s.point.length = p, s.hemi.length = x, s.directionalShadow.length = R, s.directionalShadowMap.length = R, s.pointShadow.length = U, s.pointShadowMap.length = U, s.spotShadow.length = L, s.spotShadowMap.length = L, s.directionalShadowMatrix.length = R, s.pointShadowMatrix.length = U, s.spotLightMatrix.length = L + C - ee, s.spotLightMap.length = C, s.numSpotLightShadowsWithMaps = ee, s.numLightProbes = E, O.directionalLength = v, O.pointLength = p, O.spotLength = h, O.rectAreaLength = T, O.hemiLength = x, O.numDirectionalShadows = R, O.numPointShadows = U, O.numSpotShadows = L, O.numSpotMaps = C, O.numLightProbes = E, s.version = Kp++);
  }
  function c(d, u) {
    let f = 0, g = 0, _ = 0, v = 0, p = 0;
    const h = u.matrixWorldInverse;
    for (let T = 0, x = d.length; T < x; T++) {
      const R = d[T];
      if (R.isDirectionalLight) {
        const U = s.directional[f];
        U.direction.setFromMatrixPosition(R.matrixWorld), r.setFromMatrixPosition(R.target.matrixWorld), U.direction.sub(r), U.direction.transformDirection(h), f++;
      } else if (R.isSpotLight) {
        const U = s.spot[_];
        U.position.setFromMatrixPosition(R.matrixWorld), U.position.applyMatrix4(h), U.direction.setFromMatrixPosition(R.matrixWorld), r.setFromMatrixPosition(R.target.matrixWorld), U.direction.sub(r), U.direction.transformDirection(h), _++;
      } else if (R.isRectAreaLight) {
        const U = s.rectArea[v];
        U.position.setFromMatrixPosition(R.matrixWorld), U.position.applyMatrix4(h), a.identity(), o.copy(R.matrixWorld), o.premultiply(h), a.extractRotation(o), U.halfWidth.set(R.width * 0.5, 0, 0), U.halfHeight.set(0, R.height * 0.5, 0), U.halfWidth.applyMatrix4(a), U.halfHeight.applyMatrix4(a), v++;
      } else if (R.isPointLight) {
        const U = s.point[g];
        U.position.setFromMatrixPosition(R.matrixWorld), U.position.applyMatrix4(h), g++;
      } else if (R.isHemisphereLight) {
        const U = s.hemi[p];
        U.direction.setFromMatrixPosition(R.matrixWorld), U.direction.transformDirection(h), p++;
      }
    }
  }
  return {
    setup: l,
    setupView: c,
    state: s
  };
}
function vo(i, e) {
  const t = new Jp(i, e), n = [], s = [];
  function r() {
    n.length = 0, s.length = 0;
  }
  function o(u) {
    n.push(u);
  }
  function a(u) {
    s.push(u);
  }
  function l(u) {
    t.setup(n, u);
  }
  function c(u) {
    t.setupView(n, u);
  }
  return {
    init: r,
    state: {
      lightsArray: n,
      shadowsArray: s,
      lights: t
    },
    setupLights: l,
    setupLightsView: c,
    pushLight: o,
    pushShadow: a
  };
}
function Qp(i, e) {
  let t = /* @__PURE__ */ new WeakMap();
  function n(r, o = 0) {
    const a = t.get(r);
    let l;
    return a === void 0 ? (l = new vo(i, e), t.set(r, [l])) : o >= a.length ? (l = new vo(i, e), a.push(l)) : l = a[o], l;
  }
  function s() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: s
  };
}
class em extends yi {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = Kc, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class tm extends yi {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const nm = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, im = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function sm(i, e, t) {
  let n = new kr();
  const s = new rt(), r = new rt(), o = new gt(), a = new em({ depthPacking: Zc }), l = new tm(), c = {}, d = t.maxTextureSize, u = { [Pn]: kt, [kt]: Pn, [xn]: xn }, f = new Yn({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new rt() },
      radius: { value: 4 }
    },
    vertexShader: nm,
    fragmentShader: im
  }), g = f.clone();
  g.defines.HORIZONTAL_PASS = 1;
  const _ = new Yt();
  _.setAttribute(
    "position",
    new ln(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const v = new we(_, f), p = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = Fo;
  let h = this.type;
  this.render = function(L, C, ee) {
    if (p.enabled === !1 || p.autoUpdate === !1 && p.needsUpdate === !1 || L.length === 0)
      return;
    const E = i.getRenderTarget(), A = i.getActiveCubeFace(), O = i.getActiveMipmapLevel(), te = i.state;
    te.setBlending(Rn), te.buffers.color.setClear(1, 1, 1, 1), te.buffers.depth.setTest(!0), te.setScissorTest(!1);
    const ae = h !== gn && this.type === gn, N = h === gn && this.type !== gn;
    for (let Y = 0, M = L.length; Y < M; Y++) {
      const ne = L[Y], K = ne.shadow;
      if (K === void 0) {
        console.warn("THREE.WebGLShadowMap:", ne, "has no shadow.");
        continue;
      }
      if (K.autoUpdate === !1 && K.needsUpdate === !1)
        continue;
      s.copy(K.mapSize);
      const j = K.getFrameExtents();
      if (s.multiply(j), r.copy(K.mapSize), (s.x > d || s.y > d) && (s.x > d && (r.x = Math.floor(d / j.x), s.x = r.x * j.x, K.mapSize.x = r.x), s.y > d && (r.y = Math.floor(d / j.y), s.y = r.y * j.y, K.mapSize.y = r.y)), K.map === null || ae === !0 || N === !0) {
        const J = this.type !== gn ? { minFilter: Ft, magFilter: Ft } : {};
        K.map !== null && K.map.dispose(), K.map = new Xn(s.x, s.y, J), K.map.texture.name = ne.name + ".shadowMap", K.camera.updateProjectionMatrix();
      }
      i.setRenderTarget(K.map), i.clear();
      const B = K.getViewportCount();
      for (let J = 0; J < B; J++) {
        const Z = K.getViewport(J);
        o.set(
          r.x * Z.x,
          r.y * Z.y,
          r.x * Z.z,
          r.y * Z.w
        ), te.viewport(o), K.updateMatrices(ne, J), n = K.getFrustum(), R(C, ee, K.camera, ne, this.type);
      }
      K.isPointLightShadow !== !0 && this.type === gn && T(K, ee), K.needsUpdate = !1;
    }
    h = this.type, p.needsUpdate = !1, i.setRenderTarget(E, A, O);
  };
  function T(L, C) {
    const ee = e.update(v);
    f.defines.VSM_SAMPLES !== L.blurSamples && (f.defines.VSM_SAMPLES = L.blurSamples, g.defines.VSM_SAMPLES = L.blurSamples, f.needsUpdate = !0, g.needsUpdate = !0), L.mapPass === null && (L.mapPass = new Xn(s.x, s.y)), f.uniforms.shadow_pass.value = L.map.texture, f.uniforms.resolution.value = L.mapSize, f.uniforms.radius.value = L.radius, i.setRenderTarget(L.mapPass), i.clear(), i.renderBufferDirect(C, null, ee, f, v, null), g.uniforms.shadow_pass.value = L.mapPass.texture, g.uniforms.resolution.value = L.mapSize, g.uniforms.radius.value = L.radius, i.setRenderTarget(L.map), i.clear(), i.renderBufferDirect(C, null, ee, g, v, null);
  }
  function x(L, C, ee, E) {
    let A = null;
    const O = ee.isPointLight === !0 ? L.customDistanceMaterial : L.customDepthMaterial;
    if (O !== void 0)
      A = O;
    else if (A = ee.isPointLight === !0 ? l : a, i.localClippingEnabled && C.clipShadows === !0 && Array.isArray(C.clippingPlanes) && C.clippingPlanes.length !== 0 || C.displacementMap && C.displacementScale !== 0 || C.alphaMap && C.alphaTest > 0 || C.map && C.alphaTest > 0) {
      const te = A.uuid, ae = C.uuid;
      let N = c[te];
      N === void 0 && (N = {}, c[te] = N);
      let Y = N[ae];
      Y === void 0 && (Y = A.clone(), N[ae] = Y, C.addEventListener("dispose", U)), A = Y;
    }
    if (A.visible = C.visible, A.wireframe = C.wireframe, E === gn ? A.side = C.shadowSide !== null ? C.shadowSide : C.side : A.side = C.shadowSide !== null ? C.shadowSide : u[C.side], A.alphaMap = C.alphaMap, A.alphaTest = C.alphaTest, A.map = C.map, A.clipShadows = C.clipShadows, A.clippingPlanes = C.clippingPlanes, A.clipIntersection = C.clipIntersection, A.displacementMap = C.displacementMap, A.displacementScale = C.displacementScale, A.displacementBias = C.displacementBias, A.wireframeLinewidth = C.wireframeLinewidth, A.linewidth = C.linewidth, ee.isPointLight === !0 && A.isMeshDistanceMaterial === !0) {
      const te = i.properties.get(A);
      te.light = ee;
    }
    return A;
  }
  function R(L, C, ee, E, A) {
    if (L.visible === !1)
      return;
    if (L.layers.test(C.layers) && (L.isMesh || L.isLine || L.isPoints) && (L.castShadow || L.receiveShadow && A === gn) && (!L.frustumCulled || n.intersectsObject(L))) {
      L.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse, L.matrixWorld);
      const ae = e.update(L), N = L.material;
      if (Array.isArray(N)) {
        const Y = ae.groups;
        for (let M = 0, ne = Y.length; M < ne; M++) {
          const K = Y[M], j = N[K.materialIndex];
          if (j && j.visible) {
            const B = x(L, j, E, A);
            L.onBeforeShadow(i, L, C, ee, ae, B, K), i.renderBufferDirect(ee, null, ae, B, L, K), L.onAfterShadow(i, L, C, ee, ae, B, K);
          }
        }
      } else if (N.visible) {
        const Y = x(L, N, E, A);
        L.onBeforeShadow(i, L, C, ee, ae, Y, null), i.renderBufferDirect(ee, null, ae, Y, L, null), L.onAfterShadow(i, L, C, ee, ae, Y, null);
      }
    }
    const te = L.children;
    for (let ae = 0, N = te.length; ae < N; ae++)
      R(te[ae], C, ee, E, A);
  }
  function U(L) {
    L.target.removeEventListener("dispose", U);
    for (const ee in c) {
      const E = c[ee], A = L.target.uuid;
      A in E && (E[A].dispose(), delete E[A]);
    }
  }
}
function rm(i, e, t) {
  const n = t.isWebGL2;
  function s() {
    let w = !1;
    const Q = new gt();
    let se = null;
    const _e = new gt(0, 0, 0, 0);
    return {
      setMask: function(be) {
        se !== be && !w && (i.colorMask(be, be, be, be), se = be);
      },
      setLocked: function(be) {
        w = be;
      },
      setClear: function(be, ke, qe, it, lt) {
        lt === !0 && (be *= it, ke *= it, qe *= it), Q.set(be, ke, qe, it), _e.equals(Q) === !1 && (i.clearColor(be, ke, qe, it), _e.copy(Q));
      },
      reset: function() {
        w = !1, se = null, _e.set(-1, 0, 0, 0);
      }
    };
  }
  function r() {
    let w = !1, Q = null, se = null, _e = null;
    return {
      setTest: function(be) {
        be ? De(i.DEPTH_TEST) : pe(i.DEPTH_TEST);
      },
      setMask: function(be) {
        Q !== be && !w && (i.depthMask(be), Q = be);
      },
      setFunc: function(be) {
        if (se !== be) {
          switch (be) {
            case Ac:
              i.depthFunc(i.NEVER);
              break;
            case Rc:
              i.depthFunc(i.ALWAYS);
              break;
            case Cc:
              i.depthFunc(i.LESS);
              break;
            case Ms:
              i.depthFunc(i.LEQUAL);
              break;
            case Lc:
              i.depthFunc(i.EQUAL);
              break;
            case Pc:
              i.depthFunc(i.GEQUAL);
              break;
            case Nc:
              i.depthFunc(i.GREATER);
              break;
            case Dc:
              i.depthFunc(i.NOTEQUAL);
              break;
            default:
              i.depthFunc(i.LEQUAL);
          }
          se = be;
        }
      },
      setLocked: function(be) {
        w = be;
      },
      setClear: function(be) {
        _e !== be && (i.clearDepth(be), _e = be);
      },
      reset: function() {
        w = !1, Q = null, se = null, _e = null;
      }
    };
  }
  function o() {
    let w = !1, Q = null, se = null, _e = null, be = null, ke = null, qe = null, it = null, lt = null;
    return {
      setTest: function(Ze) {
        w || (Ze ? De(i.STENCIL_TEST) : pe(i.STENCIL_TEST));
      },
      setMask: function(Ze) {
        Q !== Ze && !w && (i.stencilMask(Ze), Q = Ze);
      },
      setFunc: function(Ze, ct, ut) {
        (se !== Ze || _e !== ct || be !== ut) && (i.stencilFunc(Ze, ct, ut), se = Ze, _e = ct, be = ut);
      },
      setOp: function(Ze, ct, ut) {
        (ke !== Ze || qe !== ct || it !== ut) && (i.stencilOp(Ze, ct, ut), ke = Ze, qe = ct, it = ut);
      },
      setLocked: function(Ze) {
        w = Ze;
      },
      setClear: function(Ze) {
        lt !== Ze && (i.clearStencil(Ze), lt = Ze);
      },
      reset: function() {
        w = !1, Q = null, se = null, _e = null, be = null, ke = null, qe = null, it = null, lt = null;
      }
    };
  }
  const a = new s(), l = new r(), c = new o(), d = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap();
  let f = {}, g = {}, _ = /* @__PURE__ */ new WeakMap(), v = [], p = null, h = !1, T = null, x = null, R = null, U = null, L = null, C = null, ee = null, E = new et(0, 0, 0), A = 0, O = !1, te = null, ae = null, N = null, Y = null, M = null;
  const ne = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let K = !1, j = 0;
  const B = i.getParameter(i.VERSION);
  B.indexOf("WebGL") !== -1 ? (j = parseFloat(/^WebGL (\d)/.exec(B)[1]), K = j >= 1) : B.indexOf("OpenGL ES") !== -1 && (j = parseFloat(/^OpenGL ES (\d)/.exec(B)[1]), K = j >= 2);
  let J = null, Z = {};
  const W = i.getParameter(i.SCISSOR_BOX), ie = i.getParameter(i.VIEWPORT), le = new gt().fromArray(W), Me = new gt().fromArray(ie);
  function me(w, Q, se, _e) {
    const be = new Uint8Array(4), ke = i.createTexture();
    i.bindTexture(w, ke), i.texParameteri(w, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(w, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let qe = 0; qe < se; qe++)
      n && (w === i.TEXTURE_3D || w === i.TEXTURE_2D_ARRAY) ? i.texImage3D(Q, 0, i.RGBA, 1, 1, _e, 0, i.RGBA, i.UNSIGNED_BYTE, be) : i.texImage2D(Q + qe, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, be);
    return ke;
  }
  const Ue = {};
  Ue[i.TEXTURE_2D] = me(i.TEXTURE_2D, i.TEXTURE_2D, 1), Ue[i.TEXTURE_CUBE_MAP] = me(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), n && (Ue[i.TEXTURE_2D_ARRAY] = me(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), Ue[i.TEXTURE_3D] = me(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1)), a.setClear(0, 0, 0, 1), l.setClear(1), c.setClear(0), De(i.DEPTH_TEST), l.setFunc(Ms), fe(!1), y(ea), De(i.CULL_FACE), Ee(Rn);
  function De(w) {
    f[w] !== !0 && (i.enable(w), f[w] = !0);
  }
  function pe(w) {
    f[w] !== !1 && (i.disable(w), f[w] = !1);
  }
  function xe(w, Q) {
    return g[w] !== Q ? (i.bindFramebuffer(w, Q), g[w] = Q, n && (w === i.DRAW_FRAMEBUFFER && (g[i.FRAMEBUFFER] = Q), w === i.FRAMEBUFFER && (g[i.DRAW_FRAMEBUFFER] = Q)), !0) : !1;
  }
  function z(w, Q) {
    let se = v, _e = !1;
    if (w)
      if (se = _.get(Q), se === void 0 && (se = [], _.set(Q, se)), w.isWebGLMultipleRenderTargets) {
        const be = w.texture;
        if (se.length !== be.length || se[0] !== i.COLOR_ATTACHMENT0) {
          for (let ke = 0, qe = be.length; ke < qe; ke++)
            se[ke] = i.COLOR_ATTACHMENT0 + ke;
          se.length = be.length, _e = !0;
        }
      } else
        se[0] !== i.COLOR_ATTACHMENT0 && (se[0] = i.COLOR_ATTACHMENT0, _e = !0);
    else
      se[0] !== i.BACK && (se[0] = i.BACK, _e = !0);
    _e && (t.isWebGL2 ? i.drawBuffers(se) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se));
  }
  function Te(w) {
    return p !== w ? (i.useProgram(w), p = w, !0) : !1;
  }
  const Ae = {
    [Gn]: i.FUNC_ADD,
    [uc]: i.FUNC_SUBTRACT,
    [fc]: i.FUNC_REVERSE_SUBTRACT
  };
  if (n)
    Ae[sa] = i.MIN, Ae[ra] = i.MAX;
  else {
    const w = e.get("EXT_blend_minmax");
    w !== null && (Ae[sa] = w.MIN_EXT, Ae[ra] = w.MAX_EXT);
  }
  const Ce = {
    [pc]: i.ZERO,
    [mc]: i.ONE,
    [gc]: i.SRC_COLOR,
    [wr]: i.SRC_ALPHA,
    [Sc]: i.SRC_ALPHA_SATURATE,
    [yc]: i.DST_COLOR,
    [_c]: i.DST_ALPHA,
    [xc]: i.ONE_MINUS_SRC_COLOR,
    [Tr]: i.ONE_MINUS_SRC_ALPHA,
    [Mc]: i.ONE_MINUS_DST_COLOR,
    [vc]: i.ONE_MINUS_DST_ALPHA,
    [bc]: i.CONSTANT_COLOR,
    [Ec]: i.ONE_MINUS_CONSTANT_COLOR,
    [wc]: i.CONSTANT_ALPHA,
    [Tc]: i.ONE_MINUS_CONSTANT_ALPHA
  };
  function Ee(w, Q, se, _e, be, ke, qe, it, lt, Ze) {
    if (w === Rn) {
      h === !0 && (pe(i.BLEND), h = !1);
      return;
    }
    if (h === !1 && (De(i.BLEND), h = !0), w !== hc) {
      if (w !== T || Ze !== O) {
        if ((x !== Gn || L !== Gn) && (i.blendEquation(i.FUNC_ADD), x = Gn, L = Gn), Ze)
          switch (w) {
            case fi:
              i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case ta:
              i.blendFunc(i.ONE, i.ONE);
              break;
            case na:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case ia:
              i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", w);
              break;
          }
        else
          switch (w) {
            case fi:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case ta:
              i.blendFunc(i.SRC_ALPHA, i.ONE);
              break;
            case na:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case ia:
              i.blendFunc(i.ZERO, i.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", w);
              break;
          }
        R = null, U = null, C = null, ee = null, E.set(0, 0, 0), A = 0, T = w, O = Ze;
      }
      return;
    }
    be = be || Q, ke = ke || se, qe = qe || _e, (Q !== x || be !== L) && (i.blendEquationSeparate(Ae[Q], Ae[be]), x = Q, L = be), (se !== R || _e !== U || ke !== C || qe !== ee) && (i.blendFuncSeparate(Ce[se], Ce[_e], Ce[ke], Ce[qe]), R = se, U = _e, C = ke, ee = qe), (it.equals(E) === !1 || lt !== A) && (i.blendColor(it.r, it.g, it.b, lt), E.copy(it), A = lt), T = w, O = !1;
  }
  function Oe(w, Q) {
    w.side === xn ? pe(i.CULL_FACE) : De(i.CULL_FACE);
    let se = w.side === kt;
    Q && (se = !se), fe(se), w.blending === fi && w.transparent === !1 ? Ee(Rn) : Ee(w.blending, w.blendEquation, w.blendSrc, w.blendDst, w.blendEquationAlpha, w.blendSrcAlpha, w.blendDstAlpha, w.blendColor, w.blendAlpha, w.premultipliedAlpha), l.setFunc(w.depthFunc), l.setTest(w.depthTest), l.setMask(w.depthWrite), a.setMask(w.colorWrite);
    const _e = w.stencilWrite;
    c.setTest(_e), _e && (c.setMask(w.stencilWriteMask), c.setFunc(w.stencilFunc, w.stencilRef, w.stencilFuncMask), c.setOp(w.stencilFail, w.stencilZFail, w.stencilZPass)), D(w.polygonOffset, w.polygonOffsetFactor, w.polygonOffsetUnits), w.alphaToCoverage === !0 ? De(i.SAMPLE_ALPHA_TO_COVERAGE) : pe(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function fe(w) {
    te !== w && (w ? i.frontFace(i.CW) : i.frontFace(i.CCW), te = w);
  }
  function y(w) {
    w !== cc ? (De(i.CULL_FACE), w !== ae && (w === ea ? i.cullFace(i.BACK) : w === dc ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : pe(i.CULL_FACE), ae = w;
  }
  function S(w) {
    w !== N && (K && i.lineWidth(w), N = w);
  }
  function D(w, Q, se) {
    w ? (De(i.POLYGON_OFFSET_FILL), (Y !== Q || M !== se) && (i.polygonOffset(Q, se), Y = Q, M = se)) : pe(i.POLYGON_OFFSET_FILL);
  }
  function q(w) {
    w ? De(i.SCISSOR_TEST) : pe(i.SCISSOR_TEST);
  }
  function ce(w) {
    w === void 0 && (w = i.TEXTURE0 + ne - 1), J !== w && (i.activeTexture(w), J = w);
  }
  function re(w, Q, se) {
    se === void 0 && (J === null ? se = i.TEXTURE0 + ne - 1 : se = J);
    let _e = Z[se];
    _e === void 0 && (_e = { type: void 0, texture: void 0 }, Z[se] = _e), (_e.type !== w || _e.texture !== Q) && (J !== se && (i.activeTexture(se), J = se), i.bindTexture(w, Q || Ue[w]), _e.type = w, _e.texture = Q);
  }
  function oe() {
    const w = Z[J];
    w !== void 0 && w.type !== void 0 && (i.bindTexture(w.type, null), w.type = void 0, w.texture = void 0);
  }
  function ge() {
    try {
      i.compressedTexImage2D.apply(i, arguments);
    } catch (w) {
      console.error("THREE.WebGLState:", w);
    }
  }
  function ye() {
    try {
      i.compressedTexImage3D.apply(i, arguments);
    } catch (w) {
      console.error("THREE.WebGLState:", w);
    }
  }
  function Ne() {
    try {
      i.texSubImage2D.apply(i, arguments);
    } catch (w) {
      console.error("THREE.WebGLState:", w);
    }
  }
  function Fe() {
    try {
      i.texSubImage3D.apply(i, arguments);
    } catch (w) {
      console.error("THREE.WebGLState:", w);
    }
  }
  function de() {
    try {
      i.compressedTexSubImage2D.apply(i, arguments);
    } catch (w) {
      console.error("THREE.WebGLState:", w);
    }
  }
  function he() {
    try {
      i.compressedTexSubImage3D.apply(i, arguments);
    } catch (w) {
      console.error("THREE.WebGLState:", w);
    }
  }
  function ze() {
    try {
      i.texStorage2D.apply(i, arguments);
    } catch (w) {
      console.error("THREE.WebGLState:", w);
    }
  }
  function Ge() {
    try {
      i.texStorage3D.apply(i, arguments);
    } catch (w) {
      console.error("THREE.WebGLState:", w);
    }
  }
  function Le() {
    try {
      i.texImage2D.apply(i, arguments);
    } catch (w) {
      console.error("THREE.WebGLState:", w);
    }
  }
  function Se() {
    try {
      i.texImage3D.apply(i, arguments);
    } catch (w) {
      console.error("THREE.WebGLState:", w);
    }
  }
  function Be(w) {
    le.equals(w) === !1 && (i.scissor(w.x, w.y, w.z, w.w), le.copy(w));
  }
  function $e(w) {
    Me.equals(w) === !1 && (i.viewport(w.x, w.y, w.z, w.w), Me.copy(w));
  }
  function k(w, Q) {
    let se = u.get(Q);
    se === void 0 && (se = /* @__PURE__ */ new WeakMap(), u.set(Q, se));
    let _e = se.get(w);
    _e === void 0 && (_e = i.getUniformBlockIndex(Q, w.name), se.set(w, _e));
  }
  function V(w, Q) {
    const _e = u.get(Q).get(w);
    d.get(Q) !== _e && (i.uniformBlockBinding(Q, _e, w.__bindingPointIndex), d.set(Q, _e));
  }
  function F() {
    i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(!0, !0, !0, !0), i.clearColor(0, 0, 0, 0), i.depthMask(!0), i.depthFunc(i.LESS), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), n === !0 && (i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null)), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), f = {}, J = null, Z = {}, g = {}, _ = /* @__PURE__ */ new WeakMap(), v = [], p = null, h = !1, T = null, x = null, R = null, U = null, L = null, C = null, ee = null, E = new et(0, 0, 0), A = 0, O = !1, te = null, ae = null, N = null, Y = null, M = null, le.set(0, 0, i.canvas.width, i.canvas.height), Me.set(0, 0, i.canvas.width, i.canvas.height), a.reset(), l.reset(), c.reset();
  }
  return {
    buffers: {
      color: a,
      depth: l,
      stencil: c
    },
    enable: De,
    disable: pe,
    bindFramebuffer: xe,
    drawBuffers: z,
    useProgram: Te,
    setBlending: Ee,
    setMaterial: Oe,
    setFlipSided: fe,
    setCullFace: y,
    setLineWidth: S,
    setPolygonOffset: D,
    setScissorTest: q,
    activeTexture: ce,
    bindTexture: re,
    unbindTexture: oe,
    compressedTexImage2D: ge,
    compressedTexImage3D: ye,
    texImage2D: Le,
    texImage3D: Se,
    updateUBOMapping: k,
    uniformBlockBinding: V,
    texStorage2D: ze,
    texStorage3D: Ge,
    texSubImage2D: Ne,
    texSubImage3D: Fe,
    compressedTexSubImage2D: de,
    compressedTexSubImage3D: he,
    scissor: Be,
    viewport: $e,
    reset: F
  };
}
function am(i, e, t, n, s, r, o) {
  const a = s.isWebGL2, l = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, c = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), d = /* @__PURE__ */ new WeakMap();
  let u;
  const f = /* @__PURE__ */ new WeakMap();
  let g = !1;
  try {
    g = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function _(y, S) {
    return g ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(y, S)
    ) : Ts("canvas");
  }
  function v(y, S, D, q) {
    let ce = 1;
    if ((y.width > q || y.height > q) && (ce = q / Math.max(y.width, y.height)), ce < 1 || S === !0)
      if (typeof HTMLImageElement < "u" && y instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && y instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && y instanceof ImageBitmap) {
        const re = S ? Dr : Math.floor, oe = re(ce * y.width), ge = re(ce * y.height);
        u === void 0 && (u = _(oe, ge));
        const ye = D ? _(oe, ge) : u;
        return ye.width = oe, ye.height = ge, ye.getContext("2d").drawImage(y, 0, 0, oe, ge), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + y.width + "x" + y.height + ") to (" + oe + "x" + ge + ")."), ye;
      } else
        return "data" in y && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + y.width + "x" + y.height + ")."), y;
    return y;
  }
  function p(y) {
    return Ia(y.width) && Ia(y.height);
  }
  function h(y) {
    return a ? !1 : y.wrapS !== sn || y.wrapT !== sn || y.minFilter !== Ft && y.minFilter !== Zt;
  }
  function T(y, S) {
    return y.generateMipmaps && S && y.minFilter !== Ft && y.minFilter !== Zt;
  }
  function x(y) {
    i.generateMipmap(y);
  }
  function R(y, S, D, q, ce = !1) {
    if (a === !1)
      return S;
    if (y !== null) {
      if (i[y] !== void 0)
        return i[y];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + y + "'");
    }
    let re = S;
    if (S === i.RED && (D === i.FLOAT && (re = i.R32F), D === i.HALF_FLOAT && (re = i.R16F), D === i.UNSIGNED_BYTE && (re = i.R8)), S === i.RED_INTEGER && (D === i.UNSIGNED_BYTE && (re = i.R8UI), D === i.UNSIGNED_SHORT && (re = i.R16UI), D === i.UNSIGNED_INT && (re = i.R32UI), D === i.BYTE && (re = i.R8I), D === i.SHORT && (re = i.R16I), D === i.INT && (re = i.R32I)), S === i.RG && (D === i.FLOAT && (re = i.RG32F), D === i.HALF_FLOAT && (re = i.RG16F), D === i.UNSIGNED_BYTE && (re = i.RG8)), S === i.RGBA) {
      const oe = ce ? Ss : pt.getTransfer(q);
      D === i.FLOAT && (re = i.RGBA32F), D === i.HALF_FLOAT && (re = i.RGBA16F), D === i.UNSIGNED_BYTE && (re = oe === mt ? i.SRGB8_ALPHA8 : i.RGBA8), D === i.UNSIGNED_SHORT_4_4_4_4 && (re = i.RGBA4), D === i.UNSIGNED_SHORT_5_5_5_1 && (re = i.RGB5_A1);
    }
    return (re === i.R16F || re === i.R32F || re === i.RG16F || re === i.RG32F || re === i.RGBA16F || re === i.RGBA32F) && e.get("EXT_color_buffer_float"), re;
  }
  function U(y, S, D) {
    return T(y, D) === !0 || y.isFramebufferTexture && y.minFilter !== Ft && y.minFilter !== Zt ? Math.log2(Math.max(S.width, S.height)) + 1 : y.mipmaps !== void 0 && y.mipmaps.length > 0 ? y.mipmaps.length : y.isCompressedTexture && Array.isArray(y.image) ? S.mipmaps.length : 1;
  }
  function L(y) {
    return y === Ft || y === aa || y === zs ? i.NEAREST : i.LINEAR;
  }
  function C(y) {
    const S = y.target;
    S.removeEventListener("dispose", C), E(S), S.isVideoTexture && d.delete(S);
  }
  function ee(y) {
    const S = y.target;
    S.removeEventListener("dispose", ee), O(S);
  }
  function E(y) {
    const S = n.get(y);
    if (S.__webglInit === void 0)
      return;
    const D = y.source, q = f.get(D);
    if (q) {
      const ce = q[S.__cacheKey];
      ce.usedTimes--, ce.usedTimes === 0 && A(y), Object.keys(q).length === 0 && f.delete(D);
    }
    n.remove(y);
  }
  function A(y) {
    const S = n.get(y);
    i.deleteTexture(S.__webglTexture);
    const D = y.source, q = f.get(D);
    delete q[S.__cacheKey], o.memory.textures--;
  }
  function O(y) {
    const S = y.texture, D = n.get(y), q = n.get(S);
    if (q.__webglTexture !== void 0 && (i.deleteTexture(q.__webglTexture), o.memory.textures--), y.depthTexture && y.depthTexture.dispose(), y.isWebGLCubeRenderTarget)
      for (let ce = 0; ce < 6; ce++) {
        if (Array.isArray(D.__webglFramebuffer[ce]))
          for (let re = 0; re < D.__webglFramebuffer[ce].length; re++)
            i.deleteFramebuffer(D.__webglFramebuffer[ce][re]);
        else
          i.deleteFramebuffer(D.__webglFramebuffer[ce]);
        D.__webglDepthbuffer && i.deleteRenderbuffer(D.__webglDepthbuffer[ce]);
      }
    else {
      if (Array.isArray(D.__webglFramebuffer))
        for (let ce = 0; ce < D.__webglFramebuffer.length; ce++)
          i.deleteFramebuffer(D.__webglFramebuffer[ce]);
      else
        i.deleteFramebuffer(D.__webglFramebuffer);
      if (D.__webglDepthbuffer && i.deleteRenderbuffer(D.__webglDepthbuffer), D.__webglMultisampledFramebuffer && i.deleteFramebuffer(D.__webglMultisampledFramebuffer), D.__webglColorRenderbuffer)
        for (let ce = 0; ce < D.__webglColorRenderbuffer.length; ce++)
          D.__webglColorRenderbuffer[ce] && i.deleteRenderbuffer(D.__webglColorRenderbuffer[ce]);
      D.__webglDepthRenderbuffer && i.deleteRenderbuffer(D.__webglDepthRenderbuffer);
    }
    if (y.isWebGLMultipleRenderTargets)
      for (let ce = 0, re = S.length; ce < re; ce++) {
        const oe = n.get(S[ce]);
        oe.__webglTexture && (i.deleteTexture(oe.__webglTexture), o.memory.textures--), n.remove(S[ce]);
      }
    n.remove(S), n.remove(y);
  }
  let te = 0;
  function ae() {
    te = 0;
  }
  function N() {
    const y = te;
    return y >= s.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + y + " texture units while this GPU supports only " + s.maxTextures), te += 1, y;
  }
  function Y(y) {
    const S = [];
    return S.push(y.wrapS), S.push(y.wrapT), S.push(y.wrapR || 0), S.push(y.magFilter), S.push(y.minFilter), S.push(y.anisotropy), S.push(y.internalFormat), S.push(y.format), S.push(y.type), S.push(y.generateMipmaps), S.push(y.premultiplyAlpha), S.push(y.flipY), S.push(y.unpackAlignment), S.push(y.colorSpace), S.join();
  }
  function M(y, S) {
    const D = n.get(y);
    if (y.isVideoTexture && Oe(y), y.isRenderTargetTexture === !1 && y.version > 0 && D.__version !== y.version) {
      const q = y.image;
      if (q === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (q.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        le(D, y, S);
        return;
      }
    }
    t.bindTexture(i.TEXTURE_2D, D.__webglTexture, i.TEXTURE0 + S);
  }
  function ne(y, S) {
    const D = n.get(y);
    if (y.version > 0 && D.__version !== y.version) {
      le(D, y, S);
      return;
    }
    t.bindTexture(i.TEXTURE_2D_ARRAY, D.__webglTexture, i.TEXTURE0 + S);
  }
  function K(y, S) {
    const D = n.get(y);
    if (y.version > 0 && D.__version !== y.version) {
      le(D, y, S);
      return;
    }
    t.bindTexture(i.TEXTURE_3D, D.__webglTexture, i.TEXTURE0 + S);
  }
  function j(y, S) {
    const D = n.get(y);
    if (y.version > 0 && D.__version !== y.version) {
      Me(D, y, S);
      return;
    }
    t.bindTexture(i.TEXTURE_CUBE_MAP, D.__webglTexture, i.TEXTURE0 + S);
  }
  const B = {
    [Cr]: i.REPEAT,
    [sn]: i.CLAMP_TO_EDGE,
    [Lr]: i.MIRRORED_REPEAT
  }, J = {
    [Ft]: i.NEAREST,
    [aa]: i.NEAREST_MIPMAP_NEAREST,
    [zs]: i.NEAREST_MIPMAP_LINEAR,
    [Zt]: i.LINEAR,
    [Gc]: i.LINEAR_MIPMAP_NEAREST,
    [Fi]: i.LINEAR_MIPMAP_LINEAR
  }, Z = {
    [Qc]: i.NEVER,
    [rd]: i.ALWAYS,
    [ed]: i.LESS,
    [Ko]: i.LEQUAL,
    [td]: i.EQUAL,
    [sd]: i.GEQUAL,
    [nd]: i.GREATER,
    [id]: i.NOTEQUAL
  };
  function W(y, S, D) {
    if (D ? (i.texParameteri(y, i.TEXTURE_WRAP_S, B[S.wrapS]), i.texParameteri(y, i.TEXTURE_WRAP_T, B[S.wrapT]), (y === i.TEXTURE_3D || y === i.TEXTURE_2D_ARRAY) && i.texParameteri(y, i.TEXTURE_WRAP_R, B[S.wrapR]), i.texParameteri(y, i.TEXTURE_MAG_FILTER, J[S.magFilter]), i.texParameteri(y, i.TEXTURE_MIN_FILTER, J[S.minFilter])) : (i.texParameteri(y, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE), i.texParameteri(y, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE), (y === i.TEXTURE_3D || y === i.TEXTURE_2D_ARRAY) && i.texParameteri(y, i.TEXTURE_WRAP_R, i.CLAMP_TO_EDGE), (S.wrapS !== sn || S.wrapT !== sn) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), i.texParameteri(y, i.TEXTURE_MAG_FILTER, L(S.magFilter)), i.texParameteri(y, i.TEXTURE_MIN_FILTER, L(S.minFilter)), S.minFilter !== Ft && S.minFilter !== Zt && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), S.compareFunction && (i.texParameteri(y, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(y, i.TEXTURE_COMPARE_FUNC, Z[S.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      const q = e.get("EXT_texture_filter_anisotropic");
      if (S.magFilter === Ft || S.minFilter !== zs && S.minFilter !== Fi || S.type === An && e.has("OES_texture_float_linear") === !1 || a === !1 && S.type === Oi && e.has("OES_texture_half_float_linear") === !1)
        return;
      (S.anisotropy > 1 || n.get(S).__currentAnisotropy) && (i.texParameterf(y, q.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(S.anisotropy, s.getMaxAnisotropy())), n.get(S).__currentAnisotropy = S.anisotropy);
    }
  }
  function ie(y, S) {
    let D = !1;
    y.__webglInit === void 0 && (y.__webglInit = !0, S.addEventListener("dispose", C));
    const q = S.source;
    let ce = f.get(q);
    ce === void 0 && (ce = {}, f.set(q, ce));
    const re = Y(S);
    if (re !== y.__cacheKey) {
      ce[re] === void 0 && (ce[re] = {
        texture: i.createTexture(),
        usedTimes: 0
      }, o.memory.textures++, D = !0), ce[re].usedTimes++;
      const oe = ce[y.__cacheKey];
      oe !== void 0 && (ce[y.__cacheKey].usedTimes--, oe.usedTimes === 0 && A(S)), y.__cacheKey = re, y.__webglTexture = ce[re].texture;
    }
    return D;
  }
  function le(y, S, D) {
    let q = i.TEXTURE_2D;
    (S.isDataArrayTexture || S.isCompressedArrayTexture) && (q = i.TEXTURE_2D_ARRAY), S.isData3DTexture && (q = i.TEXTURE_3D);
    const ce = ie(y, S), re = S.source;
    t.bindTexture(q, y.__webglTexture, i.TEXTURE0 + D);
    const oe = n.get(re);
    if (re.version !== oe.__version || ce === !0) {
      t.activeTexture(i.TEXTURE0 + D);
      const ge = pt.getPrimaries(pt.workingColorSpace), ye = S.colorSpace === Qt ? null : pt.getPrimaries(S.colorSpace), Ne = S.colorSpace === Qt || ge === ye ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, S.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, S.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, S.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, Ne);
      const Fe = h(S) && p(S.image) === !1;
      let de = v(S.image, Fe, !1, s.maxTextureSize);
      de = fe(S, de);
      const he = p(de) || a, ze = r.convert(S.format, S.colorSpace);
      let Ge = r.convert(S.type), Le = R(S.internalFormat, ze, Ge, S.colorSpace, S.isVideoTexture);
      W(q, S, he);
      let Se;
      const Be = S.mipmaps, $e = a && S.isVideoTexture !== !0 && Le !== Yo, k = oe.__version === void 0 || ce === !0, V = U(S, de, he);
      if (S.isDepthTexture)
        Le = i.DEPTH_COMPONENT, a ? S.type === An ? Le = i.DEPTH_COMPONENT32F : S.type === Tn ? Le = i.DEPTH_COMPONENT24 : S.type === Vn ? Le = i.DEPTH24_STENCIL8 : Le = i.DEPTH_COMPONENT16 : S.type === An && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), S.format === Wn && Le === i.DEPTH_COMPONENT && S.type !== Br && S.type !== Tn && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), S.type = Tn, Ge = r.convert(S.type)), S.format === xi && Le === i.DEPTH_COMPONENT && (Le = i.DEPTH_STENCIL, S.type !== Vn && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), S.type = Vn, Ge = r.convert(S.type))), k && ($e ? t.texStorage2D(i.TEXTURE_2D, 1, Le, de.width, de.height) : t.texImage2D(i.TEXTURE_2D, 0, Le, de.width, de.height, 0, ze, Ge, null));
      else if (S.isDataTexture)
        if (Be.length > 0 && he) {
          $e && k && t.texStorage2D(i.TEXTURE_2D, V, Le, Be[0].width, Be[0].height);
          for (let F = 0, w = Be.length; F < w; F++)
            Se = Be[F], $e ? t.texSubImage2D(i.TEXTURE_2D, F, 0, 0, Se.width, Se.height, ze, Ge, Se.data) : t.texImage2D(i.TEXTURE_2D, F, Le, Se.width, Se.height, 0, ze, Ge, Se.data);
          S.generateMipmaps = !1;
        } else
          $e ? (k && t.texStorage2D(i.TEXTURE_2D, V, Le, de.width, de.height), t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, de.width, de.height, ze, Ge, de.data)) : t.texImage2D(i.TEXTURE_2D, 0, Le, de.width, de.height, 0, ze, Ge, de.data);
      else if (S.isCompressedTexture)
        if (S.isCompressedArrayTexture) {
          $e && k && t.texStorage3D(i.TEXTURE_2D_ARRAY, V, Le, Be[0].width, Be[0].height, de.depth);
          for (let F = 0, w = Be.length; F < w; F++)
            Se = Be[F], S.format !== rn ? ze !== null ? $e ? t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, F, 0, 0, 0, Se.width, Se.height, de.depth, ze, Se.data, 0, 0) : t.compressedTexImage3D(i.TEXTURE_2D_ARRAY, F, Le, Se.width, Se.height, de.depth, 0, Se.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : $e ? t.texSubImage3D(i.TEXTURE_2D_ARRAY, F, 0, 0, 0, Se.width, Se.height, de.depth, ze, Ge, Se.data) : t.texImage3D(i.TEXTURE_2D_ARRAY, F, Le, Se.width, Se.height, de.depth, 0, ze, Ge, Se.data);
        } else {
          $e && k && t.texStorage2D(i.TEXTURE_2D, V, Le, Be[0].width, Be[0].height);
          for (let F = 0, w = Be.length; F < w; F++)
            Se = Be[F], S.format !== rn ? ze !== null ? $e ? t.compressedTexSubImage2D(i.TEXTURE_2D, F, 0, 0, Se.width, Se.height, ze, Se.data) : t.compressedTexImage2D(i.TEXTURE_2D, F, Le, Se.width, Se.height, 0, Se.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : $e ? t.texSubImage2D(i.TEXTURE_2D, F, 0, 0, Se.width, Se.height, ze, Ge, Se.data) : t.texImage2D(i.TEXTURE_2D, F, Le, Se.width, Se.height, 0, ze, Ge, Se.data);
        }
      else if (S.isDataArrayTexture)
        $e ? (k && t.texStorage3D(i.TEXTURE_2D_ARRAY, V, Le, de.width, de.height, de.depth), t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, de.width, de.height, de.depth, ze, Ge, de.data)) : t.texImage3D(i.TEXTURE_2D_ARRAY, 0, Le, de.width, de.height, de.depth, 0, ze, Ge, de.data);
      else if (S.isData3DTexture)
        $e ? (k && t.texStorage3D(i.TEXTURE_3D, V, Le, de.width, de.height, de.depth), t.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, de.width, de.height, de.depth, ze, Ge, de.data)) : t.texImage3D(i.TEXTURE_3D, 0, Le, de.width, de.height, de.depth, 0, ze, Ge, de.data);
      else if (S.isFramebufferTexture) {
        if (k)
          if ($e)
            t.texStorage2D(i.TEXTURE_2D, V, Le, de.width, de.height);
          else {
            let F = de.width, w = de.height;
            for (let Q = 0; Q < V; Q++)
              t.texImage2D(i.TEXTURE_2D, Q, Le, F, w, 0, ze, Ge, null), F >>= 1, w >>= 1;
          }
      } else if (Be.length > 0 && he) {
        $e && k && t.texStorage2D(i.TEXTURE_2D, V, Le, Be[0].width, Be[0].height);
        for (let F = 0, w = Be.length; F < w; F++)
          Se = Be[F], $e ? t.texSubImage2D(i.TEXTURE_2D, F, 0, 0, ze, Ge, Se) : t.texImage2D(i.TEXTURE_2D, F, Le, ze, Ge, Se);
        S.generateMipmaps = !1;
      } else
        $e ? (k && t.texStorage2D(i.TEXTURE_2D, V, Le, de.width, de.height), t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, ze, Ge, de)) : t.texImage2D(i.TEXTURE_2D, 0, Le, ze, Ge, de);
      T(S, he) && x(q), oe.__version = re.version, S.onUpdate && S.onUpdate(S);
    }
    y.__version = S.version;
  }
  function Me(y, S, D) {
    if (S.image.length !== 6)
      return;
    const q = ie(y, S), ce = S.source;
    t.bindTexture(i.TEXTURE_CUBE_MAP, y.__webglTexture, i.TEXTURE0 + D);
    const re = n.get(ce);
    if (ce.version !== re.__version || q === !0) {
      t.activeTexture(i.TEXTURE0 + D);
      const oe = pt.getPrimaries(pt.workingColorSpace), ge = S.colorSpace === Qt ? null : pt.getPrimaries(S.colorSpace), ye = S.colorSpace === Qt || oe === ge ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, S.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, S.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, S.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, ye);
      const Ne = S.isCompressedTexture || S.image[0].isCompressedTexture, Fe = S.image[0] && S.image[0].isDataTexture, de = [];
      for (let F = 0; F < 6; F++)
        !Ne && !Fe ? de[F] = v(S.image[F], !1, !0, s.maxCubemapSize) : de[F] = Fe ? S.image[F].image : S.image[F], de[F] = fe(S, de[F]);
      const he = de[0], ze = p(he) || a, Ge = r.convert(S.format, S.colorSpace), Le = r.convert(S.type), Se = R(S.internalFormat, Ge, Le, S.colorSpace), Be = a && S.isVideoTexture !== !0, $e = re.__version === void 0 || q === !0;
      let k = U(S, he, ze);
      W(i.TEXTURE_CUBE_MAP, S, ze);
      let V;
      if (Ne) {
        Be && $e && t.texStorage2D(i.TEXTURE_CUBE_MAP, k, Se, he.width, he.height);
        for (let F = 0; F < 6; F++) {
          V = de[F].mipmaps;
          for (let w = 0; w < V.length; w++) {
            const Q = V[w];
            S.format !== rn ? Ge !== null ? Be ? t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + F, w, 0, 0, Q.width, Q.height, Ge, Q.data) : t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + F, w, Se, Q.width, Q.height, 0, Q.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Be ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + F, w, 0, 0, Q.width, Q.height, Ge, Le, Q.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + F, w, Se, Q.width, Q.height, 0, Ge, Le, Q.data);
          }
        }
      } else {
        V = S.mipmaps, Be && $e && (V.length > 0 && k++, t.texStorage2D(i.TEXTURE_CUBE_MAP, k, Se, de[0].width, de[0].height));
        for (let F = 0; F < 6; F++)
          if (Fe) {
            Be ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + F, 0, 0, 0, de[F].width, de[F].height, Ge, Le, de[F].data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + F, 0, Se, de[F].width, de[F].height, 0, Ge, Le, de[F].data);
            for (let w = 0; w < V.length; w++) {
              const se = V[w].image[F].image;
              Be ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + F, w + 1, 0, 0, se.width, se.height, Ge, Le, se.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + F, w + 1, Se, se.width, se.height, 0, Ge, Le, se.data);
            }
          } else {
            Be ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + F, 0, 0, 0, Ge, Le, de[F]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + F, 0, Se, Ge, Le, de[F]);
            for (let w = 0; w < V.length; w++) {
              const Q = V[w];
              Be ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + F, w + 1, 0, 0, Ge, Le, Q.image[F]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + F, w + 1, Se, Ge, Le, Q.image[F]);
            }
          }
      }
      T(S, ze) && x(i.TEXTURE_CUBE_MAP), re.__version = ce.version, S.onUpdate && S.onUpdate(S);
    }
    y.__version = S.version;
  }
  function me(y, S, D, q, ce, re) {
    const oe = r.convert(D.format, D.colorSpace), ge = r.convert(D.type), ye = R(D.internalFormat, oe, ge, D.colorSpace);
    if (!n.get(S).__hasExternalTextures) {
      const Fe = Math.max(1, S.width >> re), de = Math.max(1, S.height >> re);
      ce === i.TEXTURE_3D || ce === i.TEXTURE_2D_ARRAY ? t.texImage3D(ce, re, ye, Fe, de, S.depth, 0, oe, ge, null) : t.texImage2D(ce, re, ye, Fe, de, 0, oe, ge, null);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, y), Ee(S) ? l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, q, ce, n.get(D).__webglTexture, 0, Ce(S)) : (ce === i.TEXTURE_2D || ce >= i.TEXTURE_CUBE_MAP_POSITIVE_X && ce <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, q, ce, n.get(D).__webglTexture, re), t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function Ue(y, S, D) {
    if (i.bindRenderbuffer(i.RENDERBUFFER, y), S.depthBuffer && !S.stencilBuffer) {
      let q = a === !0 ? i.DEPTH_COMPONENT24 : i.DEPTH_COMPONENT16;
      if (D || Ee(S)) {
        const ce = S.depthTexture;
        ce && ce.isDepthTexture && (ce.type === An ? q = i.DEPTH_COMPONENT32F : ce.type === Tn && (q = i.DEPTH_COMPONENT24));
        const re = Ce(S);
        Ee(S) ? l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, re, q, S.width, S.height) : i.renderbufferStorageMultisample(i.RENDERBUFFER, re, q, S.width, S.height);
      } else
        i.renderbufferStorage(i.RENDERBUFFER, q, S.width, S.height);
      i.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.RENDERBUFFER, y);
    } else if (S.depthBuffer && S.stencilBuffer) {
      const q = Ce(S);
      D && Ee(S) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, q, i.DEPTH24_STENCIL8, S.width, S.height) : Ee(S) ? l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, q, i.DEPTH24_STENCIL8, S.width, S.height) : i.renderbufferStorage(i.RENDERBUFFER, i.DEPTH_STENCIL, S.width, S.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.RENDERBUFFER, y);
    } else {
      const q = S.isWebGLMultipleRenderTargets === !0 ? S.texture : [S.texture];
      for (let ce = 0; ce < q.length; ce++) {
        const re = q[ce], oe = r.convert(re.format, re.colorSpace), ge = r.convert(re.type), ye = R(re.internalFormat, oe, ge, re.colorSpace), Ne = Ce(S);
        D && Ee(S) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, Ne, ye, S.width, S.height) : Ee(S) ? l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, Ne, ye, S.width, S.height) : i.renderbufferStorage(i.RENDERBUFFER, ye, S.width, S.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function De(y, S) {
    if (S && S.isWebGLCubeRenderTarget)
      throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(i.FRAMEBUFFER, y), !(S.depthTexture && S.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(S.depthTexture).__webglTexture || S.depthTexture.image.width !== S.width || S.depthTexture.image.height !== S.height) && (S.depthTexture.image.width = S.width, S.depthTexture.image.height = S.height, S.depthTexture.needsUpdate = !0), M(S.depthTexture, 0);
    const q = n.get(S.depthTexture).__webglTexture, ce = Ce(S);
    if (S.depthTexture.format === Wn)
      Ee(S) ? l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, q, 0, ce) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, q, 0);
    else if (S.depthTexture.format === xi)
      Ee(S) ? l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, q, 0, ce) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, q, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function pe(y) {
    const S = n.get(y), D = y.isWebGLCubeRenderTarget === !0;
    if (y.depthTexture && !S.__autoAllocateDepthBuffer) {
      if (D)
        throw new Error("target.depthTexture not supported in Cube render targets");
      De(S.__webglFramebuffer, y);
    } else if (D) {
      S.__webglDepthbuffer = [];
      for (let q = 0; q < 6; q++)
        t.bindFramebuffer(i.FRAMEBUFFER, S.__webglFramebuffer[q]), S.__webglDepthbuffer[q] = i.createRenderbuffer(), Ue(S.__webglDepthbuffer[q], y, !1);
    } else
      t.bindFramebuffer(i.FRAMEBUFFER, S.__webglFramebuffer), S.__webglDepthbuffer = i.createRenderbuffer(), Ue(S.__webglDepthbuffer, y, !1);
    t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function xe(y, S, D) {
    const q = n.get(y);
    S !== void 0 && me(q.__webglFramebuffer, y, y.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0), D !== void 0 && pe(y);
  }
  function z(y) {
    const S = y.texture, D = n.get(y), q = n.get(S);
    y.addEventListener("dispose", ee), y.isWebGLMultipleRenderTargets !== !0 && (q.__webglTexture === void 0 && (q.__webglTexture = i.createTexture()), q.__version = S.version, o.memory.textures++);
    const ce = y.isWebGLCubeRenderTarget === !0, re = y.isWebGLMultipleRenderTargets === !0, oe = p(y) || a;
    if (ce) {
      D.__webglFramebuffer = [];
      for (let ge = 0; ge < 6; ge++)
        if (a && S.mipmaps && S.mipmaps.length > 0) {
          D.__webglFramebuffer[ge] = [];
          for (let ye = 0; ye < S.mipmaps.length; ye++)
            D.__webglFramebuffer[ge][ye] = i.createFramebuffer();
        } else
          D.__webglFramebuffer[ge] = i.createFramebuffer();
    } else {
      if (a && S.mipmaps && S.mipmaps.length > 0) {
        D.__webglFramebuffer = [];
        for (let ge = 0; ge < S.mipmaps.length; ge++)
          D.__webglFramebuffer[ge] = i.createFramebuffer();
      } else
        D.__webglFramebuffer = i.createFramebuffer();
      if (re)
        if (s.drawBuffers) {
          const ge = y.texture;
          for (let ye = 0, Ne = ge.length; ye < Ne; ye++) {
            const Fe = n.get(ge[ye]);
            Fe.__webglTexture === void 0 && (Fe.__webglTexture = i.createTexture(), o.memory.textures++);
          }
        } else
          console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
      if (a && y.samples > 0 && Ee(y) === !1) {
        const ge = re ? S : [S];
        D.__webglMultisampledFramebuffer = i.createFramebuffer(), D.__webglColorRenderbuffer = [], t.bindFramebuffer(i.FRAMEBUFFER, D.__webglMultisampledFramebuffer);
        for (let ye = 0; ye < ge.length; ye++) {
          const Ne = ge[ye];
          D.__webglColorRenderbuffer[ye] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, D.__webglColorRenderbuffer[ye]);
          const Fe = r.convert(Ne.format, Ne.colorSpace), de = r.convert(Ne.type), he = R(Ne.internalFormat, Fe, de, Ne.colorSpace, y.isXRRenderTarget === !0), ze = Ce(y);
          i.renderbufferStorageMultisample(i.RENDERBUFFER, ze, he, y.width, y.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ye, i.RENDERBUFFER, D.__webglColorRenderbuffer[ye]);
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null), y.depthBuffer && (D.__webglDepthRenderbuffer = i.createRenderbuffer(), Ue(D.__webglDepthRenderbuffer, y, !0)), t.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (ce) {
      t.bindTexture(i.TEXTURE_CUBE_MAP, q.__webglTexture), W(i.TEXTURE_CUBE_MAP, S, oe);
      for (let ge = 0; ge < 6; ge++)
        if (a && S.mipmaps && S.mipmaps.length > 0)
          for (let ye = 0; ye < S.mipmaps.length; ye++)
            me(D.__webglFramebuffer[ge][ye], y, S, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + ge, ye);
        else
          me(D.__webglFramebuffer[ge], y, S, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + ge, 0);
      T(S, oe) && x(i.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (re) {
      const ge = y.texture;
      for (let ye = 0, Ne = ge.length; ye < Ne; ye++) {
        const Fe = ge[ye], de = n.get(Fe);
        t.bindTexture(i.TEXTURE_2D, de.__webglTexture), W(i.TEXTURE_2D, Fe, oe), me(D.__webglFramebuffer, y, Fe, i.COLOR_ATTACHMENT0 + ye, i.TEXTURE_2D, 0), T(Fe, oe) && x(i.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let ge = i.TEXTURE_2D;
      if ((y.isWebGL3DRenderTarget || y.isWebGLArrayRenderTarget) && (a ? ge = y.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), t.bindTexture(ge, q.__webglTexture), W(ge, S, oe), a && S.mipmaps && S.mipmaps.length > 0)
        for (let ye = 0; ye < S.mipmaps.length; ye++)
          me(D.__webglFramebuffer[ye], y, S, i.COLOR_ATTACHMENT0, ge, ye);
      else
        me(D.__webglFramebuffer, y, S, i.COLOR_ATTACHMENT0, ge, 0);
      T(S, oe) && x(ge), t.unbindTexture();
    }
    y.depthBuffer && pe(y);
  }
  function Te(y) {
    const S = p(y) || a, D = y.isWebGLMultipleRenderTargets === !0 ? y.texture : [y.texture];
    for (let q = 0, ce = D.length; q < ce; q++) {
      const re = D[q];
      if (T(re, S)) {
        const oe = y.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : i.TEXTURE_2D, ge = n.get(re).__webglTexture;
        t.bindTexture(oe, ge), x(oe), t.unbindTexture();
      }
    }
  }
  function Ae(y) {
    if (a && y.samples > 0 && Ee(y) === !1) {
      const S = y.isWebGLMultipleRenderTargets ? y.texture : [y.texture], D = y.width, q = y.height;
      let ce = i.COLOR_BUFFER_BIT;
      const re = [], oe = y.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, ge = n.get(y), ye = y.isWebGLMultipleRenderTargets === !0;
      if (ye)
        for (let Ne = 0; Ne < S.length; Ne++)
          t.bindFramebuffer(i.FRAMEBUFFER, ge.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + Ne, i.RENDERBUFFER, null), t.bindFramebuffer(i.FRAMEBUFFER, ge.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + Ne, i.TEXTURE_2D, null, 0);
      t.bindFramebuffer(i.READ_FRAMEBUFFER, ge.__webglMultisampledFramebuffer), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, ge.__webglFramebuffer);
      for (let Ne = 0; Ne < S.length; Ne++) {
        re.push(i.COLOR_ATTACHMENT0 + Ne), y.depthBuffer && re.push(oe);
        const Fe = ge.__ignoreDepthValues !== void 0 ? ge.__ignoreDepthValues : !1;
        if (Fe === !1 && (y.depthBuffer && (ce |= i.DEPTH_BUFFER_BIT), y.stencilBuffer && (ce |= i.STENCIL_BUFFER_BIT)), ye && i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, ge.__webglColorRenderbuffer[Ne]), Fe === !0 && (i.invalidateFramebuffer(i.READ_FRAMEBUFFER, [oe]), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [oe])), ye) {
          const de = n.get(S[Ne]).__webglTexture;
          i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, de, 0);
        }
        i.blitFramebuffer(0, 0, D, q, 0, 0, D, q, ce, i.NEAREST), c && i.invalidateFramebuffer(i.READ_FRAMEBUFFER, re);
      }
      if (t.bindFramebuffer(i.READ_FRAMEBUFFER, null), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), ye)
        for (let Ne = 0; Ne < S.length; Ne++) {
          t.bindFramebuffer(i.FRAMEBUFFER, ge.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + Ne, i.RENDERBUFFER, ge.__webglColorRenderbuffer[Ne]);
          const Fe = n.get(S[Ne]).__webglTexture;
          t.bindFramebuffer(i.FRAMEBUFFER, ge.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + Ne, i.TEXTURE_2D, Fe, 0);
        }
      t.bindFramebuffer(i.DRAW_FRAMEBUFFER, ge.__webglMultisampledFramebuffer);
    }
  }
  function Ce(y) {
    return Math.min(s.maxSamples, y.samples);
  }
  function Ee(y) {
    const S = n.get(y);
    return a && y.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && S.__useRenderToTexture !== !1;
  }
  function Oe(y) {
    const S = o.render.frame;
    d.get(y) !== S && (d.set(y, S), y.update());
  }
  function fe(y, S) {
    const D = y.colorSpace, q = y.format, ce = y.type;
    return y.isCompressedTexture === !0 || y.isVideoTexture === !0 || y.format === Pr || D !== vn && D !== Qt && (pt.getTransfer(D) === mt ? a === !1 ? e.has("EXT_sRGB") === !0 && q === rn ? (y.format = Pr, y.minFilter = Zt, y.generateMipmaps = !1) : S = Jo.sRGBToLinear(S) : (q !== rn || ce !== Ln) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", D)), S;
  }
  this.allocateTextureUnit = N, this.resetTextureUnits = ae, this.setTexture2D = M, this.setTexture2DArray = ne, this.setTexture3D = K, this.setTextureCube = j, this.rebindTextures = xe, this.setupRenderTarget = z, this.updateRenderTargetMipmap = Te, this.updateMultisampleRenderTarget = Ae, this.setupDepthRenderbuffer = pe, this.setupFrameBufferTexture = me, this.useMultisampledRTT = Ee;
}
function om(i, e, t) {
  const n = t.isWebGL2;
  function s(r, o = Qt) {
    let a;
    const l = pt.getTransfer(o);
    if (r === Ln)
      return i.UNSIGNED_BYTE;
    if (r === Ho)
      return i.UNSIGNED_SHORT_4_4_4_4;
    if (r === Vo)
      return i.UNSIGNED_SHORT_5_5_5_1;
    if (r === Hc)
      return i.BYTE;
    if (r === Vc)
      return i.SHORT;
    if (r === Br)
      return i.UNSIGNED_SHORT;
    if (r === Go)
      return i.INT;
    if (r === Tn)
      return i.UNSIGNED_INT;
    if (r === An)
      return i.FLOAT;
    if (r === Oi)
      return n ? i.HALF_FLOAT : (a = e.get("OES_texture_half_float"), a !== null ? a.HALF_FLOAT_OES : null);
    if (r === Wc)
      return i.ALPHA;
    if (r === rn)
      return i.RGBA;
    if (r === jc)
      return i.LUMINANCE;
    if (r === Xc)
      return i.LUMINANCE_ALPHA;
    if (r === Wn)
      return i.DEPTH_COMPONENT;
    if (r === xi)
      return i.DEPTH_STENCIL;
    if (r === Pr)
      return a = e.get("EXT_sRGB"), a !== null ? a.SRGB_ALPHA_EXT : null;
    if (r === Yc)
      return i.RED;
    if (r === Wo)
      return i.RED_INTEGER;
    if (r === qc)
      return i.RG;
    if (r === jo)
      return i.RG_INTEGER;
    if (r === Xo)
      return i.RGBA_INTEGER;
    if (r === ks || r === Gs || r === Hs || r === Vs)
      if (l === mt)
        if (a = e.get("WEBGL_compressed_texture_s3tc_srgb"), a !== null) {
          if (r === ks)
            return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (r === Gs)
            return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (r === Hs)
            return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (r === Vs)
            return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (a = e.get("WEBGL_compressed_texture_s3tc"), a !== null) {
        if (r === ks)
          return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (r === Gs)
          return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (r === Hs)
          return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (r === Vs)
          return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (r === oa || r === la || r === ca || r === da)
      if (a = e.get("WEBGL_compressed_texture_pvrtc"), a !== null) {
        if (r === oa)
          return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (r === la)
          return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (r === ca)
          return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (r === da)
          return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (r === Yo)
      return a = e.get("WEBGL_compressed_texture_etc1"), a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null;
    if (r === ha || r === ua)
      if (a = e.get("WEBGL_compressed_texture_etc"), a !== null) {
        if (r === ha)
          return l === mt ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
        if (r === ua)
          return l === mt ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : a.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (r === fa || r === pa || r === ma || r === ga || r === xa || r === _a || r === va || r === ya || r === Ma || r === Sa || r === ba || r === Ea || r === wa || r === Ta)
      if (a = e.get("WEBGL_compressed_texture_astc"), a !== null) {
        if (r === fa)
          return l === mt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (r === pa)
          return l === mt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (r === ma)
          return l === mt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (r === ga)
          return l === mt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (r === xa)
          return l === mt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (r === _a)
          return l === mt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (r === va)
          return l === mt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (r === ya)
          return l === mt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (r === Ma)
          return l === mt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (r === Sa)
          return l === mt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (r === ba)
          return l === mt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (r === Ea)
          return l === mt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (r === wa)
          return l === mt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (r === Ta)
          return l === mt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (r === Ws || r === Aa || r === Ra)
      if (a = e.get("EXT_texture_compression_bptc"), a !== null) {
        if (r === Ws)
          return l === mt ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (r === Aa)
          return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (r === Ra)
          return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (r === $c || r === Ca || r === La || r === Pa)
      if (a = e.get("EXT_texture_compression_rgtc"), a !== null) {
        if (r === Ws)
          return a.COMPRESSED_RED_RGTC1_EXT;
        if (r === Ca)
          return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (r === La)
          return a.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (r === Pa)
          return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return r === Vn ? n ? i.UNSIGNED_INT_24_8 : (a = e.get("WEBGL_depth_texture"), a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null) : i[r] !== void 0 ? i[r] : null;
  }
  return { convert: s };
}
class lm extends Xt {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class on extends Lt {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const cm = { type: "move" };
class pr {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new on(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new on(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new H(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new H()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new on(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new H(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new H()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t)
        for (const n of e.hand.values())
          this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(e, t, n) {
    let s = null, r = null, o = null;
    const a = this._targetRay, l = this._grip, c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        o = !0;
        for (const v of e.hand.values()) {
          const p = t.getJointPose(v, n), h = this._getHandJoint(c, v);
          p !== null && (h.matrix.fromArray(p.transform.matrix), h.matrix.decompose(h.position, h.rotation, h.scale), h.matrixWorldNeedsUpdate = !0, h.jointRadius = p.radius), h.visible = p !== null;
        }
        const d = c.joints["index-finger-tip"], u = c.joints["thumb-tip"], f = d.position.distanceTo(u.position), g = 0.02, _ = 5e-3;
        c.inputState.pinching && f > g + _ ? (c.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !c.inputState.pinching && f <= g - _ && (c.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        l !== null && e.gripSpace && (r = t.getPose(e.gripSpace, n), r !== null && (l.matrix.fromArray(r.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(r.linearVelocity)) : l.hasLinearVelocity = !1, r.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(r.angularVelocity)) : l.hasAngularVelocity = !1));
      a !== null && (s = t.getPose(e.targetRaySpace, n), s === null && r !== null && (s = r), s !== null && (a.matrix.fromArray(s.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), a.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(s.linearVelocity)) : a.hasLinearVelocity = !1, s.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(s.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(cm)));
    }
    return a !== null && (a.visible = s !== null), l !== null && (l.visible = r !== null), c !== null && (c.visible = o !== null), this;
  }
  // private method
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new on();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class dm extends vi {
  constructor(e, t) {
    super();
    const n = this;
    let s = null, r = 1, o = null, a = "local-floor", l = 1, c = null, d = null, u = null, f = null, g = null, _ = null;
    const v = t.getContextAttributes();
    let p = null, h = null;
    const T = [], x = [], R = new rt();
    let U = null;
    const L = new Xt();
    L.layers.enable(1), L.viewport = new gt();
    const C = new Xt();
    C.layers.enable(2), C.viewport = new gt();
    const ee = [L, C], E = new lm();
    E.layers.enable(1), E.layers.enable(2);
    let A = null, O = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(W) {
      let ie = T[W];
      return ie === void 0 && (ie = new pr(), T[W] = ie), ie.getTargetRaySpace();
    }, this.getControllerGrip = function(W) {
      let ie = T[W];
      return ie === void 0 && (ie = new pr(), T[W] = ie), ie.getGripSpace();
    }, this.getHand = function(W) {
      let ie = T[W];
      return ie === void 0 && (ie = new pr(), T[W] = ie), ie.getHandSpace();
    };
    function te(W) {
      const ie = x.indexOf(W.inputSource);
      if (ie === -1)
        return;
      const le = T[ie];
      le !== void 0 && (le.update(W.inputSource, W.frame, c || o), le.dispatchEvent({ type: W.type, data: W.inputSource }));
    }
    function ae() {
      s.removeEventListener("select", te), s.removeEventListener("selectstart", te), s.removeEventListener("selectend", te), s.removeEventListener("squeeze", te), s.removeEventListener("squeezestart", te), s.removeEventListener("squeezeend", te), s.removeEventListener("end", ae), s.removeEventListener("inputsourceschange", N);
      for (let W = 0; W < T.length; W++) {
        const ie = x[W];
        ie !== null && (x[W] = null, T[W].disconnect(ie));
      }
      A = null, O = null, e.setRenderTarget(p), g = null, f = null, u = null, s = null, h = null, Z.stop(), n.isPresenting = !1, e.setPixelRatio(U), e.setSize(R.width, R.height, !1), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(W) {
      r = W, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(W) {
      a = W, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || o;
    }, this.setReferenceSpace = function(W) {
      c = W;
    }, this.getBaseLayer = function() {
      return f !== null ? f : g;
    }, this.getBinding = function() {
      return u;
    }, this.getFrame = function() {
      return _;
    }, this.getSession = function() {
      return s;
    }, this.setSession = async function(W) {
      if (s = W, s !== null) {
        if (p = e.getRenderTarget(), s.addEventListener("select", te), s.addEventListener("selectstart", te), s.addEventListener("selectend", te), s.addEventListener("squeeze", te), s.addEventListener("squeezestart", te), s.addEventListener("squeezeend", te), s.addEventListener("end", ae), s.addEventListener("inputsourceschange", N), v.xrCompatible !== !0 && await t.makeXRCompatible(), U = e.getPixelRatio(), e.getSize(R), s.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) {
          const ie = {
            antialias: s.renderState.layers === void 0 ? v.antialias : !0,
            alpha: !0,
            depth: v.depth,
            stencil: v.stencil,
            framebufferScaleFactor: r
          };
          g = new XRWebGLLayer(s, t, ie), s.updateRenderState({ baseLayer: g }), e.setPixelRatio(1), e.setSize(g.framebufferWidth, g.framebufferHeight, !1), h = new Xn(
            g.framebufferWidth,
            g.framebufferHeight,
            {
              format: rn,
              type: Ln,
              colorSpace: e.outputColorSpace,
              stencilBuffer: v.stencil
            }
          );
        } else {
          let ie = null, le = null, Me = null;
          v.depth && (Me = v.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, ie = v.stencil ? xi : Wn, le = v.stencil ? Vn : Tn);
          const me = {
            colorFormat: t.RGBA8,
            depthFormat: Me,
            scaleFactor: r
          };
          u = new XRWebGLBinding(s, t), f = u.createProjectionLayer(me), s.updateRenderState({ layers: [f] }), e.setPixelRatio(1), e.setSize(f.textureWidth, f.textureHeight, !1), h = new Xn(
            f.textureWidth,
            f.textureHeight,
            {
              format: rn,
              type: Ln,
              depthTexture: new ul(f.textureWidth, f.textureHeight, le, void 0, void 0, void 0, void 0, void 0, void 0, ie),
              stencilBuffer: v.stencil,
              colorSpace: e.outputColorSpace,
              samples: v.antialias ? 4 : 0
            }
          );
          const Ue = e.properties.get(h);
          Ue.__ignoreDepthValues = f.ignoreDepthValues;
        }
        h.isXRRenderTarget = !0, this.setFoveation(l), c = null, o = await s.requestReferenceSpace(a), Z.setContext(s), Z.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (s !== null)
        return s.environmentBlendMode;
    };
    function N(W) {
      for (let ie = 0; ie < W.removed.length; ie++) {
        const le = W.removed[ie], Me = x.indexOf(le);
        Me >= 0 && (x[Me] = null, T[Me].disconnect(le));
      }
      for (let ie = 0; ie < W.added.length; ie++) {
        const le = W.added[ie];
        let Me = x.indexOf(le);
        if (Me === -1) {
          for (let Ue = 0; Ue < T.length; Ue++)
            if (Ue >= x.length) {
              x.push(le), Me = Ue;
              break;
            } else if (x[Ue] === null) {
              x[Ue] = le, Me = Ue;
              break;
            }
          if (Me === -1)
            break;
        }
        const me = T[Me];
        me && me.connect(le);
      }
    }
    const Y = new H(), M = new H();
    function ne(W, ie, le) {
      Y.setFromMatrixPosition(ie.matrixWorld), M.setFromMatrixPosition(le.matrixWorld);
      const Me = Y.distanceTo(M), me = ie.projectionMatrix.elements, Ue = le.projectionMatrix.elements, De = me[14] / (me[10] - 1), pe = me[14] / (me[10] + 1), xe = (me[9] + 1) / me[5], z = (me[9] - 1) / me[5], Te = (me[8] - 1) / me[0], Ae = (Ue[8] + 1) / Ue[0], Ce = De * Te, Ee = De * Ae, Oe = Me / (-Te + Ae), fe = Oe * -Te;
      ie.matrixWorld.decompose(W.position, W.quaternion, W.scale), W.translateX(fe), W.translateZ(Oe), W.matrixWorld.compose(W.position, W.quaternion, W.scale), W.matrixWorldInverse.copy(W.matrixWorld).invert();
      const y = De + Oe, S = pe + Oe, D = Ce - fe, q = Ee + (Me - fe), ce = xe * pe / S * y, re = z * pe / S * y;
      W.projectionMatrix.makePerspective(D, q, ce, re, y, S), W.projectionMatrixInverse.copy(W.projectionMatrix).invert();
    }
    function K(W, ie) {
      ie === null ? W.matrixWorld.copy(W.matrix) : W.matrixWorld.multiplyMatrices(ie.matrixWorld, W.matrix), W.matrixWorldInverse.copy(W.matrixWorld).invert();
    }
    this.updateCamera = function(W) {
      if (s === null)
        return;
      E.near = C.near = L.near = W.near, E.far = C.far = L.far = W.far, (A !== E.near || O !== E.far) && (s.updateRenderState({
        depthNear: E.near,
        depthFar: E.far
      }), A = E.near, O = E.far);
      const ie = W.parent, le = E.cameras;
      K(E, ie);
      for (let Me = 0; Me < le.length; Me++)
        K(le[Me], ie);
      le.length === 2 ? ne(E, L, C) : E.projectionMatrix.copy(L.projectionMatrix), j(W, E, ie);
    };
    function j(W, ie, le) {
      le === null ? W.matrix.copy(ie.matrixWorld) : (W.matrix.copy(le.matrixWorld), W.matrix.invert(), W.matrix.multiply(ie.matrixWorld)), W.matrix.decompose(W.position, W.quaternion, W.scale), W.updateMatrixWorld(!0), W.projectionMatrix.copy(ie.projectionMatrix), W.projectionMatrixInverse.copy(ie.projectionMatrixInverse), W.isPerspectiveCamera && (W.fov = Nr * 2 * Math.atan(1 / W.projectionMatrix.elements[5]), W.zoom = 1);
    }
    this.getCamera = function() {
      return E;
    }, this.getFoveation = function() {
      if (!(f === null && g === null))
        return l;
    }, this.setFoveation = function(W) {
      l = W, f !== null && (f.fixedFoveation = W), g !== null && g.fixedFoveation !== void 0 && (g.fixedFoveation = W);
    };
    let B = null;
    function J(W, ie) {
      if (d = ie.getViewerPose(c || o), _ = ie, d !== null) {
        const le = d.views;
        g !== null && (e.setRenderTargetFramebuffer(h, g.framebuffer), e.setRenderTarget(h));
        let Me = !1;
        le.length !== E.cameras.length && (E.cameras.length = 0, Me = !0);
        for (let me = 0; me < le.length; me++) {
          const Ue = le[me];
          let De = null;
          if (g !== null)
            De = g.getViewport(Ue);
          else {
            const xe = u.getViewSubImage(f, Ue);
            De = xe.viewport, me === 0 && (e.setRenderTargetTextures(
              h,
              xe.colorTexture,
              f.ignoreDepthValues ? void 0 : xe.depthStencilTexture
            ), e.setRenderTarget(h));
          }
          let pe = ee[me];
          pe === void 0 && (pe = new Xt(), pe.layers.enable(me), pe.viewport = new gt(), ee[me] = pe), pe.matrix.fromArray(Ue.transform.matrix), pe.matrix.decompose(pe.position, pe.quaternion, pe.scale), pe.projectionMatrix.fromArray(Ue.projectionMatrix), pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(), pe.viewport.set(De.x, De.y, De.width, De.height), me === 0 && (E.matrix.copy(pe.matrix), E.matrix.decompose(E.position, E.quaternion, E.scale)), Me === !0 && E.cameras.push(pe);
        }
      }
      for (let le = 0; le < T.length; le++) {
        const Me = x[le], me = T[le];
        Me !== null && me !== void 0 && me.update(Me, ie, c || o);
      }
      B && B(W, ie), ie.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: ie }), _ = null;
    }
    const Z = new dl();
    Z.setAnimationLoop(J), this.setAnimationLoop = function(W) {
      B = W;
    }, this.dispose = function() {
    };
  }
}
function hm(i, e) {
  function t(p, h) {
    p.matrixAutoUpdate === !0 && p.updateMatrix(), h.value.copy(p.matrix);
  }
  function n(p, h) {
    h.color.getRGB(p.fogColor.value, ol(i)), h.isFog ? (p.fogNear.value = h.near, p.fogFar.value = h.far) : h.isFogExp2 && (p.fogDensity.value = h.density);
  }
  function s(p, h, T, x, R) {
    h.isMeshBasicMaterial || h.isMeshLambertMaterial ? r(p, h) : h.isMeshToonMaterial ? (r(p, h), u(p, h)) : h.isMeshPhongMaterial ? (r(p, h), d(p, h)) : h.isMeshStandardMaterial ? (r(p, h), f(p, h), h.isMeshPhysicalMaterial && g(p, h, R)) : h.isMeshMatcapMaterial ? (r(p, h), _(p, h)) : h.isMeshDepthMaterial ? r(p, h) : h.isMeshDistanceMaterial ? (r(p, h), v(p, h)) : h.isMeshNormalMaterial ? r(p, h) : h.isLineBasicMaterial ? (o(p, h), h.isLineDashedMaterial && a(p, h)) : h.isPointsMaterial ? l(p, h, T, x) : h.isSpriteMaterial ? c(p, h) : h.isShadowMaterial ? (p.color.value.copy(h.color), p.opacity.value = h.opacity) : h.isShaderMaterial && (h.uniformsNeedUpdate = !1);
  }
  function r(p, h) {
    p.opacity.value = h.opacity, h.color && p.diffuse.value.copy(h.color), h.emissive && p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity), h.map && (p.map.value = h.map, t(h.map, p.mapTransform)), h.alphaMap && (p.alphaMap.value = h.alphaMap, t(h.alphaMap, p.alphaMapTransform)), h.bumpMap && (p.bumpMap.value = h.bumpMap, t(h.bumpMap, p.bumpMapTransform), p.bumpScale.value = h.bumpScale, h.side === kt && (p.bumpScale.value *= -1)), h.normalMap && (p.normalMap.value = h.normalMap, t(h.normalMap, p.normalMapTransform), p.normalScale.value.copy(h.normalScale), h.side === kt && p.normalScale.value.negate()), h.displacementMap && (p.displacementMap.value = h.displacementMap, t(h.displacementMap, p.displacementMapTransform), p.displacementScale.value = h.displacementScale, p.displacementBias.value = h.displacementBias), h.emissiveMap && (p.emissiveMap.value = h.emissiveMap, t(h.emissiveMap, p.emissiveMapTransform)), h.specularMap && (p.specularMap.value = h.specularMap, t(h.specularMap, p.specularMapTransform)), h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest);
    const T = e.get(h).envMap;
    if (T && (p.envMap.value = T, p.flipEnvMap.value = T.isCubeTexture && T.isRenderTargetTexture === !1 ? -1 : 1, p.reflectivity.value = h.reflectivity, p.ior.value = h.ior, p.refractionRatio.value = h.refractionRatio), h.lightMap) {
      p.lightMap.value = h.lightMap;
      const x = i._useLegacyLights === !0 ? Math.PI : 1;
      p.lightMapIntensity.value = h.lightMapIntensity * x, t(h.lightMap, p.lightMapTransform);
    }
    h.aoMap && (p.aoMap.value = h.aoMap, p.aoMapIntensity.value = h.aoMapIntensity, t(h.aoMap, p.aoMapTransform));
  }
  function o(p, h) {
    p.diffuse.value.copy(h.color), p.opacity.value = h.opacity, h.map && (p.map.value = h.map, t(h.map, p.mapTransform));
  }
  function a(p, h) {
    p.dashSize.value = h.dashSize, p.totalSize.value = h.dashSize + h.gapSize, p.scale.value = h.scale;
  }
  function l(p, h, T, x) {
    p.diffuse.value.copy(h.color), p.opacity.value = h.opacity, p.size.value = h.size * T, p.scale.value = x * 0.5, h.map && (p.map.value = h.map, t(h.map, p.uvTransform)), h.alphaMap && (p.alphaMap.value = h.alphaMap, t(h.alphaMap, p.alphaMapTransform)), h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest);
  }
  function c(p, h) {
    p.diffuse.value.copy(h.color), p.opacity.value = h.opacity, p.rotation.value = h.rotation, h.map && (p.map.value = h.map, t(h.map, p.mapTransform)), h.alphaMap && (p.alphaMap.value = h.alphaMap, t(h.alphaMap, p.alphaMapTransform)), h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest);
  }
  function d(p, h) {
    p.specular.value.copy(h.specular), p.shininess.value = Math.max(h.shininess, 1e-4);
  }
  function u(p, h) {
    h.gradientMap && (p.gradientMap.value = h.gradientMap);
  }
  function f(p, h) {
    p.metalness.value = h.metalness, h.metalnessMap && (p.metalnessMap.value = h.metalnessMap, t(h.metalnessMap, p.metalnessMapTransform)), p.roughness.value = h.roughness, h.roughnessMap && (p.roughnessMap.value = h.roughnessMap, t(h.roughnessMap, p.roughnessMapTransform)), e.get(h).envMap && (p.envMapIntensity.value = h.envMapIntensity);
  }
  function g(p, h, T) {
    p.ior.value = h.ior, h.sheen > 0 && (p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen), p.sheenRoughness.value = h.sheenRoughness, h.sheenColorMap && (p.sheenColorMap.value = h.sheenColorMap, t(h.sheenColorMap, p.sheenColorMapTransform)), h.sheenRoughnessMap && (p.sheenRoughnessMap.value = h.sheenRoughnessMap, t(h.sheenRoughnessMap, p.sheenRoughnessMapTransform))), h.clearcoat > 0 && (p.clearcoat.value = h.clearcoat, p.clearcoatRoughness.value = h.clearcoatRoughness, h.clearcoatMap && (p.clearcoatMap.value = h.clearcoatMap, t(h.clearcoatMap, p.clearcoatMapTransform)), h.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = h.clearcoatRoughnessMap, t(h.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)), h.clearcoatNormalMap && (p.clearcoatNormalMap.value = h.clearcoatNormalMap, t(h.clearcoatNormalMap, p.clearcoatNormalMapTransform), p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale), h.side === kt && p.clearcoatNormalScale.value.negate())), h.iridescence > 0 && (p.iridescence.value = h.iridescence, p.iridescenceIOR.value = h.iridescenceIOR, p.iridescenceThicknessMinimum.value = h.iridescenceThicknessRange[0], p.iridescenceThicknessMaximum.value = h.iridescenceThicknessRange[1], h.iridescenceMap && (p.iridescenceMap.value = h.iridescenceMap, t(h.iridescenceMap, p.iridescenceMapTransform)), h.iridescenceThicknessMap && (p.iridescenceThicknessMap.value = h.iridescenceThicknessMap, t(h.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))), h.transmission > 0 && (p.transmission.value = h.transmission, p.transmissionSamplerMap.value = T.texture, p.transmissionSamplerSize.value.set(T.width, T.height), h.transmissionMap && (p.transmissionMap.value = h.transmissionMap, t(h.transmissionMap, p.transmissionMapTransform)), p.thickness.value = h.thickness, h.thicknessMap && (p.thicknessMap.value = h.thicknessMap, t(h.thicknessMap, p.thicknessMapTransform)), p.attenuationDistance.value = h.attenuationDistance, p.attenuationColor.value.copy(h.attenuationColor)), h.anisotropy > 0 && (p.anisotropyVector.value.set(h.anisotropy * Math.cos(h.anisotropyRotation), h.anisotropy * Math.sin(h.anisotropyRotation)), h.anisotropyMap && (p.anisotropyMap.value = h.anisotropyMap, t(h.anisotropyMap, p.anisotropyMapTransform))), p.specularIntensity.value = h.specularIntensity, p.specularColor.value.copy(h.specularColor), h.specularColorMap && (p.specularColorMap.value = h.specularColorMap, t(h.specularColorMap, p.specularColorMapTransform)), h.specularIntensityMap && (p.specularIntensityMap.value = h.specularIntensityMap, t(h.specularIntensityMap, p.specularIntensityMapTransform));
  }
  function _(p, h) {
    h.matcap && (p.matcap.value = h.matcap);
  }
  function v(p, h) {
    const T = e.get(h).light;
    p.referencePosition.value.setFromMatrixPosition(T.matrixWorld), p.nearDistance.value = T.shadow.camera.near, p.farDistance.value = T.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: s
  };
}
function um(i, e, t, n) {
  let s = {}, r = {}, o = [];
  const a = t.isWebGL2 ? i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS) : 0;
  function l(T, x) {
    const R = x.program;
    n.uniformBlockBinding(T, R);
  }
  function c(T, x) {
    let R = s[T.id];
    R === void 0 && (_(T), R = d(T), s[T.id] = R, T.addEventListener("dispose", p));
    const U = x.program;
    n.updateUBOMapping(T, U);
    const L = e.render.frame;
    r[T.id] !== L && (f(T), r[T.id] = L);
  }
  function d(T) {
    const x = u();
    T.__bindingPointIndex = x;
    const R = i.createBuffer(), U = T.__size, L = T.usage;
    return i.bindBuffer(i.UNIFORM_BUFFER, R), i.bufferData(i.UNIFORM_BUFFER, U, L), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, x, R), R;
  }
  function u() {
    for (let T = 0; T < a; T++)
      if (o.indexOf(T) === -1)
        return o.push(T), T;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function f(T) {
    const x = s[T.id], R = T.uniforms, U = T.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, x);
    for (let L = 0, C = R.length; L < C; L++) {
      const ee = Array.isArray(R[L]) ? R[L] : [R[L]];
      for (let E = 0, A = ee.length; E < A; E++) {
        const O = ee[E];
        if (g(O, L, E, U) === !0) {
          const te = O.__offset, ae = Array.isArray(O.value) ? O.value : [O.value];
          let N = 0;
          for (let Y = 0; Y < ae.length; Y++) {
            const M = ae[Y], ne = v(M);
            typeof M == "number" || typeof M == "boolean" ? (O.__data[0] = M, i.bufferSubData(i.UNIFORM_BUFFER, te + N, O.__data)) : M.isMatrix3 ? (O.__data[0] = M.elements[0], O.__data[1] = M.elements[1], O.__data[2] = M.elements[2], O.__data[3] = 0, O.__data[4] = M.elements[3], O.__data[5] = M.elements[4], O.__data[6] = M.elements[5], O.__data[7] = 0, O.__data[8] = M.elements[6], O.__data[9] = M.elements[7], O.__data[10] = M.elements[8], O.__data[11] = 0) : (M.toArray(O.__data, N), N += ne.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          i.bufferSubData(i.UNIFORM_BUFFER, te, O.__data);
        }
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function g(T, x, R, U) {
    const L = T.value, C = x + "_" + R;
    if (U[C] === void 0)
      return typeof L == "number" || typeof L == "boolean" ? U[C] = L : U[C] = L.clone(), !0;
    {
      const ee = U[C];
      if (typeof L == "number" || typeof L == "boolean") {
        if (ee !== L)
          return U[C] = L, !0;
      } else if (ee.equals(L) === !1)
        return ee.copy(L), !0;
    }
    return !1;
  }
  function _(T) {
    const x = T.uniforms;
    let R = 0;
    const U = 16;
    for (let C = 0, ee = x.length; C < ee; C++) {
      const E = Array.isArray(x[C]) ? x[C] : [x[C]];
      for (let A = 0, O = E.length; A < O; A++) {
        const te = E[A], ae = Array.isArray(te.value) ? te.value : [te.value];
        for (let N = 0, Y = ae.length; N < Y; N++) {
          const M = ae[N], ne = v(M), K = R % U;
          K !== 0 && U - K < ne.boundary && (R += U - K), te.__data = new Float32Array(ne.storage / Float32Array.BYTES_PER_ELEMENT), te.__offset = R, R += ne.storage;
        }
      }
    }
    const L = R % U;
    return L > 0 && (R += U - L), T.__size = R, T.__cache = {}, this;
  }
  function v(T) {
    const x = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof T == "number" || typeof T == "boolean" ? (x.boundary = 4, x.storage = 4) : T.isVector2 ? (x.boundary = 8, x.storage = 8) : T.isVector3 || T.isColor ? (x.boundary = 16, x.storage = 12) : T.isVector4 ? (x.boundary = 16, x.storage = 16) : T.isMatrix3 ? (x.boundary = 48, x.storage = 48) : T.isMatrix4 ? (x.boundary = 64, x.storage = 64) : T.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", T), x;
  }
  function p(T) {
    const x = T.target;
    x.removeEventListener("dispose", p);
    const R = o.indexOf(x.__bindingPointIndex);
    o.splice(R, 1), i.deleteBuffer(s[x.id]), delete s[x.id], delete r[x.id];
  }
  function h() {
    for (const T in s)
      i.deleteBuffer(s[T]);
    o = [], s = {}, r = {};
  }
  return {
    bind: l,
    update: c,
    dispose: h
  };
}
class _l {
  constructor(e = {}) {
    const {
      canvas: t = od(),
      context: n = null,
      depth: s = !0,
      stencil: r = !0,
      alpha: o = !1,
      antialias: a = !1,
      premultipliedAlpha: l = !0,
      preserveDrawingBuffer: c = !1,
      powerPreference: d = "default",
      failIfMajorPerformanceCaveat: u = !1
    } = e;
    this.isWebGLRenderer = !0;
    let f;
    n !== null ? f = n.getContextAttributes().alpha : f = o;
    const g = new Uint32Array(4), _ = new Int32Array(4);
    let v = null, p = null;
    const h = [], T = [];
    this.domElement = t, this.debug = {
      /**
       * Enables error checking and reporting when shader programs are being compiled
       * @type {boolean}
       */
      checkShaderErrors: !0,
      /**
       * Callback for custom error reporting.
       * @type {?Function}
       */
      onShaderError: null
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this._outputColorSpace = Ct, this._useLegacyLights = !1, this.toneMapping = Cn, this.toneMappingExposure = 1;
    const x = this;
    let R = !1, U = 0, L = 0, C = null, ee = -1, E = null;
    const A = new gt(), O = new gt();
    let te = null;
    const ae = new et(0);
    let N = 0, Y = t.width, M = t.height, ne = 1, K = null, j = null;
    const B = new gt(0, 0, Y, M), J = new gt(0, 0, Y, M);
    let Z = !1;
    const W = new kr();
    let ie = !1, le = !1, Me = null;
    const me = new yt(), Ue = new rt(), De = new H(), pe = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    function xe() {
      return C === null ? ne : 1;
    }
    let z = n;
    function Te(b, I) {
      for (let G = 0; G < b.length; G++) {
        const $ = b[G], X = t.getContext($, I);
        if (X !== null)
          return X;
      }
      return null;
    }
    try {
      const b = {
        alpha: !0,
        depth: s,
        stencil: r,
        antialias: a,
        premultipliedAlpha: l,
        preserveDrawingBuffer: c,
        powerPreference: d,
        failIfMajorPerformanceCaveat: u
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${Or}`), t.addEventListener("webglcontextlost", F, !1), t.addEventListener("webglcontextrestored", w, !1), t.addEventListener("webglcontextcreationerror", Q, !1), z === null) {
        const I = ["webgl2", "webgl", "experimental-webgl"];
        if (x.isWebGL1Renderer === !0 && I.shift(), z = Te(I, b), z === null)
          throw Te(I) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
      typeof WebGLRenderingContext < "u" && z instanceof WebGLRenderingContext && console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."), z.getShaderPrecisionFormat === void 0 && (z.getShaderPrecisionFormat = function() {
        return { rangeMin: 1, rangeMax: 1, precision: 1 };
      });
    } catch (b) {
      throw console.error("THREE.WebGLRenderer: " + b.message), b;
    }
    let Ae, Ce, Ee, Oe, fe, y, S, D, q, ce, re, oe, ge, ye, Ne, Fe, de, he, ze, Ge, Le, Se, Be, $e;
    function k() {
      Ae = new Sf(z), Ce = new gf(z, Ae, e), Ae.init(Ce), Se = new om(z, Ae, Ce), Ee = new rm(z, Ae, Ce), Oe = new wf(z), fe = new jp(), y = new am(z, Ae, Ee, fe, Ce, Se, Oe), S = new _f(x), D = new Mf(x), q = new Nd(z, Ce), Be = new pf(z, Ae, q, Ce), ce = new bf(z, q, Oe, Be), re = new Cf(z, ce, q, Oe), ze = new Rf(z, Ce, y), Fe = new xf(fe), oe = new Wp(x, S, D, Ae, Ce, Be, Fe), ge = new hm(x, fe), ye = new Yp(), Ne = new Qp(Ae, Ce), he = new ff(x, S, D, Ee, re, f, l), de = new sm(x, re, Ce), $e = new um(z, Oe, Ce, Ee), Ge = new mf(z, Ae, Oe, Ce), Le = new Ef(z, Ae, Oe, Ce), Oe.programs = oe.programs, x.capabilities = Ce, x.extensions = Ae, x.properties = fe, x.renderLists = ye, x.shadowMap = de, x.state = Ee, x.info = Oe;
    }
    k();
    const V = new dm(x, z);
    this.xr = V, this.getContext = function() {
      return z;
    }, this.getContextAttributes = function() {
      return z.getContextAttributes();
    }, this.forceContextLoss = function() {
      const b = Ae.get("WEBGL_lose_context");
      b && b.loseContext();
    }, this.forceContextRestore = function() {
      const b = Ae.get("WEBGL_lose_context");
      b && b.restoreContext();
    }, this.getPixelRatio = function() {
      return ne;
    }, this.setPixelRatio = function(b) {
      b !== void 0 && (ne = b, this.setSize(Y, M, !1));
    }, this.getSize = function(b) {
      return b.set(Y, M);
    }, this.setSize = function(b, I, G = !0) {
      if (V.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      Y = b, M = I, t.width = Math.floor(b * ne), t.height = Math.floor(I * ne), G === !0 && (t.style.width = b + "px", t.style.height = I + "px"), this.setViewport(0, 0, b, I);
    }, this.getDrawingBufferSize = function(b) {
      return b.set(Y * ne, M * ne).floor();
    }, this.setDrawingBufferSize = function(b, I, G) {
      Y = b, M = I, ne = G, t.width = Math.floor(b * G), t.height = Math.floor(I * G), this.setViewport(0, 0, b, I);
    }, this.getCurrentViewport = function(b) {
      return b.copy(A);
    }, this.getViewport = function(b) {
      return b.copy(B);
    }, this.setViewport = function(b, I, G, $) {
      b.isVector4 ? B.set(b.x, b.y, b.z, b.w) : B.set(b, I, G, $), Ee.viewport(A.copy(B).multiplyScalar(ne).floor());
    }, this.getScissor = function(b) {
      return b.copy(J);
    }, this.setScissor = function(b, I, G, $) {
      b.isVector4 ? J.set(b.x, b.y, b.z, b.w) : J.set(b, I, G, $), Ee.scissor(O.copy(J).multiplyScalar(ne).floor());
    }, this.getScissorTest = function() {
      return Z;
    }, this.setScissorTest = function(b) {
      Ee.setScissorTest(Z = b);
    }, this.setOpaqueSort = function(b) {
      K = b;
    }, this.setTransparentSort = function(b) {
      j = b;
    }, this.getClearColor = function(b) {
      return b.copy(he.getClearColor());
    }, this.setClearColor = function() {
      he.setClearColor.apply(he, arguments);
    }, this.getClearAlpha = function() {
      return he.getClearAlpha();
    }, this.setClearAlpha = function() {
      he.setClearAlpha.apply(he, arguments);
    }, this.clear = function(b = !0, I = !0, G = !0) {
      let $ = 0;
      if (b) {
        let X = !1;
        if (C !== null) {
          const ve = C.texture.format;
          X = ve === Xo || ve === jo || ve === Wo;
        }
        if (X) {
          const ve = C.texture.type, Ie = ve === Ln || ve === Tn || ve === Br || ve === Vn || ve === Ho || ve === Vo, He = he.getClearColor(), We = he.getClearAlpha(), Ve = He.r, Ye = He.g, Ke = He.b;
          Ie ? (g[0] = Ve, g[1] = Ye, g[2] = Ke, g[3] = We, z.clearBufferuiv(z.COLOR, 0, g)) : (_[0] = Ve, _[1] = Ye, _[2] = Ke, _[3] = We, z.clearBufferiv(z.COLOR, 0, _));
        } else
          $ |= z.COLOR_BUFFER_BIT;
      }
      I && ($ |= z.DEPTH_BUFFER_BIT), G && ($ |= z.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), z.clear($);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", F, !1), t.removeEventListener("webglcontextrestored", w, !1), t.removeEventListener("webglcontextcreationerror", Q, !1), ye.dispose(), Ne.dispose(), fe.dispose(), S.dispose(), D.dispose(), re.dispose(), Be.dispose(), $e.dispose(), oe.dispose(), V.dispose(), V.removeEventListener("sessionstart", lt), V.removeEventListener("sessionend", Ze), Me && (Me.dispose(), Me = null), ct.stop();
    };
    function F(b) {
      b.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), R = !0;
    }
    function w() {
      console.log("THREE.WebGLRenderer: Context Restored."), R = !1;
      const b = Oe.autoReset, I = de.enabled, G = de.autoUpdate, $ = de.needsUpdate, X = de.type;
      k(), Oe.autoReset = b, de.enabled = I, de.autoUpdate = G, de.needsUpdate = $, de.type = X;
    }
    function Q(b) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", b.statusMessage);
    }
    function se(b) {
      const I = b.target;
      I.removeEventListener("dispose", se), _e(I);
    }
    function _e(b) {
      be(b), fe.remove(b);
    }
    function be(b) {
      const I = fe.get(b).programs;
      I !== void 0 && (I.forEach(function(G) {
        oe.releaseProgram(G);
      }), b.isShaderMaterial && oe.releaseShaderCache(b));
    }
    this.renderBufferDirect = function(b, I, G, $, X, ve) {
      I === null && (I = pe);
      const Ie = X.isMesh && X.matrixWorld.determinant() < 0, He = Pe(b, I, G, $, X);
      Ee.setMaterial($, Ie);
      let We = G.index, Ve = 1;
      if ($.wireframe === !0) {
        if (We = ce.getWireframeAttribute(G), We === void 0)
          return;
        Ve = 2;
      }
      const Ye = G.drawRange, Ke = G.attributes.position;
      let xt = Ye.start * Ve, Ht = (Ye.start + Ye.count) * Ve;
      ve !== null && (xt = Math.max(xt, ve.start * Ve), Ht = Math.min(Ht, (ve.start + ve.count) * Ve)), We !== null ? (xt = Math.max(xt, 0), Ht = Math.min(Ht, We.count)) : Ke != null && (xt = Math.max(xt, 0), Ht = Math.min(Ht, Ke.count));
      const At = Ht - xt;
      if (At < 0 || At === 1 / 0)
        return;
      Be.setup(X, $, He, G, We);
      let dn, _t = Ge;
      if (We !== null && (dn = q.get(We), _t = Le, _t.setIndex(dn)), X.isMesh)
        $.wireframe === !0 ? (Ee.setLineWidth($.wireframeLinewidth * xe()), _t.setMode(z.LINES)) : _t.setMode(z.TRIANGLES);
      else if (X.isLine) {
        let tt = $.linewidth;
        tt === void 0 && (tt = 1), Ee.setLineWidth(tt * xe()), X.isLineSegments ? _t.setMode(z.LINES) : X.isLineLoop ? _t.setMode(z.LINE_LOOP) : _t.setMode(z.LINE_STRIP);
      } else
        X.isPoints ? _t.setMode(z.POINTS) : X.isSprite && _t.setMode(z.TRIANGLES);
      if (X.isBatchedMesh)
        _t.renderMultiDraw(X._multiDrawStarts, X._multiDrawCounts, X._multiDrawCount);
      else if (X.isInstancedMesh)
        _t.renderInstances(xt, At, X.count);
      else if (G.isInstancedBufferGeometry) {
        const tt = G._maxInstanceCount !== void 0 ? G._maxInstanceCount : 1 / 0, Ds = Math.min(G.instanceCount, tt);
        _t.renderInstances(xt, At, Ds);
      } else
        _t.render(xt, At);
    };
    function ke(b, I, G) {
      b.transparent === !0 && b.side === xn && b.forceSinglePass === !1 ? (b.side = kt, b.needsUpdate = !0, cn(b, I, G), b.side = Pn, b.needsUpdate = !0, cn(b, I, G), b.side = xn) : cn(b, I, G);
    }
    this.compile = function(b, I, G = null) {
      G === null && (G = b), p = Ne.get(G), p.init(), T.push(p), G.traverseVisible(function(X) {
        X.isLight && X.layers.test(I.layers) && (p.pushLight(X), X.castShadow && p.pushShadow(X));
      }), b !== G && b.traverseVisible(function(X) {
        X.isLight && X.layers.test(I.layers) && (p.pushLight(X), X.castShadow && p.pushShadow(X));
      }), p.setupLights(x._useLegacyLights);
      const $ = /* @__PURE__ */ new Set();
      return b.traverse(function(X) {
        const ve = X.material;
        if (ve)
          if (Array.isArray(ve))
            for (let Ie = 0; Ie < ve.length; Ie++) {
              const He = ve[Ie];
              ke(He, G, X), $.add(He);
            }
          else
            ke(ve, G, X), $.add(ve);
      }), T.pop(), p = null, $;
    }, this.compileAsync = function(b, I, G = null) {
      const $ = this.compile(b, I, G);
      return new Promise((X) => {
        function ve() {
          if ($.forEach(function(Ie) {
            fe.get(Ie).currentProgram.isReady() && $.delete(Ie);
          }), $.size === 0) {
            X(b);
            return;
          }
          setTimeout(ve, 10);
        }
        Ae.get("KHR_parallel_shader_compile") !== null ? ve() : setTimeout(ve, 10);
      });
    };
    let qe = null;
    function it(b) {
      qe && qe(b);
    }
    function lt() {
      ct.stop();
    }
    function Ze() {
      ct.start();
    }
    const ct = new dl();
    ct.setAnimationLoop(it), typeof self < "u" && ct.setContext(self), this.setAnimationLoop = function(b) {
      qe = b, V.setAnimationLoop(b), b === null ? ct.stop() : ct.start();
    }, V.addEventListener("sessionstart", lt), V.addEventListener("sessionend", Ze), this.render = function(b, I) {
      if (I !== void 0 && I.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (R === !0)
        return;
      b.matrixWorldAutoUpdate === !0 && b.updateMatrixWorld(), I.parent === null && I.matrixWorldAutoUpdate === !0 && I.updateMatrixWorld(), V.enabled === !0 && V.isPresenting === !0 && (V.cameraAutoUpdate === !0 && V.updateCamera(I), I = V.getCamera()), b.isScene === !0 && b.onBeforeRender(x, b, I, C), p = Ne.get(b, T.length), p.init(), T.push(p), me.multiplyMatrices(I.projectionMatrix, I.matrixWorldInverse), W.setFromProjectionMatrix(me), le = this.localClippingEnabled, ie = Fe.init(this.clippingPlanes, le), v = ye.get(b, h.length), v.init(), h.push(v), ut(b, I, 0, x.sortObjects), v.finish(), x.sortObjects === !0 && v.sort(K, j), this.info.render.frame++, ie === !0 && Fe.beginShadows();
      const G = p.state.shadowsArray;
      if (de.render(G, b, I), ie === !0 && Fe.endShadows(), this.info.autoReset === !0 && this.info.reset(), he.render(v, b), p.setupLights(x._useLegacyLights), I.isArrayCamera) {
        const $ = I.cameras;
        for (let X = 0, ve = $.length; X < ve; X++) {
          const Ie = $[X];
          Ut(v, b, Ie, Ie.viewport);
        }
      } else
        Ut(v, b, I);
      C !== null && (y.updateMultisampleRenderTarget(C), y.updateRenderTargetMipmap(C)), b.isScene === !0 && b.onAfterRender(x, b, I), Be.resetDefaultState(), ee = -1, E = null, T.pop(), T.length > 0 ? p = T[T.length - 1] : p = null, h.pop(), h.length > 0 ? v = h[h.length - 1] : v = null;
    };
    function ut(b, I, G, $) {
      if (b.visible === !1)
        return;
      if (b.layers.test(I.layers)) {
        if (b.isGroup)
          G = b.renderOrder;
        else if (b.isLOD)
          b.autoUpdate === !0 && b.update(I);
        else if (b.isLight)
          p.pushLight(b), b.castShadow && p.pushShadow(b);
        else if (b.isSprite) {
          if (!b.frustumCulled || W.intersectsSprite(b)) {
            $ && De.setFromMatrixPosition(b.matrixWorld).applyMatrix4(me);
            const Ie = re.update(b), He = b.material;
            He.visible && v.push(b, Ie, He, G, De.z, null);
          }
        } else if ((b.isMesh || b.isLine || b.isPoints) && (!b.frustumCulled || W.intersectsObject(b))) {
          const Ie = re.update(b), He = b.material;
          if ($ && (b.boundingSphere !== void 0 ? (b.boundingSphere === null && b.computeBoundingSphere(), De.copy(b.boundingSphere.center)) : (Ie.boundingSphere === null && Ie.computeBoundingSphere(), De.copy(Ie.boundingSphere.center)), De.applyMatrix4(b.matrixWorld).applyMatrix4(me)), Array.isArray(He)) {
            const We = Ie.groups;
            for (let Ve = 0, Ye = We.length; Ve < Ye; Ve++) {
              const Ke = We[Ve], xt = He[Ke.materialIndex];
              xt && xt.visible && v.push(b, Ie, xt, G, De.z, Ke);
            }
          } else
            He.visible && v.push(b, Ie, He, G, De.z, null);
        }
      }
      const ve = b.children;
      for (let Ie = 0, He = ve.length; Ie < He; Ie++)
        ut(ve[Ie], I, G, $);
    }
    function Ut(b, I, G, $) {
      const X = b.opaque, ve = b.transmissive, Ie = b.transparent;
      p.setupLightsView(G), ie === !0 && Fe.setGlobalState(x.clippingPlanes, G), ve.length > 0 && ft(X, ve, I, G), $ && Ee.viewport(A.copy($)), X.length > 0 && at(X, I, G), ve.length > 0 && at(ve, I, G), Ie.length > 0 && at(Ie, I, G), Ee.buffers.depth.setTest(!0), Ee.buffers.depth.setMask(!0), Ee.buffers.color.setMask(!0), Ee.setPolygonOffset(!1);
    }
    function ft(b, I, G, $) {
      if ((G.isScene === !0 ? G.overrideMaterial : null) !== null)
        return;
      const ve = Ce.isWebGL2;
      Me === null && (Me = new Xn(1, 1, {
        generateMipmaps: !0,
        type: Ae.has("EXT_color_buffer_half_float") ? Oi : Ln,
        minFilter: Fi,
        samples: ve ? 4 : 0
      })), x.getDrawingBufferSize(Ue), ve ? Me.setSize(Ue.x, Ue.y) : Me.setSize(Dr(Ue.x), Dr(Ue.y));
      const Ie = x.getRenderTarget();
      x.setRenderTarget(Me), x.getClearColor(ae), N = x.getClearAlpha(), N < 1 && x.setClearColor(16777215, 0.5), x.clear();
      const He = x.toneMapping;
      x.toneMapping = Cn, at(b, G, $), y.updateMultisampleRenderTarget(Me), y.updateRenderTargetMipmap(Me);
      let We = !1;
      for (let Ve = 0, Ye = I.length; Ve < Ye; Ve++) {
        const Ke = I[Ve], xt = Ke.object, Ht = Ke.geometry, At = Ke.material, dn = Ke.group;
        if (At.side === xn && xt.layers.test($.layers)) {
          const _t = At.side;
          At.side = kt, At.needsUpdate = !0, bt(xt, G, $, Ht, At, dn), At.side = _t, At.needsUpdate = !0, We = !0;
        }
      }
      We === !0 && (y.updateMultisampleRenderTarget(Me), y.updateRenderTargetMipmap(Me)), x.setRenderTarget(Ie), x.setClearColor(ae, N), x.toneMapping = He;
    }
    function at(b, I, G) {
      const $ = I.isScene === !0 ? I.overrideMaterial : null;
      for (let X = 0, ve = b.length; X < ve; X++) {
        const Ie = b[X], He = Ie.object, We = Ie.geometry, Ve = $ === null ? Ie.material : $, Ye = Ie.group;
        He.layers.test(G.layers) && bt(He, I, G, We, Ve, Ye);
      }
    }
    function bt(b, I, G, $, X, ve) {
      b.onBeforeRender(x, I, G, $, X, ve), b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse, b.matrixWorld), b.normalMatrix.getNormalMatrix(b.modelViewMatrix), X.onBeforeRender(x, I, G, $, b, ve), X.transparent === !0 && X.side === xn && X.forceSinglePass === !1 ? (X.side = kt, X.needsUpdate = !0, x.renderBufferDirect(G, I, $, X, b, ve), X.side = Pn, X.needsUpdate = !0, x.renderBufferDirect(G, I, $, X, b, ve), X.side = xn) : x.renderBufferDirect(G, I, $, X, b, ve), b.onAfterRender(x, I, G, $, X, ve);
    }
    function cn(b, I, G) {
      I.isScene !== !0 && (I = pe);
      const $ = fe.get(b), X = p.state.lights, ve = p.state.shadowsArray, Ie = X.state.version, He = oe.getParameters(b, X.state, ve, I, G), We = oe.getProgramCacheKey(He);
      let Ve = $.programs;
      $.environment = b.isMeshStandardMaterial ? I.environment : null, $.fog = I.fog, $.envMap = (b.isMeshStandardMaterial ? D : S).get(b.envMap || $.environment), Ve === void 0 && (b.addEventListener("dispose", se), Ve = /* @__PURE__ */ new Map(), $.programs = Ve);
      let Ye = Ve.get(We);
      if (Ye !== void 0) {
        if ($.currentProgram === Ye && $.lightsStateVersion === Ie)
          return ue(b, He), Ye;
      } else
        He.uniforms = oe.getUniforms(b), b.onBuild(G, He, x), b.onBeforeCompile(He, x), Ye = oe.acquireProgram(He, We), Ve.set(We, Ye), $.uniforms = He.uniforms;
      const Ke = $.uniforms;
      return (!b.isShaderMaterial && !b.isRawShaderMaterial || b.clipping === !0) && (Ke.clippingPlanes = Fe.uniform), ue(b, He), $.needsLights = ot(b), $.lightsStateVersion = Ie, $.needsLights && (Ke.ambientLightColor.value = X.state.ambient, Ke.lightProbe.value = X.state.probe, Ke.directionalLights.value = X.state.directional, Ke.directionalLightShadows.value = X.state.directionalShadow, Ke.spotLights.value = X.state.spot, Ke.spotLightShadows.value = X.state.spotShadow, Ke.rectAreaLights.value = X.state.rectArea, Ke.ltc_1.value = X.state.rectAreaLTC1, Ke.ltc_2.value = X.state.rectAreaLTC2, Ke.pointLights.value = X.state.point, Ke.pointLightShadows.value = X.state.pointShadow, Ke.hemisphereLights.value = X.state.hemi, Ke.directionalShadowMap.value = X.state.directionalShadowMap, Ke.directionalShadowMatrix.value = X.state.directionalShadowMatrix, Ke.spotShadowMap.value = X.state.spotShadowMap, Ke.spotLightMatrix.value = X.state.spotLightMatrix, Ke.spotLightMap.value = X.state.spotLightMap, Ke.pointShadowMap.value = X.state.pointShadowMap, Ke.pointShadowMatrix.value = X.state.pointShadowMatrix), $.currentProgram = Ye, $.uniformsList = null, Ye;
    }
    function P(b) {
      if (b.uniformsList === null) {
        const I = b.currentProgram.getUniforms();
        b.uniformsList = xs.seqWithValue(I.seq, b.uniforms);
      }
      return b.uniformsList;
    }
    function ue(b, I) {
      const G = fe.get(b);
      G.outputColorSpace = I.outputColorSpace, G.batching = I.batching, G.instancing = I.instancing, G.instancingColor = I.instancingColor, G.skinning = I.skinning, G.morphTargets = I.morphTargets, G.morphNormals = I.morphNormals, G.morphColors = I.morphColors, G.morphTargetsCount = I.morphTargetsCount, G.numClippingPlanes = I.numClippingPlanes, G.numIntersection = I.numClipIntersection, G.vertexAlphas = I.vertexAlphas, G.vertexTangents = I.vertexTangents, G.toneMapping = I.toneMapping;
    }
    function Pe(b, I, G, $, X) {
      I.isScene !== !0 && (I = pe), y.resetTextureUnits();
      const ve = I.fog, Ie = $.isMeshStandardMaterial ? I.environment : null, He = C === null ? x.outputColorSpace : C.isXRRenderTarget === !0 ? C.texture.colorSpace : vn, We = ($.isMeshStandardMaterial ? D : S).get($.envMap || Ie), Ve = $.vertexColors === !0 && !!G.attributes.color && G.attributes.color.itemSize === 4, Ye = !!G.attributes.tangent && (!!$.normalMap || $.anisotropy > 0), Ke = !!G.morphAttributes.position, xt = !!G.morphAttributes.normal, Ht = !!G.morphAttributes.color;
      let At = Cn;
      $.toneMapped && (C === null || C.isXRRenderTarget === !0) && (At = x.toneMapping);
      const dn = G.morphAttributes.position || G.morphAttributes.normal || G.morphAttributes.color, _t = dn !== void 0 ? dn.length : 0, tt = fe.get($), Ds = p.state.lights;
      if (ie === !0 && (le === !0 || b !== E)) {
        const qt = b === E && $.id === ee;
        Fe.setState($, b, qt);
      }
      let vt = !1;
      $.version === tt.__version ? (tt.needsLights && tt.lightsStateVersion !== Ds.state.version || tt.outputColorSpace !== He || X.isBatchedMesh && tt.batching === !1 || !X.isBatchedMesh && tt.batching === !0 || X.isInstancedMesh && tt.instancing === !1 || !X.isInstancedMesh && tt.instancing === !0 || X.isSkinnedMesh && tt.skinning === !1 || !X.isSkinnedMesh && tt.skinning === !0 || X.isInstancedMesh && tt.instancingColor === !0 && X.instanceColor === null || X.isInstancedMesh && tt.instancingColor === !1 && X.instanceColor !== null || tt.envMap !== We || $.fog === !0 && tt.fog !== ve || tt.numClippingPlanes !== void 0 && (tt.numClippingPlanes !== Fe.numPlanes || tt.numIntersection !== Fe.numIntersection) || tt.vertexAlphas !== Ve || tt.vertexTangents !== Ye || tt.morphTargets !== Ke || tt.morphNormals !== xt || tt.morphColors !== Ht || tt.toneMapping !== At || Ce.isWebGL2 === !0 && tt.morphTargetsCount !== _t) && (vt = !0) : (vt = !0, tt.__version = $.version);
      let Nn = tt.currentProgram;
      vt === !0 && (Nn = cn($, I, X));
      let Vr = !1, Si = !1, Us = !1;
      const Pt = Nn.getUniforms(), Dn = tt.uniforms;
      if (Ee.useProgram(Nn.program) && (Vr = !0, Si = !0, Us = !0), $.id !== ee && (ee = $.id, Si = !0), Vr || E !== b) {
        Pt.setValue(z, "projectionMatrix", b.projectionMatrix), Pt.setValue(z, "viewMatrix", b.matrixWorldInverse);
        const qt = Pt.map.cameraPosition;
        qt !== void 0 && qt.setValue(z, De.setFromMatrixPosition(b.matrixWorld)), Ce.logarithmicDepthBuffer && Pt.setValue(
          z,
          "logDepthBufFC",
          2 / (Math.log(b.far + 1) / Math.LN2)
        ), ($.isMeshPhongMaterial || $.isMeshToonMaterial || $.isMeshLambertMaterial || $.isMeshBasicMaterial || $.isMeshStandardMaterial || $.isShaderMaterial) && Pt.setValue(z, "isOrthographic", b.isOrthographicCamera === !0), E !== b && (E = b, Si = !0, Us = !0);
      }
      if (X.isSkinnedMesh) {
        Pt.setOptional(z, X, "bindMatrix"), Pt.setOptional(z, X, "bindMatrixInverse");
        const qt = X.skeleton;
        qt && (Ce.floatVertexTextures ? (qt.boneTexture === null && qt.computeBoneTexture(), Pt.setValue(z, "boneTexture", qt.boneTexture, y)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
      }
      X.isBatchedMesh && (Pt.setOptional(z, X, "batchingTexture"), Pt.setValue(z, "batchingTexture", X._matricesTexture, y));
      const Is = G.morphAttributes;
      if ((Is.position !== void 0 || Is.normal !== void 0 || Is.color !== void 0 && Ce.isWebGL2 === !0) && ze.update(X, G, Nn), (Si || tt.receiveShadow !== X.receiveShadow) && (tt.receiveShadow = X.receiveShadow, Pt.setValue(z, "receiveShadow", X.receiveShadow)), $.isMeshGouraudMaterial && $.envMap !== null && (Dn.envMap.value = We, Dn.flipEnvMap.value = We.isCubeTexture && We.isRenderTargetTexture === !1 ? -1 : 1), Si && (Pt.setValue(z, "toneMappingExposure", x.toneMappingExposure), tt.needsLights && je(Dn, Us), ve && $.fog === !0 && ge.refreshFogUniforms(Dn, ve), ge.refreshMaterialUniforms(Dn, $, ne, M, Me), xs.upload(z, P(tt), Dn, y)), $.isShaderMaterial && $.uniformsNeedUpdate === !0 && (xs.upload(z, P(tt), Dn, y), $.uniformsNeedUpdate = !1), $.isSpriteMaterial && Pt.setValue(z, "center", X.center), Pt.setValue(z, "modelViewMatrix", X.modelViewMatrix), Pt.setValue(z, "normalMatrix", X.normalMatrix), Pt.setValue(z, "modelMatrix", X.matrixWorld), $.isShaderMaterial || $.isRawShaderMaterial) {
        const qt = $.uniformsGroups;
        for (let Fs = 0, yl = qt.length; Fs < yl; Fs++)
          if (Ce.isWebGL2) {
            const Wr = qt[Fs];
            $e.update(Wr, Nn), $e.bind(Wr, Nn);
          } else
            console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
      }
      return Nn;
    }
    function je(b, I) {
      b.ambientLightColor.needsUpdate = I, b.lightProbe.needsUpdate = I, b.directionalLights.needsUpdate = I, b.directionalLightShadows.needsUpdate = I, b.pointLights.needsUpdate = I, b.pointLightShadows.needsUpdate = I, b.spotLights.needsUpdate = I, b.spotLightShadows.needsUpdate = I, b.rectAreaLights.needsUpdate = I, b.hemisphereLights.needsUpdate = I;
    }
    function ot(b) {
      return b.isMeshLambertMaterial || b.isMeshToonMaterial || b.isMeshPhongMaterial || b.isMeshStandardMaterial || b.isShadowMaterial || b.isShaderMaterial && b.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return U;
    }, this.getActiveMipmapLevel = function() {
      return L;
    }, this.getRenderTarget = function() {
      return C;
    }, this.setRenderTargetTextures = function(b, I, G) {
      fe.get(b.texture).__webglTexture = I, fe.get(b.depthTexture).__webglTexture = G;
      const $ = fe.get(b);
      $.__hasExternalTextures = !0, $.__hasExternalTextures && ($.__autoAllocateDepthBuffer = G === void 0, $.__autoAllocateDepthBuffer || Ae.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), $.__useRenderToTexture = !1));
    }, this.setRenderTargetFramebuffer = function(b, I) {
      const G = fe.get(b);
      G.__webglFramebuffer = I, G.__useDefaultFramebuffer = I === void 0;
    }, this.setRenderTarget = function(b, I = 0, G = 0) {
      C = b, U = I, L = G;
      let $ = !0, X = null, ve = !1, Ie = !1;
      if (b) {
        const We = fe.get(b);
        We.__useDefaultFramebuffer !== void 0 ? (Ee.bindFramebuffer(z.FRAMEBUFFER, null), $ = !1) : We.__webglFramebuffer === void 0 ? y.setupRenderTarget(b) : We.__hasExternalTextures && y.rebindTextures(b, fe.get(b.texture).__webglTexture, fe.get(b.depthTexture).__webglTexture);
        const Ve = b.texture;
        (Ve.isData3DTexture || Ve.isDataArrayTexture || Ve.isCompressedArrayTexture) && (Ie = !0);
        const Ye = fe.get(b).__webglFramebuffer;
        b.isWebGLCubeRenderTarget ? (Array.isArray(Ye[I]) ? X = Ye[I][G] : X = Ye[I], ve = !0) : Ce.isWebGL2 && b.samples > 0 && y.useMultisampledRTT(b) === !1 ? X = fe.get(b).__webglMultisampledFramebuffer : Array.isArray(Ye) ? X = Ye[G] : X = Ye, A.copy(b.viewport), O.copy(b.scissor), te = b.scissorTest;
      } else
        A.copy(B).multiplyScalar(ne).floor(), O.copy(J).multiplyScalar(ne).floor(), te = Z;
      if (Ee.bindFramebuffer(z.FRAMEBUFFER, X) && Ce.drawBuffers && $ && Ee.drawBuffers(b, X), Ee.viewport(A), Ee.scissor(O), Ee.setScissorTest(te), ve) {
        const We = fe.get(b.texture);
        z.framebufferTexture2D(z.FRAMEBUFFER, z.COLOR_ATTACHMENT0, z.TEXTURE_CUBE_MAP_POSITIVE_X + I, We.__webglTexture, G);
      } else if (Ie) {
        const We = fe.get(b.texture), Ve = I || 0;
        z.framebufferTextureLayer(z.FRAMEBUFFER, z.COLOR_ATTACHMENT0, We.__webglTexture, G || 0, Ve);
      }
      ee = -1;
    }, this.readRenderTargetPixels = function(b, I, G, $, X, ve, Ie) {
      if (!(b && b.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let He = fe.get(b).__webglFramebuffer;
      if (b.isWebGLCubeRenderTarget && Ie !== void 0 && (He = He[Ie]), He) {
        Ee.bindFramebuffer(z.FRAMEBUFFER, He);
        try {
          const We = b.texture, Ve = We.format, Ye = We.type;
          if (Ve !== rn && Se.convert(Ve) !== z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          const Ke = Ye === Oi && (Ae.has("EXT_color_buffer_half_float") || Ce.isWebGL2 && Ae.has("EXT_color_buffer_float"));
          if (Ye !== Ln && Se.convert(Ye) !== z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
          !(Ye === An && (Ce.isWebGL2 || Ae.has("OES_texture_float") || Ae.has("WEBGL_color_buffer_float"))) && // Chrome Mac >= 52 and Firefox
          !Ke) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          I >= 0 && I <= b.width - $ && G >= 0 && G <= b.height - X && z.readPixels(I, G, $, X, Se.convert(Ve), Se.convert(Ye), ve);
        } finally {
          const We = C !== null ? fe.get(C).__webglFramebuffer : null;
          Ee.bindFramebuffer(z.FRAMEBUFFER, We);
        }
      }
    }, this.copyFramebufferToTexture = function(b, I, G = 0) {
      const $ = Math.pow(2, -G), X = Math.floor(I.image.width * $), ve = Math.floor(I.image.height * $);
      y.setTexture2D(I, 0), z.copyTexSubImage2D(z.TEXTURE_2D, G, 0, 0, b.x, b.y, X, ve), Ee.unbindTexture();
    }, this.copyTextureToTexture = function(b, I, G, $ = 0) {
      const X = I.image.width, ve = I.image.height, Ie = Se.convert(G.format), He = Se.convert(G.type);
      y.setTexture2D(G, 0), z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL, G.flipY), z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL, G.premultiplyAlpha), z.pixelStorei(z.UNPACK_ALIGNMENT, G.unpackAlignment), I.isDataTexture ? z.texSubImage2D(z.TEXTURE_2D, $, b.x, b.y, X, ve, Ie, He, I.image.data) : I.isCompressedTexture ? z.compressedTexSubImage2D(z.TEXTURE_2D, $, b.x, b.y, I.mipmaps[0].width, I.mipmaps[0].height, Ie, I.mipmaps[0].data) : z.texSubImage2D(z.TEXTURE_2D, $, b.x, b.y, Ie, He, I.image), $ === 0 && G.generateMipmaps && z.generateMipmap(z.TEXTURE_2D), Ee.unbindTexture();
    }, this.copyTextureToTexture3D = function(b, I, G, $, X = 0) {
      if (x.isWebGL1Renderer) {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
        return;
      }
      const ve = b.max.x - b.min.x + 1, Ie = b.max.y - b.min.y + 1, He = b.max.z - b.min.z + 1, We = Se.convert($.format), Ve = Se.convert($.type);
      let Ye;
      if ($.isData3DTexture)
        y.setTexture3D($, 0), Ye = z.TEXTURE_3D;
      else if ($.isDataArrayTexture || $.isCompressedArrayTexture)
        y.setTexture2DArray($, 0), Ye = z.TEXTURE_2D_ARRAY;
      else {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        return;
      }
      z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL, $.flipY), z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL, $.premultiplyAlpha), z.pixelStorei(z.UNPACK_ALIGNMENT, $.unpackAlignment);
      const Ke = z.getParameter(z.UNPACK_ROW_LENGTH), xt = z.getParameter(z.UNPACK_IMAGE_HEIGHT), Ht = z.getParameter(z.UNPACK_SKIP_PIXELS), At = z.getParameter(z.UNPACK_SKIP_ROWS), dn = z.getParameter(z.UNPACK_SKIP_IMAGES), _t = G.isCompressedTexture ? G.mipmaps[X] : G.image;
      z.pixelStorei(z.UNPACK_ROW_LENGTH, _t.width), z.pixelStorei(z.UNPACK_IMAGE_HEIGHT, _t.height), z.pixelStorei(z.UNPACK_SKIP_PIXELS, b.min.x), z.pixelStorei(z.UNPACK_SKIP_ROWS, b.min.y), z.pixelStorei(z.UNPACK_SKIP_IMAGES, b.min.z), G.isDataTexture || G.isData3DTexture ? z.texSubImage3D(Ye, X, I.x, I.y, I.z, ve, Ie, He, We, Ve, _t.data) : G.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), z.compressedTexSubImage3D(Ye, X, I.x, I.y, I.z, ve, Ie, He, We, _t.data)) : z.texSubImage3D(Ye, X, I.x, I.y, I.z, ve, Ie, He, We, Ve, _t), z.pixelStorei(z.UNPACK_ROW_LENGTH, Ke), z.pixelStorei(z.UNPACK_IMAGE_HEIGHT, xt), z.pixelStorei(z.UNPACK_SKIP_PIXELS, Ht), z.pixelStorei(z.UNPACK_SKIP_ROWS, At), z.pixelStorei(z.UNPACK_SKIP_IMAGES, dn), X === 0 && $.generateMipmaps && z.generateMipmap(Ye), Ee.unbindTexture();
    }, this.initTexture = function(b) {
      b.isCubeTexture ? y.setTextureCube(b, 0) : b.isData3DTexture ? y.setTexture3D(b, 0) : b.isDataArrayTexture || b.isCompressedArrayTexture ? y.setTexture2DArray(b, 0) : y.setTexture2D(b, 0), Ee.unbindTexture();
    }, this.resetState = function() {
      U = 0, L = 0, C = null, Ee.reset(), Be.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return _n;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorSpace = e === zr ? "display-p3" : "srgb", t.unpackColorSpace = pt.workingColorSpace === Cs ? "display-p3" : "srgb";
  }
  get outputEncoding() {
    return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace === Ct ? jn : qo;
  }
  set outputEncoding(e) {
    console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace = e === jn ? Ct : vn;
  }
  get useLegacyLights() {
    return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights;
  }
  set useLegacyLights(e) {
    console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights = e;
  }
}
class fm extends _l {
}
fm.prototype.isWebGL1Renderer = !0;
class yo extends Lt {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t;
  }
}
class Ui extends yi {
  constructor(e) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new et(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const Mo = /* @__PURE__ */ new H(), So = /* @__PURE__ */ new H(), bo = /* @__PURE__ */ new yt(), mr = /* @__PURE__ */ new tl(), ds = /* @__PURE__ */ new Ls();
class pm extends Lt {
  constructor(e = new Yt(), t = new Ui()) {
    super(), this.isLine = !0, this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [0];
      for (let s = 1, r = t.count; s < r; s++)
        Mo.fromBufferAttribute(t, s - 1), So.fromBufferAttribute(t, s), n[s] = n[s - 1], n[s] += Mo.distanceTo(So);
      e.setAttribute("lineDistance", new Mt(n, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, s = this.matrixWorld, r = e.params.Line.threshold, o = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), ds.copy(n.boundingSphere), ds.applyMatrix4(s), ds.radius += r, e.ray.intersectsSphere(ds) === !1)
      return;
    bo.copy(s).invert(), mr.copy(e.ray).applyMatrix4(bo);
    const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a, c = new H(), d = new H(), u = new H(), f = new H(), g = this.isLineSegments ? 2 : 1, _ = n.index, p = n.attributes.position;
    if (_ !== null) {
      const h = Math.max(0, o.start), T = Math.min(_.count, o.start + o.count);
      for (let x = h, R = T - 1; x < R; x += g) {
        const U = _.getX(x), L = _.getX(x + 1);
        if (c.fromBufferAttribute(p, U), d.fromBufferAttribute(p, L), mr.distanceSqToSegment(c, d, f, u) > l)
          continue;
        f.applyMatrix4(this.matrixWorld);
        const ee = e.ray.origin.distanceTo(f);
        ee < e.near || ee > e.far || t.push({
          distance: ee,
          // What do we want? intersection point on the ray or on the segment??
          // point: raycaster.ray.at( distance ),
          point: u.clone().applyMatrix4(this.matrixWorld),
          index: x,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    } else {
      const h = Math.max(0, o.start), T = Math.min(p.count, o.start + o.count);
      for (let x = h, R = T - 1; x < R; x += g) {
        if (c.fromBufferAttribute(p, x), d.fromBufferAttribute(p, x + 1), mr.distanceSqToSegment(c, d, f, u) > l)
          continue;
        f.applyMatrix4(this.matrixWorld);
        const L = e.ray.origin.distanceTo(f);
        L < e.near || L > e.far || t.push({
          distance: L,
          // What do we want? intersection point on the ray or on the segment??
          // point: raycaster.ray.at( distance ),
          point: u.clone().applyMatrix4(this.matrixWorld),
          index: x,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const s = t[n[0]];
      if (s !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, o = s.length; r < o; r++) {
          const a = s[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r;
        }
      }
    }
  }
}
const Eo = /* @__PURE__ */ new H(), wo = /* @__PURE__ */ new H();
class _s extends pm {
  constructor(e, t) {
    super(e, t), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let s = 0, r = t.count; s < r; s += 2)
        Eo.fromBufferAttribute(t, s), wo.fromBufferAttribute(t, s + 1), n[s] = s === 0 ? 0 : n[s - 1], n[s + 1] = n[s] + Eo.distanceTo(wo);
      e.setAttribute("lineDistance", new Mt(n, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class Li extends Gt {
  constructor(e, t, n, s, r, o, a, l, c) {
    super(e, t, n, s, r, o, a, l, c), this.isCanvasTexture = !0, this.needsUpdate = !0;
  }
}
class Et extends Yt {
  constructor(e = 1, t = 1, n = 1, s = 32, r = 1, o = !1, a = 0, l = Math.PI * 2) {
    super(), this.type = "CylinderGeometry", this.parameters = {
      radiusTop: e,
      radiusBottom: t,
      height: n,
      radialSegments: s,
      heightSegments: r,
      openEnded: o,
      thetaStart: a,
      thetaLength: l
    };
    const c = this;
    s = Math.floor(s), r = Math.floor(r);
    const d = [], u = [], f = [], g = [];
    let _ = 0;
    const v = [], p = n / 2;
    let h = 0;
    T(), o === !1 && (e > 0 && x(!0), t > 0 && x(!1)), this.setIndex(d), this.setAttribute("position", new Mt(u, 3)), this.setAttribute("normal", new Mt(f, 3)), this.setAttribute("uv", new Mt(g, 2));
    function T() {
      const R = new H(), U = new H();
      let L = 0;
      const C = (t - e) / n;
      for (let ee = 0; ee <= r; ee++) {
        const E = [], A = ee / r, O = A * (t - e) + e;
        for (let te = 0; te <= s; te++) {
          const ae = te / s, N = ae * l + a, Y = Math.sin(N), M = Math.cos(N);
          U.x = O * Y, U.y = -A * n + p, U.z = O * M, u.push(U.x, U.y, U.z), R.set(Y, C, M).normalize(), f.push(R.x, R.y, R.z), g.push(ae, 1 - A), E.push(_++);
        }
        v.push(E);
      }
      for (let ee = 0; ee < s; ee++)
        for (let E = 0; E < r; E++) {
          const A = v[E][ee], O = v[E + 1][ee], te = v[E + 1][ee + 1], ae = v[E][ee + 1];
          d.push(A, O, ae), d.push(O, te, ae), L += 6;
        }
      c.addGroup(h, L, 0), h += L;
    }
    function x(R) {
      const U = _, L = new rt(), C = new H();
      let ee = 0;
      const E = R === !0 ? e : t, A = R === !0 ? 1 : -1;
      for (let te = 1; te <= s; te++)
        u.push(0, p * A, 0), f.push(0, A, 0), g.push(0.5, 0.5), _++;
      const O = _;
      for (let te = 0; te <= s; te++) {
        const N = te / s * l + a, Y = Math.cos(N), M = Math.sin(N);
        C.x = E * M, C.y = p * A, C.z = E * Y, u.push(C.x, C.y, C.z), f.push(0, A, 0), L.x = Y * 0.5 + 0.5, L.y = M * 0.5 * A + 0.5, g.push(L.x, L.y), _++;
      }
      for (let te = 0; te < s; te++) {
        const ae = U + te, N = O + te;
        R === !0 ? d.push(N, N + 1, ae) : d.push(N + 1, N, ae), ee += 3;
      }
      c.addGroup(h, ee, R === !0 ? 1 : 2), h += ee;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Et(e.radiusTop, e.radiusBottom, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength);
  }
}
const hs = /* @__PURE__ */ new H(), us = /* @__PURE__ */ new H(), gr = /* @__PURE__ */ new H(), fs = /* @__PURE__ */ new Jt();
class xr extends Yt {
  constructor(e = null, t = 1) {
    if (super(), this.type = "EdgesGeometry", this.parameters = {
      geometry: e,
      thresholdAngle: t
    }, e !== null) {
      const s = Math.pow(10, 4), r = Math.cos(gs * t), o = e.getIndex(), a = e.getAttribute("position"), l = o ? o.count : a.count, c = [0, 0, 0], d = ["a", "b", "c"], u = new Array(3), f = {}, g = [];
      for (let _ = 0; _ < l; _ += 3) {
        o ? (c[0] = o.getX(_), c[1] = o.getX(_ + 1), c[2] = o.getX(_ + 2)) : (c[0] = _, c[1] = _ + 1, c[2] = _ + 2);
        const { a: v, b: p, c: h } = fs;
        if (v.fromBufferAttribute(a, c[0]), p.fromBufferAttribute(a, c[1]), h.fromBufferAttribute(a, c[2]), fs.getNormal(gr), u[0] = `${Math.round(v.x * s)},${Math.round(v.y * s)},${Math.round(v.z * s)}`, u[1] = `${Math.round(p.x * s)},${Math.round(p.y * s)},${Math.round(p.z * s)}`, u[2] = `${Math.round(h.x * s)},${Math.round(h.y * s)},${Math.round(h.z * s)}`, !(u[0] === u[1] || u[1] === u[2] || u[2] === u[0]))
          for (let T = 0; T < 3; T++) {
            const x = (T + 1) % 3, R = u[T], U = u[x], L = fs[d[T]], C = fs[d[x]], ee = `${R}_${U}`, E = `${U}_${R}`;
            E in f && f[E] ? (gr.dot(f[E].normal) <= r && (g.push(L.x, L.y, L.z), g.push(C.x, C.y, C.z)), f[E] = null) : ee in f || (f[ee] = {
              index0: c[T],
              index1: c[x],
              normal: gr.clone()
            });
          }
      }
      for (const _ in f)
        if (f[_]) {
          const { index0: v, index1: p } = f[_];
          hs.fromBufferAttribute(a, v), us.fromBufferAttribute(a, p), g.push(hs.x, hs.y, hs.z), g.push(us.x, us.y, us.z);
        }
      this.setAttribute("position", new Mt(g, 3));
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
}
class As extends Yt {
  constructor(e = 1, t = 32, n = 16, s = 0, r = Math.PI * 2, o = 0, a = Math.PI) {
    super(), this.type = "SphereGeometry", this.parameters = {
      radius: e,
      widthSegments: t,
      heightSegments: n,
      phiStart: s,
      phiLength: r,
      thetaStart: o,
      thetaLength: a
    }, t = Math.max(3, Math.floor(t)), n = Math.max(2, Math.floor(n));
    const l = Math.min(o + a, Math.PI);
    let c = 0;
    const d = [], u = new H(), f = new H(), g = [], _ = [], v = [], p = [];
    for (let h = 0; h <= n; h++) {
      const T = [], x = h / n;
      let R = 0;
      h === 0 && o === 0 ? R = 0.5 / t : h === n && l === Math.PI && (R = -0.5 / t);
      for (let U = 0; U <= t; U++) {
        const L = U / t;
        u.x = -e * Math.cos(s + L * r) * Math.sin(o + x * a), u.y = e * Math.cos(o + x * a), u.z = e * Math.sin(s + L * r) * Math.sin(o + x * a), _.push(u.x, u.y, u.z), f.copy(u).normalize(), v.push(f.x, f.y, f.z), p.push(L + R, 1 - x), T.push(c++);
      }
      d.push(T);
    }
    for (let h = 0; h < n; h++)
      for (let T = 0; T < t; T++) {
        const x = d[h][T + 1], R = d[h][T], U = d[h + 1][T], L = d[h + 1][T + 1];
        (h !== 0 || o > 0) && g.push(x, R, L), (h !== n - 1 || l < Math.PI) && g.push(R, U, L);
      }
    this.setIndex(g), this.setAttribute("position", new Mt(_, 3)), this.setAttribute("normal", new Mt(v, 3)), this.setAttribute("uv", new Mt(p, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new As(e.radius, e.widthSegments, e.heightSegments, e.phiStart, e.phiLength, e.thetaStart, e.thetaLength);
  }
}
class Ii extends Yt {
  constructor(e = 1, t = 0.4, n = 12, s = 48, r = Math.PI * 2) {
    super(), this.type = "TorusGeometry", this.parameters = {
      radius: e,
      tube: t,
      radialSegments: n,
      tubularSegments: s,
      arc: r
    }, n = Math.floor(n), s = Math.floor(s);
    const o = [], a = [], l = [], c = [], d = new H(), u = new H(), f = new H();
    for (let g = 0; g <= n; g++)
      for (let _ = 0; _ <= s; _++) {
        const v = _ / s * r, p = g / n * Math.PI * 2;
        u.x = (e + t * Math.cos(p)) * Math.cos(v), u.y = (e + t * Math.cos(p)) * Math.sin(v), u.z = t * Math.sin(p), a.push(u.x, u.y, u.z), d.x = e * Math.cos(v), d.y = e * Math.sin(v), f.subVectors(u, d).normalize(), l.push(f.x, f.y, f.z), c.push(_ / s), c.push(g / n);
      }
    for (let g = 1; g <= n; g++)
      for (let _ = 1; _ <= s; _++) {
        const v = (s + 1) * g + _ - 1, p = (s + 1) * (g - 1) + _ - 1, h = (s + 1) * (g - 1) + _, T = (s + 1) * g + _;
        o.push(v, p, T), o.push(p, h, T);
      }
    this.setIndex(o), this.setAttribute("position", new Mt(a, 3)), this.setAttribute("normal", new Mt(l, 3)), this.setAttribute("uv", new Mt(c, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Ii(e.radius, e.tube, e.radialSegments, e.tubularSegments, e.arc);
  }
}
class Je extends yi {
  constructor(e) {
    super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new et(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new et(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = $o, this.normalScale = new rt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class jt extends Je {
  constructor(e) {
    super(), this.isMeshPhysicalMaterial = !0, this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new rt(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
      get: function() {
        return Ot(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
      },
      set: function(t) {
        this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
      }
    }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new et(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new et(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new et(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(e);
  }
  get anisotropy() {
    return this._anisotropy;
  }
  set anisotropy(e) {
    this._anisotropy > 0 != e > 0 && this.version++, this._anisotropy = e;
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(e) {
    this._clearcoat > 0 != e > 0 && this.version++, this._clearcoat = e;
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(e) {
    this._iridescence > 0 != e > 0 && this.version++, this._iridescence = e;
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(e) {
    this._sheen > 0 != e > 0 && this.version++, this._sheen = e;
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(e) {
    this._transmission > 0 != e > 0 && this.version++, this._transmission = e;
  }
  copy(e) {
    return super.copy(e), this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.anisotropy = e.anisotropy, this.anisotropyRotation = e.anisotropyRotation, this.anisotropyMap = e.anisotropyMap, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.ior = e.ior, this.iridescence = e.iridescence, this.iridescenceMap = e.iridescenceMap, this.iridescenceIOR = e.iridescenceIOR, this.iridescenceThicknessRange = [...e.iridescenceThicknessRange], this.iridescenceThicknessMap = e.iridescenceThicknessMap, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this;
  }
}
class Hr extends Lt {
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new et(e), this.intensity = t;
  }
  dispose() {
  }
  copy(e, t) {
    return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), t;
  }
}
const _r = /* @__PURE__ */ new yt(), To = /* @__PURE__ */ new H(), Ao = /* @__PURE__ */ new H();
class vl {
  constructor(e) {
    this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new rt(512, 512), this.map = null, this.mapPass = null, this.matrix = new yt(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new kr(), this._frameExtents = new rt(1, 1), this._viewportCount = 1, this._viewports = [
      new gt(0, 0, 1, 1)
    ];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera, n = this.matrix;
    To.setFromMatrixPosition(e.matrixWorld), t.position.copy(To), Ao.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(Ao), t.updateMatrixWorld(), _r.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(_r), n.set(
      0.5,
      0,
      0,
      0.5,
      0,
      0.5,
      0,
      0.5,
      0,
      0,
      0.5,
      0.5,
      0,
      0,
      0,
      1
    ), n.multiply(_r);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e;
  }
}
const Ro = /* @__PURE__ */ new yt(), Pi = /* @__PURE__ */ new H(), vr = /* @__PURE__ */ new H();
class mm extends vl {
  constructor() {
    super(new Xt(90, 1, 0.5, 500)), this.isPointLightShadow = !0, this._frameExtents = new rt(4, 2), this._viewportCount = 6, this._viewports = [
      // These viewports map a cube-map onto a 2D texture with the
      // following orientation:
      //
      //  xzXZ
      //   y Y
      //
      // X - Positive x direction
      // x - Negative x direction
      // Y - Positive y direction
      // y - Negative y direction
      // Z - Positive z direction
      // z - Negative z direction
      // positive X
      new gt(2, 1, 1, 1),
      // negative X
      new gt(0, 1, 1, 1),
      // positive Z
      new gt(3, 1, 1, 1),
      // negative Z
      new gt(1, 1, 1, 1),
      // positive Y
      new gt(3, 0, 1, 1),
      // negative Y
      new gt(1, 0, 1, 1)
    ], this._cubeDirections = [
      new H(1, 0, 0),
      new H(-1, 0, 0),
      new H(0, 0, 1),
      new H(0, 0, -1),
      new H(0, 1, 0),
      new H(0, -1, 0)
    ], this._cubeUps = [
      new H(0, 1, 0),
      new H(0, 1, 0),
      new H(0, 1, 0),
      new H(0, 1, 0),
      new H(0, 0, 1),
      new H(0, 0, -1)
    ];
  }
  updateMatrices(e, t = 0) {
    const n = this.camera, s = this.matrix, r = e.distance || n.far;
    r !== n.far && (n.far = r, n.updateProjectionMatrix()), Pi.setFromMatrixPosition(e.matrixWorld), n.position.copy(Pi), vr.copy(n.position), vr.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(vr), n.updateMatrixWorld(), s.makeTranslation(-Pi.x, -Pi.y, -Pi.z), Ro.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Ro);
  }
}
class ps extends Hr {
  constructor(e, t, n = 0, s = 2) {
    super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = s, this.shadow = new mm();
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this;
  }
}
class gm extends vl {
  constructor() {
    super(new hl(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class yr extends Hr {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(Lt.DEFAULT_UP), this.updateMatrix(), this.target = new Lt(), this.shadow = new gm();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
class xm extends Hr {
  constructor(e, t) {
    super(e, t), this.isAmbientLight = !0, this.type = "AmbientLight";
  }
}
class _m extends _s {
  constructor(e = 10, t = 10, n = 4473924, s = 8947848) {
    n = new et(n), s = new et(s);
    const r = t / 2, o = e / t, a = e / 2, l = [], c = [];
    for (let f = 0, g = 0, _ = -a; f <= t; f++, _ += o) {
      l.push(-a, 0, _, a, 0, _), l.push(_, 0, -a, _, 0, a);
      const v = f === r ? n : s;
      v.toArray(c, g), g += 3, v.toArray(c, g), g += 3, v.toArray(c, g), g += 3, v.toArray(c, g), g += 3;
    }
    const d = new Yt();
    d.setAttribute("position", new Mt(l, 3)), d.setAttribute("color", new Mt(c, 3));
    const u = new Ui({ vertexColors: !0, toneMapped: !1 });
    super(d, u), this.type = "GridHelper";
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: Or
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Or);
const Co = {
  default: {
    position: { x: 1050, y: 800, z: 1050 },
    // Slightly more zoomed out
    target: { x: 0, y: 100, z: 0 },
    name: "Default",
    icon: "🏠"
  },
  top: {
    position: { x: 0, y: 1200, z: 1 },
    // Higher for better top view
    target: { x: 0, y: 0, z: 0 },
    name: "Top View",
    icon: "⬇"
  },
  front: {
    position: { x: 0, y: 300, z: 1e3 },
    // Further back
    target: { x: 0, y: 100, z: 0 },
    name: "Front",
    icon: "⬆"
  },
  side: {
    position: { x: 1e3, y: 300, z: 0 },
    // Further to the side
    target: { x: 0, y: 100, z: 0 },
    name: "Side",
    icon: "➡"
  },
  corner: {
    position: { x: -900, y: 700, z: -900 },
    // More zoomed out corner
    target: { x: 0, y: 100, z: 0 },
    name: "Corner",
    icon: "↖"
  }
}, vm = ({ floor: i, isOpen: e, onClose: t }) => {
  const n = zt(null), s = zt(null), r = zt(null), o = zt(null), a = zt(null), [l, c] = ht(!1), [d, u] = ht("default"), [f, g] = ht(!1), _ = zt(3e-3), v = zt(null), p = (x) => {
    if (!r.current || f)
      return;
    const R = Co[x], U = r.current;
    v.current = {
      startPos: U.position.clone(),
      endPos: new H(R.position.x, R.position.y, R.position.z),
      startTarget: new H(0, 100, 0),
      endTarget: new H(R.target.x, R.target.y, R.target.z),
      progress: 0
    }, g(!0), u(x), c(!1);
  }, h = (x) => {
    if (!r.current || f)
      return;
    const R = r.current, U = Math.sqrt(R.position.x ** 2 + R.position.z ** 2), L = Math.atan2(R.position.z, R.position.x);
    switch (x) {
      case "left":
        const C = L + 0.2;
        R.position.x = U * Math.cos(C), R.position.z = U * Math.sin(C);
        break;
      case "right":
        const ee = L - 0.2;
        R.position.x = U * Math.cos(ee), R.position.z = U * Math.sin(ee);
        break;
      case "up":
        R.position.y = Math.min(R.position.y + 50, 900);
        break;
      case "down":
        R.position.y = Math.max(R.position.y - 50, 100);
        break;
    }
    R.lookAt(0, 100, 0);
  }, T = (x) => {
    !r.current || f || (r.current.position.multiplyScalar(x), r.current.lookAt(0, 100, 0));
  };
  return ui(() => {
    if (!e || !n.current)
      return;
    const x = new yo();
    x.background = new et(14608111), s.current = x;
    const R = new Xt(
      45,
      n.current.clientWidth / n.current.clientHeight,
      0.1,
      1e4
    );
    R.position.set(1050, 800, 1050), R.lookAt(0, 100, 0), r.current = R;
    const U = new _l({ antialias: !0, alpha: !0 });
    U.setSize(n.current.clientWidth, n.current.clientHeight), U.shadowMap.enabled = !0, U.shadowMap.type = Oo, U.toneMapping = zo, U.toneMappingExposure = 1.2, n.current.appendChild(U.domElement), o.current = U;
    const L = new Ur(U), C = new yo();
    C.background = new et(16777215);
    const ee = L.fromScene(C).texture;
    x.environment = ee, L.dispose(), x.add(new xm(16777215, 0.6));
    const E = new yr(16777215, 0.8);
    E.position.set(400, 600, 300), E.castShadow = !0, E.shadow.mapSize.width = 4096, E.shadow.mapSize.height = 4096, E.shadow.camera.left = E.shadow.camera.bottom = -700, E.shadow.camera.right = E.shadow.camera.top = 700, E.shadow.bias = -1e-4, x.add(E);
    const A = new yr(16777215, 0.3);
    A.position.set(-400, 400, -300), x.add(A);
    const O = new yr(16777215, 0.2);
    O.position.set(0, 300, -500), x.add(O);
    const te = new we(
      new Kt(1200, 1200),
      new Je({ color: 13684949, roughness: 0.8, metalness: 0.2 })
      // Medium grey
    );
    te.rotation.x = -Math.PI / 2, te.receiveShadow = !0, x.add(te);
    const ae = new _m(3e3, 150, 10526888, 12105920);
    ae.position.y = 1, x.add(ae), i.walls.forEach((M) => {
      const ne = Math.sqrt(Math.pow(M.endX - M.startX, 2) + Math.pow(M.endY - M.startY, 2)), K = Math.atan2(M.endY - M.startY, M.endX - M.startX), j = M.type === "window" ? 80 : 120, B = M.startX + (M.endX - M.startX) / 2 - 400, J = -(M.startY + (M.endY - M.startY) / 2 - 400);
      if (M.type === "door") {
        const Z = new on(), W = ne, ie = j, le = M.thickness * 0.8, Me = new Je({
          color: 3812901,
          // dark stained wood
          roughness: 0.9,
          metalness: 0
        }), me = 8, Ue = new we(
          new Xe(W, me, M.thickness + 4),
          Me
        );
        Ue.position.y = ie / 2 - me / 2, Z.add(Ue);
        const De = new we(
          new Xe(W, me, M.thickness + 4),
          Me
        );
        De.position.y = -ie / 2 + me / 2, Z.add(De);
        const pe = new we(
          new Xe(me, ie, M.thickness + 4),
          Me
        );
        pe.position.x = -W / 2 + me / 2, Z.add(pe);
        const xe = pe.clone();
        xe.position.x = W / 2 - me / 2, Z.add(xe);
        const z = new Je({
          color: 5125166,
          // warm brown
          roughness: 0.85,
          metalness: 0
        }), Te = new Je({
          color: 10400693,
          // subtle bluish-gray tint
          transparent: !0,
          opacity: 0.5,
          // semi-transparent
          roughness: 0.95,
          // frosted effect
          metalness: 0
          // no mirror reflection
        }), Ae = (W - me * 2 - 4) / 2, Ce = ie - me * 2 - 4, Ee = (ge) => {
          const ye = new on(), Ne = new we(
            new Xe(Ae, Ce, le),
            z
          );
          ye.add(Ne);
          const Fe = new we(
            new Kt(Ae * 0.8, Ce * 0.85),
            Te
          );
          Fe.position.set(0, 0, le / 2 + 0.1), ye.add(Fe);
          const de = new Je({
            color: 8947848,
            metalness: 0.4,
            roughness: 0.7
          }), he = new we(
            new Et(0.6, 0.6, 12, 12),
            de
          );
          return he.rotation.z = Math.PI / 2, he.position.set(ge > 0 ? -Ae * 0.35 : Ae * 0.35, 0, le / 2 + 1.5), ye.add(he), ye.position.x = ge, ye;
        }, Oe = Ee(-Ae / 2), fe = Ee(Ae / 2);
        Z.add(Oe), Z.add(fe);
        const y = 14, S = new Kt(W * 0.9, y), D = document.createElement("canvas");
        D.width = 512, D.height = 128;
        const q = D.getContext("2d");
        q && (q.fillStyle = "#3a2e25", q.fillRect(0, 0, D.width, D.height), q.font = "bold 60px Arial", q.fillStyle = "#f5d590", q.textAlign = "center", q.textBaseline = "middle", q.fillText("WELCOME", D.width / 2, D.height / 2));
        const ce = new Li(D), re = new Je({
          map: ce,
          roughness: 0.8,
          metalness: 0.1
        }), oe = new we(S, re);
        oe.position.set(0, ie / 2 - me - y / 2 - 4, M.thickness / 2 + 2), Z.add(oe), Z.position.set(B, ie / 2, J), Z.rotation.y = -K, Z.castShadow = !0, Z.receiveShadow = !0, x.add(Z);
      } else if (M.type === "window") {
        const Z = ne > 20 ? ne : 120, W = j, ie = W * 0.45, le = W * 0.65, Me = W * 0.1, me = W * 0.3, Ue = new Je({
          color: 13158608,
          // Grey-blue for window sills and wall sections
          roughness: 0.85,
          metalness: 0.05
        }), De = new jt({
          color: 2763306,
          metalness: 0.95,
          roughness: 0.2,
          clearcoat: 0.8,
          clearcoatRoughness: 0.1
        }), pe = new jt({
          color: 15135487,
          transparent: !0,
          opacity: 0.4,
          transmission: 0.85,
          thickness: 1.5,
          roughness: 0.05,
          metalness: 0.05,
          ior: 1.52,
          envMapIntensity: 1,
          clearcoat: 0.8,
          clearcoatRoughness: 0.1,
          reflectivity: 0.5
        }), xe = new we(
          new Xe(Z, ie, M.thickness),
          Ue
        );
        xe.position.set(B, ie / 2, J), xe.rotation.y = -K, xe.receiveShadow = !0, xe.castShadow = !0, x.add(xe);
        const z = ie + le / 2, Te = 4, Ae = Math.max(2, Math.floor(Z / 80)), Ce = (Z - Te * (Ae + 1)) / Ae;
        for (let D = 0; D < Ae; D++) {
          const q = -Z / 2 + Te + Ce / 2 + D * (Ce + Te), ce = B + q * Math.cos(-K), re = J + q * Math.sin(-K), oe = new we(
            new Xe(Ce - 2, le - Te * 2, 1),
            pe
          );
          if (oe.position.set(ce, z, re), oe.rotation.y = -K, oe.castShadow = !1, oe.receiveShadow = !1, x.add(oe), D < Ae - 1) {
            const ge = -Z / 2 + Te + (D + 1) * Ce + (D + 0.5) * Te, ye = B + ge * Math.cos(-K), Ne = J + ge * Math.sin(-K), Fe = new we(
              new Xe(Te, le, M.thickness + 3),
              De
            );
            Fe.position.set(ye, z, Ne), Fe.rotation.y = -K, Fe.castShadow = !0, x.add(Fe);
          }
        }
        const Ee = ie + le + Me / 2, Oe = new we(
          new Xe(Z - Te * 2, Me - Te, 1),
          pe
        );
        Oe.position.set(B, Ee, J), Oe.rotation.y = -K, Oe.castShadow = !1, x.add(Oe);
        const fe = new we(
          new Xe(Z, Te, M.thickness + 2),
          De
        );
        fe.position.set(B, ie + le + Te / 2, J), fe.rotation.y = -K, fe.castShadow = !0, x.add(fe);
        const y = new we(
          new Xe(Z, Te, M.thickness + 2),
          De
        );
        y.position.set(B, ie + le + Me + Te / 2, J), y.rotation.y = -K, y.castShadow = !0, x.add(y);
        const S = new we(
          new Xe(Z, me, M.thickness),
          Ue
        );
        S.position.set(B, ie + le + Me + me / 2, J), S.rotation.y = -K, S.castShadow = !0, S.receiveShadow = !0, x.add(S);
      } else {
        const Z = new we(
          new Xe(ne, j, M.thickness),
          new Je({ color: 12105920, roughness: 0.9, metalness: 0.05 })
        );
        Z.position.set(B, j / 2, J), Z.rotation.y = -K, Z.castShadow = !0, Z.receiveShadow = !0, x.add(Z);
      }
    }), i.fixedElements.forEach((M) => {
      const ne = M.x - 400 + M.width / 2, K = -(M.y - 400 + M.height / 2);
      if (M.type === "pillar") {
        const j = Math.min(M.width, M.height) / 2, B = new we(
          new Et(j, j * 1.1, 140, 32),
          new Je({ color: 4868698, roughness: 0.6, metalness: 0.4 })
        );
        B.position.set(ne, 70, K), B.castShadow = !0, x.add(B);
        const J = new we(
          new Et(j * 1.3, j * 1.1, 10, 32),
          new Je({ color: 5921386, roughness: 0.5, metalness: 0.5 })
        );
        J.position.set(ne, 135, K), J.castShadow = !0, x.add(J);
        const Z = new we(
          new Et(j * 1.2, j * 1.3, 10, 32),
          new Je({ color: 5921386, roughness: 0.5, metalness: 0.5 })
        );
        Z.position.set(ne, 5, K), Z.castShadow = !0, x.add(Z);
      } else if (M.type === "column") {
        const j = new we(
          new Xe(M.width, 140, M.height),
          new Je({ color: 3816010, roughness: 0.7, metalness: 0.3 })
        );
        j.position.set(ne, 70, K), j.castShadow = !0, x.add(j);
        const B = new _s(
          new xr(j.geometry),
          new Ui({ color: 6974074 })
        );
        B.position.copy(j.position), x.add(B);
      } else {
        const J = M.height / 8;
        for (let Z = 0; Z < 8; Z++) {
          const W = new we(
            new Xe(M.width, 6.25, J * (8 - Z)),
            new Je({ color: 6636321, roughness: 0.8 })
          );
          W.position.set(ne, 6.25 / 2 + Z * 6.25, K + Z * J / 2), W.castShadow = !0, x.add(W);
          const ie = new _s(
            new xr(W.geometry),
            new Ui({ color: 3810320 })
          );
          ie.position.copy(W.position), x.add(ie);
        }
      }
    }), i.objects.forEach((M) => {
      const ne = M.x - 400 + M.width / 2, K = -(M.y - 400 + M.height / 2), j = -(M.rotation * Math.PI / 180);
      if (M.type === "bar") {
        const B = M.x - 400 + M.width / 2, J = -(M.y - 400 + M.height / 2), Z = -(M.rotation * Math.PI / 180), W = 50, ie = new jt({
          color: 1710618,
          roughness: 0.5,
          metalness: 0.8,
          clearcoat: 0.2,
          clearcoatRoughness: 0.4
        }), le = new we(
          new Xe(M.width, W, M.height),
          ie
        );
        le.position.set(B, W / 2, J), le.rotation.y = Z, le.castShadow = !0, le.receiveShadow = !0, x.add(le);
        const Me = [8323072, 10770944, 6691328, 9109504, 8930304], me = Me[Math.floor(Math.random() * Me.length)], Ue = new jt({
          color: me,
          metalness: 0.1,
          roughness: 0.05,
          transmission: 0.9,
          // transparency
          thickness: 2,
          ior: 1.5,
          reflectivity: 0.9,
          clearcoat: 1,
          clearcoatRoughness: 0.05
        }), De = new we(
          new Xe(M.width + 6, 6, M.height + 6),
          Ue
        );
        De.position.set(B, W + 3, J), De.rotation.y = Z, De.castShadow = !0, x.add(De);
        const pe = new Je({
          emissive: 16711799,
          // pinkish-red glow
          emissiveIntensity: 0.6,
          color: 0
        }), xe = new we(
          new Xe(M.width + 6, 0.5, M.height + 6),
          pe
        );
        xe.position.set(B, W + 1, J), xe.rotation.y = Z, x.add(xe);
        const z = me === 8323072 ? 13938487 : 11579568, Te = new we(
          new Xe(M.width + 8, 0.6, M.height + 8),
          new Je({
            color: z,
            metalness: 1,
            roughness: 0.2
          })
        );
        Te.position.set(B, W + 6.5, J), Te.rotation.y = Z, x.add(Te);
        const Ae = new Je({
          color: 13421772,
          metalness: 1,
          roughness: 0.1
        }), Ce = new Et(2, 2, W, 16);
        [
          [M.width / 2 - 6, M.height / 2 - 6],
          [-M.width / 2 + 6, M.height / 2 - 6],
          [M.width / 2 - 6, -M.height / 2 + 6],
          [-M.width / 2 + 6, -M.height / 2 + 6]
        ].forEach(([Le, Se]) => {
          const Be = new we(Ce, Ae);
          Be.position.set(
            B + Le * Math.cos(Z) - Se * Math.sin(Z),
            W / 2,
            J + Le * Math.sin(Z) + Se * Math.cos(Z)
          ), Be.castShadow = !0, x.add(Be);
        });
        const Oe = new ps(me, 0.4, 600);
        Oe.position.set(B, W + 70, J), x.add(Oe);
        const fe = 120, y = new on(), S = new jt({
          color: 2105376,
          metalness: 1,
          roughness: 0.25,
          clearcoat: 0.6,
          clearcoatRoughness: 0.1
        }), D = new we(
          new Xe(M.width + 40, 10, M.height + 40),
          S
        );
        D.castShadow = !0, D.receiveShadow = !0, y.add(D);
        const q = new jt({
          color: 10770944,
          // whiskey amber
          metalness: 0,
          roughness: 0.05,
          transmission: 0.95,
          thickness: 1.5,
          ior: 1.45,
          clearcoat: 1,
          clearcoatRoughness: 0.05
        }), ce = new we(
          new Kt(M.width + 32, M.height + 32),
          q
        );
        ce.rotation.x = -Math.PI / 2, ce.position.y = -3, y.add(ce);
        const re = new Je({
          emissive: 16764040,
          emissiveIntensity: 1.6,
          color: 0
        }), oe = new Xe(4, 2, M.height + 36), ge = new we(oe, re), ye = ge.clone();
        ge.position.set(-(M.width + 36) / 2, -2, 0), ye.position.set((M.width + 36) / 2, -2, 0), y.add(ge, ye);
        const Ne = new on(), Fe = [11674146, 14919767, 9127187, 27028, 7810842];
        for (let Le = -3; Le <= 3; Le++) {
          const Se = Fe[Math.floor(Math.random() * Fe.length)], Be = new jt({
            color: Se,
            roughness: 0.1,
            transmission: 0.95,
            thickness: 0.6,
            ior: 1.5,
            clearcoat: 0.3,
            clearcoatRoughness: 0.2
          }), $e = new we(
            new Et(3, 3, 20, 32),
            Be
          );
          $e.position.set(Le * 12, -12, 0), Ne.add($e);
          const k = new we(
            new Et(1.2, 1.2, 6, 16),
            Be
          );
          k.position.set(Le * 12, -3, 0), Ne.add(k);
        }
        Ne.position.y = -15, y.add(Ne);
        const de = new jt({
          color: 16777215,
          roughness: 0.1,
          transmission: 0.9,
          thickness: 0.4,
          ior: 1.45
        });
        for (let Le = -2; Le <= 2; Le++) {
          const Se = new we(
            new As(2.5, 16, 16, 0, Math.PI),
            // half-sphere
            de
          );
          Se.position.set(Le * 10, -25, 0), Se.scale.y = 0.6, y.add(Se);
        }
        const he = new Je({
          color: 11184810,
          metalness: 1,
          roughness: 0.2
        }), ze = new Et(1.5, 1.5, fe - 60, 16);
        [
          [M.width / 2 - 10, M.height / 2 - 10],
          [-M.width / 2 + 10, M.height / 2 - 10],
          [M.width / 2 - 10, -M.height / 2 + 10],
          [-M.width / 2 + 10, -M.height / 2 + 10]
        ].forEach(([Le, Se]) => {
          const Be = new we(ze, he);
          Be.position.set(Le, -(fe - 80) / 2, Se), Be.rotation.x = Math.PI / 2, y.add(Be);
        }), y.position.set(B, fe, J), y.rotation.y = Z, x.add(y);
        const Ge = new ps(16755285, 0.8, 600);
        Ge.position.set(B, fe - 20, J), x.add(Ge);
      } else if (M.type === "kitchen") {
        const B = new on(), J = new jt({
          color: 11579568,
          metalness: 1,
          roughness: 0.25,
          envMapIntensity: 1,
          clearcoat: 1,
          clearcoatRoughness: 0.05
        }), Z = new jt({
          color: 10079487,
          roughness: 0.05,
          transmission: 0.9,
          thickness: 0.5,
          metalness: 0.1,
          envMapIntensity: 1.2
        }), W = new we(
          new Xe(M.width, 50, M.height),
          J
        );
        W.position.set(0, 25, 0), W.castShadow = !0, W.receiveShadow = !0, B.add(W);
        const ie = new we(
          new Xe(M.width, 4, M.height),
          Z
        );
        ie.position.set(0, 52, 0), B.add(ie);
        const le = new we(
          new Xe(M.width * 0.4, 10, M.height * 0.6),
          new Je({ color: 2236962, roughness: 0.4 })
        );
        le.position.set(-M.width * 0.2, 55, 0), B.add(le);
        const Me = new Je({
          color: 3355443,
          metalness: 0.8,
          roughness: 0.2
        });
        [
          [-M.width * 0.25, M.height * 0.15],
          [-M.width * 0.15, M.height * 0.15],
          [-M.width * 0.25, -M.height * 0.15],
          [-M.width * 0.15, -M.height * 0.15]
        ].forEach(([Oe, fe]) => {
          const y = new we(
            new Et(6, 6, 2, 32),
            Me
          );
          y.rotation.x = Math.PI / 2, y.position.set(Oe, 61, fe), B.add(y);
        });
        const Ue = new we(
          new Xe(M.width * 0.5, 35, M.height * 0.65),
          new jt({
            color: 12632256,
            metalness: 1,
            roughness: 0.2,
            envMapIntensity: 1.1
          })
        );
        Ue.position.set(-M.width * 0.2, 95, 0), Ue.castShadow = !0, B.add(Ue);
        const De = new jt({
          color: 14540253,
          roughness: 0.3,
          metalness: 0.5
        });
        for (let Oe = 0; Oe < 3; Oe++) {
          const fe = new we(
            new Xe(M.width * 0.7, 4, M.height * 0.2),
            De
          );
          fe.position.set(M.width * 0.15, 75 + Oe * 22, M.height * 0.35), fe.castShadow = !0, B.add(fe);
        }
        const pe = new Je({
          color: 8947848,
          metalness: 0.9,
          roughness: 0.2
        });
        for (let Oe = -1; Oe <= 1; Oe++) {
          const fe = new we(
            new Et(1.5, 1.5, 15, 16),
            pe
          );
          fe.rotation.z = Math.PI / 2, fe.position.set(Oe * M.width * 0.2, 35, M.height * 0.45), B.add(fe);
        }
        const xe = new ps(16777215, 1.5, 400);
        xe.position.set(0, 140, 0), xe.castShadow = !0, B.add(xe);
        const z = document.createElement("canvas");
        z.width = 1024, z.height = 768;
        const Te = z.getContext("2d");
        Te && (Te.fillStyle = "#dc2626", Te.fillRect(0, 0, z.width, z.height), Te.strokeStyle = "#ffffff", Te.lineWidth = 25, Te.strokeRect(30, 30, z.width - 60, z.height - 60), Te.strokeStyle = "#000000", Te.lineWidth = 15, Te.strokeRect(50, 50, z.width - 100, z.height - 100), Te.shadowColor = "rgba(0, 0, 0, 0.8)", Te.shadowBlur = 20, Te.shadowOffsetX = 8, Te.shadowOffsetY = 8, Te.font = "bold 180px Arial", Te.textAlign = "center", Te.textBaseline = "middle", Te.fillStyle = "#ffffff", Te.fillText("👨‍🍳", z.width / 2, z.height / 2 - 150), Te.fillStyle = "#ffffff", Te.font = "bold 220px Impact, Arial Black, sans-serif", Te.fillText("CHEF", z.width / 2, z.height / 2 + 120), Te.strokeStyle = "#000000", Te.lineWidth = 12, Te.strokeText("CHEF", z.width / 2, z.height / 2 + 120), Te.strokeStyle = "#fbbf24", Te.lineWidth = 6, Te.strokeText("CHEF", z.width / 2, z.height / 2 + 120));
        const Ae = new Li(z), Ce = new we(
          new Kt(M.height * 0.6, M.height * 0.45),
          new Je({
            map: Ae,
            roughness: 0.4,
            metalness: 0.1,
            emissive: 14427686,
            emissiveIntensity: 0.3
          })
        );
        Ce.position.set(-M.width / 2 + 3, 50, 0), Ce.rotation.y = Math.PI / 2, B.add(Ce);
        const Ee = new we(
          new Kt(M.height * 0.6, M.height * 0.45),
          new Je({
            map: Ae,
            roughness: 0.4,
            metalness: 0.1,
            emissive: 14427686,
            emissiveIntensity: 0.3
          })
        );
        Ee.position.set(M.width / 2 - 3, 50, 0), Ee.rotation.y = -Math.PI / 2, B.add(Ee), B.position.set(ne, 0, K), B.rotation.y = j, x.add(B);
      } else if (M.type === "toilet") {
        const B = new on(), J = new Je({
          color: 14013914,
          roughness: 0.7,
          metalness: 0.05
        }), Z = new Je({
          color: 3900150,
          roughness: 0.6,
          metalness: 0.1
        }), W = new Je({
          color: 15680580,
          roughness: 0.6,
          metalness: 0.1
        }), ie = new Je({
          color: 14277081,
          roughness: 0.7,
          metalness: 0.05
        }), le = 120, Me = new we(
          new Xe(M.width, 4, M.height),
          ie
        );
        Me.position.y = 2, Me.receiveShadow = !0, B.add(Me);
        const me = new we(
          new Xe(M.width, le, 6),
          J
        );
        me.position.set(0, le / 2, -M.height / 2), me.castShadow = !0, B.add(me);
        const Ue = new we(
          new Xe(6, le, M.height),
          J
        );
        Ue.position.set(-M.width / 2, le / 2, 0), Ue.castShadow = !0, B.add(Ue);
        const De = new we(
          new Xe(6, le, M.height),
          J
        );
        De.position.set(M.width / 2, le / 2, 0), De.castShadow = !0, B.add(De);
        const pe = new we(
          new Xe(M.width * 0.24, le, 6),
          J
        );
        pe.position.set(0, le / 2, M.height / 2), pe.castShadow = !0, B.add(pe);
        const xe = new we(
          new Xe(M.width * 0.055, le, 6),
          J
        );
        xe.position.set(-M.width * 0.4725, le / 2, M.height / 2), xe.castShadow = !0, B.add(xe);
        const z = new we(
          new Xe(M.width * 0.055, le, 6),
          J
        );
        z.position.set(M.width * 0.4725, le / 2, M.height / 2), z.castShadow = !0, B.add(z);
        const Te = new we(
          new Xe(M.width * 0.33, le - 95, 6),
          J
        );
        Te.position.set(M.width * 0.285, 95 + (le - 95) / 2, M.height / 2), Te.castShadow = !0, B.add(Te);
        const Ae = new we(
          new Xe(M.width * 0.33, le - 95, 6),
          J
        );
        Ae.position.set(-M.width * 0.285, 95 + (le - 95) / 2, M.height / 2), Ae.castShadow = !0, B.add(Ae);
        const Ce = new we(
          new Xe(M.width * 0.33, 95, 4),
          Z
        );
        Ce.position.set(M.width * 0.285, 47.5, M.height / 2 - 2), Ce.castShadow = !0, B.add(Ce);
        const Ee = new Je({
          color: 13938487,
          metalness: 0.1,
          roughness: 0.8
        }), Oe = new we(
          new Et(1.5, 1.5, 12, 16),
          Ee
        );
        Oe.rotation.z = Math.PI / 2, Oe.position.set(M.width * 0.285 - M.width * 0.132, 47.5, M.height / 2 + 1), B.add(Oe);
        const fe = document.createElement("canvas");
        fe.width = 512, fe.height = 768;
        const y = fe.getContext("2d");
        if (y) {
          const ke = y.createLinearGradient(0, 0, 0, fe.height);
          ke.addColorStop(0, "#3b82f6"), ke.addColorStop(1, "#1e40af"), y.fillStyle = ke, y.fillRect(0, 0, fe.width, fe.height), y.strokeStyle = "#ffffff", y.lineWidth = 12, y.strokeRect(20, 20, fe.width - 40, fe.height - 40), y.strokeStyle = "rgba(255, 255, 255, 0.3)", y.lineWidth = 6, y.strokeRect(30, 30, fe.width - 60, fe.height - 60), y.shadowColor = "rgba(0, 0, 0, 0.5)", y.shadowBlur = 15, y.shadowOffsetX = 4, y.shadowOffsetY = 4, y.fillStyle = "#ffffff", y.font = "bold 120px Georgia, serif", y.textAlign = "center", y.textBaseline = "middle", y.fillText("W.C.", fe.width / 2, fe.height / 2 - 100), y.strokeStyle = "#ffffff", y.lineWidth = 4, y.beginPath(), y.moveTo(100, fe.height / 2), y.lineTo(fe.width - 100, fe.height / 2), y.stroke();
          const qe = y.createLinearGradient(0, fe.height / 2, 0, fe.height / 2 + 150);
          qe.addColorStop(0, "#ffd700"), qe.addColorStop(0.5, "#ffed4e"), qe.addColorStop(1, "#ffd700"), y.fillStyle = qe, y.font = "bold 140px Georgia, serif", y.fillText("MALE", fe.width / 2, fe.height / 2 + 120), y.strokeStyle = "#b8860b", y.lineWidth = 3, y.strokeText("MALE", fe.width / 2, fe.height / 2 + 120);
        }
        const S = new Li(fe), D = new we(
          new Kt(M.width * 0.25, M.width * 0.375),
          new Je({
            map: S,
            roughness: 0.3,
            metalness: 0.15,
            emissive: 1982639,
            emissiveIntensity: 0.1
          })
        );
        D.position.set(M.width * 0.285, 47.5, M.height / 2 + 2.5), B.add(D);
        const q = new we(
          new Xe(M.width * 0.33, 95, 4),
          W
        );
        q.position.set(-M.width * 0.285, 47.5, M.height / 2 - 2), q.castShadow = !0, B.add(q);
        const ce = Oe.clone();
        ce.position.set(-M.width * 0.285 + M.width * 0.132, 47.5, M.height / 2 + 1), B.add(ce);
        const re = document.createElement("canvas");
        re.width = 512, re.height = 768;
        const oe = re.getContext("2d");
        if (oe) {
          const ke = oe.createLinearGradient(0, 0, 0, re.height);
          ke.addColorStop(0, "#ef4444"), ke.addColorStop(1, "#b91c1c"), oe.fillStyle = ke, oe.fillRect(0, 0, re.width, re.height), oe.strokeStyle = "#ffffff", oe.lineWidth = 12, oe.strokeRect(20, 20, re.width - 40, re.height - 40), oe.strokeStyle = "rgba(255, 255, 255, 0.3)", oe.lineWidth = 6, oe.strokeRect(30, 30, re.width - 60, re.height - 60), oe.shadowColor = "rgba(0, 0, 0, 0.5)", oe.shadowBlur = 15, oe.shadowOffsetX = 4, oe.shadowOffsetY = 4, oe.fillStyle = "#ffffff", oe.font = "bold 120px Georgia, serif", oe.textAlign = "center", oe.textBaseline = "middle", oe.fillText("W.C.", re.width / 2, re.height / 2 - 100), oe.strokeStyle = "#ffffff", oe.lineWidth = 4, oe.beginPath(), oe.moveTo(100, re.height / 2), oe.lineTo(re.width - 100, re.height / 2), oe.stroke();
          const qe = oe.createLinearGradient(0, re.height / 2, 0, re.height / 2 + 150);
          qe.addColorStop(0, "#ffb6c1"), qe.addColorStop(0.5, "#ffd1dc"), qe.addColorStop(1, "#ffb6c1"), oe.fillStyle = qe, oe.font = "bold 120px Georgia, serif", oe.fillText("FEMALE", re.width / 2, re.height / 2 + 120), oe.strokeStyle = "#dc143c", oe.lineWidth = 3, oe.strokeText("FEMALE", re.width / 2, re.height / 2 + 120);
        }
        const ge = new Li(re), ye = new we(
          new Kt(M.width * 0.25, M.width * 0.375),
          new Je({
            map: ge,
            roughness: 0.3,
            metalness: 0.15,
            emissive: 12131356,
            emissiveIntensity: 0.1
          })
        );
        ye.position.set(-M.width * 0.285, 47.5, M.height / 2 + 2.5), B.add(ye);
        const Ne = document.createElement("canvas");
        Ne.width = 512, Ne.height = 256;
        const Fe = Ne.getContext("2d");
        Fe && (Fe.fillStyle = "#d5d5da", Fe.fillRect(0, 0, Ne.width, Ne.height), Fe.fillStyle = "#2a2a2a", Fe.font = "bold 140px Arial", Fe.textAlign = "center", Fe.textBaseline = "middle", Fe.fillText("W.C.", Ne.width / 2, Ne.height / 2));
        const de = new Li(Ne), he = new we(
          new Kt(M.width * 0.4, M.width * 0.2),
          new Je({
            map: de,
            roughness: 0.5,
            metalness: 0.05
          })
        );
        he.position.set(0, 100, -M.height / 2 + 3.5), B.add(he);
        const ze = new Je({
          color: 16119285,
          metalness: 0.1,
          roughness: 0.5
        }), Ge = new we(
          new Xe(M.width * 0.5, 12, M.height * 0.25),
          ze
        );
        Ge.position.set(0, 32, -M.height * 0.3), Ge.castShadow = !0, B.add(Ge);
        const Le = new Je({
          color: 16777215,
          roughness: 0.3,
          metalness: 0.05
        }), Se = new we(
          new Et(12, 12, 6, 32),
          Le
        );
        Se.position.set(0, 40, -M.height * 0.3), B.add(Se);
        const Be = new Je({
          color: 12632256,
          metalness: 0.1,
          roughness: 0.8
        }), $e = new we(
          new Ii(4, 1, 8, 24, Math.PI),
          Be
        );
        $e.rotation.z = Math.PI / 2, $e.position.set(0, 48, -M.height * 0.35), B.add($e);
        const k = new Je({
          color: 16777215,
          roughness: 0.25,
          metalness: 0.05
        }), V = new we(
          new Et(10, 8, 12, 32),
          k
        );
        V.position.set(-M.width * 0.25, 6, M.height * 0.25), B.add(V);
        const F = new we(
          new Ii(9, 2, 16, 32),
          k
        );
        F.rotation.x = Math.PI / 2, F.position.set(-M.width * 0.25, 13, M.height * 0.25), B.add(F);
        const w = new we(
          new Xe(14, 20, 8),
          k
        );
        w.position.set(-M.width * 0.25, 22, M.height * 0.25 - 10), B.add(w);
        const Q = new we(
          new Xe(2, 6, 1),
          Be
        );
        Q.position.set(-M.width * 0.25 + 8, 25, M.height * 0.25 - 10), B.add(Q);
        const se = new we(
          new As(7, 32, 32, 0, Math.PI * 2, 0, Math.PI / 1.5),
          k
        );
        se.position.set(M.width * 0.25, 25, M.height * 0.25), se.rotation.x = Math.PI / 6, B.add(se);
        const _e = new we(
          new Et(1.5, 1.5, 8, 16),
          Be
        );
        _e.position.set(M.width * 0.25, 35, M.height * 0.25 - 5), B.add(_e);
        const be = new ps(16777215, 0.5, 280);
        be.position.set(0, le - 15, 0), be.castShadow = !1, B.add(be), B.position.set(ne, 0, K), B.rotation.y = j, x.add(B);
      }
    }), i.tables.forEach((M) => {
      const j = M.shape === "rectangle" ? M.width * 1.5 : M.width, B = M.x - 400 + j / 2, J = -(M.y - 400 + M.height / 2), Z = -(M.rotation * Math.PI / 180), W = new jt({
        color: 7294519,
        // rich brown wood tone
        roughness: 0.35,
        metalness: 0.1,
        clearcoat: 0.4,
        // shiny varnish layer
        clearcoatRoughness: 0.2,
        sheen: 0.5,
        // subtle velvet-like reflection
        sheenColor: new et(10251068)
      }), ie = M.shape === "circle" ? new Et(j / 2, j / 2, 4, 64) : new Xe(j, 4, M.height), le = new we(ie, W);
      if (le.position.set(B, 33 + 4 / 2, J), le.rotation.y = Z, le.castShadow = !0, le.receiveShadow = !0, x.add(le), M.shape === "circle") {
        const pe = new we(
          new Ii(j / 2 + 1, 1.2, 16, 64),
          new Je({
            color: 13938487,
            // gold-like tone
            metalness: 1,
            roughness: 0.3
          })
        );
        pe.position.set(B, 33 + 4 / 2 + 0.5, J), pe.rotation.x = Math.PI / 2, x.add(pe);
      } else {
        const pe = new _s(
          new xr(ie),
          new Ui({ color: 13938487, linewidth: 2 })
        );
        pe.position.copy(le.position), pe.rotation.y = Z, x.add(pe);
      }
      const Me = new Je({
        color: 2236962,
        metalness: 0.9,
        roughness: 0.2
      }), me = 3.2;
      (M.shape === "circle" ? [
        [j * 0.3, j * 0.3],
        [-j * 0.3, j * 0.3],
        [j * 0.3, -j * 0.3],
        [-j * 0.3, -j * 0.3]
      ] : [
        [j / 2 - 10, M.height / 2 - 10],
        [-j / 2 + 10, M.height / 2 - 10],
        [j / 2 - 10, -M.height / 2 + 10],
        [-j / 2 + 10, -M.height / 2 + 10]
      ]).forEach(([pe, xe]) => {
        const z = new we(
          new Et(me, me, 33, 16),
          Me
        );
        z.position.set(
          B + pe * Math.cos(Z) - xe * Math.sin(Z),
          33 / 2,
          J + pe * Math.sin(Z) + xe * Math.cos(Z)
        ), z.castShadow = !0, x.add(z);
      });
      const De = i.chairs.filter((pe) => pe.tableId === M.id);
      De.forEach((pe) => {
        const xe = pe.size || 40, z = 38, Te = new Je({ color: 9127187, roughness: 0.5, metalness: 0.1 }), Ae = new Je({ color: 12092939, roughness: 0.7, metalness: 0.05 }), Ce = De.filter((Le) => Le.position === pe.position).length, Oe = (["top", "bottom"].includes(pe.position) ? j : M.height) - xe * Ce, fe = Ce > 1 ? Oe / (Ce + 1) : Oe / 2, y = fe + pe.index * (xe + fe) + xe / 2, S = xe * 0.4;
        let D = 0, q = 0;
        pe.position === "top" ? (D = y - j / 2, q = M.height / 2 + S + xe / 2) : pe.position === "bottom" ? (D = y - j / 2, q = -(M.height / 2 + S + xe / 2)) : pe.position === "left" ? (D = -(j / 2 + S + xe / 2), q = y - M.height / 2) : (D = j / 2 + S + xe / 2, q = y - M.height / 2);
        const ce = D * Math.cos(Z) - q * Math.sin(Z), re = D * Math.sin(Z) + q * Math.cos(Z), oe = new we(
          new Xe(xe * 0.75, 4, xe * 0.75),
          Ae
        ), ge = z * 0.4;
        oe.position.set(B + ce, ge, J - re);
        const ye = {
          top: 0,
          bottom: Math.PI,
          left: Math.PI / 2,
          right: -Math.PI / 2
        }[pe.position] || 0;
        oe.rotation.y = ye + Z, oe.castShadow = !0, x.add(oe);
        const Ne = new we(
          new Xe(xe * 0.75, z * 0.55, 3),
          Te
        ), Fe = xe * 0.75 / 2 + 1.5;
        Ne.position.set(
          oe.position.x - Math.sin(oe.rotation.y) * Fe,
          z * 0.65,
          oe.position.z - Math.cos(oe.rotation.y) * Fe
        ), Ne.rotation.y = oe.rotation.y, Ne.castShadow = !0, x.add(Ne);
        const he = ge - 4 / 2, ze = new Et(2, 2, he, 8), Ge = new Je({ color: 6636321, roughness: 0.6, metalness: 0.2 });
        [
          [xe * 0.3, xe * 0.3],
          [xe * 0.3, -xe * 0.3],
          [-xe * 0.3, xe * 0.3],
          [-xe * 0.3, -xe * 0.3]
        ].forEach(([Le, Se]) => {
          const Be = new we(ze, Ge), $e = Math.cos(oe.rotation.y), k = Math.sin(oe.rotation.y);
          Be.position.set(
            oe.position.x + Le * $e - Se * k,
            he / 2,
            // Position legs so they sit on the floor
            oe.position.z + Le * k + Se * $e
          ), Be.castShadow = !0, x.add(Be);
        });
      });
    });
    const N = () => {
      var M;
      if (a.current = requestAnimationFrame(N), v.current && v.current.progress < 1) {
        const ne = v.current;
        ne.progress += 0.05, ne.progress >= 1 && (ne.progress = 1, g(!1), v.current = null);
        const j = ((B) => B < 0.5 ? 4 * B * B * B : 1 - Math.pow(-2 * B + 2, 3) / 2)(ne.progress);
        if (r.current) {
          r.current.position.lerpVectors(ne.startPos, ne.endPos, j);
          const B = new H();
          B.lerpVectors(ne.startTarget, ne.endTarget, j), r.current.lookAt(B);
        }
      }
      if (l && r.current && !f) {
        const ne = Math.sqrt(r.current.position.x ** 2 + r.current.position.z ** 2), K = Math.atan2(r.current.position.z, r.current.position.x) + _.current;
        r.current.position.x = ne * Math.cos(K), r.current.position.z = ne * Math.sin(K), r.current.lookAt(0, 100, 0);
      }
      (M = o.current) == null || M.render(x, R);
    };
    N();
    const Y = () => {
      n.current && r.current && o.current && (r.current.aspect = n.current.clientWidth / n.current.clientHeight, r.current.updateProjectionMatrix(), o.current.setSize(n.current.clientWidth, n.current.clientHeight));
    };
    return window.addEventListener("resize", Y), () => {
      window.removeEventListener("resize", Y), a.current && cancelAnimationFrame(a.current), o.current && n.current && (n.current.removeChild(o.current.domElement), o.current.dispose());
    };
  }, [e, i, l, f]), e ? /* @__PURE__ */ m.jsx("div", { className: "fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] flex items-center justify-center p-2", children: /* @__PURE__ */ m.jsxs("div", { className: "bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 rounded-3xl shadow-2xl w-full h-full max-w-[98vw] max-h-[98vh] flex flex-col overflow-hidden border border-gray-800", children: [
    /* @__PURE__ */ m.jsx("div", { className: "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-1", children: /* @__PURE__ */ m.jsxs("div", { className: "bg-gray-900 px-6 py-4 flex items-center justify-between", children: [
      /* @__PURE__ */ m.jsxs("div", { children: [
        /* @__PURE__ */ m.jsxs("h2", { className: "text-2xl font-bold text-white flex items-center gap-3", children: [
          /* @__PURE__ */ m.jsx("div", { className: "p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg", children: /* @__PURE__ */ m.jsx(Bs, { className: "w-5 h-5" }) }),
          "3D Floor Plan Visualization"
        ] }),
        /* @__PURE__ */ m.jsxs("p", { className: "text-gray-400 text-sm mt-1", children: [
          "Professional Camera Controls • ",
          i.name
        ] })
      ] }),
      /* @__PURE__ */ m.jsx(
        "button",
        {
          onClick: t,
          className: "p-2.5 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-xl transition-all hover:scale-110",
          children: /* @__PURE__ */ m.jsx(jl, { className: "w-5 h-5" })
        }
      )
    ] }) }),
    /* @__PURE__ */ m.jsxs("div", { className: "flex-1 flex gap-3 p-3 min-h-0", children: [
      /* @__PURE__ */ m.jsxs("div", { className: "w-80 bg-black/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700 p-5 flex flex-col gap-5 overflow-y-auto flex-shrink-0", children: [
        /* @__PURE__ */ m.jsx(
          "button",
          {
            onClick: () => p("default"),
            className: "px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2",
            children: "🏠 Default View"
          }
        ),
        /* @__PURE__ */ m.jsxs("div", { className: "flex flex-col gap-3", children: [
          /* @__PURE__ */ m.jsxs("div", { className: "text-white text-sm font-bold uppercase tracking-wider flex items-center gap-2 pb-2 border-b border-gray-700", children: [
            /* @__PURE__ */ m.jsx(Bs, { className: "w-5 h-5 text-purple-400" }),
            "Manual Control"
          ] }),
          /* @__PURE__ */ m.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ m.jsxs("div", { className: "flex flex-col gap-1", children: [
            /* @__PURE__ */ m.jsx(
              "button",
              {
                onClick: () => h("up"),
                className: "w-12 h-12 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all hover:scale-110 flex items-center justify-center disabled:opacity-30 mx-auto",
                disabled: f,
                title: "Rotate Up",
                children: /* @__PURE__ */ m.jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ m.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 15l7-7 7 7" }) })
              }
            ),
            /* @__PURE__ */ m.jsxs("div", { className: "flex gap-1 justify-center", children: [
              /* @__PURE__ */ m.jsx(
                "button",
                {
                  onClick: () => h("left"),
                  className: "w-12 h-12 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all hover:scale-110 flex items-center justify-center disabled:opacity-30",
                  disabled: f,
                  title: "Rotate Left",
                  children: /* @__PURE__ */ m.jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ m.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) })
                }
              ),
              /* @__PURE__ */ m.jsx("div", { className: "w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ m.jsx(Bs, { className: "w-6 h-6 text-white" }) }),
              /* @__PURE__ */ m.jsx(
                "button",
                {
                  onClick: () => h("right"),
                  className: "w-12 h-12 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all hover:scale-110 flex items-center justify-center disabled:opacity-30",
                  disabled: f,
                  title: "Rotate Right",
                  children: /* @__PURE__ */ m.jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ m.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) })
                }
              )
            ] }),
            /* @__PURE__ */ m.jsx(
              "button",
              {
                onClick: () => h("down"),
                className: "w-12 h-12 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all hover:scale-110 flex items-center justify-center disabled:opacity-30 mx-auto",
                disabled: f,
                title: "Rotate Down",
                children: /* @__PURE__ */ m.jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ m.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })
              }
            )
          ] }) })
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "flex flex-col gap-3", children: [
          /* @__PURE__ */ m.jsxs("div", { className: "text-white text-sm font-bold uppercase tracking-wider flex items-center gap-2 pb-2 border-b border-gray-700", children: [
            /* @__PURE__ */ m.jsx(Kr, { className: "w-5 h-5 text-green-400" }),
            "Zoom & Rotation"
          ] }),
          /* @__PURE__ */ m.jsxs("div", { className: "flex flex-col gap-2", children: [
            /* @__PURE__ */ m.jsxs(
              "button",
              {
                onClick: () => T(0.85),
                className: "px-4 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl transition-all hover:scale-105 flex items-center justify-center gap-2 font-semibold disabled:opacity-30",
                disabled: f,
                children: [
                  /* @__PURE__ */ m.jsx(Kr, { className: "w-5 h-5" }),
                  "Zoom In"
                ]
              }
            ),
            /* @__PURE__ */ m.jsxs(
              "button",
              {
                onClick: () => T(1.15),
                className: "px-4 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl transition-all hover:scale-105 flex items-center justify-center gap-2 font-semibold disabled:opacity-30",
                disabled: f,
                children: [
                  /* @__PURE__ */ m.jsx(Xl, { className: "w-5 h-5" }),
                  "Zoom Out"
                ]
              }
            ),
            /* @__PURE__ */ m.jsxs(
              "button",
              {
                onClick: () => c(!l),
                className: `px-4 py-3 rounded-xl transition-all hover:scale-105 flex items-center justify-center gap-2 font-semibold ${l ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg" : "bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white"}`,
                children: [
                  /* @__PURE__ */ m.jsx(Er, { className: `w-5 h-5 ${l ? "animate-spin" : ""}` }),
                  l ? "Auto-Rotating" : "Auto-Rotate"
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "flex flex-col gap-3 mt-auto", children: [
          /* @__PURE__ */ m.jsxs(
            "button",
            {
              onClick: () => p("default"),
              className: "px-4 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl transition-all hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 font-bold",
              children: [
                /* @__PURE__ */ m.jsx(Bl, { className: "w-5 h-5" }),
                "Reset View"
              ]
            }
          ),
          /* @__PURE__ */ m.jsxs("div", { className: "bg-gray-800/50 rounded-xl p-4 border border-gray-700", children: [
            /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-2 text-gray-400 mb-3", children: [
              /* @__PURE__ */ m.jsx(Il, { className: "w-4 h-4" }),
              /* @__PURE__ */ m.jsx("span", { className: "font-medium text-sm", children: "Scene Statistics" })
            ] }),
            /* @__PURE__ */ m.jsxs("div", { className: "grid grid-cols-2 gap-2 text-sm", children: [
              /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ m.jsx("div", { className: "w-2 h-2 bg-emerald-500 rounded-full animate-pulse" }),
                /* @__PURE__ */ m.jsxs("span", { className: "text-gray-300", children: [
                  i.tables.length,
                  " Tables"
                ] })
              ] }),
              /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ m.jsx("div", { className: "w-2 h-2 bg-amber-500 rounded-full animate-pulse" }),
                /* @__PURE__ */ m.jsxs("span", { className: "text-gray-300", children: [
                  i.chairs.length,
                  " Chairs"
                ] })
              ] }),
              /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ m.jsx("div", { className: "w-2 h-2 bg-purple-500 rounded-full animate-pulse" }),
                /* @__PURE__ */ m.jsxs("span", { className: "text-gray-300", children: [
                  i.objects.length,
                  " Objects"
                ] })
              ] }),
              /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ m.jsx("div", { className: "w-2 h-2 bg-blue-500 rounded-full animate-pulse" }),
                /* @__PURE__ */ m.jsxs("span", { className: "text-gray-300", children: [
                  i.walls.length,
                  " Walls"
                ] })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ m.jsxs("div", { className: "flex-1 relative bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 rounded-2xl overflow-hidden shadow-2xl border border-gray-300", children: [
        /* @__PURE__ */ m.jsx("div", { ref: n, className: "w-full h-full" }),
        f && /* @__PURE__ */ m.jsx("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2", children: /* @__PURE__ */ m.jsx("div", { className: "bg-black/80 backdrop-blur-xl rounded-xl px-6 py-3 shadow-2xl border border-gray-700", children: /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ m.jsx("div", { className: "animate-spin rounded-full h-5 w-5 border-2 border-gray-500 border-t-white" }),
          /* @__PURE__ */ m.jsx("span", { className: "text-white text-sm font-medium", children: "Transitioning Camera..." })
        ] }) }) })
      ] })
    ] }),
    /* @__PURE__ */ m.jsx("div", { className: "bg-gradient-to-r from-gray-900 via-slate-900 to-gray-900 px-6 py-3 border-t border-gray-800", children: /* @__PURE__ */ m.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ m.jsx(Lo, { className: "w-4 h-4 text-gray-400" }),
          /* @__PURE__ */ m.jsxs("span", { className: "text-sm text-gray-400", children: [
            "Viewing: ",
            /* @__PURE__ */ m.jsx("span", { className: "text-white font-semibold", children: i.name })
          ] })
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "text-sm text-gray-400", children: [
          "Camera: ",
          /* @__PURE__ */ m.jsx("span", { className: "text-white font-semibold", children: Co[d].name })
        ] })
      ] }),
      /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-2 text-xs text-gray-500", children: [
        /* @__PURE__ */ m.jsx("span", { children: "High Performance Mode" }),
        /* @__PURE__ */ m.jsx("div", { className: "w-2 h-2 bg-green-500 rounded-full animate-pulse" })
      ] })
    ] }) })
  ] }) }) : null;
}, Mm = () => {
  const [i, e] = ht([
    {
      id: "floor-1",
      name: "Ground Floor",
      isActive: !0,
      tables: [],
      chairs: [],
      objects: [],
      walls: [],
      fixedElements: []
    }
  ]), [t, n] = ht("floor-1"), [s, r] = ht(null), [o, a] = ht(!1), [l, c] = ht({ x: 0, y: 0 }), d = 1, [u, f] = ht(!0), [g, _] = ht(!1), [v, p] = ht(!1), [h, T] = ht(null), [x, R] = ht(null), [U, L] = ht(null), [C, ee] = ht(!1), [E, A] = ht(null), [O, te] = ht(null), ae = zt(null), N = zt(null), Y = zt(null);
  ui(() => {
    if ((s == null ? void 0 : s.type) === "table") {
      const k = M();
      if (!k)
        return;
      const V = k.chairs.filter((w) => w.tableId === s.id);
      if (V.filter((w) => w.size === void 0).length > 0) {
        const w = {};
        V.forEach((Q) => {
          Q.size !== void 0 && !w[Q.position] && (w[Q.position] = Q.size);
        }), e((Q) => Q.map(
          (se) => se.id === t ? {
            ...se,
            chairs: se.chairs.map((_e) => {
              if (_e.tableId === s.id && _e.size === void 0) {
                const be = w[_e.position] ?? 40;
                return { ..._e, size: be };
              }
              return _e;
            })
          } : se
        ));
      }
    }
  }, [s]);
  const M = () => i.find((k) => k.id === t), ne = (k, V = "medium") => {
    const F = M();
    if (!F)
      return;
    const { width: w, height: Q } = Zr(k, V), se = {
      id: yn(),
      name: `Table ${F.tables.length + 1}`,
      shape: k,
      size: V,
      x: 200 + F.tables.length * 20,
      y: 200 + F.tables.length * 20,
      width: w,
      height: Q,
      rotation: 0
    };
    e((_e) => _e.map(
      (be) => be.id === t ? { ...be, tables: [...be.tables, se] } : be
    )), r({ type: "table", id: se.id });
  }, K = (k) => {
    const V = M();
    if (!V)
      return;
    const F = {
      id: yn(),
      name: `${vs[k]} ${V.objects.length + 1}`,
      type: k,
      x: 300 + V.objects.length * 30,
      y: 300 + V.objects.length * 30,
      width: 120,
      height: 80,
      rotation: 0
    };
    e((w) => w.map(
      (Q) => Q.id === t ? { ...Q, objects: [...Q.objects, F] } : Q
    )), r({ type: "object", id: F.id });
  }, j = (k) => {
    if (!s || s.type !== "table")
      return;
    const V = M();
    if (!V)
      return;
    const F = V.chairs.filter(
      (be) => be.tableId === s.id && be.position === k
    ), w = F.length, Q = F.find((be) => be.size !== void 0), se = (Q == null ? void 0 : Q.size) ?? 40, _e = {
      id: yn(),
      tableId: s.id,
      position: k,
      index: w,
      x: 0,
      y: 0,
      size: se
      // Always set a size to prevent recalculation on table resize
    };
    e((be) => be.map(
      (ke) => ke.id === t ? { ...ke, chairs: [...ke.chairs, _e] } : ke
    ));
  }, B = (k) => {
    if (!s || s.type !== "table")
      return;
    const V = M();
    if (!V)
      return;
    const F = V.chairs.filter(
      (Q) => Q.tableId === s.id && Q.position === k
    );
    if (F.length === 0)
      return;
    const w = F.reduce(
      (Q, se) => se.index > Q.index ? se : Q
    );
    e((Q) => Q.map(
      (se) => se.id === t ? {
        ...se,
        chairs: se.chairs.filter((_e) => _e.id !== w.id)
      } : se
    ));
  }, J = (k, V) => {
    !s || s.type !== "table" || !M() || e((w) => w.map(
      (Q) => Q.id === t ? {
        ...Q,
        chairs: Q.chairs.map(
          (se) => se.tableId === s.id && se.position === k ? { ...se, size: V } : se
        )
      } : Q
    ));
  }, Z = () => {
    !s || s.type !== "table" || !M() || e((V) => V.map(
      (F) => F.id === t ? {
        ...F,
        chairs: F.chairs.map((w) => {
          if (w.tableId === s.id) {
            const { size: Q, ...se } = w;
            return se;
          }
          return w;
        })
      } : F
    ));
  }, W = () => {
    s && (s.type === "table" ? e((k) => k.map(
      (V) => V.id === t ? {
        ...V,
        tables: V.tables.filter((F) => F.id !== s.id),
        chairs: V.chairs.filter((F) => F.tableId !== s.id)
      } : V
    )) : s.type === "object" ? e((k) => k.map(
      (V) => V.id === t ? {
        ...V,
        objects: V.objects.filter((F) => F.id !== s.id)
      } : V
    )) : s.type === "wall" ? e((k) => k.map(
      (V) => V.id === t ? {
        ...V,
        walls: V.walls.filter((F) => F.id !== s.id)
      } : V
    )) : s.type === "fixedElement" && e((k) => k.map(
      (V) => V.id === t ? {
        ...V,
        fixedElements: V.fixedElements.filter((F) => F.id !== s.id)
      } : V
    )), r(null));
  }, ie = (k) => {
    !s || s.type !== "wall" || e((V) => V.map(
      (F) => F.id === t ? {
        ...F,
        walls: F.walls.map(
          (w) => w.id === s.id ? { ...w, thickness: k } : w
        )
      } : F
    ));
  }, le = (k) => {
    !s || s.type !== "wall" || e((V) => V.map(
      (F) => F.id === t ? {
        ...F,
        walls: F.walls.map(
          (w) => w.id === s.id ? { ...w, type: k } : w
        )
      } : F
    ));
  }, Me = () => {
    !s || s.type !== "table" || e((k) => k.map(
      (V) => V.id === t ? {
        ...V,
        tables: V.tables.map(
          (F) => F.id === s.id ? { ...F, rotation: (F.rotation || 0) + 45 } : F
        )
      } : V
    ));
  }, me = () => {
    if (!s || s.type !== "table")
      return;
    const k = M();
    if (!k)
      return;
    const V = k.tables.find((se) => se.id === s.id);
    if (!V)
      return;
    const F = {
      ...V,
      id: yn(),
      name: `${V.name} Copy`,
      x: V.x + 50,
      y: V.y + 50
    }, Q = k.chairs.filter((se) => se.tableId === V.id).map((se) => ({
      ...se,
      id: yn(),
      tableId: F.id
    }));
    e((se) => se.map(
      (_e) => _e.id === t ? {
        ..._e,
        tables: [..._e.tables, F],
        chairs: [..._e.chairs, ...Q]
      } : _e
    )), r({ type: "table", id: F.id });
  }, Ue = Os((k) => {
    !s || s.type !== "table" || e((V) => V.map(
      (F) => F.id === t ? {
        ...F,
        tables: F.tables.map(
          (w) => w.id === s.id ? k(w) : w
        )
      } : F
    ));
  }, [s, t]), De = (k) => {
    Ue((V) => {
      const { width: F, height: w } = Zr(V.shape, k);
      return { ...V, size: k, width: F, height: w };
    });
  }, pe = (k, V) => {
    Ue((F) => ({
      ...F,
      width: k,
      height: V,
      // Set size to a custom indicator or keep current
      size: "medium"
      // Keep a valid size for the interface
    }));
  }, xe = (k) => {
    !s || s.type !== "object" || e((V) => V.map(
      (F) => F.id === t ? {
        ...F,
        objects: F.objects.map(
          (w) => w.id === s.id ? { ...w, name: k } : w
        )
      } : F
    ));
  }, z = (k, V) => {
    !s || s.type !== "object" || e((F) => F.map(
      (w) => w.id === t ? {
        ...w,
        objects: w.objects.map(
          (Q) => Q.id === s.id ? { ...Q, width: k, height: V } : Q
        )
      } : w
    ));
  }, Te = (k) => {
    !s || s.type !== "object" || e((V) => V.map(
      (F) => F.id === t ? {
        ...F,
        objects: F.objects.map(
          (w) => w.id === s.id ? { ...w, rotation: k } : w
        )
      } : F
    ));
  }, Ae = (k, V) => {
    !s || s.type !== "fixedElement" || e((F) => F.map(
      (w) => w.id === t ? {
        ...w,
        fixedElements: w.fixedElements.map(
          (Q) => Q.id === s.id ? { ...Q, width: k, height: V } : Q
        )
      } : w
    ));
  }, Ce = (k) => {
    Ue((V) => ({ ...V, name: k }));
  }, Ee = (k) => {
    if (ae.current && !C) {
      if (v && h) {
        const V = ae.current.getBoundingClientRect(), F = Math.round((k.clientX - V.left) / d / st) * st, w = Math.round((k.clientY - V.top) / d / st) * st;
        if (!x)
          R({ x: F, y: w });
        else {
          if (!M())
            return;
          const se = Gi(x, { x: F, y: w }), _e = {
            id: yn(),
            type: h,
            startX: x.x,
            startY: x.y,
            endX: se.x,
            endY: se.y,
            thickness: 8
          };
          e((be) => be.map(
            (ke) => ke.id === t ? { ...ke, walls: [...ke.walls, _e] } : ke
          )), R(null), L(null), p(!1), T(null);
        }
        return;
      }
      r(null);
    }
  }, Oe = (k, V) => {
    r({ type: k, id: V });
  }, fe = (k, V) => {
    if (!ae.current)
      return;
    k.preventDefault(), k.stopPropagation();
    const F = ae.current.getBoundingClientRect(), w = (k.clientX - F.left) / d, Q = (k.clientY - F.top) / d, se = M();
    if (!se)
      return;
    const _e = se.tables.find((it) => it.id === V), be = se.objects.find((it) => it.id === V), ke = se.fixedElements.find((it) => it.id === V), qe = se.walls.find((it) => it.id === V);
    if (qe)
      c({
        x: w - qe.startX,
        y: Q - qe.startY
      }), N.current = { id: V, type: "wall" };
    else {
      const it = _e || be || ke;
      it && c({
        x: w - it.x,
        y: Q - it.y
      });
      const lt = _e ? "table" : be ? "object" : ke ? "fixedElement" : "table";
      N.current = { id: V, type: lt };
    }
    a(!0);
  }, y = Os((k) => {
    !o && !C || !N.current || !ae.current || (Y.current && cancelAnimationFrame(Y.current), Y.current = requestAnimationFrame(() => {
      var _e, be, ke, qe, it;
      if (!ae.current)
        return;
      const V = ae.current.getBoundingClientRect(), F = (k.clientX - V.left) / d, w = (k.clientY - V.top) / d, Q = Math.round(F / st) * st, se = Math.round(w / st) * st;
      if (C && ((_e = N.current) == null ? void 0 : _e.type) === "wall") {
        const lt = i.find((ct) => ct.id === t), Ze = lt == null ? void 0 : lt.walls.find((ct) => {
          var ut;
          return ct.id === ((ut = N.current) == null ? void 0 : ut.id);
        });
        if (Ze) {
          const ct = E === "start" ? { x: Ze.endX, y: Ze.endY } : { x: Ze.startX, y: Ze.startY }, ut = Gi(ct, { x: Q, y: se });
          e((Ut) => Ut.map(
            (ft) => ft.id === t ? {
              ...ft,
              walls: ft.walls.map(
                (at) => {
                  var bt;
                  return at.id === ((bt = N.current) == null ? void 0 : bt.id) ? E === "start" ? { ...at, startX: ut.x, startY: ut.y } : { ...at, endX: ut.x, endY: ut.y } : at;
                }
              )
            } : ft
          ));
        }
      } else if (((be = N.current) == null ? void 0 : be.type) === "table") {
        const lt = F - l.x, Ze = w - l.y, ct = Math.round(lt / st) * st, ut = Math.round(Ze / st) * st;
        e((Ut) => Ut.map(
          (ft) => ft.id === t ? {
            ...ft,
            tables: ft.tables.map(
              (at) => {
                var bt;
                return at.id === ((bt = N.current) == null ? void 0 : bt.id) ? { ...at, x: ct, y: ut } : at;
              }
            )
          } : ft
        ));
      } else if (((ke = N.current) == null ? void 0 : ke.type) === "object") {
        const lt = F - l.x, Ze = w - l.y, ct = Math.round(lt / st) * st, ut = Math.round(Ze / st) * st;
        e((Ut) => Ut.map(
          (ft) => ft.id === t ? {
            ...ft,
            objects: ft.objects.map(
              (at) => {
                var bt;
                return at.id === ((bt = N.current) == null ? void 0 : bt.id) ? { ...at, x: ct, y: ut } : at;
              }
            )
          } : ft
        ));
      } else if (((qe = N.current) == null ? void 0 : qe.type) === "fixedElement") {
        const lt = F - l.x, Ze = w - l.y, ct = Math.round(lt / st) * st, ut = Math.round(Ze / st) * st;
        e((Ut) => Ut.map(
          (ft) => ft.id === t ? {
            ...ft,
            fixedElements: ft.fixedElements.map(
              (at) => {
                var bt;
                return at.id === ((bt = N.current) == null ? void 0 : bt.id) ? { ...at, x: ct, y: ut } : at;
              }
            )
          } : ft
        ));
      } else if (((it = N.current) == null ? void 0 : it.type) === "wall" && !C) {
        const lt = F - l.x, Ze = w - l.y, ct = Math.round(lt / st) * st, ut = Math.round(Ze / st) * st;
        e((Ut) => Ut.map(
          (ft) => ft.id === t ? {
            ...ft,
            walls: ft.walls.map((at) => {
              var P;
              if (at.id !== ((P = N.current) == null ? void 0 : P.id))
                return at;
              const bt = ct - at.startX, cn = ut - at.startY;
              return {
                ...at,
                startX: at.startX + bt,
                startY: at.startY + cn,
                endX: at.endX + bt,
                endY: at.endY + cn
              };
            })
          } : ft
        ));
      }
    }));
  }, [o, C, E, l, t, d, i]), S = () => {
    Y.current && (cancelAnimationFrame(Y.current), Y.current = null), a(!1), N.current = null, ee(!1), A(null), te(null);
  }, D = (k, V, F) => {
    k.preventDefault(), k.stopPropagation(), ee(!0), A(F), N.current = { id: V, type: "wall" };
  }, q = () => {
    const k = {
      id: yn(),
      name: `Floor ${i.length + 1}`,
      isActive: !1,
      tables: [],
      chairs: [],
      objects: [],
      walls: [],
      fixedElements: []
    };
    e((V) => [...V, k]), re(k.id);
  }, ce = () => {
    if (i.length <= 1)
      return;
    const k = i.filter((V) => V.id !== t);
    e(k), n(k[0].id);
  }, re = (k) => {
    e((V) => V.map((F) => ({
      ...F,
      isActive: F.id === k
    }))), n(k), r(null);
  }, oe = (k, V) => {
    e((F) => F.map(
      (w) => w.id === k ? { ...w, name: V } : w
    ));
  }, ge = (k) => {
    p(!0), T(k), R(null), L(null), r(null);
  }, ye = (k) => {
    const V = M();
    if (!V)
      return;
    const F = {
      id: yn(),
      name: `${k.charAt(0).toUpperCase() + k.slice(1)} ${V.fixedElements.length + 1}`,
      type: k,
      x: 400 + V.fixedElements.length * 30,
      y: 400 + V.fixedElements.length * 30,
      width: 60,
      height: 60,
      rotation: 0
    };
    e((w) => w.map(
      (Q) => Q.id === t ? { ...Q, fixedElements: [...Q.fixedElements, F] } : Q
    )), r({ type: "fixedElement", id: F.id });
  }, Ne = () => {
    const k = {
      floors: i,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
    console.log("Saving floor plan:", k), alert("Floor plan saved! (Check console for data)");
  }, Fe = () => {
    e([
      {
        id: "floor-sample",
        name: "Sample Floor",
        isActive: !0,
        tables: [
          {
            id: "table-1",
            name: "Table 1",
            shape: "circle",
            size: "medium",
            x: 200,
            y: 200,
            width: 120,
            height: 120,
            rotation: 0
          }
        ],
        chairs: [
          {
            id: "chair-1",
            tableId: "table-1",
            position: "top",
            index: 0,
            x: 0,
            y: 0
          }
        ],
        objects: [],
        walls: [],
        fixedElements: []
      }
    ]), n("floor-sample"), r(null), alert("Sample floor plan loaded!");
  };
  ui(() => {
    const k = (F) => y(F), V = () => S();
    return (o || C) && (document.addEventListener("mousemove", k), document.addEventListener("mouseup", V)), () => {
      document.removeEventListener("mousemove", k), document.removeEventListener("mouseup", V);
    };
  }, [o, C, y]);
  const de = (k) => {
    var V;
    if (v && x && ae.current) {
      const F = ae.current.getBoundingClientRect(), w = Math.round((k.clientX - F.left) / d / st) * st, Q = Math.round((k.clientY - F.top) / d / st) * st, se = Gi(x, { x: w, y: Q });
      L(se);
    } else if (C && ((V = N.current) == null ? void 0 : V.type) === "wall" && ae.current) {
      const F = ae.current.getBoundingClientRect(), w = Math.round((k.clientX - F.left) / d / st) * st, Q = Math.round((k.clientY - F.top) / d / st) * st, se = M(), _e = se == null ? void 0 : se.walls.find((be) => {
        var ke;
        return be.id === ((ke = N.current) == null ? void 0 : ke.id);
      });
      if (_e) {
        const be = E === "start" ? { x: _e.endX, y: _e.endY } : { x: _e.startX, y: _e.startY }, ke = Gi(be, { x: w, y: Q });
        te(
          E === "start" ? { startX: ke.x, startY: ke.y, endX: _e.endX, endY: _e.endY } : { startX: _e.startX, startY: _e.startY, endX: ke.x, endY: ke.y }
        );
      }
    }
  };
  ui(() => {
    const k = (V) => {
      V.key === "Escape" && v && (p(!1), T(null), R(null), L(null));
    };
    return document.addEventListener("keydown", k), () => document.removeEventListener("keydown", k);
  }, [v]);
  const he = M(), ze = he == null ? void 0 : he.tables.find((k) => (s == null ? void 0 : s.type) === "table" && k.id === s.id), Ge = he == null ? void 0 : he.objects.find((k) => (s == null ? void 0 : s.type) === "object" && k.id === s.id), Le = he == null ? void 0 : he.walls.find((k) => (s == null ? void 0 : s.type) === "wall" && k.id === s.id), Se = he == null ? void 0 : he.fixedElements.find((k) => (s == null ? void 0 : s.type) === "fixedElement" && k.id === s.id), Be = ze ? (he == null ? void 0 : he.chairs.filter((k) => k.tableId === ze.id)) ?? [] : [], $e = Os(() => f((k) => !k), []);
  return /* @__PURE__ */ m.jsxs("div", { className: "flex h-screen bg-gray-50", children: [
    /* @__PURE__ */ m.jsx("style", { dangerouslySetInnerHTML: { __html: Yl } }),
    /* @__PURE__ */ m.jsx(
      rc,
      {
        floors: i,
        currentFloor: he,
        onAddFloor: q,
        onRemoveFloor: ce,
        onSwitchFloor: re,
        onRenameFloor: oe,
        onAddTable: ne,
        onAddObject: K,
        onStartWallDrawing: ge,
        onAddFixedElement: ye,
        onRotateTable: Me,
        onDuplicateTable: me,
        onRemoveTable: W,
        onSave: Ne,
        onLoad: Fe,
        selectedTable: ze ?? null,
        selectedTableChairs: Be
      }
    ),
    /* @__PURE__ */ m.jsxs("div", { className: "flex-1 flex flex-col", children: [
      /* @__PURE__ */ m.jsx(
        lc,
        {
          showGrid: u,
          selectedTable: ze ?? null,
          selectedObject: Ge ?? null,
          selectedWall: Le ?? null,
          selectedFixedElement: Se ?? null,
          selectedTableChairs: Be,
          tableCount: (he == null ? void 0 : he.tables.length) ?? 0,
          chairCount: (he == null ? void 0 : he.chairs.length) ?? 0,
          objectCount: (he == null ? void 0 : he.objects.length) ?? 0,
          wallCount: (he == null ? void 0 : he.walls.length) ?? 0,
          fixedElementCount: (he == null ? void 0 : he.fixedElements.length) ?? 0,
          selectedElementType: (s == null ? void 0 : s.type) ?? null,
          onToggleGrid: $e,
          onAddChair: j,
          onRemoveChair: B,
          onChangeTableSize: De,
          onCustomTableSize: pe,
          onTableNameChange: Ce,
          onObjectNameChange: xe,
          onObjectResize: z,
          onObjectRotate: Te,
          onRemoveObject: W,
          onRemoveWall: W,
          onRemoveFixedElement: W,
          onChangeWallThickness: ie,
          onConvertWallType: le,
          onFixedElementResize: Ae,
          onChairSizeChange: J,
          onResetChairSizes: Z,
          on3DPreview: () => _(!0)
        }
      ),
      /* @__PURE__ */ m.jsxs("div", { className: "flex-1 overflow-hidden bg-gray-100 relative", children: [
        /* @__PURE__ */ m.jsxs(
          "div",
          {
            ref: ae,
            className: `w-full h-full relative ${v ? "cursor-crosshair" : C ? "cursor-grabbing" : "cursor-default"}`,
            style: {
              transform: `scale(${d})`,
              transformOrigin: "top left",
              background: u ? "radial-gradient(circle, #d1d5db 1px, transparent 1px)" : "white",
              backgroundSize: `${st * d}px ${st * d}px`
            },
            onClick: Ee,
            onMouseMove: de,
            children: [
              (he == null ? void 0 : he.tables.length) === 0 && /* @__PURE__ */ m.jsx("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ m.jsxs("div", { className: "text-center text-gray-400", children: [
                /* @__PURE__ */ m.jsx("div", { className: "text-6xl mb-4", children: "🏪" }),
                /* @__PURE__ */ m.jsx("div", { className: "text-xl font-medium mb-2", children: "Welcome to Your Restaurant Designer" }),
                /* @__PURE__ */ m.jsx("div", { className: "text-lg", children: 'Click "Add Tables" in the sidebar to start designing your floor plan' }),
                /* @__PURE__ */ m.jsxs("div", { className: "mt-4 space-y-1 text-sm", children: [
                  /* @__PURE__ */ m.jsx("div", { children: "• Drag tables to move them around" }),
                  /* @__PURE__ */ m.jsx("div", { children: "• Click tables to select and edit properties" }),
                  /* @__PURE__ */ m.jsx("div", { children: "• Add chairs from the top toolbar or the table properties panel" }),
                  /* @__PURE__ */ m.jsx("div", { children: "• Use multiple floors for complex layouts" })
                ] })
              ] }) }),
              he == null ? void 0 : he.tables.map((k) => /* @__PURE__ */ m.jsx(
                tc,
                {
                  table: k,
                  isSelected: (s == null ? void 0 : s.type) === "table" && s.id === k.id,
                  chairs: he.chairs.filter((V) => V.tableId === k.id),
                  onSelect: () => Oe("table", k.id),
                  onDrag: fe,
                  onDragEnd: S
                },
                k.id
              )),
              he == null ? void 0 : he.objects.map((k) => /* @__PURE__ */ m.jsx(
                nc,
                {
                  object: k,
                  isSelected: (s == null ? void 0 : s.type) === "object" && s.id === k.id,
                  onSelect: () => Oe("object", k.id),
                  onDragStart: (V) => fe(V, k.id)
                },
                k.id
              )),
              he == null ? void 0 : he.walls.map((k) => /* @__PURE__ */ m.jsx(
                Jr,
                {
                  wall: k,
                  isSelected: (s == null ? void 0 : s.type) === "wall" && s.id === k.id,
                  onSelect: () => Oe("wall", k.id),
                  onDragHandle: (V, F) => D(V, k.id, F),
                  onDragStart: (V) => fe(V, k.id)
                },
                k.id
              )),
              v && x && U && h && /* @__PURE__ */ m.jsx(
                Jr,
                {
                  wall: {
                    id: "temp-wall",
                    type: h,
                    startX: x.x,
                    startY: x.y,
                    endX: U.x,
                    endY: U.y,
                    thickness: 8
                  },
                  isSelected: !1,
                  onSelect: () => {
                  }
                }
              ),
              O && /* @__PURE__ */ m.jsx(
                "div",
                {
                  className: "absolute pointer-events-none",
                  style: {
                    left: `${O.startX}px`,
                    top: `${O.startY}px`,
                    width: `${Math.sqrt(
                      Math.pow(O.endX - O.startX, 2) + Math.pow(O.endY - O.startY, 2)
                    )}px`,
                    height: "4px",
                    transform: `rotate(${Math.atan2(
                      O.endY - O.startY,
                      O.endX - O.startX
                    ) * (180 / Math.PI)}deg)`,
                    transformOrigin: "top left",
                    zIndex: 15
                  },
                  children: /* @__PURE__ */ m.jsx("div", { className: "w-full h-full border-2 border-blue-400 border-dashed opacity-70 bg-blue-100 rounded-sm" })
                }
              ),
              he == null ? void 0 : he.fixedElements.map((k) => /* @__PURE__ */ m.jsx(
                ic,
                {
                  element: k,
                  isSelected: (s == null ? void 0 : s.type) === "fixedElement" && s.id === k.id,
                  onSelect: () => Oe("fixedElement", k.id),
                  onDragStart: (V) => fe(V, k.id)
                },
                k.id
              )),
              he == null ? void 0 : he.chairs.map((k) => {
                const V = he.tables.find((w) => w.id === k.tableId);
                if (!V)
                  return null;
                const F = he.chairs.filter(
                  (w) => w.tableId === k.tableId && w.position === k.position
                ).length;
                return /* @__PURE__ */ m.jsx(
                  ec,
                  {
                    chair: k,
                    table: V,
                    totalChairsOnSide: F,
                    isSelected: !1,
                    onSelect: () => {
                    },
                    onDrag: () => {
                    },
                    onDragEnd: () => {
                    }
                  },
                  k.id
                );
              }),
              s && s.type === "table" && ze && /* @__PURE__ */ m.jsx(
                "div",
                {
                  className: "absolute border-2 border-blue-500 border-dashed rounded pointer-events-none",
                  style: {
                    left: ze.x - 10,
                    top: ze.y - 10,
                    width: (ze.shape === "rectangle" ? ze.width * 1.5 : ze.width) + 20,
                    height: ze.height + 20,
                    transform: `rotate(${ze.rotation || 0}deg)`
                  }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ m.jsx("div", { className: "absolute bottom-0 left-0 right-0 bg-white bg-opacity-95 border-t border-gray-200 p-3", children: /* @__PURE__ */ m.jsxs("div", { className: "flex items-center justify-between text-sm", children: [
          /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-2 text-gray-600", children: [
              /* @__PURE__ */ m.jsx("div", { className: "w-2 h-2 bg-green-500 rounded-full" }),
              /* @__PURE__ */ m.jsxs("span", { children: [
                "Floor: ",
                he == null ? void 0 : he.name
              ] })
            ] }),
            o && /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-2 text-blue-600", children: [
              /* @__PURE__ */ m.jsx("div", { className: "w-2 h-2 bg-blue-500 rounded-full animate-pulse" }),
              /* @__PURE__ */ m.jsx("span", { children: "Dragging..." })
            ] })
          ] }),
          /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ m.jsxs("div", { className: "text-gray-500", children: [
              "Zoom: ",
              Math.round(d * 100),
              "% | Grid: ",
              u ? "On" : "Off"
            ] }),
            s && /* @__PURE__ */ m.jsx("div", { className: "text-blue-600 font-medium", children: s.type === "table" && ze ? `${ze.name} (${ze.shape})` : "Element Selected" })
          ] })
        ] }) })
      ] })
    ] }),
    he && /* @__PURE__ */ m.jsx(
      vm,
      {
        floor: he,
        isOpen: g,
        onClose: () => _(!1)
      }
    )
  ] });
};
export {
  vm as Preview3DModal,
  Mm as RestaurantFloorPlanner
};
//# sourceMappingURL=restaurant-floor-planner.es.js.map
