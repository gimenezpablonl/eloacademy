<template>
  <v-autocomplete
    v-model="usrLocal"
    color="accent3"
    item-color="opposite"
    :items="users"
    label="Usuario"
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
    usr: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      users: [],
    }
  },
  computed: {
    usrLocal: {
      get() {
        return this.usr
      },
      set(value) {
        this.$emit('usrchange', true)
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
