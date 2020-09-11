<template>
  <v-content>
    <v-container>
      <v-form ref="form" v-model="valid">
        <v-card class="pb-5">
          <v-row no-gutters>
            <v-card-title>Anterior temporada solo/dúo</v-card-title>
            <v-card-text>
              <LeaguePicker
                @changed="pickPreviousLeague"
                @pickedDivision="pickPreviousDivision"
              />
            </v-card-text>
            <v-card-title>Solo/dúo</v-card-title>
            <v-card-text>
              <LeaguePicker
                @changed="pickSoloLeague"
                @pickedDivision="pickSoloDivision"
              />
            </v-card-text>
            <v-card-title>Flexible</v-card-title>
            <v-card-text>
              <LeaguePicker
                @changed="pickFlexLeague"
                @pickedDivision="pickFlexDivision"
              />
            </v-card-text>
            <v-card-title>TFT</v-card-title>
            <v-card-text>
              <LeaguePicker
                @changed="pickTftLeague"
                @pickedDivision="pickTftDivision"
              />
            </v-card-text>
            <v-col cols="5" md="5" sm="10">
              <v-card-text>
                <ServerPicker @defchange="pickServer" />
              </v-card-text>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="5" md="5" sm="10">
              <v-card-text>
                <v-text-field
                  v-model="account.icons"
                  :rules="[(v) => !!v || 'Necesario']"
                  color="opposite"
                  label="Iconos"
                  type="number"
                ></v-text-field>
              </v-card-text>
            </v-col>
            <v-col cols="5" md="5" sm="10">
              <v-card-text>
                <v-text-field
                  v-model="account.username"
                  label="Nombre de usuario"
                ></v-text-field>
              </v-card-text>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="5" md="5" sm="10">
              <v-card-text>
                <v-text-field
                  v-model="account.password"
                  type="password"
                  label="Contraseña"
                ></v-text-field>
              </v-card-text>
            </v-col>
            <v-col cols="5" md="5" sm="10">
              <v-card-text>
                <ChampionsPicker @changed="pickChampions" />
              </v-card-text>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="5" md="5" sm="10">
              <v-card-text>
                <SkinPicker
                  :champions="account.champions"
                  @changed="pickSkins"
                />
              </v-card-text>
            </v-col>
            <v-col cols="5" md="5" sm="10">
              <v-card-text>
                <v-text-field
                  v-model="account.rp"
                  required
                  :rules="[(v) => !!v || 'Necesario']"
                  color="opposite"
                  label="Riot Points"
                  type="number"
                ></v-text-field>
              </v-card-text>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="5" md="5" sm="10">
              <v-card-text>
                <v-text-field
                  v-model="account.level"
                  required
                  :rules="[(v) => !!v || 'Necesario']"
                  color="opposite"
                  label="Nivel"
                  type="number"
                ></v-text-field>
              </v-card-text>
            </v-col>
            <v-col cols="5" md="5" sm="10">
              <v-card-text>
                <v-text-field
                  v-model="account.blue_essence"
                  required
                  :rules="[(v) => !!v || 'Necesario']"
                  color="opposite"
                  label="Escencia azul"
                  type="number"
                ></v-text-field>
              </v-card-text>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="5" md="5" sm="10">
              <v-card-text>
                <v-text-field
                  v-model="account.orange_essence"
                  required
                  :rules="[(v) => !!v || 'Necesario']"
                  color="opposite"
                  label="Escencia naranja"
                  type="number"
                ></v-text-field>
              </v-card-text>
            </v-col>
            <v-col cols="12" class="text-center">
              <v-btn
                :loading="loading"
                :disabled="!valid"
                color="accent2"
                @click="sellAccount()"
              >
                <v-icon left>mdi-checkbox-marked-circle</v-icon>
                Vender cuenta
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-form>
    </v-container>
  </v-content>
</template>

<script>
import ChampionsPicker from '@/components/Servicios/ChampionsPicker.vue'
import ServerPicker from '@/components/Servicios/ServerPicker.vue'
import SkinPicker from '@/components/Servicios/SkinPicker.vue'
import LeaguePicker from '@/components/Servicios/LeaguePicker.vue'
export default {
  components: {
    ServerPicker,
    ChampionsPicker,
    SkinPicker,
    LeaguePicker,
  },
  data() {
    return {
      valid: true,
      loading: false,
      account: {
        previous_rank: {},
        solo_rank: {},
        flex_rank: {},
        tft_rank: {},
        blue_essence: '',
        orange_essence: '',
        rp: '',
        champions: [],
        skins: [],
        icons: 0,
      },
    }
  },
  methods: {
    async sellAccount() {
      this.$refs.form.validate()
      this.loading = true
      this.account.owner = this.$store.state.user._id
      try {
        await this.$axios
          .post('/accounts', this.account)
          .then(this.$router.push('vendida'))
      } catch (e) {
        this.error = e.response.data.message
      }
    },
    pickPreviousLeague(league) {
      this.account.previous_rank.league = league
    },
    pickPreviousDivision(division) {
      this.account.previous_rank.division = division
    },
    pickSoloLeague(league) {
      this.account.solo_rank.league = league
    },
    pickSoloDivision(division) {
      this.account.solo_rank.division = division
    },
    pickFlexLeague(league) {
      this.account.flex_rank.league = league
    },
    pickFlexDivision(division) {
      this.account.flex_rank.division = division
    },
    pickTftLeague(league) {
      this.account.tft_rank.league = league
    },
    pickTftDivision(division) {
      this.account.tft_rank.division = division
    },
    pickChampions(e) {
      this.account.champions = e
    },
    pickSkins(e) {
      this.account.skins = e
    },
    pickServer(server) {
      this.account.server = server
    },
  },
  head() {
    return {
      title: 'Vender cuenta',
    }
  },
}
</script>
