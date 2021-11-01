import React, { Component } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@material-ui/core";
// import { useDispatch} from "react-redux";
import { NavLink } from "react-router-dom";
import { styles } from "./styles";
import { useTranslation } from "react-i18next";
const MovieList = (props) => {
const{t}=useTranslation();
  const classes1 = styles();
  const { hinhAnh, tenPhim, maPhim } = props.item;
  return (
    <Card className={classes1.paper}>
      <CardActionArea>
        <CardMedia style={{ height: 200 }} image={hinhAnh} title="Movie" />
        <CardContent className={classes1.content} >
          <Typography
            className={classes1.text}
            color="textSecondary"
            align="center"
            variant="h5"
            component="h2"
          >
            {tenPhim}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ justifyContent: "center" }}>
        <NavLink style={{ textDecoration: "none" }} to={`/movieManagement/detail/${maPhim}`}>
          <Button variant="contained" size="large" color="secondary">
            {t("Detail")}
          </Button>
        </NavLink>
      </CardActions>
    </Card>
  );
};

export default MovieList;
