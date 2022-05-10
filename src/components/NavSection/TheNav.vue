<script setup>
import { RouterLink } from "vue-router";
import { ChevronDownIcon } from "@heroicons/vue/solid";
import AccentCircle from "@/components/AccentElements/AccentCircle.vue";
</script>

<template>
  <!-- BUG "H" Home indicator needs to be aware of component conditional rendering and display based on "Home page false" -->
  <AccentCircle class="navAccent" />
  <header>
    <nav>
      <RouterLink to="/" class="circle"><span>H</span></RouterLink>
      <div class="nav-link-container">
        <ul class="dropdown-container">
          <li class="nav-work">
            WORK<ChevronDownIcon class="dropdown-icon" />
            <ul class="dropdown-menu">
              <li>
                <RouterLink to="/development" class="nav-item dropdown-item"
                  >Development
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/design" class="nav-item dropdown-item">
                  Design
                </RouterLink>
              </li>
            </ul>
          </li>
        </ul>
        <RouterLink to="/about" class="nav-item nav-about">ABOUT</RouterLink>
      </div>
    </nav>
  </header>
</template>

<style scoped>
@import "@/components/NavSection/nav.css";
</style>
