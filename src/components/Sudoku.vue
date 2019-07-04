<template>
  <div class="Sudoku">
    <div class="sudokuBox">
      <div v-for="(item, index) in items" v-bind:key="item.id" class="tileContainer">
        <div v-if="items[index] > 0">
          <input type="text" v-model="items[index]" :disabled="isdisabled(index)" class="tile" />
        </div>
        <div v-else>
          <input type="text" :disabled="isdisabled(index)" class="tile" />
        </div>
      </div>
    </div>
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
.tile {
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

.tile:disabled {
  background-color: beige;
}

.sudokuBox {
  float: left;
  display: grid;
  grid-template-columns: repeat(9, auto);
  grid-row-gap: .3em;
  grid-column-gap: .5em;
}

.tileContainer {
  width: 48px;
  height: 54px;
}

.tileContainer:nth-child(3n){
  border-style: solid;
  border-color: transparent;
  border-width: 0px 10px 0px 0px;
}

.tileContainer:nth-child(27n){
  border-style: solid;
  border-color: transparent;
  border-width: 0px 0px 10px 0px;
}
</style>
