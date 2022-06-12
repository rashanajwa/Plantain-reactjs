import * as React from "react";
import "../App.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CNNConceptPage from "./cnn-concept-page";

function PlantainPage() {
  return (
    <React.Fragment>
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 12, pb: 6 }}
      >
        <Typography
          component="h3"
          variant="h3"
          align="center"
          color="text.primary"
          className="page-main-title"
          gutterBottom
        >
         Plantain Tree
        </Typography>
        <Typography
          color="text.secondary"
          component="p"
        >
         Plantain, Musa × paradisiaca (syn. Musa sapientum) is an herbaceous
          perennial belonging to the family Musaceae. Plantains are
          distinguished from bananas by their fruit which, although
          morphologically very similar to bananas, are actually longer, firmer
          and possess a higher starch content and thicker skin than their
          sweeter relative. Like banana, the plant is tall and tree-like with a
          sturdy pseudostem and large broad leaves arranged spirally at the top.
          The leaves are large blades with a pronounced central midrib and
          obvious veins. They can reach up to 2.7 m (8.9 ft) in length and up to
          0.6 m (2.0 ft) in width. Each pseudostem produces a group of flowers
          from which the fruits develop in an hanging cluster. In commercial
          plantations, the parent plant dies after harvest and is replaced with
          a daughter plant. However, a plantation can grow for 25 years or more
          if managed properly. The trees can reach heights between 2 and 9 m
          (6.6–29.5 ft). Plantains and the cultivated varieties are derived from
          ancestors which originated from the Malaysian peninsula, New Guinea
          and South-East Asia.
        </Typography>
        <p></p>
        <Typography
          component="h6"
          variant="h6"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Uses
        </Typography>
        <Typography
          color="text.secondary"
          component="p"
        >
         Plantains are eaten as a vegetable and are cooked prior to consumption. They are an important component of many dishes in Western Africa and Caribbean countries. In addition, the leaves of Musa species can be used as a source of fibre for thread, cloth string, thread or can be used as thatch and roofing. The plants are also grown as an effective source of shade for other crops.
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default PlantainPage;
