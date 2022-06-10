<template>
  <RouterLink
    :to="`/designing/${work.routeName}`"
    class="work-wrapper"
    :route-name="work.routeName"
  >
    <div class="work-image-container">
      <img :src="work.thumbnailFilePath" class="work-image" />
    </div>
    <div class="work-caption-container">
      <div class="work-caption-wrapper">
        <h6 class="work-tags">{{ workTags }}</h6>
        <h2 class="work-thumbnail-title">
          {{ workThumbnailTitle }}
        </h2>
        <PlusIcon class="plus-icon" />
      </div>
    </div>
    <div class="work-item-1"></div>
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
    workThumbnailTitle() {
      return this.work.thumbnailTitle.toUpperCase();
    },
  },
};
</script>

<style>
.work-image {
  max-width: 100%;
  border: 0.1rem solid var(--color-accent-medium);
  display: block;
}

.work-wrapper {
  position: relative;
}

.work-caption-container {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.work-wrapper:hover > .work-caption-container,
.work-wrapper:active > .work-caption-container,
.work-wrapper:focus > .work-caption-container {
  display: block;
  background-color: var(--color-accent-dark);
}

.work-wrapper:hover > .work-item-1,
.work-wrapper:active > .work-item-1,
.work-wrapper:focus > .work-item-1 {
  background-color: var(--color-accent-medium);
}

.work-caption-wrapper {
  margin: 7% 7% 0 10%;
  color: #fff;
}

.work-tags {
  font-size: 1.2rem;
  letter-spacing: 0.2rem;
  color: var(--color-accent-light);
  margin-bottom: 0.4rem;
}

.work-thumbnail-title {
  font-size: 2rem;
  margin-bottom: 0.7rem;
}

.plus-icon {
  color: var(--color-accent-medium-light);
  width: 2rem;
}

.work-item-1 {
  max-width: 100%;
  height: 1rem;
  background-color: var(--color-accent-light);
}

/* 650px and up */
@media (min-width: 40.625em) {
  .work-tags {
    font-size: 1.4rem;
    margin-bottom: 0.6rem;
  }

  .work-thumbnail-title {
    font-size: 2.4rem;
    margin-bottom: 0.9rem;
  }
}
</style>
