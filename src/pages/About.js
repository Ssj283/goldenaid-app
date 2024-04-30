import React from 'react'
import Layout from './../components/Layout/Layout'
import { Box, Typography } from '@mui/material';
import BG1 from '../images/others.jpg'
import '../styles/AboutStyles.css';


const About = () => {
  return (
    <Layout>
      <div className='about' style={ { backgroundImage: `url( ${BG1} )` }} >
      <div className='headerContainer' >
      <Box
        sx={{
          my: 10,
          textAlign: "center",
          p:2,
          "& h1=": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
            padding: 2,
          },
          "@media (max-width:600px)": {
            marginTop: 0,
            "& h1 ": "1rem",
          },
          "& h2": {
            textAlign: "justify",
          },
        }}
      >
        <Typography>
          <h1>GoldenAid At Your Service!</h1>
        </Typography>
        <h2>
          GOLDENAID is an upcoming AGI agent in the works which is specifically
          tailored for First Responders and Emergency Aid. It will enhance
          emergency response efficiency and effectiveness and provide real time
          and relevant information immediately to First Responders and emergency
          aid services and assist them in making decisions with utmost care. The
          Main Motivation for building this Application is to Spread Awareness
          about "GOLDEN HOUR"
        </h2>
        <br />

        <h2>
          GOLDEN HOUR is the period of time immediately after a traumatic
          injury during which there is the highest likelihood that prompt
          medical and surgical treatment will prevent death. It was First Coined
          by R Adams Cowley. The principle behind GOLDEN HOUR is that as some
          injuries can cause people to deteriorate extremely rapidly, the lag
          time between injury and treatment should ideally be kept to a bare
          minimum; this has come to be specified as no more than 60 minutes,
          after which the survival rate for people who have sustained trauma is
          alleged to fall off dramatically.
        </h2>
      </Box>
      </div>
      </div>

    </Layout>
  );
};

export default About;