<template>
  <v-container fluid>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(servicio, index) in servicios" :key="index">
        <v-card
          color="primary"
          min-height="300"
          min-width="250"
          max-height="500"
          max-width="500"
          shaped
          outlined
          class="mx-auto mb-10"
        >
          <v-img
            width="500"
            class="mx-auto"
            :src="require(`@/assets/${servicio.img}`)"
          >
          </v-img>
          <v-card-title class="text-uppercase opposite--text title">{{
            servicio.nombre
          }}</v-card-title>
          <v-card-actions class="d-flex justify-center">
            <v-btn color="opposite" outlined @click="serviciar(index)"
              >Seleccionar</v-btn
            >
          </v-card-actions>
        </v-card>
      </swiper-slide>
      <div slot="button-prev" class="swiper-button-prev opposite--text"></div>
      <div slot="button-next" class="swiper-button-next opposite--text"></div>
    </swiper>
  </v-container>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'SwiperExampleAutoplay',
  title: 'Autoplay',
  components: {
    Swiper,
    SwiperSlide,
  },
  data: () => ({
    servicios: [
      {
        nombre: 'Eloboost',
        img: 'mf.jpg',
      },
      {
        nombre: 'Duoboost',
        img: 'Ryze.jpg',
      },
      {
        nombre: 'Coaching',
        img: 'Galio.jpg',
      },
      {
        nombre: 'Ventas de cuentas',
        img: 'Mundo.jpg',
      },
      {
        nombre: 'Level Boost',
        img: 'Sylas.jpg',
      },
    ],
    swiperOption: {
      slidesPerView: 5,
      spaceBetween: 300,
      centeredSlides: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },
    },
  }),
  methods: {
    serviciar(servicio) {
      this.$emit('clicked', servicio)
    },
  },
}
</script>
