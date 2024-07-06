import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './View.css'
import { red } from '@mui/material/colors';
import axios from 'axios';

const View = () => {
    const[rows,setRows]=useState([])
    useEffect(()=>{
      axios.get(' https://fakestoreapi.com/products').then((res)=>{
        //console.log(res.data.users)//
        setRows(res.data)

      })
      
    },[])
    
  return (
    <div   class="cards">
    {rows.map((row)=>(
    <Card sx={{ maxWidth: 345 }} style={{marginTop:'50px',backgroundColor:'grey', borderRadius:'50px',border:'solid 5px black'}}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: red[500] }} aria-label="products">
          P
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          
        </IconButton>
      }
      subheader= {row.id}
      title= {row.title}
      
    />
    
    <CardContent>
      <Typography variant="body2" color="text.secondary">
      {row.description}
      </Typography>
    </CardContent>
    <CardMedia
      component="img"
      height="194"
      image={row.image}
      alt="product"
    />
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        
      </IconButton>
      <IconButton aria-label="share">
        
      </IconButton>
      </CardActions></Card>))}
      
      
  </div>
  
    
  
  )
  
}


export default View