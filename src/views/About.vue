<script setup>
  import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination";
import "swiper/css/effect-fade";
// import Swiper core and required modules
import SwiperCore, {
  Autoplay, Pagination, Navigation, EffectFade
} from 'swiper';
</script>

<template>
  <!-- <div class="bg-gray-100 w-full hidden sm:block">
    <div class="h-fit sm:h-[700px]">
      <img src="@/assets/2/1.png" alt="banner" class="w-full h-full" />
    </div>
    <div class="py-5  w-full">
      <div class="container px-5 py-5 sm:py-20 mx-auto md:max-w-screen-md lg:max-w-screen-xl bg-HomecardBg ">
        <div class="flex ">
          <div class="sm:w-1/2">
            <div class=" py-5">
              <h1 class="text-[30px] tracking-wide">公会简介</h1>
              <p class="uppercase">Introduction of the guild</p>
            </div>
            <div class="">
              <p class=" leading-relaxed text-base tracking-wide  ">2019年疫情狂潮席卷全国，实体经济面临严重威胁，
                挚诚公会逆势而生，依托互联网和移动互联网为基点，
                通过云计算和大数据技术、社交网络的属性；
                为广大成员用户搭建国内一流共享创业服务平台。</p>
            </div>
          </div>
          <div class="sm:ml-20">
            <img src="@/assets/2/2.png" alt="" class="w-full h-52">
          </div>
        </div>
      </div>
    </div>
    <div class="py-5  w-full bg-white">
      <div class="container px-5 py-5 sm:py-20 mx-auto md:max-w-screen-md lg:max-w-screen-xl bg-HomecardBg ">
        <div class="flex ">
          <div class="sm:mr-20">
            <img src="@/assets/2/3.png" alt="" class="w-full h-52">
          </div>
          <div class="sm:w-1/2 flex justify-center items-center">
            <div>
              <p class=" text-base tracking-wide leading-9">公会致力于互联网行业发展，推动时代经济发展。
                公会成员内部汇聚了许多国内知名的互联网业内人士，
                在短短几年里发展迅速，
                在互联网行业领域深受业内人士认可及追捧，是近年来，
                国内互联网行业知名的优秀团队，
                挚诚成员在互联网行业内有着丰富的经验和远见。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-20 w-full relative">
      <div class="w-full h-48 sm:h-fit">
        <img src="@/assets/2/4.png" alt="" class="w-full h-full sm:h-fit">
      </div>
      <div class="container sm:px-[43px]    mx-auto md:max-w-screen-md lg:max-w-screen-xl bg-HomecardBg  ">
        <div class="  bg-white py-20 px-4 sm:px-16 tracking-widest  ">
          <p>一个强有力的团队，不止是需要具备离心力和向阳力，更需要具备的是团队成员自发积极向上
            的一种精神状态，生命不息，奋斗不止，团队集体乐观向上，欣欣向荣，才能推送一个团队的
            健康发展，挚诚公会也正是透过这种激昂的团队氛围，才洋溢出勃勃生机，才促使了挚诚公会
            一路走来的健康发展。
          </p>
        </div>
      </div>
    </div>
    <div class="pb-20">
      <div class="  w-full bg-white">
        <div
          class="container py-5 sm:py-0 px-5 h-[400px] w-full  mx-auto md:max-w-screen-md lg:max-w-screen-xl bg-HomecardBg ">
          <div class="flex  justify-center  items-center ">
            <div class="sm:w-1/2 w-full">
              <div class="sm:w-[400px] w-full">
                <p class=" text-base tracking-wide leading-7 sm:leading-10">挚诚公会本着“人心齐，泰山移”的核心理念，积极推动国际化，多元化发展战略。
                  挚诚公会曾在港澳地区，大陆内地以及海外等进行多种形式的投资活动，
                  服务合作领域涉及实体企业、工业、能源、交通、传媒、金融等行业，
                  为社会经济发展做出了重要贡献。</p>
              </div>
            </div>
            <div class=" h-64  sm:py-0 sm:h-fit w-full sm:w-auto ml-20 ">
              <img src="@/assets/2/5.png" alt="" class="sm:h-[400px] w-full h-full">
            </div>
          </div>
        </div>
      </div>
    </div>

  </div> -->
  <div class=" w-full sm:hidden h-screen">
    <swiper :direction="'vertical'" :auto-height="true"
    :mousewheelControl="true" :followFinger="true" :centeredSlides="true"
    :slidesPerView="'auto'" :freeMode="true" :freeModeSticky="true"

    >
    <swiper-slide class="h-full overflow-auto">
    <div class="h-screen">
      <transition name="fade" appear>
      <div
        class=" bg_about   text-[rgba(196,146,100)] text-center uppercase text-3xl flex flex-col justify-center items-center  ">
        <p class=" opacity-10 m-0 p-0 text-gray-600">about</p>
        <p class=" font-bold -mt-[10px] p-0">关于挚诚</p>
        <p class=" opacity-10 -mt-[10px] p-0 text-gray-600">culture</p>
        <h2 class="text-gray-500 text-[22px] ">众志·互助·奉献·共赢</h2>
        <h4 class="text-gray-500 text-[13px] ">Unity Mutual Aid Dedication Win-Win</h4>
      </div>
    </transition>
      <div class=" w-full  relative" style="height:calc(100vh - 250px)">
        <div class=" w-full h-full">
          <div class=" w-full relative h-full ">
            <img src="@/assets/mobile/2/1.png" alt="" 
            class="  absolute right-0 object-right -top-10  h-full w-[60%]" 
            >
            <transition name="fade" appear>
            <div class="absolute top-15 text-left text-sm w-[auto]  " style="line-height: 26px;">
              <p class="pl-10">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;挚诚公会由加推科技学院院长刘翌,
              </p>
              <p class="pl-7">
                和峰瑞资本合伙人马睿创立于2019年，
              </p>
              <p class="pl-7">
                正值2020年疫情狂潮席卷全国，
              </p>
              <p class="pl-7">
                实体经济面临严重威胁，
              </p>
              <p class="pl-7">
                挚诚公会逆势而生，
              </p>
              <p class="pl-7">
                依托互联网和移动互联网为基点，
              </p>
              <p class="pl-7">
                通过云计算和大数据技术、
              </p>
              <p class="pl-7">
                社交网络的属性；
              </p>
              <p class="pl-7">
                为广大成员用户
              </p>
              <p class="pl-7">
                搭建国内一流
              </p>
              <p class="pl-7">
                共享创业服务平台。
              </p>
            </div>
          </transition>
          </div>
        </div>
      </div>
    </div>
  </swiper-slide>
  <swiper-slide>
    <div class="h-auto mt-12">
      <div class="py-10 px-5 w-full">
        <img v-motion-slide-visible-top  src="@/assets/mobile/2/tik.png" alt="" class="h-[300px] w-full">
        <div v-motion-slide-visible-bottom class="px-10 py-10 text-sm text-center ">
         
          <p  style="line-height: 25px;" >
            公会致力于互联网行业发展，<br/>
            推动时代经济发展。
            成员内部汇聚了众多国内知名的互联网业内人士，
            <br/><br/>

            在短短几年里发展迅速，
            在互联网行业领域深受业内人士认可及追捧，
            是近年来，国内互联网行业知名的优秀团队，
            挚诚成员在互联网行业内有着
            丰富的经验和远见。
          </p>
        </div>
      </div>
    </div>
  </swiper-slide>
  <swiper-slide>
    <div class="bg_img2 w-full relative pt-12">
      <div class="py-10 px-8 w-full">
        <div class="text-center uppercase text-3xl ">
          <p class=" opacity-10 m-0 p-0">Development</p>
          <p class="text-[rgba(196,146,100)] font-bold -mt-[10px] p-0">发展历程</p>
          <p class=" opacity-10 -mt-[10px] p-0">course</p>
        </div>
        <div class="h-[450px] my-10 text-sm  relative flex flex-col justify-center items-center">
          <img src="@/assets/mobile/2/2.png" alt="" class="h-full ">
          <div class="absolute top-10 -left-3 text-right " v-motion-slide-visible-bottom style="transition-delay: 0.1s;">
            <p class="text-[rgba(196,146,100)] font-bold text-xl">2022</p>
            <p>累计投资总额超100亿+</p>
            <p>的服务，布局未来新赛道</p>
          </div>
          <div class="absolute top-36 right-0 text-left " v-motion-slide-visible-bottom style="transition-delay: 0.3s;">
            <p class="text-[rgba(196,146,100)] font-bold text-xl">2021</p>
            <p>聚焦国内外优势赛道</p>
            <p>挚诚公会发展上新台阶</p>
          </div>
          <div class="absolute top-60 left-0 text-right " v-motion-slide-visible-bottom style="transition-delay: 0.5s;">
            <p class="text-[rgba(196,146,100)] font-bold text-xl">2020</p>
            <p>累计服务人数超10万+</p>
            <p>挚诚公会品牌全面升级</p>
          </div>
          <div class="absolute top-[340px] right-0 text-left " v-motion-slide-visible-bottom style="transition-delay: 0.7s;">
            <p class="text-[rgba(196,146,100)] font-bold text-xl">2019</p>
            <p>挚诚公会正式扬帆起航</p>
            <p>为互联网创业者服务</p>
          </div>
        </div>
      </div>
    </div>
  </swiper-slide>
  <swiper-slide>
    <div class="w-full realive  h-screen ">
      <div class="text-center uppercase text-3xl pt-10 h-[130px]" style="z-index: -1; background: transparent;">
        <p class=" opacity-10 m-0 p-0">founder of</p>
        <p class="text-[rgba(196,146,100)] font-bold -mt-[10px] p-0">联合创始人</p>
        <p class=" opacity-10 -mt-[10px] p-0">the joint</p>
      </div>
      <div class="pt-2 w-full" style="height: calc(100vh - 180px);">
        <swiper id="mySwiper" :loop="true" :effect="'fade'"  :navigation="true" :modules="[Autoplay,Pagination,Navigation,EffectFade]"
          class="mySwiper w-full h-full relative
            
            " :autoplay='{
              "delay": 2500,
              "disableOnInteraction": false,
            }'>
            <swiper-slide class=" w-full">
            <div class="bg-gray-50" style="height:calc(100vh - 180px); display: flex; flex-direction: column; justify-content: space-around;">
              <div>
                <img src="@/assets/mobile/2/4.png" alt="" class="h-[300px] w-full" style="z-index: 999" />
              </div>
              <div class="text-center px-8 space-y-1 pb-10 ">
                <p class="text-[rgba(196,146,100)] font-bold m-0 p-0 text-xl">刘 翌</p>
                <p class="text-left font-thin">曾任腾讯国际业务海外运营总监
                  微信国际版产品运营总监
                  甲骨文(Oracle)大中华区SME事业部渠道负责人
                  加推科技联合创始人兼COO（首席运营官）</p>
              </div>
            </div>
            </swiper-slide>
            <swiper-slide class="">
              <div class="bg-gray-50" style="height:calc(100vh - 180px); display: flex; flex-direction: column; justify-content: space-around;">
                <div class="h-[325px]">
                  <img src="@/assets/mobile/2/5.png" alt="" class="h-[300px] w-full" style="z-index: 999" />
                </div>
                <div class="text-center px-8 space-y-1 pb-10 ">
                  <p class="text-[rgba(196,146,100)] font-bold m-0 p-0 text-xl">柳 丹</p>
                  <p class="text-left font-thin">鼎晖投资创新与成长基金合伙人
                    负责健康医疗领域的投资代表项目包括：成都先导、天境生物、和铂医药-B等
                    曾在Bain & Company从事大健康领域管理咨询业务</p>
                </div>
             </div>
            </swiper-slide>
            <swiper-slide class="">
              <div class="bg-gray-50" style="height:calc(100vh - 180px); display: flex; flex-direction: column; justify-content: space-around;">
                <div>
                  <img src="@/assets/mobile/2/6.png" alt="" class="h-[300px] w-full" style="z-index: 999" />
                </div>
                <div class="text-center px-8 space-y-1 pb-10 ">
                  <p class="text-[rgba(196,146,100)] font-bold m-0 p-0 text-xl">马 睿</p>
                  <p class="text-left font-thin">峰瑞资本合伙人
                    清华大学环境化学硕士和工程学士学位
                    曾任CMU学生学者联合会主席
                    并创立了CMU中美创新创业峰会(CMUSUMMIT)</p>
                </div>
              </div>
            </swiper-slide>
          </swiper>
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
    </div>

  </swiper-slide>
  </swiper>
  </div>
</template>

<style scoped>
  .__swiperHeight {
  height: 100%;
  overflow: auto;
}
  .bg_about{
    background-image: url("@/assets/mobile/2/about.png");
      background-size: cover;
      height: 250px;
      width: 100%;
      background-repeat: no-repeat;
  }
.bg_img {
  background-image: url("@/assets/mobile/2/1.png");
  background-size: cover;
  height: calc(100vh - 185px - 160px);
  width: 100%;
  background-repeat: no-repeat;
  background-position: right;
  /* background-attachment: fixed; */
}

.bg_img2 {
  background-image: url("@/assets/mobile/2/3.png");
  background-size: cover;
  height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
}
#mySwiper .swiper-button-prev{
  width: 30px !important;
}
#mySwiper .swiper-button-next{
  width: 30px !important;
}

</style>
