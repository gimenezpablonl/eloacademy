<template>
  <v-select
    v-model="rolesLocal"
    color="accent3"
    outlined
    item-color="opposite"
    :items="rolesList"
    label="Roles"
    multiple
    max-height="auto"
    prepend-inner-icon="mdi-fencing"
  >
    <template v-slot:selection="data">
      <v-avatar>
        <v-img
          max-height="30"
          max-width="30"
          :src="require(`@/assets/role/${data.item}.png`)"
        />
      </v-avatar>
      {{ data.item }}
    </template>
    <template v-slot:item="data">
      <template>
        <v-img
          :src="require(`@/assets/role/${data.item}.png`)"
          class="mr-5"
          max-height="30"
          max-width="30"
        />
        {{ data.item }}
      </template>
    </template>
  </v-select>
</template>

<script>
export default {
  model: {
    prop: 'roles',
    event: 'rolesChanged',
  },
  props: {
    required: {
      type: Boolean,
      default() {
        return false
      },
    },
    roles: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      rolesList: ['Top', 'Jungla', 'Medio', 'Tirador', 'Soporte'],
    }
  },
  computed: {
    rolesLocal: {
      get() {
        return this.roles
      },
      set(value) {
        this.$emit('rolesChanged', value)
      },
    },
  },
}
</script>
