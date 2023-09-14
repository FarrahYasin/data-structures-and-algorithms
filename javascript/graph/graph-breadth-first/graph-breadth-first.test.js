const Graph = require("./graph-breadth-first");

describe("Graph BFS", () => {
  it("should perform BFS on a simple graph", () => {
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

    const formattedResult = result.map((vertex) => vertex.value);
    expect(formattedResult).toEqual([
      "Pandora",
      "Arendelle",
      "Metroville",
      "Monstroplolis",
      "Narnia",
      "Naboo",
    ]);
  });

  it("should handle disconnected components", () => {
    const myGraph = new Graph();

    const A = myGraph.addVertex("A");
    const B = myGraph.addVertex("B");
    const C = myGraph.addVertex("C");
    const X = myGraph.addVertex("X");
    const Y = myGraph.addVertex("Y");

    myGraph.addEdge(A, B);
    myGraph.addEdge(B, C);

    const result = myGraph.bfs(X);

    const formattedResult = result.map((vertex) => vertex.value);
    expect(formattedResult).toEqual(["X"]);
  });
});
