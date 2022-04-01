import React, { useState } from "react";
import {Grid,Paper,Avatar, TextField ,Checkbox, Button, Typography} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { Label } from "@mui/icons-material";
import { Link,useNavigate } from "react-router-dom";
import ButtonAppBar from "./Nav";

const CompanyLogin=()=>{
 const paperStyle={padding:20, height:"70vh", width:280,margin:"20px auto"}
 const avtarStyle={backgroundColor:"green"};
const navigate=useNavigate();

 var checked="";
 const [checed,myFn]=useState("k")
   const handleChange=()=>{
 myFn("hello");
   }

    return(
      
        <>
         <ButtonAppBar/>
       <Grid>
           <Paper elevation={10} style={paperStyle}>
               <Grid align='center'>
           <Avatar style={avtarStyle}><LockIcon></LockIcon> </Avatar>
           <h2>Login User</h2>
           <TextField id="" variant="standard" label="UserName" placeholder="Enter UserName" fullWidth required ></TextField>
           <TextField variant="standard" label="Password" fullWidth required type="password"></TextField>
           
           </Grid>
           <Checkbox></Checkbox> 
           
               <lable>Remember me</lable>
          
           <Grid align="center" >
               <Button 
               onClick={()=>{navigate('/company-home')}}
               variant="contained"
                 color="primary"
                 type="submit"
                  fullWidth>Submit</Button>
           </Grid>

           </Paper>
          
       </Grid>
        </>
    )
}
export default  CompanyLogin;