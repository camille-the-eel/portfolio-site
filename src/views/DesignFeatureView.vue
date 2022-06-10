]
<template>
  <PageHeader page-category="GRAPHIC DESIGN" page-title="WORK" />
  <DesignFeatureHeader />
  <h3>{{ routeName }}</h3>
  <h6>{{ work.showcaseTitle }}</h6>
  <div
    :key="src"
    v-for="src in work.showcaseFilePaths"
    class="showcase-img-container"
  >
    <img :src="src" class="showcase-imgs" />
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
.showcase-img-container {
  max-width: 80%;
}

.showcase-imgs {
  max-width: 80%;
  margin: 0 auto 3rem auto;
}
</style>
