import React from 'react'
import Typist from 'react-typist';

const Presentation = () => {
    return (
        <div className="main-container">
            <section className="me-home wrapper">
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
                            <div id="boxscroll" className="iq-home">
                                <div className="home-deta iq-mt-90">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="boder-img">
                                                <img src="images/georges.png" className="img-fluid" alt="#"/>
                                            </div>
                                        </div>
                                        <div className="col-md-8 content-deta">
                                            <h2 className="iq-tw-8 ">Hello,<br/>I Am Georges Ngandeu,</h2>
                                            <Typist cursor={{show: false}}>
                                                <h1><span className="iq-font-purple">Fullstack</span> Web Developer</h1>
                                            </Typist>
                                            <br />
                                            <p className="lead iq-tw-4">
                                                Software engineering is my passion, I can spend weeks exploring software engineering concepts and technologies.
                                                I have experience with Javascript, Python, C, C++, and PHP. But I most enjoy programming with javascript and python.
                                                The technologies I enjoy using are React, Node, Mongo, NextJs, React Native, Flask, Docker, Laravel, Symfony, WordPress,
                                                and GraphQl.   
                                            </p>
                                            <a className="button iq-mt-30" href="#">Download my CV</a>
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

export default Presentation
