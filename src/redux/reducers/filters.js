const initialState = {
  category: 0,
  sortBy: "popular",
};

const filters = (state = initialState, action) => {
  if (action.type === "SET_SORT_BY") {
    return { ...state, sortBy: action.paylaod };
  }
  if (action.type === "SET_CATEGORY") {
    return { ...state, category: action.paylaod };
  }
  return state
};



export default filters