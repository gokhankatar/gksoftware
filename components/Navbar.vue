<template>
  <v-app-bar class="bg-transparent py-3 px-5 px-sm-10 px-md-15" :elevation="0">
    <template v-slot:prepend>
      <div class="d-flex justify-space-between align-center ga-5">
        <NuxtLinkLocale
          to="/"
          class="link transition d-flex justify-center align-center ga-2 ga-md-4"
        >
          <v-img :src="logoImg" width="50" alt="Logo Image" />
          <span class="d-none d-md-flex text-h5 font-weight-bold text-md-h4"
            >GK SOFTWARE</span
          >
        </NuxtLinkLocale>

        <div class="ml-15 d-none d-sm-flex justify-center align-center ga-5">
          <NuxtLinkLocale
            :class="route.fullPath.includes('showcase') ? 'active-link' : ''"
            class="link link-site pa-2 rounded-lg transition"
            to="/showcase"
          >
            <span class="text-subtitle-1">{{ t("showcase") }}</span>
          </NuxtLinkLocale>
          <NuxtLinkLocale
            :class="route.fullPath.includes('projects') ? 'active-link' : ''"
            class="link link-site pa-2 rounded-lg transition"
            to="/projects"
          >
            <span class="text-subtitle-1">{{ t("projects") }}</span>
          </NuxtLinkLocale>
          <NuxtLinkLocale
            :class="route.fullPath.includes('resume') ? 'active-link' : ''"
            class="link link-site pa-2 rounded-lg transition"
            to="/resume"
          >
            <span class="text-subtitle-1">{{ t("resume") }}</span>
          </NuxtLinkLocale>
        </div>
      </div>
    </template>

    <template v-slot:append>
      <div class="d-flex justify-space-between align-center ga-5">
        <v-icon
          id="lang"
          class="link-site rounded-lg pa-5 cursor-pointer"
          icon="mdi-translate"
        />
        <v-menu activator="#lang">
          <v-list>
            <v-list-item v-for="(item, index) in locales" :key="index">
              <v-list-item-title
                class="link cursor-pointer"
                @click="setLocale(item.code)"
                >{{ item.name }}</v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
        <v-icon icon="mdi-menu" class="d-flex d-sm-none link-site rounded-lg pa-5 cursor-pointer"/>

        <div class="ml-5 social-links d-none d-sm-flex justify-center align-center ga-3">
          <v-icon
            class="social-icon linkedin cursor-pointer transition-lg"
            icon="mdi-linkedin"
          />
          <v-icon
            class="social-icon github cursor-pointer transition-lg"
            icon="mdi-github"
          />
          <v-icon
            class="social-icon twitter cursor-pointer transition-lg"
            icon="mdi-twitter"
          />
          <v-icon
            class="social-icon spotify cursor-pointer transition-lg"
            icon="mdi-spotify"
          />
        </div>
      </div>
    </template>

  </v-app-bar>
</template>
<script lang="ts" setup>
import logoImg from "~/assets/img/logo.png";

const route = useRoute();
const { t, setLocale, locales, locale } = useI18n();
</script>
<style scoped>
@import url("/assets/css/main.css");

.link {
  text-decoration: none;
  color: #fff;
}
.link-site:hover {
  background-color: #616161;
}
.social-icon {
  color: #9e9e9e;
}
.linkedin:hover {
  color: #0a66c2;
}
.github:hover {
  color: #fff;
}
.twitter:hover {
  color: #00b0ff;
}
.spotify:hover {
  color: #3be477;
}
.active-link {
  background-color: #424242;
  color: #fff;
}
</style>
