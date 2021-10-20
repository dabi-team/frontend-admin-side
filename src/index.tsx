import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/fonts/Poppins/Poppins-Regular.ttf";
import "./assets/fonts/Playfair_Display/PlayfairDisplay-Italic-VariableFont_wght.ttf";
import "./assets/fonts/Open_Sans_Condensed/OpenSansCondensed-Light.ttf";
import './index.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Provider} from "react-redux";
import store from "./redux/store";
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './User/login';
import Register from './User/register';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
              <Switch>
                  <Route path='/Login'>
                      <Login/>
                  </Route>
                  <Route path='/Register'>
                      <Register/>
                  </Route>
                  <Route path='/'>
                      <App/>
                  </Route>
              </Switch>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
