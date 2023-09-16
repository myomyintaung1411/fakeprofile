<script setup>
import ButtonRepo from '@/components/ButtonRepo.vue'
import { Vue3Marquee } from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination";
import "swiper/css/effect-fade";
// import Swiper core and required modules
import SwiperCore, {
  Autoplay,Pagination,Navigation,EffectFade
} from 'swiper';
</script>

<template>
  <!-- <div class="bg-gray-100 w-full hidden sm:block">
    <div class="h-fit sm:h-[700px]">
      <img src="@/assets/1/2.png" alt="banner" class="w-full h-full" />
    </div>
    <div class="container px-5 py-10 sm:py-28 w-full mx-auto md:max-w-screen-md lg:max-w-screen-xl bg-HomecardBg">
      <div class="flex  -m-4 justify-center">
        <div class="xl:w-1/4 md:w-1/3 sm:w-1/2 p-4  hover:translate-y-2 transition duration-300 " v-for="n in 4"
          :key="n">
          <div class="bg-white  w-full shadow   flex flex-col items-center  cursor-pointer sm:shadow-lg">
            <div class="relative">
              <img v-if="n == 1" class="    w-[300px] object-cover sm:h-fit h-64" draggable="false"
                src="@/assets/1/3.png" alt="Image Size 720x400" />
              <img v-if="n == 2" class="  w-[300px] object-cover sm:h-fit h-64" draggable="false" src="@/assets/1/4.png"
                alt="Image Size 720x400" />
              <img v-if="n == 3" class="  w-[300px] object-cover sm:h-fit h-64" draggable="false" src="@/assets/1/5.png"
                alt="Image Size 720x400" />
              <img v-if="n == 4" class="  w-[300px] object-cover sm:h-fit h-64" draggable="false" src="@/assets/1/6.png"
                alt="Image Size 720x400" />
            </div>
            <div class="w-[200px] px-2 py-4 h-64">
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
        <div class="flex   justify-center">
          <div class="xl:w-1/4 md:w-1/3 sm:w-1/2 p-4  hover:translate-y-2 transition duration-300 " v-for="m in 4"
            :key="m">
            <div class=" w-[205px]  flex flex-col items-center  cursor-pointer ">
              <img v-if="m == 1" class="  w-fit object-cover h-fit" draggable="false" src="@/assets/1/8.png"
                alt="Image Size 720x400" />
              <img v-if="m == 2" class="  w-fit object-cover h-fit" draggable="false" src="@/assets/1/9.png"
                alt="Image Size 720x400" />
              <img v-if="m == 3" class="  w-fit object-cover h-fit" draggable="false" src="@/assets/1/10.png"
                alt="Image Size 720x400" />
              <img v-if="m == 4" class="  w-fit object-cover h-fit" draggable="false" src="@/assets/1/11.png"
                alt="Image Size 720x400" />
              <p v-if="m == 1" class="leading-relaxed text-base pt-4  ">成立时间</p>
              <p v-if="m == 2" class="leading-relaxed text-base pt-4  ">服务人数</p>
              <p v-if="m == 3" class="leading-relaxed text-base pt-4  ">优秀团队长</p>
              <p v-if="m == 4" class="leading-relaxed text-base pt-4  ">对接项目</p>
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
            <div class="absolute m-auto left-0 right-0 -top-2 text-center font-semibold text-gray-600 text-2xl ">合作伙伴
            </div>
          </div>
          <div class=" uppercase text-gray-500 text-lg sm:text-[30px]  tracking-widest">cooperation brand</div>
        </div>
      </div>
      <Vue3Marquee :pauseOnHover="true" direction="reverse">
        <div class="flex   justify-center pt-4 sm:pt-10">
          <div class="xl:w-1/4 md:w-1/3 sm:w-1/2 p-4   transition duration-300 " v-for="aa in 4" :key="aa">
            <div class=" w-[275px]  flex flex-col items-center  cursor-pointer ">
              <img v-if="aa == 1" class="  w-fit object-cover h-fit" draggable="false" src="@/assets/1/14.png"
                alt="Image Size 720x400" />
              <img v-if="aa == 2" class="  w-fit object-cover h-fit" draggable="false" src="@/assets/1/15.png"
                alt="Image Size 720x400" />
              <img v-if="aa == 3" class="  w-fit object-cover h-fit" draggable="false" src="@/assets/1/16.png"
                alt="Image Size 720x400" />
              <img v-if="aa == 4" class="  w-fit object-cover h-fit" draggable="false" src="@/assets/1/17.png"
                alt="Image Size 720x400" />
            </div>
          </div>
        </div>
      </Vue3Marquee>
    </div>
  </div> -->
  <div class="bg-gray-100 w-full sm:hidden">
    <!-- <swiper :direction="'vertical'" class="mySwiper " :autoHeight="true" 
    :slidesPerView="1" :history="{
      key: 'slide',
    }"
    :watchSlidesProgress="true"
    >
      <swiper-slide data-history="1"> -->
        <div>
          <swiper :loop="true" :effect="'fade'" :navigation="true" :modules="[Autoplay,Pagination,Navigation,EffectFade]"
            class="mySwiper
            
            " :autoplay='{
                  "delay": 2500,
                  "disableOnInteraction": false,
                }'>
            <swiper-slide>
              <div class="swiperImg">
                <div class=" h-full flex flex-col justify-center  text-white text-center">
                  <div class="-mt-[100px]">
                  <div class="text-[#e2a564] text-4xl font-bold tracking-wide">挚诚团队</div>
                  <p class="py-2">ZHICHENG GUILD</p>
                  <div class="my-2 h-1 w-24 bg-[#e2a564] inline-flex text-center"></div>
                  <h2 class="text-white text-[30px]">守正·出新 成人·达己</h2>
                  </div>
                </div>
                <a href="#scroll" class="">
                  <img src="@/assets/mobile/1/arrow.png" alt="arrow"
                    class="w-[72px] h-[51px] absolute m-auto bottom-4 left-0 right-0 self-center  inline-flex animate-bounce" />
                </a>
              </div>
            </swiper-slide>
            <swiper-slide class="">
              <div class="swiperImgtwo">
                <div class=" h-full flex flex-col justify-center  text-white text-center">
                  <div class="-mt-[100px]">
                    <div class="text-[#e2a564] text-4xl font-bold tracking-wide">挚诚团队</div>
                    <p class="py-2">ZHICHENG GUILD</p>
                    <div class="my-2 h-1 w-24 bg-[#e2a564]  inline-flex text-center "></div>
                    <h2 class="text-white text-[30px]">守正·出新 成人·达己</h2>
                  </div>
                </div>
                <a href="#scroll">
                  <img src="@/assets/mobile/1/arrow.png" alt="arrow"
                    class="w-[72px] h-[51px] absolute m-auto bottom-4 left-0 right-0 self-center  inline-flex animate-bounce" />
                </a>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      <!-- </swiper-slide>
  
      <swiper-slide data-history="Slide 2"> -->
        <div id="scroll">
          <div class="h-[250px] w-full relative">
            <img src="@/assets/mobile/1/2.png" alt="" class="h-full w-full">
          </div>
          <div class="-mt-[150px]  absolute right-10">
            <div class="relative">
              <img src="@/assets/mobile/1/3.png" alt="" class="h-[200px]">
              <div class="absolute  top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <p class="text-2xl text-[#755537] font-bold tracking-widest">挚诚</p>
                <p class="text-2xl text-[#755537] font-bold tracking-widest">文化</p>
              </div>
            </div>
          </div>
          <div class="bg-black px-5 py-20 w-full m-auto">
            <div class="space-y-8 w-full text-gray-300">
              <div>
                <span class="text-[#d8aa7f]">众志：</span>
                《国语·周语下》“众心成城，众口铄金”，万众一心像坚
                固的城墙一样不可摧毁，团结一致，力量无比强大。
              </div>
              <div>
                <span class="text-[#d8aa7f]">互助：</span>
                团结就是力量，互助好比翅膀。有爱产生动力，和谐铸造辉煌。虽然
                我们每个人不是最优秀的，但几个人在一起就可以组成一个
                最优秀的集体。
              </div>
              <div>
                <span class="text-[#d8aa7f]">奉献：</span>
                是一种爱，是对自己事业的不求回报的爱和全身心的付出。
                对个人而言，就是要在这份爱的召唤之下，把本职工作当成一项
                事业来热爱和完成，从点点滴滴中寻找乐趣。
              </div>
              <div>
                <span class="text-[#d8aa7f]">共赢：</span>
                微弱的个人力量无法冲破黑暗的网唯有投身于集体，当今
                社会是一个充满竞争与题挑战的社会，学会合作才能共赢。共赢
                的心态是为了共同的目标方能是闪耀希望之光。
              </div>
            </div>
          </div>
        </div>
      <!-- </swiper-slide>
      <swiper-slide data-history="3"> -->
        <div  class="pb-10 w-full  " >
          <div class="flex justify-center flex-col items-center px-10 ">
            <p class="pt-5 text-3xl text-[#996c3c] font-bold">了入我们</p>
            <img src="@/assets/mobile/1/5.png" alt="">
          </div>
          <div   class="bg_img" >
            <div class="mx-10 bg-slate-100 shadow  h-full px-10 py-5 space-y-5">
              <div class="flex justify-between items-center">
                <div class="flex flex-col space-x-3 items-center text-center text-gray-700">
                  <img src="@/assets/mobile/1/6.png" alt="" class="w-20 h-20">
                  <p>成立时间</p>
                  <p class="text-3xl text-[#996c3c] font-bold">2019</p>
                </div>
                <div class="flex flex-col space-x-3 items-center text-center text-gray-700">
                  <img src="@/assets/mobile/1/7.png" alt="" class="w-20 h-20">
                  <p>服务人数</p>
                  <p class="text-3xl text-[#996c3c] font-bold">30万+</p>
                </div>
              </div>
              <div class="flex justify-between items-center">
                <div class="flex flex-col space-x-3 items-center text-center text-gray-700">
                  <img src="@/assets/mobile/1/8.png" alt="" class="w-20 h-20">
                  <p>优秀团队长</p>
                  <p class="text-3xl text-[#996c3c] font-bold">186</p>
                </div>
                <div class="flex flex-col space-x-3 items-center text-center text-gray-700">
                  <img src="@/assets/mobile/1/9.png" alt="" class="w-20 h-20">
                  <p>累计投资</p>
                  <p class="text-3xl text-[#996c3c] font-bold">百亿+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      <!-- </swiper-slide>
    </swiper> -->
  </div>
</template>

<style scoped>
.bg_img{
  position: relative;
  background-image: url("@/assets/mobile/1/4.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 350px;
  width: 100%;
}
.swiperImg{
  position: relative;
  background-image: url("@/assets/mobile/1/1-1.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 100vh;
  width: 100%;
}
.swiperImgtwo{
  position:relative;
  background-image:url("@/assets/mobile/1/1.png");
  background-repeat:no-repeat;
  background-size:100% 100%;
  height:100vh;
  width:100%;
}


</style>