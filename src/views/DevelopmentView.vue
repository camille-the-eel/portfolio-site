<script setup>
import PageHeader from "@/components/PageHeader.vue";
import DevPageContentBlock from "@/components/DevPageContentBlock.vue";
import TheResume from "@/components/ResumeSection/TheResume.vue";
</script>

<template>
  <div class="page-head">
    <PageHeader pageCategory="WEB DEVELOPMENT" pageTitle="PROJECTS" />
  </div>
  <div class="page-content">
    <!-- TODO: create state/data loop for this -->
    <DevPageContentBlock
      :listNumber="1"
      projectCategories="x"
      projectTitle="x"
      projectDescription="x"
      href="/"
    />
  </div>
  <TheResume />
</template>
