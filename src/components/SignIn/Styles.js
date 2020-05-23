import { makeStyles } from "@material-ui/core/styles"

export default  makeStyles((theme) => ({
        form:{
            padding:"3vh",
            margin:"10vh"    
        },
        input:{
            backgroundColor: "#0d3976"
        },
        check:{
            color: "#fff"
        },
        boton:{
            margin:"1.74vh",
            fontSize: "0.7rem"
            
        },
        centrado:{
            [theme.breakpoints.up('sm')]: {
                paddingLeft: "1.8rem",
                paddingRight: "1.8rem",
                paddingTop: "3rem"
            },
        },
        suscribete:{
            
            [theme.breakpoints.up('sm')]: {
                marginLeft: "auto",
                marginRight: "auto",
            }  
        },
        borde:{
            [theme.breakpoints.up('sm')]: {
                borderLeft: "solid 2px #fff"
            } 
        }
}))