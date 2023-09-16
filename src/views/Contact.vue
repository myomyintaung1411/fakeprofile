<template>
    <!-- <div class="bg-gray-100 w-full hidden sm:block">
        <div class="h-fit w-full">
            <img src="@/assets/4/1.png" alt="banner" class="w-full h-full" />
        </div>
    </div> -->
    <div class="sm:hidden bg-gray-100 w-full">
        <div class="bg_img">
            <div class=" text-center uppercase text-3xl flex flex-col justify-center items-center h-full ">
                <p class=" opacity-90 m-0 p-0 text-gray-600">Join our </p>
                <p class=" text-[rgba(196,146,100)] font-bold -mt-[10px] p-0">加入我们</p>
                <p class=" opacity-90 -mt-[10px] p-0 text-gray-600">group</p>

                <h2 class="text-white text-[22px] ">众志·互助·奉献·共赢</h2>
                <h4 class="text-white text-[13px] ">Unity Mutual Aid Dedication Win-Win</h4>
            </div>
        </div>
        <div class="px-8  w-full text-center py-5">
            <p class="font-bold text-xl text-[rgba(196,146,100)] pb-10">◆核心成员◆ </p>
            <div class="flex justify-between">
                <div class="w-[20%]"><img src="@/assets/mobile/4/2.png" alt="" class="w-full h-full"></div>
                <div class="w-[20%]"><img src="@/assets/mobile/4/3.png" alt="" class="w-full h-full"></div>
                <div class="w-[20%]"><img src="@/assets/mobile/4/4.png" alt="" class="w-full h-full"></div>
                <div class="w-[20%]"><img src="@/assets/mobile/4/5.png" alt="" class="w-full h-full"></div>
            </div>
            <div class="flex justify-between pt-5">
                <div class="w-[20%]"><img src="@/assets/mobile/4/6.png" alt="" class="w-full h-full"></div>
                <div class="w-[20%]"><img src="@/assets/mobile/4/7.png" alt="" class="w-full h-full"></div>
                <div class="w-[20%]"><img src="@/assets/mobile/4/8.png" alt="" class="w-full h-full"></div>
                <div class="w-[20%]"><img src="@/assets/mobile/4/9.png" alt="" class="w-full h-full"></div>
            </div>
        </div>
        <div class="pb-10 px-8 text-center space-y-6 mb-10">
            <div class="text-[rgba(196,146,100)] space-y-2 text-sm flex flex-col items-center justify-center">
                <span class="font-bold text-xl">◆入会流程◆ </span>
                <!-- <p class="text-gray-700">申请人须由公会会员推荐，</p>
                <p class="text-gray-700">具有互联网认知或具备一定的投资能力和风险抵抗能力，
                </p>
                <p class="text-gray-700">获得财富的同时也肩负了一定的社会责任，
                </p>
                <p class="text-gray-700">自愿捐赠团队项目所得收益的10%用于慈善事业。
                </p> -->
                <img src="@/assets/mobile/4/111.png" alt="" class="h-[200px] w-[50%]">
            </div>
            <div class=" text-gray-700 space-y-3 pt-5 text-sm flex flex-col items-center justify-center">
                <span class="font-bold text-xl text-[rgba(196,146,100)]">◆会员福利◆</span>
                <!-- <div class="text-gray-700">
                    <p>享有投资保障，医疗保障，体检服务，定期举行高级沙龙，</p>
                    <p>全球任意飞旅行服务，可获海外留学推荐信</p>
                </div> -->
                <div class="text-gray-700">
                    <p>投资保障、医疗保障、生活补贴、团队信物、</p>
                    <p>个人发展、投顾服务、子女教育、个人学习、</p>
                    <p>购房购车、养老服务、股权分红等。</p>
                </div>
                <br>
                <img src="@/assets/mobile/4/22.png" alt="" class="h-[283px] w-full" >
                <br>
                <img src="@/assets/mobile/4/33.png" alt="" class="h-[283px] w-full" >
                <br>
                <img src="@/assets/mobile/4/44.png" alt="" class="h-[283px] w-full" >
            </div>
        </div>
        <!-- <div class="px-10  w-full text-center pb-10">
            <p class="font-bold text-xl text-[#e2a564] pb-10">◆核心成员◆ </p>
            <div class="flex justify-between">
                <div class="w-[20%]"><img src="@/assets/mobile/4/2.png" alt="" class="w-full h-full"></div>
                <div class="w-[20%]"><img src="@/assets/mobile/4/3.png" alt="" class="w-full h-full"></div>
                <div class="w-[20%]"><img src="@/assets/mobile/4/4.png" alt="" class="w-full h-full"></div>
                <div class="w-[20%]"><img src="@/assets/mobile/4/5.png" alt="" class="w-full h-full"></div>
            </div>
            <div class="flex justify-between pt-5">
                <div class="w-[20%]"><img src="@/assets/mobile/4/6.png" alt="" class="w-full h-full"></div>
                <div class="w-[20%]"><img src="@/assets/mobile/4/7.png" alt="" class="w-full h-full"></div>
                <div class="w-[20%]"><img src="@/assets/mobile/4/8.png" alt="" class="w-full h-full"></div>
                <div class="w-[20%]"><img src="@/assets/mobile/4/9.png" alt="" class="w-full h-full"></div>
            </div>
        </div> -->
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
    .bg_img{
      background-image: url("@/assets/mobile/4/1.png");
      background-size: cover;
      height: 250px;
      width: 100%;
      background-repeat: no-repeat;
    }
    .bg_2{
        background-image: url("@/assets/mobile/3/2.png");
    }
    </style>