<template>
  <hr class="my-10" />
  <v-row class="mt-10 d-flex ga-2 justify-space-evenly align-center">
    <img :src="profileImg" class="img d-none d-sm-flex" :width="400" cover />
    <img :src="profileImg" class="img d-flex d-sm-none" :width="200" cover />
    <div
      class="content d-flex flex-column align-center align-sm-start ga-1 ga-sm-3 mt-5 mt-sm-0"
    >
      <p class="name text-subtitle-1 text-md-h5 text-lg-h3">Gokhan Katar</p>
      <p class="title transition cursor-pointer text-h5 text-md-h4 text-lg-h1">
        Front End Developer
      </p>
      <p class="d-flex justify-center align-center ga-2">
        <span class="name text-subtitle-1 text-md-h5 text-lg-h4"
          >katar_gokhan@gmail.com
        </span>
        <v-icon icon="mdi-email" size="large" />
      </p>
    </div>
  </v-row>
  <hr class="my-10" />
</template>

<script lang="ts" setup>
import profileImg from "~/assets/img/profile.jpg";
const { t } = useI18n();

useHead({
  title: `GK SOFTWARE | ${t("resume")}`,
});
</script>
<style scoped>
@import url("/assets/css/main.css");

.img {
  border-radius: 50%;
}
</style>
