import React, {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "../Forms/Form";

export const UpdateModal = (props) => {
    const [show, setShow] = useState(props.show);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        return () => {
            props.fetchData()
        };
    }, [props.fetchData]);


    return (
        <React.Fragment>
            {show ? (
                <>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Update an article</Modal.Title>
                        </Modal.Header>
                        <Form
                            fetchData={props.fetchData}
                            show={props.show}
                            updatedData={props.updatedData}
                            insertedArticle={props.insertedArticle}
                            editTheArticle={props.editTheArticle}
                            handleClose={handleClose}
                            editedArticle={props.editedArticle}/>
                    </Modal>
                </>
            ) : null}

        </React.Fragment>
    );
}