import { Box, TextField } from '@mui/material'
import React from 'react'
import './View.css'

const Add = () => {
  return (
    <Box class="abc" 
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
      <div>
        <TextField style={{marginTop:'50px',backgroundColor:'aqua', borderRadius:'10px',border:'solid 3px black'}}
          label=" Product Name"
          id="filled-size-small"
          defaultValue=""
          variant="filled"
          size="medium"
        />
       
      </div>
      <div>
        <TextField style={{marginTop:'50px',backgroundColor:'aqua', borderRadius:'10px',border:'solid 3px black'}}
          label=" Description"
          id="filled-size-small"
          
          variant="filled"
          size="medium"
        
        />
        <div>
        <TextField style={{marginTop:'50px',backgroundColor:'aqua', borderRadius:'10px',border:'solid 3px black'}}
          label="Price"
          id="filled-size-small"
          
          variant="filled"
          size="medium"
       
        />
      </div><div> 
        <TextField style={{marginTop:'50px',backgroundColor:'aqua', borderRadius:'10px',border:'solid 3px black',marginBottom:'50px'}}
          label="Category"
          id="filled-size-small"
         
          variant="filled"
          size="medium"
        
        />
      </div>
      </div>
    </Box>
    
  )
}

export default Add