import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { DataService } from "./services/data.service";
import appConfig from "./appConfig";
import { Provider } from "react-redux";
import { makeStore } from "./store";
import './index.css';
import { HttpClient } from "./services/http.service";

const http = new HttpClient(appConfig.appid, appConfig.baseURL);
const store = makeStore({ api: new DataService(http)});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
