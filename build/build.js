import { defineComponent as Q, useSlots as X, ref as n, computed as o, watch as w, openBlock as u, createElementBlock as s, normalizeClass as L, unref as r, renderSlot as y, createBlock as A, resolveDynamicComponent as T, Fragment as Y, withDirectives as Z, createElementVNode as F, vModelCheckbox as ee, createCommentVNode as h, nextTick as le } from "vue";
import { generateRandomString as O } from "lkt-string-tools";
import { createLktEvent as D } from "lkt-events";
import { __ as te } from "lkt-i18n";
let ae = {}, oe = {};
const f = {
  customValueSlots: ae,
  customEditSlots: oe
}, ue = ["data-labeled"], se = {
  key: 0,
  class: "lkt-field-switch__main"
}, ie = { key: 1 }, de = ["name", "id", "disabled", "readonly", "placeholder", "value", "checked"], ne = ["for", "innerHTML"], re = {
  key: 1,
  class: "lkt-field-switch__read"
}, fe = ["innerHTML", "title"], ce = ["innerHTML", "title"], ve = {
  key: 4,
  class: "lkt-field__state"
}, pe = ["title"], me = { name: "LktFieldSwitch", inheritAttrs: !1 }, he = /* @__PURE__ */ Q({
  ...me,
  props: {
    modelValue: { type: Boolean, default: !1 },
    placeholder: { default: "" },
    label: { default: "" },
    palette: { default: "" },
    name: { default: O(16) },
    valid: { type: Boolean, default: !1 },
    autocomplete: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    readMode: { type: Boolean, default: !1 },
    readModeAsField: { type: Boolean, default: !1 },
    readModeAsSwitch: { type: Boolean, default: !1 },
    readModeAsCheck: { type: Boolean, default: !1 },
    allowReadModeSwitch: { type: Boolean, default: !1 },
    tabindex: { default: void 0 },
    mandatory: { type: Boolean, default: !1 },
    reset: { type: Boolean, default: !1 },
    resetMessage: { default: "" },
    mandatoryMessage: { default: "" },
    infoMessage: { default: "" },
    errorMessage: { default: "" },
    switchEditionMessage: { default: "" },
    valueSlot: { default: "" },
    editSlot: { default: "" },
    slotData: { default: () => ({}) },
    stampMode: { type: Boolean, default: !1 },
    stampPaletteOn: { default: "success" },
    stampPaletteOff: { default: "danger" },
    textOn: { default: "" },
    textOff: { default: "" },
    isCheckbox: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "focus", "blur", "click", "click-info", "click-error"],
  setup(i, { expose: c, emit: H }) {
    const S = H, v = X(), l = i, p = O(16), M = n(null), _ = n(l.modelValue), t = n(l.modelValue), V = n(t.value ? "true" : "false"), b = n(!1), a = n(!l.readMode), $ = n(l.stampMode), C = o(() => l.valueSlot !== "" && typeof f.customValueSlots[l.valueSlot] < "u"), P = o(() => f.customValueSlots[l.valueSlot]), B = o(() => l.editSlot !== "" && typeof f.customEditSlots[l.editSlot] < "u"), x = o(() => f.customEditSlots[l.editSlot]), R = o(() => !a.value && (l.isCheckbox || l.readModeAsCheck) || a.value && l.isCheckbox), I = o(() => typeof l.valid == "function" ? l.valid() : l.valid), N = o(() => t.value !== _.value), j = o(() => {
      const e = ["lkt-field", "lkt-field-switch"];
      return l.palette && e.push(`lkt-field--${l.palette}`), N.value && e.push("is-changed"), l.disabled && e.push("is-disabled"), R.value && e.push("is-checkbox"), b.value && e.push("has-focus"), e.push(I.value ? "is-valid" : "is-error"), e.push(l.modelValue ? "is-filled" : "is-empty"), a.value && B.value && e.push("with-edit-slot"), !a.value && C.value && e.push("with-value-slot"), !a.value && l.stampMode && e.push("with-stamp"), e.join(" ");
    }), z = o(() => t.value ? "is-" + l.stampPaletteOn : "is-" + l.stampPaletteOff), d = o(() => t.value ? l.textOn || "True" : l.textOff || "False"), U = o(() => l.label.startsWith("__:") ? te(l.label.substring(3)) : l.label), g = o(() => !!(a.value || l.readModeAsField || l.readModeAsCheck || l.readModeAsSwitch)), E = () => {
      le(() => {
        M.value && M.value.focus();
      });
    };
    w(() => l.readMode, (e) => a.value = !e), w(() => l.modelValue, (e) => t.value = e), w(t, (e) => (V.value = t.value ? "true" : "false") && S("update:modelValue", e));
    const W = () => t.value = _.value, q = () => t.value, G = (e) => (b.value = !0) && S("focus", e, D(p, { value: t.value })), J = (e) => (b.value = !1) && S("blur", e, D(p, { value: t.value })), K = (e) => {
      a.value = !a.value, a.value && E();
    };
    return c({
      Identifier: p,
      reset: W,
      focus: E,
      value: q,
      isMandatory: () => l.mandatory
    }), (e, k) => (u(), s("div", {
      class: L(j.value),
      "data-labeled": !r(v).label
    }, [
      y(e.$slots, "prefix"),
      g.value ? (u(), s("div", se, [
        r(v).edit ? (u(), s("div", {
          key: 0,
          onClick: k[0] || (k[0] = //@ts-ignore
          (...m) => e.onClick && e.onClick(...m))
        }, [
          y(e.$slots, "edit", {
            value: t.value,
            title: d.value,
            data: e.slotData
          })
        ])) : B.value ? (u(), s("div", ie, [
          (u(), A(T(x.value), {
            value: t.value,
            title: d.value,
            data: e.slotData
          }, null, 8, ["value", "title", "data"]))
        ])) : (u(), s(Y, { key: 2 }, [
          Z(F("input", {
            "onUpdate:modelValue": k[1] || (k[1] = (m) => t.value = m),
            type: "checkbox",
            ref: (m) => M.value = m,
            name: e.name,
            id: r(p),
            disabled: !a.value || e.disabled,
            readonly: !a.value || e.readonly,
            placeholder: e.placeholder,
            value: V.value,
            checked: t.value,
            onFocus: G,
            onBlur: J
          }, null, 40, de), [
            [ee, t.value]
          ]),
          r(v).label ? y(e.$slots, "label", { key: 0 }) : h("", !0),
          r(v).label ? h("", !0) : (u(), s("label", {
            key: 1,
            for: r(p),
            innerHTML: U.value
          }, null, 8, ne))
        ], 64))
      ])) : h("", !0),
      g.value ? h("", !0) : (u(), s("div", re, [
        r(v).value ? y(e.$slots, "value", {
          key: 0,
          value: t.value,
          title: d.value,
          data: e.slotData
        }) : C.value ? (u(), A(T(P.value), {
          key: 1,
          value: t.value,
          title: d.value
        }, null, 8, ["value", "title"])) : $.value ? (u(), s("div", {
          key: 2,
          class: L(["lkt-field-switch-stamp", z.value]),
          innerHTML: d.value,
          title: d.value
        }, null, 10, fe)) : (u(), s("div", {
          key: 3,
          class: "lkt-field-switch__read-value",
          innerHTML: d.value,
          title: d.value
        }, null, 8, ce)),
        e.allowReadModeSwitch ? (u(), s("div", ve, [
          F("i", {
            class: "lkt-field__edit-icon",
            title: l.switchEditionMessage,
            onClick: K
          }, null, 8, pe)
        ])) : h("", !0)
      ]))
    ], 10, ue));
  }
}), be = {
  install: (i) => {
    i.component("lkt-field-switch") === void 0 && i.component("lkt-field-switch", he);
  }
}, we = (i, c) => (f.customValueSlots[i] = c, !0), _e = (i, c) => (f.customEditSlots[i] = c, !0);
export {
  be as default,
  _e as setSwitchEditSlot,
  we as setSwitchValueSlot
};
