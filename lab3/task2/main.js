const numRows = 10

const generate = function(numRows) {
    let triangle = [[1], [1,1]]
    
    if(numRows === 0){
        return []
    } else if(numRows == 1){
        return [[1]]       
    } else if(numRows == 2){
        return  [[1], [1,1]]
    } else {      
        for(let i = 2; i < numRows; i++){       
            addRow(triangle)
        }
    }
    return triangle
    
};
const addRow = function(triangle){
    let previous = triangle[triangle.length - 1]
    let newRow = [1]
    for(let i = 0; i < previous.length - 1; i++){
        let current = previous[i]
        let next = previous[i+1] 
        newRow.push(current + next)
    }
    newRow.push(1)
    return triangle.push(newRow)
    
}

const array = generate(numRows);

let format=function format(array){
  let str = "";
  for(let i = 0; i < array.length; i++){
    let arr = array[i];
    str+=' '.repeat(array.length-1-i);
    for(let j = 0; j < arr.length-1; j++){
      str+=arr[j];
      str+=' ';
    }
    str+=arr[arr.length-1];
    str+='\n';
  }
  return str;
} 

function setUp(){
  const triangle = document.getElementById("triangle");
  triangle.textContent = format(array);
}

window.onload = function(){
  setUp();
}