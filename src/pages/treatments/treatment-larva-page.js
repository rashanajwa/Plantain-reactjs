import * as React from "react";
import "../../App.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CNNConceptPage from "../cnn-concept-page";

function TreatmentLarvaPage() {
  return (
    <React.Fragment>
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 12, pb: 6 }}
      >
        <div className="page-main-title">
          <h1> Treatment: Larva</h1>
        </div>
        <Typography
          color="text.secondary"
          component="p"
          align="left"
          margin={1}
          >
          <b>Control: </b> <br></br>
          In case of severe infection the affected plants should be uprooted and burnt. Celphos (3 tablets/plant) is recommended for control of egg, larva, pupa and adult population of the insect, application of. After placing the tablet inside the pseudostem, the slit should be plastered with mud.

          Clean cultivation is an important measure for its control. Application of Carbofuran (3 g of granules/stool) is very effective to control the pest. Alternately, application of Endosulphan (0.04%) or Carbaryl WP (0.1%) also controls the pest population. 
          
        </Typography>
        

        <Typography
          color="text.secondary"
          component="p"
          align="left"
          margin={1}
          >
          Cut the banana plant after harvest at the ground level and treat it with carbaryl (1g/liter) or chlorpyriphos (2.5 ml/lit) at the cut surface.

        </Typography>
        <Typography
          color="text.secondary"
          component="p"
          align="left"
          margin={1}
          >
          Application of Furadan 3G @ 20 gms or Phorate 10G @ 12 gms or Neem cake @ 1/2 Kg. per pit at planting.
        </Typography>
        <Typography
          color="text.secondary"
          component="p"
          align="left"
          margin={1}
          >
          Before planting, the suckers should be dipped in 0.1 per cent quinalphos emulsion.


        </Typography>
        <Typography
          color="text.secondary"
          component="p"
          align="left"
          margin={1}
          >
          Dip the suckers in Monocrotophos solution (14 ml in 1 lit water) for about 20 minutes to kill the eggs and grubs of the corm weevil .
        </Typography>
        <Typography
          color="text.secondary"
          component="p"
          align="left"
          margin={1}
          >
          Remove the pseudostem after harvest and treat it with Carboryl (1g/lit) or Chlorpyriphos (2.5ml/lit).
        </Typography>
        <Typography
          color="text.secondary"
          component="p"
          align="left"
          margin={1}
          >
          Fumigation of banana plants using Celphos (aluminium phosphide tablets), especially during the vegetative phase is phytotoxic and should be discouraged.


        </Typography>


      </Container>
    </React.Fragment>
  );
}

export default TreatmentLarvaPage;
