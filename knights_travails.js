const node = (x, y) => {
  const adjacents = []

  const addAdjacent = (node) => {
    adjacents.push(node.value)
  }

  return {
    value: [x, y],
    adjacents,
    addAdjacent,
  }
}

const graph = () => {
  const vertices = []

  const findVertex = (x, y) => {
    const index = vertices.findIndex((item) => item.value[0] === x && item.value[1] === y)
    return vertices[index]
  }

  const buildGraph = () => {
    const boardSize = 8
    for (let x = 0; x < boardSize; x++) {
      for (let y = 0; y <= boardSize; y++) {
        const newNode = node(x, y)
        vertices.push(newNode)
      }
    }
    for (let node of vertices) {
      const [x, y] = node.value
      if (x + 2 < boardSize && y + 1 < boardSize) node.addAdjacent(findVertex(x + 2, y + 1))
      if (x + 1 < boardSize && y + 2 < boardSize) node.addAdjacent(findVertex(x + 1, y + 2))
      if (x - 2 >= 0 && y + 1 < boardSize) node.addAdjacent(findVertex(x - 2, y + 1))
      if (x - 1 >= 0 && y + 2 < boardSize) node.addAdjacent(findVertex(x - 1, y + 2))
      if (x + 2 < boardSize && y - 1 >= 0) node.addAdjacent(findVertex(x + 2, y - 1))
      if (x + 1 < boardSize && y - 2 >= 0) node.addAdjacent(findVertex(x + 1, y - 2))
      if (x - 2 >= 0 && y - 1 >= 0) node.addAdjacent(findVertex(x - 2, y - 1))
      if (x - 1 >= 0 && y - 2 >= 0) node.addAdjacent(findVertex(x - 1, y - 2))
    }
  }

  buildGraph()

  const knightMoves = (start, end) => {
    const outOfBounds = []
    if (start[0] < 0 || start[0] > 7 ||
        start[1] < 0 || start[1] > 7 ) outOfBounds.push('start')
    if (end[0] < 0 || end[0] > 7 ||
        end[1] < 0 || end[1] > 7) outOfBounds.push('end')
    if (outOfBounds.length) return outOfBounds.join(' and ') + ' is invalid'

    if (start[0] === end[0] && start[1] === end[1]) return [start]

    const startVertex = findVertex(start[0], start[1])
    const queue = [startVertex]
    const startCoords = start.toString()
    const map = {}
    map[startCoords] = startCoords

    while (queue.length) {
      const search = queue.shift()
      search.adjacents.forEach((item) => {
        const itemCoords = item.toString()
        if (!map[itemCoords]) {
          queue.push(findVertex(item[0], item[1]))
          map[itemCoords] = search.value
        }
      })
    }

    const reverseTrail = [end]
    let step = map[end]
    while (step[0] !== start[0] || step[1] !== start[1]) {
      reverseTrail.push(step)
      step = map[step]
    }

    reverseTrail.push(step)
    return reverseTrail.reverse()
  }

  return {
    knightMoves
  }
}
