import "../App.css";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

function FooterComponent() {
  return (
    <Container
      maxWidth="md"
      component="footer"
      sx={{
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        mt: 8,
        py: [3, 6],
      }}
    >
      <Grid container spacing={4} justifyContent="space-evenly"></Grid>
    </Container>
  );
}

export default FooterComponent;
