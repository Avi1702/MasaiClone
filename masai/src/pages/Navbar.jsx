import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';

import Button from '@mui/material/Button';



const pages = ["COURSES","REFER & EARN","FEES & PAP","FREE RESOURCES","FOR CORPORATES"];


function Navbar() {
 
  return (
    <AppBar position="static" sx={{backgroundColor:"white",color:"black", boxShadow:"none"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          <img alt="Remy Sharp" src="https://www.masaischool.com/img/navbar/logo.svg" />
          </Typography>


          <Box sx={{ flexGrow: 1,width:"60%", display: { xs: 'none', md: 'flex',gap:"10px" },marginLeft:"8%" }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'black', display: 'block','&:hover': {
                    color: 'red',
                    opacity: [0.9, 0.8, 0.7],
                  },}}
              >
                {page}
              </Button>
            ))}
          </Box>

      <Box sx={{width:"25%",display: { xs: 'none', md: 'flex',gap:"20px" },borderColor:"red",marginRight:"3%"}}>
        <Button variant="contained" sx={{width:"70%",display:"inline-block",color:"#6e71cc",backgroundColor:"rgb(66 153 225 / 5%)",boxShadow:"none",'&:hover': {
          backgroundColor: 'rgb(66 153 225 / 60%)',
          opacity: [0.9, 0.8, 0.7],
        },}}>FOR STUDENTS</Button>
        <Button variant="outlined" sx={{color:"#ed0331",borderColor:"#ed0331",'&:hover': {
          backgroundColor: 'pink',
          borderColor:"red",
          opacity: [0.9, 0.8, 0.7],
        },}}>LOGIN</Button>
      </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;