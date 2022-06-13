]
<template>
  <PageHeader page-category="GRAPHIC DESIGN" page-title="WORK" />
  <div class="feature-view-container">
    <DesignFeatureHeader :work="work" />
    <div class="showcase-img-container">
      <div :key="src" v-for="src in work.showcaseFilePaths">
        <img :src="src" :class="['showcase-imgs', routeName]" />
      </div>
      <div
        :key="work.additionalCredit.id"
        v-for="entry in work.additionalCredit"
        class="credit-container"
      >
        <p>
          {{ entry.projectContribution }}
          <a :href="entry.url"
            ><b>
              {{ entry.name }}
            </b>
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import DesignFeatureHeader from "@/components/DesignSection/DesignFeatureHeader.vue";

export default {
  name: "DesignFeatureView",
  components: {
    PageHeader,
    DesignFeatureHeader,
  },
  props: ["routeName"],
  methods: {
    workDetails(route) {
      this.work = this.$store.getters.getFilteredWorkDetails(route);
      // console.log(this.work);
    },
  },
  created() {
    this.workDetails(this.routeName);
  },
};
</script>

<style>
.feature-view-container {
  margin-bottom: 10rem;
}

.showcase-img-container {
  max-width: 100%;
  margin: 0 auto;
}

.showcase-imgs {
  max-width: 100%;
  margin-bottom: 3rem;
}

.credit-container {
  max-width: 80%;
  margin: 0 auto;
}

.the-incision-logo {
  margin-bottom: 15rem;
}

/* 512px */
@media (min-width: 32em) {
  .showcase-img-container {
    max-width: 80%;
  }

  .credit-container {
    max-width: 100%;
  }
}
</style>
