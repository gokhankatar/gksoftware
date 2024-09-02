<template>
  <h3 class="text-h3">projects</h3>
  <hr class="mt-3 mb-10" />
  <v-row class="d-flex">
    <v-col cols="12" sm="6" md="4" v-for="item of data" :key="item.id">
      <v-card
        class="card cursor-pointer transition d-flex flex-column align-start ga-2 pa-2 rounded-lg"
        height="200"
      >
        <v-card-title>{{ t(item.title) }}</v-card-title>
        <v-card-text>{{ truncateText(t(item.description), 250) }}</v-card-text>
        <NuxtLinkLocale
          class="link transition rounded-lg pa-2"
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
          <v-icon size="small" icon="mdi-open-in-new" />
        </NuxtLinkLocale>
      </v-card>
    </v-col>
  </v-row>
</template>
<script lang="ts" setup>
const { t } = useI18n();
const { data } = await useFetch("/api/projects");
const truncateText = (text: string, length: number) => {
  if (text.length <= length) {
    return text;
  }
  return text.substring(0, length) + "...";
};
</script>
<style scoped>
.card {
  position: relative;
  border: 3px solid #000;
}

.card:hover{
  border-color: #469E49;
}

.link {
  position: absolute;
  bottom: 5%;
  right: 2%;
  text-decoration: none;
  border: 1px solid;
  color: #469E49;
  border: 1px solid #469E49;
}
.link:hover{
  background-color: #469E49;
  color: #fff;
}
</style>
