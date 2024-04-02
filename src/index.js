import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import darkTheme from "./theme";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
