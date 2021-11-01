import { makeStyles} from "@material-ui/core/styles";

export const form = makeStyles((theme) => ({
  container:{
    [theme.breakpoints.down("xs")]: {
      maxWidth:250,
      overflow:"hidden",
    },
  },
  title: {
    marginTop: 65,
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: 30,
    },
  },
  text: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
    },
  },
  buttonLine: {
    display: "flex",
    justifyContent: "center",
  },
  button: {
    marginTop:10,
    backgroundColor: "#52b202",
    "&:hover": {
      backgroundColor: "#91ff35",
    },
  },
}));
