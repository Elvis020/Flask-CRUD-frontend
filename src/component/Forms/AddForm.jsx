import React from 'react';
import {useState, useEffect} from 'react';
import ApiService from '../service/ApiService';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function AddForm(props) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    // For Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(true);


    const timerMain = () => {
        const timer = setInterval(() =>{
            window.location.reload()
        },2)
        return () => clearInterval(timer)
    }

    const insertArticle = () => {
        ApiService.insertArticle({title, description})
            .then(res => {
                props.insertedArticle(res)
            })
            .catch(err => console.log(err))
        timerMain()
        handleClose()

    }

    return (
        <React.Fragment>
            <div className='m-3'>
                <label htmlFor='title' className='form-label'>Title</label>
                <input type="text"
                       id="title"
                       onChange={e => setTitle(e.target.value)}
                       value={title}
                       className='form-control'
                       placeholder='Please Enter Title'/>
                <br/>
                <label htmlFor='description' className='form-label'>Description</label>
                <textarea
                    rows="5"
                    onChange={e => setDescription(e.target.value)}
                    value={description}
                    className='form-control'
                    placeholder='Please Enter Description'/>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button type="submit" variant="primary" onClick={insertArticle}>Add</Button>
                </Modal.Footer>
            </div>
        </React.Fragment>
    )
}

export default AddForm

