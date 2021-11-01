import { actionType } from "../actions/type";

const initialState = {
  userList: [],
  selectedUser: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_USERLIST:
      state.userList = action.payload;
      return { ...state };
    case actionType.SET_SELECTED_USER:
      state.selectedUser = action.payload;
      return { ...state };
    default:
      return state;
  }
};
export default reducer;
