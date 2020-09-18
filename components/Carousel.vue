<template>
  <swiper class="swiper mt-10" :options="swiperOption">
    <swiper-slide v-for="(testimonio, idx) in testimonios" :key="idx">
      <v-card color="transparent" flat min-height="400" class="mx-auto">
        <v-card-title>
          <v-row justify="space-between" no-gutters>
            <v-col
              ><span class="text-uppercase accent3--text font-weight-bold"
                >{{ testimonio.type }}
              </span></v-col
            >
            <v-col
              ><v-rating
                color="accent3"
                readonly
                background-color="accent3"
                hover
                dense
                :value="testimonio.valor"
              ></v-rating
            ></v-col>
          </v-row>
        </v-card-title>
        <v-row align="center" justify="center">
          <v-col cols="3">
            <v-img :src="require(`@/assets/${testimonio.start}`)"> </v-img>
          </v-col>
          <v-col v-if="testimonio.end" cols="1">
            <v-icon x-large> mdi-arrow-right </v-icon>
          </v-col>
          <v-col v-if="testimonio.end" cols="3">
            <v-img :src="require(`@/assets/${testimonio.end}`)"> </v-img>
          </v-col>
        </v-row>
        <v-card-title class="text-uppercase opposite--text title">{{
          testimonio.server
        }}</v-card-title>
        <v-card-subtitle class="subtitle-2">
          {{ testimonio.date }}
        </v-card-subtitle>
        <v-card-subtitle class="body-2 text-justify">
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
        start: 'leagues/Platinum.png',
        end: 'leagues/Diamond.png',
        type: 'eloboost',
        server: 'LAS',
        date: '18/09/2020',
        text:
          'MUY CHETO TODO LA VERDAD LOS BOOSTERS SE RE PORTARON UN SHOUTOUT PARA ELO ACADEMY WACHO',
        valor: 5,
      },
      {
        start: 'leagues/Silver.png',
        end: 'leagues/Gold.png',
        type: 'eloboost',
        server: 'BR',
        date: '18/09/2020',
        text: 'muy weno',
        valor: 4,
      },
      {
        start: 'leagues/Master.png',
        end: 'leagues/Grandmaster.png',
        type: 'eloboost',
        server: 'LAS',
        date: '18/09/2020',
        text: 'recomendable',
        valor: 5,
      },
      {
        start: 'leagues/Silver.png',
        type: 'coaching',
        server: 'BR',
        date: '18/09/2020',
        text: 'muy weno',
        valor: 5,
      },
      {
        start: 'leagues/Bronze.png',
        end: 'leagues/Gold.png',
        type: 'eloboost',
        server: 'LAN',
        date: '18/09/2020',
        text: 'muy weno',
        valor: 4,
      },
      {
        start: 'leagues/Iron.png',
        end: 'leagues/Bronze.png',
        type: 'eloboost',
        server: 'LAS',
        date: '18/09/2020',
        text: 'recomendable',
        valor: 5,
      },
      {
        start: 'leagues/Platinum.png',
        type: 'coaching',
        server: 'NA',
        date: '18/09/2020',
        text: 'chetardo',
        valor: 5,
      },
      {
        start: 'leagues/Diamond.png',
        type: 'coaching',
        server: 'NA',
        date: '18/09/2020',
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
