import React from 'react'
import student from "../../assets/images/student.png";

function FeedBack() {
    return (
        <React.Fragment>
            <section className="client_section layout_padding">
                <div className="container">
                    <h2 className="main-heading">
                        Our Students Feedback
                    </h2>
                    <p className="text-center video_para mt-3">
                        There are many variations of passages of Lorem Ipsum available, but the majority hThere are many variations of
                        passages of Lorem Ipsum available, but the majority h
                    </p>
                    <div className="layout_padding2">
                        <div className="client_container d-flex flex-column">
                            <div className="client_detail d-flex align-items-center">
                                <div className="client_img-box ">
                                    <img src={student} alt="student_image" />
                                </div>
                                <div className="client_detail-box">
                                    <h4>
                                        Veniam Quis
                                    </h4>
                                    <span>
                                        (exercitation)
                                    </span>
                                </div>
                            </div>
                            <div className="client_text mt-4 ">
                                <p >
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                    ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat
                                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                                    anim id est laborum."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default FeedBack