import React, {  useEffect } from "react";
import { fetchMovieDetail } from "../../../store/actions/MovieManagement/movieGet";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch, useHistory } from "react-router-dom";
import {
  Typography,
  Container,
  Grid,
  ImageList,
  Button,
} from "@material-ui/core";
import { deleteMovie } from "../../../store/actions/MovieManagement/movieManagerment";
import { NavLink } from "react-router-dom";
import Layout from "../../../HOCs/Layout";
import * as dayjs from "dayjs";
import { details } from "./detail";
import { buttons } from "../../../component/buttons";
import { useTranslation } from "react-i18next";
import swal from 'sweetalert';

const Detail = (props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const match = useRouteMatch();

  const history = useHistory();

  const handleDeleteMovie = (maPhim) => {
    swal({
      title: t("Are you sure?"),
      text: t("Do you want to delete this movie?"),
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        deleteMovie(maPhim);
        history.push("/movieManagement");
      } else {
        swal(t("Your file is safe!"));
      }
    });
  };
  
  const movieDetail = useSelector((state) => {
    return state.movies.movieDetail;
  });

  useEffect(() => {
    const movieID = match.params.id;
    dispatch(fetchMovieDetail(movieID));
  }, []);
  const classes = details();
  const classes1 = buttons();
  const { hinhAnh, tenPhim, moTa, ngayKhoiChieu, danhGia, trailer, maPhim } =
    movieDetail || {};
  return (
    <Layout>
      <Container style={{overflow:"hidden"}} fixed>
        <Typography
          className={classes.title}
          color="textPrimary"
          component="h1"
          variant="h2"
          align="center"
          gutterBottom
        >
          {t("Movie Detail")}
        </Typography>

        <Grid container spacing={2}>
          <Grid xs={12} md={7} item>
            <ImageList>
              <img className={classes.image} src={hinhAnh} alt="phim" />
            </ImageList>
          </Grid>
          <Grid xs={12} md={5} item>
            <Typography
              className={classes.content}
              color="textPrimary"
              component="h1"
              variant="h5"
              gutterBottom
            >
              {t("Movie Name")}: {tenPhim}
            </Typography>
            <Typography
              className={classes.content}
              color="textPrimary"
              component="h1"
              variant="h5"
              gutterBottom
            >
              {t("Rate")}: {danhGia}
            </Typography>
            <Typography
              className={classes.content}
              color="textPrimary"
              component="h5"
              variant="h5"
              gutterBottom
            >
              {t("Description")}: {moTa}
            </Typography>
            <Typography
              className={classes.trailer}
              color="textPrimary"
              component="h5"
              variant="h5"
              gutterBottom
            >
              {t("Trailer")}: {trailer}
            </Typography>

            <Typography
              className={classes.content}
              color="textPrimary"
              component="h1"
              variant="h5"
              gutterBottom
            >
              {t("Starting day")}:{" "}
              {dayjs(ngayKhoiChieu).format("DD/MM/YYYY hh:mm A")}
            </Typography>
            <div className={classes.buttonRow}>
              <Button
                style={{ marginBottom: 8 }}
                className={classes1.deleteButton}
                onClick={() => handleDeleteMovie(maPhim)}
                variant="contained"
                size="medium"
                color="secondary"
              >
                {t("Delete")}
              </Button>
              <NavLink
                style={{ textDecoration: "none" }}
                to={`/movieManagement/editMovie/${maPhim}`}
              >
                <Button
                  style={{ marginBottom: 8 }}
                  className={classes1.editButton}
                  variant="contained"
                  size="medium"
                  color="secondary"
                >
                  {t("Edit")}
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none" }}
                to={`/movieManagement/showTime/${maPhim}`}
              >
                <Button
                  className={classes1.showTimeButton}
                  variant="contained"
                  size="medium"
                  color="secondary"
                >
                  {t("ShowTime")}
                </Button>
              </NavLink>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Detail;
