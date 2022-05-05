import "../App.css";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Navbar() {
  const onCNNConceptClick = () => {
    document.getElementById("cnn-concept-div").scrollIntoView();
  };
  return (
    <AppBar
      position="static"
      color="default"
      elevation={24}
      style={{ backgroundColor: "#f0f2f5" }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1, textAlign: "left" }}
        >
          Plantain Diseases
        </Typography>
        <nav>
          <Link variant="button" color="text.primary" sx={{ my: 1, mx: 1.5 }}>
            Detect
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="/cnn"
            sx={{ my: 1, mx: 1.5 }}
          >
            CNN Concept
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="/plantain"
            sx={{ my: 1, mx: 1.5 }}
          >
            Plantain
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="/dataset"
            sx={{ my: 1, mx: 1.5 }}
          >
            Dataset
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="/references"
            sx={{ my: 1, mx: 1.5 }}
          >
            References
          </Link>
        </nav>
        <Button
          href="#"
          variant="outlined"
          sx={{ my: 1, mx: 1.5 }}
          onClick={onCNNConceptClick}
        >
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
