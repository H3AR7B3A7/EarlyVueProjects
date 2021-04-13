<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Heroes/>
  </div>
</template>

<script>
import Heroes from './components/Heroes.vue'

export default {
  name: 'App',
  components: {
    Heroes
  }
}
</script>

<style>
  @import 'design/main.css';
</style>
