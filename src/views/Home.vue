<script setup>
import ButtonRepo from '@/components/ButtonRepo.vue'
</script>

<template>
  <div class="bg-gray-100 w-full">
    <div class="h-fit sm:h-[700px]">
      <img src="@/assets/1/2.png" alt="banner" class="w-full h-full"/>
    </div>
    <div class="container px-5 py-10 sm:py-28 w-full mx-auto md:max-w-screen-md lg:max-w-screen-xl bg-HomecardBg">
      <div class="flex flex-wrap -m-4 justify-center">
        <div class="xl:w-1/4 md:w-1/3 sm:w-1/2 p-4  hover:translate-y-2 transition duration-300 " v-for="n in 4" :key="n">
          <div class="bg-white sm:w-[275px] w-full shadow   flex flex-col items-center  cursor-pointer sm:shadow-lg">
            <div class="relative">
              <img v-if="n == 1" class="  w-full  sm:w-full object-cover sm:h-fit h-64" draggable="false" src="@/assets/1/3.png"
                alt="Image Size 720x400" />
              <img v-if="n == 2" class="  w-full  sm:w-full object-cover sm:h-fit h-64" draggable="false" src="@/assets/1/4.png"
                alt="Image Size 720x400" />
              <img v-if="n == 3" class="  w-full  sm:w-full object-cover sm:h-fit h-64" draggable="false" src="@/assets/1/5.png"
                alt="Image Size 720x400" />
              <img v-if="n == 4" class="  w-full  sm:w-full object-cover sm:h-fit h-64" draggable="false" src="@/assets/1/6.png"
                alt="Image Size 720x400" />
            </div>
            <div class="w-full px-6 py-12">
              <p v-if="n == 1" class="leading-relaxed text-base  ">
                团结就是力量，团结就是胜利，人心齐，泰山移，
                只要挚诚公会成员能够团结起来，充分发挥集体力量，拳头有握紧了，
                才能打出力量。只要上下一致，团结有爱，任何团难都阻挡不了我们前进的脚步。</p>
              <p v-if="n == 2" class="leading-relaxed text-base  ">
                奉献乃生活的真正意义，如果每个人都无私奉献，
                那么将构成一个无比和谐的社会，使全社会越来越美好。
                奉献让家庭温暖，奉献让社会美好，奉献让挚诚公会更强大，
                奉献让国家富强。</p>
              <p v-if="n == 3" class="leading-relaxed text-base  ">
                我们也要学会主动去帮助别人，只有人与人之间都能互相帮助，
                我们的生活才能更加美好。帮持被人是一种高尚的美，
                而强大的团队就需要这种美构成，一个团队如果拥有这样的美，
                那么这一定是一个强有力的团队。</p>
              <p v-if="n == 4" class="leading-relaxed text-base  ">
                一个强有力的团队，不止是需要具备离心力和向阳力，
                更需要具备的是自发积极向上的一种精神状态，
                生命不息，奋斗不止。正是透过这种激昂的团队氛围，
                才促使挚诚公会一路健康发展。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full h-fit">
      <img src="@/assets/1/7.png" alt="" class="w-full h-full">
    </div>
    <div class="w-full bg-white ">
      <div class="container px-5 py-5 sm:py-28 mx-auto md:max-w-screen-md lg:max-w-screen-xl bg-HomecardBg">
        <div class="flex flex-wrap -m-4 justify-center">
          <div class="xl:w-1/4 md:w-1/3 sm:w-1/2 p-4  hover:translate-y-2 transition duration-300 " v-for="m in 4" :key="m">
            <div class=" w-[275px]  flex flex-col items-center  cursor-pointer ">
              <img v-if="m == 1" class="  w-fit object-cover h-fit" draggable="false" src="@/assets/1/8.png" alt="Image Size 720x400" />
              <img v-if="m == 2" class="  w-fit object-cover h-fit" draggable="false" src="@/assets/1/9.png" alt="Image Size 720x400" />
              <img v-if="m == 3" class="  w-fit object-cover h-fit" draggable="false" src="@/assets/1/10.png" alt="Image Size 720x400" />
              <img v-if="m == 4"  class="  w-fit object-cover h-fit" draggable="false" src="@/assets/1/11.png" alt="Image Size 720x400" />
              <p v-if="m == 1" class="leading-relaxed text-base pt-4  ">团结就是</p>
              <p v-if="m == 2" class="leading-relaxed text-base pt-4  ">团结就是</p>
              <p v-if="m == 3" class="leading-relaxed text-base pt-4  ">团结就是</p>
              <p v-if="m == 4" class="leading-relaxed text-base pt-4  ">团结就是</p>
              <h1 v-if="m == 1" class="font-bold text-[#1d4ed8] text-[40px]">2019</h1>
              <h1 v-if="m == 2" class="font-bold text-[#1d4ed8] text-[40px]">3567</h1>
              <h1 v-if="m == 3" class="font-bold text-[#1d4ed8] text-[40px]">186</h1>
              <h1 v-if="m == 4" class="font-bold text-[#1d4ed8] text-[40px]">32</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container px-5 sm:py-28 mx-auto md:max-w-screen-md lg:max-w-screen-xl bg-HomecardBg">
      <div class="flex flex-col">
         <img src="@/assets/1/12.png" alt="" class="w-full h-fit">
         <div class="pt-[100px] flex flex-col justify-center items-center">
          <div class="relative h-11  text-center">
            <img src="@/assets/1/13.png" alt="copo" class="w-fit h-fit" />
            <div class="absolute m-auto left-0 right-0 -top-2 text-center font-semibold text-gray-600 text-2xl ">团结就是</div>
          </div>
          <div class=" uppercase text-gray-500 text-lg sm:text-[30px]  tracking-widest">cooperation brand</div>
         </div>
      </div>
      <div class="flex flex-wrap -m-4 justify-center pt-4 sm:pt-10">
          <div class="xl:w-1/4 md:w-1/3 sm:w-1/2 p-4   transition duration-300 " v-for="aa in 4" :key="aa">
            <div class=" w-[275px]  flex flex-col items-center  cursor-pointer ">
              <img v-if="aa == 1" class="  w-fit object-cover h-fit" draggable="false" src="@/assets/1/14.png" alt="Image Size 720x400" />
              <img v-if="aa == 2" class="  w-fit object-cover h-fit" draggable="false" src="@/assets/1/15.png" alt="Image Size 720x400" />
              <img v-if="aa == 3" class="  w-fit object-cover h-fit" draggable="false" src="@/assets/1/16.png" alt="Image Size 720x400" />
              <img v-if="aa == 4" class="  w-fit object-cover h-fit" draggable="false" src="@/assets/1/17.png" alt="Image Size 720x400" />
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
