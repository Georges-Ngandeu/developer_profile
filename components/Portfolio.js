import React from 'react'
import dynamic from 'next/dynamic'

const Portfolio = () => {
    return (
        <div className="main-container">
            <section className="iq-portfolio wrapper">
                <div className="container-fluid h-100">
                    <div className="row row-eq-height h-100">
                        <div className="col-md-3 purple-bg">
                            <div className="iq-objects">
                                <span className="iq-objects-01">
                                    <img className="img-fluid" src="images/01.png" alt="drive"/>
                                </span>
                            </div>
                        </div>
                        <div className="col-md-9 main-content align-self-center">
                            <div id="boxscroll" className="inner-box">
                                <div className="iq-plr-40">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="main-title iq-mb-20">
                                    <small>My Featured Work</small>
                                    <h1 className="display-4 iq-tw-8 iq-font-purple">My Portfolio</h1>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="isotope-filters">
                                    <button data-filter="" className="active"> View All</button>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="isotope popup-gallery">
                                    <div className="grid-item web-design graphic-design clearfix">
                                        <div className="portfolio-item clearfix">
                                            <img src="images/portfolio/01.jpg" alt="img04"/>
                                            <div className="overlay">
                                                <h4>work item one</h4>
                                                <span>jones</span>
                                                <div className="item-link">
                                                    <a className="popup-img" href="images/portfolio/01.jpg"><span className="ti-plus"></span></a>
                                                    <a href="#"><span className="ti-link"></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid-item web-design">
                                        <div className="portfolio-item">
                                            <img src="images/portfolio/02.jpg" alt="img04"/>
                                            <div className="overlay">
                                                <h4>work item one</h4>
                                                <span>jones</span>
                                                <div className="item-link">
                                                    <a className="popup-img" href="images/portfolio/02.jpg"><span className="ti-plus"></span></a>
                                                    <a href="#"><span className="ti-link"></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid-item website-templates">
                                        <div className="portfolio-item">
                                            <img src="images/portfolio/03.jpg" alt="img04"/>
                                            <div className="overlay">
                                                <h4>work item one</h4>
                                                <span>jones</span>
                                                <div className="item-link">
                                                    <a className="popup-img" href="images/portfolio/03.jpg"><span className="ti-plus"></span></a>
                                                    <a href="#"><span className="ti-link"></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid-item graphic-design">
                                        <div className="portfolio-item">
                                            <img src="images/portfolio/04.jpg" alt="img04"/>
                                            <div className="overlay">
                                                <h4>work item one</h4>
                                                <span>jones</span>
                                                <div className="item-link">
                                                    <a className="popup-img" href="images/portfolio/04.jpg"><span className="ti-plus"></span></a>
                                                    <a href="#"><span className="ti-link"></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid-item web-design">
                                        <div className="portfolio-item">
                                            <img src="images/portfolio/05.jpg" alt="img04"/>
                                            <div className="overlay">
                                                <h4>work item one</h4>
                                                <span>jones</span>
                                                <div className="item-link">
                                                    <a className="popup-img" href="images/portfolio/05.jpg"><span className="ti-plus"></span></a>
                                                    <a href="#"><span className="ti-link"></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid-item">
                                        <div className="portfolio-item">
                                            <img src="images/portfolio/06.jpg" alt="img04"/>
                                            <div className="overlay">
                                                <h4>work item one</h4>
                                                <span>jones</span>
                                                <div className="item-link">
                                                    <a className="popup-img" href="images/portfolio/06.jpg"><span className="ti-plus"></span></a>
                                                    <a href="#"><span className="ti-link"></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid-item website-templates">
                                        <div className="portfolio-item">
                                            <img src="images/portfolio/07.jpg" alt="img04"/>
                                            <div className="overlay">
                                                <h4>work item one</h4>
                                                <span>jones</span>
                                                <div className="item-link">
                                                    <a className="popup-img" href="images/portfolio/07.jpg"><span className="ti-plus"></span></a>
                                                    <a href="#"><span className="ti-link"></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid-item website-templates">
                                        <div className="portfolio-item">
                                            <img src="images/portfolio/08.jpg" alt="img04"/>
                                            <div className="overlay">
                                                <h4>work item one</h4>
                                                <span>jones</span>
                                                <div className="item-link">
                                                    <a className="popup-img" href="images/portfolio/08.jpg"><span className="ti-plus"></span></a>
                                                    <a href="#"><span className="ti-link"></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Portfolio
