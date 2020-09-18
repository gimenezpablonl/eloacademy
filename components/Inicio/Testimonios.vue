<template>
  <v-lazy
    v-model="testimonioLazy"
    :options="{
      threshold: 0.9,
    }"
    transition="slide-x-transition"
  >
    <v-row align="center">
      <v-col cols="12" class="text-center">
        <h1 class="opposite--text display-2 font-weight-light">
          Sus opiniones
        </h1>
      </v-col>
      <v-col cols="12">
        <Carousel />
      </v-col>
    </v-row>
  </v-lazy>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
export default {
  components: {
    Carousel,
  },
  data() {
    return {
      testimonioLazy: false,
    }
  },
}
</script>
