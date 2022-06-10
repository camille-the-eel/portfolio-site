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
  computed: {
    designWork() {
      let designWork = this.$store.getters.getDesignWorkDetails;
      return designWork;
    },
  },
};
</script>

<style></style>
