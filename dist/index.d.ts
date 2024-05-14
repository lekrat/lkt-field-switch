import { App, Component } from 'vue';
import "./../lkt-field-switch.css";
declare const LktFieldSwitch: {
    install: (app: App) => void;
};
export default LktFieldSwitch;
export declare const setSwitchValueSlot: (resource: string, component: string | Component) => boolean;
export declare const setSwitchEditSlot: (resource: string, component: string | Component) => boolean;
