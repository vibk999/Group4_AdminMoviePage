import { createAction } from "..";
import { request } from "../../../api/request";
import { actionType } from "../type";

export const fetchUserList = (dispatch) => {
  request({
    method: "GET",
    url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP01&soTrang=1&soPhanTuTrenTrang=20",
  })
    .then((res) => {
      dispatch(createAction(actionType.SET_USERLIST, res.data.content.items));
    })
    .catch((err) => {
      console.log(err);
    });
};
export const fetchUserEachPage = (number) => async (dispatch) => {
  try {
    const res = await request({
      method: "GET",
      url: `https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP01&soTrang=${number}&soPhanTuTrenTrang=20`,
    });

    dispatch(createAction(actionType.SET_USERLIST, res.data.content.items));
  } catch (err) {
    console.log(err);
  }
};
export const searchUser = (userName) => async (dispatch) => {
  try {
    const res = await request({
      method: "GET",
      url: `https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${userName}`,
    });

    dispatch(createAction(actionType.SET_USERLIST, res.data.content));
  } catch (err) {
    console.log(err);
  }
};