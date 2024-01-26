import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import App from './App';
import { Query } from '@testing-library/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import NAv from './component/navs/navv';
import { Navbar } from 'react-bootstrap';
import Nav_sec from './component/navs/nav';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

)