<script setup>
import modalWrap from '@/components/modal/ModalTemplate';
import { getCurrentInstance } from 'vue';
const global = getCurrentInstance().proxy;

const close = () => {
	global.$emit('close');
};
</script>
<template>
	<modalWrap @close="close">
		<template slot="head"><h2>주문서</h2></template>
		<template slot="body">
			<div>
				주문서가 출판사에 전송되었습니다.<br />
				"주문 내역"에서 회신 확인 후 결제 해 주세요
			</div>
			<div class="mt20 btn-wrap">
				<button class="basic" @click="close">확인</button>
			</div>
		</template>
	</modalWrap>
</template>
<style lang="scss" scoped>
.info {
	display: flex;
	justify-content: space-between;
	padding: 0 20px;
}
.price {
	margin-top: 10px;
}
.pay {
	text-align: center;
}
.btn-wrap {
	display: flex;
	justify-content: flex-end;
}
</style>
