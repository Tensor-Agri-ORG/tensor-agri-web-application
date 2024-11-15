import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import GoToTop from './components/layout/Comp_GoToTop';

function App() {

  return (
    <>
  <Header/>
  <main className='scroll-smooth transition-all duration-700'>
 <GoToTop/>
  </main>
   <Footer/> 
    </>
  );
}

export default App;
