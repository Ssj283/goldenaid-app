import React, {useState} from 'react'
import { AppBar, Box, Divider, Drawer, Icon, IconButton, Toolbar, Typography } from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import '../../styles/HeaderStyles.css';
const Header = () => {
    const [ mobileOpen, setMobileOpen ] = useState(false)
    //Handle menu click
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }
    //menu drawer
    const drawer = (
        <Box onClick={ handleDrawerToggle } sx={ {textAlign: 'center' }}>
             <Typography 
            color={'goldenrod'} 
            variant='h6' 
            component='div' 
            sx={{ flexGrow: 1, my:2 }}>
                <LocalHospitalIcon/>
                GOLDENAID
                </Typography>
                <Divider/>
                    <ul className='mobile-navigation'>
                        <li>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link to={'/about'}>About</Link>
                        </li>
                        <li>
                            <Link to={'/features'}>Features</Link>
                        </li>
                        <li>
                            <Link to={'/benefits'}>Benefits</Link>
                        </li>
                        <li>
                            <Link to={'/faqs'}>FAQs</Link>
                        </li>
                        <li>
                            <Link to={'/working'}>Working</Link>
                        </li>
                    </ul>
        </Box>
                
    );
  return (
    <>
    <Box>
        <AppBar component={'nav'} sx={{ bgcolor: "black"}}>
            <Toolbar>
                <IconButton   
                color='inherit' 
                aria-label='open drawer' 
                edge='start' 
                sx={{
                mr:2, 
                display: {sm: 'none'},  
                }}
                onClick= {handleDrawerToggle}
                >
                    <MenuIcon/>

                </IconButton>
            <Typography 
            color={'goldenrod'} 
            variant='h6' 
            component='div' 
            sx={{ flexGrow:1 }}>
                <LocalHospitalIcon/>
                GOLDENAID
                </Typography>
                <Box sx={ {display: {xs: 'none', sm: 'block'} } }>
                    <ul className='navigation-menu'>
                        <li>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link to={'/about'}>About</Link>
                        </li>
                        <li>
                            <Link to={'/features'}>Features</Link>
                        </li>
                        <li>
                            <Link to={'/benefits'}>Benefits</Link>
                        </li>
                        <li>
                            <Link to={'/faqs'}>FAQs</Link>
                        </li>
                        <li>
                            <Link to={'/working'}>Working</Link>
                        </li>
                    </ul>

                </Box>
            </Toolbar>
            
        </AppBar>
        <Box component='nav'>
            <Drawer variant='temporary' 
            open= {mobileOpen} 
            onClose={handleDrawerToggle}
            sx={ {display:{xs: 'block', sm:'none'},
            '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: '240px',
            },
         }}
            >

                {drawer}
            </Drawer>

        </Box>
        <Box>
        
        <Toolbar />
        </Box>
        
    </Box>

    </>
  );
};

export default Header;