<template>
  <div class="h-screen w-screen bg-gray-100">
    <div class="mx-auto relative" style="width: 1200px; height: 768px">
      <!-- 編輯區域 -->
      <div class="absolute inset-0 border-2 border-dashed border-gray-300 overflow-hidden"
        @dragover.prevent
        @drop="handleDrop"
      >
        <vue-draggable-resizable
          v-for="item in placedItems"
          :key="item.id"
          :w="item.width"
          :h="item.height"
          :x="item.x"
          :y="item.y"
          :parent="true"
          :min-width="50"
          :min-height="50"
          :draggable="true"
          :resizable="true"
          class-name="item-container"
          @dragstop="onDragStop($event, item)"
          @resizestop="onResizeStop($event, item)"
          @activated="selectedItem = item"
        >
          <img
            :src="item.src"
            class="h-full w-full object-contain"
            :alt="item.type"
            draggable="false"
          />
          <button
            v-show="selectedItem?.id === item.id"
            class="absolute right-2 top-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 z-50"
            @click="removeItem(item)"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
            </svg>
          </button>
        </vue-draggable-resizable>
      </div>

      <!-- 組件選擇器 -->
      <div class="absolute left-4 top-4 w-64 bg-white p-4 shadow-lg rounded-lg z-50 max-h-[80vh] overflow-y-auto">
        <div v-for="category in categories" :key="category.id" class="mb-4">
          <div 
            class="flex items-center justify-between cursor-pointer p-2 bg-gray-50 hover:bg-gray-100 rounded"
            @click="toggleCategory(category.id)"
          >
            <h3 class="font-bold">{{ category.name }}</h3>
            <svg 
              class="w-4 h-4 transition-transform"
              :class="{ 'rotate-180': expandedCategories.includes(category.id) }"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
          <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-y-0 opacity-0"
            enter-to-class="transform scale-y-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-y-100 opacity-100"
            leave-to-class="transform scale-y-0 opacity-0"
          >
            <div v-show="expandedCategories.includes(category.id)" class="pl-4 mt-2 space-y-2">
              <div 
                v-for="item in category.items" 
                :key="item.id"
                class="cursor-move border rounded p-2 hover:bg-gray-50"
                draggable="true"
                @dragstart="handleDragStart($event, item)"
              >
                <img :src="item.src" :alt="item.type" class="w-full" />
                <p class="mt-2 text-sm">{{ item.type }}</p>
              </div>
            </div>
          </transition>
        </div>
      </div>

      <!-- 重置按鈕 -->
      <button
        class="absolute bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        @click="resetCanvas"
      >
        重置畫布
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import VueDraggableResizable from 'vue3-draggable-resizable'
import 'vue3-draggable-resizable/dist/Vue3DraggableResizable.css'
import A from '../assets/pngtree-cabinet-for-home-decoration-png-image_11614703.png'
import B from '../assets/B.png'

const categories = ref([
  {
    id: 1,
    name: '櫃子A',
    items: [
      {
        id: 'a1',
        type: '單層',
        src: A,
        width: 200,
        height: 200,
      },
      {
        id: 'a2',
        type: '雙層',
        src: B,
        width: 200,
        height: 400,
      }
    ]
  },
  {
    id: 2,
    name: '櫃子B',
    items: [
      {
        id: 'b1',
        type: '三層',
        src: A,
        width: 200,
        height: 600,
      }
    ]
  }
])

const placedItems = ref([])
const selectedItem = ref(null)
const expandedCategories = ref([])
let nextId = 1

const toggleCategory = (categoryId) => {
  const index = expandedCategories.value.indexOf(categoryId)
  if (index === -1) {
    expandedCategories.value.push(categoryId)
  } else {
    expandedCategories.value.splice(index, 1)
  }
}

const handleDragStart = (e, item) => {
  e.dataTransfer.effectAllowed = 'copy';
  e.dataTransfer.setData('application/json', JSON.stringify({
    ...item,
    id: `placed-${nextId++}`,
    x: 0,
    y: 0
  }));
}


const onDragStop = (e, item) => {
  item.x = e.x
  item.y = e.y
}

const onResizeStop = (e, item) => {
  item.width = e.width
  item.height = e.height
}

const removeItem = (item) => {
  const index = placedItems.value.findIndex(i => i.id === item.id)
  if (index > -1) {
    placedItems.value.splice(index, 1)
  }
}

const resetCanvas = () => {
  placedItems.value = []
}

const handleDrop = (e) => {
  e.preventDefault();
  const data = e.dataTransfer.getData('application/json');
  if (data) {
    const droppedItem = JSON.parse(data);
    droppedItem.x = e.offsetX; // 取得相對於目標元素的 x 座標
    droppedItem.y = e.offsetY; // 取得相對於目標元素的 y 座標
    placedItems.value.push(droppedItem);
  }
}


</script>

<style>
.item-container {
  border: 1px solid #ddd;  background: white;
}
.item-container.active {
  border: 2px solid #4299e1;
}
</style>