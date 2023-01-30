<script setup>
import Gnb from '@/components/common/Gnb';
</script>
<template>
	<v-app>
		<v-main>
			<div>
				<Gnb />
				<router-view />
			</div>
		</v-main>
	</v-app>
</template>
<style lang="scss"></style>
