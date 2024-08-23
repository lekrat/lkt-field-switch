<script lang="ts">
export default {name: "LktFieldSwitch", inheritAttrs: false}
</script>

<script lang="ts" setup>
// Emits
import {generateRandomString} from "lkt-string-tools";
import {computed, nextTick, ref, useSlots, watch} from "vue";
import {createLktEvent} from "lkt-events";
import {Settings} from "../settings/Settings";
import {LktObject} from "lkt-ts-interfaces";
import {__} from "lkt-i18n";

const emits = defineEmits(['update:modelValue', 'focus', 'blur', 'click', 'click-info', 'click-error']);

// Slots
const slots = useSlots();

// Props
const props = withDefaults(defineProps<{
    modelValue: boolean
    placeholder?: string
    label?: string
    palette?: string
    name?: string
    valid?: boolean
    autocomplete?: boolean
    disabled?: boolean
    readonly?: boolean
    readMode?: boolean
    readModeAsField?: boolean
    readModeAsSwitch?: boolean
    readModeAsCheck?: boolean
    allowReadModeSwitch?: boolean
    tabindex?: number
    mandatory?: boolean
    reset?: boolean
    resetMessage?: string
    mandatoryMessage?: string
    infoMessage?: string
    errorMessage?: string
    switchEditionMessage?: string
    valueSlot?: string
    editSlot?: string
    slotData?: LktObject
    stampMode?: boolean
    stampPaletteOn?: string
    stampPaletteOff?: string
    textOn?: string
    textOff?: string
    isCheckbox?: boolean
}>(), {
    modelValue: false,
    placeholder: '',
    label: '',
    palette: '',
    name: generateRandomString(16),
    valid: false,
    autocomplete: true,
    disabled: false,
    readonly: false,
    readModeAsField: false,
    readModeAsSwitch: false,
    readModeAsCheck: false,
    readMode: false,
    allowReadModeSwitch: false,
    tabindex: undefined,
    mandatory: false,
    reset: false,
    resetMessage: '',
    mandatoryMessage: '',
    infoMessage: '',
    errorMessage: '',
    showPasswordMessage: '',
    switchEditionMessage: '',
    valueSlot: '',
    editSlot: '',
    slotData: () => ({}),
    stampMode: false,
    stampPaletteOn: 'success',
    stampPaletteOff: 'danger',
    textOn: '',
    textOff: '',
    isCheckbox: false,
});

// Constant data
const Identifier = generateRandomString(16);


// Components refs
const inputElement = ref(null);

// Reactive data
const originalValue = ref(props.modelValue),
    value = ref(props.modelValue),
    inputLikeValue = ref(value.value ? 'true' : 'false'),
    focusing = ref(false),
    editable = ref(!props.readMode),
    stampMode = ref(props.stampMode);


const hasCustomValueSlot = computed(() => {
        // if (value.value === '') {
        //     return (props.emptyValueSlot !== '' && typeof Settings.customValueSlots[props.emptyValueSlot] !== 'undefined') || (Settings.defaultEmptyValueSlot && typeof Settings.customValueSlots[Settings.defaultEmptyValueSlot] !== 'undefined');
        // }
        return props.valueSlot !== '' && typeof Settings.customValueSlots[props.valueSlot] !== 'undefined';
    }),
    customValueSlot = computed(() => {
        // if (value.value === '') {
        //     return Settings.customValueSlots[props.emptyValueSlot] ?? Settings.customValueSlots[Settings.defaultEmptyValueSlot];
        // }
        return Settings.customValueSlots[props.valueSlot];
    }),
    hasCustomEditSlot = computed(() => props.editSlot !== '' && typeof Settings.customEditSlots[props.editSlot] !== 'undefined'),
    customEditSlot = computed(() => Settings.customEditSlots[props.editSlot]),
    computedIsAsCheckbox = computed(() => {
        return (!editable.value && (props.isCheckbox || props.readModeAsCheck)) || (editable.value && props.isCheckbox);
    });


const isValid = computed(() => {
        // @ts-ignore
        if (typeof props.valid === 'function') return props.valid();
        return props.valid;
    }),
    changed = computed(() => value.value !== originalValue.value),
    classes = computed(() => {
        const r = ['lkt-field', 'lkt-field-switch'];

        if (props.palette) r.push(`lkt-field--${props.palette}`);
        if (changed.value) r.push('is-changed');
        if (props.disabled) r.push('is-disabled');
        if (computedIsAsCheckbox.value) r.push('is-checkbox')
        if (focusing.value) r.push('has-focus');

        r.push(isValid.value ? 'is-valid' : 'is-error');
        r.push(!!props.modelValue ? 'is-filled' : 'is-empty');

        if (editable.value && hasCustomEditSlot.value) r.push('with-edit-slot')
        if (!editable.value && hasCustomValueSlot.value) r.push('with-value-slot')
        if (!editable.value && props.stampMode) r.push('with-stamp')

        return r.join(' ');
    }),
    computedStampClass = computed(() => {
        if (value.value) return 'is-' + props.stampPaletteOn;
        return 'is-' + props.stampPaletteOff;
    }),
    readModeTitle = computed(() => {
        if (value.value) return props.textOn || 'True';
        return props.textOff || 'False';
    }),
    computedLabel = computed(() => {
        if (props.label.startsWith('__:')) {
            return __(props.label.substring(3));
        }
        return props.label;
    }),
    computedDisplayField = computed(() => {
        if (editable.value) return true;
        if (props.readModeAsField || props.readModeAsCheck || props.readModeAsSwitch) return true;

        return false;
    });

const focus = () => {
    nextTick(() => {
        if (inputElement.value) {
            //@ts-ignore
            inputElement.value.focus();
        }
    });
};


// Watch data
watch(() => props.readMode, (v) => editable.value = !v)
watch(() => props.modelValue, (v) => value.value = v)
watch(value, (v) => (inputLikeValue.value = value.value ? 'true' : 'false') && emits('update:modelValue', v))

const reset = () => value.value = originalValue.value,
    getValue = () => value.value,
    onFocus = ($event: any) => (focusing.value = true) && emits('focus', $event, createLktEvent(Identifier, {value: value.value})),
    onBlur = ($event: any) => (focusing.value = false) && emits('blur', $event, createLktEvent(Identifier, {value: value.value})),
    onClickSwitchEdition = ($event: any) => {
        editable.value = !editable.value;
        if (editable.value) focus();
    };

defineExpose({
    Identifier,
    reset,
    focus,
    value: getValue,
    isMandatory: () => props.mandatory
});
</script>


<template>
    <div v-bind:class="classes"
         v-bind:data-labeled="!!!slots.label">
        <slot name="prefix"></slot>
        <div v-if="computedDisplayField" class="lkt-field-switch__main">
            <template v-if="slots['edit']">
                <div v-on:click="onClick">
                    <slot name="edit" v-bind:value="value" :title="readModeTitle" :data="slotData"></slot>
                </div>
            </template>
            <div v-else-if="hasCustomEditSlot">
                <component v-bind:is="customEditSlot"
                           v-bind:value="value" :title="readModeTitle" :data="slotData"></component>
            </div>
            <template v-else>
                <input v-model="value"
                       type="checkbox"
                       :ref="(el:any) => inputElement = el"
                       v-bind:name="name"
                       v-bind:id="Identifier"
                       v-bind:disabled="!editable || disabled"
                       v-bind:readonly="!editable || readonly"
                       v-bind:placeholder="placeholder"
                       v-bind:value="inputLikeValue"
                       v-bind:checked="value"
                       v-on:focus="onFocus"
                       v-on:blur="onBlur">

                <slot v-if="!!slots.label" name="label"></slot>
                <label v-if="!!!slots.label" :for="Identifier" v-html="computedLabel"></label>
            </template>
        </div>

        <div v-if="!computedDisplayField" class="lkt-field-switch__read">
            <template v-if="slots['value']">
                <slot name="value" v-bind:value="value" :title="readModeTitle" :data="slotData"></slot>
            </template>
            <component v-else-if="hasCustomValueSlot" v-bind:is="customValueSlot"
                       v-bind:value="value" :title="readModeTitle"></component>

            <div v-else-if="stampMode"
                 class="lkt-field-switch-stamp"
                 :class="computedStampClass" v-html="readModeTitle" :title="readModeTitle"></div>

            <div v-else class="lkt-field-switch__read-value" v-html="readModeTitle" :title="readModeTitle"></div>
            <div v-if="allowReadModeSwitch" class="lkt-field__state">
                <i class="lkt-field__edit-icon" :title="props.switchEditionMessage"
                   v-on:click="onClickSwitchEdition"></i>
            </div>
        </div>
    </div>
</template>