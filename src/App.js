import React, {Component} from 'react';
import './App.scss';
import Header from './components/header/header.js';
import FirstScreen from './components/first-screen/first-screen.js';
import TitleTemplate from './components/title-template/title-template.js';
import CollectionItem from './components/collection-item/collection-item.js';
import Images from './ImagesImporter.js';
import Footer from './components/footer/footer.js';
import BlogPost from './components/blog-post/blog-post.js';
import SliderArrows from './components/slider-arrows/slider-arrows.js';
import ProjectSample from './components/project-sample/project-sample';


function App() {
    return (
        <div className="App">

            <Header />

            <FirstScreen />

            <section className="why-choose-us">
                <div className="container">
                    <TitleTemplate className="why-choose-us-title" title="Why choose us" />
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
                <TitleTemplate className="our-collection-title" title="Our colection" />
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
                    <CollectionItem />
                </div>
                <div className="button-more"><button className="our-collection-more" value="Show more" id="show-more-button" >Show more</button></div>
            </section>

            <section className="our-designers">
                <TitleTemplate className="our-designers-title" title="Our designers" />
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
                    <TitleTemplate className="our-projects-title" title="Our projects" />
                    <div className="our-projects-samples">
                        <SliderArrows className="project-dark-layer" />
                        <ProjectSample id={"project-1"} heading={"Modern living room"} description={"Interior design"} />
                        <ProjectSample id={"project-2"} heading={"Modern living room"} description={"Interior design"} />
                        <ProjectSample id={"project-3"} heading={"Modern living room"} description={"Interior design"} />
                        <ProjectSample id={"project-4"} heading={"Modern living room"} description={"Interior design"} />
                        <ProjectSample id={"project-5"} heading={"Modern living room"} description={"Interior design"} />
                        <ProjectSample id={"project-6"} heading={"Modern living room"} description={"Interior design"} />
                        <ProjectSample id={"project-7"} heading={"Modern living room"} description={"Interior design"} />
                        <ProjectSample id={"project-8"} heading={"Modern living room"} description={"Interior design"} />
                    </div>
                </div>
            </section>

            <section className="from-our-blog">
                <div className="container">
                    <TitleTemplate className="from-our-blog-title" title="From our blog" />
                    <div className="from-our-blog-posts">
                        <BlogPost image={Images["our-new-workspace.png"]} title={"Our new workspace"} text={"Feel alive! So if you’re looking for, here is a list of some of the most popular and fiestas the Mardin has to offer thisfiestas the Mardin has to offer!"} link={"https://ya.ru"} />
                        <BlogPost image={Images["modern-trend-collection.png"]} title={"Modern trend collection"} text={"Feel alive! So if you’re looking for, here is a list of some of the most popular and fiestas the Mardin has to offer thisfiestas the Mardin has to offer!"} link={"https://ya.ru"} />
                        <BlogPost image={Images["a-woman-thinking.png"]} title={"A woman thinking"} text={"Feel alive! So if you’re looking for, here is a list of some of the most popular and fiestas the Mardin has to offer thisfiestas the Mardin has to offer!"} link={"https://ya.ru"} />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );    
}   

export default App;
