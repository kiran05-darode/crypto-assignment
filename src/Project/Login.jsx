import React from "react";
import ButtonAppBar from './Nav';  
const Login=()=>{
    return(

        <>
        <ButtonAppBar/>
        <h2>Plesese login for{<a href="http://localhost:3000/user">User</a>}/{<a href="http://localhost:3000/CompanyUser">Company</a>} </h2>
        
        </>
    )
}
export default Login;