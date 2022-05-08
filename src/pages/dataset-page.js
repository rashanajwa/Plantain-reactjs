import * as React from "react";
import "../App.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CNNConceptPage from "./cnn-concept-page";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Grid } from "@mui/material";

function DatasetPage() {
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
          Dataset
        </Typography>
        <Typography
          component="div"
          variant="body1"
          align="center"
          color="text.primary"
          gutterBottom
        >
          AAAAAAAAAAABBBBBBBBBBBBBBBBCCCCCCCCCCCCCCCCCC
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={8}>
            f
          </Grid>
          <Grid item xs={4}>
          dd
          </Grid>
          <Grid item xs={4}>
          dd
          </Grid>
          <Grid item xs={8}>
           d
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default DatasetPage;
