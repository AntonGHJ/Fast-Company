import React from 'react';
import ReactDOM from 'react-dom/client';
import Users from './app/component/users';
import Bookmark from './app/component/bookmark';
import './index.css';
import reportWebVitals from './reportWebVitals';
import User from './app/component/user';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 
    <Users/>
 
  
    

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
