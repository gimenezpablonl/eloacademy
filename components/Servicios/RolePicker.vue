<template>
  <v-row align="center" no-gutters>
    <v-col class="d-flex" cols="auto">
      <v-select
        v-model="e11"
        color="accent3"
        item-color="opposite"
        :items="roles"
        label="Rol"
        multiple
        item-text="name"
        item-value="name"
        max-height="auto"
        autocomplete
        solo
        return-object
        @change="onChange($event)"
      >
        <template v-slot:selection="data">
          <v-avatar>
            <v-img
              max-height="30"
              max-width="30"
              :src="require(`@/assets/role/${data.item.avatar}`)"
            />
          </v-avatar>
          {{ data.item.name }}
        </template>
        <template v-slot:item="data">
          <template>
            <v-img
              :src="require(`@/assets/role/${data.item.avatar}`)"
              class="mr-5"
              max-height="30"
              max-width="30"
            />
            {{ data.item.name }}
          </template>
        </template>
      </v-select>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    const srcs = {
      1: 'top.png',
      2: 'jungle.png',
      3: 'mid.png',
      4: 'bot.png',
      5: 'support.png',
    }

    return {
      e11: '',
      roles: [
        { code: 'top', name: 'Top', avatar: srcs[1] },
        { code: 'jungle', name: 'Jungla', avatar: srcs[2] },
        { code: 'mid', name: 'Medio', avatar: srcs[3] },
        { code: 'bot', name: 'Tirador', avatar: srcs[4] },
        { code: 'support', name: 'Soporte', avatar: srcs[5] },
      ],
      pickedRoles: [],
    }
  },
  methods: {
    onChange(events) {
      this.pickedRoles = []
      for (let i = 0; i < events.length; i++) {
        this.pickedRoles.push(events[i].name)
      }
      this.$emit('changed', this.pickedRoles)
    },
  },
}
</script>
