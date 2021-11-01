import { makeStyles } from "@material-ui/styles";

export const buttons = makeStyles((theme)=>({
 deleteButton:{
    color:"#fafafa",
    backgroundColor:"#d32f2f",
    "&:hover": {
      color: "#212121",
      backgroundColor:"#d50000",
    },
 },
 editButton:{
  color:"#fafafa",
  backgroundColor:"#7cb342",
  "&:hover": {
    color: "#fafafa",
    backgroundColor:"#33691e",
  },
 },
 searchButton: {
    backgroundColor: "#03a9f4",
    "&:hover": {
      backgroundColor: "#0276aa",
    },
  },
  showTimeButton: {
    backgroundColor: "#ffeb3b",
    "&:hover": {
      backgroundColor: "#ffef62",
    },
  },
}));