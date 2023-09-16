<template>
  <div class="w-full h-full bg-gray-50 relative">
    <Header ></Header>
    <div class="relative">
      <router-view></router-view>
    </div>
    <div class="hidden sm:block">
      <Footer></Footer>
    </div>
  </div>
</template>
  
  
<script setup>
import { onMounted, ref } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>
  
<style  scoped>

</style>