import { makeStyles } from "@material-ui/core/styles"

export default  makeStyles((theme) => ({
  footer: {
    backgroundColor: "#5e35b1",
    opacity : "0.8",
    position: "fixed",
    bottom: "0",
    width: "100%",
    height: "8%",
    padding: "1vh"
  },
  logo: {
    [theme.breakpoints.up('lg')]: {
    width: "300px",
    height: "40px",
    float: "right",
    margin: "auto",
    position: "relative"
  },
  [theme.breakpoints.up('xs')]: {
    width: "300px",
  height: "40px",
  float: "right",
  marginTop: "1px",
  position: "relative"
},
  }
}))

