
import { request } from "../../../api/request";
import i18next from "i18next";
import swal from 'sweetalert';

export const deleteMovie = async (maPhim) => {
  try {
    const res = await request({
      url: `http://movieapi.cyberlearn.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
      method: "DELETE",
    });
    const result = i18next.t("delete sucessfully");
    console.log({...res},res.data);
    swal(result);
  } catch (err) {
    console.log({ ...err }, err.response.data);
    swal( err.response.data.content)
 
  }
};
export const addMovie = async (movie,callback) => {
  try {
    const res = await request({
      method: "POST",
      url: "http://movieapi.cyberlearn.vn/api/QuanLyPhim/ThemPhimUploadHinh",
      data:movie
    });
    const result = i18next.t("add sucessfully");
    console.log(res.data);
    swal(result);
    callback();
  } catch (err) {
    console.log({ ...err }, err.response.data);
    swal( err.response.data.content)
  }
};
export const editMovie = async (movie,callback) => {
  try {
    const res = await request({
      method: "POST",
      url: "http://movieapi.cyberlearn.vn/api/QuanLyPhim/CapNhatPhimUpload",
      data:movie
    });
    const result = i18next.t("edit sucessfully");
    console.log(res.data);
    swal(result)
    callback();
  } catch (err) {
    console.log({ ...err }, err.response.data);
    swal( err.response.data.content)
  }
};
