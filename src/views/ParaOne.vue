<script setup>
   import { ref,onMounted } from 'vue'
   import { useRouter, useRoute } from "vue-router";
import P1 from "../components/P1.vue";
import P2 from "../components/P2.vue";
import P3 from "../components/P3.vue";
import P4 from "../components/P4.vue";

const router = useRouter();
const route = useRoute();

const show = ref('')
   show.value = route.query.id
   console.log(show.value,"leeeeee");
</script>
    
<template>
    <div class="bg-gray-100 max-w-lg mx-auto h-screen sm:hidden">
        <div class="bg_img">
            <div
                class="text-[rgba(196,146,100)] text-center uppercase text-3xl flex flex-col justify-center items-center h-full ">
                <p class=" opacity-70 m-0 p-0 text-gray-500">Dyanmic</p>
                <p class=" font-bold -mt-[10px] p-0">资讯动态</p>
                <p class=" opacity-70 -mt-[10px] p-0 text-gray-500">Information</p>
                <h2 class="text-white text-[22px] ">众志·互助·奉献·共赢</h2>
                <h4 class="text-white text-[13px] ">Unity Mutual Aid Dedication Win-Win</h4>
            </div>
        </div>
        <!-- <div class="text-center    mx-auto w-full -mt-8">
            <div class="mx-5 py-5 bg-[rgba(196,146,100)]">
                <h2 class="text-white text-[22px] ">众志·互助·奉献·共赢</h2>
            </div>
        </div> -->

        <P1 v-if="show == 1" style="padding-bottom: 100px;"></P1> 
        <P2 v-if="show == 2" style="padding-bottom: 100px;"></P2>
        <P3 v-if="show == 3" style="padding-bottom: 100px;"></P3>
        <P4 v-if="show == 4" style="padding-bottom: 100px;"></P4>
        <div class="py-5 
             fixed inset-x-0 bottom-0
             h-[50px] px-3
             text-black sm:text-white 
             sm:bg-black bg-[rgba(196,146,100)] w-full" style="display: flex; justify-content: center; align-items: center;">
            <p class="text-center text-[12px] sm:text-base break-words">
             © 挚诚公会保留所有权利
            </p>
          </div>
    </div>

</template>
    
<style scoped>
    .bg_img {
        background-image: url("@/assets/mobile/5/1.png");
        background-size: cover;
        height: 250px;
        width: 100%;
        background-repeat: no-repeat;
    }
    
    .multine-ellipsis {
        -webkit-box-orient: vertical;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
    }
    </style>