import { defineComponent as H, useSlots as R, ref as o, computed as p, watch as v, openBlock as b, createElementBlock as k, normalizeClass as j, unref as d, renderSlot as g, withDirectives as z, createElementVNode as A, vModelCheckbox as D, createCommentVNode as S, nextTick as I } from "vue";
import { generateRandomString as V } from "lkt-string-tools";
import { createLktEvent as M } from "lkt-events";
const U = ["data-labeled"], q = ["name", "id", "disabled", "readonly", "placeholder", "value", "checked"], G = ["for", "innerHTML"], J = { name: "LktFieldSwitch", inheritAttrs: !1 }, K = /* @__PURE__ */ H({
  ...J,
  props: {
    modelValue: { type: Boolean, default: !1 },
    placeholder: { type: String, default: "" },
    label: { type: String, default: "" },
    palette: { type: String, default: "" },
    name: { type: String, default: V(16) },
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
  setup(t, { expose: B, emit: w }) {
    const i = w, n = R(), l = t, u = V(16), s = o(null), m = o(l.modelValue), a = o(l.modelValue), y = o(a.value ? "true" : "false"), r = o(!1), f = o(!l.readMode), x = p(() => typeof l.valid == "function" ? l.valid() : l.valid), L = p(() => a.value !== m.value), E = p(() => {
      const e = ["lkt-field", "lkt-field-switch"];
      return l.palette && e.push(`lkt-field--${l.palette}`), L.value && e.push("is-changed"), l.disabled && e.push("is-disabled"), r.value && e.push("has-focus"), e.push(x.value ? "is-valid" : "is-error"), e.push(l.modelValue ? "is-filled" : "is-empty"), e.join(" ");
    }), C = () => {
      I(() => {
        s.value && s.value.focus();
      });
    };
    v(() => l.readMode, (e) => f.value = !e), v(() => l.modelValue, (e) => a.value = e), v(a, (e) => (y.value = a.value ? "true" : "false") && i("update:modelValue", e));
    const F = () => a.value = m.value, N = () => a.value, T = (e) => (r.value = !0) && i("focus", e, M(u, { value: a.value })), $ = (e) => (r.value = !1) && i("blur", e, M(u, { value: a.value }));
    return B({
      Identifier: u,
      reset: F,
      focus: C,
      value: N,
      isMandatory: () => l.mandatory
    }), (e, h) => (b(), k("div", {
      class: j(E.value),
      "data-labeled": !d(n).label
    }, [
      g(e.$slots, "prefix"),
      z(A("input", {
        "onUpdate:modelValue": h[0] || (h[0] = (c) => a.value = c),
        type: "checkbox",
        ref: (c) => s.value = c,
        name: t.name,
        id: d(u),
        disabled: !f.value || t.disabled,
        readonly: !f.value || t.readonly,
        placeholder: t.placeholder,
        value: y.value,
        checked: a.value,
        onFocus: T,
        onBlur: $
      }, null, 40, q), [
        [D, a.value]
      ]),
      d(n).label ? g(e.$slots, "label", { key: 0 }) : S("", !0),
      d(n).label ? S("", !0) : (b(), k("label", {
        key: 1,
        for: d(u),
        innerHTML: t.label
      }, null, 8, G))
    ], 10, U));
  }
});
const W = {
  install: (t) => {
    t.component("lkt-field-switch") === void 0 && t.component("lkt-field-switch", K);
  }
};
export {
  W as default
};
