import React, { useEffect }from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Second from './components/Second';
import Promo from './components/Promo';
import Feedback from './components/Feedback';
import Gallery from './components/Gallery';
import Faq from './components/Faq';
import Footer from './components/Footer';

function Home(){

useEffect(()=>{
  document.title = '64 Arena - Kick, Play, Love'
    }, []
  )

    return(
    <>    
      <Navbar/>
      <Main/>
      <Second/>
      <Promo/>
      <Feedback/>
      <Gallery/>
      <Faq/>
      <Footer/>
      </> 
    )
}

export default Home;