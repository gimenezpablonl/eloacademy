<template>
  <v-container fluid>
    <v-sheet>
      <template>
        <v-row class="mx-4" justify="space-between">
          <v-col cols="auto">
            <p class="title">Clasificatorias</p>
          </v-col>
          <v-col cols="auto">
            <p class="title text-uppercase">{{ account.server }}</p>
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
                max-width="250"
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
              {{ getDivision(account.previous_rank.division) }}
            </v-row>
          </v-col>
          <v-col cols="auto">
            <v-row justify="center">
              <v-img
                contain
                max-width="250"
                :src="
                  require(`@/assets/leagues/${account.solo_rank.league}.png`)
                "
              >
              </v-img>
            </v-row>
            <v-row justify="center" class="text-uppercase"> SOLO QUEUE </v-row>
            <v-row justify="center" class="text-uppercase">
              {{ account.solo_rank.league }}
              {{ getDivision(account.solo_rank.division) }}
            </v-row>
          </v-col>
          <v-col cols="auto">
            <v-row justify="center">
              <v-img
                contain
                max-width="250"
                :src="
                  require(`@/assets/leagues/${account.flex_rank.league}.png`)
                "
              >
              </v-img>
            </v-row>
            <v-row justify="center" class="text-uppercase">
              flex QUEUE
            </v-row>
            <v-row justify="center" class="text-uppercase">
              {{ account.flex_rank.league }}
              {{ getDivision(account.flex_rank.division) }}
            </v-row>
          </v-col>
          <v-col cols="auto">
            <v-row>
              <v-img
                contain
                max-width="250"
                :src="
                  require(`@/assets/leagues/${account.tft_rank.league}.png`)
                "
              >
              </v-img>
            </v-row>
            <v-row justify="center" class="text-uppercase">
              tft
            </v-row>
            <v-row justify="center" class="text-uppercase">
              {{ account.tft_rank.league }}
              {{ getDivision(account.tft_rank.division) }}
            </v-row>
          </v-col>
        </v-row>
        <v-row class="mx-3">
          <v-col cols="auto">
            <p class="title">
              Campeones
              <span
                v-if="
                  account.champions != undefined && account.champions.length > 0
                "
                >({{ account.champions.length }})
              </span>
            </p>
          </v-col>
        </v-row>
        <v-row no-gutters class="mx-5" justify="start">
          <v-col
            v-for="(champion, idx) in account.champions"
            :key="idx"
            cols="auto"
          >
            <v-img
              contain
              max-width="50"
              :src="`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${champion}.png`"
            ></v-img>
          </v-col>
        </v-row>
        <v-row class="mx-3">
          <v-col cols="auto">
            <p class="title">
              Aspectos
              <span
                v-if="account.skins != undefined && account.skins.length > 0"
                >({{ account.skins.length }})
              </span>
            </p>
          </v-col>
        </v-row>
        <v-row no-gutters class="mx-5" justify="start">
          <v-col v-for="(skin, idx) in account.skins" :key="idx" cols="auto">
            <v-img
              contain
              max-width="200"
              :src="`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/${skin.champion}/${skin.key}.jpg`"
            ></v-img>
          </v-col>
        </v-row>
        <v-row class="mx-3">
          <v-col cols="auto">
            <p class="title">
              Iconos de invocador
              <span
                v-if="account.icons != undefined && account.icons.length > 0"
                >({{ account.icons.length }})
              </span>
            </p>
          </v-col>
        </v-row>
        <v-row no-gutters class="mx-5" justify="start">
          <v-col v-for="(icon, idx) in account.icons" :key="idx" cols="auto">
            <v-img
              contain
              max-width="50"
              :src="`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/${icon}.jpg`"
            ></v-img>
          </v-col>
        </v-row>
        <v-row class="mx-3">
          <v-col cols="auto">
            <p class="title">
              Otros
            </p>
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
          <v-col cols="auto">
            <v-btn>comprar</v-btn>
          </v-col>
        </v-row>
      </template>
    </v-sheet>
  </v-container>
</template>

<script>
import champions from '@/utils/champions'
export default {
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
      champions: Object.values(champions),
    }
  },
  methods: {
    getDivision(number) {
      if (number === 1) {
        return 'I'
      } else if (number === 2) {
        return 'II'
      } else if (number === 3) {
        return 'III'
      } else if (number === 4) {
        return 'IV'
      } else {
        return ''
      }
    },
  },
}
</script>
