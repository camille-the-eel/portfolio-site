<template>
  <div class="resume-accent-container">
    <div class="resume-accent-grid-container">
      <!-- TODO:  homepage desktop only accent rule -->
      <!-- <a href="" :class="[customClass, 'item-0']"> -->
      <RouterLink to="/resume" class="item-0">
        <h1>RESUME</h1>
        <div :class="customClass"></div>
      </RouterLink>
      <!-- <a href="" class="item-0">
        <h1>RESUME</h1>
        <div :class="customClass"></div>
      </a> -->
      <div class="resume-accent-item item-1"></div>
      <div class="resume-accent-item item-2"></div>
      <div class="resume-accent-item item-3"></div>
      <div class="resume-accent-item item-4"></div>
      <div class="resume-accent-item item-5"></div>
      <div class="resume-accent-item item-6"></div>
      <div class="resume-accent-item item-7"></div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "TheResume",
  props: {
    customClass: String,
  },
  components: {
    RouterLink,
  },
};
</script>

<style scoped>
@import "@/components/ResumeSection/resume.css";
</style>
