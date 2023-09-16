<script setup>
import { useRouter, useRoute } from "vue-router";

import { ref } from 'vue'
const router = useRouter();
const route = useRoute();
const data = ref([
    {
        id: 1,
        title: '半年融两轮，建筑劳务综合服务平台「吉工家」完成数千万元B+轮融资',
        para: '投资界8月29日消息，建筑劳务综合服务平台吉工家宣布完成数千万元B+轮融资，投资机构未透露。据了解，本轮融资将主要用于产品研发和市场推广，继续通过B、C双端联动，夯实建筑劳务用工全周期闭环。',
        date: '2022年08月29日',
        btntxt: '查看详情'
    },
    {
        id: 2,
        title: '赛丁科技旗下在线教育平台叮叮课堂获600万天使轮融资',
        para: '近日赛丁科技宣布旗下在线教育平台“叮叮课堂”获得600万天使轮投资，具体投资方暂未透露。赛丁科技表示，此轮天使轮融资主要用于“叮叮课堂”深度开发、产品技术升级、合作伙伴拓展。进一步提高产品用户体验和上线更多的教育课程，让更多的机构老师和学生能更好的使用叮叮课堂。',
        date: '2020年02月11日',
        btntxt: '查看详情'
    },
    {
        id: 3,
        title: '打造数智化养老服务体系，弘福天获百万级天使轮融资',
        para: '投资界9月23日消息，综合养老服务商「弘福天数智养老」近日宣布完成百万级天使轮融资，投资方暂未透露，本轮资金将重点围绕居家养老和政府监管服务两个方向，用于强化软硬件提升和运营团队建设',
        date: '2022年09月23日',
        btntxt: '查看详情'
    },
    {
        id: 4,
        title: 'USDT的现状和未来可能的发展',
        para: '狭义稳定币实际上就是金本位模式的数字世界应用。核心在于可兑换为一定数量的法币。参照布雷顿森林货币体系两次世界大战之间的20年中，国际货币体系分裂成几个相互竞争的货币集团，各国货币竞相贬值，动荡不定。',
        date: '2022年09月23日',
        btntxt: '查看详情'
    }
])

const go = (id) => {
    switch (id) {
        case 1:
        router.push({path:'/news/para1',query:{id:1}})
        break;
        case 2:
        router.push({path:'/news/para1',query:{id:2}})
        break;
        case 3:
        router.push({path:'/news/para1',query:{id:3}})
        break;
        case 4:
        router.push({path:'/news/para1',query:{id:4}})
        break;
    
        default:
            break;
    }
    console.log(id);
}
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
        <div class="pb-10" style="height: calc(100vh - 100px)">
        <div v-for="txt in data" :key="txt.id" class="bg-white px-5 py-3">
            <div class="flex items-center justify-between">
                <div class="text-[12px] w-[70%]  h-24  ">
                    <p class="text-[rgba(196,146,100)] py-2 truncate">{{txt.title}}</p>
                    <div class="w-full  multine-ellipsis ">
                        {{txt.para}}
                    </div>
                </div>
                <div class=" h-24 w-[1px] bg-[rgba(196,146,100)]"></div>
                <div class="flex flex-col w-[25%] text-sm text-gray-500 ">
                    <p class="text-[12px] whitespace-nowrap">{{txt.date}}</p>
                    <div @click="go(txt.id)" class="w-full py-2 text-white text-center bg-[rgba(196,146,100)] ">
                        {{txt.btntxt}}
                    </div>
                </div>
            </div>
        </div>
    </div>
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