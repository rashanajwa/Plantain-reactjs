import * as React from "react";
import "../../App.css";
//import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
//import CNNConceptPage from "../cnn-concept-page";

function TreatmentEarwigsPage() {
  return (
    <React.Fragment>
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 4, pb: 6 }}
      >
        <div className="page-main-title">
          <h1> Treatment: Earwigs</h1>
        </div>
        <Typography
          color="text.secondary"
          component="p"
          align="left"
          margin={1}
        >
          <b>Rubbing alcohol and water:  </b> 
          Mix rubbing alcohol and water together to spray at earwigs onsite. This method can be used to kill earwigs immediately.
        </Typography>
        

        <Typography
          color="text.secondary"
          component="p"
          align="left"
          margin={1}
        >
          <b>Boric acid powder:  </b> 
          Found at most hardware stores, boric acid is a treatment you can apply to those out of reach areas to kill earwigs that crawl near it. Warning though, this treatment should be kept away from areas that pets or infants will be near, as it can be harmful.
          </Typography>

          <Typography
          color="text.secondary"
          component="p"
          align="left"
          margin={1}
        >
          <b>Light traps:  </b> 
          Earwigs are attracted to bright lights when they scurry around at night. Use the dish soap and water method above, this time filling a small bucket. Point a bright light at the bucket and leave out to attract and kill nearby earwigs.
          </Typography>

          <Typography
          color="text.secondary"
          component="p"
          align="left"
          margin={1}
        >
          <b>Earwig pesticide:  </b> 
          Purchase a pesticide to cover the areas where earwigs have been spotted. Various pesticides that will be effective against earwigs include sevin, malathion, pyrethrins, and diatomaceous earth. 
          </Typography>


      </Container>
    </React.Fragment>
  );
}

export default TreatmentEarwigsPage;
