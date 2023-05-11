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

}
