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
          <b>Biopesticides and physical methods</b> <br></br>
          Neem (Azadirachta indica)<br></br>
          Applications of neem powder effectively controlled weevils and
          nematodes in on-farm trials and in farmer's fields in Kenya.
          Application of 60 to 100 g of neem seed powder or neem cake at
          planting and then at 4 months intervals significantly diminished pest
          damage and increased yields. Application of over 100 g or neem oil was
          phytotoxic (harmful to plants) and uneconomical.
          <br></br>
          Neem applications were economical in fertile soils with moderate pest
          infestation. Neem applications to banana plants grown in poor soil and
          under very high pest attack were uneconomical. A combination of
          application of cow dung and neem treatments resulted in yield
          increases of 50 to 75% (Musabyimana, 1999). Dipping suckers in a 20%
          neem seed solution at planting protects the young suckers from weevil
          attack by reducing egg laying through its repellent effect on adult
          weevils. Egg hatching rates may also be lowered in neem-treated plants
          (Gold and Messiaen, 2000).
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
