import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Option from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Select from '@mui/material/Select';
import { BrowserRouter, Routes, Route,Switch,Router } from "react-router-dom";
import User from './User';


export default function ButtonAppBar() {
  
  const hello =()=>{
   return(

    <>
    <BrowserRouter>
    <Routes>
      <Route exact path='/user' element={<User/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
   )
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2}}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome To CryptoNaukri
          </Typography>
        
         
         <Button variant='contained'  href='http://localhost:3000/login' >Login</Button>
          


          
        
         
          
           
        </Toolbar>
      </AppBar>
    </Box>

    
  );
}