<template>
  <v-app theme="dark">
    <v-main>
      <Loading v-if="isLoading" />
      <v-container v-if="!isLoading" class="pa-5 pa-sm-10 pa-md-15">
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </v-container>
    </v-main>
  </v-app>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import ogImg from "~/assets/img/ogImg.png";

const isLoading = ref(true);

const { t } = useI18n();

useSeoMeta({
  title: t("seo.title"),
  ogTitle: t("seo.title"),
  description: t("seo.description"),
  ogDescription: t("seo.ogDescription"),
  ogImage: ogImg,
  twitterCard: "summary_large_image",
  twitterImage: ogImg,
});

onMounted(() => {
  isLoading.value = false;
});
</script>
<style>
@import url(assets/css/main.css);
</style>
