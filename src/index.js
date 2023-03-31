import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import swDev from "./swDev";
import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";

// if (process.env.NODE_ENV === 'production') {
//   import('../public/manifest.prod.json').then(manifest => {
//     const link = document.createElement('link');
//     link.setAttribute('rel', 'manifest');
//     link.setAttribute('href', manifest.default);
//     document.head.appendChild(link);
//   });
// } else {
//   const link = document.createElement('link');
//   link.setAttribute('rel', 'manifest');
//   link.setAttribute('href', '/manifest.json');
//   document.head.appendChild(link);
// }


const store = configureStore({
  reducer: rootReducer,
});

const root = ReactDOM.createRoot(document.getElementById("root"));

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
