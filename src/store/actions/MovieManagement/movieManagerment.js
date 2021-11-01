
import { request } from "../../../api/request";
import i18next from "i18next";

export const deleteMovie = async (maPhim) => {
  try {
    const res = await request({
      url: `https://movienew.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
      method: "DELETE",
    });
    const result = i18next.t("delete sucessfully");
    console.log({...res},res.data);
    alert(result);
  } catch (err) {
    console.log({ ...err }, err.response.data);
    alert( err.response.data.content)
  }
};
export const addMovie = async (movie,callback) => {
  try {
    const res = await request({
      method: "POST",
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh",
      data:movie
    });
    const result = i18next.t("add sucessfully");
    console.log(res.data);
    alert(result);
    callback();
  } catch (err) {
    console.log({ ...err }, err.response.data);
    alert( err.response.data.content)
  }
};
export const editMovie = async (movie,callback) => {
  try {
    const res = await request({
      method: "POST",
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhimUpload",
      data:movie
    });
    const result = i18next.t("edit sucessfully");
    console.log(res.data);
    alert(result)
    callback();
  } catch (err) {
    console.log({ ...err }, err.response.data);
    alert( err.response.data.content)
  }
};
