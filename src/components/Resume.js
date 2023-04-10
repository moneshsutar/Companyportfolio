import React, { Fragment } from 'react'


function Resume() {
  return (
    <Fragment>
        <div className="col p-4"> 
            <div className="p-4 bg-dark slide-in-top">
                
                <div className="row">
                    <div className="col-6">
                        <h2 className="ff-jose fw-bold ls-2">Coding Club</h2>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="ff-jose ls-2">Award</h4>
                        <ul>
                            <li>
                                <h4 className="ff-jose my-1 text-red">Best Tech Cources</h4>
                                <h6 className="blue-label px-2 py-1">Apr 2022</h6>
                                <p className="m-0">TOI Org India</p>
                                <p>India</p>
                            </li>
                            <li>
                                <h4 className="ff-jose my-1 text-red">No 1 For Learing Institute</h4>
                                <h6 className="blue-label px-2 py-1">June 2021</h6>
                                <p className="m-0">Forbes India</p>
                                <p>India</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        
                        <h4 className="ff-jose ls-2">Tie With Colleges</h4>
                        <ul>
                            <li>
                                <h4 className="ff-jose my-1 text-red">IIT Bombay</h4>
                                <h6 className="blue-label px-2 py-1">2017 - 2025</h6>
                                <p className="m-0">Indian Institute Of Technology Bombay</p>
                                <p>Rank: AIR 1</p>
                            </li>
                            <li>
                                <h4 className="ff-jose my-1 text-red">IIT Delhi</h4>
                                <h6 className="blue-label px-2 py-1">2017-2025</h6>
                                <p className="m-0">Indian Institute Of technology Delhi</p>
                                <p>Rank: AIR 2</p>
                            </li>
                        </ul>

                    </div>
                </div>

                <hr></hr>
                
                <div className="row">
                    <div className="col-md-6">
                        {/* <h4 className="ff-jose ls-2">PROFILE</h4>
                        <h1>
                            <a href="" target="/blank" className="text-white text-decoration-none mx-2">
                                <SiCodechef className="zoom-on-hover"/>
                            </a> 
                            <a href="" target="/blank" className="text-white text-decoration-none mx-2">
                                <SiHackerrank className="zoom-on-hover"/>
                            </a> 
                        </h1> */}
                    </div>
                </div>
                
            </div>
        </div>
    </Fragment>
  )
}

export default Resume