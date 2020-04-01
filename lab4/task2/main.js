function setUp(){
  const addButton=document.getElementById('add');
  addButton.addEventListener('click', addRow);
  const table=document.getElementById('river-table');
  table.addEventListener('click', deleteRow);
  for(let n of document.getElementsByClassName('riverName')) {
    n.addEventListener('input', changeDiagram);
  }
  for(let l of document.getElementsByClassName('riverLength')) {
    l.addEventListener('input', changeDiagram);
  }
  drawDiagram();
}

function addRow(){
  const table=document.getElementById('river-table');
  const tableBody=table.getElementsByTagName('tbody')[0];
  const newRow=tableBody.insertRow();
  const deleteCell=newRow.insertCell(0);
  const nameCell=newRow.insertCell(1);
  const lengthCell=newRow.insertCell(2);
  const newDeleteButton=document.createElement('button');
  newDeleteButton.classList.add('delete');
  newDeleteButton.textContent='Видалити';
  deleteCell.appendChild(newDeleteButton);
  nameCell.classList.add('riverName');
  lengthCell.classList.add('riverLength');
  nameCell.setAttribute('contenteditable', 'true');
  lengthCell.setAttribute('contenteditable', 'true');
  nameCell.addEventListener('input', changeDiagram);
  lengthCell.addEventListener('input', changeDiagram);

  const block=document.createElement('div');
  const bar=document.createElement('div');
  const caption=document.createElement('div');
  caption.classList.add('names');
  bar.classList.add('bars');
  bar.style.backgroundColor="#" + getColor();
  block.classList.add('block');
  block.appendChild(bar);
  block.appendChild(caption);
  bar.addEventListener('mousemove', showValue);
  const diagram=document.getElementById('diagram');
  diagram.appendChild(block);
  changeDiagram();
}

function deleteRow(event){
  if(event.target.classList.contains('delete')){
  const index=event.target.parentNode.parentNode.rowIndex;
  event.currentTarget.deleteRow(index);
  const deletedBlock=document.getElementsByClassName('block')[index-1];
  deletedBlock.remove();
  changeDiagram();
  }
}

function drawDiagram(){
  const namesCollection=document.getElementsByClassName('riverName');
  const lengthCollection=document.getElementsByClassName('riverLength');
  let names=[];
  let lengthes=[];
  for(let n of namesCollection){
    names.push(n.innerText);
  }
  for(let l of lengthCollection){
    const value=l.innerText;
    if(!isNaN(value))
    lengthes.push(l.innerText);
    else lengthes.push(0);
  }
  let blocks=[];
  for(let i=0; i<names.length; i++){
    const block=document.createElement('div');
    const bar=document.createElement('div');
    const caption=document.createElement('div');
    caption.textContent=names[i];
    caption.classList.add('names');
    bar.dataset.value=lengthes[i];
    bar.classList.add('bars');
    bar.style.backgroundColor="#" + getColor();
    block.classList.add('block');
    bar.addEventListener('mousemove', showValue);
    block.appendChild(bar);
    block.appendChild(caption);
    blocks.push(block);
  }
  const diagramFragment=document.createDocumentFragment();
  for(let i=0; i<names.length; i++){
    diagramFragment.appendChild(blocks[i]);
  }
  const diagram=document.getElementById('diagram');
  diagram.appendChild(diagramFragment);
  const over=document.createElement('div');
  over.classList.add('value');
  diagram.appendChild(over);
  diagram.addEventListener('mouseout', function(){
    over.style.visibility='hidden';
  })

  const max=Math.max(...lengthes);
  const height=370; 
  for(let i=0; i<names.length; i++){
    const bar=diagram.getElementsByClassName('bars')[i]
    bar.style.height=(lengthes[i]/max)*height+'px';
  }

}

function changeDiagram(){
  const namesCollection=document.getElementsByClassName('riverName');
  const lengthCollection=document.getElementsByClassName('riverLength');
  let names=[];
  let lengthes=[];
  for(let n of namesCollection){
    names.push(n.innerText);
  }
  for(let l of lengthCollection){
    const value=l.innerText;
    if(!isNaN(value))
    lengthes.push(l.innerText);
    else lengthes.push(0);
  }
  const max=Math.max(...lengthes);
  const height=370; 
  for(let i=0; i<names.length; i++){
    const bar=diagram.getElementsByClassName('bars')[i]
    bar.style.height=(lengthes[i]/max)*height+'px';
    bar.dataset.value=lengthes[i];
    const caption=diagram.getElementsByClassName('names')[i]
    caption.textContent=names[i];
  }
}

function showValue(event){
  const value=event.target.dataset.value;
  const x=event.clientX;
  const y=event.clientY;
  const over=document.getElementsByClassName('value')[0];
  over.textContent=value;
  over.style.top=y+'px';
  over.style.left=x+15+'px';
  over.style.visibility='visible';

}

function getColor(){
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  return randomColor;
}

window.onload = function(){
  setUp();
}