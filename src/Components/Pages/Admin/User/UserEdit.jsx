import axios from 'axios';
import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function UserEdit(props) {
    const token = localStorage.getItem('token')
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [id, setId] = useState(props.id)
    const [name, setName] = useState(props.name);
    const [email, setEmail] = useState(props.email);
    const [role, setRole] = useState(props.Role);
    const [password, setPassword] = useState(props.password);
    const updateData = async (e) => {
        e.preventDefault();
        const formData = {
            name: name,
            email: email,
            role: role,
            password: password
        };
        const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        };
        await axios.patch(`${process.env.REACT_APP_BASE_URL}admin/users/${id}`, formData, { headers });
    }
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

                        <Form.Group className="mb-3" >
                            <Form.Label>Email</Form.Label>
                            <Form.Control id="email" placeholder="Email"
                                value={email} onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Role</Form.Label>
                            <Form.Control id="role" type="text" placeholder="Role"
                                value={role} onChange={(e) => setRole(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control id="password" type="password" placeholder="Password update"
                                value={password} onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>
                        <Modal.Footer style={{ margin: "20px" }}>
                            <Button variant="warning" type="submit" onClick={handleClose}>
                                update
                            </Button>
                        </Modal.Footer>
                    </Form>
                    {/* end of form */}
                </Modal.Body>

            </Modal>

        </React.Fragment>
    )
}
export default UserEdit