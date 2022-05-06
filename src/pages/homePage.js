import * as React from "react";
import "../App.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CNNConceptPage from "./cnn-concept-page";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import HomePageCard from "../components/home-page-card";
import { Grid } from "@material-ui/core";

function HomePage() {
  return (
    <React.Fragment>
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Plantain Doctor
        </Typography>
        <p>
          <br></br>
        </p>
        <Typography color="text.secondary" component="p">
          We help you to detect various insects and diseases that affects
          plantain trees. we assure you to provide sufficient cure treatments
          for the infected plant.
        </Typography>
      </Container>
      <Container disableGutters maxWidth="sm" component="main">
        <Typography
          component="h2"
          variant="h6"
          align="center"
          color="text.secondary"
          gutterBottom
          sx={{ pt: 5, pb: 5 }}
        >
          All You Have To Do Is...
        </Typography>
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
