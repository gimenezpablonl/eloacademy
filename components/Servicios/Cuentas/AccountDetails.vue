<template>
  <v-container fluid>
    <v-sheet>
      <template>
        <v-row class="mx-4" justify="space-between">
          <v-col cols="auto">
            <p class="display-1">Clasificatorias</p>
          </v-col>
          <v-col cols="auto">
            <p class="display-1 text-uppercase">{{ account.server }}</p>
          </v-col>
        </v-row>
        <v-row
          v-if="
            account.solo_rank != undefined &&
            account.flex_rank != undefined &&
            account.previous_rank != undefined &&
            account.tft_rank != undefined
          "
          justify="center"
        >
          <v-col cols="auto">
            <v-row>
              <v-img
                v-if="account.previous_rank != undefined"
                contain
                max-width="200"
                :src="
                  require(`@/assets/leagues/${account.previous_rank.league}.png`)
                "
              >
              </v-img>
            </v-row>
            <v-row justify="center" class="text-uppercase">
              temporada 2019
            </v-row>
            <v-row justify="center" class="text-uppercase">
              {{ account.previous_rank.league }}
              {{ account.previous_rank.division }}
            </v-row>
          </v-col>
          <v-col cols="auto">
            <v-row justify="center">
              <v-img
                contain
                max-width="200"
                :src="
                  require(`@/assets/leagues/${account.solo_rank.league}.png`)
                "
              >
              </v-img>
            </v-row>
            <v-row justify="center" class="text-uppercase"> SOLO QUEUE </v-row>
            <v-row justify="center" class="text-uppercase">
              {{ account.solo_rank.league }}
              {{ account.solo_rank.division }}
            </v-row>
          </v-col>
          <v-col cols="auto">
            <v-row justify="center">
              <v-img
                contain
                max-width="200"
                :src="
                  require(`@/assets/leagues/${account.flex_rank.league}.png`)
                "
              >
              </v-img>
            </v-row>
            <v-row justify="center" class="text-uppercase"> flex QUEUE </v-row>
            <v-row justify="center" class="text-uppercase">
              {{ account.flex_rank.league }}
              {{ account.flex_rank.division }}
            </v-row>
          </v-col>
          <v-col cols="auto">
            <v-row>
              <v-img
                contain
                max-width="200"
                :src="
                  require(`@/assets/leagues/${account.tft_rank.league}.png`)
                "
              >
              </v-img>
            </v-row>
            <v-row justify="center" class="text-uppercase"> tft </v-row>
            <v-row justify="center" class="text-uppercase">
              {{ account.tft_rank.league }}
              {{ account.tft_rank.division }}
            </v-row>
          </v-col>
        </v-row>
        <v-row class="mx-3">
          <v-col cols="auto">
            <p class="display-1">
              Campeones
              <span
                v-if="
                  account.champions != undefined && account.champions.length > 0
                "
                >({{ account.champions.length }})
              </span>
            </p>
          </v-col>
          <v-col cols="auto">
            <p class="display-1">
              <span
                v-if="
                  account.champions != undefined && account.champions.length > 0
                "
              >
              </span>
            </p>
          </v-col>
        </v-row>
        <v-row class="mx-3">
          <v-col cols="auto">
            <ChampionDialog
              v-if="
                account.champions != undefined && account.champions.length > 0
              "
              :champs="account.champions"
            />
          </v-col>
        </v-row>
        <v-row class="mx-3">
          <v-col cols="auto">
            <p class="display-1">
              Aspectos
              <span
                v-if="account.skins != undefined && account.skins.length > 0"
                >({{ account.skins.length }})
              </span>
            </p>
          </v-col>
        </v-row>
        <v-row class="mx-3">
          <v-col cols="auto">
            <SkinDialog
              v-if="account.skins != undefined && account.skins.length > 0"
              :skins="account.skins"
            />
          </v-col>
        </v-row>
        <v-row class="mx-3">
          <v-col cols="auto">
            <p class="title">Otros</p>
          </v-col>
        </v-row>
        <v-row class="mx-3" align="center">
          <v-col cols="auto">
            <v-img
              contain
              max-width="50"
              :src="require(`@/assets/icons/rp.png`)"
            ></v-img>
          </v-col>
          <v-col cols="auto" class="subtitle-1">
            {{ account.rp }} Riot Points
          </v-col>
          <v-col cols="auto">
            <v-img
              contain
              max-width="50"
              :src="require(`@/assets/icons/orange-essence.png`)"
            ></v-img>
          </v-col>
          <v-col cols="auto">
            {{ account.orange_essence }}
          </v-col>
          <v-col cols="auto">
            <v-img
              contain
              max-width="50"
              :src="require(`@/assets/icons/blue-essence.png`)"
            ></v-img>
          </v-col>
          <v-col cols="auto">
            {{ account.blue_essence }}
          </v-col>
        </v-row>
        <v-row justify="center" align="center" align-content="center">
          <v-col cols="auto" class="title"> ${{ account.price }} </v-col>
          <v-col cols="auto" align-self="end">
            <v-btn color="success" @click="buyAccount()">
              Comprar cuenta
              <v-icon dark right>mdi-checkbox-marked-circle</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </template>
    </v-sheet>
  </v-container>
</template>

<script>
import ChampionDialog from '@/components/Admin/ChampionDialog'
import SkinDialog from '@/components/Admin/SkinDialog'
import champions from '@/utils/champions'
export default {
  components: {
    ChampionDialog,
    SkinDialog,
  },
  props: {
    account: {
      type: Object,
      default: () => {
        return {
          previous_rank: {
            league: 'unranked',
          },
          solo_rank: {
            league: 'unranked',
          },
          flex_rank: {
            league: 'unranked',
          },
          tft_rank: {
            league: 'unranked',
          },
        }
      },
    },
  },
  data() {
    return {
      url: '',
      champions: Object.values(champions),
    }
  },
  methods: {
    buyAccount() {
      this.url =
        'https://wa.me/5493416291344?text=Hola, estaría interesado en comprar la cuenta 5f593a27e67d783204333910'
      window.open(this.url)
    },
  },
}
</script>
