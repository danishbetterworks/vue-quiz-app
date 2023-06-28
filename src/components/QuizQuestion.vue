<script setup>
import { defineProps } from "vue";
const { question } = defineProps(["question"]);
</script>

<template>
  <!-- Question Statement -->
  <div class="question-container">
    <h1 class="question">
      {{ question.text }}
    </h1>
  </div>
</template>


<style scoped>
.question-container {
  margin-top: 20px;
}
.question {
  font-size: 40px;
  margin-bottom: 20px;
  font-weight: bold;
}
</style>