import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from './App';

import { HttpClient } from "./services/http.service";
import { DataService } from "./services/data.service";
import { makeStore } from "./store";

import appConfig from "./appConfig";
import './index.css';

const http = new HttpClient(process.env.REACT_APP_USER_ID, appConfig.baseURL);
const store = makeStore({ api: new DataService(http)}, {weather: {}});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
