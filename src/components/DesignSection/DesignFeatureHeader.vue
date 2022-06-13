<template>
  <div class="work-feature-header-container">
    <div class="work-feature-img-wrapper">
      <img :src="work.featureFilePath" class="work-feature-img" />
    </div>
    <div class="work-feature-content">
      <h6 class="work-feature-client">CLIENT: {{ work.client }}</h6>
      <h1 class="work-feature-header">{{ work.showcaseTitle }}</h1>
      <p class="work-feature-details">
        {{ work.description }}<br /><br />&#169;{{ work.dateYear }}
      </p>
      <p class="work-feature-tags">{{ workFeatureTags }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DesignFeatureHeader",
  props: {
    work: Object,
  },
  computed: {
    workFeatureTags() {
      return this.work.tags.join(", ");
    },
  },
};
</script>

<style scoped>
.work-feature-header-container {
  margin-top: 3rem;
  margin-bottom: 6rem;
}
.work-feature-content {
  max-width: 70%;
  margin: 0 auto 4rem auto;
  padding-left: 2rem;
}
.work-feature-client {
  margin-bottom: 0.6rem;
}

.work-feature-header {
  line-height: 140%;
  font-weight: 700;
  font-size: 3.8rem;
  font-style: normal;
  margin-bottom: 1.8rem;
}

.work-feature-details {
  font-weight: 300;
  margin-bottom: 1.8rem;
}

.work-feature-tags {
  font-weight: 700;
  font-style: normal;
}

.work-feature-img-wrapper {
  max-width: 75%;
  margin: 0 auto 4rem auto;
}

.work-feature-img {
  width: 100%;
}

/* 0px and 324px */
@media (min-width: 0em) and (max-width: 18em) {
  .work-feature-header {
    font-size: 3rem;
  }
}

/* 512px */
@media (min-width: 32em) {
  .work-feature-content {
    max-width: 60%;
  }
  .work-feature-img-wrapper {
    max-width: 65%;
  }
}

/* 700px */
@media (min-width: 43.75em) {
  .work-feature-header-container {
    display: grid;
    grid-template-columns: 1fr 1.15fr;
    grid-template-rows: repeat(2, min-content);
    gap: 2em;
    max-width: 90%;
    margin: 3em auto;
    /* temporary bottom margin */
    margin-bottom: 50px;
  }

  .work-feature-content {
    grid-column-start: 1;
    grid-row-start: 1;
    padding-top: 1em;
    max-width: 90%;
    margin-left: 10%;
  }

  .work-feature-img-wrapper {
    grid-column-start: 2;
    max-width: 80%;
  }
}
/* GRID SET UP FOR ALL SCREENS LARGER THAN 724PX -- NO MAX-WIDTH BOUNDARY FOR THESE SETTINGS  */
</style>
