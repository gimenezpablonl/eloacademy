<template>
  <v-form ref="form" v-model="valid">
    <v-row>
      <v-col cols="6">
        <ServerPicker @serverChanged="pickServer" />
      </v-col>
      <v-col cols="6">
        <QueuePicker @queueChanged="pickQueue" />
      </v-col>
      <v-col cols="6">
        <LeaguePicker required @rankChanged="pickRank" />
      </v-col>
      <v-col v-if="player.rank.league != 'Unranked'" cols="6">
        <LpPicker
          :league="player.rank.league"
          label="Puntos de liga"
          required
          @lpChanged="pickLp"
        />
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-row align="center" justify="end">
      <v-col cols="auto" align-self="end">
        <v-btn :disabled="!valid" color="accent2" @click="passForm()">
          Siguiente
          <v-icon dark right>mdi-arrow-right</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import ServerPicker from '@/components/Forms/ServerPicker.vue'
import LeaguePicker from '@/components/Forms/LeaguePicker.vue'
import QueuePicker from '@/components/Forms/QueuePicker.vue'
import LpPicker from '@/components/Forms/LpPicker.vue'
export default {
  components: {
    ServerPicker,
    LeaguePicker,
    QueuePicker,
    LpPicker,
  },
  data: () => ({
    valid: true,
    lpGains: ['1-10', '10-14', '15-17', '18-24+'],
    maxLp: 100,
    player: {
      server: '',
      queue: false,
      rank: {
        league: '',
        division: '',
      },
      lp: 0,
    },
  }),
  methods: {
    pickRank(rank) {
      this.player.rank = rank
    },
    pickServer(server) {
      this.player.server = server
    },
    pickLp(lp) {
      this.player.lp = lp
    },
    pickQueue(queue) {
      if (queue == 'true') {
        this.player.queue = true
      } else {
        this.player.queue = false
      }
    },
    passForm() {
      this.$refs.form.validate()
      if (this.valid) {
        this.$emit('clicked', this.player)
      }
    },
    maximazeLp() {
      if (
        this.player.rank.league == 'Challenger' ||
        this.player.rank.league == 'Master' ||
        this.player.rank.league == 'Grandmaster'
      ) {
        this.maxLp = 2000
      } else {
        this.maxLp = 100
      }
    },
  },
  head() {
    return {
      title: 'Eloboost',
    }
  },
}
</script>
