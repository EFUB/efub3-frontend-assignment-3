import { createStore } from "redux";

// 액션 타입 정의
const TOGGLE_THEME = "TOGGLE_THEME";

// 액션 생성자
export const toggleTheme = () => ({
  type: TOGGLE_THEME,
});

// 초기 상태 정의
const initialState = {
  isDarkMode: false,
};

// 리듀서 생성
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    default:
      return state;
  }
};

// 스토어 생성
const store = createStore(reducer);

export default store;
