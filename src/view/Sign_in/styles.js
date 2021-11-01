import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  title: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 30,
    },
  },
  text: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 25,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  signInBox: {
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      display: "flex",
    },
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },
}));
