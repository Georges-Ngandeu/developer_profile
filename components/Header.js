import React from 'react'
import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'

const Header = () => {
    const [current, setCurrent] =  useState('')
    const [toggle, setToggle] =  useState(false)

    useEffect(() => {
        process.browser && setCurrent(window.location.pathname)
    }, [process.browser && window.location.pathname])

    const router = useRouter()

    const toggleMenu = () => {
        if(toggle === false){
            setToggle(true)
        }else{
            setToggle(false)
        }
    }

    const show = (toggle) ? "collapse navbar-collapse show" : "collapse navbar-collapse" ;

    return (
        <header className="header">
            <div className="container-fluid">
                <div className="row">
                    <nav className="navbar fixed-top navbar-expand-lg navbar-light white-bg">
                        <div className="col-md-3 purple-bg">
                            <Link dataType="page-transition" href="/">
                                <a className="navbar-brand"><img src="images/logo.png" className="img-fluid" alt="logo"/></a>
                            </Link>
                        </div>
                        <div className="col-md-9">
                            <button 
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                                onClick={ () => toggleMenu() }
                            >
                                <span className="ti-menu"></span>
                            </button>
                            <div className={show} id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto w-100 justify-content-end">
                                    <li className={router.pathname == "/" ? "nav-item active" : "nav-item"} key="/" onClick={(evt) => setCurrent(evt.key)}>
                                        <Link dataType="page-transition" href="/">
                                            <a className="nav-link">Home</a>
                                        </Link>
                                    </li>
                                    <li className={router.pathname == "/aboutme" ? "nav-item active" : "nav-item"} key="/aboutme" onClick={(evt) => setCurrent(evt.key)}>
                                        <Link dataType="page-transition" href="/aboutme">
                                            <a className="nav-link" href="">About Me</a>
                                        </Link>
                                    </li>
                                    <li className={router.pathname == "/resume" ? "nav-item active" : "nav-item"} key="/resume" onClick={(evt) => setCurrent(evt.key)}>
                                        <Link dataType="page-transition" href="/resume">
                                            <a className="nav-link">Resume</a>
                                        </Link>
                                    </li>
                                    <li className={router.pathname == "/portfolio" ? "nav-item active" : "nav-item"} key="/portfolio" onClick={(evt) => setCurrent(evt.key)}>
                                        <Link className="nav-link" dataType="page-transition" href="/portfolio">
                                            <a className="nav-link">Portfolio</a>
                                        </Link>
                                    </li>
                                    <li className={router.pathname == "/contact" ? "nav-item active" : "nav-item"} key="/contact" onClick={(evt) => setCurrent(evt.key)}>
                                        <Link className="nav-link" dataType="page-transition" href="/contact">
                                            <a className="nav-link">Contact</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
