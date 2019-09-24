<template>
  <div class="Sudoku">
    <div class="sudokuBox">
      <div v-for="(item, index) in items" v-bind:key="item.id" class="tileContainer">
        <input type="text" v-model="items[index]" :disabled="isdisabled(index)" class="tile" />
      </div>
    </div>
    <gameMenu
      @check-board="checkBoard()" @close-box="closeBox()" :gameOver="gameOver" :won="won"
      @solve-board="solveBoard()">
    </gameMenu>
  </div>
</template>

<script>
import solver from '@/mixins/solver'
import gameMenu from '@/components/gameMenu.vue'
import genSudoku from '@/assets/sudoku'

export default {
  name: 'Sudoku',
  mixins: [solver],
  components: {
    gameMenu
  },

  data () {
    return {
      items: [],
      shadowItems: [],
      solutionItems: [],
      gameOver: false,
      won: false
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
      this.removeZeros()
    },

    checkBoard () {
      this.checkItem()
    },

    solveBoard () {
      this.items = this.solve(this.shadowItems)
    },

    closeBox () {
      this.won = false
      this.gameOver = false
    },

    removeZeros () {
      for (let index = 0; index < this.items.length; index++) {
        if (this.items[index] < 1) {
          this.items[index] = ''
        }
      }
    },

    createBoard () {
      this.items = genSudoku()
    },

    createShadowBoard () {
      this.shadowItems = [...this.items]
      this.solveItems()
    },

    checkItem () {
      if (this.solutionItems === this.items.join('')) {
        this.won = true
      } else {
        this.gameOver = true
      }
    },

    solveItems () {
      this.solutionItems = this.solve(this.shadowItems)
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

.tile:invalid {
    background: red;
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
