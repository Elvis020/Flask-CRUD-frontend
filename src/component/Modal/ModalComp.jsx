import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "../Forms/Form";


export const ModalComp = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <React.Fragment>
            <Button variant="info" onClick={handleShow}>{props.title}</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add an article</Modal.Title>
                </Modal.Header>
                <Form handleClose={handleClose} article={props.article}/>
            </Modal>
        </React.Fragment>
    );
}