import React, {useEffect} from "react";
import {ModalComp} from "./Modal/ModalComp";

export const AddArticle = (props) => {
    useEffect(() => {
    }, [props.article])
    return (
        <React.Fragment>
            <ModalComp
                editTheArticle={props.editTheArticle}
                insertedArticle={props.insertedArticle}
                updatedData={props.updatedData}
                article={props.article}
                title="Add Article" />
        </React.Fragment>

    )
}