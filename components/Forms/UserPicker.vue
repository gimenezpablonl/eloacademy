<template>
  <v-autocomplete
    v-model="userLocal"
    color="accent3"
    outlined
    item-color="opposite"
    :items="users"
    :label="label"
    prepend-inner-icon="mdi-account-reactivate"
    item-text="username"
    item-value="_id"
    max-height="auto"
    autocomplete
    return-object
    @change="onChange($event)"
  >
    <template v-slot:selection="data">
      {{ data.item.username }}
    </template>
    <template v-slot:item="data">
      <template>
        {{ data.item.username }}
      </template>
    </template>
  </v-autocomplete>
</template>

<script>
export default {
  props: {
    user: {
      type: String,
      default() {
        return ''
      },
    },
    label: {
      type: String,
      default() {
        return 'Usuario'
      },
    },
  },
  data() {
    return {
      users: [],
    }
  },
  computed: {
    userLocal: {
      get() {
        return this.user
      },
      set(value) {
        this.$emit('userChanged', value)
      },
    },
  },
  created() {
    this.getUsers()
  },
  methods: {
    onChange(event) {
      this.$emit('changed', event)
    },
    getUsers() {
      this.$axios.get('/users').then((res) => (this.users = res.data))
    },
  },
}
</script>
