<template>
  <v-menu>
    <v-list>
      <v-list-item>
        <v-list-item-title pa-4 ma-4 v-for="item in menu" :key="item.name">
            <a v-bind:href="item.link"> {{ item.name }} </a>
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      menu: [{ name: "Home", link: "/" }, { name: "Showroom", link: "/showroom" }, { name: "About", link: "/about" }],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
