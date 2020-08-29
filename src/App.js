import React from 'react';
import './App.scss';
import Images from './ImagesImporter.js';
import Facebook from './svg/facebook.svg';
import Twitter from './svg/twitter.svg';
import YouTube from './svg/youtube.svg';
import GooglePlus from './svg/google-plus.svg';

function App() {
    return (
        <div className="App">
            <header>
                <div className="container flex-container">
                    <div className="logo-header">
                        <img src={Images["Logo.png"]} id="site-logo" alt="logo" />
                    </div>
                    <div className="header-nav">
                        <a href="#" target="_blank" className="nav-link home-link">Home</a>
                        <a href="#" target="_blank" className="nav-link">Features</a>
                        <a href="#" target="_blank" className="nav-link">Shop</a>
                        <a href="#" target="_blank" className="nav-link">Blog</a>
                        <a href="#" target="_blank" className="nav-link">Accesories</a>
                        <a href="#" target="_blank" className="nav-link">Contact</a>
                    </div>
                    <div className="buttons-header flex-container">
                        <button className="header-button"><i className="fas fa-search"></i></button>
                        <button className="header-button"><i className="far fa-heart"></i></button>
                        <button className="header-button"><i className="fas fa-shopping-cart"></i><p id="number-of-items">0</p></button>
                    </div>
                </div>
            </header>

            <section className="first-screen">
                <div className="container">
                    <div className="svg-container">
                    </div>
                    <div className="first-screen-empty-squares">
                        <div className="squares-empty-div"></div>
                        <div className="squares">
                            <div className="square empty"></div>
                            <div className="square"></div>
                            <div className="square empty"></div>
                            <div className="square"></div>
                            <div className="square empty"></div>
                            <div className="square"></div>
                            <div className="square"></div>
                            <div className="square"></div>
                            <div className="square"></div>
                            <div className="square"></div>
                            <div className="square empty"></div>
                            <div className="square"></div>
                            <div className="square empty"></div>
                            <div className="square"></div>
                            <div className="square empty"></div>
                            <div className="square"></div>
                            <div className="square"></div>
                            <div className="square"></div>
                            <div className="square"></div>
                            <div className="square"></div>
                            <div className="square empty"></div>
                            <div className="square"></div>
                            <div className="square empty"></div>
                            <div className="square"></div>
                            <div className="square empty"></div>
                        </div>
                    </div>
                    <div className="first-screen-content">
                        <div className="empty-div"></div>
                        <div className="first-screen-text">
                            <h1>
                                <span>
                                </span>Welcome To <span>Pahu Design</span>
                            </h1>
                            <h2>You are in good hand with us</h2>
                        </div>
                        <div className="empty-div"></div>
                    </div>
                </div>
            </section>

            <section className="why-choose-us">
                <div className="container">
                    <div className="why-choose-us-title">
                        <h2>Why choose us</h2>
                        <p>
                        </p>
                    </div>
                    <div className="why-choose-us-content">
                        <div className="why-choose-us-text">
                            <div className="why-choose-us-features">
                                <div className="text-part">
                                    <span>Modern design</span>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nostrum obcaecati omnis libero velit voluptate veniam</p>
                                </div>
                                <div className="icon">
                                    <img src={Images["why-choose-us-modern-design.png"]} className="Modern_1" alt="Инструменты" />
                                </div>
                            </div>
                            <div className="why-choose-us-features">
                                <div className="text-part">
                                    <span>Unique quality</span>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nostrum obcaecati omnis libero velit voluptate veniam</p>
                                </div>
                                <div className="icon">
                                    <img src={Images["Unique.png"]} className="Unique_1" alt="Звезда" />
                                </div>
                            </div>
                        </div>
                        <div className="why-choose-us-armchair">
                            <img src={Images["Layer 14.png"]} className="armchair" alt="Кресло жёлтое" />
                        </div>
                        <div className="why-choose-us-text">
                            <div className="why-choose-us-features">
                                <div className="icon">
                                    <img src={Images["Honest.png"]} className="Honest_2" alt="Карточка" />
                                </div>
                                <div className="text-part">
                                    <span>Honest prices</span>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nostrum obcaecati omnis libero velit voluptate veniam</p>
                                </div>
                            </div>
                            <div className="why-choose-us-features">
                                <div className="icon">
                                    <img src={Images["Support.png"]} className="Support_2" alt="Звонок" />
                                </div>
                                <div className="text-part">
                                    <span>Great support</span>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nostrum obcaecati omnis libero velit voluptate veniam</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="examples container grid-container">
                <div className="patio-example" id="patio-example">
                    <img src={Images["examplepatio.png"]} />
                    <div className="example-description">
                        <h2 className="h2-examples">Patio<br/> furniture <br/>Vietnam</h2>
                        <a href="https://www.behance.net/gallery/51790647/PAHU-Free-PSD-Website-Template" target="_blank"
                            className="example-card">View detail <i className="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
                    <div className="plane-example" id="plane-example">
                        <img src={Images["exampleplane.png"]} />
                    </div>
                    <div className="design-example" id="design-example">
                        <img src={Images["exampledesign.png"]} />
                        <div className="example-description">
                            <h2 className="h2-examples">Design by<br/> Jarnet Park <br/>Trend 2017</h2>
                            <a href="https://www.behance.net/gallery/51790647/PAHU-Free-PSD-Website-Template" target="_blank"
                                className="example-card">View detail <i className="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                    <div className="ceramics-example" id="ceramics-example">
                        <img src={Images["exampleceramic.png"]} />
                        <div className="example-description">
                            <h2 className="h2-examples">Ceramics <br/>Wm <br/>Munoz</h2>
                            <a href="https://www.behance.net/gallery/51790647/PAHU-Free-PSD-Website-Template" target="_blank"
                                className="example-card">View detail <i className="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                    <div className="apples-example" id="apples-example">

                        <img src={Images["exampleapples.png"]} />
                    </div>

            </section>




            <section className="our-collection">
                <div className="heading-col">
                    <h1><span id="our-col">Our </span><span id="h1-collection">collection</span></h1>
                    <img src={Images["rhomb.png"]} />
                </div>
                <div className="container flex-container">
                    <div className="item-collection">

                        <div className="hover-container flex-container container">
                            <div className="buttons-hover flex-container container">
                                <div><button className="button-hover"><i className="fas fa-search"></i></button></div>
                                <div><button className="button-hover"><i className="fas fa-shopping-cart"></i></button></div>
                                <div><button className="button-hover"><i className="far fa-heart"></i></button></div>

                            </div>
                        </div>
                        <a href="https://www.behance.net/gallery/51790647/PAHU-Free-PSD-Website-Template" target="_blank"
                            className="item-card">
                            <img src={Images["chair1.png"]} />
                            <img className="new-chair" src={Images["new.png"]} />
                            <div className="card-content">
                                <h2>Corona chair</h2>
                                <p className="item-description">Printed evening dress with straight sleeves</p>
                                <p className="price">$14.86</p>
                            </div>
                        </a>

                    </div>
                    <div className="item-collection">
                        <div className="hover-container flex-container container">
                            <div className="buttons-hover flex-container container">
                                <div><button className="button-hover"><i className="fas fa-search"></i></button></div>
                                <div><button className="button-hover"><i className="fas fa-shopping-cart"></i></button></div>
                                <div><button className="button-hover"><i className="far fa-heart"></i></button></div>

                            </div>
                        </div>
                        <a href="https://www.behance.net/gallery/51790647/PAHU-Free-PSD-Website-Template" target="_blank"
                            className="item-card">
                            <img src={Images["chair7.png"]} />
                            <div className="card-content">
                                <h2>Corona chair</h2>
                                <p className="item-description">Printed evening dress with straight sleeves</p>
                                <p className="price">$14.86</p>
                            </div>
                        </a>

                    </div>
                    <div className="item-collection">
                        <div className="hover-container flex-container container">
                            <div className="buttons-hover flex-container container">
                                <div><button className="button-hover"><i className="fas fa-search"></i></button></div>
                                <div><button className="button-hover"><i className="fas fa-shopping-cart"></i></button></div>
                                <div><button className="button-hover"><i className="far fa-heart"></i></button></div>

                            </div>
                        </div>

                        <img src={Images["chair3.png"]} />
                        <img className="new-chair" src={Images["new.png"]} />
                        <div className="card-content">
                            <h2>Corona chair</h2>
                            <p className="item-description">Printed evening dress with straight sleeves</p>
                            <p className="price">$14.86</p>
                        </div>


                    </div>
                    <div className="item-collection">
                        <div className="hover-container flex-container container">
                            <div className="buttons-hover flex-container container">
                                <div><button className="button-hover"><i className="fas fa-search"></i></button></div>
                                <div><button className="button-hover"><i className="fas fa-shopping-cart"></i></button></div>
                                <div><button className="button-hover"><i className="far fa-heart"></i></button></div>

                            </div>
                        </div>

                        <img src={Images["chair4.png"]} />
                        <div className="card-content">
                            <h2>Corona chair</h2>
                            <p className="item-description">Printed evening dress with straight sleeves</p>
                            <p className="price">$14.86</p>
                        </div>



                    </div>
                    <div className="item-collection">
                        <div className="hover-container flex-container container">
                            <div className="buttons-hover flex-container container">
                                <div><button className="button-hover"><i className="fas fa-search"></i></button></div>
                                <div><button className="button-hover"><i className="fas fa-shopping-cart"></i></button></div>
                                <div><button className="button-hover"><i className="far fa-heart"></i></button></div>

                            </div>
                        </div>

                        <img src={Images["chair5.png"]} />
                        <div className="card-content">
                            <h2>Corona chair</h2>
                            <p className="item-description">Printed evening dress with straight sleeves</p>
                            <p className="price">$14.86</p>
                        </div>


                    </div>
                    <div className="item-collection">
                        <div className="hover-container flex-container container">
                            <div className="buttons-hover flex-container container">
                                <div><button className="button-hover"><i className="fas fa-search"></i></button></div>
                                <div><button className="button-hover"><i className="fas fa-shopping-cart"></i></button></div>
                                <div><button className="button-hover"><i className="far fa-heart"></i></button></div>

                            </div>
                        </div>

                        <img src={Images["chair6.png"]} />
                        <div className="card-content">
                            <h2>Corona chair</h2>
                            <p className="item-description">Printed evening dress with straight sleeves</p>
                            <p className="price">$14.86</p>
                        </div>


                    </div>
                    <div className="item-collection">
                        <div className="hover-container flex-container container">
                            <div className="buttons-hover flex-container container">
                                <div><button className="button-hover"><i className="fas fa-search"></i></button></div>
                                <div><button className="button-hover"><i className="fas fa-shopping-cart"></i></button></div>
                                <div><button className="button-hover"><i className="far fa-heart"></i></button></div>

                            </div>
                        </div>

                        <img src={Images["chair7.png"]} />
                        <img className="new-chair" src={Images["new.png"]} />
                        <div className="card-content">
                            <h2>Corona chair</h2>
                            <p className="item-description">Printed evening dress with straight sleeves</p>
                            <p className="price">$14.86</p>
                        </div>


                    </div>
                    <div className="item-collection">
                        <div className="hover-container flex-container container">
                            <div className="buttons-hover flex-container container">
                                <div><button className="button-hover"><i className="fas fa-search"></i></button></div>
                                <div><button className="button-hover"><i className="fas fa-shopping-cart"></i></button></div>
                                <div><button className="button-hover"><i className="far fa-heart"></i></button></div>

                            </div>
                        </div>

                        <img src={Images["chair8.png"]} />
                        <div className="card-content">
                            <h2>Corona chair</h2>
                            <p className="item-description">Printed evening dress with straight sleeves</p>
                            <p className="price">$14.86</p>
                        </div>


                    </div>

                </div>
                <div className="button-more"><button className="our-collection-more" value="Show more" id="show-more-button" >Show more</button></div>
            </section>
            <section className="our-designers">
                <div className="heading">
                    <h1><span id="our">Our </span><span id="h1designer">designer</span></h1>
                    <img src={Images["rhomb.png"]} />
                </div>
                <div className="container flex-container">
                    <div className="designer1">
                        <img src={Images["designer1.png"]} id="imgdes" />
                        <p>Bertil Stam</p>
                        <img src={Images["chessfield.png"]} id="chessfield1" />
                    </div>
                    <div className="designer2">
                        <img src={Images["designer2.png"]} id="imgdes" />
                        <p>Janet Park</p>
                        <img src={Images["chessfield.png"]} id="chessfield2" />
                    </div>
                    <div className="designer3">
                        <img src={Images["designer3.png"]} id="imgdes" />
                        <p>Wm Munoz</p>
                        <img src={Images["chessfield.png"]} id="chessfield3" />
                    </div>
                </div>
            </section>
            <section className="our-project">
                <div className="container">
                    <div className="our-projects-title">
                        <h2>Our projects</h2>
                        <p>
                        </p>
                    </div>
                    <div className="our-projects-samples">
                        <div className="project-dark-layer">
                        </div>
                        <div className="project" id="project-1">
                            <h3>Modern living room</h3>
                            <p>Interior design</p>
                        </div>
                        <div className="project" id="project-2">
                            <h3>Modern living room</h3>
                            <p>Interior design</p>
                        </div>
                        <div className="project" id="project-3">
                            <h3>Modern living room</h3>
                            <p>Interior design</p>
                        </div>
                        <div className="project" id="project-4">
                            <h3>Modern living room</h3>
                            <p>Interior design</p>
                        </div>
                        <div className="project" id="project-5">
                            <h3>Modern living room</h3>
                            <p>Interior design</p>
                        </div>
                        <div className="project" id="project-6">
                            <h3>Modern living room</h3>
                            <p>Interior design</p>
                        </div>
                        <div className="project" id="project-7">
                            <h3>Modern living room</h3>
                            <p>Interior design</p>
                        </div>
                        <div className="project" id="project-8">
                            <h3>Modern living room</h3>
                            <p>Interior design</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="from-our-blog">
                <div className="container">
                    <div className="from-our-blog-title">
                        <h2>From our blog</h2>
                        <p>
                        </p>
                    </div>
                    <div className="from-our-blog-posts">
                        <div className="blog-post">
                            <img src={Images["our-new-workspace.png"]} />
                            <div className="blog-post-text">
                                <h3>Our new work space</h3>
                                <p>Feel alive! So if you’re looking for, here is a list of some of the most popular and fiestas the Mardin has to offer thisfiestas the Mardin has to offer!</p>
                                <a href="https://google.com" target="_blank">
                                    Read more
                                </a>
                            </div>
                        </div>
                        <div className="blog-post">
                            <img src={Images["modern-trend-collection.png"]} />
                            <div className="blog-post-text">
                                <h3>Modern trend collection</h3>
                                <p>Feel alive! So if you’re looking for, here is a list of some of the most popular and fiestas the Mardin has to offer thisfiestas the Mardin has to offer!</p>
                                <a href="https://google.com" target="_blank">
                                    Read more
                                </a>
                            </div>
                        </div>
                        <div className="blog-post">
                            <img src={Images["a-woman-thinking.png"]} />
                            <div className="blog-post-text">
                                <h3>A woman thinking</h3>
                                <p>Feel alive! So if you’re looking for, here is a list of some of the most popular and fiestas the Mardin has to offer thisfiestas the Mardin has to offer!</p>
                                <a href="https://google.com" target="_blank">
                                    Read more
                                </a>
                            </div>      
                        </div>
                    </div>
                </div>
            </section>
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
                                <img src={Images["Logo.png"]} />
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
        </div>
    );    
}   

export default App;
