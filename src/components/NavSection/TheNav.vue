<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/" class="circle"><span>H</span></RouterLink>
      <!-- create dropdown menu for 'work' -->
      <RouterLink to="/work" class="nav-item">WORK</RouterLink>
      <RouterLink to="/about" class="nav-item">ABOUT</RouterLink>
    </nav>
  </header>
</template>

<style>
nav {
  background-color: #fff;
  padding-right: 10px;
  height: 70px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  position: relative;
}

.circle {
  background-color: var(--color-accent-dark);
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  aspect-ratio: 1/1;
  position: absolute;
  top: 3vh;
  left: 3vh;
  text-decoration: none;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-item {
  padding: 10px;
  background-color: white;
  text-decoration: none;
}

a:active.circle,
a:visited.circle {
  color: var(--color-text);
}

a:link.circle,
a:hover.circle {
  color: var(--color-accent-light);
}

a:link.nav-item,
a:visited.nav-item {
  color: var(--color-text);
  font-size: 16px;
  font-weight: 400;
  font-style: italic;
}

a:hover.nav-item,
a:active.nav-item {
  font-weight: 800;
  font-style: normal;
}

/* @import "@/assets/reset.css"; */
</style>
