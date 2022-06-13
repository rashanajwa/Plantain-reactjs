import * as React from "react";
import "../App.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CNNConceptPage from "./cnn-concept-page";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { borderLeft } from "@mui/system";

function DatasetPage() {
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
          Dataset
        </Typography>
        <Typography color="text.secondary" component="p" sx={{ pb: 3 }}>
          Inorder to detect and treat different pests and insects , we have
          collected thousands of images under various category. A brief
          description of each class are given below:
        </Typography>

        {/* INSECT START */}
        <Card sx={{ backgroundColor: "#c9f583" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Plantain Pests
            </Typography>
            <Typography variant="body2" color="text.secondary">
              There are 3 classes of plantain pests collected and they are:
              Weevils, Larva, Earwigs
            </Typography>
          </CardContent>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Card sx={{}}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/imgs/weevils1.jpeg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Weevils
                    </Typography>
                    <Typography
                      variant="body2"
                      component="p"
                      color="text.secondary"
                      className="dataset-cat-card-paragraph-pests"
                    >
                      {` Cosmopolites sordidus, commonly known as the banana root
                      borer, banana borer, or banana weevil, is a species of
                      weevil in the family Curculionidae. It is a pest of banana
                      cultivation and has a cosmopolitan distribution, being
                      found in all parts of the world in which bananas are grown`}
                    </Typography>
                    <Button href="https://drive.google.com/drive/folders/13mBKNDVBsk3LultKkbmCprOKwpLdqEbw?usp=sharing" target="_blank" className="view-more-btn">
                      View more photos
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{}} color="primary">
                  <CardMedia
                    component="img"
                    height="140"
                    image="/imgs/larva1.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Larva
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="dataset-cat-card-paragraph-pests"
                    >
                      {` The black banana weevil (or the banana root borer)
                      Cosmopolites sordidus is one of the most serious insect
                      pests of bananas. This beetle has been transported
                      throughout the banana growing regions of the world. Corms
                      or rhizomes are used for propagation and eggs and larvae
                      are easily transported therein.`}
                    </Typography>{" "}
                    <Button href="https://drive.google.com/drive/folders/19YPuuIGGTMdYRXeaZsavkcjFMQq_MGCX?usp=sharing" target="_blank" className="view-more-btn">
                      View more photos
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{}}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/imgs/earwig1.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Earwigs
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="dataset-cat-card-paragraph-pests"
                    >
                      {`    Earwigs are mostly nocturnal and often hide in small,
                      moist crevices during the day, and are active at night,
                      feeding on a wide variety of insects and plants. Damage to
                      foliage, flowers, and various crops is commonly blamed on
                      earwigs, especially the common earwig Forficula
                      auricularia. `}
                    </Typography>{" "}
                    <Button href="https://drive.google.com/drive/folders/1bFHGMpja_RxmgMQW_OHQrLdIWX7KMMI5?usp=sharing" target="_blank" className="view-more-btn">
                      View more photos
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        {/* INSECT END */}

        {/* STEM START */}
        <Card sx={{ backgroundColor: "#c9f583" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Stem
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Stem is an essential part of the plantain trees. They are huge
              amount of diseases that effect the stems.Due to the inavailability
              of all diseases in a particular climate,we have collected two
              classes of stems, they are: Fusarium wilt and Healthy stems
            </Typography>
          </CardContent>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Card sx={{}}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/imgs/fusa1.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Fusarium wilt
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="dataset-cat-card-paragraph-stem"
                    >
                      {`Fusarium wilt of banana, popularly known as Panama
                      disease, is a lethal fungal disease caused by the
                      soil-borne fungus Fusarium oxysporum f. sp. cubense (Foc).
                      It is the first disease of bananas to have spread globally
                      in the first half of the 20th century `}
                    </Typography>{" "}
                    <Button href="https://drive.google.com/drive/folders/1nqf6FTfbM7Z9l5JTv61SKQVuAJ6DS4eU?usp=sharing"  target="_blank" className="view-more-btn">
                      View more photos
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{}} color="primary">
                  <CardMedia
                    component="img"
                    height="140"
                    image="/imgs/healthystem1.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Healthy stem
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="dataset-cat-card-paragraph-stem"
                    >
                      {` This is a class of healthy stem which is not yet effected
                      by any pests or diseases. It could be maintained properly
                      with proper precautions for the healthy well being of the
                      plantain trees. `}
                    </Typography>{" "}
                    <Button href="https://drive.google.com/drive/folders/19b7KJZ64FnndFxVHkeC2Qk9lCDCvPfD2?usp=sharing"  target="_blank" className="view-more-btn">
                      View more photos
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        {/* STEM END */}

        {/* Leaves START */}
        <Card sx={{ backgroundColor: "#c9f583" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Leaves
            </Typography>
            <Typography variant="body2" color="text.secondary">
              There are 6 classes of leaves diseases that we had considered in
              the project. They are:
            </Typography>
          </CardContent>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Card sx={{}}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/imgs/bactwilt1.png"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Bacterial Wilt
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="dataset-cat-card-paragraph"
                    >
                      {`  Xanthomonas wilt of banana - better known as BXW, and to a
                      lesser extent as BBW (for banana bacterial wilt) - is a
                      disease that causes a banana plant to rot from the inside
                      out. The disease is triggered by the bacteria Xanthomonas
                      vasicola pv. musacearum (Xvm), formerly known as
                      Xanthomonas campestris pv. musacearum. Once they are
                      inside the plant, these microscopic single-cell organisms
                      multiply and form the slime that is visible when an
                      infected plant is cut open. This bacterial ooze is the
                      means by which the disease is transmitted by insects and
                      cutting tools that have come in contact with it `}
                    </Typography>{" "}
                    <Button href="https://drive.google.com/drive/folders/19yVXKVxyLOdRdzdcUaKCF6Xr7fYfZ7__?usp=sharing"  target="_blank" className="view-more-btn">
                      View more photos
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{}}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/imgs/cordana1.jpeg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Cordana
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="dataset-cat-card-paragraph"
                    >
                      {`    Cordana leaf spot is a disease of banana that, even though
                      it is common worlwide, has generally little impact on
                      production. It is caused by two Neocordana fungi that are
                      often found as secondary invaders of leaf lesions caused
                      by other fungi. `}
                    </Typography>{" "}
                    <Button href="https://drive.google.com/drive/folders/1E4ANyHt59pyAPqJ26OqOnsafvNCfMNHR?usp=sharing"  target="_blank" className="view-more-btn">
                      View more photos
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{}} color="primary">
                  <CardMedia
                    component="img"
                    height="140"
                    image="/imgs/sigatoka1.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Sigatoka
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="dataset-cat-card-paragraph"
                    >
                      {` Black Sigatoka is also known as black leaf streak. The
                      pathogen Mycosphaerella fijiensis causes streaks that run
                      parallel to the leaves. It is an ascomycete fungus that
                      affects banana trees specifically in tropical climates;
                      including Asia, West Africa, China, and South America.[7]
                      Tropical weather is the preferred climate for banana
                      cultivation, but it is also the environment where the
                      pathogen thrives: hot and humid, with plenty of rainfall
                      to aid in dispersal. The optimal environment of the
                      pathogen is similar to that of the banana tree. The fungus
                      infects mature banana leaves and will continue to cause
                      infection without proper control `}
                    </Typography>{" "}
                    <Button href="https://drive.google.com/drive/folders/1gk3eTLpj1jmlbTjGloV1Bmp88DrlG6FJ?usp=sharing"  target="_blank" className="view-more-btn">
                      View more photos
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{}}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/imgs/pestalgo1.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      pestalotiopsis
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="dataset-cat-card-paragraph"
                    >
                      {`   Pestalotiopsis leprogena is a fungal plant pathogen
                      infecting bananas. `}
                    </Typography>{" "}
                    <Button href="https://drive.google.com/drive/folders/1fpfAYnFj16h24zVaXdjV_WAFWst0TmVY?usp=sharing"  target="_blank" className="view-more-btn">
                      View more photos
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{}}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/imgs/healthyleaf1.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Healthy
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="dataset-cat-card-paragraph"
                    >
                      {`Healthy leaves which includes banana leaves that are not
                      affected by any of the diseases. `}
                    </Typography>{" "}
                    <Button href="https://drive.google.com/drive/folders/1jvHe8Jl-go8CiJpg3P2Ds-xUJax5d8yg?usp=sharing"  target="_blank" className="view-more-btn">
                      View more photos
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        {/* Leaves END */}
      </Container>
    </React.Fragment>
  );
}

export default DatasetPage;
