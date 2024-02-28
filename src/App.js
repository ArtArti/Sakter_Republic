// App.js
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  // Check if the current route is not under /purchase, then render the footer
  const shouldRenderFooter = !location.pathname.startsWith('/purchase') && !location.pathname.startsWith('/news');
  const shouldRenderHeader = !location.pathname.startsWith('/purchase') && !location.pathname.startsWith('/news');

  return (
    <>
      {shouldRenderHeader && <Header/>}
      <section className="mb-3">
        <Outlet/>
      </section>
      {shouldRenderFooter && <Footer/>}
    </>
  );
}

export default App;
