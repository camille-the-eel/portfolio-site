<script setup></script>

<template>
  <div class="nav-circle-position-container">
    <div class="nav-circle-bounding-box">
      <div class="nav-circle-flex-container">
        <div class="nav-circle-outer rotate-outer"></div>
        <div class="nav-circle-inner rotate-inner"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav-circle-position-container {
  z-index: -100;
  position: relative;
}

.nav-circle-bounding-box {
  position: absolute;
  height: 150px;
  width: 40vw;
  right: 0px;
  top: 0px;
  overflow: hidden;
}

.nav-circle-flex-container {
  position: absolute;
  top: -60px;
  left: 10vw;
  display: grid;
  grid-template-areas: "box";
  place-items: center;
}

.nav-circle-inner {
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%237B7B7BFF' stroke-width='2' stroke-dasharray='2%25%2c 5%25' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 50%;
  grid-area: box;
  height: 140px;
  width: 140px;
}

.nav-circle-outer {
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%237B7B7BFF' stroke-width='2' stroke-dasharray='2%25%2c 5%25' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 50%;
  grid-area: box;
  height: 160px;
  width: 160px;
}

@media (min-width: 250px) and (max-width: 599px) {
  .nav-circle-bounding-box {
    width: 200px;
  }
  .nav-circle-flex-container {
    top: -70px;
    left: 60px;
  }
}

@media (min-width: 800px) {
  .nav-circle-bounding-box {
    width: 320px;
  }
  .nav-circle-flex-container {
    left: 80px;
  }
}

.rotate-inner {
  animation: rotation-forward 30s linear infinite;
}
.rotate-outer {
  animation: rotation-backward 60s linear infinite;
}
</style>
