import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Card, CardActions, CardContent, Grid, Typography } from '@mui/material'


const Myprofile = () => {
    //var[data,setData]=useState([{title:'My Profile'}])
    const [userId,setUserId]=useState(sessionStorage.getItem("id"))
    const [myData,setMyData]=useState([]);
    
    useEffect(()=>{
      console.log(userId)
        axios.get("http://localhost:3008/api/viewmypro/"+userId)
        .then((res)=>{
            console.log(res.data)
            setMyData(res.data)

        })
        .catch((err)=>{
            console.log(err)
        })
       
    },[])
  return (
    <div style={{margin:'10%'}}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={5}></Grid>
       
   {myData.map((val,i)=>{
return (

  <Grid item xs={12} sm={4} md={4} key={i}>

<Card sx={{ maxWidth: 250 }}>
     <CardContent>
     <Typography variant='h5' component="div" gutterBottom>
        Name:{val.Name}
      </Typography>
     <Typography x={{fontSize:20}}>
        Email:{val.Email}
      </Typography>
     <Typography sx={{mb:1.5}}color="text.secondary">
        Address:{val.Address}
      </Typography>
      <Typography variant="body2">
        Username:{val.Username}
      </Typography>
     </CardContent>
     <CardActions>
    
     </CardActions>
   </Card>
   </Grid>
 
)
   })}

    
      
</Grid>
    </div>
  )
}

export default Myprofile
