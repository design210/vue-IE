<template>
	<div>
		<div>main</div>
		<v-alert type="success" @click="searchBooks">api 호출</v-alert>
		<div v-if="res !== null">{{ res.data.documents }}</div>
	</div>
</template>

<script>
import { kakaoBookSearchApi } from '@/api/index';
export default {
	name: 'Main',
	data() {
		return {
			res: null,
		};
	},
	methods: {
		async searchBooks() {
			const response = await kakaoBookSearchApi({ query: '똥' });
			this.res = response;
			console.log(response);
		},
	},
};
</script>
<style></style>
