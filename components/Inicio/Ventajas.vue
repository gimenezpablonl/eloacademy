<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" class="text-center">
        <h1 class="opposite--text display-2 font-weight-light">
          Beneficios de nuestro servicio
        </h1>
      </v-col>
      <v-col cols="12" class="text-center">
        <h2 class="opposite--text subtitle-1 font-weight-light">
          Solución optimizada para gamers. Ofrecemos boosting, coaching y ventas
          de cuentas
        </h2>
      </v-col>
      <v-col cols="12" md="3" sm="6">
        <v-card raised>
          <v-container>
            <v-row align="center" justify="space-around">
              <v-col cols="6">
                <v-card-subtitle>
                  <v-icon color="accent3" size="70">
                    {{ mdiCalendarMonthOutline }}</v-icon
                  >
                </v-card-subtitle>
              </v-col>
              <v-col cols="6" class="text-center px-0">
                <v-card-title class="display-2 font-weight-light">{{
                  serviceDisplayNumber
                }}</v-card-title>
              </v-col>
            </v-row>
            <v-col cols="12" class="py-0 my-0">
              <v-card-title class="subtitle-1 font-weight-light justify-center"
                >AÑOS EN EL MERCADO</v-card-title
              >
            </v-col>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="12" md="3" sm="6">
        <v-card raised>
          <v-container>
            <v-row align="center" justify="space-around">
              <v-col cols="6">
                <v-card-subtitle>
                  <v-icon color="accent3" size="70">
                    {{ mdiAccountGroupOutline }}</v-icon
                  >
                </v-card-subtitle>
              </v-col>
              <v-col cols="6" class="text-center px-0">
                <v-card-title class="display-2 font-weight-light">{{
                  boostersDisplayNumber
                }}</v-card-title>
              </v-col>
            </v-row>
            <v-col cols="12" class="py-0 my-0">
              <v-card-title
                class="subtitle-1 font-weight-light justify-center px-0"
                >BOOSTERS</v-card-title
              >
            </v-col>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="12" md="3" sm="6">
        <v-card raised>
          <v-container>
            <v-row align="center" justify="space-around">
              <v-col cols="6">
                <v-card-subtitle>
                  <v-icon color="accent3" size="70">
                    {{ mdiRocketLaunchOutline }}</v-icon
                  >
                </v-card-subtitle>
              </v-col>
              <v-col cols="6" class="text-center px-0">
                <v-card-title class="display-2 font-weight-light px-0">{{
                  jobsDisplayNumber
                }}</v-card-title>
              </v-col>
            </v-row>
            <v-col cols="12" class="py-0 my-0">
              <v-card-title
                class="subtitle-1 font-weight-light justify-center px-0"
                >TRABAJOS REALIZADOS</v-card-title
              >
            </v-col>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="12" md="3" sm="6">
        <v-card raised>
          <v-container>
            <v-row align="center" justify="space-around">
              <v-col cols="6">
                <v-card-subtitle>
                  <v-icon color="accent3" size="70">
                    {{ mdiChatPlusOutline }}</v-icon
                  >
                </v-card-subtitle>
              </v-col>
              <v-col cols="6" class="text-center px-0">
                <v-card-title class="display-2 font-weight-light px-0"
                  >24/7</v-card-title
                >
              </v-col>
            </v-row>
            <v-col cols="12" class="py-0 my-0">
              <v-card-title
                class="subtitle-1 font-weight-light justify-center px-0"
                >SOPORTE AL CLIENTE</v-card-title
              >
            </v-col>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import gsap from 'gsap'
import {
  mdiCalendarMonthOutline,
  mdiAccountGroupOutline,
  mdiRocketLaunchOutline,
  mdiChatPlusOutline,
} from '@mdi/js'
export default {
  data: () => ({
    serviceNumberAnimated: 0,
    serviceNumber: 0,
    serviceDisplayNumber: 0,
    boostersNumberAnimated: 0,
    boostersNumber: 0,
    boostersDisplayNumber: 0,
    jobsNumberAnimated: 0,
    jobsNumber: 0,
    jobsDisplayNumber: 0,
    mdiCalendarMonthOutline,
    mdiAccountGroupOutline,
    mdiRocketLaunchOutline,
    mdiChatPlusOutline,
  }),
  mounted() {
    gsap.to(this, 1.5, {
      serviceNumberAnimated: 5,
      onUpdate: () => {
        this.serviceDisplayNumber = Math.ceil(this.serviceNumberAnimated)
      },
    })
    gsap.to(this, 1.5, {
      boostersNumberAnimated: 37,
      onUpdate: () => {
        this.boostersDisplayNumber = Math.ceil(this.boostersNumberAnimated)
      },
    })
    gsap.to(this, 1.5, {
      jobsNumberAnimated: 4432,
      onUpdate: () => {
        this.jobsDisplayNumber = Math.ceil(this.jobsNumberAnimated)
      },
    })
  },
}
</script>
