<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

</script>

<template>
  <footer>
        <div class="footer">
          <div class="footer-copyright">
            <p>2023 Mathilde Cl.</p>
          </div>

          <div class="footer-links">
            <a href="https://www.linkedin.com/in/mathilde-clerbout/" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
            <a href="https://github.com/clematilde" target="_blank"><font-awesome-icon :icon="['fab', 'github']" /></a>
            <a href=mailto:mathilde.clerbout@gmail.com><font-awesome-icon :icon="['fas', 'envelope']" /></a>
          </div>
        </div>
    </footer>
</template>

<style scoped>

.footer {
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 0px 20px;
}

.footer-links {
  display: flex;
  align-items: center;
}

.footer-links a {
  color: black;
  text-decoration: none;
  font-size: 24px;
  padding: 0px 10px;
}
.footer-links a:hover {
  color: #204E1F;
}

.footer-copyright {
  font-size: x-small;
}

</style>
