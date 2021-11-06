/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserManagement from "./view/User Management/Index";
import SignIn from "./view/Sign_in/Index";
import EditUser from "./view/User Management/Edit User";
import AddUser from "./view/User Management/Add User";
import MovieManagement from "./view/Movie Management/Index";
import Detail from "./view/Movie Management/Movies Detail";
import AddMovie from "./view/Movie Management/Add Movies/index";
import EditMovie from "./view/Movie Management/Edit Movies/index";
import ShowTime from "./view/Movie Management/ShowTime";
import MyProfile from "./view/My Profile";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { fetchAdmin } from "./store/actions/auth";
import { AuthRoute, PrivateRoute } from "./HOCs/Route";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./Theme";
import Home from "./view/Home";
import DayjsUtils from "@date-io/dayjs";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import EditMyProfile from "./view/My Profile/Edit My Profile";

const App = () => {

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
      if (token) {
        dispatch(fetchAdmin);
      } 
  }, []);
  const dispatch = useDispatch();
  const admin = useSelector((state) => {
    return state.admin.myProfile || {};
  });
 
  const { maLoaiNguoiDung } = admin;
  console.log(maLoaiNguoiDung);
  //check token
  if (
    maLoaiNguoiDung === "KhachHang" ||
    localStorage.getItem("specialToken") === null
  ) {
    localStorage.removeItem("adminToken");
  }

  return (
    <BrowserRouter>
      <MuiPickersUtilsProvider utils={DayjsUtils}>
        <ThemeProvider theme={theme}>
          <Switch>
            <PrivateRoute
              path="/userManagement/addUser"
              component={AddUser}
              redirectPath="/signin"
            />
            <PrivateRoute
              path="/userManagement/editUser/:id"
              component={EditUser}
              redirectPath="/signin"
            />
            <PrivateRoute
              path="/userManagement"
              component={UserManagement}
              redirectPath="/signin"
            />
            <PrivateRoute
              path="/movieManagement/addMovie"
              component={AddMovie}
              redirectPath="/signin"
            />
            <PrivateRoute
              path="/movieManagement/editMovie/:id"
              component={EditMovie}
              redirectPath="/signin"
            />
            <PrivateRoute
              path="/movieManagement/showTime/:id"
              component={ShowTime}
              redirectPath="/signin"
            />
            <PrivateRoute
              path="/movieManagement/detail/:id"
              component={Detail}
              redirectPath="/signin"
            />
            <PrivateRoute
              path="/movieManagement"
              component={MovieManagement}
              redirectPath="/signin"
            />
            <PrivateRoute
              path="/myProfile/editMyProfile/:id"
              component={EditMyProfile}
              redirectPath="/signin"
            />
            <PrivateRoute
              path="/myProfile/:id"
              component={MyProfile}
              redirectPath="/signin"
            />
            <AuthRoute path="/signin" component={SignIn} redirectPath="/" />
            <PrivateRoute path="/" component={Home} redirectPath="/signin" />
          </Switch>
        </ThemeProvider>
      </MuiPickersUtilsProvider>
    </BrowserRouter>
  );
};

export default App;
