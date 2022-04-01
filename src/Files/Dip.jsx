import { useState } from "react";

const Dip =() =>{
    const [Name,setEmail]=useState("");
    console.log(Name);

    return (
        <>
        <div>
            <lable>Name</lable>
            <input type="text"  onChange={(e) =>setEmail(e.target.value)}  />
            <button>sub</button>
        </div>
        </>
    )
}
export default Dip;