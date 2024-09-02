<template>
  <div class="video-background">
    <video autoplay muted loop playsinline>
      <source :src="bgVideo" type="video/mp4" />
    </video>
    <div class="content d-flex flex-column ga-1 ga-sm-2">
      <h1 class="text-h5 text-sm-h3 text-md-h1">GK SOFTWARE</h1>
      <h3 class="text-caption text-sm-subtitle-1 text-center text-sm-end">
        Web Applications
      </h3>
    </div>
    <v-icon
      class="sound-icon pa-5 rounded-xl transition-lg cursor-pointer"
      @click="toggleAudio"
      :icon="isPlaying ? 'mdi-volume-medium' : 'mdi-volume-off'"
    />
  </div>
</template>
<script lang="ts" setup>
import bgVideo from "~/assets/videos/bg-general.mp4";
import bgAudio from "~/assets/sounds/bg-sound.mp3";
import { onMounted, ref } from "vue";

const isPlaying = ref(true);
const bgSound = ref<HTMLAudioElement | null>(null);
const { t } = useI18n(
  
);
useHead({
  title: `GK SOFTWARE | ${t("home")}`,
});

const toggleAudio = () => {
  if (bgSound.value) {
    isPlaying.value = !isPlaying.value;
    if (isPlaying.value) {
      bgSound.value.play();
    } else {
      bgSound.value.pause();
    }
  }
};

onMounted(() => {
  bgSound.value = new Audio(bgAudio);
  bgSound.value.loop = true;
  bgSound.value.volume = 0.5;
  bgSound.value.play().catch((error) => {
    isPlaying.value = false;
    console.log(error.message);
  });
});
</script>
<style scoped>
@import url("/assets/css/main.css");

.video-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 2;
}

.video-background video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  color: white;
}
.sound-icon {
  position: absolute;
  bottom: 5%;
  left: 5%;
  border: 1px solid #616161;
  color: #616161;
}
.sound-icon:hover {
  border-color: #fff;
  color: #fff;
}
</style>
