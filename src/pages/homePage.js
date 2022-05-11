import * as React from "react";
import "../App.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CNNConceptPage from "./cnn-concept-page";
import HomePageCard from "../components/home-page-card";

import { Grid } from "@material-ui/core";



function HomePage() {
  return (
    <React.Fragment>
          
      <Container
        disableGutters
        maxWidth="false"
        component="main"
        sx={{ pt: 0.5, pb: 1 }}
      >
        <div class="divimg">
          <img src="imgs\frnt.png" height="180" width="1000"></img>
          </div>

        <div class="divbox">
        <Typography
          component="h1"
          variant="h2"
          align="left"
          color="text.primary"
          gutterBottom
        >
         
        </Typography></div>
        <br></br>
        <div class = "divline"><marquee>
        <Typography color="text.secondary" component="p">
          We help you to detect various insects and diseases that affects
          plantain trees. we assure you to provide sufficient cure treatments
          for the infected plant.
        </Typography> </marquee></div>
      </Container>
      <Container disableGutters maxWidth="sm" component="main">
      <div class="divbox">
        <Typography
          component="h2"
          variant="h6"
          align="center"
          color="text.secondary"
          gutterBottom
          sx={{ pt: 4, pb: 2 }}
        >
          All You Have To Do Is...
        </Typography></div>
        
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1}>
            <Grid item xs={4} md={4}>
           <HomePageCard text={"Navigate to Detect"} />
            </Grid>
            <Grid item xs={4} md={4}>
              <HomePageCard text={"Select a part of the Plant"} />
            </Grid>
            <Grid item xs={4} md={4}>
              <HomePageCard text={"Drag and drop your Image"} />
            </Grid>
          </Grid>
        </Box>
        
      </Container>
      
    </React.Fragment>
  );
}

export default HomePage;
