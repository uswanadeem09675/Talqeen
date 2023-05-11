import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
function Login() {

    let move = useNavigate();
    const formSchema = Yup.object().shape({
        email: Yup.string().required('Email is required'),
        password: Yup.string()
            .required('Password is mendatory')
            .min(10, 'Password must be at 10 char long'),
    })
    const formOptions = { resolver: yupResolver(formSchema) }
    let data = useForm(formOptions);
    const sigOut = async (data) => {
        let resp = await axios.post(`${process.env.REACT_APP_BASE_URL}login`, data);
        // let role = resp.data.data?.role == null;
        let role = "admin"
        localStorage.setItem('token', resp.data.data?.token);
        localStorage.setItem('role', role);
        if (role == role) {
            move('/')
        } else if (role == "admin") {
            move('/dashboard')
        } else {
            alert("not user ");
            toast.error("Not a user")
        }
    }
    return (
        <React.Fragment>
            <section className="h-100 " style={{ margin: "100px" }}>
                <div className="container-fluid h-custom h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <h1 style={{ textAlign: "center", color: "#fec913" }}>Login</h1>
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="img-fluid"
                                alt="Sample image"
                            />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 mt-5">
                            <form onSubmit={data.handleSubmit(sigOut)}>
                                {/* Email Input */}
                                <div className="form-outline mb-4">
                                    <label className="form-label text-warning" htmlFor="email">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Enter a  email address"
                                        {...data.register('email')}
                                        className={`form-control ${data.formState.errors.email ? 'is-invalid' : ''}`}
                                    />
                                    <div className="error">{data.formState.errors.email?.message}</div>
                                </div>
                                {/* Password input */}
                                <div className="form-outline mb-3">
                                    <label className="form-label text-warning" htmlFor="password">
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        placeholder="Enter password"
                                        name="password"
                                        type="password"
                                        {...data.register('password')}
                                        className={`form-control ${data.formState.errors.password ? 'is-invalid' : ''}`}
                                    />
                                    <div className="error">{data.formState.errors.password?.message}</div>


                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    {/* Checkbox */}
                                    <div className="form-check mb-0">
                                        <input
                                            className="form-check-input me-2"
                                            type="checkbox"
                                            defaultValue=""
                                            id="form2Example3"
                                        />
                                        <label className="form-check-label" htmlFor="form2Example3">
                                            Remember me
                                        </label>
                                    </div>
                                    <Link to="" className="text-body">
                                        Forgot password?
                                    </Link>
                                </div>
                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button
                                        type="submit"
                                        className="btn btn-warning btn-lg w-100"
                                        style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem", color: "#fefeff" }}>
                                        Login
                                    </button>
                                    <ToastContainer />
                                    <p className="small fw-bold mt-2 pt-1 mb-0">
                                        Don't have an account?
                                        <Link to="/register" className="link-warning">
                                            Register
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section >
        </React.Fragment >
    )
}

export default Login