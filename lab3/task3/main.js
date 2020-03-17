
function wall(){
  let size=document.getElementById("input").value;
  const wall = document.getElementById("wall");
  wall.textContent="";
  for(let i = size; i>0; i--){
    wall.textContent+="[]".repeat(i)+"\t"+i+" bottles on the wall, one fell\n";
  }
  wall.textContent+="no bottles left";
}

function setUp(){
  wall();
}

window.onload = function(){
  setUp();
}