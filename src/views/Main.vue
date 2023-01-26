<template>
    <div>
        <div>main</div>
        <div @click="searchBooks">api 호출</div>
        <div>{{ res }}</div>
    </div>
    
</template>

<script>
import { kakaoBookSearchApi } from "../api/index";
export default {
  name: 'Main',
  data() {
    return {
      res:null
    };
  },
  methods: {
    async searchBooks() {
        const response = await kakaoBookSearchApi({ query: '똥' });
        this.res = response;
    }
  }
};
</script>
<style>
</style>