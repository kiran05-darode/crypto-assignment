import React from "react";
import { useState } from "react";
import {Paper,Tabs,Tab,Button} from '@mui/material';
import ButtonAppBar from "./Nav";
const CompanyUser=()=>{
    const [value,setvalue]=useState()
  const handleChange=(event,newValue)=>{
    setvalue(newValue);
  }
    return(
        <>
        <ButtonAppBar/>
        <h1>welcome company user</h1>
        <div>
        <Paper >
          <Tabs
           value={value} 
           indicatorColor="primary"
           textColor="primary"
           onChange={handleChange} 
           aria-label="Disable tab ex">
            
            <Button href="http://localhost:3000/companylogin" ><Tab label="login"></Tab></Button>
           <Button href="http://localhost:3000/companysignup"><Tab label="sign up"></Tab></Button>
          </Tabs>
        </Paper>
        </div>
        </>
    )
}
export default CompanyUser;