import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import GoToTop from './components/layout/Comp_GoToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import OurTeams from './pages/OurTeams';

function App() {

  return (
    <>
  <Header/>
  <main className='scroll-smooth transition-all duration-700'>
 <GoToTop/>
 <Home/>
 <Services/>
 <AboutUs/>
 <OurTeams/>
  </main>
   <Footer/> 
    </>
  );
}

export default App;
