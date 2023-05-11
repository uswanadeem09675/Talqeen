import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router';
function AddSub() {
    let data = useForm();
    let move = useNavigate();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [itemData, setDataItem] = useState([])
    const token = localStorage.getItem('token');
    const subCategory = async (data) => {
        const formData = {
            name: data.name,
            category_id: data.category_id
        };
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        };
        axios.post(`${process.env.REACT_APP_BASE_URL}admin/video/subcategory`, formData, { headers })
            .then(response => {
                console.log('Data saved successfully:', response.data);
            })
            .catch(error => {
                console.error('Failed to save data:', error);
            });
        move('/subCategories')
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
        setDataItem(resp.data.data)
    }
    useEffect(() => {
        getCategory();
    }, [])
    const display = itemData.map((item) => {
        return (
            <>
                <option value={item.id}>{item.name}</option>
            </>
        )
    })
    return (
        <React.Fragment>
            <Button onClick={handleShow} variant='warning' style={{ color: "white" }}>
                Add Sub Categories video
            </Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton style={{ margin: "20px", color: "#082465" }}>
                    <Modal.Title>Sub Categories</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={data.handleSubmit(subCategory)}>

                        <Form.Group className="mb-3">
                            <Form.Label>Sub Categories</Form.Label>
                            <Form.Control id="name" type="text" placeholder="Sub Categories"  {...data.register("name", { required: true, })} />
                            {data.formState.errors.name && data.formState.errors.name.type == 'required' && <div className="error"> Please enter Sub Categories</div>}
                        </Form.Group>
                        <Form.Group className="mb-3" id="category_id">
                            <Form.Select aria-label="Default select example"
                                {...data.register("category_id", { required: true })}>
                                <option> category_id</option>
                                {display}
                            </Form.Select>
                            {data.formState.errors.category_id && data.formState.errors.category_id.type == 'required' && <div className="error"> Select One option AtLeast</div>}
                        </Form.Group>

                        <Modal.Footer style={{ margin: "20px" }}>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="warning" type='submit'>
                                Save
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>

            </Modal>

        </React.Fragment>
    )
}

export default AddSub
