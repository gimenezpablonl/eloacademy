<template>
  <v-content>
    <v-container fluid>
      <AdminPanel />
    </v-container>
  </v-content>
</template>

<script>
import AdminPanel from '@/components/Admin/AdminPanel'
export default {
  components: {
    AdminPanel,
  },
  data() {
    return {}
  },
}
</script>
