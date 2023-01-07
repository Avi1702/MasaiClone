import React from 'react'
import Box from '@mui/material/Box';
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "../styles/Home.css"


export const Home = () => {
  return (
    <div >
        {/* Section 1 */}
      <Box
      sx={{
        width:"40%",
        margin:"auto"

      
      }}
    >
       <h1 style={{fontSize:"43px",fontWeight:"800"}}>Driven by Outcomes, Fuelled by Ambitions.</h1> 
       <p  style={{fontSize:"25px"}}>Launch your dream career<h3 style={{marginTop:"0px"}}>at 0 upfront fee.</h3></p>
    
       <img src="https://www.masaischool.com/img/homepage/scribble.png" alt="scrubling" style={{position:"absolute",margin:"-1.5%",left:"42%"}}></img><br/>
       <Button sx={{backgroundColor:"red",'&:hover':{backgroundColor:"#DB4747"},marginTop:"5%"}} variant="contained">APPLY NOW FOR FREE</Button>
        </Box>

        {/* Section 2 */}

      <div id="img_div">
        
      </div>

    </div>
  )
}
