<template>
  <v-list outlined flat subheader>
    <v-subheader>ROLES</v-subheader>
    <v-list-item-group>
      <v-list-item v-for="role in roles" :key="role">
        <v-list-item-icon>
          <v-avatar>
            <v-img contain :src="require(`@/assets/role/${role}.png`)"></v-img>
          </v-avatar>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="role"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  props: {
    roles: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>
