import React, { Component } from 'react'

 class Child extends Component {
     state={
         data:'world'
     }
     submitData=()=>{
         this.props.updateList(this.state.data)
     }
  render() {
    
      
    return (
      <div>
        <button onClick={this.submitData}>Submit</button>
      </div>
    )
  }
}
export default Child;