<template>
  <div>
    <h1>{{ title }}</h1>
    <span v-for="destination in destinations" :key="destination.id" @click="selectedDestination = destination">
      <h2>{{ destination.hotel }}</h2>
      <h3>{{ `${destination.city} - ${destination.country}` }}</h3>
      <img v-bind:src=destination.pic alt="destination">
    </span>
    <h1>Selected:</h1>
    <h2>{{ fullPlaceName }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Destination } from '../models/Destination';

export default defineComponent({
  name: 'Vacations',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      selectedDestination: { } as Destination,
      destinations: [
        { id: 1, country: "Greece", city: "Santorini", hotel: "Santo Maris Oia", rating: 5, pic: "https://www.luxurylink.com/images/sho_5f60fe9c/2579147_601-630/image-2579147_601.jpg"},
        { id: 2, country: "Vietnam", city: "Con Dao", hotel: "Santo Maris Oia", rating: 5, pic: "https://www.luxurylink.com/images/sho_5d4d8eda/2579370_551-630/image-2579370_551.jpg"},
        { id: 3, country: "Italy", city: "Siena", hotel: "Hotel Le Fontanelle", rating: 5, pic: "https://www.luxurylink.com/images/sho_5ef0d116/7210_600-630/image-7210_600.jpg"},
        { id: 4, country: "USA", city: "Florida, Rosemary Beach", hotel: "The Pearl Hotel", rating: 5, pic: "https://www.luxurylink.com/images/sho_5ff4dc5c/12028_602-630/image-12028_602.jpg"},
        { id: 5, country: "France", city: "Marseille", hotel: "Hotel Dieu", rating: 5, pic: "https://www.luxurylink.com/images/sho_58126216/2578703_502-630/image-2578703_502.jpg"}
      ] as Destination[]
    }
  },
  computed: {
    fullPlaceName: {
      get() : string {
        let placeName = this.selectedDestination.city
        placeName += this.selectedDestination.country ? ` -  ${this.selectedDestination.country}`: '';
        return placeName
      },
      set(placeName: string) : void {
        let parts = placeName.split(' - ');
        this.selectedDestination.city = parts[0];
        this.selectedDestination.country = parts.length === 1 ? '' : parts[1];
      }
    }
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  height: 400px;
  width: 600px;
  object-fit: cover;
  margin: 1rem;
}
</style>
