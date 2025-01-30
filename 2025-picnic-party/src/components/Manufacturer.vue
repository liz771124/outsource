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
    assistantOrganizer: [
      {
        id: '/sponsor/03.png',
        title: '遠見天下文化教育基金會',
        link: 'https://www.cwgv.com.tw/zh/foundation.html'
      }
    ],
    coOrganizer: [
      {
        id: '/sponsor/03.jpg',
        title: '新北市政府',
        link: 'https://www.ntpc.gov.tw/ch/index.jsp'
      },
      {
        id: '/sponsor/04.jpg',
        title: '新北市政府教育局',
        link: 'https://www.ntpc.edu.tw/'
      },
      {
        id: '/sponsor/05.jpg',
        title: '新北市家庭教育中心',
        link: 'https://ntpc.familyedu.moe.gov.tw/'
      }
    ],

    educationPartners: [
      {
        id: '/sponsor/07.png',
        title: '思博特',
        link: 'https://www.igogosport.com/'
      },
      {
        id: '/sponsor/08.png',
        title: '兒福聯盟',
        link: null
      },
      {
        id: '/sponsor/09.png',
        title: '小蚊清',
        link: 'https://shop.farcent.com.tw/collections/p0'
      },
      {
        id: '/sponsor/10.png',
        title: '初鹿牧場',
        link: 'https://www.chuluranch.com.tw/'
      },
      {
        id: '/sponsor/11.png',
        title: '農業部',
        link: 'https://www.moa.gov.tw/'
      },
      {
        id: '/sponsor/12.png',
        title: '德恩奈',
        link: 'https://www.day-night.com.tw/'
      }
    ],
    partners: [
      {
        id: '/sponsor/13.jpg',
        title: '妙管家',
        link: 'https://www.amah.com.tw/'
      },
      {
        id: '/sponsor/14.jpg',
        title: '知覺優格',
        link: 'https://www.yogurt-zj.com/'
      },
      {
        id: '/sponsor/15.jpg',
        title: '小兒利撒爾',
        link: null
      },
      {
        id: '/sponsor/16.jpg',
        title: '純淨之羽',
        link: null
      },
      {
        id: '/sponsor/17.jpg',
        title: '享居',
        link: null
      },
      {
        id: '/sponsor/18.jpg',
        title: '象印',
        link: 'https://www.zojirushi.com.tw/'
      },
      {
        id: '/sponsor/19.jpg',
        title: '美琪',
        link: 'https://www.mmsoap.com.tw/'
      }
    ]
  }
</script>

<template>
  <div class="py-16">
    <div class="container flex flex-col gap-y-5">
      <div class="grid-col-1 grid border-b py-3 md:grid-cols-2">
        <div>
          <div class="mb-3 font-bold">主辦單位</div>
          <div class="grid grid-cols-2 gap-3">
            <a
              v-for="(item, index) in companiesList?.organizer"
              :key="index"
              :href="item.link"
              target="_blank"
            >
              <img :src="`${imagePath}${item.id}`" :alt="item.title" />
            </a>
          </div>
        </div>
        <div>
          <div class="mb-3 font-bold">協辦單位</div>
          <div class="grid grid-cols-2 gap-3">
            <a
              v-for="(item, index) in companiesList?.assistantOrganizer"
              :key="index"
              :href="item.link"
              target="_blank"
            >
              <img :src="`${imagePath}${item.id}`" :alt="item.title" />
            </a>
          </div>
        </div>
      </div>
      <div class="border-b py-3">
        <div class="mb-3 font-bold">協辦單位</div>
        <div class="grid grid-cols-3 gap-3">
          <a
            v-for="(item, index) in companiesList?.coOrganizer"
            :key="index"
            :href="item.link"
            target="_blank"
          >
            <img :src="`${imagePath}${item.id}`" :alt="item.title" />
          </a>
        </div>
      </div>

      <div class="border-b py-3">
        <div class="mb-3 font-bold">共同主辦</div>
        <div class="grid grid-cols-2 gap-3 md:grid-cols-4">
          <a
            v-for="(item, index) in companiesList?.partners"
            :key="index"
            :href="item.link"
            target="_blank"
          >
            <img :src="`${imagePath}${item.id}`" :alt="item.title" />
          </a>
        </div>
      </div>
      <div class="border-b py-3">
        <div class="mb-3 font-bold">共同主辦</div>
        <div class="grid grid-cols-2 gap-3 md:grid-cols-4">
          <a
            v-for="(item, index) in companiesList.educationPartners"
            :key="index"
            :href="item.link"
            target="_blank"
          >
            <img :src="`${imagePath}${item.id}`" :alt="item.title" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
