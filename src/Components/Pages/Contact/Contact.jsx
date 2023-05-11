import React from 'react'
import { useForm } from 'react-hook-form'
function Contact() {
    let data = useForm();
    const Contact = (data) => {
        console.log(data);
    }
    return (
        <React.Fragment>
            <section className="contact_section layout_padding">
                <div className="container">
                    <h2 className="main-heading">
                        Contact Now
                    </h2>
                    <p className="text-center">
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    </p>
                    <div className>
                        <div className="contact_section-container">
                            <div className="row">
                                <div className="col-md-6 mx-auto">
                                    <div className="contact-form">
                                        <form onSubmit={data.handleSubmit(Contact)}>
                                            <div>
                                                <input type="text" id="user_name" placeholder="Name"   {...data.register("user_name")} />
                                                {data.formState.errors.user_name && <div className="error"> Please enter your First Name</div>}
                                            </div>
                                            <div>
                                                <input type="text" placeholder="Phone Number"   {...data.register("example")} />

                                            </div>
                                            <div>
                                                <input type="email" placeholder="Email" />
                                            </div>
                                            <div>
                                                <input type="text" placeholder="Message" className="input_message" />
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <button
                                                    type="submit"
                                                    className="btn btn-warning btn-lg"
                                                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem", color: "#fefeff" }}
                                                >
                                                    send
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </React.Fragment >
    )
}

export default Contact