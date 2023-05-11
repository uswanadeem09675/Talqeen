import React from 'react'
import kids from "../../assets/images/kids.jpg"
import arrow from "../../assets/images/right-arrow.png"
import { Link } from 'react-router-dom'

function About() {
    return (
        <React.Fragment>
                <section className="about_section layout_padding">
                    <div className="container">
                        <h2 className="main-heading ">
                            About School
                        </h2>
                        <p className="text-center">
                            There are many variations of passages of Lorem Ipsum available, but the majority hThere are many variations of
                            passages of Lorem Ipsum available, but the majority h
                        </p>
                        <div className="about_img-box ">
                            <img src={kids} alt="kids" className="img-fluid w-100" />
                        </div>
                        <div className="d-flex justify-content-center mt-5">
                            <Link to="/video" className="call_to-btn  ">
                                <span>Read More</span>
                                <img src={arrow} alt="arrow" />
                            </Link>
                        </div>
                    </div>
                </section>
        </React.Fragment>
    )
}

export default About