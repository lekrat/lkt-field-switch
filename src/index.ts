import { App } from 'vue';

import { default as switchField } from './lib-components/LktFieldSwitch.vue';

import "./../lkt-field-switch.css";

const LktFieldSwitch = {
  install: (app: App) => {
    // Register plugin components
    if (app.component('lkt-field-switch') === undefined) app.component('lkt-field-switch', switchField);
  },
};

export default LktFieldSwitch;
