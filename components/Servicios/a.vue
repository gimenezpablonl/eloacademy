<template>
  <v-container fluid>
    <v-subheader class="opposite--text title">Liga actual</v-subheader>
    <v-row align="center" no-gutters>
      <v-col class="d-flex" cols="auto" md="6" sm="10">
        <v-select
          v-model="player.server"
          color="opposite"
          item-color="accent3"
          :items="servers"
          label="Servidor"
        ></v-select>
      </v-col>
      <v-spacer></v-spacer>
      <v-col class="d-flex" cols="auto" md="5" sm="10">
        <v-select
          v-model="player.queue"
          color="opposite"
          item-color="accent3"
          :items="queues"
          label="Tipo de cola"
        ></v-select>
      </v-col>
    </v-row>
    <v-row align="center" no-gutters>
      <v-col class="d-flex" cols="auto" md="3" sm="5">
        <v-select
          v-model="player.startLeague"
          color="opposite"
          item-color="accent3"
          :items="leagues"
          label="Liga de inicio"
        ></v-select>
      </v-col>
      <v-spacer></v-spacer>
      <v-col class="d-flex" cols="auto" md="2" sm="5">
        <v-select
          v-model="player.startDivison"
          color="opposite"
          item-color="accent3"
          :items="divisions"
          label="División"
        ></v-select>
      </v-col>
      <v-spacer></v-spacer>
      <v-col class="d-flex" cols="auto" md="3" sm="5">
        <v-text-field label="Puntos de liga actuales"></v-text-field>
      </v-col>
      <v-spacer></v-spacer>
      <v-col class="d-flex" cols="auto" md="3" sm="5">
        <v-select
          v-model="player.lpGain"
          color="opposite"
          item-color="accent3"
          :items="lpGains"
          label="Puntos de liga por victoria"
        ></v-select>
      </v-col>
    </v-row>
    <v-subheader class="opposite--text title">Liga deseada</v-subheader>
    <v-row align="center" no-gutters>
      <v-col class="d-flex" cols="auto" md="6" sm="10">
        <v-select
          v-model="player.endLeague"
          color="opposite"
          item-color="accent3"
          :items="leagues"
          label="Liga deseada"
        ></v-select>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="auto" md="6" sm="10">
        <v-select
          v-model="player.endDivison"
          color="opposite"
          item-color="accent3"
          :items="divisions"
          label="División"
        ></v-select>
      </v-col>
    </v-row>
    <v-subheader class="opposite--text title">Opcionales</v-subheader>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    leagues: [
      'Hierro',
      'Bronce',
      'Plata',
      'Oro',
      'Platino',
      'Diamante',
      'Maestro',
      'Gran Maestro',
      'Retador',
    ],
    divisions: ['IV', 'III', 'II', 'I'],
    lpGains: ['1-10', '10-14', '15-17', '18-24+'],
    servers: [
      'Norteamérica',
      'Latinoamérica Norte',
      'Latinoamérica Sur',
      'Brasil',
    ],
    queues: ['Solo/Dúo', 'Flex'],
    player: {
      startLeague: '',
      startDivison: '',
      startPoints: '',
      endLeague: '',
      endDivision: '',
      endPoints: '',
      lpGain: '',
    },
  }),
}
</script>
