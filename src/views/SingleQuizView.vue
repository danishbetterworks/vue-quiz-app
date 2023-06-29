<script setup>
import QuizHeader from "../components/QuizHeader.vue";
import QuizQuestion from "../components/QuizQuestion.vue";
import QuizOptions from "../components/QuizOptions.vue";
import Result from "../components/Result.vue";

import { useRoute } from "vue-router";
import { computed, ref } from "vue";
import quizData from "../data/quiz.json";

const route = useRoute();

const numberOfCorrectQuestions = ref(0);
const currentQuestionIndex = ref(0);
const showResult = ref(false);

const quizName = route.params.name;

const quizQuestions = quizData.find(
  (quiz) => quiz.name.toLowerCase() === quizName
).questions;

const questionStatus = computed(
  () => `${currentQuestionIndex.value + 1}/${quizQuestions.length}`
);

const barProgress = computed(
  () => `${(currentQuestionIndex.value / quizQuestions.length) * 100}%`
);

const onSelectOption = (isCorrect) => {
  if (isCorrect) {
    numberOfCorrectQuestions.value++;
  }
  if (currentQuestionIndex.value === quizQuestions.length - 1) {
    showResult.value = true;
  }
  currentQuestionIndex.value++;
};
</script>

<template>
  <div v-if="!showResult">
    <QuizHeader
      :questionStatus="questionStatus"
      :barProgress="barProgress"
    />
    <QuizQuestion :question="quizQuestions[currentQuestionIndex]" />
    <QuizOptions
      :question_options="quizQuestions[currentQuestionIndex]"
      @optionSelected="onSelectOption"
    />
  </div>
  <Result
    v-else
    :correctAnswers="numberOfCorrectQuestions"
    :totalQuestions="quizQuestions.length"
  />
</template>


<style scoped>
</style>