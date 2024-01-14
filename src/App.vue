<script setup>
import { RouterView } from 'vue-router'
import TheNavbar from './components/TheNavbar.vue';
import TheFooter from './components/TheFooter.vue';
import { ref, onMounted, onUnmounted } from "vue";

// footer appears on scroll:

const scrollPosition = ref(0);
const showFooter = ref(false);

const handleScroll = () => {
  scrollPosition.value = window.scrollY;
  showFooter.value = scrollPosition.value > 5;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

</script>

<template>
  <TheNavbar />


  <RouterView />
  <TheFooter v-if="showFooter" />


</template>

<style scoped>


</style>
