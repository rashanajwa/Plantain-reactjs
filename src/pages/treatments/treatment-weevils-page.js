import * as React from "react";
import "../../App.css";
//import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
//import CNNConceptPage from "../cnn-concept-page";

function TreatmentWeevilsPage() {
  return (
    <React.Fragment>
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 12, pb: 6 }}
      >
        <div className="page-main-title">
          <h1> Treatment: Weevils</h1>
        </div>
        <Typography
          color="text.secondary"
          component="p"
          align="left"
          margin={1}
        >
          <b>Selecting vigorous healthy planting material : </b> <br></br>
          
          Examine planting material by taking one or two slices from it. If grubs, pupae or tunnels are present, the material should be destroyed.
          </Typography>
        <Typography
          color="text.secondary"
          component="p"
          align="left"
          margin={1}
        >
          <b>Paring (trimming): </b>
          If clean planting material is not available, the planting material should be pared (trimmed) to reduce the number of eggs and grubs. 
        </Typography>
        <Typography
          color="text.secondary"
          component="p"
          align="left"
          margin={1}
        >
          <b>Hot water treatment: </b>
          Recommendations suggest immersing clean trimmed suckers in a bath with hot water at 52 to 55degC for 15 to 27 minutes before planting. There have been reports of hot water treatment killing remaining eggs and a high percentage of grubs. 
          </Typography>

          <Typography
          color="text.secondary"
          component="p"
          align="left"
          margin={1}
        >
          <b>Sanitation: </b>
          Cut old stems after harvesting at ground level. Covering the cut rhizome with a layer of soil is said to prevent the weevil's entry and egg laying.
          
          Cut old stems as soon as the bunch is harvested and wind-damaged pseudostems (stumps) into small pieces and scatter them so that they quickly dry and thus do not attract the weevils.
          </Typography>
          <Typography
          color="text.secondary"
          component="p"
          align="left"
          margin={1}
        >
          <b>Neem (Azadirachta indica): </b>
          Applications of neem powder effectively controlled weevils and nematodes in on-farm trials and in farmer's fields in Kenya. Application of 60 to 100 g of neem seed powder or neem cake at planting and then at 4 months intervals significantly diminished pest damage and increased yields. Application of over 100 g or neem oil was phytotoxic (harmful to plants) and uneconomical. 
          </Typography>

          <Typography
          color="text.secondary"
          component="p"
          align="left"
          margin={1}
        >
          <b>Trapping: </b>
          Disc-on-stump traps and old pseudostems can be used for trapping weevils.
           Disc-on-stump traps consist of corm slices placed on top of harvested plants cut at the rhizome. 
           Old pseudostems can be cut into lengths of 20 to 60 cm and split each length, and placed on the ground near the corm bases with the cut surface downwards. 
           Adult weevils are attracted to the cut stems or corms for shelter, to feed and to lay eggs. When the eggs hatch the life cycle cannot continue as the cut pieces dry out and the grubs die from desiccation.
            The weevils can be collected by hand and destroyed. The efficiency of the traps depends on their numbers and frequency of trapping.
           Disk-on-stump traps collect 3 to 7 times as many weevils as pseudostem traps.
          </Typography> 

      </Container>
    </React.Fragment>
  );
}

export default TreatmentWeevilsPage;
