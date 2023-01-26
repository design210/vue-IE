<template>
	<div>
		<div>main</div>
		<div>dayjs : {{ $date().format('YYYY-MM-DD') }}</div>
		<div>vuex : {{ loading }}</div>
		<v-alert type="warning" @click="handleVuex">set state</v-alert>
		<v-alert type="warning" @click="openModal">open Modal</v-alert>
		<v-alert type="success" @click="searchBooks">api 호출</v-alert>
		<div v-if="res !== null">{{ res.data.documents }}</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import { kakaoBookSearchApi } from '@/api/index';
import { getPopupOpt } from '@/utils/modal';
import ModalCart from '@/components/modal/ModalCart';
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
	methods: {
		handleVuex() {
			this.$store.commit('common/setLoading', this.loading + 1);
		},
		async searchBooks() {
			const response = await kakaoBookSearchApi({ query: '똥' });
			this.res = response;
		},
		openModal() {
			this.$modal.show(
				ModalCart,
				{},
				getPopupOpt('ModalCart', '95%', 'auto', false),
			);
		},
	},
};
</script>
<style></style>
