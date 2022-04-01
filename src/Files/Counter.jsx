import React, { Component } from 'react'

 class Counter extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          count:1
       }
     }
     increment(){
         this.setState({
             count:this.state.count=this.state.count+1
         })
        
     }
             
         
     
  render() {
    return (
        <> 
        <div>Count-{this.state.count}</div>
        <button onClick={()=>this.increment()}>click</button>
        </>
     
    )
  }
}

export default Counter