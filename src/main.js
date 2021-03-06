import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import router from "./router";

// THUMBNAIL IMAGE PATHS
// Aspect Ratio 5:4
// ---------------------------------------
// import pathLobbyMenuThumbnail from "@/assets/designAssets/";
import pathIncisionThumbnail from "@/assets/designAssets/incision-logo/incision-logo_thumbnail.jpg";
import pathBrochureThumbnail from "@/assets/designAssets/cr-brochure/brochure_CR-thumbnail.png";
// import pathGrandOpeningThumbnail from "@/assets/designAssets/";
import pathPassportThumbnail from "@/assets/designAssets/hg-passport/passport_map-thumbnail.png";
import pathPassportStampsThumbnail from "@/assets/designAssets/hg-passport-stamps/passport-stamps-thumbnail.png";

// SHOWCASE IMAGE PATHS
// ----------------------------------
// HG MENU

// INCISION LOGO DESIGN
import incisionCircle from "@/assets/designAssets/incision-logo/incision_thumbnail-circle.png";
import incision1 from "@/assets/designAssets/incision-logo/incision-rebrand-comparison.jpg";
import incision2 from "@/assets/designAssets/incision-logo/incision_showcase-color-horizontal.png";
import incision3 from "@/assets/designAssets/incision-logo/incision-showcase-insta.jpg";
import incision4 from "@/assets/designAssets/incision-logo/incision-showcase-black.jpg";
// import incision5 from "@/assets/designAssets/incision-logo/incision-showcase-white.jpg";

// CR BROCHURE
import brochureCircle from "@/assets/designAssets/cr-brochure/brochure_CR-thumbnail-circle.png";
import brochure1 from "@/assets/designAssets/cr-brochure/brochure_CR-mockup1.png";
import brochure2 from "@/assets/designAssets/cr-brochure/brochure_CR-mockup2.png";
import brochure3 from "@/assets/designAssets/cr-brochure/brochure_CR-mockup3.png";
import brochure4 from "@/assets/designAssets/cr-brochure/brochure_CR-mockup4.png";

// HG PASSPORT
import passportCircle from "@/assets/designAssets/hg-passport/passport_map-thumbnail-circle.png";
import passport1 from "@/assets/designAssets/hg-passport/passport-showcase-4.jpg";
import passport2 from "@/assets/designAssets/hg-passport/passport-showcase-2.jpg";
import passport3 from "@/assets/designAssets/hg-passport/passport-showcase-3.jpg";
import passport4 from "@/assets/designAssets/hg-passport/passport-showcase-1.jpg";

// HG PASSPORT STAMPS
import stampsCircle from "@/assets/designAssets/hg-passport-stamps/passport-stamps-thumbnail-circle.png";
import stamps1 from "@/assets/designAssets/hg-passport-stamps/passport-stamps-1.jpg";
import stamps2 from "@/assets/designAssets/hg-passport-stamps/passport-stamps-2.jpg";
import stamps3 from "@/assets/designAssets/hg-passport-stamps/passport-stamps-3.jpg";
import stamps4 from "@/assets/designAssets/hg-passport-stamps/passport-stamps-4.jpg";
import stamps5 from "@/assets/designAssets/hg-passport-stamps/passport-stamps-5.jpg";

const store = createStore({
  state() {
    return {
      designWork: [
        // {
        //   routeName: "a-lobby-menu",
        //   id: 1,
        //   thumbnailTitle: "Lobby Bar Menu Design",
        //   showcaseTitle: "Menu Design",
        //   tags: ["Adobe Illustrator"],
        //   description: "The Ask: ",
        //   client: "Hotel Greene",
        //   thumbnailFilePath: pathLobbyMenuThumbnail,
        //   featureFilePath: "",
        //   showcaseFilePaths: [],
        //   dateYear: 2022,
        //   additionalCredit: [
        //     {
        //       id: 1,
        //       projectContribution: "",
        //       name: "Leslie Herman",
        //       url: "https://www.leslieherman.com/",
        //     },
        //   ],
        // },
        {
          routeName: "the-incision-logo",
          id: 2,
          thumbnailTitle: "InciSioN Logo Design",
          showcaseTitle: "Logo Design",
          tags: ["Adobe Illustrator"],
          description:
            "Logo rebrand for InciSioN International Student Surgical Network, a global non-profit whose members comprise of students, trainees, and early career physicians from over 38 different countries. The work of InciSioN in global surgery rests on three pillars??? advocacy, education, and research.  Representing those key characteristics within the new logo, as well as highlighting the international scope of InciSioN, were my primary goals during conceptualization.",
          client: "International Student Surgical Network",
          thumbnailFilePath: pathIncisionThumbnail,
          featureFilePath: incisionCircle,
          showcaseFilePaths: [incision1, incision2, incision3, incision4],
          dateYear: 2020,
          additionalCredit: [{}],
        },
        {
          routeName: "the-crown-room-brochure",
          id: 3,
          thumbnailTitle: "The Crown Room Brochure",
          showcaseTitle: "Brochure Design",
          tags: ["Adobe Illustrator"],
          description:
            "Promotional brochure design showcasing the recently opened event space???The Crown Room, featuring photos by Justin Chesney.",
          client: "The Crown Room at Hotel Greene",
          thumbnailFilePath: pathBrochureThumbnail,
          featureFilePath: brochureCircle,
          showcaseFilePaths: [brochure1, brochure2, brochure3, brochure4],
          dateYear: 2021,
          additionalCredit: [
            {
              id: 1,
              projectContribution: "Photography:",
              name: "Justin Chesney",
              url: "https://justinchesney.com/",
            },
            {
              id: 2,
              projectContribution: "Brand assets:",
              name: "Leslie Herman",
              url: "https://www.leslieherman.com/",
            },
            {
              id: 3,
              projectContribution: "Floorplan illustration:",
              name: "me",
              url: "",
            },
          ],
        },
        // {
        //   routeName: "grand-opening-layouts",
        //   id: 4,
        //   thumbnailTitle: "The Crown Room Layout Design",
        //   showcaseTitle: "Layout Design",
        //   tags: ["Adobe Illustrator"],
        //   description: "The Ask: ",
        //   client: "The Crown Room at Hotel Greene",
        //   // thumbnailFilePath: pathGrandOpeningThumbnail,
        //   featureFilePath: "",
        //   showcaseFilePaths: [],
        //   dateYear: 2021,
        //   additionalCredit: [
        //     {
        //       id: 1,
        //       projectContribution: "Brand assets:",
        //       name: "Leslie Herman",
        //       url: "https://www.leslieherman.com/",
        //     },
        //   ],
        // },
        {
          routeName: "passport-stamps",
          id: 5,
          thumbnailTitle: "Hotel Greene Passport Stamps",
          showcaseTitle: "Stamp Design",
          tags: ["Adobe Illustrator", "Procreate"],
          description:
            "Collectible stamps created for Hotel Greene's Ambassador Hour???a rotating happy hour special where guests can collect stamps in their passport for each cuisine they enjoy. Vienna, Austria was the first locale, followed by San Sebasti??n, Spain. Istanbul was soon to follow, designed by our new team member, Natalie Richardson (and referred to by it's classical name of Constantinople). Stamps are designed as the cuisine changes, rather than as a full set, per the direction of the client.",
          client: "Hotel Greene",
          thumbnailFilePath: pathPassportStampsThumbnail,
          featureFilePath: stampsCircle,
          showcaseFilePaths: [stamps1, stamps2, stamps3, stamps4, stamps5],
          dateYear: 2021,
          additionalCredit: [
            {
              id: 1,
              projectContribution:
                "Logotype and front cover lettering and illustration:",
              name: "Leslie Herman",
              url: "https://www.leslieherman.com/",
            },
            {
              id: 2,
              projectContribution: "Constantinople stamp:",
              name: "Natalie Richardson",
              url: "https://www.nataliemaris.com/",
            },
            {
              id: 3,
              projectContribution: "Map illustration:",
              name: "me",
              url: "/designing/a-custom-passport",
            },
          ],
        },

        {
          routeName: "a-custom-passport",
          id: 6,
          thumbnailTitle: "Hotel Greene Passport Illustration",
          showcaseTitle: "Brand Illustration",
          tags: ["Adobe Illustrator"],
          description:
            'Collaboration with Leslie Herman to create a "passport" for Hotel Greene\'s Ambassador Hour???a running happy hour special, which follows their faux ambassador as he travels the world, offering a new cuisine to sample every couple months. Guests can collect stamps in their passport for each cuisine they enjoy. I worked with Leslie to create a cohesive overall design, centered around his distinctive illustration style and existing brand logotype. His front cover set the tone for this custom-sized pocket passport, while my illustated travel map provides fun and visual interest, hinting at which city and cuisine is yet to come. The interior design I kept minimalistic, to better showcase the colorful, collectible stamps.',
          client: "Hotel Greene",
          thumbnailFilePath: pathPassportThumbnail,
          featureFilePath: passportCircle,
          showcaseFilePaths: [passport1, passport2, passport3, passport4],
          dateYear: 2021,
          additionalCredit: [
            {
              id: 1,
              projectContribution:
                "Logotype, front cover lettering and illustration:",
              name: "Leslie Herman",
              url: "https://www.leslieherman.com/",
            },
            {
              id: 2,
              projectContribution: "Collectible stamps shown",
              name: "here",
              url: "/designing/passport-stamps",
            },
          ],
        },
      ],
    };
  },
  mutations: {},
  getters: {
    getDesignWorkDetails(state) {
      return state.designWork;
    },
    getFilteredWorkDetails: (state) => (routeName) => {
      return state.designWork.find((work) => work.routeName === routeName);
    },
  },
});

const app = createApp(App);

app.use(store);
app.use(router);

app.mount("#app");
