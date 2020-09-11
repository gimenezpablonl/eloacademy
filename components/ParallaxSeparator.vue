<template>
  <v-row class="my-10" align="center" justify="center">
    <v-col class="text-center" cols="12">
      <h1 class="opposite--text display-2 font-weight-bold">
        {{ text }}
      </h1>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'text',
    },
  },
  data() {
    return {
      parallaxLazy: false,
    }
  },
}
</script>
