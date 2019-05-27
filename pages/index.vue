<template>
  <section class="container">
    <div>
      <sudokuApp />
    </div>
  </section>
</template>

<script>
import SudokuApp from '~/components/SudokuApp.vue'

export default {
  components: {
    SudokuApp
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
