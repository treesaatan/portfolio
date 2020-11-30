import React from 'react'
import "./styles/Footer.css";
import {Button} from './Button';
import {Link} from 'react-router-dom';

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
          
          <section class='social-media'>
            <div class='social-media-wrap'>
              <div class='footer-logo'>
                <Link to='/' className='social-logo'>
                <i class='fas fa-heart fa-xs' /><i class="far fa-hand-peace fa-xs"></i>
                  
                </Link>
              </div>
              <div class='social-icons'>
                <Link
                  class='social-icon-link facebook'
                  to='/'
                  target='_blank'
                  aria-label='Facebook'
                >
                  <i class='fab fa-facebook-f' />
                </Link>
                <Link
                  class='social-icon-link github'
                  to='/'
                  target='_blank'
                  aria-label='GitHub'
                >
                  <i class="fab fa-github-alt"></i>
                </Link>
                <Link
                  class='social-icon-link twitter'
                  to='/'
                  target='_blank'
                  aria-label='LinkedIn'
                >
                  <i class='fab fa-linkedin' />
                </Link>
              </div>
            </div>
          </section>
        </div>
      );
}

export default Footer
