import { defineComponent as H, useSlots as R, ref as o, computed as c, watch as y, openBlock as h, createElementBlock as b, normalizeClass as j, unref as d, renderSlot as g, withDirectives as z, createElementVNode as A, vModelCheckbox as D, createCommentVNode as k, nextTick as I } from "vue";
import { generateRandomString as S } from "lkt-string-tools";
import { createLktEvent as V } from "lkt-events";
const U = ["data-labeled"], q = ["name", "id", "disabled", "readonly", "placeholder", "value", "checked"], G = ["for", "innerHTML"], J = { name: "LktFieldSwitch", inheritAttrs: !1 }, K = /* @__PURE__ */ H({
  ...J,
  props: {
    modelValue: { type: Boolean, default: !1 },
    placeholder: { type: String, default: "" },
    label: { type: String, default: "" },
    palette: { type: String, default: "" },
    name: { type: String, default: S(16) },
    valid: { type: Boolean, default: !1 },
    autocomplete: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    readMode: { type: Boolean, default: !1 },
    allowReadModeSwitch: { type: Boolean, default: !1 },
    tabindex: { type: Number, default: void 0 },
    mandatory: { type: Boolean, default: !1 },
    reset: { type: Boolean, default: !1 },
    resetMessage: { type: String, default: "" },
    mandatoryMessage: { type: String, default: "" },
    infoMessage: { type: String, default: "" },
    errorMessage: { type: String, default: "" },
    switchEditionMessage: { type: String, default: "" }
  },
  emits: ["update:modelValue", "focus", "blur", "click", "click-info", "click-error"],
  setup(t, { expose: B, emit: M }) {
    const n = M, s = R(), l = t, u = S(16), i = o(null), p = o(l.modelValue), a = o(l.modelValue), v = o(a.value ? "true" : "false"), r = o(!1), w = o(!l.readMode), x = c(() => typeof l.valid == "function" ? l.valid() : l.valid), L = c(() => a.value !== p.value), E = c(() => {
      const e = ["lkt-field", "lkt-field-switch"];
      return l.palette && e.push(`lkt-field--${l.palette}`), L.value && e.push("is-changed"), l.disabled && e.push("is-disabled"), r.value && e.push("has-focus"), e.push(x.value ? "is-valid" : "is-error"), e.push(l.modelValue ? "is-filled" : "is-empty"), e.join(" ");
    }), C = () => {
      I(() => {
        i.value && i.value.focus();
      });
    };
    y(() => l.modelValue, (e) => a.value = e), y(a, (e) => (v.value = a.value ? "true" : "false") && n("update:modelValue", e));
    const F = () => a.value = p.value, N = () => a.value, T = (e) => (r.value = !0) && n("focus", e, V(u, { value: a.value })), $ = (e) => (r.value = !1) && n("blur", e, V(u, { value: a.value }));
    return B({
      Identifier: u,
      reset: F,
      focus: C,
      value: N,
      isMandatory: () => l.mandatory
    }), (e, m) => (h(), b("div", {
      class: j(E.value),
      "data-labeled": !d(s).label
    }, [
      g(e.$slots, "prefix"),
      z(A("input", {
        "onUpdate:modelValue": m[0] || (m[0] = (f) => a.value = f),
        type: "checkbox",
        ref: (f) => i.value = f,
        name: t.name,
        id: d(u),
        disabled: t.disabled || !w.value,
        readonly: t.readonly,
        placeholder: t.placeholder,
        value: v.value,
        checked: a.value,
        onFocus: T,
        onBlur: $
      }, null, 40, q), [
        [D, a.value]
      ]),
      d(s).label ? g(e.$slots, "label", { key: 0 }) : k("", !0),
      d(s).label ? k("", !0) : (h(), b("label", {
        key: 1,
        for: d(u),
        innerHTML: t.label
      }, null, 8, G))
    ], 10, U));
  }
}), W = {
  install: (t) => {
    t.component("lkt-field-switch", K);
  }
};
export {
  W as default
};
