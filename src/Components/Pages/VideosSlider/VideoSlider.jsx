import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
function VideoSlider() {
    const [user, setUser] = useState([])
    const token = localStorage.getItem('token')
    const [posts, setPosts] = useState([]);
    const [showFullContent, setShowFullContent] = useState(false);
    const sendData = async () => {
        let reqOptions = {
            url: `${process.env.REACT_APP_BASE_URL}admin/video/category`,
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        }
        let response = await axios.request(reqOptions);
        setPosts(response.data.data);
        console.log(response.data.data, "from user side ");
    }
    useEffect(() => {
        sendData();
    }, [])
    const toggleShowFullContent = () => {
        setShowFullContent(!showFullContent);
    };
    const displayContent = showFullContent ? posts : posts.slice(0, posts.length / 2);

    return (
        <React.Fragment>
            <section className="teacher_section layout_padding h-100">
                <div className="container h-100">
                    <div className='row'>

                        <h2 className="main-heading ">
                            Category
                        </h2>
                        <p className="text-center video_para mt-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolorum voluptatum eveniet aliquam, repudiandae molestiae in ipsa tenetur doloremque incidunt sit temporibus accusamus omnis ad eum ex placeat distinctio vitae!
                        </p>
                        <div className="teacher_container layout_padding2">
                            <div className="card-deck">
                                {
                                    displayContent.map((item) => {
                                        let { id, name, image } = item
                                        return (
                                            <div class="col-6 col-md-4">
                                                <div className="card" key={id}>
                                                    <Link to={`/singlecategory/${id}`} className='text-decoration-none'>
                                                        <img className="card-img-top" src={image} alt={name} />
                                                        <div className="card-body">
                                                            <h5 className="card-title text-wrap text-break w-100">{name}</h5>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                
                            </div>
                            <div className="d-flex justify-content-center mt-5">
                                    <Link to="/categories" className="call_to-btn " onClick={toggleShowFullContent}>
                                        {showFullContent ? 'Show Less' : 'Show More'}
                                    </Link>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment >
    )
}
export default VideoSlider