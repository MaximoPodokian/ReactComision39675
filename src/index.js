import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";
import 'bootstrap/dist/css/bootstrap.min.css';


import './index.css';
import App from "./App"



const firebaseConfig = {
  apiKey: "AIzaSyC371GvWVHFi9wxvtjdgkOEqLMffhxBvvI",
  authDomain: "evc-02-2023.firebaseapp.com",
  projectId: "evc-02-2023",
  storageBucket: "evc-02-2023.appspot.com",
  messagingSenderId: "1096899809744",
  appId: "1:1096899809744:web:38169030fc562183fe29d5"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);