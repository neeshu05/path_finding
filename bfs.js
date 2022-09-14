
function createQueue() {
    const queue = [];

    return {
        enqueue(item) {
            queue.unshift(item)
        },
        dequeue() {
            return queue.pop()
        },
        peek() {
            return queue[queue.length - 1]
        },
        get length() {
            return queue.length
        },
        isEmpty() {
            return queue.length === 0
        }
    }
}

var anima=[];
        anima=new createQueue();

class Graph {
    constructor() {
      this.adjacencyList = [];
    }
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1 );
    }


    bfs(start,finish){
        let path=[];
        let visited=[];
        let inQueue=[];
        let prev=[];
        let q=new createQueue();
        visited[start]=true;
        q.enqueue(start);
        let found=0;
        while(!q.isEmpty())
        {
           var ele=q.dequeue();
           visited[ele]=true;

           if(ele==finish){
               found=1;
              break;
           }
          else if(ele!=start)
          {
           // document.getElementById(ele).innerHTML="<style> #"+ele+" {background-color:blue;}</style>";
           anima.enqueue(ele);
          }

        for(let neighbor in this.adjacencyList[ele])
        {
    
          let nextNode = this.adjacencyList[ele][neighbor];
            if(visited[nextNode]!=true){
                if(inQueue[nextNode]!=true){
              q.enqueue(nextNode);
              prev[nextNode]=ele;
              inQueue[nextNode]=true;
                }
            else{
                prev[nextNode]=ele;
            }
           // document.write(" "+nextNode+" : "+prev[nextNode]);
            }
        }
     }
     
     if(found==1)
     {
         var x=finish;
         while(prev[x]!=start)
         {
             path.push(prev[x]);
             x=prev[x];
         }
        return path;
     }
     else
     return 0;

    }


}

/*
var graph=new Graph();
graph.addVertex("A");
 graph.addVertex("B");
 graph.addVertex("C");
 graph.addVertex("D");
 graph.addVertex("E");
 graph.addVertex("F");
 graph.addVertex("G");
 graph.addVertex("H");
 graph.addVertex("I");
 graph.addVertex("J");

 graph.addEdge("A", "B");
 graph.addEdge("A", "C");
 graph.addEdge("A", "D");
 graph.addEdge("B", "E");
 graph.addEdge("B", "F");
 graph.addEdge("C", "G");
 graph.addEdge("C", "H");
 graph.addEdge("D", "I");
 graph.addEdge("D", "J");
 document.write("<br>");
 document.write(graph.bfs("A", "J"));
 console.log(graph.bfs("A", "J"));
 */
 

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


function bfsclickup()

{
    document.getElementById("b2").innerHTML=" <b>Visualize BFS algorithm</b>";

}



 function letsVisualizeBfs(Start,End){

    document.getElementById("b2").innerHTML=" <b>Visualizing BFS algorithm......</b>";

    if(run==1){
      console.log("run=1");
      Reset();
    }


  
  var graph = new Graph();


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
    graph.addEdge("C-"+i,"C-"+d );
    }
    if(i%50!=49)
    {
        var d=i+1;
        if(!checkWall("C-"+d))
        graph.addEdge("C-"+i,"C-"+d );
    }
    if(i>=50)
    {
        var d=i-50;
        if(!checkWall("C-"+d))
          graph.addEdge("C-"+i,"C-"+d );  
    }
    if(i+50<1000)
    {
        var d=i+50;
        if(!checkWall("C-"+d))
        graph.addEdge("C-"+i,"C-"+d);  
    }

}


var result=[];
  result=graph.bfs(Start,End);
  run=1;
 var id=setInterval(animate,20);
var d;
var id2;
var g=10;
var b=200;
 function animate(){
   if(!anima.isEmpty())
   {
     d=anima.dequeue();
     g+=5;
     b+=5;
     document.getElementById(d).innerHTML="<style> #"+d+" {background-color:#ADD8E6;}</style>";
   }
   else{
     clearInterval(id);
     if(result!=0)
  id2=setInterval(myFunction,200);
   }
 }
/*
  result.forEach(myFunction);

  function myFunction(value){
     
    if(value!="C-520"&&value!="C-530")
       document.getElementById(value).innerHTML="<style> #"+value+" {background-color:yellow;}</style>"

  }

*/
function myFunction(){
  if(result.length>0)
  {
    var a=result.pop();
    if(a!=Start&&a!=End)
       document.getElementById(a).innerHTML="<style> #"+a+" {background-color:#DAEE01;}</style>"
  }
  else{
    clearInterval(id2);
  }
}

}
