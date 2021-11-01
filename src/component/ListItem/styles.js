import { makeStyles } from "@material-ui/styles";
export const styles = makeStyles((theme)=>({
  navLink: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
      
    },
  },
  listItem: {
    display: "flex",
    color: "#000",
    "&:hover": {
      color: "white",
    },
   
  },
  icon: {
    marginRight: 30,
  },
}));
