import * as React from "react";
import Grid from "@mui/material/Grid";
import  MdsButton from "./components/MdsButton/MdsButton";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 50,
  },
  ".MuiButton": {
    backgroundColor: "#0000ff",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Grid spacing={5} container={true} className={classes.root}>
        <Grid item xs={3}>
          {/* <MdsButton variant="contained" color="primary" label="Primary">
          </MdsButton>
        </Grid>
        <Grid item xs={3}>
          <MdsButton variant="contained" color="secondary">
            Secondary
          </MdsButton>
        </Grid>
        <Grid item xs={3}>
          <MdsButton variant="contained" color="success">
            Success
          </MdsButton>
        </Grid>
        <Grid item xs={3}>
          <MdsButton variant="contained" color="info">
            Info
          </MdsButton>
        </Grid>
        <Grid item xs={3}>
          <MdsButton variant="outlined" color="primary">
            Primary
          </MdsButton>
        </Grid>
        <Grid item xs={3}>
          <MdsButton variant="outlined" color="secondary">
            Secondary
          </MdsButton>
        </Grid>
        <Grid item xs={3}>
          <MdsButton variant="outlined" color="success">
            Success
          </MdsButton>
        </Grid>
        <Grid item xs={3}>
          <MdsButton variant="outlined" color="info">
            Info
  </MdsButton> */}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
