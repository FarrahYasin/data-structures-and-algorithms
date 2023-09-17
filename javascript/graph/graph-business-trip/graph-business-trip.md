# graph-business-trip

### whiteBoard:
>![graph-business-trip](graph-business-trip.png)

**code**:
```javascript
const Graph = require("../graph/graph");

function costTrip(cityNames, graph) {
  if (!cityNames || cityNames.length < 2) {
    return null;
  }

  let totalCost = 0;

  for (let i = 0; i < cityNames.length - 1; i++) {
    const currentCityName = cityNames[i];
    const nextCityName = cityNames[i + 1];

    const currentCity = graph
      .getVertices()
      .find((vertex) => vertex.value === currentCityName);
    const nextCity = graph
      .getVertices()
      .find((vertex) => vertex.value === nextCityName);

    if (!currentCity || !nextCity) {
      return null; 
    }

    const edges = graph.getNeighbors(currentCity);
    const edgeToNextCity = edges.find((edge) => edge.vertex === nextCity);

    if (!edgeToNextCity) {
      return null; 
    }

    totalCost += edgeToNextCity.weight;
  }

  return totalCost;
}
module.exports = costTrip;

const myGraph = new Graph();

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

const tripCost1 = costTrip(["Metroville", "Pandora"], myGraph);
console.log(tripCost1);

const tripCost = costTrip(["Arendelle", "New Monstropolis", "Naboo"], myGraph);
console.log(tripCost);

```

**Test**:
>![test_1](test_1.png)
>![test_2](test_2.png)