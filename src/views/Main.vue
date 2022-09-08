<template>
    <div class="w-full h-full bg-gray-50">
      <Header></Header>
      <div class="relative">
        <router-view></router-view>
      </div>
      <Footer></Footer>
    </div>
  </template>
  
  
  <script setup>
  import { onMounted } from "vue";
  import Header from "@/components/Header.vue";
  import Footer from "@/components/Footer.vue";
  
  
  
  
  
  onMounted(() => {
  });
  </script>
  
  <style  scoped>
  </style>