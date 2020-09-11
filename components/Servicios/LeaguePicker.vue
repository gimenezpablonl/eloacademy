<template>
  <v-row align="center" no-gutters>
    <v-col cols="5" md="5" sm="10">
      <v-select
        v-model="def.league"
        color="accent3"
        item-color="opposite"
        :items="leagues"
        :rules="[(v) => !!v || 'Necesario']"
        required
        label="Liga"
        @change="onChange()"
      >
        <template v-slot:selection="data">
          <v-avatar>
            <v-img
              max-height="40"
              max-width="40"
              :src="require(`@/assets/leagues/${data.item}.png`)"
            />
          </v-avatar>
          {{ data.item }}
        </template>
        <template v-slot:item="data">
          <template>
            <v-avatar>
              <v-img
                max-height="40"
                max-width="40"
                :src="require(`@/assets/leagues/${data.item}.png`)"
              />
            </v-avatar>
            {{ data.item }}
          </template>
        </template>
      </v-select>
    </v-col>
    <v-spacer></v-spacer>
    <v-col cols="5" md="5" sm="10">
      <v-select
        v-if="
          def.league &&
          def.league !== 'Challenger' &&
          def.league !== 'Grandmaster' &&
          def.league !== 'Master' &&
          def.league !== 'Unranked'
        "
        v-model="def.division"
        :items="divisions"
        :rules="[(v) => !!v || 'Necesario']"
        required
        color="accent3"
        item-color="opposite"
        label="División"
        @change="onChangeDivision($event)"
      >
        <template v-slot:selection="data">
          <v-avatar>
            <v-img
              max-height="40"
              max-width="40"
              :src="require(`@/assets/leagues/${def.league}.png`)"
            />
          </v-avatar>
          {{ def.league }} {{ data.item }}
        </template>
        <template v-slot:item="data">
          <template>
            <v-img
              :src="require(`@/assets/leagues/${def.league}.png`)"
              max-height="50"
              max-width="50"
              class="mr-3"
            />
            {{ def.league }} {{ data.item }}
          </template>
        </template>
      </v-select>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    def: {
      type: Object,
      default() {
        return {
          league: '',
          division: '',
        }
      },
    },
  },
  data() {
    return {
      leagues: [
        'Unranked',
        'Bronze',
        'Silver',
        'Gold',
        'Platinum',
        'Diamond',
        'Master',
        'Grandmaster',
        'Challenger',
      ],
      divisions: ['IV', 'III', 'II', 'I'],
    }
  },
  methods: {
    onChange() {
      this.$emit('changed', this.def.league)
    },
    onChangeDivision() {
      this.$emit('pickedDivision', this.def.division)
    },
  },
}
</script>
