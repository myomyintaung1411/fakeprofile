<template>
    <!-- <div class="w-full bg-white hidden sm:block ">
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
                        <router-link to="/contact" aria-label="contact" title="contact"
                            class="sm:px-4 py-2 font-medium tracking-widest text-gray-800 transition-colors duration-200  hover:text-[#1d4ed8]"
                            :class=" activeRoute === '/contact' ? 'activeTab' : '' " @click="TabClick(4)">资讯动态</router-link>
                    </li>

                    <li>
                        <router-link to="/info" aria-label="company info" title="company info"
                            class="sm:px-4 py-2 font-medium tracking-widest text-gray-800 transition-colors duration-200   hover:text-[#1d4ed8]"
                            :class=" activeRoute === '/info' ? 'activeTab' : '' " @click="TabClick(3)">挚诚文化</router-link>
                    </li>
                    <li>
                        <router-link to="/about" aria-label="about us" title="about us"
                            class="sm:px-4 py-2 font-medium tracking-widest text-gray-800 transition-colors duration-200  hover:text-[#1d4ed8]"
                            :class="activeRoute === '/about' ? 'activeTab' : '' " @click="TabClick(2)">关于挚诚</router-link>
                    </li>

                </ul>
            </div>
        </div>
    </div> -->
    <div class="sm:hidden  w-full fixed top-0 z-10" >
     <div  class="h-12 flex items-center px-4 justify-between   " 
     :class=" scY > 30 || isMenuOpen  ? 'bg-white' : ' bg-transparent'"
     
       > 
       <!-- {{swiperIndex}} -->
       <!-- {{scY}} -->
        <img v-if=" activeRoute === '/about' || isMenuOpen || swiperIndex == 2 || scY > 30"  src="@/assets/mobile/1.png" alt="" class="w-[60px]">
        <img v-else  src="@/assets/mobile/2.png" alt="" class="w-[60px]">
        <div @click="mobileMenuOpen">
            <button v-if="!isMenuOpen" aria-label="Open Menu" title="Open Menu"
                class="p-2 text-gray-600 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline" >
                <svg class="w-6 " viewBox="0 0 24 24">
                    <path fill="currentColor" d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z" />
                    <path fill="currentColor" d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z" />
                    <path fill="currentColor" d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z" />
                </svg>
            </button>
            <button v-if="isMenuOpen" aria-label="Close Menu" title="Close Menu"
                class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                >
                <svg class="w-6 text-gray-600" viewBox="0 0 24 24">
                    <path fill="currentColor"
                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z" />
                </svg>
            </button>
        </div>
     </div>
     <transition name="bounce" appear>
     
<div v-if="isMenuOpen">

    <nav @click="isMenuOpen = false" style="background:rgba(255,255,255,0.9)" class="h-[50vh] ">
        <ul class="space-y-4 flex  items-center flex-col ">

            <li>
                <router-link to="/"
                    :class="activeRoute === '/home' ? ' px-0  text-[#b9804f] border-b-[3px]  border-[#b9804f]' : 'text-[#242424]'"
                    aria-label="Home" title="Home"
                    class="font-medium block hover:bg-gray-700  	 px-3 py-2 tracking-wide transition-colors duration-200">
                    首页
                </router-link>
            </li>
            <li>
                <router-link to="/about"
                    :class="activeRoute === '/about' ? 'text-[#b9804f]  px-0 border-b-[3px] border-w[30px] border-[#b9804f]' : 'text-[#242424]'"
                    aria-label="about" title="about"
                    class="font-medium tracking-wide block hover:bg-gray-700 px-3 py-2 transition-colors duration-200">
                    关于挚诚
                </router-link>
            </li>

            <li>
                <router-link to="/news"
                    :class="activeRoute === '/news' ? 'text-[#b9804f]  px-0 border-b-[3px] border-[#b9804f]' : 'text-[#242424]'"
                    aria-label="news" title="news"
                    class="font-medium tracking-wide block hover:bg-gray-700 px-3 py-2 transition-colors duration-200">
                    资讯动态
                </router-link>
            </li>

            <li>
                <router-link to="/info"
                    :class="activeRoute === '/info' ? 'text-[#b9804f]  px-0 border-b-[3px] border-[#b9804f]' : 'text-[#242424]'"
                    aria-label="info" title="info"
                    class="font-medium text-base block tracking-wide hover:bg-gray-700 px-3 py-2 transition-colors duration-200">
                    战略发展
                </router-link>
            </li>
            <li>
                <router-link to="/contact"
                    :class="activeRoute === '/contact' ? 'text-[#b9804f]  px-0 border-b-[3px] border-[#b9804f]' : 'text-[#242424]'"
                    aria-label="contact" title="contact"
                    class="font-medium tracking-wide block hover:bg-gray-700 px-3 py-2 transition-colors duration-200">
                    加入我们
                </router-link>
            </li>

        </ul>
    </nav>
</div>
     </transition>
    </div>
</template>
  
  
<script setup>
import { onMounted, ref, watch,computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
const activeRoute = ref("");
const scTimer = ref(0);
const scY = ref(0);
const router = useRouter();
const route = useRoute();
let activeTab = ref(1);
const isMenuOpen = ref(false);

const store = useStore()

const swiperIndex = computed(() => store.getters["app/SwiperIndex"]);

watch(
    () => route.path,
    () => {
        console.log(route.path, "watching");
        activeRoute.value = route.path;
    },
    { immediate: true, deep: true }
);

const mobileMenuOpen = () => {
    console.log("hello");
      isMenuOpen.value = !isMenuOpen.value;
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

const TabClick = (n) =>{
    console.log(n);
    activeTab.value = n
}
function handleScroll() {
  if (scTimer.value) return;
  scTimer.value = setTimeout(() => {
    scY.value = window.scrollY;
    clearTimeout(scTimer.value);
    scTimer.value = 0;
  }, 100);
}

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});
</script>
  
<style  scoped>
.activeTab {
    @apply border-b-2 border-[#1d4ed8] text-[#1d4ed8];
}
</style>