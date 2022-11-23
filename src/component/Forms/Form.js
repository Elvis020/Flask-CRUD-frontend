import React from 'react';
import {useState, useEffect} from 'react';
import UpdateForm from "./UpdateForm";
import AddForm from "./AddForm";

function Form(props) {

    // For Modal
    const [show, setShow] = useState(props.show);
    const handleClose = () => setShow(props.handleClose);


    useEffect(() => {
        props.fetchData()
    }, [props.article, props.insertedArticle])


    return (
        <React.Fragment> {props.show && props.editedArticle ?
            <UpdateForm
                fetchData={props.fetchData}
                updatedData={props.updatedData}
                show={props.show}
                handleClose={props.handleClose}
                editedArticle={props.editedArticle} />
            :
            <AddForm
                show={props.show}
                handleClose={props.handleClose}
                fetchData={props.fetchData}
                updatedData={props.updatedData}
                insertedArticle={props.insertedArticle}/>
        }
        </React.Fragment>
    )
}

export default Form