import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Pages/router';
import { RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import '@fontsource-variable/montserrat';
import './Styles/index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <RouterProvider router={Router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
