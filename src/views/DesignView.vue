<template>
  <div class="design-page-head">
    <PageHeader pageCategory="GRAPHIC DESIGN" pageTitle="WORK" />
  </div>
  <div class="design-page-content">
    <DesignWorkContainer :designWork="designWork" />
  </div>
  <!-- <AccentRules /> -->
  <TheResume />
</template>

<script>
// COMPONENTS
import PageHeader from "@/components/PageHeader.vue";
import TheResume from "@/components/ResumeSection/TheResume.vue";
import AccentRules from "@/components/AccentElements/AccentRules.vue";
import DesignWorkContainer from "@/components/DesignSection/DesignWorkContainer.vue";

// THUMBNAIL IMAGE PATHS FOR STATE DATA
// import pathLobbyMenuThumbnail from "@/assets/designAssets/";
import pathLobbyMenuThumbnail from "@/assets/designAssets/cr-brochure/brochure_CR-mockup-thumbnail.png";
import pathIncisionThumbnail from "@/assets/designAssets/incision-logo/incision-logo_thumbnail.jpg";
import pathBrochureThumbnail from "@/assets/designAssets/cr-brochure/brochure_CR-mockup-thumbnail.png";
// import pathPassportThumbnail from "@/assets/designAssets/";
// import pathPassportStampsThumbnail from "@/assets/designAssets/";

// SHOWCASE IMAGE PATHS FOR STATE DATA
// ----------------------------------
// HG MENU

// INCISION LOGO DESIGN
import incision1 from "@/assets/designAssets/incision-logo/incision-rebrand-comparison.jpg";
import incision2 from "@/assets/designAssets/incision-logo/incision_showcase-color-horizontal.png";
import incision3 from "@/assets/designAssets/incision-logo/incision-showcase-insta.jpg";
import incision4 from "@/assets/designAssets/incision-logo/incision-showcase-white.jpg";
import incision5 from "@/assets/designAssets/incision-logo/incision-showcase-black.jpg";

// CR BROCHURE
import brochure1 from "@/assets/designAssets/cr-brochure/brochure_CR-mockup1.png";
import brochure2 from "@/assets/designAssets/cr-brochure/brochure_CR-mockup2.png";
import brochure3 from "@/assets/designAssets/cr-brochure/brochure_CR-mockup3.png";
import brochure4 from "@/assets/designAssets/cr-brochure/brochure_CR-mockup4.png";

// HG PASSPORT

// HG PASSPORT STAMPS

export default {
  name: "DesignView",
  components: {
    PageHeader,
    TheResume,
    AccentRules,
    DesignWorkContainer,
  },
  data() {
    return {
      designWork: [
        {
          id: 1,
          thumbnailTitle: "Lobby Bar Menu Design",
          showcaseTitle: "Menu Design",
          tags: ["Adobe Illustrator"],
          description: "The Ask: ",
          client: "Hotel Greene",
          relativeRoutePath: "a-lobby-menu",
          filePath: pathLobbyMenuThumbnail,
          showcaseFilePaths: [],
          dateYear: 2022,
          additionalCredit: ["Leslie Herman"],
          additionalCreditURLS: ["https://www.leslieherman.com/"],
        },
        {
          id: 2,
          thumbnailTitle: "InciSioN Logo Design",
          showcaseTitle: "Logo Design",
          tags: ["Adobe Illustrator"],
          description:
            "Logo rebrand for InciSioN International Student Surgical Network, a global non-profit whose members comprise of students, trainees, and early career physicians from over 38 different countries. Together they discuss, educate, advocate, and research global surgery.",
          client: "International Student Surgical Network",
          relativeRoutePath: "the-incision-logo",
          filePath: pathIncisionThumbnail,
          showcaseFilePaths: [
            incision1,
            incision2,
            incision3,
            incision4,
            incision5,
          ],
          dateYear: 2020,
          additionalCredit: [],
          additionalCreditURLS: [],
        },
        {
          id: 3,
          thumbnailTitle: "The Crown Room Brochure",
          showcaseTitle: "Brochure Design",
          tags: ["Adobe Illustrator"],
          description:
            "Promotional brochure design showcasing The Crown Room event space, featuring photos by Justin Chesney.",
          client: "The Crown Room at Hotel Greene",
          relativeRoutePath: "the-crown-room-brochure",
          filePath: pathBrochureThumbnail,
          showcaseFilePaths: [brochure1, brochure2, brochure3, brochure4],
          dateYear: 2021,
          additionalCredit: ["Justin Chesney"],
          additionalCreditURLS: ["https://justinchesney.com/"],
        },
        {
          id: 4,
          thumbnailTitle: "Hotel Greene Passport Illustration",
          showcaseTitle: "Brand Illustration",
          tags: ["Adobe Illustrator"],
          description: "The Ask: ",
          client: "Hotel Greene",
          relativeRoutePath: "a-passport-illustration",
          // filePath: pathPassportThumbnail,
          showcaseFilePaths: [],
          dateYear: 2021,
          additionalCredit: ["Leslie Herman"],
          additionalCreditURLS: ["https://www.leslieherman.com/"],
        },
        {
          id: 5,
          thumbnailTitle: "Hotel Greene Passport Stamps",
          showcaseTitle: "Stamp Design",
          tags: ["Adobe Illustrator"],
          description: "The Ask: ",
          client: "Hotel Greene",
          relativeRoutePath: "passport-stamps",
          // filePath: pathPassportStampsThumbnail,
          showcaseFilePaths: [],
          dateYear: 2021,
          additionalCredit: ["Leslie Herman"],
          additionalCreditURLS: ["https://www.leslieherman.com/"],
        },
        {
          id: 6,
          thumbnailTitle: "The Crown Room Layout Design",
          showcaseTitle: "Layout Design",
          tags: ["Adobe Illustrator"],
          description: "The Ask: ",
          client: "The Crown Room at Hotel Greene",
          relativeRoutePath: "grand-opening-layouts",
          // filePath: pathGrandOpeningThumbnail,
          showcaseFilePaths: [],
          dateYear: 2021,
          additionalCredit: ["Leslie Herman"],
          additionalCreditURLS: ["https://www.leslieherman.com/"],
        },
      ],
    };
  },
};
</script>

<style>
.design-page-head {
  margin-top: 1rem;
  margin-bottom: 4rem;
}

.design-page-content {
  max-width: 100%;
  overflow: hidden;
}
</style>
