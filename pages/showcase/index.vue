<template>
  <!-- effectFade -->
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
          class="rounded-xl d-none d-sm-flex"
          :src="item.img"
          height="80vh"
          :aspect-ratio="16 / 9"
          cover
        />
        <v-img
          class="rounded-xl d-flex d-sm-none"
          :src="item.smallImg"
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
            <p class="text-caption text-md-subtitle-1 d-none d-sm-flex">
              {{ item.description }}
            </p>
          </div>
          <div class="right d-none d-sm-flex">
            <a
              class="link transition cursor-pointer pa-3 rounded-xl"
              :href="item.link"
              target="_blank"
              >{{ t("see-now") }}</a
            >
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>

  <v-responsive class="my-15" />
  <v-responsive class="my-15 d-none d-sm-flex" />
  <v-responsive class="my-15 d-none d-sm-flex" />
  <v-responsive class="my-10 d-none d-sm-flex" />

  <!-- effectCoverflow (feature) -->
  <v-row class="d-flex justify-space-between align-center">
    <v-col
      cols="12"
      sm="12"
      lg="3"
      class="d-flex flex-column align-center align-md-start ga-5"
    >
      <h3 class="text-subtitle-1 text-md-h4">{{ t("why-web-header") }}</h3>
      <hr class="w-75 w-sm-25" color="green-accent-3" />
      <p class="text-subtitle-2 mt-5 text-md-subtitle-1 text-center text-md-start">
        {{ t("why-web") }}
      </p>
    </v-col>
    <v-col cols="12" sm="12" lg="8">
      <Swiper
        :modules="[SwiperPagination, SwiperEffectCoverflow, SwiperAutoplay]"
        :effect="'coverflow'"
        :grab-cursor="true"
        :spaceBetween="10"
        :loop="true"
        :autoplay="{
          delay: 4000,
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
        <SwiperSlide class="swiper-slide" v-for="item of slidesFeatures">
          <v-img
            class="rounded-xl"
            :src="item.img"
            height="30vh"
            :aspect-ratio="16 / 9"
            cover
          />
          <div class="desc d-flex flex-column ga-2 justify-center align-center">
            <p
              class="feature text-white text-subtitle-1 text-sm-h5 text-grey-lighten-4 rounded-lg pa-3"
            >
              {{ item.feature }}
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </v-col>
  </v-row>

  <v-responsive class="my-15" />
  <v-responsive class="my-15 d-none d-sm-flex" />
  <v-responsive class="my-15 d-none d-sm-flex" />
  <v-responsive class="my-10 d-none d-sm-flex" />

  <!-- effectCube (difference) -->
  <v-row class="d-flex flex-row-reverse justify-space-between align-center">
    <v-col
      cols="12"
      sm="12"
      lg="3"
      class="d-flex flex-column align-center align-md-start ga-5"
    >
      <h3 class="text-subtitle-1 text-md-h4">{{ t("web-app-website-header") }}</h3>
      <hr class="w-75 w-sm-25" color="green-accent-3" />
      <p class="text-subtitle-2 mt-5 text-md-subtitle-1 text-center text-md-start">
        {{ t("web-app-website") }}
      </p>
    </v-col>
    <v-col cols="12" sm="12" lg="8">
      <Swiper
        :modules="[SwiperPagination, SwiperEffectCube, SwiperAutoplay]"
        :effect="'cube'"
        :grab-cursor="true"
        :spaceBetween="10"
        :cubeEffect="{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }"
        :loop="true"
        :autoplay="{
          delay: 4500,
          disableOnInteraction: false,
        }"
        :pagination="{
          clickable: true,
        }"
      >
        <SwiperSlide class="swiper-slide" v-for="item of slidesDifference">
          <v-img
            class="rounded-xl d-none d-sm-flex"
            :src="item.img"
            height="30vh"
            :aspect-ratio="16 / 9"
            cover
          />
          <v-img
            class="rounded-xl d-flex d-sm-none"
            :src="item.smallImg"
            height="30vh"
            :aspect-ratio="16 / 9"
            cover
          />
          <div class="desc d-flex flex-column ga-2 justify-center align-center">
            <p
              class="difference text-white text-subtitle-1 text-sm-h5 text-grey-lighten-4 rounded-lg pa-3"
            >
              {{ item.difference }}
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </v-col>
  </v-row>

  <v-responsive class="my-15" />
  <v-responsive class="my-15 d-none d-sm-flex" />
  <v-responsive class="my-15 d-none d-sm-flex" />
  <v-responsive class="my-10 d-none d-sm-flex" />

  <!-- effectCards (tech) -->
  <v-row class="d-flex justify-space-between align-center">
    <v-col
      cols="12"
      sm="12"
      lg="3"
      class="d-flex flex-column align-center align-md-start ga-5"
    >
      <h3 class="text-subtitle-1 text-md-h4">{{ t("why-new-tech-header") }}</h3>
      <hr class="w-75 w-sm-25" color="green-accent-3" />
      <p class="text-subtitle-2 mt-5 text-md-subtitle-1 text-center text-md-start">
        {{ t("why-new-tech") }}
      </p>
    </v-col>
    <v-col cols="12" sm="12" lg="8">
      <Swiper
        :modules="[SwiperEffectCards, SwiperAutoplay]"
        :effect="'cards'"
        :grab-cursor="true"
        :spaceBetween="10"
        :loop="true"
        :autoplay="{
          delay: 4500,
          disableOnInteraction: false,
        }"
      >
        <SwiperSlide class="swiper-slide" v-for="item of slidesTech">
          <v-img
            class="rounded-xl d-none d-sm-flex"
            :src="item.img"
            height="30vh"
            :aspect-ratio="16 / 9"
            cover
          />
          <v-img
            class="rounded-xl d-flex d-sm-none"
            :src="item.imgSmall"
            height="30vh"
            :aspect-ratio="16 / 9"
            cover
          />
          <div class="desc d-flex flex-column ga-2 justify-center align-center">
            <p
              class="tech text-white text-subtitle-1 text-sm-h5 text-grey-lighten-4 rounded-lg pa-3"
            >
              {{ item.technology }}
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </v-col>
  </v-row>

  <v-responsive class="my-15 d-none d-sm-flex" />
  <v-responsive class="my-15 d-none d-sm-flex" />
  <v-responsive class="my-15 d-none d-sm-flex" />
  <v-responsive class="my-10 d-none d-sm-flex" />
</template>

<script lang="ts" setup>
import followYourselfBig from "~/assets/img/followYourselfBig.png";
import academyBig from "~/assets/img/academyBig.png";
import getCountryBig from "~/assets/img/get-country-big.png";
import merchantileBig from "~/assets/img/merchantileBig.png";
import chatBig from "~/assets/img/chatBig.png";
import foodBig from "~/assets/img/foodBig.png";
import cryptoBig from "~/assets/img/cryptoBig.png";
import blogBig from "~/assets/img/blogBig.png";
import followYourselfSmall from "~/assets/img/followYourselfSmall.png";
import academySmall from "~/assets/img/academySmall.png";
import getCountrySmall from "~/assets/img/getCountrySmall.png";
import merchantileSmall from "~/assets/img/merchantileSmall.png";
import chatSmall from "~/assets/img/chatSmall.png";
import foodSmall from "~/assets/img/foodSmall.png";
import cryptoSmall from "~/assets/img/cryptoSmall.png";
import blogSmall from "~/assets/img/blogSmall.png";


import followYourselfFeature from "~/assets/img/followYourselfFeature.png";
import academyFeature from "~/assets/img/academyFeature.png";
import featureAnother from "~/assets/img/featureAnother.png";
import getCountryFeature from "~/assets/img/getCountryFeature.png";
import blogFeature from "~/assets/img/blogFeature.png";

import blogDifBig from "~/assets/img/blogDifbig.png";
import blogDifSmall from "~/assets/img/blogDifSmall.png";
import chatDifBig from "~/assets/img/chatDifBig.png";
import chatDifSmall from "~/assets/img/chatDifSmall.png";
import cryptoDifBig from "~/assets/img/cryptoDifBig.png";
import cryptoDifSmall from "~/assets/img/cryptoDifSmall.png";
import foodDifBig from "~/assets/img/foodDifBig.png";
import foodDifSmall from "~/assets/img/foodDifSmall.png";

import academyTechBig from "~/assets/img/academyTechBig.png";
import academySmallTech from "~/assets/img/academySmallTech.png";
import getCountryTechBig from "~/assets/img/getCountrytechBig.png";
import getCountrySmallTech from "~/assets/img/getCountrySmallTech.png";
import followYourselfTechBig from "~/assets/img/followYourselftechBig.png";
import followYourselfSmallTech from "~/assets/img/followYourselfSmallTech.png";
import merchantileTechBig from "~/assets/img/merchantileTechBig.png";
import merchantileSmallTech from "~/assets/img/merhcantileSmalltech.png";

const { t } = useI18n();

useHead({
  title: `GK SOFTWARE | ${t("showcase")}`,
});

const slides = [
  {
    title: t("follow-yourself"),
    description: t("follow-yourself-short-desc"),
    img: followYourselfBig,
    smallImg: followYourselfSmall,
    link: "https://followyourself.net/",
  },
  {
    title: t("academy"),
    description: t("academy-short-desc"),
    img: academyBig,
    smallImg: academySmall,
    link: "https://esrefugurcelik.com/",
  },
  {
    title: t("get-country"),
    description: t("get-country-short-desc"),
    img: getCountryBig,
    smallImg: getCountrySmall,
    link: "https://www.getcountry.net/",
  },
  {
    title: t("merchantile-app"),
    description: t("merchantile-app-short-desc"),
    img: merchantileBig,
    smallImg: merchantileSmall,
    link: "https://github.com/gokhankatar/merchantile-app",
  },
  {
    title: t("crypto-app"),
    description: t("crypto-app-short-desc"),
    img: cryptoBig,
    smallImg: cryptoSmall,
    link: "https://github.com/gokhankatar/crypto-tracker",
  },
  {
    title: t("food-app"),
    description: t("food-app-short-desc"),
    img: foodBig,
    smallImg: foodSmall,
    link: "https://github.com/gokhankatar/food-app",
  },
  {
    title: t("blog-app"),
    description: t("blog-app-short-desc"),
    img: blogBig,
    smallImg: blogSmall,
    link: "https://github.com/gokhankatar/blog-app",
  },
  {
    title: t("chat-app"),
    description: t("chat-app-short-desc"),
    img: chatBig,
    smallImg: chatSmall,
    link: "https://github.com/gokhankatar/chat-app",
  },
];

const slidesFeatures = [
  {
    feature: t("practical"),
    img: followYourselfFeature,
  },
  {
    feature: t("customizable"),
    img: academyFeature,
  },
  {
    feature: t("informative"),
    img: getCountryFeature,
  },
  {
    feature: t("fast"),
    img: featureAnother,
  },
  {
    feature: t("new-tech"),
    img: blogFeature,
  },
];

const slidesDifference = [
  {
    difference: t("data-exc"),
    img: cryptoDifBig,
    smallImg: cryptoDifSmall,
  },
  {
    difference: t("update"),
    img: chatDifBig,
    smallImg: chatDifSmall,
  },
  {
    difference: t("interaction"),
    img: foodDifBig,
    smallImg: foodDifSmall,
  },
  {
    difference: t("performance"),
    img: blogDifBig,
    smallImg: blogDifSmall,
  },
];

const slidesTech = [
  {
    technology: t("saas"),
    imgSmall: followYourselfSmallTech,
    img: followYourselfTechBig,
  },
  {
    technology: t("ssr"),
    imgSmall: getCountrySmallTech,
    img: getCountryTechBig,
  },
  {
    technology: t("paas"),
    imgSmall: academySmallTech,
    img: academyTechBig,
  },
  {
    technology: t("spa"),
    imgSmall: merchantileSmallTech,
    img: merchantileTechBig,
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
  bottom: 2%;
  left: 0;
  right: 0;
}
.feature,
.difference,
.tech {
  position: absolute;
  bottom: 10%;
  z-index: 999;
  background-color: rgba(0, 255, 0, 0.3);
}
.title {
  background-color: rgba(255, 255, 255, 0.3);
}
.link {
  text-decoration: none;
  color: #fff;
  border: 2px solid #fff;
  background-color: transparent;
}
.link:hover {
  border-color: #00e676;
  color: #00e676;
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
