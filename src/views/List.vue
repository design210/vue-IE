<template>
	<div>
		<!-- list : <span>{{ state.container }}</span> -->
	</div>
</template>

<script>
import { defineComponent, reactive } from '@vue/composition-api';
export default defineComponent({
	setup() {
		const state = reactive({
			container: 10,
		});
		return {
			state,
		};
	},
});
</script>
<style></style>
