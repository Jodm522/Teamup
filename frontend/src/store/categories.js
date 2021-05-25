const LOAD = "genres/LOAD";

const load = (list) => ({
  type: LOAD,
  list,
});

export const getCategories = () => async (dispatch) => {
  const res = await fetch(`/api/genres`);

  if (res.ok) {
    const list = await res.json();
    dispatch(load(list));
  }
};

const initialState = {
  genres: [],
};

const genresReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: {

      const allGenres = {};
      action.list.forEach((genre) => {
        allGenres[genre.id] = genre;
        
      });
      return {
        ...allGenres,
        ...state,
        list: action.list,
      };
    }
    default:
      return state;
  }
};

export default genresReducer;
