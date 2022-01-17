import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 purple-bg">
                        <div className="footer-copyright text-white">
                            Copyright @ <span id="copyright">
                            2022
                            </span>
                            <a className="text-white" href="#"> Profyl.</a>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <ul className="follow-us pull-right">
                            <li>Follow Me :</li>
                            <li><a target='_' href="https://www.linkedin.com/in/georges-ngandeu-95339660/"><i className="fa fa-linkedin"></i></a></li>
                            <li><a target='_' href="https://github.com/Georges-Ngandeu"><i className="fa fa-github"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
