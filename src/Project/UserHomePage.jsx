import React from 'react';
import JobData from './JobData';
import {Box,Typography,Paper, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const JobCard=()=>{

    return(<>
    
    
    {
        JobData.map((job)=>{
            return (
                <>

<Paper elevation={3} >
                <Box sx={{
                    marginTop:'30px',
                    padding:"30px"
                }} >

                <Box>
                    <Typography>
                       JOB ID: {job.id}
                    </Typography>
                </Box>
                <Box>
                    <Typography>
                       Company Name: {job.companyName}
                    </Typography>
                </Box>
                <Box>
                    <Typography>
                       JOB Profile: {job.jobProfile}
                    </Typography>
                </Box>
                <Box>
                    <Typography>
                    Salary: {job.salary} 
                    </Typography>
                </Box>
                <Box>
                    <Typography>
                    Applied Status: {job.status}
                    </Typography>
                </Box>


                </Box>
                </Paper>
                </>
            ) 
        })
    }
    </>)
}


const UserHomePage=()=>{
    const navigate=useNavigate();
    

    return(

        <>
        <Container maxWidth='lg'>
        <h1
        style={{
            cursor:'pointer', backgroundColor:'blueviolet',display:'inline-flex',padding:'10px'

        }}
        onClick={()=>{navigate('/')}} >Homepage</h1>
        <h1>Applied Jobs:</h1>
        <JobCard/>
        </Container>
        </>
    )
}
export  default UserHomePage;
