<script setup>
import QuizHeader from "../components/QuizHeader.vue";
import QuizQuestion from "../components/QuizQuestion.vue";
import QuizOptions from "../components/QuizOptions.vue";
import { useRoute } from "vue-router";
import { ref } from "vue";
import quizData from "../data/quiz.json";
const route = useRoute();
const quizName = route.params.name;
const quizQuestions = quizData.find(
  (quiz) => quiz.name.toLowerCase() === quizName
).questions;
const currentQuestionIndex = ref(0);
</script>

<template>
  <div>
    <QuizHeader />
    <QuizQuestion :question="quizQuestions[currentQuestionIndex]" />
    <QuizOptions :question_options="quizQuestions[currentQuestionIndex]" />
  </div>
</template>


<style scoped>
</style>