<template>
  <!-- First Slider -->
  <div class="slide-container">
    <div
      class="custom-swiper-button-prev rounded-lg d-flex justify-center align-center cursor-pointer transition"
    >
      <v-icon icon="mdi-arrow-left" size="small" />
    </div>
    <div
      class="custom-swiper-button-next rounded-lg d-flex justify-center align-center cursor-pointer transition"
    >
      <v-icon icon="mdi-arrow-right" size="small" />
    </div>

    <Swiper
      :modules="[
        SwiperEffectFade,
        SwiperPagination,
        SwiperNavigation,
        SwiperAutoplay,
        SwiperKeyboard,
      ]"
      :effect="'fade'"
      :keyboard="{
        enabled: true,
      }"
      :grab-cursor="true"
      :navigation="{
        prevEl: '.custom-swiper-button-prev',
        nextEl: '.custom-swiper-button-next',
      }"
      :spaceBetween="10"
      :loop="true"
      :autoplay="{
        delay: 4500,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
    >
      <SwiperSlide class="swiper-slide" v-for="item of slides">
        <v-img
          class="rounded-xl"
          :src="item.img"
          height="80vh"
          :aspect-ratio="16 / 9"
          cover
        />
        <div
          class="content d-flex justify-center justify-sm-space-between align-center pa-5"
        >
          <div class="left d-flex flex-column ga-3">
            <p class="title text-subtitle-1 text-md-h5 pa-2 rounded-lg">
              {{ item.title }}
            </p>
            <p class="text-caption text-md-subtitle-1">{{ item.description }}</p>
          </div>
          <div class="right d-none d-sm-flex">
            <a class="link transition" :href="item.link" target="_blank">{{
              t("see-now")
            }}</a>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>

  <v-responsive class="my-15" />

  <!-- Second Slider -->
  <div class="mt-15">
    <Swiper
      :modules="[
        SwiperEffectFade,
        SwiperPagination,
        SwiperNavigation,
        SwiperEffectCoverflow,
        SwiperAutoplay,
      ]"
      :effect="'coverflow'"
      :grab-cursor="true"
      :navigation="true"
      :spaceBetween="10"
      :loop="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :breakpoints="{
        '@0.00': {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        '@1.00': {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        '@1.50': {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }"
    >
      <SwiperSlide class="swiper-slide" v-for="item of slides">
        <v-img
          class="rounded-xl"
          :src="item.img"
          height="40vh"
          :aspect-ratio="16 / 9"
          cover
        />
        <div class="desc d-flex flex-column ga-2 justify-center align-center">
          <p class="header text-white text-subtitle-1 text-sm-h5 text-green-accent-3">
            {{ item.title }}
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
<script lang="ts" setup>
import followYourselfBig from "~/assets/img/follow-yourself-big.png";
import academyBig from "~/assets/img/academyBig.png";
import getCountryBig from "~/assets/img/get-country-big.png";
import merchantileBig from "~/assets/img/merchantileBig.png";
import chatBig from "~/assets/img/chatBig.png";
import foodBig from "~/assets/img/foodBig.png";
import cryptoBig from "~/assets/img/cryptoBig.png";
import blogBig from "~/assets/img/blogBig.png";

const { t } = useI18n();

useHead({
  title: `GK SOFTWARE | ${t("showcase")}`,
});

const slides = [
  {
    title: t("follow-yourself"),
    description: t("follow-yourself-short-desc"),
    img: followYourselfBig,
    link: "https://followyourself.net/",
  },
  {
    title: t("academy"),
    description: t("academy-short-desc"),
    img: academyBig,
    link: "https://esrefugurcelik.com/",
  },
  {
    title: t("get-country"),
    description: t("get-country-short-desc"),
    img: getCountryBig,
    link: "https://www.getcountry.net/",
  },
  {
    title: t("merchantile-app"),
    description: t("merchantile-app-short-desc"),
    img: merchantileBig,
    link: "https://github.com/gokhankatar/merchantile-app",
  },
  {
    title: t("crypto-app"),
    description: t("crypto-app-short-desc"),
    img: cryptoBig,
    link: "https://github.com/gokhankatar/crypto-tracker",
  },
  {
    title: t("food-app"),
    description: t("food-app-short-desc"),
    img: foodBig,
    link: "https://github.com/gokhankatar/food-app",
  },
  {
    title: t("blog-app"),
    description: t("blog-app-short-desc"),
    img: blogBig,
    link: "https://github.com/gokhankatar/blog-app",
  },
  {
    title: t("chat-app"),
    description: t("chat-app-short-desc"),
    img: chatBig,
    link: "https://github.com/gokhankatar/chat-app",
  },
];
</script>
<style scoped>
.slide-container {
  position: relative;
}

.swiper-slide {
  position: relative;
  background-position: center !important;
  background-size: cover;
}
.content {
  position: absolute;
  z-index: 999;
  bottom: 5%;
  left: 0;
  right: 0;
}
.title {
  background-color: rgba(255, 255, 255, 0.1);
}
.link {
  text-decoration: none;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 2rem;
  padding: 1rem;
  cursor: pointer;
  background-color: transparent;
}
.link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.custom-swiper-button-prev,
.custom-swiper-button-next {
  padding: 1rem;
  height: 25%;
  background-color: rgba(255, 255, 255, 0.1);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
}

.custom-swiper-button-prev {
  left: 0.5%;
}

.custom-swiper-button-next {
  right: 0.5%;
}

.custom-swiper-button-prev:hover,
.custom-swiper-button-next:hover {
  background-color: #00e676;
  color: #fff;
}
</style>
