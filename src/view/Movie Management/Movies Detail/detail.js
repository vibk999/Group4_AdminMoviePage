import { makeStyles } from "@material-ui/core/styles";

export const details = makeStyles((theme) => ({
  content: {
    textAlign:"justify",
    display: "-webkit-box",
    overflow:"hidden",
    textOverflow: "ellipsis",
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
    }
  },
  title: {
    marginTop: 65,
    [theme.breakpoints.down("sm")]: {
      fontSize: 28,
    },
  },
  trailer: {
    overflowX: "auto",
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
    }
  },
  image: {
    width: "100%!important",
    height: "450px!important",
    [theme.breakpoints.down("sm")]: {
      width: "95%!important",
      height: "300px!important",
    },
  },
  buttonRow:{
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"space-around",
  }
}));
