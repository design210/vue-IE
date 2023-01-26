const common = {
	namespaced: true,
	state: {
		loading: 0,
	},
	getters: {
		loading: state => {
			return state.loading;
		},
	},
	mutations: {
		setLoading(state, payload) {
			console.log(payload);
			state.loading = payload;
		},
	},
	actions: {},
};

export default common;
