import { makeStyles } from "@material-ui/styles";
export const styles = makeStyles((theme) => ({
  dataGrid: {
    width: 850,
    background: "linear-gradient(45deg, #ff4569 30%, #ffef62 90%)",
    color:"white",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    [theme.breakpoints.up("lg")]: {
      marginLeft: 50,
    },
    "&.MuiDataGrid-root .MuiDataGrid-footerContainer": {
      display: "none",
    },
  },
}));
