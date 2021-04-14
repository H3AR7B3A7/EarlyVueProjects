<template>
  <div id="app">
    <Header />
    <Cars title="Car Magazine !!!" />
  </div>
</template>

<script>
import Cars from "./components/Cars.vue";
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: {
    Cars,
    Header
  }
};
</script>

<style>
  @import "design/main.css";
</style>
