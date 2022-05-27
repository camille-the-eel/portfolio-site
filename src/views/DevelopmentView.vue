<template>
  <div class="page-head">
    <PageHeader pageCategory="WEB DEVELOPMENT" pageTitle="PROJECTS" />
  </div>
  <div class="page-content">
    <DevProjectContainer :devProjects="devProjects" />
  </div>
  <TheResume />
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import DevProject from "@/components/DevSection/DevProject.vue";
import TheResume from "@/components/ResumeSection/TheResume.vue";
import DevProjectContainer from "../components/DevSection/DevProjectContainer.vue";

export default {
  name: "DevelopmentView",
  components: {
    PageHeader,
    DevProjectContainer,
    DevProject,
    TheResume,
  },
  data() {
    return {
      devProjects: [
        {
          id: 1,
          title: "Portfolio site",
          tags: ["Vue.js", "CSS", "HTML", "Javascript"],
          description:
            "Portfolio website designed and developed to showcase work.",
          fileName: "portfolio-thumbnail_portfolio.png",
          websiteURL: "",
          githubURL: "https://github.com/camille-the-eel/portfolio-site",
        },
        {
          id: 2,
          title: "Cocktail Roulette",
          tags: ["APIs", "Javascript", "JSON", "HTML", "CSS"],
          description:
            "A vanilla javascript web app– enter an ingredient, and you'll be told what you're drinking tonight, utilizing TheCocktailDB API.",
          fileName: "portfolio-thumbnail_cocktailRoulette.png",
          websiteURL: "https://camille-the-eel.github.io/cocktail-roulette/",
          githubURL: "https://github.com/camille-the-eel/cocktail-roulette",
        },
      ],
    };
  },
};
</script>
