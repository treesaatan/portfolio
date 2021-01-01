import React from 'react';
import "../../App.css";
import Jumbotron from "../Jumbotron";
import Cards from '../Cards';
import Footer from '../Footer';

import About from './About';

function Home () {
    return (
        <React.Fragment>
            <Jumbotron />
            <About />
            <Cards />
            <Footer />
        </React.Fragment>
    )
}

export default Home;