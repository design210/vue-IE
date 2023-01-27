<template>
	<div>{{ count }} <button @click="increment()">+</button></div>
</template>
<script setup>
import { ref, onMounted } from 'vue';

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

<style></style>
