<template>
  <div :class="(customClass, 'hero-header-box')">
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
  padding: 32px 0 40px 20px;
}

.plus-icon {
  width: 20px;
  margin: 15px 0 30px 0;
  fill: var(--color-accent-medium-dark);
}

.bottom-accent {
  width: 100%;
  height: 12px;
  background-color: var(--color-accent-medium-dark);
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
  border-top: solid 2px var(--color-accent-dark);
  border-bottom: solid 2px var(--color-accent-dark);
}

@media (min-width: 500px) and (max-width: 774px) {
  .hero-header-link-box {
    padding: 32px 0 80px 40px;
  }

  .light.hero-header-box {
    border-right: solid 2px var(--color-accent-dark);
  }
}

@media (min-width: 775px) {
  .hero-header-link-box {
    padding: 50px 0 140px 50px;
  }

  .light.hero-header-box {
    border-right: solid 2px var(--color-accent-dark);
  }
}
</style>
