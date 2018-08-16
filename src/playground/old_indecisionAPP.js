// ------------------------------OLD WAY (RENDER MANUALLY)-----------------------------------//
import React from 'react';
import ReactDOM from 'react-dom';
const app={
  options:[]
}

function handleSubmit(e){
  e.preventDefault();
  const value=e.target.elements.option.value;
  if(value!==''){
     app.options.push(value);
  }
  e.target.elements.option.value='';
  appRender();
  console.log(app);
}
function clickHandler(e){
  const randomNumber=Math.floor(Math.random()*app.options.length);
  if(app.options.length>0){
    alert(app.options[randomNumber]);
  }
  e.preventDefault();
}

function removeHandler(e){
  app.options=[];
  appRender();
  e.preventDefault();
}

const appRender=function(){
  var template=(
    <div>
     <h1>Indecision App</h1>
     <h2>Put your life in the hands of a computer</h2>
     <h2>{app.options.length>0?'Here are the options':'No options'}</h2>
     <ol>
       {
         app.options.map(item=><li key={item}>{item}</li>)
       }
     </ol>
     <form onSubmit={handleSubmit}>
       <input type="text" name='option' />
       <input type="submit" value="Submit" />
     </form>
     <br/>
     <button onClick={clickHandler}>What should i do??</button>
     <button onClick={removeHandler}>Remove All</button>
    </div>
     );
 var appRoot=document.querySelector('.app');
 ReactDOM.render(template,appRoot);

}

appRender();