import {App, Component} from 'vue';

import { default as switchField } from './lib-components/LktFieldSwitch.vue';

import "./../lkt-field-switch.css";
import {Settings} from "./settings/Settings";

const LktFieldSwitch = {
  install: (app: App) => {
    // Register plugin components
    if (app.component('lkt-field-switch') === undefined) app.component('lkt-field-switch', switchField);
  },
};

export default LktFieldSwitch;

export const setSwitchValueSlot = (resource: string, component: string|Component) => {
  Settings.customValueSlots[resource] = component;
  return true;
}

export const setSwitchEditSlot = (resource: string, component: string|Component) => {
  Settings.customEditSlots[resource] = component;
  return true;
}