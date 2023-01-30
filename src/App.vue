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

<script setup>
import Gnb from '@/components/common/Gnb';
</script>

<style lang="scss"></style>
