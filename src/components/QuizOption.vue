<script setup>
import { defineProps } from "vue";
const { option } = defineProps(["option"]);
</script>

<template>
  <div class="options-container">
    <div class="option">
      <p class="option-label">{{ option.label }}</p>
      <div class="option-value">
        <p>{{ option.text }}</p>
      </div>
    </div>
  </div>
</template>


<style scoped>
.option {
  display: flex;
  margin-bottom: 20px;
  cursor: pointer;
}

.option-label {
  /* border-radius: 50px; */
  background-color: green;
  width: 50px;
  height: 50px;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px 0px 0px 10px;
}
.option-value {
  background-color: rgb(55, 57, 59);
  height: 50px;
  width: 100%;
  font-size: 20px;
  padding: 0 30px;
  border-radius: 0 10px 10px 0px;
}
.option-value p {
  padding: 10px;
}
</style>