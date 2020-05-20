<template>
  <v-parallax class="mt-3" height="150" :src="require(`@/assets/${src}`)">
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <h1 class="light--text display-2 font-weight-bold">
          {{ text }}
        </h1>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: 'text',
    },
  },
}
</script>
