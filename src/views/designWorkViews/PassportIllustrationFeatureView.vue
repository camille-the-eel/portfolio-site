<!-- TODO: access props from route -->

<template>
  <PageHeader pageCategory="GRAPHIC DESIGN" pageTitle="WORK" />
  <!-- TODO: DesignFeatureHeader here, using props passed from route -->
  <!-- <div v-for="src in work.showcaseFilePaths" class="img-container">
    <img :src="src" />
  </div> -->
  <!-- <img :src="work.showcaseFilePaths[0]" />
  <img :src="work.showcaseFilePaths[1]" />
  <img :src="work.showcaseFilePaths[2]" />
  <img :src="work.showcaseFilePaths[3]" /> -->
  <img :src="path1" />
  <img :src="path2" />
  <img :src="path3" />
  <img :src="path4" />
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";

import passport1 from "@/assets/designAssets/hg-passport/passport-showcase-1.jpg";
import passport2 from "@/assets/designAssets/hg-passport/passport-showcase-2.jpg";
import passport3 from "@/assets/designAssets/hg-passport/passport-showcase-3.jpg";
import passport4 from "@/assets/designAssets/hg-passport/passport-showcase-4.jpg";

export default {
  // name: "DesignFeatureView",
  name: "PassportIllustrationFeatureView",
  components: {
    PageHeader,
  },
  props: {
    work: Object,
  },
  data() {
    return {
      path1: passport1,
      path2: passport2,
      path3: passport3,
      path4: passport4,
    };
  },
};
</script>

<style>
img {
  max-width: 80%;
  margin: 0 auto 3rem auto;
}
</style>
