import React from 'react';
import {Container,Grid,Paper,Typography,Box} from '@mui/material';
import JobData from './DataCompany';
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
                       User ID: {job.userId}
                    </Typography>
                </Box>
                <Box>
                    <Typography>
                       User Name: {job.name}
                    </Typography>
                </Box>
                <Box>
                    <Typography>
                       JOB Profile: {job.jobProfile}
                    </Typography>
                </Box>
                <Box>
                    <Typography>
                    Salary: {job.expectedSalary} 
                    </Typography>
                </Box>
                <Box>
                    <Typography>
                    Mobile No: {job.mobile}
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



function CompanyHomePage() {
    const navigate = useNavigate();
  return (
    <>
    <Container maxWidth='lg'>
        <h1 style={{
            cursor:'pointer', backgroundColor:'blueviolet',display:'inline-flex',padding:'10px'

        }}
         onClick={()=>{navigate('/')}} >Homepage</h1>
        <h1>Applied Jobs:</h1>
        <JobCard/>
        </Container>
    
    </>
  )
}

export default CompanyHomePage;