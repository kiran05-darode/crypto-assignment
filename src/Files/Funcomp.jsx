import { Component, useState } from "react";

const Funcomp= ()=>{
    const[ name ,fuc]=useState("kiran darode");
    const Chake=()=>{
        fuc("display name")
    }
     return(
         <>
         <h1>{name}</h1>
         <button onClick={Chake}>click me</button>
         
         </>
     )
}
export default Funcomp;