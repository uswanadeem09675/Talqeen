import React, { useEffect, useRef, useState } from 'react'
import YouTube from '@u-wave/react-youtube';
import axios from 'axios';
import { useParams } from 'react-router';
let videoIdList = ["AOMpxsiUg2Q", "XM-HJT8_esM", "r2pdwduPS5U"];

export default function Detailspage(props) {
    const { id } = useParams()
    // const [player, setPlayer] = useState(null);
    const [videoId, setVideoId] = useState(videoIdList[0])
    // const post = player.filter((dataItem) => dataItem.id === id);
    // const youtubeID = post.url.split('v=')[1];
    const a = useRef(0);
    const handleEnd = () => {
        setVideoId(videoIdList[++a.current]);
    };
    const onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
    // const onReady = (e) => {
    //     setPlayer(e.target);
    // };
    const [video, setVideo] = useState([]);
    const [url,setUrl]=useState(props.url)
    const token = localStorage.getItem('token')
    const sendData = async () => {
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
        console.log(response.data.data, "from user side ");
    }
    useEffect(() => {
        sendData();
    }, [])
    return (
        <React.Fragment>
            <section className=' layout_padding h-100' >
                <div className="container h-100 py-5 mt-5">
                    <div className="row">
                        <h2 className="main-heading  ">
                            Video Title
                        </h2>
                        <div className="col-lg-12 ">
                            <YouTube video={video}
                                width={'100%'}
                                height={500}
                                onEnd={handleEnd}
                                onReady={onReady}
                                loop
                                showRelatedVideos={false}
                                autoplay
                                controls={false}
                            />
                        </div>
                        <div className="col-lg-5   mt-5">
                            {
                                video.filter((p) => p.id == id).map((item) => {
                                    console.log(item.id, "map id ", id);
                                    return (
                                        <div className="card d-flex m-2" style={{ flexDirection: "row" }} onClick={() => {
                                            setVideo(item.video)
                                        }}>
                                            {/* <img className="w-25" src={`https://www.youtube.com/embed/${url}`} /> */}
                                            <img
                                                src={`https://www.youtube.com/embed/${url}`}
                                                // src={`https://ytimg.googleusercontent.com/vi/${item.url.split('v=')[1]}/sddefault.jpg`}
                                                alt={item.title}
                                            ></img>
                                            <p className='p-2'>{item.name}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section >
        </React.Fragment >
    )
}
