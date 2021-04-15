<template>
  <div>
    <h1>{{ title }}</h1>
    <div class="selected">
      <span v-if="selectedCar">
        <h2>{{`${selectedCar.brand} - ${selectedCar.type}`}}</h2>
        <img v-bind:src="selectedCar.pic" alt="car">
      </span>
    </div>
    <div class="collection" v-show="showCollection">
      <span v-for="car in cars" :key="car.id">
        <img :class="{'is-active': selectedCar === car}" v-bind:src="car.pic" alt="car" @click="selectedCar = car">
      </span>
    </div>
    <input type="checkbox" v-model="showCollection"> Hide
  </div>
</template>

<script>
export default {
  name: "Cars",
  props: {
    title: String,
  },
  data() {
    return {
      selectedCar: undefined,
      showCollection: true,
      cars: [
        {
          id: 1,
          brand: "BMW",
          type: "One",
          pic:
            "https://www.topgear.com/sites/default/files/styles/16x9_1280w/public/cars-car/image/2019/07/001_bmw_118d.jpg?itok=CFsiTxiU",
        },
        {
          id: 2,
          brand: "Mercedes",
          type: "A-45",
          pic:
            "https://topgear.nl/app/uploads/2019/07/mercedes-amg-a-45-s-2019-1-e1562244094870.jpg",
        },
        {
          id: 3,
          brand: "Mazda",
          type: "CX-30",
          pic:
            "https://topgear.nl/app/uploads/2019/08/mazda-cx-30-2.0-skyactiv-g-122-rijder-3kwart-voor-2019-e1570003285508.jpg",
        },
        {
          id: 4,
          brand: "Toyota",
          type: "Yaris",
          pic:
            "https://images.autowereld.com/1600x1000/yaris-dpl-2020-dynamics-001-633180.jpg",
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin-top: 60px;
}
.selected {
  height: 470px;
}
.selected img {
  height: 400px;
  object-fit: fill;
}
.collection {
  width: 100%;
}
.collection img {
  width: 100px;
  height: 50px;
}
.is-active {
  border: 5px solid rgb(51, 58, 119);
  width: 110px !important;
  height: 60px !important;
  transform: translateY(5px);
}
</style>
