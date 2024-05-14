import { LktObject } from "lkt-ts-interfaces";
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue: boolean;
    placeholder?: string | undefined;
    label?: string | undefined;
    palette?: string | undefined;
    name?: string | undefined;
    valid?: boolean | undefined;
    autocomplete?: boolean | undefined;
    disabled?: boolean | undefined;
    readonly?: boolean | undefined;
    readMode?: boolean | undefined;
    allowReadModeSwitch?: boolean | undefined;
    tabindex?: number | undefined;
    mandatory?: boolean | undefined;
    reset?: boolean | undefined;
    resetMessage?: string | undefined;
    mandatoryMessage?: string | undefined;
    infoMessage?: string | undefined;
    errorMessage?: string | undefined;
    switchEditionMessage?: string | undefined;
    valueSlot?: string | undefined;
    editSlot?: string | undefined;
    slotData?: LktObject | undefined;
}>, {
    modelValue: boolean;
    placeholder: string;
    label: string;
    palette: string;
    name: string;
    valid: boolean;
    autocomplete: boolean;
    disabled: boolean;
    readonly: boolean;
    readMode: boolean;
    allowReadModeSwitch: boolean;
    tabindex: undefined;
    mandatory: boolean;
    reset: boolean;
    resetMessage: string;
    mandatoryMessage: string;
    infoMessage: string;
    errorMessage: string;
    showPasswordMessage: string;
    switchEditionMessage: string;
    valueSlot: string;
    editSlot: string;
    slotData: () => {};
}>, {
    Identifier: string;
    reset: () => boolean;
    focus: () => void;
    value: () => boolean;
    isMandatory: () => boolean;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    blur: (...args: any[]) => void;
    click: (...args: any[]) => void;
    focus: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
    "click-info": (...args: any[]) => void;
    "click-error": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue: boolean;
    placeholder?: string | undefined;
    label?: string | undefined;
    palette?: string | undefined;
    name?: string | undefined;
    valid?: boolean | undefined;
    autocomplete?: boolean | undefined;
    disabled?: boolean | undefined;
    readonly?: boolean | undefined;
    readMode?: boolean | undefined;
    allowReadModeSwitch?: boolean | undefined;
    tabindex?: number | undefined;
    mandatory?: boolean | undefined;
    reset?: boolean | undefined;
    resetMessage?: string | undefined;
    mandatoryMessage?: string | undefined;
    infoMessage?: string | undefined;
    errorMessage?: string | undefined;
    switchEditionMessage?: string | undefined;
    valueSlot?: string | undefined;
    editSlot?: string | undefined;
    slotData?: LktObject | undefined;
}>, {
    modelValue: boolean;
    placeholder: string;
    label: string;
    palette: string;
    name: string;
    valid: boolean;
    autocomplete: boolean;
    disabled: boolean;
    readonly: boolean;
    readMode: boolean;
    allowReadModeSwitch: boolean;
    tabindex: undefined;
    mandatory: boolean;
    reset: boolean;
    resetMessage: string;
    mandatoryMessage: string;
    infoMessage: string;
    errorMessage: string;
    showPasswordMessage: string;
    switchEditionMessage: string;
    valueSlot: string;
    editSlot: string;
    slotData: () => {};
}>>> & {
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onClick?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onClick-info"?: ((...args: any[]) => any) | undefined;
    "onClick-error"?: ((...args: any[]) => any) | undefined;
}, {
    name: string;
    label: string;
    reset: boolean;
    autocomplete: boolean;
    disabled: boolean;
    readonly: boolean;
    mandatory: boolean;
    placeholder: string;
    tabindex: number;
    modelValue: boolean;
    palette: string;
    valid: boolean;
    readMode: boolean;
    allowReadModeSwitch: boolean;
    resetMessage: string;
    mandatoryMessage: string;
    infoMessage: string;
    errorMessage: string;
    switchEditionMessage: string;
    valueSlot: string;
    editSlot: string;
    slotData: LktObject;
}, {}>, {
    prefix?(_: {}): any;
    edit?(_: {
        value: boolean;
        title: string;
        data: LktObject;
    }): any;
    value?(_: {
        value: boolean;
        title: string;
        data: LktObject;
    }): any;
    label?(_: {}): any;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
