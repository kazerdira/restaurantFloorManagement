import { jsx as e, jsxs as s, Fragment as _e } from "react/jsx-runtime";
import qe, { useState as J, useRef as Te, useEffect as Ve, useCallback as et } from "react";
import { Square as Ue, Circle as vt, Wine as Nt, ChefHat as Mt, Bath as St, RectangleVertical as lt, DoorOpen as Ct, Columns as dt, Rows as kt, Armchair as nt, Layers as ut, Plus as st, Minus as xt, LayoutGrid as Et, Package as Gt, Home as zt, RotateCw as Pt, Trash2 as Ke, Save as It, Upload as Rt, Eye as Tt, EyeOff as $t, RotateCcw as at, ChevronRight as Lt, Box as Wt, Move3d as tt, X as Bt, ZoomIn as ct, ZoomOut as Xt, Maximize2 as At, Grid as Yt } from "lucide-react";
import * as t from "three";
const Ht = `
  .hexagon-shape {
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  }
`, Y = 20, Dt = {
  small: { width: 50, height: 50 },
  medium: { width: 90, height: 90 },
  large: { width: 130, height: 130 }
}, Ot = {
  square: Ue,
  circle: vt,
  rectangle: Ue,
  hexagon: Ue
}, ft = {
  small: "Small",
  medium: "Medium",
  large: "Big"
}, rt = {
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
  pillar: dt,
  column: dt,
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
}, Ze = () => Math.random().toString(36).slice(2, 11), Vt = (o) => {
  const d = o.shape === "rectangle" ? o.width * 1.5 : o.width, m = Math.min(d, o.height), C = Math.round(m * 0.35);
  return Math.max(18, Math.min(48, C));
}, yt = (o) => o.shape === "rectangle" ? o.width * 1.5 : o.width, ht = (o, d) => {
  const { width: m, height: C } = Dt[d];
  return {
    width: o === "rectangle" ? m * 1.5 : m,
    height: C
  };
}, Je = (o, d) => {
  const m = Math.abs(d.x - o.x), C = Math.abs(d.y - o.y);
  return m > C ? { x: d.x, y: o.y } : { x: o.x, y: d.y };
}, qt = ({
  chair: o,
  table: d,
  isSelected: m,
  onSelect: C,
  onDrag: i,
  onDragEnd: v,
  totalChairsOnSide: q
}) => {
  const ie = Vt(d), P = o.size ?? Math.round(ie * 1.3), oe = Math.max(10, Math.round(P * 0.25)), U = Math.min(P - 4, Math.max(20, Math.round(P * 0.65))), A = yt(d), _ = (d.rotation || 0) * (Math.PI / 180), ve = (() => {
    const $e = (o.position === "top" || o.position === "bottom" ? A : d.height) - P * q, ge = q > 1 ? $e / (q + 1) : $e / 2, be = ge + o.index * (P + ge) + P / 2;
    let g = 0, I = 0;
    switch (o.position) {
      case "top":
        g = be - A / 2, I = -(d.height / 2 + oe + P / 2);
        break;
      case "bottom":
        g = be - A / 2, I = d.height / 2 + oe + P / 2;
        break;
      case "left":
        g = -(A / 2 + oe + P / 2), I = be - d.height / 2;
        break;
      case "right":
        g = A / 2 + oe + P / 2, I = be - d.height / 2;
        break;
    }
    const F = g * Math.cos(_) - I * Math.sin(_), ye = g * Math.sin(_) + I * Math.cos(_), le = d.x + A / 2, ze = d.y + d.height / 2;
    return {
      x: le + F - P / 2,
      y: ze + ye - P / 2
    };
  })(), Ye = () => {
    let K = 0;
    switch (o.position) {
      case "top":
        K = 0;
        break;
      case "right":
        K = 90;
        break;
      case "bottom":
        K = 180;
        break;
      case "left":
        K = 270;
        break;
    }
    return K + (d.rotation || 0);
  };
  return /* @__PURE__ */ e(
    "div",
    {
      className: `absolute cursor-move transition-all duration-150 ${m ? "ring-4 ring-amber-400 ring-offset-2" : ""}`,
      style: {
        left: ve.x,
        top: ve.y,
        width: P,
        height: P,
        transform: `rotate(${Ye()}deg)`,
        zIndex: m ? 100 : 50,
        filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2))"
      },
      onMouseDown: (K) => {
        K.stopPropagation(), C(), i(K, o.id);
      },
      onMouseUp: v,
      children: /* @__PURE__ */ e("div", { className: "w-full h-full bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg border-4 border-amber-800 flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all", children: /* @__PURE__ */ e(nt, { size: U, strokeWidth: 3.5, className: "text-amber-50" }) })
    }
  );
}, Ut = ({
  table: o,
  chairs: d,
  isSelected: m,
  onSelect: C,
  onDrag: i,
  onDragEnd: v
}) => {
  const q = {
    left: o.x,
    top: o.y,
    width: yt(o),
    height: o.height,
    zIndex: m ? 100 : 50,
    transform: `rotate(${o.rotation || 0}deg)`
  }, ie = "w-full h-full flex items-center justify-center relative", P = o.shape === "circle" ? `${ie} rounded-full` : o.shape === "hexagon" ? `${ie} hexagon-shape` : ie, U = d.filter((ve) => ve.tableId === o.id).length, A = o.name.match(/\d+/), _ = A ? A[0] : o.name;
  return /* @__PURE__ */ e(
    "div",
    {
      className: `absolute cursor-move transition-all duration-150 ${m ? "ring-2 ring-emerald-500 ring-offset-2" : ""}`,
      style: q,
      onMouseDown: (ve) => {
        ve.stopPropagation(), C(), i(ve, o.id);
      },
      onClick: (ve) => {
        ve.stopPropagation(), C();
      },
      onMouseUp: v,
      children: /* @__PURE__ */ s("div", { className: P, children: [
        /* @__PURE__ */ e(
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
        /* @__PURE__ */ e(
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
        /* @__PURE__ */ e(
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
        /* @__PURE__ */ s("div", { className: "relative z-10 flex flex-col items-center justify-center gap-1 text-white drop-shadow-lg", children: [
          /* @__PURE__ */ s("span", { className: "text-xs font-bold uppercase tracking-wide", children: [
            "N: ",
            _
          ] }),
          /* @__PURE__ */ s("span", { className: "text-xs font-bold uppercase tracking-wide", children: [
            "S: ",
            U
          ] })
        ] })
      ] })
    }
  );
}, Jt = ({
  object: o,
  isSelected: d,
  onSelect: m,
  onDragStart: C
}) => {
  const i = rt[o.type], v = wt[o.type], [q, ie] = J(!1), P = (oe) => {
    ie(!0), C(oe);
    const U = () => {
      ie(!1), document.removeEventListener("mouseup", U);
    };
    document.addEventListener("mouseup", U);
  };
  return /* @__PURE__ */ s(
    "div",
    {
      className: `absolute cursor-move select-none ${q ? "" : "transition-all duration-75"} ${v.bg} ${v.border} border-2 rounded-lg shadow-lg flex items-center justify-center ${d ? "ring-4 ring-blue-400 ring-opacity-50 scale-105" : "hover:scale-102"}`,
      style: {
        left: `${o.x}px`,
        top: `${o.y}px`,
        width: `${o.width}px`,
        height: `${o.height}px`,
        transform: `rotate(${o.rotation}deg)`,
        transformOrigin: "center",
        willChange: q ? "transform" : "auto"
      },
      onClick: (oe) => {
        oe.stopPropagation(), m();
      },
      onMouseDown: P,
      children: [
        /* @__PURE__ */ s("div", { className: "flex flex-col items-center justify-center gap-2 pointer-events-none", children: [
          /* @__PURE__ */ e(i, { className: `w-8 h-8 ${v.text}`, strokeWidth: 2 }),
          /* @__PURE__ */ e("span", { className: `text-sm font-bold ${v.text} uppercase tracking-wide`, children: o.name })
        ] }),
        d && /* @__PURE__ */ s(_e, { children: [
          /* @__PURE__ */ e("div", { className: "absolute -top-1 -left-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white cursor-nw-resize" }),
          /* @__PURE__ */ e("div", { className: "absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white cursor-ne-resize" }),
          /* @__PURE__ */ e("div", { className: "absolute -bottom-1 -left-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white cursor-sw-resize" }),
          /* @__PURE__ */ e("div", { className: "absolute -bottom-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white cursor-se-resize" })
        ] })
      ]
    }
  );
}, mt = ({
  wall: o,
  isSelected: d,
  onSelect: m,
  onDragHandle: C,
  onDragStart: i
}) => {
  const v = Math.sqrt(
    Math.pow(o.endX - o.startX, 2) + Math.pow(o.endY - o.startY, 2)
  ), q = Math.atan2(o.endY - o.startY, o.endX - o.startX) * (180 / Math.PI), ie = () => {
    if (!d)
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
  }, oe = () => o.type === "window" ? "bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400" : o.type === "door" ? "" : P(), U = () => {
    const A = v * 0.1, _ = (v - A) / 2;
    return /* @__PURE__ */ s("div", { className: "w-full h-full relative", children: [
      /* @__PURE__ */ e(
        "div",
        {
          className: "absolute left-0 bg-gradient-to-r from-amber-600 to-amber-700 shadow-md rounded-sm",
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
              className: "absolute right-1 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 bg-yellow-500 rounded-full shadow-sm"
            }
          )
        }
      ),
      /* @__PURE__ */ e(
        "div",
        {
          className: "absolute bg-transparent",
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
          className: "absolute right-0 bg-gradient-to-r from-amber-700 to-amber-600 shadow-md rounded-sm",
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
              className: "absolute left-1 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 bg-yellow-500 rounded-full shadow-sm"
            }
          )
        }
      )
    ] });
  };
  return /* @__PURE__ */ s(
    "div",
    {
      onClick: (A) => {
        A.stopPropagation(), m();
      },
      onMouseDown: (A) => {
        d && i && (A.stopPropagation(), i(A));
      },
      className: `absolute transition-all ${d ? "ring-4 ring-blue-400 ring-opacity-50 hover:ring-6 hover:ring-blue-300" : ""}`,
      style: {
        left: `${o.startX}px`,
        top: `${o.startY}px`,
        width: `${v}px`,
        height: `${o.thickness}px`,
        transform: `rotate(${q}deg)`,
        transformOrigin: "top left",
        zIndex: 10,
        cursor: d ? "move" : "pointer",
        pointerEvents: "auto"
      },
      children: [
        o.type === "door" ? U() : /* @__PURE__ */ e("div", { className: `w-full h-full ${oe()} shadow-lg hover:opacity-90 transition-opacity rounded-sm`, children: d && /* @__PURE__ */ s("div", { className: "absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap shadow-lg z-30", children: [
          je[o.type],
          " - ",
          Math.round(v),
          "px"
        ] }) }),
        o.type === "door" && d && /* @__PURE__ */ s("div", { className: "absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap shadow-lg z-30", children: [
          je[o.type],
          " - ",
          Math.round(v),
          "px"
        ] }),
        d && /* @__PURE__ */ s(_e, { children: [
          /* @__PURE__ */ e(
            "div",
            {
              className: "absolute -left-2 top-1/2 transform -translate-y-1/2 w-5 h-5 bg-blue-500 rounded-full border-2 border-white hover:bg-blue-600 hover:scale-125 transition-all shadow-xl z-30",
              style: { cursor: ie() },
              onMouseDown: (A) => {
                A.stopPropagation(), C == null || C(A, "start");
              },
              title: "Drag to resize"
            }
          ),
          /* @__PURE__ */ e(
            "div",
            {
              className: "absolute -right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 bg-blue-500 rounded-full border-2 border-white hover:bg-blue-600 hover:scale-125 transition-all shadow-xl z-30",
              style: { cursor: ie() },
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
}, Kt = ({
  element: o,
  isSelected: d,
  onSelect: m,
  onDragStart: C
}) => {
  const [i, v] = J(!1), q = (P) => {
    v(!0), C(P);
    const oe = () => {
      v(!1), document.removeEventListener("mouseup", oe);
    };
    document.addEventListener("mouseup", oe);
  }, ie = () => o.type === "pillar" ? /* @__PURE__ */ s("div", { className: "w-full h-full relative", children: [
    /* @__PURE__ */ s("div", { className: "absolute inset-2 bg-gradient-to-br from-gray-400 via-gray-600 to-gray-800 rounded-full shadow-2xl", children: [
      /* @__PURE__ */ e("div", { className: "absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-white/20" }),
      /* @__PURE__ */ e("div", { className: "absolute inset-0 rounded-full shadow-inner", style: { boxShadow: "inset -4px -4px 12px rgba(0,0,0,0.5), inset 4px 4px 12px rgba(255,255,255,0.2)" } })
    ] }),
    /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ e("div", { className: "w-1/3 h-1/3 bg-white/10 rounded-full blur-sm" }) })
  ] }) : o.type === "column" ? /* @__PURE__ */ s("div", { className: "w-full h-full relative", children: [
    /* @__PURE__ */ s("div", { className: "absolute inset-2 bg-gradient-to-br from-slate-400 via-slate-600 to-slate-800 rounded-lg shadow-2xl", children: [
      /* @__PURE__ */ e("div", { className: "absolute inset-0 rounded-lg bg-gradient-to-br from-white/20 via-transparent to-black/30" }),
      /* @__PURE__ */ e("div", { className: "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-t-lg" }),
      /* @__PURE__ */ e("div", { className: "absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-transparent via-white/30 to-transparent rounded-l-lg" }),
      /* @__PURE__ */ e("div", { className: "absolute inset-0 rounded-lg", style: { boxShadow: "inset 0 0 20px rgba(0,0,0,0.5)" } })
    ] }),
    /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ e("div", { className: "w-0.5 h-2/3 bg-white/20" }) })
  ] }) : o.type === "stairs" ? /* @__PURE__ */ s("div", { className: "w-full h-full relative bg-gradient-to-br from-amber-200 via-amber-300 to-amber-400 rounded-lg shadow-xl overflow-hidden", children: [
    [0, 1, 2, 3, 4, 5].map((P) => /* @__PURE__ */ s(
      "div",
      {
        className: "absolute left-0 right-0 bg-gradient-to-r from-amber-400 to-amber-500 border-t border-amber-600",
        style: {
          top: `${P * 16.66}%`,
          height: "16.66%",
          boxShadow: "0 2px 4px rgba(0,0,0,0.3)"
        },
        children: [
          /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-gradient-to-b from-white/20 to-transparent h-1/2" }),
          /* @__PURE__ */ e("div", { className: "absolute bottom-0 left-0 right-0 h-px bg-black/30" })
        ]
      },
      P
    )),
    /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ e("div", { className: "bg-white/80 rounded-full p-2 shadow-lg", children: /* @__PURE__ */ e("svg", { className: "w-6 h-6 text-amber-800", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 3, d: "M5 15l7-7 7 7" }) }) }) })
  ] }) : null;
  return /* @__PURE__ */ s(
    "div",
    {
      className: `absolute cursor-move select-none ${i ? "" : "transition-all duration-75"} rounded-lg ${d ? "ring-4 ring-blue-400 ring-opacity-50 scale-105" : "hover:scale-102"}`,
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
        P.stopPropagation(), m();
      },
      onMouseDown: q,
      children: [
        ie(),
        d && /* @__PURE__ */ e("div", { className: "absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap shadow-lg z-30", children: o.name }),
        d && /* @__PURE__ */ s(_e, { children: [
          /* @__PURE__ */ e("div", { className: "absolute -top-1 -left-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white" }),
          /* @__PURE__ */ e("div", { className: "absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white" }),
          /* @__PURE__ */ e("div", { className: "absolute -bottom-1 -left-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white" }),
          /* @__PURE__ */ e("div", { className: "absolute -bottom-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white" })
        ] })
      ]
    }
  );
}, Qt = ft, jt = ({
  floors: o,
  currentFloor: d,
  onAddFloor: m,
  onRemoveFloor: C,
  onSwitchFloor: i,
  onRenameFloor: v,
  onAddTable: q,
  onAddObject: ie,
  onStartWallDrawing: P,
  onAddFixedElement: oe,
  onRotateTable: U,
  onDuplicateTable: A,
  onRemoveTable: _,
  onSave: ve,
  onLoad: Ye,
  selectedTable: K,
  selectedTableChairs: $e
}) => {
  const [ge, be] = qe.useState(null), [g, I] = qe.useState(""), [F, ye] = qe.useState("tables"), le = qe.useRef(null);
  qe.useEffect(() => {
    ge && le.current && (le.current.focus(), le.current.select());
  }, [ge]);
  const ze = (M) => {
    be(M.id), I(M.name);
  }, xe = () => {
    ge && g.trim() && v(ge, g.trim()), be(null), I("");
  }, De = (M) => {
    M.key === "Enter" ? xe() : M.key === "Escape" && (be(null), I(""));
  };
  return /* @__PURE__ */ s("div", { className: "w-80 bg-white shadow-lg border-r border-gray-200 flex flex-col", children: [
    /* @__PURE__ */ s("div", { className: "p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white", children: [
      /* @__PURE__ */ e("h1", { className: "text-xl font-bold", children: "Restaurant Designer" }),
      /* @__PURE__ */ e("p", { className: "text-blue-100 text-sm", children: "Professional Floor Planner" })
    ] }),
    /* @__PURE__ */ s("div", { className: "p-4 border-b border-gray-200", children: [
      /* @__PURE__ */ s("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ s("h2", { className: "text-lg font-semibold text-gray-800 flex items-center gap-2", children: [
          /* @__PURE__ */ e(ut, { className: "w-5 h-5" }),
          "Floor Plans (",
          o.length,
          ")"
        ] }),
        /* @__PURE__ */ s("div", { className: "flex gap-1", children: [
          /* @__PURE__ */ e(
            "button",
            {
              onClick: m,
              className: "p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors",
              title: "Add New Floor",
              children: /* @__PURE__ */ e(st, { className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              onClick: C,
              disabled: o.length <= 1,
              className: "p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
              title: "Remove Current Floor",
              children: /* @__PURE__ */ e(xt, { className: "w-4 h-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e("div", { className: "space-y-2 max-h-32 overflow-y-auto", children: o.map((M) => /* @__PURE__ */ s(
        "div",
        {
          className: `w-full p-3 rounded-lg transition-all flex items-center justify-between ${M.isActive ? "bg-blue-100 text-blue-800 border border-blue-200 shadow-sm" : "text-gray-600 hover:bg-gray-100 border border-transparent"}`,
          onClick: () => {
            ge !== M.id && i(M.id);
          },
          onDoubleClick: () => ze(M),
          children: [
            /* @__PURE__ */ s("div", { className: "flex-1", children: [
              ge === M.id ? /* @__PURE__ */ e(
                "input",
                {
                  ref: le,
                  type: "text",
                  value: g,
                  onChange: (Ne) => I(Ne.target.value),
                  onBlur: xe,
                  onKeyDown: De,
                  className: "w-full px-2 py-1 text-sm font-medium bg-white border border-blue-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",
                  onClick: (Ne) => Ne.stopPropagation()
                }
              ) : /* @__PURE__ */ e("div", { className: "font-medium cursor-pointer", children: M.name }),
              /* @__PURE__ */ s("div", { className: "text-xs text-gray-500 mt-0.5", children: [
                M.tables.length,
                " tables, ",
                M.chairs.length,
                " chairs"
              ] })
            ] }),
            M.isActive && /* @__PURE__ */ e("div", { className: "w-2 h-2 bg-blue-500 rounded-full" })
          ]
        },
        M.id
      )) })
    ] }),
    /* @__PURE__ */ e("div", { className: "border-b border-gray-200", children: /* @__PURE__ */ s("div", { className: "flex", children: [
      /* @__PURE__ */ s(
        "button",
        {
          onClick: () => ye("tables"),
          className: `flex-1 py-3 px-4 font-semibold text-sm transition-all flex items-center justify-center gap-2 ${F === "tables" ? "bg-white text-emerald-600 border-b-2 border-emerald-600" : "bg-gray-50 text-gray-600 hover:bg-gray-100"}`,
          children: [
            /* @__PURE__ */ e(Et, { className: "w-4 h-4" }),
            "Tables"
          ]
        }
      ),
      /* @__PURE__ */ s(
        "button",
        {
          onClick: () => ye("objects"),
          className: `flex-1 py-3 px-4 font-semibold text-sm transition-all flex items-center justify-center gap-2 ${F === "objects" ? "bg-white text-purple-600 border-b-2 border-purple-600" : "bg-gray-50 text-gray-600 hover:bg-gray-100"}`,
          children: [
            /* @__PURE__ */ e(Gt, { className: "w-4 h-4" }),
            "Objects"
          ]
        }
      ),
      /* @__PURE__ */ s(
        "button",
        {
          onClick: () => ye("roomLayout"),
          className: `flex-1 py-3 px-4 font-semibold text-sm transition-all flex items-center justify-center gap-2 ${F === "roomLayout" ? "bg-white text-gray-700 border-b-2 border-gray-700" : "bg-gray-50 text-gray-600 hover:bg-gray-100"}`,
          children: [
            /* @__PURE__ */ e(zt, { className: "w-4 h-4" }),
            "Room"
          ]
        }
      )
    ] }) }),
    F === "tables" && /* @__PURE__ */ s("div", { className: "p-4 border-b border-gray-200", children: [
      /* @__PURE__ */ e("h3", { className: "text-md font-semibold text-gray-800 mb-3", children: "Add Tables" }),
      /* @__PURE__ */ e("div", { className: "grid grid-cols-2 gap-3", children: Object.entries(Ot).map(([M, Ne]) => /* @__PURE__ */ s(
        "button",
        {
          onClick: () => q(M),
          className: "p-3 border-2 border-gray-200 rounded-lg hover:border-emerald-400 hover:bg-emerald-50 transition-all flex flex-col items-center gap-2 hover:shadow-md",
          children: [
            /* @__PURE__ */ e(Ne, { className: "w-6 h-6 text-emerald-600" }),
            /* @__PURE__ */ e("span", { className: "text-xs text-gray-700 capitalize font-medium", children: M })
          ]
        },
        M
      )) })
    ] }),
    F === "objects" && /* @__PURE__ */ s("div", { className: "p-4 border-b border-gray-200", children: [
      /* @__PURE__ */ e("h3", { className: "text-md font-semibold text-gray-800 mb-3", children: "Add Objects" }),
      /* @__PURE__ */ e("div", { className: "space-y-3", children: Object.keys(Qe).map((M) => {
        const Ne = rt[M], te = wt[M], Q = Qe[M];
        return /* @__PURE__ */ s(
          "button",
          {
            onClick: () => ie(M),
            className: `w-full p-4 ${te.bg} border-2 ${te.border} rounded-xl hover:scale-105 transition-all flex items-center gap-3 shadow-lg hover:shadow-xl`,
            children: [
              /* @__PURE__ */ e("div", { className: "bg-white/20 p-2 rounded-lg", children: /* @__PURE__ */ e(Ne, { className: `w-6 h-6 ${te.text}`, strokeWidth: 2.5 }) }),
              /* @__PURE__ */ s("div", { className: "flex-1 text-left", children: [
                /* @__PURE__ */ e("span", { className: `text-base font-bold ${te.text}`, children: Q }),
                /* @__PURE__ */ e("div", { className: "text-xs text-white/80 mt-0.5", children: "Click to add to floor" })
              ] })
            ]
          },
          M
        );
      }) })
    ] }),
    F === "roomLayout" && /* @__PURE__ */ s("div", { className: "p-4 border-b border-gray-200", children: [
      /* @__PURE__ */ s("div", { className: "mb-6", children: [
        /* @__PURE__ */ e("h3", { className: "text-md font-semibold text-gray-800 mb-3", children: "Draw Walls" }),
        /* @__PURE__ */ e("div", { className: "space-y-2", children: ["wall", "door", "window"].map((M) => {
          const Ne = Ft[M], te = je[M];
          return /* @__PURE__ */ s(
            "button",
            {
              onClick: () => P(M),
              className: `w-full p-3 border-2 rounded-lg transition-all flex items-center gap-3 shadow-md hover:shadow-lg ${{
                wall: "bg-gradient-to-br from-gray-600 to-gray-800 border-gray-700 text-white hover:from-gray-700 hover:to-gray-900",
                door: "bg-gradient-to-br from-amber-500 to-amber-700 border-amber-600 text-white hover:from-amber-600 hover:to-amber-800",
                window: "bg-gradient-to-br from-blue-500 to-blue-700 border-blue-600 text-white hover:from-blue-600 hover:to-blue-800"
              }[M]}`,
              children: [
                /* @__PURE__ */ e(Ne, { className: "w-5 h-5", strokeWidth: 2.5 }),
                /* @__PURE__ */ e("span", { className: "text-sm font-semibold", children: te })
              ]
            },
            M
          );
        }) })
      ] }),
      /* @__PURE__ */ s("div", { children: [
        /* @__PURE__ */ e("h3", { className: "text-md font-semibold text-gray-800 mb-3", children: "Add Elements" }),
        /* @__PURE__ */ e("div", { className: "space-y-2", children: ["pillar", "column", "stairs"].map((M) => {
          const Ne = Zt[M], te = _t[M], Q = bt[M];
          return /* @__PURE__ */ s(
            "button",
            {
              onClick: () => oe(M),
              className: `w-full p-3 ${te.bg} border-2 ${te.border} rounded-lg hover:scale-105 transition-all flex items-center gap-3 shadow-md hover:shadow-lg`,
              children: [
                /* @__PURE__ */ e("div", { className: "bg-white/10 p-1.5 rounded", children: /* @__PURE__ */ e(Ne, { className: `w-5 h-5 ${te.text}`, strokeWidth: 2.5 }) }),
                /* @__PURE__ */ e("span", { className: `text-sm font-semibold ${te.text}`, children: Q })
              ]
            },
            M
          );
        }) })
      ] })
    ] }),
    K && /* @__PURE__ */ s("div", { className: "p-4 border-b border-gray-200", children: [
      /* @__PURE__ */ s("div", { className: "flex items-center justify-between mb-3", children: [
        /* @__PURE__ */ e("h3", { className: "text-md font-semibold text-gray-800", children: "Table Properties" }),
        /* @__PURE__ */ s("div", { className: "flex gap-1", children: [
          /* @__PURE__ */ e(
            "button",
            {
              onClick: U,
              className: "p-1 text-blue-600 hover:bg-blue-100 rounded transition-colors",
              title: "Rotate Table",
              children: /* @__PURE__ */ e(Pt, { className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              onClick: A,
              className: "p-1 text-green-600 hover:bg-green-100 rounded transition-colors",
              title: "Duplicate Table",
              children: /* @__PURE__ */ e(st, { className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              onClick: _,
              className: "p-1 text-red-600 hover:bg-red-100 rounded transition-colors",
              title: "Delete Table",
              children: /* @__PURE__ */ e(Ke, { className: "w-4 h-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ s("div", { className: "space-y-3 text-sm text-gray-600", children: [
        /* @__PURE__ */ s("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ s("div", { children: [
            /* @__PURE__ */ e("div", { className: "text-xs uppercase tracking-wide text-gray-400", children: "Name" }),
            /* @__PURE__ */ e("div", { className: "font-semibold text-gray-800", children: K.name })
          ] }),
          /* @__PURE__ */ s("div", { children: [
            /* @__PURE__ */ e("div", { className: "text-xs uppercase tracking-wide text-gray-400", children: "Shape" }),
            /* @__PURE__ */ e("div", { className: "font-semibold text-gray-800 capitalize", children: K.shape })
          ] }),
          /* @__PURE__ */ s("div", { children: [
            /* @__PURE__ */ e("div", { className: "text-xs uppercase tracking-wide text-gray-400", children: "Size" }),
            /* @__PURE__ */ e("div", { className: "font-semibold text-gray-800", children: Qt[K.size] })
          ] }),
          /* @__PURE__ */ s("div", { children: [
            /* @__PURE__ */ e("div", { className: "text-xs uppercase tracking-wide text-gray-400", children: "Seats" }),
            /* @__PURE__ */ e("div", { className: "font-semibold text-gray-800", children: $e.length })
          ] })
        ] }),
        /* @__PURE__ */ e("div", { className: "bg-blue-50 border border-blue-200 rounded-md p-3", children: /* @__PURE__ */ s("p", { className: "text-xs text-blue-700", children: [
          "💡 ",
          /* @__PURE__ */ e("span", { className: "font-semibold", children: "Tip:" }),
          " Use the ",
          /* @__PURE__ */ e("span", { className: "font-semibold", children: "Manage Chairs" }),
          " button in the toolbar above to add or remove chairs from each side of the table."
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ s("div", { className: "p-4 mt-auto space-y-3", children: [
      /* @__PURE__ */ s("div", { className: "bg-gray-50 p-3 rounded-lg", children: [
        /* @__PURE__ */ e("h4", { className: "text-sm font-semibold text-gray-700 mb-2", children: "Current Floor Stats" }),
        /* @__PURE__ */ s("div", { className: "grid grid-cols-2 gap-4 text-sm", children: [
          /* @__PURE__ */ s("div", { children: [
            /* @__PURE__ */ e("div", { className: "text-gray-600", children: "Tables" }),
            /* @__PURE__ */ e("div", { className: "font-bold text-lg text-emerald-600", children: (d == null ? void 0 : d.tables.length) ?? 0 })
          ] }),
          /* @__PURE__ */ s("div", { children: [
            /* @__PURE__ */ e("div", { className: "text-gray-600", children: "Total Seats" }),
            /* @__PURE__ */ e("div", { className: "font-bold text-lg text-amber-600", children: (d == null ? void 0 : d.chairs.length) ?? 0 })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ s("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ s(
          "button",
          {
            onClick: ve,
            className: "flex-1 bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2 font-medium",
            children: [
              /* @__PURE__ */ e(It, { className: "w-4 h-4" }),
              "Save"
            ]
          }
        ),
        /* @__PURE__ */ s(
          "button",
          {
            onClick: Ye,
            className: "flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 font-medium",
            children: [
              /* @__PURE__ */ e(Rt, { className: "w-4 h-4" }),
              "Load"
            ]
          }
        )
      ] })
    ] })
  ] });
}, gt = ft, en = ["top", "right", "bottom", "left"], tn = ["small", "medium", "large"], nn = ({
  showGrid: o,
  selectedTable: d,
  selectedObject: m,
  selectedWall: C,
  selectedFixedElement: i,
  selectedTableChairs: v,
  onToggleGrid: q,
  onAddChair: ie,
  onRemoveChair: P,
  onChangeTableSize: oe,
  onTableNameChange: U,
  onCustomTableSize: A,
  onObjectNameChange: _,
  onObjectResize: ve,
  onRemoveObject: Ye,
  onRemoveWall: K,
  onRemoveFixedElement: $e,
  onChangeWallThickness: ge,
  onConvertWallType: be,
  onFixedElementNameChange: g,
  onFixedElementResize: I,
  onChairSizeChange: F,
  onResetChairSizes: ye,
  on3DPreview: le,
  onObjectRotate: ze,
  tableCount: xe,
  chairCount: De,
  objectCount: M,
  wallCount: Ne,
  fixedElementCount: te,
  selectedElementType: Q
}) => {
  const Le = Te(null), n = Te(null), Z = Te(null), H = Te(null), [E, c] = J(!1), [R, p] = J(!1), [T, D] = J(!1), [z, re] = J(!1), [O, de] = J(!1), [ne, L] = J(90), [G, $] = J(90), [b, se] = J(120), [j, Ce] = J(80), [X, S] = J(60), [f, pe] = J(60);
  return Ve(() => {
    const u = (N) => {
      Le.current && !Le.current.contains(N.target) && c(!1), n.current && !n.current.contains(N.target) && p(!1), Z.current && !Z.current.contains(N.target) && D(!1), H.current && !H.current.contains(N.target) && re(!1);
    };
    return document.addEventListener("mousedown", u), () => document.removeEventListener("mousedown", u);
  }, []), Ve(() => {
    d ? (L(d.width), $(d.height)) : (c(!1), p(!1), de(!1)), m ? (se(m.width), Ce(m.height)) : D(!1), i ? (S(i.width), pe(i.height)) : re(!1);
  }, [d, m, i]), /* @__PURE__ */ e("div", { className: "bg-white border-b border-gray-200 shadow-sm min-h-[72px]", children: /* @__PURE__ */ s("div", { className: "px-4 py-3 flex items-center justify-between min-h-[72px]", children: [
    /* @__PURE__ */ s("div", { className: "flex items-center gap-3 flex-wrap", children: [
      /* @__PURE__ */ s(
        "button",
        {
          onClick: q,
          className: `px-3 py-2 rounded-lg transition-all flex items-center gap-2 text-sm font-medium ${o ? "bg-blue-500 text-white shadow-md hover:bg-blue-600" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`,
          title: o ? "Hide Grid" : "Show Grid",
          children: [
            o ? /* @__PURE__ */ e(Tt, { className: "w-4 h-4" }) : /* @__PURE__ */ e($t, { className: "w-4 h-4" }),
            /* @__PURE__ */ e("span", { children: "Grid" })
          ]
        }
      ),
      d && /* @__PURE__ */ s(_e, { children: [
        /* @__PURE__ */ e("div", { className: "w-px h-8 bg-gray-300" }),
        /* @__PURE__ */ s("div", { ref: Le, className: "relative", children: [
          /* @__PURE__ */ s(
            "button",
            {
              onClick: () => {
                c(!E), p(!1);
              },
              className: "px-3 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm font-semibold",
              children: [
                /* @__PURE__ */ e(nt, { className: "w-4 h-4" }),
                /* @__PURE__ */ e("span", { children: "Manage Chairs" }),
                /* @__PURE__ */ e("span", { className: "ml-1 px-1.5 py-0.5 bg-white/20 rounded text-xs", children: v.length })
              ]
            }
          ),
          E && /* @__PURE__ */ s("div", { className: "absolute top-full left-0 mt-2 w-72 bg-white border border-gray-200 rounded-xl shadow-2xl z-50 overflow-hidden", children: [
            /* @__PURE__ */ e("div", { className: "bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-3 text-white", children: /* @__PURE__ */ s("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ s("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e(nt, { className: "w-4 h-4" }),
                /* @__PURE__ */ e("span", { className: "font-semibold text-sm", children: "Chair Positions" })
              ] }),
              /* @__PURE__ */ s("span", { className: "text-xs bg-white/20 px-2 py-1 rounded", children: [
                "Total: ",
                v.length
              ] })
            ] }) }),
            /* @__PURE__ */ s("div", { className: "p-3 space-y-2", children: [
              en.map((u) => {
                const N = v.filter((w) => w.position === u).length, Me = v.find((w) => w.position === u), W = (Me == null ? void 0 : Me.size) || 40;
                return /* @__PURE__ */ s(
                  "div",
                  {
                    className: "bg-gray-50 rounded-lg px-3 py-2 border border-gray-200 hover:border-amber-300 transition-all space-y-2",
                    children: [
                      /* @__PURE__ */ s("div", { className: "flex items-center justify-between", children: [
                        /* @__PURE__ */ s("div", { className: "flex items-center gap-3", children: [
                          /* @__PURE__ */ e("div", { className: "w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-700 rounded-md flex items-center justify-center text-white text-xs font-bold uppercase", children: u[0] }),
                          /* @__PURE__ */ s("div", { children: [
                            /* @__PURE__ */ e("div", { className: "text-sm font-medium text-gray-800 capitalize", children: u }),
                            /* @__PURE__ */ s("div", { className: "text-xs text-gray-500", children: [
                              N,
                              " chair",
                              N !== 1 ? "s" : ""
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ s("div", { className: "flex items-center gap-1", children: [
                          /* @__PURE__ */ e(
                            "button",
                            {
                              onClick: () => P(u),
                              disabled: N === 0,
                              className: "w-7 h-7 rounded-md bg-red-50 text-red-600 hover:bg-red-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center",
                              title: "Remove chair",
                              children: /* @__PURE__ */ e(xt, { className: "w-4 h-4" })
                            }
                          ),
                          /* @__PURE__ */ e(
                            "button",
                            {
                              onClick: () => ie(u),
                              className: "w-7 h-7 rounded-md bg-green-50 text-green-600 hover:bg-green-100 transition-all flex items-center justify-center",
                              title: "Add chair",
                              children: /* @__PURE__ */ e(st, { className: "w-4 h-4" })
                            }
                          )
                        ] })
                      ] }),
                      N > 0 && /* @__PURE__ */ s("div", { className: "pt-2 border-t border-gray-200", children: [
                        /* @__PURE__ */ s("div", { className: "flex items-center justify-between mb-1", children: [
                          /* @__PURE__ */ e("span", { className: "text-xs font-medium text-gray-600", children: "Chair Size" }),
                          /* @__PURE__ */ s("span", { className: "text-xs font-bold text-amber-600", children: [
                            W,
                            "px"
                          ] })
                        ] }),
                        /* @__PURE__ */ e(
                          "input",
                          {
                            type: "range",
                            min: "20",
                            max: "60",
                            value: W,
                            onChange: (w) => F == null ? void 0 : F(u, parseInt(w.target.value)),
                            className: "w-full h-2 bg-gradient-to-r from-amber-200 to-amber-400 rounded-full appearance-none cursor-pointer slider-thumb",
                            style: {
                              background: `linear-gradient(to right, rgb(251, 191, 36) 0%, rgb(251, 191, 36) ${(W - 20) / 40 * 100}%, rgb(253, 230, 138) ${(W - 20) / 40 * 100}%, rgb(253, 230, 138) 100%)`
                            }
                          }
                        )
                      ] })
                    ]
                  },
                  u
                );
              }),
              /* @__PURE__ */ s(
                "button",
                {
                  onClick: () => ye == null ? void 0 : ye(),
                  className: "w-full mt-3 px-3 py-2 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all flex items-center justify-center gap-2 text-sm font-medium",
                  children: [
                    /* @__PURE__ */ e(at, { className: "w-4 h-4" }),
                    /* @__PURE__ */ e("span", { children: "Reset All Sizes" })
                  ]
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ s("div", { ref: n, className: "relative", children: [
          /* @__PURE__ */ s(
            "button",
            {
              onClick: () => {
                p(!R), c(!1);
              },
              className: "px-3 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm font-semibold",
              children: [
                /* @__PURE__ */ e(Ue, { className: "w-4 h-4" }),
                /* @__PURE__ */ s("span", { children: [
                  "Size: ",
                  gt[d.size]
                ] })
              ]
            }
          ),
          R && /* @__PURE__ */ s("div", { className: "absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-2xl z-50 overflow-hidden", children: [
            /* @__PURE__ */ e("div", { className: "bg-gradient-to-r from-emerald-500 to-emerald-600 px-4 py-2 text-white", children: /* @__PURE__ */ e("span", { className: "font-semibold text-sm", children: "Table Size" }) }),
            /* @__PURE__ */ s("div", { className: "p-3 space-y-2", children: [
              /* @__PURE__ */ e("div", { className: "flex gap-2", children: tn.map((u) => {
                const N = d.size === u;
                return /* @__PURE__ */ e(
                  "button",
                  {
                    onClick: () => {
                      oe(u), de(!1);
                    },
                    className: `flex-1 px-3 py-2 text-sm font-medium rounded-lg transition-all ${N && !O ? "bg-emerald-500 text-white shadow-sm" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
                    children: gt[u]
                  },
                  u
                );
              }) }),
              /* @__PURE__ */ s(
                "button",
                {
                  onClick: () => de(!O),
                  className: `w-full flex items-center justify-between px-3 py-2 rounded-lg transition-all ${O ? "bg-purple-500 text-white shadow-sm" : "bg-gradient-to-r from-purple-100 to-purple-50 text-purple-700 hover:from-purple-200 hover:to-purple-100"}`,
                  children: [
                    /* @__PURE__ */ s("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ e("span", { className: "text-sm font-semibold", children: "Pro Mode" }),
                      /* @__PURE__ */ e("span", { className: "text-xs bg-white/20 px-1.5 py-0.5 rounded", children: "Custom" })
                    ] }),
                    /* @__PURE__ */ e(Lt, { className: `w-4 h-4 transition-transform ${O ? "rotate-90" : ""}` })
                  ]
                }
              ),
              /* @__PURE__ */ e("div", { className: `overflow-hidden transition-all duration-300 ease-in-out ${O ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`, children: /* @__PURE__ */ s("div", { className: "pt-2 space-y-3 border-t border-gray-200", children: [
                /* @__PURE__ */ s("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ s("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ e("label", { className: "text-xs font-semibold text-gray-600 uppercase tracking-wide", children: "Width" }),
                    /* @__PURE__ */ s("span", { className: "text-xs font-mono bg-purple-100 text-purple-700 px-2 py-0.5 rounded", children: [
                      ne,
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
                      value: ne,
                      onChange: (u) => {
                        const N = parseInt(u.target.value);
                        L(N), A(N, G);
                      },
                      className: "w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer slider-thumb",
                      style: {
                        background: `linear-gradient(to right, rgb(168, 85, 247) 0%, rgb(168, 85, 247) ${(ne - 40) / 160 * 100}%, rgb(233, 213, 255) ${(ne - 40) / 160 * 100}%, rgb(233, 213, 255) 100%)`
                      }
                    }
                  )
                ] }),
                /* @__PURE__ */ s("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ s("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ e("label", { className: "text-xs font-semibold text-gray-600 uppercase tracking-wide", children: "Height" }),
                    /* @__PURE__ */ s("span", { className: "text-xs font-mono bg-purple-100 text-purple-700 px-2 py-0.5 rounded", children: [
                      G,
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
                      value: G,
                      onChange: (u) => {
                        const N = parseInt(u.target.value);
                        $(N), A(ne, N);
                      },
                      className: "w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer slider-thumb",
                      style: {
                        background: `linear-gradient(to right, rgb(168, 85, 247) 0%, rgb(168, 85, 247) ${(G - 40) / 160 * 100}%, rgb(233, 213, 255) ${(G - 40) / 160 * 100}%, rgb(233, 213, 255) 100%)`
                      }
                    }
                  )
                ] }),
                /* @__PURE__ */ e("p", { className: "text-xs text-gray-500 italic pt-1", children: "Drag sliders for precise sizing" })
              ] }) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ s("div", { className: "flex items-center gap-2 bg-gray-50 border border-gray-300 rounded-lg px-3 py-2", children: [
          /* @__PURE__ */ e("span", { className: "text-xs font-semibold uppercase tracking-wide text-gray-500", children: "Name:" }),
          /* @__PURE__ */ e(
            "input",
            {
              type: "text",
              value: d.name,
              onChange: (u) => U(u.target.value),
              className: "bg-transparent text-sm text-gray-800 font-medium focus:outline-none w-32",
              placeholder: "Table name"
            }
          )
        ] })
      ] }),
      m && /* @__PURE__ */ s(_e, { children: [
        /* @__PURE__ */ e("div", { className: "w-px h-8 bg-gray-300" }),
        /* @__PURE__ */ s("div", { ref: Z, className: "relative", children: [
          /* @__PURE__ */ s(
            "button",
            {
              onClick: () => D(!T),
              className: `px-3 py-2 rounded-lg ${m.type === "bar" ? "bg-gradient-to-r from-purple-500 to-purple-600" : m.type === "kitchen" ? "bg-gradient-to-r from-orange-500 to-orange-600" : "bg-gradient-to-r from-cyan-500 to-cyan-600"} text-white shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm font-semibold`,
              children: [
                (() => {
                  const u = rt[m.type];
                  return /* @__PURE__ */ e(u, { className: "w-4 h-4" });
                })(),
                /* @__PURE__ */ s("span", { children: [
                  "Resize ",
                  Qe[m.type]
                ] })
              ]
            }
          ),
          T && /* @__PURE__ */ s("div", { className: "absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-2xl z-50 overflow-hidden", children: [
            /* @__PURE__ */ e("div", { className: `${m.type === "bar" ? "bg-gradient-to-r from-purple-500 to-purple-600" : m.type === "kitchen" ? "bg-gradient-to-r from-orange-500 to-orange-600" : "bg-gradient-to-r from-cyan-500 to-cyan-600"} px-4 py-2 text-white`, children: /* @__PURE__ */ e("span", { className: "font-semibold text-sm", children: "Custom Size" }) }),
            /* @__PURE__ */ s("div", { className: "p-3 space-y-3", children: [
              /* @__PURE__ */ s("div", { className: "space-y-1", children: [
                /* @__PURE__ */ s("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ e("label", { className: "text-xs font-semibold text-gray-600 uppercase tracking-wide", children: "Width" }),
                  /* @__PURE__ */ s("span", { className: `text-xs font-mono px-2 py-0.5 rounded ${m.type === "bar" ? "bg-purple-100 text-purple-700" : m.type === "kitchen" ? "bg-orange-100 text-orange-700" : "bg-cyan-100 text-cyan-700"}`, children: [
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
                    onChange: (u) => {
                      const N = parseInt(u.target.value);
                      se(N), ve(N, j);
                    },
                    className: "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb",
                    style: {
                      background: `linear-gradient(to right, ${m.type === "bar" ? "rgb(168, 85, 247)" : m.type === "kitchen" ? "rgb(249, 115, 22)" : "rgb(6, 182, 212)"} 0%, ${m.type === "bar" ? "rgb(168, 85, 247)" : m.type === "kitchen" ? "rgb(249, 115, 22)" : "rgb(6, 182, 212)"} ${(b - 60) / 940 * 100}%, rgb(229, 231, 235) ${(b - 60) / 940 * 100}%, rgb(229, 231, 235) 100%)`
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ s("div", { className: "space-y-1", children: [
                /* @__PURE__ */ s("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ e("label", { className: "text-xs font-semibold text-gray-600 uppercase tracking-wide", children: "Height" }),
                  /* @__PURE__ */ s("span", { className: `text-xs font-mono px-2 py-0.5 rounded ${m.type === "bar" ? "bg-purple-100 text-purple-700" : m.type === "kitchen" ? "bg-orange-100 text-orange-700" : "bg-cyan-100 text-cyan-700"}`, children: [
                    j,
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
                    value: j,
                    onChange: (u) => {
                      const N = parseInt(u.target.value);
                      Ce(N), ve(b, N);
                    },
                    className: "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb",
                    style: {
                      background: `linear-gradient(to right, ${m.type === "bar" ? "rgb(168, 85, 247)" : m.type === "kitchen" ? "rgb(249, 115, 22)" : "rgb(6, 182, 212)"} 0%, ${m.type === "bar" ? "rgb(168, 85, 247)" : m.type === "kitchen" ? "rgb(249, 115, 22)" : "rgb(6, 182, 212)"} ${(j - 60) / 940 * 100}%, rgb(229, 231, 235) ${(j - 60) / 940 * 100}%, rgb(229, 231, 235) 100%)`
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ e("p", { className: "text-xs text-gray-500 italic pt-1", children: "Drag sliders to resize the object" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ s(
          "button",
          {
            onClick: () => {
              const u = ((m.rotation || 0) + 90) % 360;
              ze == null || ze(u);
            },
            className: `px-3 py-2 rounded-lg ${m.type === "bar" ? "bg-gradient-to-r from-purple-600 to-purple-700" : m.type === "kitchen" ? "bg-gradient-to-r from-orange-600 to-orange-700" : "bg-gradient-to-r from-cyan-600 to-cyan-700"} text-white shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm font-semibold`,
            title: "Rotate 90°",
            children: [
              /* @__PURE__ */ e(at, { className: "w-4 h-4" }),
              /* @__PURE__ */ e("span", { children: "Rotate" })
            ]
          }
        ),
        /* @__PURE__ */ s(
          "button",
          {
            onClick: Ye,
            className: "px-3 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm font-semibold",
            title: "Delete Object",
            children: [
              /* @__PURE__ */ e(Ke, { className: "w-4 h-4" }),
              /* @__PURE__ */ e("span", { children: "Delete" })
            ]
          }
        ),
        /* @__PURE__ */ s("div", { className: "flex items-center gap-2 bg-gray-50 border border-gray-300 rounded-lg px-3 py-2", children: [
          /* @__PURE__ */ e("span", { className: "text-xs font-semibold uppercase tracking-wide text-gray-500", children: "Name:" }),
          /* @__PURE__ */ e(
            "input",
            {
              type: "text",
              value: m.name,
              onChange: (u) => _(u.target.value),
              className: "bg-transparent text-sm text-gray-800 font-medium focus:outline-none w-32",
              placeholder: "Object name"
            }
          )
        ] })
      ] }),
      C && /* @__PURE__ */ s(_e, { children: [
        /* @__PURE__ */ e("div", { className: "w-px h-8 bg-gray-300" }),
        be && /* @__PURE__ */ s("div", { className: "flex items-center gap-1 bg-gray-50 border border-gray-300 rounded-lg p-1", children: [
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
        ge && /* @__PURE__ */ s("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e("span", { className: "text-xs font-semibold text-gray-600", children: "Thickness:" }),
          /* @__PURE__ */ s(
            "select",
            {
              value: C.thickness,
              onChange: (u) => ge(Number(u.target.value)),
              className: "px-2 py-1 text-sm border border-gray-300 rounded bg-white hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500",
              children: [
                /* @__PURE__ */ e("option", { value: 4, children: "Thin (4px)" }),
                /* @__PURE__ */ e("option", { value: 8, children: "Normal (8px)" }),
                /* @__PURE__ */ e("option", { value: 12, children: "Thick (12px)" }),
                /* @__PURE__ */ e("option", { value: 16, children: "Very Thick (16px)" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ s("div", { className: "flex items-center gap-2 bg-gray-50 border border-gray-300 rounded-lg px-3 py-2", children: [
          /* @__PURE__ */ e("span", { className: "text-xs font-semibold uppercase tracking-wide text-gray-500", children: je[C.type] }),
          /* @__PURE__ */ s("span", { className: "text-sm text-gray-600", children: [
            Math.round(Math.sqrt(
              Math.pow(C.endX - C.startX, 2) + Math.pow(C.endY - C.startY, 2)
            )),
            "px"
          ] })
        ] }),
        /* @__PURE__ */ s(
          "button",
          {
            onClick: K,
            className: "px-3 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm font-semibold",
            title: "Delete Wall",
            children: [
              /* @__PURE__ */ e(Ke, { className: "w-4 h-4" }),
              /* @__PURE__ */ e("span", { children: "Delete" })
            ]
          }
        )
      ] }),
      i && /* @__PURE__ */ s(_e, { children: [
        /* @__PURE__ */ e("div", { className: "w-px h-8 bg-gray-300" }),
        /* @__PURE__ */ e("div", { className: "flex items-center gap-2 bg-gray-50 border border-gray-300 rounded-lg px-3 py-2", children: /* @__PURE__ */ e("span", { className: "text-xs font-semibold uppercase tracking-wide text-gray-500", children: bt[i.type] }) }),
        I && /* @__PURE__ */ s("div", { ref: H, className: "relative", children: [
          /* @__PURE__ */ s(
            "button",
            {
              onClick: () => re(!z),
              className: "px-3 py-2 rounded-lg bg-gray-600 hover:bg-gray-700 text-white shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm font-semibold",
              children: [
                /* @__PURE__ */ e(Ue, { className: "w-4 h-4" }),
                /* @__PURE__ */ e("span", { children: "Resize" })
              ]
            }
          ),
          z && /* @__PURE__ */ e("div", { className: "absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 p-4 z-50 min-w-[320px]", children: /* @__PURE__ */ s("div", { className: "space-y-4", children: [
            /* @__PURE__ */ s("div", { children: [
              /* @__PURE__ */ s("div", { className: "flex justify-between items-center mb-2", children: [
                /* @__PURE__ */ e("label", { className: "text-sm font-semibold text-gray-700", children: "Width" }),
                /* @__PURE__ */ s("span", { className: "text-sm font-bold text-blue-600", children: [
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
                  onChange: (u) => {
                    const N = parseInt(u.target.value);
                    S(N), I(N, f);
                  },
                  className: "w-full h-2 bg-gradient-to-r from-blue-200 to-blue-500 rounded-lg appearance-none cursor-pointer slider"
                }
              ),
              /* @__PURE__ */ s("div", { className: "flex justify-between text-xs text-gray-500 mt-1", children: [
                /* @__PURE__ */ e("span", { children: "30px" }),
                /* @__PURE__ */ e("span", { children: "200px" })
              ] })
            ] }),
            /* @__PURE__ */ s("div", { children: [
              /* @__PURE__ */ s("div", { className: "flex justify-between items-center mb-2", children: [
                /* @__PURE__ */ e("label", { className: "text-sm font-semibold text-gray-700", children: "Height" }),
                /* @__PURE__ */ s("span", { className: "text-sm font-bold text-blue-600", children: [
                  f,
                  "px"
                ] })
              ] }),
              /* @__PURE__ */ e(
                "input",
                {
                  type: "range",
                  min: "30",
                  max: "200",
                  value: f,
                  onChange: (u) => {
                    const N = parseInt(u.target.value);
                    pe(N), I(X, N);
                  },
                  className: "w-full h-2 bg-gradient-to-r from-green-200 to-green-500 rounded-lg appearance-none cursor-pointer slider"
                }
              ),
              /* @__PURE__ */ s("div", { className: "flex justify-between text-xs text-gray-500 mt-1", children: [
                /* @__PURE__ */ e("span", { children: "30px" }),
                /* @__PURE__ */ e("span", { children: "200px" })
              ] })
            ] }),
            /* @__PURE__ */ e("div", { className: "pt-3 border-t border-gray-200", children: /* @__PURE__ */ s("div", { className: "text-center", children: [
              /* @__PURE__ */ e("span", { className: "text-xs text-gray-600", children: "Current Size: " }),
              /* @__PURE__ */ s("span", { className: "text-sm font-bold text-gray-800", children: [
                X,
                " × ",
                f,
                "px"
              ] })
            ] }) })
          ] }) })
        ] }),
        /* @__PURE__ */ s(
          "button",
          {
            onClick: $e,
            className: "px-3 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm font-semibold",
            title: "Delete Element",
            children: [
              /* @__PURE__ */ e(Ke, { className: "w-4 h-4" }),
              /* @__PURE__ */ e("span", { children: "Delete" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ s("div", { className: "flex items-center gap-3 flex-wrap", children: [
      /* @__PURE__ */ s(
        "button",
        {
          onClick: le,
          className: "px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center gap-2 font-semibold text-sm",
          children: [
            /* @__PURE__ */ e(Wt, { className: "w-4 h-4" }),
            "3D"
          ]
        }
      ),
      /* @__PURE__ */ s("div", { className: "flex items-center gap-1.5 px-2 py-1 bg-emerald-50 rounded text-xs", children: [
        /* @__PURE__ */ e("div", { className: "w-2 h-2 bg-emerald-600 rounded-full" }),
        /* @__PURE__ */ s("span", { className: "font-medium text-emerald-800", children: [
          "Tables: ",
          xe
        ] })
      ] }),
      /* @__PURE__ */ s("div", { className: "flex items-center gap-1.5 px-2 py-1 bg-amber-50 rounded text-xs", children: [
        /* @__PURE__ */ e("div", { className: "w-2 h-2 bg-amber-600 rounded-full" }),
        /* @__PURE__ */ s("span", { className: "font-medium text-amber-800", children: [
          "Chairs: ",
          De
        ] })
      ] }),
      /* @__PURE__ */ s("div", { className: "flex items-center gap-1.5 px-2 py-1 bg-purple-50 rounded text-xs", children: [
        /* @__PURE__ */ e("div", { className: "w-2 h-2 bg-purple-600 rounded-full" }),
        /* @__PURE__ */ s("span", { className: "font-medium text-purple-800", children: [
          "Objects: ",
          M
        ] })
      ] }),
      Q && /* @__PURE__ */ s("div", { className: "flex items-center gap-1.5 px-2 py-1 bg-blue-50 rounded text-xs", children: [
        /* @__PURE__ */ e("div", { className: "w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" }),
        /* @__PURE__ */ s("span", { className: "font-medium text-blue-800 capitalize", children: [
          "Selected: ",
          Q
        ] })
      ] })
    ] })
  ] }) });
}, pt = {
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
}, sn = ({ floor: o, isOpen: d, onClose: m }) => {
  const C = Te(null), i = Te(null), v = Te(null), q = Te(null), ie = Te(null), [P, oe] = J(!1), [U, A] = J("default"), [_, ve] = J(!1), Ye = Te(3e-3), K = Te(null), $e = (g) => {
    if (!v.current || _)
      return;
    const I = pt[g], F = v.current;
    K.current = {
      startPos: F.position.clone(),
      endPos: new t.Vector3(I.position.x, I.position.y, I.position.z),
      startTarget: new t.Vector3(0, 100, 0),
      endTarget: new t.Vector3(I.target.x, I.target.y, I.target.z),
      progress: 0
    }, ve(!0), A(g), oe(!1);
  }, ge = (g) => {
    if (!v.current || _)
      return;
    const I = v.current, F = Math.sqrt(I.position.x ** 2 + I.position.z ** 2), ye = Math.atan2(I.position.z, I.position.x);
    switch (g) {
      case "left":
        const le = ye + 0.2;
        I.position.x = F * Math.cos(le), I.position.z = F * Math.sin(le);
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
  }, be = (g) => {
    !v.current || _ || (v.current.position.multiplyScalar(g), v.current.lookAt(0, 100, 0));
  };
  return Ve(() => {
    if (!d || !C.current)
      return;
    const g = new t.Scene();
    g.background = new t.Color(14608111), i.current = g;
    const I = new t.PerspectiveCamera(
      45,
      C.current.clientWidth / C.current.clientHeight,
      0.1,
      1e4
    );
    I.position.set(1050, 800, 1050), I.lookAt(0, 100, 0), v.current = I;
    const F = new t.WebGLRenderer({ antialias: !0, alpha: !0 });
    F.setSize(C.current.clientWidth, C.current.clientHeight), F.shadowMap.enabled = !0, F.shadowMap.type = t.PCFSoftShadowMap, F.toneMapping = t.ACESFilmicToneMapping, F.toneMappingExposure = 1.2, C.current.appendChild(F.domElement), q.current = F;
    const ye = new t.PMREMGenerator(F), le = new t.Scene();
    le.background = new t.Color(16777215);
    const ze = ye.fromScene(le).texture;
    g.environment = ze, ye.dispose(), g.add(new t.AmbientLight(16777215, 0.6));
    const xe = new t.DirectionalLight(16777215, 0.8);
    xe.position.set(400, 600, 300), xe.castShadow = !0, xe.shadow.mapSize.width = 4096, xe.shadow.mapSize.height = 4096, xe.shadow.camera.left = xe.shadow.camera.bottom = -700, xe.shadow.camera.right = xe.shadow.camera.top = 700, xe.shadow.bias = -1e-4, g.add(xe);
    const De = new t.DirectionalLight(16777215, 0.3);
    De.position.set(-400, 400, -300), g.add(De);
    const M = new t.DirectionalLight(16777215, 0.2);
    M.position.set(0, 300, -500), g.add(M);
    const Ne = new t.Mesh(
      new t.PlaneGeometry(1200, 1200),
      new t.MeshStandardMaterial({ color: 13684949, roughness: 0.8, metalness: 0.2 })
      // Medium grey
    );
    Ne.rotation.x = -Math.PI / 2, Ne.receiveShadow = !0, g.add(Ne);
    const te = new t.GridHelper(3e3, 150, 10526888, 12105920);
    te.position.y = 1, g.add(te), o.walls.forEach((n) => {
      const Z = Math.sqrt(Math.pow(n.endX - n.startX, 2) + Math.pow(n.endY - n.startY, 2)), H = Math.atan2(n.endY - n.startY, n.endX - n.startX), E = n.type === "window" ? 80 : 120, c = n.startX + (n.endX - n.startX) / 2 - 400, R = -(n.startY + (n.endY - n.startY) / 2 - 400);
      if (n.type === "door") {
        const p = new t.Group(), T = Z, D = E, z = n.thickness * 0.8, re = new t.MeshStandardMaterial({
          color: 3812901,
          // dark stained wood
          roughness: 0.9,
          metalness: 0
        }), O = 8, de = new t.Mesh(
          new t.BoxGeometry(T, O, n.thickness + 4),
          re
        );
        de.position.y = D / 2 - O / 2, p.add(de);
        const ne = new t.Mesh(
          new t.BoxGeometry(T, O, n.thickness + 4),
          re
        );
        ne.position.y = -D / 2 + O / 2, p.add(ne);
        const L = new t.Mesh(
          new t.BoxGeometry(O, D, n.thickness + 4),
          re
        );
        L.position.x = -T / 2 + O / 2, p.add(L);
        const G = L.clone();
        G.position.x = T / 2 - O / 2, p.add(G);
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
        }), se = (T - O * 2 - 4) / 2, j = D - O * 2 - 4, Ce = (Ee) => {
          const ke = new t.Group(), ce = new t.Mesh(
            new t.BoxGeometry(se, j, z),
            $
          );
          ke.add(ce);
          const he = new t.Mesh(
            new t.PlaneGeometry(se * 0.8, j * 0.85),
            b
          );
          he.position.set(0, 0, z / 2 + 0.1), ke.add(he);
          const Fe = new t.MeshStandardMaterial({
            color: 8947848,
            metalness: 0.4,
            roughness: 0.7
          }), x = new t.Mesh(
            new t.CylinderGeometry(0.6, 0.6, 12, 12),
            Fe
          );
          return x.rotation.z = Math.PI / 2, x.position.set(Ee > 0 ? -se * 0.35 : se * 0.35, 0, z / 2 + 1.5), ke.add(x), ke.position.x = Ee, ke;
        }, X = Ce(-se / 2), S = Ce(se / 2);
        p.add(X), p.add(S);
        const f = 14, pe = new t.PlaneGeometry(T * 0.9, f), u = document.createElement("canvas");
        u.width = 512, u.height = 128;
        const N = u.getContext("2d");
        N && (N.fillStyle = "#3a2e25", N.fillRect(0, 0, u.width, u.height), N.font = "bold 60px Arial", N.fillStyle = "#f5d590", N.textAlign = "center", N.textBaseline = "middle", N.fillText("WELCOME", u.width / 2, u.height / 2));
        const Me = new t.CanvasTexture(u), W = new t.MeshStandardMaterial({
          map: Me,
          roughness: 0.8,
          metalness: 0.1
        }), w = new t.Mesh(pe, W);
        w.position.set(0, D / 2 - O - f / 2 - 4, n.thickness / 2 + 2), p.add(w), p.position.set(c, D / 2, R), p.rotation.y = -H, p.castShadow = !0, p.receiveShadow = !0, g.add(p);
      } else if (n.type === "window") {
        const p = Z > 20 ? Z : 120, T = E, D = T * 0.45, z = T * 0.65, re = T * 0.1, O = T * 0.3, de = new t.MeshStandardMaterial({
          color: 13158608,
          // Grey-blue for window sills and wall sections
          roughness: 0.85,
          metalness: 0.05
        }), ne = new t.MeshPhysicalMaterial({
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
        }), G = new t.Mesh(
          new t.BoxGeometry(p, D, n.thickness),
          de
        );
        G.position.set(c, D / 2, R), G.rotation.y = -H, G.receiveShadow = !0, G.castShadow = !0, g.add(G);
        const $ = D + z / 2, b = 4, se = Math.max(2, Math.floor(p / 80)), j = (p - b * (se + 1)) / se;
        for (let u = 0; u < se; u++) {
          const N = -p / 2 + b + j / 2 + u * (j + b), Me = c + N * Math.cos(-H), W = R + N * Math.sin(-H), w = new t.Mesh(
            new t.BoxGeometry(j - 2, z - b * 2, 1),
            L
          );
          if (w.position.set(Me, $, W), w.rotation.y = -H, w.castShadow = !1, w.receiveShadow = !1, g.add(w), u < se - 1) {
            const Ee = -p / 2 + b + (u + 1) * j + (u + 0.5) * b, ke = c + Ee * Math.cos(-H), ce = R + Ee * Math.sin(-H), he = new t.Mesh(
              new t.BoxGeometry(b, z, n.thickness + 3),
              ne
            );
            he.position.set(ke, $, ce), he.rotation.y = -H, he.castShadow = !0, g.add(he);
          }
        }
        const Ce = D + z + re / 2, X = new t.Mesh(
          new t.BoxGeometry(p - b * 2, re - b, 1),
          L
        );
        X.position.set(c, Ce, R), X.rotation.y = -H, X.castShadow = !1, g.add(X);
        const S = new t.Mesh(
          new t.BoxGeometry(p, b, n.thickness + 2),
          ne
        );
        S.position.set(c, D + z + b / 2, R), S.rotation.y = -H, S.castShadow = !0, g.add(S);
        const f = new t.Mesh(
          new t.BoxGeometry(p, b, n.thickness + 2),
          ne
        );
        f.position.set(c, D + z + re + b / 2, R), f.rotation.y = -H, f.castShadow = !0, g.add(f);
        const pe = new t.Mesh(
          new t.BoxGeometry(p, O, n.thickness),
          de
        );
        pe.position.set(c, D + z + re + O / 2, R), pe.rotation.y = -H, pe.castShadow = !0, pe.receiveShadow = !0, g.add(pe);
      } else {
        const p = new t.Mesh(
          new t.BoxGeometry(Z, E, n.thickness),
          new t.MeshStandardMaterial({ color: 12105920, roughness: 0.9, metalness: 0.05 })
        );
        p.position.set(c, E / 2, R), p.rotation.y = -H, p.castShadow = !0, p.receiveShadow = !0, g.add(p);
      }
    }), o.fixedElements.forEach((n) => {
      const Z = n.x - 400 + n.width / 2, H = -(n.y - 400 + n.height / 2);
      if (n.type === "pillar") {
        const E = Math.min(n.width, n.height) / 2, c = new t.Mesh(
          new t.CylinderGeometry(E, E * 1.1, 140, 32),
          new t.MeshStandardMaterial({ color: 4868698, roughness: 0.6, metalness: 0.4 })
        );
        c.position.set(Z, 70, H), c.castShadow = !0, g.add(c);
        const R = new t.Mesh(
          new t.CylinderGeometry(E * 1.3, E * 1.1, 10, 32),
          new t.MeshStandardMaterial({ color: 5921386, roughness: 0.5, metalness: 0.5 })
        );
        R.position.set(Z, 135, H), R.castShadow = !0, g.add(R);
        const p = new t.Mesh(
          new t.CylinderGeometry(E * 1.2, E * 1.3, 10, 32),
          new t.MeshStandardMaterial({ color: 5921386, roughness: 0.5, metalness: 0.5 })
        );
        p.position.set(Z, 5, H), p.castShadow = !0, g.add(p);
      } else if (n.type === "column") {
        const E = new t.Mesh(
          new t.BoxGeometry(n.width, 140, n.height),
          new t.MeshStandardMaterial({ color: 3816010, roughness: 0.7, metalness: 0.3 })
        );
        E.position.set(Z, 70, H), E.castShadow = !0, g.add(E);
        const c = new t.LineSegments(
          new t.EdgesGeometry(E.geometry),
          new t.LineBasicMaterial({ color: 6974074 })
        );
        c.position.copy(E.position), g.add(c);
      } else {
        const R = n.height / 8;
        for (let p = 0; p < 8; p++) {
          const T = new t.Mesh(
            new t.BoxGeometry(n.width, 6.25, R * (8 - p)),
            new t.MeshStandardMaterial({ color: 6636321, roughness: 0.8 })
          );
          T.position.set(Z, 6.25 / 2 + p * 6.25, H + p * R / 2), T.castShadow = !0, g.add(T);
          const D = new t.LineSegments(
            new t.EdgesGeometry(T.geometry),
            new t.LineBasicMaterial({ color: 3810320 })
          );
          D.position.copy(T.position), g.add(D);
        }
      }
    }), o.objects.forEach((n) => {
      const Z = n.x - 400 + n.width / 2, H = -(n.y - 400 + n.height / 2), E = -(n.rotation * Math.PI / 180);
      if (n.type === "bar") {
        const c = n.x - 400 + n.width / 2, R = -(n.y - 400 + n.height / 2), p = -(n.rotation * Math.PI / 180), T = 50, D = new t.MeshPhysicalMaterial({
          color: 1710618,
          roughness: 0.5,
          metalness: 0.8,
          clearcoat: 0.2,
          clearcoatRoughness: 0.4
        }), z = new t.Mesh(
          new t.BoxGeometry(n.width, T, n.height),
          D
        );
        z.position.set(c, T / 2, R), z.rotation.y = p, z.castShadow = !0, z.receiveShadow = !0, g.add(z);
        const re = [8323072, 10770944, 6691328, 9109504, 8930304], O = re[Math.floor(Math.random() * re.length)], de = new t.MeshPhysicalMaterial({
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
        }), ne = new t.Mesh(
          new t.BoxGeometry(n.width + 6, 6, n.height + 6),
          de
        );
        ne.position.set(c, T + 3, R), ne.rotation.y = p, ne.castShadow = !0, g.add(ne);
        const L = new t.MeshStandardMaterial({
          emissive: 16711799,
          // pinkish-red glow
          emissiveIntensity: 0.6,
          color: 0
        }), G = new t.Mesh(
          new t.BoxGeometry(n.width + 6, 0.5, n.height + 6),
          L
        );
        G.position.set(c, T + 1, R), G.rotation.y = p, g.add(G);
        const $ = O === 8323072 ? 13938487 : 11579568, b = new t.Mesh(
          new t.BoxGeometry(n.width + 8, 0.6, n.height + 8),
          new t.MeshStandardMaterial({
            color: $,
            metalness: 1,
            roughness: 0.2
          })
        );
        b.position.set(c, T + 6.5, R), b.rotation.y = p, g.add(b);
        const se = new t.MeshStandardMaterial({
          color: 13421772,
          metalness: 1,
          roughness: 0.1
        }), j = new t.CylinderGeometry(2, 2, T, 16);
        [
          [n.width / 2 - 6, n.height / 2 - 6],
          [-n.width / 2 + 6, n.height / 2 - 6],
          [n.width / 2 - 6, -n.height / 2 + 6],
          [-n.width / 2 + 6, -n.height / 2 + 6]
        ].forEach(([ue, Se]) => {
          const we = new t.Mesh(j, se);
          we.position.set(
            c + ue * Math.cos(p) - Se * Math.sin(p),
            T / 2,
            R + ue * Math.sin(p) + Se * Math.cos(p)
          ), we.castShadow = !0, g.add(we);
        });
        const X = new t.PointLight(O, 0.4, 600);
        X.position.set(c, T + 70, R), g.add(X);
        const S = 120, f = new t.Group(), pe = new t.MeshPhysicalMaterial({
          color: 2105376,
          metalness: 1,
          roughness: 0.25,
          clearcoat: 0.6,
          clearcoatRoughness: 0.1
        }), u = new t.Mesh(
          new t.BoxGeometry(n.width + 40, 10, n.height + 40),
          pe
        );
        u.castShadow = !0, u.receiveShadow = !0, f.add(u);
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
        }), Me = new t.Mesh(
          new t.PlaneGeometry(n.width + 32, n.height + 32),
          N
        );
        Me.rotation.x = -Math.PI / 2, Me.position.y = -3, f.add(Me);
        const W = new t.MeshStandardMaterial({
          emissive: 16764040,
          emissiveIntensity: 1.6,
          color: 0
        }), w = new t.BoxGeometry(4, 2, n.height + 36), Ee = new t.Mesh(w, W), ke = Ee.clone();
        Ee.position.set(-(n.width + 36) / 2, -2, 0), ke.position.set((n.width + 36) / 2, -2, 0), f.add(Ee, ke);
        const ce = new t.Group(), he = [11674146, 14919767, 9127187, 27028, 7810842];
        for (let ue = -3; ue <= 3; ue++) {
          const Se = he[Math.floor(Math.random() * he.length)], we = new t.MeshPhysicalMaterial({
            color: Se,
            roughness: 0.1,
            transmission: 0.95,
            thickness: 0.6,
            ior: 1.5,
            clearcoat: 0.3,
            clearcoatRoughness: 0.2
          }), Ae = new t.Mesh(
            new t.CylinderGeometry(3, 3, 20, 32),
            we
          );
          Ae.position.set(ue * 12, -12, 0), ce.add(Ae);
          const a = new t.Mesh(
            new t.CylinderGeometry(1.2, 1.2, 6, 16),
            we
          );
          a.position.set(ue * 12, -3, 0), ce.add(a);
        }
        ce.position.y = -15, f.add(ce);
        const Fe = new t.MeshPhysicalMaterial({
          color: 16777215,
          roughness: 0.1,
          transmission: 0.9,
          thickness: 0.4,
          ior: 1.45
        });
        for (let ue = -2; ue <= 2; ue++) {
          const Se = new t.Mesh(
            new t.SphereGeometry(2.5, 16, 16, 0, Math.PI),
            // half-sphere
            Fe
          );
          Se.position.set(ue * 10, -25, 0), Se.scale.y = 0.6, f.add(Se);
        }
        const x = new t.MeshStandardMaterial({
          color: 11184810,
          metalness: 1,
          roughness: 0.2
        }), fe = new t.CylinderGeometry(1.5, 1.5, S - 60, 16);
        [
          [n.width / 2 - 10, n.height / 2 - 10],
          [-n.width / 2 + 10, n.height / 2 - 10],
          [n.width / 2 - 10, -n.height / 2 + 10],
          [-n.width / 2 + 10, -n.height / 2 + 10]
        ].forEach(([ue, Se]) => {
          const we = new t.Mesh(fe, x);
          we.position.set(ue, -(S - 80) / 2, Se), we.rotation.x = Math.PI / 2, f.add(we);
        }), f.position.set(c, S, R), f.rotation.y = p, g.add(f);
        const He = new t.PointLight(16755285, 0.8, 600);
        He.position.set(c, S - 20, R), g.add(He);
      } else if (n.type === "kitchen") {
        const c = new t.Group(), R = new t.MeshPhysicalMaterial({
          color: 11579568,
          metalness: 1,
          roughness: 0.25,
          envMapIntensity: 1,
          clearcoat: 1,
          clearcoatRoughness: 0.05
        }), p = new t.MeshPhysicalMaterial({
          color: 10079487,
          roughness: 0.05,
          transmission: 0.9,
          thickness: 0.5,
          metalness: 0.1,
          envMapIntensity: 1.2
        }), T = new t.Mesh(
          new t.BoxGeometry(n.width, 50, n.height),
          R
        );
        T.position.set(0, 25, 0), T.castShadow = !0, T.receiveShadow = !0, c.add(T);
        const D = new t.Mesh(
          new t.BoxGeometry(n.width, 4, n.height),
          p
        );
        D.position.set(0, 52, 0), c.add(D);
        const z = new t.Mesh(
          new t.BoxGeometry(n.width * 0.4, 10, n.height * 0.6),
          new t.MeshStandardMaterial({ color: 2236962, roughness: 0.4 })
        );
        z.position.set(-n.width * 0.2, 55, 0), c.add(z);
        const re = new t.MeshStandardMaterial({
          color: 3355443,
          metalness: 0.8,
          roughness: 0.2
        });
        [
          [-n.width * 0.25, n.height * 0.15],
          [-n.width * 0.15, n.height * 0.15],
          [-n.width * 0.25, -n.height * 0.15],
          [-n.width * 0.15, -n.height * 0.15]
        ].forEach(([X, S]) => {
          const f = new t.Mesh(
            new t.CylinderGeometry(6, 6, 2, 32),
            re
          );
          f.rotation.x = Math.PI / 2, f.position.set(X, 61, S), c.add(f);
        });
        const de = new t.Mesh(
          new t.BoxGeometry(n.width * 0.5, 35, n.height * 0.65),
          new t.MeshPhysicalMaterial({
            color: 12632256,
            metalness: 1,
            roughness: 0.2,
            envMapIntensity: 1.1
          })
        );
        de.position.set(-n.width * 0.2, 95, 0), de.castShadow = !0, c.add(de);
        const ne = new t.MeshPhysicalMaterial({
          color: 14540253,
          roughness: 0.3,
          metalness: 0.5
        });
        for (let X = 0; X < 3; X++) {
          const S = new t.Mesh(
            new t.BoxGeometry(n.width * 0.7, 4, n.height * 0.2),
            ne
          );
          S.position.set(n.width * 0.15, 75 + X * 22, n.height * 0.35), S.castShadow = !0, c.add(S);
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
          S.rotation.z = Math.PI / 2, S.position.set(X * n.width * 0.2, 35, n.height * 0.45), c.add(S);
        }
        const G = new t.PointLight(16777215, 1.5, 400);
        G.position.set(0, 140, 0), G.castShadow = !0, c.add(G);
        const $ = document.createElement("canvas");
        $.width = 1024, $.height = 768;
        const b = $.getContext("2d");
        b && (b.fillStyle = "#dc2626", b.fillRect(0, 0, $.width, $.height), b.strokeStyle = "#ffffff", b.lineWidth = 25, b.strokeRect(30, 30, $.width - 60, $.height - 60), b.strokeStyle = "#000000", b.lineWidth = 15, b.strokeRect(50, 50, $.width - 100, $.height - 100), b.shadowColor = "rgba(0, 0, 0, 0.8)", b.shadowBlur = 20, b.shadowOffsetX = 8, b.shadowOffsetY = 8, b.font = "bold 180px Arial", b.textAlign = "center", b.textBaseline = "middle", b.fillStyle = "#ffffff", b.fillText("👨‍🍳", $.width / 2, $.height / 2 - 150), b.fillStyle = "#ffffff", b.font = "bold 220px Impact, Arial Black, sans-serif", b.fillText("CHEF", $.width / 2, $.height / 2 + 120), b.strokeStyle = "#000000", b.lineWidth = 12, b.strokeText("CHEF", $.width / 2, $.height / 2 + 120), b.strokeStyle = "#fbbf24", b.lineWidth = 6, b.strokeText("CHEF", $.width / 2, $.height / 2 + 120));
        const se = new t.CanvasTexture($), j = new t.Mesh(
          new t.PlaneGeometry(n.height * 0.6, n.height * 0.45),
          new t.MeshStandardMaterial({
            map: se,
            roughness: 0.4,
            metalness: 0.1,
            emissive: 14427686,
            emissiveIntensity: 0.3
          })
        );
        j.position.set(-n.width / 2 + 3, 50, 0), j.rotation.y = Math.PI / 2, c.add(j);
        const Ce = new t.Mesh(
          new t.PlaneGeometry(n.height * 0.6, n.height * 0.45),
          new t.MeshStandardMaterial({
            map: se,
            roughness: 0.4,
            metalness: 0.1,
            emissive: 14427686,
            emissiveIntensity: 0.3
          })
        );
        Ce.position.set(n.width / 2 - 3, 50, 0), Ce.rotation.y = -Math.PI / 2, c.add(Ce), c.position.set(Z, 0, H), c.rotation.y = E, g.add(c);
      } else if (n.type === "toilet") {
        const c = new t.Group(), R = new t.MeshStandardMaterial({
          color: 14013914,
          roughness: 0.7,
          metalness: 0.05
        }), p = new t.MeshStandardMaterial({
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
        }), z = 120, re = new t.Mesh(
          new t.BoxGeometry(n.width, 4, n.height),
          D
        );
        re.position.y = 2, re.receiveShadow = !0, c.add(re);
        const O = new t.Mesh(
          new t.BoxGeometry(n.width, z, 6),
          R
        );
        O.position.set(0, z / 2, -n.height / 2), O.castShadow = !0, c.add(O);
        const de = new t.Mesh(
          new t.BoxGeometry(6, z, n.height),
          R
        );
        de.position.set(-n.width / 2, z / 2, 0), de.castShadow = !0, c.add(de);
        const ne = new t.Mesh(
          new t.BoxGeometry(6, z, n.height),
          R
        );
        ne.position.set(n.width / 2, z / 2, 0), ne.castShadow = !0, c.add(ne);
        const L = new t.Mesh(
          new t.BoxGeometry(n.width * 0.24, z, 6),
          R
        );
        L.position.set(0, z / 2, n.height / 2), L.castShadow = !0, c.add(L);
        const G = new t.Mesh(
          new t.BoxGeometry(n.width * 0.055, z, 6),
          R
        );
        G.position.set(-n.width * 0.4725, z / 2, n.height / 2), G.castShadow = !0, c.add(G);
        const $ = new t.Mesh(
          new t.BoxGeometry(n.width * 0.055, z, 6),
          R
        );
        $.position.set(n.width * 0.4725, z / 2, n.height / 2), $.castShadow = !0, c.add($);
        const b = new t.Mesh(
          new t.BoxGeometry(n.width * 0.33, z - 95, 6),
          R
        );
        b.position.set(n.width * 0.285, 95 + (z - 95) / 2, n.height / 2), b.castShadow = !0, c.add(b);
        const se = new t.Mesh(
          new t.BoxGeometry(n.width * 0.33, z - 95, 6),
          R
        );
        se.position.set(-n.width * 0.285, 95 + (z - 95) / 2, n.height / 2), se.castShadow = !0, c.add(se);
        const j = new t.Mesh(
          new t.BoxGeometry(n.width * 0.33, 95, 4),
          p
        );
        j.position.set(n.width * 0.285, 47.5, n.height / 2 - 2), j.castShadow = !0, c.add(j);
        const Ce = new t.MeshStandardMaterial({
          color: 13938487,
          metalness: 0.1,
          roughness: 0.8
        }), X = new t.Mesh(
          new t.CylinderGeometry(1.5, 1.5, 12, 16),
          Ce
        );
        X.rotation.z = Math.PI / 2, X.position.set(n.width * 0.285 - n.width * 0.132, 47.5, n.height / 2 + 1), c.add(X);
        const S = document.createElement("canvas");
        S.width = 512, S.height = 768;
        const f = S.getContext("2d");
        if (f) {
          const V = f.createLinearGradient(0, 0, 0, S.height);
          V.addColorStop(0, "#3b82f6"), V.addColorStop(1, "#1e40af"), f.fillStyle = V, f.fillRect(0, 0, S.width, S.height), f.strokeStyle = "#ffffff", f.lineWidth = 12, f.strokeRect(20, 20, S.width - 40, S.height - 40), f.strokeStyle = "rgba(255, 255, 255, 0.3)", f.lineWidth = 6, f.strokeRect(30, 30, S.width - 60, S.height - 60), f.shadowColor = "rgba(0, 0, 0, 0.5)", f.shadowBlur = 15, f.shadowOffsetX = 4, f.shadowOffsetY = 4, f.fillStyle = "#ffffff", f.font = "bold 120px Georgia, serif", f.textAlign = "center", f.textBaseline = "middle", f.fillText("W.C.", S.width / 2, S.height / 2 - 100), f.strokeStyle = "#ffffff", f.lineWidth = 4, f.beginPath(), f.moveTo(100, S.height / 2), f.lineTo(S.width - 100, S.height / 2), f.stroke();
          const Ge = f.createLinearGradient(0, S.height / 2, 0, S.height / 2 + 150);
          Ge.addColorStop(0, "#ffd700"), Ge.addColorStop(0.5, "#ffed4e"), Ge.addColorStop(1, "#ffd700"), f.fillStyle = Ge, f.font = "bold 140px Georgia, serif", f.fillText("MALE", S.width / 2, S.height / 2 + 120), f.strokeStyle = "#b8860b", f.lineWidth = 3, f.strokeText("MALE", S.width / 2, S.height / 2 + 120);
        }
        const pe = new t.CanvasTexture(S), u = new t.Mesh(
          new t.PlaneGeometry(n.width * 0.25, n.width * 0.375),
          new t.MeshStandardMaterial({
            map: pe,
            roughness: 0.3,
            metalness: 0.15,
            emissive: 1982639,
            emissiveIntensity: 0.1
          })
        );
        u.position.set(n.width * 0.285, 47.5, n.height / 2 + 2.5), c.add(u);
        const N = new t.Mesh(
          new t.BoxGeometry(n.width * 0.33, 95, 4),
          T
        );
        N.position.set(-n.width * 0.285, 47.5, n.height / 2 - 2), N.castShadow = !0, c.add(N);
        const Me = X.clone();
        Me.position.set(-n.width * 0.285 + n.width * 0.132, 47.5, n.height / 2 + 1), c.add(Me);
        const W = document.createElement("canvas");
        W.width = 512, W.height = 768;
        const w = W.getContext("2d");
        if (w) {
          const V = w.createLinearGradient(0, 0, 0, W.height);
          V.addColorStop(0, "#ef4444"), V.addColorStop(1, "#b91c1c"), w.fillStyle = V, w.fillRect(0, 0, W.width, W.height), w.strokeStyle = "#ffffff", w.lineWidth = 12, w.strokeRect(20, 20, W.width - 40, W.height - 40), w.strokeStyle = "rgba(255, 255, 255, 0.3)", w.lineWidth = 6, w.strokeRect(30, 30, W.width - 60, W.height - 60), w.shadowColor = "rgba(0, 0, 0, 0.5)", w.shadowBlur = 15, w.shadowOffsetX = 4, w.shadowOffsetY = 4, w.fillStyle = "#ffffff", w.font = "bold 120px Georgia, serif", w.textAlign = "center", w.textBaseline = "middle", w.fillText("W.C.", W.width / 2, W.height / 2 - 100), w.strokeStyle = "#ffffff", w.lineWidth = 4, w.beginPath(), w.moveTo(100, W.height / 2), w.lineTo(W.width - 100, W.height / 2), w.stroke();
          const Ge = w.createLinearGradient(0, W.height / 2, 0, W.height / 2 + 150);
          Ge.addColorStop(0, "#ffb6c1"), Ge.addColorStop(0.5, "#ffd1dc"), Ge.addColorStop(1, "#ffb6c1"), w.fillStyle = Ge, w.font = "bold 120px Georgia, serif", w.fillText("FEMALE", W.width / 2, W.height / 2 + 120), w.strokeStyle = "#dc143c", w.lineWidth = 3, w.strokeText("FEMALE", W.width / 2, W.height / 2 + 120);
        }
        const Ee = new t.CanvasTexture(W), ke = new t.Mesh(
          new t.PlaneGeometry(n.width * 0.25, n.width * 0.375),
          new t.MeshStandardMaterial({
            map: Ee,
            roughness: 0.3,
            metalness: 0.15,
            emissive: 12131356,
            emissiveIntensity: 0.1
          })
        );
        ke.position.set(-n.width * 0.285, 47.5, n.height / 2 + 2.5), c.add(ke);
        const ce = document.createElement("canvas");
        ce.width = 512, ce.height = 256;
        const he = ce.getContext("2d");
        he && (he.fillStyle = "#d5d5da", he.fillRect(0, 0, ce.width, ce.height), he.fillStyle = "#2a2a2a", he.font = "bold 140px Arial", he.textAlign = "center", he.textBaseline = "middle", he.fillText("W.C.", ce.width / 2, ce.height / 2));
        const Fe = new t.CanvasTexture(ce), x = new t.Mesh(
          new t.PlaneGeometry(n.width * 0.4, n.width * 0.2),
          new t.MeshStandardMaterial({
            map: Fe,
            roughness: 0.5,
            metalness: 0.05
          })
        );
        x.position.set(0, 100, -n.height / 2 + 3.5), c.add(x);
        const fe = new t.MeshStandardMaterial({
          color: 16119285,
          metalness: 0.1,
          roughness: 0.5
        }), He = new t.Mesh(
          new t.BoxGeometry(n.width * 0.5, 12, n.height * 0.25),
          fe
        );
        He.position.set(0, 32, -n.height * 0.3), He.castShadow = !0, c.add(He);
        const ue = new t.MeshStandardMaterial({
          color: 16777215,
          roughness: 0.3,
          metalness: 0.05
        }), Se = new t.Mesh(
          new t.CylinderGeometry(12, 12, 6, 32),
          ue
        );
        Se.position.set(0, 40, -n.height * 0.3), c.add(Se);
        const we = new t.MeshStandardMaterial({
          color: 12632256,
          metalness: 0.1,
          roughness: 0.8
        }), Ae = new t.Mesh(
          new t.TorusGeometry(4, 1, 8, 24, Math.PI),
          we
        );
        Ae.rotation.z = Math.PI / 2, Ae.position.set(0, 48, -n.height * 0.35), c.add(Ae);
        const a = new t.MeshStandardMaterial({
          color: 16777215,
          roughness: 0.25,
          metalness: 0.05
        }), r = new t.Mesh(
          new t.CylinderGeometry(10, 8, 12, 32),
          a
        );
        r.position.set(-n.width * 0.25, 6, n.height * 0.25), c.add(r);
        const l = new t.Mesh(
          new t.TorusGeometry(9, 2, 16, 32),
          a
        );
        l.rotation.x = Math.PI / 2, l.position.set(-n.width * 0.25, 13, n.height * 0.25), c.add(l);
        const h = new t.Mesh(
          new t.BoxGeometry(14, 20, 8),
          a
        );
        h.position.set(-n.width * 0.25, 22, n.height * 0.25 - 10), c.add(h);
        const y = new t.Mesh(
          new t.BoxGeometry(2, 6, 1),
          we
        );
        y.position.set(-n.width * 0.25 + 8, 25, n.height * 0.25 - 10), c.add(y);
        const k = new t.Mesh(
          new t.SphereGeometry(7, 32, 32, 0, Math.PI * 2, 0, Math.PI / 1.5),
          a
        );
        k.position.set(n.width * 0.25, 25, n.height * 0.25), k.rotation.x = Math.PI / 6, c.add(k);
        const B = new t.Mesh(
          new t.CylinderGeometry(1.5, 1.5, 8, 16),
          we
        );
        B.position.set(n.width * 0.25, 35, n.height * 0.25 - 5), c.add(B);
        const ee = new t.PointLight(16777215, 0.5, 280);
        ee.position.set(0, z - 15, 0), ee.castShadow = !1, c.add(ee), c.position.set(Z, 0, H), c.rotation.y = E, g.add(c);
      }
    }), o.tables.forEach((n) => {
      const E = n.shape === "rectangle" ? n.width * 1.5 : n.width, c = n.x - 400 + E / 2, R = -(n.y - 400 + n.height / 2), p = -(n.rotation * Math.PI / 180), T = new t.MeshPhysicalMaterial({
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
      }), D = n.shape === "circle" ? new t.CylinderGeometry(E / 2, E / 2, 4, 64) : new t.BoxGeometry(E, 4, n.height), z = new t.Mesh(D, T);
      if (z.position.set(c, 33 + 4 / 2, R), z.rotation.y = p, z.castShadow = !0, z.receiveShadow = !0, g.add(z), n.shape === "circle") {
        const L = new t.Mesh(
          new t.TorusGeometry(E / 2 + 1, 1.2, 16, 64),
          new t.MeshStandardMaterial({
            color: 13938487,
            // gold-like tone
            metalness: 1,
            roughness: 0.3
          })
        );
        L.position.set(c, 33 + 4 / 2 + 0.5, R), L.rotation.x = Math.PI / 2, g.add(L);
      } else {
        const L = new t.LineSegments(
          new t.EdgesGeometry(D),
          new t.LineBasicMaterial({ color: 13938487, linewidth: 2 })
        );
        L.position.copy(z.position), L.rotation.y = p, g.add(L);
      }
      const re = new t.MeshStandardMaterial({
        color: 2236962,
        metalness: 0.9,
        roughness: 0.2
      }), O = 3.2;
      (n.shape === "circle" ? [
        [E * 0.3, E * 0.3],
        [-E * 0.3, E * 0.3],
        [E * 0.3, -E * 0.3],
        [-E * 0.3, -E * 0.3]
      ] : [
        [E / 2 - 10, n.height / 2 - 10],
        [-E / 2 + 10, n.height / 2 - 10],
        [E / 2 - 10, -n.height / 2 + 10],
        [-E / 2 + 10, -n.height / 2 + 10]
      ]).forEach(([L, G]) => {
        const $ = new t.Mesh(
          new t.CylinderGeometry(O, O, 33, 16),
          re
        );
        $.position.set(
          c + L * Math.cos(p) - G * Math.sin(p),
          33 / 2,
          R + L * Math.sin(p) + G * Math.cos(p)
        ), $.castShadow = !0, g.add($);
      });
      const ne = o.chairs.filter((L) => L.tableId === n.id);
      ne.forEach((L) => {
        const G = L.size || 40, $ = 38, b = new t.MeshStandardMaterial({ color: 9127187, roughness: 0.5, metalness: 0.1 }), se = new t.MeshStandardMaterial({ color: 12092939, roughness: 0.7, metalness: 0.05 }), j = ne.filter((ue) => ue.position === L.position).length, X = (["top", "bottom"].includes(L.position) ? E : n.height) - G * j, S = j > 1 ? X / (j + 1) : X / 2, f = S + L.index * (G + S) + G / 2, pe = G * 0.4;
        let u = 0, N = 0;
        L.position === "top" ? (u = f - E / 2, N = n.height / 2 + pe + G / 2) : L.position === "bottom" ? (u = f - E / 2, N = -(n.height / 2 + pe + G / 2)) : L.position === "left" ? (u = -(E / 2 + pe + G / 2), N = f - n.height / 2) : (u = E / 2 + pe + G / 2, N = f - n.height / 2);
        const Me = u * Math.cos(p) - N * Math.sin(p), W = u * Math.sin(p) + N * Math.cos(p), w = new t.Mesh(
          new t.BoxGeometry(G * 0.75, 4, G * 0.75),
          se
        ), Ee = $ * 0.4;
        w.position.set(c + Me, Ee, R - W);
        const ke = {
          top: 0,
          bottom: Math.PI,
          left: Math.PI / 2,
          right: -Math.PI / 2
        }[L.position] || 0;
        w.rotation.y = ke + p, w.castShadow = !0, g.add(w);
        const ce = new t.Mesh(
          new t.BoxGeometry(G * 0.75, $ * 0.55, 3),
          b
        ), he = G * 0.75 / 2 + 1.5;
        ce.position.set(
          w.position.x - Math.sin(w.rotation.y) * he,
          $ * 0.65,
          w.position.z - Math.cos(w.rotation.y) * he
        ), ce.rotation.y = w.rotation.y, ce.castShadow = !0, g.add(ce);
        const x = Ee - 4 / 2, fe = new t.CylinderGeometry(2, 2, x, 8), He = new t.MeshStandardMaterial({ color: 6636321, roughness: 0.6, metalness: 0.2 });
        [
          [G * 0.3, G * 0.3],
          [G * 0.3, -G * 0.3],
          [-G * 0.3, G * 0.3],
          [-G * 0.3, -G * 0.3]
        ].forEach(([ue, Se]) => {
          const we = new t.Mesh(fe, He), Ae = Math.cos(w.rotation.y), a = Math.sin(w.rotation.y);
          we.position.set(
            w.position.x + ue * Ae - Se * a,
            x / 2,
            // Position legs so they sit on the floor
            w.position.z + ue * a + Se * Ae
          ), we.castShadow = !0, g.add(we);
        });
      });
    });
    const Q = () => {
      var n;
      if (ie.current = requestAnimationFrame(Q), K.current && K.current.progress < 1) {
        const Z = K.current;
        Z.progress += 0.05, Z.progress >= 1 && (Z.progress = 1, ve(!1), K.current = null);
        const E = ((c) => c < 0.5 ? 4 * c * c * c : 1 - Math.pow(-2 * c + 2, 3) / 2)(Z.progress);
        if (v.current) {
          v.current.position.lerpVectors(Z.startPos, Z.endPos, E);
          const c = new t.Vector3();
          c.lerpVectors(Z.startTarget, Z.endTarget, E), v.current.lookAt(c);
        }
      }
      if (P && v.current && !_) {
        const Z = Math.sqrt(v.current.position.x ** 2 + v.current.position.z ** 2), H = Math.atan2(v.current.position.z, v.current.position.x) + Ye.current;
        v.current.position.x = Z * Math.cos(H), v.current.position.z = Z * Math.sin(H), v.current.lookAt(0, 100, 0);
      }
      (n = q.current) == null || n.render(g, I);
    };
    Q();
    const Le = () => {
      C.current && v.current && q.current && (v.current.aspect = C.current.clientWidth / C.current.clientHeight, v.current.updateProjectionMatrix(), q.current.setSize(C.current.clientWidth, C.current.clientHeight));
    };
    return window.addEventListener("resize", Le), () => {
      window.removeEventListener("resize", Le), ie.current && cancelAnimationFrame(ie.current), q.current && C.current && (C.current.removeChild(q.current.domElement), q.current.dispose());
    };
  }, [d, o, P, _]), d ? /* @__PURE__ */ e("div", { className: "fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] flex items-center justify-center p-2", children: /* @__PURE__ */ s("div", { className: "bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 rounded-3xl shadow-2xl w-full h-full max-w-[98vw] max-h-[98vh] flex flex-col overflow-hidden border border-gray-800", children: [
    /* @__PURE__ */ e("div", { className: "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-1", children: /* @__PURE__ */ s("div", { className: "bg-gray-900 px-6 py-4 flex items-center justify-between", children: [
      /* @__PURE__ */ s("div", { children: [
        /* @__PURE__ */ s("h2", { className: "text-2xl font-bold text-white flex items-center gap-3", children: [
          /* @__PURE__ */ e("div", { className: "p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg", children: /* @__PURE__ */ e(tt, { className: "w-5 h-5" }) }),
          "3D Floor Plan Visualization"
        ] }),
        /* @__PURE__ */ s("p", { className: "text-gray-400 text-sm mt-1", children: [
          "Professional Camera Controls • ",
          o.name
        ] })
      ] }),
      /* @__PURE__ */ e(
        "button",
        {
          onClick: m,
          className: "p-2.5 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-xl transition-all hover:scale-110",
          children: /* @__PURE__ */ e(Bt, { className: "w-5 h-5" })
        }
      )
    ] }) }),
    /* @__PURE__ */ s("div", { className: "flex-1 flex gap-3 p-3 min-h-0", children: [
      /* @__PURE__ */ s("div", { className: "w-80 bg-black/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700 p-5 flex flex-col gap-5 overflow-y-auto flex-shrink-0", children: [
        /* @__PURE__ */ e(
          "button",
          {
            onClick: () => $e("default"),
            className: "px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2",
            children: "🏠 Default View"
          }
        ),
        /* @__PURE__ */ s("div", { className: "flex flex-col gap-3", children: [
          /* @__PURE__ */ s("div", { className: "text-white text-sm font-bold uppercase tracking-wider flex items-center gap-2 pb-2 border-b border-gray-700", children: [
            /* @__PURE__ */ e(tt, { className: "w-5 h-5 text-purple-400" }),
            "Manual Control"
          ] }),
          /* @__PURE__ */ e("div", { className: "flex justify-center", children: /* @__PURE__ */ s("div", { className: "flex flex-col gap-1", children: [
            /* @__PURE__ */ e(
              "button",
              {
                onClick: () => ge("up"),
                className: "w-12 h-12 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all hover:scale-110 flex items-center justify-center disabled:opacity-30 mx-auto",
                disabled: _,
                title: "Rotate Up",
                children: /* @__PURE__ */ e("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 15l7-7 7 7" }) })
              }
            ),
            /* @__PURE__ */ s("div", { className: "flex gap-1 justify-center", children: [
              /* @__PURE__ */ e(
                "button",
                {
                  onClick: () => ge("left"),
                  className: "w-12 h-12 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all hover:scale-110 flex items-center justify-center disabled:opacity-30",
                  disabled: _,
                  title: "Rotate Left",
                  children: /* @__PURE__ */ e("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) })
                }
              ),
              /* @__PURE__ */ e("div", { className: "w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ e(tt, { className: "w-6 h-6 text-white" }) }),
              /* @__PURE__ */ e(
                "button",
                {
                  onClick: () => ge("right"),
                  className: "w-12 h-12 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all hover:scale-110 flex items-center justify-center disabled:opacity-30",
                  disabled: _,
                  title: "Rotate Right",
                  children: /* @__PURE__ */ e("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) })
                }
              )
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                onClick: () => ge("down"),
                className: "w-12 h-12 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all hover:scale-110 flex items-center justify-center disabled:opacity-30 mx-auto",
                disabled: _,
                title: "Rotate Down",
                children: /* @__PURE__ */ e("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })
              }
            )
          ] }) })
        ] }),
        /* @__PURE__ */ s("div", { className: "flex flex-col gap-3", children: [
          /* @__PURE__ */ s("div", { className: "text-white text-sm font-bold uppercase tracking-wider flex items-center gap-2 pb-2 border-b border-gray-700", children: [
            /* @__PURE__ */ e(ct, { className: "w-5 h-5 text-green-400" }),
            "Zoom & Rotation"
          ] }),
          /* @__PURE__ */ s("div", { className: "flex flex-col gap-2", children: [
            /* @__PURE__ */ s(
              "button",
              {
                onClick: () => be(0.85),
                className: "px-4 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl transition-all hover:scale-105 flex items-center justify-center gap-2 font-semibold disabled:opacity-30",
                disabled: _,
                children: [
                  /* @__PURE__ */ e(ct, { className: "w-5 h-5" }),
                  "Zoom In"
                ]
              }
            ),
            /* @__PURE__ */ s(
              "button",
              {
                onClick: () => be(1.15),
                className: "px-4 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl transition-all hover:scale-105 flex items-center justify-center gap-2 font-semibold disabled:opacity-30",
                disabled: _,
                children: [
                  /* @__PURE__ */ e(Xt, { className: "w-5 h-5" }),
                  "Zoom Out"
                ]
              }
            ),
            /* @__PURE__ */ s(
              "button",
              {
                onClick: () => oe(!P),
                className: `px-4 py-3 rounded-xl transition-all hover:scale-105 flex items-center justify-center gap-2 font-semibold ${P ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg" : "bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white"}`,
                children: [
                  /* @__PURE__ */ e(at, { className: `w-5 h-5 ${P ? "animate-spin" : ""}` }),
                  P ? "Auto-Rotating" : "Auto-Rotate"
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ s("div", { className: "flex flex-col gap-3 mt-auto", children: [
          /* @__PURE__ */ s(
            "button",
            {
              onClick: () => $e("default"),
              className: "px-4 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl transition-all hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 font-bold",
              children: [
                /* @__PURE__ */ e(At, { className: "w-5 h-5" }),
                "Reset View"
              ]
            }
          ),
          /* @__PURE__ */ s("div", { className: "bg-gray-800/50 rounded-xl p-4 border border-gray-700", children: [
            /* @__PURE__ */ s("div", { className: "flex items-center gap-2 text-gray-400 mb-3", children: [
              /* @__PURE__ */ e(Yt, { className: "w-4 h-4" }),
              /* @__PURE__ */ e("span", { className: "font-medium text-sm", children: "Scene Statistics" })
            ] }),
            /* @__PURE__ */ s("div", { className: "grid grid-cols-2 gap-2 text-sm", children: [
              /* @__PURE__ */ s("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e("div", { className: "w-2 h-2 bg-emerald-500 rounded-full animate-pulse" }),
                /* @__PURE__ */ s("span", { className: "text-gray-300", children: [
                  o.tables.length,
                  " Tables"
                ] })
              ] }),
              /* @__PURE__ */ s("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e("div", { className: "w-2 h-2 bg-amber-500 rounded-full animate-pulse" }),
                /* @__PURE__ */ s("span", { className: "text-gray-300", children: [
                  o.chairs.length,
                  " Chairs"
                ] })
              ] }),
              /* @__PURE__ */ s("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e("div", { className: "w-2 h-2 bg-purple-500 rounded-full animate-pulse" }),
                /* @__PURE__ */ s("span", { className: "text-gray-300", children: [
                  o.objects.length,
                  " Objects"
                ] })
              ] }),
              /* @__PURE__ */ s("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e("div", { className: "w-2 h-2 bg-blue-500 rounded-full animate-pulse" }),
                /* @__PURE__ */ s("span", { className: "text-gray-300", children: [
                  o.walls.length,
                  " Walls"
                ] })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ s("div", { className: "flex-1 relative bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 rounded-2xl overflow-hidden shadow-2xl border border-gray-300", children: [
        /* @__PURE__ */ e("div", { ref: C, className: "w-full h-full" }),
        _ && /* @__PURE__ */ e("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2", children: /* @__PURE__ */ e("div", { className: "bg-black/80 backdrop-blur-xl rounded-xl px-6 py-3 shadow-2xl border border-gray-700", children: /* @__PURE__ */ s("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ e("div", { className: "animate-spin rounded-full h-5 w-5 border-2 border-gray-500 border-t-white" }),
          /* @__PURE__ */ e("span", { className: "text-white text-sm font-medium", children: "Transitioning Camera..." })
        ] }) }) })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "bg-gradient-to-r from-gray-900 via-slate-900 to-gray-900 px-6 py-3 border-t border-gray-800", children: /* @__PURE__ */ s("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ s("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ s("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e(ut, { className: "w-4 h-4 text-gray-400" }),
          /* @__PURE__ */ s("span", { className: "text-sm text-gray-400", children: [
            "Viewing: ",
            /* @__PURE__ */ e("span", { className: "text-white font-semibold", children: o.name })
          ] })
        ] }),
        /* @__PURE__ */ s("div", { className: "text-sm text-gray-400", children: [
          "Camera: ",
          /* @__PURE__ */ e("span", { className: "text-white font-semibold", children: pt[U].name })
        ] })
      ] }),
      /* @__PURE__ */ s("div", { className: "flex items-center gap-2 text-xs text-gray-500", children: [
        /* @__PURE__ */ e("span", { children: "High Performance Mode" }),
        /* @__PURE__ */ e("div", { className: "w-2 h-2 bg-green-500 rounded-full animate-pulse" })
      ] })
    ] }) })
  ] }) }) : null;
}, ln = () => {
  const [o, d] = J([
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
  ]), [m, C] = J("floor-1"), [i, v] = J(null), [q, ie] = J(!1), [P, oe] = J({ x: 0, y: 0 }), U = 1, [A, _] = J(!0), [ve, Ye] = J(!1), [K, $e] = J(!1), [ge, be] = J(null), [g, I] = J(null), [F, ye] = J(null), [le, ze] = J(!1), [xe, De] = J(null), [M, Ne] = J(null), te = Te(null), Q = Te(null), Le = Te(null);
  Ve(() => {
    if ((i == null ? void 0 : i.type) === "table") {
      const a = n();
      if (!a)
        return;
      const r = a.chairs.filter((h) => h.tableId === i.id);
      if (r.filter((h) => h.size === void 0).length > 0) {
        const h = {};
        r.forEach((y) => {
          y.size !== void 0 && !h[y.position] && (h[y.position] = y.size);
        }), d((y) => y.map(
          (k) => k.id === m ? {
            ...k,
            chairs: k.chairs.map((B) => {
              if (B.tableId === i.id && B.size === void 0) {
                const ee = h[B.position] ?? 40;
                return { ...B, size: ee };
              }
              return B;
            })
          } : k
        ));
      }
    }
  }, [i]);
  const n = () => o.find((a) => a.id === m), Z = (a, r = "medium") => {
    const l = n();
    if (!l)
      return;
    const { width: h, height: y } = ht(a, r), k = {
      id: Ze(),
      name: `Table ${l.tables.length + 1}`,
      shape: a,
      size: r,
      x: 200 + l.tables.length * 20,
      y: 200 + l.tables.length * 20,
      width: h,
      height: y,
      rotation: 0
    };
    d((B) => B.map(
      (ee) => ee.id === m ? { ...ee, tables: [...ee.tables, k] } : ee
    )), v({ type: "table", id: k.id });
  }, H = (a) => {
    const r = n();
    if (!r)
      return;
    const l = {
      id: Ze(),
      name: `${Qe[a]} ${r.objects.length + 1}`,
      type: a,
      x: 300 + r.objects.length * 30,
      y: 300 + r.objects.length * 30,
      width: 120,
      height: 80,
      rotation: 0
    };
    d((h) => h.map(
      (y) => y.id === m ? { ...y, objects: [...y.objects, l] } : y
    )), v({ type: "object", id: l.id });
  }, E = (a) => {
    if (!i || i.type !== "table")
      return;
    const r = n();
    if (!r)
      return;
    const l = r.chairs.filter(
      (ee) => ee.tableId === i.id && ee.position === a
    ), h = l.length, y = l.find((ee) => ee.size !== void 0), k = (y == null ? void 0 : y.size) ?? 40, B = {
      id: Ze(),
      tableId: i.id,
      position: a,
      index: h,
      x: 0,
      y: 0,
      size: k
      // Always set a size to prevent recalculation on table resize
    };
    d((ee) => ee.map(
      (V) => V.id === m ? { ...V, chairs: [...V.chairs, B] } : V
    ));
  }, c = (a) => {
    if (!i || i.type !== "table")
      return;
    const r = n();
    if (!r)
      return;
    const l = r.chairs.filter(
      (y) => y.tableId === i.id && y.position === a
    );
    if (l.length === 0)
      return;
    const h = l.reduce(
      (y, k) => k.index > y.index ? k : y
    );
    d((y) => y.map(
      (k) => k.id === m ? {
        ...k,
        chairs: k.chairs.filter((B) => B.id !== h.id)
      } : k
    ));
  }, R = (a, r) => {
    !i || i.type !== "table" || !n() || d((h) => h.map(
      (y) => y.id === m ? {
        ...y,
        chairs: y.chairs.map(
          (k) => k.tableId === i.id && k.position === a ? { ...k, size: r } : k
        )
      } : y
    ));
  }, p = () => {
    !i || i.type !== "table" || !n() || d((r) => r.map(
      (l) => l.id === m ? {
        ...l,
        chairs: l.chairs.map((h) => {
          if (h.tableId === i.id) {
            const { size: y, ...k } = h;
            return k;
          }
          return h;
        })
      } : l
    ));
  }, T = () => {
    i && (i.type === "table" ? d((a) => a.map(
      (r) => r.id === m ? {
        ...r,
        tables: r.tables.filter((l) => l.id !== i.id),
        chairs: r.chairs.filter((l) => l.tableId !== i.id)
      } : r
    )) : i.type === "object" ? d((a) => a.map(
      (r) => r.id === m ? {
        ...r,
        objects: r.objects.filter((l) => l.id !== i.id)
      } : r
    )) : i.type === "wall" ? d((a) => a.map(
      (r) => r.id === m ? {
        ...r,
        walls: r.walls.filter((l) => l.id !== i.id)
      } : r
    )) : i.type === "fixedElement" && d((a) => a.map(
      (r) => r.id === m ? {
        ...r,
        fixedElements: r.fixedElements.filter((l) => l.id !== i.id)
      } : r
    )), v(null));
  }, D = (a) => {
    !i || i.type !== "wall" || d((r) => r.map(
      (l) => l.id === m ? {
        ...l,
        walls: l.walls.map(
          (h) => h.id === i.id ? { ...h, thickness: a } : h
        )
      } : l
    ));
  }, z = (a) => {
    !i || i.type !== "wall" || d((r) => r.map(
      (l) => l.id === m ? {
        ...l,
        walls: l.walls.map(
          (h) => h.id === i.id ? { ...h, type: a } : h
        )
      } : l
    ));
  }, re = () => {
    !i || i.type !== "table" || d((a) => a.map(
      (r) => r.id === m ? {
        ...r,
        tables: r.tables.map(
          (l) => l.id === i.id ? { ...l, rotation: (l.rotation || 0) + 45 } : l
        )
      } : r
    ));
  }, O = () => {
    if (!i || i.type !== "table")
      return;
    const a = n();
    if (!a)
      return;
    const r = a.tables.find((k) => k.id === i.id);
    if (!r)
      return;
    const l = {
      ...r,
      id: Ze(),
      name: `${r.name} Copy`,
      x: r.x + 50,
      y: r.y + 50
    }, y = a.chairs.filter((k) => k.tableId === r.id).map((k) => ({
      ...k,
      id: Ze(),
      tableId: l.id
    }));
    d((k) => k.map(
      (B) => B.id === m ? {
        ...B,
        tables: [...B.tables, l],
        chairs: [...B.chairs, ...y]
      } : B
    )), v({ type: "table", id: l.id });
  }, de = et((a) => {
    !i || i.type !== "table" || d((r) => r.map(
      (l) => l.id === m ? {
        ...l,
        tables: l.tables.map(
          (h) => h.id === i.id ? a(h) : h
        )
      } : l
    ));
  }, [i, m]), ne = (a) => {
    de((r) => {
      const { width: l, height: h } = ht(r.shape, a);
      return { ...r, size: a, width: l, height: h };
    });
  }, L = (a, r) => {
    de((l) => ({
      ...l,
      width: a,
      height: r,
      // Set size to a custom indicator or keep current
      size: "medium"
      // Keep a valid size for the interface
    }));
  }, G = (a) => {
    !i || i.type !== "object" || d((r) => r.map(
      (l) => l.id === m ? {
        ...l,
        objects: l.objects.map(
          (h) => h.id === i.id ? { ...h, name: a } : h
        )
      } : l
    ));
  }, $ = (a, r) => {
    !i || i.type !== "object" || d((l) => l.map(
      (h) => h.id === m ? {
        ...h,
        objects: h.objects.map(
          (y) => y.id === i.id ? { ...y, width: a, height: r } : y
        )
      } : h
    ));
  }, b = (a) => {
    !i || i.type !== "object" || d((r) => r.map(
      (l) => l.id === m ? {
        ...l,
        objects: l.objects.map(
          (h) => h.id === i.id ? { ...h, rotation: a } : h
        )
      } : l
    ));
  }, se = (a, r) => {
    !i || i.type !== "fixedElement" || d((l) => l.map(
      (h) => h.id === m ? {
        ...h,
        fixedElements: h.fixedElements.map(
          (y) => y.id === i.id ? { ...y, width: a, height: r } : y
        )
      } : h
    ));
  }, j = (a) => {
    de((r) => ({ ...r, name: a }));
  }, Ce = (a) => {
    if (te.current && !le) {
      if (K && ge) {
        const r = te.current.getBoundingClientRect(), l = Math.round((a.clientX - r.left) / U / Y) * Y, h = Math.round((a.clientY - r.top) / U / Y) * Y;
        if (!g)
          I({ x: l, y: h });
        else {
          if (!n())
            return;
          const k = Je(g, { x: l, y: h }), B = {
            id: Ze(),
            type: ge,
            startX: g.x,
            startY: g.y,
            endX: k.x,
            endY: k.y,
            thickness: 8
          };
          d((ee) => ee.map(
            (V) => V.id === m ? { ...V, walls: [...V.walls, B] } : V
          )), I(null), ye(null), $e(!1), be(null);
        }
        return;
      }
      v(null);
    }
  }, X = (a, r) => {
    v({ type: a, id: r });
  }, S = (a, r) => {
    if (!te.current)
      return;
    a.preventDefault(), a.stopPropagation();
    const l = te.current.getBoundingClientRect(), h = (a.clientX - l.left) / U, y = (a.clientY - l.top) / U, k = n();
    if (!k)
      return;
    const B = k.tables.find((Ie) => Ie.id === r), ee = k.objects.find((Ie) => Ie.id === r), V = k.fixedElements.find((Ie) => Ie.id === r), Ge = k.walls.find((Ie) => Ie.id === r);
    if (Ge)
      oe({
        x: h - Ge.startX,
        y: y - Ge.startY
      }), Q.current = { id: r, type: "wall" };
    else {
      const Ie = B || ee || V;
      Ie && oe({
        x: h - Ie.x,
        y: y - Ie.y
      });
      const We = B ? "table" : ee ? "object" : V ? "fixedElement" : "table";
      Q.current = { id: r, type: We };
    }
    ie(!0);
  }, f = et((a) => {
    !q && !le || !Q.current || !te.current || (Le.current && cancelAnimationFrame(Le.current), Le.current = requestAnimationFrame(() => {
      var B, ee, V, Ge, Ie;
      if (!te.current)
        return;
      const r = te.current.getBoundingClientRect(), l = (a.clientX - r.left) / U, h = (a.clientY - r.top) / U, y = Math.round(l / Y) * Y, k = Math.round(h / Y) * Y;
      if (le && ((B = Q.current) == null ? void 0 : B.type) === "wall") {
        const We = o.find((Xe) => Xe.id === m), Be = We == null ? void 0 : We.walls.find((Xe) => {
          var Pe;
          return Xe.id === ((Pe = Q.current) == null ? void 0 : Pe.id);
        });
        if (Be) {
          const Xe = xe === "start" ? { x: Be.endX, y: Be.endY } : { x: Be.startX, y: Be.startY }, Pe = Je(Xe, { x: y, y: k });
          d((Oe) => Oe.map(
            (me) => me.id === m ? {
              ...me,
              walls: me.walls.map(
                (ae) => {
                  var Re;
                  return ae.id === ((Re = Q.current) == null ? void 0 : Re.id) ? xe === "start" ? { ...ae, startX: Pe.x, startY: Pe.y } : { ...ae, endX: Pe.x, endY: Pe.y } : ae;
                }
              )
            } : me
          ));
        }
      } else if (((ee = Q.current) == null ? void 0 : ee.type) === "table") {
        const We = l - P.x, Be = h - P.y, Xe = Math.round(We / Y) * Y, Pe = Math.round(Be / Y) * Y;
        d((Oe) => Oe.map(
          (me) => me.id === m ? {
            ...me,
            tables: me.tables.map(
              (ae) => {
                var Re;
                return ae.id === ((Re = Q.current) == null ? void 0 : Re.id) ? { ...ae, x: Xe, y: Pe } : ae;
              }
            )
          } : me
        ));
      } else if (((V = Q.current) == null ? void 0 : V.type) === "object") {
        const We = l - P.x, Be = h - P.y, Xe = Math.round(We / Y) * Y, Pe = Math.round(Be / Y) * Y;
        d((Oe) => Oe.map(
          (me) => me.id === m ? {
            ...me,
            objects: me.objects.map(
              (ae) => {
                var Re;
                return ae.id === ((Re = Q.current) == null ? void 0 : Re.id) ? { ...ae, x: Xe, y: Pe } : ae;
              }
            )
          } : me
        ));
      } else if (((Ge = Q.current) == null ? void 0 : Ge.type) === "fixedElement") {
        const We = l - P.x, Be = h - P.y, Xe = Math.round(We / Y) * Y, Pe = Math.round(Be / Y) * Y;
        d((Oe) => Oe.map(
          (me) => me.id === m ? {
            ...me,
            fixedElements: me.fixedElements.map(
              (ae) => {
                var Re;
                return ae.id === ((Re = Q.current) == null ? void 0 : Re.id) ? { ...ae, x: Xe, y: Pe } : ae;
              }
            )
          } : me
        ));
      } else if (((Ie = Q.current) == null ? void 0 : Ie.type) === "wall" && !le) {
        const We = l - P.x, Be = h - P.y, Xe = Math.round(We / Y) * Y, Pe = Math.round(Be / Y) * Y;
        d((Oe) => Oe.map(
          (me) => me.id === m ? {
            ...me,
            walls: me.walls.map((ae) => {
              var ot;
              if (ae.id !== ((ot = Q.current) == null ? void 0 : ot.id))
                return ae;
              const Re = Xe - ae.startX, it = Pe - ae.startY;
              return {
                ...ae,
                startX: ae.startX + Re,
                startY: ae.startY + it,
                endX: ae.endX + Re,
                endY: ae.endY + it
              };
            })
          } : me
        ));
      }
    }));
  }, [q, le, xe, P, m, U, o]), pe = () => {
    Le.current && (cancelAnimationFrame(Le.current), Le.current = null), ie(!1), Q.current = null, ze(!1), De(null), Ne(null);
  }, u = (a, r, l) => {
    a.preventDefault(), a.stopPropagation(), ze(!0), De(l), Q.current = { id: r, type: "wall" };
  }, N = () => {
    const a = {
      id: Ze(),
      name: `Floor ${o.length + 1}`,
      isActive: !1,
      tables: [],
      chairs: [],
      objects: [],
      walls: [],
      fixedElements: []
    };
    d((r) => [...r, a]), W(a.id);
  }, Me = () => {
    if (o.length <= 1)
      return;
    const a = o.filter((r) => r.id !== m);
    d(a), C(a[0].id);
  }, W = (a) => {
    d((r) => r.map((l) => ({
      ...l,
      isActive: l.id === a
    }))), C(a), v(null);
  }, w = (a, r) => {
    d((l) => l.map(
      (h) => h.id === a ? { ...h, name: r } : h
    ));
  }, Ee = (a) => {
    $e(!0), be(a), I(null), ye(null), v(null);
  }, ke = (a) => {
    const r = n();
    if (!r)
      return;
    const l = {
      id: Ze(),
      name: `${a.charAt(0).toUpperCase() + a.slice(1)} ${r.fixedElements.length + 1}`,
      type: a,
      x: 400 + r.fixedElements.length * 30,
      y: 400 + r.fixedElements.length * 30,
      width: 60,
      height: 60,
      rotation: 0
    };
    d((h) => h.map(
      (y) => y.id === m ? { ...y, fixedElements: [...y.fixedElements, l] } : y
    )), v({ type: "fixedElement", id: l.id });
  }, ce = () => {
    const a = {
      floors: o,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
    console.log("Saving floor plan:", a), alert("Floor plan saved! (Check console for data)");
  }, he = () => {
    d([
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
    ]), C("floor-sample"), v(null), alert("Sample floor plan loaded!");
  };
  Ve(() => {
    const a = (l) => f(l), r = () => pe();
    return (q || le) && (document.addEventListener("mousemove", a), document.addEventListener("mouseup", r)), () => {
      document.removeEventListener("mousemove", a), document.removeEventListener("mouseup", r);
    };
  }, [q, le, f]);
  const Fe = (a) => {
    var r;
    if (K && g && te.current) {
      const l = te.current.getBoundingClientRect(), h = Math.round((a.clientX - l.left) / U / Y) * Y, y = Math.round((a.clientY - l.top) / U / Y) * Y, k = Je(g, { x: h, y });
      ye(k);
    } else if (le && ((r = Q.current) == null ? void 0 : r.type) === "wall" && te.current) {
      const l = te.current.getBoundingClientRect(), h = Math.round((a.clientX - l.left) / U / Y) * Y, y = Math.round((a.clientY - l.top) / U / Y) * Y, k = n(), B = k == null ? void 0 : k.walls.find((ee) => {
        var V;
        return ee.id === ((V = Q.current) == null ? void 0 : V.id);
      });
      if (B) {
        const ee = xe === "start" ? { x: B.endX, y: B.endY } : { x: B.startX, y: B.startY }, V = Je(ee, { x: h, y });
        Ne(
          xe === "start" ? { startX: V.x, startY: V.y, endX: B.endX, endY: B.endY } : { startX: B.startX, startY: B.startY, endX: V.x, endY: V.y }
        );
      }
    }
  };
  Ve(() => {
    const a = (r) => {
      r.key === "Escape" && K && ($e(!1), be(null), I(null), ye(null));
    };
    return document.addEventListener("keydown", a), () => document.removeEventListener("keydown", a);
  }, [K]);
  const x = n(), fe = x == null ? void 0 : x.tables.find((a) => (i == null ? void 0 : i.type) === "table" && a.id === i.id), He = x == null ? void 0 : x.objects.find((a) => (i == null ? void 0 : i.type) === "object" && a.id === i.id), ue = x == null ? void 0 : x.walls.find((a) => (i == null ? void 0 : i.type) === "wall" && a.id === i.id), Se = x == null ? void 0 : x.fixedElements.find((a) => (i == null ? void 0 : i.type) === "fixedElement" && a.id === i.id), we = fe ? (x == null ? void 0 : x.chairs.filter((a) => a.tableId === fe.id)) ?? [] : [], Ae = et(() => _((a) => !a), []);
  return /* @__PURE__ */ s("div", { className: "flex h-screen bg-gray-50", children: [
    /* @__PURE__ */ e("style", { dangerouslySetInnerHTML: { __html: Ht } }),
    /* @__PURE__ */ e(
      jt,
      {
        floors: o,
        currentFloor: x,
        onAddFloor: N,
        onRemoveFloor: Me,
        onSwitchFloor: W,
        onRenameFloor: w,
        onAddTable: Z,
        onAddObject: H,
        onStartWallDrawing: Ee,
        onAddFixedElement: ke,
        onRotateTable: re,
        onDuplicateTable: O,
        onRemoveTable: T,
        onSave: ce,
        onLoad: he,
        selectedTable: fe ?? null,
        selectedTableChairs: we
      }
    ),
    /* @__PURE__ */ s("div", { className: "flex-1 flex flex-col", children: [
      /* @__PURE__ */ e(
        nn,
        {
          showGrid: A,
          selectedTable: fe ?? null,
          selectedObject: He ?? null,
          selectedWall: ue ?? null,
          selectedFixedElement: Se ?? null,
          selectedTableChairs: we,
          tableCount: (x == null ? void 0 : x.tables.length) ?? 0,
          chairCount: (x == null ? void 0 : x.chairs.length) ?? 0,
          objectCount: (x == null ? void 0 : x.objects.length) ?? 0,
          wallCount: (x == null ? void 0 : x.walls.length) ?? 0,
          fixedElementCount: (x == null ? void 0 : x.fixedElements.length) ?? 0,
          selectedElementType: (i == null ? void 0 : i.type) ?? null,
          onToggleGrid: Ae,
          onAddChair: E,
          onRemoveChair: c,
          onChangeTableSize: ne,
          onCustomTableSize: L,
          onTableNameChange: j,
          onObjectNameChange: G,
          onObjectResize: $,
          onObjectRotate: b,
          onRemoveObject: T,
          onRemoveWall: T,
          onRemoveFixedElement: T,
          onChangeWallThickness: D,
          onConvertWallType: z,
          onFixedElementResize: se,
          onChairSizeChange: R,
          onResetChairSizes: p,
          on3DPreview: () => Ye(!0)
        }
      ),
      /* @__PURE__ */ s("div", { className: "flex-1 overflow-hidden bg-gray-100 relative", children: [
        /* @__PURE__ */ s(
          "div",
          {
            ref: te,
            className: `w-full h-full relative ${K ? "cursor-crosshair" : le ? "cursor-grabbing" : "cursor-default"}`,
            style: {
              transform: `scale(${U})`,
              transformOrigin: "top left",
              background: A ? "radial-gradient(circle, #d1d5db 1px, transparent 1px)" : "white",
              backgroundSize: `${Y * U}px ${Y * U}px`
            },
            onClick: Ce,
            onMouseMove: Fe,
            children: [
              (x == null ? void 0 : x.tables.length) === 0 && /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ s("div", { className: "text-center text-gray-400", children: [
                /* @__PURE__ */ e("div", { className: "text-6xl mb-4", children: "🏪" }),
                /* @__PURE__ */ e("div", { className: "text-xl font-medium mb-2", children: "Welcome to Your Restaurant Designer" }),
                /* @__PURE__ */ e("div", { className: "text-lg", children: 'Click "Add Tables" in the sidebar to start designing your floor plan' }),
                /* @__PURE__ */ s("div", { className: "mt-4 space-y-1 text-sm", children: [
                  /* @__PURE__ */ e("div", { children: "• Drag tables to move them around" }),
                  /* @__PURE__ */ e("div", { children: "• Click tables to select and edit properties" }),
                  /* @__PURE__ */ e("div", { children: "• Add chairs from the top toolbar or the table properties panel" }),
                  /* @__PURE__ */ e("div", { children: "• Use multiple floors for complex layouts" })
                ] })
              ] }) }),
              x == null ? void 0 : x.tables.map((a) => /* @__PURE__ */ e(
                Ut,
                {
                  table: a,
                  isSelected: (i == null ? void 0 : i.type) === "table" && i.id === a.id,
                  chairs: x.chairs.filter((r) => r.tableId === a.id),
                  onSelect: () => X("table", a.id),
                  onDrag: S,
                  onDragEnd: pe
                },
                a.id
              )),
              x == null ? void 0 : x.objects.map((a) => /* @__PURE__ */ e(
                Jt,
                {
                  object: a,
                  isSelected: (i == null ? void 0 : i.type) === "object" && i.id === a.id,
                  onSelect: () => X("object", a.id),
                  onDragStart: (r) => S(r, a.id)
                },
                a.id
              )),
              x == null ? void 0 : x.walls.map((a) => /* @__PURE__ */ e(
                mt,
                {
                  wall: a,
                  isSelected: (i == null ? void 0 : i.type) === "wall" && i.id === a.id,
                  onSelect: () => X("wall", a.id),
                  onDragHandle: (r, l) => u(r, a.id, l),
                  onDragStart: (r) => S(r, a.id)
                },
                a.id
              )),
              K && g && F && ge && /* @__PURE__ */ e(
                mt,
                {
                  wall: {
                    id: "temp-wall",
                    type: ge,
                    startX: g.x,
                    startY: g.y,
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
              x == null ? void 0 : x.fixedElements.map((a) => /* @__PURE__ */ e(
                Kt,
                {
                  element: a,
                  isSelected: (i == null ? void 0 : i.type) === "fixedElement" && i.id === a.id,
                  onSelect: () => X("fixedElement", a.id),
                  onDragStart: (r) => S(r, a.id)
                },
                a.id
              )),
              x == null ? void 0 : x.chairs.map((a) => {
                const r = x.tables.find((h) => h.id === a.tableId);
                if (!r)
                  return null;
                const l = x.chairs.filter(
                  (h) => h.tableId === a.tableId && h.position === a.position
                ).length;
                return /* @__PURE__ */ e(
                  qt,
                  {
                    chair: a,
                    table: r,
                    totalChairsOnSide: l,
                    isSelected: !1,
                    onSelect: () => {
                    },
                    onDrag: () => {
                    },
                    onDragEnd: () => {
                    }
                  },
                  a.id
                );
              }),
              i && i.type === "table" && fe && /* @__PURE__ */ e(
                "div",
                {
                  className: "absolute border-2 border-blue-500 border-dashed rounded pointer-events-none",
                  style: {
                    left: fe.x - 10,
                    top: fe.y - 10,
                    width: (fe.shape === "rectangle" ? fe.width * 1.5 : fe.width) + 20,
                    height: fe.height + 20,
                    transform: `rotate(${fe.rotation || 0}deg)`
                  }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ e("div", { className: "absolute bottom-0 left-0 right-0 bg-white bg-opacity-95 border-t border-gray-200 p-3", children: /* @__PURE__ */ s("div", { className: "flex items-center justify-between text-sm", children: [
          /* @__PURE__ */ s("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ s("div", { className: "flex items-center gap-2 text-gray-600", children: [
              /* @__PURE__ */ e("div", { className: "w-2 h-2 bg-green-500 rounded-full" }),
              /* @__PURE__ */ s("span", { children: [
                "Floor: ",
                x == null ? void 0 : x.name
              ] })
            ] }),
            q && /* @__PURE__ */ s("div", { className: "flex items-center gap-2 text-blue-600", children: [
              /* @__PURE__ */ e("div", { className: "w-2 h-2 bg-blue-500 rounded-full animate-pulse" }),
              /* @__PURE__ */ e("span", { children: "Dragging..." })
            ] })
          ] }),
          /* @__PURE__ */ s("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ s("div", { className: "text-gray-500", children: [
              "Zoom: ",
              Math.round(U * 100),
              "% | Grid: ",
              A ? "On" : "Off"
            ] }),
            i && /* @__PURE__ */ e("div", { className: "text-blue-600 font-medium", children: i.type === "table" && fe ? `${fe.name} (${fe.shape})` : "Element Selected" })
          ] })
        ] }) })
      ] })
    ] }),
    x && /* @__PURE__ */ e(
      sn,
      {
        floor: x,
        isOpen: ve,
        onClose: () => Ye(!1)
      }
    )
  ] });
};
export {
  sn as Preview3DModal,
  ln as RestaurantFloorPlanner
};
//# sourceMappingURL=restaurant-floor-planner.es.js.map
