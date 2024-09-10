<template>
  <div class="wrapper fill-height d-flex justify-center align-center">
    <div class="loader">
      <div class="box">
        <div class="logo"></div>
      </div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
    </div>
  </div>
</template>
<style scoped>
.loader {
  height: 15rem;
  aspect-ratio: 1;
  background: black;
  position: relative;
}
.logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  inset: 0;
  display: grid;
  place-content: center;
  padding: 30%;
}
.box {
  position: absolute;
  background: rgba(100, 100, 100, 0.15);
  background: linear-gradient(
    0deg,
    rgba(50, 50, 50, 0.2) 0%,
    rgba(100, 100, 100, 0.2) 100%
  );
  border-radius: 50%;
  border-top: 1px solid rgba(100, 100, 100, 1);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 10px -0px;
  backdrop-filter: blur(5px);
  animation: ripple 2s infinite ease-in-out;
}

.box:nth-child(1) {
  inset: 40%;
  z-index: 99;
}
.box:nth-child(2) {
  inset: 30%;
  z-index: 98;
  border-color: rgba(100, 100, 100, 0.8);
  animation-delay: 0.2s;
}
.box:nth-child(3) {
  inset: 20%;
  z-index: 97;
  border-color: rgba(100, 100, 100, 0.6);
  animation-delay: 0.4s;
}
.box:nth-child(4) {
  inset: 10%;
  z-index: 96;
  border-color: rgba(100, 100, 100, 0.4);
  animation-delay: 0.6s;
}
.box:nth-child(5) {
  inset: 0%;
  z-index: 95;
  border-color: rgba(100, 100, 100, 0.2);
  animation-delay: 0.8s;
}

@keyframes ripple {
  0% {
    transform: scale(1);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 10px -0px;
  }
  50% {
    transform: scale(1.3);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 30px 20px -0px;
  }
  100% {
    transform: scale(1);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 10px -0px;
  }
}
</style>
