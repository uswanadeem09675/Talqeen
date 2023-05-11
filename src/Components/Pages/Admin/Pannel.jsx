// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router-dom';

// function ToggleButton() {
//     let { id } = useParams();
//     const [isDataVisible, setIsDataVisible] = useState(false);
//     const token = localStorage.getItem('token')
//     const [video, setVideo] = useState([])
//     const toggleData = () => {
//         setIsDataVisible(!isDataVisible);
//     };

//     const getVideo = async () => {
//         console.log(id, "getvideo id in getvideo");
//         let reqOptions = {
//             url: `${process.env.REACT_APP_BASE_URL}admin/videos`,
//             method: "GET",
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': 'Bearer ' + token
//             },
//         }
//         let response = await axios.request(reqOptions);
//         setVideo(response.data.data);
//         console.log(response.data.data, "single video data");
//     }
//     useEffect(() => {
//         getVideo();
//     }, [video])
//     const single = video.map((item) => {
//         // console.log(item.description, "value getting from filter side")
//         return (
//             <div className="col-md-4" key={id}>
//                 <div className="card mb-4 product-wap rounded-0 p-0">
//                     <Link to={`/videodetail/${item.id}`}>
//                         <div className="card rounded-0 p-0">
//                             <img className="card-img rounded-0 img-fluid" src={`${process.env.REACT_APP_BASE_IMG}images/${item.image}`} alt={item.name} />
//                             <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
//                             </div>
//                         </div>
//                     </Link>
//                     <div className="card-body">
//                         <Link to={`/videodetail/${item.id}`} className="h3 text-decoration-none">  <p>{item.description.slice(0, 100) + '...'}</p></Link>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
//     );
//     return (
//         <div>
//             <button onClick={toggleData}>
//                 {isDataVisible ? 'Show Less' : 'Show More'}
//             </button>
//             {isDataVisible && (
//                 <div>
//                     {
//                         single.length > 0 ? single : "no video"
//                     }
//                 </div>
//             )}
//         </div>
//     );
// }
// export default ToggleButton
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router';
// import { Link } from 'react-router-dom';

// function ToggleButton() {
//     const [posts, setPosts] = useState([]);
//     const [showFullContent, setShowFullContent] = useState(false);
//     let { id } = useParams();
//     const token = localStorage.getItem('token')
//     const getVideo = async () => {
//         console.log(id, "getvideo id in getvideo");
//         let reqOptions = {
//             url: `${process.env.REACT_APP_BASE_URL}admin/videos`,
//             method: "GET",
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': 'Bearer ' + token
//             },
//         }
//         let response = await axios.request(reqOptions);
//         setPosts(response.data.data);
//         console.log(response.data.data, "single video data");
//     }
//     useEffect(() => {
//         getVideo()
//     }, []);

//     const toggleShowFullContent = () => {
//         setShowFullContent(!showFullContent);
//     };

//     const displayContent = showFullContent ? posts : posts.slice(0, posts.length / 2);

//     //             // console.log(item.description, "value getting from filter side")
//     //             return (
//     //                 <div className="col-md-4" key={id}>
//     //                     <div className="card mb-4 product-wap rounded-0 p-0">
//     //                         <Link to={`/videodetail/${item.id}`}>
//     //                             <div className="card rounded-0 p-0">
//     //                                 <img className="card-img rounded-0 img-fluid" src={`${process.env.REACT_APP_BASE_IMG}images/${item.image}`} alt={item.name} />
//     //                                 <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
//     //                                 </div>
//     //                             </div>
//     //                         </Link>
//     //                         <div className="card-body">
//     //                             <Link to={`/videodetail/${item.id}`} className="h3 text-decoration-none">  <p>{item.description.slice(0, 100) + '...'}</p></Link>
//     //                         </div>
//     //                     </div>
//     //                 </div>
//     //             )
//     //         }
//     //         );
//     return (
//         <div>
//             {displayContent.map((item) => {
//                 return (

//                         <div className="col-md-4" key={id}>
//                        <div className="card mb-4 product-wap rounded-0 p-0">
//                             <Link to={`/videodetail/${item.id}`}>
//                              <div className="card rounded-0 p-0">
//                                     <img className="card-img rounded-0 img-fluid" src={`${process.env.REACT_APP_BASE_IMG}images/${item.image}`} alt={item.name} />
//                                      <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
//                                     </div>
//                                 </div>
//                             </Link>
//                             <div className="card-body">
//                                 <Link to={`/videodetail/${item.id}`} className="h3 text-decoration-none">  <p>{item.description.slice(0, 100) + '...'}</p></Link>
//                              </div>
//                          </div>
//                     </div>

//                 )
//             })}
//             <button onClick={toggleShowFullContent}>
//                 {showFullContent ? 'Show Less' : 'Show More'}
//             </button>
//         </div>
//     );
// }
// export default ToggleButton;


import React, { useState, useEffect } from 'react';
import YouTube from '@u-wave/react-youtube';
import axios from 'axios';
import { useForm } from 'react-hook-form';



// function ToggleButton() {
//     const [videoId, setVideoId] = useState('');

//     const token = localStorage.getItem('token')
//     const sendData = async () => {
//         let reqOptions = {
//             url: `${process.env.REACT_APP_BASE_URL}admin/videos`,
//             method: "GET",
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': 'Bearer ' + token
//             },
//         }
//         let response = await axios.request(reqOptions);
//         setVideoId(response.data.data);
//         console.log(response.data.data, "from user side ");
//     }
//     useEffect(() => {
//         sendData();
//     }, [])

//     return (
//         <YouTube
//             video={videoId}
//             width={640}
//             height={360}
//             autoplay
//             loop
//             showRelatedVideos={false}

//         />
//     );

// }

// export default ToggleButton

// import { useForm } from 'react-hook-form';

// function ToggleButton() {
//     const { register, handleSubmit, watch, errors } = useForm();
//     const onSubmit = (data) => console.log(data);

//     const password = watch('password');
//     const confirmPassword = watch('confirmPassword');

//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <label htmlFor="password">Password</label>
//             <input
//                 type="password"
//                 name="password"

//             // {...register({
//             //     required: 'Password is required',
//             //     minLength: {
//             //         value: 8,
//             //         message: 'Password must be at least 8 characters long',
//             //     },
//             // })}
//             />
//             <input type="password"
//                 name="password" ref={register('password', { required: 'Password is required' })} />

//             {errors.password && <p>{errors.password.message}</p>}

//             <label htmlFor="confirmPassword">Confirm Password</label>
//             <input
//                 type="password"
//                 name="confirmPassword"
//                 ref={register({
//                     validate: (value) =>
//                         value === password || 'Passwords do not match',
//                 })}
//             />
//             {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

//             <button type="submit">Submit</button>
//         </form>
//     );
// }
// export default ToggleButton



// function ToggleButton() {
//     const { register, handleSubmit, errors } = useForm();

//     const onSubmit = (values) => { console.log(values); };

//     return (
//         <div>
//             <form onSubmit={e => e.preventDefault()}>
//                 <label>Password</label>
//                 <input
//                     name="password"
//                     type="password"
//                     ref={register({
//                         required: "You must specify a password",
//                         minLength: {
//                             value: 8,
//                             message: "Password must have at least 8 characters"
//                         }
//                     })}
//                 />
//                 {errors.password && <p>{errors.password.message}</p>}

//                 <label>Repeat password</label>
//                 <input
//                     name="password_repeat"
//                     type="password"
//                     ref={register({
//                         validate: value =>
//                             value === password.current || "The passwords do not match"
//                     })}
//                 />
//                 {errors.password_repeat && <p>{errors.password_repeat.message}</p>}

//                 <input type="submit" onClick={handleSubmit(onSubmit)} />
//             </form>
//             );
//         </div>
//     );
// }

// export default ToggleButton



// function ToggleButton() {
//     const [loggedIn, setLoggedIn] = useState(false);
//     const [token, setToken] = useState(null);

//     const handleLogin = async () => {
//         let resp = await axios.post(`${process.env.REACT_APP_BASE_URL}login`);
//         // let role = resp.data.data?.role == null;
//         let role = "admin"
//         localStorage.setItem('token', resp.data.data?.token);
//         localStorage.setItem('role', role);
//         setLoggedIn(true);
//         setToken(resp.data.token);
//     };
//     // const sigOut = async (data) => {
//     //     let resp = await axios.post(`${process.env.REACT_APP_BASE_URL}login`, data);
//     //     // let role = resp.data.data?.role == null;
//     //     let role = "admin"
//     //     localStorage.setItem('token', resp.data.data?.token);
//     //     localStorage.setItem('role', role);
//     //     if (role == role) {
//     //         move('/')
//     //     } else if (role == "admin") {
//     //         move('/dashboard')
//     //     } else {
//     //         alert("not user ");
//     //         toast.error("Not a user")
//     //     }
//     // }
//     const handleLogout = () => {
//         setLoggedIn(false);
//         setToken(null);
//     };

//     return (
//         <div>
//             {loggedIn ? (
//                 <div>
//                     {/* your authenticated app content here */}
//                     <button onClick={handleLogout}>Logout</button>
//                 </div>
//             ) : (
//                 <div>
//                     <button onClick={handleLogin}>Login</button>
//                 </div>
//             )}
//         </div>
//     );
// }
// export default ToggleButton


// function ToggleButton() {
//     const [password, setPassword] = useState('');
//     const [showPassword, setShowPassword] = useState(false);

//     const handlePasswordChange = (event) => {
//         setPassword(event.target.value);
//     };

//     const handleTogglePassword = () => {
//         setShowPassword(!showPassword);
//     };

//     return (
//         <div>
//             <label htmlFor="password">Password</label>
//             <input
//                 type={showPassword ? 'text' : 'password'}
//                 id="password"
//                 value={password}
//                 onChange={handlePasswordChange}
//             />
//             <button onClick={handleTogglePassword}>
//                 {showPassword ? 'Hide' : 'Show'}

//                 {/* {showPassword ? <i class="fad fa-eye"></i>: <i class="fas fa-eye-slash"></i>} */}
//                 {showPassword ?  <i class="fas fa-eye-slash"></i> :<i class="fas fa-eye"></i>}
//             </button>
//         </div>
//     );
// }
// export default ToggleButton;

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
export default function ToggleButton() {
    // const telRef = useRef();
    const formSchema = Yup.object().shape({
        password: Yup.string()
            .required('Password is mendatory')
            .min(3, 'Password must be at 3 char long'),
        confirmPwd: Yup.string()
            .required('Password is mendatory')
            .oneOf([Yup.ref('password')], 'Passwords does not match'),
        tel: Yup
            .string()
            // .matches(
            //     /^\+(?:[0-9] ?){6,14}[0-9]$/,
            //     "Please enter a valid phone number with country code"
            // )
            .required("Phone number is required"),
    })
    const formOptions = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, reset, formState } = useForm(formOptions)
    const { errors } = formState
    function onSubmit(data) {
        console.log(JSON.stringify(data, null, 4))
        console.log(data);
        return false
    }
    return (
        <div className="container mt-5">
            <h2>React Confirm Password Validation Example</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        name="password"
                        type="password"
                        {...register('password')}
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{errors.password?.message}</div>
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                        name="confirmPwd"
                        type="password"
                        {...register('confirmPwd')}
                        className={`form-control ${errors.confirmPwd ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{errors.confirmPwd?.message}</div>
                </div>
                <input name="tel" ref={register('tel')} />
                {errors.tel && <p>{errors.tel.message}</p>}
                <div className="mt-3">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}