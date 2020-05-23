import React from "react";

//Components Material UI
import {
  Grid,
  FormGroup
} from "@material-ui/core";

import Styles from "./Styles";

//footer
import Footer from "../Footer";

const Login = (props) => {
  const classes = Styles()

  return (
    <Grid container>
      <Grid item xs={12} sm={11} md={7} lg={6} xl={4}>
        <FormGroup className={classes.form}>
          {props.children}
        </FormGroup>
      </Grid>
      <Footer />
    </Grid>
  );
};

export default Login;
