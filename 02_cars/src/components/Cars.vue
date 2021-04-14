<template>
  <h1>{{ title }}</h1>
</template>

<script>
export default {
  name: 'Cars',
  props: {
    title: String
  },
  data() {
    return {
      cars: []
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin-top: 60px;
}
</style>
