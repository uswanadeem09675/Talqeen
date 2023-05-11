import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router';
function Edit(props) {
    let move = useNavigate();
    const token = localStorage.getItem('token')
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [id, setId] = useState(props.id)
    const [name, setName] = useState(props.name);
    const [url, setUrl] = useState(props.url);
    const [category, setCategory] = useState(props.category_id);
    const [status, setStatus] = useState(props.status);
    const [description, setDescription] = useState(props.description);
    const [showDisply, setshowDisplay] = useState([]);
    const updateData = async (e) => {
        e.preventDefault();
        const formData = {
            name: name,
            url: url,
            status: status,
            category_id: category,
            description: description
        };
        const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        };
        await axios.put(`${process.env.REACT_APP_BASE_URL}admin/videos/${id}`, formData, { headers });
        move('/adminvideo')
        console.log(formData, "video eidit datat");

    }
    const getCategory = async () => {
        let reqOptions1 = {
            url: `${process.env.REACT_APP_BASE_URL}admin/video/category`,
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        }
        let resp = await axios.request(reqOptions1)
        console.log(resp.data.data, "addvideo cate");
        setshowDisplay(resp.data.data)
    }
    useEffect(() => {
        getCategory();
    }, [])
    let displayItem = showDisply.map((item, index) => {
        let { id, name } = item
        return (
            <>
                <option key={index} value={id}>{name}</option>
            </>
        )
    })
    return (
        <React.Fragment>

            <Button class="btn btn-warning ms-2" style={{ color: "#082465 !important", background: "none", border: 'none', padding: "0" }} onClick={handleShow}>
                <i class="fas fa-pen"></i>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update the Video</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* form */}
                    <Form onSubmit={updateData}>
                        <Form.Group className="mb-3">
                            <Form.Label>Video Name</Form.Label>
                            <Form.Control id="name" type="text" placeholder="Video Name"
                                value={name} onChange={(e) => setName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Video Url_ID</Form.Label>
                            <Form.Control id="url" type="text" placeholder="Video Url"
                                value={url} onChange={(e) => setUrl(e.target.value)} />

                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Video Status</Form.Label>
                            <Form.Control id="status" type="text" placeholder="Video Status"
                                value={status} onChange={(e) => setStatus(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Video category_id</Form.Label>
                            <Form.Select aria-label="Default select example" id="category_id" value={category} onChange={(e) => setCategory(e.target.value)}>
                                {displayItem}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Video description </Form.Label>
                            {/* <Form.Control id="description" type="text" placeholder="Description"
                                value={description} onChange={(e) => setDescription(e.target.value)} /> */}
                            <Form.Control as="textarea" rows={3} id="description" type="text" placeholder="Description"
                                value={description} onChange={(e) => setDescription(e.target.value)} />
                        </Form.Group>
                        <Modal.Footer style={{ margin: "20px" }}>
                         <Button variant="warning" type="submit" onClick={handleClose}>
                                Update
                            </Button>
                        </Modal.Footer>
                    </Form>

                    {/* end of form */}
                </Modal.Body>

            </Modal>

        </React.Fragment>
    )
}

export default Edit