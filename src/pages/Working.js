import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";
import BG1 from "../images/others.jpg";
import "../styles/WorkingStyles.css";

const Working = () => {
  return (
    <Layout>
      <div className="working" style={{ backgroundImage: `url( ${BG1} )` }}>
        <div className="headerContainer">
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
              <h1>THE WORKING OF GOLDENAID</h1>
              <h2>
                <b>
                  First, the user will ask a question to GOLDENAID, the
                  question will be sent through the front - end website which
                  will be connected to the Python script in which the
                  application which has all the logic of the program which is
                  also connected to FLASK. Now, the question will be sent
                  through FLASK and it is set first for Question Embedding,
                  which we will be using for Vector Matching. Vector Matching
                  helps in understanding which answer will be the best for the
                  question asked by the user.
                  <br></br>
                  Next the semantic search using ChromaDB comes into play where
                  each of the vectors of the question will be matched with each
                  of the vectors of the answers available in the vector
                  database. Once the matching is done, the user will get the
                  ranked result with approximately 97% for their question which
                  is then sent back to FLASK, then the Front - End and finally
                  back to the user.
                  <br></br>
                  Now for our Database, we will take a pdf which will act as a
                  Custom Knowledge Base that will help in fine tuning the LLM
                  Model which will help in getting answers regarding our
                  specific topic which is Emergency Service Aid. The data inside
                  the pdfs are split into chunks of data done within Python.
                  After this, we will use OpenAI to embed the chunks of data.The
                  chunks of data or text are again embedded into vector format
                  for easier Vector Matching process and the embeddings are then
                  stored in the ChromaDB which is the main database for the
                  questions asked by the user.
                </b>
              </h2>
            </Typography>
          </Box>
        </div>
      </div>
    </Layout>
  );
};

export default Working;
