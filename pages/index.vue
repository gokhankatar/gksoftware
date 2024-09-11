<template>
  <div class="video-background">
    <video autoplay muted loop playsinline>
      <source :src="bgVideo" type="video/mp4" />
    </video>
    <div class="content d-flex flex-column ga-1 ga-sm-2">
      <div class="txt text-h4 text-md-h1" id="txt">
        <b>G</b><b>K</b><b>S</b><b>O</b><b>F</b><b>T</b><b>W</b><b>A</b><b>R</b><b>E</b>
      </div>
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
const { t } = useI18n();
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

#txt {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-family: sans-serif;
  letter-spacing: 3.5px;
  font-weight: 700;
  position: relative;
  transform-style: preserve-3d;
  perspective: 8rem;
  -webkit-transform-style: preserve-3d;
  -webkit-perspective: 8rem;
}

#txt > b {
  box-shadow: 0 0.4rem 0.3rem -0.3rem #fff;
  color: #fff;
  background: linear-gradient(#aaf, #acf, #afc);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transform-origin: bottom;
  transform: rotateX(-85deg);
  -webkit-transform-origin: bottom;
  -webkit-transform: rotateX(-85deg);
  animation: getUp 8s infinite;
}

#txt > b:nth-child(2) {
  animation-delay: 0.25s;
}
#txt > b:nth-child(3) {
  animation-delay: 0.5s;
}
#txt > b:nth-child(4) {
  animation-delay: 0.75s;
}
#txt > b:nth-child(5) {
  animation-delay: 1s;
}
#txt > b:nth-child(6) {
  animation-delay: 1.25s;
}
#txt > b:nth-child(7) {
  animation-delay: 1.5s;
}
#txt > b:nth-child(8) {
  animation-delay: 1.75s;
}
#txt > b:nth-child(9) {
  animation-delay: 1.85s;
}

#txt > b:nth-child(10) {
  animation-delay: 1.95s;
}

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

@keyframes getUp {
  10%,
  50% {
    transform: rotateX(0);
  }
  0%,
  60%,
  100% {
    transform: rotateX(-85deg);
  }
}
</style>
