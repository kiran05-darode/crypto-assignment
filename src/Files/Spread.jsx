import { useState } from "react";

const Spread=() =>{
    const [myname,setMyObject]=useState({
        name:"kiran darode",myAge:21, village:"ukgon"
    });
     const ChangeObj=() =>{
         setMyObject({...myname,name:"sager"}
     
         )
     }
    return(
        <>
        <h2> {myname.name} & age {myname.myAge}</h2>
        <button onClick={ChangeObj}>click karo</button>
        </>
    )
}
export default Spread;