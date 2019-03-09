import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { statuses, streets } from "../../constants/Constants";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  row: {
    "&:nth-of_type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
});

function Heatmap({ classes }) {
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Street Names</TableCell>
            {statuses.map(status => {
              return <TableCell key={status.id}>{status.name}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {streets.map(street => {
            return (
              <TableRow key={street.id}>
                <TableCell>{street.name}</TableCell>
                <TableCell/>
                <TableCell/>
                <TableCell/>
                <TableCell/>
                <TableCell/>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

Heatmap.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(Heatmap);
