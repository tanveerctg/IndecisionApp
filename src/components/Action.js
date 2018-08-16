import React from 'react';
import OptionModal from './OptionModal';

export default class Action extends React.Component{
  
  state={modal:false};
  clickHandler=(e)=>{
    if(this.props.options.length>0){
      
      this.setState(()=>({modal:true}));
    }
    e.preventDefault();
  }
  clickCloseHandler=()=>{
    this.setState(()=>({modal:false}));
  }
  render(){
    const randomNumber=Math.floor(Math.random()*this.props.options.length);
    const msg=this.props.options[randomNumber];
    return(
      <div>
        <button onClick={this.clickHandler} className="button button__big" disabled={this.props.options.length===0?true:false}>What should i do??</button>
        <OptionModal modalIsOpen={this.state.modal} clickCloseHandler={this.clickCloseHandler.bind(this)} msg={msg}/>
      </div>
    )
  }
}