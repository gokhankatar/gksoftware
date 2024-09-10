<template>
  <v-app-bar
    :class="isScrolledToBottom ? 'scrolled' : ''"
    class="bg-transparent transition-lg py-3 px-5 px-sm-10 px-md-15 rounded-lg"
    :elevation="0"
  >
    <template v-slot:prepend>
      <div class="d-flex justify-space-between align-center ga-5">
        <NuxtLinkLocale
          to="/"
          class="link transition d-flex justify-center align-center ga-2 ga-md-4"
        >
          <v-img v-if="!isScrolledToBottom" :src="logoImg" width="50" alt="Logo Image" />
          <v-img
            v-if="isScrolledToBottom"
            :src="logoImg"
            width="50"
            class="blackLogoImg rounded-xl"
            alt="Logo Image"
          />
          <span
            :class="isScrolledToBottom ? 'text-black' : ''"
            class="d-none d-md-flex text-h5 font-weight-bold text-md-h4"
            >GK SOFTWARE</span
          >
        </NuxtLinkLocale>

        <div class="ml-15 d-none d-sm-flex justify-center align-center ga-5">
          <NuxtLinkLocale
            :class="route.fullPath.includes('showcase') ? 'active-link' : ''"
            class="link link-site pa-2 rounded-lg transition"
            to="/showcase"
          >
            <span
              :class="isScrolledToBottom ? 'text-black' : ''"
              class="text-subtitle-1 link-text"
              >{{ t("showcase") }}</span
            >
          </NuxtLinkLocale>
          <NuxtLinkLocale
            :class="route.fullPath.includes('projects') ? 'active-link' : ''"
            class="link link-site pa-2 rounded-lg transition"
            to="/projects"
          >
            <span
              :class="isScrolledToBottom ? 'text-black' : ''"
              class="text-subtitle-1 link-text"
              >{{ t("projects") }}</span
            >
          </NuxtLinkLocale>
          <NuxtLinkLocale
            :class="route.fullPath.includes('resume') ? 'active-link' : ''"
            class="link link-site pa-2 rounded-lg transition"
            to="/resume"
          >
            <span
              :class="isScrolledToBottom ? 'text-black' : ''"
              class="text-subtitle-1 link-text"
              >{{ t("resume") }}</span
            >
          </NuxtLinkLocale>
        </div>
      </div>
    </template>

    <template v-slot:append>
      <div class="d-flex justify-space-between align-center ga-5">
        <v-icon
          id="lang"
          :color="isScrolledToBottom ? 'black' : ''"
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
        <v-icon
          @click="isOpenDrawer = !isOpenDrawer"
          :icon="isOpenDrawer ? 'mdi-close' : 'mdi-menu'"
          :color="isScrolledToBottom ? 'black' : ''"
          class="d-flex d-sm-none link-site rounded-lg pa-5 cursor-pointer"
        />

        <div class="ml-5 social-links d-none d-sm-flex justify-center align-center ga-3">
          <v-icon
            @click="openLinkedin"
            :color="isScrolledToBottom ? 'black' : ''"
            class="social-icon linkedin cursor-pointer transition-lg"
            icon="mdi-linkedin"
          />
          <v-icon
            @click="openGithub"
            :color="isScrolledToBottom ? 'black' : ''"
            class="social-icon github rounded-xl cursor-pointer transition-lg"
            icon="mdi-github"
          />
          <v-icon
            @click="openTwitter"
            :color="isScrolledToBottom ? 'black' : ''"
            class="social-icon twitter cursor-pointer transition-lg"
            icon="mdi-twitter"
          />
          <v-icon
            @click="openSpotify"
            :color="isScrolledToBottom ? 'black' : ''"
            class="social-icon spotify cursor-pointer transition-lg"
            icon="mdi-spotify"
          />
        </div>
      </div>
    </template>
  </v-app-bar>

  <v-navigation-drawer
    class="nav-drawer pa-10 d-flex d-sm-none"
    v-model="isOpenDrawer"
    location="right"
  >
    <template v-slot:prepend>
      <div class="d-flex flex-column justify-start align-center ga-5">
        <NuxtLinkLocale
          :class="route.fullPath.includes('showcase') ? 'active-link-responsive' : ''"
          class="link-responsive pa-2 rounded-lg transition"
          to="/showcase"
        >
          <span class="text-h5 text-uppercase">{{ t("showcase") }}</span>
        </NuxtLinkLocale>
        <NuxtLinkLocale
          :class="route.fullPath.includes('projects') ? 'active-link-responsive' : ''"
          class="link-responsive pa-2 rounded-lg transition"
          to="/projects"
        >
          <span class="text-h5 text-uppercase">{{ t("projects") }}</span>
        </NuxtLinkLocale>
        <NuxtLinkLocale
          :class="route.fullPath.includes('resume') ? 'active-link-responsive' : ''"
          class="link-responsive pa-2 rounded-lg transition"
          to="/resume"
        >
          <span class="text-h5 text-uppercase">{{ t("resume") }}</span>
        </NuxtLinkLocale>
      </div>
    </template>

    <template v-slot:append>
      <div class="social-links d-flex flex-column justify-center align-center ga-3">
        <v-btn
          @click="openLinkedin"
          variant="tonal"
          color="#0a66c2"
          class="cursor-pointer transition-lg rounded-lg"
          prepend-icon="mdi-linkedin"
          text="Linkedin"
          block
        />
        <v-btn
          @click="openGithub"
          variant="tonal"
          class="cursor-pointer transition-lg rounded-lg"
          prepend-icon="mdi-github"
          text="Github"
          block
        />
        <v-btn
          @click="openTwitter"
          variant="tonal"
          color="#00b0ff"
          class="twitter cursor-pointer transition-lg rounded-lg"
          prepend-icon="mdi-twitter"
          text="Twitter"
          block
        />
        <v-btn
          @click="openSpotify"
          variant="tonal"
          color="#3be477"
          class="cursor-pointer transition-lg rounded-lg"
          prepend-icon="mdi-spotify"
          text="Spotify"
          block
        />
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import logoImg from "~/assets/img/logo.png";

const isOpenDrawer = ref(false);
const isScrolledToBottom = ref(false);
const route = useRoute();
const { t, setLocale, locales, locale } = useI18n();

const openLinkedin = () => {
  let url = "https://tr.linkedin.com/in/g%C3%B6khan-katar-73169b252";
  window.open(url, "_blank");
};

const openTwitter = () => {
  let url = "https://x.com/gokhan_crypto";
  window.open(url, "_blank");
};

const openGithub = () => {
  let url = "https://github.com/gokhankatar";
  window.open(url, "_blank");
};

const openSpotify = () => {
  let url = "https://open.spotify.com/user/katar_gokhan?si=gXcEkGk0Sb65trNA3-aNog";
  window.open(url, "_blank");
};

onMounted(() => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      isScrolledToBottom.value = true;
    } else {
      isScrolledToBottom.value = false;
    }
  });
});
</script>

<style scoped>
@import url("/assets/css/main.css");

.nav-drawer {
  background-color: #212121;
  border: none;
}

.scrolled {
  background-color: #fff !important;
}

.blackLogoImg {
  background-color: black;
}

.link {
  text-decoration: none;
  color: #fff;
}

.link-site:hover .link-text {
  color: #fff !important;
}

.link-site:hover {
  background-color: #616161;
  color: #fff !important;
}

.link-responsive {
  color: #fff !important;
  text-decoration: none;
}

.social-icon {
  color: #9e9e9e;
}

.linkedin:hover {
  color: #0a66c2 !important;
}

.github:hover {
  color: #fff !important;
  background-color: black;
}

.twitter:hover {
  color: #00b0ff !important;
}

.spotify:hover {
  color: #3be477 !important;
}

.active-link {
  background-color: #424242 !important;
  color: #fff !important;
}

.active-link-responsive {
  background-color: #00e676;
  color: #fff;
}
</style>
