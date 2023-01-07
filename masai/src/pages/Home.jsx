import React from 'react'
import Box from '@mui/material/Box';
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export const Home = () => {
  return (
    <div >
         <Box
      sx={{
        width:"40%",
        margin:"auto"

      
      }}
    >
       <h1 style={{fontSize:"43px",fontWeight:"800"}}>Driven by Outcomes, Fuelled by Ambitions.</h1> 
       <p  style={{fontSize:"25px"}}>Launch your dream career<h3 style={{marginTop:"0px"}}>at 0 upfront fee.</h3></p>
    
       <img src="https://www.masaischool.com/img/homepage/scribble.png" alt="scrubling" style={{position:"absolute",margin:"-3.5%",left:"45%"}}></img><br/>
       <Button sx={{backgroundColor:"red",'&:hover':{backgroundColor:"#DB4747"}}} variant="contained">APPLY NOW FOR FREE</Button>
        </Box>
    </div>
  )
}
