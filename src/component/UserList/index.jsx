import React from "react";
import { Button } from "@material-ui/core";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../store/actions/UserManagement/userManagerment";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { createAction } from "../../store/actions";
import { actionType } from "../../store/actions/type";
import { styles } from "./styles";
import { buttons } from "../buttons";
import { useTranslation } from "react-i18next";
import swal from 'sweetalert';

const UserList = (props) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const history = useHistory();

  const handleDeleteUser = (taiKhoan) => {
    swal({
      title: "Are you sure?",
      text: t("Do you want to delete this username ") + taiKhoan,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        deleteUser(taiKhoan);
        history.push("/userManagement");
      } else {
        swal(t("Your file is safe!"));
      }
    });
  };
  const handleSelectedUser = (
    taiKhoan,
    matKhau,
    email,
    soDt,
    hoTen,
    maLoaiNguoiDung
  ) => {
    const user = { taiKhoan, matKhau, email, soDt, hoTen, maLoaiNguoiDung };
    dispatch(createAction(actionType.SET_SELECTED_USER, user));
  };
  const classes1 = styles();
  const classes2 = buttons();

  const columns = [
    { field: "taiKhoan", headerName: t("UserName"), width: 130 },
    { field: "hoTen", headerName: t("FullName"), width: 130 },
    { field: "soDt", headerName: t("Phone"), width: 130 },
    { field: "maLoaiNguoiDung", headerName: t("User Type"), width: 100 },
    {
      field: "email",
      headerName: t("Email"),
      width: 130,
      sortComparator: (v1, v2) => v1.toString().localeCompare(v2.toString()),
    },
    {
      field: "action",
      headerName: t("Action"),
      width: 200,
      renderCell: (params) => (
        <strong>
          {/* {params.value.getFullYear()} */}
          <Button
            className={classes2.deleteButton}
            onClick={() => handleDeleteUser(params.row.taiKhoan)}
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16 }}
          >
            {t("Delete")}
          </Button>
          <NavLink
            style={{ textDecoration: "none" }}
            to={`/userManagement/editUser/${params.row.taiKhoan}`}
          >
            <Button
              className={classes2.editButton}
              onClick={() =>
                handleSelectedUser(
                  params.row.taiKhoan,
                  params.row.matKhau,
                  params.row.email,
                  params.row.soDt,
                  params.row.hoTen,
                  params.row.maLoaiNguoiDung
                )
              }
              variant="contained"
              color="primary"
              size="small"
              style={{ marginLeft: 16 }}
            >
              {t("Edit")}
            </Button>
          </NavLink>
        </strong>
      ),
    },
  ];

  return (
    <DataGrid
      className={classes1.dataGrid}
      rows={props.userList.map((item, index) => {
        return {
          id: index,
          taiKhoan: item.taiKhoan,
          hoTen: item.hoTen,
          soDt: item.soDt,
          maLoaiNguoiDung: item.maLoaiNguoiDung,
          email: item.email,
          matKhau: item.matKhau,
        };
      })}
      columns={columns}
    />
  );
};
export default UserList;
