import { defineComponent as J, useSlots as K, ref as n, computed as s, watch as w, openBlock as a, createElementBlock as u, normalizeClass as E, unref as r, renderSlot as y, createBlock as L, resolveDynamicComponent as T, Fragment as Q, withDirectives as W, createElementVNode as O, vModelCheckbox as X, createCommentVNode as h, nextTick as Y } from "vue";
import { generateRandomString as D } from "lkt-string-tools";
import { createLktEvent as H } from "lkt-events";
let Z = {}, ee = {};
const f = {
  customValueSlots: Z,
  customEditSlots: ee
}, le = ["data-labeled"], te = {
  key: 0,
  class: "lkt-field-switch__main"
}, ae = { key: 1 }, oe = ["name", "id", "disabled", "readonly", "placeholder", "value", "checked"], ue = ["for", "innerHTML"], se = {
  key: 1,
  class: "lkt-field-switch__read"
}, ie = ["innerHTML", "title"], de = ["innerHTML", "title"], ne = {
  key: 4,
  class: "lkt-field__state"
}, re = ["title"], fe = { name: "LktFieldSwitch", inheritAttrs: !1 }, ce = /* @__PURE__ */ J({
  ...fe,
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
    const S = $, v = K(), l = i, m = D(16), b = n(null), V = n(l.modelValue), t = n(l.modelValue), _ = n(t.value ? "true" : "false"), M = n(!1), o = n(!l.readMode), F = n(l.stampMode), g = s(() => l.valueSlot !== "" && typeof f.customValueSlots[l.valueSlot] < "u"), P = s(() => f.customValueSlots[l.valueSlot]), B = s(() => l.editSlot !== "" && typeof f.customEditSlots[l.editSlot] < "u"), R = s(() => f.customEditSlots[l.editSlot]), N = s(() => typeof l.valid == "function" ? l.valid() : l.valid), j = s(() => t.value !== V.value), z = s(() => {
      const e = ["lkt-field", "lkt-field-switch"];
      return l.palette && e.push(`lkt-field--${l.palette}`), j.value && e.push("is-changed"), l.disabled && e.push("is-disabled"), l.isCheckbox && e.push("is-checkbox"), M.value && e.push("has-focus"), e.push(N.value ? "is-valid" : "is-error"), e.push(l.modelValue ? "is-filled" : "is-empty"), o.value && B.value && e.push("with-edit-slot"), !o.value && g.value && e.push("with-value-slot"), !o.value && l.stampMode && e.push("with-stamp"), e.join(" ");
    }), A = s(() => t.value ? "is-" + l.stampPaletteOn : "is-" + l.stampPaletteOff), d = s(() => t.value ? l.textOn || "True" : l.textOff || "False"), C = () => {
      Y(() => {
        b.value && b.value.focus();
      });
    };
    w(() => l.readMode, (e) => o.value = !e), w(() => l.modelValue, (e) => t.value = e), w(t, (e) => (_.value = t.value ? "true" : "false") && S("update:modelValue", e));
    const I = () => t.value = V.value, U = () => t.value, q = (e) => (M.value = !0) && S("focus", e, H(m, { value: t.value })), x = (e) => (M.value = !1) && S("blur", e, H(m, { value: t.value })), G = (e) => {
      o.value = !o.value, o.value && C();
    };
    return c({
      Identifier: m,
      reset: I,
      focus: C,
      value: U,
      isMandatory: () => l.mandatory
    }), (e, k) => (a(), u("div", {
      class: E(z.value),
      "data-labeled": !r(v).label
    }, [
      y(e.$slots, "prefix"),
      o.value ? (a(), u("div", te, [
        r(v).edit ? (a(), u("div", {
          key: 0,
          onClick: k[0] || (k[0] = //@ts-ignore
          (...p) => e.onClick && e.onClick(...p))
        }, [
          y(e.$slots, "edit", {
            value: t.value,
            title: d.value,
            data: e.slotData
          })
        ])) : B.value ? (a(), u("div", ae, [
          (a(), L(T(R.value), {
            value: t.value,
            title: d.value,
            data: e.slotData
          }, null, 8, ["value", "title", "data"]))
        ])) : (a(), u(Q, { key: 2 }, [
          W(O("input", {
            "onUpdate:modelValue": k[1] || (k[1] = (p) => t.value = p),
            type: "checkbox",
            ref: (p) => b.value = p,
            name: e.name,
            id: r(m),
            disabled: !o.value || e.disabled,
            readonly: !o.value || e.readonly,
            placeholder: e.placeholder,
            value: _.value,
            checked: t.value,
            onFocus: q,
            onBlur: x
          }, null, 40, oe), [
            [X, t.value]
          ]),
          r(v).label ? y(e.$slots, "label", { key: 0 }) : h("", !0),
          r(v).label ? h("", !0) : (a(), u("label", {
            key: 1,
            for: r(m),
            innerHTML: e.label
          }, null, 8, ue))
        ], 64))
      ])) : h("", !0),
      o.value ? h("", !0) : (a(), u("div", se, [
        r(v).value ? y(e.$slots, "value", {
          key: 0,
          value: t.value,
          title: d.value,
          data: e.slotData
        }) : g.value ? (a(), L(T(P.value), {
          key: 1,
          value: t.value,
          title: d.value
        }, null, 8, ["value", "title"])) : F.value ? (a(), u("div", {
          key: 2,
          class: E(["lkt-field-switch-stamp", A.value]),
          innerHTML: d.value,
          title: d.value
        }, null, 10, ie)) : (a(), u("div", {
          key: 3,
          class: "lkt-field-switch__read-value",
          innerHTML: d.value,
          title: d.value
        }, null, 8, de)),
        e.allowReadModeSwitch ? (a(), u("div", ne, [
          O("i", {
            class: "lkt-field__edit-icon",
            title: l.switchEditionMessage,
            onClick: G
          }, null, 8, re)
        ])) : h("", !0)
      ]))
    ], 10, le));
  }
}), he = {
  install: (i) => {
    i.component("lkt-field-switch") === void 0 && i.component("lkt-field-switch", ce);
  }
}, ke = (i, c) => (f.customValueSlots[i] = c, !0), ye = (i, c) => (f.customEditSlots[i] = c, !0);
export {
  he as default,
  ye as setSwitchEditSlot,
  ke as setSwitchValueSlot
};
