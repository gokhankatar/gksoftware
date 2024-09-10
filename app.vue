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

const isLoading = ref(true);

onMounted(() => {
  isLoading.value = false;
});
</script>
<style>
@import url(assets/css/main.css);
</style>
