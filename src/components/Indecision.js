import React from 'react';
import Header from './Header';
import AddOptions from './AddOptions';
import Action from './Action';
import Remove from './Remove';

export default class Indecision extends React.Component{
    
    state={options:[]};

  componentDidUpdate=(prevProps,prevState)=>{
    if(this.state.options.length!==prevState.options.length){
       localStorage.setItem('options',JSON.stringify(this.state.options));
    }
  }
  componentDidMount=()=>{
    const options=JSON.parse(localStorage.getItem('options'));

    if(options){
      this.setState(()=>({options:JSON.parse(localStorage.getItem('options'))}))     
    }
  }
  handleMainSubmit=(option)=>{

    this.setState((prevState)=>({options:prevState.options.concat(option)}))  
  }
  removeHandler=(e)=>{   

    this.setState(()=>({options:[]}))
    e.preventDefault();
  }
  removeItem=(optionText)=>{

    this.setState((prevState)=>({options:prevState.options.filter(item=>item!==optionText)}))
   
  }
  render(){
    const title='Indecision App';
    const subTitle='Put your life in the hands of a computer';
    return(
      <div>
        <Header title={title} subTitle={subTitle} />
        <div className="mainPart">
          <Action options={this.state.options}/>
          <Remove removeHandler={this.removeHandler} option_length={this.state.options.length}/>
          <AddOptions handleMainSubmit={this.handleMainSubmit} options={this.state.options} removeItem={this.removeItem} />  
        </div>
      </div>
    )
  }
}

