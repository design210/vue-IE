import Vue from 'vue';
import Vuex from 'vuex';

// common
import common from '@/store/modules/common/common.js';
import createPersistedState from 'vuex-persistedstate';
Vue.use(Vuex);
export default new Vuex.Store({
	modules: {
		common,
	},
	plugins: [
		createPersistedState({
			storage: window.sessionStorage,
		}),
	],
});
