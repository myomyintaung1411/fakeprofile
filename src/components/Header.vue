<template>
    <div class="w-full bg-white ">
        <div class="px-4 py-1 mx-auto  sm:max-w-xl md:max-w-screen-md h-32 lg:max-w-screen-xl md:px-0 lg:px-8">
            <div class="relative sm:flex items-center justify-center   h-full">
                <a href="/" aria-label="Our Company Logo" title="Our Company Logo" class="inline-flex items-center">
                    <img src="@/assets/1/1.png" alt="logo" draggable="false"
                        class=" w-48 md:w-32 lg:w-[70%] h-fit " />
                </a>
                <ul
                    class="items-center flex space-x-6 justify-center     md:flex md:space-x-4 lg:space-x-20 lg:flex md:ml-32 whitespace-nowrap">
                    <li>
                        <router-link to="/" aria-label="Home" title="Home"
                            class="sm:px-4 py-2 font-medium  tracking-widest text-gray-800  transition-colors duration-200 "
                            style="letter-spacing:3px" :class="activeRoute === '/home' ? 'activeTab' : ''" @click="TabClick(1)">团结</router-link>
                    </li>
                    <li>
                        <router-link to="/about" aria-label="about us" title="about us"
                            class="sm:px-4 py-2 font-medium tracking-widest text-gray-800 transition-colors duration-200  hover:text-[#1d4ed8]"
                            :class="activeRoute === '/about' ? 'activeTab' : '' " @click="TabClick(2)">关于我们</router-link>
                    </li>
                    <li>
                        <router-link to="/info" aria-label="company info" title="company info"
                            class="sm:px-4 py-2 font-medium tracking-widest text-gray-800 transition-colors duration-200   hover:text-[#1d4ed8]"
                            :class=" activeRoute === '/info' ? 'activeTab' : '' " @click="TabClick(3)">挚诚文化</router-link>
                    </li>
                    <li>
                        <router-link to="/contact" aria-label="contact" title="contact"
                            class="sm:px-4 py-2 font-medium tracking-widest text-gray-800 transition-colors duration-200  hover:text-[#1d4ed8]"
                            :class=" activeRoute === '/contact' ? 'activeTab' : '' " @click="TabClick(4)">资讯动态</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
  
  
<script setup>
import { onMounted, ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
const activeRoute = ref("");
const router = useRouter();
const route = useRoute();
let activeTab = ref(1);
watch(
    () => route.path,
    () => {
        console.log(route.path, "watching");
        activeRoute.value = route.path;
    },
    { immediate: true, deep: true }
);

const TabClick = (n) =>{
    console.log(n);
    activeTab.value = n
}

onMounted(() => {
});
</script>
  
<style  scoped>
.activeTab {
    @apply border-b-2 border-[#1d4ed8] text-[#1d4ed8];
}
</style>