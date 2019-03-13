import React from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
import { withStyles } from "@material-ui/core";
import { MAPS_API } from "../../constants/Constants";

const styles = theme => ({
  root1: {
    color: "white",
    background: "grey",
    padding: "15px 10px",
    display: "inline-flex",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "100%",
    transform: "translate(-50%, -50%)"
  },
  root2: {
    height: "50vh",
    width: "100%",
    marginTop: "16px"
  }
});

const heatMap = {
  positions: [{ lat: 43.772, lng: -79.5019 }],
  options: { radius: 20, opacity: 0.6 }
};

const AnyReactComponent = ({ text, classes }) => (
  <div className={classes.root1}>{text}</div>
);

const Maps = ({ center, zoom, text, classes }) => {
  return (
    <div className={classes.root2}>
      <GoogleMapReact
        defaultCenter={center}
        defaultZoom={zoom}
        heatmapLibrary={true}
        heatmap={heatMap}
        bootstrapURLKeys={{
          key: MAPS_API
        }}
      >
        <AnyReactComponent
          lat={center.lat}
          lng={center.lng}
          text={text}
          classes={classes}
        />
      </GoogleMapReact>
    </div>
  );
};

Maps.propTypes = {
  center: PropTypes.object,
  zoom: PropTypes.number,
  text: PropTypes.string,
  classes: PropTypes.object
};

Maps.defaultProps = {
  center: { lat: 43.7735, lng: -79.5019 },
  zoom: 16.8,
  text: "York University"
};

export default withStyles(styles)(Maps);
