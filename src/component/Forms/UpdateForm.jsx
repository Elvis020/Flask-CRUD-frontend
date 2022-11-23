import React from 'react';
import {useState} from 'react';
import ApiService from '../service/ApiService';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function UpdateForm(props) {

    const [title, setTitle] = useState(props.editedArticle.title)
    const [description, setDescription] = useState(props.editedArticle.description)
    const [show, setShow] = useState(props.show);
    const handleClose = () => setShow(props.handleClose);


    const updateArticle = () => {
        ApiService.updateArticle(props.editedArticle.id, {title, description})
            .then(res => {
                props.updatedData(res)
            })
            .catch(err => console.log(err))
        handleClose()
        window.location.reload(true);
    }


    return (
        <>
            (<React.Fragment>
            <div className='m-3'>
                <label htmlFor='updatedTitle' className='form-label'>Title</label>
                <input type="text"
                       onChange={e => setTitle(e.target.value)}
                       value={title}
                       className='form-control'
                       placeholder='Please Enter Title'/>
                <br/>
                <label htmlFor='updatedDescription' className='form-label'>Description</label>
                <textarea
                    rows="5"
                    onChange={e => setDescription(e.target.value)}
                    value={description}
                    className='form-control'
                    placeholder='Please Enter Description'/>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button type="submit" variant="primary" onClick={updateArticle}>Update</Button>
                </Modal.Footer>
            </div>
        </React.Fragment>)
        </>
    )
}

export default UpdateForm