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
// COMPONENTS
import PageHeader from "@/components/PageHeader.vue";
import DevProject from "@/components/DevSection/DevProject.vue";
import TheResume from "@/components/ResumeSection/TheResume.vue";
import DevProjectContainer from "../components/DevSection/DevProjectContainer.vue";

// IMAGES FOR STATE DATA
import pathPortfolio from "@/assets/devAssets/portfolio-thumbnail_portfolio.png";
import pathCocktail from "@/assets/devAssets/portfolio-thumbnail_cocktailRoulette.png";

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
          tags: ["Vue", "CSS", "HTML", "Javascript"],
          description:
            "Portfolio website designed and developed to showcase work.",
          filePath: pathPortfolio,
          websiteURL: "",
          githubURL: "https://github.com/camille-the-eel/portfolio-site",
          dateYear: 2022,
        },
        {
          id: 2,
          title: "Cocktail Roulette",
          tags: ["APIs", "Javascript", "JSON", "HTML", "CSS"],
          description:
            "A vanilla javascript web application– enter an ingredient, and you'll be told what you're drinking tonight, utilizing TheCocktailDB API.",
          filePath: pathCocktail,
          websiteURL: "https://camille-the-eel.github.io/cocktail-roulette/",
          githubURL: "https://github.com/camille-the-eel/cocktail-roulette",
          dateYear: 2022,
        },
      ],
    };
  },
};
</script>

<style>
.page-head {
  margin-bottom: 4rem;
}

.page-content {
  max-width: 100%;
  overflow: hidden;
}
</style>
