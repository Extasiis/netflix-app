import React, { useState } from 'react';

import { Box, Slide } from '@material-ui/core';

import Menu from "../Menu";

import Styles from "./Styles";

function Home() {
  const classes = Styles();

  const [twoSlide, setTwoSlide] = useState(true);
  const [oneSlide, setOneSlide] = useState(false);

  function nextSlide() {
      setOneSlide(prevState => !prevState);
      setTwoSlide(prevState => !prevState);
  }


  return (
    <div className={classes.transitions}>
      <Menu />

      <Box
        display={"flex"}
        flexDirection={"column"}
        style={{ overflowX: "hidden", height: 400 }}
      >
        <button onClick={nextSlide}>Change slide</button>

        <div style={{ display: "flex", width: "100%", position: "relative" }}>
          <Slide
            style={{ position: "absolute" }}
            direction={"right"}
            in={oneSlide}
            mountOnEnter
            unmountOnExit
            timeout={10000}
          >
            <div style={{ backgroundColor: "green", width: "100%" }}>
              Slide one
            </div>
          </Slide>

          <Slide
            style={{ position: "absolute" }}
            direction={"left"}
            in={twoSlide}
            mountOnEnter
            unmountOnExit
            timeout={10000}
          >
            <div style={{ backgroundColor: "red", width: "100%" }}>
              Slide Two
            </div>
          </Slide>
        </div>
      </Box>
    </div>
  );
}

export default Home;
