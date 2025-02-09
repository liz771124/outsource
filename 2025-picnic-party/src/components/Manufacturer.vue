<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  const imagePath = import.meta.env.VITE_IMAGE_PATH
  const companiesList = {
    organizer: [
      {
        id: '/sponsor/01.jpg',
        title: '遠見天下文化事業群',
        link: 'https://www.cwgv.com.tw/index.html'
      },
      {
        id: '/sponsor/02.jpg',
        title: '未來親子學習平台',
        link: 'https://futureparenting.cwgv.com.tw/'
      }
    ],
    coOrganizer: [
      {
        id: '/sponsor/03.png',
        title: '新北市政府',
        link: 'https://www.ntpc.gov.tw/ch/index.jsp'
      },
      {
        id: '/sponsor/04.png',
        title: '新北市政府教育局',
        link: 'https://www.ntpc.edu.tw/'
      },
      {
        id: '/sponsor/05.png',
        title: '新北市家庭教育中心',
        link: 'https://ntpc.familyedu.moe.gov.tw/'
      }
    ],
    assistantOrganizer: [
      {
        id: '/sponsor/06.png',
        title: '遠見天下文化教育基金會',
        link: 'https://www.cwgv.com.tw/zh/foundation.html'
      }
    ],
    educationPartners: [
      {
        id: '/sponsor/07.jpg',
        title: '農業部',
        link: 'https://www.igogosport.com/'
      },
      {
        id: '/sponsor/08.jpg',
        title: 'igogosport思博特',
        link: 'https://www.igogosport.com/'
      },
      {
        id: '/sponsor/09.jpg',
        title: '小蚊清',
        link: 'https://shop.farcent.com.tw/collections/p0'
      },
      {
        id: '/sponsor/10.jpg',
        title: '可爾必思',
        link: 'https://www.facebook.com/calpis.tw/'
      },
      {
        id: '/sponsor/11.jpg',
        title: '兒福聯盟',
        link: 'https://www.children.org.tw/'
      },

      {
        id: '/sponsor/12.jpg',
        title: '初鹿牧場',
        link: 'https://www.chuluranch.com.tw/'
      },
      {
        id: '/sponsor/13.jpg',
        title: '義美',
        link: 'https://www.imeifoods.com.tw/'
      },
      {
        id: '/sponsor/14.jpg',
        title: '福斯商旅',
        link: 'https://www.volkswagen-commercial.com.tw/zh.html'
      },
      {
        id: '/sponsor/15.jpg',
        title: '德恩奈',
        link: 'https://www.day-night.com.tw/'
      }
    ],
    partners: [
      {
        id: '/sponsor/16.jpg',
        title: '小兒利撒爾',
        link: 'https://www.risal.com.tw/?utm_source=channel&utm_medium=BD&utm_campaign=0A_2304_futurefamilypicnic&utm_term=website&utm_source_platform=website'
      },
      {
        id: '/sponsor/17.jpg',
        title: '利樂',
        link: 'https://www.facebook.com/Tetra.Pak.TW/?locale=zh_TW'
      },
      {
        id: '/sponsor/18.jpg',
        title: '正隆蒲公英',
        link: 'https://aeshop.com.tw/'
      },
      {
        id: '/sponsor/19.jpg',
        title: '妙管家',
        link: 'https://www.amah.com.tw/'
      },
      {
        id: '/sponsor/20.jpg',
        title: '享居',
        link: 'https://www.dot2shop.com/'
      },
      {
        id: '/sponsor/21.jpg',
        title: '果利生技',
        link: 'https://www.guolibio.com/'
      },
      {
        id: '/sponsor/22.jpg',
        title: '乖乖',
        link: 'https://www.kuai.com.tw/home.jsp?lang=tw'
      },
      {
        id: '/sponsor/23.jpg',
        title: '知覺優格',
        link: 'https://www.yogurt-zj.com/'
      },
      {
        id: '/sponsor/24.jpg',
        title: '美琪',
        link: 'https://www.mmsoap.com.tw/'
      },
      {
        id: '/sponsor/25.jpg',
        title: '純淨之羽',
        link: 'https://www.pureyu.com.tw/collections/superluteinjelly'
      },
      {
        id: '/sponsor/26.jpg',
        title: '清淨海',
        link: 'https://www.seamild.com.tw/'
      },
      {
        id: '/sponsor/27.jpg',
        title: '象印',
        link: 'https://www.zojirushi.com.tw/'
      },
      {
        id: '/sponsor/28.jpg',
        title: '福容大飯店',
        link: 'https://www.fullon-hotels.com.tw/tw/'
      },
      {
        id: '/sponsor/29.jpg',
        title: '貓下去敦北俱樂部',
        link: 'https://www.instagram.com/meowvelousinc/'
      },
      {
        id: '/sponsor/30.jpg',
        title: '麗寶樂園',
        link: 'https://www.lihpaoresort.com/LihpaolandApp'
      }
      // {
      //   id: '/sponsor/28.jpg',
      //   title: '',
      //   link: ''
      // }
    ]
  }
</script>

<template>
  <div class="py-16">
    <div class="container flex flex-col">
      <div class="grid-col-1 grid border-b pb-8 md:grid-cols-2">
        <div class="mb-5 md:mb-0">
          <div class="mb-5 font-bold">主辦單位</div>
          <div class="grid grid-cols-2 gap-8">
            <a
              v-for="(item, index) in companiesList?.organizer"
              :key="index"
              :href="item.link"
              target="_blank"
              class="h-[50px]"
            >
              <img
                class="h-full object-contain"
                :src="`${imagePath}${item.id}`"
                :alt="item.title"
              />
            </a>
          </div>
        </div>
        <div>
          <div class="mb-5 font-bold">協辦單位</div>
          <div class="grid grid-cols-2 gap-8">
            <a
              v-for="(item, index) in companiesList?.assistantOrganizer"
              :key="index"
              :href="item.link"
              target="_blank"
              class="h-[50px]"
            >
              <img
                class="h-full object-contain"
                :src="`${imagePath}${item.id}`"
                :alt="item.title"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="border-b py-8">
        <div class="mb-5 font-bold">共同主辦</div>
        <div class="grid grid-cols-2 gap-8 sm:grid-cols-3">
          <a
            v-for="(item, index) in companiesList?.coOrganizer"
            :key="index"
            :href="item.link"
            target="_blank"
            class="h-[50px]"
          >
            <img
              class="h-full object-contain"
              :src="`${imagePath}${item.id}`"
              :alt="item.title"
            />
          </a>
        </div>
      </div>

      <div class="border-b py-8">
        <div class="mb-5 font-bold">教育夥伴</div>
        <div class="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
          <a
            v-for="(item, index) in companiesList.educationPartners"
            :key="index"
            :href="item.link"
            target="_blank"
            class="h-[50px]"
          >
            <img
              class="h-full object-contain"
              :src="`${imagePath}${item.id}`"
              :alt="item.title"
            />
          </a>
        </div>
      </div>
      <div class="border-b py-8">
        <div class="mb-5 font-bold">合作夥伴</div>
        <div class="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
          <a
            v-for="(item, index) in companiesList.partners"
            :key="index"
            :href="item.link"
            target="_blank"
            class="h-[50px]"
          >
            <img
              class="h-full object-contain"
              :src="`${imagePath}${item.id}`"
              :alt="item.title"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
