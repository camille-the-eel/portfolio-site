<!-- TODO: access props from route -->

<template>
  <PageHeader page-category="GRAPHIC DESIGN" page-title="WORK" />
  <div v-bind="$attrs"></div>
  <!-- TODO: DesignFeatureHeader here, using props passed from route -->
  <!-- <div v-for="src in work.showcaseFilePaths" class="img-container">
    <img :src="src" />
  </div> -->
  <!-- <img :src="work.showcaseFilePaths[0]" />
  <img :src="work.showcaseFilePaths[1]" />
  <img :src="work.showcaseFilePaths[2]" />
  <img :src="work.showcaseFilePaths[3]" /> -->
  <h3>{{ routeName }}</h3>
  <h2>Hi {{ workDetails.thumbnailTitle }}</h2>
  <img :src="path1" class="feature-img" />
  <img :src="path2" class="feature-img" />
  <img :src="path3" class="feature-img" />
  <img :src="path4" class="feature-img" />
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";

import passport1 from "@/assets/designAssets/hg-passport/passport-showcase-1.jpg";
import passport2 from "@/assets/designAssets/hg-passport/passport-showcase-2.jpg";
import passport3 from "@/assets/designAssets/hg-passport/passport-showcase-3.jpg";
import passport4 from "@/assets/designAssets/hg-passport/passport-showcase-4.jpg";

export default {
  name: "DesignFeatureView",
  components: {
    PageHeader,
  },
  props: ["routeName"],
  data() {
    return {
      workDetails: {},
      path1: passport1,
      path2: passport2,
      path3: passport3,
      path4: passport4,
    };
  },
  created() {
    if (this.$route.params) {
      console.log("p", this.$route.params);
      console.log("a", this.$attrs);
      this.workDetails = this.$attrs;
    }
  },
};
</script>

<style>
.feature-img {
  max-width: 80%;
  margin: 0 auto 3rem auto;
}
</style>
