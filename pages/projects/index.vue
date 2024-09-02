<template>
  <h3 class="text-h3">projects</h3>
  <hr class="mt-3 mb-10" />
  <v-row class="d-flex">
    <v-col cols="12" sm="6" md="4" v-for="item of data" :key="item.id">
      <v-card
        class="card cursor-pointer transition d-flex flex-column align-start ga-2 pa-2 rounded-lg"
        height="230"
      >
        <v-card-title>{{ t(item.title) }}</v-card-title>
        <v-card-text>{{ truncateText(t(item.description), 250) }}</v-card-text>
        <v-tooltip :text="t('go-to-project')" location="left">
          <template v-slot:activator="{ props }">
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
              v-bind="props"
            >
              <v-icon size="small" icon="mdi-open-in-new" />
            </NuxtLinkLocale>
          </template>
        </v-tooltip>
        <v-tooltip :text="t('clone')" location="right">
          <template v-slot:activator="{ props }">
            <v-icon
              class="copy-icon d-none pa-5 transition cursor-pointer rounded-lg"
              size="small"
              icon="mdi-content-copy"
              v-bind="props"
            />
          </template>
        </v-tooltip>
      </v-card>
    </v-col>
  </v-row>
</template>
<script lang="ts" setup>
const { t } = useI18n();
useHead({
  title: `GK SOFTWARE | ${t("projects")}`,
});
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

.card:hover {
  background-color: rgba(255, 255, 255, 0.2);
  border-color: #469e49;
}
.card:hover .link {
  border-color: #469e49;
  color: #469e49;
}
.copy-icon {
  position: absolute;
  bottom: 5%;
  left: 2%;
  border: 1px solid #00e676;
  color: #00e676;
}
.copy-icon:hover {
  background-color: #00e676;
  color: #fff;
}
.card:hover .copy-icon {
  display: flex !important;
}
.link {
  position: absolute;
  bottom: 5%;
  right: 2%;
  text-decoration: none;
  border: 1px solid #424242;
  color: #424242;
  border: 1px solid #424242;
}
.link:hover {
  background-color: #469e49 !important;
  color: #fff !important;
}
</style>
