import React from 'react'
import Layout from './../components/Layout/Layout';
import { Box, Typography } from '@mui/material';
import BG1 from '../images/others.jpg'
import '../styles/FeaturesStyles.css';

const Features = () => {
  return (
    <Layout>
      <div className="features" style={{ backgroundImage: `url( ${BG1} )` }}>
        <div className="headerContainer">
          <Box
            sx={{
              my: 10,
              textAlign: "center",
              p: 2,
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
              <h1>FEATURES OF GOLDENAID</h1>
            </Typography>
            <h2>Here are some incredible features of this AGI Agent:-</h2>
            <h2>
              <b>1. Natural Language Understanding (NLU):</b> Enables GoldenAid
              understand natural language queries, allowing first responders to
              ask questions in a conversational manner. This feature involves
              intent recognition, context awareness, and the ability to manage
              multi-turn dialogues.
            </h2>
            <h2>
              <b>2. Efficient Information Retrieval from PDFs:</b> The chatbot
              must quickly extract and retrieve relevant information from PDF
              documents, including text, tables, and images. This feature
              involves parsing PDFs, indexing data for fast access, and
              providing accurate results based on user queries.
            </h2>
            <h2>
              <b>3. Secure Access and Data Protection:</b> Ensuring that GoldenAid provides secure access
              to authorized users only. This includes user authentication (e.g.,
              multi-factor authentication), encrypted data transmission, and
              strict access control.
            </h2>
            <h2>
              <b>4. Medical Assistance:</b> GOLDENAID will have a medical
              knowledge base to provide basic triage assistance, first aid
              instructions, and information on nearby medical facilities.
            </h2>
          </Box>
        </div>
      </div>
    </Layout>
  );
};

export default Features; 
