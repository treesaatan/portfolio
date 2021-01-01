import React from 'react'
import "./styles/Footer.css";
import {Button} from './Button';
import {Link} from 'react-router-dom';
import AipingLogo from "../assets/images/aiping_logo_white.png";

function Footer() {
    return (
        <div className='footer-container'>
          <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
              Contact Me!
            </p>
            <p className='footer-subscription-text'>
              (-;
            </p>
            <div className='input-areas'>
              <form>
                <input
                  className='footer-input'
                  name='email'
                  type='email'
                  placeholder='Your Email'
                />
                <Button buttonStyle='btn--outline'>Send</Button>
              </form>
            </div>
          </section>
          
          <section className='social-media'>
            <div className='social-media-wrap'>
              <div className='footer-logo'>
                <Link to='/' className='social-logo'>
                {/* <i class='fas fa-heart fa-xs' /><i class="far fa-hand-peace fa-xs"></i> */}
                <img className="logo" src={AipingLogo} alt="logo"/>
                </Link>
              </div>
              <div className='social-icons'>
                <Link
                  className='social-icon-link facebook'
                  to='/'
                  target='_blank'
                  aria-label='Facebook'
                >
                  <i className='fab fa-facebook-f' />
                </Link>
                <Link
                  className='social-icon-link github'
                  to='/'
                  target='_blank'
                  aria-label='GitHub'
                >
                  <i className="fab fa-github-alt"></i>
                </Link>
                <Link
                  className='social-icon-link twitter'
                  to='/'
                  target='_blank'
                  aria-label='LinkedIn'
                >
                  <i className='fab fa-linkedin' />
                </Link>
              </div>
            </div>
          </section>
        </div>
      );
}

export default Footer
