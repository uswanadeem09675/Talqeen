import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./admin.css"
function AdminSide() {
    let move = useNavigate()
    const handleLogout = (event) => {
        event.preventDefault();
        let token = localStorage.removeItem('token', "");
        let role = localStorage.removeItem('role', "")
        console.log(token, role);
        move('/login')
    }
    return (
        <React.Fragment>
            <ul className="sidebar-list" id="menu">
                <Link to="/dashboard" className='text-warning text-decoration-none'>
                    <li className="sidebar-list-item">
                        <span className="material-icons-outlined"></span> Dashboard
                    </li>
                </Link>
                <Link to="/adminvideo" className='text-warning text-decoration-none'>
                    <li className="sidebar-list-item">
                        <span className="material-icons-outlined"></span>Video
                    </li>
                </Link>
                <li className="w-100 sidebar-list-items" >
                            <Link to="/Admincategories" className="nav-link">
                                <span className="d-none d-sm-inline text-warning">Category</span>
                            </Link>
                        </li>
                {/*drop down  */}
                {/* <li className="sidebar-list-items">
                    <a href="#submenu2" data-bs-toggle="collapse" className="nav-link align-middle"> <i className="fs-4 bi-bootstrap" /> <span className="ms-1 d-none d-sm-inline text-warning">Categories</span>
                    </a>
                    <ul className="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                        <li className="w-100 sidebar-list-items" >
                            <Link to="/Admincategories" className="nav-link">
                                <span className="d-none d-sm-inline text-warning">Category</span>
                            </Link>
                        </li>
                        <li className='w-100 sidebar-list-items'>
                            <Link to="/subCategories" className="nav-link">
                                <span className="d-none d-sm-inline text-warning">Sub Category</span>
                            </Link>
                        </li>
                    </ul>
                </li> */}
                <Link to="/user" className='text-warning text-decoration-none'>
                    <li className="sidebar-list-item">
                        <span className="material-icons-outlined"></span> User
                    </li>
                </Link>
                {/* admin pannel */}
                <Link to="/login"
                    className="nav-link align-middle ">
                    <li className="sidebar-list-items">
                        <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" class="rounded-circle" />
                        <span className="d-none d-sm-inline text-warning" onClick={handleLogout}>Logout</span>
                    </li>
                </Link>
            </ul>
        </React.Fragment >
    )
}

export default AdminSide