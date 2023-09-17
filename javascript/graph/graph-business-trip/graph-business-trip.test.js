const Graph = require("../graph/graph");
const costTrip = require("./graph-business-trip");

describe("graph-business-trip test", () => {
  let myGraph;

  beforeEach(() => {
    myGraph = new Graph();

    const metroville = myGraph.addVertex("Metroville");
    const pandora = myGraph.addVertex("Pandora");
    const arendelle = myGraph.addVertex("Arendelle");
    const newMonstropolis = myGraph.addVertex("New Monstropolis");
    const naboo = myGraph.addVertex("Naboo");
    const narnia = myGraph.addVertex("Narnia");

    myGraph.addEdge(pandora, arendelle, 150);
    myGraph.addEdge(pandora, metroville, 82);

    myGraph.addEdge(arendelle, pandora, 150);
    myGraph.addEdge(arendelle, metroville, 99);
    myGraph.addEdge(arendelle, newMonstropolis, 42);

    myGraph.addEdge(newMonstropolis, arendelle, 42);
    myGraph.addEdge(newMonstropolis, metroville, 105);
    myGraph.addEdge(newMonstropolis, naboo, 73);

    myGraph.addEdge(naboo, newMonstropolis, 73);
    myGraph.addEdge(naboo, metroville, 26);
    myGraph.addEdge(naboo, narnia, 250);

    myGraph.addEdge(narnia, metroville, 37);
    myGraph.addEdge(narnia, naboo, 250);

    myGraph.addEdge(metroville, newMonstropolis, 405);
    myGraph.addEdge(metroville, arendelle, 99);
    myGraph.addEdge(metroville, narnia, 37);
    myGraph.addEdge(metroville, pandora, 82);
    myGraph.addEdge(metroville, naboo, 26);
  });

  test("it should return the cost of a valid trip with cost 115", () => {
    const tripCost = costTrip(
      ["Arendelle", "New Monstropolis", "Naboo"],
      myGraph
    );
    expect(tripCost).toEqual(115);
  });

  test("it should return null for an invalid trip with a missing city", () => {
    const tripCost = costTrip(
      ["Arendelle", "New Monstropolis", "MissingCity"],
      myGraph
    );
    expect(tripCost).toBeNull();
  });

  test("it should return null for an invalid trip with a single city", () => {
    const tripCost = costTrip(["Arendelle"], myGraph);
    expect(tripCost).toBeNull();
  });

});
