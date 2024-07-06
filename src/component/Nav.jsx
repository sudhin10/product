import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <Box id="abc" sx={{ flexGrow: 1 }}>
    <AppBar style={{backgroundColor:'black'}} position="static">
      <Toolbar>
      <Typography
         variant="h6" component="div" sx={{ flexGrow: 1 }}>
         Products
        </Typography>
       
      <Link to={'/'}>
        <Button style={{color:'yellow'}}>Home</Button>
        </Link> 
        <Link to={'/add'} >
        <Button style={{color:'yellow'}}>Add Products</Button></Link>
        
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Nav