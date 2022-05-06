import * as React from "react";
import "../App.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CNNConceptPage from "./cnn-concept-page";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

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
        <p><br></br></p>
        <Typography color="text.secondary" component="p">
          We help you to detect various insects and diseases that affects plantain trees.
          we assure you to provide sufficient cure treatments for the infected plant.
        </Typography>
        <p><br></br><br></br></p>
        <Typography
          component="h2"
          variant="h6"
          align="center"
          color="text.secondary"
          gutterBottom
        >
          All You Have To Do Is...

        </Typography>
        <p><br></br></p>
        <ButtonGroup variant="contained" aria-label="outlined primary button group" >
      <Button>Navigate to Detect</Button>
      <Button>Select a part of the Plant</Button>
      <Button>Drag and drop your Image</Button>
    </ButtonGroup>
    <p><br></br><br></br></p>

      </Container>

      {/* CNN concept */}
      {/* <Box m={2} pt={5}>
        <Container maxWidth="md" component="main" id="cnn-concept-div">
          <CNNConceptPage />
        </Container>
      </Box> */}
      {/* CNN concept end */}
    </React.Fragment>
  );
}

export default HomePage;
