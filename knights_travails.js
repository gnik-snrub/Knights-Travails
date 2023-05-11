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
}
