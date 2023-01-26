<template>
	<div>
		<div>main</div>
		<div>dayjs : {{ $date().format('YYYY-MM-DD') }}</div>
		<div>{{ loading }}</div>
		<v-alert type="warning" @click="handleVuex">vuex</v-alert>
		<v-alert type="success" @click="searchBooks">api 호출</v-alert>
		<div v-if="res !== null">{{ res.data.documents }}</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import { kakaoBookSearchApi } from '@/api/index';
export default {
	name: 'Main',
	data() {
		return {
			res: null,
		};
	},
	computed: {
		...mapState('common', ['loading']),
	},
	mounted() {
		console.log(this.$store.state.common.loading);
	},
	methods: {
		handleVuex() {
			this.$store.commit('common/setLoading', this.loading + 1);
		},
		async searchBooks() {
			const response = await kakaoBookSearchApi({ query: '똥' });
			this.res = response;
			console.log(response);
		},
	},
};
</script>
<style></style>
