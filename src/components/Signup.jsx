import { TextField, Typography ,Grid, Button,} from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

const Signup = () => {
    const [inputs,setinputs]=useState({});

    const inputHandler = (e)=>{

    setinputs({...inputs,[e.target.name]:e.target.value})
    console.log(inputs)
    }
    const SubmitHandler =()=>{
        console.log("btm click",inputs)

        axios.post("http://localhost:3008/api/post",inputs)
        .then((res)=>{
            console.log(res);
            alert(res.data.message);
        })
    }

  return (
    <div style={{margin:'8%'}}>
        <Typography variant='h4' style={{color:"purple"}}>
        Signup Form
        </Typography>
<br></br>

<Grid container spacing={2}>
    <Grid item xs={12} sm={6} md={6}>
        <TextField
        variant='outlined'
        label="Name"
        fullWidth
        name='Name'
        onChange={inputHandler}
    />
    </Grid>
  
 
    <Grid item xs={12} sm={6} md={6}>
        <TextField
        variant='outlined'
        label="Email"
        fullWidth
        name='Email'
        onChange={inputHandler}
    />
    </Grid>

    <Grid item xs={12} sm={12} md={12}>
        <TextField
        variant='outlined'
        label="Address"
        fullWidth
        multiline rows={5}
        
        name='Address'
        onChange={inputHandler}

    />
    </Grid>

    <Grid item xs={12} sm={6} md={6}>
        <TextField
        variant='outlined'
        label="Username"
        fullWidth
        name='Username'
        onChange={inputHandler}
    />
    </Grid>

    <Grid item xs={12} sm={6} md={6}>
        <TextField
        variant='outlined'
        label="Password"
        fullWidth
        name='Password'
        onChange={inputHandler}
    />
    </Grid>

    <Grid item xs={12} sm={12} md={12}>
        <Button
        variant='contained'
        color='secondary'onClick={SubmitHandler}>submit</Button>
    
    </Grid>

    <Grid item xs={12} sm={12} md={12}>
     <Link to={'/'}>Back to login</Link>
      
      </Grid>
 
        </Grid>
    </div>
  )
}

export default Signup
