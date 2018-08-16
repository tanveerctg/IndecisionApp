import React from 'react';

const Remove=(props)=>{
  return(
    <div className="msg">
       <h2>{props.option_length>0?'Here are the options':'No options'}</h2>
      <button onClick={props.removeHandler} className="button__remove">Remove All</button>
    </div>
  )
};

export default Remove;