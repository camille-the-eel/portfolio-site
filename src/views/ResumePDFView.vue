<template>
  <div class="pdf-wrapper">
    <VuePdfEmbed
      source="../src/assets/CamilleHughesResume2022.pdf"
      class="pdf"
    ></VuePdfEmbed>
  </div>
</template>

<script>
import VuePdfEmbed from "vue-pdf-embed";

export default {
  components: {
    VuePdfEmbed,
  },
};
</script>

<style>
.pdf-wrapper {
  border: 1px solid var(--color-accent-medium-light);
  box-shadow: 10px 12px 1px 1px rgba(0, 0, 0, 0.15);
  width: 90%;
  margin: 10rem auto;
  overflow: scroll;
}

.pdf {
  width: 100%;
}

/* 1000px and up */
@media (min-width: 62.5em) {
  .pdf-wrapper {
    width: 70%;
  }
}
</style>
