import * as React from "react";
import "../../App.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CNNConceptPage from "../cnn-concept-page";

function TreatmentSigatokaPage() {
  return (
    <React.Fragment>
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 12, pb: 6 }}
      >
        <div className="page-main-title">
          <h1> Treatment: Sigatoka</h1>
        </div>
        <Typography
          color="text.secondary"
          component="p"
          align="left"
          margin={1}
        >
          <ul>
            <li>Planting should be taken up in well drained soils and
          maintain proper drainage thereafter</li>
            <li>Grow resistant varieties</li>
            <li>Planting at recommended spacing</li>
            <li>Remove suckers periodically to avoid
          overcrowding and maintain only one or two healthy suckers</li>
          <li>Periodically remove and burn affected leaves to avoid further
          spreading</li>
          <li> Provide adequate potassium fertilizers</li>
          <li>Keep the fields
          free from weeds The following fungicides spray will help in managing
          with Sigatoka disease of banana Chlorothalonil Propiconazole
          Thiophenate methyle Carbendazim Carbendazim + Mancozeb Mancozeb Copper
          hydroxide Copper Oxychloride </li>
          <li>Depending on the disease severity
          repeat the spray @ 15-20 days intervals with different fungicides
          having different chemical composition.</li>
          <li></li>
            </ul>
         
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default TreatmentSigatokaPage;
