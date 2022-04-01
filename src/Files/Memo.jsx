import { useState } from "react";


const Hooks=() =>
{
    const [myname,setname]=useState('thapha tech');
    console.log(useState);
   
    const changeVal=()=>{
     setname('dada is very good');
    }


return(

    <>
    
   < h1>this is {myname}</h1>
    <button onClick={changeVal}>click me</button>
    </>
)
}
export default Hooks;