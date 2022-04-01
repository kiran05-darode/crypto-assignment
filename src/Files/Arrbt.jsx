import { useState } from "react";
const Arrbt =()=>{
    const [name,fnt]=useState("gsutam")
    const Change =()=>{
        fnt("")
    }

return(

    <>
   <h1 className="hed1">{name}</h1>
   <button onClick={Change}>remove</button>
   
   </>
)



}
export default Arrbt;