<script setup>
import HeroHeader from "@/components/HeroSection/HeroHeader.vue";
import AccentCircle from "@/components/AccentElements/AccentCircle.vue";
import AccentRules from "@/components/AccentElements/AccentRules.vue";
</script>

<template>
  <div class="hero-container">
    <h1 class="hero-title">
      CAMILLE HUGHES IS A JAVASCRIPT DEVELOPER & GRAPHIC DESIGNER
    </h1>
    <div class="hero-desktop-rule"></div>
    <div class="hero-header-container">
      <AccentRules class="accent-rules-component" />
      <div class="hero-header-wrapper main-item-0">
        <HeroHeader
          class="dark"
          href="/development"
          subHeader="JAVASCRIPT, VUE, HTML, CSS, APIs"
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

.accent-rules-component {
  display: none;
}

.hero-title {
  max-width: 40rem;
  font-weight: 300;
  margin-bottom: 7rem;
  margin-left: 6vw;
  margin-top: 3vh;
  margin-right: 4rem;
}

.hero-header-container {
  display: grid;
  grid-template-columns: 1fr 3fr 1.5fr;
  grid-template-rows: repeat(2, min-content);
  gap: 3rem 1rem;
  margin-bottom: 10vh;
  overflow: hidden;
}

.hero-header-wrapper {
  grid-column: 1 / -1;
}

@media (min-width: 31em) and (max-width: 48.9999999em) {
  .heroAccent {
    display: block;
  }
  .accent-rules-component {
    place-self: end;
    display: grid;
    margin-bottom: 1em;
  }

  .hero-header-container {
    grid-template-columns: 1.25fr 3fr 1.75fr;
  }

  .main-item-0 {
    grid-column: 2 / -1;
  }

  .main-item-1 {
    grid-column: 1 / -2;
  }
}

@media (min-width: 49em) {
  .hero-header-container {
    grid-template-columns: 2fr 3.125em 3fr;
    grid-template-rows: 1.5fr 1fr 1.75fr;
    gap: 1.8em 0.6em;
    margin-bottom: 10vh;
  }

  .main-item-0 {
    grid-column: 3 / -1;
    grid-row: 1 / -2;
  }

  .main-item-1 {
    grid-column: 1 / 2;
    grid-row: 2 / -1;
  }
}

/* ------------------------------ */
/* Home Page Rule Accent – Desktop Only  */
/* --------------------------- */
@media (min-width: 49em) {
  .hero-header-container {
    position: relative;
  }
  .hero-desktop-rule {
    position: absolute;
    left: 10vw;
    top: 9em;
    height: 20em;
    width: 0.09em;
    background: repeating-linear-gradient(
      to top,
      var(--color-accent-medium-dark) 0,
      var(--color-accent-medium-dark) 0.625em,
      transparent 0.75em,
      transparent 1.25em
    );
  }
}
</style>
