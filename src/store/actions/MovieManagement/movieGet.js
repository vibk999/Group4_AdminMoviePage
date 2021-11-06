import { createAction } from "..";
import { request } from "../../../api/request";
import { actionType } from "../type";

export const fetchMovieList = (dispatch) => {
  request({
    method: "GET",
    url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&soTrang=1&soPhanTuTrenTrang=10",
  })
    .then((res) => {
      dispatch(createAction(actionType.SET_MOVIELIST, res.data.content.items));
      
    })
    .catch((err) => {
      console.log(err);
    });
};
export const fetchMovieEachPage = (number) => async (dispatch) => {
  try {
    const res = await request({
      method: "GET",
      url: `https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&soTrang=${number}&soPhanTuTrenTrang=10`,
    });

    dispatch(createAction(actionType.SET_MOVIELIST, res.data.content.items));
  } catch (err) {
    console.log(err);
  }
};
export const searchMovie = (movieName) => async (dispatch) => {
  try {
    const res = await request({
      method: "GET",
      url: `https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01&tenPhim=${movieName}`,
    });

    dispatch(createAction(actionType.SET_MOVIELIST, res.data.content));
  } catch (err) {
    console.log(err);
  }
};
export const fetchMovieDetail = (id) => {
  return (dispatch)=>{
    request({
    method: "GET",
    url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim",
    params:{
      MaPhim:id,
    },
  })
    .then((res) => {
      dispatch( createAction(actionType.SET_MOVIE_DETAIL,res.data.content))
      
    })
    .catch((err) => {
      console.log(err);
    });
};
};