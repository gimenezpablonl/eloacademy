<template>
  <v-row align="center" no-gutters>
    <v-col class="d-flex" cols="auto" md="5" sm="10">
      <v-select
        v-model="e11"
        color="accent3"
        item-color="opposite"
        :items="leagues"
        :rules="[(v) => !!v || 'Necesario']"
        required
        label="Liga"
        item-text="name"
        item-value="name"
        max-height="auto"
        autocomplete
        return-object
        solo
        @change="onChange($event)"
      >
        <template v-slot:selection="data">
          <v-avatar>
            <v-img
              max-height="40"
              max-width="40"
              :src="require(`@/assets/leagues/${data.item.image}`)"
            />
          </v-avatar>
          {{ data.item.name }}
        </template>
        <template v-slot:item="data">
          <template>
            <v-img
              :src="require(`@/assets/leagues/${data.item.image}`)"
              max-height="50"
              max-width="50"
              class="mr-3"
            />
            {{ data.item.name }}
          </template>
        </template>
      </v-select>
    </v-col>
    <v-spacer></v-spacer>
    <v-col class="d-flex" cols="auto" md="5" sm="10">
      <v-select
        v-if="
          divImg !== 'challenger.png' &&
          divImg !== 'grandmaster.png' &&
          divImg !== 'master.png' &&
          divImg !== 'unranked.png'
        "
        :items="divisions"
        :rules="[(v) => !!v || 'Necesario']"
        required
        color="accent3"
        item-color="opposite"
        label="División"
        solo
        @change="onChangeDivision($event)"
      >
        <template v-slot:selection="data">
          <v-avatar>
            <v-img
              max-height="40"
              max-width="40"
              :src="require(`@/assets/leagues/${divImg}`)"
            />
          </v-avatar>
          {{ data.item }}
        </template>
        <template v-slot:item="data">
          <template>
            <v-img
              :src="require(`@/assets/leagues/${divImg}`)"
              max-height="50"
              max-width="50"
              class="mr-3"
            />
            {{ data.item }}
          </template>
        </template>
      </v-select>
    </v-col>
  </v-row>
</template>

<script>
import leagues from '@/utils/leagues'
export default {
  data() {
    return {
      e11: '',
      divImg: 'iron.png',
      leagues: Object.values(leagues),
      divisions: ['IV', 'III', 'II', 'I'],
    }
  },
  methods: {
    onChange(event) {
      this.divImg = event.image
      this.$emit('changed', event.key)
    },
    onChangeDivision(event) {
      this.$emit('pickedDivision', event)
    },
  },
}
</script>
