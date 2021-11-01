/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserList from "../../component/UserList";
import {
  fetchUserList,
  fetchUserEachPage,
  searchUser,
} from "../../store/actions/UserManagement/usersGet";
import {
  Container,
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
const UserManagement = () => {
  const [page, setPage] = useState(1);
  const [findUser, setUser] = useState();
  const { t } = useTranslation();
  useEffect(() => {
    dispatch(fetchUserList);
  }, []);

  const dispatch = useDispatch();
  const userList = useSelector((state) => {
    return state.users.userList;
  });
  const handlePageChange = useCallback(
    (event, value) => {
      setPage(value);
      dispatch(fetchUserEachPage(value));
    },
    [dispatch]
  );
  const handleUserChange = (event) => {
    setUser(event.target.value);
  };
  const handleSearchUser = useCallback(
    (userName) => {
      dispatch(searchUser(userName));
    },
    [dispatch]
  );
  const classes1 = styles();
  const classes2 = buttons();
  return (
    <Layout>
      <Container className={classes1.container} maxWidth="lg">
        <Typography
          className={classes1.title1}
          color="textPrimary"
          component="h1"
          variant="h3"
          align="center"
          gutterBottom
        >
          {t("Users Management")}
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
            count={5}
            page={page}
            onChange={handlePageChange}
            shape="rounded"
            color="primary"
            size="medium"
          />
          <div className={classes1.inputSearch}>
            <div className={classes1.search}>
              <InputBase
                onChange={handleUserChange}
                placeholder={t("Find user fullname...")}
                classes={{
                  input: classes1.inputInput,
                }}
                // inputProps={{ "aria-label": "search" }}
              />
            </div>
            <Button
              onClick={() => handleSearchUser(findUser)}
              className={classes2.searchButton}
              variant="contained"
              size="medium"
              color="secondary"
            >
              <Search /> {t("search")}
            </Button>
          </div>
        </div>

        <UserList userList={userList} />
        <NavLink
          className={classes1.navLink}
          exact
          to="/userManagement/addUser"
        >
          <Fab
            className={classes1.addButton}
            variant="extended"
            aria-label="add"
            size="small"
          >
            <Add className={classes1.icon} />
            {t("Add User")}
          </Fab>
        </NavLink>
      </Container>
    </Layout>
  );
};

export default UserManagement;
