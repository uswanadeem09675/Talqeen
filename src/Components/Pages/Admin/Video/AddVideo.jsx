import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
function AddVideo() {
    let data = useForm()
    const token = localStorage.getItem('token');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [file, setFile] = useState(null);

    const [Item, setDataItem] = useState([]);
    // const [subCategory, setSubCategory] = useState([])

    // Image sizing defined
    const handleImage = (event) => {
        const selectedFile = event.target.files[0];

        console.log(selectedFile);
        const fileSizeKB = Math.round(selectedFile.size / 1024); // Convert to KB
        const maxSizeKB = 1024; // Maximum file size in KB
        if (fileSizeKB <= maxSizeKB) {
            setFile(selectedFile);
        } else {
            alert('File size exceeds the allowed limit of 1 MB.');
        }
    }
 
    const onSubmit = async (data) => {
        const formData = {
            name: data.name,
            description: data.description,
            url: data.url,
            status: data.status,
            image: data.image[0],
            category_id: data.category_id,
            subcategory_id: data.subcategory_id,

        };
        console.log(data.image[0], "this is fromData")
        const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': ' multipart/form-data  '
        };
        axios.post(`${process.env.REACT_APP_BASE_URL}admin/videos`, formData, { headers })
            .then(response => {
                console.log('Data saved successfully:', response.data);
            })
            .catch(error => {
                console.error('Failed to save data:', error);
            });
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
    // const getSubCategory = async () => {
    //     let reqOptions = {
    //         url: `${process.env.REACT_APP_BASE_URL}admin/video/subcategory`,
    //         method: "GET",
    //         headers: {
    //             'Content-Type': 'application/json ',
    //             'Authorization': 'Bearer ' + token
    //         },
    //     }
    //     let response = await axios.request(reqOptions);
    //     console.log(response.data.data, "subcategory video");
    //     setSubCategory(response.data.data);
    // }
    useEffect(() => {
        getCategory();
        // getSubCategory();
    }, [])
    // const handleChange = (e) => {
    //     image: e.target.files[0]
    // }
    const display = Item.map((item) => {
        let { id, name } = item
        return (
            <>
                <option value={id}>{name}</option>
            </>
        )
    })
    // const displaySub = subCategory.map((item) => {
    //     let { id, name } = item
    //     return (
    //         <>
    //             <option value={id}>{name}</option>
    //         </>
    //     )
    // })
    return (
        <React.Fragment>
            <Button onClick={handleShow} variant='warning' style={{ color: "white" }}>
                Add video
            </Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton style={{ margin: "20px", color: "#082465" }}>
                    <Modal.Title>Video</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={data.handleSubmit(onSubmit)} encType="multipart/form-data">
                        <Form.Group className="mb-3">
                            <Form.Label>Video Name</Form.Label>
                            <Form.Control id="name" type="text" placeholder="Video Name"  {...data.register("name", { required: true, })} />
                            {data.formState.errors.name && data.formState.errors.name.type == 'required' && <div className="error"> Please enter Video Name</div>}
                        </Form.Group>
                        <Form.Group className="mb-3" id="url">
                            <Form.Label>Video Url</Form.Label>
                            <Form.Control type="text" placeholder="Video Url"
                                {...data.register('url', { required: true })} />
                            {data.formState.errors.url && data.formState.errors.url.type == 'required' && <div className="error"> Please enter Correct  Url</div>}
                        </Form.Group>
                        <Form.Group className="mb-3" id="description">
                            <Form.Label>Video Description</Form.Label>
                            <Form.Control as="textarea" rows={3}   {...data.register("description", { required: true })} />
                            {data.formState.errors.description && data.formState.errors.description.type == 'required' && <div className="error"> Please Mention the video Description</div>}
                        </Form.Group>
                        <Form.Group className="mb-3" id="status">
                            <Form.Label>Status</Form.Label>
                            <Form.Control id="status" type="text" placeholder="Status"  {...data.register("status", { required: true, })} />
                            {data.formState.errors.description && data.formState.errors.description.type == 'required' && <div className="error"> Please Mention the video Description</div>}
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Video Image</Form.Label>
                            <Form.Control type="file" placeholder="Video Image" id="image"
                                onChange={handleImage}
                               {...data.register("image", { required: true })}
                            />
                            {data.formState.errors.image && data.formState.errors.image.type == 'required' && <div className="error"> Please upload the Image less then 1MB</div>}
                        </Form.Group>
                        <Form.Group className="mb-3" id="category_id">
                            <Form.Select aria-label="Default select example"
                                {...data.register("category_id", { required: true })} >
                                <option>Categories</option>
                                {display}
                            </Form.Select>
                            {data.formState.errors.category_id && data.formState.errors.category_id.type == 'required' && <div className="error"> Select One option AtLeast</div>}
                        </Form.Group>
                        {/* <Form.Group className="mb-3" id="subcategory_id">
                            <Form.Select aria-label="Default select example"
                                {...data.register("subcategory_id", { required: true })}>
                                <option>Sub Categories</option>
                                {
                                    displaySub
                                }
                                {data.formState.errors.subcategory_id && data.formState.errors.subcategory_id.type == 'required' && <div className="error"> Select One option AtLeast</div>}
                            </Form.Select>
                        </Form.Group> */}
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

export default AddVideo
