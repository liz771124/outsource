<script setup>
import Navbar from '../src/components/Navbar.vue'
import Footer from '../src/components/Footer.vue'
</script>

<template>
  <div>
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>
