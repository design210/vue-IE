<script setup>
import { kakaoBookSearchApi } from '@/api/index';
import { getPopupOpt } from '@/utils/modal';
import ModalCart from '@/components/modal/ModalCart';
import { ref, onMounted, getCurrentInstance, computed } from 'vue';
const global = getCurrentInstance().proxy;

const res = ref(null);
const handleVuex = () => {
	global.$store.commit('common/setLoading', loading.value + 1);
};
const openModal = () => {
	global.$modal.show(
		ModalCart,
		{},
		getPopupOpt('ModalCart', '95%', 'auto', false),
	);
};
const searchBooks = async () => {
	const response = await kakaoBookSearchApi({ query: '똥' });
	res.value = response;
};
const loading = computed(() => global.$store.getters['common/loading']);
</script>
<template>
	<div>
		<div>main</div>
		<div>dayjs : {{ $date().format('YYYY-MM-DD') }}</div>
		<div>vuex : {{ loading }}</div>
		<v-alert type="warning" @click="handleVuex">set state</v-alert>
		<v-alert type="warning" @click="openModal">open Modal</v-alert>
		<v-alert type="success" @click="searchBooks">api 호출</v-alert>
		<div v-if="res !== null" style="word-wrap: break-word">
			<span style="word-break: keep-all !important">{{
				res.data.documents
			}}</span>
		</div>
	</div>
</template>
<style lang="scss"></style>
