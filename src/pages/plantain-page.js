import * as React from "react";
import "../App.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CNNConceptPage from "./cnn-concept-page";

function PlantainPage() {
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
          Pricing
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          component="p"
        >
          Quickly build an effective pricing table for your potential customers
          with this layout. It&apos;s built with default MUI components with
          little customization.
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default PlantainPage;
