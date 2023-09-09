const Graph = require('./graph');

describe('Graph implemintation', () => {
  let myGraph;

  beforeEach(() => {
    myGraph = new Graph();
  });

  it('Vertex can be successfully added to the graph', () => {
    const vertex = myGraph.addVertex(0);
    expect(myGraph.getVertices()).toContain(vertex);
  });

  it('An edge can be successfully added to the graph', () => {
    const vertex1 = myGraph.addVertex(0);
    const vertex2 = myGraph.addVertex(1);
    myGraph.addEdge(vertex1, vertex2, 5);
    expect(myGraph.getNeighbors(vertex1)).toHaveLength(1);
    expect(myGraph.getNeighbors(vertex1)[0].vertex).toBe(vertex2);
    expect(myGraph.getNeighbors(vertex1)[0].weight).toBe(5);
  });

  it('A collection of all vertices can be properly retrieved from the graph', () => {
    myGraph.addVertex(0);
    myGraph.addVertex(1);
    myGraph.addVertex(2);
    expect(myGraph.getVertices()).toHaveLength(3);
  });

  it('All appropriate neighbors can be retrieved from the graph', () => {
    const vertex1 = myGraph.addVertex(0);
    const vertex2 = myGraph.addVertex(1);
    myGraph.addEdge(vertex1, vertex2, 5);
    const neighbors = myGraph.getNeighbors(vertex1);
    expect(neighbors).toHaveLength(1);
    expect(neighbors[0].vertex).toBe(vertex2);
    expect(neighbors[0].weight).toBe(5);
  });

  it('The proper size is returned, representing the number of vertices in the graph', () => {
    myGraph.addVertex(0);
    myGraph.addVertex(1);
    myGraph.addVertex(2);
    expect(myGraph.size()).toBe(3);
  });

  it(' graph with only one vertex and edge can be properly returned', () => {
    const vertex1 = myGraph.addVertex(0);
    const vertex2 = myGraph.addVertex(1);
    myGraph.addEdge(vertex1, vertex2, 10);
    expect(myGraph.getVertices()).toContain(vertex1);
    expect(myGraph.getVertices()).toContain(vertex2);
    const neighbors1 = myGraph.getNeighbors(vertex1);
    const neighbors2 = myGraph.getNeighbors(vertex2);
    expect(neighbors1).toHaveLength(1);
    expect(neighbors2).toHaveLength(1);
    expect(neighbors1[0].vertex).toBe(vertex2);
    expect(neighbors2[0].vertex).toBe(vertex1);
    expect(neighbors1[0].weight).toBe(10);
    expect(neighbors2[0].weight).toBe(10);
  });
});
