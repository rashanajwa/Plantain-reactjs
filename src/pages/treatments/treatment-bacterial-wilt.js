import * as React from "react";
import "../../App.css";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";


function TreatmentBacterialWiltPage() {
  return (
    <React.Fragment>
       <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 12, pb: 6 }}
      >
        <div className="page-main-title">
          <h1> Treatment: Bacterial Wilt</h1>
        </div>
        <Typography
          color="text.secondary"
          component="p"
          align="left"
          margin={1}
        >
         The recommended practices to control Xanthomonas wilt include consistent removal of infected mats, burying or burning infected residues, sterilization of farm tools, and timely removal of the male buds 
        </Typography>
        
      </Container>
    </React.Fragment>
  );
}

export default TreatmentBacterialWiltPage;
