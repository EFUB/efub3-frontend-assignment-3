const initialState = {
  isDarkMode: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DarkMode":
      return {
        isDarkMode: !state.isDarkMode,
      };

    default:
      return state;
  }
};

export default reducer;
