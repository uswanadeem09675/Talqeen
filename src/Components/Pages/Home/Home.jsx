import React from 'react'
import arrow from "../../assets/images/right-arrow.png";
import hero from "../../assets/images/hero.png"
import { Link } from 'react-router-dom';
import About from '../About/About';
import Videos from '../Videos/Videos';
import FeedBack from '../FeedBack/FeedBack';
import VideoSlider from '../VideosSlider/VideoSlider';

function Home() {
    return (
        <React.Fragment>
            <section className="hero_section ">
                <div className="hero-container container">
                    <div className="hero_detail-box">
                        <h3>
                            Welcome to <br /> Best educations
                        </h3>
                        <h1>school</h1>
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
                            some form, by injected humour, or randomised
                        </p>
                        <div className="hero_btn-continer">
                            <Link to="/contact" className="call_to-btn btn_white-border">
                                <span>
                                    Contact
                                </span>
                                <img src={arrow} alt="arrow" />
                            </Link>
                        </div>
                    </div>
                    <div className="hero_img-container">
                        <div>
                            <img src={hero} alt="hero" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
            <About />
            <Videos />
            <VideoSlider />
            <FeedBack />
        </React.Fragment>
    )
}

export default Home