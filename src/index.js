import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import configureStore, { sagaMiddleware } from "./redux/store";
import mySaga from "./redux/sagas";
import 'leaflet/dist/leaflet.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={configureStore}>
      <App />
    </Provider>
  </React.StrictMode>
);

sagaMiddleware.run(mySaga)
