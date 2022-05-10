<script setup>
import HeroHeader from "@/components/HeroSection/HeroHeader.vue";
import AccentCircle from "@/components/AccentElements/AccentCircle.vue";
</script>

<template>
  <div class="hero-container">
    <h1 class="hero-title">
      CAMILLE HUGHES IS A JAVASCRIPT DEVELOPER & GRAPHIC DESIGNER
    </h1>
    <div class="hero-header-container">
      <div class="hero-header-wrapper main-item-0">
        <HeroHeader
          class="dark"
          href="/development"
          subHeader="JAVASCRIPT, CSS, VUE, APIs, GIT"
          mainHeaderLine1="WEB"
          mainHeaderLine2="DEVELOPMENT"
        />
      </div>
      <div class="hero-header-wrapper main-item-1">
        <HeroHeader
          class="light"
          href="/design"
          subHeader="LAYOUTS, LOGOS, STAMPS"
          mainHeaderLine1="GRAPHIC"
          mainHeaderLine2="DESIGN"
        />
      </div>
      <AccentCircle class="heroAccent" />
    </div>
  </div>
</template>

<style scoped>
.heroAccent {
  display: none;
}

.hero-title {
  max-width: 400px;
  /* max-width: 285px; */
  font-weight: 300;
  margin-bottom: 70px;
  margin-left: 6vw;
  margin-top: 2vh;
}

.hero-header-container {
  display: grid;
  grid-template-columns: 1fr 3fr 1.5fr;
  grid-template-rows: repeat(2, min-content);
  gap: 30px 10px;
  margin-bottom: 10vh;
  overflow: hidden;
}

.hero-header-wrapper {
  grid-column: 1 / -1;
}

@media (min-width: 500px) and (max-width: 774px) {
  .heroAccent {
    display: block;
  }

  .main-item-0 {
    grid-column: 2 / -1;
  }

  .main-item-1 {
    grid-column: 1 / -2;
  }
}

@media (min-width: 775px) {
  .hero-header-container {
    grid-template-columns: 2fr 50px 3fr;
    grid-template-rows: 1.5fr 1fr 1.75fr;
    gap: 30px 10px;
    margin-bottom: 10vh;
  }

  /* .heroAccent {
    display: block;
  } */

  .main-item-0 {
    grid-column: 3 / -1;
    grid-row: 1 / -2;
  }

  .main-item-1 {
    grid-column: 1 / 2;
    grid-row: 2 / -1;
  }
}
</style>
