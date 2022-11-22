import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link } from 'react-router-dom';
import './App.scss';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename='/chattacode-reactified'>
        <Link to="/"/>
        <Link to="/about"/>
        <Link to="/events"/>
        <Link to="/connect"/>
        <Link to="/blog"/>
        <Link to="/projects"/>
        <App />
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals