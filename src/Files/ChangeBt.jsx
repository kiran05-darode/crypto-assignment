import { useState } from "react";
const ChangeBt=()=>{
     const [name,Setdatao]=useState("prakash")
    const CallFn=()=>{
      Setdatao("deva kumar")
      let val=name;
      if(val==="prakash"){
          Setdatao("deva kumar");
      }else{
          Setdatao("prakash");
      }
     }

     return(
<>
<h1>{name}</h1>
<h1 style={{color: "red",background:"pink",border:"2px solid blue"}}>Hello Style!</h1>
<button onClick={CallFn}>click me</button>
</>
     );
 }
 export default ChangeBt;