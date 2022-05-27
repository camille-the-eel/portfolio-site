<template>
  <div class="content-container">
    <div class="img-container">
      <img
        :src="require(`@/assets/devAsses/${project.fileName}`)"
        class="item-0 thumbnail"
      />
      <div class="item-1"></div>
      <div class="item-2"></div>
      <div class="item-3"></div>
    </div>
    <div class="caption-container">
      <h6 :key="i" v-for="(tag, i) in project.tags">
        {{ tag }}
      </h6>
      <h1>{{ project.title }}</h1>
      <p>{{ project.description }}</p>
      <a href="" class="project-link" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DevPageContentBlock",
  props: {
    project: Object,
  },
};
</script>
