import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const p = new URLSearchParams(window.location.search).get("p");
if (p) {
  const decoded = decodeURIComponent(p);
  const target = decoded.startsWith("/") ? decoded : `/${decoded}`;
  const base = window.location.pathname.replace(/\/$/, "");
  const dest = `${window.location.origin}${base}/#${target}`;
  if (!window.location.hash || window.location.hash !== `#${target}`) {
    if (window.location.href !== dest) {
      window.location.replace(dest);
    }
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
