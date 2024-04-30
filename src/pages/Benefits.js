import React from 'react'
import Layout from './../components/Layout/Layout'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import  { BenefitsList } from '../data/Data'
import BG1 from '../images/others.jpg'
import '../styles/BenefitsStyles.css'

const Benefits = () => {
  return (
    <Layout>
       <div className='benefits' style={ { backgroundImage: `url( ${BG1} )` }} >
       <div className='headerContainer' >
       <Box sx={ {display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {
          BenefitsList.map(benefits => (
            <Card sx={ {maxWidth: '390px', display: 'flex', m: 2} }>
              <CardActionArea>
                <CardMedia sx={{minHeight: '400px'}} component={'img'} src={benefits.image} alt={benefits.name} />
                <CardContent>
                  <Typography variant='h5' gutterBottom component={'div'}>
                    {benefits.name}
                  </Typography>
                  <Typography variant='body2'>
                    {benefits.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ) 
            
            )
        }


        
       </Box>
       </div>
       </div>
    </Layout>
  );
};

export default Benefits;