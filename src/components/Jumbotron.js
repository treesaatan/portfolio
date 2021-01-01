import React from 'react';
// import { Button } from './Button';
import "./styles/Jumbotron.css";
import "../App.css";

function Jumbotron() {
    return (
        <div className="jumbotron-container">
            <h1>Hello, my name is Theresa</h1>
            <p>Currently majoring in Computer Science B.S. @ <a href="https://www.ucsc.edu/" className="college">UCSC</a></p>
            <p>*This website is in the process of being created & personalized</p>
        </div>
    )
}

export default Jumbotron
