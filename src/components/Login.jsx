import { Button, TextField, Typography, colors,Grid } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const [inputs,setinputs]=useState({});
const navigate=useNavigate();
    const inputHandler = (e)=>{

    setinputs({...inputs,[e.target.name]:e.target.value})
    console.log(inputs)
    }
    const SubmitHandler =()=>{
        console.log("btn click",inputs)
        axios.post("http://localhost:3008/api/login",inputs)
        .then((res)=>{
          console.log(res)
          console.log(res.data.message)
          alert(res.data.message)
          if(res.data.message==="logged in Successfully"){
            const userId = res.data.person._id
            sessionStorage.setItem("id",userId)
            navigate('/view');
          }
        })
    }

  return (
    <div style={{margin:'12%'}}>
      <Typography variant='h3'style={{color:'purple'}}>
        Login Form
      </Typography>
      <br></br>
      <Grid container spacing={2}>
      <Grid item xs={12} sm={12}md={12}>
            <TextField
                variant='outlined'
                label='Username'
                name='Username'
                onChange={inputHandler}
            />
        </Grid>
        <Grid item xs={12} sm={12}md={12}>
            <TextField
                variant='outlined'
                label='Password'
                name='Password'
                onChange={inputHandler}
            />
        </Grid>
        <Grid item xs={12} sm={12}md={12}>
          <Button variant='contained' color='secondary'
                onClick={SubmitHandler}>
            LOGIN
          </Button>
        </Grid>
        <Grid item xs={12} sm={12}md={12}>
      <Link to={'/sign'}>New Users</Link>
        </Grid>
      </Grid>
    </div>
  )
}

export default Login
