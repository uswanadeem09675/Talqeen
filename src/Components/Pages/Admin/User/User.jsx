import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AdminSide from '../AdminSide'
import UserEdit from './UserEdit'
import { Link } from 'react-router-dom'
// import $ from 'jquery'; 
function User() {
    const [userData, setuserData] = useState([])
    const token = localStorage.getItem('token')
    // counter Number
    const [userCount, setUserCount] = useState(0);  
    const getUser = async () => {
        let reqOptions = {
            url: `${process.env.REACT_APP_BASE_URL}admin/users`,
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        }
        let response = await axios.request(reqOptions);
        setuserData(response.data.data);
        setUserCount(response.data.data.length)
    }
    const handleDelete = async (post) => {
        setuserData(userData.filter((d) => d.id !== post.id))
        await axios.delete(`${process.env.REACT_APP_BASE_URL}admin/users/${post.id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        });
    }
    useEffect(() => {
        getUser();
    }, [userData])

    let display = userData.map((post, index) => {
        let { id, name, status, email, password, role, mobile } = post
        return (
            <tr>
                <th scope="row" key={id}>{index + 1}</th>
                <td>{name}</td>
                <td>{status}</td>
                <td>{email}</td>
                <td>{password}</td>
                <td>{role}</td>
                <td>{mobile}</td>
                <td>
                    <button type="button" class="btn btn-warning  text-light" style={{ color: "white !important " }} onClick={() => handleDelete(post)}>
                        <i class="fas fa-trash-alt"></i>
                    </button>
                    <button type="button" class="btn btn-warning ms-2" style={{ color: "#082465 !important" }}>
                        <UserEdit id={id} name={name} status={status} email={email} role={role} password={password} />
                    </button>
                </td>
            </tr>
        )
    })
    return (
        <React.Fragment>
            <React.Fragment>
                <div class="grid-container">
                    <header className="header">
                        {/* <div className="menu-icon">
                            <span className="material-icons-outlined">
                                <i class="fas fa-bars"></i>
                            </span>
                        </div> */}
                    </header>
                    <aside id="sidebar">
                        <div class="sidebar-title">
                            <div class="sidebar-brand">
                                <Link to='/dashboard' className='text-warning text-decoration-none'>
                                    <span class="material-icons-outlined">
                                        Admin-Logo
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <AdminSide />
                    </aside>
                    <main className="main-container">
                        <div className="main-title">
                            <p className="font-weight-bold">User</p>
                            <p className='text-warning font-weight-bold'>Number of User: {userCount}</p>
                        </div>
                        <table className="table table-striped" id="example" role="example">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    {/* <th scope="col">Father Name</th> */}
                                    {/* <th scope="col">City</th>
                                    <th scope="col">Country</th> */}
                                    <th scope="col">Status</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Password</th>
                                    <th scope="col">Role</th>
                                    {/* <th scope="col">Status</th> */}
                                    <th scope="col">Mobile</th>
                                    <th scope="col">Operation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    display
                                }
                            </tbody>
                        </table>
                  
                    </main>
                </div>
            </React.Fragment>
        </React.Fragment>
    )
}

export default User