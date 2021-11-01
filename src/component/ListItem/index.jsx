import React from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import MovieIcon from "@material-ui/icons/Movie";
import HomeIcon from "@material-ui/icons/Home";
// import TheatersIcon from "@material-ui/icons/Theaters";
// import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import { useTranslation } from "react-i18next";
import { styles } from "./styles";

export const MainListItems = () => {
  const {t}=useTranslation()
  const classes = styles();
  return (
    <div>
      <NavLink className={classes.navLink} exact to="/">
        <ListItem button>
          <ListItemIcon className={classes.listItem}>
            <HomeIcon className={classes.icon} />
            <ListItemText primary={t("Home")} />
          </ListItemIcon>
        </ListItem>
      </NavLink>
      <NavLink className={classes.navLink} exact to="/userManagement">
        <ListItem button>
          <ListItemIcon className={classes.listItem}>
            <AccessibilityIcon className={classes.icon} />
            <ListItemText primary={t("Users Management")} />
          </ListItemIcon>
        </ListItem>
      </NavLink>
      <NavLink className={classes.navLink} exact to="/movieManagement">
        <ListItem button>
          <ListItemIcon className={classes.listItem}>
            <MovieIcon className={classes.icon} />
            <ListItemText primary={t("Movies Management")} />
          </ListItemIcon>
        </ListItem>
      </NavLink>
    </div>
  );
};
