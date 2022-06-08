<template>
  <div class="design-page-head">
    <PageHeader page-category="GRAPHIC DESIGN" page-title="WORK" />
  </div>
  <div class="design-page-content">
    <p class="mobile-click-notice">Tap for more details.</p>
    <DesignWorkContainer :design-work="designWork" />
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
// Aspect Ratio 5:4
// ---------------------------------------
// import pathLobbyMenuThumbnail from "@/assets/designAssets/";
import pathLobbyMenuThumbnail from "@/assets/designAssets/cr-brochure/brochure_CR-thumbnail.png";
import pathIncisionThumbnail from "@/assets/designAssets/incision-logo/incision-logo_thumbnail.jpg";
import pathBrochureThumbnail from "@/assets/designAssets/cr-brochure/brochure_CR-thumbnail.png";
import pathPassportThumbnail from "@/assets/designAssets/hg-passport/passport_map-thumbnail.png";
import pathPassportStampsThumbnail from "@/assets/designAssets/hg-passport-stamps/passport-stamps-thumbnail.png";

// SHOWCASE IMAGE PATHS FOR STATE DATA
// ----------------------------------
// HG MENU

// INCISION LOGO DESIGN
import incisionCircle from "@/assets/designAssets/incision-logo/incision_thumbnail-circle.png";
import incision1 from "@/assets/designAssets/incision-logo/incision-rebrand-comparison.jpg";
import incision2 from "@/assets/designAssets/incision-logo/incision_showcase-color-horizontal.png";
import incision3 from "@/assets/designAssets/incision-logo/incision-showcase-insta.jpg";
import incision4 from "@/assets/designAssets/incision-logo/incision-showcase-white.jpg";
import incision5 from "@/assets/designAssets/incision-logo/incision-showcase-black.jpg";

// CR BROCHURE
import brochureCircle from "@/assets/designAssets/cr-brochure/brochure_CR-thumbnail-circle.png";
import brochure1 from "@/assets/designAssets/cr-brochure/brochure_CR-mockup1.png";
import brochure2 from "@/assets/designAssets/cr-brochure/brochure_CR-mockup2.png";
import brochure3 from "@/assets/designAssets/cr-brochure/brochure_CR-mockup3.png";
import brochure4 from "@/assets/designAssets/cr-brochure/brochure_CR-mockup4.png";

// HG PASSPORT
import passportCircle from "@/assets/designAssets/hg-passport/passport_map-thumbnail-circle.png";
import passport1 from "@/assets/designAssets/hg-passport/passport-showcase-1.jpg";
import passport2 from "@/assets/designAssets/hg-passport/passport-showcase-2.jpg";
import passport3 from "@/assets/designAssets/hg-passport/passport-showcase-3.jpg";
import passport4 from "@/assets/designAssets/hg-passport/passport-showcase-4.jpg";

// HG PASSPORT STAMPS
import stampsCircle from "@/assets/designAssets/hg-passport-stamps/passport-stamps-thumbnail-circle.png";
import stamps1 from "@/assets/designAssets/hg-passport-stamps/passport-stamps-1.jpg";
import stamps2 from "@/assets/designAssets/hg-passport-stamps/passport-stamps-2.jpg";
import stamps3 from "@/assets/designAssets/hg-passport-stamps/passport-stamps-3.jpg";
import stamps4 from "@/assets/designAssets/hg-passport-stamps/passport-stamps-4.jpg";
import stamps5 from "@/assets/designAssets/hg-passport-stamps/passport-stamps-5.jpg";

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
          routeName: "a-lobby-menu",
          thumbnailFilePath: pathLobbyMenuThumbnail,
          featureFilePath: "",
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
          routeName: "the-incision-logo",
          thumbnailFilePath: pathIncisionThumbnail,
          featureFilePath: incisionCircle,
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
          routeName: "the-crown-room-brochure",
          thumbnailFilePath: pathBrochureThumbnail,
          featureFilePath: brochureCircle,
          showcaseFilePaths: [brochure1, brochure2, brochure3, brochure4],
          dateYear: 2021,
          additionalCredit: ["Justin Chesney"],
          additionalCreditURLS: ["https://justinchesney.com/"],
        },
        {
          id: 4,
          thumbnailTitle: "The Crown Room Layout Design",
          showcaseTitle: "Layout Design",
          tags: ["Adobe Illustrator"],
          description: "The Ask: ",
          client: "The Crown Room at Hotel Greene",
          routeName: "grand-opening-layouts",
          // thumbnailFilePath: pathGrandOpeningThumbnail,
          featureFilePath: "",
          showcaseFilePaths: [],
          dateYear: 2021,
          additionalCredit: ["Leslie Herman"],
          additionalCreditURLS: ["https://www.leslieherman.com/"],
        },
        {
          id: 5,
          thumbnailTitle: "Hotel Greene Passport Illustration",
          showcaseTitle: "Brand Illustration",
          tags: ["Adobe Illustrator"],
          description: "The Ask: ",
          client: "Hotel Greene",
          routeName: "a-passport-illustration",
          thumbnailFilePath: pathPassportThumbnail,
          featureFilePath: passportCircle,
          showcaseFilePaths: [passport1, passport2, passport3, passport4],
          dateYear: 2021,
          additionalCredit: ["Leslie Herman"],
          additionalCreditURLS: ["https://www.leslieherman.com/"],
        },
        {
          id: 6,
          thumbnailTitle: "Hotel Greene Passport Stamps",
          showcaseTitle: "Stamp Design",
          tags: ["Adobe Illustrator"],
          description: "The Ask: ",
          client: "Hotel Greene",
          routeName: "passport-stamps",
          thumbnailFilePath: pathPassportStampsThumbnail,
          featureFilePath: stampsCircle,
          showcaseFilePaths: [stamps1, stamps2, stamps3, stamps4, stamps5],
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
  max-width: 80%;
  margin: 0 auto 5rem auto;
  overflow: hidden;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  gap: 2rem;
}

/* 475px and up */
@media (min-width: 29.69em) {
  .mobile-click-notice {
    display: none;
  }

  .design-page-content {
    max-width: 90%;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: auto;
    gap: 1rem;
  }
}

/* 650px and up */
@media (min-width: 40.625em) {
  .mobile-click-notice {
    display: none;
  }
}

/* 850px and up */
@media (min-width: 53.125em) {
  .design-page-content {
    max-width: 100%;
    grid-template-columns: repeat(3, auto);
  }
}
</style>
