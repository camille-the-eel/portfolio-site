<template>
  <div class="ruled-accent-container">
    <div class="ruled-accent-grid-container">
      <div class="item-0A">
        <h6>{{ pageCategory }}</h6>
      </div>
      <div class="item-0B">
        <h1>{{ pageTitle }}</h1>
      </div>
      <div class="ruled-accent-item item-1"></div>
      <div class="ruled-accent-item item-2"></div>
      <div class="ruled-accent-item item-3"></div>
      <div class="ruled-accent-item item-4"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  props: {
    pageCategory: String,
    pageTitle: String,
  },
};
</script>

<style>
.ruled-accent-container {
  overflow: hidden;
  margin-top: 5rem;
  margin-bottom: 3rem;
}

.ruled-accent-grid-container {
  display: grid;
  grid-template-columns: auto 5.6rem 4.8rem 3.8rem;
  grid-template-rows: auto auto 1.8rem 2.2rem 2.6rem;
}

.ruled-accent-item {
  background-color: var(--color-accent-dark);
  height: 0.2rem;
}

.item-0A {
  grid-column: 1 / -2;
  letter-spacing: 0.1rem;
  justify-self: right;
  align-self: end;
}

.item-0A > h6 {
  letter-spacing: 0.15rem;
}

.item-0B {
  letter-spacing: 0.1rem;
  grid-column: 1 / -2;
  line-height: 4.4rem;
  justify-self: right;
  align-self: end;
  margin-bottom: 1rem;
}

.item-1 {
  grid-column: 1 / -1;
}

.item-2 {
  grid-column: 1/-2;
}

.item-3 {
  grid-column: 1/-3;
  height: 0.3rem;
}

.item-4 {
  grid-column: 1/-4;
  height: 0.4rem;
}

/*@media (min-width: 50px) and (max-width: 274px) {

  .item-0 {
    grid-column: 2 / 6;
    justify-self: center;
  } 
}*/

@media (min-width: 28em) {
  .ruled-accent-grid-container {
    grid-template-columns: auto 2.6em 2em 1.6em;
    grid-template-rows: auto 0.75em 1em 1.1em;
  }

  .item-0A {
    grid-column: 1 / -2;
    letter-spacing: 0.0625em;
    justify-self: right;
    align-self: end;
  }

  .item-0A > h6 {
    letter-spacing: 0.1875em;
  }
  .item-0A {
    grid-column: 1 / 2;
    padding-bottom: 0.1875em;
    padding-left: 1.25em;
    justify-self: left;
    margin-bottom: 0.625em;
  }

  .item-0B {
    grid-column: 2 / -2;
  }

  .item-3 {
    grid-column: 1/-3;
    height: 0.15em;
  }

  .item-4 {
    grid-column: 1/-4;
    height: 0.22em;
  }
}
</style>
