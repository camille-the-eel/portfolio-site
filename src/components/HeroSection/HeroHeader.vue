<template>
  <div :class="[customClass, 'hero-header-box']">
    <div class="hero-header-link-box">
      <a :href="href" class="hero-header-link">
        <h6>{{ subHeader }}</h6>
        <h1>{{ mainHeaderLine1 }}<br />{{ mainHeaderLine2 }}</h1>
        <PlusIcon class="plus-icon" />
      </a>
    </div>
    <div class="bottom-accent"></div>
  </div>
</template>

<script>
import { PlusIcon } from "@heroicons/vue/solid";
export default {
  name: "HeroHeader",
  props: {
    customClass: String,
    href: String,
    subHeader: String,
    mainHeaderLine1: String,
    mainHeaderLine2: String,
  },
  components: {
    PlusIcon,
  },
};
</script>

<style scoped>
.hero-header-link-box {
  padding: 3.2rem 0 4rem 2rem;
}

h6 {
  padding-right: 30px;
  margin-bottom: 1rem;
}

.plus-icon {
  width: 2rem;
  margin: 1.5rem 0 3rem 0;
  fill: var(--color-accent-medium);
}

.bottom-accent {
  width: 100%;
  height: 1.2rem;
  background-color: var(--color-accent-medium);
}

.dark.hero-header-box {
  background-color: var(--color-accent-dark);
}

.dark h6,
.dark h1 {
  color: #fff;
}

.light.hero-header-box {
  background-color: none;
  border-top: solid 0.2rem var(--color-accent-dark);
  border-bottom: solid 0.2rem var(--color-accent-dark);
}

@media (min-width: 31em) and (max-width: 48.999999em) {
  .hero-header-link-box {
    padding: 2em 0 5em 2.5em;
  }

  .light.hero-header-box {
    border-right: solid 0.125em var(--color-accent-dark);
  }
}

@media (min-width: 49em) {
  .hero-header-link-box {
    padding: 3em 0 8.75em 3em;
  }

  .light.hero-header-box {
    border-right: solid 0.125em var(--color-accent-dark);
  }
}
</style>
