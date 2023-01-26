<template>
  <div>
    <div class="gnb">
      <router-link to="/" class="main">main</router-link>
      <router-link to="/list" class="list">list</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
.gnb{
  .main{
    padding-right:10px;
  }
}
</style>
