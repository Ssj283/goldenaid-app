import React from 'react'
import Layout from './../components/Layout/Layout';
import { Box, Typography } from '@mui/material';
import BG1 from '../images/others.jpg'
import '../styles/FAQsStyles.css'

const FAQs = () => {
  return (
    <Layout>
      <div className="faqs" style={{ backgroundImage: `url( ${BG1} )` }}>
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
              <h1>FREQUENTLY ASKED QUESTIONS</h1>
            </Typography>
            <h2>
              <b>1. What is the main purpose of GoldenAid?</b>
              <br></br>
              <b>Ans.</b> The primary purpose of GoldenAid is to provide first
              responders with quick and easy access to critical information
              contained in PDF documents. By using a conversational interface,
              first responders can retrieve important details and instructions
              during emergencies without having to manually search through
              documents.
            </h2>

            <h2>
              <b>2.How does GoldenAid handle ambiguous or complex queries?</b>
              <br></br>
              <b>Ans.</b> The chatbot uses advanced Natural Language Processing
              (NLP) techniques to understand user queries and handle ambiguity.
              It can ask follow-up questions to clarify user intent or offer
              suggestions if it cannot determine the precise information needed.
            </h2>

            <h2>
              <b>
                3. What happens if the GoldenAid cannot find the requested
                information?
              </b>
              <br></br>
              <b>Ans.</b> If the chatbot cannot retrieve the requested
              information from its knowledge base, it should provide users with
              helpful guidance on alternative actions or direct them to other
              resources.
            </h2>

            <h2>
              <b>
                4. How does the chatbot ensure it meets the needs of first
                responders?
              </b>
              <br></br>
              <b>Ans.</b> GoldenAid is developed using a User-Centered Design
              (UCD) methodology, which involves first responders throughout the
              design and development process. This approach includes user
              research, iterative feedback, usability testing, and continuous
              improvement to ensure the chatbot aligns with the needs and
              workflows of first responders in real-world scenarios.
            </h2>
          </Box>
        </div>
      </div>
    </Layout>
  );
};

export default FAQs;