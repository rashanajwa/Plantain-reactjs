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
          A data set (or dataset) is a collection of data. In the case of
          tabular data, a data set corresponds to one or more database tables,
          where every column of a table represents a particular variable, and
          each row corresponds to a given record of the data set in question.
        </Typography>
        {/* INSECT START */}
        <Card sx={{ backgroundColor: "#c9f583" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Insects
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Card sx={{}}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/imgs/earwig1.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      weevils
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Weevils, also referred to as nunus, are beetles belonging
                      to the superfamily Curculionoidea, known for their
                      elongated snouts.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{}} color="primary">
                  <CardMedia
                    component="img"
                    height="140"
                    image="/imgs/earwig1.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      weevils
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Weevils, also referred to as nunus, are beetles belonging
                      to the superfamily Curculionoidea, known for their
                      elongated snouts.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{}}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/imgs/earwig1.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      weevils
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Weevils, also referred to as nunus, are beetles belonging
                      to the superfamily Curculionoidea, known for their
                      elongated snouts.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        {/* INSECT END */}
      </Container>
    </React.Fragment>
  );
}

export default DatasetPage;
