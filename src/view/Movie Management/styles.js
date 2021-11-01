import { alpha, makeStyles } from "@material-ui/core/styles";

export const styles = makeStyles((theme) => ({
  title1: {
    marginTop: 65,
    [theme.breakpoints.down("sm")]: {
      fontSize: 30,
    },
  },
  title2: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 25,
    },
  },
  navLink: {
    color: "#000",
    fontSize: 18,
    opacity: 0.7,
    textDecoration: "none",
    [theme.breakpoints.down("sm")]: {
      fontSize: 15,
    },
  },
  container: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  addButton: {
    position: "fixed",
    backgroundColor: "#8bc34a",
    bottom: theme.spacing(3),
    right: theme.spacing(3),
    zIndex: 1,
   
  },
  icon: {
    marginRight: 10,
  },
  inputBar: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  inputSearch: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      marginTop: 20,
    },
  },
  search: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    marginLeft: theme.spacing(6),
    width: "auto",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 0,
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
