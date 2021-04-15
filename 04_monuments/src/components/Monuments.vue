<template>
  <div>
    <h1>{{ title }}</h1>
    <div class="selected"></div>
    <div class="collection">
      <span v-for="monument in monuments" :key="monument.id">
        <img
          v-bind:src="monument.pic"
          alt="monument"
          @click="addToFavorites(monument)"
        />
      </span>
    </div>
    <h1>Favorites:</h1>
    <div class="collection">
      <span v-for="favorite in favorites" :key="favorite.id">
        <img
          v-bind:src="favorite.pic"
          alt="monument"
          @click="favorites.pop(monument)"
        />
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Monument } from "../models/Monument";

@Component
export default class Monuments extends Vue {
  @Prop() private title!: string;

  data() {
    return {
      currentMonument: undefined as Monument,

      monuments: [
        {
          id: 1,
          name: "Manneke Pis",
          country: "Belgium",
          visited: true,
          pic:
            "https://gcm.rmnet.be/imgcontrol/c750-d511/clients/rmnet/content/medias/coronavirus/mannekenpis_750_belgaimage-167672237-full.jpg",
        },
        {
          id: 2,
          name: "Taj Mahal",
          country: "India",
          visited: false,
          pic:
            "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201402/taj-mahal_story_650_022014060837.jpg",
        },
        {
          id: 3,
          name: "Statue of Liberty",
          country: "USA",
          visited: false,
          pic:
            "https://viral.laughingcolours.com/inspirational/India-Is-Not-A-Poor-Country-Anymore-Look-Where-It-Stands-In/180.jpeg",
        },
        {
          id: 4,
          name: "Stonehenge",
          country: "UK",
          visited: false,
          pic:
            "https://u4d2z7k9.rocketcdn.me/wp-content/uploads/2020/07/Webp.net-resizeimage-2020-07-22T094322.857.jpg",
        },
      ] as Monument[],

      favorites: new Array<Monument>(),
    };
  }

  methods: {};

  addToFavorites(monument: Monument): void {
    if (!this.$data.favorites.includes(monument)) {
      this.$data.favorites.push(monument);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 80%;
  height: 360px;
  object-fit: cover;
}
</style>
