import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function AddCategories() {
    let data = useForm();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const categoriesSub = async (data) => {
        const token = localStorage.getItem('token');
        const formData = {
            name: data.name,
        };
        console.log(formData);
        const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        };

        await axios.post(`${process.env.REACT_APP_BASE_URL}admin/video/category `, formData, { headers })
            .then(response => {
                console.log('Data saved successfully:', response.data);
            })
            .catch(error => {
                console.error('Failed to save data:', error);
            });
    }
    return (
        <React.Fragment>
            <Button onClick={handleShow} variant='warning' style={{ color: "white" }}>
                Add Categories video
            </Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>
                <Modal.Header closeButton style={{ margin: "20px", color: "#082465" }}>
                    <Modal.Title>Categories</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={data.handleSubmit(categoriesSub)}>
                        {/* <Form.Group className="mb-3" id="name">
                            <Form.Select aria-label="Default select example" {...data.register("name", { required: true })}>
                                <option>Categories</option>
                                <option value="One">One</option>
                                <option value="Two">Two</option>
                                <option value="Three">Three</option>
                                <option value="Four">Four</option>
                            </Form.Select>
                        </Form.Group> */}
                        <Form.Group className="mb-3" id="name">
                            <Form.Label>Add Categories</Form.Label>
                            <Form.Control id="name" type="text" placeholder="Video Sub Category" {...data.register("name", { required: true })} />
                        </Form.Group>
                        <Modal.Footer style={{ margin: "20px" }}>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="warning" type="submit" onClick={handleClose}>
                                Save
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    )
}

export default AddCategories
