import React from "react";
import Styles from "./Styles";

const Footer = () => {
  const classes = Styles();

  return (
    <footer className={classes.footer}>
      <div>
        <img
          src={require("../Login/Logo_cinetlify-06.png")}
          className={classes.logo}
        />
      </div>
    </footer>
  );
};

export default Footer;
