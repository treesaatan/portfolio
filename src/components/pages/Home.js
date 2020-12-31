import React from 'react';
import "../../App.css";
import Jumbotron from "../Jumbotron";
import Cards from '../Cards';
import Footer from '../Footer';

function Home () {
    return (
        <React.Fragment>
            <Jumbotron />
                <p> This is the Home.js file and I am here to talk about me</p>
            <Cards />
            <Footer />
        </React.Fragment>
    )
}

export default Home;