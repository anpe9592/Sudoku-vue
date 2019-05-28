<template>
  <div class="Sudoku">
    <div v-for="(number, index) in num" :key="index">{{ number }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: [
        [8, 0, 0],
        [0, 0, 0],
        [0, 1, 0],

        [4, 0, 6],
        [0, 0, 0],
        [0, 0, 0],

        [0, 0, 7],
        [4, 0, 0],
        [6, 5, 0],

        [5, 0, 9],
        [0, 0, 0],
        [0, 4, 8],

        [0, 3, 0],
        [0, 7, 0],
        [0, 2, 0],

        [7, 8, 0],
        [0, 0, 0],
        [1, 0, 3],

        [0, 5, 2],
        [0, 0, 1],
        [3, 0, 0],

        [0, 0, 0],
        [0, 0, 0],
        [9, 0, 2],

        [0, 9, 0],
        [0, 0, 0],
        [0, 0, 5]
      ]
    }
  }
}
</script>

<style>
.Sudoku {
  display: inline-block;
  position: relative;
  overflow: hidden;
}
</style>
