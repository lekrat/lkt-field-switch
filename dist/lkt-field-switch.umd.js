(function(e,o){typeof exports=="object"&&typeof module<"u"?module.exports=o(require("vue"),require("lkt-string-tools"),require("lkt-events")):typeof define=="function"&&define.amd?define(["vue","lkt-string-tools","lkt-events"],o):(e=typeof globalThis<"u"?globalThis:e||self,e.LktFieldSwitch=o(e.Vue,e.LktStringTools,e.LktEvents))})(this,function(e,o,p){"use strict";const k=["data-labeled"],g=["name","id","disabled","readonly","placeholder","value","checked"],b=["for","innerHTML"],S={name:"LktFieldSwitch",inheritAttrs:!1},v=e.defineComponent({...S,props:{modelValue:{type:Boolean,default:!1},placeholder:{type:String,default:""},label:{type:String,default:""},palette:{type:String,default:""},name:{type:String,default:o.generateRandomString(16)},valid:{type:Boolean,default:!1},autocomplete:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},readMode:{type:Boolean,default:!1},allowReadModeSwitch:{type:Boolean,default:!1},tabindex:{type:Number,default:void 0},mandatory:{type:Boolean,default:!1},reset:{type:Boolean,default:!1},resetMessage:{type:String,default:""},mandatoryMessage:{type:String,default:""},infoMessage:{type:String,default:""},errorMessage:{type:String,default:""},switchEditionMessage:{type:String,default:""}},emits:["update:modelValue","focus","blur","click","click-info","click-error"],setup(n,{expose:V,emit:B}){const i=B,s=e.useSlots(),l=n,d=o.generateRandomString(16),r=e.ref(null),m=e.ref(l.modelValue),a=e.ref(l.modelValue),h=e.ref(a.value?"true":"false"),u=e.ref(!1),f=e.ref(!l.readMode),w=e.computed(()=>typeof l.valid=="function"?l.valid():l.valid),M=e.computed(()=>a.value!==m.value),L=e.computed(()=>{const t=["lkt-field","lkt-field-switch"];return l.palette&&t.push(`lkt-field--${l.palette}`),M.value&&t.push("is-changed"),l.disabled&&t.push("is-disabled"),u.value&&t.push("has-focus"),t.push(w.value?"is-valid":"is-error"),t.push(l.modelValue?"is-filled":"is-empty"),t.join(" ")}),x=()=>{e.nextTick(()=>{r.value&&r.value.focus()})};e.watch(()=>l.readMode,t=>f.value=!t),e.watch(()=>l.modelValue,t=>a.value=t),e.watch(a,t=>(h.value=a.value?"true":"false")&&i("update:modelValue",t));const E=()=>a.value=m.value,C=()=>a.value,F=t=>(u.value=!0)&&i("focus",t,p.createLktEvent(d,{value:a.value})),T=t=>(u.value=!1)&&i("blur",t,p.createLktEvent(d,{value:a.value}));return V({Identifier:d,reset:E,focus:x,value:C,isMandatory:()=>l.mandatory}),(t,y)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(L.value),"data-labeled":!e.unref(s).label},[e.renderSlot(t.$slots,"prefix"),e.withDirectives(e.createElementVNode("input",{"onUpdate:modelValue":y[0]||(y[0]=c=>a.value=c),type:"checkbox",ref:c=>r.value=c,name:n.name,id:e.unref(d),disabled:!f.value||n.disabled,readonly:!f.value||n.readonly,placeholder:n.placeholder,value:h.value,checked:a.value,onFocus:F,onBlur:T},null,40,g),[[e.vModelCheckbox,a.value]]),e.unref(s).label?e.renderSlot(t.$slots,"label",{key:0}):e.createCommentVNode("",!0),e.unref(s).label?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("label",{key:1,for:e.unref(d),innerHTML:n.label},null,8,b))],10,k))}});return{install:n=>{n.component("lkt-field-switch",v)}}});
