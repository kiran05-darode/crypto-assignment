import React, { Component } from 'react'

export class Contact extends Component {

         constructor(){
             super()
             this.state={
                 messege:"Welcome kiran"
             }}
             
         
     Sumo(){
            this.setState({
                messege:"Thanks for sub"
            })
        }
  render(){
    return (
        <>
      <h1>Contact{this.state.messege}</h1>

      <div><button onClick={() =>this.Sumo()}>subcribe</button></div>
      </>
    )
    }}
export default Contact