import { actionType } from "../actions/type";

const initialState = {
  movieList: [],
  selectedMovie: null,
  movieDetail: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_MOVIELIST:
      state.movieList = action.payload;
      return { ...state };
    case actionType.SET_SELECTED_MOVIE:
      state.selectedMovie = action.payload;
      return { ...state };
    case actionType.SET_MOVIE_DETAIL:
      state.movieDetail = action.payload;
      return { ...state };
    default:
      return state;
  }
};
export default reducer;
