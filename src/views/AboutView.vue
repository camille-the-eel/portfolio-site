<script setup>
import TheResume from "@/components/ResumeSection/TheResume.vue";
</script>

<template>
  <div class="about-container">
    <!-- <img class="avatar" src="/src/assets/headshot-cropped.png" /> -->
    <!-- <div class="avatar-wrapper"> -->
    <img class="avatar-img" src="/src/assets/headshot-crop-R.png" />
    <!-- </div> -->
    <div class="about-header">
      <h6>ABOUT ME</h6>
      <h1>DEVELOPER<br />& DESIGNER</h1>
    </div>
    <div class="about-content">
      <p>
        Hi! I'm Camille. I've a uniquely varied mix of experience in management,
        customer relations, design, and development–now I'm pursuing a career
        change into software development.
        <!-- –which gives me a unique approach to problems, as I try to consider all known facets and be thorough in my decision-making. -->
      </p>
      <p>
        I love the challenges coding provides, and the endless learning and
        growth inherit to it. I'm a bootcamp and self-taught developer with a
        litany of transferable skills and a strong desire to succeed (but that's
        all in my resume, below).
      </p>
      <p>
        I devour content, whether it's new tech knowledge, a niche anime, a
        newly-found fantasy book, or an interesting new cocktail recipe to shake
        up. And while I wouldn't say I'm always in the gym, fitness is important
        to me, as is satisfying my insatiable sweet tooth.
      </p>
      <p>
        Contact me at
        <a href="mailto: hughes.camille.m@gmail.com">
          <b>hughes.camille.m@gmail.com</b></a
        ><br />
        <span class="candy"
          >(I take any and all candy or pastry recommendations).</span
        >
      </p>
    </div>
    <div class="dashed-line"></div>
  </div>
  <TheResume />
</template>

<style scoped>
@import "@/views/viewsCSS/about.css";
</style>
