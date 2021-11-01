import {
  TextField,
  Container,
  Button,
  Typography,
  NativeSelect,
} from "@material-ui/core";
import { Fragment } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import Layout from "../../../HOCs/Layout";
import { addUser } from "../../../store/actions/UserManagement/userManagerment";
import { form } from "../../form";
import { useTranslation } from "react-i18next";

const AddUser = () => {
  const { t } = useTranslation();
  const schema = yup.object().shape({
    taiKhoan: yup.string().required(t("This is  required!")),
    matKhau: yup.string().required(t("This is  required!")),
    hoTen: yup.string().required(t("This is  required!")),
    email: yup
      .string()
      .email(t("email is invalid"))
      .required(t("This is  required!")),
    soDt: yup
      .string()
      .matches(/^[0-9]+$/)
      .required(t("This is  required!")),
  });
  const {
    values,
    errors,
    touched,
    isValid,
    handleChange,
    handleBlur,
    setTouched,
  } = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "GP01",
      maLoaiNguoiDung: "KhachHang",
      hoTen: "",
    },
    validationSchema: schema,
    validateOnMount: true,
  });

  const history = useHistory();

  // const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    setTouched({
      taiKhoan: true,
      matKhau: true,
      email: true,
      soDt: true,
      hoTen: true,
    });
    if (!isValid) return;
    const newUser = { ...values };

    addUser(newUser, () => {
      history.push("/");
    });
  };
  const classes = form();
  return (
    <Fragment>
      <Layout>
        <Container className={classes.container} maxWidth="md">
          <Typography
            gutterBottom
            component="h3"
            variant="h3"
            className={classes.title}
          >
            {t("Add User")}
          </Typography>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: 10 }}>
              <Typography className={classes.text} variant="h5">
                {t("UserName")}:
              </Typography>
              <TextField
                value={values.taiKhoan}
                onChange={handleChange}
                onBlur={handleBlur}
                name="taiKhoan"
                fullWidth
                label="UserName"
                variant="outlined"
              />

              {touched.taiKhoan && (
                <p className="text-danger">{errors.taiKhoan}</p>
              )}
            </div>
            <div style={{ marginBottom: 10 }}>
              <Typography className={classes.text} variant="h5">
                {t("Password")}:
              </Typography>
              <TextField
                value={values.matKhau}
                onChange={handleChange}
                onBlur={handleBlur}
                name="matKhau"
                fullWidth
                label="Password"
                variant="outlined"
              />
              {touched.matKhau && (
                <p className="text-danger">{errors.matKhau}</p>
              )}
            </div>
            <div style={{ marginBottom: 10 }}>
              <Typography className={classes.text} variant="h5">
                {t("Email")}:
              </Typography>
              <TextField
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                name="email"
                fullWidth
                label="Email"
                variant="outlined"
              />
              {touched.email && <p className="text-danger">{errors.email}</p>}
            </div>
            <div style={{ marginBottom: 10 }}>
              <Typography className={classes.text} variant="h5">
                {t("FullName")}:
              </Typography>
              <TextField
                value={values.hoTen}
                onChange={handleChange}
                onBlur={handleBlur}
                name="hoTen"
                fullWidth
                label="FullName"
                variant="outlined"
              />
              {touched.hoTen && <p className="text-danger">{errors.hoTen}</p>}
            </div>
            <div style={{ marginBottom: 10 }}>
              <Typography className={classes.text} variant="h5">
                {t("Phone")}:
              </Typography>
              <TextField
                value={values.soDt}
                onChange={handleChange}
                onBlur={handleBlur}
                name="soDt"
                fullWidth
                label="Phone"
                variant="outlined"
              />
              {touched.soDt && <p className="text-danger">{errors.soDt}</p>}
            </div>
            <div style={{ marginBottom: 10 }}>
              <Typography className={classes.text} variant="h6">
                {t("Group Code")}:
              </Typography>
              <NativeSelect
                value={values.maNhom}
                name="maNhom"
                fullWidth
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                inputProps={{ "aria-label": "maNhom" }}
              >
                <option value="GP01">GP01</option>
                <option value="GP02">GP02</option>
                <option value="GP03"> GP03</option>
              </NativeSelect>
            </div>
            <div style={{ marginBottom: 10 }}>
              <Typography className={classes.text} variant="h6">
                {t("User Type")}:
              </Typography>
              <NativeSelect
                value={values.maLoaiNguoiDung}
                name="maLoaiNguoiDung"
                fullWidth
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                inputProps={{ "aria-label": "maLoaiNguoiDung" }}
              >
                <option value="KhachHang">{t("Guest")}</option>
                <option value="QuanTri">{t("Admin")}</option>
              </NativeSelect>
            </div>
            <div className={classes.buttonLine}>
              <Button
                size="large"
                className={classes.button}
                type="submit"
                variant="contained"
                color="primary"
              >
                {t("Add User")}
              </Button>
            </div>
          </form>
        </Container>
      </Layout>
    </Fragment>
  );
};

export default AddUser;
