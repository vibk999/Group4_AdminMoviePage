import { makeStyles } from "@material-ui/core/styles";

export const styles = makeStyles((theme) => ({
  title: {
    marginTop: 65,
    [theme.breakpoints.down("sm")]: {
        marginBottom:25,
      fontSize: 30,
    },
  },
container:{
    height:580,
    [theme.breakpoints.down("xs")]: {
      overflow:"hidden",
        height: 650,
      },
},
  text: {
    
    [theme.breakpoints.down("sm")]: {
      fontSize: 23,
      marginBottom:20,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
      marginBottom:20,
      overflowX:"auto"
    },
  },
  buttonLine: {
    display: "flex",
    justifyContent: "center",
  },
  button: {
    marginTop: 10,
    backgroundColor: "#52b202",
    "&:hover": {
      backgroundColor: "#91ff35",
    },
  },
}));
