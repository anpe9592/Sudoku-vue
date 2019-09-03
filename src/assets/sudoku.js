function genSudoku () {
  const sudokus = [
    '800406007000000400010000650509030780000070000048020103052000090001000000300902005',
    '703000009000700008010054000020090030005201800080030010000560070500002000400000201'
  ]
  return sudokuToArray(sudokus[getRandomInt(2)])
}

function sudokuToArray (sudoku) {
  let str = sudoku
  let ar = str.split('')
  return ar
}

function getRandomInt (max) {
  return Math.floor(Math.random() * Math.floor(max))
}

export default genSudoku
