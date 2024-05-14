import { defineComponent as J, useSlots as K, ref as v, computed as s, watch as w, openBlock as a, createElementBlock as i, normalizeClass as O, unref as n, renderSlot as y, createBlock as E, resolveDynamicComponent as B, createCommentVNode as c, withDirectives as P, createElementVNode as _, vModelCheckbox as Q, nextTick as W } from "vue";
import { generateRandomString as L } from "lkt-string-tools";
import { createLktEvent as T } from "lkt-events";
let X = {}, Y = {};
const f = {
  customValueSlots: X,
  customEditSlots: Y
}, Z = ["data-labeled"], x = {
  key: 0,
  class: "lkt-field-switch__main"
}, ee = ["name", "id", "disabled", "readonly", "placeholder", "value", "checked"], le = {
  key: 1,
  class: "lkt-field-switch__read"
}, te = ["innerHTML", "title"], ae = {
  key: 3,
  class: "lkt-field__state"
}, oe = ["title"], ue = ["for", "innerHTML"], se = { name: "LktFieldSwitch", inheritAttrs: !1 }, ie = /* @__PURE__ */ J({
  ...se,
  props: {
    modelValue: { type: Boolean, default: !1 },
    placeholder: { default: "" },
    label: { default: "" },
    palette: { default: "" },
    name: { default: L(16) },
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
    slotData: { default: () => ({}) }
  },
  emits: ["update:modelValue", "focus", "blur", "click", "click-info", "click-error"],
  setup(o, { expose: m, emit: D }) {
    const S = D, p = K(), l = o, k = L(16), b = v(null), M = v(l.modelValue), t = v(l.modelValue), C = v(t.value ? "true" : "false"), V = v(!1), u = v(!l.readMode), $ = s(() => typeof l.valid == "function" ? l.valid() : l.valid), F = s(() => t.value !== M.value), H = s(() => {
      const e = ["lkt-field", "lkt-field-switch"];
      return l.palette && e.push(`lkt-field--${l.palette}`), F.value && e.push("is-changed"), l.disabled && e.push("is-disabled"), V.value && e.push("has-focus"), e.push($.value ? "is-valid" : "is-error"), e.push(l.modelValue ? "is-filled" : "is-empty"), e.join(" ");
    }), h = s(() => t.value ? "True" : "False"), g = () => {
      W(() => {
        b.value && b.value.focus();
      });
    };
    w(() => l.readMode, (e) => u.value = !e), w(() => l.modelValue, (e) => t.value = e), w(t, (e) => (C.value = t.value ? "true" : "false") && S("update:modelValue", e));
    const R = () => t.value = M.value, N = () => t.value, j = (e) => (V.value = !0) && S("focus", e, T(k, { value: t.value })), z = (e) => (V.value = !1) && S("blur", e, T(k, { value: t.value })), A = (e) => {
      u.value = !u.value, u.value && g();
    };
    m({
      Identifier: k,
      reset: R,
      focus: g,
      value: N,
      isMandatory: () => l.mandatory
    });
    const I = s(() => l.valueSlot !== "" && typeof f.customValueSlots[l.valueSlot] < "u"), U = s(() => f.customValueSlots[l.valueSlot]), q = s(() => l.editSlot !== "" && typeof f.customEditSlots[l.editSlot] < "u"), G = s(() => f.customEditSlots[l.editSlot]);
    return (e, r) => (a(), i("div", {
      class: O(H.value),
      "data-labeled": !n(p).label
    }, [
      y(e.$slots, "prefix"),
      u.value ? (a(), i("div", x, [
        n(p).edit ? (a(), i("div", {
          key: 0,
          onClick: r[0] || (r[0] = //@ts-ignore
          (...d) => e.onClick && e.onClick(...d))
        }, [
          y(e.$slots, "edit", {
            value: t.value,
            title: h.value,
            data: e.slotData
          })
        ])) : q.value ? (a(), i("div", {
          key: 1,
          onClick: r[1] || (r[1] = //@ts-ignore
          (...d) => e.onClick && e.onClick(...d))
        }, [
          (a(), E(B(G.value), {
            value: t.value,
            title: h.value,
            data: e.slotData
          }, null, 8, ["value", "title", "data"]))
        ])) : c("", !0),
        P(_("input", {
          "onUpdate:modelValue": r[2] || (r[2] = (d) => t.value = d),
          type: "checkbox",
          ref: (d) => b.value = d,
          name: e.name,
          id: n(k),
          disabled: !u.value || e.disabled,
          readonly: !u.value || e.readonly,
          placeholder: e.placeholder,
          value: C.value,
          checked: t.value,
          onFocus: j,
          onBlur: z
        }, null, 40, ee), [
          [Q, t.value]
        ])
      ])) : c("", !0),
      u.value ? c("", !0) : (a(), i("div", le, [
        n(p).value ? y(e.$slots, "value", {
          key: 0,
          value: t.value,
          title: h.value,
          data: e.slotData
        }) : I.value ? (a(), E(B(U.value), {
          key: 1,
          value: t.value,
          title: h.value
        }, null, 8, ["value", "title"])) : (a(), i("div", {
          key: 2,
          class: "lkt-field-switch__read-value",
          innerHTML: t.value,
          title: h.value
        }, null, 8, te)),
        e.allowReadModeSwitch ? (a(), i("div", ae, [
          _("i", {
            class: "lkt-field__edit-icon",
            title: l.switchEditionMessage,
            onClick: A
          }, null, 8, oe)
        ])) : c("", !0)
      ])),
      n(p).label ? y(e.$slots, "label", { key: 2 }) : c("", !0),
      n(p).label ? c("", !0) : (a(), i("label", {
        key: 3,
        for: n(k),
        innerHTML: e.label
      }, null, 8, ue))
    ], 10, Z));
  }
}), ve = {
  install: (o) => {
    o.component("lkt-field-switch") === void 0 && o.component("lkt-field-switch", ie);
  }
}, ce = (o, m) => (f.customValueSlots[o] = m, !0), fe = (o, m) => (f.customEditSlots[o] = m, !0);
export {
  ve as default,
  fe as setSwitchEditSlot,
  ce as setSwitchValueSlot
};
