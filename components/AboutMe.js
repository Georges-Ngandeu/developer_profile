import React from 'react'
import Link from 'next/link'

const AboutMe = () => {
    return (
        <div className="main-container">
        <section className="me-about wrapper">
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
                        <div id="boxscroll" className="iq-home about-us">
                            <div className="home-deta iq-mt-80">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="boder-img">
                                            <img src="images/georges2.png" className="img-fluid" alt="#"/>
                                        </div>
                                    </div>
                                    <div className="col-md-8 content-deta">
                                        <div className="main-title">
                                            <small>Know About Me</small>
                                            <h1 className="display-4 iq-tw-8 iq-font-purple">About Me</h1>
                                        </div>
                                        <p className="iq-tw-4 iq-mt-10 iq-mb-20">
                                            I am a programming addict, I enjoy building useful applications.
                                            I think everybody should at least learn one programming language just to see
                                            how fun it is to build software applications. I enjoy the process of going from
                                            an idea to a simple or complex product.
                                        </p>
                                    <ul className="contact-info">
                                        <li> <span className="iq-tw-6">Name :</span> Georges Ngandeu</li>
                                        <li> <span className="iq-tw-6">Phone :</span> 237 696668110</li>
                                        <li> <span className="iq-tw-6">Address :</span> Yaoundé, Jouvence</li>
                                        <li> <span className="iq-tw-6">Nationality :</span> Cameroon </li>
                                        <li><span className="iq-tw-6">Gender :</span> Male</li>
                                        <li> <span className="iq-tw-6">Email : </span>
                                            <Link href="#">
                                                <a style ={{color: '#07aaf5'}}>
                                                    georgesngandeu@gmail.com
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                    <Link className="nav-link"  href="/resume">
                                        <a className="button">Resume</a>
                                    </Link>
                                    <Link className="nav-link" data-type="page-transition" href="/contact">
                                        <a className="button iq-ml-20">Hire me</a>
                                    </Link>
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

export default AboutMe
