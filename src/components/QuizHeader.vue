<script setup>
</script>

<template>
  <div>
    <header>
      <h4>Question 1/3</h4>
      <div class="bar">
        <div class="completed"></div>
      </div>
    </header>
  </div>
</template>


<style scoped>
header {
  margin-top: 20px;
}
header h4 {
  font-size: 30px;
}
.bar {
  width: 300px;
  height: 50px;
  border: 3px solid green;
  margin-top: 10px;
}
.completed {
  width: 0%;
  height: 100%;
  background-color: green;
}
</style>