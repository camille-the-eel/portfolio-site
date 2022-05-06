<script setup></script>

<template>
  <div class="">
    <div class="resume-accent-container">
      <div class="resume-accent-grid-container">
        <h1 class="item-0">RESUME</h1>
        <div class="resume-accent-item item-1"></div>
        <div class="resume-accent-item item-2"></div>
        <div class="resume-accent-item item-3"></div>
        <div class="resume-accent-item item-4"></div>
        <div class="resume-accent-item item-5"></div>
        <div class="resume-accent-item item-6"></div>
        <div class="resume-accent-item item-7"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.resume-accent-container {
  overflow: hidden;
  margin-bottom: 65px;
}
.resume-accent-grid-container {
  margin-right: 20px;
  display: grid;
  grid-template-columns: auto 66px 56px 52px 44px 40px 38px;
  grid-template-rows: 55px 20px 20px 22px 28px 32px 38px;
  align-items: start;
}

.resume-accent-item {
  background-color: var(--color-accent-dark);
  height: 2.5px;
}

h1.item-0 {
  grid-column: 4/-2;
  justify-self: right;
}

.item-1 {
  grid-column: 1 / -1;
}

.item-2 {
  grid-column: 1/-2;
}

.item-3 {
  grid-column: 1/-3;
}

.item-4 {
  grid-column: 1/-4;
}

.item-5 {
  grid-column: 1/-5;
}

.item-6 {
  grid-column: 1/-6;
  height: 4px;
}

.item-7 {
  grid-column: 1/-7;
  height: 6px;
}

@media (min-width: 50px) and (max-width: 299px) {
  .resume-accent-grid-container {
    margin: 0;
  }
  h1.item-0 {
    margin: 0;
    grid-column: 2 / 6;
    justify-self: center;
  }
}

@media (min-width: 600px) {
  .resume-accent-grid-container {
    margin-right: 0px;
    display: grid;
    grid-template-columns: auto 58px 54px 54px 40px 28px 28px;
    grid-template-rows: 53px 12px 12px 14px 18px 18px 22px;
    align-items: start;
  }
  h1.item-0 {
    grid-column: 3 / -3;
  }
  .resume-accent-item {
    height: 2px;
  }

  .item-6 {
    height: 3px;
  }

  .item-7 {
    height: 3.5px;
  }
}
</style>
