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
                                            <img src="images/portfolio/mern_ecommerce.png" alt="img04"/>
                                            <div className="overlay">
                                                <h4>Mern Ecommerce</h4>
                                                <span>Modern ecommerce demonstration</span>
                                                <div className="item-link">
                                                    <a className="popup-img" target='_' href="https://www.mernecommerce.biitlab.org/"><span className="ti-plus"></span></a>
                                                    <a href="#"><span className="ti-link"></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid-item web-design">
                                        <div className="portfolio-item">
                                            <img src="images/portfolio/web_developer_profile.png" alt="img04"/>
                                            <div className="overlay">
                                                <h4>Web developer profile</h4>
                                                <span>NextJs demonstration app</span>
                                                <div className="item-link">
                                                    <a className="popup-img" target='_' href="https://www.georgesngandeu.biitlab.org/"><span className="ti-plus"></span></a>
                                                    <a href="#"><span className="ti-link"></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid-item website-templates">
                                        <div className="portfolio-item">
                                            <img src="images/portfolio/afrikpay_documentation.png" alt="img04"/>
                                            <div className="overlay">
                                                <h4>Api documentation</h4>
                                                <span>React demonstration</span>
                                                <div className="item-link">
                                                    <a className="popup-img" target='_' href="https://developer.afrikpay.com/"><span className="ti-plus"></span></a>
                                                    <a href="#"><span className="ti-link"></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid-item graphic-design">
                                        <div className="portfolio-item">
                                            <img src="images/portfolio/sales_afrikpay_dashboard.png" alt="img04"/>
                                            <div className="overlay">
                                                <h4>Admin dashboard demonstration</h4>
                                                <span>Angular and Flask demonstration</span>
                                                <div className="item-link">
                                                    <a className="popup-img" target='_' href="https://sales.afrikpay.com/"><span className="ti-plus"></span></a>
                                                    <a href="#"><span className="ti-link"></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid-item web-design">
                                        <div className="portfolio-item">
                                            <img src="images/portfolio/wordpress_custom.png" alt="img04"/>
                                            <div className="overlay">
                                                <h4>Custom wordpress blog</h4>
                                                <span>Custom wordpress theme demonstration</span>
                                                <div className="item-link">
                                                    <a className="popup-img" target='_' href="https://www.cabinetmanguele.biitlab.org/"><span className="ti-plus"></span></a>
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
