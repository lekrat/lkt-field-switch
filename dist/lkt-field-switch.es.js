import { defineComponent as T, useSlots as $, ref as d, computed as c, watch as v, openBlock as y, createElementBlock as h, normalizeClass as H, unref as n, renderSlot as b, withDirectives as R, createElementVNode as j, vModelCheckbox as z, createCommentVNode as g, nextTick as A } from "vue";
import { generateRandomString as k } from "lkt-string-tools";
import { createLktEvent as S } from "lkt-events";
const D = ["data-labeled"], I = ["name", "id", "disabled", "readonly", "placeholder"], U = ["for", "innerHTML"], q = { name: "LktFieldSwitch", inheritAttrs: !1 }, G = /* @__PURE__ */ T({
  ...q,
  props: {
    modelValue: { type: Boolean, default: !1 },
    placeholder: { type: String, default: "" },
    label: { type: String, default: "" },
    palette: { type: String, default: "" },
    name: { type: String, default: k(16) },
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
  setup(t, { expose: V, emit: B }) {
    const s = B, u = $(), l = t, o = k(16), i = d(null), p = d(l.modelValue), a = d(l.modelValue), r = d(!1);
    d(!l.readMode);
    const M = c(() => typeof l.valid == "function" ? l.valid() : l.valid), w = c(() => a.value !== p.value), x = c(() => {
      const e = ["lkt-field", "lkt-field-switch"];
      return l.palette && e.push(`lkt-field--${l.palette}`), w.value && e.push("is-changed"), l.disabled && e.push("is-disabled"), r.value && e.push("has-focus"), e.push(M.value ? "is-valid" : "is-error"), e.push(l.modelValue ? "is-filled" : "is-empty"), e.join(" ");
    }), E = () => {
      A(() => {
        i.value && i.value.focus();
      });
    };
    v(() => l.modelValue, (e) => a.value = e), v(a, (e) => s("update:modelValue", e));
    const L = () => a.value = p.value, C = () => a.value, F = (e) => (r.value = !0) && s("focus", e, S(o, { value: a.value })), N = (e) => (r.value = !1) && s("blur", e, S(o, { value: a.value }));
    return V({
      Identifier: o,
      reset: L,
      focus: E,
      value: C,
      isMandatory: () => l.mandatory
    }), (e, m) => (y(), h("div", {
      class: H(x.value),
      "data-labeled": !n(u).label
    }, [
      b(e.$slots, "prefix"),
      R(j("input", {
        "onUpdate:modelValue": m[0] || (m[0] = (f) => a.value = f),
        type: "checkbox",
        ref: (f) => i.value = f,
        name: t.name,
        id: n(o),
        disabled: t.disabled,
        readonly: t.readonly,
        placeholder: t.placeholder,
        onFocus: F,
        onBlur: N
      }, null, 40, I), [
        [z, a.value]
      ]),
      n(u).label ? b(e.$slots, "label", { key: 0 }) : g("", !0),
      n(u).label ? g("", !0) : (y(), h("label", {
        key: 1,
        for: n(o),
        innerHTML: t.label
      }, null, 8, U))
    ], 10, D));
  }
}), P = {
  install: (t) => {
    t.component("lkt-field-switch", G);
  }
};
export {
  P as default
};
