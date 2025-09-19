// Model
const Model = (function () {
    const state = {
      cells: [], // generate an Array of objects which used to track the state of the game board status
      score: 0,
      time: 30,
      timers: { moles: null, snakes: null, countdown: null }
    }
  
    function initCells(n = 12) {
      state.cells = Array.from({ length: n }, (_, i) => ({ id: i, status: 'empty' }))
    }
  
    function reset() {
      state.score = 0
      state.time = 30
      initCells()
    }
  
    return {
      state,
      initCells,
      reset
    }
  })()
  
// View
const View = (function () {
const board = document.getElementById('board')
const scoreEl = document.getElementById('score')
const timerEl = document.getElementById('timer')
const startBtn = document.getElementById('start')

function renderBoard(cells) {
    board.innerHTML = ''
    cells.forEach(c => {
    board.innerHTML += `
        <div class="cell" data-id="${c.id}">
        <div class="hole"></div>
        <div class="character" data-id="${c.id}"></div>
        </div>`
    })
}

/**
 * Updates the visual representation of a cell on the game board.
 */
function updateCell(cell) {
    const char = board.querySelector(`.character[data-id="${cell.id}"]`)
    char.classList.remove('visible')
    char.innerHTML = ''
    if (cell.status === 'mole') {
    char.classList.add('visible')
    char.innerHTML = `<img src="mole.png">`
    }
    if (cell.status === 'snake') {
    char.classList.add('visible')
    char.innerHTML = `<img src="snake.png">`
    }
}

function updateScore(score) { scoreEl.textContent = `Let's Go, your total score is ${score}` }
function updateTimer(t) { timerEl.textContent = `Time Left ${t}` }

function clearAll() {
    board.querySelectorAll('.character').forEach(c => {
    c.classList.remove('visible')
    c.innerHTML = ''
    })
}

function showAllSnakes() {
    board.querySelectorAll('.hole').forEach(c => {
    c.classList.add('visible')
    c.innerHTML = `<img src="snake.png">`
    })
}

return {
    board,
    startBtn,
    renderBoard,
    updateCell,
    updateScore,
    updateTimer,
    clearAll,
    showAllSnakes
}
})()
  
//     Controller
const Controller = (function (Model, View) {
function startGame() {
    stopAll()
    Model.reset()
    View.renderBoard(Model.state.cells)
    View.updateScore(Model.state.score)
    View.updateTimer(Model.state.time)

    // every 1 second, it should create a mole inside one random block on the board 
    // Spawn moles - 
    Model.state.timers.moles = setInterval(spawnMole, 1000)
    // Spawn snakes
    Model.state.timers.snakes = setInterval(spawnSnake, 2000)
    // Countdown
    Model.state.timers.countdown = setInterval(() => {
    Model.state.time--
    View.updateTimer(Model.state.time)
    if (Model.state.time <= 0) endGame('Time is Over!')
    }, 1000)

    // Click handler
    View.board.onclick = e => {
    const id = e.target.closest('.character')?.dataset.id
    if (id) hit(+id)
    }
}

function spawnMole() {
    const emptyCells = Model.state.cells.filter(c => c.status === 'empty')
    if (!emptyCells.length) return
    const cell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
    cell.status = 'mole'
    View.updateCell(cell)
    setTimeout(() => {
    if (cell.status === 'mole') {
        cell.status = 'empty'
        View.updateCell(cell)
    }
    }, 1500)
}

function spawnSnake() {
    Model.state.cells.forEach(c => { if (c.status === 'snake') { c.status = 'empty'; View.updateCell(c) } })
    const cell = Model.state.cells[Math.floor(Math.random() * Model.state.cells.length)]
    cell.status = 'snake'
    View.updateCell(cell)
}

function hit(id) {
    const cell = Model.state.cells[id]
    if (cell.status === 'mole') {
    Model.state.score++
    View.updateScore(Model.state.score)
    cell.status = 'empty'
    View.updateCell(cell)
    } else if (cell.status === 'snake') {
    endGame('You clicked a snake! Game Over!')
    }
}

function stopAll() {
    Object.values(Model.state.timers).forEach(t => clearInterval(t))
}

function endGame(msg) {
    stopAll()
    if (msg.includes('snake')) View.showAllSnakes()
    alert(msg)
}

// Public API
return { startGame }
})(Model, View)
  
  // Init
  Model.initCells()
  View.renderBoard(Model.state.cells)
  View.startBtn.onclick = () => Controller.startGame()
  