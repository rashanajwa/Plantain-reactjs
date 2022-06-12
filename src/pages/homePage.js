import * as React from "react";
import "../App.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { Grid } from "@material-ui/core";

function HomePage() {
  const onClickLink = (path) => {
    window.location.href = path;
  };

  return (
    <React.Fragment>
      <Container
        disableGutters
        maxWidth="false"
        component="main"
        sx={{ pt: 0.5, pb: 1 }}
      >
        <div class="divimg">
          <img
            src="imgs\Digital-Green_Bihar_13.jpg"
            height="auto"
            width="100%"
            className="home-banner-image"
            alt="green pic"
          ></img>
          <div class="centered">
            <p>
              Agriculture is the most healthful, most useful and most noble
              employment of man.
            </p>
          </div>
          {/* <img src="imgs\Digital-Green_Bihar_13.jpg" height="50" width="aut"></img> */}
        </div>

        <div class="divbox">
          <Typography
            component="h1"
            variant="h2"
            align="left"
            color="text.primary"
            gutterBottom
          ></Typography>
        </div>
        <br></br>
        <div class="divline">
          <Typography color="text.secondary" component="p">
            The main objective of this application is to develop an application
            to help small-scale farmers detect diseases and pests on plantain
            trees. Pests, stems, and leaf diseases that are highly prevalent on
            plantains are predicted accurately by us. We provide the proper
            treatment, including pesticides, fungicides, etc., by which we could
            collectively create a lot of healthy plantain fields in our country.
          </Typography>{" "}
        </div>
      </Container>
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 0.5, pb: 5 }}
      >
        <div>
          <Typography
            component="h2"
            variant="h6"
            align="center"
            color="text.secondary"
            gutterBottom
            class="divbox"
            sx={{ pt: 4, pb: 2 }}
          >
            All You Have To Do Is...
          </Typography>
        </div>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} columns={16}>
            <Grid item xs={4}>
              <Card sx={{}}>
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    onClick={() => onClickLink("/detect/leaf")}
                    className="home-nav-btn"
                  >
                    Detect Leaf Disease
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{}}>
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    onClick={() => onClickLink("/detect/stem")}
                    className="home-nav-btn"
                  >
                    Detect Stem Disease
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{}}>
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    onClick={() => onClickLink("/detect/insect")}
                    className="home-nav-btn"
                  >
                    Detect Insect Disease
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default HomePage;
