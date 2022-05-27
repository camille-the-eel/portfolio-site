<template>
  <div class="accent-rules-container">
    <div class="accent-rule rule-1"></div>
    <div class="accent-rule rule-2"></div>
    <div class="accent-rule rule-3"></div>
    <div class="accent-rule rule-4"></div>
    <div class="accent-rule rule-5"></div>
  </div>
</template>

<style scoped>
.accent-rules-container {
  margin-left: 40px;
  display: grid;
  width: 15rem;
  grid-template-columns: 1fr 1.75fr 4fr 0.25fr;
  grid-template-rows: repeat(5, 1fr);
}
.accent-rule {
  margin-bottom: 1rem;
  height: 0.125rem;
  background: repeating-linear-gradient(
    to right,
    var(--color-accent-medium-light) 0,
    var(--color-accent-medium-light) 0.75rem,
    transparent 0.75rem,
    transparent 1.5rem
  );
}
.rule-1,
.rule-5 {
  grid-column: 3 / -2;
}

.rule-2,
.rule-4 {
  grid-column: 2 / -2;
}

.rule-3 {
  grid-column: 1 / -2;
}

/* Flex option */
/* .accent-rules-container {
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-content: flex-end;
  width: 400px;
}
.accent-rule {
  margin-bottom: 0.5em;
  height: 0.15rem;
  background: repeating-linear-gradient(
    to right,
    var(--color-accent-medium-light) 0,
    var(--color-accent-medium-light) 1rem,
    transparent 1rem,
    transparent 2rem
  );
}

.rule-1,
.rule-5 {
  width: 75%;
}

.rule-2,
.rule-4 {
  width: 90%;
}

.rule-3 {
  width: 99%;
} */
</style>
