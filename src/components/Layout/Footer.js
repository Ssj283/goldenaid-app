import React from 'react'
import Layout from './Layout'
import { Box, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <>
    <Box 
    sx={ {textAlign: 'center', 
    bgcolor:'#1A1A19', 
    color:'white', 
    p: 3 }}
    >
        <Box sx={ {my: 3, '& svg': {
            fontSize: '60px',
            cursor:'pointer',
            mr: 2,
        },
        "& svg:hover":{
            color:'goldenrod',
            transform:'translateX(5px)',
            transition:'all 400ms',
        },
         }}
         >
            {/* Icons */}
            <GitHubIcon/>

        </Box>
        <Typography 
        variant= 'h5' sx={ {
            '@media (max-width:600px)':{
            fontSize:'1rem',
        } }}>
            All Rights Reserved &copy; GOLDENAID AGI</Typography>
    </Box>
       
    </>
  );
};

export default Footer;