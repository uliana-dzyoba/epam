const allOptions = [
  {firstOptions: ["Jennifer", "Sarah", "Karen", "Lucy", "Jessica", "Chloe", "Amy"], secondOptions: ["2", "3"], words:  ["marry ", "have ", " children"]},
  {firstOptions: ["Seattle", "Boston", "Cleveland", "New York", "Oakland", "Washington", "San Francisco"], secondOptions: [" a writer", "an enterpreneur", "an actor", "a programmer", "an artist", "a SEO"], words: ["move to ", "become ", ""]}
]

const type=Math.floor(Math.random()*Math.floor(2));
let firstChoice;
let secondChoice;

for(let i of allOptions[type].firstOptions){
  const result = confirm(i);
  if(result){
    firstChoice = i;
    break;
  }
}

console.log(firstChoice);

if(firstChoice==null){
    firstChoice = prompt();
    if(firstChoice==null||firstChoice.trim()==''){
    firstChoice=allOptions[type].firstOptions[1];
  }
}


for(let i of allOptions[type].secondOptions){
  const result = confirm(i);
  if(result){
    secondChoice = i;
    break;
  }
}

if(secondChoice==null){
  secondChoice = prompt();
  if(secondChoice==null||secondChoice.trim()==''){
    secondChoice=allOptions[type].secondOptions[1];
  }
}

alert("You will "+allOptions[type].words[0]+firstChoice+" and "+allOptions[type].words[1]+secondChoice+allOptions[type].words[2]);