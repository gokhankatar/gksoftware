<template>
  <div class="wrapper bg-black d-flex flex-column justify-center align-center">
    <div class="d-flex flex-column justify-center align-center ga-5">
      <div v-if="error.statusCode === 404" class="text-h3 text-sm-h1 text-center">
        404
      </div>
      <code v-if="error.statusCode === 404" class="text-subtitle-1 text-center"
        >"{{ error.url }}"</code
      >
      <p v-if="error.statusCode === 404" class="text-subtitle-1 text-sm-h3 text-center">
        {{ t("error.page-not-found") }}
      </p>
      <p class="text-h5 text-sm-h3 text-center" v-else>{{ t("error.error-msg") }}</p>
      <NuxtLinkLocale
        class="btn-return text-white cursor-pointer text-center pa-3 transition rounded-xl"
        :to="'/'"
        >{{ t("error.return-home") }}</NuxtLinkLocale
      >
    </div>
  </div>
</template>
<script lang="ts" setup>
const error = useError();
const { t } = useI18n();
</script>
<style scoped>
.wrapper {
  height: 100vh !important;
}
.btn-return {
  text-decoration: none;
  border: 1px solid #fff;
}
.btn-return:hover {
  background-color: red;
  border-color: red;
}
</style>
