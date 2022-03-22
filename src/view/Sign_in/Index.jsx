import {
  TextField,
  Container,
  Button,
  Typography,
  CssBaseline,
  Avatar,
  Box,
} from "@material-ui/core";
import { signIn } from "../../store/actions/auth";
import { Fragment } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import LockIcon from "@material-ui/icons/Lock";
import {useStyles} from "./styles.js"
import {useTranslation} from "react-i18next";
const CopyRight = () => {
  return (
    <Fragment >
    <Typography component="h2" variant="body2" color="textPrimary" align="center">
      {"Copyright © "}
      <Typography color="inherit">Team 4 Website</Typography>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
    </Fragment>
  );
};
const SignIn = (props) => {
  const {t}=useTranslation()
  const schema = yup.object().shape({
    taiKhoan: yup.string().required(t("This is is required!")),
    matKhau: yup.string().required(t("This is is required!")),
  });

  const classes = useStyles();
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
      taiKhoan: "adminanhkhoa2",
      matKhau: "123123",
    },
    validationSchema: schema,
    validateOnMount: true,
  });

  const history = useHistory();

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    setTouched({
      taiKhoan: true,
      matKhau: true,
    });
    if (!isValid) return;
    const admin = { ...values };
    dispatch(
      signIn(admin, () => {
        history.push("/");
      })
    );
  };
  return (
    <Fragment>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockIcon />
          </Avatar>
          <Typography className={classes.title} component="h1" variant="h3">
            {t("Sign in as the admin")}
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <div style={{ marginBottom: 30 }}>
              <Typography className={classes.text} component="h5" variant="h5">{t("UserName")}:</Typography>
              <TextField
                value={values.taiKhoan}
                onChange={handleChange}
                onBlur={handleBlur}
                name="taiKhoan"
                fullWidth
                label="User Name"
                variant="outlined"
                autoFocus
              />

              {touched.taiKhoan && (
                <p className="text-danger">{errors.taiKhoan}</p>
              )}
            </div>
            <div style={{ marginBottom: 30 }}>
              <Typography className={classes.text} component="h5" variant="h5">{t("Password")}:</Typography>
              <TextField
                value={values.matKhau}
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                name="matKhau"
                fullWidth
                label="Password"
                variant="outlined"
                autoFocus
              />
              {touched.matKhau && (
                <p className="text-danger">{errors.matKhau}</p>
              )}
            </div>
      
            <div className={classes.signInBox}>
              <Button
                className={classes.submit}
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
              >
                {t("Login Now")}
              </Button>
            </div>
          </form>
        </div>
        <Box mt={4}>
          <CopyRight />
        </Box>
      </Container>
    </Fragment>
  );
};

export default SignIn;

