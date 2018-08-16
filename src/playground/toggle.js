class Visibility extends React.Component{
  constructor(props){
    super(props);
    this.handleToggle=this.handleToggle.bind(this);
    this.state={
      visibility:false
    }
  }
  handleToggle(e){
    this.setState((prevState)=>{
      return {
        visibility:!prevState.visibility
      }
    })
    e.preventDefault();
  }
  render(){
    return(
      <div>
        <h1>TOGGLE</h1>
        <button onClick={this.handleToggle}>{this.state.visibility?'Hide Test':'Show Text'}</button>
        {this.state.visibility?<p>I am an argentine fan from bangladesh!!</p>:''}
      </div>
    )
  }
}

ReactDOM.render(<Visibility/>,document.querySelector('.app'))
// let visibility=false;
// const a=()=>{

//   visibility=!visibility;
//   render();

// }
// const render=()=>{
//   const jsx=(
    // <div>
    //   <h1>TOGGLE</h1>
    //   <button onClick={a}>{visibility?'Hide Test':'Show Text'}</button>
    //   {visibility?<p>I am an argentine fan from bangladesh!!</p>:''}
    // </div>
//   )
//   ReactDOM.render(jsx,document.querySelector('.app'));
// }
// render();
