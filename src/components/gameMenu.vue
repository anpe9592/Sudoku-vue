<template>
  <div class="gameMenu">
    <a class="button space-right" @click="checkBoard()">Check</a>
    <transition name="fade">
      <div v-if="won" class="modal">
        <h1>Sudoku Solved!</h1>
        <a class="button button-black" @click="closeBox()">Play again</a>
      </div>
      <div v-else-if="gameOver" class="modal">
        <h1>Sudoku not solved!</h1>
        <a class="button button-black" @click="closeBox()">Close</a>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'gameMenu',

  props: {
    gameOver: {
      type: Boolean,
      required: true
    },

    won: {
      type: Boolean,
      required: true
    }
  },

  methods: {
    checkBoard () {
      this.$emit('check-board')
    },

    closeBox () {
      this.$emit('close-box')
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gameMenu {
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  width: 5em;
  height: 7em;
  padding: 1em;
}

.space-right {
  margin-left: auto;
}

.button {
  display: flex;
  height: 2em;
  justify-content: center;
  padding: 0.1em 0.75em;
  border: 1px solid rgb(171, 214, 252);
  color: rgb(171, 214, 252);
  border-radius: 6px;
  align-items: center;
  cursor: pointer;
}

.button:hover {
  background-color: rgb(171, 214, 252);
  color: white;
}

.space-right {
  margin-left: auto;
}

.fade-enter-active {
  transition: opacity 2s;
}

.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.modal {
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: rgba(254, 253, 251, 0.5);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 99999;
}
.points-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.points-enter {
  transform: translateY(30);
}
</style>
