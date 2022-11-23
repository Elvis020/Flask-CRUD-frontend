import React, {useEffect} from "react";
import {ModalComp} from "./Modal/ModalComp";

export const AddArticle = (props) => {
    useEffect(() => {
        props.fetchData()
    })

    return (
        <React.Fragment>
            <ModalComp
                fetchData={props.fetchData}
                editTheArticle={props.editTheArticle}
                insertedArticle={props.insertedArticle}
                updatedData={props.updatedData}
                article={props.article}
                title="Add Article" />
        </React.Fragment>

    )
}