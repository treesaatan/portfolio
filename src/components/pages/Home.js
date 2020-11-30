import React from 'react';
import "../../App.css";
import Hero from "../Hero";
import Cards from '../Cards';
import Footer from '../Footer';

function Home () {
    return (
        <React.Fragment>
            <Hero />
            <Cards />
            <Footer />
        </React.Fragment>
    )
}

export default Home;