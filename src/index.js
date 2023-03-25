import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import swDev from "./swDev";
import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";

const store = configureStore({
  reducer: rootReducer,
});

const root = ReactDOM.createRoot(document.getElementById("root"));

fetch("https://node-test-production-7782.up.railway.app/home", { mode: 'no-cors' }).then(resp => resp.json()).then(resp => console.log(resp,"++++")).catch(err => console.log(err,"erroareee"))

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
// swDev();

if ("serviceWorker" in navigator) {
  swDev();
}

// sw.register();
