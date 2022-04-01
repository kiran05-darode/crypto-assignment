import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonAppBar from './Nav';
const Login = () => {
    const navigate=useNavigate();
    return (

        <>
            <ButtonAppBar />
            <h2 
                style={{
                    backgroundColor:'pink',
                    display:'inline-block',
                    cursor:'pointer'
                }}
             onClick={ ()=>{ navigate('/user')} } >
                Plesese login for User
            </h2>
            <br></br>
            <h2 
                style={{
                    backgroundColor:'pink',
                    display:'inline-block',
                    cursor:'pointer'
                }} 
            onClick={ ()=>{ navigate('/CompanyUser')} } >
            Plesese login for Company
            </h2>


        </>
    )
}
export default Login;