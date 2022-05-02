<script setup>
import { RouterLink } from "vue-router";
import { ChevronDownIcon } from "@heroicons/vue/solid";
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/" class="circle"><span>H</span></RouterLink>
      <ul class="dropdown-container">
        <li>
          WORK<ChevronDownIcon class="dropdown-icon" />
          <ul class="dropdown-menu">
            <li>
              <RouterLink to="/work" class="nav-item dropdown-item"
                >Development
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/work" class="nav-item dropdown-item">
                Design
              </RouterLink>
            </li>
          </ul>
        </li>
      </ul>
      <RouterLink to="/about" class="nav-item">ABOUT</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
@import "@/components/NavSection/nav.css";
</style>
