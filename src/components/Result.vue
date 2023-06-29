<script setup>
import { defineProps } from "vue";
const { correctAnswers, totalQuestions } = defineProps([
  "correctAnswers",
  "totalQuestions",
]);
</script>
<template>
  <div class="result">
    <p>Your Result</p>
    <h1>
      {{ correctAnswers }} / {{ totalQuestions }}
    </h1>
    <RouterLink
      class="break-column"
      to="/"
    >Play Again</RouterLink>
  </div>
</template>

<style scoped>
.result {
  display: block;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
}
p {
  font-size: 30px;
  font-weight: bold;
}
h1 {
  font-size: 100px;
  font-weight: bold;
  /* align-items: center; */
}
</style>