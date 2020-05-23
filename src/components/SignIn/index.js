import React, { Fragment, useState } from "react";
import {useHistory} from 'react-router-dom'
import { useForm } from "react-hook-form";
import axios from "axios"
import Login from "../Login";
import {
  Grid,
  Typography,
  TextField,
  InputLabel,
  Button,
  FormControlLabel,
  Checkbox,
  Box,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";

import Styles from "./Styles";

const SignIn = (props) => {
  const classes = Styles();

  const defaultValues = {
    TextField: "",
    Checkbox: false,
  };

  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const onChangeData = (e) => {
    setData({
      ...data,
      [e.target.name] : e.target.value
    })
  }
  const { errors, handleSubmit, register } = useForm({
    defaultValues,
  });

  let history = useHistory();

  function handleClick() {
    history.push("/signup")
  }

  const onSubmit = async(data) => {
    await axios.post("https://netflix-application.herokuapp.com/signin", {
        data
    });
  };

  return (
    <Fragment>
      <Login>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography gutterBottom variant="h4" component="h2" color="primary">
            Iniciar
            <br />
            Sesion
          </Typography>          
          <TextField
            required
            name="email"
            bgcolor="primary"
            color="primary"
            label="Correo Electronico"
            variant="outlined"
            size="small"
            type="email"
            className={classes.input}
            onChange={onChangeData}
            inputRef={register({
              required: {
                value: true,
                message: "Se require Email",
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "invalid email address",
              },
            })}
            fullWidth
          />
          <InputLabel htmlFor="component-error-text">
            {errors.username && errors.username.message}
          </InputLabel>
          <TextField
            required
            bgcolor="primary"
            color="primary"
            label="Contraseña"
            variant="outlined"
            size="small"
            type="password"
            name="password"
            style={{ marginTop: "1rem" }}
            className={classes.input}
            onChange={onChangeData}
            inputRef={register({
              required: {
                value: true,
                message: "Contraseña requerida",
              },
              maxLength: {
                value: 8,
                message: "No mas de 8 caracteres!",
              },
              minLength: {
                value: 4,
                message: "Minimo 4 caracteres",
              },
            })}
            fullWidth
          />
          <InputLabel htmlFor="component-error-text">
            {errors.contraseña && errors.contraseña.message}
          </InputLabel>
          <Button
            variant="contained"
            color="secondary"
            disableElevation
            style={{ marginTop: "1rem" }}
            fullWidth
            type="submit"
            //  onClick={userSignIn}
          >
            Iniciar Sesion
          </Button>
          <FormControlLabel
            className={classes.check}
            value="start"
            control={<Checkbox color="primary" />}
            label="Recuerdame"
          />
          </form>
          <Grid container>
            <Grid item xs={12} sm={5} md={5} lg={5} display="flex" mx="auto">
              <Box bgcolor="primary" className={classes.centrado} px="auto">
                <Button
                  variant="outlined"
                  fullWidth
                  className={classes.suscribirse}
                  color="primary"
                  size="medium"
                  onClick={handleClick}
                >
                  Suscribete
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={7} md={7} lg={7}>
              <Box className={classes.borde}>
                <Button
                  color="primary"
                  size="large"
                  className={classes.boton}
                >
                  Iniciar sesión con Google
                </Button>
                <Button
                  color="primary"
                  size="large"
                  className={classes.boton}
                  startIcon={<FacebookIcon />}
                >
                  {" "}
                  Iniciar sesión con Facebook
                </Button>
              </Box>
            </Grid>
          </Grid>      
      </Login>
    </Fragment>
  );
};

export default SignIn;
