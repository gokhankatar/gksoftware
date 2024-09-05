<template>
  <v-row class="mt-5 mt-sm-0">
    <NuxtLinkLocale
      class="back-link pa-1 pa-sm-3 rounded-lg transition"
      to="/projects"
      variant="tonal"
      rounded="lg"
    >
      <v-icon icon="mdi-arrow-left" />
      {{ t("go-back") }}</NuxtLinkLocale
    >
  </v-row>
  <hr class="my-10" />
  <v-row>
    <v-col cols="12" md="12" lg="6">
      <v-img class="w-100 rounded-lg" :src="getImg(route.query.title as string)" />
    </v-col>
    <v-col class="d-flex flex-column ga-2" cols="12" md="12" lg="6">
      <p class="text-subtitle-1 text-md-h4">
        <strong>{{ t("title") }} : </strong>{{ t(route.query.title as string) }}
      </p>
      <p class="text-subtitle-1">
        <strong>{{ t("description") }} : </strong
        >{{ t(route.query.description as string) }}
      </p>

      <div class="d-flex flex-column ga-2">
        <p class="text-subtitle-1">
          <strong>{{ t("technologies") }} : </strong>
        </p>
        <hr class="mb-4" />
        <div class="d-flex ga-3 flex-wrap">
          <v-chip
            v-for="item of route.query.technologies"
            class="chip transition cursor-pointer"
            variant="outlined"
            color="green"
            :text="item as string"
          />
        </div>
      </div>
      <v-btn
        class="mt-10"
        :href="route.query.link as string"
        target="_blank"
        variant="tonal"
        append-icon="mdi-open-in-new"
        :text="t('see-this-project')"
      />
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import followYourself from "~/assets/img/followYourself.png";
import academy from "~/assets/img/academy.png";
import getCountry from "~/assets/img/getCountry.png";
import blog from "~/assets/img/blog.png";
import gksoftware from "~/assets/img/gksoftware.png";
import chat from "~/assets/img/chat.png";
import merchantile from "~/assets/img/merchantile.png";
import crypto from "~/assets/img/crypto.png";
import food from "~/assets/img/food.png";
import error from "~/assets/img/error.png";

const { t } = useI18n();
const route = useRoute();

const getImg = (name: string) => {
  if (name === "follow-yourself") {
    return followYourself;
  } else if (name === "get-country") {
    return getCountry;
  } else if (name === "crypto-app") {
    return crypto;
  } else if (name === "food-app") {
    return food;
  } else if (name === "academy") {
    return academy;
  } else if (name === "blog-app") {
    return blog;
  } else if (name === "merchantile-app") {
    return merchantile;
  } else if (name === "chat-app") {
    return chat;
  } else if (name === "gksoftware") {
    return gksoftware;
  } else {
    return error;
  }
};
</script>

<style scoped>
@import url("/assets/css/main.css");

.back-link {
  text-decoration: none;
  color: #d77a03;
  border: 2px solid #d77a03;
  float: right;
}
.back-link:hover {
  background-color: #d77a03;
  color: #fff;
}
.chip:hover {
  border-color: #469e49 !important;
  background-color: #469e49 !important;
  color: #fff !important;
}
</style>
