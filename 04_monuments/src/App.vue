<template>
  <div id="app">
    <Monuments title="Monuments !!!"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Monuments from './components/Monuments.vue';

@Component({
  components: {
    Monuments,
  },
})

export default class App extends Vue {}
</script>

<style>
  @import "design/main.css";
</style>
