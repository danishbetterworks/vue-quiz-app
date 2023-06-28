<script setup>
	import {defineProps} from 'vue';
	const { quiz } = defineProps(['quiz']);
</script>

<template>
	<div class="card">
		<img :src="quiz.img" alt="">
		<div class="card-text">
			<h2>{{ quiz.name }}</h2>
			<p>{{ quiz.questions.length }} questions</p>
		</div>
	</div>
</template>

<style scoped>
/* Card */
  .card {
    width: 310px;
    overflow: hidden;
    border-radius: 2%;
    box-shadow: 1 1 10px rgba(0, 0, 0, 0.2);
    /* margin-top: 30px;  */
    margin-bottom: 35px;
    margin-right: 20px;
    cursor: pointer;
  }

  .card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    margin: 0;
    border-radius: 10px;
  }

  .card .card-text {
    padding: 0 5px;
  }

  .card .card-text h2 {
    font-weight: bold;
    text-align: center;
    text-decoration: underline;
  }

  .card .card-text p {
    padding: 5px;
    font-weight: bold;
    text-align: center;
  }
  

</style>