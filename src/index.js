import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';

import { Provider } from "react-redux";
import store from "./store/store";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,

  document.getElementById("root")
);