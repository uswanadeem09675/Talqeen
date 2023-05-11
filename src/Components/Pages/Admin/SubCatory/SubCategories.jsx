import React, { useState, useEffect } from 'react'
import "../admin.css"
import AddSub from './AddSub';
import axios from 'axios';
import SubEdit from './SubEdit';
import AdminSide from '../AdminSide';
import { Link } from 'react-router-dom';

function SubCategories() {
    let token = localStorage.getItem('token')
    console.log(token);
    // api data get 
    const [subcategoryItem, setsubcategoryItem] = useState([])
    const getSubCategory = async () => {
        let reqOptions = {
            url: `${process.env.REACT_APP_BASE_URL}admin/video/subcategory`,
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        }
        let response = await axios.request(reqOptions);
        setsubcategoryItem(response.data.data);
    }
    useEffect(() => {
        getSubCategory();
    }, [])
    
    const deleteData = async (post) => {
        setsubcategoryItem(subcategoryItem.filter((d) => d.id !== post.id))
        const res = await axios.delete(`${process.env.REACT_APP_BASE_URL}admin/video/subcategory/${post.id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        });
    }
    const displayCategories = subcategoryItem.map((post) => {
        let { id, name, category_id } = post
        return (
            <tr>
                <th scope="row">{id}</th>
                <td>{category_id}</td>
                <td>{name}</td>
                <td>
                    <button type="button" class="btn btn-warning text-light" style={{ color: "#082465 !important" }}
                        onClick={() => {
                            deleteData(post)
                        }}>
                        <i class="fas fa-trash-alt"></i>
                    </button>
                    <button type="button" class="btn btn-warning ms-2" style={{ color: "#082465 !important" }}>
                        <SubEdit id={id} name={name} category_id={category_id} />
                    </button>
                </td>
            </tr>
        )
    })

    return (
        <React.Fragment>
            <div class="grid-container">
                {/* <header className="header">
                    <div className="menu-icon">
                        <span className="material-icons-outlined">
                            <i class="fas fa-bars"></i>
                        </span>
                    </div>
                </header> */}
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
                        <p className="font-weight-bold">SUBCATEGORY</p>
                        <AddSub/>
                    </div>
                    <table id="example" className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Categories</th>
                                <th scope="col">Sub Categories</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                displayCategories
                            }
                        </tbody>
                    </table>
                </main>
            </div>
        </React.Fragment>
    )
}

export default SubCategories