function setUp(){
  const form=document.getElementById('img-form');
  const inputs=form.getElementsByTagName('input');
  for(let i=0; i<inputs.length; i++){
    inputs[i].addEventListener('input', validateInput);

  }
  form.addEventListener('submit', validateForm);
  // form.addEventListener('submit', function(){
  //   let isValid=true;
  //   for(let i=0; i<inputs.length; i++){
  //     if(inputs[i].value==""){
  //       inputs[i].classList.add('error');
  //     }
  //     if(inputs[i].classList.contains('error')) {
  //       isValid=false;
  //     }
  //   } 

  //   if(isValid) changeImage(inputs);
  // });
}
function validateForm(event){
  event.preventDefault();
  let isValid=true;
  const inputs=event.target.getElementsByTagName('input');
    for(let i=0; i<inputs.length; i++){
      if(inputs[i].value==""){
        inputs[i].classList.add('error');
      }
      if(inputs[i].classList.contains('error')) {
        isValid=false;
      }
    } 

    if(isValid) changeImage(inputs);
}

function validateInput(event){
  const attribute=event.target.dataset.format;
  if((attribute=='number'&&isNaN(event.target.value))||(attribute=='string'&&!event.target.value.match(/[a-z]/i))){
    event.target.classList.add('error');
  } else if(event.target.value!=""){
    event.target.classList.remove('error');
  }
}

function changeImage(inputs){
  const imageWidth=inputs['width'].value;
  const imageHeight=inputs['height'].value;
  const frameWidth=inputs['frame-width'].value;
  const frameColor=inputs['frame-color'].value;
  const altText=inputs['text'].value;
  const image=document.getElementById("image");
  image.style.width=imageWidth+'px';
  image.style.height=imageHeight+'px';
  image.style["border-width"]=frameWidth+'px';
  image.style["border-color"]=frameColor
  image.alt=altText;
}

window.onload = function(){
  setUp();
}