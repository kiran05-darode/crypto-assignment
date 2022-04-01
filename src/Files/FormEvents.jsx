import {useState} from "react";
const FormEvents = () =>{
 
    const [email,setEmail]=useState(" ");
    const [password,setPassword]=useState("");


    return (
        <>
        <form action="" >

            <div>
                <label htmlFor="email">Email</label>
                <input type="text" name='email' id="email"
                 autoComplete="off" value={email} 
                 onChange={(e) =>setEmail(e.target.value)} ></input>
               

            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name='password' id="password"
                autoComplete="off" 
                onChange={(e) =>setPassword(e.target.value)}
                value={password}></input>
            </div>
            <button type="submit">submit</button>

        </form>
        
        </>
    )
}
export default FormEvents;