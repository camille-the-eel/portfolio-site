<template>
  <div
    :key="devProjects.id"
    v-for="project in devProjects"
    class="project-container"
  >
    <DevProject :project="project" />
  </div>
</template>

<script>
import DevProject from "@/components/DevSection/DevProject.vue";

export default {
  name: "DevProjectContainer",
  components: {
    DevProject,
  },
  props: {
    devProjects: Array,
  },
};
</script>

<style>
/* 825px and up */
@media (min-width: 51.56em) {
  .project-container {
    display: grid;
    gap: 4em;
    margin-bottom: 5em;
  }

  /* LEFT | ZIG */
  /* ---------------------------- */
  .project-container:nth-child(odd) {
    grid-template-columns: 1fr 0.65fr;
  }

  .project-container:nth-child(odd) .project-caption-container {
    width: 275px;
    margin: 1.5em 0 0 0;
    justify-self: start;
    align-self: start;
  }

  .project-container:nth-child(odd) .project-img-container {
    justify-self: center;
    align-self: start;
  }

  .project-container:nth-child(odd) .project-item-3 {
    border-bottom: 0.175em solid var(--color-accent-dark);
  }

  /* RIGHT | ZAG */
  /* ---------------------------- */
  .project-container:nth-child(even) {
    grid-template-columns: 0.65fr 1fr;
  }

  .project-container:nth-child(even) .project-item-1 {
    border-bottom: 0.175em solid var(--color-accent-dark);
  }

  .project-container:nth-child(even) .project-caption-container {
    width: 275px;
    margin: 1em 0 0 8vw;
    grid-column: 1;
    grid-row: 1;
    justify-self: end;
    align-self: start;
  }

  .project-container:nth-child(even) .project-img-container {
    grid-column: 2;
    justify-self: end;
    align-self: start;
  }

  /* ACCENT ELEMENTS */
  /* ---------------------------- */
}

/* 950px and up */
@media (min-width: 59.375em) {
  .project-container {
    gap: 5em;
  }

  .project-container:nth-child(odd) .project-caption-container {
    width: 300px;
  }

  .project-container:nth-child(even) .project-caption-container {
    width: 300px;
  }
}

/* 1300px and up */
@media (min-width: 81.25em) {
  .project-container {
    gap: 7em;
  }

  .project-container:nth-child(odd) .project-caption-container {
    margin: 1.5em 0 0 3vw;
  }

  .project-container:nth-child(even) .project-caption-container {
    margin: 1em 4vw 0 8vw;
  }
}
</style>
