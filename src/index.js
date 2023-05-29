import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {
  themeId: 0,
  backgroundColor: "black",
  color: "white",
  hover: "grey",
};

function reducer(currentState = initialState, action) {
  const newState = { ...currentState };

  switch (action.type) {
    case "LIGHT_MODE":
      newState.themeId = 1;
      newState.backgroundColor = "white";
      newState.color = "black";
      newState.hover = "lightgrey";
      break;
    case "DARK_MODE":
      newState.themeId = 0;
      newState.backgroundColor = "black";
      newState.color = "white";
      newState.hover = "grey";
      break;
  }

  return newState;
}

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
