import {
  TextField,
  Container,
  Button,
  Typography,
  NativeSelect,
} from "@material-ui/core";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import Layout from "../../../HOCs/Layout";
import { form } from "../../form";
import {
  fetchTheaterSystemInfor,
  fetchTheaterBySystem,
  addShowTime,
  autoFetchTheater,
} from "../../../store/actions/MovieManagement/showTimeGet";
import { useTranslation } from "react-i18next";
import { KeyboardDateTimePicker } from "@material-ui/pickers";
import * as dayjs from "dayjs";

const ShowTime = (props) => {
  const { t} = useTranslation();
  const schema = yup.object().shape({
    maRap: yup.string().required(t("This is  required!")),
    ngayChieuGioChieu: yup.mixed().required(t("This is  required!")),
    giaVe: yup.number().max(150000,t("cant higher than ")+150000).min(75000,t("cant lower than ")+75000).required(t("This is  required!")),
  });
  
  useEffect(() => {
    dispatch(fetchTheaterSystemInfor);
    dispatch(autoFetchTheater);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const theaterInfor = useSelector((state) => {
    return state.showTime.theaterSystemInfor || [];
  });

  const theaterClusterInfor = useSelector((state) => {
    return state.showTime.theaterBySystem || [];
  });

  const changeTheater = (event) => {
    dispatch(fetchTheaterBySystem(event.target.value));
  };
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    values,
    errors,
    touched,
    isValid,
    handleChange,
    handleBlur,
    setTouched,
    setFieldValue,
  } = useFormik({
    initialValues: {
      maPhim: props.match.params.id,
      maRap: theaterClusterInfor.maCumRap,
      ngayChieuGioChieu: null,
      giaVe: 0,
    },
    validationSchema: schema,
    validateOnMount: true,
  });


  const handleSubmit = (event) => {
    event.preventDefault();

    setTouched({
      maRap: true,
      ngayChieuGioChieu: true,
      giaVe: true,
    });

    if (!isValid) return;
    const showTime = {
      ...values,
      ngayChieuGioChieu: dayjs(values.ngayChieuGioChieu).format(
        "DD/MM/YYYY HH:mm:ss"
      ),
    };
    console.log(showTime);
    addShowTime(showTime, () => {
      history.push("/movieManagement");
    });
  };
  const classes = form();
  return (
    <Fragment>
      <Layout>
        <Container className={classes.container} style={{height:580}} maxWidth="md">
          <Typography
            className={classes.title}
            component="h3"
            variant="h4"
            style={{ textAlign: "center" }}
          >
            {t("Add Showtime")}
          </Typography>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: 10 }}>
              <Typography className={classes.text} variant="h6">
                {t("Theater")}:
              </Typography>
              <NativeSelect
                fullWidth
                variant="outlined"
                onChange={changeTheater}
                // onBlur={handleBlur}
              >
                {theaterInfor.map((item, index) => {
                  return (
                    <option key={index} value={item.maHeThongRap}>
                      {item.tenHeThongRap}
                    </option>
                  );
                })}
              </NativeSelect>
            </div>
            <div style={{ marginBottom: 10 }}>
              <Typography className={classes.text} variant="h6">
                {t("Theater Cluster")}:
              </Typography>
              <NativeSelect
                value={values.maRap}
                name="maRap"
                fullWidth
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
              >
                {theaterClusterInfor.map((item, index) => {
                  return (
                    <option key={index} value={item.maCumRap}>
                      {item.tenCumRap}
                    </option>
                  );
                })}
              </NativeSelect>
              {touched.maRap && <p className="text-danger">{errors.maRap}</p>}
            </div>
            <div style={{ marginBottom: 10 }}>
              <Typography className={classes.text} variant="h5">
                {t("Date and time")}:
              </Typography>
              <KeyboardDateTimePicker
                variant="inline"
                // ampm={false}
                label="Date and time"
                value={values.ngayChieuGioChieu}
                name="ngayChieuGioChieu"
                onChange={(value) => setFieldValue("ngayChieuGioChieu", value)}
                // onError={console.log}
                format="DD/MM/YYYY HH:mm A"
              />
              {touched.ngayChieuGioChieu && (
                <p className="text-danger">{errors.ngayChieuGioChieu}</p>
              )}
            </div>

            <div style={{ marginBottom: 10 }}>
              <Typography className={classes.text} variant="h5">
                {t("Ticket price")}:
              </Typography>
              <TextField
                value={values.giaVe}
                onChange={handleChange}
                onBlur={handleBlur}
                label="Ticket price"
                color="primary"
                name="giaVe"
              />
              {touched.giaVe && <p className="text-danger">{errors.giaVe}</p>}
            </div>

            <div className={classes.buttonLine}>
              <Button
                size="large"
                className={classes.button}
                type="submit"
                variant="contained"
                color="primary"
              >
                {t("Add Showtime")}
              </Button>
            </div>
          </form>
        </Container>
      </Layout>
    </Fragment>
  );
};

export default ShowTime;
