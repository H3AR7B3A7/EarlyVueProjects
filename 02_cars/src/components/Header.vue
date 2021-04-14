<template>
  <ul>
    <li v-for="(item, index) in menu" :key="item.name">
      <span v-if="index > 0">|</span>
      <a v-bind:href="item.link"> {{ item.name }} </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      menu: [
        { name: "Home", link: "/" },
        { name: "Showroom", link: "/showroom" },
        { name: "About", link: "/about" },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  align-content: center;
}
li {
  display: inline-block;
  vertical-align: top;
  list-style-type: none;
}
span {
    margin-left: 12px;
    margin-right: 5px;
}
</style>
