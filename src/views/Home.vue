<script setup>
import ButtonRepo from '@/components/ButtonRepo.vue'
import { Vue3Marquee } from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref } from 'vue'
import { useStore } from "vuex";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination";
import "swiper/css/effect-fade";
// import Swiper core and required modules
import SwiperCore, {
  Autoplay, Pagination, Navigation, EffectFade
} from 'swiper';

const store = useStore()

const controlledSwiper = ref();

const setControlledSwiper = (swiper) => {
  controlledSwiper.value = swiper
}

function onSlideChangeTransitionEnd(e) {
  store.commit("app/SWIPERINDEX", e.activeIndex);
  console.log('swiper ', e.activeIndex)
}
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
  <div class="bg-gray-100 w-full sm:hidden maxHeight">
    <swiper :direction="'vertical'" class=" __swiperHeight"
    :mousewheelControl="true" :followFinger="true" :centeredSlides="true"
    :slidesPerView="'auto'" :freeMode="true" :freeModeSticky="true"
    @swiper="setControlledSwiper" 
    @slideChangeTransitionEnd="onSlideChangeTransitionEnd"
    >
      <swiper-slide class="h-full overflow-auto">
        <swiper :loop="true" :effect="'fade'"  :modules="[Autoplay,Pagination,Navigation,EffectFade]"
          class="mySwiper
            
            " :autoplay='{
              "delay": 2500,
              "disableOnInteraction": false,
            }'>
          <swiper-slide>
            <div  class="swiperImg">
              <div  class="  h-full flex flex-col justify-center  text-white text-center">
                <transition name="fade" appear>
                  <div    class=" a_up -mt-[65px]">
                  <div class="text-[rgba(196,146,100)] text-[40px] font-bold tracking-wide">挚诚公会</div>
                  <p class=" text-[20px] -mt-[10px]">ZHICHENG GUILD</p>
                  <h2 class="text-white text-[30px] pt-[15px]">众志·互助·奉献·共赢</h2>
                  <h4 class="text-white text-[13px] uppercase -mt-[5px]">Unity Mutual Aid Dedication Win-Win</h4>
                  <!-- <div class="mt-[50px] h-1 w-24 bg-[rgba(196,146,100)] inline-flex text-center"></div> -->
                </div>
                </transition>

              </div>
              <a href="#scroll" class="">
                <img src="@/assets/mobile/1/arrow.png" alt="arrow"
                  class="w-[72px] h-[51px] absolute _imgani m-auto bottom-32 left-0 right-0 self-center  inline-flex " />
              </a>
            </div>
          </swiper-slide>
          <swiper-slide class="">
            <div  class="swiperImgtwo">
              <div  class="  h-full flex flex-col justify-center  text-white text-center">
                <transition name="fade" appear>
                <div class="a_up -mt-[65px]">
                  <div class="text-[rgba(196,146,100)] text-[40px] font-bold tracking-wide">挚诚公会</div>
                  <p class="text-[20px] -mt-[10px]">ZHICHENG GUILD</p>
                  <h2 class="text-white text-[30px] pt-[15px]">众志·互助·奉献·共赢</h2>
                  <h4 class="text-white text-[13px] uppercase -mt-[5px]">Unity Mutual Aid Dedication Win-Win</h4>
                  <!-- <div class="mt-[50px] h-1 w-24 bg-[rgba(196,146,100)]  inline-flex text-center "></div> -->
                </div>
              </transition>
              </div>
              <a href="#scroll">
                <img src="@/assets/mobile/1/arrow.png" alt="arrow"
                  class="w-[72px] h-[51px] absolute _imgani m-auto bottom-32 left-0 right-0 self-center  inline-flex " />
              </a>
            </div>
          </swiper-slide>
          <swiper-slide class="">
            <div  class="swiperImgthre">
              <div  class="  h-full flex flex-col justify-center  text-white text-center">
                <transition name="fade" appear>
                <div    class="a_up -mt-[65px]">
                  <div class="text-[rgba(196,146,100)] text-[40px] font-bold tracking-wide">挚诚公会</div>
                  <p class="text-[20px] -mt-[10px]">ZHICHENG GUILD</p>
                  <h2 class="text-white text-[30px] pt-[15px]">众志·互助·奉献·共赢</h2>
                  <h4 class="text-white text-[13px] uppercase -mt-[5px]">Unity Mutual Aid Dedication Win-Win</h4>
                  <!-- <div class="mt-[50px] h-1 w-24 bg-[rgba(196,146,100)]  inline-flex text-center "></div> -->
                </div>
              </transition>
              </div>
              <a href="#scroll">
                <img src="@/assets/mobile/1/arrow.png" alt="arrow"
                  class="w-[72px] h-[51px] absolute _imgani m-auto bottom-32 left-0 right-0 self-center  inline-flex " />
              </a>
            </div>
          </swiper-slide>
        </swiper>
      </swiper-slide>

      <swiper-slide class="h-full overflow-auto ">
        <div id="scroll" class="text-black  h-screen overflow-auto bg_lee">
          <div class="h-[200px] ">
            <div class="text-[rgba(196,146,100)] text-center uppercase text-3xl flex flex-col justify-center items-center h-full ">
                <p class=" opacity-90 m-0 p-0 text-gray-600">ZHICHENG</p>
                <p class=" font-bold -mt-[10px] p-0">挚诚文化</p>
                <p class=" opacity-90 -mt-[10px] p-0 text-gray-600">culture</p>
                <h2 class="text-white text-[22px] ">众志·互助·奉献·共赢</h2>
                <h4 class="text-white text-[13px] uppercase">Unity Mutual Aid Dedication Win-Win</h4>
            </div>
          </div>
          <div class=" px-5  w-full mx-auto -mt-2">
            <div class="space-y-2 w-full  text-[13px] text-white px-7 py-3" style="background-color: rgba(255,255,255,0.2);" >
              <div v-motion-slide-visible-left >
                <p class="text-[rgba(196,146,100)] font-bold text-base">众志</p>
                《国语·周语下》“众心成城，众口铄金”，万众一心像坚固的城墙一样不可摧毁，团结一致，力量无比强大。
              </div>
              <div v-motion-slide-visible-right >
                <p class="text-[rgba(196,146,100)] font-bold text-base">互助</p>
                团结就是力量，互助好比翅膀。友爱产生动力，和谐铸造辉煌。虽然我们每个人不是最优秀的，
                但几个人在一起就可以组成一个最优秀的集体。
              </div>
              <div v-motion-slide-visible-left >
                <p class="text-[rgba(196,146,100)] font-bold text-base">奉献</p>
                是一种爱，是对自己事业的不求回报的爱和全身心的付出。
                对个人而言，就是要在这份爱的召唤之下，把本职工作当成一项事业来热爱和完成，从点点滴滴中寻找乐趣。
              </div>
              <div v-motion-slide-visible-right >
                <p class="text-[rgba(196,146,100)] font-bold text-base">共赢</p>
                微弱的个人力量无法冲破局限，唯有投身于集体，当今社会是一个充满竞争与挑战的社会，学会合作才能共赢。共赢的心态是为了共同的目标方能是闪耀希望之光。
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="h-full overflow-auto ">
        <div class=" w-full text-black  h-screen relative pt-12  ">
          <div class="flex justify-center flex-col items-center px-10 h-[20vh]   ">
            <!-- <p class="pt-5 text-3xl text-[#b9804f] font-bold">了解我们</p> -->
            <div class="text-[rgba(196,146,100)] text-center uppercase text-3xl flex flex-col justify-center items-center h-full ">
                <p class=" opacity-10 m-0 p-0 text-gray-800">Learn</p>
                <p class=" font-bold -mt-[10px] p-0">了解我们</p>
                <p class=" opacity-10 -mt-[10px] p-0 text-gray-800">about our</p>
            </div>
          </div>
          <div class="px-2">
            <img src="@/assets/mobile/1/5.png" alt="" class="h-[245px] w-full">
          </div>
          <div class="h-[40vh]">
            <div class="  flex justify-center  pt-10 pb-14    ">
              <div class="flex justify-between items-center  w-full px-10  " >
                <div v-motion-slide-visible-bottom style="transition-delay: 0.1s;"       
                class="flex flex-col items-center text-center text-gray-700 space-y-3 ">
                  <img src="@/assets/mobile/1/6.png" alt="" class="w-12">
                  <p class="text-base">成立时间</p>
                  <p class="text-xl text-[rgba(196,146,100)] font-bold">2019年</p>
                </div>

                  <div v-motion-slide-visible-bottom    style="transition-delay: 0.3s;"
                    class="flex flex-col  items-center  text-center text-gray-700 space-y-3">
                    <img src="@/assets/mobile/1/7.png" alt="" class="w-12">
                    <p class="text-base">服务人数</p>
                    <p class="text-xl text-[rgba(196,146,100)] font-bold">30万+</p>
                  </div>
                  <div v-motion-slide-visible-bottom    style="transition-delay: 0.5s;"
                    class="flex flex-col  items-center text-center text-gray-700 space-y-3 ">
                    <img src="@/assets/mobile/1/9.png" alt="" class="w-12">
                    <p class="text-base">累计投资</p>
                    <p class="text-xl text-[rgba(196,146,100)] font-bold">100亿+</p>
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
      </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped>
  .bg_lee{
    position: relative;
  background-image: url("@/assets/mobile/1/2.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
  }
.bg_img {
  position: relative;
  background-image: url("@/assets/mobile/1/4.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 40vh;
  width: 100%;
}
.__bg2 {
  position: relative;
  background-image: url("@/assets/mobile/1/2.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 250px;
  width: 100%;
}

.swiperImg {
  position: relative;
  background-image: url("@/assets/mobile/1/1.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 100vh;
  width: 100%;
  background-color: white;
}

.swiperImgtwo {
  position: relative;
  background-image: url("@/assets/mobile/1/1-2.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 100vh;
  width: 100%;
  background-color: white;
}
.swiperImgthre {
  position: relative;
  background-image: url("@/assets/mobile/1/1-1.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 100vh;
  width: 100%;
  background-color: white;
}

.__swiperHeight {
  height: 100%;
  overflow: auto;
}

.maxHeight {
  height: 100vh;
  overflow: auto;
}

@keyframes fadeInLeft {
    from {
        opacity:0;
        -webkit-transform: translatex(-100px);
        -moz-transform: translatex(-100px);
        -o-transform: translatex(-100px);
        transform: translatex(-100px);
    }
    to {
        opacity:1;
        -webkit-transform: translatex(0);
        -moz-transform: translatex(0);
        -o-transform: translatex(0);
        transform: translatex(0);
    }
}
.in-left {
    -webkit-animation-name: fadeInLeft;
    -moz-animation-name: fadeInLeft;
    -o-animation-name: fadeInLeft;
    animation-name: fadeInLeft;
    -webkit-animation-fill-mode: both;
    -moz-animation-fill-mode: both;
    -o-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-duration: 1s;
    -moz-animation-duration: 1s;
    -o-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-delay: 1s;
    -moz-animation-delay: 1s;
    -o-animation-duration:1s;
    animation-delay: 1s;
}
/* .a_up{
  transition: all 1s
} */


._imgani{
  animation: bounce-down 1.5s linear infinite;
}
@keyframes bounce-down {
    25% {
        transform: translateY(10px);
    }
    50%,
    100% {
        transform: translateY(0);
    }
    75% {
        transform: translateY(-10px);
    }
}
</style>