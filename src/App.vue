<script setup>
import { RouterLink, RouterView } from "vue-router";
import TheNav from "@/components/NavSection/TheNav.vue";
import TheFooter from "@/components/FooterSection/TheFooter.vue";
</script>

<template>
  <TheNav />
  <div class="flex-wrapper">
    <RouterView />
    <TheFooter />
  </div>
</template>

<style>
@import "@/assets/reset.css";
@import "@/assets/base.css";
@import "@/assets/app.css";
</style>
