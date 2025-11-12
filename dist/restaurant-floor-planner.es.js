import { jsx as e, jsxs as n, Fragment as Ze } from "react/jsx-runtime";
import Ve, { useState as U, useRef as Te, useEffect as _e, useCallback as je } from "react";
import { Square as qe, Circle as yt, Wine as vt, ChefHat as Nt, Bath as Mt, RectangleVertical as ot, DoorOpen as St, Columns as lt, Rows as Ct, Armchair as tt, Layers as mt, Plus as rt, Minus as gt, LayoutGrid as kt, Package as Et, Home as Gt, RotateCw as zt, Trash2 as Je, Save as Pt, Upload as It, Eye as Rt, EyeOff as Tt, RotateCcw as nt, ChevronRight as $t, Box as Lt, Move3d as et, X as Wt, ZoomIn as dt, ZoomOut as Bt, Maximize2 as Xt, Grid as At } from "lucide-react";
import * as t from "three";
const Yt = `
  .hexagon-shape {
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  }
`, Y = 20, Ht = {
  small: { width: 50, height: 50 },
  medium: { width: 90, height: 90 },
  large: { width: 130, height: 130 }
}, Dt = {
  square: qe,
  circle: yt,
  rectangle: qe,
  hexagon: qe
}, ut = {
  small: "Small",
  medium: "Medium",
  large: "Big"
}, st = {
  bar: vt,
  kitchen: Nt,
  toilet: Mt
}, Ke = {
  bar: "Bar",
  kitchen: "Kitchen",
  toilet: "Toilet"
}, xt = {
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
}, Qe = {
  wall: "Wall",
  door: "Door",
  window: "Window"
}, Ot = {
  wall: ot,
  door: St,
  window: ot
}, wt = {
  pillar: "Pillar",
  column: "Column",
  stairs: "Stairs"
}, Ft = {
  pillar: lt,
  column: lt,
  stairs: Ct
}, Zt = {
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
}, Oe = () => Math.random().toString(36).slice(2, 11), _t = (o) => {
  const p = o.shape === "rectangle" ? o.width * 1.5 : o.width, f = Math.min(p, o.height), C = Math.round(f * 0.35);
  return Math.max(18, Math.min(48, C));
}, bt = (o) => o.shape === "rectangle" ? o.width * 1.5 : o.width, pt = (o, p) => {
  const { width: f, height: C } = Ht[p];
  return {
    width: o === "rectangle" ? f * 1.5 : f,
    height: C
  };
}, Ue = (o, p) => {
  const f = Math.abs(p.x - o.x), C = Math.abs(p.y - o.y);
  return f > C ? { x: p.x, y: o.y } : { x: o.x, y: p.y };
}, Vt = ({
  chair: o,
  table: p,
  isSelected: f,
  onSelect: C,
  onDrag: i,
  onDragEnd: v,
  totalChairsOnSide: V
}) => {
  const oe = _t(p), P = o.size ?? Math.round(oe * 1.3), le = Math.max(10, Math.round(P * 0.25)), q = Math.min(P - 4, Math.max(20, Math.round(P * 0.65))), A = bt(p), _ = (p.rotation || 0) * (Math.PI / 180), Ne = (() => {
    const $e = (o.position === "top" || o.position === "bottom" ? A : p.height) - P * V, ge = V > 1 ? $e / (V + 1) : $e / 2, be = ge + o.index * (P + ge) + P / 2;
    let h = 0, I = 0;
    switch (o.position) {
      case "top":
        h = be - A / 2, I = -(p.height / 2 + le + P / 2);
        break;
      case "bottom":
        h = be - A / 2, I = p.height / 2 + le + P / 2;
        break;
      case "left":
        h = -(A / 2 + le + P / 2), I = be - p.height / 2;
        break;
      case "right":
        h = A / 2 + le + P / 2, I = be - p.height / 2;
        break;
    }
    const F = h * Math.cos(_) - I * Math.sin(_), ye = h * Math.sin(_) + I * Math.cos(_), de = p.x + A / 2, ze = p.y + p.height / 2;
    return {
      x: de + F - P / 2,
      y: ze + ye - P / 2
    };
  })(), Ae = () => {
    let J = 0;
    switch (o.position) {
      case "top":
        J = 0;
        break;
      case "right":
        J = 90;
        break;
      case "bottom":
        J = 180;
        break;
      case "left":
        J = 270;
        break;
    }
    return J + (p.rotation || 0);
  };
  return /* @__PURE__ */ e(
    "div",
    {
      className: `absolute cursor-move transition-all duration-150 ${f ? "ring-4 ring-amber-400 ring-offset-2" : ""}`,
      style: {
        left: Ne.x,
        top: Ne.y,
        width: P,
        height: P,
        transform: `rotate(${Ae()}deg)`,
        zIndex: f ? 100 : 50,
        filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2))"
      },
      onMouseDown: (J) => {
        J.stopPropagation(), C(), i(J, o.id);
      },
      onMouseUp: v,
      children: /* @__PURE__ */ e("div", { className: "rfp-w-full rfp-h-full bg-gradient-to-br from-amber-500 to-amber-700 rfp-rounded-lg rfp-border-4 border-amber-800 rfp-flex rfp-items-center rfp-justify-center rfp-shadow-xl hover:shadow-2xl hover:scale-105 rfp-transition-all", children: /* @__PURE__ */ e(tt, { size: q, strokeWidth: 3.5, className: "text-amber-50" }) })
    }
  );
}, qt = ({
  table: o,
  chairs: p,
  isSelected: f,
  onSelect: C,
  onDrag: i,
  onDragEnd: v
}) => {
  const V = {
    left: o.x,
    top: o.y,
    width: bt(o),
    height: o.height,
    zIndex: f ? 100 : 50,
    transform: `rotate(${o.rotation || 0}deg)`
  }, oe = "w-full h-full flex items-center justify-center relative", P = o.shape === "circle" ? `${oe} rounded-full` : o.shape === "hexagon" ? `${oe} hexagon-shape` : oe, q = p.filter((Ne) => Ne.tableId === o.id).length, A = o.name.match(/\d+/), _ = A ? A[0] : o.name;
  return /* @__PURE__ */ e(
    "div",
    {
      className: `absolute cursor-move transition-all duration-150 ${f ? "ring-2 ring-emerald-500 ring-offset-2" : ""}`,
      style: V,
      onMouseDown: (Ne) => {
        Ne.stopPropagation(), C(), i(Ne, o.id);
      },
      onClick: (Ne) => {
        Ne.stopPropagation(), C();
      },
      onMouseUp: v,
      children: /* @__PURE__ */ n("div", { className: P, children: [
        /* @__PURE__ */ e(
          "div",
          {
            className: "rfp-absolute rfp-inset-0 rounded-[inherit]",
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
        /* @__PURE__ */ e(
          "div",
          {
            className: "rfp-absolute rfp-inset-0 rounded-[inherit] rfp-opacity-20",
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
        /* @__PURE__ */ e(
          "div",
          {
            className: "rfp-absolute rfp-inset-0 rounded-[inherit]",
            style: {
              border: "3px solid transparent",
              borderImage: "linear-gradient(145deg, rgba(255,255,255,0.4), rgba(0,0,0,0.2)) 1",
              pointerEvents: "none"
            }
          }
        ),
        /* @__PURE__ */ n("div", { className: "rfp-relative z-10 rfp-flex rfp-flex-col rfp-items-center rfp-justify-center rfp-gap-1 rfp-text-white rfp-drop-shadow-lg", children: [
          /* @__PURE__ */ n("span", { className: "rfp-text-xs rfp-font-bold rfp-uppercase rfp-tracking-wide", children: [
            "N: ",
            _
          ] }),
          /* @__PURE__ */ n("span", { className: "rfp-text-xs rfp-font-bold rfp-uppercase rfp-tracking-wide", children: [
            "S: ",
            q
          ] })
        ] })
      ] })
    }
  );
}, Ut = ({
  object: o,
  isSelected: p,
  onSelect: f,
  onDragStart: C
}) => {
  const i = st[o.type], v = xt[o.type], [V, oe] = U(!1), P = (le) => {
    oe(!0), C(le);
    const q = () => {
      oe(!1), document.removeEventListener("mouseup", q);
    };
    document.addEventListener("mouseup", q);
  };
  return /* @__PURE__ */ n(
    "div",
    {
      className: `absolute cursor-move select-none ${V ? "" : "transition-all duration-75"} ${v.bg} ${v.border} border-2 rounded-lg shadow-lg flex items-center justify-center ${p ? "ring-4 ring-blue-400 ring-opacity-50 scale-105" : "hover:scale-102"}`,
      style: {
        left: `${o.x}px`,
        top: `${o.y}px`,
        width: `${o.width}px`,
        height: `${o.height}px`,
        transform: `rotate(${o.rotation}deg)`,
        transformOrigin: "center",
        willChange: V ? "transform" : "auto"
      },
      onClick: (le) => {
        le.stopPropagation(), f();
      },
      onMouseDown: P,
      children: [
        /* @__PURE__ */ n("div", { className: "rfp-flex rfp-flex-col rfp-items-center rfp-justify-center rfp-gap-2 rfp-pointer-events-none", children: [
          /* @__PURE__ */ e(i, { className: `w-8 h-8 ${v.text}`, strokeWidth: 2 }),
          /* @__PURE__ */ e("span", { className: `text-sm font-bold ${v.text} uppercase tracking-wide`, children: o.name })
        ] }),
        p && /* @__PURE__ */ n(Ze, { children: [
          /* @__PURE__ */ e("div", { className: "rfp-absolute -top-1 -left-1 rfp-w-3 rfp-h-3 rfp-bg-blue-500 rfp-rounded-full rfp-border-2 border-white cursor-nw-resize" }),
          /* @__PURE__ */ e("div", { className: "rfp-absolute -top-1 -right-1 rfp-w-3 rfp-h-3 rfp-bg-blue-500 rfp-rounded-full rfp-border-2 border-white cursor-ne-resize" }),
          /* @__PURE__ */ e("div", { className: "rfp-absolute -bottom-1 -left-1 rfp-w-3 rfp-h-3 rfp-bg-blue-500 rfp-rounded-full rfp-border-2 border-white cursor-sw-resize" }),
          /* @__PURE__ */ e("div", { className: "rfp-absolute -bottom-1 -right-1 rfp-w-3 rfp-h-3 rfp-bg-blue-500 rfp-rounded-full rfp-border-2 border-white cursor-se-resize" })
        ] })
      ]
    }
  );
}, ct = ({
  wall: o,
  isSelected: p,
  onSelect: f,
  onDragHandle: C,
  onDragStart: i
}) => {
  const v = Math.sqrt(
    Math.pow(o.endX - o.startX, 2) + Math.pow(o.endY - o.startY, 2)
  ), V = Math.atan2(o.endY - o.startY, o.endX - o.startX) * (180 / Math.PI), oe = () => {
    if (!p)
      return "pointer";
    const A = Math.abs(o.endX - o.startX), _ = Math.abs(o.endY - o.startY);
    return A > _ ? "ew-resize" : "ns-resize";
  }, P = () => {
    switch (o.type) {
      case "wall":
        return "bg-gray-800";
      case "door":
        return "bg-amber-600";
      case "window":
        return "bg-blue-500";
    }
  }, le = () => o.type === "window" ? "bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400" : o.type === "door" ? "" : P(), q = () => {
    const A = v * 0.1, _ = (v - A) / 2;
    return /* @__PURE__ */ n("div", { className: "rfp-w-full rfp-h-full rfp-relative", children: [
      /* @__PURE__ */ e(
        "div",
        {
          className: "rfp-absolute rfp-left-0 bg-gradient-to-r from-amber-600 to-amber-700 rfp-shadow-md rfp-rounded-sm",
          style: {
            width: `${_}px`,
            height: `${o.thickness}px`,
            borderTop: "1px solid #fbbf24",
            borderBottom: "1px solid #78350f",
            borderRight: "2px solid #92400e"
          },
          children: /* @__PURE__ */ e(
            "div",
            {
              className: "rfp-absolute right-1 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 bg-yellow-500 rfp-rounded-full rfp-shadow-sm"
            }
          )
        }
      ),
      /* @__PURE__ */ e(
        "div",
        {
          className: "rfp-absolute rfp-bg-transparent",
          style: {
            left: `${_}px`,
            width: `${A}px`,
            height: `${o.thickness}px`
          }
        }
      ),
      /* @__PURE__ */ e(
        "div",
        {
          className: "rfp-absolute rfp-right-0 bg-gradient-to-r from-amber-700 to-amber-600 rfp-shadow-md rfp-rounded-sm",
          style: {
            width: `${_}px`,
            height: `${o.thickness}px`,
            borderTop: "1px solid #fbbf24",
            borderBottom: "1px solid #78350f",
            borderLeft: "2px solid #92400e"
          },
          children: /* @__PURE__ */ e(
            "div",
            {
              className: "rfp-absolute left-1 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 bg-yellow-500 rfp-rounded-full rfp-shadow-sm"
            }
          )
        }
      )
    ] });
  };
  return /* @__PURE__ */ n(
    "div",
    {
      onClick: (A) => {
        A.stopPropagation(), f();
      },
      onMouseDown: (A) => {
        p && i && (A.stopPropagation(), i(A));
      },
      className: `absolute transition-all ${p ? "ring-4 ring-blue-400 ring-opacity-50 hover:ring-6 hover:ring-blue-300" : ""}`,
      style: {
        left: `${o.startX}px`,
        top: `${o.startY}px`,
        width: `${v}px`,
        height: `${o.thickness}px`,
        transform: `rotate(${V}deg)`,
        transformOrigin: "top left",
        zIndex: 10,
        cursor: p ? "move" : "pointer",
        pointerEvents: "auto"
      },
      children: [
        o.type === "door" ? q() : /* @__PURE__ */ e("div", { className: `w-full h-full ${le()} shadow-lg hover:opacity-90 transition-opacity rounded-sm`, children: p && /* @__PURE__ */ n("div", { className: "rfp-absolute -top-8 left-1/2 transform -translate-x-1/2 rfp-bg-gray-900 rfp-text-white rfp-text-xs rfp-px-2 rfp-py-1 rfp-rounded whitespace-nowrap rfp-shadow-lg z-30", children: [
          Qe[o.type],
          " - ",
          Math.round(v),
          "px"
        ] }) }),
        o.type === "door" && p && /* @__PURE__ */ n("div", { className: "rfp-absolute -top-8 left-1/2 transform -translate-x-1/2 rfp-bg-gray-900 rfp-text-white rfp-text-xs rfp-px-2 rfp-py-1 rfp-rounded whitespace-nowrap rfp-shadow-lg z-30", children: [
          Qe[o.type],
          " - ",
          Math.round(v),
          "px"
        ] }),
        p && /* @__PURE__ */ n(Ze, { children: [
          /* @__PURE__ */ e(
            "div",
            {
              className: "rfp-absolute -left-2 top-1/2 transform -translate-y-1/2 rfp-w-5 rfp-h-5 rfp-bg-blue-500 rfp-rounded-full rfp-border-2 border-white hover:bg-blue-600 hover:scale-125 rfp-transition-all rfp-shadow-xl z-30",
              style: { cursor: oe() },
              onMouseDown: (A) => {
                A.stopPropagation(), C == null || C(A, "start");
              },
              title: "Drag to resize"
            }
          ),
          /* @__PURE__ */ e(
            "div",
            {
              className: "rfp-absolute -right-2 top-1/2 transform -translate-y-1/2 rfp-w-5 rfp-h-5 rfp-bg-blue-500 rfp-rounded-full rfp-border-2 border-white hover:bg-blue-600 hover:scale-125 rfp-transition-all rfp-shadow-xl z-30",
              style: { cursor: oe() },
              onMouseDown: (A) => {
                A.stopPropagation(), C == null || C(A, "end");
              },
              title: "Drag to resize"
            }
          )
        ] })
      ]
    }
  );
}, Jt = ({
  element: o,
  isSelected: p,
  onSelect: f,
  onDragStart: C
}) => {
  const [i, v] = U(!1), V = (P) => {
    v(!0), C(P);
    const le = () => {
      v(!1), document.removeEventListener("mouseup", le);
    };
    document.addEventListener("mouseup", le);
  }, oe = () => o.type === "pillar" ? /* @__PURE__ */ n("div", { className: "rfp-w-full rfp-h-full rfp-relative", children: [
    /* @__PURE__ */ n("div", { className: "rfp-absolute inset-2 bg-gradient-to-br from-gray-400 via-gray-600 to-gray-800 rfp-rounded-full shadow-2xl", children: [
      /* @__PURE__ */ e("div", { className: "rfp-absolute rfp-inset-0 rfp-rounded-full bg-gradient-to-tr from-transparent via-white/10 to-white/20" }),
      /* @__PURE__ */ e("div", { className: "rfp-absolute rfp-inset-0 rfp-rounded-full shadow-inner", style: { boxShadow: "inset -4px -4px 12px rgba(0,0,0,0.5), inset 4px 4px 12px rgba(255,255,255,0.2)" } })
    ] }),
    /* @__PURE__ */ e("div", { className: "rfp-absolute rfp-inset-0 rfp-flex rfp-items-center rfp-justify-center", children: /* @__PURE__ */ e("div", { className: "w-1/3 h-1/3 bg-white/10 rfp-rounded-full blur-sm" }) })
  ] }) : o.type === "column" ? /* @__PURE__ */ n("div", { className: "rfp-w-full rfp-h-full rfp-relative", children: [
    /* @__PURE__ */ n("div", { className: "rfp-absolute inset-2 bg-gradient-to-br from-slate-400 via-slate-600 to-slate-800 rfp-rounded-lg shadow-2xl", children: [
      /* @__PURE__ */ e("div", { className: "rfp-absolute rfp-inset-0 rfp-rounded-lg bg-gradient-to-br from-white/20 via-transparent to-black/30" }),
      /* @__PURE__ */ e("div", { className: "rfp-absolute rfp-top-0 rfp-left-0 rfp-right-0 rfp-h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-t-lg" }),
      /* @__PURE__ */ e("div", { className: "rfp-absolute rfp-top-0 rfp-bottom-0 rfp-left-0 rfp-w-1 bg-gradient-to-b from-transparent via-white/30 to-transparent rounded-l-lg" }),
      /* @__PURE__ */ e("div", { className: "rfp-absolute rfp-inset-0 rfp-rounded-lg", style: { boxShadow: "inset 0 0 20px rgba(0,0,0,0.5)" } })
    ] }),
    /* @__PURE__ */ e("div", { className: "rfp-absolute rfp-inset-0 rfp-flex rfp-items-center rfp-justify-center rfp-pointer-events-none", children: /* @__PURE__ */ e("div", { className: "w-0.5 h-2/3 bg-white/20" }) })
  ] }) : o.type === "stairs" ? /* @__PURE__ */ n("div", { className: "rfp-w-full rfp-h-full rfp-relative bg-gradient-to-br from-amber-200 via-amber-300 to-amber-400 rfp-rounded-lg rfp-shadow-xl rfp-overflow-hidden", children: [
    [0, 1, 2, 3, 4, 5].map((P) => /* @__PURE__ */ n(
      "div",
      {
        className: "rfp-absolute rfp-left-0 rfp-right-0 bg-gradient-to-r from-amber-400 to-amber-500 rfp-border-t border-amber-600",
        style: {
          top: `${P * 16.66}%`,
          height: "16.66%",
          boxShadow: "0 2px 4px rgba(0,0,0,0.3)"
        },
        children: [
          /* @__PURE__ */ e("div", { className: "rfp-absolute rfp-inset-0 bg-gradient-to-b from-white/20 to-transparent h-1/2" }),
          /* @__PURE__ */ e("div", { className: "rfp-absolute rfp-bottom-0 rfp-left-0 rfp-right-0 h-px bg-black/30" })
        ]
      },
      P
    )),
    /* @__PURE__ */ e("div", { className: "rfp-absolute rfp-inset-0 rfp-flex rfp-items-center rfp-justify-center rfp-pointer-events-none", children: /* @__PURE__ */ e("div", { className: "bg-white/80 rfp-rounded-full rfp-p-2 rfp-shadow-lg", children: /* @__PURE__ */ e("svg", { className: "rfp-w-6 rfp-h-6 text-amber-800", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 3, d: "M5 15l7-7 7 7" }) }) }) })
  ] }) : null;
  return /* @__PURE__ */ n(
    "div",
    {
      className: `absolute cursor-move select-none ${i ? "" : "transition-all duration-75"} rounded-lg ${p ? "ring-4 ring-blue-400 ring-opacity-50 scale-105" : "hover:scale-102"}`,
      style: {
        left: `${o.x}px`,
        top: `${o.y}px`,
        width: `${o.width}px`,
        height: `${o.height}px`,
        transform: `rotate(${o.rotation}deg)`,
        transformOrigin: "center",
        willChange: i ? "transform" : "auto",
        zIndex: 20
      },
      onClick: (P) => {
        P.stopPropagation(), f();
      },
      onMouseDown: V,
      children: [
        oe(),
        p && /* @__PURE__ */ e("div", { className: "rfp-absolute -bottom-8 left-1/2 transform -translate-x-1/2 rfp-bg-gray-900 rfp-text-white rfp-text-xs rfp-px-2 rfp-py-1 rfp-rounded whitespace-nowrap rfp-shadow-lg z-30", children: o.name }),
        p && /* @__PURE__ */ n(Ze, { children: [
          /* @__PURE__ */ e("div", { className: "rfp-absolute -top-1 -left-1 rfp-w-3 rfp-h-3 rfp-bg-blue-500 rfp-rounded-full rfp-border-2 border-white" }),
          /* @__PURE__ */ e("div", { className: "rfp-absolute -top-1 -right-1 rfp-w-3 rfp-h-3 rfp-bg-blue-500 rfp-rounded-full rfp-border-2 border-white" }),
          /* @__PURE__ */ e("div", { className: "rfp-absolute -bottom-1 -left-1 rfp-w-3 rfp-h-3 rfp-bg-blue-500 rfp-rounded-full rfp-border-2 border-white" }),
          /* @__PURE__ */ e("div", { className: "rfp-absolute -bottom-1 -right-1 rfp-w-3 rfp-h-3 rfp-bg-blue-500 rfp-rounded-full rfp-border-2 border-white" })
        ] })
      ]
    }
  );
}, Kt = ut, Qt = ({
  floors: o,
  currentFloor: p,
  onAddFloor: f,
  onRemoveFloor: C,
  onSwitchFloor: i,
  onRenameFloor: v,
  onAddTable: V,
  onAddObject: oe,
  onStartWallDrawing: P,
  onAddFixedElement: le,
  onRotateTable: q,
  onDuplicateTable: A,
  onRemoveTable: _,
  onSave: Ne,
  onLoad: Ae,
  selectedTable: J,
  selectedTableChairs: $e
}) => {
  const [ge, be] = Ve.useState(null), [h, I] = Ve.useState(""), [F, ye] = Ve.useState("tables"), de = Ve.useRef(null);
  Ve.useEffect(() => {
    ge && de.current && (de.current.focus(), de.current.select());
  }, [ge]);
  const ze = (M) => {
    be(M.id), I(M.name);
  }, we = () => {
    ge && h.trim() && v(ge, h.trim()), be(null), I("");
  }, He = (M) => {
    M.key === "Enter" ? we() : M.key === "Escape" && (be(null), I(""));
  };
  return /* @__PURE__ */ n("div", { className: "rfp-w-80 rfp-bg-white rfp-shadow-lg rfp-border-r rfp-border-gray-200 rfp-flex rfp-flex-col", children: [
    /* @__PURE__ */ n("div", { className: "rfp-p-4 bg-gradient-to-r from-blue-600 to-purple-600 rfp-text-white", children: [
      /* @__PURE__ */ e("h1", { className: "rfp-text-xl rfp-font-bold", children: "Restaurant Designer" }),
      /* @__PURE__ */ e("p", { className: "rfp-text-blue-100 rfp-text-sm", children: "Professional Floor Planner" })
    ] }),
    /* @__PURE__ */ n("div", { className: "rfp-p-4 rfp-border-b rfp-border-gray-200", children: [
      /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-justify-between rfp-mb-4", children: [
        /* @__PURE__ */ n("h2", { className: "rfp-text-lg rfp-font-semibold rfp-text-gray-800 rfp-flex rfp-items-center rfp-gap-2", children: [
          /* @__PURE__ */ e(mt, { className: "rfp-w-5 rfp-h-5" }),
          "Floor Plans (",
          o.length,
          ")"
        ] }),
        /* @__PURE__ */ n("div", { className: "rfp-flex rfp-gap-1", children: [
          /* @__PURE__ */ e(
            "button",
            {
              onClick: f,
              className: "rfp-p-2 rfp-text-gray-600 hover:text-green-600 hover:bg-green-50 rfp-rounded-lg transition-colors",
              title: "Add New Floor",
              children: /* @__PURE__ */ e(rt, { className: "rfp-w-4 rfp-h-4" })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              onClick: C,
              disabled: o.length <= 1,
              className: "rfp-p-2 rfp-text-gray-600 hover:text-red-600 hover:bg-red-50 rfp-rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
              title: "Remove Current Floor",
              children: /* @__PURE__ */ e(gt, { className: "rfp-w-4 rfp-h-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e("div", { className: "rfp-space-y-2 rfp-max-h-32 overflow-y-auto", children: o.map((M) => /* @__PURE__ */ n(
        "div",
        {
          className: `w-full p-3 rounded-lg transition-all flex items-center justify-between ${M.isActive ? "bg-blue-100 text-blue-800 border border-blue-200 shadow-sm" : "text-gray-600 hover:bg-gray-100 border border-transparent"}`,
          onClick: () => {
            ge !== M.id && i(M.id);
          },
          onDoubleClick: () => ze(M),
          children: [
            /* @__PURE__ */ n("div", { className: "rfp-flex-1", children: [
              ge === M.id ? /* @__PURE__ */ e(
                "input",
                {
                  ref: de,
                  type: "text",
                  value: h,
                  onChange: (Me) => I(Me.target.value),
                  onBlur: we,
                  onKeyDown: He,
                  className: "rfp-w-full rfp-px-2 rfp-py-1 rfp-text-sm rfp-font-medium rfp-bg-white rfp-border rfp-border-blue-400 rfp-rounded focus:outline-none focus:ring-2 focus:ring-blue-500",
                  onClick: (Me) => Me.stopPropagation()
                }
              ) : /* @__PURE__ */ e("div", { className: "rfp-font-medium rfp-cursor-pointer", children: M.name }),
              /* @__PURE__ */ n("div", { className: "rfp-text-xs rfp-text-gray-500 mt-0.5", children: [
                M.tables.length,
                " tables, ",
                M.chairs.length,
                " chairs"
              ] })
            ] }),
            M.isActive && /* @__PURE__ */ e("div", { className: "rfp-w-2 rfp-h-2 rfp-bg-blue-500 rfp-rounded-full" })
          ]
        },
        M.id
      )) })
    ] }),
    /* @__PURE__ */ e("div", { className: "rfp-border-b rfp-border-gray-200", children: /* @__PURE__ */ n("div", { className: "rfp-flex", children: [
      /* @__PURE__ */ n(
        "button",
        {
          onClick: () => ye("tables"),
          className: `flex-1 py-3 px-4 font-semibold text-sm transition-all flex items-center justify-center gap-2 ${F === "tables" ? "bg-white text-emerald-600 border-b-2 border-emerald-600" : "bg-gray-50 text-gray-600 hover:bg-gray-100"}`,
          children: [
            /* @__PURE__ */ e(kt, { className: "rfp-w-4 rfp-h-4" }),
            "Tables"
          ]
        }
      ),
      /* @__PURE__ */ n(
        "button",
        {
          onClick: () => ye("objects"),
          className: `flex-1 py-3 px-4 font-semibold text-sm transition-all flex items-center justify-center gap-2 ${F === "objects" ? "bg-white text-purple-600 border-b-2 border-purple-600" : "bg-gray-50 text-gray-600 hover:bg-gray-100"}`,
          children: [
            /* @__PURE__ */ e(Et, { className: "rfp-w-4 rfp-h-4" }),
            "Objects"
          ]
        }
      ),
      /* @__PURE__ */ n(
        "button",
        {
          onClick: () => ye("roomLayout"),
          className: `flex-1 py-3 px-4 font-semibold text-sm transition-all flex items-center justify-center gap-2 ${F === "roomLayout" ? "bg-white text-gray-700 border-b-2 border-gray-700" : "bg-gray-50 text-gray-600 hover:bg-gray-100"}`,
          children: [
            /* @__PURE__ */ e(Gt, { className: "rfp-w-4 rfp-h-4" }),
            "Room"
          ]
        }
      )
    ] }) }),
    F === "tables" && /* @__PURE__ */ n("div", { className: "rfp-p-4 rfp-border-b rfp-border-gray-200", children: [
      /* @__PURE__ */ e("h3", { className: "text-md rfp-font-semibold rfp-text-gray-800 rfp-mb-3", children: "Add Tables" }),
      /* @__PURE__ */ e("div", { className: "rfp-grid grid-cols-2 rfp-gap-3", children: Object.entries(Dt).map(([M, Me]) => /* @__PURE__ */ n(
        "button",
        {
          onClick: () => V(M),
          className: "rfp-p-3 rfp-border-2 rfp-border-gray-200 rfp-rounded-lg hover:border-emerald-400 hover:bg-emerald-50 rfp-transition-all rfp-flex rfp-flex-col rfp-items-center rfp-gap-2 hover:shadow-md",
          children: [
            /* @__PURE__ */ e(Me, { className: "rfp-w-6 rfp-h-6 text-emerald-600" }),
            /* @__PURE__ */ e("span", { className: "rfp-text-xs rfp-text-gray-700 rfp-capitalize rfp-font-medium", children: M })
          ]
        },
        M
      )) })
    ] }),
    F === "objects" && /* @__PURE__ */ n("div", { className: "rfp-p-4 rfp-border-b rfp-border-gray-200", children: [
      /* @__PURE__ */ e("h3", { className: "text-md rfp-font-semibold rfp-text-gray-800 rfp-mb-3", children: "Add Objects" }),
      /* @__PURE__ */ e("div", { className: "rfp-space-y-3", children: Object.keys(Ke).map((M) => {
        const Me = st[M], j = xt[M], K = Ke[M];
        return /* @__PURE__ */ n(
          "button",
          {
            onClick: () => oe(M),
            className: `w-full p-4 ${j.bg} border-2 ${j.border} rounded-xl hover:scale-105 transition-all flex items-center gap-3 shadow-lg hover:shadow-xl`,
            children: [
              /* @__PURE__ */ e("div", { className: "bg-white/20 rfp-p-2 rfp-rounded-lg", children: /* @__PURE__ */ e(Me, { className: `w-6 h-6 ${j.text}`, strokeWidth: 2.5 }) }),
              /* @__PURE__ */ n("div", { className: "rfp-flex-1 rfp-text-left", children: [
                /* @__PURE__ */ e("span", { className: `text-base font-bold ${j.text}`, children: K }),
                /* @__PURE__ */ e("div", { className: "rfp-text-xs text-white/80 mt-0.5", children: "Click to add to floor" })
              ] })
            ]
          },
          M
        );
      }) })
    ] }),
    F === "roomLayout" && /* @__PURE__ */ n("div", { className: "rfp-p-4 rfp-border-b rfp-border-gray-200", children: [
      /* @__PURE__ */ n("div", { className: "rfp-mb-6", children: [
        /* @__PURE__ */ e("h3", { className: "text-md rfp-font-semibold rfp-text-gray-800 rfp-mb-3", children: "Draw Walls" }),
        /* @__PURE__ */ e("div", { className: "rfp-space-y-2", children: ["wall", "door", "window"].map((M) => {
          const Me = Ot[M], j = Qe[M];
          return /* @__PURE__ */ n(
            "button",
            {
              onClick: () => P(M),
              className: `w-full p-3 border-2 rounded-lg transition-all flex items-center gap-3 shadow-md hover:shadow-lg ${{
                wall: "bg-gradient-to-br from-gray-600 to-gray-800 border-gray-700 text-white hover:from-gray-700 hover:to-gray-900",
                door: "bg-gradient-to-br from-amber-500 to-amber-700 border-amber-600 text-white hover:from-amber-600 hover:to-amber-800",
                window: "bg-gradient-to-br from-blue-500 to-blue-700 border-blue-600 text-white hover:from-blue-600 hover:to-blue-800"
              }[M]}`,
              children: [
                /* @__PURE__ */ e(Me, { className: "rfp-w-5 rfp-h-5", strokeWidth: 2.5 }),
                /* @__PURE__ */ e("span", { className: "rfp-text-sm rfp-font-semibold", children: j })
              ]
            },
            M
          );
        }) })
      ] }),
      /* @__PURE__ */ n("div", { children: [
        /* @__PURE__ */ e("h3", { className: "text-md rfp-font-semibold rfp-text-gray-800 rfp-mb-3", children: "Add Elements" }),
        /* @__PURE__ */ e("div", { className: "rfp-space-y-2", children: ["pillar", "column", "stairs"].map((M) => {
          const Me = Ft[M], j = Zt[M], K = wt[M];
          return /* @__PURE__ */ n(
            "button",
            {
              onClick: () => le(M),
              className: `w-full p-3 ${j.bg} border-2 ${j.border} rounded-lg hover:scale-105 transition-all flex items-center gap-3 shadow-md hover:shadow-lg`,
              children: [
                /* @__PURE__ */ e("div", { className: "bg-white/10 p-1.5 rfp-rounded", children: /* @__PURE__ */ e(Me, { className: `w-5 h-5 ${j.text}`, strokeWidth: 2.5 }) }),
                /* @__PURE__ */ e("span", { className: `text-sm font-semibold ${j.text}`, children: K })
              ]
            },
            M
          );
        }) })
      ] })
    ] }),
    J && /* @__PURE__ */ n("div", { className: "rfp-p-4 rfp-border-b rfp-border-gray-200", children: [
      /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-justify-between rfp-mb-3", children: [
        /* @__PURE__ */ e("h3", { className: "text-md rfp-font-semibold rfp-text-gray-800", children: "Table Properties" }),
        /* @__PURE__ */ n("div", { className: "rfp-flex rfp-gap-1", children: [
          /* @__PURE__ */ e(
            "button",
            {
              onClick: q,
              className: "rfp-p-1 rfp-text-blue-600 hover:bg-blue-100 rfp-rounded transition-colors",
              title: "Rotate Table",
              children: /* @__PURE__ */ e(zt, { className: "rfp-w-4 rfp-h-4" })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              onClick: A,
              className: "rfp-p-1 rfp-text-green-600 hover:bg-green-100 rfp-rounded transition-colors",
              title: "Duplicate Table",
              children: /* @__PURE__ */ e(rt, { className: "rfp-w-4 rfp-h-4" })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              onClick: _,
              className: "rfp-p-1 rfp-text-red-600 hover:bg-red-100 rfp-rounded transition-colors",
              title: "Delete Table",
              children: /* @__PURE__ */ e(Je, { className: "rfp-w-4 rfp-h-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ n("div", { className: "rfp-space-y-3 rfp-text-sm rfp-text-gray-600", children: [
        /* @__PURE__ */ n("div", { className: "rfp-grid grid-cols-2 rfp-gap-3", children: [
          /* @__PURE__ */ n("div", { children: [
            /* @__PURE__ */ e("div", { className: "rfp-text-xs rfp-uppercase rfp-tracking-wide rfp-text-gray-400", children: "Name" }),
            /* @__PURE__ */ e("div", { className: "rfp-font-semibold rfp-text-gray-800", children: J.name })
          ] }),
          /* @__PURE__ */ n("div", { children: [
            /* @__PURE__ */ e("div", { className: "rfp-text-xs rfp-uppercase rfp-tracking-wide rfp-text-gray-400", children: "Shape" }),
            /* @__PURE__ */ e("div", { className: "rfp-font-semibold rfp-text-gray-800 rfp-capitalize", children: J.shape })
          ] }),
          /* @__PURE__ */ n("div", { children: [
            /* @__PURE__ */ e("div", { className: "rfp-text-xs rfp-uppercase rfp-tracking-wide rfp-text-gray-400", children: "Size" }),
            /* @__PURE__ */ e("div", { className: "rfp-font-semibold rfp-text-gray-800", children: Kt[J.size] })
          ] }),
          /* @__PURE__ */ n("div", { children: [
            /* @__PURE__ */ e("div", { className: "rfp-text-xs rfp-uppercase rfp-tracking-wide rfp-text-gray-400", children: "Seats" }),
            /* @__PURE__ */ e("div", { className: "rfp-font-semibold rfp-text-gray-800", children: $e.length })
          ] })
        ] }),
        /* @__PURE__ */ e("div", { className: "rfp-bg-blue-50 rfp-border rfp-border-blue-200 rfp-rounded-md rfp-p-3", children: /* @__PURE__ */ n("p", { className: "rfp-text-xs rfp-text-blue-700", children: [
          "💡 ",
          /* @__PURE__ */ e("span", { className: "rfp-font-semibold", children: "Tip:" }),
          " Use the ",
          /* @__PURE__ */ e("span", { className: "rfp-font-semibold", children: "Manage Chairs" }),
          " button in the toolbar above to add or remove chairs from each side of the table."
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ n("div", { className: "rfp-p-4 mt-auto rfp-space-y-3", children: [
      /* @__PURE__ */ n("div", { className: "rfp-bg-gray-50 rfp-p-3 rfp-rounded-lg", children: [
        /* @__PURE__ */ e("h4", { className: "rfp-text-sm rfp-font-semibold rfp-text-gray-700 rfp-mb-2", children: "Current Floor Stats" }),
        /* @__PURE__ */ n("div", { className: "rfp-grid grid-cols-2 rfp-gap-4 rfp-text-sm", children: [
          /* @__PURE__ */ n("div", { children: [
            /* @__PURE__ */ e("div", { className: "rfp-text-gray-600", children: "Tables" }),
            /* @__PURE__ */ e("div", { className: "rfp-font-bold rfp-text-lg text-emerald-600", children: (p == null ? void 0 : p.tables.length) ?? 0 })
          ] }),
          /* @__PURE__ */ n("div", { children: [
            /* @__PURE__ */ e("div", { className: "rfp-text-gray-600", children: "Total Seats" }),
            /* @__PURE__ */ e("div", { className: "rfp-font-bold rfp-text-lg text-amber-600", children: (p == null ? void 0 : p.chairs.length) ?? 0 })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ n("div", { className: "rfp-flex rfp-gap-2", children: [
        /* @__PURE__ */ n(
          "button",
          {
            onClick: Ne,
            className: "rfp-flex-1 rfp-bg-green-600 rfp-text-white rfp-py-3 rfp-px-4 rfp-rounded-lg hover:bg-green-700 transition-colors rfp-flex rfp-items-center rfp-justify-center rfp-gap-2 rfp-font-medium",
            children: [
              /* @__PURE__ */ e(Pt, { className: "rfp-w-4 rfp-h-4" }),
              "Save"
            ]
          }
        ),
        /* @__PURE__ */ n(
          "button",
          {
            onClick: Ae,
            className: "rfp-flex-1 rfp-bg-blue-600 rfp-text-white rfp-py-3 rfp-px-4 rfp-rounded-lg hover:bg-blue-700 transition-colors rfp-flex rfp-items-center rfp-justify-center rfp-gap-2 rfp-font-medium",
            children: [
              /* @__PURE__ */ e(It, { className: "rfp-w-4 rfp-h-4" }),
              "Load"
            ]
          }
        )
      ] })
    ] })
  ] });
}, ft = ut, jt = ["top", "right", "bottom", "left"], er = ["small", "medium", "large"], tr = ({
  showGrid: o,
  selectedTable: p,
  selectedObject: f,
  selectedWall: C,
  selectedFixedElement: i,
  selectedTableChairs: v,
  onToggleGrid: V,
  onAddChair: oe,
  onRemoveChair: P,
  onChangeTableSize: le,
  onTableNameChange: q,
  onCustomTableSize: A,
  onObjectNameChange: _,
  onObjectResize: Ne,
  onRemoveObject: Ae,
  onRemoveWall: J,
  onRemoveFixedElement: $e,
  onChangeWallThickness: ge,
  onConvertWallType: be,
  onFixedElementNameChange: h,
  onFixedElementResize: I,
  onChairSizeChange: F,
  onResetChairSizes: ye,
  on3DPreview: de,
  onObjectRotate: ze,
  tableCount: we,
  chairCount: He,
  objectCount: M,
  wallCount: Me,
  fixedElementCount: j,
  selectedElementType: K
}) => {
  const Le = Te(null), r = Te(null), Z = Te(null), H = Te(null), [k, d] = U(!1), [R, m] = U(!1), [T, D] = U(!1), [z, ie] = U(!1), [O, pe] = U(!1), [ee, L] = U(90), [E, $] = U(90), [b, re] = U(120), [Q, ke] = U(80), [X, S] = U(60), [u, ue] = U(60);
  return _e(() => {
    const g = (N) => {
      Le.current && !Le.current.contains(N.target) && d(!1), r.current && !r.current.contains(N.target) && m(!1), Z.current && !Z.current.contains(N.target) && D(!1), H.current && !H.current.contains(N.target) && ie(!1);
    };
    return document.addEventListener("mousedown", g), () => document.removeEventListener("mousedown", g);
  }, []), _e(() => {
    p ? (L(p.width), $(p.height)) : (d(!1), m(!1), pe(!1)), f ? (re(f.width), ke(f.height)) : D(!1), i ? (S(i.width), ue(i.height)) : ie(!1);
  }, [p, f, i]), /* @__PURE__ */ e("div", { className: "rfp-bg-white rfp-border-b rfp-border-gray-200 rfp-shadow-sm min-h-[72px]", children: /* @__PURE__ */ n("div", { className: "rfp-px-4 rfp-py-3 rfp-flex rfp-items-center rfp-justify-between min-h-[72px]", children: [
    /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-gap-3 rfp-flex-wrap", children: [
      /* @__PURE__ */ n(
        "button",
        {
          onClick: V,
          className: `px-3 py-2 rounded-lg transition-all flex items-center gap-2 text-sm font-medium ${o ? "bg-blue-500 text-white shadow-md hover:bg-blue-600" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`,
          title: o ? "Hide Grid" : "Show Grid",
          children: [
            o ? /* @__PURE__ */ e(Rt, { className: "rfp-w-4 rfp-h-4" }) : /* @__PURE__ */ e(Tt, { className: "rfp-w-4 rfp-h-4" }),
            /* @__PURE__ */ e("span", { children: "Grid" })
          ]
        }
      ),
      p && /* @__PURE__ */ n(Ze, { children: [
        /* @__PURE__ */ e("div", { className: "w-px rfp-h-8 rfp-bg-gray-300" }),
        /* @__PURE__ */ n("div", { ref: Le, className: "rfp-relative", children: [
          /* @__PURE__ */ n(
            "button",
            {
              onClick: () => {
                d(!k), m(!1);
              },
              className: "rfp-px-3 rfp-py-2 rfp-rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 rfp-text-white rfp-shadow-md hover:shadow-lg rfp-transition-all rfp-flex rfp-items-center rfp-gap-2 rfp-text-sm rfp-font-semibold",
              children: [
                /* @__PURE__ */ e(tt, { className: "rfp-w-4 rfp-h-4" }),
                /* @__PURE__ */ e("span", { children: "Manage Chairs" }),
                /* @__PURE__ */ e("span", { className: "rfp-ml-1 px-1.5 py-0.5 bg-white/20 rfp-rounded rfp-text-xs", children: v.length })
              ]
            }
          ),
          k && /* @__PURE__ */ n("div", { className: "rfp-absolute top-full rfp-left-0 rfp-mt-2 rfp-w-72 rfp-bg-white rfp-border rfp-border-gray-200 rfp-rounded-xl shadow-2xl z-50 rfp-overflow-hidden", children: [
            /* @__PURE__ */ e("div", { className: "bg-gradient-to-r from-amber-500 to-amber-600 rfp-px-4 rfp-py-3 rfp-text-white", children: /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-justify-between", children: [
              /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-gap-2", children: [
                /* @__PURE__ */ e(tt, { className: "rfp-w-4 rfp-h-4" }),
                /* @__PURE__ */ e("span", { className: "rfp-font-semibold rfp-text-sm", children: "Chair Positions" })
              ] }),
              /* @__PURE__ */ n("span", { className: "rfp-text-xs bg-white/20 rfp-px-2 rfp-py-1 rfp-rounded", children: [
                "Total: ",
                v.length
              ] })
            ] }) }),
            /* @__PURE__ */ n("div", { className: "rfp-p-3 rfp-space-y-2", children: [
              jt.map((g) => {
                const N = v.filter((x) => x.position === g).length, Ce = v.find((x) => x.position === g), B = (Ce == null ? void 0 : Ce.size) || 40;
                return /* @__PURE__ */ n(
                  "div",
                  {
                    className: "rfp-bg-gray-50 rfp-rounded-lg rfp-px-3 rfp-py-2 rfp-border rfp-border-gray-200 hover:border-amber-300 rfp-transition-all rfp-space-y-2",
                    children: [
                      /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-justify-between", children: [
                        /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-gap-3", children: [
                          /* @__PURE__ */ e("div", { className: "rfp-w-8 rfp-h-8 bg-gradient-to-br from-gray-600 to-gray-700 rfp-rounded-md rfp-flex rfp-items-center rfp-justify-center rfp-text-white rfp-text-xs rfp-font-bold rfp-uppercase", children: g[0] }),
                          /* @__PURE__ */ n("div", { children: [
                            /* @__PURE__ */ e("div", { className: "rfp-text-sm rfp-font-medium rfp-text-gray-800 rfp-capitalize", children: g }),
                            /* @__PURE__ */ n("div", { className: "rfp-text-xs rfp-text-gray-500", children: [
                              N,
                              " chair",
                              N !== 1 ? "s" : ""
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-gap-1", children: [
                          /* @__PURE__ */ e(
                            "button",
                            {
                              onClick: () => P(g),
                              disabled: N === 0,
                              className: "rfp-w-7 rfp-h-7 rfp-rounded-md rfp-bg-red-50 rfp-text-red-600 hover:bg-red-100 disabled:opacity-30 disabled:cursor-not-allowed rfp-transition-all rfp-flex rfp-items-center rfp-justify-center",
                              title: "Remove chair",
                              children: /* @__PURE__ */ e(gt, { className: "rfp-w-4 rfp-h-4" })
                            }
                          ),
                          /* @__PURE__ */ e(
                            "button",
                            {
                              onClick: () => oe(g),
                              className: "rfp-w-7 rfp-h-7 rfp-rounded-md rfp-bg-green-50 rfp-text-green-600 hover:bg-green-100 rfp-transition-all rfp-flex rfp-items-center rfp-justify-center",
                              title: "Add chair",
                              children: /* @__PURE__ */ e(rt, { className: "rfp-w-4 rfp-h-4" })
                            }
                          )
                        ] })
                      ] }),
                      N > 0 && /* @__PURE__ */ n("div", { className: "rfp-pt-2 rfp-border-t rfp-border-gray-200", children: [
                        /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-justify-between rfp-mb-1", children: [
                          /* @__PURE__ */ e("span", { className: "rfp-text-xs rfp-font-medium rfp-text-gray-600", children: "Chair Size" }),
                          /* @__PURE__ */ n("span", { className: "rfp-text-xs rfp-font-bold text-amber-600", children: [
                            B,
                            "px"
                          ] })
                        ] }),
                        /* @__PURE__ */ e(
                          "input",
                          {
                            type: "range",
                            min: "20",
                            max: "60",
                            value: B,
                            onChange: (x) => F == null ? void 0 : F(g, parseInt(x.target.value)),
                            className: "rfp-w-full rfp-h-2 bg-gradient-to-r from-amber-200 to-amber-400 rfp-rounded-full appearance-none rfp-cursor-pointer slider-thumb",
                            style: {
                              background: `linear-gradient(to right, rgb(251, 191, 36) 0%, rgb(251, 191, 36) ${(B - 20) / 40 * 100}%, rgb(253, 230, 138) ${(B - 20) / 40 * 100}%, rgb(253, 230, 138) 100%)`
                            }
                          }
                        )
                      ] })
                    ]
                  },
                  g
                );
              }),
              /* @__PURE__ */ n(
                "button",
                {
                  onClick: () => ye == null ? void 0 : ye(),
                  className: "rfp-w-full rfp-mt-3 rfp-px-3 rfp-py-2 bg-gradient-to-r from-gray-500 to-gray-600 rfp-text-white rfp-rounded-lg hover:from-gray-600 hover:to-gray-700 rfp-transition-all rfp-flex rfp-items-center rfp-justify-center rfp-gap-2 rfp-text-sm rfp-font-medium",
                  children: [
                    /* @__PURE__ */ e(nt, { className: "rfp-w-4 rfp-h-4" }),
                    /* @__PURE__ */ e("span", { children: "Reset All Sizes" })
                  ]
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ n("div", { ref: r, className: "rfp-relative", children: [
          /* @__PURE__ */ n(
            "button",
            {
              onClick: () => {
                m(!R), d(!1);
              },
              className: "rfp-px-3 rfp-py-2 rfp-rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 rfp-text-white rfp-shadow-md hover:shadow-lg rfp-transition-all rfp-flex rfp-items-center rfp-gap-2 rfp-text-sm rfp-font-semibold",
              children: [
                /* @__PURE__ */ e(qe, { className: "rfp-w-4 rfp-h-4" }),
                /* @__PURE__ */ n("span", { children: [
                  "Size: ",
                  ft[p.size]
                ] })
              ]
            }
          ),
          R && /* @__PURE__ */ n("div", { className: "rfp-absolute top-full rfp-left-0 rfp-mt-2 rfp-w-64 rfp-bg-white rfp-border rfp-border-gray-200 rfp-rounded-xl shadow-2xl z-50 rfp-overflow-hidden", children: [
            /* @__PURE__ */ e("div", { className: "bg-gradient-to-r from-emerald-500 to-emerald-600 rfp-px-4 rfp-py-2 rfp-text-white", children: /* @__PURE__ */ e("span", { className: "rfp-font-semibold rfp-text-sm", children: "Table Size" }) }),
            /* @__PURE__ */ n("div", { className: "rfp-p-3 rfp-space-y-2", children: [
              /* @__PURE__ */ e("div", { className: "rfp-flex rfp-gap-2", children: er.map((g) => {
                const N = p.size === g;
                return /* @__PURE__ */ e(
                  "button",
                  {
                    onClick: () => {
                      le(g), pe(!1);
                    },
                    className: `flex-1 px-3 py-2 text-sm font-medium rounded-lg transition-all ${N && !O ? "bg-emerald-500 text-white shadow-sm" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
                    children: ft[g]
                  },
                  g
                );
              }) }),
              /* @__PURE__ */ n(
                "button",
                {
                  onClick: () => pe(!O),
                  className: `w-full flex items-center justify-between px-3 py-2 rounded-lg transition-all ${O ? "bg-purple-500 text-white shadow-sm" : "bg-gradient-to-r from-purple-100 to-purple-50 text-purple-700 hover:from-purple-200 hover:to-purple-100"}`,
                  children: [
                    /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-gap-2", children: [
                      /* @__PURE__ */ e("span", { className: "rfp-text-sm rfp-font-semibold", children: "Pro Mode" }),
                      /* @__PURE__ */ e("span", { className: "rfp-text-xs bg-white/20 px-1.5 py-0.5 rfp-rounded", children: "Custom" })
                    ] }),
                    /* @__PURE__ */ e($t, { className: `w-4 h-4 transition-transform ${O ? "rotate-90" : ""}` })
                  ]
                }
              ),
              /* @__PURE__ */ e("div", { className: `overflow-hidden transition-all duration-300 ease-in-out ${O ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`, children: /* @__PURE__ */ n("div", { className: "rfp-pt-2 rfp-space-y-3 rfp-border-t rfp-border-gray-200", children: [
                /* @__PURE__ */ n("div", { className: "rfp-space-y-1", children: [
                  /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-justify-between", children: [
                    /* @__PURE__ */ e("label", { className: "rfp-text-xs rfp-font-semibold rfp-text-gray-600 rfp-uppercase rfp-tracking-wide", children: "Width" }),
                    /* @__PURE__ */ n("span", { className: "rfp-text-xs font-mono rfp-bg-purple-100 rfp-text-purple-700 rfp-px-2 py-0.5 rfp-rounded", children: [
                      ee,
                      "px"
                    ] })
                  ] }),
                  /* @__PURE__ */ e(
                    "input",
                    {
                      type: "range",
                      min: "40",
                      max: "200",
                      step: "5",
                      value: ee,
                      onChange: (g) => {
                        const N = parseInt(g.target.value);
                        L(N), A(N, E);
                      },
                      className: "rfp-w-full rfp-h-2 rfp-bg-purple-200 rfp-rounded-lg appearance-none rfp-cursor-pointer slider-thumb",
                      style: {
                        background: `linear-gradient(to right, rgb(168, 85, 247) 0%, rgb(168, 85, 247) ${(ee - 40) / 160 * 100}%, rgb(233, 213, 255) ${(ee - 40) / 160 * 100}%, rgb(233, 213, 255) 100%)`
                      }
                    }
                  )
                ] }),
                /* @__PURE__ */ n("div", { className: "rfp-space-y-1", children: [
                  /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-justify-between", children: [
                    /* @__PURE__ */ e("label", { className: "rfp-text-xs rfp-font-semibold rfp-text-gray-600 rfp-uppercase rfp-tracking-wide", children: "Height" }),
                    /* @__PURE__ */ n("span", { className: "rfp-text-xs font-mono rfp-bg-purple-100 rfp-text-purple-700 rfp-px-2 py-0.5 rfp-rounded", children: [
                      E,
                      "px"
                    ] })
                  ] }),
                  /* @__PURE__ */ e(
                    "input",
                    {
                      type: "range",
                      min: "40",
                      max: "200",
                      step: "5",
                      value: E,
                      onChange: (g) => {
                        const N = parseInt(g.target.value);
                        $(N), A(ee, N);
                      },
                      className: "rfp-w-full rfp-h-2 rfp-bg-purple-200 rfp-rounded-lg appearance-none rfp-cursor-pointer slider-thumb",
                      style: {
                        background: `linear-gradient(to right, rgb(168, 85, 247) 0%, rgb(168, 85, 247) ${(E - 40) / 160 * 100}%, rgb(233, 213, 255) ${(E - 40) / 160 * 100}%, rgb(233, 213, 255) 100%)`
                      }
                    }
                  )
                ] }),
                /* @__PURE__ */ e("p", { className: "rfp-text-xs rfp-text-gray-500 italic rfp-pt-1", children: "Drag sliders for precise sizing" })
              ] }) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-gap-2 rfp-bg-gray-50 rfp-border rfp-border-gray-300 rfp-rounded-lg rfp-px-3 rfp-py-2", children: [
          /* @__PURE__ */ e("span", { className: "rfp-text-xs rfp-font-semibold rfp-uppercase rfp-tracking-wide rfp-text-gray-500", children: "Name:" }),
          /* @__PURE__ */ e(
            "input",
            {
              type: "text",
              value: p.name,
              onChange: (g) => q(g.target.value),
              className: "rfp-bg-transparent rfp-text-sm rfp-text-gray-800 rfp-font-medium focus:outline-none rfp-w-32",
              placeholder: "Table name"
            }
          )
        ] })
      ] }),
      f && /* @__PURE__ */ n(Ze, { children: [
        /* @__PURE__ */ e("div", { className: "w-px rfp-h-8 rfp-bg-gray-300" }),
        /* @__PURE__ */ n("div", { ref: Z, className: "rfp-relative", children: [
          /* @__PURE__ */ n(
            "button",
            {
              onClick: () => D(!T),
              className: `px-3 py-2 rounded-lg ${f.type === "bar" ? "bg-gradient-to-r from-purple-500 to-purple-600" : f.type === "kitchen" ? "bg-gradient-to-r from-orange-500 to-orange-600" : "bg-gradient-to-r from-cyan-500 to-cyan-600"} text-white shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm font-semibold`,
              children: [
                (() => {
                  const g = st[f.type];
                  return /* @__PURE__ */ e(g, { className: "rfp-w-4 rfp-h-4" });
                })(),
                /* @__PURE__ */ n("span", { children: [
                  "Resize ",
                  Ke[f.type]
                ] })
              ]
            }
          ),
          T && /* @__PURE__ */ n("div", { className: "rfp-absolute top-full rfp-left-0 rfp-mt-2 rfp-w-64 rfp-bg-white rfp-border rfp-border-gray-200 rfp-rounded-xl shadow-2xl z-50 rfp-overflow-hidden", children: [
            /* @__PURE__ */ e("div", { className: `${f.type === "bar" ? "bg-gradient-to-r from-purple-500 to-purple-600" : f.type === "kitchen" ? "bg-gradient-to-r from-orange-500 to-orange-600" : "bg-gradient-to-r from-cyan-500 to-cyan-600"} px-4 py-2 text-white`, children: /* @__PURE__ */ e("span", { className: "rfp-font-semibold rfp-text-sm", children: "Custom Size" }) }),
            /* @__PURE__ */ n("div", { className: "rfp-p-3 rfp-space-y-3", children: [
              /* @__PURE__ */ n("div", { className: "rfp-space-y-1", children: [
                /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-justify-between", children: [
                  /* @__PURE__ */ e("label", { className: "rfp-text-xs rfp-font-semibold rfp-text-gray-600 rfp-uppercase rfp-tracking-wide", children: "Width" }),
                  /* @__PURE__ */ n("span", { className: `text-xs font-mono px-2 py-0.5 rounded ${f.type === "bar" ? "bg-purple-100 text-purple-700" : f.type === "kitchen" ? "bg-orange-100 text-orange-700" : "bg-cyan-100 text-cyan-700"}`, children: [
                    b,
                    "px"
                  ] })
                ] }),
                /* @__PURE__ */ e(
                  "input",
                  {
                    type: "range",
                    min: "60",
                    max: "1000",
                    step: "10",
                    value: b,
                    onChange: (g) => {
                      const N = parseInt(g.target.value);
                      re(N), Ne(N, Q);
                    },
                    className: "rfp-w-full rfp-h-2 rfp-bg-gray-200 rfp-rounded-lg appearance-none rfp-cursor-pointer slider-thumb",
                    style: {
                      background: `linear-gradient(to right, ${f.type === "bar" ? "rgb(168, 85, 247)" : f.type === "kitchen" ? "rgb(249, 115, 22)" : "rgb(6, 182, 212)"} 0%, ${f.type === "bar" ? "rgb(168, 85, 247)" : f.type === "kitchen" ? "rgb(249, 115, 22)" : "rgb(6, 182, 212)"} ${(b - 60) / 940 * 100}%, rgb(229, 231, 235) ${(b - 60) / 940 * 100}%, rgb(229, 231, 235) 100%)`
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ n("div", { className: "rfp-space-y-1", children: [
                /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-justify-between", children: [
                  /* @__PURE__ */ e("label", { className: "rfp-text-xs rfp-font-semibold rfp-text-gray-600 rfp-uppercase rfp-tracking-wide", children: "Height" }),
                  /* @__PURE__ */ n("span", { className: `text-xs font-mono px-2 py-0.5 rounded ${f.type === "bar" ? "bg-purple-100 text-purple-700" : f.type === "kitchen" ? "bg-orange-100 text-orange-700" : "bg-cyan-100 text-cyan-700"}`, children: [
                    Q,
                    "px"
                  ] })
                ] }),
                /* @__PURE__ */ e(
                  "input",
                  {
                    type: "range",
                    min: "60",
                    max: "1000",
                    step: "10",
                    value: Q,
                    onChange: (g) => {
                      const N = parseInt(g.target.value);
                      ke(N), Ne(b, N);
                    },
                    className: "rfp-w-full rfp-h-2 rfp-bg-gray-200 rfp-rounded-lg appearance-none rfp-cursor-pointer slider-thumb",
                    style: {
                      background: `linear-gradient(to right, ${f.type === "bar" ? "rgb(168, 85, 247)" : f.type === "kitchen" ? "rgb(249, 115, 22)" : "rgb(6, 182, 212)"} 0%, ${f.type === "bar" ? "rgb(168, 85, 247)" : f.type === "kitchen" ? "rgb(249, 115, 22)" : "rgb(6, 182, 212)"} ${(Q - 60) / 940 * 100}%, rgb(229, 231, 235) ${(Q - 60) / 940 * 100}%, rgb(229, 231, 235) 100%)`
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ e("p", { className: "rfp-text-xs rfp-text-gray-500 italic rfp-pt-1", children: "Drag sliders to resize the object" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ n(
          "button",
          {
            onClick: () => {
              const g = ((f.rotation || 0) + 90) % 360;
              ze == null || ze(g);
            },
            className: `px-3 py-2 rounded-lg ${f.type === "bar" ? "bg-gradient-to-r from-purple-600 to-purple-700" : f.type === "kitchen" ? "bg-gradient-to-r from-orange-600 to-orange-700" : "bg-gradient-to-r from-cyan-600 to-cyan-700"} text-white shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm font-semibold`,
            title: "Rotate 90°",
            children: [
              /* @__PURE__ */ e(nt, { className: "rfp-w-4 rfp-h-4" }),
              /* @__PURE__ */ e("span", { children: "Rotate" })
            ]
          }
        ),
        /* @__PURE__ */ n(
          "button",
          {
            onClick: Ae,
            className: "rfp-px-3 rfp-py-2 rfp-rounded-lg rfp-bg-red-500 hover:bg-red-600 rfp-text-white rfp-shadow-md hover:shadow-lg rfp-transition-all rfp-flex rfp-items-center rfp-gap-2 rfp-text-sm rfp-font-semibold",
            title: "Delete Object",
            children: [
              /* @__PURE__ */ e(Je, { className: "rfp-w-4 rfp-h-4" }),
              /* @__PURE__ */ e("span", { children: "Delete" })
            ]
          }
        ),
        /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-gap-2 rfp-bg-gray-50 rfp-border rfp-border-gray-300 rfp-rounded-lg rfp-px-3 rfp-py-2", children: [
          /* @__PURE__ */ e("span", { className: "rfp-text-xs rfp-font-semibold rfp-uppercase rfp-tracking-wide rfp-text-gray-500", children: "Name:" }),
          /* @__PURE__ */ e(
            "input",
            {
              type: "text",
              value: f.name,
              onChange: (g) => _(g.target.value),
              className: "rfp-bg-transparent rfp-text-sm rfp-text-gray-800 rfp-font-medium focus:outline-none rfp-w-32",
              placeholder: "Object name"
            }
          )
        ] })
      ] }),
      C && /* @__PURE__ */ n(Ze, { children: [
        /* @__PURE__ */ e("div", { className: "w-px rfp-h-8 rfp-bg-gray-300" }),
        be && /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-gap-1 rfp-bg-gray-50 rfp-border rfp-border-gray-300 rfp-rounded-lg rfp-p-1", children: [
          /* @__PURE__ */ e(
            "button",
            {
              onClick: () => be("wall"),
              className: `px-3 py-1.5 rounded text-xs font-semibold transition-all ${C.type === "wall" ? "bg-gray-600 text-white shadow-md" : "text-gray-600 hover:bg-gray-200"}`,
              title: "Convert to Wall",
              children: "Wall"
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              onClick: () => be("door"),
              className: `px-3 py-1.5 rounded text-xs font-semibold transition-all ${C.type === "door" ? "bg-amber-600 text-white shadow-md" : "text-gray-600 hover:bg-gray-200"}`,
              title: "Convert to Door",
              children: "Door"
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              onClick: () => be("window"),
              className: `px-3 py-1.5 rounded text-xs font-semibold transition-all ${C.type === "window" ? "bg-blue-600 text-white shadow-md" : "text-gray-600 hover:bg-gray-200"}`,
              title: "Convert to Window",
              children: "Window"
            }
          )
        ] }),
        ge && /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-gap-2", children: [
          /* @__PURE__ */ e("span", { className: "rfp-text-xs rfp-font-semibold rfp-text-gray-600", children: "Thickness:" }),
          /* @__PURE__ */ n(
            "select",
            {
              value: C.thickness,
              onChange: (g) => ge(Number(g.target.value)),
              className: "rfp-px-2 rfp-py-1 rfp-text-sm rfp-border rfp-border-gray-300 rfp-rounded rfp-bg-white hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500",
              children: [
                /* @__PURE__ */ e("option", { value: 4, children: "Thin (4px)" }),
                /* @__PURE__ */ e("option", { value: 8, children: "Normal (8px)" }),
                /* @__PURE__ */ e("option", { value: 12, children: "Thick (12px)" }),
                /* @__PURE__ */ e("option", { value: 16, children: "Very Thick (16px)" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-gap-2 rfp-bg-gray-50 rfp-border rfp-border-gray-300 rfp-rounded-lg rfp-px-3 rfp-py-2", children: [
          /* @__PURE__ */ e("span", { className: "rfp-text-xs rfp-font-semibold rfp-uppercase rfp-tracking-wide rfp-text-gray-500", children: Qe[C.type] }),
          /* @__PURE__ */ n("span", { className: "rfp-text-sm rfp-text-gray-600", children: [
            Math.round(Math.sqrt(
              Math.pow(C.endX - C.startX, 2) + Math.pow(C.endY - C.startY, 2)
            )),
            "px"
          ] })
        ] }),
        /* @__PURE__ */ n(
          "button",
          {
            onClick: J,
            className: "rfp-px-3 rfp-py-2 rfp-rounded-lg rfp-bg-red-500 hover:bg-red-600 rfp-text-white rfp-shadow-md hover:shadow-lg rfp-transition-all rfp-flex rfp-items-center rfp-gap-2 rfp-text-sm rfp-font-semibold",
            title: "Delete Wall",
            children: [
              /* @__PURE__ */ e(Je, { className: "rfp-w-4 rfp-h-4" }),
              /* @__PURE__ */ e("span", { children: "Delete" })
            ]
          }
        )
      ] }),
      i && /* @__PURE__ */ n(Ze, { children: [
        /* @__PURE__ */ e("div", { className: "w-px rfp-h-8 rfp-bg-gray-300" }),
        /* @__PURE__ */ e("div", { className: "rfp-flex rfp-items-center rfp-gap-2 rfp-bg-gray-50 rfp-border rfp-border-gray-300 rfp-rounded-lg rfp-px-3 rfp-py-2", children: /* @__PURE__ */ e("span", { className: "rfp-text-xs rfp-font-semibold rfp-uppercase rfp-tracking-wide rfp-text-gray-500", children: wt[i.type] }) }),
        I && /* @__PURE__ */ n("div", { ref: H, className: "rfp-relative", children: [
          /* @__PURE__ */ n(
            "button",
            {
              onClick: () => ie(!z),
              className: "rfp-px-3 rfp-py-2 rfp-rounded-lg rfp-bg-gray-600 hover:bg-gray-700 rfp-text-white rfp-shadow-md hover:shadow-lg rfp-transition-all rfp-flex rfp-items-center rfp-gap-2 rfp-text-sm rfp-font-semibold",
              children: [
                /* @__PURE__ */ e(qe, { className: "rfp-w-4 rfp-h-4" }),
                /* @__PURE__ */ e("span", { children: "Resize" })
              ]
            }
          ),
          z && /* @__PURE__ */ e("div", { className: "rfp-absolute top-full rfp-left-0 rfp-mt-2 rfp-bg-white rfp-rounded-xl shadow-2xl rfp-border rfp-border-gray-200 rfp-p-4 z-50 min-w-[320px]", children: /* @__PURE__ */ n("div", { className: "rfp-space-y-4", children: [
            /* @__PURE__ */ n("div", { children: [
              /* @__PURE__ */ n("div", { className: "rfp-flex rfp-justify-between rfp-items-center rfp-mb-2", children: [
                /* @__PURE__ */ e("label", { className: "rfp-text-sm rfp-font-semibold rfp-text-gray-700", children: "Width" }),
                /* @__PURE__ */ n("span", { className: "rfp-text-sm rfp-font-bold rfp-text-blue-600", children: [
                  X,
                  "px"
                ] })
              ] }),
              /* @__PURE__ */ e(
                "input",
                {
                  type: "range",
                  min: "30",
                  max: "200",
                  value: X,
                  onChange: (g) => {
                    const N = parseInt(g.target.value);
                    S(N), I(N, u);
                  },
                  className: "rfp-w-full rfp-h-2 bg-gradient-to-r from-blue-200 to-blue-500 rfp-rounded-lg appearance-none rfp-cursor-pointer slider"
                }
              ),
              /* @__PURE__ */ n("div", { className: "rfp-flex rfp-justify-between rfp-text-xs rfp-text-gray-500 rfp-mt-1", children: [
                /* @__PURE__ */ e("span", { children: "30px" }),
                /* @__PURE__ */ e("span", { children: "200px" })
              ] })
            ] }),
            /* @__PURE__ */ n("div", { children: [
              /* @__PURE__ */ n("div", { className: "rfp-flex rfp-justify-between rfp-items-center rfp-mb-2", children: [
                /* @__PURE__ */ e("label", { className: "rfp-text-sm rfp-font-semibold rfp-text-gray-700", children: "Height" }),
                /* @__PURE__ */ n("span", { className: "rfp-text-sm rfp-font-bold rfp-text-blue-600", children: [
                  u,
                  "px"
                ] })
              ] }),
              /* @__PURE__ */ e(
                "input",
                {
                  type: "range",
                  min: "30",
                  max: "200",
                  value: u,
                  onChange: (g) => {
                    const N = parseInt(g.target.value);
                    ue(N), I(X, N);
                  },
                  className: "rfp-w-full rfp-h-2 bg-gradient-to-r from-green-200 to-green-500 rfp-rounded-lg appearance-none rfp-cursor-pointer slider"
                }
              ),
              /* @__PURE__ */ n("div", { className: "rfp-flex rfp-justify-between rfp-text-xs rfp-text-gray-500 rfp-mt-1", children: [
                /* @__PURE__ */ e("span", { children: "30px" }),
                /* @__PURE__ */ e("span", { children: "200px" })
              ] })
            ] }),
            /* @__PURE__ */ e("div", { className: "rfp-pt-3 rfp-border-t rfp-border-gray-200", children: /* @__PURE__ */ n("div", { className: "rfp-text-center", children: [
              /* @__PURE__ */ e("span", { className: "rfp-text-xs rfp-text-gray-600", children: "Current Size: " }),
              /* @__PURE__ */ n("span", { className: "rfp-text-sm rfp-font-bold rfp-text-gray-800", children: [
                X,
                " × ",
                u,
                "px"
              ] })
            ] }) })
          ] }) })
        ] }),
        /* @__PURE__ */ n(
          "button",
          {
            onClick: $e,
            className: "rfp-px-3 rfp-py-2 rfp-rounded-lg rfp-bg-red-500 hover:bg-red-600 rfp-text-white rfp-shadow-md hover:shadow-lg rfp-transition-all rfp-flex rfp-items-center rfp-gap-2 rfp-text-sm rfp-font-semibold",
            title: "Delete Element",
            children: [
              /* @__PURE__ */ e(Je, { className: "rfp-w-4 rfp-h-4" }),
              /* @__PURE__ */ e("span", { children: "Delete" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-gap-3 rfp-flex-wrap", children: [
      /* @__PURE__ */ n(
        "button",
        {
          onClick: de,
          className: "rfp-px-4 rfp-py-2 bg-gradient-to-r from-purple-600 to-blue-600 rfp-text-white rfp-rounded-lg hover:shadow-lg rfp-transition-all rfp-flex rfp-items-center rfp-gap-2 rfp-font-semibold rfp-text-sm",
          children: [
            /* @__PURE__ */ e(Lt, { className: "rfp-w-4 rfp-h-4" }),
            "3D"
          ]
        }
      ),
      /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center gap-1.5 rfp-px-2 rfp-py-1 bg-emerald-50 rfp-rounded rfp-text-xs", children: [
        /* @__PURE__ */ e("div", { className: "rfp-w-2 rfp-h-2 bg-emerald-600 rfp-rounded-full" }),
        /* @__PURE__ */ n("span", { className: "rfp-font-medium text-emerald-800", children: [
          "Tables: ",
          we
        ] })
      ] }),
      /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center gap-1.5 rfp-px-2 rfp-py-1 bg-amber-50 rfp-rounded rfp-text-xs", children: [
        /* @__PURE__ */ e("div", { className: "rfp-w-2 rfp-h-2 bg-amber-600 rfp-rounded-full" }),
        /* @__PURE__ */ n("span", { className: "rfp-font-medium text-amber-800", children: [
          "Chairs: ",
          He
        ] })
      ] }),
      /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center gap-1.5 rfp-px-2 rfp-py-1 rfp-bg-purple-50 rfp-rounded rfp-text-xs", children: [
        /* @__PURE__ */ e("div", { className: "rfp-w-2 rfp-h-2 rfp-bg-purple-600 rfp-rounded-full" }),
        /* @__PURE__ */ n("span", { className: "rfp-font-medium rfp-text-purple-800", children: [
          "Objects: ",
          M
        ] })
      ] }),
      K && /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center gap-1.5 rfp-px-2 rfp-py-1 rfp-bg-blue-50 rfp-rounded rfp-text-xs", children: [
        /* @__PURE__ */ e("div", { className: "w-1.5 h-1.5 rfp-bg-blue-600 rfp-rounded-full rfp-animate-pulse" }),
        /* @__PURE__ */ n("span", { className: "rfp-font-medium rfp-text-blue-800 rfp-capitalize", children: [
          "Selected: ",
          K
        ] })
      ] })
    ] })
  ] }) });
}, ht = {
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
}, rr = ({ floor: o, isOpen: p, onClose: f }) => {
  const C = Te(null), i = Te(null), v = Te(null), V = Te(null), oe = Te(null), [P, le] = U(!1), [q, A] = U("default"), [_, Ne] = U(!1), Ae = Te(3e-3), J = Te(null), $e = (h) => {
    if (!v.current || _)
      return;
    const I = ht[h], F = v.current;
    J.current = {
      startPos: F.position.clone(),
      endPos: new t.Vector3(I.position.x, I.position.y, I.position.z),
      startTarget: new t.Vector3(0, 100, 0),
      endTarget: new t.Vector3(I.target.x, I.target.y, I.target.z),
      progress: 0
    }, Ne(!0), A(h), le(!1);
  }, ge = (h) => {
    if (!v.current || _)
      return;
    const I = v.current, F = Math.sqrt(I.position.x ** 2 + I.position.z ** 2), ye = Math.atan2(I.position.z, I.position.x);
    switch (h) {
      case "left":
        const de = ye + 0.2;
        I.position.x = F * Math.cos(de), I.position.z = F * Math.sin(de);
        break;
      case "right":
        const ze = ye - 0.2;
        I.position.x = F * Math.cos(ze), I.position.z = F * Math.sin(ze);
        break;
      case "up":
        I.position.y = Math.min(I.position.y + 50, 900);
        break;
      case "down":
        I.position.y = Math.max(I.position.y - 50, 100);
        break;
    }
    I.lookAt(0, 100, 0);
  }, be = (h) => {
    !v.current || _ || (v.current.position.multiplyScalar(h), v.current.lookAt(0, 100, 0));
  };
  return _e(() => {
    if (!p || !C.current)
      return;
    const h = new t.Scene();
    h.background = new t.Color(14608111), i.current = h;
    const I = new t.PerspectiveCamera(
      45,
      C.current.clientWidth / C.current.clientHeight,
      0.1,
      1e4
    );
    I.position.set(1050, 800, 1050), I.lookAt(0, 100, 0), v.current = I;
    const F = new t.WebGLRenderer({ antialias: !0, alpha: !0 });
    F.setSize(C.current.clientWidth, C.current.clientHeight), F.shadowMap.enabled = !0, F.shadowMap.type = t.PCFSoftShadowMap, F.toneMapping = t.ACESFilmicToneMapping, F.toneMappingExposure = 1.2, C.current.appendChild(F.domElement), V.current = F;
    const ye = new t.PMREMGenerator(F), de = new t.Scene();
    de.background = new t.Color(16777215);
    const ze = ye.fromScene(de).texture;
    h.environment = ze, ye.dispose(), h.add(new t.AmbientLight(16777215, 0.6));
    const we = new t.DirectionalLight(16777215, 0.8);
    we.position.set(400, 600, 300), we.castShadow = !0, we.shadow.mapSize.width = 4096, we.shadow.mapSize.height = 4096, we.shadow.camera.left = we.shadow.camera.bottom = -700, we.shadow.camera.right = we.shadow.camera.top = 700, we.shadow.bias = -1e-4, h.add(we);
    const He = new t.DirectionalLight(16777215, 0.3);
    He.position.set(-400, 400, -300), h.add(He);
    const M = new t.DirectionalLight(16777215, 0.2);
    M.position.set(0, 300, -500), h.add(M);
    const Me = new t.Mesh(
      new t.PlaneGeometry(1200, 1200),
      new t.MeshStandardMaterial({ color: 13684949, roughness: 0.8, metalness: 0.2 })
      // Medium grey
    );
    Me.rotation.x = -Math.PI / 2, Me.receiveShadow = !0, h.add(Me);
    const j = new t.GridHelper(3e3, 150, 10526888, 12105920);
    j.position.y = 1, h.add(j), o.walls.forEach((r) => {
      const Z = Math.sqrt(Math.pow(r.endX - r.startX, 2) + Math.pow(r.endY - r.startY, 2)), H = Math.atan2(r.endY - r.startY, r.endX - r.startX), k = r.type === "window" ? 80 : 120, d = r.startX + (r.endX - r.startX) / 2 - 400, R = -(r.startY + (r.endY - r.startY) / 2 - 400);
      if (r.type === "door") {
        const m = new t.Group(), T = Z, D = k, z = r.thickness * 0.8, ie = new t.MeshStandardMaterial({
          color: 3812901,
          // dark stained wood
          roughness: 0.9,
          metalness: 0
        }), O = 8, pe = new t.Mesh(
          new t.BoxGeometry(T, O, r.thickness + 4),
          ie
        );
        pe.position.y = D / 2 - O / 2, m.add(pe);
        const ee = new t.Mesh(
          new t.BoxGeometry(T, O, r.thickness + 4),
          ie
        );
        ee.position.y = -D / 2 + O / 2, m.add(ee);
        const L = new t.Mesh(
          new t.BoxGeometry(O, D, r.thickness + 4),
          ie
        );
        L.position.x = -T / 2 + O / 2, m.add(L);
        const E = L.clone();
        E.position.x = T / 2 - O / 2, m.add(E);
        const $ = new t.MeshStandardMaterial({
          color: 5125166,
          // warm brown
          roughness: 0.85,
          metalness: 0
        }), b = new t.MeshStandardMaterial({
          color: 10400693,
          // subtle bluish-gray tint
          transparent: !0,
          opacity: 0.5,
          // semi-transparent
          roughness: 0.95,
          // frosted effect
          metalness: 0
          // no mirror reflection
        }), re = (T - O * 2 - 4) / 2, Q = D - O * 2 - 4, ke = (Ge) => {
          const Ee = new t.Group(), ce = new t.Mesh(
            new t.BoxGeometry(re, Q, z),
            $
          );
          Ee.add(ce);
          const fe = new t.Mesh(
            new t.PlaneGeometry(re * 0.8, Q * 0.85),
            b
          );
          fe.position.set(0, 0, z / 2 + 0.1), Ee.add(fe);
          const w = new t.MeshStandardMaterial({
            color: 8947848,
            metalness: 0.4,
            roughness: 0.7
          }), ne = new t.Mesh(
            new t.CylinderGeometry(0.6, 0.6, 12, 12),
            w
          );
          return ne.rotation.z = Math.PI / 2, ne.position.set(Ge > 0 ? -re * 0.35 : re * 0.35, 0, z / 2 + 1.5), Ee.add(ne), Ee.position.x = Ge, Ee;
        }, X = ke(-re / 2), S = ke(re / 2);
        m.add(X), m.add(S);
        const u = 14, ue = new t.PlaneGeometry(T * 0.9, u), g = document.createElement("canvas");
        g.width = 512, g.height = 128;
        const N = g.getContext("2d");
        N && (N.fillStyle = "#3a2e25", N.fillRect(0, 0, g.width, g.height), N.font = "bold 60px Arial", N.fillStyle = "#f5d590", N.textAlign = "center", N.textBaseline = "middle", N.fillText("WELCOME", g.width / 2, g.height / 2));
        const Ce = new t.CanvasTexture(g), B = new t.MeshStandardMaterial({
          map: Ce,
          roughness: 0.8,
          metalness: 0.1
        }), x = new t.Mesh(ue, B);
        x.position.set(0, D / 2 - O - u / 2 - 4, r.thickness / 2 + 2), m.add(x), m.position.set(d, D / 2, R), m.rotation.y = -H, m.castShadow = !0, m.receiveShadow = !0, h.add(m);
      } else if (r.type === "window") {
        const m = Z > 20 ? Z : 120, T = k, D = T * 0.45, z = T * 0.65, ie = T * 0.1, O = T * 0.3, pe = new t.MeshStandardMaterial({
          color: 13158608,
          // Grey-blue for window sills and wall sections
          roughness: 0.85,
          metalness: 0.05
        }), ee = new t.MeshPhysicalMaterial({
          color: 2763306,
          metalness: 0.95,
          roughness: 0.2,
          clearcoat: 0.8,
          clearcoatRoughness: 0.1
        }), L = new t.MeshPhysicalMaterial({
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
        }), E = new t.Mesh(
          new t.BoxGeometry(m, D, r.thickness),
          pe
        );
        E.position.set(d, D / 2, R), E.rotation.y = -H, E.receiveShadow = !0, E.castShadow = !0, h.add(E);
        const $ = D + z / 2, b = 4, re = Math.max(2, Math.floor(m / 80)), Q = (m - b * (re + 1)) / re;
        for (let g = 0; g < re; g++) {
          const N = -m / 2 + b + Q / 2 + g * (Q + b), Ce = d + N * Math.cos(-H), B = R + N * Math.sin(-H), x = new t.Mesh(
            new t.BoxGeometry(Q - 2, z - b * 2, 1),
            L
          );
          if (x.position.set(Ce, $, B), x.rotation.y = -H, x.castShadow = !1, x.receiveShadow = !1, h.add(x), g < re - 1) {
            const Ge = -m / 2 + b + (g + 1) * Q + (g + 0.5) * b, Ee = d + Ge * Math.cos(-H), ce = R + Ge * Math.sin(-H), fe = new t.Mesh(
              new t.BoxGeometry(b, z, r.thickness + 3),
              ee
            );
            fe.position.set(Ee, $, ce), fe.rotation.y = -H, fe.castShadow = !0, h.add(fe);
          }
        }
        const ke = D + z + ie / 2, X = new t.Mesh(
          new t.BoxGeometry(m - b * 2, ie - b, 1),
          L
        );
        X.position.set(d, ke, R), X.rotation.y = -H, X.castShadow = !1, h.add(X);
        const S = new t.Mesh(
          new t.BoxGeometry(m, b, r.thickness + 2),
          ee
        );
        S.position.set(d, D + z + b / 2, R), S.rotation.y = -H, S.castShadow = !0, h.add(S);
        const u = new t.Mesh(
          new t.BoxGeometry(m, b, r.thickness + 2),
          ee
        );
        u.position.set(d, D + z + ie + b / 2, R), u.rotation.y = -H, u.castShadow = !0, h.add(u);
        const ue = new t.Mesh(
          new t.BoxGeometry(m, O, r.thickness),
          pe
        );
        ue.position.set(d, D + z + ie + O / 2, R), ue.rotation.y = -H, ue.castShadow = !0, ue.receiveShadow = !0, h.add(ue);
      } else {
        const m = new t.Mesh(
          new t.BoxGeometry(Z, k, r.thickness),
          new t.MeshStandardMaterial({ color: 12105920, roughness: 0.9, metalness: 0.05 })
        );
        m.position.set(d, k / 2, R), m.rotation.y = -H, m.castShadow = !0, m.receiveShadow = !0, h.add(m);
      }
    }), o.fixedElements.forEach((r) => {
      const Z = r.x - 400 + r.width / 2, H = -(r.y - 400 + r.height / 2);
      if (r.type === "pillar") {
        const k = Math.min(r.width, r.height) / 2, d = new t.Mesh(
          new t.CylinderGeometry(k, k * 1.1, 140, 32),
          new t.MeshStandardMaterial({ color: 4868698, roughness: 0.6, metalness: 0.4 })
        );
        d.position.set(Z, 70, H), d.castShadow = !0, h.add(d);
        const R = new t.Mesh(
          new t.CylinderGeometry(k * 1.3, k * 1.1, 10, 32),
          new t.MeshStandardMaterial({ color: 5921386, roughness: 0.5, metalness: 0.5 })
        );
        R.position.set(Z, 135, H), R.castShadow = !0, h.add(R);
        const m = new t.Mesh(
          new t.CylinderGeometry(k * 1.2, k * 1.3, 10, 32),
          new t.MeshStandardMaterial({ color: 5921386, roughness: 0.5, metalness: 0.5 })
        );
        m.position.set(Z, 5, H), m.castShadow = !0, h.add(m);
      } else if (r.type === "column") {
        const k = new t.Mesh(
          new t.BoxGeometry(r.width, 140, r.height),
          new t.MeshStandardMaterial({ color: 3816010, roughness: 0.7, metalness: 0.3 })
        );
        k.position.set(Z, 70, H), k.castShadow = !0, h.add(k);
        const d = new t.LineSegments(
          new t.EdgesGeometry(k.geometry),
          new t.LineBasicMaterial({ color: 6974074 })
        );
        d.position.copy(k.position), h.add(d);
      } else {
        const R = r.height / 8;
        for (let m = 0; m < 8; m++) {
          const T = new t.Mesh(
            new t.BoxGeometry(r.width, 6.25, R * (8 - m)),
            new t.MeshStandardMaterial({ color: 6636321, roughness: 0.8 })
          );
          T.position.set(Z, 6.25 / 2 + m * 6.25, H + m * R / 2), T.castShadow = !0, h.add(T);
          const D = new t.LineSegments(
            new t.EdgesGeometry(T.geometry),
            new t.LineBasicMaterial({ color: 3810320 })
          );
          D.position.copy(T.position), h.add(D);
        }
      }
    }), o.objects.forEach((r) => {
      const Z = r.x - 400 + r.width / 2, H = -(r.y - 400 + r.height / 2), k = -(r.rotation * Math.PI / 180);
      if (r.type === "bar") {
        const d = r.x - 400 + r.width / 2, R = -(r.y - 400 + r.height / 2), m = -(r.rotation * Math.PI / 180), T = 50, D = new t.MeshPhysicalMaterial({
          color: 1710618,
          roughness: 0.5,
          metalness: 0.8,
          clearcoat: 0.2,
          clearcoatRoughness: 0.4
        }), z = new t.Mesh(
          new t.BoxGeometry(r.width, T, r.height),
          D
        );
        z.position.set(d, T / 2, R), z.rotation.y = m, z.castShadow = !0, z.receiveShadow = !0, h.add(z);
        const ie = [8323072, 10770944, 6691328, 9109504, 8930304], O = ie[Math.floor(Math.random() * ie.length)], pe = new t.MeshPhysicalMaterial({
          color: O,
          metalness: 0.1,
          roughness: 0.05,
          transmission: 0.9,
          // transparency
          thickness: 2,
          ior: 1.5,
          reflectivity: 0.9,
          clearcoat: 1,
          clearcoatRoughness: 0.05
        }), ee = new t.Mesh(
          new t.BoxGeometry(r.width + 6, 6, r.height + 6),
          pe
        );
        ee.position.set(d, T + 3, R), ee.rotation.y = m, ee.castShadow = !0, h.add(ee);
        const L = new t.MeshStandardMaterial({
          emissive: 16711799,
          // pinkish-red glow
          emissiveIntensity: 0.6,
          color: 0
        }), E = new t.Mesh(
          new t.BoxGeometry(r.width + 6, 0.5, r.height + 6),
          L
        );
        E.position.set(d, T + 1, R), E.rotation.y = m, h.add(E);
        const $ = O === 8323072 ? 13938487 : 11579568, b = new t.Mesh(
          new t.BoxGeometry(r.width + 8, 0.6, r.height + 8),
          new t.MeshStandardMaterial({
            color: $,
            metalness: 1,
            roughness: 0.2
          })
        );
        b.position.set(d, T + 6.5, R), b.rotation.y = m, h.add(b);
        const re = new t.MeshStandardMaterial({
          color: 13421772,
          metalness: 1,
          roughness: 0.1
        }), Q = new t.CylinderGeometry(2, 2, T, 16);
        [
          [r.width / 2 - 6, r.height / 2 - 6],
          [-r.width / 2 + 6, r.height / 2 - 6],
          [r.width / 2 - 6, -r.height / 2 + 6],
          [-r.width / 2 + 6, -r.height / 2 + 6]
        ].forEach(([xe, Se]) => {
          const ve = new t.Mesh(Q, re);
          ve.position.set(
            d + xe * Math.cos(m) - Se * Math.sin(m),
            T / 2,
            R + xe * Math.sin(m) + Se * Math.cos(m)
          ), ve.castShadow = !0, h.add(ve);
        });
        const X = new t.PointLight(O, 0.4, 600);
        X.position.set(d, T + 70, R), h.add(X);
        const S = 120, u = new t.Group(), ue = new t.MeshPhysicalMaterial({
          color: 2105376,
          metalness: 1,
          roughness: 0.25,
          clearcoat: 0.6,
          clearcoatRoughness: 0.1
        }), g = new t.Mesh(
          new t.BoxGeometry(r.width + 40, 10, r.height + 40),
          ue
        );
        g.castShadow = !0, g.receiveShadow = !0, u.add(g);
        const N = new t.MeshPhysicalMaterial({
          color: 10770944,
          // whiskey amber
          metalness: 0,
          roughness: 0.05,
          transmission: 0.95,
          thickness: 1.5,
          ior: 1.45,
          clearcoat: 1,
          clearcoatRoughness: 0.05
        }), Ce = new t.Mesh(
          new t.PlaneGeometry(r.width + 32, r.height + 32),
          N
        );
        Ce.rotation.x = -Math.PI / 2, Ce.position.y = -3, u.add(Ce);
        const B = new t.MeshStandardMaterial({
          emissive: 16764040,
          emissiveIntensity: 1.6,
          color: 0
        }), x = new t.BoxGeometry(4, 2, r.height + 36), Ge = new t.Mesh(x, B), Ee = Ge.clone();
        Ge.position.set(-(r.width + 36) / 2, -2, 0), Ee.position.set((r.width + 36) / 2, -2, 0), u.add(Ge, Ee);
        const ce = new t.Group(), fe = [11674146, 14919767, 9127187, 27028, 7810842];
        for (let xe = -3; xe <= 3; xe++) {
          const Se = fe[Math.floor(Math.random() * fe.length)], ve = new t.MeshPhysicalMaterial({
            color: Se,
            roughness: 0.1,
            transmission: 0.95,
            thickness: 0.6,
            ior: 1.5,
            clearcoat: 0.3,
            clearcoatRoughness: 0.2
          }), s = new t.Mesh(
            new t.CylinderGeometry(3, 3, 20, 32),
            ve
          );
          s.position.set(xe * 12, -12, 0), ce.add(s);
          const a = new t.Mesh(
            new t.CylinderGeometry(1.2, 1.2, 6, 16),
            ve
          );
          a.position.set(xe * 12, -3, 0), ce.add(a);
        }
        ce.position.y = -15, u.add(ce);
        const w = new t.MeshPhysicalMaterial({
          color: 16777215,
          roughness: 0.1,
          transmission: 0.9,
          thickness: 0.4,
          ior: 1.45
        });
        for (let xe = -2; xe <= 2; xe++) {
          const Se = new t.Mesh(
            new t.SphereGeometry(2.5, 16, 16, 0, Math.PI),
            // half-sphere
            w
          );
          Se.position.set(xe * 10, -25, 0), Se.scale.y = 0.6, u.add(Se);
        }
        const ne = new t.MeshStandardMaterial({
          color: 11184810,
          metalness: 1,
          roughness: 0.2
        }), Fe = new t.CylinderGeometry(1.5, 1.5, S - 60, 16);
        [
          [r.width / 2 - 10, r.height / 2 - 10],
          [-r.width / 2 + 10, r.height / 2 - 10],
          [r.width / 2 - 10, -r.height / 2 + 10],
          [-r.width / 2 + 10, -r.height / 2 + 10]
        ].forEach(([xe, Se]) => {
          const ve = new t.Mesh(Fe, ne);
          ve.position.set(xe, -(S - 80) / 2, Se), ve.rotation.x = Math.PI / 2, u.add(ve);
        }), u.position.set(d, S, R), u.rotation.y = m, h.add(u);
        const Ye = new t.PointLight(16755285, 0.8, 600);
        Ye.position.set(d, S - 20, R), h.add(Ye);
      } else if (r.type === "kitchen") {
        const d = new t.Group(), R = new t.MeshPhysicalMaterial({
          color: 11579568,
          metalness: 1,
          roughness: 0.25,
          envMapIntensity: 1,
          clearcoat: 1,
          clearcoatRoughness: 0.05
        }), m = new t.MeshPhysicalMaterial({
          color: 10079487,
          roughness: 0.05,
          transmission: 0.9,
          thickness: 0.5,
          metalness: 0.1,
          envMapIntensity: 1.2
        }), T = new t.Mesh(
          new t.BoxGeometry(r.width, 50, r.height),
          R
        );
        T.position.set(0, 25, 0), T.castShadow = !0, T.receiveShadow = !0, d.add(T);
        const D = new t.Mesh(
          new t.BoxGeometry(r.width, 4, r.height),
          m
        );
        D.position.set(0, 52, 0), d.add(D);
        const z = new t.Mesh(
          new t.BoxGeometry(r.width * 0.4, 10, r.height * 0.6),
          new t.MeshStandardMaterial({ color: 2236962, roughness: 0.4 })
        );
        z.position.set(-r.width * 0.2, 55, 0), d.add(z);
        const ie = new t.MeshStandardMaterial({
          color: 3355443,
          metalness: 0.8,
          roughness: 0.2
        });
        [
          [-r.width * 0.25, r.height * 0.15],
          [-r.width * 0.15, r.height * 0.15],
          [-r.width * 0.25, -r.height * 0.15],
          [-r.width * 0.15, -r.height * 0.15]
        ].forEach(([X, S]) => {
          const u = new t.Mesh(
            new t.CylinderGeometry(6, 6, 2, 32),
            ie
          );
          u.rotation.x = Math.PI / 2, u.position.set(X, 61, S), d.add(u);
        });
        const pe = new t.Mesh(
          new t.BoxGeometry(r.width * 0.5, 35, r.height * 0.65),
          new t.MeshPhysicalMaterial({
            color: 12632256,
            metalness: 1,
            roughness: 0.2,
            envMapIntensity: 1.1
          })
        );
        pe.position.set(-r.width * 0.2, 95, 0), pe.castShadow = !0, d.add(pe);
        const ee = new t.MeshPhysicalMaterial({
          color: 14540253,
          roughness: 0.3,
          metalness: 0.5
        });
        for (let X = 0; X < 3; X++) {
          const S = new t.Mesh(
            new t.BoxGeometry(r.width * 0.7, 4, r.height * 0.2),
            ee
          );
          S.position.set(r.width * 0.15, 75 + X * 22, r.height * 0.35), S.castShadow = !0, d.add(S);
        }
        const L = new t.MeshStandardMaterial({
          color: 8947848,
          metalness: 0.9,
          roughness: 0.2
        });
        for (let X = -1; X <= 1; X++) {
          const S = new t.Mesh(
            new t.CylinderGeometry(1.5, 1.5, 15, 16),
            L
          );
          S.rotation.z = Math.PI / 2, S.position.set(X * r.width * 0.2, 35, r.height * 0.45), d.add(S);
        }
        const E = new t.PointLight(16777215, 1.5, 400);
        E.position.set(0, 140, 0), E.castShadow = !0, d.add(E);
        const $ = document.createElement("canvas");
        $.width = 1024, $.height = 768;
        const b = $.getContext("2d");
        b && (b.fillStyle = "#dc2626", b.fillRect(0, 0, $.width, $.height), b.strokeStyle = "#ffffff", b.lineWidth = 25, b.strokeRect(30, 30, $.width - 60, $.height - 60), b.strokeStyle = "#000000", b.lineWidth = 15, b.strokeRect(50, 50, $.width - 100, $.height - 100), b.shadowColor = "rgba(0, 0, 0, 0.8)", b.shadowBlur = 20, b.shadowOffsetX = 8, b.shadowOffsetY = 8, b.font = "bold 180px Arial", b.textAlign = "center", b.textBaseline = "middle", b.fillStyle = "#ffffff", b.fillText("👨‍🍳", $.width / 2, $.height / 2 - 150), b.fillStyle = "#ffffff", b.font = "bold 220px Impact, Arial Black, sans-serif", b.fillText("CHEF", $.width / 2, $.height / 2 + 120), b.strokeStyle = "#000000", b.lineWidth = 12, b.strokeText("CHEF", $.width / 2, $.height / 2 + 120), b.strokeStyle = "#fbbf24", b.lineWidth = 6, b.strokeText("CHEF", $.width / 2, $.height / 2 + 120));
        const re = new t.CanvasTexture($), Q = new t.Mesh(
          new t.PlaneGeometry(r.height * 0.6, r.height * 0.45),
          new t.MeshStandardMaterial({
            map: re,
            roughness: 0.4,
            metalness: 0.1,
            emissive: 14427686,
            emissiveIntensity: 0.3
          })
        );
        Q.position.set(-r.width / 2 + 3, 50, 0), Q.rotation.y = Math.PI / 2, d.add(Q);
        const ke = new t.Mesh(
          new t.PlaneGeometry(r.height * 0.6, r.height * 0.45),
          new t.MeshStandardMaterial({
            map: re,
            roughness: 0.4,
            metalness: 0.1,
            emissive: 14427686,
            emissiveIntensity: 0.3
          })
        );
        ke.position.set(r.width / 2 - 3, 50, 0), ke.rotation.y = -Math.PI / 2, d.add(ke), d.position.set(Z, 0, H), d.rotation.y = k, h.add(d);
      } else if (r.type === "toilet") {
        const d = new t.Group(), R = new t.MeshStandardMaterial({
          color: 14013914,
          roughness: 0.7,
          metalness: 0.05
        }), m = new t.MeshStandardMaterial({
          color: 3900150,
          roughness: 0.6,
          metalness: 0.1
        }), T = new t.MeshStandardMaterial({
          color: 15680580,
          roughness: 0.6,
          metalness: 0.1
        }), D = new t.MeshStandardMaterial({
          color: 14277081,
          roughness: 0.7,
          metalness: 0.05
        }), z = 120, ie = new t.Mesh(
          new t.BoxGeometry(r.width, 4, r.height),
          D
        );
        ie.position.y = 2, ie.receiveShadow = !0, d.add(ie);
        const O = new t.Mesh(
          new t.BoxGeometry(r.width, z, 6),
          R
        );
        O.position.set(0, z / 2, -r.height / 2), O.castShadow = !0, d.add(O);
        const pe = new t.Mesh(
          new t.BoxGeometry(6, z, r.height),
          R
        );
        pe.position.set(-r.width / 2, z / 2, 0), pe.castShadow = !0, d.add(pe);
        const ee = new t.Mesh(
          new t.BoxGeometry(6, z, r.height),
          R
        );
        ee.position.set(r.width / 2, z / 2, 0), ee.castShadow = !0, d.add(ee);
        const L = new t.Mesh(
          new t.BoxGeometry(r.width * 0.24, z, 6),
          R
        );
        L.position.set(0, z / 2, r.height / 2), L.castShadow = !0, d.add(L);
        const E = new t.Mesh(
          new t.BoxGeometry(r.width * 0.055, z, 6),
          R
        );
        E.position.set(-r.width * 0.4725, z / 2, r.height / 2), E.castShadow = !0, d.add(E);
        const $ = new t.Mesh(
          new t.BoxGeometry(r.width * 0.055, z, 6),
          R
        );
        $.position.set(r.width * 0.4725, z / 2, r.height / 2), $.castShadow = !0, d.add($);
        const b = new t.Mesh(
          new t.BoxGeometry(r.width * 0.33, z - 95, 6),
          R
        );
        b.position.set(r.width * 0.285, 95 + (z - 95) / 2, r.height / 2), b.castShadow = !0, d.add(b);
        const re = new t.Mesh(
          new t.BoxGeometry(r.width * 0.33, z - 95, 6),
          R
        );
        re.position.set(-r.width * 0.285, 95 + (z - 95) / 2, r.height / 2), re.castShadow = !0, d.add(re);
        const Q = new t.Mesh(
          new t.BoxGeometry(r.width * 0.33, 95, 4),
          m
        );
        Q.position.set(r.width * 0.285, 47.5, r.height / 2 - 2), Q.castShadow = !0, d.add(Q);
        const ke = new t.MeshStandardMaterial({
          color: 13938487,
          metalness: 0.1,
          roughness: 0.8
        }), X = new t.Mesh(
          new t.CylinderGeometry(1.5, 1.5, 12, 16),
          ke
        );
        X.rotation.z = Math.PI / 2, X.position.set(r.width * 0.285 - r.width * 0.132, 47.5, r.height / 2 + 1), d.add(X);
        const S = document.createElement("canvas");
        S.width = 512, S.height = 768;
        const u = S.getContext("2d");
        if (u) {
          const Ie = u.createLinearGradient(0, 0, 0, S.height);
          Ie.addColorStop(0, "#3b82f6"), Ie.addColorStop(1, "#1e40af"), u.fillStyle = Ie, u.fillRect(0, 0, S.width, S.height), u.strokeStyle = "#ffffff", u.lineWidth = 12, u.strokeRect(20, 20, S.width - 40, S.height - 40), u.strokeStyle = "rgba(255, 255, 255, 0.3)", u.lineWidth = 6, u.strokeRect(30, 30, S.width - 60, S.height - 60), u.shadowColor = "rgba(0, 0, 0, 0.5)", u.shadowBlur = 15, u.shadowOffsetX = 4, u.shadowOffsetY = 4, u.fillStyle = "#ffffff", u.font = "bold 120px Georgia, serif", u.textAlign = "center", u.textBaseline = "middle", u.fillText("W.C.", S.width / 2, S.height / 2 - 100), u.strokeStyle = "#ffffff", u.lineWidth = 4, u.beginPath(), u.moveTo(100, S.height / 2), u.lineTo(S.width - 100, S.height / 2), u.stroke();
          const he = u.createLinearGradient(0, S.height / 2, 0, S.height / 2 + 150);
          he.addColorStop(0, "#ffd700"), he.addColorStop(0.5, "#ffed4e"), he.addColorStop(1, "#ffd700"), u.fillStyle = he, u.font = "bold 140px Georgia, serif", u.fillText("MALE", S.width / 2, S.height / 2 + 120), u.strokeStyle = "#b8860b", u.lineWidth = 3, u.strokeText("MALE", S.width / 2, S.height / 2 + 120);
        }
        const ue = new t.CanvasTexture(S), g = new t.Mesh(
          new t.PlaneGeometry(r.width * 0.25, r.width * 0.375),
          new t.MeshStandardMaterial({
            map: ue,
            roughness: 0.3,
            metalness: 0.15,
            emissive: 1982639,
            emissiveIntensity: 0.1
          })
        );
        g.position.set(r.width * 0.285, 47.5, r.height / 2 + 2.5), d.add(g);
        const N = new t.Mesh(
          new t.BoxGeometry(r.width * 0.33, 95, 4),
          T
        );
        N.position.set(-r.width * 0.285, 47.5, r.height / 2 - 2), N.castShadow = !0, d.add(N);
        const Ce = X.clone();
        Ce.position.set(-r.width * 0.285 + r.width * 0.132, 47.5, r.height / 2 + 1), d.add(Ce);
        const B = document.createElement("canvas");
        B.width = 512, B.height = 768;
        const x = B.getContext("2d");
        if (x) {
          const Ie = x.createLinearGradient(0, 0, 0, B.height);
          Ie.addColorStop(0, "#ef4444"), Ie.addColorStop(1, "#b91c1c"), x.fillStyle = Ie, x.fillRect(0, 0, B.width, B.height), x.strokeStyle = "#ffffff", x.lineWidth = 12, x.strokeRect(20, 20, B.width - 40, B.height - 40), x.strokeStyle = "rgba(255, 255, 255, 0.3)", x.lineWidth = 6, x.strokeRect(30, 30, B.width - 60, B.height - 60), x.shadowColor = "rgba(0, 0, 0, 0.5)", x.shadowBlur = 15, x.shadowOffsetX = 4, x.shadowOffsetY = 4, x.fillStyle = "#ffffff", x.font = "bold 120px Georgia, serif", x.textAlign = "center", x.textBaseline = "middle", x.fillText("W.C.", B.width / 2, B.height / 2 - 100), x.strokeStyle = "#ffffff", x.lineWidth = 4, x.beginPath(), x.moveTo(100, B.height / 2), x.lineTo(B.width - 100, B.height / 2), x.stroke();
          const he = x.createLinearGradient(0, B.height / 2, 0, B.height / 2 + 150);
          he.addColorStop(0, "#ffb6c1"), he.addColorStop(0.5, "#ffd1dc"), he.addColorStop(1, "#ffb6c1"), x.fillStyle = he, x.font = "bold 120px Georgia, serif", x.fillText("FEMALE", B.width / 2, B.height / 2 + 120), x.strokeStyle = "#dc143c", x.lineWidth = 3, x.strokeText("FEMALE", B.width / 2, B.height / 2 + 120);
        }
        const Ge = new t.CanvasTexture(B), Ee = new t.Mesh(
          new t.PlaneGeometry(r.width * 0.25, r.width * 0.375),
          new t.MeshStandardMaterial({
            map: Ge,
            roughness: 0.3,
            metalness: 0.15,
            emissive: 12131356,
            emissiveIntensity: 0.1
          })
        );
        Ee.position.set(-r.width * 0.285, 47.5, r.height / 2 + 2.5), d.add(Ee);
        const ce = document.createElement("canvas");
        ce.width = 512, ce.height = 256;
        const fe = ce.getContext("2d");
        fe && (fe.fillStyle = "#d5d5da", fe.fillRect(0, 0, ce.width, ce.height), fe.fillStyle = "#2a2a2a", fe.font = "bold 140px Arial", fe.textAlign = "center", fe.textBaseline = "middle", fe.fillText("W.C.", ce.width / 2, ce.height / 2));
        const w = new t.CanvasTexture(ce), ne = new t.Mesh(
          new t.PlaneGeometry(r.width * 0.4, r.width * 0.2),
          new t.MeshStandardMaterial({
            map: w,
            roughness: 0.5,
            metalness: 0.05
          })
        );
        ne.position.set(0, 100, -r.height / 2 + 3.5), d.add(ne);
        const Fe = new t.MeshStandardMaterial({
          color: 16119285,
          metalness: 0.1,
          roughness: 0.5
        }), Ye = new t.Mesh(
          new t.BoxGeometry(r.width * 0.5, 12, r.height * 0.25),
          Fe
        );
        Ye.position.set(0, 32, -r.height * 0.3), Ye.castShadow = !0, d.add(Ye);
        const xe = new t.MeshStandardMaterial({
          color: 16777215,
          roughness: 0.3,
          metalness: 0.05
        }), Se = new t.Mesh(
          new t.CylinderGeometry(12, 12, 6, 32),
          xe
        );
        Se.position.set(0, 40, -r.height * 0.3), d.add(Se);
        const ve = new t.MeshStandardMaterial({
          color: 12632256,
          metalness: 0.1,
          roughness: 0.8
        }), s = new t.Mesh(
          new t.TorusGeometry(4, 1, 8, 24, Math.PI),
          ve
        );
        s.rotation.z = Math.PI / 2, s.position.set(0, 48, -r.height * 0.35), d.add(s);
        const a = new t.MeshStandardMaterial({
          color: 16777215,
          roughness: 0.25,
          metalness: 0.05
        }), l = new t.Mesh(
          new t.CylinderGeometry(10, 8, 12, 32),
          a
        );
        l.position.set(-r.width * 0.25, 6, r.height * 0.25), d.add(l);
        const c = new t.Mesh(
          new t.TorusGeometry(9, 2, 16, 32),
          a
        );
        c.rotation.x = Math.PI / 2, c.position.set(-r.width * 0.25, 13, r.height * 0.25), d.add(c);
        const y = new t.Mesh(
          new t.BoxGeometry(14, 20, 8),
          a
        );
        y.position.set(-r.width * 0.25, 22, r.height * 0.25 - 10), d.add(y);
        const G = new t.Mesh(
          new t.BoxGeometry(2, 6, 1),
          ve
        );
        G.position.set(-r.width * 0.25 + 8, 25, r.height * 0.25 - 10), d.add(G);
        const W = new t.Mesh(
          new t.SphereGeometry(7, 32, 32, 0, Math.PI * 2, 0, Math.PI / 1.5),
          a
        );
        W.position.set(r.width * 0.25, 25, r.height * 0.25), W.rotation.x = Math.PI / 6, d.add(W);
        const te = new t.Mesh(
          new t.CylinderGeometry(1.5, 1.5, 8, 16),
          ve
        );
        te.position.set(r.width * 0.25, 35, r.height * 0.25 - 5), d.add(te);
        const se = new t.PointLight(16777215, 0.5, 280);
        se.position.set(0, z - 15, 0), se.castShadow = !1, d.add(se), d.position.set(Z, 0, H), d.rotation.y = k, h.add(d);
      }
    }), o.tables.forEach((r) => {
      const k = r.shape === "rectangle" ? r.width * 1.5 : r.width, d = r.x - 400 + k / 2, R = -(r.y - 400 + r.height / 2), m = -(r.rotation * Math.PI / 180), T = new t.MeshPhysicalMaterial({
        color: 7294519,
        // rich brown wood tone
        roughness: 0.35,
        metalness: 0.1,
        clearcoat: 0.4,
        // shiny varnish layer
        clearcoatRoughness: 0.2,
        sheen: 0.5,
        // subtle velvet-like reflection
        sheenColor: new t.Color(10251068)
      }), D = r.shape === "circle" ? new t.CylinderGeometry(k / 2, k / 2, 4, 64) : new t.BoxGeometry(k, 4, r.height), z = new t.Mesh(D, T);
      if (z.position.set(d, 33 + 4 / 2, R), z.rotation.y = m, z.castShadow = !0, z.receiveShadow = !0, h.add(z), r.shape === "circle") {
        const L = new t.Mesh(
          new t.TorusGeometry(k / 2 + 1, 1.2, 16, 64),
          new t.MeshStandardMaterial({
            color: 13938487,
            // gold-like tone
            metalness: 1,
            roughness: 0.3
          })
        );
        L.position.set(d, 33 + 4 / 2 + 0.5, R), L.rotation.x = Math.PI / 2, h.add(L);
      } else {
        const L = new t.LineSegments(
          new t.EdgesGeometry(D),
          new t.LineBasicMaterial({ color: 13938487, linewidth: 2 })
        );
        L.position.copy(z.position), L.rotation.y = m, h.add(L);
      }
      const ie = new t.MeshStandardMaterial({
        color: 2236962,
        metalness: 0.9,
        roughness: 0.2
      }), O = 3.2;
      (r.shape === "circle" ? [
        [k * 0.3, k * 0.3],
        [-k * 0.3, k * 0.3],
        [k * 0.3, -k * 0.3],
        [-k * 0.3, -k * 0.3]
      ] : [
        [k / 2 - 10, r.height / 2 - 10],
        [-k / 2 + 10, r.height / 2 - 10],
        [k / 2 - 10, -r.height / 2 + 10],
        [-k / 2 + 10, -r.height / 2 + 10]
      ]).forEach(([L, E]) => {
        const $ = new t.Mesh(
          new t.CylinderGeometry(O, O, 33, 16),
          ie
        );
        $.position.set(
          d + L * Math.cos(m) - E * Math.sin(m),
          33 / 2,
          R + L * Math.sin(m) + E * Math.cos(m)
        ), $.castShadow = !0, h.add($);
      });
      const ee = o.chairs.filter((L) => L.tableId === r.id);
      ee.forEach((L) => {
        const E = L.size || 40, $ = 38, b = new t.MeshStandardMaterial({ color: 9127187, roughness: 0.5, metalness: 0.1 }), re = new t.MeshStandardMaterial({ color: 12092939, roughness: 0.7, metalness: 0.05 }), Q = ee.filter((xe) => xe.position === L.position).length, X = (["top", "bottom"].includes(L.position) ? k : r.height) - E * Q, S = Q > 1 ? X / (Q + 1) : X / 2, u = S + L.index * (E + S) + E / 2, ue = E * 0.4;
        let g = 0, N = 0;
        L.position === "top" ? (g = u - k / 2, N = r.height / 2 + ue + E / 2) : L.position === "bottom" ? (g = u - k / 2, N = -(r.height / 2 + ue + E / 2)) : L.position === "left" ? (g = -(k / 2 + ue + E / 2), N = u - r.height / 2) : (g = k / 2 + ue + E / 2, N = u - r.height / 2);
        const Ce = g * Math.cos(m) - N * Math.sin(m), B = g * Math.sin(m) + N * Math.cos(m), x = new t.Mesh(
          new t.BoxGeometry(E * 0.75, 4, E * 0.75),
          re
        ), Ge = $ * 0.4;
        x.position.set(d + Ce, Ge, R - B);
        const Ee = {
          top: 0,
          bottom: Math.PI,
          left: Math.PI / 2,
          right: -Math.PI / 2
        }[L.position] || 0;
        x.rotation.y = Ee + m, x.castShadow = !0, h.add(x);
        const ce = new t.Mesh(
          new t.BoxGeometry(E * 0.75, $ * 0.55, 3),
          b
        ), fe = E * 0.75 / 2 + 1.5;
        ce.position.set(
          x.position.x - Math.sin(x.rotation.y) * fe,
          $ * 0.65,
          x.position.z - Math.cos(x.rotation.y) * fe
        ), ce.rotation.y = x.rotation.y, ce.castShadow = !0, h.add(ce);
        const ne = Ge - 4 / 2, Fe = new t.CylinderGeometry(2, 2, ne, 8), Ye = new t.MeshStandardMaterial({ color: 6636321, roughness: 0.6, metalness: 0.2 });
        [
          [E * 0.3, E * 0.3],
          [E * 0.3, -E * 0.3],
          [-E * 0.3, E * 0.3],
          [-E * 0.3, -E * 0.3]
        ].forEach(([xe, Se]) => {
          const ve = new t.Mesh(Fe, Ye), s = Math.cos(x.rotation.y), a = Math.sin(x.rotation.y);
          ve.position.set(
            x.position.x + xe * s - Se * a,
            ne / 2,
            // Position legs so they sit on the floor
            x.position.z + xe * a + Se * s
          ), ve.castShadow = !0, h.add(ve);
        });
      });
    });
    const K = () => {
      var r;
      if (oe.current = requestAnimationFrame(K), J.current && J.current.progress < 1) {
        const Z = J.current;
        Z.progress += 0.05, Z.progress >= 1 && (Z.progress = 1, Ne(!1), J.current = null);
        const k = ((d) => d < 0.5 ? 4 * d * d * d : 1 - Math.pow(-2 * d + 2, 3) / 2)(Z.progress);
        if (v.current) {
          v.current.position.lerpVectors(Z.startPos, Z.endPos, k);
          const d = new t.Vector3();
          d.lerpVectors(Z.startTarget, Z.endTarget, k), v.current.lookAt(d);
        }
      }
      if (P && v.current && !_) {
        const Z = Math.sqrt(v.current.position.x ** 2 + v.current.position.z ** 2), H = Math.atan2(v.current.position.z, v.current.position.x) + Ae.current;
        v.current.position.x = Z * Math.cos(H), v.current.position.z = Z * Math.sin(H), v.current.lookAt(0, 100, 0);
      }
      (r = V.current) == null || r.render(h, I);
    };
    K();
    const Le = () => {
      C.current && v.current && V.current && (v.current.aspect = C.current.clientWidth / C.current.clientHeight, v.current.updateProjectionMatrix(), V.current.setSize(C.current.clientWidth, C.current.clientHeight));
    };
    return window.addEventListener("resize", Le), () => {
      window.removeEventListener("resize", Le), oe.current && cancelAnimationFrame(oe.current), V.current && C.current && (C.current.removeChild(V.current.domElement), V.current.dispose());
    };
  }, [p, o, P, _]), p ? /* @__PURE__ */ e("div", { className: "rfp-fixed rfp-inset-0 bg-black/60 backdrop-blur-sm z-[200] rfp-flex rfp-items-center rfp-justify-center rfp-p-2", children: /* @__PURE__ */ n("div", { className: "bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 rounded-3xl shadow-2xl rfp-w-full rfp-h-full max-w-[98vw] max-h-[98vh] rfp-flex rfp-flex-col rfp-overflow-hidden rfp-border rfp-border-gray-800", children: [
    /* @__PURE__ */ e("div", { className: "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rfp-p-1", children: /* @__PURE__ */ n("div", { className: "rfp-bg-gray-900 rfp-px-6 rfp-py-4 rfp-flex rfp-items-center rfp-justify-between", children: [
      /* @__PURE__ */ n("div", { children: [
        /* @__PURE__ */ n("h2", { className: "rfp-text-2xl rfp-font-bold rfp-text-white rfp-flex rfp-items-center rfp-gap-3", children: [
          /* @__PURE__ */ e("div", { className: "rfp-p-2 bg-gradient-to-br from-blue-500 to-purple-600 rfp-rounded-lg", children: /* @__PURE__ */ e(et, { className: "rfp-w-5 rfp-h-5" }) }),
          "3D Floor Plan Visualization"
        ] }),
        /* @__PURE__ */ n("p", { className: "rfp-text-gray-400 rfp-text-sm rfp-mt-1", children: [
          "Professional Camera Controls • ",
          o.name
        ] })
      ] }),
      /* @__PURE__ */ e(
        "button",
        {
          onClick: f,
          className: "p-2.5 bg-red-500/20 hover:bg-red-500/30 rfp-text-red-400 rfp-rounded-xl rfp-transition-all hover:scale-110",
          children: /* @__PURE__ */ e(Wt, { className: "rfp-w-5 rfp-h-5" })
        }
      )
    ] }) }),
    /* @__PURE__ */ n("div", { className: "rfp-flex-1 rfp-flex rfp-gap-3 rfp-p-3 rfp-min-h-0", children: [
      /* @__PURE__ */ n("div", { className: "rfp-w-80 bg-black/90 backdrop-blur-xl rounded-2xl shadow-2xl rfp-border rfp-border-gray-700 rfp-p-5 rfp-flex rfp-flex-col rfp-gap-5 overflow-y-auto flex-shrink-0", children: [
        /* @__PURE__ */ e(
          "button",
          {
            onClick: () => $e("default"),
            className: "rfp-px-4 rfp-py-3 bg-gradient-to-r from-blue-500 to-purple-600 rfp-text-white rfp-rounded-xl rfp-font-semibold rfp-transition-all hover:scale-105 hover:shadow-lg rfp-flex rfp-items-center rfp-justify-center rfp-gap-2",
            children: "🏠 Default View"
          }
        ),
        /* @__PURE__ */ n("div", { className: "rfp-flex rfp-flex-col rfp-gap-3", children: [
          /* @__PURE__ */ n("div", { className: "rfp-text-white rfp-text-sm rfp-font-bold rfp-uppercase rfp-tracking-wider rfp-flex rfp-items-center rfp-gap-2 rfp-pb-2 rfp-border-b rfp-border-gray-700", children: [
            /* @__PURE__ */ e(et, { className: "rfp-w-5 rfp-h-5 rfp-text-purple-400" }),
            "Manual Control"
          ] }),
          /* @__PURE__ */ e("div", { className: "rfp-flex rfp-justify-center", children: /* @__PURE__ */ n("div", { className: "rfp-flex rfp-flex-col rfp-gap-1", children: [
            /* @__PURE__ */ e(
              "button",
              {
                onClick: () => ge("up"),
                className: "rfp-w-12 rfp-h-12 rfp-bg-gray-800 hover:bg-gray-700 rfp-text-white rfp-rounded-lg rfp-transition-all hover:scale-110 rfp-flex rfp-items-center rfp-justify-center disabled:opacity-30 mx-auto",
                disabled: _,
                title: "Rotate Up",
                children: /* @__PURE__ */ e("svg", { className: "rfp-w-6 rfp-h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 15l7-7 7 7" }) })
              }
            ),
            /* @__PURE__ */ n("div", { className: "rfp-flex rfp-gap-1 rfp-justify-center", children: [
              /* @__PURE__ */ e(
                "button",
                {
                  onClick: () => ge("left"),
                  className: "rfp-w-12 rfp-h-12 rfp-bg-gray-800 hover:bg-gray-700 rfp-text-white rfp-rounded-lg rfp-transition-all hover:scale-110 rfp-flex rfp-items-center rfp-justify-center disabled:opacity-30",
                  disabled: _,
                  title: "Rotate Left",
                  children: /* @__PURE__ */ e("svg", { className: "rfp-w-6 rfp-h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) })
                }
              ),
              /* @__PURE__ */ e("div", { className: "rfp-w-12 rfp-h-12 bg-gradient-to-br from-blue-600 to-purple-600 rfp-rounded-lg rfp-flex rfp-items-center rfp-justify-center", children: /* @__PURE__ */ e(et, { className: "rfp-w-6 rfp-h-6 rfp-text-white" }) }),
              /* @__PURE__ */ e(
                "button",
                {
                  onClick: () => ge("right"),
                  className: "rfp-w-12 rfp-h-12 rfp-bg-gray-800 hover:bg-gray-700 rfp-text-white rfp-rounded-lg rfp-transition-all hover:scale-110 rfp-flex rfp-items-center rfp-justify-center disabled:opacity-30",
                  disabled: _,
                  title: "Rotate Right",
                  children: /* @__PURE__ */ e("svg", { className: "rfp-w-6 rfp-h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) })
                }
              )
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                onClick: () => ge("down"),
                className: "rfp-w-12 rfp-h-12 rfp-bg-gray-800 hover:bg-gray-700 rfp-text-white rfp-rounded-lg rfp-transition-all hover:scale-110 rfp-flex rfp-items-center rfp-justify-center disabled:opacity-30 mx-auto",
                disabled: _,
                title: "Rotate Down",
                children: /* @__PURE__ */ e("svg", { className: "rfp-w-6 rfp-h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })
              }
            )
          ] }) })
        ] }),
        /* @__PURE__ */ n("div", { className: "rfp-flex rfp-flex-col rfp-gap-3", children: [
          /* @__PURE__ */ n("div", { className: "rfp-text-white rfp-text-sm rfp-font-bold rfp-uppercase rfp-tracking-wider rfp-flex rfp-items-center rfp-gap-2 rfp-pb-2 rfp-border-b rfp-border-gray-700", children: [
            /* @__PURE__ */ e(dt, { className: "rfp-w-5 rfp-h-5 rfp-text-green-400" }),
            "Zoom & Rotation"
          ] }),
          /* @__PURE__ */ n("div", { className: "rfp-flex rfp-flex-col rfp-gap-2", children: [
            /* @__PURE__ */ n(
              "button",
              {
                onClick: () => be(0.85),
                className: "rfp-px-4 rfp-py-3 rfp-bg-gray-800 hover:bg-gray-700 rfp-text-white rfp-rounded-xl rfp-transition-all hover:scale-105 rfp-flex rfp-items-center rfp-justify-center rfp-gap-2 rfp-font-semibold disabled:opacity-30",
                disabled: _,
                children: [
                  /* @__PURE__ */ e(dt, { className: "rfp-w-5 rfp-h-5" }),
                  "Zoom In"
                ]
              }
            ),
            /* @__PURE__ */ n(
              "button",
              {
                onClick: () => be(1.15),
                className: "rfp-px-4 rfp-py-3 rfp-bg-gray-800 hover:bg-gray-700 rfp-text-white rfp-rounded-xl rfp-transition-all hover:scale-105 rfp-flex rfp-items-center rfp-justify-center rfp-gap-2 rfp-font-semibold disabled:opacity-30",
                disabled: _,
                children: [
                  /* @__PURE__ */ e(Bt, { className: "rfp-w-5 rfp-h-5" }),
                  "Zoom Out"
                ]
              }
            ),
            /* @__PURE__ */ n(
              "button",
              {
                onClick: () => le(!P),
                className: `px-4 py-3 rounded-xl transition-all hover:scale-105 flex items-center justify-center gap-2 font-semibold ${P ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg" : "bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white"}`,
                children: [
                  /* @__PURE__ */ e(nt, { className: `w-5 h-5 ${P ? "animate-spin" : ""}` }),
                  P ? "Auto-Rotating" : "Auto-Rotate"
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ n("div", { className: "rfp-flex rfp-flex-col rfp-gap-3 mt-auto", children: [
          /* @__PURE__ */ n(
            "button",
            {
              onClick: () => $e("default"),
              className: "rfp-px-4 rfp-py-3 bg-gradient-to-r from-orange-500 to-red-600 rfp-text-white rfp-rounded-xl rfp-transition-all hover:scale-105 hover:shadow-lg rfp-flex rfp-items-center rfp-justify-center rfp-gap-2 rfp-font-bold",
              children: [
                /* @__PURE__ */ e(Xt, { className: "rfp-w-5 rfp-h-5" }),
                "Reset View"
              ]
            }
          ),
          /* @__PURE__ */ n("div", { className: "bg-gray-800/50 rfp-rounded-xl rfp-p-4 rfp-border rfp-border-gray-700", children: [
            /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-gap-2 rfp-text-gray-400 rfp-mb-3", children: [
              /* @__PURE__ */ e(At, { className: "rfp-w-4 rfp-h-4" }),
              /* @__PURE__ */ e("span", { className: "rfp-font-medium rfp-text-sm", children: "Scene Statistics" })
            ] }),
            /* @__PURE__ */ n("div", { className: "rfp-grid grid-cols-2 rfp-gap-2 rfp-text-sm", children: [
              /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-gap-2", children: [
                /* @__PURE__ */ e("div", { className: "rfp-w-2 rfp-h-2 bg-emerald-500 rfp-rounded-full rfp-animate-pulse" }),
                /* @__PURE__ */ n("span", { className: "rfp-text-gray-300", children: [
                  o.tables.length,
                  " Tables"
                ] })
              ] }),
              /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-gap-2", children: [
                /* @__PURE__ */ e("div", { className: "rfp-w-2 rfp-h-2 bg-amber-500 rfp-rounded-full rfp-animate-pulse" }),
                /* @__PURE__ */ n("span", { className: "rfp-text-gray-300", children: [
                  o.chairs.length,
                  " Chairs"
                ] })
              ] }),
              /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-gap-2", children: [
                /* @__PURE__ */ e("div", { className: "rfp-w-2 rfp-h-2 rfp-bg-purple-500 rfp-rounded-full rfp-animate-pulse" }),
                /* @__PURE__ */ n("span", { className: "rfp-text-gray-300", children: [
                  o.objects.length,
                  " Objects"
                ] })
              ] }),
              /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-gap-2", children: [
                /* @__PURE__ */ e("div", { className: "rfp-w-2 rfp-h-2 rfp-bg-blue-500 rfp-rounded-full rfp-animate-pulse" }),
                /* @__PURE__ */ n("span", { className: "rfp-text-gray-300", children: [
                  o.walls.length,
                  " Walls"
                ] })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ n("div", { className: "rfp-flex-1 rfp-relative bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 rounded-2xl rfp-overflow-hidden shadow-2xl rfp-border rfp-border-gray-300", children: [
        /* @__PURE__ */ e("div", { ref: C, className: "rfp-w-full rfp-h-full" }),
        _ && /* @__PURE__ */ e("div", { className: "rfp-absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2", children: /* @__PURE__ */ e("div", { className: "bg-black/80 backdrop-blur-xl rfp-rounded-xl rfp-px-6 rfp-py-3 shadow-2xl rfp-border rfp-border-gray-700", children: /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-gap-3", children: [
          /* @__PURE__ */ e("div", { className: "rfp-animate-spin rfp-rounded-full rfp-h-5 rfp-w-5 rfp-border-2 rfp-border-gray-500 border-t-white" }),
          /* @__PURE__ */ e("span", { className: "rfp-text-white rfp-text-sm rfp-font-medium", children: "Transitioning Camera..." })
        ] }) }) })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "bg-gradient-to-r from-gray-900 via-slate-900 to-gray-900 rfp-px-6 rfp-py-3 rfp-border-t rfp-border-gray-800", children: /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-justify-between", children: [
      /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-gap-4", children: [
        /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-gap-2", children: [
          /* @__PURE__ */ e(mt, { className: "rfp-w-4 rfp-h-4 rfp-text-gray-400" }),
          /* @__PURE__ */ n("span", { className: "rfp-text-sm rfp-text-gray-400", children: [
            "Viewing: ",
            /* @__PURE__ */ e("span", { className: "rfp-text-white rfp-font-semibold", children: o.name })
          ] })
        ] }),
        /* @__PURE__ */ n("div", { className: "rfp-text-sm rfp-text-gray-400", children: [
          "Camera: ",
          /* @__PURE__ */ e("span", { className: "rfp-text-white rfp-font-semibold", children: ht[q].name })
        ] })
      ] }),
      /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-gap-2 rfp-text-xs rfp-text-gray-500", children: [
        /* @__PURE__ */ e("span", { children: "High Performance Mode" }),
        /* @__PURE__ */ e("div", { className: "rfp-w-2 rfp-h-2 rfp-bg-green-500 rfp-rounded-full rfp-animate-pulse" })
      ] })
    ] }) })
  ] }) }) : null;
}, ir = () => {
  const [o, p] = U([
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
  ]), [f, C] = U("floor-1"), [i, v] = U(null), [V, oe] = U(!1), [P, le] = U({ x: 0, y: 0 }), q = 1, [A, _] = U(!0), [Ne, Ae] = U(!1), [J, $e] = U(!1), [ge, be] = U(null), [h, I] = U(null), [F, ye] = U(null), [de, ze] = U(!1), [we, He] = U(null), [M, Me] = U(null), j = Te(null), K = Te(null), Le = Te(null);
  _e(() => {
    if ((i == null ? void 0 : i.type) === "table") {
      const s = r();
      if (!s)
        return;
      const a = s.chairs.filter((c) => c.tableId === i.id);
      if (a.filter((c) => c.size === void 0).length > 0) {
        const c = {};
        a.forEach((y) => {
          y.size !== void 0 && !c[y.position] && (c[y.position] = y.size);
        }), p((y) => y.map(
          (G) => G.id === f ? {
            ...G,
            chairs: G.chairs.map((W) => {
              if (W.tableId === i.id && W.size === void 0) {
                const te = c[W.position] ?? 40;
                return { ...W, size: te };
              }
              return W;
            })
          } : G
        ));
      }
    }
  }, [i]);
  const r = () => o.find((s) => s.id === f), Z = (s, a = "medium") => {
    const l = r();
    if (!l)
      return;
    const { width: c, height: y } = pt(s, a), G = {
      id: Oe(),
      name: `Table ${l.tables.length + 1}`,
      shape: s,
      size: a,
      x: 200 + l.tables.length * 20,
      y: 200 + l.tables.length * 20,
      width: c,
      height: y,
      rotation: 0
    };
    p((W) => W.map(
      (te) => te.id === f ? { ...te, tables: [...te.tables, G] } : te
    )), v({ type: "table", id: G.id });
  }, H = (s) => {
    const a = r();
    if (!a)
      return;
    const l = {
      id: Oe(),
      name: `${Ke[s]} ${a.objects.length + 1}`,
      type: s,
      x: 300 + a.objects.length * 30,
      y: 300 + a.objects.length * 30,
      width: 120,
      height: 80,
      rotation: 0
    };
    p((c) => c.map(
      (y) => y.id === f ? { ...y, objects: [...y.objects, l] } : y
    )), v({ type: "object", id: l.id });
  }, k = (s) => {
    if (!i || i.type !== "table")
      return;
    const a = r();
    if (!a)
      return;
    const l = a.chairs.filter(
      (te) => te.tableId === i.id && te.position === s
    ), c = l.length, y = l.find((te) => te.size !== void 0), G = (y == null ? void 0 : y.size) ?? 40, W = {
      id: Oe(),
      tableId: i.id,
      position: s,
      index: c,
      x: 0,
      y: 0,
      size: G
      // Always set a size to prevent recalculation on table resize
    };
    p((te) => te.map(
      (se) => se.id === f ? { ...se, chairs: [...se.chairs, W] } : se
    ));
  }, d = (s) => {
    if (!i || i.type !== "table")
      return;
    const a = r();
    if (!a)
      return;
    const l = a.chairs.filter(
      (y) => y.tableId === i.id && y.position === s
    );
    if (l.length === 0)
      return;
    const c = l.reduce(
      (y, G) => G.index > y.index ? G : y
    );
    p((y) => y.map(
      (G) => G.id === f ? {
        ...G,
        chairs: G.chairs.filter((W) => W.id !== c.id)
      } : G
    ));
  }, R = (s, a) => {
    !i || i.type !== "table" || !r() || p((c) => c.map(
      (y) => y.id === f ? {
        ...y,
        chairs: y.chairs.map(
          (G) => G.tableId === i.id && G.position === s ? { ...G, size: a } : G
        )
      } : y
    ));
  }, m = () => {
    !i || i.type !== "table" || !r() || p((a) => a.map(
      (l) => l.id === f ? {
        ...l,
        chairs: l.chairs.map((c) => {
          if (c.tableId === i.id) {
            const { size: y, ...G } = c;
            return G;
          }
          return c;
        })
      } : l
    ));
  }, T = () => {
    i && (i.type === "table" ? p((s) => s.map(
      (a) => a.id === f ? {
        ...a,
        tables: a.tables.filter((l) => l.id !== i.id),
        chairs: a.chairs.filter((l) => l.tableId !== i.id)
      } : a
    )) : i.type === "object" ? p((s) => s.map(
      (a) => a.id === f ? {
        ...a,
        objects: a.objects.filter((l) => l.id !== i.id)
      } : a
    )) : i.type === "wall" ? p((s) => s.map(
      (a) => a.id === f ? {
        ...a,
        walls: a.walls.filter((l) => l.id !== i.id)
      } : a
    )) : i.type === "fixedElement" && p((s) => s.map(
      (a) => a.id === f ? {
        ...a,
        fixedElements: a.fixedElements.filter((l) => l.id !== i.id)
      } : a
    )), v(null));
  }, D = (s) => {
    !i || i.type !== "wall" || p((a) => a.map(
      (l) => l.id === f ? {
        ...l,
        walls: l.walls.map(
          (c) => c.id === i.id ? { ...c, thickness: s } : c
        )
      } : l
    ));
  }, z = (s) => {
    !i || i.type !== "wall" || p((a) => a.map(
      (l) => l.id === f ? {
        ...l,
        walls: l.walls.map(
          (c) => c.id === i.id ? { ...c, type: s } : c
        )
      } : l
    ));
  }, ie = () => {
    !i || i.type !== "table" || p((s) => s.map(
      (a) => a.id === f ? {
        ...a,
        tables: a.tables.map(
          (l) => l.id === i.id ? { ...l, rotation: (l.rotation || 0) + 45 } : l
        )
      } : a
    ));
  }, O = () => {
    if (!i || i.type !== "table")
      return;
    const s = r();
    if (!s)
      return;
    const a = s.tables.find((G) => G.id === i.id);
    if (!a)
      return;
    const l = {
      ...a,
      id: Oe(),
      name: `${a.name} Copy`,
      x: a.x + 50,
      y: a.y + 50
    }, y = s.chairs.filter((G) => G.tableId === a.id).map((G) => ({
      ...G,
      id: Oe(),
      tableId: l.id
    }));
    p((G) => G.map(
      (W) => W.id === f ? {
        ...W,
        tables: [...W.tables, l],
        chairs: [...W.chairs, ...y]
      } : W
    )), v({ type: "table", id: l.id });
  }, pe = je((s) => {
    !i || i.type !== "table" || p((a) => a.map(
      (l) => l.id === f ? {
        ...l,
        tables: l.tables.map(
          (c) => c.id === i.id ? s(c) : c
        )
      } : l
    ));
  }, [i, f]), ee = (s) => {
    pe((a) => {
      const { width: l, height: c } = pt(a.shape, s);
      return { ...a, size: s, width: l, height: c };
    });
  }, L = (s, a) => {
    pe((l) => ({
      ...l,
      width: s,
      height: a,
      // Set size to a custom indicator or keep current
      size: "medium"
      // Keep a valid size for the interface
    }));
  }, E = (s) => {
    !i || i.type !== "object" || p((a) => a.map(
      (l) => l.id === f ? {
        ...l,
        objects: l.objects.map(
          (c) => c.id === i.id ? { ...c, name: s } : c
        )
      } : l
    ));
  }, $ = (s, a) => {
    !i || i.type !== "object" || p((l) => l.map(
      (c) => c.id === f ? {
        ...c,
        objects: c.objects.map(
          (y) => y.id === i.id ? { ...y, width: s, height: a } : y
        )
      } : c
    ));
  }, b = (s) => {
    !i || i.type !== "object" || p((a) => a.map(
      (l) => l.id === f ? {
        ...l,
        objects: l.objects.map(
          (c) => c.id === i.id ? { ...c, rotation: s } : c
        )
      } : l
    ));
  }, re = (s, a) => {
    !i || i.type !== "fixedElement" || p((l) => l.map(
      (c) => c.id === f ? {
        ...c,
        fixedElements: c.fixedElements.map(
          (y) => y.id === i.id ? { ...y, width: s, height: a } : y
        )
      } : c
    ));
  }, Q = (s) => {
    pe((a) => ({ ...a, name: s }));
  }, ke = (s) => {
    if (j.current && !de) {
      if (J && ge) {
        const a = j.current.getBoundingClientRect(), l = Math.round((s.clientX - a.left) / q / Y) * Y, c = Math.round((s.clientY - a.top) / q / Y) * Y;
        if (!h)
          I({ x: l, y: c });
        else {
          if (!r())
            return;
          const G = Ue(h, { x: l, y: c }), W = {
            id: Oe(),
            type: ge,
            startX: h.x,
            startY: h.y,
            endX: G.x,
            endY: G.y,
            thickness: 8
          };
          p((te) => te.map(
            (se) => se.id === f ? { ...se, walls: [...se.walls, W] } : se
          )), I(null), ye(null), $e(!1), be(null);
        }
        return;
      }
      v(null);
    }
  }, X = (s, a) => {
    v({ type: s, id: a });
  }, S = (s, a) => {
    if (!j.current)
      return;
    s.preventDefault(), s.stopPropagation();
    const l = j.current.getBoundingClientRect(), c = (s.clientX - l.left) / q, y = (s.clientY - l.top) / q, G = r();
    if (!G)
      return;
    const W = G.tables.find((he) => he.id === a), te = G.objects.find((he) => he.id === a), se = G.fixedElements.find((he) => he.id === a), Ie = G.walls.find((he) => he.id === a);
    if (Ie)
      le({
        x: c - Ie.startX,
        y: y - Ie.startY
      }), K.current = { id: a, type: "wall" };
    else {
      const he = W || te || se;
      he && le({
        x: c - he.x,
        y: y - he.y
      });
      const We = W ? "table" : te ? "object" : se ? "fixedElement" : "table";
      K.current = { id: a, type: We };
    }
    oe(!0);
  }, u = je((s) => {
    !V && !de || !K.current || !j.current || (Le.current && cancelAnimationFrame(Le.current), Le.current = requestAnimationFrame(() => {
      var W, te, se, Ie, he;
      if (!j.current)
        return;
      const a = j.current.getBoundingClientRect(), l = (s.clientX - a.left) / q, c = (s.clientY - a.top) / q, y = Math.round(l / Y) * Y, G = Math.round(c / Y) * Y;
      if (de && ((W = K.current) == null ? void 0 : W.type) === "wall") {
        const We = o.find((Xe) => Xe.id === f), Be = We == null ? void 0 : We.walls.find((Xe) => {
          var Pe;
          return Xe.id === ((Pe = K.current) == null ? void 0 : Pe.id);
        });
        if (Be) {
          const Xe = we === "start" ? { x: Be.endX, y: Be.endY } : { x: Be.startX, y: Be.startY }, Pe = Ue(Xe, { x: y, y: G });
          p((De) => De.map(
            (me) => me.id === f ? {
              ...me,
              walls: me.walls.map(
                (ae) => {
                  var Re;
                  return ae.id === ((Re = K.current) == null ? void 0 : Re.id) ? we === "start" ? { ...ae, startX: Pe.x, startY: Pe.y } : { ...ae, endX: Pe.x, endY: Pe.y } : ae;
                }
              )
            } : me
          ));
        }
      } else if (((te = K.current) == null ? void 0 : te.type) === "table") {
        const We = l - P.x, Be = c - P.y, Xe = Math.round(We / Y) * Y, Pe = Math.round(Be / Y) * Y;
        p((De) => De.map(
          (me) => me.id === f ? {
            ...me,
            tables: me.tables.map(
              (ae) => {
                var Re;
                return ae.id === ((Re = K.current) == null ? void 0 : Re.id) ? { ...ae, x: Xe, y: Pe } : ae;
              }
            )
          } : me
        ));
      } else if (((se = K.current) == null ? void 0 : se.type) === "object") {
        const We = l - P.x, Be = c - P.y, Xe = Math.round(We / Y) * Y, Pe = Math.round(Be / Y) * Y;
        p((De) => De.map(
          (me) => me.id === f ? {
            ...me,
            objects: me.objects.map(
              (ae) => {
                var Re;
                return ae.id === ((Re = K.current) == null ? void 0 : Re.id) ? { ...ae, x: Xe, y: Pe } : ae;
              }
            )
          } : me
        ));
      } else if (((Ie = K.current) == null ? void 0 : Ie.type) === "fixedElement") {
        const We = l - P.x, Be = c - P.y, Xe = Math.round(We / Y) * Y, Pe = Math.round(Be / Y) * Y;
        p((De) => De.map(
          (me) => me.id === f ? {
            ...me,
            fixedElements: me.fixedElements.map(
              (ae) => {
                var Re;
                return ae.id === ((Re = K.current) == null ? void 0 : Re.id) ? { ...ae, x: Xe, y: Pe } : ae;
              }
            )
          } : me
        ));
      } else if (((he = K.current) == null ? void 0 : he.type) === "wall" && !de) {
        const We = l - P.x, Be = c - P.y, Xe = Math.round(We / Y) * Y, Pe = Math.round(Be / Y) * Y;
        p((De) => De.map(
          (me) => me.id === f ? {
            ...me,
            walls: me.walls.map((ae) => {
              var it;
              if (ae.id !== ((it = K.current) == null ? void 0 : it.id))
                return ae;
              const Re = Xe - ae.startX, at = Pe - ae.startY;
              return {
                ...ae,
                startX: ae.startX + Re,
                startY: ae.startY + at,
                endX: ae.endX + Re,
                endY: ae.endY + at
              };
            })
          } : me
        ));
      }
    }));
  }, [V, de, we, P, f, q, o]), ue = () => {
    Le.current && (cancelAnimationFrame(Le.current), Le.current = null), oe(!1), K.current = null, ze(!1), He(null), Me(null);
  }, g = (s, a, l) => {
    s.preventDefault(), s.stopPropagation(), ze(!0), He(l), K.current = { id: a, type: "wall" };
  }, N = () => {
    const s = {
      id: Oe(),
      name: `Floor ${o.length + 1}`,
      isActive: !1,
      tables: [],
      chairs: [],
      objects: [],
      walls: [],
      fixedElements: []
    };
    p((a) => [...a, s]), B(s.id);
  }, Ce = () => {
    if (o.length <= 1)
      return;
    const s = o.filter((a) => a.id !== f);
    p(s), C(s[0].id);
  }, B = (s) => {
    p((a) => a.map((l) => ({
      ...l,
      isActive: l.id === s
    }))), C(s), v(null);
  }, x = (s, a) => {
    p((l) => l.map(
      (c) => c.id === s ? { ...c, name: a } : c
    ));
  }, Ge = (s) => {
    $e(!0), be(s), I(null), ye(null), v(null);
  }, Ee = (s) => {
    const a = r();
    if (!a)
      return;
    const l = {
      id: Oe(),
      name: `${s.charAt(0).toUpperCase() + s.slice(1)} ${a.fixedElements.length + 1}`,
      type: s,
      x: 400 + a.fixedElements.length * 30,
      y: 400 + a.fixedElements.length * 30,
      width: 60,
      height: 60,
      rotation: 0
    };
    p((c) => c.map(
      (y) => y.id === f ? { ...y, fixedElements: [...y.fixedElements, l] } : y
    )), v({ type: "fixedElement", id: l.id });
  }, ce = () => {
    const s = {
      floors: o,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
    console.log("Saving floor plan:", s), alert("Floor plan saved! (Check console for data)");
  };
  _e(() => {
    const s = (l) => u(l), a = () => ue();
    return (V || de) && (document.addEventListener("mousemove", s), document.addEventListener("mouseup", a)), () => {
      document.removeEventListener("mousemove", s), document.removeEventListener("mouseup", a);
    };
  }, [V, de, u]);
  const fe = (s) => {
    var a;
    if (J && h && j.current) {
      const l = j.current.getBoundingClientRect(), c = Math.round((s.clientX - l.left) / q / Y) * Y, y = Math.round((s.clientY - l.top) / q / Y) * Y, G = Ue(h, { x: c, y });
      ye(G);
    } else if (de && ((a = K.current) == null ? void 0 : a.type) === "wall" && j.current) {
      const l = j.current.getBoundingClientRect(), c = Math.round((s.clientX - l.left) / q / Y) * Y, y = Math.round((s.clientY - l.top) / q / Y) * Y, G = r(), W = G == null ? void 0 : G.walls.find((te) => {
        var se;
        return te.id === ((se = K.current) == null ? void 0 : se.id);
      });
      if (W) {
        const te = we === "start" ? { x: W.endX, y: W.endY } : { x: W.startX, y: W.startY }, se = Ue(te, { x: c, y });
        Me(
          we === "start" ? { startX: se.x, startY: se.y, endX: W.endX, endY: W.endY } : { startX: W.startX, startY: W.startY, endX: se.x, endY: se.y }
        );
      }
    }
  };
  _e(() => {
    const s = (a) => {
      a.key === "Escape" && J && ($e(!1), be(null), I(null), ye(null));
    };
    return document.addEventListener("keydown", s), () => document.removeEventListener("keydown", s);
  }, [J]);
  const w = r(), ne = w == null ? void 0 : w.tables.find((s) => (i == null ? void 0 : i.type) === "table" && s.id === i.id), Fe = w == null ? void 0 : w.objects.find((s) => (i == null ? void 0 : i.type) === "object" && s.id === i.id), Ye = w == null ? void 0 : w.walls.find((s) => (i == null ? void 0 : i.type) === "wall" && s.id === i.id), xe = w == null ? void 0 : w.fixedElements.find((s) => (i == null ? void 0 : i.type) === "fixedElement" && s.id === i.id), Se = ne ? (w == null ? void 0 : w.chairs.filter((s) => s.tableId === ne.id)) ?? [] : [], ve = je(() => _((s) => !s), []);
  return /* @__PURE__ */ n("div", { className: "restaurant-floor-planner rfp-flex rfp-h-screen rfp-bg-gray-50", children: [
    /* @__PURE__ */ e("style", { dangerouslySetInnerHTML: { __html: Yt } }),
    /* @__PURE__ */ e(
      Qt,
      {
        floors: o,
        currentFloor: w,
        onAddFloor: N,
        onRemoveFloor: Ce,
        onSwitchFloor: B,
        onRenameFloor: x,
        onAddTable: Z,
        onAddObject: H,
        onStartWallDrawing: Ge,
        onAddFixedElement: Ee,
        onRotateTable: ie,
        onDuplicateTable: O,
        onRemoveTable: T,
        onSave: ce,
        selectedTable: ne ?? null,
        selectedTableChairs: Se
      }
    ),
    /* @__PURE__ */ n("div", { className: "flex-1 flex flex-col", children: [
      /* @__PURE__ */ e(
        tr,
        {
          showGrid: A,
          selectedTable: ne ?? null,
          selectedObject: Fe ?? null,
          selectedWall: Ye ?? null,
          selectedFixedElement: xe ?? null,
          selectedTableChairs: Se,
          tableCount: (w == null ? void 0 : w.tables.length) ?? 0,
          chairCount: (w == null ? void 0 : w.chairs.length) ?? 0,
          objectCount: (w == null ? void 0 : w.objects.length) ?? 0,
          wallCount: (w == null ? void 0 : w.walls.length) ?? 0,
          fixedElementCount: (w == null ? void 0 : w.fixedElements.length) ?? 0,
          selectedElementType: (i == null ? void 0 : i.type) ?? null,
          onToggleGrid: ve,
          onAddChair: k,
          onRemoveChair: d,
          onChangeTableSize: ee,
          onCustomTableSize: L,
          onTableNameChange: Q,
          onObjectNameChange: E,
          onObjectResize: $,
          onObjectRotate: b,
          onRemoveObject: T,
          onRemoveWall: T,
          onRemoveFixedElement: T,
          onChangeWallThickness: D,
          onConvertWallType: z,
          onFixedElementResize: re,
          onChairSizeChange: R,
          onResetChairSizes: m,
          on3DPreview: () => Ae(!0)
        }
      ),
      /* @__PURE__ */ n("div", { className: "flex-1 overflow-hidden bg-gray-100 relative", children: [
        /* @__PURE__ */ n(
          "div",
          {
            ref: j,
            className: `w-full h-full relative ${J ? "cursor-crosshair" : de ? "cursor-grabbing" : "cursor-default"}`,
            style: {
              transform: `scale(${q})`,
              transformOrigin: "top left",
              background: A ? "radial-gradient(circle, #d1d5db 1px, transparent 1px)" : "white",
              backgroundSize: `${Y * q}px ${Y * q}px`
            },
            onClick: ke,
            onMouseMove: fe,
            children: [
              (w == null ? void 0 : w.tables.length) === 0 && /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ n("div", { className: "text-center text-gray-400", children: [
                /* @__PURE__ */ e("div", { className: "text-6xl mb-4", children: "🏪" }),
                /* @__PURE__ */ e("div", { className: "text-xl font-medium mb-2", children: "Welcome to Your Restaurant Designer" }),
                /* @__PURE__ */ e("div", { className: "text-lg", children: 'Click "Add Tables" in the sidebar to start designing your floor plan' }),
                /* @__PURE__ */ n("div", { className: "mt-4 space-y-1 text-sm", children: [
                  /* @__PURE__ */ e("div", { children: "• Drag tables to move them around" }),
                  /* @__PURE__ */ e("div", { children: "• Click tables to select and edit properties" }),
                  /* @__PURE__ */ e("div", { children: "• Add chairs from the top toolbar or the table properties panel" }),
                  /* @__PURE__ */ e("div", { children: "• Use multiple floors for complex layouts" })
                ] })
              ] }) }),
              w == null ? void 0 : w.tables.map((s) => /* @__PURE__ */ e(
                qt,
                {
                  table: s,
                  isSelected: (i == null ? void 0 : i.type) === "table" && i.id === s.id,
                  chairs: w.chairs.filter((a) => a.tableId === s.id),
                  onSelect: () => X("table", s.id),
                  onDrag: S,
                  onDragEnd: ue
                },
                s.id
              )),
              w == null ? void 0 : w.objects.map((s) => /* @__PURE__ */ e(
                Ut,
                {
                  object: s,
                  isSelected: (i == null ? void 0 : i.type) === "object" && i.id === s.id,
                  onSelect: () => X("object", s.id),
                  onDragStart: (a) => S(a, s.id)
                },
                s.id
              )),
              w == null ? void 0 : w.walls.map((s) => /* @__PURE__ */ e(
                ct,
                {
                  wall: s,
                  isSelected: (i == null ? void 0 : i.type) === "wall" && i.id === s.id,
                  onSelect: () => X("wall", s.id),
                  onDragHandle: (a, l) => g(a, s.id, l),
                  onDragStart: (a) => S(a, s.id)
                },
                s.id
              )),
              J && h && F && ge && /* @__PURE__ */ e(
                ct,
                {
                  wall: {
                    id: "temp-wall",
                    type: ge,
                    startX: h.x,
                    startY: h.y,
                    endX: F.x,
                    endY: F.y,
                    thickness: 8
                  },
                  isSelected: !1,
                  onSelect: () => {
                  }
                }
              ),
              M && /* @__PURE__ */ e(
                "div",
                {
                  className: "absolute pointer-events-none",
                  style: {
                    left: `${M.startX}px`,
                    top: `${M.startY}px`,
                    width: `${Math.sqrt(
                      Math.pow(M.endX - M.startX, 2) + Math.pow(M.endY - M.startY, 2)
                    )}px`,
                    height: "4px",
                    transform: `rotate(${Math.atan2(
                      M.endY - M.startY,
                      M.endX - M.startX
                    ) * (180 / Math.PI)}deg)`,
                    transformOrigin: "top left",
                    zIndex: 15
                  },
                  children: /* @__PURE__ */ e("div", { className: "w-full h-full border-2 border-blue-400 border-dashed opacity-70 bg-blue-100 rounded-sm" })
                }
              ),
              w == null ? void 0 : w.fixedElements.map((s) => /* @__PURE__ */ e(
                Jt,
                {
                  element: s,
                  isSelected: (i == null ? void 0 : i.type) === "fixedElement" && i.id === s.id,
                  onSelect: () => X("fixedElement", s.id),
                  onDragStart: (a) => S(a, s.id)
                },
                s.id
              )),
              w == null ? void 0 : w.chairs.map((s) => {
                const a = w.tables.find((c) => c.id === s.tableId);
                if (!a)
                  return null;
                const l = w.chairs.filter(
                  (c) => c.tableId === s.tableId && c.position === s.position
                ).length;
                return /* @__PURE__ */ e(
                  Vt,
                  {
                    chair: s,
                    table: a,
                    totalChairsOnSide: l,
                    isSelected: !1,
                    onSelect: () => {
                    },
                    onDrag: () => {
                    },
                    onDragEnd: () => {
                    }
                  },
                  s.id
                );
              }),
              i && i.type === "table" && ne && /* @__PURE__ */ e(
                "div",
                {
                  className: "absolute border-2 border-blue-500 border-dashed rounded pointer-events-none",
                  style: {
                    left: ne.x - 10,
                    top: ne.y - 10,
                    width: (ne.shape === "rectangle" ? ne.width * 1.5 : ne.width) + 20,
                    height: ne.height + 20,
                    transform: `rotate(${ne.rotation || 0}deg)`
                  }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ e("div", { className: "absolute bottom-0 left-0 right-0 bg-white bg-opacity-95 border-t border-gray-200 p-3", children: /* @__PURE__ */ n("div", { className: "flex items-center justify-between text-sm", children: [
          /* @__PURE__ */ n("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ n("div", { className: "flex items-center gap-2 text-gray-600", children: [
              /* @__PURE__ */ e("div", { className: "w-2 h-2 bg-green-500 rounded-full" }),
              /* @__PURE__ */ n("span", { children: [
                "Floor: ",
                w == null ? void 0 : w.name
              ] })
            ] }),
            V && /* @__PURE__ */ n("div", { className: "flex items-center gap-2 text-blue-600", children: [
              /* @__PURE__ */ e("div", { className: "w-2 h-2 bg-blue-500 rounded-full animate-pulse" }),
              /* @__PURE__ */ e("span", { children: "Dragging..." })
            ] })
          ] }),
          /* @__PURE__ */ n("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ n("div", { className: "text-gray-500", children: [
              "Zoom: ",
              Math.round(q * 100),
              "% | Grid: ",
              A ? "On" : "Off"
            ] }),
            i && /* @__PURE__ */ e("div", { className: "text-blue-600 font-medium", children: i.type === "table" && ne ? `${ne.name} (${ne.shape})` : "Element Selected" })
          ] })
        ] }) })
      ] })
    ] }),
    w && /* @__PURE__ */ e(
      rr,
      {
        floor: w,
        isOpen: Ne,
        onClose: () => Ae(!1)
      }
    )
  ] });
};
export {
  rr as Preview3DModal,
  ir as RestaurantFloorPlanner
};
//# sourceMappingURL=restaurant-floor-planner.es.js.map
