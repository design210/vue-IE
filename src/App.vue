<template>
	<v-app>
		<v-main>
			<Gnb />
			<router-view />
		</v-main>
	</v-app>
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
