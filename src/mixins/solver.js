export default {
  data () {
    return {
      CHUNK_SIZE: 3,
      ROW_COL_SIZE: 9,
      SIZE: 81,
      MIN_HINTS: 17,
      iterations: 0
    }
  },

  methods: {
    checkRow (puzzle, number, index) {
      var start = Math.floor(index / this.ROW_COL_SIZE) * this.ROW_COL_SIZE
      for (var i = 0; i < this.ROW_COL_SIZE; i += 1) {
        if (puzzle[start + i] === number) {
          return false
        }
      }
      return true
    },

    checkCol (puzzle, number, index) {
      var start = index % this.ROW_COL_SIZE
      for (var i = 0; i < this.ROW_COL_SIZE; i += 1) {
        if (puzzle[start + (i * this.ROW_COL_SIZE)] === number) {
          return false
        }
      }
      return true
    },

    check3x3 (puzzle, number, index) {
      var start = index - ((index % this.ROW_COL_SIZE) % this.CHUNK_SIZE) -
      (this.ROW_COL_SIZE * (Math.floor(index / this.ROW_COL_SIZE) % this.CHUNK_SIZE))
      for (var i = 0; i < this.ROW_COL_SIZE; i += 1) {
        if (puzzle[start + (this.ROW_COL_SIZE * Math.floor(i / this.CHUNK_SIZE)) + (i % this.CHUNK_SIZE)] === number) {
          return false
        }
      }
      return true
    },

    check (puzzle, number, index) {
      return this.checkRow(puzzle, number, index) &&
      this.checkCol(puzzle, number, index) &&
      this.check3x3(puzzle, number, index)
    },

    recursiveSolve (puzzle, index, maxIterations) {
      if (maxIterations !== 0 && ++this.iterations > maxIterations) {
        throw new Error('Max iterations reached. No solution found.')
      }
      if (index >= this.SIZE) {
        return true
      } else if (puzzle[index] !== 0) {
        return this.recursiveSolve(puzzle, index + 1, maxIterations)
      }

      for (var number = 1; number <= this.ROW_COL_SIZE; number += 1) {
        if (this.check(puzzle, number, index)) {
          puzzle[index] = number
          if (this.recursiveSolve(puzzle, index + 1, maxIterations)) {
            return true
          }
        }
      }
      puzzle[index] = 0
      return false
    },

    solve (puzzle, options) {
      var opts = {
        emptyValue: '0',
        hintCheck: true,
        outputArray: false,
        maxIterations: 1 << 20
      }

      if (options !== undefined) {
        Object.assign(opts, options)
      }

      if (typeof puzzle === 'string') {
        puzzle = puzzle.split('')
      }

      if (!Array.isArray(puzzle)) {
        throw new TypeError('Puzzle must be string or array.')
      }

      if (puzzle.length !== this.SIZE) {
        throw new Error('Puzzle is an invalid size.')
      }

      var hints = 0
      puzzle = puzzle.map(function (element) {
        if (element === opts.emptyValue || element === parseInt(opts.emptyValue, 10)) {
          return 0
        }
        hints++
        var value = parseInt(element, 10)
        if (isNaN(value) || value > 9 || value < 1) {
          throw new TypeError('Invalid puzzle value: ' + element)
        }
        return value
      })

      if (opts.hintCheck && hints < this.MIN_HINTS) {
        throw new Error('A valid puzzle must have at least ' + this.MIN_HINTS + ' hints.')
      }

      if (!this.recursiveSolve(puzzle, 0, opts.maxIterations)) {
        throw new Error('Puzzle could not be solved.')
      }

      return opts.outputArray ? puzzle : puzzle.join('')
    }
  }
}
