import React, { Component } from 'react';
import './App.css';
import Child from './Child'

class App extends Component {
state={
  elem:['hello', 'code']
}

 updateList=(data)=>{
    this.setState({
      elem:[...this.state.elem, data]
    })  
 }


  render() {
    console.log(this.state.elem,'------------------------------');
    
    return (
      <div className="cont">
         <Child updateList={(data) => this.updateList(data)}/>   {/* this could be written as updateList={this.updateList} */}
      </div>
    );
  }
}

export default App;
