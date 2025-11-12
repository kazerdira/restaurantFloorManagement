import { jsx as e, jsxs as n, Fragment as _e } from "react/jsx-runtime";
import qe, { useState as J, useRef as Le, useEffect as Ve, useCallback as et } from "react";
import { Square as Ue, Circle as vt, Wine as Nt, ChefHat as Mt, Bath as St, RectangleVertical as lt, DoorOpen as Ct, Columns as pt, Rows as kt, Armchair as rt, Layers as gt, Plus as nt, Minus as ut, LayoutGrid as Et, Package as Gt, Home as zt, RotateCw as Pt, Trash2 as Ke, Save as It, Upload as Rt, Eye as Tt, EyeOff as $t, RotateCcw as st, ChevronRight as Lt, Box as Wt, Move3d as tt, X as Bt, ZoomIn as dt, ZoomOut as Xt, Maximize2 as At, Grid as Yt } from "lucide-react";
import * as t from "three";
const Ht = `
  .hexagon-shape {
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  }
`, D = 20, Dt = {
  small: { width: 50, height: 50 },
  medium: { width: 90, height: 90 },
  large: { width: 130, height: 130 }
}, Ot = {
  square: Ue,
  circle: vt,
  rectangle: Ue,
  hexagon: Ue
}, xt = {
  small: "Small",
  medium: "Medium",
  large: "Big"
}, at = {
  bar: Nt,
  kitchen: Mt,
  toilet: St
}, Qe = {
  bar: "Bar",
  kitchen: "Kitchen",
  toilet: "Toilet"
}, wt = {
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
}, je = {
  wall: "Wall",
  door: "Door",
  window: "Window"
}, Ft = {
  wall: lt,
  door: Ct,
  window: lt
}, bt = {
  pillar: "Pillar",
  column: "Column",
  stairs: "Stairs"
}, Zt = {
  pillar: pt,
  column: pt,
  stairs: kt
}, _t = {
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
}, Ze = () => Math.random().toString(36).slice(2, 11), Vt = (l) => {
  const x = l.shape === "rectangle" ? l.width * 1.5 : l.width, f = Math.min(x, l.height), c = Math.round(f * 0.35);
  return Math.max(18, Math.min(48, c));
}, yt = (l) => l.shape === "rectangle" ? l.width * 1.5 : l.width, ft = (l, x) => {
  const { width: f, height: c } = Dt[x];
  return {
    width: l === "rectangle" ? f * 1.5 : f,
    height: c
  };
}, Je = (l, x) => {
  const f = Math.abs(x.x - l.x), c = Math.abs(x.y - l.y);
  return f > c ? { x: x.x, y: l.y } : { x: l.x, y: x.y };
}, qt = ({
  chair: l,
  table: x,
  isSelected: f,
  onSelect: c,
  onDrag: ne,
  onDragEnd: a,
  totalChairsOnSide: Y
}) => {
  const ee = Vt(x), $ = l.size ?? Math.round(ee * 1.3), V = Math.max(10, Math.round($ * 0.25)), ke = Math.min($ - 4, Math.max(20, Math.round($ * 0.65))), z = yt(x), O = (x.rotation || 0) * (Math.PI / 180), be = (() => {
    const ze = (l.position === "top" || l.position === "bottom" ? z : x.height) - $ * Y, ge = Y > 1 ? ze / (Y + 1) : ze / 2, ue = ge + l.index * ($ + ge) + $ / 2;
    let w = 0, E = 0;
    switch (l.position) {
      case "top":
        w = ue - z / 2, E = -(x.height / 2 + V + $ / 2);
        break;
      case "bottom":
        w = ue - z / 2, E = x.height / 2 + V + $ / 2;
        break;
      case "left":
        w = -(z / 2 + V + $ / 2), E = ue - x.height / 2;
        break;
      case "right":
        w = z / 2 + V + $ / 2, E = ue - x.height / 2;
        break;
    }
    const F = w * Math.cos(O) - E * Math.sin(O), ye = w * Math.sin(O) + E * Math.cos(O), ve = x.x + z / 2, fe = x.y + x.height / 2;
    return {
      x: ve + F - $ / 2,
      y: fe + ye - $ / 2
    };
  })(), De = () => {
    let se = 0;
    switch (l.position) {
      case "top":
        se = 0;
        break;
      case "right":
        se = 90;
        break;
      case "bottom":
        se = 180;
        break;
      case "left":
        se = 270;
        break;
    }
    return se + (x.rotation || 0);
  };
  return /* @__PURE__ */ e(
    "div",
    {
      className: `absolute cursor-move transition-all duration-150 ${f ? "ring-4 ring-amber-400 ring-offset-2" : ""}`,
      style: {
        left: be.x,
        top: be.y,
        width: $,
        height: $,
        transform: `rotate(${De()}deg)`,
        zIndex: f ? 100 : 50,
        filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2))"
      },
      onMouseDown: (se) => {
        se.stopPropagation(), c(), ne(se, l.id);
      },
      onMouseUp: a,
      children: /* @__PURE__ */ e("div", { className: "rfp-w-full rfp-h-full bg-gradient-to-br from-amber-500 to-amber-700 rfp-rounded-lg rfp-border-4 border-amber-800 rfp-flex rfp-items-center rfp-justify-center rfp-shadow-xl hover:shadow-2xl hover:scale-105 rfp-transition-all", children: /* @__PURE__ */ e(rt, { size: ke, strokeWidth: 3.5, className: "text-amber-50" }) })
    }
  );
}, Ut = ({
  table: l,
  chairs: x,
  isSelected: f,
  onSelect: c,
  onDrag: ne,
  onDragEnd: a
}) => {
  const Y = {
    left: l.x,
    top: l.y,
    width: yt(l),
    height: l.height,
    zIndex: f ? 100 : 50,
    transform: `rotate(${l.rotation || 0}deg)`
  }, ee = "w-full h-full flex items-center justify-center relative", $ = l.shape === "circle" ? `${ee} rounded-full` : l.shape === "hexagon" ? `${ee} hexagon-shape` : ee, ke = x.filter((be) => be.tableId === l.id).length, z = l.name.match(/\d+/), O = z ? z[0] : l.name;
  return /* @__PURE__ */ e(
    "div",
    {
      className: `absolute cursor-move transition-all duration-150 ${f ? "ring-2 ring-emerald-500 ring-offset-2" : ""}`,
      style: Y,
      onMouseDown: (be) => {
        be.stopPropagation(), c(), ne(be, l.id);
      },
      onClick: (be) => {
        be.stopPropagation(), c();
      },
      onMouseUp: a,
      children: /* @__PURE__ */ n("div", { className: $, children: [
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
            O
          ] }),
          /* @__PURE__ */ n("span", { className: "rfp-text-xs rfp-font-bold rfp-uppercase rfp-tracking-wide", children: [
            "S: ",
            ke
          ] })
        ] })
      ] })
    }
  );
}, Jt = ({
  object: l,
  isSelected: x,
  onSelect: f,
  onDragStart: c
}) => {
  const ne = at[l.type], a = wt[l.type], [Y, ee] = J(!1), $ = (V) => {
    ee(!0), c(V);
    const ke = () => {
      ee(!1), document.removeEventListener("mouseup", ke);
    };
    document.addEventListener("mouseup", ke);
  };
  return /* @__PURE__ */ n(
    "div",
    {
      className: `absolute cursor-move select-none ${Y ? "" : "transition-all duration-75"} ${a.bg} ${a.border} border-2 rounded-lg shadow-lg flex items-center justify-center ${x ? "ring-4 ring-blue-400 ring-opacity-50 scale-105" : "hover:scale-102"}`,
      style: {
        left: `${l.x}px`,
        top: `${l.y}px`,
        width: `${l.width}px`,
        height: `${l.height}px`,
        transform: `rotate(${l.rotation}deg)`,
        transformOrigin: "center",
        willChange: Y ? "transform" : "auto"
      },
      onClick: (V) => {
        V.stopPropagation(), f();
      },
      onMouseDown: $,
      children: [
        /* @__PURE__ */ n("div", { className: "rfp-flex rfp-flex-col rfp-items-center rfp-justify-center rfp-gap-2 rfp-pointer-events-none", children: [
          /* @__PURE__ */ e(ne, { className: `w-8 h-8 ${a.text}`, strokeWidth: 2 }),
          /* @__PURE__ */ e("span", { className: `text-sm font-bold ${a.text} uppercase tracking-wide`, children: l.name })
        ] }),
        x && /* @__PURE__ */ n(_e, { children: [
          /* @__PURE__ */ e("div", { className: "rfp-absolute -top-1 -left-1 rfp-w-3 rfp-h-3 rfp-bg-blue-500 rfp-rounded-full rfp-border-2 border-white cursor-nw-resize" }),
          /* @__PURE__ */ e("div", { className: "rfp-absolute -top-1 -right-1 rfp-w-3 rfp-h-3 rfp-bg-blue-500 rfp-rounded-full rfp-border-2 border-white cursor-ne-resize" }),
          /* @__PURE__ */ e("div", { className: "rfp-absolute -bottom-1 -left-1 rfp-w-3 rfp-h-3 rfp-bg-blue-500 rfp-rounded-full rfp-border-2 border-white cursor-sw-resize" }),
          /* @__PURE__ */ e("div", { className: "rfp-absolute -bottom-1 -right-1 rfp-w-3 rfp-h-3 rfp-bg-blue-500 rfp-rounded-full rfp-border-2 border-white cursor-se-resize" })
        ] })
      ]
    }
  );
}, ct = ({
  wall: l,
  isSelected: x,
  onSelect: f,
  onDragHandle: c,
  onDragStart: ne
}) => {
  const a = Math.sqrt(
    Math.pow(l.endX - l.startX, 2) + Math.pow(l.endY - l.startY, 2)
  ), Y = Math.atan2(l.endY - l.startY, l.endX - l.startX) * (180 / Math.PI), ee = () => {
    if (!x)
      return "pointer";
    const z = Math.abs(l.endX - l.startX), O = Math.abs(l.endY - l.startY);
    return z > O ? "ew-resize" : "ns-resize";
  }, $ = () => {
    switch (l.type) {
      case "wall":
        return "bg-gray-800";
      case "door":
        return "bg-amber-600";
      case "window":
        return "bg-blue-500";
    }
  }, V = () => l.type === "window" ? "bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400" : l.type === "door" ? "" : $(), ke = () => {
    const z = a * 0.1, O = (a - z) / 2;
    return /* @__PURE__ */ n("div", { className: "rfp-w-full rfp-h-full rfp-relative", children: [
      /* @__PURE__ */ e(
        "div",
        {
          className: "rfp-absolute rfp-left-0 bg-gradient-to-r from-amber-600 to-amber-700 rfp-shadow-md rfp-rounded-sm",
          style: {
            width: `${O}px`,
            height: `${l.thickness}px`,
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
            left: `${O}px`,
            width: `${z}px`,
            height: `${l.thickness}px`
          }
        }
      ),
      /* @__PURE__ */ e(
        "div",
        {
          className: "rfp-absolute rfp-right-0 bg-gradient-to-r from-amber-700 to-amber-600 rfp-shadow-md rfp-rounded-sm",
          style: {
            width: `${O}px`,
            height: `${l.thickness}px`,
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
      onClick: (z) => {
        z.stopPropagation(), f();
      },
      onMouseDown: (z) => {
        x && ne && (z.stopPropagation(), ne(z));
      },
      className: `absolute transition-all ${x ? "ring-4 ring-blue-400 ring-opacity-50 hover:ring-6 hover:ring-blue-300" : ""}`,
      style: {
        left: `${l.startX}px`,
        top: `${l.startY}px`,
        width: `${a}px`,
        height: `${l.thickness}px`,
        transform: `rotate(${Y}deg)`,
        transformOrigin: "top left",
        zIndex: 10,
        cursor: x ? "move" : "pointer",
        pointerEvents: "auto"
      },
      children: [
        l.type === "door" ? ke() : /* @__PURE__ */ e("div", { className: `w-full h-full ${V()} shadow-lg hover:opacity-90 transition-opacity rounded-sm`, children: x && /* @__PURE__ */ n("div", { className: "rfp-absolute -top-8 left-1/2 transform -translate-x-1/2 rfp-bg-gray-900 rfp-text-white rfp-text-xs rfp-px-2 rfp-py-1 rfp-rounded whitespace-nowrap rfp-shadow-lg z-30", children: [
          je[l.type],
          " - ",
          Math.round(a),
          "px"
        ] }) }),
        l.type === "door" && x && /* @__PURE__ */ n("div", { className: "rfp-absolute -top-8 left-1/2 transform -translate-x-1/2 rfp-bg-gray-900 rfp-text-white rfp-text-xs rfp-px-2 rfp-py-1 rfp-rounded whitespace-nowrap rfp-shadow-lg z-30", children: [
          je[l.type],
          " - ",
          Math.round(a),
          "px"
        ] }),
        x && /* @__PURE__ */ n(_e, { children: [
          /* @__PURE__ */ e(
            "div",
            {
              className: "rfp-absolute -left-2 top-1/2 transform -translate-y-1/2 rfp-w-5 rfp-h-5 rfp-bg-blue-500 rfp-rounded-full rfp-border-2 border-white hover:bg-blue-600 hover:scale-125 rfp-transition-all rfp-shadow-xl z-30",
              style: { cursor: ee() },
              onMouseDown: (z) => {
                z.stopPropagation(), c == null || c(z, "start");
              },
              title: "Drag to resize"
            }
          ),
          /* @__PURE__ */ e(
            "div",
            {
              className: "rfp-absolute -right-2 top-1/2 transform -translate-y-1/2 rfp-w-5 rfp-h-5 rfp-bg-blue-500 rfp-rounded-full rfp-border-2 border-white hover:bg-blue-600 hover:scale-125 rfp-transition-all rfp-shadow-xl z-30",
              style: { cursor: ee() },
              onMouseDown: (z) => {
                z.stopPropagation(), c == null || c(z, "end");
              },
              title: "Drag to resize"
            }
          )
        ] })
      ]
    }
  );
}, Kt = ({
  element: l,
  isSelected: x,
  onSelect: f,
  onDragStart: c
}) => {
  const [ne, a] = J(!1), Y = ($) => {
    a(!0), c($);
    const V = () => {
      a(!1), document.removeEventListener("mouseup", V);
    };
    document.addEventListener("mouseup", V);
  }, ee = () => l.type === "pillar" ? /* @__PURE__ */ n("div", { className: "rfp-w-full rfp-h-full rfp-relative", children: [
    /* @__PURE__ */ n("div", { className: "rfp-absolute inset-2 bg-gradient-to-br from-gray-400 via-gray-600 to-gray-800 rfp-rounded-full shadow-2xl", children: [
      /* @__PURE__ */ e("div", { className: "rfp-absolute rfp-inset-0 rfp-rounded-full bg-gradient-to-tr from-transparent via-white/10 to-white/20" }),
      /* @__PURE__ */ e("div", { className: "rfp-absolute rfp-inset-0 rfp-rounded-full shadow-inner", style: { boxShadow: "inset -4px -4px 12px rgba(0,0,0,0.5), inset 4px 4px 12px rgba(255,255,255,0.2)" } })
    ] }),
    /* @__PURE__ */ e("div", { className: "rfp-absolute rfp-inset-0 rfp-flex rfp-items-center rfp-justify-center", children: /* @__PURE__ */ e("div", { className: "w-1/3 h-1/3 bg-white/10 rfp-rounded-full blur-sm" }) })
  ] }) : l.type === "column" ? /* @__PURE__ */ n("div", { className: "rfp-w-full rfp-h-full rfp-relative", children: [
    /* @__PURE__ */ n("div", { className: "rfp-absolute inset-2 bg-gradient-to-br from-slate-400 via-slate-600 to-slate-800 rfp-rounded-lg shadow-2xl", children: [
      /* @__PURE__ */ e("div", { className: "rfp-absolute rfp-inset-0 rfp-rounded-lg bg-gradient-to-br from-white/20 via-transparent to-black/30" }),
      /* @__PURE__ */ e("div", { className: "rfp-absolute rfp-top-0 rfp-left-0 rfp-right-0 rfp-h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-t-lg" }),
      /* @__PURE__ */ e("div", { className: "rfp-absolute rfp-top-0 rfp-bottom-0 rfp-left-0 rfp-w-1 bg-gradient-to-b from-transparent via-white/30 to-transparent rounded-l-lg" }),
      /* @__PURE__ */ e("div", { className: "rfp-absolute rfp-inset-0 rfp-rounded-lg", style: { boxShadow: "inset 0 0 20px rgba(0,0,0,0.5)" } })
    ] }),
    /* @__PURE__ */ e("div", { className: "rfp-absolute rfp-inset-0 rfp-flex rfp-items-center rfp-justify-center rfp-pointer-events-none", children: /* @__PURE__ */ e("div", { className: "w-0.5 h-2/3 bg-white/20" }) })
  ] }) : l.type === "stairs" ? /* @__PURE__ */ n("div", { className: "rfp-w-full rfp-h-full rfp-relative bg-gradient-to-br from-amber-200 via-amber-300 to-amber-400 rfp-rounded-lg rfp-shadow-xl rfp-overflow-hidden", children: [
    [0, 1, 2, 3, 4, 5].map(($) => /* @__PURE__ */ n(
      "div",
      {
        className: "rfp-absolute rfp-left-0 rfp-right-0 bg-gradient-to-r from-amber-400 to-amber-500 rfp-border-t border-amber-600",
        style: {
          top: `${$ * 16.66}%`,
          height: "16.66%",
          boxShadow: "0 2px 4px rgba(0,0,0,0.3)"
        },
        children: [
          /* @__PURE__ */ e("div", { className: "rfp-absolute rfp-inset-0 bg-gradient-to-b from-white/20 to-transparent h-1/2" }),
          /* @__PURE__ */ e("div", { className: "rfp-absolute rfp-bottom-0 rfp-left-0 rfp-right-0 h-px bg-black/30" })
        ]
      },
      $
    )),
    /* @__PURE__ */ e("div", { className: "rfp-absolute rfp-inset-0 rfp-flex rfp-items-center rfp-justify-center rfp-pointer-events-none", children: /* @__PURE__ */ e("div", { className: "bg-white/80 rfp-rounded-full rfp-p-2 rfp-shadow-lg", children: /* @__PURE__ */ e("svg", { className: "rfp-w-6 rfp-h-6 text-amber-800", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 3, d: "M5 15l7-7 7 7" }) }) }) })
  ] }) : null;
  return /* @__PURE__ */ n(
    "div",
    {
      className: `absolute cursor-move select-none ${ne ? "" : "transition-all duration-75"} rounded-lg ${x ? "ring-4 ring-blue-400 ring-opacity-50 scale-105" : "hover:scale-102"}`,
      style: {
        left: `${l.x}px`,
        top: `${l.y}px`,
        width: `${l.width}px`,
        height: `${l.height}px`,
        transform: `rotate(${l.rotation}deg)`,
        transformOrigin: "center",
        willChange: ne ? "transform" : "auto",
        zIndex: 20
      },
      onClick: ($) => {
        $.stopPropagation(), f();
      },
      onMouseDown: Y,
      children: [
        ee(),
        x && /* @__PURE__ */ e("div", { className: "rfp-absolute -bottom-8 left-1/2 transform -translate-x-1/2 rfp-bg-gray-900 rfp-text-white rfp-text-xs rfp-px-2 rfp-py-1 rfp-rounded whitespace-nowrap rfp-shadow-lg z-30", children: l.name }),
        x && /* @__PURE__ */ n(_e, { children: [
          /* @__PURE__ */ e("div", { className: "rfp-absolute -top-1 -left-1 rfp-w-3 rfp-h-3 rfp-bg-blue-500 rfp-rounded-full rfp-border-2 border-white" }),
          /* @__PURE__ */ e("div", { className: "rfp-absolute -top-1 -right-1 rfp-w-3 rfp-h-3 rfp-bg-blue-500 rfp-rounded-full rfp-border-2 border-white" }),
          /* @__PURE__ */ e("div", { className: "rfp-absolute -bottom-1 -left-1 rfp-w-3 rfp-h-3 rfp-bg-blue-500 rfp-rounded-full rfp-border-2 border-white" }),
          /* @__PURE__ */ e("div", { className: "rfp-absolute -bottom-1 -right-1 rfp-w-3 rfp-h-3 rfp-bg-blue-500 rfp-rounded-full rfp-border-2 border-white" })
        ] })
      ]
    }
  );
}, Qt = xt, jt = ({
  floors: l,
  currentFloor: x,
  onAddFloor: f,
  onRemoveFloor: c,
  onSwitchFloor: ne,
  onRenameFloor: a,
  onAddTable: Y,
  onAddObject: ee,
  onStartWallDrawing: $,
  onAddFixedElement: V,
  onRotateTable: ke,
  onDuplicateTable: z,
  onRemoveTable: O,
  onSave: be,
  onLoad: De,
  selectedTable: se,
  selectedTableChairs: ze
}) => {
  const [ge, ue] = qe.useState(null), [w, E] = qe.useState(""), [F, ye] = qe.useState("tables"), ve = qe.useRef(null);
  qe.useEffect(() => {
    ge && ve.current && (ve.current.focus(), ve.current.select());
  }, [ge]);
  const fe = (P) => {
    ue(P.id), E(P.name);
  }, Ne = () => {
    ge && w.trim() && a(ge, w.trim()), ue(null), E("");
  }, Ae = (P) => {
    P.key === "Enter" ? Ne() : P.key === "Escape" && (ue(null), E(""));
  };
  return /* @__PURE__ */ n("div", { className: "rfp-w-80 rfp-bg-white rfp-shadow-lg rfp-border-r rfp-border-gray-200 rfp-flex rfp-flex-col", children: [
    /* @__PURE__ */ n("div", { className: "rfp-p-4 rfp-bg-gradient-to-r rfp-from-blue-600 rfp-to-purple-600 rfp-text-white", children: [
      /* @__PURE__ */ e("h1", { className: "rfp-text-xl rfp-font-bold", children: "Restaurant Designer" }),
      /* @__PURE__ */ e("p", { className: "rfp-text-blue-100 rfp-text-sm", children: "Professional Floor Planner" })
    ] }),
    /* @__PURE__ */ n("div", { className: "rfp-p-4 rfp-border-b rfp-border-gray-200", children: [
      /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-justify-between rfp-mb-4", children: [
        /* @__PURE__ */ n("h2", { className: "rfp-text-lg rfp-font-semibold rfp-text-gray-800 rfp-flex rfp-items-center rfp-gap-2", children: [
          /* @__PURE__ */ e(gt, { className: "rfp-w-5 rfp-h-5" }),
          "Floor Plans (",
          l.length,
          ")"
        ] }),
        /* @__PURE__ */ n("div", { className: "rfp-flex rfp-gap-1", children: [
          /* @__PURE__ */ e(
            "button",
            {
              onClick: f,
              className: "rfp-p-2 rfp-text-gray-600 hover:rfp-text-green-600 hover:rfp-bg-green-50 rfp-rounded-lg rfp-transition-colors",
              title: "Add New Floor",
              children: /* @__PURE__ */ e(nt, { className: "rfp-w-4 rfp-h-4" })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              onClick: c,
              disabled: l.length <= 1,
              className: "rfp-p-2 rfp-text-gray-600 hover:rfp-text-red-600 hover:rfp-bg-red-50 rfp-rounded-lg rfp-transition-colors disabled:rfp-opacity-50 disabled:rfp-cursor-not-allowed",
              title: "Remove Current Floor",
              children: /* @__PURE__ */ e(ut, { className: "rfp-w-4 rfp-h-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e("div", { className: "rfp-space-y-2 rfp-max-h-32 rfp-overflow-y-auto", children: l.map((P) => /* @__PURE__ */ n(
        "div",
        {
          className: `w-full p-3 rounded-lg transition-all flex items-center justify-between ${P.isActive ? "bg-blue-100 text-blue-800 border border-blue-200 shadow-sm" : "text-gray-600 hover:bg-gray-100 border border-transparent"}`,
          onClick: () => {
            ge !== P.id && ne(P.id);
          },
          onDoubleClick: () => fe(P),
          children: [
            /* @__PURE__ */ n("div", { className: "rfp-flex-1", children: [
              ge === P.id ? /* @__PURE__ */ e(
                "input",
                {
                  ref: ve,
                  type: "text",
                  value: w,
                  onChange: (j) => E(j.target.value),
                  onBlur: Ne,
                  onKeyDown: Ae,
                  className: "rfp-w-full rfp-px-2 rfp-py-1 rfp-text-sm rfp-font-medium rfp-bg-white rfp-border rfp-border-blue-400 rfp-rounded focus:outline-none focus:ring-2 focus:ring-blue-500",
                  onClick: (j) => j.stopPropagation()
                }
              ) : /* @__PURE__ */ e("div", { className: "rfp-font-medium rfp-cursor-pointer", children: P.name }),
              /* @__PURE__ */ n("div", { className: "rfp-text-xs rfp-text-gray-500 mt-0.5", children: [
                P.tables.length,
                " tables, ",
                P.chairs.length,
                " chairs"
              ] })
            ] }),
            P.isActive && /* @__PURE__ */ e("div", { className: "rfp-w-2 rfp-h-2 rfp-bg-blue-500 rfp-rounded-full" })
          ]
        },
        P.id
      )) })
    ] }),
    /* @__PURE__ */ e("div", { className: "rfp-border-b rfp-border-gray-200", children: /* @__PURE__ */ n("div", { className: "rfp-flex", children: [
      /* @__PURE__ */ n(
        "button",
        {
          onClick: () => ye("tables"),
          className: `flex-1 py-3 px-4 font-semibold text-sm transition-all flex items-center justify-center gap-2 ${F === "tables" ? "bg-white text-emerald-600 border-b-2 border-emerald-600" : "bg-gray-50 text-gray-600 hover:bg-gray-100"}`,
          children: [
            /* @__PURE__ */ e(Et, { className: "rfp-w-4 rfp-h-4" }),
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
            /* @__PURE__ */ e(Gt, { className: "rfp-w-4 rfp-h-4" }),
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
            /* @__PURE__ */ e(zt, { className: "rfp-w-4 rfp-h-4" }),
            "Room"
          ]
        }
      )
    ] }) }),
    F === "tables" && /* @__PURE__ */ n("div", { className: "rfp-p-4 rfp-border-b rfp-border-gray-200", children: [
      /* @__PURE__ */ e("h3", { className: "text-md rfp-font-semibold rfp-text-gray-800 rfp-mb-3", children: "Add Tables" }),
      /* @__PURE__ */ e("div", { className: "rfp-grid grid-cols-2 rfp-gap-3", children: Object.entries(Ot).map(([P, j]) => /* @__PURE__ */ n(
        "button",
        {
          onClick: () => Y(P),
          className: "rfp-p-3 rfp-border-2 rfp-border-gray-200 rfp-rounded-lg hover:border-emerald-400 hover:bg-emerald-50 rfp-transition-all rfp-flex rfp-flex-col rfp-items-center rfp-gap-2 hover:shadow-md",
          children: [
            /* @__PURE__ */ e(j, { className: "rfp-w-6 rfp-h-6 text-emerald-600" }),
            /* @__PURE__ */ e("span", { className: "rfp-text-xs rfp-text-gray-700 rfp-capitalize rfp-font-medium", children: P })
          ]
        },
        P
      )) })
    ] }),
    F === "objects" && /* @__PURE__ */ n("div", { className: "rfp-p-4 rfp-border-b rfp-border-gray-200", children: [
      /* @__PURE__ */ e("h3", { className: "text-md rfp-font-semibold rfp-text-gray-800 rfp-mb-3", children: "Add Objects" }),
      /* @__PURE__ */ e("div", { className: "rfp-space-y-3", children: Object.keys(Qe).map((P) => {
        const j = at[P], Me = wt[P], de = Qe[P];
        return /* @__PURE__ */ n(
          "button",
          {
            onClick: () => ee(P),
            className: `w-full p-4 ${Me.bg} border-2 ${Me.border} rounded-xl hover:scale-105 transition-all flex items-center gap-3 shadow-lg hover:shadow-xl`,
            children: [
              /* @__PURE__ */ e("div", { className: "bg-white/20 rfp-p-2 rfp-rounded-lg", children: /* @__PURE__ */ e(j, { className: `w-6 h-6 ${Me.text}`, strokeWidth: 2.5 }) }),
              /* @__PURE__ */ n("div", { className: "rfp-flex-1 rfp-text-left", children: [
                /* @__PURE__ */ e("span", { className: `text-base font-bold ${Me.text}`, children: de }),
                /* @__PURE__ */ e("div", { className: "rfp-text-xs text-white/80 mt-0.5", children: "Click to add to floor" })
              ] })
            ]
          },
          P
        );
      }) })
    ] }),
    F === "roomLayout" && /* @__PURE__ */ n("div", { className: "rfp-p-4 rfp-border-b rfp-border-gray-200", children: [
      /* @__PURE__ */ n("div", { className: "rfp-mb-6", children: [
        /* @__PURE__ */ e("h3", { className: "text-md rfp-font-semibold rfp-text-gray-800 rfp-mb-3", children: "Draw Walls" }),
        /* @__PURE__ */ e("div", { className: "rfp-space-y-2", children: ["wall", "door", "window"].map((P) => {
          const j = Ft[P], Me = je[P];
          return /* @__PURE__ */ n(
            "button",
            {
              onClick: () => $(P),
              className: `w-full p-3 border-2 rounded-lg transition-all flex items-center gap-3 shadow-md hover:shadow-lg ${{
                wall: "bg-gradient-to-br from-gray-600 to-gray-800 border-gray-700 text-white hover:from-gray-700 hover:to-gray-900",
                door: "bg-gradient-to-br from-amber-500 to-amber-700 border-amber-600 text-white hover:from-amber-600 hover:to-amber-800",
                window: "bg-gradient-to-br from-blue-500 to-blue-700 border-blue-600 text-white hover:from-blue-600 hover:to-blue-800"
              }[P]}`,
              children: [
                /* @__PURE__ */ e(j, { className: "rfp-w-5 rfp-h-5", strokeWidth: 2.5 }),
                /* @__PURE__ */ e("span", { className: "rfp-text-sm rfp-font-semibold", children: Me })
              ]
            },
            P
          );
        }) })
      ] }),
      /* @__PURE__ */ n("div", { children: [
        /* @__PURE__ */ e("h3", { className: "text-md rfp-font-semibold rfp-text-gray-800 rfp-mb-3", children: "Add Elements" }),
        /* @__PURE__ */ e("div", { className: "rfp-space-y-2", children: ["pillar", "column", "stairs"].map((P) => {
          const j = Zt[P], Me = _t[P], de = bt[P];
          return /* @__PURE__ */ n(
            "button",
            {
              onClick: () => V(P),
              className: `w-full p-3 ${Me.bg} border-2 ${Me.border} rounded-lg hover:scale-105 transition-all flex items-center gap-3 shadow-md hover:shadow-lg`,
              children: [
                /* @__PURE__ */ e("div", { className: "bg-white/10 p-1.5 rfp-rounded", children: /* @__PURE__ */ e(j, { className: `w-5 h-5 ${Me.text}`, strokeWidth: 2.5 }) }),
                /* @__PURE__ */ e("span", { className: `text-sm font-semibold ${Me.text}`, children: de })
              ]
            },
            P
          );
        }) })
      ] })
    ] }),
    se && /* @__PURE__ */ n("div", { className: "rfp-p-4 rfp-border-b rfp-border-gray-200", children: [
      /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-justify-between rfp-mb-3", children: [
        /* @__PURE__ */ e("h3", { className: "text-md rfp-font-semibold rfp-text-gray-800", children: "Table Properties" }),
        /* @__PURE__ */ n("div", { className: "rfp-flex rfp-gap-1", children: [
          /* @__PURE__ */ e(
            "button",
            {
              onClick: ke,
              className: "rfp-p-1 rfp-text-blue-600 hover:bg-blue-100 rfp-rounded transition-colors",
              title: "Rotate Table",
              children: /* @__PURE__ */ e(Pt, { className: "rfp-w-4 rfp-h-4" })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              onClick: z,
              className: "rfp-p-1 rfp-text-green-600 hover:bg-green-100 rfp-rounded transition-colors",
              title: "Duplicate Table",
              children: /* @__PURE__ */ e(nt, { className: "rfp-w-4 rfp-h-4" })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              onClick: O,
              className: "rfp-p-1 rfp-text-red-600 hover:bg-red-100 rfp-rounded transition-colors",
              title: "Delete Table",
              children: /* @__PURE__ */ e(Ke, { className: "rfp-w-4 rfp-h-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ n("div", { className: "rfp-space-y-3 rfp-text-sm rfp-text-gray-600", children: [
        /* @__PURE__ */ n("div", { className: "rfp-grid grid-cols-2 rfp-gap-3", children: [
          /* @__PURE__ */ n("div", { children: [
            /* @__PURE__ */ e("div", { className: "rfp-text-xs rfp-uppercase rfp-tracking-wide rfp-text-gray-400", children: "Name" }),
            /* @__PURE__ */ e("div", { className: "rfp-font-semibold rfp-text-gray-800", children: se.name })
          ] }),
          /* @__PURE__ */ n("div", { children: [
            /* @__PURE__ */ e("div", { className: "rfp-text-xs rfp-uppercase rfp-tracking-wide rfp-text-gray-400", children: "Shape" }),
            /* @__PURE__ */ e("div", { className: "rfp-font-semibold rfp-text-gray-800 rfp-capitalize", children: se.shape })
          ] }),
          /* @__PURE__ */ n("div", { children: [
            /* @__PURE__ */ e("div", { className: "rfp-text-xs rfp-uppercase rfp-tracking-wide rfp-text-gray-400", children: "Size" }),
            /* @__PURE__ */ e("div", { className: "rfp-font-semibold rfp-text-gray-800", children: Qt[se.size] })
          ] }),
          /* @__PURE__ */ n("div", { children: [
            /* @__PURE__ */ e("div", { className: "rfp-text-xs rfp-uppercase rfp-tracking-wide rfp-text-gray-400", children: "Seats" }),
            /* @__PURE__ */ e("div", { className: "rfp-font-semibold rfp-text-gray-800", children: ze.length })
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
            /* @__PURE__ */ e("div", { className: "rfp-font-bold rfp-text-lg text-emerald-600", children: (x == null ? void 0 : x.tables.length) ?? 0 })
          ] }),
          /* @__PURE__ */ n("div", { children: [
            /* @__PURE__ */ e("div", { className: "rfp-text-gray-600", children: "Total Seats" }),
            /* @__PURE__ */ e("div", { className: "rfp-font-bold rfp-text-lg text-amber-600", children: (x == null ? void 0 : x.chairs.length) ?? 0 })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ n("div", { className: "rfp-flex rfp-gap-2", children: [
        /* @__PURE__ */ n(
          "button",
          {
            onClick: be,
            className: "rfp-flex-1 rfp-bg-green-600 rfp-text-white rfp-py-3 rfp-px-4 rfp-rounded-lg hover:bg-green-700 transition-colors rfp-flex rfp-items-center rfp-justify-center rfp-gap-2 rfp-font-medium",
            children: [
              /* @__PURE__ */ e(It, { className: "rfp-w-4 rfp-h-4" }),
              "Save"
            ]
          }
        ),
        /* @__PURE__ */ n(
          "button",
          {
            onClick: De,
            className: "rfp-flex-1 rfp-bg-blue-600 rfp-text-white rfp-py-3 rfp-px-4 rfp-rounded-lg hover:bg-blue-700 transition-colors rfp-flex rfp-items-center rfp-justify-center rfp-gap-2 rfp-font-medium",
            children: [
              /* @__PURE__ */ e(Rt, { className: "rfp-w-4 rfp-h-4" }),
              "Load"
            ]
          }
        )
      ] })
    ] })
  ] });
}, ht = xt, er = ["top", "right", "bottom", "left"], tr = ["small", "medium", "large"], rr = ({
  showGrid: l,
  selectedTable: x,
  selectedObject: f,
  selectedWall: c,
  selectedFixedElement: ne,
  selectedTableChairs: a,
  onToggleGrid: Y,
  onAddChair: ee,
  onRemoveChair: $,
  onChangeTableSize: V,
  onTableNameChange: ke,
  onCustomTableSize: z,
  onObjectNameChange: O,
  onObjectResize: be,
  onRemoveObject: De,
  onRemoveWall: se,
  onRemoveFixedElement: ze,
  onChangeWallThickness: ge,
  onConvertWallType: ue,
  onFixedElementNameChange: w,
  onFixedElementResize: E,
  onChairSizeChange: F,
  onResetChairSizes: ye,
  on3DPreview: ve,
  onObjectRotate: fe,
  tableCount: Ne,
  chairCount: Ae,
  objectCount: P,
  wallCount: j,
  fixedElementCount: Me,
  selectedElementType: de
}) => {
  const ae = Le(null), r = Le(null), R = Le(null), Z = Le(null), [C, p] = J(!1), [I, h] = J(!1), [W, A] = J(!1), [G, ie] = J(!1), [_, ce] = J(!1), [U, L] = J(90), [k, T] = J(90), [y, te] = J(120), [K, Ee] = J(80), [H, M] = J(60), [g, he] = J(60);
  return Ve(() => {
    const m = (N) => {
      ae.current && !ae.current.contains(N.target) && p(!1), r.current && !r.current.contains(N.target) && h(!1), R.current && !R.current.contains(N.target) && A(!1), Z.current && !Z.current.contains(N.target) && ie(!1);
    };
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
  }, []), Ve(() => {
    x ? (L(x.width), T(x.height)) : (p(!1), h(!1), ce(!1)), f ? (te(f.width), Ee(f.height)) : A(!1), ne ? (M(ne.width), he(ne.height)) : ie(!1);
  }, [x, f, ne]), /* @__PURE__ */ e("div", { className: "rfp-bg-white rfp-border-b rfp-border-gray-200 rfp-shadow-sm min-h-[72px]", children: /* @__PURE__ */ n("div", { className: "rfp-px-4 rfp-py-3 rfp-flex rfp-items-center rfp-justify-between min-h-[72px]", children: [
    /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-gap-3 rfp-flex-wrap", children: [
      /* @__PURE__ */ n(
        "button",
        {
          onClick: Y,
          className: `px-3 py-2 rounded-lg transition-all flex items-center gap-2 text-sm font-medium ${l ? "bg-blue-500 text-white shadow-md hover:bg-blue-600" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`,
          title: l ? "Hide Grid" : "Show Grid",
          children: [
            l ? /* @__PURE__ */ e(Tt, { className: "rfp-w-4 rfp-h-4" }) : /* @__PURE__ */ e($t, { className: "rfp-w-4 rfp-h-4" }),
            /* @__PURE__ */ e("span", { children: "Grid" })
          ]
        }
      ),
      x && /* @__PURE__ */ n(_e, { children: [
        /* @__PURE__ */ e("div", { className: "w-px rfp-h-8 rfp-bg-gray-300" }),
        /* @__PURE__ */ n("div", { ref: ae, className: "rfp-relative", children: [
          /* @__PURE__ */ n(
            "button",
            {
              onClick: () => {
                p(!C), h(!1);
              },
              className: "rfp-px-3 rfp-py-2 rfp-rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 rfp-text-white rfp-shadow-md hover:shadow-lg rfp-transition-all rfp-flex rfp-items-center rfp-gap-2 rfp-text-sm rfp-font-semibold",
              children: [
                /* @__PURE__ */ e(rt, { className: "rfp-w-4 rfp-h-4" }),
                /* @__PURE__ */ e("span", { children: "Manage Chairs" }),
                /* @__PURE__ */ e("span", { className: "rfp-ml-1 px-1.5 py-0.5 bg-white/20 rfp-rounded rfp-text-xs", children: a.length })
              ]
            }
          ),
          C && /* @__PURE__ */ n("div", { className: "rfp-absolute top-full rfp-left-0 rfp-mt-2 rfp-w-72 rfp-bg-white rfp-border rfp-border-gray-200 rfp-rounded-xl shadow-2xl z-50 rfp-overflow-hidden", children: [
            /* @__PURE__ */ e("div", { className: "bg-gradient-to-r from-amber-500 to-amber-600 rfp-px-4 rfp-py-3 rfp-text-white", children: /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-justify-between", children: [
              /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-gap-2", children: [
                /* @__PURE__ */ e(rt, { className: "rfp-w-4 rfp-h-4" }),
                /* @__PURE__ */ e("span", { className: "rfp-font-semibold rfp-text-sm", children: "Chair Positions" })
              ] }),
              /* @__PURE__ */ n("span", { className: "rfp-text-xs bg-white/20 rfp-px-2 rfp-py-1 rfp-rounded", children: [
                "Total: ",
                a.length
              ] })
            ] }) }),
            /* @__PURE__ */ n("div", { className: "rfp-p-3 rfp-space-y-2", children: [
              er.map((m) => {
                const N = a.filter((b) => b.position === m).length, Se = a.find((b) => b.position === m), X = (Se == null ? void 0 : Se.size) || 40;
                return /* @__PURE__ */ n(
                  "div",
                  {
                    className: "rfp-bg-gray-50 rfp-rounded-lg rfp-px-3 rfp-py-2 rfp-border rfp-border-gray-200 hover:border-amber-300 rfp-transition-all rfp-space-y-2",
                    children: [
                      /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-justify-between", children: [
                        /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-gap-3", children: [
                          /* @__PURE__ */ e("div", { className: "rfp-w-8 rfp-h-8 bg-gradient-to-br from-gray-600 to-gray-700 rfp-rounded-md rfp-flex rfp-items-center rfp-justify-center rfp-text-white rfp-text-xs rfp-font-bold rfp-uppercase", children: m[0] }),
                          /* @__PURE__ */ n("div", { children: [
                            /* @__PURE__ */ e("div", { className: "rfp-text-sm rfp-font-medium rfp-text-gray-800 rfp-capitalize", children: m }),
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
                              onClick: () => $(m),
                              disabled: N === 0,
                              className: "rfp-w-7 rfp-h-7 rfp-rounded-md rfp-bg-red-50 rfp-text-red-600 hover:bg-red-100 disabled:opacity-30 disabled:cursor-not-allowed rfp-transition-all rfp-flex rfp-items-center rfp-justify-center",
                              title: "Remove chair",
                              children: /* @__PURE__ */ e(ut, { className: "rfp-w-4 rfp-h-4" })
                            }
                          ),
                          /* @__PURE__ */ e(
                            "button",
                            {
                              onClick: () => ee(m),
                              className: "rfp-w-7 rfp-h-7 rfp-rounded-md rfp-bg-green-50 rfp-text-green-600 hover:bg-green-100 rfp-transition-all rfp-flex rfp-items-center rfp-justify-center",
                              title: "Add chair",
                              children: /* @__PURE__ */ e(nt, { className: "rfp-w-4 rfp-h-4" })
                            }
                          )
                        ] })
                      ] }),
                      N > 0 && /* @__PURE__ */ n("div", { className: "rfp-pt-2 rfp-border-t rfp-border-gray-200", children: [
                        /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-justify-between rfp-mb-1", children: [
                          /* @__PURE__ */ e("span", { className: "rfp-text-xs rfp-font-medium rfp-text-gray-600", children: "Chair Size" }),
                          /* @__PURE__ */ n("span", { className: "rfp-text-xs rfp-font-bold text-amber-600", children: [
                            X,
                            "px"
                          ] })
                        ] }),
                        /* @__PURE__ */ e(
                          "input",
                          {
                            type: "range",
                            min: "20",
                            max: "60",
                            value: X,
                            onChange: (b) => F == null ? void 0 : F(m, parseInt(b.target.value)),
                            className: "rfp-w-full rfp-h-2 bg-gradient-to-r from-amber-200 to-amber-400 rfp-rounded-full appearance-none rfp-cursor-pointer slider-thumb",
                            style: {
                              background: `linear-gradient(to right, rgb(251, 191, 36) 0%, rgb(251, 191, 36) ${(X - 20) / 40 * 100}%, rgb(253, 230, 138) ${(X - 20) / 40 * 100}%, rgb(253, 230, 138) 100%)`
                            }
                          }
                        )
                      ] })
                    ]
                  },
                  m
                );
              }),
              /* @__PURE__ */ n(
                "button",
                {
                  onClick: () => ye == null ? void 0 : ye(),
                  className: "rfp-w-full rfp-mt-3 rfp-px-3 rfp-py-2 bg-gradient-to-r from-gray-500 to-gray-600 rfp-text-white rfp-rounded-lg hover:from-gray-600 hover:to-gray-700 rfp-transition-all rfp-flex rfp-items-center rfp-justify-center rfp-gap-2 rfp-text-sm rfp-font-medium",
                  children: [
                    /* @__PURE__ */ e(st, { className: "rfp-w-4 rfp-h-4" }),
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
                h(!I), p(!1);
              },
              className: "rfp-px-3 rfp-py-2 rfp-rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 rfp-text-white rfp-shadow-md hover:shadow-lg rfp-transition-all rfp-flex rfp-items-center rfp-gap-2 rfp-text-sm rfp-font-semibold",
              children: [
                /* @__PURE__ */ e(Ue, { className: "rfp-w-4 rfp-h-4" }),
                /* @__PURE__ */ n("span", { children: [
                  "Size: ",
                  ht[x.size]
                ] })
              ]
            }
          ),
          I && /* @__PURE__ */ n("div", { className: "rfp-absolute top-full rfp-left-0 rfp-mt-2 rfp-w-64 rfp-bg-white rfp-border rfp-border-gray-200 rfp-rounded-xl shadow-2xl z-50 rfp-overflow-hidden", children: [
            /* @__PURE__ */ e("div", { className: "bg-gradient-to-r from-emerald-500 to-emerald-600 rfp-px-4 rfp-py-2 rfp-text-white", children: /* @__PURE__ */ e("span", { className: "rfp-font-semibold rfp-text-sm", children: "Table Size" }) }),
            /* @__PURE__ */ n("div", { className: "rfp-p-3 rfp-space-y-2", children: [
              /* @__PURE__ */ e("div", { className: "rfp-flex rfp-gap-2", children: tr.map((m) => {
                const N = x.size === m;
                return /* @__PURE__ */ e(
                  "button",
                  {
                    onClick: () => {
                      V(m), ce(!1);
                    },
                    className: `flex-1 px-3 py-2 text-sm font-medium rounded-lg transition-all ${N && !_ ? "bg-emerald-500 text-white shadow-sm" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
                    children: ht[m]
                  },
                  m
                );
              }) }),
              /* @__PURE__ */ n(
                "button",
                {
                  onClick: () => ce(!_),
                  className: `w-full flex items-center justify-between px-3 py-2 rounded-lg transition-all ${_ ? "bg-purple-500 text-white shadow-sm" : "bg-gradient-to-r from-purple-100 to-purple-50 text-purple-700 hover:from-purple-200 hover:to-purple-100"}`,
                  children: [
                    /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-gap-2", children: [
                      /* @__PURE__ */ e("span", { className: "rfp-text-sm rfp-font-semibold", children: "Pro Mode" }),
                      /* @__PURE__ */ e("span", { className: "rfp-text-xs bg-white/20 px-1.5 py-0.5 rfp-rounded", children: "Custom" })
                    ] }),
                    /* @__PURE__ */ e(Lt, { className: `w-4 h-4 transition-transform ${_ ? "rotate-90" : ""}` })
                  ]
                }
              ),
              /* @__PURE__ */ e("div", { className: `overflow-hidden transition-all duration-300 ease-in-out ${_ ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`, children: /* @__PURE__ */ n("div", { className: "rfp-pt-2 rfp-space-y-3 rfp-border-t rfp-border-gray-200", children: [
                /* @__PURE__ */ n("div", { className: "rfp-space-y-1", children: [
                  /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-justify-between", children: [
                    /* @__PURE__ */ e("label", { className: "rfp-text-xs rfp-font-semibold rfp-text-gray-600 rfp-uppercase rfp-tracking-wide", children: "Width" }),
                    /* @__PURE__ */ n("span", { className: "rfp-text-xs font-mono rfp-bg-purple-100 rfp-text-purple-700 rfp-px-2 py-0.5 rfp-rounded", children: [
                      U,
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
                      value: U,
                      onChange: (m) => {
                        const N = parseInt(m.target.value);
                        L(N), z(N, k);
                      },
                      className: "rfp-w-full rfp-h-2 rfp-bg-purple-200 rfp-rounded-lg appearance-none rfp-cursor-pointer slider-thumb",
                      style: {
                        background: `linear-gradient(to right, rgb(168, 85, 247) 0%, rgb(168, 85, 247) ${(U - 40) / 160 * 100}%, rgb(233, 213, 255) ${(U - 40) / 160 * 100}%, rgb(233, 213, 255) 100%)`
                      }
                    }
                  )
                ] }),
                /* @__PURE__ */ n("div", { className: "rfp-space-y-1", children: [
                  /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-justify-between", children: [
                    /* @__PURE__ */ e("label", { className: "rfp-text-xs rfp-font-semibold rfp-text-gray-600 rfp-uppercase rfp-tracking-wide", children: "Height" }),
                    /* @__PURE__ */ n("span", { className: "rfp-text-xs font-mono rfp-bg-purple-100 rfp-text-purple-700 rfp-px-2 py-0.5 rfp-rounded", children: [
                      k,
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
                      value: k,
                      onChange: (m) => {
                        const N = parseInt(m.target.value);
                        T(N), z(U, N);
                      },
                      className: "rfp-w-full rfp-h-2 rfp-bg-purple-200 rfp-rounded-lg appearance-none rfp-cursor-pointer slider-thumb",
                      style: {
                        background: `linear-gradient(to right, rgb(168, 85, 247) 0%, rgb(168, 85, 247) ${(k - 40) / 160 * 100}%, rgb(233, 213, 255) ${(k - 40) / 160 * 100}%, rgb(233, 213, 255) 100%)`
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
              value: x.name,
              onChange: (m) => ke(m.target.value),
              className: "rfp-bg-transparent rfp-text-sm rfp-text-gray-800 rfp-font-medium focus:outline-none rfp-w-32",
              placeholder: "Table name"
            }
          )
        ] })
      ] }),
      f && /* @__PURE__ */ n(_e, { children: [
        /* @__PURE__ */ e("div", { className: "w-px rfp-h-8 rfp-bg-gray-300" }),
        /* @__PURE__ */ n("div", { ref: R, className: "rfp-relative", children: [
          /* @__PURE__ */ n(
            "button",
            {
              onClick: () => A(!W),
              className: `px-3 py-2 rounded-lg ${f.type === "bar" ? "bg-gradient-to-r from-purple-500 to-purple-600" : f.type === "kitchen" ? "bg-gradient-to-r from-orange-500 to-orange-600" : "bg-gradient-to-r from-cyan-500 to-cyan-600"} text-white shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm font-semibold`,
              children: [
                (() => {
                  const m = at[f.type];
                  return /* @__PURE__ */ e(m, { className: "rfp-w-4 rfp-h-4" });
                })(),
                /* @__PURE__ */ n("span", { children: [
                  "Resize ",
                  Qe[f.type]
                ] })
              ]
            }
          ),
          W && /* @__PURE__ */ n("div", { className: "rfp-absolute top-full rfp-left-0 rfp-mt-2 rfp-w-64 rfp-bg-white rfp-border rfp-border-gray-200 rfp-rounded-xl shadow-2xl z-50 rfp-overflow-hidden", children: [
            /* @__PURE__ */ e("div", { className: `${f.type === "bar" ? "bg-gradient-to-r from-purple-500 to-purple-600" : f.type === "kitchen" ? "bg-gradient-to-r from-orange-500 to-orange-600" : "bg-gradient-to-r from-cyan-500 to-cyan-600"} px-4 py-2 text-white`, children: /* @__PURE__ */ e("span", { className: "rfp-font-semibold rfp-text-sm", children: "Custom Size" }) }),
            /* @__PURE__ */ n("div", { className: "rfp-p-3 rfp-space-y-3", children: [
              /* @__PURE__ */ n("div", { className: "rfp-space-y-1", children: [
                /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-justify-between", children: [
                  /* @__PURE__ */ e("label", { className: "rfp-text-xs rfp-font-semibold rfp-text-gray-600 rfp-uppercase rfp-tracking-wide", children: "Width" }),
                  /* @__PURE__ */ n("span", { className: `text-xs font-mono px-2 py-0.5 rounded ${f.type === "bar" ? "bg-purple-100 text-purple-700" : f.type === "kitchen" ? "bg-orange-100 text-orange-700" : "bg-cyan-100 text-cyan-700"}`, children: [
                    y,
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
                    value: y,
                    onChange: (m) => {
                      const N = parseInt(m.target.value);
                      te(N), be(N, K);
                    },
                    className: "rfp-w-full rfp-h-2 rfp-bg-gray-200 rfp-rounded-lg appearance-none rfp-cursor-pointer slider-thumb",
                    style: {
                      background: `linear-gradient(to right, ${f.type === "bar" ? "rgb(168, 85, 247)" : f.type === "kitchen" ? "rgb(249, 115, 22)" : "rgb(6, 182, 212)"} 0%, ${f.type === "bar" ? "rgb(168, 85, 247)" : f.type === "kitchen" ? "rgb(249, 115, 22)" : "rgb(6, 182, 212)"} ${(y - 60) / 940 * 100}%, rgb(229, 231, 235) ${(y - 60) / 940 * 100}%, rgb(229, 231, 235) 100%)`
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ n("div", { className: "rfp-space-y-1", children: [
                /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-justify-between", children: [
                  /* @__PURE__ */ e("label", { className: "rfp-text-xs rfp-font-semibold rfp-text-gray-600 rfp-uppercase rfp-tracking-wide", children: "Height" }),
                  /* @__PURE__ */ n("span", { className: `text-xs font-mono px-2 py-0.5 rounded ${f.type === "bar" ? "bg-purple-100 text-purple-700" : f.type === "kitchen" ? "bg-orange-100 text-orange-700" : "bg-cyan-100 text-cyan-700"}`, children: [
                    K,
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
                    value: K,
                    onChange: (m) => {
                      const N = parseInt(m.target.value);
                      Ee(N), be(y, N);
                    },
                    className: "rfp-w-full rfp-h-2 rfp-bg-gray-200 rfp-rounded-lg appearance-none rfp-cursor-pointer slider-thumb",
                    style: {
                      background: `linear-gradient(to right, ${f.type === "bar" ? "rgb(168, 85, 247)" : f.type === "kitchen" ? "rgb(249, 115, 22)" : "rgb(6, 182, 212)"} 0%, ${f.type === "bar" ? "rgb(168, 85, 247)" : f.type === "kitchen" ? "rgb(249, 115, 22)" : "rgb(6, 182, 212)"} ${(K - 60) / 940 * 100}%, rgb(229, 231, 235) ${(K - 60) / 940 * 100}%, rgb(229, 231, 235) 100%)`
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
              const m = ((f.rotation || 0) + 90) % 360;
              fe == null || fe(m);
            },
            className: `px-3 py-2 rounded-lg ${f.type === "bar" ? "bg-gradient-to-r from-purple-600 to-purple-700" : f.type === "kitchen" ? "bg-gradient-to-r from-orange-600 to-orange-700" : "bg-gradient-to-r from-cyan-600 to-cyan-700"} text-white shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm font-semibold`,
            title: "Rotate 90°",
            children: [
              /* @__PURE__ */ e(st, { className: "rfp-w-4 rfp-h-4" }),
              /* @__PURE__ */ e("span", { children: "Rotate" })
            ]
          }
        ),
        /* @__PURE__ */ n(
          "button",
          {
            onClick: De,
            className: "rfp-px-3 rfp-py-2 rfp-rounded-lg rfp-bg-red-500 hover:bg-red-600 rfp-text-white rfp-shadow-md hover:shadow-lg rfp-transition-all rfp-flex rfp-items-center rfp-gap-2 rfp-text-sm rfp-font-semibold",
            title: "Delete Object",
            children: [
              /* @__PURE__ */ e(Ke, { className: "rfp-w-4 rfp-h-4" }),
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
              onChange: (m) => O(m.target.value),
              className: "rfp-bg-transparent rfp-text-sm rfp-text-gray-800 rfp-font-medium focus:outline-none rfp-w-32",
              placeholder: "Object name"
            }
          )
        ] })
      ] }),
      c && /* @__PURE__ */ n(_e, { children: [
        /* @__PURE__ */ e("div", { className: "w-px rfp-h-8 rfp-bg-gray-300" }),
        ue && /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-gap-1 rfp-bg-gray-50 rfp-border rfp-border-gray-300 rfp-rounded-lg rfp-p-1", children: [
          /* @__PURE__ */ e(
            "button",
            {
              onClick: () => ue("wall"),
              className: `px-3 py-1.5 rounded text-xs font-semibold transition-all ${c.type === "wall" ? "bg-gray-600 text-white shadow-md" : "text-gray-600 hover:bg-gray-200"}`,
              title: "Convert to Wall",
              children: "Wall"
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              onClick: () => ue("door"),
              className: `px-3 py-1.5 rounded text-xs font-semibold transition-all ${c.type === "door" ? "bg-amber-600 text-white shadow-md" : "text-gray-600 hover:bg-gray-200"}`,
              title: "Convert to Door",
              children: "Door"
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              onClick: () => ue("window"),
              className: `px-3 py-1.5 rounded text-xs font-semibold transition-all ${c.type === "window" ? "bg-blue-600 text-white shadow-md" : "text-gray-600 hover:bg-gray-200"}`,
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
              value: c.thickness,
              onChange: (m) => ge(Number(m.target.value)),
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
          /* @__PURE__ */ e("span", { className: "rfp-text-xs rfp-font-semibold rfp-uppercase rfp-tracking-wide rfp-text-gray-500", children: je[c.type] }),
          /* @__PURE__ */ n("span", { className: "rfp-text-sm rfp-text-gray-600", children: [
            Math.round(Math.sqrt(
              Math.pow(c.endX - c.startX, 2) + Math.pow(c.endY - c.startY, 2)
            )),
            "px"
          ] })
        ] }),
        /* @__PURE__ */ n(
          "button",
          {
            onClick: se,
            className: "rfp-px-3 rfp-py-2 rfp-rounded-lg rfp-bg-red-500 hover:bg-red-600 rfp-text-white rfp-shadow-md hover:shadow-lg rfp-transition-all rfp-flex rfp-items-center rfp-gap-2 rfp-text-sm rfp-font-semibold",
            title: "Delete Wall",
            children: [
              /* @__PURE__ */ e(Ke, { className: "rfp-w-4 rfp-h-4" }),
              /* @__PURE__ */ e("span", { children: "Delete" })
            ]
          }
        )
      ] }),
      ne && /* @__PURE__ */ n(_e, { children: [
        /* @__PURE__ */ e("div", { className: "w-px rfp-h-8 rfp-bg-gray-300" }),
        /* @__PURE__ */ e("div", { className: "rfp-flex rfp-items-center rfp-gap-2 rfp-bg-gray-50 rfp-border rfp-border-gray-300 rfp-rounded-lg rfp-px-3 rfp-py-2", children: /* @__PURE__ */ e("span", { className: "rfp-text-xs rfp-font-semibold rfp-uppercase rfp-tracking-wide rfp-text-gray-500", children: bt[ne.type] }) }),
        E && /* @__PURE__ */ n("div", { ref: Z, className: "rfp-relative", children: [
          /* @__PURE__ */ n(
            "button",
            {
              onClick: () => ie(!G),
              className: "rfp-px-3 rfp-py-2 rfp-rounded-lg rfp-bg-gray-600 hover:bg-gray-700 rfp-text-white rfp-shadow-md hover:shadow-lg rfp-transition-all rfp-flex rfp-items-center rfp-gap-2 rfp-text-sm rfp-font-semibold",
              children: [
                /* @__PURE__ */ e(Ue, { className: "rfp-w-4 rfp-h-4" }),
                /* @__PURE__ */ e("span", { children: "Resize" })
              ]
            }
          ),
          G && /* @__PURE__ */ e("div", { className: "rfp-absolute top-full rfp-left-0 rfp-mt-2 rfp-bg-white rfp-rounded-xl shadow-2xl rfp-border rfp-border-gray-200 rfp-p-4 z-50 min-w-[320px]", children: /* @__PURE__ */ n("div", { className: "rfp-space-y-4", children: [
            /* @__PURE__ */ n("div", { children: [
              /* @__PURE__ */ n("div", { className: "rfp-flex rfp-justify-between rfp-items-center rfp-mb-2", children: [
                /* @__PURE__ */ e("label", { className: "rfp-text-sm rfp-font-semibold rfp-text-gray-700", children: "Width" }),
                /* @__PURE__ */ n("span", { className: "rfp-text-sm rfp-font-bold rfp-text-blue-600", children: [
                  H,
                  "px"
                ] })
              ] }),
              /* @__PURE__ */ e(
                "input",
                {
                  type: "range",
                  min: "30",
                  max: "200",
                  value: H,
                  onChange: (m) => {
                    const N = parseInt(m.target.value);
                    M(N), E(N, g);
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
                  g,
                  "px"
                ] })
              ] }),
              /* @__PURE__ */ e(
                "input",
                {
                  type: "range",
                  min: "30",
                  max: "200",
                  value: g,
                  onChange: (m) => {
                    const N = parseInt(m.target.value);
                    he(N), E(H, N);
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
                H,
                " × ",
                g,
                "px"
              ] })
            ] }) })
          ] }) })
        ] }),
        /* @__PURE__ */ n(
          "button",
          {
            onClick: ze,
            className: "rfp-px-3 rfp-py-2 rfp-rounded-lg rfp-bg-red-500 hover:bg-red-600 rfp-text-white rfp-shadow-md hover:shadow-lg rfp-transition-all rfp-flex rfp-items-center rfp-gap-2 rfp-text-sm rfp-font-semibold",
            title: "Delete Element",
            children: [
              /* @__PURE__ */ e(Ke, { className: "rfp-w-4 rfp-h-4" }),
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
          onClick: ve,
          className: "rfp-px-4 rfp-py-2 bg-gradient-to-r from-purple-600 to-blue-600 rfp-text-white rfp-rounded-lg hover:shadow-lg rfp-transition-all rfp-flex rfp-items-center rfp-gap-2 rfp-font-semibold rfp-text-sm",
          children: [
            /* @__PURE__ */ e(Wt, { className: "rfp-w-4 rfp-h-4" }),
            "3D"
          ]
        }
      ),
      /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center gap-1.5 rfp-px-2 rfp-py-1 bg-emerald-50 rfp-rounded rfp-text-xs", children: [
        /* @__PURE__ */ e("div", { className: "rfp-w-2 rfp-h-2 bg-emerald-600 rfp-rounded-full" }),
        /* @__PURE__ */ n("span", { className: "rfp-font-medium text-emerald-800", children: [
          "Tables: ",
          Ne
        ] })
      ] }),
      /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center gap-1.5 rfp-px-2 rfp-py-1 bg-amber-50 rfp-rounded rfp-text-xs", children: [
        /* @__PURE__ */ e("div", { className: "rfp-w-2 rfp-h-2 bg-amber-600 rfp-rounded-full" }),
        /* @__PURE__ */ n("span", { className: "rfp-font-medium text-amber-800", children: [
          "Chairs: ",
          Ae
        ] })
      ] }),
      /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center gap-1.5 rfp-px-2 rfp-py-1 rfp-bg-purple-50 rfp-rounded rfp-text-xs", children: [
        /* @__PURE__ */ e("div", { className: "rfp-w-2 rfp-h-2 rfp-bg-purple-600 rfp-rounded-full" }),
        /* @__PURE__ */ n("span", { className: "rfp-font-medium rfp-text-purple-800", children: [
          "Objects: ",
          P
        ] })
      ] }),
      de && /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center gap-1.5 rfp-px-2 rfp-py-1 rfp-bg-blue-50 rfp-rounded rfp-text-xs", children: [
        /* @__PURE__ */ e("div", { className: "w-1.5 h-1.5 rfp-bg-blue-600 rfp-rounded-full rfp-animate-pulse" }),
        /* @__PURE__ */ n("span", { className: "rfp-font-medium rfp-text-blue-800 rfp-capitalize", children: [
          "Selected: ",
          de
        ] })
      ] })
    ] })
  ] }) });
}, mt = {
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
}, nr = ({ floor: l, isOpen: x, onClose: f }) => {
  const c = Le(null), ne = Le(null), a = Le(null), Y = Le(null), ee = Le(null), [$, V] = J(!1), [ke, z] = J("default"), [O, be] = J(!1), De = Le(3e-3), se = Le(null), ze = (w) => {
    if (!a.current || O)
      return;
    const E = mt[w], F = a.current;
    se.current = {
      startPos: F.position.clone(),
      endPos: new t.Vector3(E.position.x, E.position.y, E.position.z),
      startTarget: new t.Vector3(0, 100, 0),
      endTarget: new t.Vector3(E.target.x, E.target.y, E.target.z),
      progress: 0
    }, be(!0), z(w), V(!1);
  }, ge = (w) => {
    if (!a.current || O)
      return;
    const E = a.current, F = Math.sqrt(E.position.x ** 2 + E.position.z ** 2), ye = Math.atan2(E.position.z, E.position.x);
    switch (w) {
      case "left":
        const ve = ye + 0.2;
        E.position.x = F * Math.cos(ve), E.position.z = F * Math.sin(ve);
        break;
      case "right":
        const fe = ye - 0.2;
        E.position.x = F * Math.cos(fe), E.position.z = F * Math.sin(fe);
        break;
      case "up":
        E.position.y = Math.min(E.position.y + 50, 900);
        break;
      case "down":
        E.position.y = Math.max(E.position.y - 50, 100);
        break;
    }
    E.lookAt(0, 100, 0);
  }, ue = (w) => {
    !a.current || O || (a.current.position.multiplyScalar(w), a.current.lookAt(0, 100, 0));
  };
  return Ve(() => {
    if (!x || !c.current)
      return;
    const w = new t.Scene();
    w.background = new t.Color(14608111), ne.current = w;
    const E = new t.PerspectiveCamera(
      45,
      c.current.clientWidth / c.current.clientHeight,
      0.1,
      1e4
    );
    E.position.set(1050, 800, 1050), E.lookAt(0, 100, 0), a.current = E;
    const F = new t.WebGLRenderer({ antialias: !0, alpha: !0 });
    F.setSize(c.current.clientWidth, c.current.clientHeight), F.shadowMap.enabled = !0, F.shadowMap.type = t.PCFSoftShadowMap, F.toneMapping = t.ACESFilmicToneMapping, F.toneMappingExposure = 1.2, c.current.appendChild(F.domElement), Y.current = F;
    const ye = new t.PMREMGenerator(F), ve = new t.Scene();
    ve.background = new t.Color(16777215);
    const fe = ye.fromScene(ve).texture;
    w.environment = fe, ye.dispose(), w.add(new t.AmbientLight(16777215, 0.6));
    const Ne = new t.DirectionalLight(16777215, 0.8);
    Ne.position.set(400, 600, 300), Ne.castShadow = !0, Ne.shadow.mapSize.width = 4096, Ne.shadow.mapSize.height = 4096, Ne.shadow.camera.left = Ne.shadow.camera.bottom = -700, Ne.shadow.camera.right = Ne.shadow.camera.top = 700, Ne.shadow.bias = -1e-4, w.add(Ne);
    const Ae = new t.DirectionalLight(16777215, 0.3);
    Ae.position.set(-400, 400, -300), w.add(Ae);
    const P = new t.DirectionalLight(16777215, 0.2);
    P.position.set(0, 300, -500), w.add(P);
    const j = new t.Mesh(
      new t.PlaneGeometry(1200, 1200),
      new t.MeshStandardMaterial({ color: 13684949, roughness: 0.8, metalness: 0.2 })
      // Medium grey
    );
    j.rotation.x = -Math.PI / 2, j.receiveShadow = !0, w.add(j);
    const Me = new t.GridHelper(3e3, 150, 10526888, 12105920);
    Me.position.y = 1, w.add(Me), l.walls.forEach((r) => {
      const R = Math.sqrt(Math.pow(r.endX - r.startX, 2) + Math.pow(r.endY - r.startY, 2)), Z = Math.atan2(r.endY - r.startY, r.endX - r.startX), C = r.type === "window" ? 80 : 120, p = r.startX + (r.endX - r.startX) / 2 - 400, I = -(r.startY + (r.endY - r.startY) / 2 - 400);
      if (r.type === "door") {
        const h = new t.Group(), W = R, A = C, G = r.thickness * 0.8, ie = new t.MeshStandardMaterial({
          color: 3812901,
          // dark stained wood
          roughness: 0.9,
          metalness: 0
        }), _ = 8, ce = new t.Mesh(
          new t.BoxGeometry(W, _, r.thickness + 4),
          ie
        );
        ce.position.y = A / 2 - _ / 2, h.add(ce);
        const U = new t.Mesh(
          new t.BoxGeometry(W, _, r.thickness + 4),
          ie
        );
        U.position.y = -A / 2 + _ / 2, h.add(U);
        const L = new t.Mesh(
          new t.BoxGeometry(_, A, r.thickness + 4),
          ie
        );
        L.position.x = -W / 2 + _ / 2, h.add(L);
        const k = L.clone();
        k.position.x = W / 2 - _ / 2, h.add(k);
        const T = new t.MeshStandardMaterial({
          color: 5125166,
          // warm brown
          roughness: 0.85,
          metalness: 0
        }), y = new t.MeshStandardMaterial({
          color: 10400693,
          // subtle bluish-gray tint
          transparent: !0,
          opacity: 0.5,
          // semi-transparent
          roughness: 0.95,
          // frosted effect
          metalness: 0
          // no mirror reflection
        }), te = (W - _ * 2 - 4) / 2, K = A - _ * 2 - 4, Ee = (Pe) => {
          const Ge = new t.Group(), oe = new t.Mesh(
            new t.BoxGeometry(te, K, G),
            T
          );
          Ge.add(oe);
          const le = new t.Mesh(
            new t.PlaneGeometry(te * 0.8, K * 0.85),
            y
          );
          le.position.set(0, 0, G / 2 + 0.1), Ge.add(le);
          const Fe = new t.MeshStandardMaterial({
            color: 8947848,
            metalness: 0.4,
            roughness: 0.7
          }), u = new t.Mesh(
            new t.CylinderGeometry(0.6, 0.6, 12, 12),
            Fe
          );
          return u.rotation.z = Math.PI / 2, u.position.set(Pe > 0 ? -te * 0.35 : te * 0.35, 0, G / 2 + 1.5), Ge.add(u), Ge.position.x = Pe, Ge;
        }, H = Ee(-te / 2), M = Ee(te / 2);
        h.add(H), h.add(M);
        const g = 14, he = new t.PlaneGeometry(W * 0.9, g), m = document.createElement("canvas");
        m.width = 512, m.height = 128;
        const N = m.getContext("2d");
        N && (N.fillStyle = "#3a2e25", N.fillRect(0, 0, m.width, m.height), N.font = "bold 60px Arial", N.fillStyle = "#f5d590", N.textAlign = "center", N.textBaseline = "middle", N.fillText("WELCOME", m.width / 2, m.height / 2));
        const Se = new t.CanvasTexture(m), X = new t.MeshStandardMaterial({
          map: Se,
          roughness: 0.8,
          metalness: 0.1
        }), b = new t.Mesh(he, X);
        b.position.set(0, A / 2 - _ - g / 2 - 4, r.thickness / 2 + 2), h.add(b), h.position.set(p, A / 2, I), h.rotation.y = -Z, h.castShadow = !0, h.receiveShadow = !0, w.add(h);
      } else if (r.type === "window") {
        const h = R > 20 ? R : 120, W = C, A = W * 0.45, G = W * 0.65, ie = W * 0.1, _ = W * 0.3, ce = new t.MeshStandardMaterial({
          color: 13158608,
          // Grey-blue for window sills and wall sections
          roughness: 0.85,
          metalness: 0.05
        }), U = new t.MeshPhysicalMaterial({
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
        }), k = new t.Mesh(
          new t.BoxGeometry(h, A, r.thickness),
          ce
        );
        k.position.set(p, A / 2, I), k.rotation.y = -Z, k.receiveShadow = !0, k.castShadow = !0, w.add(k);
        const T = A + G / 2, y = 4, te = Math.max(2, Math.floor(h / 80)), K = (h - y * (te + 1)) / te;
        for (let m = 0; m < te; m++) {
          const N = -h / 2 + y + K / 2 + m * (K + y), Se = p + N * Math.cos(-Z), X = I + N * Math.sin(-Z), b = new t.Mesh(
            new t.BoxGeometry(K - 2, G - y * 2, 1),
            L
          );
          if (b.position.set(Se, T, X), b.rotation.y = -Z, b.castShadow = !1, b.receiveShadow = !1, w.add(b), m < te - 1) {
            const Pe = -h / 2 + y + (m + 1) * K + (m + 0.5) * y, Ge = p + Pe * Math.cos(-Z), oe = I + Pe * Math.sin(-Z), le = new t.Mesh(
              new t.BoxGeometry(y, G, r.thickness + 3),
              U
            );
            le.position.set(Ge, T, oe), le.rotation.y = -Z, le.castShadow = !0, w.add(le);
          }
        }
        const Ee = A + G + ie / 2, H = new t.Mesh(
          new t.BoxGeometry(h - y * 2, ie - y, 1),
          L
        );
        H.position.set(p, Ee, I), H.rotation.y = -Z, H.castShadow = !1, w.add(H);
        const M = new t.Mesh(
          new t.BoxGeometry(h, y, r.thickness + 2),
          U
        );
        M.position.set(p, A + G + y / 2, I), M.rotation.y = -Z, M.castShadow = !0, w.add(M);
        const g = new t.Mesh(
          new t.BoxGeometry(h, y, r.thickness + 2),
          U
        );
        g.position.set(p, A + G + ie + y / 2, I), g.rotation.y = -Z, g.castShadow = !0, w.add(g);
        const he = new t.Mesh(
          new t.BoxGeometry(h, _, r.thickness),
          ce
        );
        he.position.set(p, A + G + ie + _ / 2, I), he.rotation.y = -Z, he.castShadow = !0, he.receiveShadow = !0, w.add(he);
      } else {
        const h = new t.Mesh(
          new t.BoxGeometry(R, C, r.thickness),
          new t.MeshStandardMaterial({ color: 12105920, roughness: 0.9, metalness: 0.05 })
        );
        h.position.set(p, C / 2, I), h.rotation.y = -Z, h.castShadow = !0, h.receiveShadow = !0, w.add(h);
      }
    }), l.fixedElements.forEach((r) => {
      const R = r.x - 400 + r.width / 2, Z = -(r.y - 400 + r.height / 2);
      if (r.type === "pillar") {
        const C = Math.min(r.width, r.height) / 2, p = new t.Mesh(
          new t.CylinderGeometry(C, C * 1.1, 140, 32),
          new t.MeshStandardMaterial({ color: 4868698, roughness: 0.6, metalness: 0.4 })
        );
        p.position.set(R, 70, Z), p.castShadow = !0, w.add(p);
        const I = new t.Mesh(
          new t.CylinderGeometry(C * 1.3, C * 1.1, 10, 32),
          new t.MeshStandardMaterial({ color: 5921386, roughness: 0.5, metalness: 0.5 })
        );
        I.position.set(R, 135, Z), I.castShadow = !0, w.add(I);
        const h = new t.Mesh(
          new t.CylinderGeometry(C * 1.2, C * 1.3, 10, 32),
          new t.MeshStandardMaterial({ color: 5921386, roughness: 0.5, metalness: 0.5 })
        );
        h.position.set(R, 5, Z), h.castShadow = !0, w.add(h);
      } else if (r.type === "column") {
        const C = new t.Mesh(
          new t.BoxGeometry(r.width, 140, r.height),
          new t.MeshStandardMaterial({ color: 3816010, roughness: 0.7, metalness: 0.3 })
        );
        C.position.set(R, 70, Z), C.castShadow = !0, w.add(C);
        const p = new t.LineSegments(
          new t.EdgesGeometry(C.geometry),
          new t.LineBasicMaterial({ color: 6974074 })
        );
        p.position.copy(C.position), w.add(p);
      } else {
        const I = r.height / 8;
        for (let h = 0; h < 8; h++) {
          const W = new t.Mesh(
            new t.BoxGeometry(r.width, 6.25, I * (8 - h)),
            new t.MeshStandardMaterial({ color: 6636321, roughness: 0.8 })
          );
          W.position.set(R, 6.25 / 2 + h * 6.25, Z + h * I / 2), W.castShadow = !0, w.add(W);
          const A = new t.LineSegments(
            new t.EdgesGeometry(W.geometry),
            new t.LineBasicMaterial({ color: 3810320 })
          );
          A.position.copy(W.position), w.add(A);
        }
      }
    }), l.objects.forEach((r) => {
      const R = r.x - 400 + r.width / 2, Z = -(r.y - 400 + r.height / 2), C = -(r.rotation * Math.PI / 180);
      if (r.type === "bar") {
        const p = r.x - 400 + r.width / 2, I = -(r.y - 400 + r.height / 2), h = -(r.rotation * Math.PI / 180), W = 50, A = new t.MeshPhysicalMaterial({
          color: 1710618,
          roughness: 0.5,
          metalness: 0.8,
          clearcoat: 0.2,
          clearcoatRoughness: 0.4
        }), G = new t.Mesh(
          new t.BoxGeometry(r.width, W, r.height),
          A
        );
        G.position.set(p, W / 2, I), G.rotation.y = h, G.castShadow = !0, G.receiveShadow = !0, w.add(G);
        const ie = [8323072, 10770944, 6691328, 9109504, 8930304], _ = ie[Math.floor(Math.random() * ie.length)], ce = new t.MeshPhysicalMaterial({
          color: _,
          metalness: 0.1,
          roughness: 0.05,
          transmission: 0.9,
          // transparency
          thickness: 2,
          ior: 1.5,
          reflectivity: 0.9,
          clearcoat: 1,
          clearcoatRoughness: 0.05
        }), U = new t.Mesh(
          new t.BoxGeometry(r.width + 6, 6, r.height + 6),
          ce
        );
        U.position.set(p, W + 3, I), U.rotation.y = h, U.castShadow = !0, w.add(U);
        const L = new t.MeshStandardMaterial({
          emissive: 16711799,
          // pinkish-red glow
          emissiveIntensity: 0.6,
          color: 0
        }), k = new t.Mesh(
          new t.BoxGeometry(r.width + 6, 0.5, r.height + 6),
          L
        );
        k.position.set(p, W + 1, I), k.rotation.y = h, w.add(k);
        const T = _ === 8323072 ? 13938487 : 11579568, y = new t.Mesh(
          new t.BoxGeometry(r.width + 8, 0.6, r.height + 8),
          new t.MeshStandardMaterial({
            color: T,
            metalness: 1,
            roughness: 0.2
          })
        );
        y.position.set(p, W + 6.5, I), y.rotation.y = h, w.add(y);
        const te = new t.MeshStandardMaterial({
          color: 13421772,
          metalness: 1,
          roughness: 0.1
        }), K = new t.CylinderGeometry(2, 2, W, 16);
        [
          [r.width / 2 - 6, r.height / 2 - 6],
          [-r.width / 2 + 6, r.height / 2 - 6],
          [r.width / 2 - 6, -r.height / 2 + 6],
          [-r.width / 2 + 6, -r.height / 2 + 6]
        ].forEach(([me, Ce]) => {
          const we = new t.Mesh(K, te);
          we.position.set(
            p + me * Math.cos(h) - Ce * Math.sin(h),
            W / 2,
            I + me * Math.sin(h) + Ce * Math.cos(h)
          ), we.castShadow = !0, w.add(we);
        });
        const H = new t.PointLight(_, 0.4, 600);
        H.position.set(p, W + 70, I), w.add(H);
        const M = 120, g = new t.Group(), he = new t.MeshPhysicalMaterial({
          color: 2105376,
          metalness: 1,
          roughness: 0.25,
          clearcoat: 0.6,
          clearcoatRoughness: 0.1
        }), m = new t.Mesh(
          new t.BoxGeometry(r.width + 40, 10, r.height + 40),
          he
        );
        m.castShadow = !0, m.receiveShadow = !0, g.add(m);
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
        }), Se = new t.Mesh(
          new t.PlaneGeometry(r.width + 32, r.height + 32),
          N
        );
        Se.rotation.x = -Math.PI / 2, Se.position.y = -3, g.add(Se);
        const X = new t.MeshStandardMaterial({
          emissive: 16764040,
          emissiveIntensity: 1.6,
          color: 0
        }), b = new t.BoxGeometry(4, 2, r.height + 36), Pe = new t.Mesh(b, X), Ge = Pe.clone();
        Pe.position.set(-(r.width + 36) / 2, -2, 0), Ge.position.set((r.width + 36) / 2, -2, 0), g.add(Pe, Ge);
        const oe = new t.Group(), le = [11674146, 14919767, 9127187, 27028, 7810842];
        for (let me = -3; me <= 3; me++) {
          const Ce = le[Math.floor(Math.random() * le.length)], we = new t.MeshPhysicalMaterial({
            color: Ce,
            roughness: 0.1,
            transmission: 0.95,
            thickness: 0.6,
            ior: 1.5,
            clearcoat: 0.3,
            clearcoatRoughness: 0.2
          }), Ye = new t.Mesh(
            new t.CylinderGeometry(3, 3, 20, 32),
            we
          );
          Ye.position.set(me * 12, -12, 0), oe.add(Ye);
          const s = new t.Mesh(
            new t.CylinderGeometry(1.2, 1.2, 6, 16),
            we
          );
          s.position.set(me * 12, -3, 0), oe.add(s);
        }
        oe.position.y = -15, g.add(oe);
        const Fe = new t.MeshPhysicalMaterial({
          color: 16777215,
          roughness: 0.1,
          transmission: 0.9,
          thickness: 0.4,
          ior: 1.45
        });
        for (let me = -2; me <= 2; me++) {
          const Ce = new t.Mesh(
            new t.SphereGeometry(2.5, 16, 16, 0, Math.PI),
            // half-sphere
            Fe
          );
          Ce.position.set(me * 10, -25, 0), Ce.scale.y = 0.6, g.add(Ce);
        }
        const u = new t.MeshStandardMaterial({
          color: 11184810,
          metalness: 1,
          roughness: 0.2
        }), xe = new t.CylinderGeometry(1.5, 1.5, M - 60, 16);
        [
          [r.width / 2 - 10, r.height / 2 - 10],
          [-r.width / 2 + 10, r.height / 2 - 10],
          [r.width / 2 - 10, -r.height / 2 + 10],
          [-r.width / 2 + 10, -r.height / 2 + 10]
        ].forEach(([me, Ce]) => {
          const we = new t.Mesh(xe, u);
          we.position.set(me, -(M - 80) / 2, Ce), we.rotation.x = Math.PI / 2, g.add(we);
        }), g.position.set(p, M, I), g.rotation.y = h, w.add(g);
        const He = new t.PointLight(16755285, 0.8, 600);
        He.position.set(p, M - 20, I), w.add(He);
      } else if (r.type === "kitchen") {
        const p = new t.Group(), I = new t.MeshPhysicalMaterial({
          color: 11579568,
          metalness: 1,
          roughness: 0.25,
          envMapIntensity: 1,
          clearcoat: 1,
          clearcoatRoughness: 0.05
        }), h = new t.MeshPhysicalMaterial({
          color: 10079487,
          roughness: 0.05,
          transmission: 0.9,
          thickness: 0.5,
          metalness: 0.1,
          envMapIntensity: 1.2
        }), W = new t.Mesh(
          new t.BoxGeometry(r.width, 50, r.height),
          I
        );
        W.position.set(0, 25, 0), W.castShadow = !0, W.receiveShadow = !0, p.add(W);
        const A = new t.Mesh(
          new t.BoxGeometry(r.width, 4, r.height),
          h
        );
        A.position.set(0, 52, 0), p.add(A);
        const G = new t.Mesh(
          new t.BoxGeometry(r.width * 0.4, 10, r.height * 0.6),
          new t.MeshStandardMaterial({ color: 2236962, roughness: 0.4 })
        );
        G.position.set(-r.width * 0.2, 55, 0), p.add(G);
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
        ].forEach(([H, M]) => {
          const g = new t.Mesh(
            new t.CylinderGeometry(6, 6, 2, 32),
            ie
          );
          g.rotation.x = Math.PI / 2, g.position.set(H, 61, M), p.add(g);
        });
        const ce = new t.Mesh(
          new t.BoxGeometry(r.width * 0.5, 35, r.height * 0.65),
          new t.MeshPhysicalMaterial({
            color: 12632256,
            metalness: 1,
            roughness: 0.2,
            envMapIntensity: 1.1
          })
        );
        ce.position.set(-r.width * 0.2, 95, 0), ce.castShadow = !0, p.add(ce);
        const U = new t.MeshPhysicalMaterial({
          color: 14540253,
          roughness: 0.3,
          metalness: 0.5
        });
        for (let H = 0; H < 3; H++) {
          const M = new t.Mesh(
            new t.BoxGeometry(r.width * 0.7, 4, r.height * 0.2),
            U
          );
          M.position.set(r.width * 0.15, 75 + H * 22, r.height * 0.35), M.castShadow = !0, p.add(M);
        }
        const L = new t.MeshStandardMaterial({
          color: 8947848,
          metalness: 0.9,
          roughness: 0.2
        });
        for (let H = -1; H <= 1; H++) {
          const M = new t.Mesh(
            new t.CylinderGeometry(1.5, 1.5, 15, 16),
            L
          );
          M.rotation.z = Math.PI / 2, M.position.set(H * r.width * 0.2, 35, r.height * 0.45), p.add(M);
        }
        const k = new t.PointLight(16777215, 1.5, 400);
        k.position.set(0, 140, 0), k.castShadow = !0, p.add(k);
        const T = document.createElement("canvas");
        T.width = 1024, T.height = 768;
        const y = T.getContext("2d");
        y && (y.fillStyle = "#dc2626", y.fillRect(0, 0, T.width, T.height), y.strokeStyle = "#ffffff", y.lineWidth = 25, y.strokeRect(30, 30, T.width - 60, T.height - 60), y.strokeStyle = "#000000", y.lineWidth = 15, y.strokeRect(50, 50, T.width - 100, T.height - 100), y.shadowColor = "rgba(0, 0, 0, 0.8)", y.shadowBlur = 20, y.shadowOffsetX = 8, y.shadowOffsetY = 8, y.font = "bold 180px Arial", y.textAlign = "center", y.textBaseline = "middle", y.fillStyle = "#ffffff", y.fillText("👨‍🍳", T.width / 2, T.height / 2 - 150), y.fillStyle = "#ffffff", y.font = "bold 220px Impact, Arial Black, sans-serif", y.fillText("CHEF", T.width / 2, T.height / 2 + 120), y.strokeStyle = "#000000", y.lineWidth = 12, y.strokeText("CHEF", T.width / 2, T.height / 2 + 120), y.strokeStyle = "#fbbf24", y.lineWidth = 6, y.strokeText("CHEF", T.width / 2, T.height / 2 + 120));
        const te = new t.CanvasTexture(T), K = new t.Mesh(
          new t.PlaneGeometry(r.height * 0.6, r.height * 0.45),
          new t.MeshStandardMaterial({
            map: te,
            roughness: 0.4,
            metalness: 0.1,
            emissive: 14427686,
            emissiveIntensity: 0.3
          })
        );
        K.position.set(-r.width / 2 + 3, 50, 0), K.rotation.y = Math.PI / 2, p.add(K);
        const Ee = new t.Mesh(
          new t.PlaneGeometry(r.height * 0.6, r.height * 0.45),
          new t.MeshStandardMaterial({
            map: te,
            roughness: 0.4,
            metalness: 0.1,
            emissive: 14427686,
            emissiveIntensity: 0.3
          })
        );
        Ee.position.set(r.width / 2 - 3, 50, 0), Ee.rotation.y = -Math.PI / 2, p.add(Ee), p.position.set(R, 0, Z), p.rotation.y = C, w.add(p);
      } else if (r.type === "toilet") {
        const p = new t.Group(), I = new t.MeshStandardMaterial({
          color: 14013914,
          roughness: 0.7,
          metalness: 0.05
        }), h = new t.MeshStandardMaterial({
          color: 3900150,
          roughness: 0.6,
          metalness: 0.1
        }), W = new t.MeshStandardMaterial({
          color: 15680580,
          roughness: 0.6,
          metalness: 0.1
        }), A = new t.MeshStandardMaterial({
          color: 14277081,
          roughness: 0.7,
          metalness: 0.05
        }), G = 120, ie = new t.Mesh(
          new t.BoxGeometry(r.width, 4, r.height),
          A
        );
        ie.position.y = 2, ie.receiveShadow = !0, p.add(ie);
        const _ = new t.Mesh(
          new t.BoxGeometry(r.width, G, 6),
          I
        );
        _.position.set(0, G / 2, -r.height / 2), _.castShadow = !0, p.add(_);
        const ce = new t.Mesh(
          new t.BoxGeometry(6, G, r.height),
          I
        );
        ce.position.set(-r.width / 2, G / 2, 0), ce.castShadow = !0, p.add(ce);
        const U = new t.Mesh(
          new t.BoxGeometry(6, G, r.height),
          I
        );
        U.position.set(r.width / 2, G / 2, 0), U.castShadow = !0, p.add(U);
        const L = new t.Mesh(
          new t.BoxGeometry(r.width * 0.24, G, 6),
          I
        );
        L.position.set(0, G / 2, r.height / 2), L.castShadow = !0, p.add(L);
        const k = new t.Mesh(
          new t.BoxGeometry(r.width * 0.055, G, 6),
          I
        );
        k.position.set(-r.width * 0.4725, G / 2, r.height / 2), k.castShadow = !0, p.add(k);
        const T = new t.Mesh(
          new t.BoxGeometry(r.width * 0.055, G, 6),
          I
        );
        T.position.set(r.width * 0.4725, G / 2, r.height / 2), T.castShadow = !0, p.add(T);
        const y = new t.Mesh(
          new t.BoxGeometry(r.width * 0.33, G - 95, 6),
          I
        );
        y.position.set(r.width * 0.285, 95 + (G - 95) / 2, r.height / 2), y.castShadow = !0, p.add(y);
        const te = new t.Mesh(
          new t.BoxGeometry(r.width * 0.33, G - 95, 6),
          I
        );
        te.position.set(-r.width * 0.285, 95 + (G - 95) / 2, r.height / 2), te.castShadow = !0, p.add(te);
        const K = new t.Mesh(
          new t.BoxGeometry(r.width * 0.33, 95, 4),
          h
        );
        K.position.set(r.width * 0.285, 47.5, r.height / 2 - 2), K.castShadow = !0, p.add(K);
        const Ee = new t.MeshStandardMaterial({
          color: 13938487,
          metalness: 0.1,
          roughness: 0.8
        }), H = new t.Mesh(
          new t.CylinderGeometry(1.5, 1.5, 12, 16),
          Ee
        );
        H.rotation.z = Math.PI / 2, H.position.set(r.width * 0.285 - r.width * 0.132, 47.5, r.height / 2 + 1), p.add(H);
        const M = document.createElement("canvas");
        M.width = 512, M.height = 768;
        const g = M.getContext("2d");
        if (g) {
          const q = g.createLinearGradient(0, 0, 0, M.height);
          q.addColorStop(0, "#3b82f6"), q.addColorStop(1, "#1e40af"), g.fillStyle = q, g.fillRect(0, 0, M.width, M.height), g.strokeStyle = "#ffffff", g.lineWidth = 12, g.strokeRect(20, 20, M.width - 40, M.height - 40), g.strokeStyle = "rgba(255, 255, 255, 0.3)", g.lineWidth = 6, g.strokeRect(30, 30, M.width - 60, M.height - 60), g.shadowColor = "rgba(0, 0, 0, 0.5)", g.shadowBlur = 15, g.shadowOffsetX = 4, g.shadowOffsetY = 4, g.fillStyle = "#ffffff", g.font = "bold 120px Georgia, serif", g.textAlign = "center", g.textBaseline = "middle", g.fillText("W.C.", M.width / 2, M.height / 2 - 100), g.strokeStyle = "#ffffff", g.lineWidth = 4, g.beginPath(), g.moveTo(100, M.height / 2), g.lineTo(M.width - 100, M.height / 2), g.stroke();
          const Ie = g.createLinearGradient(0, M.height / 2, 0, M.height / 2 + 150);
          Ie.addColorStop(0, "#ffd700"), Ie.addColorStop(0.5, "#ffed4e"), Ie.addColorStop(1, "#ffd700"), g.fillStyle = Ie, g.font = "bold 140px Georgia, serif", g.fillText("MALE", M.width / 2, M.height / 2 + 120), g.strokeStyle = "#b8860b", g.lineWidth = 3, g.strokeText("MALE", M.width / 2, M.height / 2 + 120);
        }
        const he = new t.CanvasTexture(M), m = new t.Mesh(
          new t.PlaneGeometry(r.width * 0.25, r.width * 0.375),
          new t.MeshStandardMaterial({
            map: he,
            roughness: 0.3,
            metalness: 0.15,
            emissive: 1982639,
            emissiveIntensity: 0.1
          })
        );
        m.position.set(r.width * 0.285, 47.5, r.height / 2 + 2.5), p.add(m);
        const N = new t.Mesh(
          new t.BoxGeometry(r.width * 0.33, 95, 4),
          W
        );
        N.position.set(-r.width * 0.285, 47.5, r.height / 2 - 2), N.castShadow = !0, p.add(N);
        const Se = H.clone();
        Se.position.set(-r.width * 0.285 + r.width * 0.132, 47.5, r.height / 2 + 1), p.add(Se);
        const X = document.createElement("canvas");
        X.width = 512, X.height = 768;
        const b = X.getContext("2d");
        if (b) {
          const q = b.createLinearGradient(0, 0, 0, X.height);
          q.addColorStop(0, "#ef4444"), q.addColorStop(1, "#b91c1c"), b.fillStyle = q, b.fillRect(0, 0, X.width, X.height), b.strokeStyle = "#ffffff", b.lineWidth = 12, b.strokeRect(20, 20, X.width - 40, X.height - 40), b.strokeStyle = "rgba(255, 255, 255, 0.3)", b.lineWidth = 6, b.strokeRect(30, 30, X.width - 60, X.height - 60), b.shadowColor = "rgba(0, 0, 0, 0.5)", b.shadowBlur = 15, b.shadowOffsetX = 4, b.shadowOffsetY = 4, b.fillStyle = "#ffffff", b.font = "bold 120px Georgia, serif", b.textAlign = "center", b.textBaseline = "middle", b.fillText("W.C.", X.width / 2, X.height / 2 - 100), b.strokeStyle = "#ffffff", b.lineWidth = 4, b.beginPath(), b.moveTo(100, X.height / 2), b.lineTo(X.width - 100, X.height / 2), b.stroke();
          const Ie = b.createLinearGradient(0, X.height / 2, 0, X.height / 2 + 150);
          Ie.addColorStop(0, "#ffb6c1"), Ie.addColorStop(0.5, "#ffd1dc"), Ie.addColorStop(1, "#ffb6c1"), b.fillStyle = Ie, b.font = "bold 120px Georgia, serif", b.fillText("FEMALE", X.width / 2, X.height / 2 + 120), b.strokeStyle = "#dc143c", b.lineWidth = 3, b.strokeText("FEMALE", X.width / 2, X.height / 2 + 120);
        }
        const Pe = new t.CanvasTexture(X), Ge = new t.Mesh(
          new t.PlaneGeometry(r.width * 0.25, r.width * 0.375),
          new t.MeshStandardMaterial({
            map: Pe,
            roughness: 0.3,
            metalness: 0.15,
            emissive: 12131356,
            emissiveIntensity: 0.1
          })
        );
        Ge.position.set(-r.width * 0.285, 47.5, r.height / 2 + 2.5), p.add(Ge);
        const oe = document.createElement("canvas");
        oe.width = 512, oe.height = 256;
        const le = oe.getContext("2d");
        le && (le.fillStyle = "#d5d5da", le.fillRect(0, 0, oe.width, oe.height), le.fillStyle = "#2a2a2a", le.font = "bold 140px Arial", le.textAlign = "center", le.textBaseline = "middle", le.fillText("W.C.", oe.width / 2, oe.height / 2));
        const Fe = new t.CanvasTexture(oe), u = new t.Mesh(
          new t.PlaneGeometry(r.width * 0.4, r.width * 0.2),
          new t.MeshStandardMaterial({
            map: Fe,
            roughness: 0.5,
            metalness: 0.05
          })
        );
        u.position.set(0, 100, -r.height / 2 + 3.5), p.add(u);
        const xe = new t.MeshStandardMaterial({
          color: 16119285,
          metalness: 0.1,
          roughness: 0.5
        }), He = new t.Mesh(
          new t.BoxGeometry(r.width * 0.5, 12, r.height * 0.25),
          xe
        );
        He.position.set(0, 32, -r.height * 0.3), He.castShadow = !0, p.add(He);
        const me = new t.MeshStandardMaterial({
          color: 16777215,
          roughness: 0.3,
          metalness: 0.05
        }), Ce = new t.Mesh(
          new t.CylinderGeometry(12, 12, 6, 32),
          me
        );
        Ce.position.set(0, 40, -r.height * 0.3), p.add(Ce);
        const we = new t.MeshStandardMaterial({
          color: 12632256,
          metalness: 0.1,
          roughness: 0.8
        }), Ye = new t.Mesh(
          new t.TorusGeometry(4, 1, 8, 24, Math.PI),
          we
        );
        Ye.rotation.z = Math.PI / 2, Ye.position.set(0, 48, -r.height * 0.35), p.add(Ye);
        const s = new t.MeshStandardMaterial({
          color: 16777215,
          roughness: 0.25,
          metalness: 0.05
        }), i = new t.Mesh(
          new t.CylinderGeometry(10, 8, 12, 32),
          s
        );
        i.position.set(-r.width * 0.25, 6, r.height * 0.25), p.add(i);
        const o = new t.Mesh(
          new t.TorusGeometry(9, 2, 16, 32),
          s
        );
        o.rotation.x = Math.PI / 2, o.position.set(-r.width * 0.25, 13, r.height * 0.25), p.add(o);
        const d = new t.Mesh(
          new t.BoxGeometry(14, 20, 8),
          s
        );
        d.position.set(-r.width * 0.25, 22, r.height * 0.25 - 10), p.add(d);
        const v = new t.Mesh(
          new t.BoxGeometry(2, 6, 1),
          we
        );
        v.position.set(-r.width * 0.25 + 8, 25, r.height * 0.25 - 10), p.add(v);
        const S = new t.Mesh(
          new t.SphereGeometry(7, 32, 32, 0, Math.PI * 2, 0, Math.PI / 1.5),
          s
        );
        S.position.set(r.width * 0.25, 25, r.height * 0.25), S.rotation.x = Math.PI / 6, p.add(S);
        const B = new t.Mesh(
          new t.CylinderGeometry(1.5, 1.5, 8, 16),
          we
        );
        B.position.set(r.width * 0.25, 35, r.height * 0.25 - 5), p.add(B);
        const Q = new t.PointLight(16777215, 0.5, 280);
        Q.position.set(0, G - 15, 0), Q.castShadow = !1, p.add(Q), p.position.set(R, 0, Z), p.rotation.y = C, w.add(p);
      }
    }), l.tables.forEach((r) => {
      const C = r.shape === "rectangle" ? r.width * 1.5 : r.width, p = r.x - 400 + C / 2, I = -(r.y - 400 + r.height / 2), h = -(r.rotation * Math.PI / 180), W = new t.MeshPhysicalMaterial({
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
      }), A = r.shape === "circle" ? new t.CylinderGeometry(C / 2, C / 2, 4, 64) : new t.BoxGeometry(C, 4, r.height), G = new t.Mesh(A, W);
      if (G.position.set(p, 33 + 4 / 2, I), G.rotation.y = h, G.castShadow = !0, G.receiveShadow = !0, w.add(G), r.shape === "circle") {
        const L = new t.Mesh(
          new t.TorusGeometry(C / 2 + 1, 1.2, 16, 64),
          new t.MeshStandardMaterial({
            color: 13938487,
            // gold-like tone
            metalness: 1,
            roughness: 0.3
          })
        );
        L.position.set(p, 33 + 4 / 2 + 0.5, I), L.rotation.x = Math.PI / 2, w.add(L);
      } else {
        const L = new t.LineSegments(
          new t.EdgesGeometry(A),
          new t.LineBasicMaterial({ color: 13938487, linewidth: 2 })
        );
        L.position.copy(G.position), L.rotation.y = h, w.add(L);
      }
      const ie = new t.MeshStandardMaterial({
        color: 2236962,
        metalness: 0.9,
        roughness: 0.2
      }), _ = 3.2;
      (r.shape === "circle" ? [
        [C * 0.3, C * 0.3],
        [-C * 0.3, C * 0.3],
        [C * 0.3, -C * 0.3],
        [-C * 0.3, -C * 0.3]
      ] : [
        [C / 2 - 10, r.height / 2 - 10],
        [-C / 2 + 10, r.height / 2 - 10],
        [C / 2 - 10, -r.height / 2 + 10],
        [-C / 2 + 10, -r.height / 2 + 10]
      ]).forEach(([L, k]) => {
        const T = new t.Mesh(
          new t.CylinderGeometry(_, _, 33, 16),
          ie
        );
        T.position.set(
          p + L * Math.cos(h) - k * Math.sin(h),
          33 / 2,
          I + L * Math.sin(h) + k * Math.cos(h)
        ), T.castShadow = !0, w.add(T);
      });
      const U = l.chairs.filter((L) => L.tableId === r.id);
      U.forEach((L) => {
        const k = L.size || 40, T = 38, y = new t.MeshStandardMaterial({ color: 9127187, roughness: 0.5, metalness: 0.1 }), te = new t.MeshStandardMaterial({ color: 12092939, roughness: 0.7, metalness: 0.05 }), K = U.filter((me) => me.position === L.position).length, H = (["top", "bottom"].includes(L.position) ? C : r.height) - k * K, M = K > 1 ? H / (K + 1) : H / 2, g = M + L.index * (k + M) + k / 2, he = k * 0.4;
        let m = 0, N = 0;
        L.position === "top" ? (m = g - C / 2, N = r.height / 2 + he + k / 2) : L.position === "bottom" ? (m = g - C / 2, N = -(r.height / 2 + he + k / 2)) : L.position === "left" ? (m = -(C / 2 + he + k / 2), N = g - r.height / 2) : (m = C / 2 + he + k / 2, N = g - r.height / 2);
        const Se = m * Math.cos(h) - N * Math.sin(h), X = m * Math.sin(h) + N * Math.cos(h), b = new t.Mesh(
          new t.BoxGeometry(k * 0.75, 4, k * 0.75),
          te
        ), Pe = T * 0.4;
        b.position.set(p + Se, Pe, I - X);
        const Ge = {
          top: 0,
          bottom: Math.PI,
          left: Math.PI / 2,
          right: -Math.PI / 2
        }[L.position] || 0;
        b.rotation.y = Ge + h, b.castShadow = !0, w.add(b);
        const oe = new t.Mesh(
          new t.BoxGeometry(k * 0.75, T * 0.55, 3),
          y
        ), le = k * 0.75 / 2 + 1.5;
        oe.position.set(
          b.position.x - Math.sin(b.rotation.y) * le,
          T * 0.65,
          b.position.z - Math.cos(b.rotation.y) * le
        ), oe.rotation.y = b.rotation.y, oe.castShadow = !0, w.add(oe);
        const u = Pe - 4 / 2, xe = new t.CylinderGeometry(2, 2, u, 8), He = new t.MeshStandardMaterial({ color: 6636321, roughness: 0.6, metalness: 0.2 });
        [
          [k * 0.3, k * 0.3],
          [k * 0.3, -k * 0.3],
          [-k * 0.3, k * 0.3],
          [-k * 0.3, -k * 0.3]
        ].forEach(([me, Ce]) => {
          const we = new t.Mesh(xe, He), Ye = Math.cos(b.rotation.y), s = Math.sin(b.rotation.y);
          we.position.set(
            b.position.x + me * Ye - Ce * s,
            u / 2,
            // Position legs so they sit on the floor
            b.position.z + me * s + Ce * Ye
          ), we.castShadow = !0, w.add(we);
        });
      });
    });
    const de = () => {
      var r;
      if (ee.current = requestAnimationFrame(de), se.current && se.current.progress < 1) {
        const R = se.current;
        R.progress += 0.05, R.progress >= 1 && (R.progress = 1, be(!1), se.current = null);
        const C = ((p) => p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2)(R.progress);
        if (a.current) {
          a.current.position.lerpVectors(R.startPos, R.endPos, C);
          const p = new t.Vector3();
          p.lerpVectors(R.startTarget, R.endTarget, C), a.current.lookAt(p);
        }
      }
      if ($ && a.current && !O) {
        const R = Math.sqrt(a.current.position.x ** 2 + a.current.position.z ** 2), Z = Math.atan2(a.current.position.z, a.current.position.x) + De.current;
        a.current.position.x = R * Math.cos(Z), a.current.position.z = R * Math.sin(Z), a.current.lookAt(0, 100, 0);
      }
      (r = Y.current) == null || r.render(w, E);
    };
    de();
    const ae = () => {
      c.current && a.current && Y.current && (a.current.aspect = c.current.clientWidth / c.current.clientHeight, a.current.updateProjectionMatrix(), Y.current.setSize(c.current.clientWidth, c.current.clientHeight));
    };
    return window.addEventListener("resize", ae), () => {
      window.removeEventListener("resize", ae), ee.current && cancelAnimationFrame(ee.current), Y.current && c.current && (c.current.removeChild(Y.current.domElement), Y.current.dispose());
    };
  }, [x, l, $, O]), x ? /* @__PURE__ */ e("div", { className: "rfp-fixed rfp-inset-0 bg-black/60 backdrop-blur-sm z-[200] rfp-flex rfp-items-center rfp-justify-center rfp-p-2", children: /* @__PURE__ */ n("div", { className: "bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 rounded-3xl shadow-2xl rfp-w-full rfp-h-full max-w-[98vw] max-h-[98vh] rfp-flex rfp-flex-col rfp-overflow-hidden rfp-border rfp-border-gray-800", children: [
    /* @__PURE__ */ e("div", { className: "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rfp-p-1", children: /* @__PURE__ */ n("div", { className: "rfp-bg-gray-900 rfp-px-6 rfp-py-4 rfp-flex rfp-items-center rfp-justify-between", children: [
      /* @__PURE__ */ n("div", { children: [
        /* @__PURE__ */ n("h2", { className: "rfp-text-2xl rfp-font-bold rfp-text-white rfp-flex rfp-items-center rfp-gap-3", children: [
          /* @__PURE__ */ e("div", { className: "rfp-p-2 bg-gradient-to-br from-blue-500 to-purple-600 rfp-rounded-lg", children: /* @__PURE__ */ e(tt, { className: "rfp-w-5 rfp-h-5" }) }),
          "3D Floor Plan Visualization"
        ] }),
        /* @__PURE__ */ n("p", { className: "rfp-text-gray-400 rfp-text-sm rfp-mt-1", children: [
          "Professional Camera Controls • ",
          l.name
        ] })
      ] }),
      /* @__PURE__ */ e(
        "button",
        {
          onClick: f,
          className: "p-2.5 bg-red-500/20 hover:bg-red-500/30 rfp-text-red-400 rfp-rounded-xl rfp-transition-all hover:scale-110",
          children: /* @__PURE__ */ e(Bt, { className: "rfp-w-5 rfp-h-5" })
        }
      )
    ] }) }),
    /* @__PURE__ */ n("div", { className: "rfp-flex-1 rfp-flex rfp-gap-3 rfp-p-3 rfp-min-h-0", children: [
      /* @__PURE__ */ n("div", { className: "rfp-w-80 bg-black/90 backdrop-blur-xl rounded-2xl shadow-2xl rfp-border rfp-border-gray-700 rfp-p-5 rfp-flex rfp-flex-col rfp-gap-5 overflow-y-auto flex-shrink-0", children: [
        /* @__PURE__ */ e(
          "button",
          {
            onClick: () => ze("default"),
            className: "rfp-px-4 rfp-py-3 bg-gradient-to-r from-blue-500 to-purple-600 rfp-text-white rfp-rounded-xl rfp-font-semibold rfp-transition-all hover:scale-105 hover:shadow-lg rfp-flex rfp-items-center rfp-justify-center rfp-gap-2",
            children: "🏠 Default View"
          }
        ),
        /* @__PURE__ */ n("div", { className: "rfp-flex rfp-flex-col rfp-gap-3", children: [
          /* @__PURE__ */ n("div", { className: "rfp-text-white rfp-text-sm rfp-font-bold rfp-uppercase rfp-tracking-wider rfp-flex rfp-items-center rfp-gap-2 rfp-pb-2 rfp-border-b rfp-border-gray-700", children: [
            /* @__PURE__ */ e(tt, { className: "rfp-w-5 rfp-h-5 rfp-text-purple-400" }),
            "Manual Control"
          ] }),
          /* @__PURE__ */ e("div", { className: "rfp-flex rfp-justify-center", children: /* @__PURE__ */ n("div", { className: "rfp-flex rfp-flex-col rfp-gap-1", children: [
            /* @__PURE__ */ e(
              "button",
              {
                onClick: () => ge("up"),
                className: "rfp-w-12 rfp-h-12 rfp-bg-gray-800 hover:bg-gray-700 rfp-text-white rfp-rounded-lg rfp-transition-all hover:scale-110 rfp-flex rfp-items-center rfp-justify-center disabled:opacity-30 mx-auto",
                disabled: O,
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
                  disabled: O,
                  title: "Rotate Left",
                  children: /* @__PURE__ */ e("svg", { className: "rfp-w-6 rfp-h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) })
                }
              ),
              /* @__PURE__ */ e("div", { className: "rfp-w-12 rfp-h-12 bg-gradient-to-br from-blue-600 to-purple-600 rfp-rounded-lg rfp-flex rfp-items-center rfp-justify-center", children: /* @__PURE__ */ e(tt, { className: "rfp-w-6 rfp-h-6 rfp-text-white" }) }),
              /* @__PURE__ */ e(
                "button",
                {
                  onClick: () => ge("right"),
                  className: "rfp-w-12 rfp-h-12 rfp-bg-gray-800 hover:bg-gray-700 rfp-text-white rfp-rounded-lg rfp-transition-all hover:scale-110 rfp-flex rfp-items-center rfp-justify-center disabled:opacity-30",
                  disabled: O,
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
                disabled: O,
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
                onClick: () => ue(0.85),
                className: "rfp-px-4 rfp-py-3 rfp-bg-gray-800 hover:bg-gray-700 rfp-text-white rfp-rounded-xl rfp-transition-all hover:scale-105 rfp-flex rfp-items-center rfp-justify-center rfp-gap-2 rfp-font-semibold disabled:opacity-30",
                disabled: O,
                children: [
                  /* @__PURE__ */ e(dt, { className: "rfp-w-5 rfp-h-5" }),
                  "Zoom In"
                ]
              }
            ),
            /* @__PURE__ */ n(
              "button",
              {
                onClick: () => ue(1.15),
                className: "rfp-px-4 rfp-py-3 rfp-bg-gray-800 hover:bg-gray-700 rfp-text-white rfp-rounded-xl rfp-transition-all hover:scale-105 rfp-flex rfp-items-center rfp-justify-center rfp-gap-2 rfp-font-semibold disabled:opacity-30",
                disabled: O,
                children: [
                  /* @__PURE__ */ e(Xt, { className: "rfp-w-5 rfp-h-5" }),
                  "Zoom Out"
                ]
              }
            ),
            /* @__PURE__ */ n(
              "button",
              {
                onClick: () => V(!$),
                className: `px-4 py-3 rounded-xl transition-all hover:scale-105 flex items-center justify-center gap-2 font-semibold ${$ ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg" : "bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white"}`,
                children: [
                  /* @__PURE__ */ e(st, { className: `w-5 h-5 ${$ ? "animate-spin" : ""}` }),
                  $ ? "Auto-Rotating" : "Auto-Rotate"
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ n("div", { className: "rfp-flex rfp-flex-col rfp-gap-3 mt-auto", children: [
          /* @__PURE__ */ n(
            "button",
            {
              onClick: () => ze("default"),
              className: "rfp-px-4 rfp-py-3 bg-gradient-to-r from-orange-500 to-red-600 rfp-text-white rfp-rounded-xl rfp-transition-all hover:scale-105 hover:shadow-lg rfp-flex rfp-items-center rfp-justify-center rfp-gap-2 rfp-font-bold",
              children: [
                /* @__PURE__ */ e(At, { className: "rfp-w-5 rfp-h-5" }),
                "Reset View"
              ]
            }
          ),
          /* @__PURE__ */ n("div", { className: "bg-gray-800/50 rfp-rounded-xl rfp-p-4 rfp-border rfp-border-gray-700", children: [
            /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-gap-2 rfp-text-gray-400 rfp-mb-3", children: [
              /* @__PURE__ */ e(Yt, { className: "rfp-w-4 rfp-h-4" }),
              /* @__PURE__ */ e("span", { className: "rfp-font-medium rfp-text-sm", children: "Scene Statistics" })
            ] }),
            /* @__PURE__ */ n("div", { className: "rfp-grid grid-cols-2 rfp-gap-2 rfp-text-sm", children: [
              /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-gap-2", children: [
                /* @__PURE__ */ e("div", { className: "rfp-w-2 rfp-h-2 bg-emerald-500 rfp-rounded-full rfp-animate-pulse" }),
                /* @__PURE__ */ n("span", { className: "rfp-text-gray-300", children: [
                  l.tables.length,
                  " Tables"
                ] })
              ] }),
              /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-gap-2", children: [
                /* @__PURE__ */ e("div", { className: "rfp-w-2 rfp-h-2 bg-amber-500 rfp-rounded-full rfp-animate-pulse" }),
                /* @__PURE__ */ n("span", { className: "rfp-text-gray-300", children: [
                  l.chairs.length,
                  " Chairs"
                ] })
              ] }),
              /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-gap-2", children: [
                /* @__PURE__ */ e("div", { className: "rfp-w-2 rfp-h-2 rfp-bg-purple-500 rfp-rounded-full rfp-animate-pulse" }),
                /* @__PURE__ */ n("span", { className: "rfp-text-gray-300", children: [
                  l.objects.length,
                  " Objects"
                ] })
              ] }),
              /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-gap-2", children: [
                /* @__PURE__ */ e("div", { className: "rfp-w-2 rfp-h-2 rfp-bg-blue-500 rfp-rounded-full rfp-animate-pulse" }),
                /* @__PURE__ */ n("span", { className: "rfp-text-gray-300", children: [
                  l.walls.length,
                  " Walls"
                ] })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ n("div", { className: "rfp-flex-1 rfp-relative bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 rounded-2xl rfp-overflow-hidden shadow-2xl rfp-border rfp-border-gray-300", children: [
        /* @__PURE__ */ e("div", { ref: c, className: "rfp-w-full rfp-h-full" }),
        O && /* @__PURE__ */ e("div", { className: "rfp-absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2", children: /* @__PURE__ */ e("div", { className: "bg-black/80 backdrop-blur-xl rfp-rounded-xl rfp-px-6 rfp-py-3 shadow-2xl rfp-border rfp-border-gray-700", children: /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-gap-3", children: [
          /* @__PURE__ */ e("div", { className: "rfp-animate-spin rfp-rounded-full rfp-h-5 rfp-w-5 rfp-border-2 rfp-border-gray-500 border-t-white" }),
          /* @__PURE__ */ e("span", { className: "rfp-text-white rfp-text-sm rfp-font-medium", children: "Transitioning Camera..." })
        ] }) }) })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "bg-gradient-to-r from-gray-900 via-slate-900 to-gray-900 rfp-px-6 rfp-py-3 rfp-border-t rfp-border-gray-800", children: /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-justify-between", children: [
      /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-gap-4", children: [
        /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-gap-2", children: [
          /* @__PURE__ */ e(gt, { className: "rfp-w-4 rfp-h-4 rfp-text-gray-400" }),
          /* @__PURE__ */ n("span", { className: "rfp-text-sm rfp-text-gray-400", children: [
            "Viewing: ",
            /* @__PURE__ */ e("span", { className: "rfp-text-white rfp-font-semibold", children: l.name })
          ] })
        ] }),
        /* @__PURE__ */ n("div", { className: "rfp-text-sm rfp-text-gray-400", children: [
          "Camera: ",
          /* @__PURE__ */ e("span", { className: "rfp-text-white rfp-font-semibold", children: mt[ke].name })
        ] })
      ] }),
      /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-gap-2 rfp-text-xs rfp-text-gray-500", children: [
        /* @__PURE__ */ e("span", { children: "High Performance Mode" }),
        /* @__PURE__ */ e("div", { className: "rfp-w-2 rfp-h-2 rfp-bg-green-500 rfp-rounded-full rfp-animate-pulse" })
      ] })
    ] }) })
  ] }) }) : null;
}, or = ({ fullScreen: l = !1 }) => {
  const [x, f] = J([
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
  ]), [c, ne] = J("floor-1"), [a, Y] = J(null), [ee, $] = J(!1), [V, ke] = J({ x: 0, y: 0 }), z = 1, [O, be] = J(!0), [De, se] = J(!1), [ze, ge] = J(!1), [ue, w] = J(null), [E, F] = J(null), [ye, ve] = J(null), [fe, Ne] = J(!1), [Ae, P] = J(null), [j, Me] = J(null), de = Le(null), ae = Le(null), r = Le(null);
  Ve(() => {
    if ((a == null ? void 0 : a.type) === "table") {
      const s = R();
      if (!s)
        return;
      const i = s.chairs.filter((d) => d.tableId === a.id);
      if (i.filter((d) => d.size === void 0).length > 0) {
        const d = {};
        i.forEach((v) => {
          v.size !== void 0 && !d[v.position] && (d[v.position] = v.size);
        }), f((v) => v.map(
          (S) => S.id === c ? {
            ...S,
            chairs: S.chairs.map((B) => {
              if (B.tableId === a.id && B.size === void 0) {
                const Q = d[B.position] ?? 40;
                return { ...B, size: Q };
              }
              return B;
            })
          } : S
        ));
      }
    }
  }, [a]);
  const R = () => x.find((s) => s.id === c), Z = (s, i = "medium") => {
    const o = R();
    if (!o)
      return;
    const { width: d, height: v } = ft(s, i), S = {
      id: Ze(),
      name: `Table ${o.tables.length + 1}`,
      shape: s,
      size: i,
      x: 200 + o.tables.length * 20,
      y: 200 + o.tables.length * 20,
      width: d,
      height: v,
      rotation: 0
    };
    f((B) => B.map(
      (Q) => Q.id === c ? { ...Q, tables: [...Q.tables, S] } : Q
    )), Y({ type: "table", id: S.id });
  }, C = (s) => {
    const i = R();
    if (!i)
      return;
    const o = {
      id: Ze(),
      name: `${Qe[s]} ${i.objects.length + 1}`,
      type: s,
      x: 300 + i.objects.length * 30,
      y: 300 + i.objects.length * 30,
      width: 120,
      height: 80,
      rotation: 0
    };
    f((d) => d.map(
      (v) => v.id === c ? { ...v, objects: [...v.objects, o] } : v
    )), Y({ type: "object", id: o.id });
  }, p = (s) => {
    if (!a || a.type !== "table")
      return;
    const i = R();
    if (!i)
      return;
    const o = i.chairs.filter(
      (Q) => Q.tableId === a.id && Q.position === s
    ), d = o.length, v = o.find((Q) => Q.size !== void 0), S = (v == null ? void 0 : v.size) ?? 40, B = {
      id: Ze(),
      tableId: a.id,
      position: s,
      index: d,
      x: 0,
      y: 0,
      size: S
      // Always set a size to prevent recalculation on table resize
    };
    f((Q) => Q.map(
      (q) => q.id === c ? { ...q, chairs: [...q.chairs, B] } : q
    ));
  }, I = (s) => {
    if (!a || a.type !== "table")
      return;
    const i = R();
    if (!i)
      return;
    const o = i.chairs.filter(
      (v) => v.tableId === a.id && v.position === s
    );
    if (o.length === 0)
      return;
    const d = o.reduce(
      (v, S) => S.index > v.index ? S : v
    );
    f((v) => v.map(
      (S) => S.id === c ? {
        ...S,
        chairs: S.chairs.filter((B) => B.id !== d.id)
      } : S
    ));
  }, h = (s, i) => {
    !a || a.type !== "table" || !R() || f((d) => d.map(
      (v) => v.id === c ? {
        ...v,
        chairs: v.chairs.map(
          (S) => S.tableId === a.id && S.position === s ? { ...S, size: i } : S
        )
      } : v
    ));
  }, W = () => {
    !a || a.type !== "table" || !R() || f((i) => i.map(
      (o) => o.id === c ? {
        ...o,
        chairs: o.chairs.map((d) => {
          if (d.tableId === a.id) {
            const { size: v, ...S } = d;
            return S;
          }
          return d;
        })
      } : o
    ));
  }, A = () => {
    a && (a.type === "table" ? f((s) => s.map(
      (i) => i.id === c ? {
        ...i,
        tables: i.tables.filter((o) => o.id !== a.id),
        chairs: i.chairs.filter((o) => o.tableId !== a.id)
      } : i
    )) : a.type === "object" ? f((s) => s.map(
      (i) => i.id === c ? {
        ...i,
        objects: i.objects.filter((o) => o.id !== a.id)
      } : i
    )) : a.type === "wall" ? f((s) => s.map(
      (i) => i.id === c ? {
        ...i,
        walls: i.walls.filter((o) => o.id !== a.id)
      } : i
    )) : a.type === "fixedElement" && f((s) => s.map(
      (i) => i.id === c ? {
        ...i,
        fixedElements: i.fixedElements.filter((o) => o.id !== a.id)
      } : i
    )), Y(null));
  }, G = (s) => {
    !a || a.type !== "wall" || f((i) => i.map(
      (o) => o.id === c ? {
        ...o,
        walls: o.walls.map(
          (d) => d.id === a.id ? { ...d, thickness: s } : d
        )
      } : o
    ));
  }, ie = (s) => {
    !a || a.type !== "wall" || f((i) => i.map(
      (o) => o.id === c ? {
        ...o,
        walls: o.walls.map(
          (d) => d.id === a.id ? { ...d, type: s } : d
        )
      } : o
    ));
  }, _ = () => {
    !a || a.type !== "table" || f((s) => s.map(
      (i) => i.id === c ? {
        ...i,
        tables: i.tables.map(
          (o) => o.id === a.id ? { ...o, rotation: (o.rotation || 0) + 45 } : o
        )
      } : i
    ));
  }, ce = () => {
    if (!a || a.type !== "table")
      return;
    const s = R();
    if (!s)
      return;
    const i = s.tables.find((S) => S.id === a.id);
    if (!i)
      return;
    const o = {
      ...i,
      id: Ze(),
      name: `${i.name} Copy`,
      x: i.x + 50,
      y: i.y + 50
    }, v = s.chairs.filter((S) => S.tableId === i.id).map((S) => ({
      ...S,
      id: Ze(),
      tableId: o.id
    }));
    f((S) => S.map(
      (B) => B.id === c ? {
        ...B,
        tables: [...B.tables, o],
        chairs: [...B.chairs, ...v]
      } : B
    )), Y({ type: "table", id: o.id });
  }, U = et((s) => {
    !a || a.type !== "table" || f((i) => i.map(
      (o) => o.id === c ? {
        ...o,
        tables: o.tables.map(
          (d) => d.id === a.id ? s(d) : d
        )
      } : o
    ));
  }, [a, c]), L = (s) => {
    U((i) => {
      const { width: o, height: d } = ft(i.shape, s);
      return { ...i, size: s, width: o, height: d };
    });
  }, k = (s, i) => {
    U((o) => ({
      ...o,
      width: s,
      height: i,
      // Set size to a custom indicator or keep current
      size: "medium"
      // Keep a valid size for the interface
    }));
  }, T = (s) => {
    !a || a.type !== "object" || f((i) => i.map(
      (o) => o.id === c ? {
        ...o,
        objects: o.objects.map(
          (d) => d.id === a.id ? { ...d, name: s } : d
        )
      } : o
    ));
  }, y = (s, i) => {
    !a || a.type !== "object" || f((o) => o.map(
      (d) => d.id === c ? {
        ...d,
        objects: d.objects.map(
          (v) => v.id === a.id ? { ...v, width: s, height: i } : v
        )
      } : d
    ));
  }, te = (s) => {
    !a || a.type !== "object" || f((i) => i.map(
      (o) => o.id === c ? {
        ...o,
        objects: o.objects.map(
          (d) => d.id === a.id ? { ...d, rotation: s } : d
        )
      } : o
    ));
  }, K = (s, i) => {
    !a || a.type !== "fixedElement" || f((o) => o.map(
      (d) => d.id === c ? {
        ...d,
        fixedElements: d.fixedElements.map(
          (v) => v.id === a.id ? { ...v, width: s, height: i } : v
        )
      } : d
    ));
  }, Ee = (s) => {
    U((i) => ({ ...i, name: s }));
  }, H = (s) => {
    if (de.current && !fe) {
      if (ze && ue) {
        const i = de.current.getBoundingClientRect(), o = Math.round((s.clientX - i.left) / z / D) * D, d = Math.round((s.clientY - i.top) / z / D) * D;
        if (!E)
          F({ x: o, y: d });
        else {
          if (!R())
            return;
          const S = Je(E, { x: o, y: d }), B = {
            id: Ze(),
            type: ue,
            startX: E.x,
            startY: E.y,
            endX: S.x,
            endY: S.y,
            thickness: 8
          };
          f((Q) => Q.map(
            (q) => q.id === c ? { ...q, walls: [...q.walls, B] } : q
          )), F(null), ve(null), ge(!1), w(null);
        }
        return;
      }
      Y(null);
    }
  }, M = (s, i) => {
    Y({ type: s, id: i });
  }, g = (s, i) => {
    if (!de.current)
      return;
    s.preventDefault(), s.stopPropagation();
    const o = de.current.getBoundingClientRect(), d = (s.clientX - o.left) / z, v = (s.clientY - o.top) / z, S = R();
    if (!S)
      return;
    const B = S.tables.find((Te) => Te.id === i), Q = S.objects.find((Te) => Te.id === i), q = S.fixedElements.find((Te) => Te.id === i), Ie = S.walls.find((Te) => Te.id === i);
    if (Ie)
      ke({
        x: d - Ie.startX,
        y: v - Ie.startY
      }), ae.current = { id: i, type: "wall" };
    else {
      const Te = B || Q || q;
      Te && ke({
        x: d - Te.x,
        y: v - Te.y
      });
      const We = B ? "table" : Q ? "object" : q ? "fixedElement" : "table";
      ae.current = { id: i, type: We };
    }
    $(!0);
  }, he = et((s) => {
    !ee && !fe || !ae.current || !de.current || (r.current && cancelAnimationFrame(r.current), r.current = requestAnimationFrame(() => {
      var B, Q, q, Ie, Te;
      if (!de.current)
        return;
      const i = de.current.getBoundingClientRect(), o = (s.clientX - i.left) / z, d = (s.clientY - i.top) / z, v = Math.round(o / D) * D, S = Math.round(d / D) * D;
      if (fe && ((B = ae.current) == null ? void 0 : B.type) === "wall") {
        const We = x.find((Xe) => Xe.id === c), Be = We == null ? void 0 : We.walls.find((Xe) => {
          var Re;
          return Xe.id === ((Re = ae.current) == null ? void 0 : Re.id);
        });
        if (Be) {
          const Xe = Ae === "start" ? { x: Be.endX, y: Be.endY } : { x: Be.startX, y: Be.startY }, Re = Je(Xe, { x: v, y: S });
          f((Oe) => Oe.map(
            (pe) => pe.id === c ? {
              ...pe,
              walls: pe.walls.map(
                (re) => {
                  var $e;
                  return re.id === (($e = ae.current) == null ? void 0 : $e.id) ? Ae === "start" ? { ...re, startX: Re.x, startY: Re.y } : { ...re, endX: Re.x, endY: Re.y } : re;
                }
              )
            } : pe
          ));
        }
      } else if (((Q = ae.current) == null ? void 0 : Q.type) === "table") {
        const We = o - V.x, Be = d - V.y, Xe = Math.round(We / D) * D, Re = Math.round(Be / D) * D;
        f((Oe) => Oe.map(
          (pe) => pe.id === c ? {
            ...pe,
            tables: pe.tables.map(
              (re) => {
                var $e;
                return re.id === (($e = ae.current) == null ? void 0 : $e.id) ? { ...re, x: Xe, y: Re } : re;
              }
            )
          } : pe
        ));
      } else if (((q = ae.current) == null ? void 0 : q.type) === "object") {
        const We = o - V.x, Be = d - V.y, Xe = Math.round(We / D) * D, Re = Math.round(Be / D) * D;
        f((Oe) => Oe.map(
          (pe) => pe.id === c ? {
            ...pe,
            objects: pe.objects.map(
              (re) => {
                var $e;
                return re.id === (($e = ae.current) == null ? void 0 : $e.id) ? { ...re, x: Xe, y: Re } : re;
              }
            )
          } : pe
        ));
      } else if (((Ie = ae.current) == null ? void 0 : Ie.type) === "fixedElement") {
        const We = o - V.x, Be = d - V.y, Xe = Math.round(We / D) * D, Re = Math.round(Be / D) * D;
        f((Oe) => Oe.map(
          (pe) => pe.id === c ? {
            ...pe,
            fixedElements: pe.fixedElements.map(
              (re) => {
                var $e;
                return re.id === (($e = ae.current) == null ? void 0 : $e.id) ? { ...re, x: Xe, y: Re } : re;
              }
            )
          } : pe
        ));
      } else if (((Te = ae.current) == null ? void 0 : Te.type) === "wall" && !fe) {
        const We = o - V.x, Be = d - V.y, Xe = Math.round(We / D) * D, Re = Math.round(Be / D) * D;
        f((Oe) => Oe.map(
          (pe) => pe.id === c ? {
            ...pe,
            walls: pe.walls.map((re) => {
              var ot;
              if (re.id !== ((ot = ae.current) == null ? void 0 : ot.id))
                return re;
              const $e = Xe - re.startX, it = Re - re.startY;
              return {
                ...re,
                startX: re.startX + $e,
                startY: re.startY + it,
                endX: re.endX + $e,
                endY: re.endY + it
              };
            })
          } : pe
        ));
      }
    }));
  }, [ee, fe, Ae, V, c, z, x]), m = () => {
    r.current && (cancelAnimationFrame(r.current), r.current = null), $(!1), ae.current = null, Ne(!1), P(null), Me(null);
  }, N = (s, i, o) => {
    s.preventDefault(), s.stopPropagation(), Ne(!0), P(o), ae.current = { id: i, type: "wall" };
  }, Se = () => {
    const s = {
      id: Ze(),
      name: `Floor ${x.length + 1}`,
      isActive: !1,
      tables: [],
      chairs: [],
      objects: [],
      walls: [],
      fixedElements: []
    };
    f((i) => [...i, s]), b(s.id);
  }, X = () => {
    if (x.length <= 1)
      return;
    const s = x.filter((i) => i.id !== c);
    f(s), ne(s[0].id);
  }, b = (s) => {
    f((i) => i.map((o) => ({
      ...o,
      isActive: o.id === s
    }))), ne(s), Y(null);
  }, Pe = (s, i) => {
    f((o) => o.map(
      (d) => d.id === s ? { ...d, name: i } : d
    ));
  }, Ge = (s) => {
    ge(!0), w(s), F(null), ve(null), Y(null);
  }, oe = (s) => {
    const i = R();
    if (!i)
      return;
    const o = {
      id: Ze(),
      name: `${s.charAt(0).toUpperCase() + s.slice(1)} ${i.fixedElements.length + 1}`,
      type: s,
      x: 400 + i.fixedElements.length * 30,
      y: 400 + i.fixedElements.length * 30,
      width: 60,
      height: 60,
      rotation: 0
    };
    f((d) => d.map(
      (v) => v.id === c ? { ...v, fixedElements: [...v.fixedElements, o] } : v
    )), Y({ type: "fixedElement", id: o.id });
  }, le = () => {
    const s = {
      floors: x,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
    console.log("Saving floor plan:", s), alert("Floor plan saved! (Check console for data)");
  };
  Ve(() => {
    const s = (o) => he(o), i = () => m();
    return (ee || fe) && (document.addEventListener("mousemove", s), document.addEventListener("mouseup", i)), () => {
      document.removeEventListener("mousemove", s), document.removeEventListener("mouseup", i);
    };
  }, [ee, fe, he]);
  const Fe = (s) => {
    var i;
    if (ze && E && de.current) {
      const o = de.current.getBoundingClientRect(), d = Math.round((s.clientX - o.left) / z / D) * D, v = Math.round((s.clientY - o.top) / z / D) * D, S = Je(E, { x: d, y: v });
      ve(S);
    } else if (fe && ((i = ae.current) == null ? void 0 : i.type) === "wall" && de.current) {
      const o = de.current.getBoundingClientRect(), d = Math.round((s.clientX - o.left) / z / D) * D, v = Math.round((s.clientY - o.top) / z / D) * D, S = R(), B = S == null ? void 0 : S.walls.find((Q) => {
        var q;
        return Q.id === ((q = ae.current) == null ? void 0 : q.id);
      });
      if (B) {
        const Q = Ae === "start" ? { x: B.endX, y: B.endY } : { x: B.startX, y: B.startY }, q = Je(Q, { x: d, y: v });
        Me(
          Ae === "start" ? { startX: q.x, startY: q.y, endX: B.endX, endY: B.endY } : { startX: B.startX, startY: B.startY, endX: q.x, endY: q.y }
        );
      }
    }
  };
  Ve(() => {
    const s = (i) => {
      i.key === "Escape" && ze && (ge(!1), w(null), F(null), ve(null));
    };
    return document.addEventListener("keydown", s), () => document.removeEventListener("keydown", s);
  }, [ze]);
  const u = R(), xe = u == null ? void 0 : u.tables.find((s) => (a == null ? void 0 : a.type) === "table" && s.id === a.id), He = u == null ? void 0 : u.objects.find((s) => (a == null ? void 0 : a.type) === "object" && s.id === a.id), me = u == null ? void 0 : u.walls.find((s) => (a == null ? void 0 : a.type) === "wall" && s.id === a.id), Ce = u == null ? void 0 : u.fixedElements.find((s) => (a == null ? void 0 : a.type) === "fixedElement" && s.id === a.id), we = xe ? (u == null ? void 0 : u.chairs.filter((s) => s.tableId === xe.id)) ?? [] : [], Ye = et(() => be((s) => !s), []);
  return /* @__PURE__ */ n("div", { className: `restaurant-floor-planner rfp-flex ${l ? "rfp-h-screen" : "rfp-h-full"} rfp-bg-gray-50`, children: [
    /* @__PURE__ */ e("style", { dangerouslySetInnerHTML: { __html: Ht } }),
    /* @__PURE__ */ e(
      jt,
      {
        floors: x,
        currentFloor: u,
        onAddFloor: Se,
        onRemoveFloor: X,
        onSwitchFloor: b,
        onRenameFloor: Pe,
        onAddTable: Z,
        onAddObject: C,
        onStartWallDrawing: Ge,
        onAddFixedElement: oe,
        onRotateTable: _,
        onDuplicateTable: ce,
        onRemoveTable: A,
        onSave: le,
        selectedTable: xe ?? null,
        selectedTableChairs: we
      }
    ),
    /* @__PURE__ */ n("div", { className: "rfp-flex-1 rfp-flex rfp-flex-col", children: [
      /* @__PURE__ */ e(
        rr,
        {
          showGrid: O,
          selectedTable: xe ?? null,
          selectedObject: He ?? null,
          selectedWall: me ?? null,
          selectedFixedElement: Ce ?? null,
          selectedTableChairs: we,
          tableCount: (u == null ? void 0 : u.tables.length) ?? 0,
          chairCount: (u == null ? void 0 : u.chairs.length) ?? 0,
          objectCount: (u == null ? void 0 : u.objects.length) ?? 0,
          wallCount: (u == null ? void 0 : u.walls.length) ?? 0,
          fixedElementCount: (u == null ? void 0 : u.fixedElements.length) ?? 0,
          selectedElementType: (a == null ? void 0 : a.type) ?? null,
          onToggleGrid: Ye,
          onAddChair: p,
          onRemoveChair: I,
          onChangeTableSize: L,
          onCustomTableSize: k,
          onTableNameChange: Ee,
          onObjectNameChange: T,
          onObjectResize: y,
          onObjectRotate: te,
          onRemoveObject: A,
          onRemoveWall: A,
          onRemoveFixedElement: A,
          onChangeWallThickness: G,
          onConvertWallType: ie,
          onFixedElementResize: K,
          onChairSizeChange: h,
          onResetChairSizes: W,
          on3DPreview: () => se(!0)
        }
      ),
      /* @__PURE__ */ n("div", { className: "rfp-flex-1 rfp-overflow-auto rfp-bg-gray-100 rfp-relative", children: [
        /* @__PURE__ */ n(
          "div",
          {
            ref: de,
            className: `rfp-w-full rfp-h-full rfp-relative ${ze ? "rfp-cursor-crosshair" : fe ? "rfp-cursor-grabbing" : "rfp-cursor-default"}`,
            style: {
              transform: `scale(${z})`,
              transformOrigin: "top left",
              background: O ? "radial-gradient(circle, #d1d5db 1px, transparent 1px)" : "white",
              backgroundSize: `${D * z}px ${D * z}px`
            },
            onClick: H,
            onMouseMove: Fe,
            children: [
              (u == null ? void 0 : u.tables.length) === 0 && /* @__PURE__ */ e("div", { className: "rfp-absolute rfp-inset-0 rfp-flex rfp-items-center rfp-justify-center rfp-pointer-events-none", children: /* @__PURE__ */ n("div", { className: "rfp-text-center rfp-text-gray-400", children: [
                /* @__PURE__ */ e("div", { className: "rfp-text-6xl rfp-mb-4", children: "🏪" }),
                /* @__PURE__ */ e("div", { className: "rfp-text-xl rfp-font-medium rfp-mb-2", children: "Welcome to Your Restaurant Designer" }),
                /* @__PURE__ */ e("div", { className: "rfp-text-lg", children: 'Click "Add Tables" in the sidebar to start designing your floor plan' }),
                /* @__PURE__ */ n("div", { className: "rfp-mt-4 rfp-space-y-1 rfp-text-sm", children: [
                  /* @__PURE__ */ e("div", { children: "• Drag tables to move them around" }),
                  /* @__PURE__ */ e("div", { children: "• Click tables to select and edit properties" }),
                  /* @__PURE__ */ e("div", { children: "• Add chairs from the top toolbar or the table properties panel" }),
                  /* @__PURE__ */ e("div", { children: "• Use multiple floors for complex layouts" })
                ] })
              ] }) }),
              u == null ? void 0 : u.tables.map((s) => /* @__PURE__ */ e(
                Ut,
                {
                  table: s,
                  isSelected: (a == null ? void 0 : a.type) === "table" && a.id === s.id,
                  chairs: u.chairs.filter((i) => i.tableId === s.id),
                  onSelect: () => M("table", s.id),
                  onDrag: g,
                  onDragEnd: m
                },
                s.id
              )),
              u == null ? void 0 : u.objects.map((s) => /* @__PURE__ */ e(
                Jt,
                {
                  object: s,
                  isSelected: (a == null ? void 0 : a.type) === "object" && a.id === s.id,
                  onSelect: () => M("object", s.id),
                  onDragStart: (i) => g(i, s.id)
                },
                s.id
              )),
              u == null ? void 0 : u.walls.map((s) => /* @__PURE__ */ e(
                ct,
                {
                  wall: s,
                  isSelected: (a == null ? void 0 : a.type) === "wall" && a.id === s.id,
                  onSelect: () => M("wall", s.id),
                  onDragHandle: (i, o) => N(i, s.id, o),
                  onDragStart: (i) => g(i, s.id)
                },
                s.id
              )),
              ze && E && ye && ue && /* @__PURE__ */ e(
                ct,
                {
                  wall: {
                    id: "temp-wall",
                    type: ue,
                    startX: E.x,
                    startY: E.y,
                    endX: ye.x,
                    endY: ye.y,
                    thickness: 8
                  },
                  isSelected: !1,
                  onSelect: () => {
                  }
                }
              ),
              j && /* @__PURE__ */ e(
                "div",
                {
                  className: "rfp-absolute rfp-pointer-events-none",
                  style: {
                    left: `${j.startX}px`,
                    top: `${j.startY}px`,
                    width: `${Math.sqrt(
                      Math.pow(j.endX - j.startX, 2) + Math.pow(j.endY - j.startY, 2)
                    )}px`,
                    height: "4px",
                    transform: `rotate(${Math.atan2(
                      j.endY - j.startY,
                      j.endX - j.startX
                    ) * (180 / Math.PI)}deg)`,
                    transformOrigin: "top left",
                    zIndex: 15
                  },
                  children: /* @__PURE__ */ e("div", { className: "rfp-w-full rfp-h-full rfp-border-2 rfp-border-blue-400 rfp-border-dashed rfp-opacity-70 rfp-bg-blue-100 rfp-rounded-sm" })
                }
              ),
              u == null ? void 0 : u.fixedElements.map((s) => /* @__PURE__ */ e(
                Kt,
                {
                  element: s,
                  isSelected: (a == null ? void 0 : a.type) === "fixedElement" && a.id === s.id,
                  onSelect: () => M("fixedElement", s.id),
                  onDragStart: (i) => g(i, s.id)
                },
                s.id
              )),
              u == null ? void 0 : u.chairs.map((s) => {
                const i = u.tables.find((d) => d.id === s.tableId);
                if (!i)
                  return null;
                const o = u.chairs.filter(
                  (d) => d.tableId === s.tableId && d.position === s.position
                ).length;
                return /* @__PURE__ */ e(
                  qt,
                  {
                    chair: s,
                    table: i,
                    totalChairsOnSide: o,
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
              a && a.type === "table" && xe && /* @__PURE__ */ e(
                "div",
                {
                  className: "rfp-absolute rfp-border-2 rfp-border-blue-500 rfp-border-dashed rfp-rounded rfp-pointer-events-none",
                  style: {
                    left: xe.x - 10,
                    top: xe.y - 10,
                    width: (xe.shape === "rectangle" ? xe.width * 1.5 : xe.width) + 20,
                    height: xe.height + 20,
                    transform: `rotate(${xe.rotation || 0}deg)`
                  }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ e("div", { className: "rfp-absolute rfp-bottom-0 rfp-left-0 rfp-right-0 rfp-bg-white rfp-bg-opacity-95 rfp-border-t rfp-border-gray-200 rfp-p-3", children: /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-justify-between rfp-text-sm", children: [
          /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-gap-4", children: [
            /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-gap-2 rfp-text-gray-600", children: [
              /* @__PURE__ */ e("div", { className: "rfp-w-2 rfp-h-2 rfp-bg-green-500 rfp-rounded-full" }),
              /* @__PURE__ */ n("span", { children: [
                "Floor: ",
                u == null ? void 0 : u.name
              ] })
            ] }),
            ee && /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-gap-2 rfp-text-blue-600", children: [
              /* @__PURE__ */ e("div", { className: "rfp-w-2 rfp-h-2 rfp-bg-blue-500 rfp-rounded-full rfp-animate-pulse" }),
              /* @__PURE__ */ e("span", { children: "Dragging..." })
            ] })
          ] }),
          /* @__PURE__ */ n("div", { className: "rfp-flex rfp-items-center rfp-gap-4", children: [
            /* @__PURE__ */ n("div", { className: "rfp-text-gray-500", children: [
              "Zoom: ",
              Math.round(z * 100),
              "% | Grid: ",
              O ? "On" : "Off"
            ] }),
            a && /* @__PURE__ */ e("div", { className: "rfp-text-blue-600 rfp-font-medium", children: a.type === "table" && xe ? `${xe.name} (${xe.shape})` : "Element Selected" })
          ] })
        ] }) })
      ] })
    ] }),
    u && /* @__PURE__ */ e(
      nr,
      {
        floor: u,
        isOpen: De,
        onClose: () => se(!1)
      }
    )
  ] });
};
export {
  nr as Preview3DModal,
  or as RestaurantFloorPlanner
};
//# sourceMappingURL=restaurant-floor-planner.es.js.map
