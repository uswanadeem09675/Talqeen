import React, { useEffect, useState } from 'react'
import "./admin.css"
import AdminSide from './AdminSide'
import { Link } from 'react-router-dom'
import { adminDashbord } from './adminDashbord'
function Admin() {
    const [total, setTotal] = useState(0)
    //  open and  closed
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };


    const closeSidebar = () => {
        document.getElementById("mySidenav").style.width = "0";
    }
    let Dashboard = adminDashbord.map((item) => {
        let { id, name, url } = item
        return (
            <div className="card">
                <Link to={url} className='text-decoration-none' >
                    <div className="card-inner">
                        <p className="text-primary ">{name}</p>
                        <p className="text-warning ">{ } </p>
                    </div>
                </Link>
            </div>
        )
    })
    return (
        <React.Fragment>
            <div class="grid-container">
                <header className="header">
                    <div className="menu-icon" >  
                    </div>
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
                        <p className="font-weight-bold">DASHBOARD</p>
                    </div>
                    <div className="main-cards ">
                        {
                            Dashboard
                        }
                    </div>

                </main>


            </div>
        </React.Fragment >
    )
}

export default Admin




