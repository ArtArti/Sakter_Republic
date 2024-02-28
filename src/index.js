import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import router from './routes';
import { RouterProvider } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import { ParallaxProvider } from 'react-scroll-parallax';







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ParallaxProvider>
    <ErrorBoundary>
        <RouterProvider router={router} />
    </ErrorBoundary>
  </ParallaxProvider>
);
reportWebVitals();
