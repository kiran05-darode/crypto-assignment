import React, { useState } from "react";
import { Box,Tabs,Tab,Paper,Button } from '@mui/material';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabUnstyled';
import TabUnstyled from '@mui/base/TabUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import ButtonAppBar from "./Nav";
import {useNavigate} from 'react-router-dom';
const User=()=>{
  const navigate=useNavigate();
  const [value,setvalue]=useState()
  const handleChange=(event,newValue)=>{
    setvalue(newValue);
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
            
            <Button 
            onClick={()=>{navigate('/loginform')}}
             ><Tab label="login" ></Tab></Button>
           <Button
           onClick={()=>{navigate('/usersignup')}}
            ><Tab label="sign up"></Tab></Button>
          </Tabs>
        </Paper>
        </div>
        
        </>
    )
}
export default User;