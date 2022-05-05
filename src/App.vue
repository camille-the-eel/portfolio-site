<script setup>
import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from "@/components/HelloWorld.vue";
import TheNav from "@/components/NavSection/TheNav.vue";
import TheFooter from "@/components/FooterSection/TheFooter.vue";
</script>

<template>
  <TheNav />
  <div class="flex-wrapper">
    <!-- <HelloWorld msg="You did it!" /> -->
    <RouterView />
    <TheFooter />
  </div>
</template>

<style>
@import "@/assets/reset.css";
@import "@/assets/base.css";
@import "@/assets/main.css";
</style>
