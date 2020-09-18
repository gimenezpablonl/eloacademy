<template>
  <v-text-field
    v-model="usernameLocal"
    prepend-inner-icon="mdi-account"
    color="accent3"
    outlined
    :rules="rules"
  ></v-text-field>
</template>

<script>
export default {
  model: {
    prop: 'username',
    event: 'usernameChanged',
  },
  props: {
    label: {
      type: String,
      default() {
        return 'Nombre de usuario'
      },
    },
    username: {
      type: String,
      default() {
        return ''
      },
    },
  },
  computed: {
    usernameLocal: {
      get() {
        return this.username
      },
      set(value) {
        this.$emit('usernameChanged', value)
      },
    },
  },
}
</script>
