<template>
  <div class="sudokuapp">
    <Sudoku />
  </div>
</template>

<script>
// @ is an alias to /src
import Sudoku from '@/components/Sudoku.vue'

export default {
  name: 'sudokuapp',
  components: {
    Sudoku
  }
}
</script>
