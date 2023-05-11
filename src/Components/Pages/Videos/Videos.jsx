import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';
function Videos() {
    const [posts, setPosts] = useState([]);
    const [showFullContent, setShowFullContent] = useState(false);
    let { id } = useParams();
    const token = localStorage.getItem('token')
    const getVideo = async () => {
        console.log(id, "getvideo id in getvideo");
        let reqOptions = {
            url: `${process.env.REACT_APP_BASE_URL}admin/videos`,
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        }
        let response = await axios.request(reqOptions);
        setPosts(response.data.data);
        console.log(response.data.data, "single video data");
    }
    useEffect(() => {
        getVideo()
    }, []);
    const toggleShowFullContent = () => {
        setShowFullContent(!showFullContent);
    };

    const displayContent = showFullContent ? posts : posts.slice(0, posts.length / 2);
    //     let { id, image, name, description } = item
    //     return (
    //         <div className="col-md-4" key={id}>
    //             <div className="card mb-4 product-wap rounded-0 p-0">
    //                 <Link to={`/videodetail/${id}`}>
    //                     <div className="card rounded-0 p-0">
    //                         <img className="card-img rounded-0 img-fluid" src={`${process.env.REACT_APP_BASE_IMG}images/${image}`} alt={name} />
    //                         <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
    //                         </div>
    //                     </div>
    //                 </Link>
    //                 <div className="card-body">
    //                     <Link to={`/videodetail/${id}`} className="h3 text-decoration-none">  <p>{description.slice(0, 100) + '...'}</p></Link>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // });
    return (
        <React.Fragment>
            {/* Halmet tag for SEO */}
            <Helmet>
                <title> Video services - WebTechSofts</title>
                <meta property="og:site_name" content="WebTechSofts" />
            </Helmet>
            {/* end of tags */}
            <section className='h-100'>
                <div className="container py-5 mt-5 h-100">
                <h2 className="main-heading ">
                           Video
                        </h2>
                    <div className="row">
                        <div className=" single_video layout_padding">                   
                            <div className="row">
                                {displayContent.map((item) => {
                                    return (

                                        <div className="col-md-4" key={id}>
                                            <div className="card mb-4 product-wap rounded-0 p-0">
                                                <Link to={`/videodetail/${item.id}`}>
                                                    <div className="card rounded-0 p-0">
                                                        <img className="card-img rounded-0 img-fluid" src={`${process.env.REACT_APP_BASE_IMG}images/${item.image}`} alt={item.name} />
                                                        <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                                        </div>
                                                    </div>
                                                </Link>
                                                <div className="card-body">
                                                    <Link to={`/videodetail/${item.id}`} className="h3 text-decoration-none">  <p>{item.description.slice(0, 100) + '...'}</p></Link>
                                                </div>
                                            </div>
                                        </div>

                                    )
                                })}
                                <div className="d-flex justify-content-center mt-5">
                                    <Link to="/video" className="call_to-btn " onClick={toggleShowFullContent}>
                                    {showFullContent ? 'Show Less' : 'Show More'} 
                                        
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </React.Fragment>
    )
}

export default Videos