import { makeStyles } from "@material-ui/core/styles"

export default  makeStyles((theme) => ({
        form:{
            backgroundColor: "#001848",
            borderRadius : 4,
            padding:"3vh",
            margin:"10vh"    
        },
        input:{
            backgroundColor: "#0d3976"
        },
        check:{
            color: "#fff"
        },
        btgoogle:{
            margin:"1.74vh",
            
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