import React from 'react'
import AdsCarousel from '../components/AdsCarousel';
import CardsSlider from '../components/CardsSlider';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


function Home() {
  return (
    <div>
        <Navbar />
        <Categories />
        <AdsCarousel />
        <CardsSlider />
        <Footer />  
    </div>
  )
}

export default Home