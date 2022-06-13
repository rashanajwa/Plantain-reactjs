import * as React from "react";
import "../../App.css";
//import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";


function TreatmentPestalotiopsisPage() {
  return (
    <React.Fragment>
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 12, pb: 6 }}
      >
        <div className="page-main-title">
          <h1> Treatment: Pestalotiopsis</h1>
        </div>

        <Typography
          color="text.secondary"
          component="p"
          align="left"
          margin={1}
        >
          
Management is to prune out killed foliage and if necessary the twigs as soon as possible in the spring. Reduce winter injury by minimizing dehydration. Do not allow snow to accumulate or remain up and around the base of the plant for any length of time - especially during melting. Avoid over crowding the plants to allow sufficient sunlight and air circulation.

        </Typography>
        <p>
          <br></br>
          <br></br>
        </p>
      </Container>
    </React.Fragment>
  );
}

export default TreatmentPestalotiopsisPage;
