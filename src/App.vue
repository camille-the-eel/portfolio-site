<script setup>
import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from "@/components/HelloWorld.vue";
import TheNav from "@/components/NavSection/TheNav.vue";
import TheFooter from "@/components/FooterSection/TheFooter.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <TheNav />
      <!-- <HelloWorld msg="You did it!" /> -->
    </div>
  </header>
  <RouterView />
  <TheFooter />
</template>

<style>
@import "@/assets/reset.css";
@import "@/assets/base.css";
/* @import "@/assets/main.css"; */
</style>
