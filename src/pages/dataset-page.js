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
          Some Of The Datasets
        </Typography>
        <Card sx={{}}>
          <CardMedia
            component="img"
            height="300"
            image="/imgs/earwig1.jpg"
            alt="green iguana"
          />
          <CardContent>Earwigs</CardContent>
          </Card>
          <Card sx={{}}>
          <CardMedia
            component="img"
            height="300"
            image="/imgs/weevils1.jpeg"
            alt="green iguana"
          />
          <CardContent>Weevils</CardContent>
          </Card>
          <Card sx={{}}>
          <CardMedia
            component="img"
            height="300"
            image="/imgs/larva1.jpg"
            alt="green iguana"
          />
          <CardContent>Larva</CardContent>
          </Card>
      </Container>
      
    </React.Fragment>
  );
}

export default DatasetPage;
