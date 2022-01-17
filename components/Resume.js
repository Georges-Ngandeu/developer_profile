import React from 'react'

const Resume = () => {

    const education = [
        {
            'degree': 'Bachelor Degree',
            'key': '1',
            'school': 'Université des montagnes',
            'description': 'I did a Bachelor Degree of Technology in Biomedical Equipment Instrumentation',
            'start': '2011',
            'end': '2012'
        },
        {
            'degree': 'Master Degree',
            'key': '2',
            'school': 'Université des montagnes',
            'description': 'I did a Master Degree in Biomedical Engineering with a minor in Software Engineering',
            'start': '2013',
            'end': '2015'
        },
        {
            'degree': 'Master Degree',
            'key': '3',
            'school': 'Université de Yaoundé I',
            'description': 'I studied Information System and Software Engineering',
            'start': '2017',
            'end': '2018'
        }
    ]

    const experiences = [
        {
            'position': 'Fullstack Developer',
            'key': '1',
            'company': 'Freelancing',
            'description': 'I was learning web technologies and exercising myself building web pages and applications with fundamental technologies then later using frameworks',
            'start': '2015',
            'end': '2017'
        },
        {
            'position': 'Front End Developer',
            'key': '2',
            'company': 'Madia',
            'description': 'I was involved in gathering requirements, building low and high-fidelity prototypes, building rich web interfaces. Sometimes involve in basic backend service implementation.',
            'start': '2017',
            'end': '2018'
        },
        {
            'position': 'Fullstack Web Developer',
            'key': '3',
            'company': 'Scottia Telecom',
            'description': 'I was in charge of web application projects, building apps from start to finish. Implementing backend and frontend functionalities.',
            'start': '2018',
            'end': '2019'
        },
        {
            'position': 'Fullstack Web Developer',
            'key': '4',
            'company': 'Freelancing',
            'description': 'I was in charge of web application projects, i developed applicattion products and services for Bara Technology and Upgrade Group, two local companies. Implementaing backend and frontend functionalities.',
            'start': '2019',
            'end': '2019'
        },
        {
            'position': 'Senior Fullstack Web Developer',
            'key': '5',
            'company': 'Afrikpay',
            'description': 'I was in charge of web application projects, I developed financial applications products and services using various technologies.',
            'start': '2019',
            'end': '2021'
        }
    ]

    const technologies_skills = []
    
    const languages_skills = []

    return (
        <div className="main-container">
            <section className="iq-resume wrapper">
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
                                <div className="resume-deta iq-plr-40">
                                    <div className="row white-bg">
                                        <div className="col-md-12">
                                            <div className="main-title">
                                                <small>My Work Experience</small>
                                                <h1 className="display-4 iq-tw-8 iq-font-purple">Resume</h1>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h3 className="title iq-tw-8">Education</h3>
                                            <ul className="education">
                                                { education.map(formation => (
                                                    <li key={formation.key}>
                                                        <span></span>
                                                        <div>
                                                            <div className="lead iq-tw-6 iq-font-black">{formation.degree}</div>
                                                            <div className="type iq-font-purple">{formation.school}</div>
                                                            <div className="info">{formation.description}</div>
                                                        </div>
                                                        <span className="number">
                                                            <span>{formation.start}</span>
                                                            <span>{formation.end}</span>
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <h3 className="title iq-tw-8">Experience</h3>
                                            <ul className="education">
                                                { experiences.map(experience => (
                                                    <li key={experience.key}>
                                                        <span></span>
                                                        <div>
                                                            <div className="lead iq-tw-6 iq-font-black">{experience.position}</div>
                                                            <div className="type iq-font-purple">{experience.company}</div>
                                                            <div className="info">{experience.description}</div>
                                                        </div>
                                                        <span className="number">
                                                            <span>{experience.start}</span>
                                                            <span>{experience.end}</span>
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="interests-deta grey-bg iq-pall-40 iq-mtb-50">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h3 className="title iq-tw-8 iq-mt-0">My Interests</h3>
                                            <ul className="interests">
                                                <li>
                                                    <i className="fa fa-music" aria-hidden="true"></i>
                                                    <h6>Music</h6>
                                                </li>
                                                <li>
                                                    <i className="fa fa-file-video-o" aria-hidden="true"></i>
                                                    <h6>Watch Movies</h6>
                                                </li>
                                                <li>
                                                    <i className="fa fa-picture-o" aria-hidden="true"></i>
                                                    <h6>Photography</h6>
                                                </li>
                                                <li>
                                                    <i className="fa fa-gamepad" aria-hidden="true"></i>
                                                    <h6>Gaming</h6>
                                                </li>
                                                <li>
                                                    <i className="fa fa-plane" aria-hidden="true"></i>
                                                    <h6>Traveling</h6>
                                                </li>
                                                <li>
                                                    <i className="fa fa-bicycle" aria-hidden="true"></i>
                                                    <h6>Bicycling</h6>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="skills iq-plr-40 iq-mt-80">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-md-6">
                                            <div className="skill-content">
                                                <h3 className="title iq-tw-8 iq-mt-0">Technology skills</h3>
                                                <p className="iq-mb-25">
                                                    A simple list of my technologies skills. 
                                                </p>
                                            </div>
                                            <div className="iq-progress-bar-linear">
                                                <p className="iq-progress-bar-text iq-font-black">React
                                                    <span>90/100</span>
                                                </p>
                                                <div className="iq-progress-bar">
                                                    <span data-percent="90" style={{width: '90%'}}></span>
                                                </div>
                                            </div>
                                            <div className="iq-progress-bar-linear">
                                                <p className="iq-progress-bar-text iq-font-black">NodeJs
                                                    <span>90/100</span>
                                                </p>
                                                <div className="iq-progress-bar">
                                                    <span data-percent="90" style={{width: '90%'}}></span>
                                                </div>
                                            </div>
                                            <div className="iq-progress-bar-linear iq-font-black">
                                                <p className="iq-progress-bar-text">NextJs
                                                    <span>90/100</span>
                                                </p>
                                                <div className="iq-progress-bar">
                                                    <span data-percent="90" style={{width: '90%'}}></span>
                                                </div>
                                            </div>
                                            <div className="iq-progress-bar-linear iq-font-black">
                                                <p className="iq-progress-bar-text">Flask
                                                    <span>90/100</span>
                                                </p>
                                                <div className="iq-progress-bar">
                                                    <span data-percent="90" style={{width: '90%'}}></span>
                                                </div>
                                            </div>
                                            <div className="iq-progress-bar-linear iq-font-black">
                                                <p className="iq-progress-bar-text">Mongo
                                                    <span>80/100</span>
                                                </p>
                                                <div className="iq-progress-bar">
                                                    <span data-percent="80" style={{width: '80%'}}></span>
                                                </div>
                                            </div>
                                            <div className="iq-progress-bar-linear iq-font-black">
                                                <p className="iq-progress-bar-text">Bootstrap
                                                    <span>90/100</span>
                                                </p>
                                                <div className="iq-progress-bar">
                                                    <span data-percent="90" style={{width: '90%'}}></span>
                                                </div>
                                            </div>
                                            <div className="iq-progress-bar-linear iq-font-black">
                                                <p className="iq-progress-bar-text">React Native
                                                    <span>70/100</span>
                                                </p>
                                                <div className="iq-progress-bar">
                                                    <span data-percent="70" style={{width: '70%'}}></span>
                                                </div>
                                            </div>
                                            <div className="iq-progress-bar-linear iq-font-black">
                                                <p className="iq-progress-bar-text">Mysql
                                                    <span>90/100</span>
                                                </p>
                                                <div className="iq-progress-bar">
                                                    <span data-percent="90" style={{width: '90%'}}></span>
                                                </div>
                                            </div>
                                            <div className="iq-progress-bar-linear iq-font-black">
                                                <p className="iq-progress-bar-text">GraphQl
                                                    <span>70/100</span>
                                                </p>
                                                <div className="iq-progress-bar">
                                                    <span data-percent="70" style={{width: '70%'}}></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-md-6">
                                            <div className="skill-content">
                                                <h3 className="title iq-tw-8 iq-mt-0">Programming langage skills</h3>
                                                <p className="iq-mb-25">
                                                    A simple list of my programming language skills.
                                                </p>
                                            </div>
                                            <div className="iq-progress-bar-linear iq-font-black">
                                                <p className="iq-progress-bar-text">HTML
                                                    <span>95/100</span>
                                                </p>
                                                <div className="iq-progress-bar">
                                                    <span data-percent="95" style={{width: '95%'}}></span>
                                                </div>
                                            </div>
                                            <div className="iq-progress-bar-linear iq-font-black">
                                                <p className="iq-progress-bar-text">Css
                                                    <span>90/100</span>
                                                </p>
                                                <div className="iq-progress-bar">
                                                    <span data-percent="90" style={{width: '90%'}}></span>
                                                </div>
                                            </div>
                                            <div className="iq-progress-bar-linear iq-font-black">
                                                <p className="iq-progress-bar-text">Php
                                                    <span>90/100</span>
                                                </p>
                                                <div className="iq-progress-bar">
                                                    <span data-percent="90" style={{width: '90%'}}></span>
                                                </div>
                                            </div>
                                            <div className="iq-progress-bar-linear iq-font-black iq-mb-0">
                                                <p className="iq-progress-bar-text">Javascript
                                                    <span>95/100</span>
                                                </p>
                                                <div className="iq-progress-bar">
                                                    <span data-percent="95" style={{width: '90%'}}></span>
                                                </div>
                                            </div>
                                            <div className="iq-progress-bar-linear iq-font-black iq-mb-0">
                                                <p className="iq-progress-bar-text">Python
                                                    <span>90/100</span>
                                                </p>
                                                <div className="iq-progress-bar">
                                                    <span data-percent="90" style={{width: '90%'}}></span>
                                                </div>
                                            </div>
                                            <div className="iq-progress-bar-linear iq-font-black iq-mb-0">
                                                <p className="iq-progress-bar-text">C
                                                    <span>70/100</span>
                                                </p>
                                                <div className="iq-progress-bar">
                                                    <span data-percent="70" style={{width: '70%'}}></span>
                                                </div>
                                            </div>
                                            <div className="iq-progress-bar-linear iq-font-black iq-mb-0">
                                                <p className="iq-progress-bar-text">C++
                                                    <span>70/100</span>
                                                </p>
                                                <div className="iq-progress-bar">
                                                    <span data-percent="70" style={{width: '70%'}}></span>
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

export default Resume
