//Dijkstra algorithm is used to find the shortest distance between two nodes inside a valid weighted graph. Often used in Google Maps, Network Router etc.

//helper class for PriorityQueue
class Node {
    constructor(val, priority) {
      this.val = val;
      this.priority = priority;
    }
  }
  
  class PriorityQueue {
    constructor() {
      this.values = [];
    }
    enqueue(val, priority) {
      let newNode = new Node(val, priority);
      this.values.push(newNode);
      this.bubbleUp();
    }
    bubbleUp() {
      let idx = this.values.length - 1;
      const element = this.values[idx];
      while (idx > 0) {
        let parentIdx = Math.floor((idx - 1) / 2);
        let parent = this.values[parentIdx];
        if (element.priority >= parent.priority) break;
        this.values[parentIdx] = element;
        this.values[idx] = parent;
        idx = parentIdx;
      }
    }
    dequeue() {
      const min = this.values[0];
      const end = this.values.pop();
      if (this.values.length > 0) {
        this.values[0] = end;
        this.sinkDown();
      }
      return min;
    }
    sinkDown() {
      let idx = 0;
      const length = this.values.length;
      const element = this.values[0];
      while (true) {
        let leftChildIdx = 2 * idx + 1;
        let rightChildIdx = 2 * idx + 2;
        let leftChild, rightChild;
        let swap = null;
  
        if (leftChildIdx < length) {
          leftChild = this.values[leftChildIdx];
          if (leftChild.priority < element.priority) {
            swap = leftChildIdx;
          }
        }
        if (rightChildIdx < length) {
          rightChild = this.values[rightChildIdx];
          if (
            (swap === null && rightChild.priority < element.priority) ||
            (swap !== null && rightChild.priority < leftChild.priority)
          ) {
            swap = rightChildIdx;
          }
        }
        if (swap === null) break;
        this.values[idx] = this.values[swap];
        this.values[swap] = element;
        idx = swap;
      }
    }
  }
  
let anim=[]


  //Dijkstra's algorithm only works on a weighted graph.
  
  class WeightedGraph {
    constructor() {
      this.adjacencyList = {};
    }
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2, weight) {
      this.adjacencyList[vertex1].push({ node: vertex2, weight });
      this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }
    Dijkstra(start, finish) {
      const nodes = new PriorityQueue();
      const distances = {};
      const previous = {};
      let path = []; //to return at end
      let smallest;
      //build up initial state
      for (let vertex in this.adjacencyList) {
        if (vertex === start) {
          distances[vertex] = 0;
          nodes.enqueue(vertex, 0);
        } else {
          distances[vertex] = Infinity;
          nodes.enqueue(vertex, Infinity);
        }
        previous[vertex] = null;
      }
      // as long as there is something to visit
      while (nodes.values.length) {
        smallest = nodes.dequeue().val;
        if (smallest === finish) {
          //WE ARE DONE
          //BUILD UP PATH TO RETURN AT END
          while (previous[smallest]) {
            path.push(smallest);
            smallest = previous[smallest];
          }
          break;
        }
        else if(smallest!=start && previous[smallest]!=null){
          // setTimeout(()=>{} ,5000);
           anim.push(smallest);
           // document.getElementById(smallest).innerHTML="<style> #"+smallest+" {background-color:blue;}</style>";
        }
        if (smallest || distances[smallest] !== Infinity) {
          for (let neighbor in this.adjacencyList[smallest]) {
            //find neighboring node
            let nextNode = this.adjacencyList[smallest][neighbor];
            //calculate new distance to neighboring node
            let candidate = distances[smallest] + nextNode.weight;
            let nextNeighbor = nextNode.node;
            if (candidate < distances[nextNeighbor]) {
              //updating new smallest distance to neighbor
              distances[nextNeighbor] = candidate;
              //updating previous - How we got to neighbor
              previous[nextNeighbor] = smallest;
              //enqueue in priority queue with new priority
              nodes.enqueue(nextNeighbor, candidate);
            }
          }
        }
      }
      return path.concat(smallest);
    }
  }
  
  
function checkWall(id)
{
    var c=document.getElementById(id);
    var obj=window.getComputedStyle(c,null);
    let bgColor=obj.getPropertyValue("background-color");
    if(bgColor=="rgb(0, 0, 0)")
       return true;
    else
       return false;

}


function clickup()
{
document.getElementById("b1").innerHTML="<b>Visualize Dijkstra's algorithm </b>";
}

  
function letsVisualize(Start,End){

    document.getElementById("b1").innerHTML=" <b>Visualizing Dijkstra's Algorithm......</b>";

if(run==1){
  console.log("run=1");
  Reset();
}
  
  var graph = new WeightedGraph();


for(let i=0;i<1000;i++)
{
 var c=document.getElementById("C-"+i);
 var obj=window.getComputedStyle(c,null);
 let bgColor=obj.getPropertyValue("background-color");
 if(bgColor!="rgb(0, 0, 0)")
    graph.addVertex("C-"+i);
}
for(let i=0;i<1000;i++)
{
    if(checkWall("C-"+i))
      continue;
    if(i%50!=0){
        var d=i-1;
    if(!checkWall("C-"+d))
    graph.addEdge("C-"+i,"C-"+d ,1);
    }
    if(i%50!=49)
    {
        var d=i+1;
        if(!checkWall("C-"+d))
        graph.addEdge("C-"+i,"C-"+d ,1);
    }
    if(i>=50)
    {
        var d=i-50;
        if(!checkWall("C-"+d))
          graph.addEdge("C-"+i,"C-"+d ,1);  
    }
    if(i+50<1000)
    {
        var d=i+50;
        if(!checkWall("C-"+d))
        graph.addEdge("C-"+i,"C-"+d ,1);  
    }

}



var result=[];
  result=graph.Dijkstra(Start,End);
  anim.reverse();
  run=1;
  var id=setInterval(animate,20);
  var d;
  var id2;
   function animate(){
     if(anim.length>0)
     {
       d=anim.pop();
       document.getElementById(d).innerHTML="<style> #"+d+" {background-color:#ADD8E6;}</style>";
     }
     else{
       clearInterval(id);
    id2=setInterval(myFunction,200);
     }
   }

   function myFunction(){
    if(result.length>0)
    {
      var a=result.pop();
      if(a!=Start&&a!=End)
         document.getElementById(a).innerHTML="<style> #"+a+" {background-color:#DAEE01 ;}</style>"
    }
    else{
      clearInterval(id2);
    }
  }
/*

  result.forEach(myFunction);

  function myFunction(value){
     
    if(value!="C-520"&&value!="C-530")
       document.getElementById(value).innerHTML="<style> #"+value+" {background-color:yellow;}</style>"

  }
*/


}


