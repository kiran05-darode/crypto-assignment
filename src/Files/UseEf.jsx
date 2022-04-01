import { useState,UseEffect, useEffect } from "react";


const UseEffect1=() =>{
    const dt=new Date();

    const[coutn,setCount]=useState(0);
    useEffect(()=>{
      if(coutn>=1){
          document.title=`Chat(${coutn});`
      }
      else{
          document.title=`Chat`;
      }
    })
    console.log("hello outside");
   const mkd=()=>{
    setCount(coutn+1);
   }
    return(
        <>
  <h1>{coutn}</h1>
  <button className="btn " onClick={mkd}>Click me</button>
      
    
        </>
    )
}
export default UseEffect1;