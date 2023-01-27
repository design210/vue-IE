const example = [
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
];

export default example;
