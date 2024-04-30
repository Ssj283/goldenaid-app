import React from 'react';
import Layout from './../components/Layout/Layout';
import { Link } from 'react-router-dom';
import Banner from '../images/goldenaid.jpg'
import '../styles/HomeStyles.css';

const Home = () => {
  return (
    <Layout>
        <div className='home' style= {{ backgroundImage: `url(${Banner} )` }} >
            <div className='headerContainer' >
                <h1>Health Care Artificial Conversation Entity</h1>
                <h3>First Aid on your FingerTips!</h3>
                <Link to='/goldenaid-website'>
                <button>
                    GO TO GOLDENAID
                </button>

                </Link>
                
            </div>
            </div>
       
        
    </Layout>
  );
};

export default Home;