import React from 'react'
import './styles/Hero.css'

function Hero() {
    return (
        <div className="hero-container">
            {/* <video src="" autoPlay loop muted/> */}
            <h1>The Video</h1>
            <p>This will be a place where I can show a video of how a project works</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                    GET STARTED
                </Button>
            </div>
        </div>
    )
}

export default Hero
