<script setup>
import TheHero from "@/components/HeroSection/TheHero.vue";
import TheResume from "@/components/ResumeSection/TheResume.vue";
</script>

<template>
  <main>
    <div class="dashed-circle-position-container">
      <div class="bounding-box">
        <div class="dashed-circle-flex-container">
          <div class="dashed-circle-outer"></div>
          <div class="dashed-circle-inner"></div>
        </div>
      </div>
    </div>
    <TheHero />
    <TheResume />
  </main>
</template>

<!-- <style scoped>
.dashed-circle-position-container {
  z-index: -1;
  position: relative;
  /* overflow: hidden; */
}

.bounding-box {
  position: absolute;
  background-color: blue;
  height: 150px;
  width: 150px;
  right: 0px;
  top: 0px;
}

.dashed-circle-flex-container {
  position: absolute;
  display: grid;
  grid-template-areas: "box";
  place-items: center;
}

.dashed-circle-inner {
  grid-area: box;
  border: 1.5px dashed var(--color-accent-medium-dark);
  height: 130px;
  width: 130px;
  border-radius: 50%;
}

.dashed-circle-outer {
  grid-area: box;
  border: 1.5px dashed var(--color-accent-medium-dark);
  height: 150px;
  width: 150px;
  border-radius: 50%;
}
</style> -->
