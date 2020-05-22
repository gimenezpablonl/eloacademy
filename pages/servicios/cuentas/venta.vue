<template>
  <v-content>
    <v-container fluid> </v-container>
  </v-content>
</template>

<script>
export default {
  data() {
    return {
      account: {
        previous_rank: {},
        solo_rank: {},
        flex_rank: {},
        blue_essence: '',
        orange_essence: '',
        rp: '',
        champions: [],
        icons: [],
      },
    }
  },
}
</script>
