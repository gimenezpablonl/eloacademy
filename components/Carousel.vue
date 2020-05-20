<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="(testimonio, idx) in testimonios" :key="idx">
      <v-card color="primary" flat min-height="400" class="mx-auto my-5 mb-10">
        <v-card-title>
          <v-row justify="space-between" no-gutters>
            <v-col
              ><span class="text-uppercase opposite--text font-weight-bold"
                >{{ testimonio.type }}
              </span></v-col
            >
            <v-col
              ><v-rating
                color="accent3"
                readonly
                background-color="secondary"
                hover
                dense
                :value="testimonio.valor"
              ></v-rating
            ></v-col>
          </v-row>
        </v-card-title>
        <v-img
          width="100"
          class="mx-auto"
          :src="require(`@/assets/${testimonio.img}`)"
        >
        </v-img>
        <v-card-title class="text-uppercase opposite--text title">{{
          testimonio.server
        }}</v-card-title>
        <v-card-subtitle class="opposite--text subtitle">
          {{ testimonio.date }}
        </v-card-subtitle>
        <v-card-subtitle class="opposite--text body-2">
          {{ testimonio.text }}
        </v-card-subtitle>
      </v-card>
    </swiper-slide>
    <div slot="pagination" class="swiper-pagination"></div>
    <div slot="button-prev" class="swiper-button-prev"></div>
    <div slot="button-next" class="swiper-button-next"></div>
  </swiper>
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
    testimonios: [
      {
        img: 'leagues/platinum.png',
        type: 'duoboost',
        server: 'LAS',
        date: '18/05/2020',
        text:
          'MUY CHETO TODO LA VERDAD LOS BOOSTERS SE RE PORTARON UN SHOUTOUT PARA ELO ACADEMY WACHO',
        valor: 5,
      },
      {
        img: 'leagues/gold.png',
        type: 'eloboost',
        server: 'BR',
        date: '18/05/2020',
        text: 'muy weno',
        valor: 4,
      },
      {
        img: 'leagues/challenger.png',
        type: 'eloboost',
        server: 'LAS',
        date: '18/05/2020',
        text: 'recomendable',
        valor: 5,
      },
      {
        img: 'leagues/diamond.png',
        type: 'coaching',
        server: 'br',
        date: '18/05/2020',
        text: 'muy weno',
        valor: 5,
      },
      {
        img: 'leagues/silver.png',
        type: 'eloboost',
        server: 'lan',
        date: '18/05/2020',
        text: 'muy weno',
        valor: 4,
      },
      {
        img: 'leagues/diamond.png',
        type: 'eloboost',
        server: 'LAS',
        date: '18/05/2020',
        text: 'recomendable',
        valor: 5,
      },
      {
        img: 'leagues/diamond.png',
        type: 'coaching',
        server: 'na',
        date: '18/05/2020',
        text: 'chetardo',
        valor: 5,
      },
      {
        img: 'leagues/diamond.png',
        type: 'coaching',
        server: 'na',
        date: '18/05/2020',
        text: 'chetardo',
        valor: 5,
      },
    ],
    swiperOption: {
      slidesPerView: 4,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
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
}
</script>
