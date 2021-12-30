import React from 'react';
// import { Button } from './Button';
import "./styles/Jumbotron.css";
import "../App.css";

function Jumbotron() {
    return (
        <div className="jumbotron-container">
            <h1>Hello, my name is Theresa</h1>
            <p>Currently a UI Engineer @ <a href="https://www.linkedin.com/feed/" className="linkedin">LinkedIn</a></p>
            <p>*This website is in the process of being created & personalized</p>
        </div>
    )
}

export default Jumbotron
