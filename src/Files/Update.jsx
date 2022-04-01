import {useState} from "react";

const MyUpdate= ()=>{
   let a=["kiran","Rshul","pratik"];
    const[Myname , SetMe]=useState("rahul");      

    const idea=a.map(name=><h2>{name}</h2>);

    const CallBro=() =>{

        SetMe(idea);
    }
    return(
        <>
       
  
        <button onClick={CallBro}>click me</button>
        </>
    )


}
export default MyUpdate;