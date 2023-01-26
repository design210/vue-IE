<template>
	<div class="gnb">
		<router-link to="/" class="main">main</router-link>
		<router-link to="/list">sub</router-link>
	</div>
</template>

<script>
export default {
	name: 'Gnb',

	data: () => ({
		//
	}),
};
</script>

<style lang="scss">
.gnb {
	.main {
		color: skyblue;
		margin-right: 10px;
	}
}
</style>
