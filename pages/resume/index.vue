<template>
  <hr class="my-10" />
  <v-row class="mt-10 d-flex ga-2 justify-space-evenly align-center">
    <img :src="profileImg" class="img d-none d-sm-flex" :width="300" cover />
    <img :src="profileImg" class="img d-flex d-sm-none" :width="200" cover />
    <div
      class="content d-flex flex-column align-center align-sm-start ga-1 ga-sm-3 mt-5 mt-sm-0"
    >
      <p class="name text-subtitle-1 text-md-h5 text-lg-h3">{{ data?.general.name }}</p>
      <p class="title transition cursor-pointer text-h5 text-md-h4 text-lg-h1">
        {{ data?.general.title }}
      </p>
      <p class="d-flex justify-center align-center ga-2">
        <span class="name text-subtitle-1 text-md-h5 text-lg-h4"
          >{{ data?.general.email }}
        </span>
        <v-icon icon="mdi-email" size="large" />
      </p>
    </div>
  </v-row>

  <hr class="my-10" />

  <v-row class="my-5 d-flex flex-column ga-5">
    <div class="title cursor-pointer d-flex justify-start align-center ga-2 ga-md-5">
      <v-icon icon="mdi-school" size="x-large" />
      <p class="transition text-h5 text-md-h3">{{ t("education") }}</p>
    </div>

    <hr class="line transition w-25" />

    <div
      v-for="item of data?.education"
      :key="item.degree"
      class="d-flex justify-start align-center ga-2"
    >
      <v-icon class="d-none d-sm-flex" icon="mdi-school" size="large" />
      <p class="text-subtitle-1 text-md-h5">
        {{
          t(item.institution) +
          " " +
          t(item.school) +
          " " +
          t(item.degree) +
          " " +
          item.time
        }}
      </p>
    </div>
  </v-row>

  <v-row class="mt-15 d-flex flex-column ga-5">
    <div class="title cursor-pointer d-flex justify-start align-center ga-2 ga-md-5">
      <v-icon icon="mdi-code-brackets" size="x-large" />
      <p class="transition text-h5 text-md-h3">{{ t("projects") }}</p>
    </div>

    <hr class="line transition w-25" />

    <div
      v-for="item of data?.projetcs"
      :key="item.link"
      class="d-flex justify-start align-center ga-2"
    >
      <v-icon icon="mdi-code-brackets" size="large" />
      <a class="link text-subtitle-1 text-md-h5" :href="item.link" target="_blank">{{
        t(item.name)
      }}</a>
    </div>
  </v-row>

  <v-row class="mt-15 d-flex flex-column ga-5">
    <div class="title cursor-pointer d-flex justify-start align-center ga-2 ga-md-5">
      <v-icon icon="mdi-certificate" size="x-large" />
      <p class="transition text-h5 text-md-h3">{{ t("certificates") }}</p>
    </div>

    <hr class="line transition w-25" />

    <div
      v-for="item of data?.certificates"
      :key="item.name"
      class="d-flex justify-start align-center ga-2"
    >
      <v-icon icon="mdi-certificate" size="large" />
      <p class="text-subtitle-1 text-md-h5">{{ t(item.name) }}</p>
    </div>
  </v-row>

  <v-row class="mt-15 d-flex flex-column ga-5">
    <div class="title cursor-pointer d-flex justify-start align-center ga-2 ga-md-5">
      <v-icon icon="mdi-network" size="x-large" />
      <p class="transition text-h5 text-md-h3">{{ t("experiences") }}</p>
    </div>

    <hr class="line transition w-25" />

    <div
      v-for="item of data?.experiences"
      :key="item.experience"
      class="d-flex justify-start align-center ga-2"
    >
      <v-icon icon="mdi-network" size="large" />
      <p class="text-subtitle-1 text-md-h5">
        {{ t(item.experience) + " " + item.time }}
      </p>
    </div>
  </v-row>

  <v-row class="mt-15 d-flex flex-column ga-5">
    <div class="title cursor-pointer d-flex justify-start align-center ga-2 ga-md-5">
      <v-icon icon="mdi-language-javascript" size="x-large" />
      <p class="transition text-h5 text-md-h3">{{ t("skills") }}</p>
    </div>

    <hr class="line transition w-25" />

    <div class="d-flex flex-wrap ga-2">
      <v-chip
        v-for="item of data?.skills"
        :key="item"
        class="skill transition cursor-pointer"
        variant="outlined"
        color="green-accent-3"
        size="large"
        :text="item"
      />
    </div>
  </v-row>

  <v-row class="mt-15 d-flex flex-column ga-5">
    <div class="title-next cursor-pointer d-flex justify-start align-center ga-2 ga-md-5">
      <v-icon icon="mdi-bullseye-arrow" size="x-large" />
      <p class="transition text-h5 text-md-h3">{{ t("what-next") }}</p>
    </div>

    <hr class="line transition w-25" />

    <div class="d-flex flex-wrap ga-2">
      <v-chip
        v-for="item of data?.whatNext"
        :key="item"
        class="skill-next transition cursor-pointer"
        variant="outlined"
        color="light-blue"
        size="large"
        :text="item"
      />
    </div>
  </v-row>
</template>

<script lang="ts" setup>
import profileImg from "~/assets/img/profile.jpg";
const { t } = useI18n();
const { data } = await useFetch("/api/resume");
useHead({
  title: `GK SOFTWARE | ${t("resume")}`,
});
</script>
<style scoped>
@import url("/assets/css/main.css");

.img {
  border-radius: 50%;
}
.title:hover {
  color: #00c853;
}

.title-next:hover {
  color: #03a9f4;
}

.link {
  position: relative;
  text-decoration: none;
  color: #fff;
}

.link::before {
  content: "";
  position: absolute;
  bottom: -5%;
  left: 0;
  width: 0;
  height: 0.2rem;
  background-color: #fff;
  transition: all 0.3s ease-in-out;
}

.link:hover::before {
  width: 100%;
}
.skill:hover {
  border-color: #00c853;
  background-color: #00c853;
  color: #fff !important;
}
.skill-next:hover {
  border-color: #03a9f4;
  background-color: #03a9f4;
  color: #fff !important;
}
</style>
