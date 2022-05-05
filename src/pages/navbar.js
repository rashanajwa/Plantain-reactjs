import "../App.css";
import * as React from "react";

import Popper from "@mui/material/Popper";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";

import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Divider } from "@mui/material";

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const onAppNameClick = () => {
    window.location.href = "/";
  };

  const onClickLink = (path) => {
    window.location.href = path;
  };
  return (
    <AppBar
      position="fixed"
      color="default"
      elevation={24}
      style={{ backgroundColor: "#F6F6F2" }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <div className="navbar-appname-dive">
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1, textAlign: "left" }}
            onClick={onAppNameClick}
          >
            Plantain Diseases
          </Typography>
        </div>
        <nav>
          <Link variant="button" color="text.primary">
            <Button
              ref={anchorRef}
              id="composition-button"
              aria-controls={open ? "composition-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              className="nav-detect-btn"
              onClick={handleToggle}
            >
              Detect
            </Button>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              placement="bottom-start"
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom-start" ? "left top" : "left bottom",
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        id="composition-menu"
                        aria-labelledby="composition-button"
                        onKeyDown={handleListKeyDown}
                      >
                        <MenuItem onClick={() => onClickLink("/detect/leaf")}>
                          Leaf
                        </MenuItem>
                        <Divider sx={{ my: 0.5 }} />
                        <MenuItem onClick={() => onClickLink("/detect/stem")}>
                          Stem
                        </MenuItem>
                        <Divider sx={{ my: 0.5 }} />
                        <MenuItem onClick={() => onClickLink("/detect/insect")}>
                          Insect
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
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
        {/* <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
          Login
        </Button> */}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
