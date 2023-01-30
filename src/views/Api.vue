<script setup>
import { useMouse } from '@/composables/mouse';
const { x, y } = useMouse();

import { ref, onMounted, getCurrentInstance } from 'vue';
const global = getCurrentInstance().proxy;
console.log(global);
// reactive state
const count = ref(10);

// functions that mutate state and trigger updates
const increment = () => {
	count.value++;
};

// lifecycle hooks
onMounted(() => {
	console.log(`The initial count is ${count.value}.`);
});
</script>
<template>
	<div>
		<div>{{ count }} <button @click="increment()">+</button></div>
		<div>>Mouse position is at: {{ x }}, {{ y }}</div>
	</div>
</template>
<style lang="scss"></style>
