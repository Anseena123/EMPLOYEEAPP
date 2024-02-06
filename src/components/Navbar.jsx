import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
          ReactApp
        </Typography>
        <Button color="inherit"><Link style= {{textDecoration:"none", color: "white"}} to={'/EMPLOYEEAPP'}>Home</Link></Button>
        <Button color="inherit"><Link style= {{textDecoration:"none", color: "white"}} to={'/EMPLOYEEAPP/form'}>Form</Link></Button>
       
      </Toolbar>
    </AppBar>
  </Box>
  
  );
}

export default Navbar
