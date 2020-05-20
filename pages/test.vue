<template>
  <v-content>
    <v-conteiner>
      <v-card v-for="(champion, idx) in champions" :key="idx">
        <v-card-title>
          <v-img
            max-height="250"
            max-width="250"
            :src="require(`@/assets/champions/${champion.image}`)"
          />
        </v-card-title>
        {{ champion.name }}
        {{ champion.key }}
      </v-card>
    </v-conteiner>
  </v-content>
</template>
<script>
import champions from '@/utils/champions'
export default {
  data() {
    return {
      champions,
    }
  },
  mounted() {},
}
</script>
