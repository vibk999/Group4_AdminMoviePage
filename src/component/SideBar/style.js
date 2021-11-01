import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 260;

export const useStyles = makeStyles((theme) => ({
  navLink: {
    color: "#000",
    marginLeft: 20,
    fontSize: 18,
    opacity: 0.7,
    textDecoration: "none",
    "&:hover": {
      color: "white",
      textDecoration: "none",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize:13,
      marginLeft: 5,
    }
  },
  root: {
    display: "flex",
  },
  toolbar: {
    width:"100%",
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ...theme.mixins.toolbar,
  },
  icon:{
    [theme.breakpoints.down("xs")]: {
      display:"none"
    }
  },
  arrowIcon:{
    width:250,
    fontSize:30,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.down("sm")]: {
      width: "100%!important",
    },
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 25,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    backgroundColor: "#8bc34a",
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    //auto close
    [theme.breakpoints.down("sm")]: {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    },
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: "white",
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));
