import React, { useEffect, useState } from 'react'
import AddVideo from './AddVideo'
import "../admin.css"
import axios from 'axios'
import Edit from './Edit'
import AdminSide from '../AdminSide'
import { Link } from 'react-router-dom'
import View from './View'
function AdminVideo() {
    // api data get 
    const token = localStorage.getItem('token')
    const [video, setVideo] = useState([])
    const [userCount, setUserCount] = useState(0);
    const getVideo = async () => {
        let reqOptions = {
            url: `${process.env.REACT_APP_BASE_URL}admin/videos`,
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        }
        let response = await axios.request(reqOptions);
        setVideo(response.data.data);
        setUserCount(response.data.data.length);
    }
    useEffect(() => {
        getVideo();
    }, [video])
    const deleteData = async (post) => {
        setVideo(video.filter((d) => d.id !== post.id))
        await axios.delete(`${process.env.REACT_APP_BASE_URL}admin/videos/${post.id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        });
    }
    // hello world 
    const displayData = video.map((post, index) => {
        const { id, name, url, category_id, image, status, subcategory_id, description } = post
        return (
            <tr>
                <th scope="row" key={index}>{index + 1}</th>
                <td>{name}</td>
                <td>{url}</td>
                <td>{category_id}</td>
                <td><img src={`${process.env.REACT_APP_BASE_IMG}images/${image}`} alt={name} style={{ width: "150px" }} /></td>
                {/* <td>{subcategory_id}</td> */}
                <td>{description}</td>
                <td>{status}</td>
                <td>
                    <button type="button" className="btn btn-warning text-light ms-2 " style={{ color: "#082465 !important" }} onClick={() => {
                        deleteData(post)
                    }}>
                        <i class="fas fa-trash-alt"></i>
                    </button>
                    <button type="button" className="btn btn-warning ms-2 my-1" style={{ color: "#082465 !important" }}>
                        <Edit id={id} name={name} url={url} category_id={category_id} status={status} description={description} />
                    </button>
                    <button type="button" className="btn btn-warning ms-2 " style={{ color: "#082465 !important" }}>
                        <View id={id} name={name} url={url} />
                    </button>
                </td>
            </tr >
        )
    })
    return (
        <React.Fragment>
            <div className="grid-container">
                {/* <header className="header">
                    <div className="menu-icon">
                        <span className="material-icons-outlined">
                            <i class="fas fa-bars"></i>
                        </span>
                    </div>
                </header> */}
                <aside id="sidebar">
                    <div className="sidebar-title">
                        <div className="sidebar-brand">
                            <Link to='/dashboard' className='text-warning text-decoration-none'>
                                <span className="material-icons-outlined">
                                    Admin-Logo
                                </span>
                            </Link>
                        </div>
                    </div>
                    <AdminSide />
                </aside>
                <main className="main-container">
                    <div className="main-title">
                        <p className="font-weight-bold">VIDEO</p>
                        <p className='text-warning font-weight-bold'>Number of Video: {userCount}</p>
                        <AddVideo />
                    </div>
                    <table id="example" className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Url</th>
                                <th scope="col">Categories</th>
                                <th scope="col">Image</th>
                                {/* <th scope="col">Sub_Categories</th> */}
                                <th scope="col">Description</th>
                                <th scope="col" >Status</th>
                                <th scope="col" >Operate</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                displayData
                            }
                        </tbody>
                    </table>
                </main>
            </div>
        </React.Fragment>
    )
}
export default AdminVideo