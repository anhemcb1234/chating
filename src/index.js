import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Main from './Main'
import Weather from './Weather'
import Login from './Login'
import UserDetail from './UserDetail'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/main" element={<Main />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userDetail" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
