import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/main',
		},
		{
			path: '/main',
			component: () => import('@/views/Main.vue'),
		},
		{
			path: '/list',
			component: () => import('@/views/List.vue'),
		},
		{
			path: '/api',
			component: () => import('@/views/Api.vue'),
		},
	],
});

export default router;
