// index.js 파일에서 <App />을 <Provider>로 감싸기 위해서 reducer를 따로 뺐습니다.

const initialState = {
    isDarkMode: false,
}

const reducer = (currentState = initialState, action) => {
    const newState = { ...currentState };

    // type이 light인 경우 isDarkMode를 false로
    if (action.type === "light") {
        newState.isDarkMode = false;
    } else if (action.type === "dark") { // type이 dark인 경우 isDarkMode를 true로
        newState.isDarkMode = true;
    }

    return newState;
}

export default reducer;