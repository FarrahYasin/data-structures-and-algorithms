class Vertex {
  constructor(value) {
    this.value = value;
    this.edges = [];
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.vertices = new Map();
  }

  addVertex(value) {
    const vertex = new Vertex(value);
    this.vertices.set(vertex, []);
    return vertex;
  }

  addEdge(vertex1, vertex2, weight = 0) {
    if (!this.vertices.has(vertex1) || !this.vertices.has(vertex2)) {
      throw new Error("Vertices must exist in the graph.");
    }

    const edges1 = this.vertices.get(vertex1);
    const edges2 = this.vertices.get(vertex2);

    edges1.push(new Edge(vertex2, weight));
    edges2.push(new Edge(vertex1, weight));
  }

  getVertices() {
    return [...this.vertices.keys()];
  }

  getNeighbors(vertex) {
    if (!this.vertices.has(vertex)) {
      throw new Error("Vertex does not exist in the graph.");
    }

    return this.vertices.get(vertex);
  }

  size() {
    return this.vertices.size;
  }

  bfs(start) {
    const visited = new Set();
    const queue = [start];
    const result = [];

    while (queue.length > 0) {
      const vertex = queue.shift();

      if (!visited.has(vertex)) {
        visited.add(vertex);
        result.push(vertex);

        const neighbors = this.getNeighbors(vertex);
        for (const neighbor of neighbors) {
          if (!visited.has(neighbor.vertex)) {
            queue.push(neighbor.vertex);
          }
        }
      }
    }

    return result;
  }
}
module.exports = Graph;

const myGraph = new Graph();

const Pandora = myGraph.addVertex("Pandora");
const Arendelle = myGraph.addVertex("Arendelle");
const Metroville = myGraph.addVertex("Metroville");
const Monstroplolis = myGraph.addVertex("Monstroplolis");
const Narnia = myGraph.addVertex("Narnia");
const Naboo = myGraph.addVertex("Naboo");

myGraph.addEdge(Pandora, Arendelle);
myGraph.addEdge(Arendelle, Metroville);
myGraph.addEdge(Metroville, Monstroplolis);
myGraph.addEdge(Metroville, Narnia);
myGraph.addEdge(Metroville, Naboo);
myGraph.addEdge(Narnia, Naboo);

const result = myGraph.bfs(Pandora);

const formattedResult = result.map((vertex) => vertex.value).join(", ");
console.log(formattedResult);
