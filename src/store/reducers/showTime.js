import { actionType } from "../actions/type";

const initialState = {
  theaterSystemInfor: null,
  theaterBySystem: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_THEATER_SYSTEM_INFOR:
      state.theaterSystemInfor = action.payload;
      return { ...state };
    case actionType.SET_THEATER_BY_SYSTEM:
      state.theaterBySystem = action.payload;
      return { ...state };
    default:
      return state;
  }
};
export default reducer;
