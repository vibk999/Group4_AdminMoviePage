import {
  TextField,
  Container,
  Button,
  Typography,
  Switch,
} from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { Fragment, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { form } from "../../form";
import Layout from "../../../HOCs/Layout";
import { useTranslation } from "react-i18next";
import { editMovie } from "../../../store/actions/MovieManagement/movieManagerment";
import * as dayjs from "dayjs";

const EditMovie = () => {
  const { t } = useTranslation();
  const movieDetail = useSelector((state) => {
    return state.movies.movieDetail;
  });

  const schema = yup.object().shape({
    tenPhim: yup.string().required(t("This is  required!")),
    trailer: yup.string().required(t("This is  required!")),
    moTa: yup.string().required(t("This is  required!")),
    ngayKhoiChieu: yup.mixed().required(t("This is  required!")),
    danhGia: yup.number().max(10,t("cant higher than ")+10).min(1,t("cant lower than ")+1).required(t("This is  required!")),
    hinhAnh: yup.mixed().required(t("jpeg,jpg,gif,png file is required!")),
  });

  const {
    hinhAnh,
    tenPhim,
    moTa,
    ngayKhoiChieu,
    dangChieu,
    sapChieu,
    hot,
    danhGia,
    trailer,
    maPhim,
  } = movieDetail || {};

  const [selectedDate, handleDateChange] = useState(new Date(ngayKhoiChieu));

  const [imgSrc, setImgSrc] = useState("");

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
    enableReinitialize: true,
    initialValues: {
      maPhim: maPhim,
      tenPhim: tenPhim,
      trailer: trailer,
      moTa: moTa,
      maNhom: "GP01",
      ngayKhoiChieu: selectedDate,
      dangChieu: dangChieu,
      sapChieu: sapChieu,
      hot: hot,
      danhGia: danhGia,
      hinhAnh: null,
    },
    validationSchema: schema,
    validateOnMount: true,
  });

  const handleFileChange = async (event) => {
    let file = event.target.files[0] || [];

    if (
      file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/gif" ||
      file.type === "image/png"
    ) {
      await setFieldValue("hinhAnh", file);
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        setImgSrc(event.target.result);
      };
    }
  };

  const history = useHistory();

  // const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    setTouched({
      tenPhim: true,
      trailer: true,
      ngayKhoiChieu: true,
      danhGia: true,
      hinhAnh: true,
    });
    if (!isValid) return;
    const newMovie = {
      ...values,
      ngayKhoiChieu: dayjs(selectedDate).format("DD/MM/YYYY"),
    };
    console.log(newMovie);
    const formData = new FormData();
    for (let key in newMovie) {
      if (key !== "hinhAnh") {
        formData.append(key, newMovie[key]);
      } else {
        if (values.hinhAnh !== null) {
          formData.append("File", newMovie.hinhAnh, newMovie.hinhAnh.name);
        }
      }
    }
    // console.log("form", formData.get("File"));
    editMovie(formData, () => {
      history.push("/movieManagement");
    });
  };
  const classes = form();
  return (
    <Fragment>
      <Layout>
        <Container className={classes.container} maxWidth="lg">
          <Typography
            className={classes.title}
            component="h3"
            variant="h4"
            style={{ textAlign: "center" }}
          >
            {t("Edit Movie")}
          </Typography>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: 10 }}>
              <Typography className={classes.text} variant="h5">
              {t("Movie Name")}:
              </Typography>
              <TextField
                value={values.tenPhim}
                onChange={handleChange}
                onBlur={handleBlur}
                name="tenPhim"
                fullWidth
                label="MovieName"
                variant="outlined"
              />

              {touched.tenPhim && (
                <p className="text-danger">{errors.tenPhim}</p>
              )}
            </div>
            <div style={{ marginBottom: 10 }}>
              <Typography className={classes.text} variant="h5">
                {t("Trailer")}:
              </Typography>
              <TextField
                value={values.trailer}
                onChange={handleChange}
                onBlur={handleBlur}
                name="trailer"
                fullWidth
                label="trailer"
                variant="outlined"
              />
              {touched.trailer && (
                <p className="text-danger">{errors.trailer}</p>
              )}
            </div>
            <div style={{ marginBottom: 10 }}>
              <Typography className={classes.text} variant="h5">
              {t("Description")}:
              </Typography>
              <TextField
                value={values.moTa}
                onChange={handleChange}
                onBlur={handleBlur}
                name="moTa"
                fullWidth
                label="Description"
                variant="outlined"
              />
              {touched.moTa && <p className="text-danger">{errors.moTa}</p>}
            </div>
            <div style={{ marginBottom: 10 }}>
              <Typography className={classes.text} variant="h5">
              {t("Starting day")}:
              </Typography>

              <KeyboardDatePicker
                value={selectedDate}
                onChange={(date) => handleDateChange(date)}
                name="ngayKhoiChieu"
                format="DD/MM/YYYY"
              />

              {touched.ngayKhoiChieu && (
                <p className="text-danger">{errors.ngayKhoiChieu}</p>
              )}
            </div>
            <div style={{ marginBottom: 10, display: "flex" }}>
              <Typography className={classes.text} variant="h5">
              {t("Is showing")}:
              </Typography>
              <Switch
                checked={values.dangChieu}
                onChange={handleChange}
                onBlur={handleBlur}
                color="primary"
                name="dangChieu"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            </div>
            <div style={{ marginBottom: 10, display: "flex" }}>
              <Typography className={classes.text} variant="h5">
              {t("Coming Soon")}:
              </Typography>
              <Switch
                checked={values.sapChieu}
                onChange={handleChange}
                onBlur={handleBlur}
                color="primary"
                name="sapChieu"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            </div>
            <div style={{ marginBottom: 10, display: "flex" }}>
              <Typography className={classes.text} variant="h5">
              {t("Hot")}:
              </Typography>
              <Switch
                checked={values.hot}
                onChange={handleChange}
                onBlur={handleBlur}
                color="primary"
                name="hot"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            </div>
            <div style={{ marginBottom: 10 }}>
              <Typography className={classes.text} variant="h5">
              {t("Rating")}:
              </Typography>
              <TextField
                value={values.danhGia}
                onChange={handleChange}
                onBlur={handleBlur}
                label="Rating"
                color="primary"
                name="danhGia"
              />
              {touched.danhGia && (
                <p className="text-danger">{errors.danhGia}</p>
              )}
            </div>
            <div style={{ marginBottom: 10, maxWidth: 230 }}>
              <Typography className={classes.text} variant="h5">
              {t("Image")}:
              </Typography>
              <input
                onChange={handleFileChange}
                onBlur={handleBlur}
                type="file"
                name="hinhAnh"
                accept="image/png, image/jpeg, image/gif, image/jpg"
              />
              {touched.hinhAnh && (
                <p className="text-danger">{errors.hinhAnh}</p>
              )}
              <img
                style={{ width: 200, height: 200 }}
                src={imgSrc === "" ? hinhAnh : imgSrc}
                alt="no img"
              />
            </div>
            <div className={classes.buttonLine}>
              <Button
                className={classes.button}
                type="submit"
                variant="contained"
                color="primary"
              >
                {t("Edit Movie")}
              </Button>
            </div>
          </form>
        </Container>
      </Layout>
    </Fragment>
  );
};

export default EditMovie;
