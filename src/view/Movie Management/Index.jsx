import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieList from "../../component/MovieList";
import {
  fetchMovieList,
  fetchMovieEachPage,
  searchMovie,
} from "../../store/actions/MovieManagement/movieGet";
import {
  Container,
  Grid,
  Typography,
  Fab,
  InputBase,
  Button,
} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import Layout from "../../HOCs/Layout";
import { NavLink } from "react-router-dom";
import { Add, Search } from "@material-ui/icons";
import { styles } from "./styles";
import { buttons } from "../../component/buttons";
import {useTranslation} from "react-i18next";
const MovieManagement = () => {
  const [page, setPage] = useState(1);
  const [findMovie, setMovie] = useState();
  const {t}=useTranslation()
  useEffect(() => {
    dispatch(fetchMovieList);
  }, []);

  const dispatch = useDispatch();
  const movieList = useSelector((state) => {
    return state.movies.movieList;
  });
  const handlePageChange = useCallback(
    (event, value) => {
      setPage(value);
      dispatch(fetchMovieEachPage(value));
    },
    [dispatch]
  );
  const handleMoviehange = (event) => {
    setMovie(event.target.value);
  };
  const handleSearchMovie = useCallback(
    (userName) => {
      dispatch(searchMovie(userName));
    },
    [dispatch]
  );
  const classes1 = styles();
  const classes2 = buttons();
  return (
    <Layout>
      <Container maxWidth="lg">
        <Typography
          className={classes1.title1}
          color="textPrimary"
          component="h1"
          variant="h3"
          align="center"
          gutterBottom
        >
          {t("Movies Management")}
        </Typography>

        <Typography
          className={classes1.title2}
          color="textPrimary"
          component="h1"
          variant="h4"
          gutterBottom
        >
          {t("Page")}: {page}
        </Typography>
        <div className={classes1.inputBar}>
          <Pagination
            count={4}
            page={page}
            onChange={handlePageChange}
            shape="rounded"
            color="primary"
            size="medium"
          />
          <div className={classes1.inputSearch}>
            <div className={classes1.search}>
              <InputBase
                onChange={handleMoviehange}
                placeholder={t("Find movie names…")}
                classes={{
                  input: classes1.inputInput,
                }}
                // inputProps={{ "aria-label": "search" }}
              />
            </div>
            <Button
              onClick={() => handleSearchMovie(findMovie)}
              className={classes2.searchButton}
              variant="contained"
              size="medium"
              color="secondary"
            >
              <Search /> {t("search")}
            </Button>
          </div>
        </div>
        <Grid
          container
          className={classes1.container}
          spacing={2}
          style={{ marginTop: 20 }}
        >
          {movieList.map((item, index) => {
            return (
              <Grid sm={6} md={4} lg={3} item key={index}>
                <MovieList item={item} />
              </Grid>
            );
          })}
        </Grid>
        <NavLink
          className={classes1.navLink}
          exact
          to="/movieManagement/addMovie"
        >
          <Fab
            className={classes1.addButton}
            variant="extended"
            aria-label="add"
            size="medium"
          >
            <Add className={classes1.icon} />
            {t("Add Movie")}
          </Fab>
        </NavLink>
      </Container>
    </Layout>
  );
};

export default MovieManagement;
