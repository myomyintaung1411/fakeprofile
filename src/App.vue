<script setup>
</script>

<template>
  <div class="app">
    <main>
      <router-view />
    </main>
  </div>
</template>

<style>
:root {
  --swiper-navigation-color: white;
}

html {
  scroll-behavior: smooth;
}

.swiper-slide {
  height: 100%;
  overflow: auto;
}

* {
  box-sizing: border-box;
}

* {
  transition: all 1s linear;
}

body {
  padding: 0;
  margin: 0;
  font-size: 16px;
  line-height: 1.7;
  font-family: "Open Sans", sans-serif;
  @apply bg-gray-50;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  /* color:rgb(196, 146, 100) */
}

.bounce-enter-active {
  transition: all 0.3s ease-out;
}

.bounce-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.bounce-enter-from,
.bounce-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.5s ease-out;
}

.fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
  transform: translateY(60px);
  opacity: 0;
}
</style>