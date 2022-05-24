<template>
  <div class="content-container">
    <div class="img-container">
      <img src="" class="item-0 thumbnail" />
      <div class="item-1"></div>
      <div class="item-2"></div>
      <div class="item-3"></div>
    </div>
    <div class="caption-container">
      <h6>{{ projectCategories }}</h6>
      <h1>{{ projectTitle }}</h1>
      <p>{{ projectDescription }}</p>
      <a href="" class="project-link" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DevPageContentBlock",
  props: {
    listNumber: Number,
    projectCategories: String,
    projectTitle: String,
    projectDescription: String,
    href: String,
  },
};
</script>
