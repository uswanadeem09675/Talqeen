import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function View(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [url, setUrl] = useState(props.url)
    return (
        <React.Fragment>
            <Button class="btn btn-warning ms-2" style={{ color: "#082465 !important", background: "none", border: 'none', padding: "0" }} onClick={handleShow}>
                <i class="far fa-eye"></i>
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Video View</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe width="470" height="315" src={`https://www.youtube.com/embed/${url}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen value={url} ></iframe>
                </Modal.Body>

            </Modal>
        </React.Fragment>
    )
}

export default View