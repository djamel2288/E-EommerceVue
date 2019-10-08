<template>
  <div style="margin-top: 66px">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <b-carousel-slide>
        <template v-slot:img>
          <img
            style="max-height: 500px"
            class="d-block img-fluid w-100"
            src="../assets/1.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template v-slot:img>
          <img
            style="max-height: 500px"
            class="d-block img-fluid w-100"
            src="../assets/2.jpeg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template v-slot:img>
          <img
            style="max-height: 500px"
            class="d-block img-fluid w-100"
            src="../assets/3.png"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                slide: 0,
                sliding: null
            }
        },
        methods: {
            onSlideStart(slide) {
                this.sliding = true
            },
            onSlideEnd(slide) {
                this.sliding = false
            }
        }
    }
</script>

<style scoped>

</style>
