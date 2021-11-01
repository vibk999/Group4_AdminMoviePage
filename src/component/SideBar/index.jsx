import React, { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  CssBaseline,
  Badge,
  Drawer,
  Divider,
  List,
  NativeSelect,
} from "@material-ui/core";
import { PermIdentity, Notifications, ArrowBack } from "@material-ui/icons";
import { MainListItems } from "../ListItem/index";
import { useTranslation } from "react-i18next";
import { useStyles } from "./style";
import { useSelector,useDispatch } from "react-redux";
import { fetchAdminDetail } from "../../store/actions/auth";
import clsx from "clsx";

const SideBar = (props) => {
  const dispatch=useDispatch()
  const admin = useSelector((state) => {
    return state.admin.myProfile || {};
  });
  useEffect(() => {
    dispatch(fetchAdminDetail(admin.taiKhoan));
  }, [dispatch,admin.taiKhoan]);
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const { t, i18n } = useTranslation();
  
  const classes = useStyles();
 
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("specialToken");
  };
  const handleLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
        color="primary"
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <PermIdentity />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            {t("Admin Page DashBoard")}
          </Typography>
          <IconButton className={classes.icon} color="inherit">
            <Badge badgeContent={4} color="secondary">
              <Notifications />
            </Badge>
          </IconButton>

          <NativeSelect
            defaultValue="en"
            onChange={handleLanguage}
            variant="filled"
          >
            <option value="en">Eng</option>
            {/* <option value="ja">Japan</option> */}
            <option value="vi">Viet</option>
          </NativeSelect>
          <NavLink
            className={classes.navLink}
            onClick={handleLogout}
            exact
            to="/signin"
          >
            {t("Log Out")}
          </NavLink>
          <NavLink
            className={classes.navLink}
            exact
            to={`/myProfile/${admin.taiKhoan}`}
          >
            {t("Hello")},{admin.taiKhoan}
          </NavLink>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ArrowBack className={classes.arrowIcon} />
          </IconButton>
        </div>
        <Divider />
        <List>
          <MainListItems />
        </List>
        <Divider />
      </Drawer>
    </div>
  );
};

export default SideBar;
