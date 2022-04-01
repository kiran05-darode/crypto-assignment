import { useState } from "react";
const myBio=[
    {
        id:0,myname:"kiran",age:45
    },{
        id:1,myname:"kumar",age:12
    }
    ,{
        id:2,myname:"changdev",age:23
    }
]

const ArrState =() =>{
    const [mynaem , MyFn]=useState(myBio)
    const Note =()=>{
        MyFn([])
    }
    return(

        <>
        {
            mynaem.map((curElm)=><h1>name:{curElm.myname},age:{curElm.age}</h1>)
        }
        <button onClick={Note}>clear</button>
        </>
    )
}
export default ArrState;