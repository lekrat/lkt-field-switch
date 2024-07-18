import { defineComponent as J, useSlots as K, ref as n, computed as u, watch as _, openBlock as a, createElementBlock as s, normalizeClass as E, unref as r, renderSlot as y, createBlock as L, resolveDynamicComponent as T, Fragment as Q, withDirectives as X, createElementVNode as O, vModelCheckbox as Y, createCommentVNode as h, nextTick as Z } from "vue";
import { generateRandomString as D } from "lkt-string-tools";
import { createLktEvent as H } from "lkt-events";
import { __ as ee } from "lkt-i18n";
let le = {}, te = {};
const f = {
  customValueSlots: le,
  customEditSlots: te
}, ae = ["data-labeled"], oe = {
  key: 0,
  class: "lkt-field-switch__main"
}, ue = { key: 1 }, se = ["name", "id", "disabled", "readonly", "placeholder", "value", "checked"], ie = ["for", "innerHTML"], de = {
  key: 1,
  class: "lkt-field-switch__read"
}, ne = ["innerHTML", "title"], re = ["innerHTML", "title"], fe = {
  key: 4,
  class: "lkt-field__state"
}, ce = ["title"], ve = { name: "LktFieldSwitch", inheritAttrs: !1 }, me = /* @__PURE__ */ J({
  ...ve,
  props: {
    modelValue: { type: Boolean, default: !1 },
    placeholder: { default: "" },
    label: { default: "" },
    palette: { default: "" },
    name: { default: D(16) },
    valid: { type: Boolean, default: !1 },
    autocomplete: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    readMode: { type: Boolean, default: !1 },
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
  setup(i, { expose: c, emit: $ }) {
    const S = $, v = K(), l = i, m = D(16), b = n(null), w = n(l.modelValue), t = n(l.modelValue), V = n(t.value ? "true" : "false"), M = n(!1), o = n(!l.readMode), F = n(l.stampMode), g = u(() => l.valueSlot !== "" && typeof f.customValueSlots[l.valueSlot] < "u"), P = u(() => f.customValueSlots[l.valueSlot]), B = u(() => l.editSlot !== "" && typeof f.customEditSlots[l.editSlot] < "u"), R = u(() => f.customEditSlots[l.editSlot]), N = u(() => typeof l.valid == "function" ? l.valid() : l.valid), j = u(() => t.value !== w.value), x = u(() => {
      const e = ["lkt-field", "lkt-field-switch"];
      return l.palette && e.push(`lkt-field--${l.palette}`), j.value && e.push("is-changed"), l.disabled && e.push("is-disabled"), l.isCheckbox && e.push("is-checkbox"), M.value && e.push("has-focus"), e.push(N.value ? "is-valid" : "is-error"), e.push(l.modelValue ? "is-filled" : "is-empty"), o.value && B.value && e.push("with-edit-slot"), !o.value && g.value && e.push("with-value-slot"), !o.value && l.stampMode && e.push("with-stamp"), e.join(" ");
    }), z = u(() => t.value ? "is-" + l.stampPaletteOn : "is-" + l.stampPaletteOff), d = u(() => t.value ? l.textOn || "True" : l.textOff || "False"), A = u(() => l.label.startsWith("__:") ? ee(l.label.substring(3)) : l.label), C = () => {
      Z(() => {
        b.value && b.value.focus();
      });
    };
    _(() => l.readMode, (e) => o.value = !e), _(() => l.modelValue, (e) => t.value = e), _(t, (e) => (V.value = t.value ? "true" : "false") && S("update:modelValue", e));
    const I = () => t.value = w.value, U = () => t.value, W = (e) => (M.value = !0) && S("focus", e, H(m, { value: t.value })), q = (e) => (M.value = !1) && S("blur", e, H(m, { value: t.value })), G = (e) => {
      o.value = !o.value, o.value && C();
    };
    return c({
      Identifier: m,
      reset: I,
      focus: C,
      value: U,
      isMandatory: () => l.mandatory
    }), (e, k) => (a(), s("div", {
      class: E(x.value),
      "data-labeled": !r(v).label
    }, [
      y(e.$slots, "prefix"),
      o.value ? (a(), s("div", oe, [
        r(v).edit ? (a(), s("div", {
          key: 0,
          onClick: k[0] || (k[0] = //@ts-ignore
          (...p) => e.onClick && e.onClick(...p))
        }, [
          y(e.$slots, "edit", {
            value: t.value,
            title: d.value,
            data: e.slotData
          })
        ])) : B.value ? (a(), s("div", ue, [
          (a(), L(T(R.value), {
            value: t.value,
            title: d.value,
            data: e.slotData
          }, null, 8, ["value", "title", "data"]))
        ])) : (a(), s(Q, { key: 2 }, [
          X(O("input", {
            "onUpdate:modelValue": k[1] || (k[1] = (p) => t.value = p),
            type: "checkbox",
            ref: (p) => b.value = p,
            name: e.name,
            id: r(m),
            disabled: !o.value || e.disabled,
            readonly: !o.value || e.readonly,
            placeholder: e.placeholder,
            value: V.value,
            checked: t.value,
            onFocus: W,
            onBlur: q
          }, null, 40, se), [
            [Y, t.value]
          ]),
          r(v).label ? y(e.$slots, "label", { key: 0 }) : h("", !0),
          r(v).label ? h("", !0) : (a(), s("label", {
            key: 1,
            for: r(m),
            innerHTML: A.value
          }, null, 8, ie))
        ], 64))
      ])) : h("", !0),
      o.value ? h("", !0) : (a(), s("div", de, [
        r(v).value ? y(e.$slots, "value", {
          key: 0,
          value: t.value,
          title: d.value,
          data: e.slotData
        }) : g.value ? (a(), L(T(P.value), {
          key: 1,
          value: t.value,
          title: d.value
        }, null, 8, ["value", "title"])) : F.value ? (a(), s("div", {
          key: 2,
          class: E(["lkt-field-switch-stamp", z.value]),
          innerHTML: d.value,
          title: d.value
        }, null, 10, ne)) : (a(), s("div", {
          key: 3,
          class: "lkt-field-switch__read-value",
          innerHTML: d.value,
          title: d.value
        }, null, 8, re)),
        e.allowReadModeSwitch ? (a(), s("div", fe, [
          O("i", {
            class: "lkt-field__edit-icon",
            title: l.switchEditionMessage,
            onClick: G
          }, null, 8, ce)
        ])) : h("", !0)
      ]))
    ], 10, ae));
  }
}), Se = {
  install: (i) => {
    i.component("lkt-field-switch") === void 0 && i.component("lkt-field-switch", me);
  }
}, be = (i, c) => (f.customValueSlots[i] = c, !0), Me = (i, c) => (f.customEditSlots[i] = c, !0);
export {
  Se as default,
  Me as setSwitchEditSlot,
  be as setSwitchValueSlot
};
