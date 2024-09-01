<template>
  <NuxtLinkLocale
    class="back-link pa-3 rounded-lg transition"
    to="/projects"
    variant="tonal"
    rounded="lg"
    >go back</NuxtLinkLocale
  >
  <div class="bg-primary pa-3 mt-15">
    {{ route.params }}
  </div>
  <div class="bg-primary pa-3">
    {{ route.query }}
  </div>
</template>
<script lang="ts" setup>
const route = useRoute();
</script>
<style scoped>
@import url("/assets/css/main.css");

.back-link {
  text-decoration: none;
  color: red;
  border: 2px solid red;
  float: right;
}
.back-link:hover {
  background-color: red;
  color: #fff;
}
</style>
