import { Container, Button, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import Layout from "../../HOCs/Layout";

import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { styles } from "./styles";

const MyProfile = () => {
  const { t } = useTranslation();
  const admin = useSelector((state) => {
    return state.admin.myProfile || [];
  });

  const {
    taiKhoan,
    maLoaiNguoiDung,
    hoTen,
    soDT,
    email,
    matKhau,
    thongTinDatVe,
  } = admin || [];

  const classes = styles();
  return (
    <Layout>
      <Container className={classes.container} maxWidth="md">
        <Typography
          className={classes.title}
          gutterBottom
          component="h3"
          variant="h3"
          style={{ textAlign: "center" }}
        >
          {t("My Profile")}
        </Typography>
        <Typography
          className={classes.text}
          gutterBottom
          component="h5"
          variant="h5"
          style={{ textAlign: "center" }}
        >
          {t("UserName")} : {taiKhoan}
        </Typography>
        <Typography
          className={classes.text}
          gutterBottom
          component="h5"
          variant="h5"
          style={{ textAlign: "center" }}
        >
          {t("Password")} : {matKhau}
        </Typography>
        <Typography
          className={classes.text}
          gutterBottom
          component="h5"
          variant="h5"
          style={{ textAlign: "center" }}
        >
          {t("FullName")} : {hoTen}
        </Typography>
        <Typography
          className={classes.text}
          gutterBottom
          component="h5"
          variant="h5"
          style={{ textAlign: "center" }}
        >
          {t("Phone")} : {soDT}
        </Typography>

        <Typography
          className={classes.text}
          gutterBottom
          component="h5"
          variant="h5"
          style={{ textAlign: "center" }}
        >
          {t("Email")} : {email}
        </Typography>

        <Typography
          className={classes.text}
          gutterBottom
          component="h5"
          variant="h5"
          style={{ textAlign: "center" }}
        >
          {t("User Type")} : {maLoaiNguoiDung}
        </Typography>
        {thongTinDatVe
          ? thongTinDatVe.map((item, index) => {
              return (
                <Typography
                  key={index}
                  className={classes.text}
                  gutterBottom
                  component="h5"
                  variant="h5"
                  style={{ textAlign: "center" }}
                >
                  {t("Ticket code")} {index + 1} :{item.maVe}
                </Typography>
              );
            })
          : null}
        <div className={classes.buttonLine}>
          <NavLink
            style={{ textDecoration: "none" }}
            to={`/myProfile/editMyProfile/${taiKhoan}`}
          >
            <Button
              className={classes.button}
              variant="contained"
              size="large"
              color="secondary"
            >
              {t("Edit User")}
            </Button>
          </NavLink>
        </div>
      </Container>
    </Layout>
  );
};
export default MyProfile;
