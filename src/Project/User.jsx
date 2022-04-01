import React, { useState } from "react";
import { Box,Tabs,Tab,Paper,Button } from '@mui/material';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabUnstyled';
import TabUnstyled from '@mui/base/TabUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import ButtonAppBar from "./Nav";

const User=()=>{
  const [value,setvalue]=useState()
  const handleChange=(event,newValue)=>{
    setvalue(newValue);
  }
    const lin=()=>{
      return(
        <>
       
        <a href="ocalhost:3000/loginform"></a>
        </>
      )
    }
    return(

        <>
         <ButtonAppBar/>
        <h1>Hello User</h1>
        <div>
        <Paper >
          <Tabs
           value={value} 
           indicatorColor="primary"
           textColor="primary"
           onChange={handleChange} 
           aria-label="Disable tab ex">
            
            <Button href="http://localhost:3000/loginform"><Tab label="login" ></Tab></Button>
           <Button href="http://localhost:3000/usersignup"><Tab label="sign up"></Tab></Button>
          </Tabs>
        </Paper>
        </div>
        
        </>
    )
}
export default User;