import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Typography,
  Grid,
  TextField,
  InputLabel,
  FormControlLabel,
  Checkbox,
  Button,
} from "@material-ui/core";

import Login from "../Login";

import Styles from "./Styles";

const SignUp = (props) => {
  const classes = Styles();
  const [data, setData] = useState({
    nameRegistro: "",
    lastNameRegistro: "",
    emailRegistro: "",
    passwordRegistro: "",
    confirmarPassword: "",
  });

  const onChangeData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const { handleSubmit, errors, register } = useForm();

  const onSubmit = async (e) => {
    await axios.post("https://netflix-application.herokuapp.com/signup", {
      data,
    });
  };

  return (
    <Fragment>
      <Login>
        <Typography color="primary" component="h1" variant="h5">
          Registrate
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="nameRegistro"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Nombre"
                className={classes.input}
                autoFocus
                onChange={onChangeData}
                inputRef={register({
                  required: {
                    value: true,
                    message: "Nombre requerido",
                  },
                  maxLength: {
                    value: 12,
                    message: "No mas de 12 caracteres!",
                  },
                  minLength: {
                    value: 2,
                    message: "Minimo 2 caracteres",
                  },
                })}
              />
              <InputLabel htmlFor="component-error-text">
                {errors.nameRegistro && errors.nameRegistro.message}
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Apellido"
                name="lastNameRegistro"
                className={classes.input}
                autoComplete="name"
                onChange={onChangeData}
                inputRef={register({
                  required: {
                    value: true,
                    message: "Nombre requerido",
                  },
                  maxLength: {
                    value: 12,
                    message: "No mas de 12 caracteres!",
                  },
                  minLength: {
                    value: 2,
                    message: "Minimo 2 caracteres",
                  },
                })}
              />
              <InputLabel htmlFor="component-error-text">
                {errors.lastName && errors.lastName.message}
              </InputLabel>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Direccion Email"
                name="emailRegistro"
                autoComplete="email"
                onChange={onChangeData}
                className={classes.input}
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
              />
              <InputLabel htmlFor="component-error-text">
                {errors.emailRegistro && errors.emailRegistro.message}
              </InputLabel>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="passwordRegistro"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
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
              />
              <InputLabel htmlFor="component-error-text">
                {errors.passwordRegistro && errors.passwordRegistro.message}
              </InputLabel>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirmarPassword"
                label="Confirma tu contrasea"
                type="password"
                id="confirar"
                autoComplete="current-password"
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
              />
              <InputLabel htmlFor="component-error-text">
                {errors.confirmarPassword && errors.confirmarPassword.message}
              </InputLabel>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                className={classes.blanco}
                label="Deseas recibir correos de nuevas promociones y novedades"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Registrar
          </Button>
        </form>
        <Grid container justify="flex-end">
          <Grid item>
            <Link
              to="/signin"
              color="primary"
              className={classes.blanco}
              variant="body2"
            >
              Ya tienes una cuenta? Inicia sesion
            </Link>
          </Grid>
        </Grid>
      </Login>
    </Fragment>
  );
};

export default SignUp;
