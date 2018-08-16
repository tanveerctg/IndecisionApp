import React from 'react';

export default class AddOptions extends React.Component{
 
  state={state:false};
  
  handleSubmit=(e)=>{
    const value=e.target.elements.option.value;
    if(value!=='' && this.props.options.indexOf(value)<0){ 

      this.props.handleMainSubmit(value);
      this.setState(()=>({state:false})) 
      e.target.elements.option.value='';
    }else{

      this.setState(()=>({state:'Please Enter a valid value'}))
    }
    if(this.props.options.indexOf(value)>-1){
      this.setState(()=>({state:'This name is already exists Please choose another name'}))
    }
    e.preventDefault();
  }

  remove_single_item=(e)=>{
    const optionText=(e.target.parentNode.firstChild.data);
    this.props.removeItem(optionText);
    console.log(this.props);
  }
  render(){
    return(
      <div className="options__container">
        <ol>
        {this.props.options.map(item=>
   
          <li key={item} className="options">{item} <button onClick={this.remove_single_item} className="button__remove" >Remove</button></li>

        )}
        </ol>
        <form onSubmit={this.handleSubmit} className="form">
          <input type="text" name='option'/>
          <input type="submit" value="Submit" className="button button__small"/>
        </form>
        {this.state.state && <h4>{this.state.state}</h4>}
    </div>
    )
  }
}