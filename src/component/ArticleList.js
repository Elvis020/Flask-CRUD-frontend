import React, {useState} from "react";
import ApiService from "./service/ApiService";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faTrashCan} from "@fortawesome/free-solid-svg-icons";
import {UpdateModal} from "./Modal/UpdateModal";

export default function ArticleList(props) {
  const [openEdit,setOpenEdit] = useState(false);

  const editArticle = (article) => {
    props.editTheArticle(article);
    setOpenEdit(!openEdit)
  };
  const deletedArticle = (article) => {
    ApiService.DeleteArticle(article.id).then(() => props.deleteArticle(article))
  };




  return (
      <React.Fragment>
        {props.data && props.data
            .map(article => {
              return (
                  <React.Fragment key={article.id}>
                    <div className="col articleBg">
                      <h3 className="articleText">{article.title}</h3>
                      <p className="articleText description">{article.description}</p>
                      <div className="iconsWrap">
                        <span className="edit-article"
                              onClick={() => editArticle(article)}
                              title="Edit"><FontAwesomeIcon icon={faPen}/></span>
                        <span className="delete-article"
                              onClick={() => deletedArticle(article)}
                              title="Delete"><FontAwesomeIcon icon={faTrashCan}/></span>
                      </div>
                    </div>
                  </React.Fragment>
              )
            })
        })
          {openEdit && (
              <React.Fragment>
                  <UpdateModal
                      fetchData={props.fetchData}
                      show={true}
                      editTheArticle={props.editTheArticle}
                      insertedArticle={props.insertedArticle}
                      updatedData={props.updatedData}
                      editedArticle={props.editedArticle}
                      title="Update Article" />
              </React.Fragment>
          )}
      </React.Fragment>
  );
}
