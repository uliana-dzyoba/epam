const arr = [
  {value:100, type: 'USD'},
  {value:215, type: 'EUR'},
  {value:7, type: 'EUR'},
  {value:99, type: 'USD'},
  {value:354, type: 'USD'},
  {value:12, type: 'EUR'},
  {value:77, type: 'USD'}
];



const task1=function (arr){
  return arr.filter(item => 
    item.type == 'USD' && item.value < 100
  )
  .reduce((accumulator, currentValue) => accumulator + currentValue.value, 0);
}

const task2=function (arr){
  return arr.filter(item => 
    item.type == 'EUR'
  )
  .map(item => {item.value*=2; return item;});
}


function setUp(){
  const array = document.getElementById("array");
  array.innerText=JSON.stringify(arr);
  const result1 = document.getElementById("task1");
  result1.innerText = task1(arr);
  const result2 = document.getElementById("task2");
  result2.innerText = JSON.stringify(task2(arr));
}

window.onload = function(){
  setUp();
}