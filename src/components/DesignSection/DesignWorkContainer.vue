<template>
  <div :key="designWork.id" v-for="work in designWork" class="work-container">
    <DesignWork :work="work" />
  </div>
</template>

<script>
import DesignWork from "@/components/DesignSection/DesignWork.vue";

export default {
  name: "DesignWorkContainer",
  components: {
    DesignWork,
  },
  props: {
    designWork: Array,
  },
};
</script>

<style></style>
