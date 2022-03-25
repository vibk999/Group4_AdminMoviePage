import { request } from "../../api/request";
import i18next from "i18next";
import { createAction } from "./index";
import { actionType } from "./type";
import swal from 'sweetalert';

export const signIn = (userLogin, callback) => {
  return (dispatch) => {
    request({
      url: "http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: userLogin,
    })
      .then((res) => {
        const result = i18next.t("Only an admin can log in");
        if (res.data.content.maLoaiNguoiDung !== "QuanTri") {
          return swal(result);
        } else {
          dispatch(createAction(actionType.SET_ADMIN, res.data.content));
          localStorage.setItem("adminToken", res.data.content.accessToken);
          localStorage.setItem("specialToken","can access")
          callback();
        }
      })
      .catch((err) => {
        console.log({ ...err }, err.response.data);
        swal(err.response.data.content);
      });
  };
};
export const fetchAdmin = async (dispatch) => {
  try {
    const res = await request({
      method: "POST",
      url: "http://movieapi.cyberlearn.vn/QuanLyNguoiDung/ThongTinTaiKhoan",
    });
    dispatch(createAction(actionType.SET_ADMIN, res.data.content));
  } catch (err) {
    console.log(err);
  }
};
// export const fetchAdminDetail=(taiKhoan) => async (dispatch) => {
//   try {
//     const res = await request({
//       method: "POST",
//       url: `http://movieapi.cyberlearn.vn/QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${taiKhoan}`,
//     });
//     dispatch(createAction(actionType.SET_ADMIN_PROFILE, res.data.content));
//   } catch (err) {
//     console.log(err);
//   }
// };
