<template>
  <div class="Sudoku">
    <div v-for="(item, index) in items" v-bind:key="item.id">
      <input type="text" v-model="items[index]" :disabled="isdisabled(index)" />
    </div>
    <div v-for="item in items" v-bind:key="item.id" class="shadowBox"></div>
  </div>
</template>

<script>
export default {
  name: 'Sudoku',
  data () {
    return {
      items: [],
      shadowItems: []
    }
  },

  beforeMount () {
    this.setupBoard()
  },

  methods: {
    isdisabled (n) {
      if (this.shadowItems[n] > 0) {
        return true
      } else {
        return false
      }
    },

    setupBoard () {
      this.createBoard()
      this.createShadowBoard()
    },

    createBoard () {
      this.items = [
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
    },

    createShadowBoard () {
      this.shadowItems = [...this.items]
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  width: 3em;
  height: 3em;
  line-height: 3em;
  background-color: aliceblue;
  text-align: center;
  border-style: solid;
  border-color: darkgray;
  border-width: 2px 2px 2px 2px;
  font-size: inherit;
}

input:disabled {
  background-color: beige;
}

.shadowBox {
  width: 3em;
  height: 3em;
  background-color: red;
}

.Sudoku {
  float: left;
  display: grid;
  grid-template-columns: repeat(9, 3em);
  grid-row-gap: .3em;
  grid-column-gap: .5em;
}
</style>
