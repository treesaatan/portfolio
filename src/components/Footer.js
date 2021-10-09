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
                <a
                  className='social-icon-link'
                  href="https://www.facebook.com/theresa.tan.106/"
                  target='_blank'
                  aria-label='Facebook'
                  rel="noopener noreferrer"
                >
                  <i className='fab fa-facebook-f' />
                </a>
                <a
                  className='social-icon-link'
                  href='https://github.com/treesaatan'
                  target='_blank'
                  aria-label='GitHub'
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github-alt"></i>
                </a>
                <a
                  className='social-icon-link'
                  href="https://www.linkedin.com/in/theresaatan/"
                  target='_blank'
                  aria-label='LinkedIn'
                  rel="noopener noreferrer"
                >
                  <i className='fab fa-linkedin' />
                </a>
              </div>
            </div>
          </section>
        </div>
      );
}

export default Footer
