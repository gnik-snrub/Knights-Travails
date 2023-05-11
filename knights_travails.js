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

}
