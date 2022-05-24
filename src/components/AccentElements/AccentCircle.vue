<template>
  <div :class="(useCase, 'circle-position-container')">
    <div class="circle-bounding-box">
      <div class="circle-flex-container">
        <div class="circle-outmost rotate-inner"></div>
        <div class="circle-outer rotate-outer"></div>
        <div class="circle-inner rotate-inner"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccentCircle",
  props: {
    useCase: String,
  },
};
</script>

<style scoped>
@import "@/components/NavSection/navAccentCircle.css";

.heroAccent .circle-bounding-box {
  position: relative;
  transform: translate(60%, -7%);
}

.circle-position-container {
  position: relative;
  z-index: -100;
}

.circle-bounding-box {
  overflow: hidden;
}

.circle-flex-container {
  display: grid;
  grid-template-areas: "box";
  place-items: center;
}

.circle-inner {
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%237B7B7BFF' stroke-width='2' stroke-dasharray='2%25%2c 5%25' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 50%;
  grid-area: box;
  width: 14rem;
  aspect-ratio: 1 / 1;
}

.circle-outer {
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%237B7B7BFF' stroke-width='2' stroke-dasharray='2%25%2c 5%25' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 50%;
  grid-area: box;
  width: 16rem;
  aspect-ratio: 1 / 1;
}

.circle-outmost {
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%237B7B7BFF' stroke-width='2' stroke-dasharray='2%25%2c 5%25' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 50%;
  grid-area: box;
  width: 18rem;
  aspect-ratio: 1 / 1;
}

.rotate-inner {
  animation: rotation-forward 30s linear infinite;
}

.rotate-outer {
  animation: rotation-backward 60s linear infinite;
}
</style>
