<template>
  <div id="app">
    <Vacations title="Vacations !!!"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Vacations from '@/components/Vacations.vue'

export default defineComponent({
  name: 'App',
  components: {
    Vacations
  },
});
</script>

<style>
  @import "design/main.css";
</style>
