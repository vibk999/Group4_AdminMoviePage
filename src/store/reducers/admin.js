import { actionType } from "../actions/type";

const initialState={
  myProfile:null,
  myProfileDetail:null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_ADMIN:
      state.myProfile = action.payload;
      return { ...state };
      case actionType.SET_ADMIN_PROFILE:
      state.myProfileDetail = action.payload;
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
