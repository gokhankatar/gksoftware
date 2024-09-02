<template>
  <h3 class="text-h3">projects</h3>
  <hr class="my-3" />
  <div class="d-flex flex-column ga-2">
    <v-card
      v-for="item of data"
      :key="item.id"
      class="card d-flex flex-column align-start ga-2 pa-2 rounded-lg"
    >
      <v-card-title>{{ item.title }}</v-card-title>
      <v-card-text>{{ item.description }}</v-card-text>
      <NuxtLinkLocale
        class="link rounded-lg pa-3"
        :to="{
          path: `/projects/${item.id}`,
          query: {
            title: item.title,
            description: item.description,
            link: item.link,
            technologies: item.technologies,
          },
        }"
      >
        see this project</NuxtLinkLocale
      >
    </v-card>
  </div>
</template>
<script lang="ts" setup>
const { data } = await useFetch("/api/projects");
</script>
<style scoped>
.card {
  position: relative;
}

.link {
  position: absolute;
  bottom: 2%;
  right: 2%;
  text-decoration: none;
  border: 1px solid;
}
</style>
