<script setup>
import QuizOption from "../components/QuizOption.vue";
import { defineProps, defineEmits, ref } from "vue";
const { question_options } = defineProps(["question_options"]);
const emit = defineEmits(["optionSelected"]);
const emitOptionSelectedEvent = (optionSelected) => {
  emit("optionSelected", optionSelected);
};
</script>
<template>
  <QuizOption
    v-for="option in question_options.options"
    :key="option.id"
    :option="option"
    @click="emitOptionSelectedEvent(option.isCorrect)"
  />
</template>


<style scoped>
</style>