// 초기 상태 설정
const initialState = {
  darkMode: false, // 다크 모드 상태 초기값은 false로 설정
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_DARK_MODE':
      // TOGGLE_DARK_MODE 액션이 발생할 경우, 다크 모드 상태를 현재의 반대로 설정

      return {
        ...state,
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
};

export default reducer;
