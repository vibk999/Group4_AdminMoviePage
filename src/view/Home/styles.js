import { makeStyles } from "@material-ui/core/styles";

export const styles = makeStyles((theme) => ({
    title: {
      marginTop: 65,
      color:"red",
      
      [theme.breakpoints.down('sm')]: {
       fontSize:40,},
    },
    grid:{
      display:"flex",
      alignItems:"center"
    },
    text:{ 
      color:"#8bc34a",
    },
    image: {
        width:"100%",
        height: 450,
        [theme.breakpoints.down('sm')]: {
          height:200,},
      },
      icon:{
        marginTop:30,
       width:"100%",
        height:250,
        [theme.breakpoints.down('sm')]: {
          height:150,},
      }
}));