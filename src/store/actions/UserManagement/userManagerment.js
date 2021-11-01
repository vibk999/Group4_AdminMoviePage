import i18next from "i18next";
import { request } from "../../../api/request";


export const deleteUser = async (user) => {
  try {
    const res = await request({
      url: `https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${user}`,
      method: "DELETE",
    });
    console.log({ ...res }, res.data);
    const result = i18next.t("delete sucessfully");
    alert(result);
  } catch (err) {
    console.log({ ...err }, err.response.data);
    alert(err.response.data.content);
    return false;
  }
};
export const addUser = async (user, callback) => {
  try {
    const res = await request({
      method: "POST",
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
      data: user,
    });
    console.log(res.data);
    const result = i18next.t("add sucessfully");
    alert(result);
    callback();
  } catch (err) {
    console.log({ ...err }, err.response.data);
    alert(err.response.data.content);
    return false;
  }
};
export const editUser = async (user, callback) => {
  try {
    const res = await request({
      method: "POST",
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      data: user,
    });
    console.log(res.data);
    const result = i18next.t("edit sucessfully");
    alert(result);
    callback();
  } catch (err) {
    console.log({ ...err }, err.response.data);
    alert(err.response.data.content);
    return false;
  }
};

