<template>
  <div :key="devProjects.id" v-for="project in devProjects">
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
