import '@babel/polyfill';
import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store';
import VModal from 'vue-js-modal';
import VueCompositionAPI from '@vue/composition-api';
import '@/plugins/day.js';
Vue.config.productionTip = false;
Vue.use(VModal);
Vue.use(VueCompositionAPI);

new Vue({
	vuetify,
	router,
	store,
	VModal,
	render: h => h(App),
}).$mount('#app');
