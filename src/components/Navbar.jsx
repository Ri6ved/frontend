
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Navbar = () => {
  return (
    <div>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BLOG APP
          </Typography>
          <Button>
            <Link to={'/add'}
            style={{color:'white',textDecoration:'none'}}>
                Add
                </Link>
          </Button>
          <Button>
            <Link to={'/view'}
            style={{color:'white',textDecoration:'none'}}>
                View
                </Link>
          </Button>
          <Button>
            <Link to={'/mypro'}
            style={{color:'white',textDecoration:'none'}}>
                My Profile
                </Link>
          </Button>
          <Button>
            <Link to={'/'}
            style={{color:'white',textDecoration:'none'}}>
              Logout
                </Link>
          </Button>
          
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
