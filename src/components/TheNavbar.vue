<script setup>
// import TheTitle from './components/TheTitle.vue'

</script>

<template>
  <div class="navbar">
    <nav>
      <div class="nav-items">
          <RouterLink to="/" class="nav-item">Home</RouterLink>
          <RouterLink to="/about" class="nav-item">About</RouterLink>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.navbar {
  margin-top: 30px;
  display: flex;
  justify-content: flex-end; /* Push both items to the right */
}

.nav-item {
  color: #21631F;
  padding: 15px;
  font-weight: 800;
}
</style>
