import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";

export default function CNNConceptPage() {
  return (
    <Box m={2} pt={5}>
      <Container maxWidth="md" component="main" id="cnn-concept-div">
        <Card sx={{}}>
          <CardMedia
            component="img"
            height="300"
            image="/imgs/cnn-banner1.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Convolutional Neural Network (CNN)
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Deep learning has become an area of interest to the researchers in
              the past few years. Convolutional Neural Network (CNN) is a deep
              learning approach that is widely used for solving complex
              problems. It overcomes the limitations of traditional machine
              learning approaches. The motivation of this study is to provide
              the knowledge and understanding about various aspects of CNN. This
              study provides the conceptual understanding of CNN along with its
              three most common architectures, and learning algorithms. This
              study will help researchers to have a broad comprehension of CNN
              and motivate them to venture in this field. This study will be a
              resource and quick reference for those who are interested in this
              field.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Container>
    </Box>
  );
}
