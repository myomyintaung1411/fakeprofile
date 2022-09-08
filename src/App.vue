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
html{
  scroll-behavior: smooth;
}
*{
  box-sizing: border-box;
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
}
</style>