<script setup>
  import { onMounted } from "vue";
  import { Tooltip, initTWE } from "tw-elements";

  import BG from '../assets/img/bg_all.gif'
  onMounted(() => {
    initTWE({ Tooltip });
  });
</script>

<template>
  <div class="mt-16 flex justify-center" :style="{background: `url(${BG})`}">
    <p class="text-lg">
      Hover the link to see the
      <a
        href="#"
        class="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
        data-twe-toggle="tooltip"
        title="Hi! I'm tooltip"
        >tooltip</a
      >
      <img src="../assets/img/date.png">
    </p>
  </div>
</template>