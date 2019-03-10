import React, { useState } from "react";
import PropTypes from "prop-types";

import "./App.css";
import { Intro } from "./intro/Intro";
import Header from "./header/Header";
import Drawer from "./drawer/Drawer";
import Heatmap from "./heatmap/Heatmap";
import Maps from "./maps/Maps";
import Content from "./content/Content";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    display: "flex",
    background: "#4da6ff"
  }
});

export function App({ classes }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.root}>
      <Header open={open} setOpen={setOpen} />
      <Drawer open={open} setOpen={setOpen} />
      <Content>
        <Intro open={open} setOpen={setOpen} />
        <Heatmap open={open} setOpen={setOpen} />
        <Maps open={open} setOpen={setOpen} />
      </Content>
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(App);
