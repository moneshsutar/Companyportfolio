import React, { Fragment } from 'react'

function About() {
  return (
    <Fragment>
        <div className="col py-3 d-flex align-items-center about-image"> 

            <div className="container">
                <div className="row">




                    <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
                        <div>
                            <h1 className="font-big text-red slide-in-top">About us</h1>
                            <hr></hr>
                            <p className='slide-in-bottom'>We are Technology Company where we can teach technology to students in varoius domains
                            </p>
                            <p className='slide-in-bottom'>
                                Current course we Teach<br></br>
                                Full stack Web Development <br></br>
                                Android Development <br></br>
                                Data Science
                            </p>
                            
                            <p className='slide-in-bottom'>
                                .<br></br>
                                The technology we worked on : <span className="text-red ls-2">Reactjs , Nodejs , MongoDB , Python, Asp.Net Core, Asp.Net Mvc, <br></br>
                                C#, Sql, Html, Css, Js, Bootstrap , MERN Stack , Android Development etc...  </span>
                            </p>
                            <p className='slide-in-bottom'>
                                Currently Learning Batch starts From 15/09/2022 register fast......
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <img className="img-fluid" src="../images/nomad-amico.png" alt="..."></img>
                    </div>



                </div>
            </div>

            
        </div>
    </Fragment>
  )
}

export default About