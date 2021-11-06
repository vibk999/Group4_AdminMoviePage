import { createAction } from "..";
import { request } from "../../../api/request";
import { actionType } from "../type";
import i18next from "i18next";
import swal from 'sweetalert';

export const fetchTheaterSystemInfor = async(dispatch) => {
    try {
      const res = await request({
        method: "GET",
        url: "https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
      });

      dispatch(createAction(actionType.SET_THEATER_SYSTEM_INFOR, res.data.content));
    } catch (err) {
      console.log(err);
    }
  };
  export const fetchTheaterBySystem =(theaterCode)=> async(dispatch) => {
    try {
      const res = await request({
        method: "GET",
        url: `https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${theaterCode}`,
      });

      dispatch(createAction(actionType.SET_THEATER_BY_SYSTEM, res.data.content));
    } catch (err) {
      console.log(err);
    }
  };
  export const autoFetchTheater =async(dispatch) => {
    try {
      const res = await request({
        method: "GET",
        url: "https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=BHDStar",
      });

      dispatch(createAction(actionType.SET_THEATER_BY_SYSTEM, res.data.content));
    } catch (err) {
      console.log(err);
    }
  };
  export const addShowTime = async (showtime,callback) => {
    try {
      const res = await request({
        method: "POST",
        url: "https://movienew.cybersoft.edu.vn/api/QuanLyDatVe/TaoLichChieu",
        data:showtime
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