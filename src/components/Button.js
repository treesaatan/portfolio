import React from 'react';
import './styles/Button.css';
import {Link} from 'react-router-dom';

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

export const Button = ({children, type, onClick, buttonStyle, buttonSize, className=''}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to='/sign-up' className="btn-mobile">

            {/* whatever is put in children will be put in the button */}
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
                {children} 
            </button>
        </Link>
    )
}
