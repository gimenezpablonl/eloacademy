<template>
  <v-select
    v-model="e11"
    color="accent3"
    item-color="opposite"
    :rules="[(v) => !!v || 'Necesario']"
    required
    :items="queues"
    label="Cola"
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
          max-height="30"
          max-width="30"
          :src="require(`@/assets/queue/${data.item.avatar}`)"
        />
      </v-avatar>
      {{ data.item.name }}
    </template>
    <template v-slot:item="data">
      <template>
        <v-img
          :src="require(`@/assets/queue/${data.item.avatar}`)"
          class="mr-5"
          max-height="30"
          max-width="30"
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
      1: 'solo.svg',
      2: 'flex.svg',
    }

    return {
      e11: '',
      queues: [
        { code: 'solo', name: 'Solo/Dúo', avatar: srcs[1] },
        { code: 'flex', name: 'Flexible', avatar: srcs[2] },
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
