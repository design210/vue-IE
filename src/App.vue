<template>
	<div>
		<Gnb />
		<router-view />
	</div>
</template>

<script>
import Gnb from '@/components/common/Gnb';
export default {
	name: 'App',

	data: () => ({
		//
	}),
	components: { Gnb },
};
</script>

<style lang="scss"></style>
