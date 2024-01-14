<script setup>
import {ref, onMounted, onUnmounted} from "vue"
import TheTitle from '../components/TheTitle.vue'
import TheMainContent from '../components/TheMainContent.vue'


// Compute the timeline's top position based on scroll position

const scrollPosition = ref(0);

const handleScroll = () => {
  scrollPosition.value = window.scrollY;
  console.log(scrollPosition.value)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
})
</script>

<template>
  <main>
    <TheTitle />
    <TheMainContent v-if="scrollPosition > 5"/>


  </main>
</template>

<style scoped>

</style>
