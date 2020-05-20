<template>
  <div>
    <ParallaxSeparator src="Ryze.jpg" text="SUS TESTIMONIOS" />
    <Carousel />
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
}
</script>
