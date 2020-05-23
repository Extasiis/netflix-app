import { makeStyles } from "@material-ui/core/styles"

export default  makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
      input:{
        backgroundColor: "#0d3976"
    },
    blanco:{
        color: "#fff"
    }
}));
