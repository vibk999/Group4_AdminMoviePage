import { Container, Typography, CardMedia, Grid } from "@material-ui/core";
import React, { Fragment, } from "react";
// import { useDispatch, useSelector } from "react-redux";
import Layout from "../../HOCs/Layout";
import { styles } from "./styles";
import welcomPic from "../../assets/img/hinh-anh-welcome-21.jpg";
// import { fetchAdminDetail } from "../../store/actions/auth";
import { useTranslation } from "react-i18next";
import arrow from "../../assets/img/arrow.svg";
const CopyRight = () => {
  return (
    <Fragment>
      <Typography
        component="h5"
        style={{ marginTop: 20 }}
        variant="h5"
        color="textPrimary"
        align="center"
      >
        Copyright © Team 4 {new Date().getFullYear()} Website .
      </Typography>
    </Fragment>
  );
};
const Home = () => {
  const { t } = useTranslation();

  // const dispatch = useDispatch();
  const classes = styles();
  return (
    <Layout>
      <Container maxWidth="lg">
        <Typography
          className={classes.title}
          component="h1"
          variant="h2"
          align="center"
          gutterBottom
        >
          {t("Welcome to admin-movie pages")}
        </Typography>
        <Grid container spacing={3}>
          <Grid sm={12} md={9} item>
            <CardMedia
              className={classes.image}
              alt="welcome"
              component="img"
              image={welcomPic}
            />
          </Grid>
          <Grid className={classes.grid} sm={12} md={3} item>
            <div>
              <Typography className={classes.text} component="h4" variant="h4">
                {t("Please choose a tab to begin")}
              </Typography>
              <CardMedia
                image={arrow}
                alt="arrow"
                component="img"
                className={classes.icon}
              />
            </div>
          </Grid>
        </Grid>
        <CopyRight />
      </Container>
    </Layout>
  );
};
export default Home;
