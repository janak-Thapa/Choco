
import React from 'react';
import Header from './_components/Header';
import Hero from './_components/Hero';
import SpecialProducts from './_components/specialProducts';
import About from './_components/About';
import NewsLetter from './_components/NewsLetter';
import Footer from './_components/Footer';
import Products from './_components/Products';


const HomePage = () => {
    return (
        <>
            <Header />
            <Hero/>
            <SpecialProducts/>
            <About/>
            <Products/>
            <NewsLetter/>
            <Footer/>
           
        </>
    );
};

export default HomePage;
