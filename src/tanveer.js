import React from 'react';
import ReactDOM from 'react-dom';

class Indecision extends React.Component{
  constructor(props){
    super(props);
    this.state={
      options:[]
    };
    this.handleMainSubmit=this.handleMainSubmit.bind(this);
    this.removeHandler=this.removeHandler.bind(this);
    this.removeItem=this.removeItem.bind(this);
  }
  componentDidUpdate(prevProps,prevState){
    if(this.state.options.length!==prevState.options.length){
       localStorage.setItem('options',JSON.stringify(this.state.options));
    }
  }
  componentDidMount(){
    this.setState(()=>{
      return {
       options:JSON.parse(localStorage.getItem('options'))
      }
    })
  }
  handleMainSubmit(option){
    this.setState((prevState)=>{
      return {
       options:prevState.options.concat(option)
      }
    })
  }
  removeHandler(e){
    this.setState((e)=>{
      return {
       options:[]
      }
    });
    e.preventDefault();
  }
  removeItem(optionText){
    this.setState((prevState)=>{
      return {
       options:prevState.options.filter(item=>item!==optionText)
      }
    });
  }
  render(){
    const title='Indecision App';
    const subTitle='Put your life in the hands of a computer';
    return(
      <div>
        <Header title={title} subTitle={subTitle} />
        <AddOptions handleMainSubmit={this.handleMainSubmit} options={this.state.options} removeItem={this.removeItem}/>
        <Action options={this.state.options}/>
        <Remove removeHandler={this.removeHandler}/>
      </div>
    )
  }
}
class Header extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subTitle}</h2>
        <h2>{this.props.option_length>0?'Here are the options':'No options'}</h2>
      </div>
    )
  }
}
class AddOptions extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.state={
      state:false
    }
  }
  handleSubmit(e){
    const value=e.target.elements.option.value;
    if(value!=='' && this.props.options.indexOf(value)<0){  
      this.props.handleMainSubmit(value);
      this.setState(()=>{
        return {
         state:false
        }
      })  
      e.target.elements.option.value='';
    }else{
      this.setState(()=>{
        return {
         state:'Please Enter a valid value'
        }
      })
    }
    if(this.props.options.indexOf(value)>-1){
      this.setState(()=>{
        return {
         state:'This name is already exists Please choose another name'
        }
      })
    }
    e.preventDefault();
  }
  remove_single_item(e){
    const optionText=(e.target.parentNode.firstChild.data);
    this.props.removeItem(optionText);
  }
  render(){
    return(
      <div>
      <ol>
      {this.props.options.map(item=>
        
        <li key={item}>{item} <button onClick={this.remove_single_item.bind(this)}>Remove</button></li>

      )}
      </ol>
      {this.state.state && <p>{this.state.state}</p>}
      <form onSubmit={this.handleSubmit}>
        <input type="text" name='option'/>
        <input type="submit" value="Submit"/>
      </form>
    </div>
    )
  }
}
class Action extends React.Component{
  constructor(props){
    super(props);
    this.clickHandler=this.clickHandler.bind(this);
  }
  clickHandler(e){
    const randomNumber=Math.floor(Math.random()*this.props.options.length);
    if(this.props.options.length>0){
      alert(this.props.options[randomNumber]);
    }
    e.preventDefault();
  }
  render(){
    return(
    <button onClick={this.clickHandler}>What should i do??</button>
    )
  }
}
class Remove extends React.Component{

  render(){
    return(
      <button onClick={this.props.removeHandler}>Remove All</button>
    )
  }
}
ReactDOM.render(<Indecision />,document.querySelector('.app'));