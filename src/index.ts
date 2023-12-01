import { App } from 'vue';

import { default as switchField } from './lib-components/LktFieldSwitch.vue';

const LktFieldSwitch = {
  install: (app: App) => {
    app.component('lkt-field-switch', switchField);
  },
};

export default LktFieldSwitch;
