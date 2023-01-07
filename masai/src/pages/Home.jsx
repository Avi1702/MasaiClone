import React from 'react'
import Box from '@mui/material/Box';
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "../styles/Home.css"
import section6 from "../images/section6.jpg"
import section7 from "../images/section7.jpg"
import bottomleft from "../images/bottomleft2.jpg"


export const Home = () => {
  return (
    <div >
        {/* Section 1 */}
      <Box
      sx={{
        width:"43%",
        margin:"auto",
        marginTop:"150px"
      }}
    >
       <h1 style={{fontSize:"43px",fontWeight:"800"}}>Driven by Outcomes, Fuelled by Ambitions.</h1> 
       <p  style={{fontSize:"25px",marginTop:"5%"}}>Launch your dream career<h3 style={{marginTop:"0"}}>at 0 upfront fee.</h3></p>
    
       <img src="https://www.masaischool.com/img/homepage/scribble.png" alt="scrubling" style={{position:"absolute",margin:"-1.5%",left:"42%"}}></img><br/>
       <Button sx={{backgroundColor:"red",'&:hover':{backgroundColor:"#DB4747"},marginTop:"5%"}} variant="contained">APPLY NOW FOR FREE</Button>
        </Box>

        {/* Section 2 */}

      <div id="img_div">
        
      </div>

       {/* Section 3 */}

       <div id="section3" >
        <h2 style={{color:"#544d4f"}}>Skilling talent that delivers.</h2>
        <h1>Meet Our 2000+ Hiring Partners</h1>
       </div>

       {/* Section 4 */}
       <div id="section4" >
       </div>

       {/* Section 5 */}
       <div id="section5">

       </div>

       {/* Section 6 */}
       <div id="section6">
        <div className="left">
           <div className="top_left">
            <h2>sunshine6000+ Students Currently <br/>Enrolled<br/> 94% Placement Rate*</h2>
          <img src="https://www.masaischool.com/img/homepage/scribble.png" alt="scrubling" style={{position:"absolute",marginTop:"64px",left:"10%"}}></img><br/>
           
            <h5>*for students who have graduated from Masai School and are Masai accredited</h5>
           </div>

           <div className="bottom_left">
            <img src={bottomleft}></img>
        </div>
       </div>
        
     

        <div className="right">
            <img src="https://www.masaischool.com/img/homepage/media.png"></img>
            <h2>Masai In The News</h2>
            <Button variant="outlined" sx={{color:"white",borderColor:"white",width:"30%",marginTop:"-20%",marginLeft:"38%"}} >Know More</Button>
        </div>


</div>

{/* section7 */}

<div id="section7">
    <img src={section7}></img>
</div>
       

    </div>
  )
}
