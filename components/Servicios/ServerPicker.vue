<template>
  <v-select
    v-model="e11"
    color="accent3"
    item-color="opposite"
    :items="servers"
    :rules="[(v) => !!v || 'Necesario']"
    required
    label="Servidor"
    item-text="name"
    item-value="name"
    max-height="auto"
    autocomplete
    return-object
    @change="onChange($event)"
  >
    <template v-slot:selection="data">
      <v-avatar>
        <v-img
          max-height="40"
          max-width="40"
          :src="require(`@/assets/servers/${data.item.avatar}`)"
        />
      </v-avatar>
      {{ data.item.name }}
    </template>
    <template v-slot:item="data">
      <template>
        <v-img
          :src="require(`@/assets/servers/${data.item.avatar}`)"
          max-height="50"
          max-width="50"
          class="mr-5"
        />
        {{ data.item.name }}
      </template>
    </template>
  </v-select>
</template>

<script>
export default {
  data() {
    const srcs = {
      1: 'na.png',
      2: 'lan.png',
      3: 'las.png',
      4: 'br.png',
    }

    return {
      e11: '',
      servers: [
        { code: 'na', name: 'Norteamérica', avatar: srcs[1] },
        { code: 'lan', name: 'Latinoamérica Norte', avatar: srcs[2] },
        { code: 'las', name: 'Latinoamérica Sur', avatar: srcs[3] },
        { code: 'br', name: 'Brasil', avatar: srcs[4] },
      ],
    }
  },
  methods: {
    onChange(event) {
      this.$emit('changed', event.code)
    },
  },
}
</script>
