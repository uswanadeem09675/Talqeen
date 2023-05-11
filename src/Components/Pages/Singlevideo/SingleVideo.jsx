import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from "axios"
import { Helmet } from 'react-helmet';
function SingleVideo() {
    let { id } = useParams();
    console.log(id, "singleVideo");
    // here get the array item and store into variable
    const token = localStorage.getItem('token')
    const [video, setVideo] = useState([])
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
        setVideo(response.data.data);
        console.log(response.data.data, "single video data");
    }
    useEffect(() => {
        getVideo();
    }, [])
    const single = video.filter((p) => p.category_id == id).map((item) => {
        console.log(item.category_id, "map id ", id);
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
                        <Link to={`/videodetail/${item.id}`} className="h3 text-decoration-none"> 
                         <p>{item.description.slice(0, 100) + '...'}</p></Link>
                    </div>
                </div>
            </div>
        )
    }
    );
    return (
        <React.Fragment>
            {/* Halmet tag for seo */}
            <Helmet>
                <title> Video Categories - WebTechSofts</title>
                <meta property="og:site_name" content="WebTechSofts" />
            </Helmet>
            {/* end of SEO tag */}
            <section className='h-100'>
                <div className="container py-5 mt-5 h-100">
                    <div className="row">
                        <div className="col-lg-3 hero_detail-box">
                            <h1 className=" pb-4" style={{ fontSize: "40px" }}>Categories Detail</h1>          
                        </div>
                        <div className="col-lg-12 single_video layout_padding">
                            <div className="row">
                                {
                                    single.length > 0 ? single : "no video"
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default SingleVideo