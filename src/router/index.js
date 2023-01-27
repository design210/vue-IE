import Vue from 'vue';
import VueRouter from 'vue-router';
import common from './modules/common';
import example from './modules/example';
Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes: [...common, ...example],
});

export default router;
