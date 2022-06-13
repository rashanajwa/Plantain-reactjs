import * as React from "react";
import "../../App.css";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function TreatmentCordanaPage() {
  return (
    <React.Fragment>
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 12, pb: 6 }}
      >
        <div className="page-main-title">
          <h1> Treatment: Cordana</h1>
        </div>
        <Typography
          color="text.secondary"
          component="p"
          align="left"
          margin={1}
        >
          <ul>
            <li>
              • Use field tolerant cultivars such as Seeni (Embul and Kolikuttu
              are susceptible so do not use these)
            </li>
            <li>• Use proper spacing in order to avoid mutual shading and contact of
            leaves (8x8 to 12x12 ft2) </li><li>• Make sure that new plantations are an
            appropriate distance from existing disease affected plantations</li><li> •
            Avoid sprinkler irrigation to minimize the relative humidity of the
            microenvironment. Drip irrigation is preferred. </li><li>• Balanced
            fertilization (avoid excess N fertilizer) </li><li>• Avoid high density
            planting methods for highly susceptible cultivars and high risk
            areas such as some areas of Down South in Dry Zone. </li><li>• Remove
            infected leaves and burn them </li><li>• Practice field sanitation by
            removing old dried hanging leaves</li><li> • If the fourth leaf from the
            bottom is infected, chemical control measures should be applied.
            Alternate sprays of a contact fungicide, e.g. chlorothalonil 500g/l
            SC (30ml/ 10l) or mancozeb 75% WG (20g/ 10l) and a systemic
            fungicide, e.g. Tebuconazole 250g/l EW (3.5 ml/10l) or Propiconazole
            250g/l EC (3.5 ml/ 10l). Make sure the spray reaches the top of the
            leaves</li>
          </ul>
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default TreatmentCordanaPage;
