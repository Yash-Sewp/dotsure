import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueLodash from 'vue-lodash';
import lodash from 'lodash';
import JwPagination from 'jw-vue-pagination';

import './assets/styles/index.css';

Vue.use(VueLodash, { lodash: lodash })
Vue.component('jw-pagination', JwPagination);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
