<template>
  <RouterLink :to="`/designing/${work.relativeRoutePath}`">
    <div class="work-image-container">
      <img :src="work.filePath" />
    </div>
    <div class="work-caption-container">
      <h6>{{ workTags }}</h6>
      <h2>{{ work.thumbnailTitle }}</h2>
      <PlusIcon class="plus-icon" />
    </div>
  </RouterLink>
</template>

<script>
import { RouterLink } from "vue-router";
import { PlusIcon } from "@heroicons/vue/solid";

export default {
  name: "DesignWork",
  components: {
    RouterLink,
    PlusIcon,
  },
  props: {
    work: Object,
  },
  computed: {
    workTags() {
      return this.work.tags.join(", ");
    },
  },
};
</script>

<style>
img {
  width: 20rem;
}

.plus-icon {
  width: 2rem;
}
</style>
