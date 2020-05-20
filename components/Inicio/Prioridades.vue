<template>
  <div>
    <ParallaxSeparator
      src="Sylas.jpg"
      text="NUESTRAS PRIORIDADES"
    ></ParallaxSeparator>
    <v-container>
      <v-row no-gutters>
        <v-col
          v-for="(prioridad, idx) in prioridades"
          :key="idx"
          cols="12"
          sm="3"
        >
          <v-card color="transparent" flat class="mx-auto my-5">
            <v-img
              width="150"
              class="mx-auto"
              :src="require(`@/assets/priorities/${prioridad.img}`)"
            >
            </v-img>

            <v-card-subtitle
              class="pb-1 title opposite--text text-center font-weight-bold"
            >
              {{ prioridad.nombre }}
            </v-card-subtitle>

            <v-card-text class="text-center opposite--text">
              {{ prioridad.descripcion }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ParallaxSeparator from '@/components/ParallaxSeparator.vue'
export default {
  components: {
    ParallaxSeparator,
  },
  data: () => ({
    prioridades: [
      {
        nombre: 'Tiempo garantizado',
        descripcion:
          'Tu orden tendrá un tiempo de entrega máximo. Si el Booster falla en terminarlo a tiempo, se te regalaran wins en todas las divisiones inferiores a D2.',
        img: '1.png',
      },
      {
        nombre: 'Soporte 24/7',
        descripcion:
          'Chat en vivo las 24 horas con el soporte y el booster en multiples idiomas. Siempre vamos a estar ahí para ayudarte y responder todas tus dudas.',
        img: '2.png',
      },
      {
        nombre: 'Confidencialidad',
        descripcion:
          'Todos los datos personales que nos proporciones son super confidenciales. Solo el booster tendrá acceso a ellos. A su vez todas las transacciones estan encriptadas para una máxima seguridad.',
        img: '3.png',
      },
      {
        nombre: 'Seguimiento',
        descripcion:
          'Contamos con una plataforma a la que podras ingresar una vez realizada la compra, donde podras chatear con tu booster, pausar la orden si quieres jugar y ver el progreso de tu orden.',
        img: '4.png',
      },
      {
        nombre: 'Máxima Calidad',
        descripcion:
          'Tenemos el servicio con mayor calidad de eloboost del mercado. Para lograr esto nos enfocamos en ti, en que toda tu experiencia sea agradable, segura y confiable.',
        img: '5.png',
      },
      {
        nombre: 'Rapidez',
        descripcion:
          'Somos muy exigentes con la rapidez del servicio por eso una vez realizada la compra en booster se contactara contigo a la brevedad para empezar el trabajo.',
        img: '6.png',
      },
      {
        nombre: 'Económico',
        descripcion:
          'Hicimos mucho enfasis en industrializar el proceso de eloboost, combinando esto con sucesivos descuentos nos permite tener los precios mas bajos del mercado.',
        img: '7.png',
      },
      {
        nombre: 'Personalizado',
        descripcion:
          'Puedes personalizar tu orden al máximo, elegir los campeones y roles que quieras, elegir el booster y hasta en que letra quieres el destello.',
        img: '8.png',
      },
    ],
  }),
}
</script>
