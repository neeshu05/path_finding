


function check(id)
{
    var c=document.getElementById(id);
  
    var obj=window.getComputedStyle(c,null);
    let bgColor=obj.getPropertyValue("background-color");
    if(bgColor=="rgb(173, 216, 230)" || bgColor=="rgb(218, 238, 1)")
       return true;
    else
       return false;

}



 function Reset()
 {

  for(let i=0;i<1000;i++)
  { var a=check("C-"+i);
   if(a==true)
   {
     document.getElementById("C-"+i).innerHTML="<style> #C-"+i+" {background-color:rgba(0, 0, 0, 0)}</style>";
   }
  }
  run=0;
 }

 function ResetAll()
 {
 
 for(let i=0;i<1000;i++)
  { 
     document.getElementById("C-"+i).innerHTML="<style> #C-"+i+" {background-color:rgba(0, 0, 0, 0)}</style>";
  }
  document.getElementById("C-520").innerHTML="<style> #C-520 {background-color:green}</style>";
  startNode="C-520";
  startFlag=1;
  document.getElementById("C-530").innerHTML="<style> #C-530 {background-color:red}</style>";
  endFlag=1;
  endNode="C-530";
  run=0;
 }