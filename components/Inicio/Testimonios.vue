<template>
  <div>
    <ParallaxSeparator src="Ryze.jpg" text="SUS TESTIMONIOS" />
    <v-lazy
      v-model="testimonioLazy"
      :options="{
        threshold: 0.9,
      }"
      transition="slide-x-transition"
    >
      <Carousel />
    </v-lazy>
  </div>
</template>

<script>
import ParallaxSeparator from '@/components/ParallaxSeparator.vue'
import Carousel from '@/components/Carousel.vue'
export default {
  components: {
    ParallaxSeparator,
    Carousel,
  },
  data() {
    return {
      testimonioLazy: false,
    }
  },
}
</script>
