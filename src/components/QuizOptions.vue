<script setup>
import QuizOption from "../components/QuizOption.vue";
import { defineProps } from "vue";
const { question_options } = defineProps(["question_options"]);
</script>
<template>
  <QuizOption
    v-for="option in question_options.options"
    :key="option.id"
    :option="option"
  />
</template>


<style scoped>
</style>