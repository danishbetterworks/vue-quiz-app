<script setup>
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";
import Card from "../components/card.vue";
import { useQuizStore } from "../store/data.js";

const { quizzes, findSearchedTextQuiz } = useQuizStore();
const quizes = ref(quizzes);
const searchText = ref("");

// const findSearchedTextQuiz = (text) => {
//   return quizzes.filter((quiz) =>
//     quiz.name.toLowerCase().includes(text.toLowerCase())
//   );
// };
/**
 * Filter the quizes based on the search text
 */
watch(searchText, () => {
  quizes.value = findSearchedTextQuiz(searchText.value);
});
</script>

<template>
  <div>
    <header>
      <img src="https://www.pngmart.com/files/19/Quiz-PNG-Image.png">
      <input
        type="text"
        placeholder="Search..."
        v-model.trim="searchText"
      >
    </header>
    <div class="options-container">
      <Card
        v-for="quiz in quizes"
        :key="quiz.id"
        :quiz="quiz"
      />
    </div>
  </div>
</template>


<style scoped>
header {
  margin-bottom: 10px;
  margin-top: 30px;
  display: flex;
  align-items: center;
}

header img {
  width: 7%;
  height: 7%;
  margin-right: 30px;
}

header input {
  border: none;
  background-color: rgb(128, 128, 128, 0.1);
  padding: 10px;
  border-radius: 5px;
  width: 300px;
}

.options-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
}
</style>
