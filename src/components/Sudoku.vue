<template>
  <div class="Sudoku">
    <div v-for="item in items" v-bind:key="item.id" class="cell">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sudoku',
  data () {
    return {
      items: [
        8, 0, 0, 4, 0, 6, 0, 0, 7,
        0, 0, 0, 0, 0, 0, 4, 0, 0,
        0, 1, 0, 0, 0, 0, 6, 5, 0,

        5, 0, 9, 0, 3, 0, 7, 8, 0,
        0, 0, 0, 0, 7, 0, 0, 0, 0,
        0, 4, 8, 0, 2, 0, 1, 0, 3,

        0, 5, 2, 0, 0, 0, 0, 9, 0,
        0, 0, 1, 0, 0, 0, 0, 0, 0,
        3, 0, 0, 9, 0, 2, 0, 0, 5
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cell {
  width: 3em;
  height: 3em;
  line-height: 3em;
  text-align: center;
  border-style: solid;
  border-color: darkgray;
  border-width: 2px 2px 2px 2px;
  font-size: inherit;
}

.Sudoku {
  float: left;
  display: grid;
  grid-template-columns: repeat(9, 3em);
  grid-row-gap: .3em;
  grid-column-gap: .5em;
}
</style>
