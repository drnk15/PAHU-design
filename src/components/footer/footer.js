import React from 'react';
import './footer.scss';
import Logo from './Logo.png';
import Facebook from '../../svg/facebook.svg';
import Twitter from '../../svg/twitter.svg';
import YouTube from '../../svg/youtube.svg';
import GooglePlus from '../../svg/google-plus.svg';
    
    
function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="contacts">
                    <div>
                        <h3>Call us now</h3>
                        <p>Office telephone: (251) 546-9442<br/>Hotline: 906-2721</p>
                    </div>
                    <div>
                        <h3>Come visit us</h3>
                        <p>123 6th St.<br/>Melbourne, FL 32904</p>
                    </div>   
                    <div>
                        <h3>Send a message</h3>
                        <p>Email: pahudesign@pahu.vn<br/>Inquiries: support@pahu.vn </p>
                    </div>   
                </div>
                <div className="footer-info">
                    <div className="footer-part logo-social-media">
                        <div className="logo">
                            <img src={Logo} />
                        </div>
                        <div className="social-media">
                            <a href="https://facebook.com" target="_blank">
                                <img src={Facebook} alt="facebook" />
                            </a>
                            <a href="https://google.com" target="_blank">
                                <img src={GooglePlus} alt="google plus" />
                            </a>
                            <a href="https://twitter.com" target="_blank">
                                <img src={Twitter} alt="twitter" />
                            </a>
                            <a href="https://youtube.com" target="_blank">
                                <img src={YouTube} alt="youtube" />
                            </a>
                        </div>
                    </div>
                    <div className="footer-part">
                        <h3>Hours work</h3>
                        <p>Monday - Friday: 08:00 am - 17:00 pm.<br/>
                        Saturday: 09:00 am - 12:30 pm.</p>
                    </div>
                    <div className="footer-part" id="newsletter">
                        <h3>Newsletter</h3>
                        <form action="url">
                            <input type="email" id="subcription" placeholder="Enter your email..."/>
                            <button type="submit">
                            </button>
                        </form>
                        <p>Sign up to get exclusive offers from our favorite brands and to be well up in the news.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;