import React from "react";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Hidden from "@material-ui/core/Hidden";
import Toolbar from "@material-ui/core/Toolbar";

import Typography from "@material-ui/core/Typography";

import SimpleMenu from "../mobilemenu";
import { Link } from "react-router-dom";
import "./style.css";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  ShoppingNavMargin: {
    marginRight: 7,
  },
  
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function ShoppingNav() {
  const classes = useStyles();

  return (
    <div className={"header"}>
      <div className={classes.root}>
        <AppBar style={{ background: 'rgba(255, 255, 255, 0.1)' }} position="static">
          <Toolbar>
            <SimpleMenu></SimpleMenu>
            <Typography className={classes.title} variant="h6" noWrap>
              git Outside!
            </Typography>
            <Hidden smDown>
              <Link to="/bike">
                <Button
                  variant="outlined"
                  className={classes.ShoppingNavMargin}
                  
                >
                  Biking
                </Button>
              </Link>
              <Link to="/raft">
                <Button
                  className={classes.ShoppingNavMargin}
                  variant="outlined"
                  
                >
                  Rafting
                </Button>
              </Link>
              <Link to="/ski">
                <Button
                  className={classes.ShoppingNavMargin}
                  variant="outlined"
                  
                >
                  Skiing
                </Button>
              </Link>
              <Link to={"/hike"}>
                <Button
                  className={classes.ShoppingNavMargin}
                  variant="outlined"
                  
                >
                  Hiking
                </Button>
              </Link>
            </Hidden>
            <div className={classes.search}>
              {/* <div className={classes.searchIcon}>
                <SearchIcon />
              </div> */}
              {/* <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              /> */}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}
